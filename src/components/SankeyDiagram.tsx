
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

    private graphPadding = { top: 50, right: 50, bottom: 50, left: 50 };

    componentDidMount() {
        this.graphDataCalculated = true;
        this.forceUpdate();
    }

    setSvgElement = (el: SVGElement) => {
        this.svgElement = el;
    };

    render() {

        if (this.graphDataCalculated) {
            const {width, height} = d3.select(this.svgElement).node().getBoundingClientRect();
            const sankeyLayout = d3Sankey.sankey<SankeyGraphNodeExtra, SankeyGraphLinkExtra>()
                .nodeId(node => node.nodeId)
                .nodeAlign(d3Sankey.sankeyLeft)
                .nodeWidth(10)
                .nodePadding(50)
                .extent([[1, 1], [width - (this.graphPadding.left + this.graphPadding.right), height - (this.graphPadding.top + this.graphPadding.bottom)]]);
            sankeyLayout(this.props.graphData);
            console.log("after layout");
            console.log(this.props.graphData);
        }


        return <div>
            <svg ref={this.setSvgElement} width={800} height={800} textRendering="geometricPrecision" onClick={() => console.log(this.props.graphData)}>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#05a" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#0a5" stopOpacity="1.0" />
                    </linearGradient>
                </defs>
                <g transform={"translate(" + this.graphPadding.left + ", " + this.graphPadding.top + ")"}>
                    <g key="links">
                        {this.graphDataCalculated && this.getSankeyLinks()}
                    </g>
                    <g key="nodes">
                        {this.graphDataCalculated && this.getSankeyNodes()}
                    </g>
                    <g key="link-labels">
                        {this.graphDataCalculated && this.getSankeyLinksLabels()}}
                    </g>
                    <g key="node-labels">
                        {this.graphDataCalculated && this.getSankeyNodeLabels()}
                    </g>
                </g>
            </svg>
        </div>
    }

    getSankeyNodes = () => this.props.graphData == null ? null : this.props.graphData.nodes.map(n =>
        <rect key={n.index} fill="blue" height={n.y1 - n.y0} width={n.x1 - n.x0} x={n.x0} y={n.y0} />);

    getSankeyLinks = () => {
        if (this.props.graphData == null)
            return null;
        const nodes: JSX.Element[] = [];
        this.props.graphData.links.forEach(l => {
            nodes.push(<path key={l.index} d={d3Sankey.sankeyLinkHorizontal()(l)} stroke="darkgreen" fill="none" strokeWidth={Math.max(0.1, l.width)} />);
            if (l.secondaryValue != null && l.secondaryValue < l.value) {
                nodes.push(<path key={l.index + "_2"} d={d3Sankey.sankeyLinkHorizontal()(l)} stroke="lightgreen" fill="none" strokeWidth={Math.max(0.1,  l.width / l.value * l.secondaryValue)} />);
            }
        });
        return nodes;
    };


    getSankeyLinksLabels = () => {
        return this.props.graphData == null ? null : this.props.graphData.links.map(l => {
            const width = 100;
            const mergedTarget = (l.target as any);
            return <svg key={l.index} x={(l.target as any).x0 - (width + 10)} y={l.y1 - 10} width={width} height={20}>
                    <rect fill="black" fillOpacity={0.3} rx={5} ry={5} width="100%" height="100%" />
                    <text x={width / 2} y={15} fill="white" fontWeight="bold" fontSize={12} offset={0} textAnchor="middle" fontFamily="Verdana">{mergedTarget.originalValue.toFixed(3)}, {mergedTarget.originalSecondaryValue.toFixed(3)}</text>
                </svg>

        })
    };

    getSankeyNodeLabels = () => {
        return this.props.graphData == null ? null : this.props.graphData.nodes.map(n => {
            const labelWidth = 100;
            const labelYOffset = 30;
            const nodeCenter = (n.x1 - n.x0) / 2;
            const labelCenter = labelWidth / 2;
            const labelXOffset = labelCenter - nodeCenter;
            const labelX = n.x0 - labelXOffset;

            return <svg key={`${n.name}_${n.nodeId}_label`} x={labelX} y={n.y0 - labelYOffset} width={labelWidth} height={20}>
                <rect fill="black" rx={5} ry={5} width="100%" height="100%" />
                <text x={labelWidth / 2} y={15} fill="white" fontWeight="bold" fontSize={12} offset={0} textAnchor="middle" fontFamily="Verdana">{n.name}</text>
            </svg>


        })
    };

}