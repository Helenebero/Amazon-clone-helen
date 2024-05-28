import React, { useContext, useEffect } from "react";
import Routing from "./Router.js";
import { DataContext } from "./Components/DataProvider/Dataprovider.js";
import { Type } from "./utility/Action.type.js";
import { auth } from "./utility/Firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}
export default App;
