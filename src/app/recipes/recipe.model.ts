export class Recipe {
  title: string;
  description: string;
  details: string;

  constructor(title: string, description: string, details: string) {
    this.title = title;
    this.description = description;
    this.details = details;
  }
}
