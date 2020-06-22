function checkForm(){
	var userName = validateUserName();
	var phoneNum = validatePhoneNum();
	var address = validateAddress();

	return userName && phoneNum && address;
}

function validateUserName(){
    var username = document.getElementById('userName');
    var tips = document.getElementById('userNameTips');

    if(username.value === ""){
        tips.innerHTML = "<font color='red'>用户名不能为空</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}

function validatePhoneNum(){
    var phoneNum = document.getElementById('tele');
    var tips = document.getElementById('phoneNumTips');
    var pattern = /^1[34578]\d{9}$/;

    if(!pattern.test(phoneNum.value)){
        tips.innerHTML = "<font color='red'>手机号码不合规范</font>";
        return false;
    }
    else{
        tips.innerHTML = "";
        return true;
    }
}

function validateAddress(){
	var address = document.getElementById("address");
	var tips = document.getElementById('addressTips');

	if(address.value.length === 0){
		tips.innerHTML = "<font color='red'>请输入地址</font>";
		return false;
	}
	tips.innerHTML = "";
	return true;
}

