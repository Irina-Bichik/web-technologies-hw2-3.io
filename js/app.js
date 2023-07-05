function app() {
    let name = document.getElementById("username").value
    document.getElementById("result").innerText = "Приветствуем Вас, " + name + "!" ;
    document.getElementById("username").value = '';
    console.log("Приветствуем Вас, " + name + "!" )
}

function chat() {
    let text = document.getElementById("massage").value
    document.getElementById("result1").innerHTML = massage;
    document.getElementById("massage").value = '';
    console.log(massage)
}




// var name = prompt ("Как вас зовут?")
//     alert ("Привет " + name)

// let age = prompt ("Сколько вам лет?")
// age = parseInt(age)
// console.log(age)

// let str = 'Привет, мир';
// console.log(str);