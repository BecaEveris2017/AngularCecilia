import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Cecilia';
colores =['negro','amarillo','verde'];
ShowColors=  false;
status= 'Mostrar';

DesplegarArray(){
this.ShowColors=!this.ShowColors;
if(this.status=='Ocultar'){
  this.status='Mostrar';
}
else{
  this.status='Ocultar';
}

}
 AddColor(Color){
   this.colores.push(Color.value);
   Color.value='';
   return false;
 }

}
