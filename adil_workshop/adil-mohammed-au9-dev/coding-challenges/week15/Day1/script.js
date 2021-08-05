function palindrome(str) {
    var r = /[\W_]/g; // 
      var lowRegStr = str.toLowerCase().replace(r, '');
      var reverseStr = lowRegStr.split('').reverse().join(''); 
      return reverseStr === lowRegStr;
    }
    console.log(palindrome("Madam"));