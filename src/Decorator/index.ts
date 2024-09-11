import { ProductComponent } from "./example/ProductComponent";
import {
  CommercialInfoProductDecorator,
  StoreProductDecorator,
} from "./example/ProductDecorator";

const DecoratorPattern = () => {
  const productComponent = new ProductComponent("Cerveza");  
  const commercialInfoProduct = new CommercialInfoProductDecorator(
    productComponent,
    "London Porter",
    "Fuller's"
  );
  const storeProduct = new StoreProductDecorator(commercialInfoProduct, 15.5);
  console.log(`|Decorator|:`, storeProduct.getDetail());
};

export default DecoratorPattern;
