import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchTerm: string ='';
  public items:any;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
    }

  loadData(){
    let data:Observable<any>;
    data = this.http.get('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user');
    data.subscribe(result => {
      this.items = result;
    })

  }


  getItems(ev: any) {
     const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
         return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.apellido.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
    else {
      this.loadData();
    }
  }

  itemClick(itemid:number){
    switch (itemid) {
      case 1:
        alert("Empleado Activo");
        break;
      case 2:
        alert("Empleado Activo. \nObservacion: Fecha de cumpleaños incorrecta!!!"); 
        break;
      case 3:
        alert("Empleado Activo");
        break;
      case 4:
        alert("Empleado No Activo. \nObservacion: Fecha de cumpleaños incorrecta!!!"); 
        break;
      case 5:
        alert("Empleado Activo");
        break;
      case 6:
        alert("Empleado Activo");
        break;
      case 7:
        alert("Empleado Activo");
        break;
      case 8:
        alert("Empleado Activo");
        break;
      case 9:
        alert("Empleado Activo");
        break;
      default:  
    }

    
  }
}
