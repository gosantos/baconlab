import React from 'react';
import {Card, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default function NodeCard({node, deleteNode}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {node.name}
                </Card.Header>
                <Card.Description>
                    <p>{node.iface}</p>
                    <p>{node.address}</p>
                    <p>{node.last_heartbeat}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/node/edit/${node._id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={() => deleteNode(node._id)}>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}
