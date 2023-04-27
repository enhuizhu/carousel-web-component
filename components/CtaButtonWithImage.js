class CtaButtonWithImage extends HTMLElement {
    constructor() {
        super();
        this.defaultCtaText = 'Button';
        this.defaultImage = '';
    }
    
    connectedCallback() {
        this.ctaText = this.getAttribute('text') ?? this.defaultCtaText;
        this.image = this.getAttribute('image') ?? this.defaultImage;
        
        this.innerHTML = `<div class="cta-button-with-image">
            <img src="${this.image}" />
            <button>${this.ctaText}</button>
        </div>`;
    }
}


customElements.define('cta-button-with-image', CtaButtonWithImage);
