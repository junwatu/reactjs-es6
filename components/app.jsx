import React from 'react';

export default class App extends React.Componnent {
    constructor (props) {
      super(props)
      this.state = {n:0}
    }
    render () {
      return <div>
        <p>Hello</p>
      </div>
    }
}
