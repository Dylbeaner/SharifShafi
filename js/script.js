
let darkmode = localStorage.getItem("darkmode")
const darkLight = document.getElementById("dark-light")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") {
    enableDarkMode()
}

darkLight.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active"? enableDarkMode() : disableDarkMode()
})
