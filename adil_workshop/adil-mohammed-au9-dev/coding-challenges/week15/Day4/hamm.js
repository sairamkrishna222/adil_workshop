function hammingDistance(s1,s2) {
    var hamd=0;   //Hamming distance variable
  
    for ( var i=0,j=0; i<s1.length && j<s2.length;j++) {
        if (s1.charAt(i)!==s2.charAt(j)) {
          hamd=hamd+1
        }
        i++
    }
    return hamd
  }
  
  
  var s1 = "river";
  var s2 =  "rover";
  
  if (s1.length !== s2.length) {
      console.log("not valid strings")
    }
  else {
    var ans = hammingDistance(s1,s2)       
    console.log("Hamming distance between:",ans)
  }