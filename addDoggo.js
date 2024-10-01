const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".dog-target");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.getElementById("img");
  img.src = processedResponse.message;
  img.alt = "Cute doggo";
}


document.getElementById("dog-btn").addEventListener("click", addNewDoggo);