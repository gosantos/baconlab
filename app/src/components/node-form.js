import React, {Component} from 'react';
import {Form, Grid, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import classnames from 'classnames';

class NodeForm extends Component {
    constructor(){
        super();
        this.state = {
            devices: [],
            counter: 0
        };

        this.addDevice = this.addDevice.bind(this);
    }

    addDevice() {
        this.setState({
            counter: this.state.counter + 1,
            devices: this.state.devices.concat([this.state.counter])
        });
    }

    componentWillReceiveProps = (nextProps) => {
        const {node} = nextProps;
        if (node._id !== this.props.node._id) {
            this.props.initialize(node)
        }
    }

    renderField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    deleteDevice(id) {
        this.setState({
            devices: this.state.devices.filter( (_id) => id !== _id)
        })
    }

    render() {
        const {handleSubmit, pristine, submitting, loading} = this.props;


        const renderDevices = this.state.devices.map(
            id =>
                <Grid columns={3} key={id}>
                    <Grid.Column>
                        <Field name={`device_name[${id}]`} type="text" component={this.renderField} label={`Device Name`} />
                    </Grid.Column>
                    <Grid.Column>
                        <Field name={`device_value[${id}]`}  type="text" component={this.renderField} label={`Device Value`} />
                    </Grid.Column>
                    <Grid.Column>
                        <Button color="red" onClick={() => this.deleteDevice(id)}>Delete</Button>
                    </Grid.Column>
                </Grid>
        );

        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop: "1em"}}>{this.props.node._id ? 'Edit Node' : 'Add New Node'}</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="name" type="text" component={this.renderField} label="Name"/>
                        <Field name="iface" type="text" component={this.renderField} label="Interface"/>
                        <Field name="address" type="text" component={this.renderField} label="Address"/>
                        <Field name="last_heartbeat" type="text" component={this.renderField} label="Last Heartbeat"/>

                        { renderDevices }

                        <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
                    </Form>
                    <Button onClick={this.addDevice}> Add Device </Button>
                </Grid.Column>
            </Grid>
        )
    }

}

export default reduxForm({form: 'node'})(NodeForm);