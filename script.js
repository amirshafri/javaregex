function runTest() {
  const pattern = document.getElementById("regexInput").value;
  const testString = document.getElementById("testString").value;

  let resultOutput = "";
  let javaCodeOutput = "";

  try {
    const regex = new RegExp(pattern, "g");
    const matches = [...testString.matchAll(regex)];

    if (matches.length === 0) {
      resultOutput = "No matches found.";
    } else {
      resultOutput = matches.map((m, i) => `Match ${i + 1}: ${m[0]} (index ${m.index})`).join("\n");
    }

    javaCodeOutput = `Pattern pattern = Pattern.compile("${pattern.replace(/\\/g, '\\\\')}");\nMatcher matcher = pattern.matcher(input);`;

  } catch (e) {
    resultOutput = "Invalid regex pattern.";
    javaCodeOutput = "";
  }

  document.getElementById("matchResult").innerText = resultOutput;
  document.getElementById("javaCode").innerText = javaCodeOutput;
}
