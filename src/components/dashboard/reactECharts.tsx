import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import type { EChartsOption, SetOptionOpts } from 'echarts'; 
import type { CSSProperties } from 'react';

// --- Importações Modulares (Ajuste conforme os gráficos que você for usar) ---
// Renderizador
import { CanvasRenderer } from 'echarts/renderers';

// Gráficos (Heatmap é necessário para o seu caso)
import { HeatmapChart } from 'echarts/charts';

// Componentes (Grid, VisualMap, Tooltip, Title são usados no Heatmap)
import { 
    GridComponent, 
    VisualMapComponent, 
    TooltipComponent,
    TitleComponent,
    LegendComponent // Incluído para futuros gráficos
} from 'echarts/components';

// Registra os componentes necessários
echarts.use([
  CanvasRenderer,
  HeatmapChart,
  GridComponent,
  VisualMapComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
]);

// --- Definição das Props e do Componente ---

interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
}

const ReactECharts: React.FC<ReactEChartsProps> = ({ option, style, settings }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicialização do Gráfico
    const chartInstance = echarts.init(chartRef.current!);
    
    // Handler para redimensionamento
    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    // Limpeza ao desmontar
    return () => {
      chartInstance.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    // Atualiza a opção do gráfico sempre que a prop 'option' mudar
    if (chartRef.current) {
        const chartInstance = echarts.getInstanceByDom(chartRef.current);
        // setOption é seguro e atualiza o gráfico
        chartInstance?.setOption(option, settings);
    }
  }, [option, settings]); 

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '300px', ...style }} 
    />
  );
};

export default ReactECharts;