// cpf.js - Verifica e informa o usuário se o CPF fornecido é valido 

function cpfValido(cpf){

    if (cpf.length != 11 || cpf == "00000000000" || cpf == "99999999999"){
        return false
    }
    // Verificação do primeiro digito verificador
    let aCpf = cpf.split("").map(x=>+x)
    primeiro_digito = aCpf[9]
    let soma = 0
    for (var i = 10; i >=2; i--){
        soma += (i)*(aCpf[10-i])
    }
    resto = ((soma*10) % 11) % 10

    if (resto != primeiro_digito){
        return false
    }
    
    // Verificação do segundo digito verificador
    segundo_digito = aCpf[10]
    soma = 0
    for (var i = 11; i >=2; i--){
        soma += (i)*(aCpf[11-i])
    }
    resto = ((soma*10) % 11) % 10
    if (resto != segundo_digito){
        return false
    }
    return true
}


function ler_cpf(){
    let cpf = document.getElementById("cpf").value

    return cpf
}


function evento() {

    cpf = ler_cpf()
    if (!cpfValido(cpf)){9
        document.getElementById("mensagem").innerText = "CPF não existe"

        document.getElementById("mensagem").style.color = "red"
    }
    else{
        document.getElementById("mensagem").innerText ="seu CPF é válido"

        document.getElementById("mensagem").style.color = "green"
    }

}

let botao = document.getElementById("botao")

botao.addEventListener("click", evento)


