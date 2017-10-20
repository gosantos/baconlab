import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newNode, saveNode, fetchNode, updateNode } from '../actions/node-actions';
import NodeForm from '../components/node-form';

class NodeFormPage extends Component {
    state = {
        redirect: false
    }

    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if (_id) {
            this.props.fetchNode(_id);
        } else {
            this.props.newNode();
        }
    }

    submit = (node) => {
        if(!node._id) {
            return this.props.saveNode(node)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateNode(node)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    }

    render() {
        console.log("oi");
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to="/" /> :
                        <NodeForm node={this.props.node} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        node: state.nodeStore.node,
        errors: state.nodeStore.errors
    }
}

export default connect(
    mapStateToProps, {newNode, saveNode, fetchNode, updateNode})(NodeFormPage);