
import {expect} from "chai";
import {FieldWeightSimilarityParser} from "../../../../src/models/parsers/specific/FieldWeightSimilarityParser";
import {ExplainScoreComponent} from "../../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponentType} from "../../../../src/models/ScoreComponent";

describe("FieldWeightSimilarityParser", () => {

    const parser = new FieldWeightSimilarityParser();
    const phraseComponent: ExplainScoreComponent = {
        "value": 16.93343,
        "description": `weight(czechName:"brown sugar" in 1870) [PerFieldSimilarity], result of:`,
        "details": []
    };

    const singleWordComponent: ExplainScoreComponent = {
        "value": 16.93343,
        "description": `weight(czechName:brown in 1870) [PerFieldSimilarity], result of:`,
        "details": []
    };

    it("Can parse correct phrase component", () => {
        expect(parser.canParse(phraseComponent.description)).to.be.true
    });

    it("Can parse correct single word component", () => {
        expect(parser.canParse(singleWordComponent.description)).to.be.true
    });

    it("Can parse correct component with diacritics", () => {
        expect(parser.canParse(`weight(czechName:"hnědý" in 1870) [PerFieldSimilarity], result of:`)).to.be.true
    });

    it("Parses component correctly", () => {
        const parsed = parser.parse(phraseComponent);
        expect(parsed).to.have.property("modifiedResult").null;
        expect(parsed).to.have.property("result", 16.93343);
        expect(parsed).to.have.property("children").with.lengthOf(0);
        expect(parsed).to.have.property("type", ScoreComponentType.FieldWeightSimilarity);
        expect(parsed).to.have.property("childrenCalculation", ChildrenCalculation.SumOf);
        expect(parsed).to.have.property("fieldName", "czechName");
        expect(parsed).to.have.property("fieldQuery", "brown sugar");
    });

});