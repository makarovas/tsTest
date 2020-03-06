class TypeScript {
  version: string;

  constructor(version: string) {
    this.version;
  }
  info(name: string) {
    return `[${name}]`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;
  constructor(theModel: string) {
    this.model = theModel;
  }
}

class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

console.log(cat.setVoice("voise"));

cat.voice();
