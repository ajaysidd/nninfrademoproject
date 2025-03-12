// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });


  //navbar hamburger
  const hamburger = document.getElementById('hamburger');
const navContent = document.getElementById('navContent');

hamburger.addEventListener('click', () => {
    navContent.classList.toggle('show'); // Toggle the 'show' class
});

// Close the nav content when clicking outside of it
window.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navContent.contains(event.target)) {
        navContent.classList.remove('show'); // Remove the 'show' class
    }
});

//dropdown  
     // JavaScript to keep dropdown open on click
     document.addEventListener("DOMContentLoaded", function() {
        const dropdown = document.getElementById("dropdown");

        dropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents closing when clicking inside
            this.classList.toggle("active"); // Toggle dropdown visibility
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function(event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });


    //about section


    document.addEventListener("DOMContentLoaded", function () {
        const headings = document.querySelectorAll(".about-content h1");

        headings.forEach((heading) => {
            heading.addEventListener("click", function () {
                const text = this.nextElementSibling;
                if (text.style.display === "block") {
                    text.style.display = "none"; // Hide if already visible
                } else {
                    document.querySelectorAll(".about-text").forEach((t) => (t.style.display = "none")); // Hide all first
                    text.style.display = "block"; // Show clicked one
                }
            });
        });
    });
   
    