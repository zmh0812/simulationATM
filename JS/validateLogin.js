function checkForm(){
    var user = validateUser();
    var password = validatePasword();
    return user && password;
}

function validateUser(){
    var user = document.getElementById("user");
    var tips = document.getElementById("userTips");

    if(user.value.length === 0){
        tips.innerHTML = "<font color='red'>用户名不能为空</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}

function validatePasword(){
    var password = document.getElementById("user_password");
    var tips = document.getElementById("passwordTips");

    if(password.value.length === 0){
        tips.innerHTML = "<font color='red'>密码不能为空</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}

$(document).ready(function(){
    $("#user_mode").click(function(){
        $("#user_view").show();
    });
    
    $("#admin_mode").click(function(){
        $("#user_view").hide();
    });
});