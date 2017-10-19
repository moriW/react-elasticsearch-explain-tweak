
import {ExplainScoreComponent, Parser} from "./Parser";
import {ScoreComponent} from "../ScoreComponent";

export class TfNormParser implements Parser {

    canParse = (componentDescription: string): boolean => {
        const matches = /computed as\s(.*)\sfrom/.exec(componentDescription);
        return matches.length > 0;
    };

    parse = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return null;
    };

}