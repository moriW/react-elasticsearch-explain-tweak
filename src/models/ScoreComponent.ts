
export enum ChildrenCalculation {
    Product = "product",
    Sum = "sum",
    Max = "max",
    None = "none",
    FormulaVariables = "formula_variables"
}

export enum ScoreComponentType {
    Generic = "generic",
    Idf = "idf",
    TfNorm = "tf_norm",
    Boost = "boost",
    DocumentFrequency = "doc_freq",
    DocumentCount = "doc_count"
}

export interface ScoreComponent {
    type: ScoreComponentType,
    childrenCalculation: ChildrenCalculation,
    children: ScoreComponent[],
    label: string,
    result: number,
    modifiedResult: number,
    getChildByType: { (type: ScoreComponentType): ScoreComponent }
}

export interface IdfScoreComponent extends ScoreComponent {
    formula: string
}