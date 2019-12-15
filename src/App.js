import React, { Component } from 'react';
import './App.css';

import { SearchBox } from './component/search-box/search-box.component';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {

  constructor () {
    super();
    this.state = {
      friends: [],
      searchFields: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState({ friends: users}))
  }

  render() {
    const { friends, searchFields } = this.state;
    const filteredFriends = friends.filter(friend => 
        friend.name.toLowerCase().includes(searchFields.toLowerCase())
      );

    return (  
      <div className="App">
        <h1>Friend Diary</h1>
        <SearchBox 
          placeholder="search friends" 
          handleChange = {
            e => {
              this.setState({searchFields: e.target.value})
            } 
          }
        ></SearchBox>
        <CardList friends={filteredFriends}></CardList> 
      </div>
    );
  }
}


export default App;
