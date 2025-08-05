const projects = [
    {
        img: 'assets/images/pfp.jpg',
        alt: 'Portfolio Website',
        link: 'https://github.com/yourusername/portfolio-website',
        title: 'Portfolio Website'
    },
    {
        img: 'assets/images/pic1.jpg',
        alt: 'Todo App',
        link: 'https://github.com/yourusername/todo-app',
        title: 'Todo App'
    },
    {
        img: 'assets/images/pic2.jpg',
        alt: 'Smart Scheduler',
        link: 'https://github.com/yourusername/smart-scheduler',
        title: 'Smart Scheduler'
    }
];

let current = 0;
const image = document.getElementById('project-image');
const link = document.querySelector('.gallery-link');
const title = document.querySelector('.project-title');

document.querySelector('.gallery-nav.left').onclick = () => {
    current = (current - 1 + projects.length) % projects.length;
    updateGallery();
};
document.querySelector('.gallery-nav.right').onclick = () => {
    current = (current + 1) % projects.length;
    updateGallery();
};

function updateGallery() {
    image.src = projects[current].img;
    image.alt = projects[current].alt;
    link.href = projects[current].link;
    title.textContent = projects[current].title;
}

updateGallery();