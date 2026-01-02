const listNumber = [];

function handleAddNumber() {

    const a = document.getElementById("number_1").value * 1;

    listNumber.push(a);

    const result = `Danh sach so: ${listNumber.join(", ")}`;

    const divShowArray = document.getElementById("divShowArray");
    divShowArray.innerHTML = result;
}

// Tinh tong cac so duong
function handleSum() {
    let sum = 0;
    for (i = 0; i < listNumber.length; i++) {
        const number = listNumber[i];
        if (number > 0) {
            sum += number;
        }
    }
    const result = `Tong cac so duong: ${sum}`;

    const divShowTotal = document.getElementById("divShowTotal");
    divShowTotal.innerHTML = result;

}
// dem so duong
function countPositiveNumbers() {
    let count = 0;
    for (i = 0; i < listNumber.length; i++) {
        const number = listNumber[i];
        if (number > 0) {
            count += 1;
        }
    }
    return count;
}
// tim so nho nhat
function findSmallestNumber() {
    if (listNumber.length === 0) {
        return null; // Trả về null nếu mảng rỗng
    }
    let smallest = listNumber[0];
    for (let i = 1; i < listNumber.length; i++) {
        if (listNumber[i] < smallest) {
            smallest = listNumber[i];
        }
    }
    return smallest;
}
// tim so duong nho nhat
function findSmallestPositiveNumber() {
    const positiveNumbers = listNumber.filter(num => num > 0);
    if (positiveNumbers.length === 0) {
        return null; // Trả về null nếu không có số dương
    }
    let smallestPositive = positiveNumbers[0];
    for (let i = 1; i < positiveNumbers.length; i++) {
        if (positiveNumbers[i] < smallestPositive) {
            smallestPositive = positiveNumbers[i];
        }
    }
    return smallestPositive;
}
// tim so chan cuoi cung
function findLastEvenNumber() {
    for (let i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 === 0) {
            return listNumber[i];
        }
    }
    return null; // Trả về null nếu không có số chẵn
}
// doi cho hai vi tri
function swapElements(index1, index2) {
    if (index1 < 0 || index1 >= listNumber.length || index2 < 0 || index2 >= listNumber.length) {
        return; // Kiểm tra chỉ số hợp lệ
    }
    const temp = listNumber[index1];
    listNumber[index1] = listNumber[index2];
    listNumber[index2] = temp;
    document.getElementById("divShowSwapNumber").innerHTML = listNumber.join(", ");
}
// sap xep mang tang dan
const sortArrayAscending = document.getElementById("sortArrayAscending");
sortArrayAscending.onclick = function(){
    for (let i = 0; i<listNumber.length;i++){
        for(let j = i +1; j<listNumber.length;j++){
            if(listNumber[i] > listNumber[j]){
                // hoan doi gia tri trong mang
                //muon tam 1 gia tri trống
                let temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    document.getElementById("divShowSortArray").innerHTML = listNumber.join(", ");
}

// tim so nguyen to dau tien
function findFirstPrimeNumber() {
    for (let i = 0; i < listNumber.length; i++) {
        if (isPrime(listNumber[i])) {
            return listNumber[i];
        }
    }
    return null; // Trả về null nếu không có số nguyên tố
}   
// dem so nguyen
function countIntegerNumbers() {
    let count = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (Number.isInteger(listNumber[i])) {
            count++;
        }
    }
    return count;
}
// so sanh so am va so duong
function comparePositiveAndNegative() {
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            positiveCount++;
        } else if (listNumber[i] < 0) {
            negativeCount++;
        }
    }
    if (positiveCount > negativeCount) {
        return "Số dương nhiều hơn số âm";
    } else if (negativeCount > positiveCount) {
        return "Số âm nhiều hơn số dương";
    } else {
        return "Số dương bằng số âm";
    }
}
