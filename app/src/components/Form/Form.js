import React, { Component }  from 'react'; 
import { Button, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { DefaultString } from '../../constants/constants'; 
class CustomForm extends Component {
    

    state = {
        title : '', 
        body: '',
        isInit: true, 
        dropdownOpen: false, 
        category: this.props.category ? this.props.category : DefaultString
    }

    componentDidUpdate(){
        if (this.state.isInit){
            this.setState({
                title: this.props.title,
                body: this.props.bodyText,
                isInit: false, 
                category: this.props.category ? this.props.category : DefaultString
            })
        }
    }

    titleOnChanged = (e) => {
        const val = e.currentTarget.value; 
        this.setState({
            title: val
        });
    }

    bodyOnChanged = (e) => {
        const val = e.currentTarget.value; 
        this.setState({
            body: val
        });
    }

    onSubmit = (e) => {
        this.props.onSubmitHandler(this.state.title, this.state.body, this.state.category); 
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    generateCategory = () => {
        return this.props.categories.map(category => {
            return <DropdownItem key={category.name} onClick={e => this.selectedDDL(category.name)}>{category.name}</DropdownItem>
        })
    }

    selectedDDL = (category) => {
        this.setState({category: category}); 
    }

    render(){
        return (
            <Form>
                <FormGroup>
                    <Input id="title" placeholder="title here" value={this.state.title? this.state.title : ''} onChange={this.titleOnChanged}></Input>
                </FormGroup>
                <FormGroup>
                    <Dropdown className="dropdown-category" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle>
                            {this.state.category}
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                            {this.generateCategory()} 
                        </DropdownMenu>
                    </Dropdown>
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