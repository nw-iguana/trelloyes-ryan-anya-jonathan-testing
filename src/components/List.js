import React, { Component } from 'react';
import './List.css';
import Card from './Card.js';

export class List extends Component {

  
  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map(cardIdLetter => {
            const card = this.props.store.allCards[cardIdLetter];
            return <Card title={card.title} content={card.content} key={cardIdLetter}/>;
          }
          )}
        </div>
      </section>
    )
  }
}

export default List
