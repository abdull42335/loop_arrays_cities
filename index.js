let cities = [
    "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
    "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
    "Islamabad", "Sialkot", "Bahawalpur", "Sukkur",
    "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
    "Mirpur Khas", "Chiniot", "Okara"
];
var mess = document.getElementsByClassName('message')[0]
// console.log({mess})


function func() {
    for (let i = 0; i <= cities.length; i++) {
        if (cities[i] == 'Islamabad') {
            alert("Islamabad is the cleanest city of Pakistan!")
            mess.textContent = ("𓂀 ℍ𝕖𝕝𝕝𝕠 𝕎𝕖𝕝𝕝ℂ𝕠𝕞𝕖 𝕥𝕠 𝕀𝕤𝕝𝕒𝕞𝕒𝕓𝕒𝕕 𓂀")
            // mess.style.color="red"

        }

    }

    
}

document.getElementById("btn").addEventListener("click", func)