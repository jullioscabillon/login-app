import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './modal-content';

@Component({
  selector: 'app-ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open(data) {

    const modalRef = this.modalService.open(NgbdModalContentComponent, { centered: true });
    modalRef.componentInstance.name = data.name;
    modalRef.componentInstance.surname = data.surname;
    modalRef.componentInstance.role = data.role;
    modalRef.componentInstance.age = data.age;
    modalRef.componentInstance.color = data.color;
    modalRef.componentInstance.trovato = data.trovato;
    modalRef.componentInstance.customMessage = data.customMessage;



  }
}
