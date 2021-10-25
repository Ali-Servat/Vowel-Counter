const input = document.querySelector('input');
const btn = document.querySelector('button');
let counter = 0;

btn.addEventListener('click',(e)=>{
e.preventDefault();

const value = input.value;
const myArray = value.split('');
myArray.forEach(function(character){
    if(character === 'a'||character === 'e'||character === 'i'||character === 'o'||character === 'u'){
    counter++;
    }
})
const message = 'the number of vowels in ' + '"'+ value + '"' + ' is:\n' + counter; 
alert(message);
input.value='';
input.focus();
})