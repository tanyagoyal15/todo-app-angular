import { Component, OnInit } from "@angular/core";
import { inputAnimation, noteAnimation } from "../animations";

@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.scss"],
  animations: [inputAnimation, noteAnimation],
})
export class MyListComponent implements OnInit {
  state: string = "inactive";
  myTodoList = [
    { name: "Start the new app project", done: false },
    { name: "Work on blog", done: false },
    { name: "Lunch at 1", done: false },
  ];
  constructor() {}

  ngOnInit() {}

  submitItem(event) {
    this.myTodoList.push({ name: event.target.value, done: false });
    event.target.value = "";
  }

  toggleState() {
    this.state = this.state == "inactive" ? "active" : "inactive";
  }

  removeItem(event, i) {
    this.myTodoList.splice(i, 1);
  }

  toggleTodoItem(item, index) {
    this.myTodoList.forEach((i) => {
      if (i.name == item.name) {
        i.done = !i.done;
      }
    });
  }
}
