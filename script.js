function saveContact(){
    const saveButton = document.getElementsByClassName("save-contact")[0];
    saveButton.innerText = "Saving...";
    saveButton.disabled = true;
    saveButton.style.backgroundColor = "#96b9e9";
    setTimeout(() => {
        saveButton.innerText = "Saved!";
        saveButton.style.backgroundColor = "#3a7bd5";
    }, 2000);
}
    // alert("Contact saved!");
// }