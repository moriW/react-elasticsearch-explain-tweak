import {expect} from "chai";
import {ScoreComponentType} from "../../../src/models/ScoreComponent";
import {RegExpParser} from "../../../src/models/parsers/RegExpParser";

describe("RegExpParser", () => {

    const testCases = [
        { regExp: /parameter\s(.*)\s?/, group: 1, description: "parameter b", result: true },
        { regExp: /parameter\s(.*)\s?/, group: 1, description: "parameter", result: false },
        { regExp: /docCount/, group: 0, description: "docCount", result: true },
    ];

    testCases.forEach(testCase => {
        it(`Can parse when reg exp group is found - ${testCase.description}`, () => {
            const result = new RegExpParser(testCase.regExp, testCase.group).canParse(testCase.description);
            expect(result).to.be.eq(testCase.result);
        })
    });

    it("Parses component correctly", () => {
        const explainComponent = {
            "value": 1,
            "description": "termFreq=1.0",
            "details": []
        };
        const parsedComponent = new RegExpParser(/(.*)=\d+(\.\d+)?/, 1, 1).parse(explainComponent);
        expect(parsedComponent).to.have.property("type", ScoreComponentType.Generic);
        expect(parsedComponent).to.have.property("label", "termFreq");
        expect(parsedComponent).to.have.property("result", 1);
        expect(parsedComponent).to.have.property("children").of.lengthOf(0);
    });

});