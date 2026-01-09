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
      const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Villafuerte;Erick;Yosorez;;;
FN:Erick Yosorez Villafuerte
TITLE:HR Specialist
ORG:Addleman
TEL;TYPE=CELL:09633621187
TEL;TYPE=VIBER:09633621187
TEL;TYPE=WHATSAPP:09633621187
EMAIL:eyr.addleman@gmail.com
ADR;TYPE=Home:;;Street Address;City;Province;Postal Code;Philippines
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Erick_Yosorez_Villafuerte.vcf";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
    // alert("Contact saved!");
// }