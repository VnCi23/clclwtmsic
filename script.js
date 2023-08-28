
//(clock)

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').textContent = timeString;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  


// ... (calendar)

function updateCalendar() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    document.getElementById('calendar').textContent = dateString;
  }
  
  updateCalendar();
  setInterval(updateCalendar, 1000 * 60 * 60); // Update calendar once per hour
  


// ... (fullscreen)

const fullscreenButton = document.getElementById('fullscreen-toggle');

fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  }
});


//(music)
const audioPlayer = document.getElementById('audio-player');
const playlist = [
  'track1.mp3',
  'track2.mp3',
  'track3.mp3',
  'track4.mp3',
  'track5.mp3',
  'track6.mp3',
  'track7.mp3',
  'track8.mp3',
  'track9.mp3',
  'track10.mp3',
  'track11.mp3',
  'track12.mp3',
  'track13.mp3',
  'track14.mp3',
  'track15.mp3',
  'track16.mp3',
  'track17.mp3',
  'track18.mp3',
  'track19.mp3',
  'track20.mp3',
  'track21.mp3',
  'track22.mp3',
  'track23.mp3',
  'track24.mp3',
  'track25.mp3',
  'track26.mp3',
  'track27.mp3',
  'track28.mp3',
  'track29.mp3',
  'track30.mp3',
  'track31.mp3',
  'track32.mp3',
  'track33.mp3',
  'track34.mp3',
  'track35.mp3',
  'track36.mp3',
  'track37.mp3',
  'track38.mp3',
  'track39.mp3',
  'track40.mp3',
  'track41.mp3',
  'track42.mp3',
  'track43.mp3',
  'track44.mp3',
  'track45.mp3',
  'track46.mp3',
  'track47.mp3',
  'track48.mp3',
  'track49.mp3',
  'track50.mp3',
  'track51.mp3',
  'track52.mp3',
  'track53.mp3',
  'track54.mp3',
  'track55.mp3',
  'track56.mp3',
  'track57.mp3',
  'track58.mp3',
  'track59.mp3',
  'track60.mp3',
  'track61.mp3',
  'track62.mp3',
  'track63.mp3',
  'track64.mp3',
  'track65.mp3',
  'track66.mp3',
  'track67.mp3',
  'track68.mp3',
  'track69.mp3',
  'track70.mp3',
  'track71.mp3',
  'track72.mp3',
  'track73.mp3',
  'track74.mp3',
  'track75.mp3',
  'track76.mp3',
  'track77.mp3',
  'track78.mp3',
  'track79.mp3',
  'track80.mp3',
  'track81.mp3',
  'track82.mp3',
  'track83.mp3',
  'track84.mp3'
];

let currentTrackIndex = 0;

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  audioPlayer.src = playlist[currentTrackIndex];
  audioPlayer.play();
}

// Start playing the first track
audioPlayer.src = playlist[currentTrackIndex];
audioPlayer.play();