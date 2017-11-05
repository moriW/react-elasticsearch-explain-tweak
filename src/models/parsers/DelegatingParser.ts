
import {ExplainScoreComponent, Parser} from "./Parser";
import {ScoreComponent} from "../ScoreComponent";
import {BoostParser} from "./BoostParser";
import {FieldWeightSimilarityParser} from "./FieldWeightSimilarityParser";
import {IdfParser} from "./IdfParser";
import {MaxOfParser} from "./MaxOfParser";
import {SumOfParser} from "./SumOfParser";
import {TfNormParser} from "./TfNormParser";
import {stackOffsetExpand} from "d3-shape";

const allParsers: Parser[] = [
    new BoostParser(),
    new FieldWeightSimilarityParser(),
    new IdfParser(),
    new MaxOfParser(),
    new SumOfParser(),
    new TfNormParser(),
];

export class DelegatingParser extends Parser {

    constructor(private allParsers: Parser[]) {
        super();
    }

    canParse = (componentDescription: string) => {
        const capableParser = this.getCapableParser(componentDescription);
        return capableParser != null;
    };

    parse = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        const capableParser = this.getCapableParser(explainScoreComponent.description);
        if (capableParser == null)
            throw Error(`No parser found for '${explainScoreComponent.description}'`);
        return capableParser.parse(explainScoreComponent);
    };

    getCapableParser = (componentDescription: string): Parser => {
        return this.allParsers.find(parser => parser.canParse(componentDescription));
    };

}