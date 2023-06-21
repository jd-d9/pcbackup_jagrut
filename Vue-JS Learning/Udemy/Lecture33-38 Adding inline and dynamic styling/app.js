const app = Vue.createApp({
    data() {
        return {
            boxAselect: false,
            boxBselect: false,
            boxCselect: false,
        };
    },
    methods: {
        clickOnBox(box) {
            if(box === 'A') {
                this.boxAselect = !this.boxAselect;
            }
            else if(box === 'B') {
                this.boxBselect = !this.boxBselect;
            }
            else if(box === 'C') {
                this.boxCselect = !this.boxCselect;
            }
        }
    },
})
app.mount('#styling')