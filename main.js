const initHeaderCarousel = () => {
    const headerCarousel = document.getElementById('header-carousel');
    const items = [
        {
            image: './images/ahmed-carter-tiWcNvpQF4E-unsplash.jpg',
            heading: 'heading1',
            ctaText: 'button1',
            id: 'carousel1'
        },
        {
            image: './images/dom-hill-nimElTcTNyY-unsplash.jpg',
            heading: 'heading2',
            ctaText: 'button2',
            id: 'carousel2'
        },
        {
            image: './images/ian-talmacs-rKW67WZWGMw-unsplash.jpg',
            heading: 'heading3',
            ctaText: 'button3',
            id: 'carousel3'
        },
        {
            image: './images/marcus-loke-xXJ6utyoSw0-unsplash.jpg',
            heading: 'heading4',
            ctaText: 'button4',
            id: 'carousel4'
        },
        {
            image: './images/sarah-dorweiler-fr0J5-GIVyg-unsplash.jpg',
            heading: 'heading5',
            ctaText: 'button5',
            id: 'carousel5'
        },
        {
            image: './images/tamara-bellis-pONwcn4IcVU-unsplash.jpg',
            heading: 'heading6',
            ctaText: 'button6',
            id: 'carousel6'
        }
    ]

    headerCarousel.setAttribute('items', JSON.stringify(items))
}

const init = () => {
    initHeaderCarousel();
}


window.onload = init;