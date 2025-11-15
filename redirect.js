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
      // Redirect to the external Qualtrics URL provided by the user. Preserve the
      // Qualtrics field token `${e://Field/ResponseID}` exactly as requested.
      window.location.replace('https://unikoelnwiso.eu.qualtrics.com/jfe/form/SV_etzF5oUkRRMQuSa?Q_R=${e://Field/ResponseID}');
    }, 15000);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    startTimer();
  } else {
    document.addEventListener('DOMContentLoaded', startTimer);
  }
})();
