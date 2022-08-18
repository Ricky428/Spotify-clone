let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let play = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songInfoTitle = document.getElementById('songInfoTitle');
let songList = Array.from(document.getElementsByClassName('songName'));

let songs = [
    
        {songName: "Pasoori - Ali Sethi x Shae Gill", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Peaches - Diljit Dosanjh", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "Taur Jattan di - Dilpreet D", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Allah Maaf Kare - Amrit Maan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Dubda Suraj - Amrinder Gill", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: "Mere Warga by Kaka", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: "Pehli Mulaqat by Gurnam Bhullar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: "Excuses - AP Dhillon", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: "Kabil", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
        {songName: "Waalian - Harnoor", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
    
]

songs.forEach((item,i)=> {
    
    document.getElementsByTagName('img')[i].src = songs[i].coverPath;
    
    document.getElementsByClassName('songName')[i].innerText = songs[i].songName;
})

play.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <=0) {
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songInfoTitle.innerText = songs[songIndex].songName;
         audioElement.play();
         play.classList.remove('fa-play-circle');
         play.classList.add('fa-pause-circle');
         gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((item)=> {
        item.classList.remove('fa-circle-play');
        item.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((item)=> {
    item.addEventListener('click', (event)=> {
        
        makeAllPlay();
        songIndex = parseInt(event.target.id);
        event.target.classList.remove('fa-circle-play');
        event.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`
        songInfoTitle.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songInfoTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songInfoTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})