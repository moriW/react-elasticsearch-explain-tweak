
import {ScoreComponent} from "../ScoreComponent";
import {SankeyScoreComponentsData} from "../../types/SankeyScoreComponentsData";

function addNodesAndLinksRecursively(scoreComponent: ScoreComponent, sankeyData: SankeyScoreComponentsData) {
    sankeyData.nodes.push({
        name: scoreComponent.label,
        nodeId: scoreComponent.id,
        value: scoreComponent.result
    });

    scoreComponent.children.forEach(child => {
       sankeyData.links.push({
           source: scoreComponent.id,
           target: child.id,
           value: child.result
       });
       addNodesAndLinksRecursively(child, sankeyData);
   });
}

export default function transformForSankey(scoreComponent: ScoreComponent): SankeyScoreComponentsData {
    const data: SankeyScoreComponentsData = {
        nodes: [],
        links: []
    };

    addNodesAndLinksRecursively(scoreComponent, data);
    return data;
}