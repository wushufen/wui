/*
by wushufen
wusfun@foxmail.com
2014.01.05

cookie('name');                   //get
cookie('name', 'value');          //set, add
cookie('name', null);             //delete
cookie(null);                     //delete all
cookie();                         //get all {}
cookie()['name']                  //get
cookie('name', 'value', {expires:1000*60*20});   //期限毫秒
*/
function cookie(name, value, options) {
	function trim(str){
		return (''+str).replace(/^\s+|\s+$/g,'');
	}

	/*写, cookie(name, value, {})*/
	if (value!==undefined&&value!==null) {
		var cookieStr = trim(name)+'='+escape(trim(value));//值转十六进制
		//参数
		if (options instanceof Object){
			//期限毫秒
			if (options['expires']!==undefined){
				var date = new Date();
				date.setTime(date.getTime()+options['expires']);
				cookieStr += ';expires='+date.toGMTString();
			}
		}
		document.cookie= cookieStr;
	}

	/*删, cookie(name, null)*/
	if (value===null) {
		document.cookie= name+'=;expires='+new Date().toGMTString();
	}

	/*递归删除所有, cookie(null)*/
	if (name===null) {
		for(i in cookie()){
			cookie(i,null);
		}
	}

	/*读, 保存为键值对*/
	var cookies={};
	var arrCookie=document.cookie?document.cookie.split(';'):[];//name=value数组
	for (i in arrCookie) {
		var cookieNameValue = arrCookie[i].split('=');
		var cookieName = trim(cookieNameValue[0]);
		var cookieValue = unescape(cookieNameValue[1]);//值十六进制反转
		cookies[cookieName] = cookieValue;
	}

	/*调试*/
	console.log('document.cookie: ', document.cookie);
	console.log('cookies: ', cookies);

	/*返回, 所有: cookie(), 指定: cookies(name)*/
	return name===undefined?cookies:cookies[name];
}