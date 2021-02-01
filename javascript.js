function myFirstfunction(event) 
{
event.preventDefault();

var formData = event.srcElement;

var TackHeader = document.getElementById("Tack")

TackHeader.innerText = "Tack " + formData.fnamn.value + " för ditt meddelande. Länge leve du! Vi återkommer så fort vi kan!"; 

console.log(formData.fnamn.value); 
console.log(formData.enamn.value); 
console.log(formData.epost.value); 
console.log(formData.meddelande.value); 
console.log(formData.ja.value); 
}

