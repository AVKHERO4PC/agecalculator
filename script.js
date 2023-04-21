const btnel=document.getElementById("dolly") // this  is for the attachment of the button element with the id

const inel=document.getElementById("birthday") //this is  for the attachment of the input with the specific id 
const res=document.getElementById("result") // this for the resultant 
function calculateage()   //this function is for the calculation where the input value from html is taken 
{
    const date=inel.value;  //giving the input value
    console.log(date); 
    if(date==="")  //if clicked but then nothing is selected it is to make sure that we are alerted with a message  
    {
        alert("enter the mandatory field ")
    }else{
        const age =getage(date)  //calling another function
        res.innerText=`You are ${age} ${age >1 ?"years" :"year "} old`
    }
    
}
function getage(bday)
{
    const currdate=new Date(); //date constructor for the current date from the browser
    const day=new Date(bday)  //giving the value of the parameter sent 
    
    let result=currdate.getFullYear()-day.getFullYear() //calculating the age in years  const gives an error so make it let which makes it a variable
    /// however there is a huge problem that if the clicked date goes beyond the current date then///
    const month=currdate.getMonth()-day.getMonth()
  
    if((month<0) ||(month==0 && (currdate.getDate()<day.getDate()))){
        result--
    }
    
    return result

}
btnel.addEventListener("click", calculateage) // adding an event listener to the button so that if clicked gets the age calculating