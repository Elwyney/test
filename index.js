const btn = document.querySelectorAll('.btn-main');
const content = document.querySelectorAll('.wrap-block');

btn.forEach((e,index) => {
    e.addEventListener('click',function(){
        btn.forEach(i => {
            i.classList.remove('btn-active');
        });
        foo(index)
        e.classList.add('btn-active');
    });
});

function foo(index) {
    content.forEach(e => e.classList.add('hide'));
    content[index].classList.remove('hide');
}




