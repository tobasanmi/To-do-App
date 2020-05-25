import React, { Component } from 'react'
import TodoItems from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items,deleteList,deletedItem}=this.props;
        return (
            <div>
                 <ul className='list-group my-5'>
                     {
                        items.map(item=>{
                            return <TodoItems 
                             key = {item.id}
                             title={item.title}
                             deletedItem={()=> deletedItem(item.id)}
                             />
                        })
                     }
                
            </ul>
             <button  onClick = {deleteList} className='btn btn-block btn-danger col-10 my-3'>Delete List</button>
            </div>
           
            
        )
    }
}
