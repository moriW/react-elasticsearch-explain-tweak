import {expect} from "chai";
import {ScoreComponent, ScoreComponentType} from "../../src/models/ScoreComponent";
import {MergedScoreComponent, mergeScoreComponents} from "../../src/models/MergeScoreModels";

describe("MergedScoreComponent", () => {

    const component1: ScoreComponent = null;
    const component2: ScoreComponent = null;

    //const mergedComponent: MergedScoreComponent = new MergedScoreComponent(component1, component2);

    it("returns value of first component ordered from highest", () => {

    })

});

describe("mergeScoreComponent", () => {

    const components1 = [
        new ScoreComponent({
            id: 1,
            type: ScoreComponentType.TfNorm,
            label: "some component",
            result: 1,
            children: [new ScoreComponent({
                id: 2,
                type: ScoreComponentType.Boost,
                result: 5,
                children: []
            })]
        })
    ];
    const components2 = [
        new ScoreComponent({
            id: 3,
            type: ScoreComponentType.TfNorm,
            label: "some component",
            result: 2,
            children: [new ScoreComponent({
                id: 10,
                type: ScoreComponentType.Boost,
                result: 5,
                children: []
            }), new ScoreComponent({
                id: 11,
                type: ScoreComponentType.Idf,
                result: 6,
                children: []
            })]
        }),
        new ScoreComponent({
            id: 4,
            type: ScoreComponentType.SumOf,
            label: "some component",
            result: 1.5,
            children: []
        })
    ];

    const merged = mergeScoreComponents(components1, components2);

    it("merges score components by type", () => {
        expect(merged).to.be.lengthOf(2);
        expect(merged.filter(m => m.type == ScoreComponentType.TfNorm)).to.be.lengthOf(1);
        expect(merged.filter(m => m.type == ScoreComponentType.SumOf)).to.be.lengthOf(1);
    });

    it("recursively merges its children", () => {
        const mergedTfNorm = merged.filter(m => m.type == ScoreComponentType.TfNorm)[0];
        const mergedSumOf = merged.filter(m => m.type == ScoreComponentType.SumOf)[0];

        expect(mergedTfNorm.children).to.be.lengthOf(2);
        expect(mergedSumOf.children).to.be.lengthOf(0);

        expect(mergedTfNorm.children.filter(m => m.type == ScoreComponentType.Boost)).to.be.lengthOf(1);
        expect(mergedTfNorm.children.filter(m => m.type == ScoreComponentType.Idf)).to.be.lengthOf(1);
    })



});