// Invisible redirect timer: after 15 seconds navigate to dummy.html
(function () {
  if (typeof window === 'undefined') return;

  var started = false;
  function startTimer() {
    if (started) return;
    started = true;
    // 15000 ms = 15 seconds
    setTimeout(function () {
      // Use location.replace so the back button won't return to the timed page
      window.location.replace('dummy.html');
    }, 15000);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    startTimer();
  } else {
    document.addEventListener('DOMContentLoaded', startTimer);
  }
})();
