
  const acordeonItems = document.querySelectorAll('.acordeon-item');

  acordeonItems.forEach(item => {
    const title = item.querySelector('.acordeon-title');

    const closeAll = () => {
      acordeonItems.forEach(i => i.classList.remove('active'));
    };

    title.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        closeAll();
        item.classList.add('active');
      }
    });

    title.addEventListener('mouseenter', () => {
      closeAll();
      item.classList.add('active');
    });
  });

