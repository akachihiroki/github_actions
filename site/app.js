const result = document.getElementById("result");
const sum = 2 + 3;

if (result) {
  result.innerHTML = `2 + 3 = <strong>${sum}</strong> を表示しています。<br />このページはGitHub Actionsでbuild後にデプロイされます。`;
}
