window.addEventListener('DOMContentLoaded', () => {

  // tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContents = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader');

  function hideTabsContent() {
    tabsContents.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabsContent(i = 0) {
    tabsContents[i].classList.add('show', 'fade');
    tabsContents[i].classList.remove('hide');

    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabsContent();
  showTabsContent();

  tabsParent.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2022-11-22';

  function getTimeRemain(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return{
          'total':t,
          'days':days,
          'hours':hours,
          'minutes':minutes,
          'seconds':seconds
    }
  }

  function getZero(num){
    if(num >= 0 && num < 10){
      return `0${num}`;
    }else{
      return num;
    }
  }

  function setClock (selector, endtime){
    let timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(update, 1000);

    update();

    function update(){
      let t = getTimeRemain(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0){
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

});