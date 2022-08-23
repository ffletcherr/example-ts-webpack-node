import { User } from "./user";
import { Website } from "./website";

class Application {
  user: User;
  website: Website;
  constructor(userName: string, websiteName: string) {
    this.user = new User(userName);
    this.website = new Website(websiteName);
  }
}

export { Application };
