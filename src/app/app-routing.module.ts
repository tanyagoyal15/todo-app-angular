import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamplesComponent } from "./examples/examples.component";
import { MyListComponent } from "./my-list/my-list.component";

const routes: Routes = [
  { path: "", redirectTo: "my-list", pathMatch: "full" },
  {
    path: "my-list",
    component: MyListComponent,
  },
  {
    path: "examples",
    component: ExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
