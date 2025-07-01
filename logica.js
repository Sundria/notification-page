const notifications = document.querySelectorAll('.notificacao-single.active');
const countSpan = document.querySelector('.count');

function updateCount() {
    const remaining = document.querySelectorAll('.notificacao-single.active').length;
    countSpan.innerText = remaining;
    if (remaining === 0) {
        countSpan.classList.remove('count')
        countSpan.innerText = '';
    }
}

notifications.forEach(notification => {
    console.log(notification);

    const iconRed = notification.querySelector('.icon-red');

    notification.addEventListener('click', (e) => {
        e.preventDefault();

        if (notification.classList.contains('active')) {
            notification.classList.remove('active');
            if (iconRed) iconRed.classList.remove('icon-red');
            updateCount();
        }
    });
});

function checkAll() {
    notifications.forEach(notification => {
        const iconRed = notification.querySelector('.icon-red');
        if (notification.classList.contains('active')) {
            notification.classList.remove('active');
            if (iconRed) iconRed.classList.remove('icon-red');
            updateCount();
        }
    });
}