
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../ScoreComponent";
import {RegExpParser} from "./RegExpParser";

const tfNormChildrenParsers = [
    new RegExpParser(/(termFreq)=.*/, 1),
    new RegExpParser(/parameter\s(.*)/, 1),
    new RegExpParser(/avgFieldLength/, 0),
    new RegExpParser(/fieldLength/, 0),
];

export class TfNormParser extends RegExpParser {

    constructor() {
        super(/computed\sas\s(.*)\sfrom/, 1)
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroup: string): FormulaScoreComponent => {
        return {
            type: ScoreComponentType.TfNorm,
            formula: matchedGroup,
            children: this.mapChildren(explainScoreComponent.details, tfNormChildrenParsers),
            getChildByType: type => null, // TODO: IMPLEMENT
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "TF norm",
            modifiedResult: null,
            result: explainScoreComponent.value
        }
    };

    mapChildren = (explainScoreComponents: ExplainScoreComponent[], parsers: Parser[]): ScoreComponent[] => {
        return explainScoreComponents.map(c => {
            const parser = parsers.find(parser => parser.canParse(c.description));
            return parser.parse(c);
        })
    }

}