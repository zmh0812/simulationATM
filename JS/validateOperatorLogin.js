function checkForm(){
    var adminUuser = validateUser();
    var adminpPassword = validatePasword();
    return adminUuser && adminpPassword;
}

function validateUser(){
    var user = document.getElementById("admin_id");
    var tips = document.getElementById("adminNameTips");

    if(user.value.length === 0){
        tips.innerHTML = "<font color='red'>管理员ID不能为空</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}

function validatePasword(){
    var password = document.getElementById("admin_password");
    var tips = document.getElementById("adminPasswordTips");

    if(password.value.length === 0){
        tips.innerHTML = "<font color='red'>密码不能为空</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}