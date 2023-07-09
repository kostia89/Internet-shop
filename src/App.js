import { RouterProvider } from "react-router-dom";
import { router } from "./routs/routs";
import React, { useState } from "react";
import "./style/app.scss";

export const styleForCard = {
  cards: {
    class: "cards",
    styleCard: "styleGrid",
  },
  list: {
    class: "list",
    styleCard: "styleList",
  },
};
export const StyleForCardContext = React.createContext(styleForCard.cards);

function App() {
  const [style, setStyle] = useState(styleForCard.list);
  const state = { style, setStyle };

  return (
    <StyleForCardContext.Provider value={state}>
      <RouterProvider router={router} />;
    </StyleForCardContext.Provider>
  );
}

export default App;
