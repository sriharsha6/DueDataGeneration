import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TabsComponent } from "./tabs.component";
import { DailyComponent } from "./daily/daily.component";
import { WeeklyComponent } from "./weekly/weekly.component";
import { MonthlyComponent } from "./monthly/monthly.component";
import { QuartlyComponent } from "./quartly/quartly.component";
import { YearlyComponent } from "./yearly/yearly.component";
import { OnetimeComponent } from "./onetime/onetime.component";
import { OncompletionofComponent } from "./oncompletionof/oncompletionof.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

const routes: Routes = [{ path: "", component: TabsComponent }];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    TabsComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    QuartlyComponent,
    YearlyComponent,
    OnetimeComponent,
    OncompletionofComponent
  ],
  providers: []
})
export class TabsModule {}
