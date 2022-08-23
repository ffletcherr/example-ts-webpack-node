class Website {
  name: string;
  constructor(name: string) {
    console.log(`this is a website with name ${name}`);
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export { Website };
