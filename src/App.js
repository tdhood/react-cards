import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DrawACard from "./DrawACard";

const DECK_URL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

/**Api call to fetch new deck 
 * 
 * App --> DrawACard
 */
function App() {
  const [deckId, setDeckId] = useState("Pick a deck..");
  console.log("App", deckId);

  useEffect(function fetchDeckIdWhenMounted() {
    async function fetchDeckId() {
      const deckId = await axios.get(DECK_URL);
      setDeckId(deckId.data.deck_id);
    }
    fetchDeckId();
  }, []);

  return (
    <div className="App">
      <DrawACard deckId={deckId} />
    </div>
  );
}

export default App;
