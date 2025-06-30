import React, { Component } from 'react'
import List from '../List'

export default class Thai extends Component {
  render() {
    return (
        <>
        <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://media.istockphoto.com/id/595767810/vector/thai-food.jpg?s=612x612&w=0&k=20&c=WlfRX7-VGsFNFaWjKNACEcoJzQ_vJlueoX_Y8lGqbc8=" alt="..."/>
        Let's try some Mexican Dishes
        </div>
        <div>
        <List cuisine="Thai"/>
        </div>
        </>
    )
  }
}
