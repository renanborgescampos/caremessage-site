var Browser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

try{
  // Typekit bugs on lower ies
  if(Browser.Version() >= 9) {
    Typekit.load();
  }
}catch(e){}