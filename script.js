function validate() {
    event.preventDefault();
    var huruf = /^[a-zA-Z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputNama = document.forms["form-pembelian"]["username"].value;
    var inputAlamat = document.forms["form-pembelian"]["alamat"].value;
    var inputHP = document.forms["form-pembelian"]["no-hp"].value;
    var inputEmail = document.forms["form-pembelian"]["email"].value;
    var inputBuku = document.forms["form-pembelian"]["buku"].value;
    var inputJumlah = document.forms["form-pembelian"]["jumlah"].value;

    if(inputNama.match(huruf)){
        var namaValid = inputNama;
    }else {
        alert('Nama Anda Tidak Sesuai');
    }

    if(inputAlamat == "") {
        alert('Alamat Tidak Boleh Kosong');
    }else {
        var alamatValid = inputAlamat;
    }

    if(isNaN(inputHP) || inputHP.toString().length <10){
        alert('Nomor HP hanya boleh berisi angka');
    }else {
        var nomorValid = inputHP;
    }

    if(inputEmail.match(mailformat)) {
        var emailValid = inputEmail;
    }else {
        alert('Email Anda Tidak Sesuai');
    }

    if(inputBuku == "") {
        alert('Nama Buku Tidak Boleh Kosong');
    }else {
        var bukuValid = inputBuku;
    }

    if(inputJumlah == "") {
        alert('Jumlah Buku Tidak Boleh Kosong');
    }else if(inputJumlah <= 0) {
        alert('Jumlah Buku Tidak Boleh Kurang Dari 0');
    }else {
        var jumlahValid = inputJumlah;
    }
    if (namaValid && alamatValid && nomorValid && emailValid && bukuValid && jumlahValid) {
        alert("Pesananmu Sedang Diproses. Informasi Mengenai Pengiriman Akan Diupdate Melalui Email Anda, Pastikan Anda Mengeceknya Ya~ Terima Kasih Sudah Berbelanja Di Toko Buku Kami! :)");
    }
}