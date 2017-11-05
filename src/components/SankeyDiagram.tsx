
import * as React from "react";
import * as d3 from "d3";
import * as d3Sankey from "d3-sankey";
import {SankeyGraph, SankeyLayout, SankeyLink, SankeyNode, SankeyNodeMinimal} from "d3-sankey";
import {SankeyGraphLinkExtra, SankeyGraphNodeExtra, SankeyScoreComponentsData} from "../types/SankeyScoreComponentsData";

export class SankeyDiagram extends React.Component<{}, {}> {

    private svgElement: SVGElement = null;

    private sankeyGraphData: SankeyScoreComponentsData = null;

    componentDidMount() {

        this.sankeyGraphData = {
            "nodes": [
                {"name": "node0", nodeId: 0},
                {"name": "node1", nodeId: 1},
                {"name": "node2", nodeId: 2},
                {"name": "node3", nodeId: 3},
                {"name": "node4", nodeId: 4},
            ],
            "links": [
                {"source": 0, "target": 2, "value": 2},
                {"source": 1, "target": 2, "value": 2},
                {"source": 1, "target": 3, "value": 2},
                {"source": 0, "target": 4, "value": 2},
                {"source": 2, "target": 3, "value": 2},
                {"source": 2, "target": 4, "value": 2},
                {"source": 3, "target": 4, "value": 4}
            ]
        };

        const {width, height} = d3.select(this.svgElement).node().getBoundingClientRect();

        const sankeyLayout = d3Sankey.sankey<SankeyGraphNodeExtra, SankeyGraphLinkExtra>()
            .nodeId(node => node.nodeId)
            .nodeWidth(36)
            .nodePadding(100)
            .extent([[1, 1], [width - 1, height - 6]]);

        sankeyLayout(this.sankeyGraphData);
        this.forceUpdate();
    }

    setSvgElement = (el: SVGElement) => {
        this.svgElement = el;
    };

    render() {
        return <div>
            <svg ref={this.setSvgElement} width={800} height={500}>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#05a" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#0a5" stopOpacity="1.0" />
                    </linearGradient>
                </defs>
                <g>
                    {this.getSankeyLinks()}
                </g>
                <g>
                    {this.getSankeyNodes()}
                </g>
            </svg>
        </div>
    }

    getSankeyNodes = () => this.sankeyGraphData == null ? null : this.sankeyGraphData.nodes.map(n =>
        <rect key={n.index} fill="blue" height={n.y1 - n.y0} width={n.x1 - n.x0} x={n.x0} y={n.y0} />);


    getSankeyLinks = () => this.sankeyGraphData == null ? null : this.sankeyGraphData.links.map(l =>
        <path key={l.index} d={d3Sankey.sankeyLinkHorizontal()(l)} stroke="url(#linear)" fill="none" strokeWidth={Math.max(1, l.width)} />);


}