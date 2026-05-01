import { InvalidParagraphDataError } from "./ParagraphDataErrors.js";

export interface ParagraphDataProps {
  text: string;
}

export class ParagraphData {
  public readonly text: string;

  constructor(props: ParagraphDataProps) {
    if (!props.text || props.text.trim() === "") {
      throw new InvalidParagraphDataError(
        "Paragraph text cannot be empty"
      );
    }

    this.text = props.text;
  }
}
