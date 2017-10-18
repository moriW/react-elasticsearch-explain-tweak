
import {expect} from "chai";
import {BoostParser} from "../../../src/models/parsers/BoostParser";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../../src/models/ScoreComponent";

describe("BoostParser", () => {

    const boostParser = new BoostParser();
    const component: ExplainScoreComponent = {
        "value": 2,
        "description": "boost",
        "details": []
    };

    it("Can parse correct component", () => {
        expect(boostParser.canParse(component.description)).eq(true)
    });

    it("Do not parse other component", () => {
        expect(boostParser.canParse("score")).eq(false)
    });

    it("Parses component correctly", () => {
        const parsed = boostParser.parse(component);
        expect(parsed).to.not.be.null;
        expect(parsed).to.deep.eq({
            modifiedResult: null,
            result: 2,
            children: [],
            type: ScoreComponentType.Boost,
            label: "Boost",
            childrenCalculation: ChildrenCalculation.None
        } as ScoreComponent)
    });

});