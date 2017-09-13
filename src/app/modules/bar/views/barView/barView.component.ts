import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './barView.component.html',
  styleUrls: ['./barView.component.scss']
})
export class BarViewComponent {
  id: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }
}
