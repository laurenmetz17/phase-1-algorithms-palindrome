function isPalindrome(word) {
  // Write your algorithm here

  //take the string input and return true if that string is a palindrome, false if otherwise
  for(let i=0; i < word.length;i++) {
    if(word.charAt(i) == word.charAt(word.length - 1 - i)){
      console.log(word.charAt(i));
    }
    else {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  if string is palandrome (read characters starting from front and back and see tey match to middle)
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

  to check if palindrome read characters starting from front and back and see they match to middle)
  return true if so, false if you reach non matching characaters before the middle of the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting true')
  console.log("=>", isPalindrome("ab ba"))
}

module.exports = isPalindrome;
