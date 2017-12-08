import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './bar-view.component.html',
  styleUrls: ['./bar-view.component.scss']
})
export class BarViewComponent {
  id: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }
}
