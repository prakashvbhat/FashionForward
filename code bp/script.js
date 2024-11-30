document.getElementById("get-suggestions").addEventListener("click", () => {
    const results = document.getElementById("results");
    results.innerHTML = `
      <h3>Style Suggestions:</h3>
      <ul>
        <li>Color Recommendation: Pastels and gold work best with your skin tone.</li>
        <li>Suggested Outfit: A-line dress with ankle boots.</li>
        <li>Accessories: Statement earrings and a clutch bag.</li>
      </ul>
    `;
  });
  