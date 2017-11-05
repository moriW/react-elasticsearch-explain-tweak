
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../ScoreComponent";
import {RegExpParser} from "./RegExpParser";
import {ExplainScoreComponent} from "./Parser";

export class SimpleRegExpParser extends RegExpParser<ScoreComponent> {

    constructor(regExp: RegExp, regExpLabelMinGroups: number, private regExpLabelGroupIndex: number = 0) {
        super(regExp, regExpLabelMinGroups);
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): ScoreComponent => new ScoreComponent({
        modifiedResult: null,
        label: matchedGroups[this.regExpLabelGroupIndex],
        childrenCalculation: ChildrenCalculation.None,
        children: [],
        type: ScoreComponentType.Generic,
        result: explainScoreComponent.value
    });

}