
import {expect} from "chai";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";
import {MaxOfParser} from "../../../src/models/parsers/MaxOfParser";
import {ChildrenCalculation, ScoreComponentType} from "../../../src/models/ScoreComponent";

describe("MaxOfParser", () => {

    const parser = new MaxOfParser();

    const component: ExplainScoreComponent = {
        "value": 2,
        "description": "max of:",
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
        expect(parsed).to.have.property("type", ScoreComponentType.MaxOf);
        expect(parsed).to.have.property("childrenCalculation", ChildrenCalculation.MaxOf);
    });

});