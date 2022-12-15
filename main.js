
const new_pokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    
    const sprite = document.createElement('img')
    sprite.setAttribute('src', data['sprites']['front_default'])
    const pokeCard = document.querySelector('.poke-card')
    pokeCard.append(sprite)
    
    const pokemonname = document.createElement('h1')
    pokemonname.innerText = data['name']
    pokeCard.append(pokemonname)
}

const form_data = document.querySelector('#form-data')
form_data.addEventListener('submit', (event) => {
  event.preventDefault()
  const pokemonname = document.querySelector('#pokemon-data').value
  get_pokemon_data(pokemonname)
  
})

