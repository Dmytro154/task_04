function mult () {
	// Отримуємо перше число
	num1 = document.getElementById("first_num").value;
	// Отримуємо друге число
	num2 = document.getElementById("second_num").value;
	// Поміщаємо результат у полі з ID«result»
	document.getElementById("result").innerHTML = "Результат: " + (num1 * num2);
};