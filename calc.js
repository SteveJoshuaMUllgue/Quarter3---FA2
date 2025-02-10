function calculate(operator) 
        {
            var num1 = document.getElementById("num1").value.trim();
            var num2 = document.getElementById("num2").value.trim();
            
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            var resultText = "";
            
            if (operator === '+') {
                resultText = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
            } else if (operator === '-') {
                resultText = `The difference of ${num1} and ${num2} is ${num1 - num2}.`;
            } else if (operator === '*') {
                resultText = `The product of ${num1} and ${num2} is ${num1 * num2}.`;
            } else if (operator === '/') {
                resultText = num2 !== 0 ? `The quotient of ${num1} and ${num2} is ${num1 / num2}.` : "Cannot divide by zero.";
            } else if (operator === '%') {
                resultText = num2 !== 0 ? `The remainder of ${num1} divided by ${num2} is ${num1 % num2}.` : "Cannot find remainder with zero.";
            }
            
            document.getElementById("result").innerHTML = resultText;
        }