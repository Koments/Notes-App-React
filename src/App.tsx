import { useDispatch } from "react-redux";
import { useState } from "react";

import "./app.css";
import Header from "./components/molecules/header";
import ActiveNotesCardContainer from "./components/molecules/active-notes/active-notes";
import { addNotify } from "./store/notification-slice";
import { AddNotify } from "./components/molecules/add-notify";
import ArchivedNotes from "./components/molecules/archived-notes";

function App() {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const addNewNotify = () => dispatch(addNotify({ note }));

  return (
    <div className="App">
      <div>
        <Header />
        <ActiveNotesCardContainer />
        <AddNotify addNewNotify={addNewNotify} />
      </div>
      <div>
        <ArchivedNotes />
      </div>
    </div>
  );
}

export default App;
