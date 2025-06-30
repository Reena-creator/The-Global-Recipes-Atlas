import React, { Component } from 'react'
import List from '../List'

export default class Chinese extends Component {
  render() {
    return (
      <>
      <div className='d-flex flex-column align-items-center' style={{fontFamily: 'initial', fontWeight: 'bolder', fontSize: '40px'}}>
        <img className = " my-3" style={{width: '150px', borderRadius: '15px'}} src="https://media.istockphoto.com/id/164400882/vector/chinese-character-eating-noodles.jpg?s=612x612&w=0&k=20&c=Rk-PVzTIJKXcVYjedVk6l7gLRszX0yibeOgTzY8rx6s=" alt="..."/>
        Let's try some Chinese Dishes
      </div>
      <div>
        <List cuisine="Chinese"/>
      </div>
      </>
    )
  }
}
