
import {DelegatingParser} from "../../../src/models/parsers/DelegatingParser";
import {BoostParser} from "../../../src/models/parsers/BoostParser";
import * as sinon from "sinon";
import {MaxOfParser} from "../../../src/models/parsers/MaxOfParser";
import {expect} from "chai";

describe("DelegatingParser", () => {

    const spyParser = new BoostParser();
    sinon.spy<BoostParser>(spyParser, "parse");

    const parser = new DelegatingParser([
        new MaxOfParser(),
        spyParser
    ]);

    it("can parse if any of passed parsers can parse", () => {
        const canParse = parser.canParse("boost");
        expect(canParse).to.be.true
    });

    it("delegates parsing to first parser passed in constructor", () => {

        const boostComponent = {
            "value": 2,
            "description": "boost",
            "details": []
        };

        parser.parse(boostComponent);
        expect(spyParser.parse).to.be.called
    });

    it("throws error when no capable parser found for parsing", () => {

        const unknownComponent = {
            "value": 2,
            "description": "unknown",
            "details": []
        };

        expect(() => { parser.parse(unknownComponent) }).to.throw
    })

});

