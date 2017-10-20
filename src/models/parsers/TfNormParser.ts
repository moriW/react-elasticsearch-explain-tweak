
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export class TfNormParser implements Parser {

    private regEx = /computed\sas\s(.*)\sfrom/;

    canParse = (componentDescription: string): boolean => {
        const matches = this.regEx.exec(componentDescription);
        return matches.length > 0;
    };

    parse = (explainScoreComponent: ExplainScoreComponent): FormulaScoreComponent => {

        const formula = this.regEx.exec(explainScoreComponent.description)[1];

        return {
            type: ScoreComponentType.TfNorm,
            formula,
            children: [],
            getChildByType: type => null,
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "TF norm",
            modifiedResult: null,
            result: explainScoreComponent.value
        }
    };



}