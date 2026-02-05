const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const nextBtn = document.getElementById("next");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

/* PAGE 1 → PAGE 2 */
nextBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

/* NO BUTTON RUNS AROUND */
const noTexts = [
  "NO 🙈",
  "Wait 😳",
  "Hey 😭",
  "Think again 🥺",
  "Nice try 😌",
  "Not happening 😅"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
});

/* YES CLICK → PAGE 3 */
yesBtn.addEventListener("click", () => {
  music.volume = 0.35;
  music.play();

  card.innerHTML = `
    <h1>Okay okay 😌💖</h1>

    <img src="kitty.png" class="kitty">

    <p>
      Solid choice.<br><br>
      <strong>You look great as my Valentine.</strong>
    </p>

    <p style="font-size:14px;">
      Screenshot this — I’ll need evidence 💕
    </p>

    <p style="font-size:12px; opacity:0.7;">
      (final verdict loading… 👀)
    </p>
  `;

  setTimeout(showMogambo, 2200);
});

/* PAGE 4: MOGAMBO */
function showMogambo() {
  card.innerHTML = `
    <h1>FINAL VERDICT 😄</h1>

    <img src="mogambo.png" class="mogambo">

    <p style="font-size:18px; font-weight:bold; margin-top:12px;">
      Mogambo khush hua.
    </p>

    <p style="font-size:12px; opacity:0.7;">
      (reward unlocked… 😏)
    </p>
  `;

  setTimeout(showCoupon, 2200);
}

/* PAGE 5: COUPON (LAST PAGE) */
function showCoupon() {
  card.innerHTML = `
    <h1>🎁 Reward Unlocked</h1>

    <img src="Coupon.png" style="
      width: 260px;
      margin: 18px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    ">

    <p style="margin-top:16px;">
      <strong>You are rewarded with this exclusive coupon</strong><br>
      as your <strong>first gift</strong> 😌
    </p>

    <p style="font-size:12px; opacity:0.6; margin-top:10px;">
      Terms & conditions apply. Valentine must be present 😉
    </p>
  `;
}
