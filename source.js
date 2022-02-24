function calc(sum, procents, months)
{
	if(procents != 0){
		let k = 1 + procents/1200;
		let x = Math.round((sum * (k**months)) / ((k**months-1)/(k-1)));
		return x
	}
	else
		return Math.round(sum/months);
}

function count(){
	let sum = document.getElementById("input1").value;
	let procents = document.getElementById("input2").value;
	let months = document.getElementById("input3").value;
	let isMonths = document.getElementById("toggle-months").checked;
	if(!isMonths)
		months *= 12;
	let debugField1 = document.getElementById("text1");
	let debugField2 = document.getElementById("text2");
	let debugField3 = document.getElementById("text3");

	if(sum == "" || months == ""){
		alert("Не все данные введены");
		return;
	}	
	if((sum <= 0 || months <= 0) || (procents != "" && (procents > 100 || procents < 0))){
		alert("Неверно введены данные");
		return;
	}

	if(procents != ""){
		let monthPayments = calc(sum, procents, months);
		let totalSum = monthPayments*months;
		let overPayment = totalSum - sum;

		debugField1.innerHTML = "Ежемесячная выплата: " + monthPayments + "₽";
		debugField2.innerHTML = "Общая выплата: " + totalSum + "₽";
		debugField3.innerHTML = "Переплата: " + overPayment + "₽";

		console.log(monthPayments);
		console.log(totalSum);
		console.log(overPayment);
	}
	else
	{
		debugField1.innerHTML = "";
		debugField2.innerHTML = "";
		debugField3.innerHTML = "";
	}

	let procentsList = [["Сбербанк", sberbankProcents(sum, months), "img/sberbank.png", 2560/402],
						["ВТБ", vtbProcents(sum, months), "img/vtb.png", 375/134],
						["Альфа-Банк", alphaProcents(sum, months), "img/alpha-bank.png", 2506/901],
						["Газпромбанк", gazpromProcents(sum, months), "img/gazprombank.png", 1437/331],
					    ["Райффайзен Банк", raiffProcents(sum, months), "img/raiff.png", 2560/684],
				        ["Совкомбанк", sovkomProcents(sum, months), "img/sovkombank.png", 1280/166],
					    ["Банк Открытие", otkritieProcents(sum, months), "img/otkritie.png", 1115/242],
					    ["Тинькофф Банк", tinkoffProcents(sum, months), "img/tinkoff.png", 1503/480],
					    ["Почта Банк", pochtaProcents(sum, months), "img/pochtabank.png", 1475/721]];
	procentsList = bubbleSort(procentsList);
	console.log(procentsList);

	let table = document.getElementById("table1");	
	let pretableText = document.getElementById("pretable-text");
	let firstLine = "<tr> <td>Банк</td> <td>Процентная ставка</td> <td>Ежемесячная выплата</td> <td>Общая выплата</td> <td>Переплата</td> </tr>";
	table.innerHTML = firstLine;
	let tableCount = 0;
	for (var i = 0; i < procentsList.length; i++) {
		name = procentsList[i][0];
		procents = procentsList[i][1];
		if(procents != null)
		{
			monthPayments = calc(sum, procents, months);
			totalSum = monthPayments*months;
			overPayment = totalSum - sum;	
			imgSource = procentsList[i][2];
			height = 40;
			width = height*procentsList[i][3];
			tableText = "<tr> <td><img width="+width+" height="+height+" src="+imgSource+"></td> <td>"+procents+"%</td> <td>"+monthPayments+"₽</td> <td>"+totalSum+"₽</td> <td>"+overPayment+"₽</td> </tr>"
			table.innerHTML += tableText;
			tableCount += 1;
		}
	}
	if(tableCount > 0){
		pretableText.innerHTML = "Предложения банков:";
		pretableText.hidden = false;
		table.hidden = false;
	}
	else{
		pretableText.innerHTML = "Нет предложений банков с введенной суммой кредита и/или сроком выплаты";
		pretableText.hidden = false;
		table.hidden = true;
	}
}

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
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
		if(5000 <= sum && sum < 100000)
			procents = 0;
		if(100000 <= sum && sum < 30000000)
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

