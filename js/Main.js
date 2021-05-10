function show() {
    document.getElementById("dropdownContent").classList.toggle("visible")
}
window.onload = function() {
    document.getElementById("showDropdownButton").addEventListener("click", show)
}
