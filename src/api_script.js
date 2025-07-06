export class apiScript {
    constructor () {
        this.input  = document.querySelector('#search');
        this.img    = document.querySelector('img');
        this.submit = document.querySelector('#submit');

        this.onButtonClick();
    }

    fetchGif () {
        const img = this.img;
        const searchInput = this.addValueToAPI();
        
        fetch(`${searchInput}`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
        });
    }

    captureInput () {
        const input = this.input.value;
        const trimmed = input.trim();
        console.log(trimmed);

        if (!trimmed) {
            throw new Error('Please enter a valid search term');
        } 
        
        if (trimmed) {
            return trimmed;
        }
    }

    addValueToAPI () {
        const input = this.captureInput();
        const api = 'https://api.giphy.com/v1/gifs/translate?api_key=TU3kl13JYySh97lnVdvPFpKTlQ4FZyU6&s=';

        return api + input;
    }

    onButtonClick = () => {
        const submitBtn = this.submit;

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.fetchGif();
        });
    }
}