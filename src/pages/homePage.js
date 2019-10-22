import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";

function HomePage() {
  const [text, setText] = useState("Start your adventure");

  return (
    <>
      <Header />
      <img
        src={
          "https://68.media.tumblr.com/5517bd4911ad4e6a13525e1c3a55acdf/tumblr_mv3wc7RDnU1s4iq02o1_500.jpg"
        }
        alt="skull, black roses and book"
      />
      <Link to="/adventurepage">
        <Button name={text} />
      </Link>
      <Footer />
    </>
  );
}

export default HomePage;
