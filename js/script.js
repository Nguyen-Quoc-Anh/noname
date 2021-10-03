if (window.screen.availWidth < 500) {
    alert("Vào bằng máy tính đê bạn ơi. Giao diện trên máy tính đỉnh cao vl. Mà mình cũng chưa tối ưu cho điện thoại quá tốt. Nhấn OK để tiếp tục xem.");
}



const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log("ok");
arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 350);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 350}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});





const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.move-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-title,.nav-button");
ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
});


const tempButtons = document.querySelectorAll(".nav-button,.slide-button");
tempButtons.forEach((tempButton) => {
    tempButton.addEventListener("click", function(event){
        event.preventDefault();   
        alert("Để nút cho vui thôi chứ chưa có chức năng đâu :)");
    });
});

if (window.screen.availWidth > 1024) {  
    const leftIcons = document.querySelectorAll(".left-menu-icon");
    leftIcons[0].style.marginTop = "20px";
    leftIcons[0].style.paddingRight = "15px";
    leftIcons[0].style.paddingLeft = "15px";
    leftIcons[3].style.paddingRight = "18px";
    leftIcons[3].style.paddingLeft = "18px";
    leftIcons[5].style.paddingRight = "18px";
    leftIcons[5].style.paddingLeft = "18px";
}

if (window.screen.availWidth < 400){
    const leftIcons = document.querySelectorAll(".left-menu-icon");
    leftIcons[2].style.paddingLeft = "7px";
    leftIcons[2].style.paddingRight = "7px";
}

const partImg = document.querySelector(".part");
partImg.style.height = "80vh";