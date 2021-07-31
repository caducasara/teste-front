<template>

    <div class="addModal">
        <div class="wrapper">
            <div class="input-wrapper">
                <input type="text" placeholder="CNPJ" v-model="cnpj">
                <input type="text" placeholder="NOME" v-model="nomeFantasia" >
                <input type="text" placeholder="EMAIL" v-model="enderecoEletronico" >
            </div>

          <button @click="save()" class="waves-effect waves-light btn-small light-blue darken-3" >Salvar</button>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {

            cnpj: this.operator.cnpj,
            nomeFantasia: this.operator.nomeFantasia,
            enderecoEletronico: this.operator.enderecoEletronico
        }
    },
    props: {
        operator: Object
    },
    methods: {

        save() {
            if(this.operator.registroANS){
                this.$emit('update', {
                cnpj: this.cnpj,
                nomeFantasia: this.nomeFantasia,
                enderecoEletronico: this.enderecoEletronico})
            }else{
                this.$emit('save', {
                cnpj: this.cnpj,
                nomeFantasia: this.nomeFantasia,
                enderecoEletronico: this.enderecoEletronico})
            }
        }
    },
    mounted() {
        // console.log(this.operator)
    }
}
</script>

<style>

    .addModal{
        width: 100%;
        height: 100%;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        background-color: rgba(0,0,0,0.10);
    }

    .input-wrapper{
        width: 30%;
        margin-bottom: 20px;
    }

    .input-wrapper input{
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding-left: 15px;
        font-size: 17px;
    }

    .input-wrapper input::placeholder{
        color: black;
    }
    
</style>