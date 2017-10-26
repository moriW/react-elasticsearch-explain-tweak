
import {expect} from "chai";
import {FieldWeightSimilarityParser} from "../../../src/models/parsers/FieldWeightSimilarityParser";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponentType} from "../../../src/models/ScoreComponent";

describe("FieldWeightSimilarityParser", () => {

    const parser = new FieldWeightSimilarityParser();
    const component: ExplainScoreComponent = {
        "value": 16.93343,
        "description": `weight(czechName:"brown sugar" in 1870) [PerFieldSimilarity], result of:`,
        "details": []
    };

    it("Can parse correct component", () => {
        expect(parser.canParse(component.description)).to.be.true
    });

    it("Parses component correctly", () => {
        const parsed = parser.parse(component);
        expect(parsed).to.have.property("modifiedResult").null;
        expect(parsed).to.have.property("result", 16.93343);
        expect(parsed).to.have.property("children").with.lengthOf(0);
        expect(parsed).to.have.property("type", ScoreComponentType.FieldWeightSimilarity);
        expect(parsed).to.have.property("childrenCalculation", ChildrenCalculation.SumOf);
        expect(parsed).to.have.property("fieldName", "czechName");
        expect(parsed).to.have.property("fieldQuery", "brown sugar");
    });

});