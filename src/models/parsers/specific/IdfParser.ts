
import {ExplainScoreComponent, Parser} from "../Parser";
import {ChildrenCalculation, FormulaScoreComponent, ScoreComponent, ScoreComponentType} from "../../ScoreComponent";
import {RegExpParser} from "../RegExpParser";

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

export class IdfParser extends RegExpParser<FormulaScoreComponent> {

    constructor() {
        super(/idf, computed as (log\(.*\))/, 2)
    }

    mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): FormulaScoreComponent => new FormulaScoreComponent({
        childrenCalculation: ChildrenCalculation.FormulaVariables,
        label: "IDF",
        type: ScoreComponentType.Idf,
        modifiedResult: null,
        result: explainScoreComponent.value,
        formula: matchedGroups[1],
    });

    getChildrenParsers = (): Parser[] => [
        new DocFreqParser(),
        new DocCountParser()
    ]

}