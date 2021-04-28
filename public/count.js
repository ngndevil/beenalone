// Function calculate your FA time
// And it render on the HTML DOM

function myFunction() {
    var dayinput = document.getElementById("di")
    var value = dayinput.value
    var year = Math.round(value%10000)
    var month = Math.round((value/10000)%100) - 1 
    var day = Math.round((value/1000000))
    var now = Date.now()
    var ds = new Date(year, month, day).getTime();
    var fa = now - ds
    var d = Math.floor(fa / (1000 * 60 * 60 * 24))
    var h = Math.floor((fa % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var m = Math.floor((fa % (1000 * 60 * 60)) / (1000 * 60))
    var s = Math.floor((fa % (1000 * 60)) / 1000)
    document.getElementById("count").innerHTML = d + " Day " +
        h + " Hour " + m +" Min "+ s + " Sec ";
}

setInterval(() => {
    myFunction()
}, 1000)