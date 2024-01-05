let apiKey = "61o493tb34bd0f7a45117a0fe312a138";
let context = "You are an expert in poetry about love and marriage.";
let buttonElement = document.querySelector("#submit");
let poemContainer = document.querySelector("#poem");

function showAnswer(response) {
  console.log(response);

  document.getElementById("poem").innerHTML = `<p>${response.data.answer}</p>`;
}

function handleClick(event) {
  event.preventDefault();
  poemContainer.classList.add("poem");
  document.getElementById("poem").innerHTML = "Please wait, I'm thinking...";
  let prompt = document.getElementById("prompt").value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt="${prompt}"&context="${context}"&key=${apiKey}`;
  axios.get(apiUrl).then(showAnswer);
}

buttonElement.addEventListener("click", handleClick);
console.log(prompt);
