
import {ExplainScoreComponent, Parser} from "../Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";

export class SumOfParser extends Parser {

    canParse = (componentDescription: string) => {
        return componentDescription.startsWith("sum of") || componentDescription.endsWith("sum of:");
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent) => {
        return new ScoreComponent({
            type: ScoreComponentType.SumOf,
            childrenCalculation: ChildrenCalculation.SumOf,
            label: "Sum of:",
            modifiedResult: null,
            result: explainScoreComponent.value
        })
    };

}