let musics = [
  {title: 'Running Up That Hill', 
  artits: 'Kate Bush', 
  src: 'assets/Kate Bush - Running Up That Hill - Official Music Video.mp3',
  img: 'assets/max.png'
    },

  {title: 'Master Of Puppets', 
  artits: 'Metallica', 
  src: 'assets/Metallica - Master of Puppets.mp3',
  img: 'assets/eddie.png'
    },

  {title: 'Sunglesses At Night',
  artits: 'Corey Hart',
  src: 'assets/Corey Hart - Sunglasses At Night.mp3',
  img: 'assets/steve.png'}
]

let music = document.querySelector('audio')
let indexMusic = 0
let durationMusic = document.querySelector('.fim')
let image = document.querySelector('.discricao img')
let musicName = document.querySelector('.discricao h2')
let artistName = document.querySelector('.discricao p')

renderMusic(indexMusic)



document.querySelector('.play').addEventListener('click', playMusic)
document.querySelector('.pause').addEventListener('click', pauseMusic)

music.addEventListener('timeupdate', upBarra)

document.querySelector('.skipBack').addEventListener('click', () => {
    indexMusic--
    if (indexMusic < 0) {
      indexMusic = 2
    }
    renderMusic(indexMusic)
})

document.querySelector('.skipNext').addEventListener('click', () => {
  indexMusic++
  if (indexMusic > 2) {
    indexMusic = 0
  }
  renderMusic(indexMusic)
})

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

function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
      musicName.textContent = musics[index].title;
      artistName.textContent = musics[index].artits;
      image.src = musics[index].img;
      durationMusic.textContent = segundoParaMinutos(Math.floor(music.duration))
    })
}