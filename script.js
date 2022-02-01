const url = "https://icanhazdadjoke.com"; //URL to be fetched

//grabbing HTML elements
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//function to generate jokes
const generateJoke = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
};

//calling the function
generateJoke();

//adding event listener for button
jokeBtn.addEventListener("click", generateJoke);
