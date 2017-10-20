import React, {Component} from 'react';
import {connect} from 'react-redux';
import NodesList from '../components/nodes-list';
import {deleteNode, fetchNodes} from "../actions/node-actions";

class NodesListPage extends Component {
    componentDidMount() {
        this.props.fetchNodes();
    }

    render() {
        return (
            <div>
                <h1>List of Nodes</h1>
                <NodesList nodes={this.props.nodes} deleteNode={this.props.deleteNode}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        nodes: state.nodeStore.nodes
    }
}

export default connect(mapStateToProps, {fetchNodes, deleteNode})(NodesListPage);
