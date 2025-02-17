document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk filter produk berdasarkan genre
    function filterProductsByGenre(genre) {
        // Sembunyikan semua produk
        document.querySelectorAll('.product-item').forEach(product => {
            product.style.display = 'none';
        });

        // Tampilkan produk sesuai genre yang dipilih
        if (genre === 'all') {
            document.querySelectorAll('.product-item').forEach(product => {
                product.style.display = 'block';
            });
        } else {
            document.querySelectorAll(`.product-item[data-genre="${genre}"]`).forEach(product => {
                product.style.display = 'block';
            });
        }
    }

    // tetapkan genre default ke 'action'
    filterProductsByGenre('action');
    
    // Tambahkan event listener untuk dropdown item
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedGenre = this.getAttribute('data-genre');
            filterProductsByGenre(selectedGenre);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to Membuat Dan Menampilkan Modal Pembayaran
    function showPaymentModal() {
        // Buat elemen modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        modalContent.style.textAlign = 'default';
        modalContent.style.width = '300px'; // Tetapkan lebar modal di sini

        // Modal header
        const modalHeader = document.createElement('h5');
        modalHeader.textContent = 'Pilih Metode Pembayaran';
        modalContent.appendChild(modalHeader);

        // Modal body dengan daftar metode pembayaran
        const modalBody = document.createElement('p');
        modalBody.innerHTML = `
            <ul>
                <li>Gopay</li>
                <li>OVO</li>
                <li>DANA</li>
                <li>LinkAja</li>
            </ul>
        `;
        modalContent.appendChild(modalBody);

        // Close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Tutup';
        closeButton.style.marginTop = '10px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#dc3545';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(modal); // hapus modal saat tombol ditutup
        });
        modalContent.appendChild(closeButton);

        // menambahkan modal konten ke modal
        modal.appendChild(modalContent);

        // menambahkan modal ke body
        document.body.appendChild(modal);
    }

    // Tambahkan event listener untuk setiap tombol beli
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            showPaymentModal(); // tampilkan modal pembayaran saat tombol beli diklik
        });
    });
});

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById('myForm').reset();
}

// Menangani event submit pada form
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman default
    event.preventDefault();
    
    // Panggil fungsi untuk mereset form
    resetForm();

});

