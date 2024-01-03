



//var djafaga=

//"https://www.facebook.com/reel/196170090192175/?mibextid=rS40aB7S9Ucbxw6v"

//https://www.instagram.com/reel/CzaEc2oIg_5/?igshid=NTc4MTIwNjQ2YQ==

/*let u ="https://www.facebook.com/reel/828948352362638/?mibextid=9VFbry0JQbWc6ksJ"



let url="https://firestore.googleapis.com/v1/projects/qurany-8df6f/databases/(default)/documents/Maher_French"

//let url="https://firestore.googleapis.com/v1/projects/qurany-8df6f/databases/(default)/documents/Maher_French/0g8eMPvHsQb8gRYp86Zz"



https://firestore.googleapis.com/v1/projects/qurany-8df6f/databases/(default)/documents


https://firestore.googleapis.com/v1/projects/hoptok-addff/databases/(default)/documents/videos

*/
 let inpu=document.getElementById("inP"); 
  
 let f='';
 
 function display(num){
 
inpu=document.getElementById("inP"); 
  
  f=num;
  
  if(f=='π'){
    
    f=Math.PI;
    alert(f);
  }
  if(f=='cos('){
  f=Math.cos(inpu.value);
   
  }
  if(num=='%'){
    
  f+= inpu.value/100;
   
  }
  if(num=='✓'){
    
    inpu.value=Math.sqrt(inpu.value);
   
   alert(inpu.value);
    
  }
  
  
  return inpu.value+=f;

 }

 function calc(){
   
   try {
   
   
    
    inpu.value=eval(inpu.value);
  
  
     
   } catch (e) {
     
     alert(e.toString());
   }
 }

 function cl(){
 
    inpu.value='';
 
 }

function del(){
 
   inpu.value=inpu.value.slice(0,-1);
  
}
  
  
function Dark(){
  
  
    
    
    let b=document.body;
    
    b.classList.toggle('dark');
    alert(899);
    
    
  }
  

     

