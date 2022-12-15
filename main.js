
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

    const pokemonability = document.createElement('h3')
    pokemonability.innerText = data['abilities'][0]['ability']['name']
    pokeCard.append (pokemonability)

    const pokemonability2 = document.createElement('h3')
    pokemonability2.innerText = data['abilities'][1]['ability']['name']
    pokeCard.append (pokemonability2)

    const pokemonattack = document.createElement('h3')
    pokemonattack.innerText = data['stats'][1]['base_stat']
    pokeCard.append (pokemonattack)

    const pokemondefense = document.createElement('h3')
    pokemondefense.innerText = data['stats'][2]['base_stat']
    pokeCard.append (pokemondefense)
}

const form_data = document.querySelector('form')
form_data.addEventListener('submit', (event) => {
  event.preventDefault()
  const pokemonname = document.querySelector('#poke-data').value
  new_pokemon(pokemonname)
  
})

