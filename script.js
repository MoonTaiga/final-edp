// Toggle fun facts
document.getElementById('toggleFactsBtn').addEventListener('click', () => {
    const facts = document.getElementById('funFacts');
    facts.style.display = (facts.style.display === 'none') ? 'block' : 'none';
  });
  
  // Contact form validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
  
    if (name && email && message) {
      $('#formMessage').fadeIn().delay(2000).fadeOut();
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // GitHub API Fetch
  $('#fetchGithub').on('click', function() {
    const username = $('#githubUsername').val();
    if (!username) return alert("Please enter a username.");
  
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      method: 'GET',
      success: function(data) {
        $('#githubResult').html(`
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p>
          <p><img src="${data.avatar_url}" width="100" /></p>
        `);
      },
      error: function() {
        $('#githubResult').html('<p>User not found</p>');
      }
    });
  });
  
  // jQuery UI
  $(function() {
    $("#datepicker").datepicker();
    $("#accordion").accordion();
  });
  document.getElementById('burgerBtn').addEventListener('click', function() {
    document.body.classList.toggle('sidebar-active');
    document.getElementById('mySidebar').classList.toggle('open');
  });
  
  // Handle menu item clicks
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      menuItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
      
      // On mobile, close sidebar after selecting an item
      if (window.innerWidth <= 768) {
        document.body.classList.remove('sidebar-active');
        document.getElementById('mySidebar').classList.remove('open');
      }
    });
  });