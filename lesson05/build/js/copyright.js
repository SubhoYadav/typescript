"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year === null || year === void 0 ? void 0 : year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
