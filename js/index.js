import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
//import muestra from "./component/muestra.js";
//import ingreso from "./component/ingreso.js";

//Vue.component ("add-task", ingreso);
//Vue.component ("task-item", muestra);




 new Vue ({
    el: "#app",
    data:{

        arrayuser: [],
   
        name: '',
        lastname: '',
        age: '',

        
    },

    methods: {
        addUser:function(){
           

            if(this.name!="" && this.lastname!="" && this.age!="" ){
                this.arrayuser.push ({ name:this.name, lastname:this.lastname ,age:this.age,})
                
                    this.name="";
                    this.lastname="";
                    this.age="";
                }
            else{
                alert ("ingrese todos los datos!");
            }
         },  //cierre de funcion add user

         
        editTask : function(task){
            
        }, //cierre de funcion editar
 

        deleteTask: function (index) {
            if (confirm("Esta seguro que desea eliminar este usuario?")){
                this.arrayuser.splice(index,1);
                alert("Eliminado correctamente!");
            }else{

            }
        }, //cierre de funcion eliminar
           

    } //cierre metodo

        
});  // cierre del elemento vue
