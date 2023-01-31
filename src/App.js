import { BrowserRouter } from "react-router-dom";
import Icons from "./components/Icons";
import Pages from "./pages/Pages";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
        <Icons />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
