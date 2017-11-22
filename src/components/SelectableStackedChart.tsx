
import * as React from "react";
import * as d3 from "d3";
import Point from "../types/Point";
import {ScaleLinear} from "d3-scale";

interface SelectableStackedChartProps {
    points: Point[];
    width: number,
    height: number
}

export class SelectableStackedChart extends React.Component<SelectableStackedChartProps, {}> {

    private calculated = false;

    private svgElement: SVGElement = null;

    private axisBottomElement: SVGGElement = null;

    private xRange: ScaleLinear<number, number> = null;

    private readonly margin = { top: 20, right: 20, bottom: 20, left: 20 };

    private chartSize = null;

    componentWillReceiveProps(newProps: SelectableStackedChartProps) {

    }

    componentDidMount() {
        this.xRange = d3.scaleLinear().range([0, this.chartSize.width]);
        d3.select(this.axisBottomElement).call(d3.axisBottom(this.xRange));
    }

    setSvgElementRef = (ref: SVGElement) => {
        this.svgElement = ref;
    };

    render() {

        this.chartSize = { width: this.props.width - this.margin.left - this.margin.right, height: this.props.height - this.margin.top - this.margin.top }


        //const axisLine = d3.line<Point>().x(p => p.x).y(p => p.y);

        return <div>
            <svg ref={this.setSvgElementRef} width={this.props.width} height={this.props.height}>
                <g transform={`translate(${this.margin.top}, ${this.margin.left})`}>
                    <g className="axis-bottom" key="axis-bottom" transform={`translate(0, ${this.chartSize.height})`} ref={el => this.axisBottomElement = el} />
                </g>
            </svg>
        </div>
    }



}