import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <h1 className="text-danger text-center py-5 font-weight-light">Project quản lý thành viên bằng Reactjs <br /> với dữ liệu Json</h1>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;