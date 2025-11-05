const drawer = document.getElementById('drawer');
const drawerContent = document.getElementById('drawerContent');
let expanded = false;

drawerContent.style.overflowY = 'auto';

drawerContent.addEventListener('scroll', () => {
  const scrollTop = drawerContent.scrollTop;

  if (scrollTop > 20 && !expanded) {
    expanded = true;
    drawer.style.height = '100vh';
    drawer.style.bottom = '0';
  }

  if (scrollTop <= 5 && expanded) {
    expanded = false;
    drawer.style.height = '65vh';
  }
});