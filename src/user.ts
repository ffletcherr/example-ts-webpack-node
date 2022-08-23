class User {
  name: string;
  constructor(name: string) {
    console.log(`this is a user with name ${name}`);
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export { User };
