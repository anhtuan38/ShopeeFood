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

    // save the correct password, account to local storage
    const login = [{ key: userName, value: passWord }];
    showSuccessToast("Đăng nhập thành công");
    localStorage.setItem("Success", JSON.stringify(login))
    setTimeout(function () { window.open("./loginSuccess.html", "_self", "location=yes") }, 2000)

  } else showErrorToast("Tài khoản hoặc mật khẩu không chính xác");

}

