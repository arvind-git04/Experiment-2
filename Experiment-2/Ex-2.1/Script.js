function func1() {
  let t = document.getElementById("userText");
  let c = t.value.length;

  if (c > 150) {
    t.value = "";
    document.getElementById("counter").innerText = 0;
  } else {
    document.getElementById("counter").innerText = c;
  }
}
