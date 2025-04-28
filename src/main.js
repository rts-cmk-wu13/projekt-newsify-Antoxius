import "./style/style.scss";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Dropdown from "./components/dropdown/dropdown";

const app = document.querySelector("#app");

app.appendChild(Header());
app.appendChild(Home());
app.appendChild(Dropdown());
