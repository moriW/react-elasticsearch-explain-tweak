
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export class RegExpParser implements Parser {

    private regExp: RegExp;
    private regExpLabelGroupIndex: number;

    constructor(regExp: RegExp, regExpLabelGroupIndex: number) {
        this.regExp = regExp;
        this.regExpLabelGroupIndex = regExpLabelGroupIndex;
    }

    canParse = (componentDescription: string) => {
        const matches = this.regExp.exec(componentDescription);
        return matches != null && matches.length >= this.regExpLabelGroupIndex + 1;
    };

    parse = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        const label = this.regExp.exec(explainScoreComponent.description)[this.regExpLabelGroupIndex];
        return this.mapToScoreComponent(explainScoreComponent, label);
    };

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroup: string): ScoreComponent => {
        return new ScoreComponent({
            modifiedResult: null,
            label: matchedGroup,
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            type: ScoreComponentType.Generic,
            result: explainScoreComponent.value
        });
    };

}