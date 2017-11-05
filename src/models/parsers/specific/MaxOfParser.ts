
import {ExplainScoreComponent, Parser} from "../Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";

export class MaxOfParser extends Parser {

    canParse = (componentDescription: string) => {
        return componentDescription.startsWith("max of");
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return new ScoreComponent({
            type: ScoreComponentType.MaxOf,
            childrenCalculation: ChildrenCalculation.MaxOf,
            children: [], // TODO: MUST CALCULATE CHILDREN
            label: "Max of:",
            modifiedResult: null,
            result: explainScoreComponent.value
        });
    };


}