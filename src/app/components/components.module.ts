import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
  ],
})
export class ComponentsModule {}
