import { Component } from "./IComponent";

export class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail = (): string => `${this.name}`;
}
