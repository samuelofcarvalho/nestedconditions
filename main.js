var user = null;
var password = null;

function accsess() {
    user = document.querySelector('input#user').value;
    password = document.querySelector('input#password').value;
    if (user === 'Admin') {
        if (password === '1234') {
            alert('Acesso total garantido');
        } else {alert('Acesso negado')}
    } else if (user === 'Samuel') {
        if (password === 'samuel1234') {
            alert('Acesso garantido para Samuel')
        } else {alert('Senha incorreta')}
    }

}

/*function accsess() {
user = document.querySelector('input#user').value;
password = document.querySelector('input#password').value;
    switch (user) {
        case 'Admin': 
            switch (password) {
                case '1234':
                alert('Acesso total garantido')
                break;
                default:
                    alert('Acesso negado para Admin. Senha incorreta.');
                    break;
            }
            break;

        case 'Samuel':
            switch (password) {
                case 'samuel1234':
                alert('Acesso garantido para Samuel')
                break;
                default:
                    alert('Acesso negado para Samuel. Senha incorreta');
                    break;
            }
            break;

    }
}*/