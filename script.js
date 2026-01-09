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
PHOTO;ENCODING=b;TYPE=PNG:${avatar}
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
async function getImageBase64(path) {
  const response = await fetch(path);
  const blob = await response.blob();
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Remove the "data:image/jpeg;base64," prefix
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

    // alert("Contact saved!");
// }