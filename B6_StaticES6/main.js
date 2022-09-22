class info {
    constructor(name, desc){
        this.name = name;
        this.desc = desc;
    }
    caculate(x = 1){
        return x*3;
    }
}

class geometry extends info {
    constructor(name, desc, length){
        super(name, desc);
        this.length = length;
    }

}

const a = new geometry('hinh vuong', 'co 3 canh', 5);
console.log(a.name);
console.log(a.desc);
console.log(a.caculate(a.length));