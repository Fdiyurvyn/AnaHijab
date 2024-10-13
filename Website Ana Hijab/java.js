const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  function buyNow(productName) {
    alert("Anda membeli produk: " + productName);
    // Lakukan aksi beli, seperti pengalihan ke halaman checkout
}

function addToCart(productName) {
    alert(productName + " ditambahkan ke keranjang.");
    // Lakukan aksi untuk menambahkan produk ke keranjang
}
// Array untuk menyimpan barang di keranjang
let cart = [];

// Fungsi untuk menambahkan barang ke keranjang
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    // Perbarui jumlah barang di keranjang
    cartCount.textContent = cart.length;

    // Bersihkan daftar keranjang sebelum mengisi ulang
    cartItems.innerHTML = '';

    // Tambahkan setiap barang di keranjang ke dalam dropdown
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

// Menampilkan dan menyembunyikan dropdown keranjang
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');

cartIcon.addEventListener('click', function(e) {
    e.preventDefault();
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});
// Fungsi untuk menghapus semua barang dari keranjang
document.getElementById('remove').addEventListener('click', function() {
    cart = []; // Kosongkan array keranjang
    updateCart(); // Perbarui tampilan keranjang
});
// Fungsi untuk menampilkan atau menyembunyikan input pencarian
document.getElementById('search-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
    searchBar.focus();
});

// Fungsi untuk melakukan pencarian produk
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.products .row');

    products.forEach(product => {
        const productName = product.querySelector('.price h4').textContent.toLowerCase();

        // Tampilkan atau sembunyikan produk berdasarkan hasil pencarian
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
// Cari semua heart icon di halaman
const heartIcons = document.querySelectorAll('.heart-icon i');

// Tambahkan event listener untuk setiap heart icon
heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Toggle (berpindah) kelas 'liked' saat diklik
        this.classList.toggle('liked');
    });
});

