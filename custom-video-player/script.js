const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')


//Play and Pause
function toogleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}
//Update Play Pause Icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"> </i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"> </i>';
    }
}
//Update Progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100
    //Get Mins
    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = '0' + String(mins)
    }
    //Get secs
    let secs = Math.floor(video.currentTime % 60)
    if (secs < 10) {
        secs = '0' + String(secs)
    }
    timestamp.innerHTML = `${mins}:${secs}`
}

//Set video progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100
}

//Stop
function stopVideo() {
    video.currentTime = 0
    video.pause()
}

//Evenet listeners
video.addEventListener('click', toogleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toogleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)