// Redirect after 15 seconds to Survey B with ?rid=...
(function () {
  if (typeof window === 'undefined') return;

  function getParam(name) {
    try {
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
    } catch (e) {
      return null;
    }
  }

  const targetSurvey = "https://unikoelnwiso.eu.qualtrics.com/jfe/form/SV_d4Ll60IrQ3kvojQ";

  function startTimer() {
    const rid = getParam("rid");

    // If no rid → show message
    if (!rid) {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.innerHTML = "<h3>Missing Respondent ID. Please return to the first survey.</h3>";
      });
      return;
    }

    // Start delayed redirect
    setTimeout(() => {
      const redirectUrl = `${targetSurvey}?rid=${encodeURIComponent(rid)}`;
      window.location.replace(redirectUrl);
    }, 15000);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    startTimer();
  } else {
    document.addEventListener("DOMContentLoaded", startTimer);
  }
})();
