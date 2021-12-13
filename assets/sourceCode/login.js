const $ = (value) => {
  return document.getElementById(value);
};



const validateLogin = () => {
  const userName = $("userName").value;
  const passWord = $("passWord").value;
  const Data = JSON.parse(localStorage.getItem("myData"));


  Data.forEach(obj =>{
    if (obj.name === userName && obj.pass === passWord) {
      showSuccessToast("Đăng nhập thành công");
      // document.getElementById("loginSuccess").innerHTML = `<span class='text-danger'>Xin chào ${obj.name}</span>`
      setTimeout(function() {window.open("../loginSuccess.html", "_self","location=yes")},2000)
      return true;
    } else showErrorToast("Tài khoản hoặc mật khẩu không chính xác");
  })

}

