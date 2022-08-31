// import { Role, User } from "./user.js";
import { User } from "./user.js";
import { UserService } from "./userService.js";

function Logger(d: Date) {
  return function (_: Function) {
    const DateTime = document.getElementById(
      "date-container"
    ) as HTMLDivElement;
    let dt =
      d.getDate() +
      " " +
      d.toLocaleString("en-US", { month: "long" }) +
      " " +
      d.getFullYear() +
      " ::Time: " +
      d.getHours() +
      ":" +
      d.getMinutes();
    +":" + d.getSeconds();

    DateTime.innerHTML = dt;

    // console.log(dt);
  };
}

@Logger(new Date())
export class HomePage {
  requestUrl: string = "http://localhost:5000";

  // tableContainer = document.getElementById("table-container");
  loadBtn: HTMLButtonElement;
  refreshBtn: HTMLButtonElement;
  userService: UserService;

  users: User[];
  constructor() {
    this.loadBtn = document.getElementById("load-btn") as HTMLButtonElement;
    this.refreshBtn = document.getElementById(
      "refresh-btn"
    ) as HTMLButtonElement;

    this.userService = new UserService();
    this.hookEvents();
  }

  hookEvents(): void {
    this.loadBtn.addEventListener("click", () => {
      this.loadBtn.style.display = "none";
      this.refreshBtn.style.display = "flex";

      this.loadData();
    });

    this.refreshBtn.addEventListener("click", () => {
      this.loadData();
    });
  }

  loadData() {
    this.users = this.userService.read();

    this.userService.render();
  }
}
export var objOfHomePage = new HomePage();
