
import * as React from "react";
import * as d3 from "d3";
import Point from "../types/Point";
import {ScaleLinear} from "d3-scale";

interface SelectableStackedChartProps {
    points: { [datasetLabel: string]: Point[] };
    width: number,
    height: number
}

export class SelectableStackedChart extends React.Component<SelectableStackedChartProps, {}> {

    private calculated = false;

    private svgElement: SVGElement = null;

    private axisBottomElement: SVGGElement = null;
    private axisLeftElement: SVGGElement = null;

    private xRange: ScaleLinear<number, number> = null;
    private yRange: ScaleLinear<number, number> = null;

    private readonly margin = { top: 20, right: 20, bottom: 20, left: 50 };

    private chartSize = null;

    private allXValues: number[] = [];

    componentWillReceiveProps(newProps: SelectableStackedChartProps) {

    }

    componentDidMount() {
        this.xRange = d3.scaleLinear().range([0, this.chartSize.width]).domain([this.getMinXValue(), this.getMaxXValue()]).nice();
        this.yRange = d3.scaleLinear().range([this.chartSize.height, 0]).domain([this.getMinYValue(), this.getMaxYValue()]).nice();
        d3.select(this.axisBottomElement).call(d3.axisBottom(this.xRange));
        d3.select(this.axisLeftElement).call(d3.axisLeft(this.yRange));
        this.calculated = true;

        let allXValuesSet = new Set<number>();
        this.getAllPoints().forEach(points => {
            points.forEach(point => allXValuesSet.add(point.x));
        });
        this.allXValues = Array.from(allXValuesSet).sort((a, b) => a - b);

        this.forceUpdate();
    }

    private getMaxXValue() {
        return Math.max.apply(Math, this.getAllPoints().map(points => Math.max.apply(Math, points.map(p => p.x))));
    }

    private getMinXValue() {
        return Math.min.apply(Math, this.getAllPoints().map(points => Math.min.apply(Math, points.map(p => p.x))));
    }

    private getMaxYValue() {
        return Math.max.apply(Math, this.getAllPoints().map(points => Math.max.apply(Math, points.map(p => p.y))));
    }

    private getMinYValue() {
        return Math.min.apply(Math, this.getAllPoints().map(points => Math.min.apply(Math, points.map(p => p.y))));
    }

    private getAllPoints(): Point[][] {
        return Object.keys(this.props.points).map(key => this.props.points[key])
    }

    setSvgElementRef = (ref: SVGElement) => {
        this.svgElement = ref;
    };

    private capturingMouse = false;

    private startValue: number = null;
    private endValue: number = null;

    chartMouseMoveHandler = (e: React.MouseEvent<SVGGElement>) => {
        if (!this.capturingMouse)
            return;
        const point = this.getRelativePoint(e);
        this.endValue = this.xRange.invert(point.x);
        this.forceUpdate();
    };

    chartMouseDownHandler = (e: React.MouseEvent<SVGGElement>) => {
        const point = this.getRelativePoint(e);
        this.startValue = this.xRange.invert(point.x);
        this.endValue = null;
        this.capturingMouse = true;
        this.forceUpdate();
    };

    chartMouseUpHandler = (e: React.MouseEvent<SVGGElement>) => {
        this.capturingMouse = false;
        this.forceUpdate();
    };

    private getRelativePoint(e: React.MouseEvent<SVGGElement>): Point {
        let mouseX = e.nativeEvent.offsetX - this.margin.left;
        let dataPointIndex = d3.bisectLeft(this.allXValues, this.xRange.invert(mouseX), 1);
        return { x: this.xRange(this.allXValues[dataPointIndex]), y: e.nativeEvent.offsetY - this.margin.top };
    }

    render() {

        this.chartSize = { width: this.props.width - this.margin.left - this.margin.right, height: this.props.height - this.margin.top - this.margin.bottom };

        let selectionRect = null;
        if (this.startValue != null && this.endValue != null) {
            let x1 = this.xRange(this.startValue);
            let x2 = this.xRange(this.endValue);
            selectionRect = <rect height={this.chartSize.height} x={x1} y={0} width={x2 - x1} fill="lightgreen" fillOpacity={0.5} />
        }

        let chartAreas = [];
        if (this.calculated) {
            // TODO: SORT AREAS BY TOTAL SUM OF VALUES
            chartAreas = this.getAllPoints().map(this.getChartArea)
        }


        return <div>
            <svg ref={this.setSvgElementRef} width={this.props.width} height={this.props.height} onMouseUp={this.chartMouseUpHandler}>
                <g transform={`translate(${this.margin.left}, ${this.margin.top})`}>
                    <g key="chart-areas">{chartAreas}</g>
                    <rect onMouseDown={this.chartMouseDownHandler}  onMouseMove={this.chartMouseMoveHandler} fill="transparent" width={this.chartSize.width} height={this.chartSize.height} />
                    {selectionRect}
                    <g className="axis-left" key="axis-left" transform={`translate(0, 0)`} ref={el => this.axisLeftElement = el} />
                    <g className="axis-bottom" key="axis-bottom" transform={`translate(0, ${this.chartSize.height})`} ref={el => this.axisBottomElement = el} />
                </g>
            </svg>
        </div>
    }

    private getChartArea = (points: Point[], index: number) => {
        let linePoints: Point[] = points.map(p => ({ x: this.xRange(p.x), y: this.yRange(p.y)}));

        let area = d3.area<Point>().x(p => p.x).y(p => p.y).y1(this.yRange(this.yRange.domain()[0])).curve(d3.curveBasis)(linePoints);
        let line = d3.line<Point>().x(p => p.x).y(p => p.y).curve(d3.curveBasis)(linePoints);

        return <g key={index}>
            <path d={area} stroke="none" fill="purple" fillOpacity={0.5} />
            <path d={line} stroke="purple" fill="none" strokeWidth={2} />
        </g>;
    }



}