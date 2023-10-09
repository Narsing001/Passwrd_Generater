//Without a Class

const upperset='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerset='abcdefghijklmnopqrstiuvwxyz';
const numberset='1234567890';
const symbolset='`~!@#$%^&*()_-+=?/';

//selectors
const passbox=document.getElementById('passbox');
const totalchar=document.getElementById('total-char');
const uppercase= document.getElementById('upper-case');
const lowercase=document.getElementById('lower-case');
const symbol=document.getElementById('symbol');
const number=document.getElementById('number');
const btn=document.getElementById('btn')

// code for getting randam value
const getRandamData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

//Generate password code here...
const genratePassword=(password="")=>{
    if(uppercase.checked){
        password +=getRandamData(upperset);
    }
    if(lowercase.checked){
        password+=getRandamData(lowerset);
    }
    if(symbol.checked){
        password+=getRandamData(symbolset);
    }
    if(number.checked){
        password+=getRandamData(numberset);
    }
    if(password.length<=totalchar.value){
        return genratePassword(password);
    }
    console.log(truncateString(password,totalchar.value));

    passbox.innerHTML= truncateString(password,totalchar.value);

}

genratePassword();
btn.addEventListener("click",function(){
    genratePassword();
})

    
//string substr code
function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + ''
  }