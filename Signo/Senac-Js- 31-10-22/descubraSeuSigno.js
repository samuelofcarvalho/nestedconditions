
let dia = null;
let mes = null;
let dtNascimento = null;
let resultado = window.document.getElementById("signo");


function descobrirSigno() {
    /*let signo = 'Leão';*/
    dtNascimento = window.document.getElementById("nascimento").valueAsDate;
    dia = dtNascimento.getUTCDate();
    mes = dtNascimento.getUTCMonth() + 1;


    switch (mes) {

        case 1:
            if (dia >= 1 && dia <= 20) {
                resultado.innerHTML = `<br>Seu signo e Capricornio!`;
                console.log("Capricornio");

            } else if (dia >= 21 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Aquario!`;
                console.log("Aquario");
            }
            break;

        case 2:
            if (dia >= 1 && dia <= 19) {
                resultado.innerHTML = `<br>Seu signo e Aquario!`;
                console.log("Aquario");
            } else if (dia >= 20 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Peixes!`;
                console.log("Peixes");
            }
            break;

        case 3:
            if (dia >= 1 && dia <= 20) {
                resultado.innerHTML = `<br>Seu signo e Peixes!`;
                console.log("Peixes");
            } else if (dia >= 21 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Aries!`;
                console.log("Aries");
            }
            break;

        case 4:
            if (dia >= 1 && dia <= 20) {
                resultado.innerHTML = `<br>Seu signo e Aries!`;
                console.log("Aries");
            } else if (dia >= 21 && dia <= 30) {
                resultado.innerHTML = `<br>Seu signo e Touro!`;
                console.log("Touro");
            }
            break;

        case 5:
            if (dia >= 1 && dia <= 21) {
                resultado.innerHTML = `<br>Seu signo e Touro!`;
                console.log("Touro");
            } else if (dia >= 22 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Gemeos!`;
                console.log("Gemeos");
            }
            break;

        case 6:
            if (dia >= 1 && dia <= 21) {
                resultado.innerHTML = `<br>Seu signo e Gemeos!`;
                console.log("Gemeos");
            } else if (dia >= 22 && dia <= 30) {
                resultado.innerHTML = `Seu signo e Cancer!`;
                console.log("Cancer");
            }
            break;

        case 7:
            if (dia >= 1 && dia <= 22) {
                resultado.innerHTML = `<br>Seu signo e Cancer!`;
                console.log("Cancer");
            } else if (dia >= 23 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Leao!`;
                console.log("Leao");
            }
            break;

        case 8:
            if (dia >= 1 && dia <= 23) {
                resultado.innerHTML = `<br>Seu signo e Leao!`;
                console.log("Leao");
            } else if (dia >= 24 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Virgem!`;
                console.log("Virgem");
            }
            break;

        case 9:
            if (dia >= 1 && dia <= 23) {
                resultado.innerHTML = `<br>Seu signo e Virgem!`;
                console.log("Virgem");
            } else if (dia >= 24 && dia <= 30) {
                resultado.innerHTML = `<br>Seu signo e Libra!`;
                console.log("Libra");
            }
            break;

        case 10:
            if (dia >= 1 && dia <= 23) {
                resultado.innerHTML = `<br>Seu signo e Libra!`;
                console.log("Libra");
            } else if (dia >= 24 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Escorpiao!`;
                console.log("Escorpiao");
            }
            break;

        case 11:
            if (dia >= 1 && dia <= 22) {
                resultado.innerHTML = `<br>Seu signo e Escorpiao!`;
                console.log("Escorpiao");
            } else if (dia >= 23 && dia <= 30) {
                resultado.innerHTML = `<br>Seu signo e Sagitario!`;
                console.log("Sagitario");
            }
            break;

        case 12:
            if (dia >= 1 && dia <= 21) {
                resultado.innerHTML = `<br>Seu signo e Sagitario!`;
                console.log("Sagitario");
            } else if (dia >= 22 && dia <= 31) {
                resultado.innerHTML = `<br>Seu signo e Capricornio!`;
                console.log("Capricornio");
            }
            break;



        default:
            resultado.innerHTML = `<br><br>Signo não registrado`;
            console.log("<br>Signo não registrado");
            break;
    }

}