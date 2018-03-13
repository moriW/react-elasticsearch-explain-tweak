
import {ExplainScoreComponent, Parser} from "../Parser";
import {RegExpParser} from "../RegExpParser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";

export class FieldWeightSimilarityComponent extends ScoreComponent {

    constructor(init: Partial<FieldWeightSimilarityComponent>) {
        super(init);
        Object.assign(this, { fieldName: init.fieldName, fieldQuery: init.fieldQuery });
    }

    fieldName: string;
    fieldQuery: string;
}

export class FieldWeightSimilarityParser extends RegExpParser {

    constructor() {
        // weight(czechName:"brown sugar" in 1870) [PerFieldSimilarity], result of
        super(/weight\((.*):"?([a-zA-Z+ěščřžýáíé\s\u4e00-\u9fa5]*)"?\sin.*\).*/, 2)
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): FieldWeightSimilarityComponent => {
        return new FieldWeightSimilarityComponent({
            modifiedResult: null,
            label: matchedGroups[2],
            childrenCalculation: ChildrenCalculation.SumOf,
            children: [],
            type: ScoreComponentType.FieldWeightSimilarity,
            result: explainScoreComponent.value,
            fieldName: matchedGroups[1],
            fieldQuery: matchedGroups[2],
            addToSubDataSet: true
        });
    };



}