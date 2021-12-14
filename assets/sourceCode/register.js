const $ = (value) => {
  return document.getElementById(value);
};

// function push to local storage
const updateBase = (data) => {
  localStorage.setItem("myData", JSON.stringify(data));
}

// validate Passwords
const validatePass = () => {
  const passWord = $("passWordRegister").value;
  const verifyPassWord = $("verifyPassword").value;
  if (!passWord || verifyPassWord != passWord) {
    showErrorToast("Passwords do not match")
    return false;
  }
  return true;
}

const validateRegister = () => {

  // get Data from localStorage
  let Data = JSON.parse(localStorage.getItem("myData"))
  if (!Data) Data = [];

  const userName = $("userNameRegister").value;
  const regularUsername = /^[a-zA-Z0-9_.]{3,15}$/
  const regularEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let check = false; // variable used to check if the account already exists

  if (!regularUsername.test(userName) && !regularEmail.test(userName)) {
    showErrorToast("Tên đăng nhập hoặc Email không hợp lệ")
    return false;
  }

  // check if the registered account already exists or not
  if (Data) { check = Data.some((obj) => (obj.name === userName)) }


  // If the account is already registered, show an error
  if (check) showErrorToast("Tài khoản đã được đăng ký")

  //If the password matches and the account doesn't exist, then you can register for an account
  if (validatePass() && !check) {
    showSuccessToast("Đăng ký thành công")
    let user = {
      name: userName,
      pass: $("passWordRegister").value,
    }
    Data.push(user);
    updateBase(Data)
    setTimeout(function () { window.open("./login.html", "_self") }, 2000)
  }
}
