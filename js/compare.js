//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// procura no array se existe carClass retornando 1 se sim, -1 se não
// obter Posicao Carro
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

//definir Carro Para Comparar
function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {


        } else {

        }
    } else {
        throw "Você precisa definir uma classe Carro";
    }
}

//mostrar Comparacao
function ShowCompare() {
    if (carArr.length !== 2) {
        alert("Precisa marcar exatamente 2 carros para apresentar a comparação");
        return;

    } else {
        // atualizarTabelaComparaca
        UpdateCompareTable();
        document.getElementById("compare").style.display = "block";
    }


}

//esconder Comparacao
function HideCompare() {
    document.getElementById("compare").style.display = "none";
}


//atualizar Tabela Comparacao
function UpdateCompareTable() {

}
