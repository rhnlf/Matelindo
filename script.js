function sendWA() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var message = document.getElementById('message');

    if (name.value.trim() == "") {
        name.style.background = "lightpink";
        name.style.border = "4px solid red";
        alert('Please Enter your Name');
        return false;
    }

    var url = "https://wa.me/6285156262472?text="
        + "Nama: " + name.value + "%0a"
        + "Email: " + email.value + "%0a"
        + "Nomor Telepon: " + phone.value + "%0a"
        + "Alamat: " + address.value + "%0a"
        + "Pesan: " + message.value;

    window.open(url, '_blank').focus();
}