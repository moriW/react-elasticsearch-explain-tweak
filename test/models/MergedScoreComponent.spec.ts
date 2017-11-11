
import {ScoreComponent, ScoreComponentType} from "../../src/models/ScoreComponent";
import {MergedScoreComponent} from "../../src/models/MergeScoreModels";

describe("MergedScoreComponent", () => {

    const component1: ScoreComponent = null;
    const component2: ScoreComponent = null;

    const mergedComponent: MergedScoreComponent = new MergedScoreComponent(component1, component2);

    it("returns value of first component ordered from highest", () => {

    })

});

describe("mergeScoreComponent", () => {

    const components1 = [
        new ScoreComponent({
            type: ScoreComponentType.TfNorm,
            label: "some component",
            result: 1,
            children: [new ScoreComponent({

            })]
        })
    ];
    const components2 = [];

    it("merges score components by type", () => {

    });

    it("recursively handles a children", () => {

    });



});