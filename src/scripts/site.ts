// ABOUTME: Wires the landing page's copy buttons to the clipboard.
// ABOUTME: Each button copies its data-copy text and briefly confirms on its own label.
document.querySelectorAll<HTMLButtonElement>("button[data-copy]").forEach((button) => {
  const label = button.textContent;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? "");
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }
    window.setTimeout(() => (button.textContent = label), 1600);
  });
});
