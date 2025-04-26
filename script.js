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
  