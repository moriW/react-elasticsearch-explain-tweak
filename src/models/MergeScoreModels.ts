
import {ScoreComponent, ScoreComponentType} from "./ScoreComponent";
import {BaseScoreComponent} from "./BaseScoreComponent";
import {merge} from "d3-array";

export class MergedScoreComponent implements BaseScoreComponent {

    readonly label: string;
    readonly id: number;
    readonly result: number;
    readonly type: ScoreComponentType;

    children: MergedScoreComponent[];

    constructor(public first: ScoreComponent, public second: ScoreComponent) {
        if (first == null) {
            throw Error("First component is null");
        }
        if (second != null && first.type != second.type) {
            throw Error("Type of first and second component is different")
        }
        const withHigherResult = MergedScoreComponent.getComponentWithHigherResult(first, second);
        this.type = first.type;
        this.label = withHigherResult.label;
        this.id = withHigherResult.id;
        this.result = withHigherResult.result;
    }

    private static getComponentWithHigherResult(component1: ScoreComponent, component2: ScoreComponent) {
        if (component2 == null)
            return component1;
        return component1.result > component2.result ? component1 : component2;
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