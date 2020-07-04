export default {
    data (){
        return{
            name: '',
            lastname:'',
            age: '',
        };
    },

    methods: {
        addUser(){
           
           this.$emit("insertTask", this.name,this.lastname,this.age);
           this.name="";
            this.lastname="";
            this.age="";

         },  //cierre de funcion add user

    },

    template: 
    `<div class="col-sm-10">
         <input type="text" class="form-control" name="name" placeholder="Ingrese su primer nombre" v-model= "name"/>
        </div>
        <label class="col-sm-2 col-form-label">Apellido</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="lastname" placeholder="Ingrese su apellido" v-model= "lastname"/>
        </div>

        <label class="col-sm-2 col-form-label">Edad</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="age" placeholder="Ingrese su edad" v-model= "age"/>
            </div>
        <div class="form-group">
            <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
            <button type="submit" class="btn btn-primary" v-on:click="addUser"> Guardar 💾</button>
        </div>`,
};