const accordionItemHeaders = document.querySelectorAll(".acc-item-header");
const accordionItemBodyContent = document.querySelectorAll(".acc-item-body-content");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", e => {
        const activeItem = document.querySelector(".acc-item-header.active");
        if(activeItem && activeItem !== accordionItemHeader) {
            activeItem.classList.toggle("active");
            activeItem.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
            accordionItemBody.style.paddingBottom = "0px";
        }
    });
})