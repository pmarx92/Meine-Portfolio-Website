function uhr() {
     let date = new Date();
     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();
     let session = "PM";

     if (hh == 0) {
          hh = 12;
     }

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;

     let time = hh + ":" + mm + ":" + ss + " " + session;
     document.getElementById('uhrzeit').innerText = time;

     var t = setTimeout(function () { uhr() }, 1000);



}
uhr();