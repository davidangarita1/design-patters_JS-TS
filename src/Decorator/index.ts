import { ProductComponent } from "./example/Component";
import {
  CommercialInfoProductDecorator,
  HTMLProductDecorator,
  StoreProductDecorator,
} from "./example/ProductDecorator";

const DecoratorPattern = () => {
  const productComponent = new ProductComponent("Cerveza");

  // Decorator 1
  const commercialInfoProduct = new CommercialInfoProductDecorator(
    productComponent,
    "London Porter",
    "Fuller's"
  );

  // Decorator 2 con decorator 1
  const storeProduct = new StoreProductDecorator(commercialInfoProduct, 15.5);

  // Decorator 3 con decorator 2 con decorator 1
  const htmlProductDecorator = new HTMLProductDecorator(storeProduct);
  
  console.log(`|Decorator|:`, htmlProductDecorator.getDetail());
};

export default DecoratorPattern;
