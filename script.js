function sendWA() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let message = document.getElementById('message');
    let mobileNumber = 6285157114685;    //Enter your mobile number here

    if (name.value.trim() == "") {
        name.style.background = "lightpink";
        name.style.border = "4px solid red";
        alert('Please Enter your Name');
        return false;
    }

    let url = `https://wa.me/${mobileNumber}?text=` + "Nama: " + name.value + "%0a" + "Email: " + email.value + "%0a" + "Nomor Telepon: " + phone.value + "%0a" + "Alamat: " + address.value + "%0a" +  "Pesan: " + message.value;

    window.open(url, '_blank').focus();
}