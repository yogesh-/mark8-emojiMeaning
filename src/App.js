import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😊": "smiling face",
  "❤": "heart",
  "✔️": "checkmark",
  "🔥": "fire"
};

export default function App() {
  var [meaning, setuserMeaning] = useState("");

  // make an array of object keys

  var myemojiList = Object.keys(emojis);

  // onChange Event for input boks

  function detectChange(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "Error:we dont have this in our sytem. Try again";
    }

    setuserMeaning(meaning);
  }

  //ClickHandler function

  function clickHandler(emoji) {
    var meaning = emojis[emoji];
    setuserMeaning(meaning);
  }
  //

  return (
    <div className="App">
      <h1>Hello Yoyo</h1>
      <input onChange={detectChange}></input>
      <div>Meaning: {meaning}</div>
      <h3>Emojis in our system</h3>
      {myemojiList.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "large", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
