import React, { useState } from "react";
import axios from "axios";

const CARD_URL = "http://deckofcardsapi.com/api/deck/";

/**Shows card chosen with button to pick new card
 *
 * props:
 * -deckId (str)
 *
 * App --> DrawACard
 */
function DrawACard({ deckId }) {
  const [card, setCard] = useState({});

  async function fetchCard() {
    try {
      const response = await axios.get(`${CARD_URL}${deckId}/draw/?count=1`);
      setCard(response.data.cards[0]);
      console.log("DrawACard", "remaining:", response.data.remaining);
    } catch (err) {
      setCard("");
    }
  }

  return (
    <div>
      {!card && <p>"Error: no cards remaining"</p>}
      {typeof card === "object" && (
        <div>
          {" "}
          <p>
            Value: {card.value} Suit: {card.suit}{" "}
          </p>
          <img src={card.image}></img>
          <button onClick={fetchCard}>Draw a Card!</button>
        </div>
      )}
    </div>
  );
}

export default DrawACard;
