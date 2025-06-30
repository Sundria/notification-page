const statusAtivos = document.querySelectorAll('.status-active');
const imageComment = document.querySelector('.kimberli');
const comment = document.querySelector('.comment-single');

statusAtivos.forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'hsl(219, 12%, 42%)'
    });
});

comment.addEventListener('click', () => {
    comment.style.backgroundColor = 'white';
    comment.classList.add('active')
})

imageComment.addEventListener('click', () => {
    imageComment.style.border = '3px solid hsl(0, 0%, 100%)'
})

function checkAll() {
    comment.style.backgroundColor = 'white';
    comment.classList.add('active')
    statusAtivos.forEach(el => {
        el.style.color = 'hsl(219, 12%, 42%)'
    })
    imageComment.style.border = '3px solid hsl(0, 0%, 100%)'
    document.querySelector('.check-all').style.color = 'hsl(219, 12%, 42%)'
}