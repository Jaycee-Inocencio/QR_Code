function saveContact(){
    const saveButton = document.getElementsByClassName("save-contact")[0];
    saveButton.innerText = "Saving...";
    saveButton.disabled = true;
    saveButton.style.backgroundColor = "#96b9e9";
    saveFile();
    setTimeout(() => {
        saveButton.innerText = "Saved!";
        saveButton.style.backgroundColor = "#3a7bd5";
    }, 2000);
}
function saveFile(){
    const nameElement =  document.getElementsByClassName("name")[0].textContent;
    const name = nameElement.replace(/ /g, "_") || "Unknown_Contact";
    const imagePath = "IMG_0887.jpeg";
    const avatar = getImageBase64(imagePath);
    const chunkedBase64 = avatar.match(/.{1,76}/g).join("\r\n ");
     const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Villafuerte;Erick;Yosorez;;;
FN:${name}
TITLE:HR Specialist
ORG:Addleman
TEL;TYPE=CELL:09633621187
TEL;TYPE=VIBER:09633621187
TEL;TYPE=WHATSAPP:09633621187
EMAIL:eyr.addleman@gmail.com
ADR;TYPE=HOME:;;Street Address;City;Province;Postal Code;Philippines
PHOTO;ENCODING=b;TYPE=JPEG:${chunkedBase64}
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.vcf`;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
function getImageBase64(path) {
    return new Promise((resolve, reject) => {
        fetch(path)
            .then(res => res.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result.split(',')[1]; // remove data:image/...;base64,
                    resolve(base64String);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            })
            .catch(reject);
    });
}