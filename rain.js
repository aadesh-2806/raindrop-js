function rain() {
    const img = document.querySelector('img');
    img.onload = function(){
        var rainyDay = new RainyDay({
            image: this,
            blur: 0
        })
        RainyDay.rain([
            [5,2,2]
        ],0)
    }
}
rain();