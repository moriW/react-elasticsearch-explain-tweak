
import {SankeyGraph, SankeyLink, SankeyNode} from "d3-sankey";

export interface SankeyGraphNodeExtra {
    name: string;
    nodeId: number;
    value: number;
}

export interface SankeyGraphLinkExtra {
    source: number;
    target: number;
    value: number;
}

export type SankeyScoreComponentsData = SankeyGraph<SankeyGraphNodeExtra, SankeyGraphLinkExtra>;