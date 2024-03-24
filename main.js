// Data buku
const books = [
    {
      title: "Return of the Flowery Mountain Sect",
      author: "비가",
      image: "png1.jpeg",
      description: "Manhwa Return of the Flowery Mountain Sect yang dibuat oleh komikus bernama 비가 ini bercerita tentang Chung Myung, Murid ke-13 dari Sekte Gunung Bunga Besar, Salah satu dari 3 Pendekar Pedang Besar, Pedang Suci Bunga Plum, mengalahkan Chun Ma, yang telah membawa kehancuran dan kekacauan ke dunia. Setelah pertempuran, dia menghembuskan nafas terakhirnya di atas gunung markas dari Sekte Penyembahan Iblis. Ia terlahir kembali setelah 100 tahun dalam tubuh seorang anak. ……Apa? Sekte Gunung Bunga telah jatuh? Omong kosong macam apa itu !?."
    },
    {
      title: "Hellmut",
      author: "Honyo, Kim Nan Sae",
      image: "png2.webp",
      description: "Hellmut adalah seorang anak yang di tinggalkan di hutan binatang ajaib saat lahir, Dibesarkan oleh Magic Beasts.Manusia pertama yang dia temui adalah Sword Saint Darien, Sedikit yang Helmut tahu bahwa pertemuan kebetulan akan segera mengguncang fondasi nasibnya.Anak laki-laki yang hidup seperti binatang dilempar ke dunia manusia!. Dia memiliki ilmu pedang yang luar biasa, penampilan yang luar biasa dan kecerdasan yang tajam, tetapi ada satu hal yang dia kurang: kemanusiaan."
    },
    {
      title: "Legend of the Northern Blade",
      author: "해민",
      image: "png3.1.gif",
      description: "Manhwa Legend of the Northern Blade yang dibuat oleh komikus bernama 해민 ini bercerita tentang Ketika dunia jatuh ke dalam kegelapan.Seniman bela diri berkumpul untuk membentuk 'Sekte Surgawi Utara'. Dengan bantuan dari Sekte Surgawi Utara, orang-orang mulai menikmati kedamaian lagi. Namun, seiring berjalannya waktu para seniman bela diri mulai bersekongkol melawan 'Sekte Surgawi Utara', dan akhirnya menyebabkan kematian Pemimpin Sekte, Jin Kwan-Ho, menghancurkan sekte itu dengannya. Saat semua orang meninggalkan sekte, putra tunggal Jin Kwan-Ho, Jin Mu-Won juga ditinggalkan. Mu-Won tidak pernah belajar seni bela diri, tetapi dia menemukan Teknik yang diam-diam ditinggalkan oleh ayahnya dan mulai mempelajari seni bela diri dari Sekte Surgawi Utara."
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      author: "I Stepped On Lego",
      image: "png4.jpeg",
      description: "Dia adalah anjing pemburu keluarga Baskerville: Vikir.Hadiah atas kesetiaannya adalah eksekusi di bawah guillotine.“Aku tidak akan lagi menjalani kehidupan sebagai anjing pemburu setelah membunuh si kelinci.”Tidak disangka-sangka, dia mendapatkan kesempatan baru setelah kematiannya.Mata Vikir bersinar merah terang ketika dia mengasah taringnya dalam kegelapan.“Tunggu saja kau, Hugo! Aku pasti akan membunuhmu kali ini.”Kisah pembalasan dendam anjing pemburu pada tuannya dimulai.."
    },
    {
      title: " The World’s Best Engineer",
      author: "N/A",
      image: "png5.webp",
      description: "Manhwa The World’s Best Engineer yang dibuat oleh komikus bernama ini bercerita tentang Kim Soo-Ho, seorang insinyur sipil, menjadi bangsawan dari sebuah novel. Tapi apa ini? Harta saya akan segera dihancurkan? Kemudian saya harus mendesain, membangun, dan menjual."
    }
  ];
  
  // Memuat daftar buku
  const bookList = document.getElementById("bookList");
  
  books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
  
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookDiv.appendChild(bookImage);
  
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookDiv.appendChild(bookTitle);
  
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;
    bookDiv.appendChild(bookAuthor);
  
    const bookDescription = document.createElement("p");
    bookDescription.textContent = book.description;
    bookDiv.appendChild(bookDescription);
  
    bookList.appendChild(bookDiv);
 });

  