import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { AddIcon, CancelIcon } from "../Icons/Icons";
import SnackBar from "../SnackBar/SnackBar";

interface Suggestion {
  name: string;
}

const suggestions: Suggestion[] = [
  { name: "Phineas Flynn" },
  { name: "Ferb Fletcher" },
  { name: "Candace Flynn" },
  { name: "Linda Flynn-Fletcher" },
  { name: "Dr. Heinz Doofenshmirtz" },
  { name: "Perry the Platypus" },
  { name: "Major Francis Monogram	" },
  { name: "Carl the Intern" },
  { name: "Lawrence Fletcher" },
  { name: "Jeremy Johnson" },
  { name: "Baljeet Tjinder" },
  { name: "Isabella Garcia-Shapiro" },
  { name: "Stacy Hirano	" },
  { name: "Buford van Stomm	" },
  { name: "Pinky the Chihuahua" }
];

interface RenderSuggestionProps {
  index: number;
  suggestion: Suggestion;
  addToFavourite: (name: string) => void;
}

function renderSuggestion(suggestionProps: RenderSuggestionProps) {
  const { suggestion, index, addToFavourite } = suggestionProps;

  return (
    <div key={suggestion.name} style={{ display: "flex" }}>
      <div key={suggestion.name} style={{ margin: "12px" }}>
        {suggestion.name}
      </div>
      <div onClick={() => addToFavourite(suggestion.name)}>
        <AddIcon />
      </div>
    </div>
  );
}

function getSuggestions(value: string) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;
        if (keep) {
          count += 1;
        }
        return keep;
      });
}

export default function Tags() {
  const [currentInputValue, setInputValue] = useState("");
  const [myFavourite, setMyFavourite] = useState([{ name: "" }]);
  const [open, setOpen] = useState(false);

  const addToFavourite = (name: string) => {
    const isInArray = myFavourite.find(value => value.name === name);
    if (isInArray === undefined) {
      const newArr = [...myFavourite, { name: name }];
      setMyFavourite(newArr);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const deleteFavourite = (index: number) => {
    const newArr = [...myFavourite];
    newArr.splice(index, 1);
    setMyFavourite(newArr);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      <div>
        <TextField
          id="outlined-name-input"
          label="Name"
          type="name"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          onChange={event => setInputValue(event.target.value)}
          style={{ width: "100%" }}
        />
        {currentInputValue.length === 0 &&
          suggestions.map((suggestion, index) => {
            return (
              <div
                key={suggestion.name}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderBottom: "1px solid #248ea9"
                }}
              >
                <div key={suggestion.name} style={{ margin: "12px" }}>
                  {suggestion.name}
                </div>
                <div onClick={() => addToFavourite(suggestion.name)}>
                  <AddIcon />
                </div>
              </div>
            );
          })}
        {currentInputValue.length > 0 &&
          getSuggestions(currentInputValue).map((suggestion, index) =>
            renderSuggestion({
              suggestion,
              index,
              addToFavourite
            })
          )}
      </div>
      <div>
        <h1
          style={{
            marginTop: "16px",
            marginRight: "8px",
            marginBottom: "16px"
          }}
        >
          My favourite characters
        </h1>
        {myFavourite.map((favourite, index) => {
          if (favourite.name.length !== 0) {
            return (
              <div
                key={favourite.name}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderBottom: "1px solid #248ea9"
                }}
              >
                <p key={favourite.name} style={{ margin: "12px" }}>
                  {favourite.name}
                </p>
                <div onClick={() => deleteFavourite(index)}>
                  <CancelIcon />
                </div>
              </div>
            );
          }
        })}
        <SnackBar
          isOpen={open}
          variant="error"
          message="You cant add the same person"
        />
      </div>
    </div>
  );
}
