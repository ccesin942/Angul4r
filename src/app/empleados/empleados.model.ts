export class Empleados{
        constructor(
            public name:string,
            public age:number,
            public charge:string,
            public hired:boolean
        ){}


        showName(){
          alert('Bienvenido: '+this.name);
        }

        showAge(){
          alert('Tu Edad es: '+this.age);
        }

        showCharge(){
          alert('Tu ID es: '+ this.charge);
        }

        showHired(){
          alert('Tu ID es: '+ this.hired);
        }

        ngOnInit(){
          this.showName();
        }
}
