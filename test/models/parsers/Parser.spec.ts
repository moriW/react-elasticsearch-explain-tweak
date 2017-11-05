
import {expect, use} from "chai";
import {ExplainScoreComponent, Parser} from "../../../src/models/parsers/Parser";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import {MaxOfParser} from "../../../src/models/parsers/specific/MaxOfParser";
import {BoostParser} from "../../../src/models/parsers/specific/BoostParser";
import {ScoreComponentType} from "../../../src/models/ScoreComponent";

use(sinonChai);

describe("Parser", () => {

    // TODO: Deal with side effect of printing to real console
    const consoleLogWarnSpy = sinon.spy<Console>(console, "warn");
    const consoleLogErrSpy = sinon.spy<Console>(console, "error");

    const explainScoreComponent = {
        "value": 16.93343,
        "description": "max of:",
        "details": [
            {
                "value": 2,
                "description": "boost:",
                "details": []
            }
        ]
    } as ExplainScoreComponent;

    afterEach(() => {
        consoleLogErrSpy.reset();
        consoleLogWarnSpy.reset();
    });

    it("logs error when all children parses do not match", () => {

        const parser = new class extends Parser {
            getChildrenParsers = (): Parser[] => [];
            parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent) =>
                new MaxOfParser().parseWithoutChildren(explainScoreComponent)
        };

        parser.parse(explainScoreComponent);

        expect(console.warn).to.not.be.called;
        expect(console.error).to.be.called;
    });

    it("tries to search in fallback parsers when any of children parsers do not match", () => {
        const parser = new class extends Parser {
            getChildrenParsers = (): Parser[] => [];
            parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent) =>
                new MaxOfParser().parseWithoutChildren(explainScoreComponent)
        };

        const parsed = parser.parse(explainScoreComponent, [new BoostParser()]);

        expect(parsed.children).to.be.lengthOf(1);
        expect(parsed.children[0]).to.have.property("type", ScoreComponentType.Boost);
    });

    it("assigns new id for each parsed component", () => {
        const parser = new class extends Parser {
            getChildrenParsers = (): Parser[] => [];
            parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent) =>
                new MaxOfParser().parseWithoutChildren(explainScoreComponent)
        };

        const parsed = parser.parse(explainScoreComponent, [new BoostParser()]);

        expect(parsed.id).to.be.eq(0);
        expect(parsed.children[0].id).to.be.eq(1);
    })
});