import React, { Component } from 'react'
import List from '../List'

export default class Italian extends Component {
  render() {
    return (
      <>
      <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://st.depositphotos.com/1012331/2024/i/450/depositphotos_20247905-stock-illustration-happy-joyful-chef-and-traditional.jpg" alt="..."/>
        Let's try some Italian Dishes
      </div>
      <div>
        <List cuisine="Italian"/>
      </div>
      </>
    )
  }
}
