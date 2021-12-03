import React from "react";
import PaintScreen from "./pages/PaintScreen";
import Provider from "./context/Provider"

function App() {
  return (
    <Provider>
      <PaintScreen />
    </Provider>
  );
}

export default App;
