
import * as regression from 'regression';
import {SankeyScoreComponentsData} from "../../types/SankeyScoreComponentsData";
import {BaseScoreComponent} from "../BaseScoreComponent";
import {MergedScoreComponent} from "../MergeScoreModels";

function addNodesAndLinksRecursively(scoreComponent: BaseScoreComponent, sankeyData: SankeyScoreComponentsData) {

    sankeyData.nodes.push({
        name: scoreComponent.label,
        nodeId: scoreComponent.id,
        value: scoreComponent.result,
        originalValue: scoreComponent.result,
        originalSecondaryValue: Math.min((scoreComponent as MergedScoreComponent).second.result, (scoreComponent as MergedScoreComponent).first.result),
        scoreComponent: scoreComponent
    });

    scoreComponent.children.forEach(child => {
        const mergedChild = child as MergedScoreComponent;
        sankeyData.links.push({
           source: scoreComponent.id,
           target: child.id,
           value: mergedChild.result,
           secondaryValue: Math.min(mergedChild.first.result, mergedChild.second.result)
        });
        addNodesAndLinksRecursively(child, sankeyData);
   });
}

export default function transformForSankey(scoreComponent: BaseScoreComponent): SankeyScoreComponentsData {
    const data: SankeyScoreComponentsData = {
        nodes: [],
        links: []
    };

    addNodesAndLinksRecursively(scoreComponent, data);
    return data;
}

function filterUnique(val: number, index: number, array: number[]) {
    return array.indexOf(val) == index
}

export function getPointsForRegression(data: SankeyScoreComponentsData): number[] {
    return data.links.map(l => l.value).filter(filterUnique).sort((a, b) => a - b);
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

export function exponentialRegression(): ExponentialRegressionResult {
    /*const regressionResult = regression.exponential(regressionPoints.map((d, i) => [i, d]));
    const a = regressionResult.equation[1];
    const b = regressionResult.equation[0];*/

    return {
        a: null,
        b: null,
        curvePoints: null,
        inverseFn: function(y: number): number {
            //return (1/a)*(Math.log(y/b));
            return Math.max(Math.log(Math.pow(y, 2)), 0.5);
        }
    }
}

export function interpolate(data: SankeyScoreComponentsData, interpolationFn: { (y: number): number }) {
    data.links.forEach(l => {
        l.value = interpolationFn(l.value);
        l.secondaryValue = interpolationFn(l.secondaryValue);
    });
}