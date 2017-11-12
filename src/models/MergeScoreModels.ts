
import {ScoreComponent, ScoreComponentType} from "./ScoreComponent";
import {BaseScoreComponent} from "./BaseScoreComponent";
import {merge} from "d3-array";

export class MergedScoreComponent implements BaseScoreComponent {

    label: string;
    id: number;
    result: number;
    children: MergedScoreComponent[];
    type: ScoreComponentType;

    constructor(private component1: ScoreComponent, private component2: ScoreComponent) {
        // GET COMPONENT WITH
        this.type = component1.type;
    }

}

export function mergeScoreComponents(components1: ScoreComponent[], components2: ScoreComponent[]) : MergedScoreComponent[] {
    const merged: MergedScoreComponent[] = [];
    components1.forEach(c1 => {
        const mergeWith = components2.filter(c2 => c1.type == c2.type);
        const c2 = mergeWith.length > 0 ? mergeWith[0] : null;
        const mergedComponent = new MergedScoreComponent(c1, c2);
        mergedComponent.children = mergeScoreComponents(c1.children, c2 != null ? c2.children : []);
        merged.push(mergedComponent);
    });
    components2.filter(c2 => merged.findIndex(m => m.type == c2.type) < 0).forEach(c2 => {
        const mergedComponent = new MergedScoreComponent(c2, null);
        mergedComponent.children = mergeScoreComponents(c2.children, []);
        merged.push(mergedComponent);
    });
    return merged
}