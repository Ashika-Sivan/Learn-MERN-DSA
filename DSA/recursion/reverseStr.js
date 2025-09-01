function reverseStr(str,index=0){
    if(index==str.length){
        return ''
    }
    return reverseStr(str,index+1)+str[index]
}
console.log(reverseStr('ashika'))