function validatePassword(){
	var pwd1 = document.getElementById('pwd1');
	var pwd2 = document.getElementById('pwd2');
	var tips = document.getElementById('psdTips');
	var tips2 = document.getElementById('cPsdTips');

	if(pwd1.value.length === 0 && pwd2.value.length === 0){
		tips.innerHTML = "<font color='red'>请输入密码</font>";
		document.getElementById('pwd1').focus();
		return false;
	}
	else if((pwd1.value.length !== 0 && pwd2.value.length === 0) || (pwd1.value) != (pwd2.value)){
		tips.innerHTML = "";
		tips2.innerHTML = "<font color='red'>两次密码不一致</font>";
		return false;
	}
	else{
		tips.innerHTML = "";
		tips2.innerHTML = "<font color='green'>密码一致</font>";
		return true;
	}
}
