let cat = {
    hunger: 50,
    tiredness: 50,
    lonliness: 50,
    happiness: 50,
    feed(arg = 10) {
        this.hunger -= arg;
        this.happiness += arg;
    },
    sleep(arg = 10) {
        this.tiredness -= arg;
        this.hunger += arg;
    },
    pet(arg = 10) {
        this.tiredness += arg;
        this.happiness += arg;
        this.lonliness -= arg;
    },
    status() {
        let str = 'Paws is '
        this.hunger >= 50 ? str += "hungry, " : str += ""
        this.tiredness >= 50 ? str += "tired, " : str += ""
        this.happiness >= 50 ? str += "happy, " : str += ""
        this.lonliness >= 50 ? str += "lonely" : str += ""
        return str
    }
}
// cat.feed()
// cat.sleep()
// cat.pet()
console.log(cat.status());


