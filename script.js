const produtos = [
    { nome: "Apple iPhone 13 128GB - (Black)", vista: "R$3.500,00", prazo: "R$3.900,00", img: "images/iphone13.png" },
    { nome: "Apple iPhone 14 128GB - (Black)", vista: "R$4.400,00", prazo: "R$4.900,00", img: "images/iphone14.png" },
    { nome: "Apple iPhone 15 128GB - (Black)", vista: "R$4.910,00", prazo: "R$5.450,00", img: "images/iphone15.png" },
    { nome: "Apple iPhone 15 Pro 128GB - (Titanium Natural) (e-sim)", vista: "R$6.650,00", prazo: "R$7.400,00", img: "images/iphone15pro.png" },
    { nome: "Apple iPhone 15 Pro Max 256GB - (Black) (e-sim)", vista: "R$7.780,00", prazo: "R$8.640,00", img: "images/iphone15promax.png" },
    { nome: "Apple iPhone 16 128GB - (Black)", vista: "R$5.315,00", prazo: "R$5.950,00", img: "images/iphone16.png" },
    { nome: "Apple iPhone 16 Pro 256GB - (Black) (e-sim)", vista: "R$7.900,00", prazo: "R$8.780,00", img: "images/iphone16pro.png" },
    { nome: "Apple iPhone 16 Pro Max 256GB - (Black) (e-sim)", vista: "R$8.300,00", prazo: "R$9.215,00", img: "images/iphone16promax.png" }
];

const container = document.getElementById("produtos");
produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p class='preco'>🔥 À Vista - <strong>${produto.vista}</strong>
        <span>💳 À Prazo - ${produto.prazo}</span></p>
    `;
    container.appendChild(div);
});