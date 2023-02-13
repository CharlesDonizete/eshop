import { DataService } from './../../data.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  public orders: any[] = null;

  constructor(private navCtrl: NavController, private service: DataService) {}

  ngOnInit() {
    this.service.getOrders().subscribe((res: any) => {
      this.orders = res;
    });
  }

  goToOrder(order) {
    this.navCtrl.navigateRoot(`/orders/${order}`);
  }
}
