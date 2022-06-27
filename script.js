let music = document.querySelector('audio')

document.querySelector('.play').addEventListener('click', playMusic)
document.querySelector('.pause').addEventListener('click', pauseMusic)

music.addEventListener('timeupdate', upBarra)

function playMusic() {
  music.play()
  document.querySelector('.pause').style.display = 'block'
  document.querySelector('.play').style.display = 'none'
}

function pauseMusic() {
  music.pause()
  document.querySelector('.pause').style.display = 'none'
  document.querySelector('.play').style.display = 'block'
}

function upBarra() {
  let barra = document.querySelector('progress')
  barra.style.width =
    Math.floor((music.currentTime / music.duration) * 100) + '%'
  let tempoDecorrido = document.querySelector('.inicio')
  tempoDecorrido.textContent = segundoParaMinutos(Math.floor(music.currentTime))
}

function segundoParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60)
  let campoSegundos = segundos % 60
  if (campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos
  }
  return campoMinutos + ':' + campoSegundos
}

let endMusic = document.querySelector('.fim')

endMusic.textContent = segundoParaMinutos(Math.floor(music.duration))
