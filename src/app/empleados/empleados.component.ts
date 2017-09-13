import { Component } from '@angular/core';
import { Empleados } from './empleados.model';

@Component({
  selector:'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent{
  public title = 'Empleados';
  public emp:Empleados;
  public emp_array:Array<Empleados> = new Array<Empleados>();
  public show_worker:boolean;
  public poss:number;

  constructor(  ){
    this.emp_array = [
      new Empleados("Carlos"  ,25,"Developer",true),
      new Empleados("Mario"   ,24,"Developer",true ),
      new Empleados("Eliannys",31,"Developer",false),
      new Empleados("Ronald " ,25,"Developer",true ),
      new Empleados("Carlos"  ,25,"Developer",true),
      new Empleados("Mario"   ,24,"Developer",true ),
      new Empleados("Eliannys",31,"Developer",false),
      new Empleados("Ronald " ,25,"Developer",true ),
      new Empleados("Carlos"  ,25,"Developer",true),
      new Empleados("Mario"   ,24,"Developer",true ),
      new Empleados("Eliannys",31,"Developer",false),
      new Empleados("Ronald " ,25,"Developer",true ),
      new Empleados("Carlos"  ,25,"Developer",true),
      new Empleados("Mario"   ,24,"Developer",true ),
      new Empleados("Eliannys",31,"Developer",false),
      new Empleados("Ronald " ,25,"Developer",true )
    ];

    this.poss = 3;
    this.show_worker = true ;
    console.log(this.emp_array);
    console.log(' El tamaño es: '+ this.emp_array.length);
  }

  ngOnInit(){
      console.log(this.title + ' Starts...');
      console.log(this.emp_array);
  }

}
