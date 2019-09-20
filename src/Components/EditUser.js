import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName : props.userEditObject.fullName
        }
    }
    
    

    //this.props.changeEditUserStatus
    editClick = (event) => {
        //event.preventDefault();

        var info = {}
        //id
        if (this.state.id) {
            info.id = this.state.id;     
        }else {
            info.id = this.props.userEditObject.id;
        }

        //fullName
        if (this.state.fullName) {
            info.fullName = this.state.fullName;   
        }else {
            info.fullName = this.props.userEditObject.fullName;
        }

        //tel
        if (this.state.tel) {
            info.tel = this.state.tel;   
        }else {
            info.tel = this.props.userEditObject.tel;
        }

        if (this.state.permission) {
            info.permission = this.state.permission;   
        }else {
            info.permission = this.props.userEditObject.permission;
        }

        // console.log(info.id);
        // console.log(info.fullName);
        // console.log(info.tel);
        //console.log("permission:" + info.permission);
        //console.log(info);
      
        this.props.getUserEditInfo(info);
    }
    isChange = (event) => {
        //console.log(this.props.userEditObject);

        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        console.log(name);
        console.log(value);
        console.log(this.state);
        
        //var userEditObject = this.props.userEditObject;
        //console.log(userEditObject);
        
        
    }
    
    //this.props.editUserStatus
    //this.props.userEditObject
    //this.props.getUserEditInfo(info)
    showEditUserStatus = () => {
        if (this.props.editUserStatus === true) {            
            return (
                <div className="col">
                    <div className="card border-warning mb-3">
                        <div className="card-header bg-warning text-center">Sửa thông tin User</div>
                        <div className="card-body text-warning">
                            <form>   
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.fullName} name="fullName" type="text"  className="form-control" />
                                </div> 
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" type="text"  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select" required defaultValue={this.props.userEditObject.permission} >
                                        <option value>Chọn quyền mặc định</option>
                                        <option value= {1}>Admin</option>
                                        <option value= {2}>Coordinator</option>
                                        <option value= {3}>Employee</option>
                                        <option value= {4}>Normal</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button"  className="btn btn-warning btn-block" onClick={(event) => this.editClick(event)}> <i className="fa fa-edit  pr-1" /> Sửa</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        // console.log("id la : " + this.state.id);
        // console.log("props: " + this.props.userEditObject.id);  
        // console.log("props: " + this.props.userEditObject.fullName);  
        // console.log("props: " + this.props.userEditObject.tel); 
        // console.log("props: " + this.props.userEditObject.permission);   
        return (
            <div>
                {this.showEditUserStatus()}
            </div>
        );
    }
}

export default EditUser;