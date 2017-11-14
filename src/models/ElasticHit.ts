
import {ExplainScoreComponent} from "./parsers/Parser";

export interface ExplainingElasticHit {
    [others: string]: any;
    _score: number;
    _source: any;
    _explanation: ExplainScoreComponent;
}

export interface ElasticSearchResponse {
    [others: string]: any;
    hits: {
        [others: string]: any;
        hits: ExplainingElasticHit[]
    }
}