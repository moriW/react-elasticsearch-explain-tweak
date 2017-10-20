
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
            this.parseDocFreqChild(explainScoreComponent.details.filter(d => d.description == "docFreq")[0]),
            this.parseDocCountChild(explainScoreComponent.details.filter(d => d.description == "docCount")[0]),
        ];

        return {
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "IDF",
            type: ScoreComponentType.Idf,
            children,
            modifiedResult: null,
            result: explainScoreComponent.value,
            formula: funcName,
            getChildByType: type => children.filter(ch => ch.type == type)[0]
        }
    };

    parseDocFreqChild = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return {
            label: "Document Frequency",
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            modifiedResult: null,
            type: ScoreComponentType.DocumentFrequency,
            result: explainScoreComponent.value,
            getChildByType: type => null
        }
    };

    parseDocCountChild = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return {
            label: "Document Count",
            childrenCalculation: ChildrenCalculation.None,
            children: [],
            modifiedResult: null,
            type: ScoreComponentType.DocumentCount,
            result: explainScoreComponent.value,
            getChildByType: type => null
        }
    }

}