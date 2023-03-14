const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&page=2';


async function reload() {
    const res = await fetch(API_URL)
    const data = await res.json()
    const $1 = document.getElementById('1')
    const $2 = document.getElementById('2')
    const $3 = document.getElementById('3')
    $1.src = data[0].url;
    $2.src = data[1].url;
    $3.src = data[2].url;
}
reload();