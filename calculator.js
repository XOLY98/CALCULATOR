let press= document.getElementsByClassName("button");


function addToSum(value){
    document.getElementById('display').value+=value;
} 
function evaluateSum(){
    let de=document.getElementById('display').value;
    sum=eval(de)
    document.getElementById('display').value=sum;
    if(sum==undefined){
        document.getElementById('display').value="";
    }

}
function clearSum(){
    let clean=document.getElementById('display').value;
   let outcome=clean.slice(0,-0);
   document.getElementById('display').value=outcome;
}
function deleteSum(){
   let clean=document.getElementById('display').value;
   let outcome=clean.slice(0,-1);
   document.getElementById('display').value=outcome;
}
function addToSum1(value){
    let numDots = numberDots();
    let numops = numberOp();
    
    if (numDots <= numops){
        let sum1=document.getElementById('display').value;
        let i=sum1.length-1;
        if(sum1[i]!='.'){
            document.getElementById('display').value+=value;
        } 
    }
    
    
}
function numberDots(){
    let count=0;
    for(let i=0; i< document.getElementById('display').value.length; i++){

        if (((document.getElementById('display').value)[i]).includes('.')){
            count++;
        }
    }
    return(count);
}

function numberOp(){
    let count=0;
    let operations=['+','-','/','*']
    for(let i=0; i< document.getElementById('display').value.length; i++){
        for(let b=0; b< operations.length; b++){

             if (((document.getElementById('display').value)[i]).includes(operations[b])){
                count++;
            }
        }
    }
    return(count);
}



