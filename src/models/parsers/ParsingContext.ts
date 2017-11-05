
export class ParsingContext {

    private nextComponentId = 0;

    generateNewComponentId = () => {
        return this.nextComponentId++;
    }

}