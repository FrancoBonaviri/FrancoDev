import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMore: boolean = false;


  //#region Props

  name: string;
  email: string;
  message: string;

  //#endregion

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }




  handleClick() {
    setTimeout(() => {
      this.toast.success("El mensaje fue enviado correctamente ")
    }, 100);
  }

}
