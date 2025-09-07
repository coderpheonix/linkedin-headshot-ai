async function generateHeadshotClient(file: File, background: string, outfit: string) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const base64: string = await new Promise((resolve, reject) => {
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = (err) => reject(err);
  });

  const resp = await fetch("/api/headshot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      imageBytes: base64,
      mimeType: file.type,
      background,
      outfit,
    }),
  });
  const data = await resp.json();
  return data.image; // data URL of the generated image
}
