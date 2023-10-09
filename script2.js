class genratePassword{
      
    constructor(){}
     //assignin value for each set
     upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     lowerset="abcdefghijklmnopqrstuvwxyz"
     symbolset="~`!@#%^&*()+=[]{}-?/"
     numberset="1234567890"
       
    //  selectors

    passbox=document.getElementById('passbox');
    totalchar=document.getElementById('total-char');
    uppercase= document.getElementById('upper-case');
    lowercase=document.getElementById('lower-case');
    symbol=document.getElementById('symbol');
     number=document.getElementById('number');

    getRandamData(dataset){
        return dataset[Math.floor(Math.random()*dataset.length)]
    }

    getGeneratePassword(password=""){
        
        if(this.uppercase.checked){
            password +=this.getRandamData(this.upperset);
        }
        if(this.lowercase.checked){
            password+=this.getRandamData(this.lowerset)
        }
        if(this.symbol.checked){
            password+=this.getRandamData(this.symbolset)
        }
        if(this.number.checked){
            password+=this.getRandamData(this.numberset)
        }
        
        if(password.length <=this.totalchar.value){
            return this.getGeneratePassword(password); 
        }
        console.log(password.substring(0,this.totalchar.value))
        this.passbox.innerHTML=password.substring(0,this.totalchar.value);


    }

}
 const obj=new genratePassword();
 obj.getGeneratePassword();
btn=document.getElementById('btn');
btn.addEventListener('click',function(){
      obj.getGeneratePassword();
})
