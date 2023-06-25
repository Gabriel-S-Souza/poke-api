<h3 align="center">Poke Finder Api</h3>

<p>Poke Finder API é uma API desenvolvida em Nest.js para aplicativos Pokédex, criada para atender aos requisitos do projeto figma <a href="https://www.figma.com/file/oyy40kpPCamOuJOQu1uYMo/Pok%C3%A9dex-(Community)?type=design&node-id=314-3&mode=design&t=iK5q1ExOu1Vdwj9S-0" target="_blank">Pokedex Community</a>. Esta API foi desenvolvida com o objetivo de fornecer dados para o <a href="https://github.com/Gabriel-S-Souza/poke_app" target="_blank">PokeApp</a>, um aplicativo que segue o figma Pokédex Community</p>
<h4>Endpoints</h4>
<p>A API possui dois endpoints que utilizam como base a <a href="https://pokeapi.co/target="_blank">pokeapi.co</a>, porém adequa a resposta aos requisitos do Pokédex Community, fornecendo informações ausentes, a saber: ID e imagem (no endpoint de listagem) e descrição (no endpoint de detalhes).
<p><b>Listagem de Pokemons</b></p>
<p>Listagem dos pokemons com suporte para paginação. O parametro <code>page</code> varia de 0 a 25.</p>
<p>Exemplo:</p>

```
GET https://fancy-foal-tuxedo.cyclic.app/api/pokemons?page=2
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
