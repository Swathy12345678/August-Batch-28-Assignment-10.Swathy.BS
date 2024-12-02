const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const success=document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error"); //array
const contact=document.querySelector("#contact");
const password=document.querySelector("#Password");


//errornodes[0]="name cannot be blank"
//errornodes[1]="invalid email"
//errornodes[2]="please Enter proper Message"
//erronodes[3]="please enter your number"
//errornodes[4]="wrong password"



function  validateForm()
{  
    clearMessage();
    let errorflag=false;
    if(nameInput.value.length<3)
    {
        errorNodes[0] .innerText="Name cannot be blank";
        errorflag=true;
    }  


    if(!emailISvalid(email.value))
    {
      errorNodes[1].innerText="Invalid email";
      errorflag=true;

    }


    if(message.value.length<3)        
   {
    errorNodes[2].innerText="please Enter proper Message";
    errorflag=true;    
   }


    if(contact.value.length<10)
        {
            errorNodes[3].innerText="please enter your number";
            errorflag=true;
        }
        
        if(password.value.length<6)
            {
                errorNodes[4].innerText="conform your password";
                errorflag=true;
            }
        
if(!errorflag)
{
    success.innerHTML="Form validation successfull"
}

}
 function clearMessage()
 {
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }
    // success.innerText="";
 }
function emailISvalid(email)
{
    let pattern=/^[a-zA-Z0-9.%-]+@[a-zA-Z0]/
    return pattern.test(email);
}
  
function passwordISvalid(password)
{
    let pattern="(?=.[a-zA-Z])(?=.\d).{6,}$"
    return pattern.test(password);
}

