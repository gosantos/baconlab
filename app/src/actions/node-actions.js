import {client} from './';
import {FETCH_NODES, FETCH_NODE, NEW_NODE, SAVE_NODE, UPDATE_NODE, DELETE_NODE} from '../types';

const url = '/nodes';

export function fetchNodes() {
    return dispatch => {
        dispatch({
            type: FETCH_NODES,
            payload: client.get(url)
        })
    }
}

export function fetchNode(_id) {
    return dispatch => {
        return dispatch({
            type: FETCH_NODE,
            payload: client.get(`${url}/${_id}`)
        })
    }
}

export function newNode() {
    return dispatch => {
        dispatch({
            type: NEW_NODE,
        })
    }
}

export function saveNode(node) {
    return dispatch => {
        return dispatch({
            type: SAVE_NODE,
            payload: client.post(url, node)
        })
    }
}

export function updateNode(node) {
    return dispatch => {
        return dispatch({
            type: UPDATE_NODE,
            payload: client.put(`${url}/${node._id}`, node)
        })
    }
}

export function deleteNode(_id) {
    return dispatch => {
        return dispatch({
            type: DELETE_NODE,
            payload: client.delete(`${url}/${_id}`)
        })
    }
}