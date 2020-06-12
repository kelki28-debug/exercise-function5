let celcius = prompt('Celcius=')

const getNumber = (fahrenheit) => {
    return fahrenheit -32;
}

const getCelcius = (fahrenheit) => {
    return document.write(getNumber(fahrenheit) * 5/9 + ' celcius')
}

getCelcius(celcius)