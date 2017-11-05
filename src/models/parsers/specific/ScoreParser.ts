
import {ExplainScoreComponent, Parser} from "../Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";

export class ScoreParser extends Parser {

    canParse = (componentDescription: string) => {
        return componentDescription.startsWith("score");
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => new ScoreComponent({
        label: "Score",
        childrenCalculation: ChildrenCalculation.Product,
        result: explainScoreComponent.value,
        type: ScoreComponentType.Score
    })

}