import {expect} from "chai";
import {ExplainScoreComponent, Parser} from "../../../src/models/parsers/Parser";
import {TfNormParser} from "../../../src/models/parsers/TfNormParser";
import {ChildrenCalculation, ScoreComponentType} from "../../../src/models/ScoreComponent";

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

});