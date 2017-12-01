import * as React from "react";
import {SankeyDiagram} from "./SankeyDiagram";
import {
    default as transformForSankey,
    getPointsForRegression, interpolate, exponentialRegression
} from "../models/transformers/TransformForSankey";
import {DelegatingParser} from "../models/parsers/DelegatingParser";
import {getAllParsers} from "../models/parsers/AllParsers";
import multipleHitsSample from "../samples/MultipleHitsSample";
import InterpolationCurve from "./InterpolationCurve";
import {mergeScoreComponents} from "../models/MergeScoreModels";
import Point from "../types/Point";
import {ParsingContext} from "../models/parsers/ParsingContext";
import {SelectableStackedChart} from "./SelectableStackedChart";

const regressionResult = exponentialRegression();

const parsedMultipleHits = multipleHitsSample.hits.hits.map(h => {
    const parsingContext = new ParsingContext();
    const parsedComponent = DelegatingParser.fromAllParsers().parse(h._explanation, getAllParsers(), parsingContext);
    return {
        parsedComponent,
        subDataSets: parsingContext.subDataSets
    }
});

const allHitsPoints: { [propname: string]: Point[] } = {
    finalScore: []
};

parsedMultipleHits.forEach((hit, i) => {
    allHitsPoints["finalScore"].push({ x: i, y: hit.parsedComponent.result });
    hit.subDataSets.forEach(sub => {
        if (allHitsPoints[sub.label] == null)
            allHitsPoints[sub.label] = [];
        allHitsPoints[sub.label].push({ x: i, y: sub.result });
    })
});

let firstIndex = 0;
let secondIndex = parsedMultipleHits.length - 1;

export class App extends React.Component<{}, {}> {

    private onPointsSelected = (startPointIndex: number, endPointIndex: number) => {
        firstIndex = startPointIndex;
        secondIndex = endPointIndex;
        this.forceUpdate()
    };

    render() {

        const mergedScoreComponent = mergeScoreComponents([parsedMultipleHits[firstIndex].parsedComponent], [parsedMultipleHits[secondIndex].parsedComponent]);

        const mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);
        interpolate(mergedSankeyGraphData, regressionResult.inverseFn);

        return <div onClick={() => this.forceUpdate()}>
            <SankeyDiagram graphData={mergedSankeyGraphData} />
            <div style={{height: 100}}>&nbsp;</div>
            <SelectableStackedChart points={allHitsPoints} width={800} height={300} onSelect={this.onPointsSelected} />
            <InterpolationCurve points={[]} curvePoints={allHitsPoints} />
        </div>
    }

}