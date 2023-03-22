/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati
tutti generati.
*/






const { createApp } = Vue

createApp({
    data() {
        return {
            message: '',
            emails: [],
            show: false,
        }
    },

    methods: {
        generateMails() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    this.message = res.data.response;
                    if (this.emails.includes(this.message)) {
                        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                            this.message = res.data.response;
                        })
                    } else {
                        this.emails.push(this.message);
                    }
                })
            }
            
            

        },

        // showMails() {
        //     if (this.emails.length == 10) {
        //         this.show = !this.show;
        //     }
        //     console.log(this.show);
        //     // this.show = !this.show;
        // },
    },


    // created() {
    //     for(i = 0; i < 10; i++) {
    //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
    //         console.log(res.data.response);
    //         this.message = res.data.response;
    //         if(this.emails.includes(this.message)) {
    //             axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
    //                 this.message = res.data.response;
    //             }) 
    //             } else {
    //                 this.emails.push(this.message);
    //             }
    //         })
        
    //     }
    // },


}).mount('#app')