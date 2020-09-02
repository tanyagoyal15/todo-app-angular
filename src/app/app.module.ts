import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExamplesComponent } from "./examples/examples.component";
import { MyListComponent } from "./my-list/my-list.component";

@NgModule({
  declarations: [AppComponent, ExamplesComponent, MyListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
