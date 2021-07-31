<template>

    <div id="nav-container">
        <div class="nav">
            <h3>Relação de Operadoras Ativas ANS</h3>
            <div class="search">
                <input type="text" placeholder="Pesquisar" :value="search" @keyup="$emit('update:search', $event.target.value)">
            </div>
        </div>

    </div>

</template>

<script>

export default {
    methods: {
        submit(e){
            e.preventDefault();
            console.log(this.search);
        }
    },
    props: {
        search: String
    }
}

</script>

<style>
    .nav{
        font-family: Arial, Helvetica, sans-serif;
        padding: 30px 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav h3{
        font-size: 25px;
        color: #0349fc;
    }

    .search{
        width: 50%;
    }

    .search input[type=text]{
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding-left: 15px;
        font-size: 17px;
    }

    

    @media screen and (max-width: 768px){
        .nav{
        flex-direction: column;
        justify-content: space-around;
        }

        .search{
            width: 80%;
        }

        .search input{
        margin-top: 20px;
        }

        .adicionar{
            justify-content: center;
        }
    }
    
</style>