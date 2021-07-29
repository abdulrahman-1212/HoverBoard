const container = document.querySelector('.grid');
const childs = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < childs; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseout', () => removeColor(square))
   container.appendChild(square)
}

function setColor(ele) {
    const color = getRandomColor();
    ele.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(ele) {
    ele.style.background = '#222';
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor()  {
    return colors[Math.floor(Math.random() * colors.length)]
}

