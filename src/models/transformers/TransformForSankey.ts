
import {ScoreComponent} from "../ScoreComponent";
import * as regression from 'regression';
import {SankeyScoreComponentsData} from "../../types/SankeyScoreComponentsData";

function addNodesAndLinksRecursively(scoreComponent: ScoreComponent, sankeyData: SankeyScoreComponentsData) {
    sankeyData.nodes.push({
        name: scoreComponent.label,
        nodeId: scoreComponent.id,
        value: scoreComponent.result
    });

    scoreComponent.children.forEach(child => {
       sankeyData.links.push({
           source: scoreComponent.id,
           target: child.id,
           value: child.result
       });
       addNodesAndLinksRecursively(child, sankeyData);
   });
}

export default function transformForSankey(scoreComponent: ScoreComponent): SankeyScoreComponentsData {
    const data: SankeyScoreComponentsData = {
        nodes: [],
        links: []
    };

    addNodesAndLinksRecursively(scoreComponent, data);
    return data;
}

export function getPointsForRegression(data: SankeyScoreComponentsData): number[] {
    return data.links.map(l => l.value).sort((a, b) => a - b);
}

interface Point {
    x: number,
    y: number
}

interface ExponentialRegressionResult {
    a: number,
    b: number,
    curvePoints: Point[],
    inverseFn: { (y: number): number }
}

export function exponentialRegression(regressionPoints: number[]): ExponentialRegressionResult {
    const regressionResult = regression.exponential(regressionPoints.map((d, i) => [i, d]));
    const a = regressionResult.equation[1];
    const b = regressionResult.equation[0];

    return {
        a,
        b,
        curvePoints: regressionResult.points.map(p => ({x: p[0], y: p[1]})),
        inverseFn: function(y: number): number {
            return (1/a)*(Math.log(y/b));
        }
    }
}

export function interpolate(data: SankeyScoreComponentsData, interpolationFn: { (y: number): number }) {
    data.links.forEach(l => l.value = interpolationFn(l.value));
}