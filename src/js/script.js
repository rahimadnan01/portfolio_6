let main_icon = document.querySelector('#main-icon');
let nav_icon = document.querySelector(".mob-icon-li");
let nav_iconImage = document.querySelector(".mob-icon-li img");
let mobile_nav = document.querySelector(".mobile-nav");
let mobile_nav_anchor = document.querySelector(".mob-nav-theme");
let theme_icon = document.querySelectorAll(".nav-sun-li");
console.log(theme_icon);
let anchor_tags = document.querySelectorAll(".mobile-nav ul li a");
let skills_icons = document.querySelector("#express");
let skills_icons_2 = document.querySelector("#cypress");
let copyIcon = document.querySelectorAll("#copyIcon")
let CVbutton = document.querySelectorAll("#toggle-switch")
console.log(CVbutton)

let flag = 0;
nav_icon.addEventListener("click", () => {
  if (flag === 0) {
    mobile_nav.style.right = "0";
    nav_iconImage.src = "assets/cross-li.png";
    skills_icons.src = "assets/icon-express-png.png";
    skills_icons_2.src = "assets/icon-cypress-png.png";
    flag = 1;
  } else {
    mobile_nav.style.right = "-100vw";
    nav_iconImage.src = "assets/icon.png";
    skills_icons.src = "assets/icon-express-li.svg";
    skills_icons_2.src = "assets/icon-cypress-li.svg";
    flag = 0;
  }
});
theme_icon.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (flag == 0) {
      document.documentElement.classList.add("dark-theme");
      elem.src = "assets/moon-da.png";
      flag = 1;
    } else {
      document.documentElement.classList.remove("dark-theme");
      elem.src = "assets/sun-icon-li.png";
      flag = 0;
    }
  });
});
CVbutton.forEach((elem) => {
  elem.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/bibleofjs_by_sheryians - Shortcut.lnk'; 
    link.download = 'Rahim_CV.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
})



anchor_tags.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    mobile_nav.style.right = "-100vw";
    nav_iconImage.src = "assets/icon.png";
    flag = 0;
  });
});

document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

mobile_nav_anchor.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  theme_icon.forEach((elem) => {
    if (elem.src.includes("moon-da")) {
      elem.src = "assets/sun-icon-li.png";
    } else {
      elem.src = "assets/moon-da.png";
    }
  });
});

main_icon.addEventListener("click", ()=>{ 
 if(flag==0){
   skills_icons.src = "assets/icon-express-li.svg";
   skills_icons_2.src = "assets/icon-cypress-li.svg";
}else{
  skills_icons.src = "assets/icon-express-png.png";
  skills_icons_2.src = "assets/icon-cypress-png.png";
}
});

copyIcon[0].addEventListener('click', function() {
    const textToCopy = document.getElementById('text-To-Copy').innerText;
    const tempTextArea = document.createElement('textarea');
    
    // Set the text content to the textarea
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    
    // Select the text and copy it to the clipboard
    tempTextArea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea from the DOM
    document.body.removeChild(tempTextArea);
    
    alert('Text copied to clipboard!');
  });
copyIcon[1].addEventListener('click', function() {
    const textToCopy = document.getElementById('text-To-Copy-2').innerText;
    const tempTextArea = document.createElement('textarea');
    
    // Set the text content to the textarea
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    
    // Select the text and copy it to the clipboard
    tempTextArea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea from the DOM
    document.body.removeChild(tempTextArea);
    
    alert('Text copied to clipboard!');
  });
