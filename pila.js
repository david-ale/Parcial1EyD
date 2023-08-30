
class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }
   
    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}




const invertirPila = (stack) => {
  const reversedStack = new Stack();
    while(stack.size() > 0){
        reversedStack.push(stack.pop());
    }
    return reversedStack
}

//Ejemplo de uso:
const primerPila = new Stack();

primerPila.push(6);
primerPila.push(8);
primerPila.push(9);

const pilaInvertida = invertirPila(primerPila);
console.log("Pila invertida:")
pilaInvertida.print();




