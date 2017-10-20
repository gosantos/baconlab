import React from 'react';
import {Card} from 'semantic-ui-react';
import NodeCard from "./node-card";

export default function NodesList({nodes, deleteNode}) {
    const cards = () => {
        return nodes.map(node => {
            return (
                <NodeCard key={node._id} node={node} deleteNode={deleteNode}/>
            )
        })
    }

    return (
        <Card.Group>
            {cards()}
        </Card.Group>
    )
}