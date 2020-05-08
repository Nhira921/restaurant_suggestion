'use strict';
{
  const menuBtn = document.getElementById('menu-btn');
  const cover = document.getElementById('cover');

  menuBtn.addEventListener('click',()=>{
    document.body.classList.toggle('menu-open');
  });
  cover.addEventListener('click',()=>{
    document.body.classList.toggle('menu-open');
  });
}
