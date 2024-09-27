
const inactivityTimeout = 7200000 ; // 2 hour
      
// reload the page
const reloadPage = () => {
  location.reload(true); 
};

let inactivityTimer;

// reset the inactivity timer
const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(reloadPage, inactivityTimeout);
};

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);

// Initial call of the inactivity timer
resetInactivityTimer();