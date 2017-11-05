
import {ExplainScoreComponent, Parser} from "../Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";
import {RegExpParser} from "../RegExpParser";
import {SimpleRegExpParser} from "../SimpleRegExpParser";

export class TfNormParser extends RegExpParser {

    constructor() {
        //tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:,
        super(/computed\sas\s(.*)\sfrom/, 1)
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): FormulaScoreComponent => {
        return new FormulaScoreComponent({
            type: ScoreComponentType.TfNorm,
            formula: matchedGroups[1],
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "TF norm",
            modifiedResult: null,
            result: explainScoreComponent.value
        });
    };

    getChildrenParsers = (): Parser[] => [
        new SimpleRegExpParser(/(termFreq)=.*/, 1, 1),
        new SimpleRegExpParser(/(phraseFreq)=.*/, 1, 1),
        new SimpleRegExpParser(/parameter\s(.*)/, 1, 1),
        new SimpleRegExpParser(/avgFieldLength/, 0),
        new SimpleRegExpParser(/fieldLength/, 0),
        new SimpleRegExpParser(/fieldLength/, 0)
    ];
}