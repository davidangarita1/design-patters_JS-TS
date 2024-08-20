import { Strategy } from "./IStrategy";

export class RegularSaleStrategy implements Strategy {
  private tax: number;

  constructor(tax: number) {
    this.tax = tax;
  }

  calculate(amount: number) {
    return amount + amount * this.tax;
  }
}
