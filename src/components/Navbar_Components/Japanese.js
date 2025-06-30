import React, { Component } from 'react'
import List from '../List'

export default class Japanese extends Component {
  render() {
    return (
      <>
      <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://static.vecteezy.com/system/resources/previews/009/668/882/non_2x/japanese-food-building-cartoon-illustration-vector.jpg" alt="..."/>
        Let's try some Japanese Dishes
      </div>
      <div>
        <List cuisine="Japanese"/>
      </div>
      </>
    )
  }
}
