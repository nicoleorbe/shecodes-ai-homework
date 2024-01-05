let apiKey = "61o493tb34bd0f7a45117a0fe312a138";
let context =
  "You are an expert in poetry about love and marriage. You only write short poems.";
let buttonElement = document.querySelector("#submit");
let poemContainer = document.querySelector("#poem");

function showAnswer(response) {
  let poemResponse = response.data.answer;

  let splitPoem = poemResponse.split("\n");

  let typewriter = new Typewriter("#poem", {
    loop: false,
    delay: 50,
  });

  splitPoem.forEach((line, index) => {
    typewriter.typeString(line);
    if (index < splitPoem.length - 1) {
      // If not the last line, add a break and pause
      typewriter
        .pauseFor(500) // pause duration
        .typeString("<br>");
    }
  });

  typewriter.start();
}

function handleClick(event) {
  event.preventDefault();
  poemContainer.classList.add("poem");
  document.getElementById("poem").innerHTML =
    "Please wait, I'm writing something beautiful ...";
  let prompt = document.getElementById("prompt").value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt="${prompt}"&context="${context}"&key=${apiKey}`;
  axios.get(apiUrl).then(showAnswer);
}

buttonElement.addEventListener("click", handleClick);
console.log(prompt);
