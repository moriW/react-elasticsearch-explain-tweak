
import {ScoreComponent, ScoreComponentType} from "./ScoreComponent";
import {BaseScoreComponent} from "./BaseScoreComponent";
import {merge} from "d3-array";

export class MergedScoreComponent implements BaseScoreComponent {

    readonly label: string;
    readonly result: number;
    readonly type: ScoreComponentType;

    children: MergedScoreComponent[];

    constructor(public first: ScoreComponent, public second: ScoreComponent, public readonly id: number) {
        if (first == null) {
            throw Error("First component is null");
        }
        if (second != null && first.type != second.type) {
            throw Error("Type of first and second component is different")
        }
        const withHigherResult = MergedScoreComponent.getComponentWithHigherResult(first, second);
        this.type = first.type;
        this.label = withHigherResult.label;
        this.result = withHigherResult.result;
    }

    private static getComponentWithHigherResult(component1: ScoreComponent, component2: ScoreComponent) {
        if (component2 == null)
            return component1;
        return component1.result > component2.result ? component1 : component2;
    }
}

export function mergeScoreComponents(components1: ScoreComponent[], components2: ScoreComponent[], mergingContext: MergingScoreComponentsContext = new MergingScoreComponentsContext()) : MergedScoreComponent[] {
    const merged: MergedScoreComponent[] = [];
    components1.forEach(c1 => {
        let mergeWith = components2.filter(c2 => c1.type == c2.type);
        let c2: ScoreComponent = null;
        if (mergeWith.length > 1) {
            mergeWith = mergeWith.filter(c2 => c1.label == c2.label);
            if (mergeWith.length > 1)
                throw Error("Error!!!! FixME!!!");
            else if (mergeWith.length == 1)
                c2 = mergeWith[0];
        } else if (mergeWith.length == 1) {
            c2 = mergeWith[0];
        }

        const mergedComponent = new MergedScoreComponent(c1, c2, mergingContext.generateNewComponentId());
        mergedComponent.children = mergeScoreComponents(c1.children, c2 != null ? c2.children : [], mergingContext);
        merged.push(mergedComponent);
    });
    components2.filter(c2 => merged.findIndex(m => m.type == c2.type) < 0).forEach(c2 => {
        const mergedComponent = new MergedScoreComponent(c2, null, mergingContext.generateNewComponentId());
        mergedComponent.children = mergeScoreComponents(c2.children, [], mergingContext);
        merged.push(mergedComponent);
    });
    return merged
}

class MergingScoreComponentsContext {

    private nextComponentId = 0;

    generateNewComponentId = () => {
        return this.nextComponentId++;
    }

}