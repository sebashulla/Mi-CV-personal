const textToType = "Sebastian Paolo Shulla Garcia";
const typeWriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        typeWriterElement.innerHTML += '<span class="cursor">|</span>';
    }
}

window.onload = typeWriter;

const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .cursor {
        animation: blink 1s infinite;
        color: var(--highlight);
    }
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);