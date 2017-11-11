import * as React from "react";
import {SankeyDiagram} from "./SankeyDiagram";
import {
    default as transformForSankey,
    getPointsForRegression, interpolate, exponentialRegression
} from "../models/transformers/TransformForSankey";
import {DelegatingParser} from "../models/parsers/DelegatingParser";
import {getAllParsers} from "../models/parsers/AllParsers";
import singleHitSample from "../samples/SingleHitSample";
import InterpolationCurve from "./InterpolationCurve";

export class App extends React.Component<{}, {}> {

    render() {

        const parsedComponents = DelegatingParser.fromAllParsers().parse(singleHitSample, getAllParsers());
        const sankeyGraphData = transformForSankey(parsedComponents);

        const regressionPoints = getPointsForRegression(sankeyGraphData);
        const regressionResult = exponentialRegression(regressionPoints);

        interpolate(sankeyGraphData, regressionResult.inverseFn);

        return <div>
            <SankeyDiagram graphData={sankeyGraphData} />
            {/*<InterpolationCurve*/}
                {/*points={regressionPoints.map((rp, i) => ({x: i, y: rp}))}*/}
                {/*curvePoints={regressionResult.curvePoints} />*/}
        </div>
    }

}