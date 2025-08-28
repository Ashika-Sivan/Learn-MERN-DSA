//implementation of linked list
class Node{
    constructor(value){
        this.value=value
        this.next=null

    }
}
class linkedList{
    construcctor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node=new Node()
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }


    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    insertAtIndex(index,value){
        if(index<0 ||index>this.size){
            return 'invalid index'
        }
        if(index===0){
            this.prepend(value)
            return
        }
        let node=new Node(value)
        let curr=this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        node.next=curr.next
        curr.next=node
        this.size++
    }

    insertAfterValue(value,targetVal){
    if(this.isEmpty()){
        return 'invalid index'
    }

    let curr=this.head
    while(curr){
        if(curr.value==target){
            let node=new Node(value)
            node.next=curr.next
            curr.next=node
            return 
            
        }
        curr=curr.next
    }
    return 'value not found'
}
}

