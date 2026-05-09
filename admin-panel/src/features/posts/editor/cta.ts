export class CTA {
  private data: { text: string }
  private input!: HTMLInputElement

  static get toolbox() {
    return {
      title: "CTA",
    }
  }

  constructor({ data }: any) {
    this.data = data || { text: "" }
  }

  render() {
    this.input = document.createElement("input")
    this.input.placeholder = "CTA text"
    this.input.value = this.data.text

    return this.input
  }

  save() {
    return {
      text: this.input.value,
    }
  }
}