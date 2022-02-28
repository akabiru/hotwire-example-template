import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["preview"]

  preview() {
    this.previewTarget.click()
  }
}
