export class Paragraph {
  private data: { text: string }
  private textarea!: HTMLTextAreaElement

  static get toolbox() {
    return {
      title: "Paragraph",
    }
  }

  constructor({ data }: any) {
  this.data = {
    text: data?.text ?? "",
  }
}

  render() {
    this.textarea = document.createElement("textarea")
    this.textarea.placeholder = "Write paragraph..."
    this.textarea.value = this.data.text || ""
    return this.textarea
  }

  save() {
    return {
      text: this.textarea.value,
    }
  }
}