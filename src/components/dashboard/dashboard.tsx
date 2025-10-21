import React from 'react';
import HeatmapChart from './heatmapChart';

const Dashboard: React.FC = () => {
  
  return (
    <div style={{ 
        padding: '20px', 
        backgroundColor: '#f4f7f9', // Cor de fundo suave para o dashboard
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif' 
    }}>
      
      <header style={{ borderBottom: '2px solid #ddd', marginBottom: '40px', paddingBottom: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#004d99' }}>
          Painel de Análise GOM
        </h1>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Visualização da distribuição de fatores K por Variável e Nível.
        </p>
      </header>

      {/* ---------------------------------------------------- */}
      {/* CARD 1: Gráfico de Calor (Heatmap) */}
      {/* ---------------------------------------------------- */}
      <section style={{ 
          marginBottom: '30px',
          backgroundColor: '#fff', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)' // Sombra suave para destacar o card
      }}>
        <h2 style={{ color: '#333', borderLeft: '4px solid #00aaff', paddingLeft: '10px', marginBottom: '20px' }}>
          Análise de Densidade (Heatmap)
        </h2>
        
        {/* Renderiza o componente que busca e exibe o gráfico */}
        <HeatmapChart />
      
      </section>

      {/* ---------------------------------------------------- */}
      {/* CARD 2: Área para Futuros Gráficos (Exemplo) */}
      {/* ---------------------------------------------------- */}
      <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
      }}>
        
        <div style={{ 
            backgroundColor: '#fff', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)' 
        }}>
          <h2 style={{ color: '#333' }}>Gráfico de Barras (Futuro)</h2>
          <p style={{ color: '#666' }}>Implemente um componente BarChart.tsx aqui.</p>
          {/* <BarChart data={...} /> */}
        </div>

        <div style={{ 
            backgroundColor: '#fff', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)' 
        }}>
          <h2 style={{ color: '#333' }}>KPIs Principais (Futuro)</h2>
          <p style={{ color: '#666' }}>Pode ser usado para métricas de resumo, como média e desvio padrão.</p>
          {/* <div>KPIs...</div> */}
        </div>
      </section>
      
    </div>
  );
};

export default Dashboard;