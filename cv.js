let ham = document.getElementById('hamm');

    
        function openMenu() {
            ham.classList.add('right-[0]');
        }

      
        function closeMenu() {
            ham.classList.remove('right-[0]');
        }

        // buat warna
        const textElement = document.getElementById("animated-text");

        
      
    
      
       
        const observer1 = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              textElement.classList.add("in-view");
            } else {
              textElement.classList.remove("in-view");
            }
          },
          { threshold: 0.1 }
        );
      
        observer.observe(textElement);
        
        
        
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                items: 1, 
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000, 
                autoplayHoverPause: true,
                
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
                
            });
        });

  // experience      
  AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true,  
    offset: 150   
  });
  
 