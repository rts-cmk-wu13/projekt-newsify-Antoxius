import "./_header.scss";

export default function Header() {
  const headerElm = document.createElement("header");
  headerElm.classList.add("header");

  headerElm.innerHTML = `
  <div class="flex--center">
    <img src="src/img/newsify_logo 2.png" alt="" srcset="">
    <h1 class="flex--center">Newsify</h1>
    <input class="search-news"></input>
  </div>

        `;

return headerElm;
}
