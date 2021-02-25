import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() title: string;
  @Input() buttons: any[];

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }


  open( url ) {
    console.log(url);
  }


}
