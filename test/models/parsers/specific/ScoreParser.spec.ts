
import {expect} from "chai";
import {ExplainScoreComponent} from "../../../../src/models/parsers/Parser";
import {ScoreParser} from "../../../../src/models/parsers/specific/ScoreParser";
import {ChildrenCalculation, ScoreComponentType} from "../../../../src/models/ScoreComponent";

describe("ScoreParser", () => {

    const parser = new ScoreParser();

    const explainScoreComponent: ExplainScoreComponent = {
        "value": 16.93343,
        "description": "score(doc=1870,freq=1.0 = phraseFreq=1.0\n), product of:",
        "details": [],
    };

    it("will not parse incorrect component", () => {
        const canParse = parser.canParse("idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:");
        expect(canParse).to.be.false
    });

    it("can parse correct component", () => {
        const canParse = parser.canParse(explainScoreComponent.description);
        expect(canParse).to.be.true;
    });

    it("parses component correctly", () => {
        const parsedComponent = parser.parse(explainScoreComponent);
        expect(parsedComponent).to.have.property("childrenCalculation", ChildrenCalculation.Product);
        expect(parsedComponent).to.have.property("type", ScoreComponentType.Score);
        expect(parsedComponent).to.have.property("result", 16.93343);
    })

});