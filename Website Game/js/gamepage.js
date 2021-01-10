window.sr = ScrollReveal({ reset: true });

sr.reveal('#stap1', { 
    duration: 1000,
    viewFactor: 0.2 
});
  
sr.reveal('#stap2', { 
  viewFactor: 0.2,
  origin: 'right', 
  duration: 2000 
});

sr.reveal('#stap3', { 
    viewFactor: 0.2,
    origin: 'right', 
    duration: 1000 
  });

sr.reveal('#form', { 
  viewFactor: 0.2,
  duration: 1000
});

/* form */

function validateemail() {
  var x = document.feedbackForm.mail.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
      alert("Geef een bestaand e-mail adres in alstublieft.");
      return false;
  } else {
      alert("Bedankt! Uw feedback is verzonden naar de maker.")
  }
}  



