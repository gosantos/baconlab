import {
    FETCH_NODES, FETCH_NODES_FULFILLED, FETCH_NODES_REJECTED, NEW_NODE, FETCH_NODE, FETCH_NODE_PENDING,
    FETCH_NODE_FULFILLED, FETCH_NODE_REJECTED, SAVE_NODE, SAVE_NODE_PENDING, SAVE_NODE_FULFILLED, SAVE_NODE_REJECTED,
    UPDATE_NODE_PENDING, UPDATE_NODE_FULFILLED, UPDATE_NODE_REJECTED, DELETE_NODE, DELETE_NODE_FULFILLED
} from "../types"; // TODO

const defaultState = {
    nodes: [],
    node: { name: "" },
    loading: false,
    errors: {}
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case FETCH_NODES: {
            return {
                ...state,
                nodes: action.payload.data
            }
        }

        case FETCH_NODES_FULFILLED: {
            return {
                ...state,
                nodes: action.payload.data
            }
        }

        case FETCH_NODES_REJECTED: {
            return {
                ...state,
                nodes: action.payload.data
            }
        }

        case FETCH_NODE_PENDING: {
            return {
                ...state,
                loading: true,
                node: {name: {}}
            }
        }

        case FETCH_NODE_FULFILLED: {
            return {
                ...state,
                node: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case UPDATE_NODE_PENDING: {
            return {
                ...state,
                loading: true
            }
        }

        case UPDATE_NODE_FULFILLED: {
            const node = action.payload.data;
            return {
                ...state,
                nodes: state.nodes.map(item => item._id === node._id ? node : item),
                errors: {},
                loading: false
            }
        }

        case UPDATE_NODE_REJECTED: {
            const data = action.payload.response.data;
            const {name, iface, address, last_heartbeat} = data.errors;
            const errors = {global: data.message, name: name, iface, address, last_heartbeat};
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case NEW_NODE: {
            return {
                ...state,
                node: {name: ""}
            }
        }

        case SAVE_NODE_PENDING: {
            return {
                ...state,
                loading: true
            }
        }

        case SAVE_NODE_FULFILLED: {
            return {
                ...state,
                nodes: [...state.nodes, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case SAVE_NODE_REJECTED: {
            const data = action.payload.response.data;
            const {name, iface, address, last_heartbeat} = data.errors;
            const errors = {global: data.message, name: name, iface, address, last_heartbeat};
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case DELETE_NODE_FULFILLED: {
            const _id = action.payload.data._id;
            return {
                ...state,
                nodes: state.nodes.filter(item => item._id != _id)
            }
        }

        default:
            return state;
    }
}