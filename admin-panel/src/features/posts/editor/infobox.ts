export class Infobox {
  private data: { text: string }
  private textarea!: HTMLTextAreaElement

  static get toolbox() {
    return {
      title: "Infobox",
    }
  }

  constructor({ data }: any) {
    this.data = data || { text: "" }
  }

  render() {
    this.textarea = document.createElement("textarea")
    this.textarea.placeholder = "Infobox content"
    this.textarea.value = this.data.text

    return this.textarea
  }

  save() {
    return {
      text: this.textarea.value,
    }
  }
}