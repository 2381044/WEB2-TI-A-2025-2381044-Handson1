
interface Human {
    name: string,
    age: number,
    location: string;
    motor: string;
}

const objectHuman: Human = {
    name: "Karla",
    age: 26,
    location: "Jakarta",
    motor: "Honda",
};

function cetakHuman(human: Human) {
    console.log(human.location);
}

cetakHuman(objectHuman);