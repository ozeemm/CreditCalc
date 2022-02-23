function calc(sum, procents, months)
{
	let k = 1 + procents/1200 // коэффициент начисления процентов
	let x = Math.round((sum * (k**months)) / ((k**months-1)/(k-1))); // Ежемесячная выплата по формуле
	return x
}

function count(){
	let sum = document.getElementById("input1").value;
	let procents = document.getElementById("input2").value;
	let months = document.getElementById("input3").value;
	let isMonths = document.getElementById("toggle-months").checked;
	if(!isMonths)
		months *= 12;

	if(sum == "" || months == ""){
		alert("Не все данные введены");
		return;
	}	
	if(sum <= 0 || procents <= 0 || procents > 100 || months <= 0){
		alert("Неверно введены данные");
		return;
	}

	if(procents != ""){
		let monthPayments = calc(sum, procents, months);
		let totalSum = monthPayments*months;
		let overPayment = totalSum - sum;

		let debugField1 = document.getElementById("text1");
		debugField1.innerHTML = "Ежемесячная выплата: " + monthPayments + "₽";

		let debugField2 = document.getElementById("text2");
		debugField2.innerHTML = "Общая выплата: " + totalSum + "₽";

		let debugField3 = document.getElementById("text3");
		debugField3.innerHTML = "Переплата: " + overPayment + "₽";

		console.log(monthPayments);
		console.log(totalSum);
		console.log(overPayment);
	}

	let debugField4 = document.getElementById("text4");
	procents = sberbankProcents(sum, months);
	let monthPayments = calc(sum, procents, months);
	let totalSum = monthPayments*months;
	let overPayment = totalSum - sum;
	debugField4.innerHTML += "Сбербанк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = vtbProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "ВТБ: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = alphaProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Альфа-Банк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = gazpromProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Газпромбанк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = raiffProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Райффайзен Банк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = sovkomProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Совкомбанк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = otkritieProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Банк Открытие: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = tinkoffProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Тинькофф Банк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";

	procents = pochtaProcents(sum, months);
	monthPayments = calc(sum, procents, months);
	totalSum = monthPayments*months;
	overPayment = totalSum - sum;
	debugField4.innerHTML += "Почта Банк: " + procents + "% " + monthPayments + "₽ " + totalSum + "₽ " + overPayment + "₽ </br>";		
}

function sberbankProcents(sum, months){
	let procents = 0;
	if(30000 <= sum && sum < 300000)
		procents = 14.9;
	if(300000 <= sum && sum < 1000000)
		if(3 <= months && months < 12)
			procents = 12.9;
		else if(12 <= months && months < 60)
			procents = 13.9;
	if(1000000 <= sum && sum <= 3000000)
		if(3 <= months && months <= 12)
			procents = 12.9;
		else if(12 < months && months < 60)
			procents = 6.9;	

	if(procents == 0)
		return null;
	else
		return procents;	
}

function vtbProcents(sum, months){
	let procents = 0;
	if(6 <= months && months <= 60)
		if(30000 <= sum && sum < 1000000)
			procents = 7.2;
		else if(1000000 <= sum && sum <= 5000000)
			procents = 5.9;

	if(procents == 0)
		return null;
	else
		return procents;	
}

function alphaProcents(sum, months){
	let procents = 0;
	if(12 <= months && months <= 60){
		if(50000 <= sum && sum < 300000)
			procents = 7.5;
		if(300000 <= sum && sum < 1350000)
			procents = 7;
		if(1350000 <= sum && sum < 7500000)
			procents = 5.5;
	}
	if(procents == 0)
		return null;
	else
		return procents;
}

function gazpromProcents(sum, months){
	let procents = 0;
	if(13 <= months && months <= 84){
		if(100000 <= sum && sum < 300000)
			procents = 10.2;
		if(300000 <= sum && sum < 5000000)
			procents = 8.2;
		if(sum == 5000000)
			procents = 4.9;
	}
	if(procents == 0)
		return null;
	else
		return procents;
}

function raiffProcents(sum, months){
	let procents = 0;
	if(12 <= months && months <= 84){
		if(90000 <= sum && sum < 1000000)
			procents = 8.49;
		if(1000000 <= sum && sum < 3000000)
			procents = 7.99;
	}
	if(procents == 0)
		return null;
	else
		return procents;
}

function sovkomProcents(sum, months){
	let procents = 0;
	if(6 <= months && months <= 60){
		if(sum < 5000 || sum > 30000000)
			return null
		if(5000 <= sum < 100000)
			procents = 0;
		if(100000 <= sum < 30000000)
			procents = 6.9;
		return procents;
	}
	else
		return null;
}

function otkritieProcents(sum, months){
	let procents = 0;
	if(24 <= months && months <= 60 && sum >= 50000 && sum <= 5000000)
		return 9.9
	else
		return null
}

function tinkoffProcents(sum, months){
	let procents = 0;
	if(12 <= months && months <= 60 && sum >= 50000 && sum <= 15000000)
		return 8.9
	else
		return null
}

function pochtaProcents(sum, months){
	let procents = 0;
	if(12 <= months && months <= 60){
		if(20000 <= sum && sum < 200000)
			procents = 10.9;
		if(200000 <= sum && sum < 500000)
			procents = 9.9;
		if(500000 <= sum && sum < 6000000)
			procents = 8.9;
	}
	if(procents == 0)
		return null;
	else
		return procents;
}

