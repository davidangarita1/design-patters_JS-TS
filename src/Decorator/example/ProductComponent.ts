export class ProductComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`
  }
}
