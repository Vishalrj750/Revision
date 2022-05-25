// function sleep(num) {
//     return new Promise((resolve, reject) => {
//         if(typeof num == "number") {
//             resolve(num);
//         }
//         else {
//             reject("Error");
//         }
//     })
// }

// sleep("vishal").then((res) => {console.log(`I have been sleeping since ${res} hours`)})
// .catch((res) => {console.log(res)})

class calculator {
    constructor(a, b) {
        this.a = a,
        this.b = b
    }
    add() {
        return this.a + this.b
    }
    subtract() {
        return this.a - this.b
    }
    multiply() {
        return this.a * this.b
    }
    divide() {
        return Math.floor(this.a / this.b)
    }
}

const result = new calculator(2, 5);
console.log(result.add())