document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {

    const target = Number(counter.getAttribute("data-target"));
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const value = Math.floor(progress * target);

      // Format numbers
      let formattedValue;

      if (target >= 100000) {
        formattedValue = Math.floor(value / 1000) + "K";
      } else {
        formattedValue = value.toString();
      }

      counter.innerText = formattedValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);

  });

});