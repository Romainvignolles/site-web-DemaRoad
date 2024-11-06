document.querySelectorAll('.groupe div').forEach(item => {

    item.addEventListener('touchstart', () => {

      item.classList.toggle('active');
    });
  

    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });