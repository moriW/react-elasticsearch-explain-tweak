
import {SimpleRegExpParser} from "../../../src/models/parsers/SimpleRegExpParser";
import {ScoreComponentType} from "../../../src/models/ScoreComponent";
import {expect} from "chai";

describe("SimpleRegExpParser", () => {

    it("Parses component correctly", () => {

        const explainComponent = {
            "value": 1,
            "description": "termFreq=1.0",
            "details": []
        };

        const parsedComponent = new SimpleRegExpParser(/(.*)=\d+(\.\d+)?/, 1, 1).parse(explainComponent);
        expect(parsedComponent).to.have.property("type", ScoreComponentType.Generic);
        expect(parsedComponent).to.have.property("label", "termFreq");
        expect(parsedComponent).to.have.property("result", 1);
        expect(parsedComponent).to.have.property("children").of.lengthOf(0);
    });

});