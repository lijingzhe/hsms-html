export default {
  formatTime(time){
    let y = time.getFullYear();
    let m = time.getMonth();
    let d = time.getDate();
    let h =time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + (m<10?'0'+m:m) + '-' + (d<10?'0'+d:d) + ' ' + (h<10?'0'+h:h) + ':' + (mm<10?'0'+mm:mm) + ':' + (s<10?'0'+s:s) ;
    // + '\n' +
    // y + '-' + (m<10?'0'+m:m) + '-' + (d<10?'0'+d:d);
  }
}
