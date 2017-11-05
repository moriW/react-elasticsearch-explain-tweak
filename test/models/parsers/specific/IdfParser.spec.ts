
import {expect} from "chai";
import {ExplainScoreComponent} from "../../../../src/models/parsers/Parser";
import {ChildrenCalculation, ScoreComponentType} from "../../../../src/models/ScoreComponent";
import {IdfParser} from "../../../../src/models/parsers/specific/IdfParser";

describe("IdfParser", () => {

    const idfParser = new IdfParser();
    const component: ExplainScoreComponent = {
        "value": 4.949548,
        "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
        "details": [
            {
                "value": 4,
                "description": "docFreq",
                "details": []
            },
            {
                "value": 634,
                "description": "docCount",
                "details": []
            }
        ]
    };

    it("Can parse correct component", () => {
        expect(idfParser.canParse(component.description)).to.be.true
    });

    it("Do not parse other component", () => {
        expect(idfParser.canParse("score")).to.be.false
    });

    it("Can extract formula from description", () => {
        const scoreComponent = idfParser.parse(component);
        expect(scoreComponent.formula).to.be.eq("log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5))");
    });

    it("Parses children", () => {
        const scoreComponent = idfParser.parse(component);
        expect(scoreComponent.children).to.have.lengthOf(2)
    });

    it("Parses DocumentFrequency child", () => {
        const scoreComponent = idfParser.parse(component).getChildByType(ScoreComponentType.DocumentFrequency);
        expect(scoreComponent).to.have.property("childrenCalculation", ChildrenCalculation.None);
        expect(scoreComponent).to.have.property("type", ScoreComponentType.DocumentFrequency);
        expect(scoreComponent).to.have.property("children").with.lengthOf(0);
        expect(scoreComponent).to.have.property("result", 4);
    });

    it("Parses DocumentCount child", () => {
        const scoreComponent = idfParser.parse(component).getChildByType(ScoreComponentType.DocumentCount);
        expect(scoreComponent).to.have.property("childrenCalculation", ChildrenCalculation.None);
        expect(scoreComponent).to.have.property("type", ScoreComponentType.DocumentCount);
        expect(scoreComponent).to.have.property("children").with.lengthOf(0);
        expect(scoreComponent).to.have.property("result", 634);
    });



});