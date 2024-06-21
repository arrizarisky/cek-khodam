const khodams = [
    { name: "Jin Ifrit", ability: "Mengendalikan api dan memiliki kekuatan besar" },
    { name: "Ratu Pantai Selatan", ability: "Mengendalikan laut dan angin" },
    { name: "Nyi Roro Kidul", ability: "Menguasai segala makhluk air dan magis" },
    { name: "Sang Penunggu Gunung", ability: "Melindungi gunung dan penghuninya" },
    { name: "Dewi Sri", ability: "Memberikan kesuburan dan kemakmuran" },
    { name: "Mak Lampir", ability: "Mengendalikan ilmu hitam dan memiliki kekuatan gaib" },
    { name: "Singa Barong", ability: "Menjaga dan melindungi harta" },
    { name: "Pocong Penjaga", ability: "Menjaga tempat keramat dan memiliki kekuatan roh" },
    { name: "Kuntilanak Merah", ability: "Menghantui dan menakuti musuh" },
    { name: "Banaspati", ability: "Mengendalikan api dan roh jahat" }
];

function getRandomKhodam() {
    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
}

    const nameInput = document.getElementById('nameInput');
    const header = document.getElementById('header');
    const namaUser = document.getElementById('khodamName');
    const khodamName = document.getElementById('result');
    const ability = document.getElementById('khodamAbility');
    const resetButton = document.getElementById('resetButton');
    const khodamForm = document.getElementById('khodamForm');

function cekKhodam(e) {
    e.preventDefault()
    const inputNama = nameInput.value.trim();
    if (inputNama === "") {
        alert("Masukkan nama Anda terlebih dahulu!");
        return;
    }
    khodamName.textContent= "Loading"
    khodamName.classList.add('loading');

    const khodam = getRandomKhodam();
    setTimeout(() => {
        khodamName.classList.remove('loading');
        header.innerText = `Khodam yang ada dalam diri`
        namaUser.innerText = `${inputNama} :`;
        khodamName.innerText = `✨${khodam.name}✨`;
        ability.innerText = `${khodam.ability}`;
        khodamForm.style.display = 'none';
        resetButton.style.display = 'flex';
    }, 5000)

}
function resetForm() {
    header.innerText = ``;
    nameInput.value = '';
    khodamName.innerText = ``;
    ability.innerText = '';
    namaUser.innerText = ``;
    khodamForm.style.display = 'block';
    resetButton.style.display = 'none';
}
khodamForm.addEventListener('submit', cekKhodam);