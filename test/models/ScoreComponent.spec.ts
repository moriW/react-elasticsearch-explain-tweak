import {expect} from "chai";
import {ScoreComponent, ScoreComponentType} from "../../src/models/ScoreComponent";


describe("ScoreComponent", () => {

    it("Throws error when child component not found by type", () => {
        const parsedComponent = new ScoreComponent({
            label: "dummy",
            result: 1,
            type: ScoreComponentType.TfNorm,
            children: [
                new ScoreComponent({
                    label: "child1",
                    result: 2,
                    type: ScoreComponentType.DocumentFrequency
                })
            ]
        });

        expect(() => parsedComponent.getChildByType(ScoreComponentType.Generic)).to.throw();

    });
});