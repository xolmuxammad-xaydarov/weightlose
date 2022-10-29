window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContents = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader');

 function hideTabsContent(){
  tabsContents.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show');
  });

  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
 }

 function showTabsContent(i = 0) {
  tabsContents[i].classList.add('show' , 'fade');
  tabsContents[i].classList.remove('hide');

  tabs[i].classList.add('tabheader__item_active');
 }

 hideTabsContent();
 showTabsContent();

 tabsParent.addEventListener('click', e => {
  const target = e.target;

  if(target && target.classList.contains('tabheader__item')){
    tabs.forEach((item,i) => {
      if(target == item) {
        hideTabsContent();
        showTabsContent(i);
      }
    });
  }
 })
});