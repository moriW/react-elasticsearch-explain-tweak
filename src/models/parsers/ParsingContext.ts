
import {BaseScoreComponent} from "../BaseScoreComponent";

export class ParsingContext {

    private nextComponentId = 0;

    public readonly subDataSets: BaseScoreComponent[] = [];

    generateNewComponentId = () => {
        return this.nextComponentId++;
    }

}