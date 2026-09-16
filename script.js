function nextPage() {
    document.getElementById("opening").classList.remove("active");
    document.getElementById("two-years").classList.add("active");
}

function goToPage(pageId) {
    document.querySelector(".page.active").classList.remove("active");
    document.getElementById(pageId).classList.add("active");
}