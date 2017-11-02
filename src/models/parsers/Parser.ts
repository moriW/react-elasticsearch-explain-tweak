
import {ScoreComponent} from "../ScoreComponent";

export interface ExplainScoreComponent {
    value: number,
    description: string,
    details: ExplainScoreComponent[]
}

export class Parser<TReturnComponent extends ScoreComponent = ScoreComponent> {

    canParse = (componentDescription: string): boolean => false;

    parse = (explainScoreComponent: ExplainScoreComponent): TReturnComponent => {
        const parsed = this.parseWithoutChildren(explainScoreComponent);
        parsed.children = explainScoreComponent.details.map(child => {
            let childParser = this.getChildrenParsers().find(parser => parser.canParse(child.description));
            if (childParser == null) {
                childParser = this.getFallbackParsers().find(parser => parser.canParse(child.description));
                const logMessage = `No parser found for child '${child.description}' of '${explainScoreComponent.description}'`;
                if (childParser == null) {
                    console.error(logMessage)
                } else {
                    console.warn(logMessage);
                }
            }

            if (childParser != null) {
                return childParser.parse(child)
            } else {
                return null;
            }

        }).filter(parsedChild => parsedChild != null);
        return parsed;
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): TReturnComponent => { throw Error("parseWithoutChildren not implemented") };

    getChildrenParsers = (): Parser<ScoreComponent>[] => [];

    /**
     * When any of Parsers returned by getChildrenParsers do not fit, Parser will search
     * for Parser returned by getFallbackParsers to handle children
     * @returns {Parser[]}
     */
    getFallbackParsers = (): Parser<TReturnComponent>[] => []

}