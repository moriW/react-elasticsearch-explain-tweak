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

export class App extends React.Component<{}, {}> {

    render() {

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


        const mergedScoreComponent = mergeScoreComponents([parsedMultipleHits[0].parsedComponent], [parsedMultipleHits[parsedMultipleHits.length - 1].parsedComponent]);
        const mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);

        interpolate(mergedSankeyGraphData, regressionResult.inverseFn);

        return <div>
            <SankeyDiagram graphData={mergedSankeyGraphData} />
            <div style={{height: 100}}>&nbsp;</div>
            <InterpolationCurve points={[]} curvePoints={allHitsPoints} />
            <SelectableStackedChart points={allHitsPoints} width={800} height={300} />
        </div>
    }

}