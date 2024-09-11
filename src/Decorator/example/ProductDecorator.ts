import { Component } from "./IComponent";

abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

export class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

export class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);

    this.price = price;
  }

  getDetail(): string {
    return `${super.getDetail()}: $ ${this.price}`;
  }
}

export class HTMLProductDecorator extends ProductDecorator {
  public getDetail(): string {
    return `
    <h1>Información del producto</h1>
    <p>${super.getDetail()}</p>`;
  }
}
