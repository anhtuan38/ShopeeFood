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
  const Data = JSON.parse(localStorage.getItem("myData"))
  const userName = $("userNameRegister").value;
  const regularUsername = /^[a-zA-Z0-9_.]{3,15}$/
  const regularEmail = /^[a-zA-Z0-9_.]$/

  // check if the registered account already exists or not
  let check = Data.some((obj) => (obj.name === userName))

  if (!regularUsername.test(userName)) {
    showErrorToast("Tên đăng nhập không hợp lệ")
    return false;
  }

  if (validatePass() && check) {
    showSuccessToast("Đăng ký thành công")
    let user = {
      name: userName,
      pass: $("passWordRegister").value,
    }
    Data.push(user);
    updateBase(Data)
    setTimeout(function () { window.open("./login.html", "_self") }, 2000)
  } else showErrorToast("Tài khoản đã được đăng ký");
}
