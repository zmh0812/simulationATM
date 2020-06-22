function checkForm(){
	var userName = validateUserName();
	var password = validatePassword();
	var phoneNum = validatePhoneNum();
	var idcard = validateIdCard();
	var address = validateAddress();

	return userName && password && phoneNum && idcard && address;
}

function validateUserName(){
	var username = document.getElementById('userName');
	var tips = document.getElementById('userNameTips');

	if(username.value.length === 0){
		tips.innerHTML = "<font color='red'>用户名不能为空</font>";
		return false;
	}
	else{
		tips.innerHTML = "";
		return true;
	}
}

function validatePassword(){
	var pwd1 = document.getElementById('pwd1');
	var pwd2 = document.getElementById('pwd2');
	var tips1 = document.getElementById('psdTips');
	var tips2 = document.getElementById('cPsdTips');

	if(pwd1.value.length === 0 && pwd2.value.length === 0){
		tips1.innerHTML = "<font color='red'>请输入密码</font>";
		document.getElementById('pwd1').focus();
		return false;
	}
	else if((pwd1.value.length !== 0 && pwd2.value.length === 0) || (pwd1.value) != (pwd2.value)){
		tips1.innerHTML = "";
		tips2.innerHTML = "<font color='red'>两次密码不一致</font>";
		return false;
	}
	else{
		tips1.innerHTML = "";
		tips2.innerHTML = "<font color='green'>密码一致</font>";
		return true;
	}
}

// function validatePassword(){
// 	var pwd1 = document.getElementById('pwd1');
// 	var tips = document.getElementById('psdTips');
	
// 	if(pwd1.value.length === 0){
// 		tips.innerHTML = "<font color='red'>密码不能为空</font>";
// 		return false;
// 	}
// 	else{
// 		tips.innerHTML = "";
// 		return true;
// 	}
// }

// function ConfirmPassword(){
// 	var pwd1 = document.getElementById('pwd1');
// 	var pwd2 = document.getElementById('pwd2');
// 	var tips = document.getElementById('cPsdTips');

// 	if((pwd1.value) != (pwd2.value) || pwd2.value.length === 0){
// 		tips.innerHTML = "<font color='red'>两次密码不一致</font>";
// 		return false;
// 	}
// 	else{
// 		tips.innerHTML = "<font color='green'>密码一致</font>";
// 		return true;
// 	}
// }

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

function validateIdCard(){
	var idcard = document.getElementById('idcard');
	var tips = document.getElementById('idCardTips');
	var pattern = /^\d{17}[\d|X]$|^\d{15}$/;

	if(idcard.value.length === 0){
		tips.innerHTML = "<font color='red'>请输入身份证</font>";
		return false;
	}

	if(!pattern.test(idcard.value)){
		tips.innerHTML = "<font color='red'>身份证格式错误</font>";
		return false;
	}
	tips.innerHTML = "";
	return true;
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