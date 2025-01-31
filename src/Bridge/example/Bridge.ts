interface Implementor {
  encode(str: string): string;
  decode(str: string): string;
}

export class EncoderTextAbstraction {
  private encoder: Implementor;

  constructor(encoder: Implementor) {
    this.encoder = encoder;
  }

  encode(str: string) {
    return this.encoder.encode(str);
  }

  decode(str: string) {
    return this.encoder.decode(str);
  }
}

export class Base64EncoderImplementor {
  encode(str: string) {
    return btoa(encodeURIComponent(str));
  }

  decode(str: string) {
    return decodeURIComponent(atob(str));
  }
}

export class HTMLEncoderImplementor {
  encode(str: string) {
    return str.split(".").reduce((acc, word) => acc + `<p>${word.trim()}</p>`, "");
  }

  decode(str: string) {
    return str.split("</p>").reduce((acc, word) => {
      return word !== "" ? acc + word.replace("<p>", "").trim() + ". " : acc + "";
    }, "");
  }
}
