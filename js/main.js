const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const linefont = document.querySelector("#linefont");
const colorOverlay = document.querySelector("#colorOverlay");
const year = document.querySelector("#year");

const hoverables = document.querySelectorAll("[hoverable]");



cursor.style.setProperty("--size", `10px`);

year.innerText = new Date().getFullYear();

document.addEventListener("mousemove", (evt) => {
  const x = evt.clientX;
  const y = evt.clientY;

    moveCursor(evt, cursor)

  //   divede the screen in 7 segments of the widht and apply color, use a switch
  if (x < window.innerWidth / 7) {
    // document.body.style.backgroundColor = "red";
    gsap.to(body, { backgroundColor: "#e81416", duration: 0.5 });
    gsap.to(linefont, { color: "#e81416", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#e81416", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 2) {
    // document.body.style.backgroundColor = "orange";
    gsap.to(body, { backgroundColor: "#ffa500", duration: 0.5 });
    gsap.to(linefont, { color: "#ffa500", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#ffa500", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 3) {
    // document.body.style.backgroundColor = "yellow";
    gsap.to(body, { backgroundColor: "#faeb36", duration: 0.5 });
    gsap.to(linefont, { color: "#faeb36", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#faeb36", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 4) {
    // document.body.style.backgroundColor = "green";
    gsap.to(body, { backgroundColor: "#79c314", duration: 0.5 });
    gsap.to(linefont, { color: "#79c314", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#79c314", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 5) {
    // document.body.style.backgroundColor = "blue";
    gsap.to(body, { backgroundColor: "#487de7", duration: 0.5 });
    gsap.to(linefont, { color: "#487de7", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#487de7", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 6) {
    // document.body.style.backgroundColor = "indigo";
    gsap.to(body, { backgroundColor: "#4b369d", duration: 0.5 });
    gsap.to(linefont, { color: "#4b369d", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#4b369d", duration: 0.5 });
  } else if (x < (window.innerWidth / 7) * 7) {
    // document.body.style.backgroundColor = "violet";
    gsap.to(body, { backgroundColor: "#70369d", duration: 0.5 });
    gsap.to(linefont, { color: "#70369d", duration: 0.5 });
    gsap.to(colorOverlay, { backgroundColor: "#70369d", duration: 0.5 });
  }
});

document.addEventListener("scroll", (evt) => {
   moveCursor(evt, cursor)
});


  const moveCursor = (e, cursor) => {
    // console.log(e)
    console.log(window.scrollY)
    const mouseY = e.clientY + window.scrollY;
    const mouseX = e.clientX + window.scrollX;
    cursor.style.transform = `translate3d(${mouseX - 20}px, ${
      mouseY - 20
    }px, 0)`;
  };


hoverables.forEach((hoverable) => {
    if(hoverable.getAttribute("hoverable") == ''){
        hoverable.addEventListener("mouseenter", () => {
            // cursor.style.setProperty("--size", `0px`);
            gsap.to(cursor, {width: `0px`, duration: 0.1 });
        })
        hoverable.addEventListener("mouseleave", () => {
            // cursor.style.setProperty("--size", `10px`);
            gsap.to(cursor, {width: `10px`, duration: 0.1 });
        })
    }else {
        hoverable.addEventListener("mouseenter", () => {
            // cursor.style.setProperty("--size", `20px`);
            gsap.to(cursor, {width: `100px`, duration: 0.3 });
            cursor.setAttribute("text", hoverable.getAttribute("hoverable"));

        })
        hoverable.addEventListener("mouseleave", () => {
            // cursor.style.setProperty("--size", `10px`);
            gsap.to(cursor, {width: `10px`, duration: 0.3 });
            cursor.setAttribute("text", "");


        })
    }
})


