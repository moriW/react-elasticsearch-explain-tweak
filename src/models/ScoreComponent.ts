
export enum ChildrenCalculation {
    Product = "product",
    Sum = "sum",
    Max = "max",
    None = "none"
}

export enum ScoreComponentType {
    Generic = "generic",
    Idf = "idf",
    TfNorm = "tf_norm",
    Boost = "boost",
}

export interface ScoreComponent {
    type: ScoreComponentType,
    childrenCalculation: ChildrenCalculation,
    children: ScoreComponent[],
    label: string,
    result: number,
    modifiedResult: number
}