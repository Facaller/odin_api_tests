export class apiScript {
    constructor () {
        this.input   = document.querySelector('#search');
        this.img     = document.querySelector('img');
        this.submit  = document.querySelector('#submit');
        this.spinner = document.querySelector('.spinner');
        
        this.floatingInput = '';
        this.onButtonClick();
    }

    fetchGif () {
        const img = this.img;
        const searchTerm = this.captureInput();
        const apiKey = 'TU3kl13JYySh97lnVdvPFpKTlQ4FZyU6';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;
        
        return fetch(url, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                const gifs = response.data;
                if (gifs.length === 0) {
                    img.src = '';
                    console.log('no gifs found');
                    return;
                }
                const randomIndex = Math.floor(Math.random() * gifs.length);
                img.src = gifs[randomIndex].images.original.url;
        })
        .catch(error => {
            console.error('Error fetching GIF', error);
        });
    }

    captureInput () {
        const input = this.input.value;
        let trimmed = input.trim();

        if (!trimmed) {
            trimmed = 'cat';
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
        const spinner   = this.spinner;

        submitBtn.addEventListener('click', async (event) => {
            event.preventDefault();

            submitBtn.disabled = true;
            submitBtn.classList.add('disable');
            spinner.classList.remove('hidden');

            await this.fetchGif();

            submitBtn.disabled = false;
            submitBtn.classList.remove('disable');
            spinner.classList.add('hidden');
        });
    }
}