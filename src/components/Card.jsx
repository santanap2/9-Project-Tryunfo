import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  removeCard = (event) => {
    console.log(event.target.name);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">

        <img
          data-testid="image-card"
          className="card-img"
          src={ cardImage }
          alt={ cardName }
        />

        <p
          data-testid="rare-card"
          className="rarity"
        >
          { cardRare }
        </p>

        <div className="title-trunfo">

          <h3
            data-testid="name-card"
            className="card-name"
          >
            { cardName }
          </h3>

        </div>

        <p
          data-testid="description-card"
          className="description"
        >
          { cardDescription }
        </p>

        <div className="attr-div">
          <p
            data-testid="attr1-card"
            className="attr"
          >
            {`Arremesso: ${cardAttr1}`}
          </p>

          <p
            data-testid="attr2-card"
            className="attr"
          >
            {`Passe: ${cardAttr2}`}
          </p>

          <p
            data-testid="attr3-card"
            className="attr"
          >
            {`Drible: ${cardAttr3}`}
          </p>

        </div>

        {cardTrunfo ? <p data-testid="trunfo-card" id="trunfo">Super Trunfo</p> : ''}
      </div>

    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
