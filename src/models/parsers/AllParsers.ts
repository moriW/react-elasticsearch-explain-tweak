
import {BoostParser} from "./specific/BoostParser";
import {FieldWeightSimilarityParser} from "./specific/FieldWeightSimilarityParser";
import {IdfParser} from "./specific/IdfParser";
import {MaxOfParser} from "./specific/MaxOfParser";
import {SumOfParser} from "./specific/SumOfParser";
import {TfNormParser} from "./specific/TfNormParser";
import {ScoreParser} from "./specific/ScoreParser";

const allParsers = [
    new BoostParser(),
    new FieldWeightSimilarityParser(),
    new IdfParser(),
    new MaxOfParser(),
    new SumOfParser(),
    new TfNormParser(),
    new ScoreParser()
];

export function getAllParsers() {
    return allParsers;
}