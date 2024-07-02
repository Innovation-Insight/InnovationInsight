// Add event listener to the hamburger menu toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

//dropdown menu on and off phone
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const link = item.querySelector('a[href]');
        const dropdownMenu = item.querySelector('ul');

        if (link && !dropdownMenu) {
            window.location.href = link.href;
        } else if (dropdownMenu) {
            event.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });

    // Add hover event listener
    item.addEventListener('mouseover', (event) => {
        const dropdownMenu = item.querySelector('ul');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', (event) => {
        const dropdownMenu = item.querySelector('ul');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
});
// FAQ dropdown
function reveal(button) {
    var hiddenPart = button.parentElement.nextElementSibling;
    hiddenPart.classList.toggle('open');
}

//FLIPCARD INDEX
const flipToggles = document.querySelectorAll('.flip-toggle');

flipToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const flipcard = toggle.parentNode;
    flipcard.classList.toggle('flipped');
  });
});


//back to top button
// Get the button element
const backToTopButton = document.getElementById('back-to-top');

// Add an event listener to the button
backToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//LOGIN STUFF

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var data = {
      email: form.email.value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbynVlVEO9Z-EvX65sgjYud3ghf5qsKqkQ3Bc4j6hZGTZeRBqAe48vmCyJqoREN1fAoU/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        document.getElementById('message').textContent = ' Mulțumim pentru abonare!';
      } else if (data.result === 'duplicate') {
        document.getElementById('message').textContent = 'Adresa de email este deja înregistrată.';
      } else {
        document.getElementById('message').textContent = 'A fost o eroare. Vă rugăm să încercați din nou.';
      }
    })
    .catch(error => {
      document.getElementById('message').textContent = 'A fost o eroare. Vă rugăm să încercați din nou.';
    });
});

//Bilete
fetch('https://script.google.com/macros/s/AKfycbxSYU-SFC7kcqSRCTR9mh13t-SlkPT0ARghovERbj5qJVu6JRHwLp0OCo-3Xk0_giZO/exec')
.then(response => response.text())
.then(html => {
  const table = document.createElement('table');
  table.innerHTML = html;
  const links = table.querySelectorAll('td'); // Assuming the links are in the table cells
  const ticketsLink = document.getElementById('tickets-link');
  ticketsLink.textContent = links[0].textContent; // Update the link text
  ticketsLink.href = links[0].textContent; // Update the link href
});
