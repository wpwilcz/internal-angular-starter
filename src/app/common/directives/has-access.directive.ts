import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHasAccess]'
})
export class HasAccessDirective implements OnInit {
  constructor(private templateRef: TemplateRef<any>,
              private _viewContainer: ViewContainerRef) {
  }

  @Input('appHasAcccess') perm: string;

  ngOnInit() {
    this.checkPerm();
  }

  private checkPerm() {
    if (this.perm === 'ADMIN') {
      this._viewContainer.clear();
    } else {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
