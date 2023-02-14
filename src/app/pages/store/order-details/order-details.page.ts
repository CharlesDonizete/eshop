import { StatusUtil } from './../../../utils/status.util';
import { SecurityUtil } from './../../../utils/security.util';
import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public order = null;
  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get('number');
    this.service.getOrder(number).subscribe((data) => (this.order = data));
  }

  isManager(): boolean {
    return SecurityUtil.isInRole('manager');
  }

  translateOrderStatus(status: string): string {
    return StatusUtil.convert(status);
  }
}
