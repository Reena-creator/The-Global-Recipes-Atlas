import React, { Component } from 'react'
import List from '../List'

export default class Indian extends Component {
  render() {
    return (
      <>
      <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = "my-3" style={{width: '150px', borderRadius: '15px'}} src="https://static.vecteezy.com/system/resources/previews/005/624/848/non_2x/indian-food-logo-vector.jpg" alt="..."/>
        Let's try some Indian Dishes
      </div>
      <div>
        <List cuisine="Indian"/>
      </div>
      </>
    )
  }
}
