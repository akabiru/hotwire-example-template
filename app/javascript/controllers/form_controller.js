import { Controller } from "@hotwired/stimulus";
import debounce from "lodash.debounce";

export default class extends Controller {
  static targets = ["preview"]

  initialize() {
    // delay preview by 300ms to account for fast typing
    this.preview = debounce(this.preview.bind(this), 300)
  }

  connect() {
    // hide the preview button when we have Stimulus
    this.previewTarget.hidden = true
  }

  preview() {
    this.previewTarget.click()
  }
}
