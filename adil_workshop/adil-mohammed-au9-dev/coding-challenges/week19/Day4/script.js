const s = ["abc#d##c", "abc##d######", "#######", "", "a#bc#d"]; 
const decodeBackspace = (string) =>{ 
    for (let j of string){ 
        if (j=="#"){ 
            string = string.replace(string.charAt(string.indexOf(j)-1),"") 
            string = string.replace(j,"") 
            } 
         } return string
      } 
      
for (let i in s){ 
    console.log(decodeBackspace(s[i]))
}