
import {expect} from "chai";
import {SumOfParser} from "../../../../src/models/parsers/specific/SumOfParser";
import {ExplainScoreComponent} from "../../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponentType} from "../../../../src/models/ScoreComponent";

describe("SumOfParser", () => {

    const parser = new SumOfParser();

    const component: ExplainScoreComponent = {
        "value": 2,
        "description": "sum of:",
        "details": []
    };

    it("Can parse correct component", () => {
        expect(parser.canParse(component.description)).to.be.true
    });

    it("Do not parse other component", () => {
        expect(parser.canParse("score")).to.be.false
    });

    it("Parses component correctly", () => {
        const parsed = parser.parse(component);
        expect(parsed).to.have.property("modifiedResult").null;
        expect(parsed).to.have.property("result", 2);
        expect(parsed).to.have.property("children").with.lengthOf(0);
        expect(parsed).to.have.property("type", ScoreComponentType.SumOf);
        expect(parsed).to.have.property("childrenCalculation", ChildrenCalculation.SumOf);
    });

});