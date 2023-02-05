import datas from "./productBin.json" assert { type: "json" };

//console.log(datas);

let sumQuantity = 0;

//function to calculate product quantity
function sumAllQuantity(){
    for (let i = 0; i < datas.data.length; i++) {
        sumQuantity += datas.data[i].quantity
    }
    console.log(`Jumlah quantity dari semua storageId untuk productCode FBR00040101 (FloBrand-DressBSPink) adalah ${sumQuantity}`);
}

//execute function
sumAllQuantity()