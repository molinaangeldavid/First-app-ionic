import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {
    name: undefined,
    lastName: undefined,
    password: undefined
  }

  alertOpen: any = false;

  constructor(private alertController: AlertController, private router: Router, private info: InputService) { }
  async logIn() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Error',
      subHeader: '',
      message: '',
      buttons: ['OK'],
    });


    if(this.user.name == "" || this.user.lastName == "" || this.user.name == undefined || this.user.lastName == undefined){
      alert.subHeader = 'Falta informacion'
      alert.message = 'Necesitas rellenar todos los campos'
      await alert.present();
    }else{
      if (this.user.password == 'supersecreto'){
        this.router.navigate(['/home']);
        this.info.setInfo(
          {
            name: this.user.name,
            lastname: this.user.lastName
          });
      }else{
        alert.subHeader = 'Contraseña incorrecta!'
        alert.message = 'La contraseña de acceso no es la correcta'
        await alert.present();
      } 
    }

  }
  ngOnInit() {


  }

  public alertButtons = ['OK'];


}
