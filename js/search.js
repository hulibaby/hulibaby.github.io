var search = document.getElementById("search");
var formbox = document.getElementById('from_box');
var forms = formbox.getElementsByTagName("form");
var ul =
		search.getElementsByTagName("ul")[0];
var li =
		ul.getElementsByTagName("li");
var length =
		li.length;
li[0].onclick = function() {
	for (var i = 1; i < length; i++) {
		li[i].style.display =
			"block";
	}
}
	var n = 0; //第一个显示表单的位置
for (var i = 1; i < length; i++) {
	li[i].onclick = function(a) {
		return function() {
			//交换显示的html内容
			var temp = li[0].innerHTML;
			li[0].innerHTML = this.innerHTML;
			this.innerHTML = temp;
			for (var j = 1; j < length; j++) {
				li[j].style.display =
					"none";
			}
			//交换表单的显示
			//                      alert(li[0].innerHTML.substring(37,7));
			//                      alert(li[0].innerHTML.indexOf('baidu'));
			hidden_from(); //隐藏表单
			if (li[0].innerHTML.indexOf('baidu') > 0) {
				document.getElementById('from_baidu').style.display = 'block';
			} else if (li[0].innerHTML.indexOf('google') > 0) {
				document.getElementById('from_google').style.display = 'block';
			}
			//                      alert(this.innerHTML);
			//                      forms[n].style.display = "none";
			//                      forms[a].style.display = "block";
			//                      n = a;
		}
	}(i);
	li[i].onmouseover = function() {
		this.style.background =
			"#fff";
	}
		li[i].onmouseout =
			function() {
				this.style.background = "inherit";
				this.style.display = "none";
			}
}
//隐藏搜索框表单的函数
function hidden_from() {
	for (var j = 0; j < forms.length; j++) {
		forms[j].style.display = "none";
	}
}
