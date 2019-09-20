import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    //props.deleteUser
    clickDetele = (idUser) => {
        //console.log(idUser); 
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => (
        this.props.dataUserProps.map((value,key) => (
            <TableDataRow 
            key={key} 
            number={key}
            id={value.id} 
            fullName={value.fullName} 
            tel={value.tel} 
            permission={value.permission} 
            editUserFun= {(user) => this.props.editUserFun(value)}
            changeEditUserStatus = {() => this.props.changeEditUserStatus()}
            clickDetele = {(idUser) => this.clickDetele(idUser)}
            />
        ))
    ) 
    //this.props.editUserFun
    //this.props.changeEditUserStatus
    

    render() {
        //console.log(this.props.dataUserProps);

        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.mappingDataUser()}

                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;