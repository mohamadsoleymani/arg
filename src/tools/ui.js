export const removeWaterMark = () => {
    const containersMain = document.querySelectorAll('.MuiDateRangeCalendar-root');
    containersMain.forEach((container) => {
      const x = container.children;
      if (x) {
        for (let i = 0; i < x.length; i++) {
          const y = x[i];
          if (y.innerHTML.includes('license')) {
            y.setAttribute('style', 'display: none');
            return;
          }
        }
      }
    });
    setTimeout(removeWaterMark, 1);
  };