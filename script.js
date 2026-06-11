// CONTROLE DO MENU MOBILE (HAMBURGER)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// MUDANÇA DE ESTILO DA NAVBAR AO SCROLLAR
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// HIGHLIGHT AUTOMÁTICO DA NAVBAR AO ROLAR A PÁGINA
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// RESPOSTAS SIMULADAS DA IA AGRO
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const respostasIA = {
    "manejo de solo": "Para o manejo regenerativo, recomendamos o uso de plantas de cobertura (como leguminosas) para fixação natural de Nitrogênio e redução drástica do revolvimento mecânico da terra.",
    "economia de agua": "Nossos sensores IoT detectam a evapotranspiração em tempo real. Com isso, produtores AgroForte economizam até 35% de água ativando a irrigação apenas nos horários de menor estresse térmico.",
    "padrao": "Excelente pergunta! Nosso modelo preditivo analisa variáveis biológicas e climáticas para dar a melhor resposta sobre essa cultura. Quer agendar uma demonstração no nosso Dashboard?"
};

function enviarMensagem() {
    const texto = userInput.value.trim();
    if (texto === "") return;

    // Mensagem do Usuário
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "user-message");
    userDiv.textContent = texto;
    chatBox.appendChild(userDiv);
    
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Resposta Simulada da IA (com um pequeno delay)
    setTimeout(() => {
        const aiDiv = document.createElement("div");
        aiDiv.classList.add("message", "ai-message");
        
        // Validação simples de palavra-chave
        const busca = texto.toLowerCase();
        if (busca.includes("solo") || busca.includes("manejo")) {
            aiDiv.textContent = respostasIA["manejo de solo"];
        } else if (busca.includes("agua") || busca.includes("irrigacao") || busca.includes("água")) {
            aiDiv.textContent = respostasIA["economia de agua"];
        } else {
            aiDiv.textContent = respostasIA["padrao"];
        }
        
        chatBox.appendChild(aiDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

sendBtn.addEventListener("click", enviarMensagem);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") enviarMensagem();
});

// SIMULAÇÃO DE SUBMISSÃO DE FORMULÁRIOS
document.getElementById("consultoriaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso! Nossa IA e nossa equipe técnica entrarão em contato em até 24 horas para apresentar o diagnóstico.");
    e.target.reset();
});

document.getElementById("mainContactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Sua mensagem foi encaminhada para a nossa equipe de atendimento.");
    e.target.reset();
});
