import Header from "./components/Header";
import MainNav from "./components/MainNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
