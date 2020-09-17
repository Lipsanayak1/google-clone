import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const SearchBar = ({ hideButtons = false, termm }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    history.push("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon"></SearchIcon>
        {!hideButtons ? (
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        ) : (
          <input
            value={input}
            placeholder={termm}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        )}
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
