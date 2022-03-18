
// mencari id validationForm dan ditampung pada variabel form
const form = document.querySelector("#validationForm");

// pencarian id ErrorMessages
let errorMessagesTag = document.getElementById("errorMessages")
// deklarasi validasi karakter password
let passValidation = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.(\W|_)).*$/
// deklarasi error messages
let usernameLengthError = document.createTextNode("Username tidak boleh lebih dari 7 karakter.")
let passwordCharacterError = document.createTextNode("Password harus terdiri dari huruf kapital, huruf kecil, angka dan karakter khusus.")
let passwordLengthError = document.createTextNode("Password tidak boleh kurang dari 10 karakter.")

// ketika button submit ditekan
form.addEventListener("submit", function (event) {
    // menghentikan form submission
    event.preventDefault();

    document.getElementById("errorAlert").style.display = "none"
    errorMessagesTag.innerHTML = ''

    // deklarasi username & password
    let username = form.elements["username"].value
    let password = form.elements["password"].value

    // deklarasi pengecekan error
    let usernameLengthCheck = false
    let passwordCharacterCheck = false
    let passwordLengthCheck = false

    // pengecekan panjang karakter username
    if (username.length > 7) {      // jika panjang username lebih dari 7
        document.getElementById("errorAlert").style.display = "block"
        // pembuatan tag <li> untuk text error
        const li = document.createElement("li");
        li.appendChild(usernameLengthError)
        errorMessagesTag.append(li)
    } else {    // jika panjang username kurang dari / samadengan 7
        usernameLengthCheck = true
    }

    // pengecekan karakter password
    if (passValidation.test(password)) {    // jika karakter sesuai dengan RegExp
        passwordCharacterCheck = true
    } else {    // jika karakter tidak sesuai dengan RexExp
        document.getElementById("errorAlert").style.display = "block"
        // pembuatan tag <li> untuk text error
        const li = document.createElement("li");
        li.appendChild(passwordCharacterError)
        errorMessagesTag.append(li)
    }

    // pengecekan panjang karakter password
    if (password.length < 10) {     // jika panjang password kurang dari 10
        document.getElementById("errorAlert").style.display = "block"
        // pembuatan tag <li> untuk text error
        const li = document.createElement("li");
        li.appendChild(passwordLengthError)
        errorMessagesTag.append(li)
    } else {    // jika panjang password lebih dari / samadengan 10
        passwordLengthCheck = true
    }

    // jika semua validasi bernilai true / sudah sesuai
    if (usernameLengthCheck && passwordCharacterCheck && passwordLengthCheck) {
        //menghilangkan alert error dan menampilkan alert success
        document.getElementById("errorAlert").style.display = "none"
        document.getElementById("successAlert").style.display = "block"

        // mengosongkan form
        this.username.value = ''
        this.password.value = ''

        document.getElementById("resultTable").style.display = "block"
        document.getElementById("cetakUsername").innerHTML = username ? username : '&nbsp';
        document.getElementById("cetakPassword").innerHTML = password ? password : '&nbsp';
    }
});

function closeErrorAlert() {
    document.getElementById("errorAlert").style.display = "none"
    errorMessagesTag.innerHTML = ''
}

function closeSuccessAlert() {
    document.getElementById("successAlert").style.display = "none"
}