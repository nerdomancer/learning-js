function skip(e) {
    video.currentTime +=  parseFloat(this.dataset.skip);
}

function playPause(e) {
    video.paused ? video.play() : video.pause();
}

function handleProgress(e) {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function progressDrag(e) {
    video.currentTime = e.offsetX / this.offsetWidth * video.duration;    
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function updatePlayPauseButton(e) {
    const icon = this.paused ? '►' : '❚❚';
    playPauseButton.textContent = icon;
}

const video = document.querySelector('video');
const playPauseButton = document.querySelector('.toggle');
const player = document.querySelector('.player');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');

let progressMouseDown = false;

document.addEventListener('keypress', (e) => { if(e.code === 'Space') { playPause(e); }});
video.addEventListener('keypress', (e) => { if(e.code === 'Space') { playPause(e); }});
video.addEventListener('click', playPause);
video.addEventListener('pause', updatePlayPauseButton);
video.addEventListener('play', updatePlayPauseButton);
video.addEventListener('timeupdate', handleProgress);
playPauseButton.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', progressDrag);
progress.addEventListener('mousedown', () => progressMouseDown = true);
progress.addEventListener('mouseup', () => progressMouseDown = false);
progress.addEventListener('mousemove', (e) => progressMouseDown && progressDrag(e));

