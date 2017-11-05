
import {expect} from "chai";
import {BoostParser} from "../../../src/models/parsers/BoostParser";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponentType} from "../../../src/models/ScoreComponent";

describe("BoostParser", () => {

    const boostParser = new BoostParser();
    const component: ExplainScoreComponent = {
        "value": 2,
        "description": "boost",
        "details": []
    };

    it("Can parse correct component", () => {
        expect(boostParser.canParse(component.description)).to.be.true
    });

    it("Do not parse other component", () => {
        expect(boostParser.canParse("score")).to.be.false
    });

    it("Parses component correctly", () => {
        const parsed = boostParser.parse(component);
        expect(parsed).to.have.property("modifiedResult").null;
        expect(parsed).to.have.property("result", 2);
        expect(parsed).to.have.property("children").with.lengthOf(0);
        expect(parsed).to.have.property("type", ScoreComponentType.Boost);
        expect(parsed).to.have.property("childrenCalculation", ChildrenCalculation.None);
    });

});