import React, { Component }  from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CustomForm extends Component {
    

    state = {
        title : '', 
        body: '',
        isInit: true
    }

    componentDidUpdate(){
        if (this.state.isInit){
            this.setState({
                title: this.props.title,
                body: this.props.bodyText,
                isInit: false
            })
        }
    }

    titleOnChanged = (e) => {
        let val = e.currentTarget.value; 
        this.setState({
            title: val
        });
    }

    bodyOnChanged = (e) => {
        let val = e.currentTarget.value; 
        this.setState({
            body: val
        });
    }

    onSubmit = (e) => {
        this.props.onSubmitHandler(this.state.title, this.state.body); 
    }

    render(){

        return (
            <Form>
                <FormGroup>
                    <Input id="title" placeholder="title here" value={this.state.title? this.state.title : ''} onChange={this.titleOnChanged}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" value={this.state.body? this.state.body : ''} onChange={this.bodyOnChanged}></Input>
                </FormGroup>
                <Button onClick={this.props.onCancelHandler}>Cancel</Button>
                <Button onClick={this.onSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default CustomForm; 