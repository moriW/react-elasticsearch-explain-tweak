
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export abstract class RegExpParser<TReturnComponent extends ScoreComponent = ScoreComponent> extends Parser<TReturnComponent> {

    constructor(private regExp: RegExp, private regExpLabelMinGroups: number) {
        super();
    }

    canParse = (componentDescription: string) => {
        const matches = this.regExp.exec(componentDescription);
        return matches != null && matches.length >= this.regExpLabelMinGroups;
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): TReturnComponent => {
        const matchedGroups = this.regExp.exec(explainScoreComponent.description);
        return this.mapToScoreComponent(explainScoreComponent, matchedGroups);
    };

    protected abstract mapToScoreComponent: (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]) => TReturnComponent;

}