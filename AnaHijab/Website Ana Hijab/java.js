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
let cart = {};

function addToCart(productName) {
    // Jika produk sudah ada di keranjang, tambahkan jumlahnya
    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
        // Jika belum ada, tambahkan produk dengan jumlah 1
        cart[productName] = {
            name: productName,
            quantity: 1
        };
    }
    updateCartUI();
}

function removeFromCart(productName) {
    // Jika produk ada di keranjang dan jumlahnya lebih dari 1, kurangi jumlahnya
    if (cart[productName] && cart[productName].quantity > 1) {
        cart[productName].quantity -= 1;
    } else {
        // Jika jumlah produk tinggal 1, hapus produk dari keranjang
        delete cart[productName];
    }
    updateCartUI();
}

function removeAllFromCart(productName) {
    // Hapus semua kuantitas produk dari keranjang
    if (cart[productName]) {
        delete cart[productName];
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Bersihkan tampilan keranjang

    for (let product in cart) {
        let li = document.createElement('li');
        li.textContent = `${cart[product].name} x ${cart[product].quantity}`;
        
        // Membuat elemen div untuk menampung tombol
        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'cart-buttons';

        // Tambahkan tombol hapus 1
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Hapus 1';
        removeButton.onclick = function () {
            removeFromCart(cart[product].name);
        };

        // Tambahkan tombol hapus semua
        let removeAllButton = document.createElement('button');
        removeAllButton.textContent = 'Hapus Semua';
        removeAllButton.onclick = function () {
            removeAllFromCart(cart[product].name);
        };

        // Masukkan kedua tombol ke dalam buttonContainer
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(removeAllButton);

        // Masukkan buttonContainer ke dalam item list
        li.appendChild(buttonContainer);

        cartItemsElement.appendChild(li);
    }

    // Update jumlah total item di badge keranjang
    document.getElementById('cart-count').textContent = getTotalCartItems();
}

function getTotalCartItems() {
    let total = 0;
    for (let product in cart) {
        total += cart[product].quantity;
    }
    return total;
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
// Function to toggle the visibility of the search bar
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

// Function to search products
function searchProducts() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.products .row'); // Select all product rows

    products.forEach(product => {
        const productName = product.querySelector('.price h4').textContent.toLowerCase(); // Get product name
        if (productName.includes(input)) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; // Hide product
        }
    });
};


document.querySelectorAll('.heart-icon.clickable').forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
      heartIcon.querySelector('i:not(.active)').classList.toggle('active');
      heartIcon.querySelector('i.active').classList.toggle('active');
    });
  });
