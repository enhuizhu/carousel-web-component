class Carousel extends HTMLElement {
    constructor() {
        super();
        this.height=250;
        this.itemsInView = [];
        this.currentSlide = 0;
        this.timer = null;
        this.delay = 3000;
    }
    connectedCallback() {
        const items = this.getAttribute('items');

        if (!items) {
            this.innerHTML = `loading ...`;
        } else {
            this.items = JSON.parse(items);
            this.render();
        }
    }

    setSlidePos(activeSlide) {
        const container = this.querySelector('.carousel-container');

        if (container) {
            const size = container.getBoundingClientRect();
            const width = size.width;

            const allSlides = this.querySelectorAll('.carousel-slide');

            allSlides.forEach((slide, index) => {
                slide.setAttribute('style', `
                    transform: translateX(${(index - activeSlide) * width}px);
                `)
            });
        }
    }

    setAnimation(action) {
        const allSlides = this.querySelectorAll('.carousel-slide');

        allSlides.forEach(slide => {
            if (action === 'add') {
                slide.classList.add('transition');
            } else {
                slide.classList.remove('transition');
            }
        });
    }

    removeAnimation() {
        this.setAnimation('remove');
    }

    addAnimation() {
        this.setAnimation('add');
    }

    start() {
        this.timer = setInterval(() => {
            if (this.currentSlide < this.itemsInView.length - 1) {
                this.addAnimation();
                this.currentSlide++;
                this.setSlidePos(this.currentSlide);
            } else {
                console.log({
                    "slide": this.currentSlide
                });
                this.removeAnimation();
                this.currentSlide = this.currentSlide - this.items.length;
                this.setSlidePos(this.currentSlide);
                setTimeout(() => {
                    this.addAnimation();
                    this.setSlidePos(++this.currentSlide); 
                }, 0);
                
            }
        }, this.delay);
    }

    destroy() {
        clearInterval(this.timer);
    }

    render() {
        this.itemsInView = [...this.items, ...this.items];
        this.innerHTML = `<div class='carousel-container' style='height: ${this.height}px'>
            ${this.itemsInView.map(item => `
                <div class='carousel-slide'>
                    <img src="${item.image}"/>
                    <div class='carousel-content'>
                        <h1>${item.heading}</h1>
                        <button>${item.ctaText}</button>
                    </div>
                </div>    
            `).join('')}
        </div>`;
        this.destroy();
        this.setSlidePos(this.currentSlide);
        this.start();
    }

    static get observedAttributes() {
        return ['items'];
    }

    attributeChangedCallback(name, _, newValue) {
        if (name === 'items' && newValue) {
            this.items = JSON.parse(newValue);
            this.render();
        }
    }
}


customElements.define('custom-carousel', Carousel);
