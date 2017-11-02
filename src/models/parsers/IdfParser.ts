
import {ExplainScoreComponent, Parser} from "./Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../ScoreComponent";
import {RegExpParser} from "./RegExpParser";

export class DocFreqParser extends RegExpParser {

    constructor() {
        super(/docFreq/, 1);
    }

    mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => new ScoreComponent({
        label: "Document Frequency",
        childrenCalculation: ChildrenCalculation.None,
        children: [],
        modifiedResult: null,
        type: ScoreComponentType.DocumentFrequency,
        result: explainScoreComponent.value,
    });

}

export class DocCountParser extends RegExpParser {

    constructor() {
        super(/docCount/, 1);
    }

    mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => new ScoreComponent({
        label: "Document Count",
        childrenCalculation: ChildrenCalculation.None,
        children: [],
        modifiedResult: null,
        type: ScoreComponentType.DocumentCount,
        result: explainScoreComponent.value,
    });

}

export class IdfParser extends Parser<FormulaScoreComponent> {

    canParse = (componentDescription: string) => {
        return componentDescription.toLocaleLowerCase().indexOf("idf") == 0;
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): FormulaScoreComponent => {

        const funcNameMatches = /(log\(.*\))/g.exec(explainScoreComponent.description);
        const funcName = funcNameMatches[1];

        return new FormulaScoreComponent({
            childrenCalculation: ChildrenCalculation.FormulaVariables,
            label: "IDF",
            type: ScoreComponentType.Idf,
            modifiedResult: null,
            result: explainScoreComponent.value,
            formula: funcName,
        });
    };

    getChildrenParsers = (): Parser[] => [
        new DocFreqParser(),
        new DocCountParser()
    ]

}