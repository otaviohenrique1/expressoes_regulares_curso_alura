export default function ehUmNome(campo) {
    const nome = campo.value
    const patternNome = 
    console.log(patternNome);

    if (!patternNome) {

        campo.setCustomValidity('Não é um nome válido');
        console.log(`"${nome}" não é um nome válido`)

    }

    return nome
}