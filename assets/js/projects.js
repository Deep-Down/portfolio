        const projects = [
            {
                img: 'assets/images/portfolio-website.png',
                alt: 'Portfolio Website',
                link: 'https://github.com/yourusername/portfolio-website'
            },
            {
                img: 'assets/images/todo-app.png',
                alt: 'Todo App',
                link: 'https://github.com/yourusername/todo-app'
            },
            {
                img: 'assets/images/smart-scheduler.png',
                alt: 'Smart Scheduler',
                link: 'https://github.com/yourusername/smart-scheduler'
            }
        ];
        let current = 0;
        const image = document.getElementById('project-image');
        const link = document.querySelector('.gallery-link');
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
        }