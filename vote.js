const VALID_CODE = "GNsingertest-1";

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const msg = document.getElementById("codeMsg");

  if (input !== VALID_CODE) {
    msg.innerText = "❌ 유효하지 않은 투표 코드입니다";
    return;
  }

  if (localStorage.getItem(`voted_${VALID_CODE}`)) {
    msg.innerText = "이미 이 투표에 참여하셨습니다";
    return;
  }

  document.getElementById("code-screen").classList.add("hidden");
  document.getElementById("vote-screen").classList.remove("hidden");
}

function vote(number) {
  const msg = document.getElementById("voteMsg");
  localStorage.setItem(`voted_${VALID_CODE}`, "true");
  msg.style.color = "green";
  msg.innerText = `${number}번에 투표 완료 🎉`;

  document.querySelectorAll(".options button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.5;
  });
}
