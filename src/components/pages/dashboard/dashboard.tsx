import React from "react";
import SunburstChart from "./Sunburst";
import TabelaResultados from '../../tableLmfr';
import MatrixScatterChart from "./matrixScatter";

interface DashboardProps {
  perfil_k: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ perfil_k }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f4f7f9",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        maxWidth: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          borderBottom: "2px solid #ddd",
          marginBottom: "40px",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#004d99" }}>
          Painel de Análise GOM
        </h1>
        <p style={{ textAlign: "center", color: "#666" }}>
          Visualização da distribuição de fatores K por Variável e Nível.
        </p>
      </header>

      {/* Tabela LMFR */}
      <section style={{ marginBottom: "40px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <TabelaResultados />
        </div>
      </section>

      {/* Sunburst Chart */}
      <section style={{ marginBottom: "40px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ 
            color: "#181966ff", 
            marginBottom: "20px",
            fontSize: "28px", 
            fontWeight: "bold"
          }}>
            Gráfico Sunburst
          </h1>
          <div style={{ height: "500px", width: "100%" }}>
            <SunburstChart num_k={perfil_k} />
          </div>
        </div>
      </section>

      {/* Matrix Scatter Charts */}
      <section style={{ marginBottom: "40px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ 
            color: "#181966ff", 
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            Gráficos Matrix Scatter
          </h1>
          
          {/* Renderiza gráficos verticalmente */}
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "100%"
          }}>
            {Array.from({ length: perfil_k }, (_, index) => {
              const currentK = index + 1;
              return (
                <div 
                  key={currentK}
                  style={{ 
                    backgroundColor: "#fafafa",
                    padding: "30px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0"
                  }}
                >
                  {/* <h2 style={{ 
                    color: "#333", 
                    marginBottom: "20px",
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "center"
                  }}>
                    Matriz K = {currentK}
                  </h2> */}
                  {/* <p style={{
                    color: "#666",
                    fontSize: "14px",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}>
                    Distribuição das características do perfil {currentK}
                  </p> */}
                  <div style={{ height: "700px", width: "100%" }}>
                    <MatrixScatterChart num_k={currentK} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;