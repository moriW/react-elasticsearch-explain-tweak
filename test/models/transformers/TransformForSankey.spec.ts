
import {expect, use} from "chai";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";

import singleHitSample from "../../../src/samples/SingleHitSample";
import {DelegatingParser} from "../../../src/models/parsers/DelegatingParser";
import {getAllParsers} from "../../../src/models/parsers/AllParsers";
import transformForSankey, {
    exponentialRegression,
    getPointsForRegression, interpolate,
} from "../../../src/models/transformers/TransformForSankey";
import {SankeyGraphLinkExtra, SankeyGraphNodeExtra} from "../../../src/types/SankeyScoreComponentsData";
import * as d3Sankey from "d3-sankey";
import {mergeScoreComponents} from "../../../src/models/MergeScoreModels";
import multipleHitsSample from "../../../src/samples/MultipleHitsSample";

describe("transformForSankey", () => {

    const explainScoreComponent: ExplainScoreComponent = singleHitSample;

    it("creates nodes and links from ScoreComponent and its children", () => {

        const scoreComponent = DelegatingParser.fromAllParsers().parse(explainScoreComponent, getAllParsers());
        const sankeyData = transformForSankey(scoreComponent);

        expect(sankeyData.nodes).to.be.lengthOf(17);
        // TODO: ADD MORE ASSERTS FOR LINKS AND PROPERTY VALUES


    });

    // TODO: REMOVE
    it("calculates sankey data", () => {

        const parsedFirstComponent = DelegatingParser.fromAllParsers().parse(multipleHitsSample.hits.hits[0]._explanation, getAllParsers());
        const parsedSecondComponent = DelegatingParser.fromAllParsers().parse(multipleHitsSample.hits.hits[multipleHitsSample.hits.hits.length - 1]._explanation, getAllParsers());
        const mergedScoreComponent = mergeScoreComponents([parsedFirstComponent], [parsedSecondComponent]);
        const mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);

        console.log("asdfdsaf");


    });

    it("updates values with exponential regression", () => {
        const scoreComponent = DelegatingParser.fromAllParsers().parse(explainScoreComponent, getAllParsers());
        const sankeyData = transformForSankey(scoreComponent);

        const regressionPoints = getPointsForRegression(sankeyData);
        const result = exponentialRegression(regressionPoints);
        interpolate(sankeyData, result.inverseFn);

        console.log("aaaa");
    })

});