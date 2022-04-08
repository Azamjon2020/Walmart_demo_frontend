import "./App.css";
import Home from "./routes/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./routes/admin/Admin";
import Signup from "./routes/signup/Signup";
import SignIn from "./routes/signIn/SignIn";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import SearchedProduct from "./components/searchedProduct/SearchedProduct";
// import SelectedProduct from "./components/selectedProduct/SelectedProduct";
// import ClicedProduct from "./components/clicedProduct/ClicedProduct";
function App() {
  const admin = useSelector((state) => state.admin);
  console.log(admin.admin);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={SignIn} />
          <Route path="/admin" component={Admin} />
          <Route path="/products/search/:proid" component={SearchedProduct} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
