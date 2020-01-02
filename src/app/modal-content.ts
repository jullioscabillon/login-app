import {Component, Input} from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Login App</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" [ngStyle]="{'background-color': color}">

      <div *ngIf="trovato">
        <p>Name and Surname: {{name}} {{ surname }}</p>
        <p>Role: {{role}}</p>
        <p>Age: {{ age }}</p>
      </div>
      <div *ngIf="!trovato">
        <p>{{ customMessage }}</p>
      </div>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContentComponent {
  @Input() name;
  @Input() surename;
  @Input() role;
  @Input() age;
  @Input() color;
  @Input() trovato;
  @Input() customMessage;

  constructor(public activeModal: NgbActiveModal) {}
}
