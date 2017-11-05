
import {BoostParser} from "./specific/BoostParser";
import {FieldWeightSimilarityParser} from "./specific/FieldWeightSimilarityParser";
import {IdfParser} from "./specific/IdfParser";
import {MaxOfParser} from "./specific/MaxOfParser";
import {SumOfParser} from "./specific/SumOfParser";
import {TfNormParser} from "./specific/TfNormParser";

const allParsers = [
    new BoostParser(),
    new FieldWeightSimilarityParser(),
    new IdfParser(),
    new MaxOfParser(),
    new SumOfParser(),
    new TfNormParser(),
];

export function getAllParsers() {
    return allParsers;
}