import React, { Component } from 'react'
import List from '../List'

export default class Mexican extends Component {
  render() {
    return (
        <>
        <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://img.freepik.com/free-vector/nachos-mexican-food-cartoon-character_1308-115288.jpg" alt="..."/>
        Let's try some Mexican Dishes
        </div>
        <div>
        <List cuisine="Mexican"/>
        </div>
        </>
    )
  }
}
