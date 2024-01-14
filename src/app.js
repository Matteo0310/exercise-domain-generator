/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateDomain();
  document.querySelector("#domain").textContent = generateDomain();
  document.querySelector("#button");
  button.addEventListener("click", () => window.onload());
};
function generateDomain() {
  let articles = ["the", "our", "his"];
  let adjectives = ["great", "big", "amazing"];
  let nouns = ["jogger", "racoon", "dog", "merchant", "driver"];
  let tlds = [".com", ".org", ".dog", ".cat", ".es"];

  let articlesindex = Math.floor(Math.random() * articles.length);
  let adjectivesindex = Math.floor(Math.random() * adjectives.length);
  let nounsindex = Math.floor(Math.random() * nouns.length);
  let tldsindex = Math.floor(Math.random() * tlds.length);

  return (
    articles[articlesindex] +
    " " +
    adjectives[adjectivesindex] +
    " " +
    nouns[nounsindex] +
    " " +
    tlds[tldsindex]
  );
}
