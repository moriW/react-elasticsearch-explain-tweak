
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

        const scoreComponent = DelegatingParser.fromAllParsers().parse(explainScoreComponent, getAllParsers());
        const sankeyData = transformForSankey(scoreComponent);

        const sankeyLayout = d3Sankey.sankey<SankeyGraphNodeExtra, SankeyGraphLinkExtra>()
            .nodeId(node => node.nodeId)
            .nodeWidth(10)
            .nodePadding(5)
            .extent([[1, 1], [800 - 1, 500 - 6]]);

        sankeyLayout(sankeyData);
        console.log("xxxx");


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