const videolist = [
    {
        video: 'video/counting.mp4',
        title: 'Counting'
    },
    {
        video: 'video/eating_dog.mp4',
        title: 'Eating dog'
    },
    {
        video: 'video/mirror_dog.mp4',
        title: 'Mirror dog'
    },
    {
        video: 'video/curious_dog.mp4',
        title: 'Curious dog'
    },
    {
        video: 'video/snow_dog.mp4',
        title: 'Snow dog'
    }
]

const categories = [...new Set(videolist.map((item) => {return item}))];
document.querySelector('#videolist').innerHTML = categories.map((item) => {
    let { video, title} = item;
    return (
        `<div class="list active">
        <video src=${video} class="list-video"></video>
        <h3 class="list-title">${title}</h3>
        </div>`
    )
}).join('');

let videoslist = document.querySelectorAll('.video-list-container .list');
videoslist.forEach(remove => {remove.classList.remove('active')});
videoslist.forEach(vid => {
    vid.onclick = () => {
        videoslist.forEach(remove => {remove.classList.remove('active')});
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
});