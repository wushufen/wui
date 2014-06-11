/*
by wushufen
wusfun@foxmail.com
2014.06.11
2014.01.05

cookie('name');                   //get
cookie('name', 'value');          //set, add
cookie('name', null);             //delete
cookie(null);                     //delete all
cookie();                         //get all {}
cookie()['name']                  //get
cookie('name', 'value', {expires: ms, domain: '', path: '/', secure: true});
*/
function cookie(name, value, options) {
	function trim(str){return (''+str).replace(/^\s+|\s+$/g,'')}

	/*delete: cookie(name, null)*/
	if (value===null) {
		options.expires = -1;
	}

	/*delete all: cookie(null)*/
	if (name===null) {
		for(i in cookie()){
			cookie(i,null);
		}
	}

	/*set, add: cookie(name, value, {})*/
	if (value!==undefined) {

		if (options.expires) {
			var date = new Date();
			date.setTime(date.getTime() + options.expires);
		}

		document.cookie=
			trim(name)+'='+escape(trim(value))//转十六进制
			+ options.expires? ';expires='+ date.toUTCString():''
			+ options.path   ? ';path=' + options.path:''
			+ options.domain ? ';domain=' + options.domain:''
			+ options.secure ? ';secure':'';
	}

	/*get: cookie('name'), cookie(), cookie().name, cookie()['name']*/
	var cookies={};
	var nvs=document.cookie?document.cookie.split(';'):[];//name=value数组
	for (i in nvs) {
		var nv = nvs[i].split('=');
		var n = trim(nv[0]);
		var v = unescape(nv[1]);//十六进制反转
		cookies[n] = v;
	}

	/*log*/
	console.log(document.cookie, cookies);

	/*return: value=cookie('name'), obj=cookies()*/
	return name===undefined? cookies: cookies[name];
}