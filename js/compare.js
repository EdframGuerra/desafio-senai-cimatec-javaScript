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

function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            
            if (carArr.length < 2 && GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);

            } else {
                
                el.checked = false;
                alert("Você só pode comparar 2 carros por vez.");
            }
        } else {
            
            const pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "Você precisa definir uma classe Carro";
    }
}


function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar exatamente 2 carros para apresentar a comparação");
        return;

    } else {

        UpdateCompareTable();
        document.getElementById("compare").style.display = "block";
    }
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {

    const fields = [

        { id: "compare_modelo_0", value: carArr[0].nome },
        { id: "compare_modelo_1", value: carArr[1].nome },
        { id: "compare_alturacacamba_0", value: carArr[0].alturaCacamba },
        { id: "compare_alturacacamba_1", value: carArr[1].alturaCacamba },
        { id: "compare_alturaveiculo_0", value: carArr[0].alturaVeiculo },
        { id: "compare_alturaveiculo_1", value: carArr[1].alturaVeiculo },
        { id: "compare_alturasolo_0", value: carArr[0].alturaSolo },
        { id: "compare_alturasolo_1", value: carArr[1].alturaSolo },
        { id: "compare_capacidadecarga_0", value: carArr[0].capacidadeCarga },
        { id: "compare_capacidadecarga_1", value: carArr[1].capacidadeCarga },
        { id: "compare_motor_0", value: carArr[0].motor },
        { id: "compare_motor_1", value: carArr[1].motor },
        { id: "compare_potencia_0", value: carArr[0].potencia },
        { id: "compare_potencia_1", value: carArr[1].potencia },
        { id: "compare_volumecacamba_0", value: carArr[0].volumeCacamba },
        { id: "compare_volumecacamba_1", value: carArr[1].volumeCacamba },
        { id: "compare_roda_0", value: carArr[0].roda },
        { id: "compare_roda_1", value: carArr[1].roda },
        { id: "compare_preco_0", value: carArr[0].preco },
        { id: "compare_preco_1", value: carArr[1].preco }
    ];

      fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el) el.textContent = field.value;
    });

       const img1 = document.getElementById("compare_image_0");
    const img2 = document.getElementById("compare_image_1");
    if (img1) img1.src = carArr[0].image;
    if (img2) img2.src = carArr[1].image;
}
