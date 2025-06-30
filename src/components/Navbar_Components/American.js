import React, { Component } from 'react'
import List from '../List'

export default class American extends Component {
  render() {
    return (
      <>
      <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://img.freepik.com/free-vector/hand-drawn-burger-illustration_52683-152525.jpg?semt=ais_hybrid&w=740" alt="..."/>
        Let's try some American Dishes
      </div>
      <div>
        <List cuisine="American"/>
      </div>
      </>
    )
  }
}
