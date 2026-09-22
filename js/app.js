// ASLAN RESTAURANT
// Romanian / English language system

document.addEventListener("DOMContentLoaded", async () => {
    const language = localStorage.getItem("aslanLanguage") || "ro";

    const translations = {
        ro: {
            "Home": "Acasă",
            "Menu": "Meniu",
            "About": "Despre noi",
            "Contact": "Contact",
            "AUTHENTIC TURKISH CUISINE": "BUCĂTĂRIE TURCEASCĂ AUTENTICĂ",
            "A warm dining experience inspired by authentic Turkish flavours, tradition and modern hospitality.": "O experiență culinară inspirată de aromele autentice ale bucătăriei turcești, tradiție și ospitalitate modernă.",
            "EXPLORE MENU": "DESCOPERĂ MENIUL",
            "FIND US": "UNDE NE GĂSEȘTI",
            "OUR MENU": "MENIUL NOSTRU",
            "Turkish Flavours": "Arome Turcești",
            "Breakfast": "Mic Dejun",
            "Traditional Turkish breakfast and morning favourites.": "Mic dejun tradițional turcesc și preparate de dimineață.",
            "Grills": "Grătare",
            "Authentic Turkish grill selections prepared with care.": "Selecții autentice de preparate turcești la grătar.",
            "Specialities": "Specialități",
            "Chef selections and traditional Turkish dishes.": "Selecții ale bucătarului și preparate tradiționale turcești.",
            "VIEW FULL MENU": "VEZI MENIUL COMPLET",
            "Modern Heritage": "Tradiție Modernă",
            "Aslan Restaurant brings the warmth and character of Turkish cuisine to Popești-Leordeni, combining authentic flavours with a modern and welcoming atmosphere.": "Aslan Restaurant aduce căldura și caracterul bucătăriei turcești în Popești-Leordeni, combinând aromele autentice cu o atmosferă modernă și primitoare.",
            "VISIT US": "VIZITEAZĂ-NE",
            "ADDRESS": "ADRESĂ",
            "PHONE": "TELEFON",
            "OPEN DAILY": "DESCHIS ZILNIC",
            "GOOGLE MAPS": "GOOGLE MAPS",
            "WHATSAPP": "WHATSAPP",
            "Authentic Turkish Cuisine · Popești-Leordeni": "Bucătărie Turcească Autentică · Popești-Leordeni"
        },
        en: {
            "Home": "Home",
            "Menu": "Menu",
            "About": "About",
            "Contact": "Contact",
            "AUTHENTIC TURKISH CUISINE": "AUTHENTIC TURKISH CUISINE",
            "EXPLORE MENU": "EXPLORE MENU",
            "FIND US": "FIND US",
            "OUR MENU": "OUR MENU",
            "Turkish Flavours": "Turkish Flavours",
            "Breakfast": "Breakfast",
            "Grills": "Grills",
            "Specialities": "Specialities",
            "VIEW FULL MENU": "VIEW FULL MENU",
            "Modern Heritage": "Modern Heritage",
            "VISIT US": "VISIT US",
            "ADDRESS": "ADDRESS",
            "PHONE": "PHONE",
            "OPEN DAILY": "OPEN DAILY",
            "GOOGLE MAPS": "GOOGLE MAPS",
            "WHATSAPP": "WHATSAPP",
            "Authentic Turkish Cuisine · Popești-Leordeni": "Authentic Turkish Cuisine · Popești-Leordeni"
        }
    };

    function translatePage() {
        const dictionary = translations[language];

        document.querySelectorAll("body *").forEach(element => {
            if (element.children.length === 0) {
                const original = element.textContent.trim();

                if (dictionary[original]) {
                    element.textContent = dictionary[original];
                }
            }
        });

        document.documentElement.lang = language;

        const button = document.getElementById("language-toggle");

        if (button) {
            button.textContent = language === "ro" ? "RO / EN" : "EN / RO";
        }
    }

    try {
        const response = await fetch(`./js/data/menu-${language}.json`);

        if (response.ok) {
            window.aslanMenuData = await response.json();
        }
    } catch (error) {
        console.error("Menü yükleme hatası:", error);
    }

    translatePage();

    const langButton = document.getElementById("language-toggle");

    if (langButton) {
        langButton.addEventListener("click", event => {
            event.preventDefault();

            const nextLanguage = language === "ro" ? "en" : "ro";

            localStorage.setItem("aslanLanguage", nextLanguage);

            window.location.reload();
        });
    }
});