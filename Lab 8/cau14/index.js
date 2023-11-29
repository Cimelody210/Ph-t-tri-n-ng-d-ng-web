
function saveLogin(event) {
    event.preventDefault();
    
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    
    // Lưu thông tin đăng nhập vào session
    sessionStorage.setItem("username", usernameInput.value);
    sessionStorage.setItem("password", passwordInput.value);
    
    // Chuyển hướng người dùng đến trang khác sau khi đăng nhập thành công
    window.location.href = "welcome.html";
  }
  
  