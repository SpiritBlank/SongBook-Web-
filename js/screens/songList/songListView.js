import { Header } from "./../../models/header.js"
import { Button } from "./../../models/button.js"

export class SongListView {
    constructor() {
        const button = new Button("", "img/header/add_black_24dp.svg", "action")
        this.header = new Header("title", "subtitle", button)

        document.body.innerHTML = this.header.toHTML()
    }
}