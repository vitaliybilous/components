import React, { Component } from 'react'
export class ErrorPage extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, link_url, link_title} = this.props

    return (
      <div className='offside'>
        <div className='offside__contents'>
          <h1 className='offside__title'>{ title }</h1>
          <h2 className='offside__subtitle'>{ subtitle }</h2>
          <a className='offside__link' href={`${link_url}`}>{link_title}</a>
        </div>
      </div>
    );
  }
}