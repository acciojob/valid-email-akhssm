function validEmail(str) {
  //your JS code here.
  if (!str) return false; 

  const regex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return regex.test(str) && !str.includes("..") && !str.includes("--") && !str.includes(".@") && !str.includes("@.");
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
