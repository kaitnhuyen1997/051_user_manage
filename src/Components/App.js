import React, {Component} from 'react';
import './../css/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import EditUser from './EditUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm : false,
      data : [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  componentWillMount () {
    //console.log(localStorage.getItem('userData'));
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data : temp
      });
    }
  }
  changeState = () => {
    this.setState({
      showAddForm : !this.state.showAddForm
    })
  }
  getNewAddUser = (fullName, tel, permission) => {
    //console.log("connect success");
    var item = {};
    item.id = uuidv1();
    item.fullName = fullName;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    //console.log(items);
    localStorage.setItem('userData', JSON.stringify(items));

  }
  getSearchText = (tempValue) => {
    this.setState ({
      searchText: tempValue
    })
    //console.log("Dữ liệu search nhận được là : " + this.state.searchText);
    //localStorage.setItem('userData', JSON.stringify(tempValue));
  }

  editUser = (user) => {
    //console.log("okie rồi");
    //console.log(user);  
    this.setState({
      userEditObject: user
    });
    
  }
  deleteUser = (idUser) => {
    //console.log(idUser);
    var tempData = this.state.data.filter(item => item.id !== idUser );
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  changeEditUserStatus = () => {
    this.setState ({
      editUserStatus : !this.state.editUserStatus
    })
    //console.log(this.state.editUserStatus);
  }

  getUserEditInfo = (info) => {
    this.setState({
      userEditObject : info
    });
    // console.log("Thông tin nhận được là" + info.id);
    // console.log("Thông tin nhận được là" + info.fullName);
    // console.log("Thông tin nhận được là" + info.tel);
    //console.log("Thông tin nhận được là" + info.permission);
    // console.log("state nhận được là" + this.state.userEditObject.fullName);
    //Duyet tung phan tu
    this.state.data.forEach((value,key) => {
      //console.log(value.fullName);
      if (value.id === info.id) {
        value.fullName = info.fullName;
        value.tel = info.tel;
        value.permission = info.permission;
      }
      localStorage.setItem('userData', JSON.stringify(this.state.data));
    })

  }

  // thongBao = () => { alert("success")};
  render () {
    //localStorage.setItem('userData', JSON.stringify(DataUser));
    //console.log(this.state.data);
    var searchResult = [];

    this.state.data.forEach((item) => {
      if (item.fullName.indexOf(this.state.searchText) !== -1) {
        searchResult.push(item);
      } 
    });
    //console.log(searchResult);
    return (
      <div>
        <Header/>
        <div className="main pb-5">
          <div className="container">
            <div className="row">
              <SearchForm changeState={()=> this.changeState()} 
              showBtn = {this.state.showAddForm}
              getSearchTextProps={(tempValue)=>this.getSearchText(tempValue)}
              />
            </div>
            <div className="row">
              <AddUser showAddForm = {this.state.showAddForm} addUser={(fullName, tel, permission) => this.getNewAddUser(fullName, tel, permission)}/>
              <EditUser editUserStatus={this.state.editUserStatus} 
              changeEditUserStatus = {this.changeEditUserStatus}
              userEditObject = {this.state.userEditObject} 
              getUserEditInfo = {(info) => this.getUserEditInfo(info)}
              />
              <TableData dataUserProps = {searchResult} 
              editUserFun= {(user) => {this.editUser(user)}}
              changeEditUserStatus = {() => this.changeEditUserStatus()}
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              />
            </div>
          </div>
        </div>
        <Footer/>
        
      </div>
    );
  }
}


export default App;
