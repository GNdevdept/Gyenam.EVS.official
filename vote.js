const VALID_CODE = "GNsingertest-1";

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const msg = document.getElementById("codeMsg");

  if (input !== VALID_CODE) {
    msg.innerText = "유효하지 않은 코드입니다";
    return;
  }

  if (localStorage.getItem(`voted_${VALID_CODE}`)) {
    msg.innerText = "이미 투표하셨습니다";
    return;
  }

  document.getElementById("code-screen").classList.add("hidden");
  const vote = document.getElementById("vote-screen");
  vote.classList.remove("hidden");
  vote.classList.add("slide-up");
}

function vote(num) {
  const msg = document.getElementById("voteMsg");
  localStorage.setItem(`voted_${VALID_CODE}`, true);
  msg.innerText = `${num}번에 투표 완료! 🎉`;
  msg.style.color = "#a7f3d0";

  document.querySelectorAll(".grid button").forEach(b => {
    b.disabled = true;
    b.style.opacity = 0.5;
  });
}
