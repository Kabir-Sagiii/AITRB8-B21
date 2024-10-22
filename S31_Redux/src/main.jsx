import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux-store/Store";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={mystore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
