class Queque {
    constructor(){
        this.queque = [];
    }
    enqueque(numero){
        this.queque.push(numero);
        return this.queque;
    }

    dequeque(){
        return this.queque.shift();
    }

    peek(){
        return this.queque[0];
    }

    size(){
        return this.queque.length;
    }

    isEmpty(){
        return this.queque.length === 0;
    }

    print(){
        console.log(this.queque);
    }

    
}

//Funcion para invertir Cola
const reverseQueue = (queque) => {
    const reversedQueque = new Queque();
    const tempQueque = [];

    while (!queque.isEmpty()) {
        tempQueque.push(queque.dequeque());
    }

    while (tempQueque.length > 0) {
        reversedQueque.enqueque(tempQueque.pop());
    }

    return reversedQueque;
}

//Ejemplos de uso:
const queque = new Queque();
queque.enqueque(1.4);
queque.enqueque(2.6);
queque.enqueque(3.9);
queque.enqueque(4.7);
queque.enqueque(5.5);

console.log("Cola original:");
queque.print();

const reversed = reverseQueue(queque);
console.log("Cola Invertida A partir de la anterior:");
reversed.print();





