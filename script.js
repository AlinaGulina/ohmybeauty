const scroll = document.querySelectorAll ('a[href^="#"]');
for (let i=0; i<scroll.length; i++)

    scroll[i].onlick = function()
{
    document.getElementById(scroll[i].getAttribute('href')).scrollIntoView({behavior: "smooth"});
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('btn-eye');
    const targetElement = document.getElementById('eye');
   
    scrollButton.addEventListener('click', function() {
     // Получаем позицию элемента относительно окна
     const rect = targetElement.getBoundingClientRect();
   
     // Вычисляем позицию с отступом
     const scrollPosition = rect.top + window.pageYOffset - 110;
   
   
     window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
     });
    });
   });

   document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('btn-lips');
    const targetElement = document.getElementById('lips');
   
    scrollButton.addEventListener('click', function() {
     // Получаем позицию элемента относительно окна
     const rect = targetElement.getBoundingClientRect();
   
     // Вычисляем позицию с отступом
     const scrollPosition = rect.top + window.pageYOffset - 110;
   
   
     window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
     });
    });
   });

   document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('btn-face');
    const targetElement = document.getElementById('face');
   
    scrollButton.addEventListener('click', function() {
     // Получаем позицию элемента относительно окна
     const rect = targetElement.getBoundingClientRect();
   
     // Вычисляем позицию с отступом
     const scrollPosition = rect.top + window.pageYOffset - 110;
   
   
     window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
     });
    });
   });

   
   
   document.addEventListener('DOMContentLoaded', function() {
    const buyLinks = document.querySelectorAll('.buy');
    const countElement = document.querySelector('.count');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0; // Загружаем из localStorage или устанавливаем 0 по умолчанию
  
    countElement.textContent = cartCount; // Отображаем текущее количество
  
    // Добавляем обработчики событий для всех ссылок "Купить"
    buyLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        cartCount++;
        countElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount); // Сохраняем в localStorage
        event.preventDefault();
      });
    });

    
    class ShoppingCart {
        constructor(cartContainerId) {
            this.cartContainer = document.getElementById(cartContainerId);
            if (!this.cartContainer) {
                throw new Error(`Element with ID "${cartContainerId}" not found.`);
            }
            this.countElement = document.querySelector('.count');
            this.initEventListeners();
            this.updateCount();
        }

        initEventListeners() {
            this.cartContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('remove')) {
                    this.removeItem(event.target);
                }
            });
        }

        removeItem(button) {
            const itemToRemove = button.closest('.element');
            if (itemToRemove) {
                this.cartContainer.removeChild(itemToRemove);
                this.updateCount();
            }
        }

        updateCount() {
            cartCount = this.cartContainer.querySelectorAll('.element').length; // Count items
            countElement.textContent = cartCount;
            localStorage.setItem('cartCount', cartCount);
        }
    }


    // Example usage:
    const cart = new ShoppingCart('cart-container'); // cart-container is the ID of the container
  });

  document.addEventListener('DOMContentLoaded', function() {
    const loginColumn = document.getElementById('loginColumn');
    const registerColumn = document.getElementById('registerColumn');
    const registerLink = document.createElement('a');
    registerLink.href = '#';
    registerLink.textContent = 'Регистрация';
    registerLink.classList.add('register-link');
    loginColumn.querySelector('form').insertAdjacentElement('afterend', registerLink);
    const passwordError = document.getElementById('passwordError');
    const registerForm = document.getElementById('registerForm');
  
    registerLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginColumn.classList.add('hidden');
      registerColumn.classList.remove('hidden');
    });
  
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const regPassword = document.getElementById('regPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (regPassword !== confirmPassword) {
        passwordError.classList.remove('hidden');
      } else {
        // Здесь нужно добавить код для отправки данных на сервер
        alert('Регистрация успешна!'); // Замените на реальную обработку регистрации
      }
    });
  });
