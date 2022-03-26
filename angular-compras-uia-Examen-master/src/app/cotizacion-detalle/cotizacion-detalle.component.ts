import { Component, Input, OnInit } from '@angular/core';
import { ICotizacion } from '../iCotizacion-detalle';
import { IReporte } from '../iReporte';
import {SolicitudService} from '../solicitud.service';


@Component({
  selector: 'app-cotizacion-detalle',
  templateUrl: './cotizacion-detalle.component.html',
  styleUrls: ['./cotizacion-detalle.component.css']
})
export class CotizacionDetalleComponent implements OnInit {
 

  public solicitud = { name: "", id: 0, padre:0 }
 
  cotizaciones: ICotizacion[] = [];
 
  selectedCotizacion?: ICotizacion;
 
  @Input() reporte!: IReporte;
  datosCotizaciones: any;
 
   constructor( public datosCotizacion:SolicitudService) 
   { 
     
   }
                
   ngOnInit(): void {
                
     this.datosCotizaciones.getSolicitudes(this.reporte.id).subscribe((data: any[])=>{
       console.log(data);
       this.cotizaciones = data;
     })
     
 
 
   }
       
  
   onSelect(solicitud: ICotizacion): void {
     this.selectedCotizacion = solicitud;
   }
 
   agregar(name: string, id:string): void {
     name = name.trim();
 
     var newSolicitud = <ICotizacion>{};
     
     newCotizacion.id=id;
     newCotizacion.name=name;
     newCotizacion.type="solicitudNS";
     
     if (!name) { return; }
  this.datosCotizacion.agregacotizacion(newSolicitud)
    .subscribe(cotizacion, (ICotizacion: ICotizacion) => {
      this.cotizaciones.push(ICotizacion);
    });
   }
   
 }

function Input() {
  throw new Error('Function not implemented.');
}

function cotizacion(cotizacion: any, arg1: (ICotizacion: any) => void) {
  throw new Error('Function not implemented.');
}
 