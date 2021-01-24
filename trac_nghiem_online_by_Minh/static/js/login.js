const togglePassword=document.getElementById("togglePassword");
const inputPassword=document.getElementById("password");
togglePassword.addEventListener("click",function()
{
    togglePassword.classList.toggle("fa-eye-slash");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
      } else {
        inputPassword.type = "password";
      }
   
});

function validateForm()
{
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
 
    
    if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
    }
    else if (password == '')
    {
        alert('Bạn chưa nhập mật khẩu !');
    }
    else{
        if(username=="kitweb2001@gmail.com"&&password=="kitwebkma2001")
        {
            window.location.href = "index.php";
        }
        else{
            alert('Tài khoản hoặc mật khẩu chưa đúng. Xin thử lại !');
        }
    }
 
    return false;
}