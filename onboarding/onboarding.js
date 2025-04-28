import Slider from "../src/components/slider/slider";
import frontPageImg from "./Onboarding 2.jpg";

document.querySelector("#app").innerHTML = `
${Slider([
  `

    <img src="${frontPageImg}">
    <h1>
    Stay Connected, Everywhere, Anytime
    </h1>
    <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
    
    <button class="slider__slide__btn-skip">Skip</button>
    <button class="slider__slide__btn-continue">Continue</button>
    `,
  `

    <img class="padding--block" src="${frontPageImg}">
    <h1 class="padding--block">
    Become a SavvyGlobal Citizen.
    </h1>
    <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
    
    <button class="slider__slide__btn-skip">Skip</button>
    <button class="slider__slide__btn-continue">Continue</button>
    `,
  `

    <img src="${frontPageImg}">
    <h1>
    Enhance your News Journey Now!
    </h1>
    <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
    
    <button class="slider__slide__btn-skip">Skip</button>
    <button class="slider__slide__btn-continue">Continue</button>
    `,
])}


`;
