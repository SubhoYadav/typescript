const year = document.getElementById("year") as HTMLSpanElement
const thisYear:number = new Date().getFullYear()
year?.setAttribute("datetime", (thisYear as unknown) as string)
year.textContent = <string>(thisYear as unknown)