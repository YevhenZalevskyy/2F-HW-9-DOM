/////  HW#9 DOM  /////

function getBlocksInterval() {
document.getElementById('container')

for (newDiv = 0; newDiv < 25; newDiv++) {
  let newDiv = document.createElement('div')
  newDiv.style.width = '50px'
  newDiv.style.height = '50px'
  setInterval (() => {
    newDiv.style.background = '#' + Math.round(Math.random()*16777216).toString(16)
  }, 1000)

  container.append(newDiv)
  }
}

getBlocksInterval()
