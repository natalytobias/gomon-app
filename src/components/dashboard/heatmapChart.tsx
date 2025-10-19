import React, { useState, useEffect } from 'react';
import type { EChartsOption } from 'echarts';
import { GomService } from '../../services/gomService'; 
import ReactECharts from './reactECharts';

// Tipagem da Resposta da API
interface HeatmapApiResponse {
    xAxisLabels: string[];
    yAxisLabels: string[];
    data: [number, number, number][]; // [indice_x, indice_y, valor]
    valueKey: string;
}

const HeatmapChart: React.FC = () => {
    const [apiData, setApiData] = useState<HeatmapApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await GomService.DadosHeatmap();
                // A API agora retorna os dados PRONTOS no response.data
                setApiData(response.data as HeatmapApiResponse); 
                setIsLoading(false);
            } catch (err) {
                setError("Falha ao carregar dados do heatmap.");
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    if (isLoading) {
        return <div style={{ height: '400px', textAlign: 'center' }}>Carregando dados do Heatmap...</div>;
    }

    if (error || !apiData) {
        return <div style={{ height: '400px', color: 'red', textAlign: 'center' }}>{error || "Nenhum dado encontrado."}</div>;
    }
    
    
    const heatmapOption: EChartsOption = {
        title: { text: `Distribuição de Valores ${apiData.valueKey} por Variável e Nível`, left: 'center' },
        tooltip: {
            position: 'top',
            formatter: function(params: any) {
                
                const level = apiData.xAxisLabels[params.value[0]];
                const variable = apiData.yAxisLabels[params.value[1]];
                const value = params.value[2];
                return `Variável: ${variable} <br/>Nível: ${level} <br/>${apiData.valueKey}: ${value.toFixed(4)}`;
            }
        },
        grid: { height: '60%', top: '15%', left: '15%', right: '5%', bottom: '5%' },
        xAxis: {
            type: 'category',
            data: apiData.xAxisLabels, 
            splitArea: { show: true }
        },
        yAxis: {
            type: 'category',
            data: apiData.yAxisLabels, 
            splitArea: { show: true }
        },
        visualMap: {
            min: 0,
            max: 1.0, 
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '1%'
        },
        series: [{
            name: `Valor ${apiData.valueKey}`,
            type: 'heatmap',
            data: apiData.data, 
            label: { show: true, fontSize: 9, color: '#000' },
            
        }]
    };

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ReactECharts option={heatmapOption} style={{ height: '100%' }} />
        </div>
    );
};

export default HeatmapChart;