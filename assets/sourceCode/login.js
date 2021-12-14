const $ = (value) => {
  return document.getElementById(value);
};

const validateLogin = () => {
  const userName = $("userName").value;
  const passWord = $("passWord").value;
  const Data = JSON.parse(localStorage.getItem("myData"));

  // check userName and passWord
  let check = Data.some(obj => (obj.name === userName && obj.pass === passWord))

  if (check) {
    showSuccessToast("Đăng nhập thành công");
    // $("loginSuccess").innerHTML = `Xin chào ${userName}`
    setTimeout(function () { window.open("../loginSuccess.html", "_self", "location=yes") }, 2000)

  } else showErrorToast("Tài khoản hoặc mật khẩu không chính xác");

}

