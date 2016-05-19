var adConfig = {
    "timeUntilAutoCollapse": "0", //miliseconds, use 0 for no autocollapse
    "cancelAutoCollapseOnUserInteraction": true,
    "lockScrollingWhenExpanded": true,
    "isDraggable":true,
    "autoSpinInterval":8000  //miliseconds
};

////////Funciones comunes, NO ELIMINAR!!!!!!!!////////////////////

function initEB(){
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	}else {
		startAd();
	}
}

function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

function allowPageScrolling() {
    document.removeEventListener("touchmove", stopScrolling);
}

function removeAd() {
    document.getElementById("ad").style.display = "none";

    var message = {
        adId: getAdID(),
        type: "removeAd"
    };

    window.parent.postMessage(JSON.stringify(message), "*");
}

function preventPageScrolling() {
    document.addEventListener("touchmove", stopScrolling);
}

function stopScrolling(event) {
    event.preventDefault();
}

window.addEventListener("load", initEB);
///////////////////////////////////////////////////////////////////