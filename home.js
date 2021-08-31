let nama = "christian";  

console.log(nama)

function onlineShop(namaPembeli,produk) {
let ucapan = "terimakasih " + namaPembeli + " telah membeli produk " + produk;
let ucapanSederhana = `terimakasih ${namaPembeli} telah membeli produk ${produk}`;
return ucapanSederhana;   
}

console.log(onlineShop("Okky" , "handphone"));

function formatString(string) {
    return string.toLowerCase();

    
}

console.log(formatString("SELAMAT JALAN SAMPAI TUJUAN"))