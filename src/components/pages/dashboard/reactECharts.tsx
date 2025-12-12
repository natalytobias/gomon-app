import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

import * as echarts from "echarts/core";
import type { EChartsOption, SetOptionOpts } from "echarts";
import type { CSSProperties } from "react";

import { CanvasRenderer } from "echarts/renderers";
import { HeatmapChart, SunburstChart, ScatterChart } from "echarts/charts";

import { LabelLayout, UniversalTransition } from "echarts/features";

import {
  GridComponent,
  VisualMapComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";

echarts.use([
  CanvasRenderer,
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  GridComponent,
  VisualMapComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  LabelLayout,
  UniversalTransition,
]);

interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
}

const ReactECharts = forwardRef(
  ({ option, style, settings }: ReactEChartsProps, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<any>(null);

    useEffect(() => {
      chartInstanceRef.current = echarts.init(chartRef.current!);

      const handleResize = () => {
        chartInstanceRef.current?.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        chartInstanceRef.current?.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      chartInstanceRef.current?.setOption(option, settings);
    }, [option, settings]);

    // 🔥 EXPOREMOS O MÉTODO getInstance() PARA FAZER DOWNLOAD DE IMAGEM
    useImperativeHandle(ref, () => ({
      getInstance: () => chartInstanceRef.current,
    }));

    return (
      <div
        ref={chartRef}
        style={{ width: "100%", height: "300px", ...style }}
      />
    );
  }
);

export default ReactECharts;
