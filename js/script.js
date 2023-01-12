console.log('JS OK');
console.log('Vue OK', Vue);


const app = Vue.createApp({
    nome: 'Boolzapp',
    data(){
        return {
            user: {
                name: 'Nome Utente',
                avatar: '_io'
              },
              contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                },
              ]
        }
    }, 
    // computed: {
       
    // }, 
    // methods: {
        
    // }
});

app.mount('#root');