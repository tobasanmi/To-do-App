import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        const {title,deletedItem}= this.props;
        return (
            <li className='list-group-item col-10'>
                <div className= 'd-flex justify-content-between'>
                <h5>{title}</h5>
                <span onClick= {deletedItem}><i className="fas fa-trash fa-1x"></i></span>
                </div>
               
            </li>
        )
    }
}
