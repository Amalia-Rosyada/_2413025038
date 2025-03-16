// Mendapatkan elemen yang diperlukan
const hamburg = document.querySelector('.hamburg');
const dropdown = document.querySelector('.dropdown');
const cancel = document.querySelector('.cancel');

// Menambahkan event listener untuk ikon hamburger
hamburg.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Menambahkan event listener untuk ikon cancel
cancel.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

// Menutup dropdown jika area di luar dropdown diklik