function myFirstfunction(event) {
    event.preventDefault();
console.log(event.srcElement.fnamn.value); 
console.log(event.srcElement.enamn.value); 
console.log(event.srcElement.epost.value); 
console.log(event.srcElement.meddelande.value); 
console.log(event.srcElement.ja.value); 
}
