function getRandomValue(max, min) {                         // It is js function, create for show my code structure clean.
    return Math.floor(Math.random() * (max - min) + min)    // formula for get value between min and max which we passed as parameter when call function.
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,   // for count clicks on special attack button.
            winner: null   // for show game result.
        }
    },
    methods: {
        attackOnMonster() {
            this.currentRound++;
            this.monsterHealth = this.monsterHealth - getRandomValue(12, 5);   // here we can direct write this Math.floor(Math.random() * (12 - 5) + 5)
            this.attackOnPlayer();  // function call because when we click on attack butto to attack on monster monster return attack will happen.
        },
        attackOnPlayer() {
            // here i don't increase count because this function was called in attackOnMonster() and specialAttack() function so count will more increase if i do that.
            this.playerHealth -= getRandomValue(15, 8)   // here we can direct write this Math.floor(Math.random() * (18 - 8) + 8)
        },
        specialAttack() {
            this.currentRound++;
            this.monsterHealth -= getRandomValue(18, 9);
            this.attackOnPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(18, 13);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.currentRound++;
            this.attackOnPlayer();
        },
        surrenderGame() {
            this.winner = 'monster'
        },
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        }
    },
    computed: {
        monsterHealthValue() {
            if(this.monsterHealth < 0){
                return { width: '0%'}
            }
            return {width: this.monsterHealth + '%'}   // make function for dynamic style and show clean code
        },
        playerHealthValue() {
            if(this.playerHealth < 0){
                return { width: '0%'}
            }
            return {width: this.playerHealth + '%'}   //  make function for dynamic style and show clean code
        },
        mayClickOnSpecialAttack() {
            return this.currentRound % 3 !== 0   // We can click on special attack button once after every 3 clicks.
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0){
                // a draw
                this.winner = 'draw';
            }
            else if(value <= 0){
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                // a draw
                this.winner = 'draw';
            }
            else if(value <= 0){
                // monster lost
                this.winner = 'player';
            }
        }
    }
});
app.mount('#game')