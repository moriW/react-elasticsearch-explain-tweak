import {expect} from "chai";
import {ScoreComponent, ScoreComponentType} from "../../src/models/ScoreComponent";
import {MergedScoreComponent, mergeScoreComponents} from "../../src/models/MergeScoreModels";

describe("MergedScoreComponent", () => {

    const component1: ScoreComponent = new ScoreComponent({
        id: 1,
        label: "c1",
        result: 1
    });
    const component2: ScoreComponent = new ScoreComponent({
        id: 2,
        label: "c2",
        result: 2
    });

    it("assigns its values from the highest result component", () => {
        const mergedComponent: MergedScoreComponent = new MergedScoreComponent(component1, component2, 10);
        expect(mergedComponent).to.have.property("id", 10);
        expect(mergedComponent).to.have.property("label", "c2");
        expect(mergedComponent).to.have.property("result", 2);
    });

    it("assigns values from first component when second is null", () => {
        const mergedComponent: MergedScoreComponent = new MergedScoreComponent(component1, null, 10);
        expect(mergedComponent).to.have.property("id", 10);
        expect(mergedComponent).to.have.property("label", "c1");
        expect(mergedComponent).to.have.property("result", 1);
    });

    it("throws error when first component is null", () => {
        expect(() => { new MergedScoreComponent(null, null, 10) }).to.throw("First component is null");
    });

    it("throws error when first and second have different type", () => {

        const component1: ScoreComponent = new ScoreComponent({
            id: 1,
            label: "c1",
            result: 1,
            type: ScoreComponentType.TfNorm
        });
        const component2: ScoreComponent = new ScoreComponent({
            id: 2,
            label: "c2",
            result: 2,
            type: ScoreComponentType.Boost
        });

        expect(() => new MergedScoreComponent(component1, component2, 10)).to.throw("Type of first and second component is different");
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

    it("merges score components by label and type when more than one found by type", () => {

    });

    it("throws exception when more than one found with same type and label", () => {

    });

    it("creates new ids for all components", () => {

    });

    it("recursively merges its children", () => {
        const mergedTfNorm = merged.filter(m => m.type == ScoreComponentType.TfNorm)[0];
        const mergedSumOf = merged.filter(m => m.type == ScoreComponentType.SumOf)[0];

        expect(mergedTfNorm.children).to.be.lengthOf(2);
        expect(mergedSumOf.children).to.be.lengthOf(0);

        expect(mergedTfNorm.children.filter(m => m.type == ScoreComponentType.Boost)).to.be.lengthOf(1);
        expect(mergedTfNorm.children.filter(m => m.type == ScoreComponentType.Idf)).to.be.lengthOf(1);
    });
});