
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../ScoreComponent";

export class IdfParser implements Parser {

    canParse = (componentDescription: string) => {
        return componentDescription.toLocaleLowerCase().indexOf("idf") == 0;
    };

    parse = (explainScoreComponent: ExplainScoreComponent): FormulaScoreComponent => {

        const funcNameMatches = /(log\(.*\))/g.exec(explainScoreComponent.description);
        const funcName = funcNameMatches[1];

        const children = [
            this.parseDocFreqChild(explainScoreComponent.details.find(d => d.description == "docFreq")),
            this.parseDocCountChild(explainScoreComponent.details.find(d => d.description == "docCount")),
        ];

        return new FormulaScoreComponent({
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "IDF",
            type: ScoreComponentType.Idf,
            children,
            modifiedResult: null,
            result: explainScoreComponent.value,
            formula: funcName,
        });
    };

    parseDocFreqChild = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return new ScoreComponent({
            label: "Document Frequency",
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            modifiedResult: null,
            type: ScoreComponentType.DocumentFrequency,
            result: explainScoreComponent.value,
        });
    };

    parseDocCountChild = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return new ScoreComponent({
            label: "Document Count",
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            modifiedResult: null,
            type: ScoreComponentType.DocumentCount,
            result: explainScoreComponent.value,
        });
    }

}