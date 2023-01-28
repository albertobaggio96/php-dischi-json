const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'db/api.php',
            dischiList: [],
            clickIndex: 0,
            indiceDisplay: 0,
        }
    },
    methods:{
        getDischi(){
            axios.get(this.apiUrl)
            .then(responde => {
                console.log(responde.data)
                this.dischiList = responde.data
            }) 
        },
        getMoreInfo(indice){
            this.indiceDisplay = 1;
            this.clickIndex = indice;
        },
        closeInfo(){
            this.indiceDisplay = 0;
        }
    },
    created(){
        this.getDischi();
    }
}).mount('#app')