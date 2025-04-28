import "./style/style.scss";
import Slider from "./components/slider/slider.js";

document.querySelector("#app").innerHTML = `
  <div class="flex--center">
    <img src="src/img/newsify_logo 2.png" alt="" srcset="">
    <h1 class="flex--center">Newsify</h1>

  </div>
  <div class="stay-connected">
    ${Slider([
      "<h2 class=´flex--center´> Stay Connected, Everywhere, Anytime </h2>",
      "",
    ])}
    <button class="btn __btn__green"><p>Skip</p></button>
    <button class="btn __btn__white"><p>Continue</p></button>
  </div>
`;
