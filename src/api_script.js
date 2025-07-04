export class apiScript {
    constructor () {
        this.fetchGif();
    }

    fetchGif () {
        const img = document.querySelector('img');
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=TU3kl13JYySh97lnVdvPFpKTlQ4FZyU6&s=fish', {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
        });
    }
}