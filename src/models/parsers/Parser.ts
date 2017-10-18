
import {ScoreComponent} from "../ScoreComponent";

export interface ExplainScoreComponent {
    value: number,
    description: string,
    details: ExplainScoreComponent[]
}

export interface Parser {
    canParse: { (componentDescription: string) : boolean }
    parse: { (explainScoreComponent: ExplainScoreComponent): ScoreComponent }
}