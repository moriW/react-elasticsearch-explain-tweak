
import * as React from "react";
import * as d3 from "d3";
import * as d3Sankey from "d3-sankey";
import {SankeyGraphLinkExtra, SankeyGraphNodeExtra, SankeyScoreComponentsData} from "../types/SankeyScoreComponentsData";

interface SankeyDiagramProps {
    graphData: SankeyScoreComponentsData
}

export class SankeyDiagram extends React.Component<SankeyDiagramProps, {}> {

    private svgElement: SVGElement = null;

    private graphDataCalculated = false;

    componentDidMount() {

        const {width, height} = d3.select(this.svgElement).node().getBoundingClientRect();

        const sankeyLayout = d3Sankey.sankey<SankeyGraphNodeExtra, SankeyGraphLinkExtra>()
            .nodeId(node => node.nodeId)
            .nodeAlign(d3Sankey.sankeyLeft)
            .nodeWidth(10)
            .nodePadding(35)
            .extent([[1, 1], [width - 1, height - 6]]);

        sankeyLayout(this.props.graphData);
        this.graphDataCalculated = true;
        this.forceUpdate();
    }

    setSvgElement = (el: SVGElement) => {
        this.svgElement = el;
    };

    render() {
        return <div>
            <svg ref={this.setSvgElement} width={800} height={500} textRendering="geometricPrecision">
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#05a" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#0a5" stopOpacity="1.0" />
                    </linearGradient>
                </defs>

                <text x={50} y={50} color="blue" fontSize={15} offset={0}>aaaaa</text>

                <g>
                    {this.graphDataCalculated && this.getSankeyLinks()}
                </g>
                <g>
                    {this.graphDataCalculated && this.getSankeyNodes()}
                </g>
                <g>
                    {this.graphDataCalculated && this.getSankeyLinksLabels()}}
                </g>
            </svg>
        </div>
    }

    getSankeyNodes = () => this.props.graphData == null ? null : this.props.graphData.nodes.map(n =>
        <rect key={n.index} fill="blue" height={n.y1 - n.y0} width={n.x1 - n.x0} x={n.x0} y={n.y0} />);

    getSankeyLinks = () => this.props.graphData == null ? null : this.props.graphData.links.map(l =>
        <path key={l.index} d={d3Sankey.sankeyLinkHorizontal()(l)} stroke="url(#linear)" fill="none" strokeWidth={Math.max(1, l.width)} />);

    getSankeyLinksLabels = () => {
        return this.props.graphData == null ? null : this.props.graphData.links.map(l => {
            const width = 120;
            return <svg key={l.index} x={(l.target as any).x0 - (width + 10)} y={l.y1 - 10} width={width} height={20}>
                    <rect fill="red" rx={5} ry={5} width="100%" height="100%" />
                    <text x={width / 2} y={15} color="blue" fontSize={10} offset={0} textAnchor="middle" fontFamily="verdana">{(l.target as any).originalValue.toFixed(3)}</text>
                </svg>

        })
    } ;

}