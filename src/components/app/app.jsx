import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentOffers} = props;

  return (
    <Main rentOffers={rentOffers} />
  );
};


export default App;
