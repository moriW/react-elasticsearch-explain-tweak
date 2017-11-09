import {expect} from "chai";
import {ScoreComponent, ScoreComponentType} from "../../../src/models/ScoreComponent";
import {RegExpParser} from "../../../src/models/parsers/RegExpParser";
import {ExplainScoreComponent} from "../../../src/models/parsers/Parser";

describe("RegExpParser", () => {

    const testCases = [
        { regExp: /parameter\s(.*)\s?/, group: 1, description: "parameter b", result: true },
        { regExp: /parameter\s(.*)\s?/, group: 1, description: "parameter", result: false },
        { regExp: /docCount/, group: 0, description: "docCount", result: true },
    ];

    testCases.forEach(testCase => {
        it(`Can parse when reg exp group is found - ${testCase.description}`, () => {
            const result = (new class extends RegExpParser {
                constructor(){
                    super(testCase.regExp, testCase.group)
                }
                mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => null;
            }).canParse(testCase.description);
            expect(result).to.be.eq(testCase.result);
        })
    });

    it("throws error when global regexp is passed", () => {

    })

});