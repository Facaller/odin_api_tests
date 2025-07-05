export class apiScript {
    constructor () {
        this.input = document.querySelector('#search').value;
        this.img   = document.querySelector('img');

        this.fetchGif();
    }

    fetchGif () {
        const img = this.img;
        
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=TU3kl13JYySh97lnVdvPFpKTlQ4FZyU6&s=fish', {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
        });
    }

    captureInput () {
        const input = this.input;
        const trimmed = input.trim();

        if (!trimmed) {
            throw new Error('Please enter a valid search term');
        } 
        
        if (trimmed) {
            return trimmed;
        }
    }
}