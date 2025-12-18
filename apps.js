
  function changeColor() {
    let codeNum = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += codeNum[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = color;
    document.querySelector('span').innerText = color;
  }