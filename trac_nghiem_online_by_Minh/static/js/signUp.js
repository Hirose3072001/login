function checkAccount(){
    var email = document.getElementById('EmailCreat').value;
    var password1 = document.getElementById('creatPassword1').value;
    var password2 = document.getElementById('creatPassword2').value;
    var lop = document.getElementById('Lop').value;
    if(email=='')
    {
        alert('Vui lòng nhập Email đăng ký !');
    }
    else if(lop=='')
    {
        alert('Vui lòng nhập lớp đăng ký !');
    }
    else if(password1=='')
    {
        alert('Vui lòng nhập mật khẩu !');
    }
    else if(password2=='')
    {
        alert('Vui lòng nhập lại mật khẩu !');
    }
    else 
    {
        if(email == "kitweb2001@gmail.com")
    {
        alert('Tài khoản đã tồn tại xin thử lại !');
    }
    else
    {
        if(password1 != password2)
        {
            alert('Nhập lại mật khẩu chưa đúng. Xin thử lại !');
        }
        else{
            alert('Yêu cầu tạo tài khoản của bạn đã được gửi đến Admin.');
        }
    }

    }
};


