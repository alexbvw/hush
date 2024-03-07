import { Component, OnInit } from '@angular/core';
import { StrainService } from 'src/app/helper/strain.service';

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.scss'],
})
export class StrainComponent  implements OnInit {

  constructor(
    public strainService: StrainService
  ) { }

  async ngOnInit() {
    await this.getStrains()
  }

  async getStrains(){
    await this.strainService.getStrains()
    .then((data:any)=>{
        console.log(data)
        this.strainService.strains = data?.items;
    })
    .catch((error)=>{
      this.strainService.presentToast('top', error.error.message)
    })
  }

}
