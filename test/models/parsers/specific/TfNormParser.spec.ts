import {expect} from "chai";
import {ExplainScoreComponent, Parser} from "../../../../src/models/parsers/Parser";
import {TfNormParser} from "../../../../src/models/parsers/specific/TfNormParser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../../../src/models/ScoreComponent";

describe("TfNormParser", () => {

    const tfNormParser = new TfNormParser();
    const component: ExplainScoreComponent = {
        "value": 0.92513394,
        "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
        "details": [
            {
                "value": 1,
                "description": "termFreq=1.0",
                "details": []
            },
            {
                "value": 1,
                "description": "phraseFreq=1.0",
                "details": []
            },
            {
                "value": 1.2,
                "description": "parameter k1",
                "details": []
            },
            {
                "value": 0.75,
                "description": "parameter b",
                "details": []
            },
            {
                "value": 2.137224,
                "description": "avgFieldLength",
                "details": []
            },
            {
                "value": 2.56,
                "description": "fieldLength",
                "details": []
            }
        ]
    };

    it("Can parse correct component", () => {
        expect(tfNormParser.canParse(component.description)).to.be.true
    });

    it("Parses correctly", () => {
        const parsedComponent = tfNormParser.parse(component);
        expect(parsedComponent).to.have.property("formula", "(freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength))");
        expect(parsedComponent).to.have.property("type", ScoreComponentType.TfNorm);
        expect(parsedComponent).to.have.property("childrenCalculation", ChildrenCalculation.FormulaVariables);
        expect(parsedComponent).to.have.property("result", 0.92513394);
    });

    const assertChildParam = (childComponents: ScoreComponent[], label: string, result: number) => {
        const foundComponents = childComponents.filter(c => c.label == label);
        expect(foundComponents).to.have.lengthOf(1, `Child component ${label} not found`);
        expect(foundComponents[0]).to.have.property("result", result);
        expect(foundComponents[0]).to.have.property("children").with.lengthOf(0);
        expect(foundComponents[0]).to.have.property("type", ScoreComponentType.Generic);
    };

    it("Parses all children", () => {
        const parsedComponent = tfNormParser.parse(component);
        expect(parsedComponent).to.have.property("children").have.lengthOf(6);
        assertChildParam(parsedComponent.children, "termFreq", 1);
        assertChildParam(parsedComponent.children, "k1", 1.2);
        assertChildParam(parsedComponent.children, "b", 0.75);
        assertChildParam(parsedComponent.children, "avgFieldLength", 2.137224);
        assertChildParam(parsedComponent.children, "fieldLength", 2.56);
        assertChildParam(parsedComponent.children, "phraseFreq", 1);
    });

});