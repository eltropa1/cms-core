import { InvalidCTADataError } from "./CTADataErrors.js";

export type CTAVariant = "primary" | "secondary";

export interface CTADataProps {
  title: string;
  description?: string;
  buttonText: string;
  url: string;
  variant: CTAVariant;
}

export class CTAData {
  public readonly title: string;
  public readonly description?: string;
  public readonly buttonText: string;
  public readonly url: string;
  public readonly variant: CTAVariant;

  constructor(props: CTADataProps) {
    if (!props.title || props.title.trim() === "") {
      throw new InvalidCTADataError("CTA title cannot be empty");
    }

    if (!props.buttonText || props.buttonText.trim() === "") {
      throw new InvalidCTADataError("CTA buttonText cannot be empty");
    }

    if (!CTAData.isValidUrl(props.url)) {
      throw new InvalidCTADataError(`Invalid CTA URL: ${props.url}`);
    }

    this.title = props.title;
    this.description = props.description;
    this.buttonText = props.buttonText;
    this.url = props.url;
    this.variant = props.variant;
  }

  private static isValidUrl(url: string): boolean {
    if (!url || url.trim() === "") return false;

    if (url.startsWith("/")) return true;

    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }
}
