import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';

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

  constructor(
    private toast: ToastrService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }




  handleClick() {

    this.api.SendEmail(this.message, this.name, this.email).subscribe( res => {
      if( res.OK )
        this.toast.success("El mensaje fue enviado correctamente ");
      else
        this.toast.error(res.msg);
    });
  }

}
