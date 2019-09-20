import React, { Component } from 'react';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }
    
    showBtn = () => {
        if(this.props.showBtn === true){
            return (
                <button type="button" className="btn btn-secondary mb-2" onClick={() => this.props.changeState()} > <i className="fa fa-remove  pr-1" /> Đóng lại</button>
            );
        }
        else {
            return (
                <button type="button" className="btn btn-success mb-2" onClick={() => this.props.changeState()} > <i className="fa fa-user-plus  pr-1" /> Thêm User</button>
                );
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        });
        this.props.getSearchTextProps(event.target.value);
    }
    render() {
        return (
            <div className="col-12 formSearch">
                <div className="row">
                    <div className="form-group col-12 col-lg-6">
                        <div className="btn-group btn-group-search">
                            <input type="text" className="form-control" placeholder="Tìm kiếm theo tên.." onChange={(event)=>this.isChange(event)} />
                            <button className="btn btn-info" onClick={(tempValue) => this.props.getSearchTextProps(this.state.tempValue)}><i className="fa fa-search " /> Tìm</button>
                        </div>
                    </div>
                    <div className="form-group col-12 col-lg-6">
                        <div className="btn-group btn-group-addclose">
                            {this.showBtn()}
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default SearchForm;