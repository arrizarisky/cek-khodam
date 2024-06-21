const khodams = [
    { name: "Pemadam Kebakaran", ability: "Mengendalikan api dan memiliki kekuatan besar" },
    { name: "Marinir", ability: "Mengendalikan laut dan angin" },
    { name: "Aquaman", ability: "Menguasai segala makhluk air dan magis" },
    { name: "Mbah Marijan", ability: "Melindungi gunung dan penghuninya" },
    { name: "Pupuk Urea", ability: "Memberikan kesuburan dan kemakmuran" },
    { name: "Pesulap Merah", ability: "Mengendalikan ilmu hitam dan memiliki kekuatan gaib" },
    { name: "Amil Zakat", ability: "Menjaga dan melindungi harta" },
    { name: "Asep Pamali", ability: "Menjaga tempat keramat dan memiliki kekuatan roh" },
    { name: "Sutris Ban dalam", ability: "Menghantui dan menakuti manusia" },
    { name:"Gus Syamsudin", ability: "Mengendalikan api dan roh jahat" }
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