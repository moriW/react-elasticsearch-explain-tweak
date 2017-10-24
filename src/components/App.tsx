import * as React from "react";
import {SankeyDiagram} from "./SankeyDiagram";

export class App extends React.Component<{}, {}> {

    render() {
        return <div>
            <SankeyDiagram />
        </div>
    }

}