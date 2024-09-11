import { ProductComponent } from "./ProductComponent";

class ProductDecorator {
  private productComponent: ProductComponent;

  constructor(productComponent: ProductComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

export class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(
    productComponent: ProductComponent,
    tradename: string,
    brand: string
  ) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

export class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(productComponent: any, price: number) {
    super(productComponent);

    this.price = price;
  }

  getDetail(): string {
    return `${super.getDetail()}: $ ${this.price}`;
  }
}