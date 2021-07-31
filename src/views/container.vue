<template>

    <div id="container">

        <navContainer v-model:search="find"/>
        <div class="containerCSV">

            <div class="add">
                <button class="waves-effect waves-light btn-small light-blue darken-3" @click="displayAdd()">Adicionar <i class="material-icons">group_add</i> </button>
            </div>

            <editInputs v-if="displayForm" v-bind:operator="registro" @save="createOperator($event)" @update="updateOperator($event)" />
            
            <ul>
                <li class="bold">
                    <div class="element notMobile">ANS</div>
                    <div class="element notMobile">CNPJ</div>
                    <div class="element">NOME</div>
                    <div class="element">EMAIL</div>
                    <div class="element">ACOES</div>
                    
                </li>

                <li v-for="registro in filter" :key="registro.registroANS">
                    <div class="element notMobile">{{registro.registroANS}}</div>
                    <div class="element notMobile">{{registro.cnpj}}</div>
                    <div class="element">{{registro.nomeFantasia}}</div>
                    <div class="element">{{registro.enderecoEletronico}}</div>
                    <div class="element">
                        <button class="waves-effect waves-light btn-small light-blue darken-3" @click="onEdit(registro)">Editar <i class="material-icons">create</i> </button>
                        <button class="waves-effect waves-light btn-small light-blue darken-3" @click="deleteOperator(registro.registroANS)">Excluir <i class="material-icons">delete</i></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import navContainer from "../components/navContainer.vue"
import Operators from '../services/operators'
import editInputs from '../components/editInputs.vue'


export default {
    components:{navContainer, editInputs},
    props:['usuarios','regsitros'],
    data () {
      return {
        find: '',
        registros: [],
        displayForm: false,
        registro: {
            cnpj: "",
            nomeFantasia: "",
            enderecoEletronico: "",
            registroANS: ''
        },
        operators: []
      }
    },
    mounted() {
        this.getOperators();
    },
    methods:{
        displayAdd() {
            this.displayForm = !this.displayForm;
        },
        getOperators() {
            this.clearFilters();
            
            Operators.getOperators().then((values) => {
                this.registros = values.data;
                this.operators = values.data;
            })
        },
        deleteOperator(id) {
            if(confirm('Deseja excluir o produto?')){
                Operators.deleteOperators(id).then(() => {
                    this.getOperators();
                });
            }
            
        },
        createOperator(operator) {
            Operators.createOperators(operator).then(() => {
                this.getOperators();
            });

        },
        updateOperator(operator) {
            Operators.updateOperators(operator).then(() => {
                this.getOperators();
            });
        },
        onEdit(operator) {
            this.registro.registroANS = operator.registroANS;
            this.registro.cnpj = operator.cnpj;
            this.registro.nomeFantasia = operator.nomeFantasia;
            this.registro.enderecoEletronico = operator.enderecoEletronico;
            this.displayForm = true;
        },
        clearFilters() {
            this.find = '';
        }
    },
    computed:{
        filter() {
            let items = [];


            items = this.registros.filter((registro) =>{
                const item = registro.cnpj.toLowerCase().indexOf(this.find.toLowerCase()) > -1 ||
                registro.nomeFantasia.toLowerCase().indexOf(this.find.toLowerCase()) > -1 ||
                registro.enderecoEletronico.toLowerCase().indexOf(this.find.toLowerCase()) > -1 ||
                registro.registroANS.toLowerCase().indexOf(this.find.toLowerCase()) > -1;
                return item;
            })
            return items;
        }
    }
}
    
</script>

<style>

    #container{
        width: 95%;
        height: 100%;
        background-color: white;
        margin: 50px auto;
        padding: 20px 2%;
        border-radius: 10px;

        -webkit-box-shadow: 0px 1px 18px -10px #777777; 
        box-shadow: 0px 1px 18px -10px #777777;
    }

    .containerCSV{
        width: 100%;
        margin-top: 30px;
        
        font-family: Arial, Helvetica, sans-serif;
        overflow: hidden;
    }

    .element{
      width: calc(100% / 5);
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-transform: uppercase;
    }

    .bold{
        font-weight: bold;
    }
    
    .containerCSV ul{
        width: 100%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        padding: 10px 0;
        list-style: none;
        overflow-y: auto;
        max-height: 650px;
    }

    .containerCSV ul li{
        width: 100%;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        padding: 10px 0;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .add{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 15px;
    }

    .add button{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .element button{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button i{
        padding: 5px;
    }


    @media screen and (max-width: 1024px){
      .containerCSV ul{
        font-size: 13px;
      }

      .notMobile{
        display: none;
      }

      .element{
          width: calc(100% / 3);
      }

      .element button{
          margin-left: 10px;
      }
      
    }

</style>