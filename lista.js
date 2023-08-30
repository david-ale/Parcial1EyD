class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next

    }
}
class List {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(node){
        const newNode = new Node(node)

        if(!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    peek(value, current = this.head){
        if(this.head === null){
            return false
        }

        if(current !== null){
            if(current.value === value){
                return true
            } else{
                return this.peek(value, current.next)
            }
        }
    }

    size(current = this.head, acum = 1){
        if(this.head === null){
            return 0
        }

        if(current.next !== null){
            return this.size(current.next, acum = acum +1)
        }

        return acum
    }

    remove(value,current = this.head){
        if(this.head === null){
            return false
        }

        if (this.head.value === value){
            return this.head = this.head.next
        }
        
        if(current.next !== null){
            if(current.next.value === value){
                current.next = current.next.next;
                return true;
            } else {
                return this.remove(value, current.next)
            }
        }
    }

    print(){
        let node = this.head;
        while(node != null){
            console.log(` Valor ${node.value} | Next: ${node.next?.value || null} `)
            node = node.next
        }
    }
}

const concatenar = (head1, head2) =>{
    const listaOrdenada = new List();
    let current1 = head1.head;
    let current2 = head2.head;
    while(current1 !== null || current2 !== null ){
        if(current1 === null){
            listaOrdenada.append(current2.value);
            current2 = current2.next
        } else if (current2 === null) {
            listaOrdenada.append(current1.value);
            current1 = current1.next
        } else{
            if(current1.value < current2.value){
                listaOrdenada.append(current1.value);
                current1 = current1.next;
            }else{
                listaOrdenada.append(current2.value);
                current2 = current2.next;
            }
        }
    }

    return listaOrdenada

}

//uso
const list1 = new List();
list1.append(5);
list1.append(7);
list1.append(2);

const list2 = new List();
list2.append(8);
list2.append(4);
list2.append(10);

//Concatena y ordena
const listaConcatenada = concatenar(list1,list2);

listaConcatenada.print();