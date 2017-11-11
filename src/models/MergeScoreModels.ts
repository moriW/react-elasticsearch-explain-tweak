
import {ScoreComponent} from "./ScoreComponent";
import {BaseScoreComponent} from "./BaseScoreComponent";

export class MergedScoreComponent implements BaseScoreComponent {

    label: string;
    id: number;
    result: number;
    children: BaseScoreComponent[];

    constructor(private component1: ScoreComponent, private component2: ScoreComponent) {
        // GET COMPONENT WITH
    }





}

export function mergeScoreComponents(components1: ScoreComponent[], components2: ScoreComponent) : MergedScoreComponent[] {
    return []
}