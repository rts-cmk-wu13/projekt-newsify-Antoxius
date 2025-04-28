// import "./_home.scss";

export default function Home() {
  const homeElm = document.createElement("div");
  homeElm.classList.add("home");

  homeElm.innerHTML = `
  <div class="flex--center">
    <h1 class="flex--center">Home</h1>
    
    
  </div>

        `;

  return homeElm;
}
