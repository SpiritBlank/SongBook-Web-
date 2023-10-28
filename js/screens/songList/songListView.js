import { Header } from "../../views/header.js"
import { Button } from "../../views/button.js"
import { SongListItem } from "../../views/songListItem.js"
import { spacer } from "../../views/spacer.js"

// Constants

class Constants {
    static headerTitle = "Сборник"
    static headerSubtitle = "Надежда Есть"
    static headerButtonIcon = "img/header/add_white_36dp.svg"
}

// SongListView

export class SongListView {
    constructor(viewModel) {
        this.viewModel = viewModel

        this.createHeader()
        this.createContentWrapper()

        const item = new SongListItem(
            1,
            "Будь благословен",
            "Будь благословен на земле изобилия,<br> где течет молоко и мед. Будь благословен!"
        )

        this.contentView.innerHTML += spacer(18)
        this.contentView.innerHTML += item.toHTML()
        this.contentView.innerHTML += spacer(18)
    }

    createHeader() {
        const button = new Button(
            "",
            Constants.headerButtonIcon,
            "action"
        )
        this.header = new Header(
            Constants.headerTitle,
            Constants.headerSubtitle,
            button
        )
        document.body.innerHTML += this.header.toHTML()
    }

    createContentWrapper() {
        this.contentView = this.viewModel.createHTMLElement("div","song-list")
        document.body.appendChild(this.contentView)
    }
}