import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            fullName : "",
            tel : "",
            permission : "",
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //console.log(name);
        //console.log(value);
        this.setState({
            [name] : value
        });

        //package to item
        // var item = {}
        // item.id = this.state.id;
        // item.fullName = this.state.fullName;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
        
    }

    checkStateForm = () => {
        if(this.props.showAddForm === true){
            return (
                <div className="col">
                    <div className="card border-success mb-3">
                        <div className="card-header bg-success text-white">Thêm mới User vào hệ thống</div>
                        <div className="card-body text-success">
                            <form>
                                <div className="form-group">
                                    <input name="fullName" type="text"  className="form-control" placeholder="Tên user" onChange = {(event) => this.isChange(event)}/>
                                </div> 
                                <div className="form-group">
                                    <input name="tel" type="text"  className="form-control" placeholder="Số điện thoại" onChange = {(event) => this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                    <select name="permission" className="custom-select" required onChange = {(event) => this.isChange(event)}>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value= {1}>Admin</option>
                                        <option value= {2}>Coordinator</option>
                                        <option value= {3}>Employee</option>
                                        <option value= {4}>Normal</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="reset"  className="btn btn-success btn-block" onClick = {(fullName, tel, permission) => this.props.addUser(this.state.fullName, this.state.tel, this.state.permission)}> <i className="fa fa-user-plus  pr-1" /> Thêm mới</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        // console.log(this.props.showAddForm);
        
        return (      
            <div >
                {this.checkStateForm()}
            </div>
        );
    }
}

export default AddUser;