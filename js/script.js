console.log('JS OK');
console.log('Vue OK', Vue);

const dt = luxon.DateTime;

const app = Vue.createApp({
    nome: 'Boolzapp',
    data(){
        return {

          currentIndex: 0,

          userSearch:'',

          userMsg:'',

          user: {
            name: 'Giuseppe',
            avatar: '_3'
          },

          contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_io',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ]
        }
    }, 
    computed: {
       filteredContact() {
        return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.userSearch.toLowerCase()))
       }
    }, 

    methods: {
        setCurrentIndex(index) {
          this.currentIndex = index;
        },

        getCurrentMoment() {
          return dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
        },

        clearInput(){
          this.userMsg ='';
        },

        sendMsg() {
          if(this.userMsg){
            const Msg = {
              date: dt,
              text: this.userMsg,
              status: 'sent'
            };
            this.contacts[this.currentIndex].messages.push(Msg);
            this.clearInput();
            this.receiveMsg();
          }
        },

        receiveMsg() {
          const recMsg = {
            date: dt,
            text: 'Ok!',
            status: 'received'
          };

          setTimeout(() => {
            this.filteredContact[this.currentIndex].messages.push(recMsg);
          }, 2000)
        },

        // lastMsg(index) {
        //   return this.contacts[index].messages.length - 1;
        // }
    }
});

app.mount('#root');