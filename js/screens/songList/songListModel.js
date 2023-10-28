export class SongListModel {
    createHTMLElement(tag, className = "", id = "") {
        const element = document.createElement(tag)
        element.className = className
        element.id = id
        return element
    }
}