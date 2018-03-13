import * as React from "react";
import {MainGraph} from "./Graph";




export class App extends React.Component<{}, any> {

    constructor(props) {
        super(props);
        this.state = {
            es_content: ''
        };
    };

    private setEsContent = (e) => {
        this.setState({
            es_content: e.target.value
        });
    };

    render() {

        // const mergedScoreComponent = mergeScoreComponents([parsedMultipleHits[firstIndex].parsedComponent], [parsedMultipleHits[secondIndex].parsedComponent]);
        // const mergedSankeyGraphData = transformForSankey(mergedScoreComponent[0]);
        // interpolate(mergedSankeyGraphData, regressionResult.inverseFn);

        if (this.state.es_content.length > 0){

            return  <div>
                <MainGraph es_content={this.state.es_content}/>
                <textarea style={{height: 100, width: '100%'}} onChange={this.setEsContent}></textarea>
            </div>;
        }
        else {
            return <div>
                <textarea style={{height: 200, width: '100%'}} onChange={this.setEsContent}></textarea>
            </div>
        }


    }

}