let strong = document.querySelectorAll(".box-beauty__box strong");
console.log(strong[0].innerHTML);

const counter = (e, index, tg) => {
  let count = 0;
  const u = setInterval(() => {
    strong[index].innerHTML = count;
    if(count == e) {
      clearInterval(u);
    }
    count++;
  }, tg);
}
let tt = "ok";
window.addEventListener("scroll", (event) => {
  let location = this.scrollY;
  if(location > 3350) {
    if(tt == "ok") {
      tt = "ko ok";
      counter(126, 0, 10);
      counter(63, 1, 20);
      counter(18, 2, 40);
      counter(27, 3, 30);
      console.log(tt);
    }
  }
})