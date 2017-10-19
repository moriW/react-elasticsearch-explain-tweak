
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export class BoostParser implements Parser {

    canParse = (componentDescription: string) => {
        return componentDescription.toLocaleLowerCase().indexOf("boost") >= 0
    };

    parse = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return {
            childrenCalculation: ChildrenCalculation.None,
            label: "Boost",
            type: ScoreComponentType.Boost,
            children: [],
            result: explainScoreComponent.value,
            modifiedResult: null,
            getChildByType: type => null
        }
    }

}