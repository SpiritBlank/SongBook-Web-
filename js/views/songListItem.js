export class SongListItem {
    constructor(index, title, subtitle) {
        this.index = index
        this.title = title
        this.subtitle = subtitle
    }
    toHTML() {
        return `
        <div class="song-list-item" id="${this.index}">
            <p class="song-list-item__index">${this.index}.</p>
            <div class="song-list-item__row-info">
                <h2 class="song-list-item__row-info-title">${this.title}</h2>
                <p class="song-list-item__row-info-subtitle">${this.subtitle}</p> 
            </div>
        </div>
        `
    }
}