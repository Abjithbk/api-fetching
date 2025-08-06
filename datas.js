document.getElementById("result").addEventListener("click",async () => {
   try {
     const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10",{
        method:"GET"
     });
    const data = await res.json();
    displayData(data);
   }
   catch(error) {
    console.log(error);
    
   }
    
})

const displayData = (data) => {
    const pokemonDataNames = document.getElementById("Pokemon-data");
   
    
   const content = data.results.map((pokemon) => (
     `<h2 class="text-xl font-semibold capitalize mb-1">${pokemon.name}</h2>`
    ))

    pokemonDataNames.innerHTML = content.join("");
}