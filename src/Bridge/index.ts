import { EncoderTextAbstraction, Base64EncoderImplementor, HTMLEncoderImplementor } from "./example";

const BridgePattern = () => {
  const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
  const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());

  console.log("|Bridge|:", encoder2.encode("Esto es un texto. Y aqui comienza otro."));
};

export default BridgePattern;
