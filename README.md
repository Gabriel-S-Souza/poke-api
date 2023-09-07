<h3 align="center">Poke Finder Api</h3>

<p>Poke Finder é uma API desenvolvida em Nest.js para aplicativos Pokédex, criada com o objetivo de fornecer dados para o <a href="https://github.com/Gabriel-S-Souza/poke_app" target="_blank">PokeApp</a> e atender aos requisitos do projeto figma <a href="https://www.figma.com/file/oyy40kpPCamOuJOQu1uYMo/Pok%C3%A9dex-(Community)?type=design&node-id=314-3&mode=design&t=iK5q1ExOu1Vdwj9S-0" target="_blank">Pokedex Community</a>.</p>
<h4>Endpoints</h4>
<p>A API possui dois endpoints que utilizam como base a <a href="https://pokeapi.co/target="_blank">pokeapi.co</a>, porém adequa a resposta aos requisitos do Pokédex Community, fornecendo informações ausentes, a saber: ID e imagem (no endpoint de listagem) e descrição (no endpoint de detalhes).
<p><b>Listagem de Pokemons</b></p>
<p>Listagem dos pokemons com suporte para paginação. O parametro <code>page</code> varia de 0 a 25.</p>
<p>Exemplo:</p>

```
GET https://fancy-foal-tuxedo.cyclic.app/api/pokemons?page=2
```
<br/>
<p>Resposta:</p>

```Shell
{
  "count": 1281,
  "next": "https://fancy-foal-tuxedo.cyclic.app/api/pokemons?page=3",
  "previous": "https://fancy-foal-tuxedo.cyclic.app/api/pokemons?page=1",
  "results": [
    {
      "id": 101,
      "name": "electrode",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    },
    {
      "id": 102,
      "name": "exeggcute",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    },
    {
      "id": 103,
      "name": "exeggutor",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    },
    (...)
  ]
}
```

</br>
<p><b>Detalhes do Pokemon</b></p>
<p>Fornece os detalhes de um pokemon passando o ID ou nome.</p>
<p>Exemplo:</p>

```
GET https://fancy-foal-tuxedo.cyclic.app/api/details/25
```
ou
```
GET https://fancy-foal-tuxedo.cyclic.app/api/details/pikachu
```
<br/>
<p>Resposta:</p>

```Shell
{
  "id": 25,
  "name": "pikachu",
  "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  "description": "When several of these POKéMON gather, theirelectricity could build and cause lightning storms.",
  "height": 4,
  "weight": 60,
  "types": [
    "electric"
  ],
  "abilities": [
    "static",
    "lightning-rod"
  ],
  "moves": [
    "mega-punch", "pay-day", "thunder-punch", "slam", "double-kick", "mega-kick", "headbutt", "body-slam",
    "take-down", "double-edge", "tail-whip", "growl", "surf", "submission", "counter", "seismic-toss", "strength",
    "thunder-shock", "thunderbolt", "thunder-wave", "thunder", "dig", "toxic", "agility", "quick-attack", "rage",
    "mimic", "double-team", "defense-curl", "light-screen", "reflect", "bide", "swift", "skull-bash", "flash",
    "rest", "substitute", "thief", "snore", "curse", "reversal", "protect", "sweet-kiss", "mud-slap", "zap-cannon",
    "detect", "endure", "charm", "rollout", "swagger", "spark", "attract", "sleep-talk", "return", "frustration",
    "dynamic-punch", "encore", "iron-tail", "hidden-power", "rain-dance", "rock-smash", "uproar", "facade",
    "focus-punch", "helping-hand", "brick-break", "knock-off", "secret-power", "fake-tears", "signal-beam", "covet",
    "volt-tackle", "calm-mind", "shock-wave", "natural-gift", "feint", "fling", "magnet-rise", "nasty-plot",
    "discharge", "captivate", "grass-knot", "charge-beam", "electro-ball", "round", "echoed-voice", "volt-switch",
    "electroweb", "wild-charge", "disarming-voice", "draining-kiss", "play-rough", "play-nice", "confide",
    "eerie-impulse", "electric-terrain", "nuzzle", "laser-focus", "rising-voltage", "tera-blast", "trailblaze"
  ],
  "statistics": [
    {
      "name": "hp",
      "value": 35
    },
    {
      "name": "attack",
      "value": 55
    },
    {
      "name": "defense",
      "value": 40
    },
    {
      "name": "special-attack",
      "value": 50
    },
    {
      "name": "special-defense",
      "value": 50
    },
    {
      "name": "speed",
      "value": 90
    }
  ]
}
```
