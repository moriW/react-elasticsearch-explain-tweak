import * as React from "react";
import {SankeyDiagram} from "./SankeyDiagram";
import {
    default as transformForSankey,
    getPointsForRegression, interpolate, exponentialRegression
} from "../models/transformers/TransformForSankey";
import {DelegatingParser} from "../models/parsers/DelegatingParser";
import {getAllParsers} from "../models/parsers/AllParsers";
import singleHitSample from "../samples/SingleHitSample";
import multipleHitsSample from "../samples/MultipleHitsSample";
import InterpolationCurve from "./InterpolationCurve";
import {ElasticSearchResponse} from "../models/ElasticHit";
import {mergeScoreComponents} from "../models/MergeScoreModels";

export class App extends React.Component<{}, {}> {

    render() {

        const parsedComponents = DelegatingParser.fromAllParsers().parse(singleHitSample, getAllParsers());
        //const sankeyGraphData = transformForSankey(parsedComponents);

        //const regressionPoints = getPointsForRegression(sankeyGraphData);
        const regressionResult = exponentialRegression();

        //interpolate(sankeyGraphData, regressionResult.inverseFn);*/

        const parsedFirstComponent = DelegatingParser.fromAllParsers().parse(multipleHitsSample.hits.hits[0]._explanation, getAllParsers());
        const parsedSecondComponent = DelegatingParser.fromAllParsers().parse(multipleHitsSample.hits.hits[multipleHitsSample.hits.hits.length - 1]._explanation, getAllParsers());
        const mergedScoreComponent = mergeScoreComponents([parsedFirstComponent], [parsedSecondComponent]);
        const mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);

        interpolate(mergedSankeyGraphData, regressionResult.inverseFn);

        return <div>
            <SankeyDiagram graphData={mergedSankeyGraphData} />
            <div style={{height: 100}}>&nbsp;</div>
            <InterpolationCurve
                points={[]}
                curvePoints={multipleHitsSample.hits.hits.map((hit, i) => ({x: i, y: hit._score}))} />
        </div>
    }

}