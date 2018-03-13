import * as React from "react";
import {SankeyDiagram} from "./SankeyDiagram";
import {
    default as transformForSankey,
    getPointsForRegression, interpolate, exponentialRegression
} from "../models/transformers/TransformForSankey";
import {DelegatingParser} from "../models/parsers/DelegatingParser";
import {getAllParsers} from "../models/parsers/AllParsers";
import InterpolationCurve from "./InterpolationCurve";
import {mergeScoreComponents} from "../models/MergeScoreModels";
import Point from "../types/Point";
import {ParsingContext} from "../models/parsers/ParsingContext";
import {SelectableStackedChart} from "./SelectableStackedChart";


interface ESContent{
    es_content: string
};

interface GraphData {

}

const regressionResult = exponentialRegression();


export class MainGraph extends React.Component<ESContent, {}> {



    private onPointsSelected = (startPointIndex: number, endPointIndex: number) => {
        this.setState({
            firstInex: startPointIndex,
            secondIndex: endPointIndex
        })
        this.forceUpdate()
    };


    render() {
        var es_content_json = JSON.parse(this.props.es_content)
        var hits = es_content_json.hits.hits.map(h => {
            const parsingContext = new ParsingContext();
            const parsedComponent = DelegatingParser.fromAllParsers().parse(h._explanation, getAllParsers(), parsingContext);
            return {
                parsedComponent,
                subDataSets: parsingContext.subDataSets
            }
        });
        var allHitsPoints: { [propname: string]: Point[] } = {
            finalScore: []
        };
        hits.forEach((hit, i) => {
            allHitsPoints["finalScore"].push({ x: i, y: hit.parsedComponent.result });
            hit.subDataSets.forEach(sub => {
                if (allHitsPoints[sub.label] == null)
                    allHitsPoints[sub.label] = [];
                allHitsPoints[sub.label].push({ x: i, y: sub.result });
            })
        });

        let firstIndex = 0;
        let secondIndex = hits.length - 1;
        var mergedScoreComponent = mergeScoreComponents([hits[firstIndex].parsedComponent], [hits[secondIndex].parsedComponent]);
        var mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);
        interpolate(mergedSankeyGraphData, regressionResult.inverseFn);
        
        return <div onClick={() => this.forceUpdate()}>
            <SankeyDiagram graphData={mergedSankeyGraphData} />
            <div style={{height: 100}}>&nbsp;</div>
            <SelectableStackedChart points={allHitsPoints} width={800} height={300} onSelect={this.onPointsSelected} />
            <InterpolationCurve points={[]} curvePoints={allHitsPoints} />
        </div>

    }

}