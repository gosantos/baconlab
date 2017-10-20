import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NodesListPage from './pages/nodes-list-page';
import NodeFormPage from './pages/node-form-page';

class App extends Component {
    render() {
        return (
            <Container>
                <div className="ui two item menu">
                    <NavLink className="item" activeClassName="active" exact to="/">
                        Nodes List
                    </NavLink>
                    <NavLink className="item" activeClassName="active" exact to="/node/new">
                        Add Node
                    </NavLink>
                </div>
                <Route exact path="/" component={NodesListPage}/>
                <Route path="/node/new" component={NodeFormPage}/>
                <Route path="/node/edit/:_id" component={NodeFormPage}/>
            </Container>
        );
    }
}

export default App;