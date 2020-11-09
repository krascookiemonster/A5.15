const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleData(button) {
	// кажется, какой-то из этих способов сработает
	const var1 = $("input[name=var1]")[0].value;
	const var2 = $("input[name=var2]")[0].value;
	const var3 = $("input[name=var3]")[0].value
	const var4 = $("input[name=var4]")[0].value
	const var5 = $("input[name=var5]")[0].value
	const var6 = $("input[name=var6]")[0].value
	const speach = $("input[name=speach]")[0].value
	//const var1 = $("input[name=var1]").value()
	//const var1 = $("input[name=var1]")[0].default()

	// надо сделать так чтобы сообщения подменились на значения из формы
	button.data.param1 == 'fetch' ? text = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speech}"]}: text = {"text":["Жили-были "+var1+" да "+var2+"","Была у них "+var3+"","Снесла "+var4+' '+var5+", не простое - золотое","- "+var1+" бил, бил - не разбил","- "+var2+" била, била - не разбила",""+var5+" бежала, "+var6+" задела, "+var4+" упало и разбилось.",""+var1+" плачет, "+var2+" плачет, а "+var3+" кудахчет:",""+speach+""]};
	$("#result").text(text['text']);
}

function init() {
	$("#button-fetch").click({param1:'fetch'},handleData);
	$("#button-change").click({param1:'change'},handleData);
}

$(document).ready(init);
