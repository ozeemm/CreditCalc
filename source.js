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

	let monthPayments = calc(sum, procents, months);
	let totalSum = monthPayments*months;
	let overPayment = totalSum - sum;

	console.log(monthPayments);
	console.log(totalSum);
	console.log(overPayment);


	let debugField1 = document.getElementById("text1");
	debugField1.innerHTML = "Ежемесячная выплата: " + monthPayments;

	let debugField2 = document.getElementById("text2");
	debugField2.innerHTML = "Общая выплата: " + totalSum;

	let debugField3 = document.getElementById("text3");
	debugField3.innerHTML = "Переплата: " + overPayment;
}

function test(){
	console.log("Pressed!");
	console.log(document.getElementById("testtest"));
	console.log(document.getElementById("testtest").innerHTML);
	document.getElementById("testtest").innerHTML = "Hello, World!";
}