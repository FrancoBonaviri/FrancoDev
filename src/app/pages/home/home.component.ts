import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';


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
    private api: ApiService,
    private modalService: NgbModal
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



  openModal( id ) {

    let arrayButtons = [];
    let title = '';

    switch( id ){
      case 1 :
        title = 'QR Scanner App'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/Scanner' } , { text: 'Descargar APK' , url: '../../../assets/apks/qr-scanner.apk' }]
      break;
      case 2 :
        title = 'Peliculas App'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/Peliculas-app' } , { text: 'Descargar APK' , url: '../../../assets/apks/peliculas-app.apk' }]
      break;
      case 3 :
        title = 'News App'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/News-app' } , { text: 'Descargar APK' , url: '../../../assets/apks/news-app.apk' }]
      break;
      case 4 :
        title = 'Notes App'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/NotesApp' } , { text: 'Ir al respositorio del servidor' , url: 'https://github.com/FrancoBonaviri/NotesApp-server' }]
      break;
      case 5 :
        title = 'ATLAS'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/ATLAS' } ]
      break;
      case 6 :
        title = 'Journal App'
        arrayButtons = [ { text: 'Ir al respositorio', url: 'https://github.com/FrancoBonaviri/Journal-App' } ]
      break;


    }








    const ref = this.modalService.open( ModalComponent );
    ref.componentInstance.title = title;
    ref.componentInstance.buttons = arrayButtons
  }


}
