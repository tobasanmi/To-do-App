import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem'
import {v4 as uuidv4} from 'uuid';
class App extends Component {
      constructor(props){
        super(props);
        this.state={
          items:[],
          item : '',
          id:uuidv4(),
          editItem : false
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteList=this.deleteList.bind(this);
        this.deletedItem = this.deletedItem.bind(this);
      }
      handleChange(e){
          this.setState({
            item: e.target.value 
          });
      }
      handleSubmit(e){
        e.preventDefault();
        const newItem = {
          title : this.state.item,
          id:uuidv4()
        }
        const updatedItem = [...this.state.items,newItem];
        this.setState({
          items:updatedItem,
          item : ''
        })
      }
      deleteList(){
        this.setState({
          items:[]
        })
      }
      deletedItem(id){
        const filteredItem = this.state.items.filter(item=>item.id !==id);
        this.setState({
          items:filteredItem
        })
      }
  render(){
   console.log(this.state.items);
    return (
      <div className= 'container'>
        <div className='row'>
          <div className='col-10 mx-auto my-5'>
            <h1 className='text-center col-10'>To-do App</h1>
          <TodoInput 
          item ={this.state.item} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
          <TodoList items={this.state.items}
           deleteList={this.deleteList}
           deletedItem = {this.deletedItem}
           />
          </div>
        </div>
      
      </div>
      
    );
  }
  
}

export default App;
