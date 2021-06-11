function getInterval(start,end){
    let day,hour,minute,second,millisecond,interval;

    millisecond=(end-start)%1000;
    
    interval=(end-start)/1000;

    day=parseInt(interval/60/60/24);
    hour=parseInt(interval/60/60%24);
    minute=parseInt(interval/60%60);
    second=parseInt(interval%60);

    return {
        day,hour,minute,second,millisecond
    }
    
}