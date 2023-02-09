
const showOverlay = (ele) => {
    const srcUrl = ele.children[0].src;

    let imageOverlay = document.getElementsByClassName("image-overlay")[0];
    let imageOverlayImage = imageOverlay.children[0];

    imageOverlayImage.src = srcUrl;
    imageOverlay.style.visibility = "visible";
    
    document.body.style.overflow = "hidden";
};

const hideOverlay = () => {
    let imageOverlay = document.getElementsByClassName("image-overlay")[0];
    imageOverlay.style.visibility = "hidden";

    document.body.style.overflow = "visible";
};

