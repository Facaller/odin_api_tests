export class apiScript {
    constructor () {
        this.input  = document.querySelector('#search');
        this.img    = document.querySelector('img');
        this.submit = document.querySelector('#submit');
        
        this.floatingInput = '';
        this.onButtonClick();
    }

    fetchGif () {
        const img = this.img;
        const searchTerm = this.captureInput();
        const apiKey = 'TU3kl13JYySh97lnVdvPFpKTlQ4FZyU6';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;
        
        fetch(url, {mode: 'cors'})
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
            trimmed = 'poop';
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

// Step-by-Step Plan
// 1. HTML Setup
// First, check your HTML. You'll need:

// A button element (you already have it).

// A spinner element — maybe a <div> or <img> with a spinning animation.

// Keep it hidden by default using CSS (display: none or visibility: hidden).

// 2. Disabling the Button (Before Fetch)
// Before you call fetch(), you'll want to:

// Set the button to disabled.

// Change its appearance if you want (e.g. greyed out).

// Show the spinner.

// Think of this as your "start loading" state.

// 3. Fetch the GIF
// You already do this — keep it the same.

// While the fetch is happening, the button will stay disabled and the spinner will be visible.

// 4. After the Fetch is Done (Success or Error)
// No matter if the fetch succeeds or fails:

// Hide the spinner.

// Re-enable the button so the user can search again.

// This part should happen in both:

// Your .then() (after updating the image), and

// Your .catch() (if there's an error).

// So, you're creating a clear "end loading" state.

// 5. Bonus (Optional)
// If you want to be fancy:

// Change the button text to "Loading..." temporarily.

// Animate the spinner with CSS.

// Position the spinner over the image or near the button.

// 💡 Tip
// It’s a good idea to make small helper functions like:

// startLoadingState() – disables the button and shows the spinner.

// endLoadingState() – re-enables and hides the spinner.

// This keeps your main function clean.