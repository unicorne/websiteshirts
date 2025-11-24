// Redirect after 15 seconds to Survey B with ?rid=...&lang=...
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

  const targetSurvey = "https://unikoelnwiso.eu.qualtrics.com/jfe/form/SV_d4lL60IrQ3kvojQ";

  function startTimer() {
    const rid = getParam("Respondent_ID");
    const lang = getParam("Survey_Language");

    // If no rid → show message
    if (!rid) {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.innerHTML = "<h3>Missing Respondent ID. Please return to the first survey.</h3>";
      });
      return;
    }

    // Build redirect URL
    const params = new URLSearchParams();
    params.set("Respondent_ID", rid);

    if (lang) {
      params.set("Survey_Language", lang);
    }

    const redirectUrl = `${targetSurvey}?${params.toString()}`;

    // Start delayed redirect
    setTimeout(() => {
      window.location.replace(redirectUrl);
    }, 20000);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    startTimer();
  } else {
    document.addEventListener("DOMContentLoaded", startTimer);
  }
})();
