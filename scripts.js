const getDog = document.getElementById("get-dog");
const dogImage = document.getElementById("dog-image");
getDog.addEventListener("click", async () => {
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        dogImage.src = data.message;
    }catch(error) {
        console.error("Error fetching dog image:", error);
        dogImage.alt = "Failed to load dog image";
    }
});
const getFact = document.getElementById("get-fact");
const catFact = document.getElementById("cat-fact");
getFact.addEventListener("click", async () => {
    try{
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        catFact.textContent = data.fact;
    }catch(error) {
        console.error("Error fetching cat fact:", error);
        catFact.textContent = "Failed to load cat fact";
    }
});