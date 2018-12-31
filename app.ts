class Hello {
    sum: number = 0;
    constructor(...arr) {
        arr.forEach(num => this.sum = this.sum + num);
    }
}

// let hello = new Hello(5, 6, 7, 8, 9);
// console.log(hello.sum);

function ram(instance: Hello) {
    console.log(instance.sum);
}

ram(new Hello(5, 6, 7, 8, 9));
