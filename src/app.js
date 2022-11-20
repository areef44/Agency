//icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");


//theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//icon toogling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

//initial check theme
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};


//manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();
}

//call theme swicth on clicking button
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

//invoke theme check on initial load
themeCheck();



//Navbar Responsive
// function Menu(e){
//     let list = document.querySelector('ul');

//     e.name === 'grid-outline' ? ( e.name = "close",list.classList.
//     add('top-[80px]') , list.classList.add('opacity-100'))
//     : ( e.name = "grid-outline" , list.classList.remove('top-[80px]'),
//     list.classList.remove('opacity-100'))
// }

//Navbar responsive opsi kedua
document.querySelector('#navbar_toggle').addEventListener('click', () => document.querySelector('#navbar_menu').classList.toggle('active'))