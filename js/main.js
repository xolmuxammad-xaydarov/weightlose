const parentBlock = document.querySelector('.container'),
  tabContents = document.querySelectorAll('.item'),
  tabsParent = document.querySelector('.tabs'),
  tabs = document.querySelectorAll('.tabheader__item');
function hideTabsContent() {
  tabContents.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show');
  });

  tabs.forEach(tab => {
    tab.classList.remove('back');
  });
}
function showTabsContent(i = 0) {
  tabContents[i].classList.add('show');
  tabContents[i].classList.remove('hide');

  tabs[i].classList.add('back');
}
hideTabsContent();
showTabsContent();
tabsParent.addEventListener('click', e => {
  let targetEl = e.target;

  if (targetEl && targetEl.classList.contains('tabheader__item'))
    tabs.forEach((item, i) => {
      if (targetEl == item) {
        hideTabsContent();
        showTabsContent(i);
      }
    });
});
