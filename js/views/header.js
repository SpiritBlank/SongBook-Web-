export class Header {
    constructor(title, subtitle, button) {
        this.title = title
        this.subtitle = subtitle
        this.button = button
    }

    toHTML() {
        return `
        <header class="header">
            <div class="header-info">
                <h1 class="header-info__title">${this.title}</h1>
                <h3 class="header-info__subtitle">${this.subtitle}</h3>
            </div>
            <button class="header-button">
                <img class="icon" src="${this.button.icon}" alt="action-icon">
            </button>
        </header>
        `
    }
}