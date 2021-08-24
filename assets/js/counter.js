let counters = document.querySelectorAll('.works__suptitle');
let speed = 2200;

let elem = document.querySelector('.works__col');

  window.addEventListener('scroll', function(){
    let posElem = elem.offsetTop;
    let windowH = Math.ceil(window.pageYOffset + innerHeight / 3);

      counters.forEach(counter => {
        let fl = false;
        let updCount = () => {
          let target = +counter.getAttribute('data-count');
          let count = +counter.innerText;
      
          let inc = target / speed;
      
          if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updCount, 1);
          } else{
            count.innerText = target;
          }
        }

        if(posElem < windowH + 200){
          updCount();
        }
      })
  })