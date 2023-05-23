let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (isNaN(height) || height <= 0) {
        document.getElementById('h-error').innerHTML = 'Provide height!';
    } else {
        document.getElementById('h-error').innerHTML = '';
        height_status = true;
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById('w-error').innerHTML = 'Provide weight!';
    } else {
        document.getElementById('w-error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'you are Underweight 🤮: ' + bmi;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 'welldone Normal weight 🍻: ' + bmi;
        } else if (bmi >= 24.9 && bmi <= 29.9) {
            result.innerHTML = 'you are Overweight 🌭: ' + bmi;
        } else if (bmi >= 30) {
            result.innerHTML = 'you are Obese 🍔: ' + bmi;
        }
    }
});


