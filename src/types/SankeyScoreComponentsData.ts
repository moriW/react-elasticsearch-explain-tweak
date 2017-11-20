
import {SankeyGraph, SankeyLink, SankeyNode} from "d3-sankey";
import {BaseScoreComponent} from "../models/BaseScoreComponent";

export interface SankeyGraphNodeExtra {
    name: string;
    nodeId: number;
    value: number;
    originalValue: number;
    originalSecondaryValue: number;
    scoreComponent: BaseScoreComponent
}

export interface SankeyGraphLinkExtra {
    source: number;
    target: number;
    secondaryValue: number;
}

export type SankeyScoreComponentsData = SankeyGraph<SankeyGraphNodeExtra, SankeyGraphLinkExtra>;