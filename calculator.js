function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function substraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function division(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        throw new Error("Il est impossible de diviser par 0.")
    }
    return firstNumber / secondNumber
}

do{
    var choice = Number(prompt("Quelle opération souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n"))
} while(choice != 1 && choice != 2 && choice != 3 && choice != 4)

do{
    var firstNumber = Number(prompt("Entrez un premier nombre."))
    var secondNumber = Number(prompt("Entrez un second nombre."))
} while(isNaN(firstNumber) || isNaN(secondNumber))

try {
    switch (choice) {
        case 1:
            var result = addition(firstNumber, secondNumber)
            break;
        case 2:
            var result = substraction(firstNumber, secondNumber)
            break;
        case 3:
            var result = multiplication(firstNumber, secondNumber)
            break;
        case 4:
            var result = division(firstNumber, secondNumber)
            break;
        default:
            throw new Error("Une erreur est survenue.")
    }
    alert("Résultat : " + result + ".")
} catch (error) {
    alert(error)
}