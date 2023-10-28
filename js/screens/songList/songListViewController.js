import { SongListView } from "./songListView.js"
import {SongListModel} from "./songListModel.js"

export class SongListViewController {
    constructor() {
        this.viewModel = new SongListModel()
        this.view = new SongListView(this.viewModel)
    }
}