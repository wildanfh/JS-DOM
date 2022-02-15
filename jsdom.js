// Javascript DOM
// video 1 - Javascript & DOM (intro) -
// document;
// console.log(document);

// video 3 - Javascript & DOM (DOM Selection) -

// // 1. document.getElementById() -> mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "pink";
// judul.style.backgroundColor = "red";
// judul.innerHTML = "Wildanf";

// // 2. document.getElementsByTagName -> mengembalikan HTMLCollection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightgreen";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "45px";

// // 3. document.getElementsByClassName() -> mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName("p1");

// p1[0].innerHTML = "ini diubah di Javascript";

// video 4 - Javascript & DOM (DOM Selection part 2) -

// // 4. document.querySelector() -> menghasilkan element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("#b ul li:nth-child(2)");
// li2.style.backgroundColor = "lightblue";

// // 5. document.querySelectorAll() -> mengembalikan NodeList
// const p = document.querySelectorAll("p");
// // p[1].style.innerHTML = "halo paragraf 4";

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightyellow";
// }

// // mengubah node root
// const divA = document.getElementById("a");
// const a = divA.getElementsByTagName("a")[0];
// a.style.backgroundColor = "orange";

// video 5 - Javascript & DOM (DOM Manipulation) -
// element.innerHTML
// const divA = document.getElementById("a");
// divA.innerHTML = "<p>hendrick!!</p>";

// element.style.<propertiCSS>
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// element.setAttribute() / element.getAttribute()
// const judul = document.querySelector("#judul");
// judul.setAttribute("class", "nama");
// judul.getAttribute("id");
// judul.removeAttribute("class");

// element.classList() -add/-remove/-toggle/-item/-contains/-replace
// const a = document.querySelector("div#a a");
// a.classList.add("link");
// a.classList.remove("link");
// a.classList.toggle("oren");
// a.classList.item(0);
// a.classList.contains("a");
// a.classList.replace("oren", "satu");

// video 6 - DOM Manipulation (manipulasi node) -
// // buat element baru
// const pBaru = document.createElement("p");
// const teksP = document.createTextNode("paragraf baru");
// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksP);
// // simpan pBaru diakhir section a
// const divA = document.getElementById("a");
// divA.appendChild(pBaru);

// // node.insertBefore()
// const liAnyar = document.createElement("li");
// const teksLi = document.createTextNode("List Baru");
// liAnyar.appendChild(teksLi);
// // menyimpan element sebelum li kedua
// const ul = document.querySelector("div#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");
// // node.insertBefore(yangBaru, mauDiSimpanSebelumApa);
// ul.insertBefore(liAnyar, li2);

// // ParentNode.removeChild()
// const a = divA.getElementsByTagName("a")[0];
// divA.removeChild(a);

// // ParentNode.replaceChild(elementBaru, elementLama);
// const divB = document.getElementById("b");
// const p4 = divB.querySelector("p");
// const judulBaru = document.createElement("h3");
// const teksJudul = document.createTextNode("Judul Baru");
// judulBaru.appendChild(teksJudul);
// divB.replaceChild(judulBaru, p4);

// judulBaru.style.backgroundColor = "lightblue";
// liAnyar.style.backgroundColor = "lightblue";
// pBaru.style.backgroundColor = "lightblue";
// a.style.backgroundColor = "lightblue";

// video 7 - DOM Events -
// // Event Handler - on<event>
// // onclick
// const p2 = document.querySelector(".p2");
// function ubahWarna() {
//   p2.style.backgroundColor = "lightgreen";
// }

// p2.onclick = ubahWarna;

// const p1 = document.querySelector(".p1");
// function ubahP1() {
//   p1.style.fontSize = "30px";
// }
// p1.onclick = ubahP1;

// // addEventListener()
// const p4 = document.querySelector("div#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector('ul');
//   const li = document.createElement('li')
//   const teksLi = document.createTextNode('ini list tambahan');
//   li.appendChild(teksLi);
//   ul.appendChild(li);
//   return li;
// });

// !perbedaan event handler dan addEventListener()
// const p1 = document.querySelector(".p1");
// function ubahWarnaP1() {
//   p1.style.backgroundColor = "lightgreen";
// }

// p1.onclick = ubahWarnaP1;

// p1.onclick = function () {
//   p1.style.color = "lightblue";
// };

// const p2 = document.querySelector(".p2");
// p2.addEventListener("click", function () {
//   p2.style.backgroundColor = "lightgreen";
// });

// p2.addEventListener("click", function () {
//   p2.style.color = "lightblue";
// });

// video 8 - latihan DOM (bermain dengan warna) -

// const tombol = document.getElementsByTagName("button")[0];
// const body = document.getElementsByTagName("body")[0];
// const judul = document.getElementsByTagName("h1")[0];
// tombol.addEventListener("click", function () {
//   body.style.backgroundColor = "#444";
//   judul.style.color = "white";
// // bisa juga begini, document.body.style.backgroundColor = '#444'; -> kalo gini gak perlu manggil element body.
// });

// tombol.onclick = function () {
//   body.classList.toggle("dark-mode");
// };
// // buat tombol baru
// const tombol2 = document.createElement("button");
// const teksTombol = document.createTextNode("random color");
// tombol2.appendChild(teksTombol);
// tombol2.setAttribute("type", "button");
// // document.body.appendChild(tombol2);
// tombol.after(tombol2);

// // bilangan random dan medefinisikannya
// // var random = Math.random();
// // tombol2.addEventListener("click", function () {
// //   if (random <= 0.2) {
// //     body.classList.toggle("merah");
// //   } else if (random > 0.2 && random <= 0.4) {
// //     body.classList.toggle("kuning");
// //   } else if (random > 0.4 && random <= 0.6) {
// //     body.classList.toggle("hijau");
// //   } else if (random > 0.6 && random <= 0.8) {
// //     body.classList.toggle("biru");
// //   } else {
// //     body.classList.toggle("ungu");
// //   }
// // });

// punya pak dika
// tombol2.addEventListener("click", function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// document.body.addEventListener("mousemove", function (event) {
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
// });

// video 9 - latihan javascript (suit jawa 2.0) -

// function getPilihanComputer() {
//   const comp = Math.random();
//   if (comp <= 0.34) return "gajah";
//   if (comp > 0.34 && comp <= 0.67) return "orang";
//   return "semut";
// }

// function getHasil(comp, player) {
//   if (player == comp) return "Seri";
//   if (player == "gajah") return comp == "orang" ? "menang" : "kalah";
//   if (player == "orang") return comp == "semut" ? "menang" : "kalah";
//   if (player == "semut") return comp == "gajah" ? "menang" : "kalah";
// }

// function putar() {
//   const imgComputer = document.querySelector(".img-komputer");
//   const gambar = ["gajah", "orang", "semut"];
//   let i = 0;
//   const waktuMulai = new Date().getTime();
//   setInterval(function () {
//     if (new Date().getTime() - waktuMulai > 1000) {
//       clearInterval;
//       return;
//     }
//     imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
//     if (i == gambar.length) i = 0;
//   }, 100);
// }

// function angka() {
//   const span = document.getElementsByTagName('span');
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const i = 0;
//   if (hasil == 'menang') {
//     span[1].innerHTML = 'i += 1';
//     return;
//   } else {
//     span[0].innerHTML = 'i += 1'
//     return;
//   }
// }

// const pilihan = document.querySelectorAll(".wadah-orang img");
// pilihan.forEach(function (pil) {
//   pil.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     putar();

//     setTimeout(function () {
//       const imgComputer = document.querySelector(".img-komputer");
//       imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//       const jawaban = document.querySelector(".jawaban");
//       jawaban.innerHTML = hasil;
//       angka();
//     }, 1000);
//   });
// });

// video 10 - DOM Traversal -

// const card = document.querySelector('.card');
// const tutup2 = document.querySelector('.close');
// tutup2.addEventListener('click', function() {
//	card.style.display = 'none';
// });

// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// //	close[i].parentElement.style.display = 'none';
// e.target.parentElement.style.display = 'none';
// 	});
// }

// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 	});
//});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.nextElementSibling);

// video 11 - preventDefault() -
// menghilangkan aksi default dari sebuah element
// const close = document.querySelectorAll('.close');
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 	});
//});

// video 12 - event bubbling -
// event parent yang berjalan saat kita menjalankan event childnya.
// stopPropagation()
// const close = document.querySelectorAll('.close');
// close.forEach(function(el) {
//	el.addEventListener('click', function(e) {
//		e.target.parentElement.style.display = 'none';
//		e.preventDefault();
//		e.stopPropagation();
//	});
//});

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e) {
//		alert('ok');
//	});
//});

// refactoring code

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   if (e.target.className == "close") {
//     e.target.parentElement.style.display = "none";
//     e.stopPropagation();
//     e.preventDefault();
//   }
// });

// video 13 - DOM Gallery -

// const thumb = document.querySelectorAll('.thumb');

// for (let i = 0; i < thumb.length; i++) {
//	thumb[i].addEventListener('click', function() {
//	
//		const jumbo = document.querySelector('.jumbo');
		
//		jumbo.setAttribute('src', 'img/' + (i + 1) + '.jpg');
//		console.log('img/' + (i + 1) + '.jpg')
//	});
//}

// punya pak dika

const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function() {
			jumbo.classList.remove('fade');
		}, 500);
		
		thumbs.forEach(function (thumb) {
			thumb.className = 'thumb';
		});
		e.target.classList.add('active');
	}
});
