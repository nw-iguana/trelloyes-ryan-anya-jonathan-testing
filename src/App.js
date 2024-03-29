import React, { Component } from 'react';
import './App.css';
import './components/List';
import List from './components/List';

class App extends Component {


  render() {
    console.log(this.props.store);


    return (
      <main store={this.props.store} className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.props.store.lists.map((list)=>{
            return <List key={list.id} cards={list.cardIds} header={list.header} store={this.props.store} />
          }
          )}
    
        </div>
      </main>
    );
  }
}

export default App;
