
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrainService {

  strains:any = []
  currentStrain:any;
  emptyStrains = false;
  

  constructor(
    private httpService: HttpClient,
    private toastController: ToastController,
    ) {}

  async presentToast(position: 'top' | 'middle' | 'bottom', message:any) {
    const toast = await this.toastController.create({
      duration: 1500,
      message: message,
      position: position
    });

    await toast.present();
  }


  async saveStrains(updatedStrains:any){

    
   
  }

  async initStrains(){

   
  }

  async getStrains(){
    let url = environment.api + '/api/collections/strains/records'
    return firstValueFrom(this.httpService.get(url))
  }

  
}
