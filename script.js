// FUNCTION WITHOUT PARAMETERS

/*function abracadabra() {
    let firstname = prompt("Quel est votre prénom ?")
    let lastname = prompt("Quel est votre nom ?")
    let age = prompt("Quel est votre âge ?")

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
     + firstname 
     + " ! Euh... Je veux dire... Monsieur le grand magicien " 
     + lastname 
     + " ! Cela fait déjà " 
     + age 
     + " ans que vous faites rayonner notre contrée !")
}

abracadabra();*/



// FUNCTION WITH PARAMETERS

/*function IMC(weight, height){
    let heightMeter = height / 100;
    let heightCalculator = Math.pow(heightMeter, 2);
    let result = weight / heightCalculator;

    return result;
}

let weight = prompt("Combien pesez-vous ? (en kilos)")
let height = prompt("Combien mesurez-vous ? (en centimètres)")

alert(IMC(weight, height));*/



// SWITCH CONDITION

/*let vegetable = "chocolate"

switch(vegetable){
    case "carrot": 
    case "potatoe":
        console.log("C'est bien une carotte.")
        break

    case "banana":
        console.log("C'est bien un fruit.")
        break

    default:
        console.log("Ni l'un ni l'autre.")
}*/



// || AND && CONDITIONS

/*let startRailway = "Bordeaux"
let arrivalRailway = ""
let conductor = ""

if((startRailway != "" || arrivalRailway != "") && conductor != ""){
    console.log("Le train va démarrer.")
} else {
    console.log("Le train ne peut pas partir.")
}*/



// TERNAIR CONDITION

/*let x = 5

X > 3 ? console.log("x est supérieur à 3.") : console.log("x est inférieur à 3.")*/
// if(x > 3){
//     console.log("x est supérieur à 3.")
// } else {
//     console.log("x est inférieur à 3.")
// }

/*let startRailway = "Bordeaux"
let arrivalRailway = prompt("Où souhaitez-vous aller ?") || "Angoulême"
let conductor = "Pyxia"

if((startRailway != "" || arrivalRailway != "") && conductor != ""){
    alert("Le train va démarrer à destination de " + arrivalRailway + ".")
} else {
    alert("Le train ne peut pas partir.")
}*/



// WHILE 

/*let i = 1

while (i < 5) {
    console.log("Ligne : " + i)
    i++
}*/



// DO... WHILE

/*do{
    var firstname = prompt("Quel est votre prénom ?")
} while (firstname == "" || firstname == null)

alert("Bonjour " + firstname + ".")*/



// FOR

/*for (let i = 1; i < 5; i++) {
    console.log("Ligne : " + i)   
}*/



// BREAK AND CONTINUE

/*let i = 0

// while (i < 5){
//     if (i == 3) {
//         break
//     }

//     console.log("Ligne : " + i)
//     i++
// }

while (i < 5){
    if (i == 3) {
        i++
        continue
    }

    console.log("Ligne : " + i)
    i++
}*/



// EXCEPTIONS (if error or not)

/*try {
    let loot = prompt("Choissisez votre récompense de quête : Epée, arc ou bâton !")
    var damage

    switch (loot) {
        case "Epée":
            damage = 15
            break
        case "Arc":
            damage = 12
            break
        case "Bâton":
            damage = 8
            break
        default:
            throw new Error("Cette arme n'est pas disponible.")
    }

    alert("Vous avez choisi votre arme : " + loot + " qui fait " + damage + " de dégâts.")
} catch (error) {
    alert(error)
} finally {
    alert("Le chef du village vous remercie !")
}*/