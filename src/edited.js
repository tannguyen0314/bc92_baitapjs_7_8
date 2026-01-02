const listNumber = [];

// Hàm hỗ trợ hiển thị kết quả
function showResult(id, text) {
    document.getElementById(id).innerHTML = text;
}

function handleAddNumber() {
    const a = document.getElementById("number_1").value * 1;
    listNumber.push(a);
    showResult("divShowArray", `Danh sách số: [${listNumber.join(", ")}]`);
}

// 1. Tính tổng số dương
function handleSum() {
    let sum = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) sum += listNumber[i];
    }
    showResult("divShowTotal", `Tổng các số dương: ${sum}`);
}

// 2. Đếm số dương
function countPositiveNumbers() {
    let count = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) count++;
    }
    showResult("divShowPositiveNumber", `Số lượng số dương: ${count}`);
}

// 3. Tìm số nhỏ nhất
function findSmallestNumber() {
    if (listNumber.length === 0) return showResult("divShowSmallestNumber", "Mảng rỗng");
    let smallest = Math.min(...listNumber);
    showResult("divShowSmallestNumber", `Số nhỏ nhất: ${smallest}`);
}

// 4. Tìm số dương nhỏ nhất
function findSmallestPositiveNumber() {
    const positiveNumbers = listNumber.filter(num => num > 0);
    if (positiveNumbers.length === 0) return showResult("divShowSmallestPositiveNumber", "Không có số dương");
    let smallestPositive = Math.min(...positiveNumbers);
    showResult("divShowSmallestPositiveNumber", `Số dương nhỏ nhất: ${smallestPositive}`);
}

// 5. Tìm số chẵn cuối cùng
function findLastEvenNumber() {
    let lastEven = -1; 
    for (let i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 === 0) {
            lastEven = listNumber[i];
            break;
        }
    }
    showResult("divShowLastEvenNumber", `Số chẵn cuối cùng: ${lastEven}`);
}

// 6. Đổi chỗ 
function swapElements() {
    // 1. Lấy giá trị vị trí từ 2 ô input mới
    const index1 = document.getElementById("index1").value * 1;
    const index2 = document.getElementById("index2").value * 1;

    // 2. Kiểm tra tính hợp lệ
    // - Mảng phải có phần tử
    // - Vị trí nhập vào không được âm và phải nhỏ hơn độ dài mảng
    if (listNumber.length < 2) {
        alert("Mảng cần ít nhất 2 số để đổi chỗ!");
        return;
    }
    
    if (index1 < 0 || index1 >= listNumber.length || index2 < 0 || index2 >= listNumber.length) {
        alert("Vị trí không hợp lệ! Vui lòng kiểm tra lại (Vị trí bắt đầu từ 0).");
        return;
    }

    // 3. Tiến hành đổi chỗ (Thuật toán hoán vị dùng biến tạm)
    let temp = listNumber[index1];
    listNumber[index1] = listNumber[index2];
    listNumber[index2] = temp;

    // 4. Hiển thị lại mảng mới lên màn hình
    // Cập nhật cả ở phần danh sách tổng và phần kết quả đổi chỗ
    showResult("divShowArray", `Danh sách số sau khi đổi: [${listNumber.join(", ")}]`);
    showResult("divShowSwapNumber", `Đã đổi chỗ vị trí ${index1} và ${index2} thành công!`);
}

// 7. Sắp xếp tăng dần
function sortArrayAscending() {
    listNumber.sort((a, b) => a - b);
    showResult("divShowSortArray", `Mảng tăng dần: ${listNumber.join(", ")}`);
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findFirstPrimeNumber() {
    let firstPrime = -1;
    for (let n of listNumber) {
        if (isPrime(n)) {
            firstPrime = n;
            break;
        }
    }
    showResult("divShowFirstPrimeNumber", `Số nguyên tố đầu tiên: ${firstPrime}`);
}

// 9. Đếm số nguyên
function countIntegerNumbers() {
    let count = listNumber.filter(num => Number.isInteger(num)).length;
    showResult("divShowIntegerNumber", `Số lượng số nguyên: ${count}`);
}

// 10. So sánh âm và dương
function comparePositiveAndNegative() {
    let pos = listNumber.filter(n => n > 0).length;
    let neg = listNumber.filter(n => n < 0).length;
    let msg = pos > neg ? "Dương > Âm" : (pos < neg ? "Âm > Dương" : "Dương = Âm");
    showResult("divShowPositiveAndNegative", msg);
}