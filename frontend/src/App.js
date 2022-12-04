import GlobalStyle from "./styles/global";
import { Main } from "./pages/Main";
import axios from "axios";

function App() {

  if (window.location.origin === "http://localhost:3000") {
    axios.defaults.baseURL = "http://localhost:8080";
  } else {
    axios.defaults.baseURL = window.location.origin;
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
