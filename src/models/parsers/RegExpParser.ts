
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export class RegExpParser extends Parser {

    private regExp: RegExp;
    private regExpLabelMinGroups: number;
    private regExpLabelGroupIndex: number;

    constructor(regExp: RegExp, regExpLabelMinGroups: number, regExpLabelGroupIndex: number = 0) {
        super();
        this.regExp = regExp;
        this.regExpLabelMinGroups = regExpLabelMinGroups;
        this.regExpLabelGroupIndex = regExpLabelGroupIndex;
    }

    canParse = (componentDescription: string) => {
        const matches = this.regExp.exec(componentDescription);
        return matches != null && matches.length >= this.regExpLabelMinGroups;
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        const matchedGroups = this.regExp.exec(explainScoreComponent.description)
        return this.mapToScoreComponent(explainScoreComponent, matchedGroups);
    };

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): ScoreComponent => {
        return new ScoreComponent({
            modifiedResult: null,
            label: matchedGroups[this.regExpLabelGroupIndex],
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            type: ScoreComponentType.Generic,
            result: explainScoreComponent.value
        });
    };

}