import { InvalidInfoboxDataError } from "./InfoboxDataErrors.js";

export type InfoboxVariant = "info" | "warning" | "success";

export interface InfoboxDataProps {
  title: string;
  content: string;
  variant: InfoboxVariant;
}

export class InfoboxData {
  public readonly title: string;
  public readonly content: string;
  public readonly variant: InfoboxVariant;

  constructor(props: InfoboxDataProps) {
    if (!props.title || props.title.trim() === "") {
      throw new InvalidInfoboxDataError("Infobox title cannot be empty");
    }

    if (!props.content || props.content.trim() === "") {
      throw new InvalidInfoboxDataError("Infobox content cannot be empty");
    }

    this.title = props.title;
    this.content = props.content;
    this.variant = props.variant;
  }
}
