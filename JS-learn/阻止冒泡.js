function stopBubble(event){
    event=event||window.event;
    if (event&&event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble=true;
    }
}