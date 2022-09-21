import "./app.css";
import Header from "./components/molecules/header";
import ActiveNotesCardContainer from "./components/molecules/active-notes";
import { AddNotify } from "./components/atoms/add-notify";
import { ArchivedHeader } from "./components/molecules/archived-header";
import { ArchivedContainer } from "./components/molecules/archived-container";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ActiveNotesCardContainer />
        <AddNotify />
      </div>
      <div>
        <ArchivedHeader />
        <ArchivedContainer />
      </div>
    </div>
  );
}

export default App;
