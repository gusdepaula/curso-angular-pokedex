import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Module Routing
import { RoutingModule } from "./routing.module";

//Module
import { SharedModule } from "../shared/shared.module";

//Pages
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RoutingModule, SharedModule, HttpClientModule],
})
export class PagesModule {}
