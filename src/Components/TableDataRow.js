import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermission = () => {
        if (this.props.permission === '1') {
            return "Admin";
        }
        else if (this.props.permission === '2'){
            return "Coordinator";
        }
        else if (this.props.permission === '3'){
            return "Employee";
        }
        else {
            return "Normal";
        }
    }
    clickEdit = () => {
        this.props.editUserFun(); 
        this.props.changeEditUserStatus();
    }
    //props.clickDetele
    clickDetele = (idUser) => {
        //console.log(idUser);
        this.props.clickDetele(idUser);
    }
    //this.props.editUserFun
    render() {     
        return (
            <tr>
                <td >{this.props.number+1}</td>
                <td>{this.props.fullName}</td>
                <td>{this.props.tel}</td>
                <td>{this.showPermission()}</td>
                {/* <td>{this.props.permission}</td> */}
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={() => this.clickEdit()}><i className="fa fa-edit" /> Sửa</button>
                        <button className="btn btn-danger" onClick={(idUser) => this.clickDetele(this.props.id)}><i className="fa fa-remove" /> Xoá</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;