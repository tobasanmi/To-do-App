import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange,handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}> 
                <div className='form-group'>
                <input type='text' 
                value={item} 
                onChange= {handleChange}
                className='form-control col-10' 
                placeholder='What would you like to do today'>
                </input>
                </div>
             <button className='btn btn-primary col-10'>Add Item</button>
            </form>
        )
    }
}
