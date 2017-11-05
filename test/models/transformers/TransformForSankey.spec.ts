
import {expect, use} from "chai";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";

import singleHitSample from "../../../src/samples/SingleHitSample";
import {DelegatingParser} from "../../../src/models/parsers/DelegatingParser";
import {getAllParsers} from "../../../src/models/parsers/AllParsers";
import transformForSankey from "../../../src/models/transformers/TransformForSankey";

describe("transformForSankey", () => {

    const explainScoreComponent: ExplainScoreComponent = singleHitSample;

    it("creates nodes and links from ScoreComponent and its children", () => {

        const scoreComponent = DelegatingParser.fromAllParsers().parse(explainScoreComponent, getAllParsers());
        const sankeyData = transformForSankey(scoreComponent);

        expect(sankeyData.nodes).to.be.lengthOf(17);

    });

});