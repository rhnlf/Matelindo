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

    var url = `https://wa.me/6285156262472?text=Nama:20%${name.value}%0a
    Email:20%${email.value}%0a
    Nomor Telepon:20%${phone.value}%0a
    Alamat:20%${address.value}%0a
    Pesan:20%${message.value}`;

    window.open(url, '_blank').focus();
}