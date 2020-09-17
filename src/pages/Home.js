import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          alt="To all the coronavirus helpers, thank you"
          src="https://www.google.com/logos/doodles/2020/thank-you-coronavirus-helpers-april-25-26-copy-6753651837108821-law.gif"
          title="To all the coronavirus helpers, thank you"
        />
        <div className="home__inputContainer">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
