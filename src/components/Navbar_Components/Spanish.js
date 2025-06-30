import React, { Component } from 'react'
import List from '../List'

export default class Spanish extends Component {
  render() {
    return (
        <>
        <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://static.vecteezy.com/system/resources/previews/013/612/645/non_2x/spanish-food-cuisine-menu-restaurant-with-various-of-traditional-dish-recipe-on-flat-cartoon-hand-drawn-templates-illustration-vector.jpg" alt="..."/>
        Let's try some Spanish Dishes
        </div>
        <div>
        <List cuisine="Spanish"/>
        </div>
      </>
    )
  }
}
