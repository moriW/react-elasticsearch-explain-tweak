
import {ExplainScoreComponent, Parser} from "./Parser";
import {ScoreComponent} from "../ScoreComponent";
import {getAllParsers} from "./AllParsers";

export class DelegatingParser extends Parser {

    constructor(private allParsers: Parser[]) {
        super();
    }

    canParse = (componentDescription: string) => {
        const capableParser = this.getCapableParser(componentDescription);
        return capableParser != null;
    };

    parse = (explainScoreComponent: ExplainScoreComponent, fallbackParsers: Parser[] = []): ScoreComponent => {
        const capableParser = this.getCapableParser(explainScoreComponent.description);
        if (capableParser == null)
            throw Error(`No parser found for '${explainScoreComponent.description}'`);
        return capableParser.parse(explainScoreComponent, fallbackParsers);
    };

    getCapableParser = (componentDescription: string): Parser => {
        return this.allParsers.find(parser => parser.canParse(componentDescription));
    };

    static fromAllParsers = (): DelegatingParser => new DelegatingParser(getAllParsers());

}