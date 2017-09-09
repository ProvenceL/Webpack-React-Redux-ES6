import React, {Component} from 'react'

export default class extends Component{
  render(){
    let {test} = this.props;
    return <div className='test'>{test}</div>
  }
}