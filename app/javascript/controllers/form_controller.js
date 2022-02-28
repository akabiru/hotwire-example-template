import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["preview"]

  connect() {
    // hide the preview button when we have Stimulus
    this.previewTarget.hidden = true
  }

  preview() {
    this.previewTarget.click()
  }
}
