const idText = document.querySelector(".id");
const advice = document.querySelector(".advice");
const icon = document.querySelector(".icon");

async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        const { id, advice: adviceText } = jsonData.slip;

        idText.innerHTML = `ADVICE #${id}`;
        advice.innerHTML = `"${adviceText}"`;
}

getAdvice();

icon.addEventListener("click", getAdvice);
