// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Back-to-Top Button (Optional)
  const backToTop = document.createElement('button');
  backToTop.innerText = '↑';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 50%;
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
  `;
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Mobile Menu Toggle
  const mobileMenu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('header nav');
  
  mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
  