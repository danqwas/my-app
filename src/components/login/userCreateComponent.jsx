import React, { Component } from 'react'
import userService from '../../userService';

class CreateUserService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userName:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            role:'',
            typeDocument:'',
            documentId:'',
            bornDate:'',
            gender: '',
            phone: ''
 
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeTypeDocumentHandler = this.changeTypeDocumentHandler.bind(this);
        this.changeDocumentIdHandler = this.changeDocumentIdHandler.bind(this);
        this.changeBornDateHandler = this.changeBornDateHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            userService.getUserById(this.state.id).then( (res) =>{
                let User = res.data;
                this.setState({firstName: User.firstName,
                    lastName: User.lastName,
                    email : User.email,
                    password: User.password,
                    role: User.role,
                    typeDocument: User.typeDocument,
                    documentId: User.documentId,
                    bornDate: User.bornDate,
                    gender: User.gender,
                    phone: User.phone
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let User = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, role: this.state.role, typeDocument: this.state.typeDocument, documentId: this.state.documentId, bornDate: this.state.bornDate, gender: this.state.gender,
        phone: this.state.phone};
        console.log('User => ' + JSON.stringify(User));

        // step 5
        if(this.state.id === '_add'){
            userService.createUser(User).then(res =>{
                this.props.history.push('/UserList');
            });
        }else{
            userService.updateUser(User, this.state.id).then( res => {
                this.props.history.push('/UserList');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }
    changePasswordHandler(event) {
        this.setState({password: event.target.value});
    }
    changeRoleHandler(event) {
        this.setState({role: event.target.value});
    }
    changeTypeDocumentHandler(event) {
        this.setState({typeDocument: event.target.value});
    }
    changeDocumentIdHandler(event) {
        this.setState({documentId: event.target.value});
    }
    changeBornDateHandler(event) {
        this.setState({bornDate: event.target.value});
    }
    changeGenderHandler(event) {
        this.setState({
            gender: event.target.value
        }
        );
    }
    changePhoneHandler(event){
        this.setState({
            phone: event.target.value
        });
    }

    cancel(){
        this.props.history.push('/UserList');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="Role" name="role" className="form-control"
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type Document: </label>
                                            <input placeholder="Type Document" name="typeDocument" className="form-control"
                                                value={this.state.typeDocument} onChange={this.changeTypeDocumentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Document Id: </label>
                                            <input placeholder="Document Id" name="documentId" className="form-control"
                                                value={this.state.documentId} onChange={this.changeDocumentIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Born Date: </label>
                                            <input placeholder="Born Date" name="bornDate" className="form-control"
                                                value={this.state.bornDate} onChange={this.changeBornDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Gender: </label>
                                            <input placeholder='Gender' name='gender' className='form-control'
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Phone: </label>
                                            <input placeholder='Phone' name='phone' className='form-control'
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserService;