 
 //  I used GSAP animation for rotating into 360 deg



 document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { rotate: 360, duration: 0.8 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotate: 0, duration: 0.8 });
    });
  });


//   ~ Aditya Mohite  adityamohite4973@gmail.com
