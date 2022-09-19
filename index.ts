const ATTR_PROP_NAME = "wb-date";
const ATTR_YEAR_VAL_NAME = "year";

document.addEventListener("DOMContentLoaded", () => {
  const dateEls = document.querySelectorAll<HTMLElement>(`[${ATTR_PROP_NAME}]`);
  if (!dateEls) return;

  const todaysDate = new Date();

  dateEls.forEach((dateEl) => {
    if (dateEl.getAttribute(ATTR_PROP_NAME) === ATTR_YEAR_VAL_NAME) {
      // this one wants the current year
      dateEl.textContent = todaysDate.getFullYear().toString();
    }
  });
});
