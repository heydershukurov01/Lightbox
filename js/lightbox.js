class Lightbox {
    constructor() {
        this._getBody();
        this._getContainer();
        this._listen();
    }
    _getBody() {
        this.body = document.getElementsByTagName("BODY")[0];
    }
    _getContainer() {
        this.elemContainer = document.querySelector('[lighbox-container]');
        if (!this.elemContainer) {
            console.info('Please use "lighbox-container" attribute on img row container');
        }
    }
    _listen() {
        if(this.elemContainer) {
            this.imgs = this.elemContainer.querySelectorAll('img');
            this._addEventListener();
        }
    }
    _addEventListener() {
        if (this.imgs && this.imgs.length && this.imgs.length > 0) {
            this.imgs.forEach(img => {
                img.addEventListener("click", (event) => {
                    this.open(event);
                });
            })
        }
    }
    open(event) {
        const e = document.createElement('div');
        e.innerHTML = modal;
        this.body.appendChild(e);
        // console.log(event);
        this.body.classList.toggle("lightbox-backdrop-absolute");
    }
}

const modal = `
<div class="lightbox-modal-backdrop">
    <div class="lightbox-modal-container">
        <div class="lightbox-header"></div>
        <div class="lightbox-body"></div>
        <div class="lightbox-footer"></div>
    </div>
</div>
`;