
    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
            return;
        }

        const bmi = weight / ((height / 100) * (height / 100));
        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    }
