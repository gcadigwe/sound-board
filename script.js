const sounds = ["beat1", "beat2", "beat3", "beat4", "beat5"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);
});
