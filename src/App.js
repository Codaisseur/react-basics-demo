import React, { Component } from 'react';
import Foo from './Foo';


class App extends Component {

  constructor() {
    super()
    this.state = {
      players: [
        {
          id: 1,
          name: 'Wouter',
          score: 2,
          title: "The boss",
          age: 123,
          bestFriend: "Bram"
        },
        {
          id: 2,
          name: 'Mimi',
          score: 5,
          title: "The high energy teacher",
          age: 123
        },
        {
          id: 3,
          name: 'Milan',
          score: 4,
          title: "Jezus",
          age: 123
        }
      ]
    }
    
    setInterval(() => {
      const players = this.state.players.slice()
      players.push(players.shift())
      this.setState({players})
    }, 1000)
  }


  render() {
    return (
      <div className="App">
        {this.state.players.map(p => <Foo key={p.id} {...p} />)}
      </div>
    );
  }
}

export default App;
