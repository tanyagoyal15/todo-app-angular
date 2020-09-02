import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

export const inputAnimation = trigger("focusPanel", [
  state(
    "inactive",
    style({
      transform: "scale(1)",
    })
  ),
  state(
    "active",
    style({
      transform: "scale(1.04)",
    })
  ),

  transition("inactive <=> active", animate("500ms ease-in")),
]);

export const noteAnimation = trigger("note", [
  state(
    "inactive",
    style({
      opacity: 0,
    })
  ),
  state(
    "active",
    style({
      opacity: 1,
    })
  ),

  transition("inactive <=> active", animate("500ms ease-in")),
]);
