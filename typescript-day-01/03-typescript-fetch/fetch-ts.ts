const url = 'https://api.chucknorris.io/jokes/random'


interface IchuckNorrisApi {
    'icon_url': string,
    'id': string,
    'url': string,
    'value': string,
}

function fetchJokes (){
    fetch (url)
    .then(res=>res.json())
    .then((json:IchuckNorrisApi) => console.log(json.value))
}

fetchJokes();