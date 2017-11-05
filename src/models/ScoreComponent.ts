
export enum ChildrenCalculation {
    Product = "product",
    SumOf = "sum",
    MaxOf = "max",
    None = "none",
    FormulaVariables = "formula_variables"
}

export enum ScoreComponentType {
    Generic = "generic",
    Idf = "idf",
    TfNorm = "tf_norm",
    Boost = "boost",
    DocumentFrequency = "doc_freq",
    DocumentCount = "doc_count",
    MaxOf = "max_of",
    SumOf = "sum_of",
    FieldWeightSimilarity = "field_weight_similarity",
    Score = "score",
}

export class ScoreComponent {

    type: ScoreComponentType;
    label: string;
    result: number;

    modifiedResult: number = null;
    children: ScoreComponent[] = [];
    childrenCalculation: ChildrenCalculation = ChildrenCalculation.None;


    constructor(init: Partial<ScoreComponent>) {
        Object.assign(this, init);
    }

    getChildByType = (type: ScoreComponentType): ScoreComponent => {
        const child = this.children.find(c => c.type == type);
        if (child == null) {
            throw Error(`Child with type ${type} not found in ${this.type} (${this.label})`)
        } else {
            return child;
        }
    }
}

export class FormulaScoreComponent extends ScoreComponent {

    formula: string = null;

    constructor(init: Partial<FormulaScoreComponent>) {
        super(init);
        if (init.formula)
            this.formula = init.formula;
    }
}