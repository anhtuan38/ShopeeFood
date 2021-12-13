const $ = (value) => {
  return document.getElementById(value);
};


const updataBase = (data) => {
  localStorage.setItem("myData", JSON.stringify(data));
}


const validatePass = () => {
  const passWord = $("passWordRegister").value;
  const verifyPassWord = $("verifyPassword").value;
  if (!passWord || verifyPassWord != passWord) {
    $("msgVerifyPassword").innerHTML =  "<span class='text-danger'>Mismatched</span>";
    return false;
  }
  $("msgVerifyPassword").innerHTML = "";
  return true;
}

const userData = [];
const validateRegister = () => {
  const Data = JSON.parse(localStorage.getItem("myData"))
  const userName = $("userNameRegister").value;
  const regularExpress = /^[a-zA-Z0-9_.]{3,15}$/
  let check = true;

   if (Data) {
     Data.forEach((obj)=>{
    if (obj.name === userName) {
      check = false;
    }
  })
  };
  if (!regularExpress.test(userName)) {
    $("msgUserName").innerHTML =  "<span class='text-danger'>Must not contain special characters</span>";
    return false;
  }
  $("msgUserName").innerHTML = "";

  if (validatePass() && check) {
    showSuccessToast()
    console.log("avc")
    let user = {
      name : userName,
      pass : $("passWordRegister").value,
    }
    userData.push(user);
    updataBase(userData)
  } else showErrorToast("Tài khoản đã được đăng ký");
}
