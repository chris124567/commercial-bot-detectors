/* Retrieved from https://web.archive.org/web/20190212153741if_/http://gmyze.com/current/js/ax_src.js */
var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var forGreatJustice = function(){var a=this.console,b=a&&a.log,c=!b||b.call?0:a.log=function(){c.apply.call(b,a,arguments)}}
try {
    forGreatJustice(); // hahaha hohoho IE 9 should work now hahaha hohoho
} catch (e) {}

__browserDetails = (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return {
        'browser' : M[0],
        'version' : parseInt(M[1])
    }    
})();
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

function hashCode(str) {
      var hash = 0, i, chr, len;
      if (str.length == 0) return hash;
      for (i = 0, len = str.length; i < len; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
};

function flashBridge(name,value) {ex_device_id_detector.setStorageReadResult(ex_storage_lso, (value == 'null')? null : value);}
function flashSWFLoad(e) { if(!e.success) {ex_device_id_detector.setStorageReadResult(ex_storage_lso,null);}}

function silverlightPluginLoaded(sender, args) {
    try{        
        ex_device_id_detector.setStorageReadResult(ex_storage_silverlightStorage, document.getElementById("storageSL").Content.storageSL.getDeviceID());
        if(ex_device_id_detector.device_id){
            document.getElementById("storageSL").Content.storageSL.saveDeviceID(ex_device_id_detector.device_id);
        }
    } catch (e) { 
        ex_device_id_detector.setStorageReadResult(ex_storage_silverlightStorage, null);
    }   
}

var ex_messages_logger = {
    callback : null,
    log : function(message) {
        var self = this;
        if(typeof self.callback == 'function') {
            try {
                self.callback(message);
            } catch(err) {};
        }
        if(location.href.match(/forGreatJustice/i)) {
            console.log.apply(console, [message]);
        }
    }
}
try {
    if (window['_axlog']['callback'] != undefined) {
        ex_messages_logger.callback = window['_axlog']['callback'];
    }
} catch (e) {}


var ex_storage_cookie = {
    name : "ex_storage_cookie",
    'secure': 0,
    
    cookieHelper: {getCookieVal:function(name){var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):'';},GetCookie:function(name){var self=this;var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg){return self.getCookieVal(j);}i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}return null;},DeleteCookie:function(name,path,domain){var self=this;if(self.GetCookie(name)){document.cookie=name+"="+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";}},SetCookie:function(name,value,expires,path,domain,secure){var self=this;document.cookie=name+"="+encodeURIComponent(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+((secure)?"; secure":"");}},
    
    getHost: function() {
        var domain = document.location.host;
        if (domain.indexOf('www.') == 0)
            domain = domain.replace('www.', '');
        return domain;
    },
    
    readDeviceID: function() {
        var self = this;        
        ex_device_id_detector.setStorageReadResult(self,self.cookieHelper.getCookieVal(ex_device_id_detector.settings.device_id_key));
    },
    writeDeviceID: function(device_id) {
        var self = this;
        var expires = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
        self.cookieHelper.SetCookie(ex_device_id_detector.settings.device_id_key,device_id,expires,'/',self.getHost(),(self.secure == 0)? false: true);         
    }
}

var ex_storage_cookie3d_etag = {
    name : "ex_storage_cookie3d_etag",      
    readDeviceID: function() {  
        var self = this;        
        self.createCookieScript(ex_device_id_detector.resources + 'pl.php?name=' + ex_device_id_detector.settings.device_id_key + "&" + Math.floor(Math.random()*100000));
    },
    
    writeDeviceID: function(device_id) {
        var self = this;
        self.createCookieScript(ex_device_id_detector.resources + 'pl.php?name=' + ex_device_id_detector.settings.device_id_key+'&value='+device_id);
    },
    
    createCookieScript: function(url) {
        var self = this;
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);   
    }       
}

var ex_storage_lso = {
    name : "ex_storage_lso",        
    flashID: "swfcontainer"+(new Date().getTime()),
    flashvars: {
        upgrade:"0.4.0", 
        allowSciptAccess: "always",
        paramValue: ""
    },
    params: {
        swliveconnect: "true",
        allowscriptaccess: "always" 
    },
    attributes: {
        id: "",
        name: ""
    },      
        
    createFlash: function() {
        var self = this;        
        self.flashvars.paramName = ex_device_id_detector.settings.device_id_key;                    
        self.attributes.id        = self.flashID;
        self.attributes.name      = self.flashID;           
        var div = document.createElement('div');
        div.id = self.flashID;
        document.body.appendChild(div);         
        swfobject.embedSWF(ex_device_id_detector.static_resources+"sctr.swf", self.flashID, "1", "1", "9", false, self.flashvars, self.params, self.attributes, flashSWFLoad);          
    },
        
    readDeviceID: function() {
        var self = this;                
        self.createFlash();         
    },
        
    writeDeviceID: function(device_id) {
        var self = this;            
        self.flashvars.paramValue = device_id;      
        self.createFlash();
    }       
}

var ex_storage_localStorage = {
    name : "ex_storage_localStorage",           
    readDeviceID: function() {
        var self = this;        
        try {
            if (window.localStorage) {              
                ex_device_id_detector.setStorageReadResult(self,localStorage.getItem(ex_device_id_detector.settings.device_id_key).toString());             
            } else {
                ex_device_id_detector.setStorageReadResult(self,null);
            }
        } catch (e) { 
            ex_device_id_detector.setStorageReadResult(self,null); 
        }       
    },
            
    writeDeviceID: function(device_id) {
        var self = this;
        try {
            if (window.localStorage) {              
                localStorage.setItem(ex_device_id_detector.settings.device_id_key, device_id);
            }
        } catch (e) {}      
    }       
}

var ex_storage_sessionStorage = {
    name : "ex_storage_sessionStorage",         
    readDeviceID: function() {
        var self = this;        
        try {
            if (window.sessionStorage) {                
                ex_device_id_detector.setStorageReadResult(self,sessionStorage.getItem(ex_device_id_detector.settings.device_id_key).toString());               
            } else {
                ex_device_id_detector.setStorageReadResult(self,null);
            }
        } catch (e) { ex_device_id_detector.setStorageReadResult(self,null); }  
    },
                
    writeDeviceID: function(device_id) {
        var self = this;
        try {
            if (window.sessionStorage) {                
                sessionStorage.setItem(ex_device_id_detector.settings.device_id_key, device_id);
            }
        } catch (e) {}      
    }       
}

var ex_storage_DBStorage = {
    name : "ex_storage_DBStorage",
    database_name: "sqlite_ax",
        
    readDeviceID: function() {
        var self = this;
        try {
            if (window.openDatabase) {
                var database = window.openDatabase(self.database_name, "", "ax", 1024 * 1024);              
                database.transaction(function(tx) {
                    tx.executeSql("SELECT value FROM cache WHERE name=?", [ex_device_id_detector.settings.device_id_key],
                    function(tx, result1) {
                        if (result1.rows.length >= 1) {
                            ex_device_id_detector.setStorageReadResult(self,result1.rows.item(0)['value']);
                        } else {
                            ex_device_id_detector.setStorageReadResult(self,null);
                        }
                    }, function (tx, err) { ex_device_id_detector.setStorageReadResult(self,null); })
                });
            } else {
                ex_device_id_detector.setStorageReadResult(self,null);
            }           
        } catch(e) { ex_device_id_detector.setStorageReadResult(self,null); }
    },
                        
    writeDeviceID: function(device_id) {
        var self = this;
        try {
            if (window.openDatabase) {
                var database = window.openDatabase(self.database_name, "", "ax", 1024 * 1024);

                database.transaction(function(tx) {
                    tx.executeSql("CREATE TABLE IF NOT EXISTS cache(" +
                        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                        "name TEXT NOT NULL, " +
                        "value TEXT NOT NULL, " +
                        "UNIQUE (name)" + 
                    ")", [], function (tx, rs) { }, function (tx, err) { });

                    tx.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [ex_device_id_detector.settings.device_id_key, device_id],
                        function (tx, rs) { }, function (tx, err) { })
                });
            }           
        } catch(e) {}   
    }   
}

var ex_storage_indexedDBStorage = {
    name : "ex_storage_indexedDBStorage",
    database_name: "ax",

    readDeviceID: function() {
        var self = this;
        try {                   
            var request = window.indexedDB.open(self.database_name);            
            request.onsuccess = function(event) {
                try {                   
                    var req = request.result.transaction("cache", "readwrite").objectStore("cache").get('device');                      
                    req.onsuccess = function(e) {                       
                        try {                        
                            var result = e.target.result;                           
                            if(typeof result.device_id != "undefined"){
                                ex_device_id_detector.setStorageReadResult(self, result.device_id);
                            }else{
                                
                                ex_device_id_detector.setStorageReadResult(self,null);
                            }
                        } catch(e) {
                            ex_device_id_detector.setStorageReadResult(self,null);
                        }
                      };                    
                    request.onerror = function(event) {
                        ex_device_id_detector.setStorageReadResult(self,null);                      
                    }
                } catch(e) {
                    ex_device_id_detector.setStorageReadResult(self,null);
                }
            }           
            request.onupgradeneeded = function(event) {
                try {
                    var db = event.target.result;
                    var objectStore = db.createObjectStore("cache", { keyPath: "key" });
                    objectStore.createIndex("device_id", "device_id", { unique: false });
                } catch(e) {
                    ex_device_id_detector.setStorageReadResult(self,null);
                }
            }           
            request.onerror = function(event) {
                ex_device_id_detector.setStorageReadResult(self,null);              
            }               
        } catch(e) {
            ex_device_id_detector.setStorageReadResult(self,null);
        }
    },
                        
    writeDeviceID: function(device_id) {
        var self = this;
        try {                           
            var request = window.indexedDB.open(self.database_name);            
            request.onsuccess = function(event) {
                try {
                    var objectStore = request.result.transaction("cache", "readwrite").objectStore("cache").put({'key': 'device', 'device_id': device_id});
                } catch(e) {}   
            }        
            request.onupgradeneeded = function(event) {
                try {
                    var db = event.target.result;
                    var objectStore = db.createObjectStore("cache", { keyPath: "key" });
                    objectStore.createIndex("device_id", "device_id", { unique: false });
                } catch(e) {}
            }
        } catch(e) {}
    }   
}

var ex_storage_silverlightStorage = {
        name : "ex_storage_silverlightStorage",
        readDeviceID: function() {

            var self = this;
            try {
                if (self.checkSilverlightInstalled(null)) {
                    self.createSilverlightObject();
                } else {
                    ex_device_id_detector.setStorageReadResult(self,null);
                }
            } catch(e) {
                ex_device_id_detector.setStorageReadResult(self,null);
            }
        },

        writeDeviceID: function(device_id) {
            var self = this;
            try {
                if (self.checkSilverlightInstalled(null)) {
                    self.createSilverlightObject();
                    document.getElementById("storageSL").Content.storageSL.saveDeviceID(device_id);
                }
            } catch(e) {}
        },
        createSilverlightObject: function() {
            if(document.getElementById("storageSL") != null){
                return false;
            }
            var xap = ex_device_id_detector.static_resources + "slapp2.xap";
            var objectSL =  "<object data='data:application/x-silverlight-2,' type='application/x-silverlight-2' id='storageSL'><param name='source' value='"+xap+"'/><param name='onLoad' value='silverlightPluginLoaded' /><param name='enableHtmlAccess' value='true' /></object>";
            var e = document.createElement('div');
            e.innerHTML = objectSL;
            e.style.position = 'absolute';
            e.style.top = -1000 + "px";
            e.style.left = -1000 + "px";
            document.body.appendChild(e);
        },
        checkSilverlightInstalled: function(b) {
            if (b == undefined)
                b = null;
            var a = false, m = null;
            try {
                var i = null, j = false;
                if (window.ActiveXObject)
                    try {
                        i = new ActiveXObject("AgControl.AgControl");
                        if (b === null)
                            a = true;
                        else if (i.IsVersionSupported(b))
                            a = true;
                        i = null
                    } catch (l) {
                        j = true
                    }
                else
                    j = true;
                if (j) {
                    var k = navigator.plugins["Silverlight Plug-In"];
                    if (k)
                        if (b === null)
                            a = true;
                        else {
                            var h = k.description;
                            if (h === "1.0.30226.2")
                                h = "2.0.30226.2";
                            var c = h.split(".");
                            while (c.length > 3)
                                c.pop();
                            while (c.length < 4)
                                c.push(0);
                            var e = b.split(".");
                            while (e.length > 4)
                                e.pop();
                            var d, g, f = 0;
                            do {
                                d = parseInt(e[f]);
                                g = parseInt(c[f]);
                                f++
                            } while (f < e.length && d === g);
                            if (d <= g && !isNaN(d))
                                a = true
                        }
                }
            } catch (l) {
                a = false
            }
            return a
        }
    }

var ex_device_id_detector = {
    
    storages : [],
    storages_read_state : [],
    device_id : '',
    responseSent : false,
    static_resources: '',
    resources: '',  
    settings: {
        base_url: ('https:' == document.location.protocol ? 'https://web.archive.org/web/20190212153741/https://ssl.' : 'http://') + 'gmyze.com/1.1',
        device_id_key:'__ax',
        custom_storages : [],
        timelimit:4 //seconds
    },
    
    init: function (params) {
        var self = this;
        
        self.settingsInit(params);
        
        self.static_resources = self.settings.base_url + "/static/";
        self.resources = self.settings.base_url + "/resources/";
                
        self.registerStorage(ex_storage_lso); // crossbrowser
        
        // temporary disabled due to outdated plugin
        //if (!((__browserDetails.browser == 'Firefox') && (__browserDetails.version >= 30))) {
            //self.registerStorage(ex_storage_silverlightStorage);
        //}
        
        self.registerStorage(ex_storage_cookie3d_etag); // crossdomain
        self.registerStorage(ex_storage_cookie);
        self.registerStorage(ex_storage_localStorage);
        self.registerStorage(ex_storage_sessionStorage);
        self.registerStorage(ex_storage_DBStorage);
        self.registerStorage(ex_storage_indexedDBStorage);

        if (!self.isEmpty(self.settings.custom_storages)) {
            for (var key in self.settings.custom_storages) {
                self.registerStorage(self.settings.custom_storages[key]);
            }
        }

        (setTimeout(function () {           
            if (!self.responseSent) {
                var device_id = self.getDeviceID();
                if (self.isEmpty(device_id)) {
                    device_id = self.generateDeviceID();
                }               
                self.writeDeviceID(device_id);
                self.sendDeviceIDToClient(device_id);               
            }
        }, parseInt(self.settings.timelimit)*1000));
        self.readDeviceID();
    },
    
    settingsInit: function (params) {
        var self = this;
        for(var key in self.settings) {         
            self.settings[key] = self.getObjParam(params,key) || self.settings[key];                        
        }
    },
    
    //helper for settings init
    getObjParam: function (obj, key) {
        for(var p in obj) {
            if(p == key) {
                return obj[p];
            }
        }
        return '';
    },
    
    // helper for settings init
    isEmpty: function (value) {
        return (typeof value == 'undefined' || value == null || value == 'null' || !value.length || 0 === value.length || value == 'undefined');
    },  
    
    generateDeviceID: function() {
        for (var a = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890".split(""), e = (new Date).getTime(), d = a.length, i = Array(21), f = 0; f < 21; f++) {
            f % 2 && e > 0 ? (i[f] = a[e % d], e = Math.floor(e / d)) : i[f] = a[Math.floor(Math.random() * d)];
        }
        return i.join("")
    },
    
    registerStorage : function(storage) {
        var self = this;        
        self.storages.push(storage);
        self.storages_read_state[storage.name] = false;
        self.log("Registered storage '" + storage.name + "'");
    },
    
    log : function(message) {
        message = 'ex_device_id_detector: ' + message;
        ex_messages_logger.log(message);
    },
    
    readDeviceID: function() {
        var self = this;        
        for (var i=0;i<self.storages.length;i++) {  
            var storage = self.storages[i]; 
            self.log("reading device ID from storage '" + storage.name + "'");  
            var __function = storage.name + '.readDeviceID();'
            setTimeout(__function, 0);                      
        }
    },
    
    writeDeviceID: function(device_id) {
        var self = this;        
        self.device_id = device_id;
        for (var i=0;i<self.storages.length;i++) {  
            var storage = self.storages[i];
            self.log("writing device ID '" + device_id + "' to storage '" + storage.name + "'");
            var __function = storage.name + '.writeDeviceID("' + device_id + '");'
            setTimeout(__function, 0);                          
        }
    },
    
    getDeviceID: function() {
        var self = this;
        return self.device_id
    },  
    
    setStorageReadResult: function(storage, device_id) {
        var self = this;        
        self.log("Storage '" + storage.name + "' got device_id: '" + device_id + "'");
        var event = {
            name : 'ex_device_id_detector.storageGotDeviceID',
            storage : storage.name,
            device_id : device_id
        };
        ex_device_info_detector.fireEvent(event);
        
        if (self.responseSent) {
            return false;
        }       
        
        self.storages_read_state[storage.name] = true;

        if (!self.isEmpty(device_id)) {
            self.device_id = device_id;
        }

        if (!self.isEmpty(self.device_id)) {
            self.writeDeviceID(self.device_id);
            self.sendDeviceIDToClient(self.device_id);
        }
        
        if (self.allStoragesHaveCompletedRead()) {          
            self.log("all storages have completed read");
            var event = {
                name : 'ex_device_id_detector.allStoragesHaveCompletedRead'         
            };
            ex_device_info_detector.fireEvent(event);
            if (!self.responseSent) {
                if (self.isEmpty(self.device_id)) {
                    self.device_id = self.generateDeviceID();
                }
                self.writeDeviceID(self.device_id);
                self.sendDeviceIDToClient(self.device_id);
            }
        }
    },
    
    allStoragesHaveCompletedRead: function() {
        var self = this;
        for (var i=0;i<self.storages.length;i++) {          
            if (self.storages_read_state[self.storages[i].name] == false) {
                return false;
            }
        }       
        return true;
    },
    
    sendDeviceIDToClient: function(device_id) {
        var self = this;    
        self.responseSent = true;
        ex_device_info_detector.setDeviceID(device_id);     
    }   
}

// -------------------------------------------
// Fingerprint
// -------------------------------------------

var _fingerprint;
    var ex_engine_browser = {
        name : "ex_engine_browser",
        getFingerprint : function() {
            return window.navigator.userAgent.toLowerCase();
        }
    }

    var ex_engine_display = {
        name : "ex_engine_display",
        getFingerprint : function() {
            t = "";
            if (self.screen) {
                t += screen.colorDepth + ex_fingerprint_detector.separator + screen.width
                        + ex_fingerprint_detector.separator + screen.height
                        + ex_fingerprint_detector.separator + screen.availHeight;
            }

            return t;
        }
    }

    var ex_engine_plugins = {
        name : "ex_engine_plugins",
        activeXDetect : function(componentClassID) {
            componentVersion = document.body.getComponentVersion('{'
                    + componentClassID + '}', 'ComponentID');
            return (componentVersion != null) ? componentVersion : false;
        },

        stripIllegalChars : function(value) {
            t = "";
            value = value.toLowerCase();
            for (i = 0; i < value.length; i++) {
                if (value.charAt(i) != '\n' && value.charAt(i) != '/'
                        && value.charAt(i) != "\\") {
                    t += value.charAt(i);
                } else if (value.charAt(i) == '\n') {
                    t += "n";
                }
            }
            return t;
        },

        stripFullPath : function(tempFileName, lastDir) {
            fileName = tempFileName;
            filenameStart = 0;
            filenameStart = fileName.lastIndexOf(lastDir);
            if (filenameStart < 0)
                filenameStart = 0;
            filenameFinish = fileName.length;
            fileName = fileName.substring(filenameStart + lastDir.length,
                    filenameFinish);
            return fileName;
        },

        getFingerprint : function() {
            var t = "";
            var i = 0;
            isFirst = true;

            var ua = window.navigator.userAgent.toLowerCase();
            var opera = ua.indexOf("opera") >= 0;
            var ie = ua.indexOf("msie") >= 0 && !opera;
            
            if (window.navigator.plugins.length > 0) {
                if (opera) {
                    temp = "";
                    lastDir = "Plugins";
                    ;
                    for (i = 0; i < window.navigator.plugins.length; i++) {
                        plugin = window.navigator.plugins[i];
                        if (isFirst == true) {
                            temp += this.stripFullPath(plugin.filename, lastDir);
                            isFirst = false;
                        } else {
                            temp += ex_fingerprint_detector.separator
                                    + this.stripFullPath(plugin.filename, lastDir);
                        }
                    }
                    t = this.stripIllegalChars(temp);
                } else {
                    for (i = 0; i < window.navigator.plugins.length; i++) {
                        plugin = window.navigator.plugins[i];
                        if (isFirst == true) {
                            t += plugin.filename;
                            isFirst = false;
                        } else {
                            t += ex_fingerprint_detector.separator + plugin.filename;
                        }
                    }
                }
            } else if (window.navigator.mimeTypes.length > 0) {
                for (i = 0; i < window.navigator.mimeTypes.length; i++) {
                    mimeType = window.navigator.mimeTypes[i];
                    if (isFirst == true) {
                        t += mimeType.type;
                        isFirst = false;
                    } else {
                        t += ex_fingerprint_detector.separator + mimeType.type;
                    }
                }
            } else if (ie) {
                components = new Array("7790769C-0471-11D2-AF11-00C04FA35D02",
                        "89820200-ECBD-11CF-8B85-00AA005B4340",
                        "283807B5-2C60-11D0-A31D-00AA00B92C03",
                        "4F216970-C90C-11D1-B5C7-0000F8051515",
                        "44BBA848-CC51-11CF-AAFA-00AA00B6015C",
                        "9381D8F2-0288-11D0-9501-00AA00B911A5",
                        "4F216970-C90C-11D1-B5C7-0000F8051515",
                        "5A8D6EE0-3E18-11D0-821E-444553540000",
                        "89820200-ECBD-11CF-8B85-00AA005B4383",
                        "08B0E5C0-4FCB-11CF-AAA5-00401C608555",
                        "45EA75A0-A269-11D1-B5BF-0000F8051515",
                        "DE5AED00-A4BF-11D1-9948-00C04F98BBC9",
                        "22D6F312-B0F6-11D0-94AB-0080C74C7E95",
                        "44BBA842-CC51-11CF-AAFA-00AA00B6015B",
                        "3AF36230-A269-11D1-B5BF-0000F8051515",
                        "44BBA840-CC51-11CF-AAFA-00AA00B6015C",
                        "CC2A9BA0-3BDD-11D0-821E-444553540000",
                        "08B0E5C0-4FCB-11CF-AAA5-00401C608500",
                        "D27CDB6E-AE6D-11CF-96B8-444553540000",
                        "2A202491-F00D-11CF-87CC-0020AFEECF20");
                document.body.addBehavior("#default#clientCaps");
                for (i = 0; i < components.length; i++) {
                    ver = this.activeXDetect(components[i]);
                    if (ver) {
                        if (isFirst == true) {
                            t += ver;
                            isFirst = false;
                        } else {
                            t += ex_fingerprint_detector.separator + ver;
                        }
                    } else {
                        t += ex_fingerprint_detector.separator + "null";
                    }
                }
            }
            return t;
        }
    }

    var ex_engine_os = {
        name : "ex_engine_os",
        getFingerprint : function() {
            return window.navigator.platform;
        }
    }

    var ex_engine_fonts = {
        name : "ex_engine_fonts",
        baseFonts : [ 'monospace', 'sans-serif', 'serif' ],
        testString : "mmmmmmmmmmlli",
        testSize : '72px',
        defaultWidth : [],
        defaultHeight : [],
        test_span : '',

        init : function() {     
            var self = this;
            var h = document.getElementsByTagName("body")[0];
            self.test_span = document.createElement("span");
            self.test_span.style.fontSize = self.testSize;
            self.test_span.style.position = "absolute";     
            self.test_span.style.top = "-100px";        
            //self.test_span.left = -100;
            self.test_span.innerHTML = self.testString;
            h.appendChild(self.test_span);
            for ( var index in self.baseFonts) {
                // get the default width for the three base fonts
                self.test_span.style.fontFamily = self.baseFonts[index];
                //h.appendChild(self.test_span);
                self.defaultWidth[self.baseFonts[index]] = self.test_span.offsetWidth;  
                self.defaultHeight[self.baseFonts[index]] = self.test_span.offsetHeight;    
                //h.removeChild(self.test_span);
            }
            
        },

        detect : function(font) {   
            //ex_fingerprint_detector.log("font detect: " + font);
            var self = this;
            var detected = false;
            for (var index=0; index<self.baseFonts.length; index++) {
                self.test_span.style.fontFamily = font + ','
                        + self.baseFonts[index];                                                
                //h.appendChild(self.test_span);
                var matched = (self.test_span.offsetWidth != self.defaultWidth[self.baseFonts[index]] || self.test_span.offsetHeight != self.defaultHeight[self.baseFonts[index]]);
                //h.removeChild(self.test_span);
                if (matched) {
                    return true;
                }
            }
            return false;
        },

        getFingerprint : function() {       
            var self = this;
            self.init();    
            var fonts = [ "Helvetica",
                          "Lucida Grande",
                          "Lucida Sans",
                          "Tahoma",
                          "Arial",
                          "Verdana",
                          "Geneva",
                          "Monaco",
                          "Microsoft Sans Serif",
                          "Times New Roman",
                          "Trebuchet MS",
                          "Courier New",
                          "Courier",
                          "Lucida Bright",
                          "Lucida Sans",
                          "Lucida Sans Typewriter",
                          "Comic Sans MS",
                          "Georgia",
                          "Lucida Sans Unicode",
                          "Palatino Linotype",
                          "Times",
                          "Lucida Console",
                          "Franklin Gothic Medium",
                          "Helvetica Neue",
                          "Verdana",
                          "Impact",
                          "URW Chancery L",
                          "Arial",
                          "Century Schoolbook L",
                          "URW Gothic L",
                          "Georgia",
                          "Nimbus Sans L",
                          "URW Bookman L",
                          "URW Palladio L",
                          "Times New Roman",
                          "Nimbus Mono L",
                          "Nimbus Roman No9 L",
                          "Sylfaen",
                          "MV Boli",
                          "Trebuchet MS",
                          "DejaVu Sans",
                          "DejaVu Sans Mono",
                          "DejaVu Serif",
                          "Tunga",
                          "Estrangelo Edessa",
                          "Gautami",
                          "Arial Black",
                          "Mangal",
                          "Raavi",
                          "Latha",
                          "Shruti",
                          "Gill Sans",
                          "Arial Narrow",
                          "Impact",
                          "Arial Black",
                          "Courier New",
                          "Arial Rounded MT Bold",
                          "Andale Mono",
                          "Futura",
                          "DejaVu Sans Light",
                          "Marker Felt",
                          "Tahoma",
                          "Baskerville",
                          "Skia",
                          "Comic Sans MS",
                          "American Typewriter",
                          "Apple Chancery",
                          "Optima",
                          "Didot",
                          "Hoefler Text",
                          "Zapfino",
                          "Papyrus",
                          "Big Caslon",
                          "DejaVu Sans Condensed",
                          "DejaVu Serif Condensed",
                          "Copperplate",
                          "Kartika",
                          "Vrinda",
                          "Brush Script MT",
                          "Herculanum",
                          "Hiragino Kaku Gothic ProN",
                          "Hiragino Mincho ProN",
                          "Bitstream Charter",
                          "Liberation Serif",
                          "Liberation Mono",
                          "Calibri",
                          "Cambria",
                          "Liberation Sans",
                          "Candara",
                          "Cambria Math",
                          "Corbel",
                          "Consolas",
                          "Constantia",
                          "Hiragino Maru Gothic ProN",
                          "Hiragino Kaku Gothic StdN",
                          "Arial Narrow",
                          "Palatino",
                          "Century Gothic",
                          "FreeSans",
                          "Garamond",
                          "Book Antiqua",
                          "Bookman Old Style",
                          "FreeMono",
                          "FreeSerif",
                          "Courier 10 Pitch",
                          "Segoe UI",
                          "Kokonor",
                          "Kailasa",
                          "Monotype Corsiva",
                          "MS Mincho",
                          "Lucida Bright",
                          "MS Reference Sans Serif",
                          "Lucida Sans Typewriter",
                          "Hiragino Sans GB",
                          "PCMyungjo",
                          "PilGi",
                          "Heiti SC",
                          "Heiti TC",
                          "HeadLineA",
                          "Menlo",
                          "Meiryo UI",
                          "Arial Unicode MS",
                          "Tempus Sans ITC",
                          "Kristen ITC",
                          "Chalkduster",
                          "Mistral",
                          "Juice ITC",
                          "Malgun Gothic",
                          "Microsoft Himalaya",
                          "Microsoft JhengHei",
                          "Microsoft YaHei",
                          "MingLiU-ExtB",
                          "MingLiU_HKSCS",
                          "MingLiU_HKSCS-ExtB",
                          "PMingLiU-ExtB",
                          "SimSun-ExtB",
                          "GungSeo",
                          "Freestyle Script",
                          "Papyrus",
                          "Microsoft Uighur",
                          "MoolBoran",
                          "Gisha",
                          "Leelawadee",
                          "DFKai-SB",
                          "Jokerman",
                          "French Script MT",
                          "Bradley Hand ITC",
                          "KaiTi",
                          "FangSong",
                          "Verdana",
                          "Vivaldi",
                          "UnDotum",
                          "Georgia",
                          "Arial",
                          "Times New Roman",
                          "Courier New",
                          "Impact",
                          "Trebuchet MS",
                          "Batang",
                          "Lohit Bengali",
                          "Lohit Tamil",
                          "Comic Sans MS",
                          "Lucida Handwriting",
                          "Lohit Gujarati",
                          "Waree",
                          "Haettenschweiler",
                          "Arial Black",
                          "SimSun",
                          "Lohit Punjabi",
                          "Pristina",
                          "Franklin Gothic Book",
                          "Copperplate Gothic Light",
                          "Copperplate Gothic Bold",
                          "Maiandra GD",
                          "Eras Demi ITC",
                          "Franklin Gothic Demi",
                          "OCR A Extended",
                          "Perpetua",
                          "Eras Light ITC",
                          "Felix Titling",
                          "Rockwell",
                          "Edwardian Script ITC",
                          "Franklin Gothic Medium Cond",
                          "MS PGothic",
                          "Rockwell Extra Bold",
                          "Engravers MT",
                          "MS Gothic",
                          "MS Mincho",
                          "Andale Mono",
                          "Franklin Gothic Heavy",
                          "Curlz MT",
                          "Franklin Gothic Demi Cond",
                          "Blackadder ITC",
                          "MS PMincho",
                          "Segoe Script",
                          "Casual",
                          "Segoe UI Light",
                          "PMingLiU",
                          "Segoe Print",
                          "MS Gothic",
                          "Segoe UI Semibold",
                          "Lucida Calligraphy",
                          "Harrington",
                          "Iskoola Pota",
                          "MS UI Gothic",
                          "Viner Hand ITC",
                          "Cooper Black",
                          "Onyx",
                          "Mongolian Baiti",
                          "GulimChe",
                          "Old English Text MT",
                          "Kalinga",
                          "Baskerville Old Face",
                          "Bauhaus 93",
                          "Britannic Bold",
                          "MS PGothic",
                          "Wide Latin",
                          "Euphemia",
                          "Gulim",
                          "Microsoft Yi Baiti",
                          "Nyala",
                          "Playbill",
                          "Algerian",
                          "BatangChe",
                          "Gungsuh",
                          "GungsuhChe",
                          "Snap ITC",
                          "DaunPenh",
                          "Broadway",
                          "Dotum",
                          "DotumChe",
                          "Footlight MT Light",
                          "Matura MT Script Capitals",
                          "UnBatang",
                          "DokChampa",
                          "Kunstler Script",
                          "MS PMincho",
                          "MingLiU",
                          "Vladimir Script",
                          "Arabic Typesetting",
                          "Bernard MT Condensed",
                          "Harlow Solid Italic",
                          "Chiller",
                          "NSimSun",
                          "Informal Roman",
                          "Stencil",
                          "Bell MT",
                          "Colonna MT",
                          "Ravie",
                          "Gabriola",
                          "Berlin Sans FB",
                          "Centaur",
                          "High Tower Text",
                          "Ubuntu",
                          "Californian FB",
                          "Mukti Narrow",
                          "Purisa",
                          "Niagara Engraved",
                          "Niagara Solid",
                          "Showcard Gothic",
                          "Lohit Hindi",
                          "Sawasdee",
                          "SimHei",
                          "Garuda",
                          "Loma",
                          "Norasi",
                          "Tlwg Typist",
                          "TlwgTypewriter",
                          "Brush Script MT",
                          "Kinnari",
                          "TlwgMono",
                          "Umpush",
                          "utkal",
                          "Bodoni MT Poster Compressed",
                          "Century Gothic",
                          "Mallige",
                          "Vemana2000",
                          "KacstOne",
                          "Berlin Sans FB Demi",
                          "Phetsarath OT",
                          "Tlwg Typo",
                          "Magneto",
                          "Aparajita",
                          "Garamond",
                          "Rachana",
                          "Lucida Fax",
                          "Book Antiqua",
                          "Arial Rounded MT Bold",
                          "Bookman Old Style",
                          "Lucida Handwriting",
                          "Gill Sans MT",
                          "Century Schoolbook",
                          "Monotype Corsiva",
                          "Century Schoolbook",
                          "Calisto MT",
                          "Copperplate Gothic Bold",
                          "Haettenschweiler",
                          "Goudy Old Style",
                          "Script MT Bold",
                          "Gill Sans MT Condensed",
                          "Gill Sans Ultra Bold",
                          "Goudy Old Style",
                          "Imprint MT Shadow",
                          "Braggadocio",
                          "Gill Sans MT Ext Condensed Bold",
                          "Palace Script MT",
                          "Eras Bold ITC",
                          "Eras Medium ITC",
                          "Goudy Stout",
                          "News Gothic MT",
                          "Playbill",
                          "Rockwell Condensed",
                          "Castellar",
                          "Forte",
                          "Agency FB",
                          "Rage Italic",
                          "Gill Sans Ultra Bold Condensed",
                          "Tw Cen MT",
                          "Colonna MT",
                          "Tw Cen MT Condensed",
                          "Britannic Bold",
                          "Calisto MT",
                          "Desdemona",
                          "Wide Latin",
                          "Gigi",
                          "Gloucester MT Extra Condensed",
                          "Tw Cen MT Condensed Extra Bold",
                          "Footlight MT Light",
                          "Matura MT Script Capitals",
                          "Perpetua Titling MT",
                          "Abadi MT Condensed Light",
                          "Adobe Ming Std",
                          "Adobe Myungjo Std",
                          "Kino MT",
                          "Adobe Song Std",
                          "Bodoni MT",
                          "Bodoni MT Black",
                          "Bodoni MT Condensed",
                          "Adobe Fangsong Std",
                          "Adobe Heiti Std",
                          "Adobe Kaiti Std",
                          "MS Reference Sans Serif",
                          "Calibri",
                          "Ubuntu Light",
                          "Lucida Sans",
                          "Lucida Bright",
                          "Lucida Sans Typewriter",
                          "Cambria",
                          "Consolas",
                          "Corbel",
                          "Candara",
                          "Capitals",
                          "Constantia",
                          "Adobe Fan Heiti Std",
                          "Adobe Gothic Std",
                          "Adobe Arabic",
                          "Adobe Hebrew",
                          "Kozuka Gothic Pr6N",
                          "Kozuka Mincho Pr6N",
                          "Bitstream Vera Sans",
                          "Bitstream Vera Sans Mono",
                          "DejaVu Sans",
                          "Bitstream Vera Serif",
                          "DejaVu Sans Mono",
                          "DejaVu Sans Condensed",
                          "DejaVu Serif",
                          "DejaVu Serif Condensed",
                          "Gabriola",
                          "Gentium",
                          "Utopia",
                          "Eurostile",
                          "Metal",
                          "Luxi Sans",
                          "Luxi Mono",
                          "Luxi Serif",
                          "Matisse ITC",
                          "Electron",
                          "Nice",
                          "Bitstream Vera Sans Mono",
                          "Courier",
                          "Domestic Manners",
                          "Dustismo",
                          "MgOpen Modata",
                          "MgOpen Moderna",
                          "MgOpen Canonica",
                          "MgOpen Cosmetica",
                          "AR PL UMing CN",
                          "AR PL UMing HK",
                          "AR PL UMing TW",
                          "AR PL UMing TW MBE",
                          "Staccato222 BT",
                          "Penguin Attack",
                          "Balker",
                          "Marked Fool",
                          "Bitstream Vera Sans",
                          "Univers",
                          "Junkyard",
                          "Linux Libertine O",
                          "Bitstream Vera Serif",
                          "Linux Biolinum O",
                          "Broadway BT",
                          "Square721 BT",
                          "ParkAvenue BT",
                          "MisterEarl BT",
                          "Calligraph421 BT",
                          "DejaVu LGC Sans Mono",
                          "Cataneo BT",
                          "Rage Italic LET",
                          "La Bamba LET",
                          "Blackletter686 BT",
                          "Ruach LET",
                          "John Handy LET",
                          "DejaVu LGC Sans",
                          "DejaVu LGC Sans Condensed",
                          "DejaVu LGC Sans Light",
                          "DejaVu LGC Serif",
                          "DejaVu LGC Serif Condensed",
                          "Isabella",
                          "Linux Libertine",
                          "Scruff LET",
                          "Westwood LET",
                          "AlArabiya",
                          "Milano LET",
                          "Tiranti Solid LET",
                          "One Stroke Script LET",
                          "Orange LET",
                          "Smudger LET",
                          "Victorian LET",
                          "Academy Engraved LET",
                          "Mekanik LET",
                          "Odessa LET",
                          "Pump Demi Bold LET",
                          "Quixley LET",
                          "Inconsolata",
                          "Jokerman LET",
                          "OldDreadfulNo7 BT",
                          "University Roman LET",
                          "Highlight LET",
                          "Nimbus Sans L Condensed",
                          "Gotham",
                          "Helvetica",
                          "News Gothic Std",
                          "AlBattar",
                          "AlHor",
                          "AlManzomah",
                          "Arab",
                          "Cortoba",
                          "Dimnah",
                          "Furat",
                          "Granada",
                          "Graph",
                          "Hani",
                          "Hor",
                          "Interstate",
                          "Japan",
                          "Jet",
                          "Khalid",
                          "Mashq",
                          "Mashq-Bold",
                          "Nada",
                          "Nagham",
                          "Ostorah",
                          "Ouhod-Bold",
                          "Petra",
                          "Rasheeq-Bold",
                          "Rehan",
                          "Salem",
                          "Shado",
                          "Sharjah",
                          "Tarablus",
                          "Tholoth",
                          "Chicago",
                          "Textile",
                          "Linux Libertine C",
                          "TradeGothic",
                          "Hypatia Sans Pro",
                          "Frutiger LT Std",
                          "Myriad Std",
                          "Garamond",
                          "Bitstream Vera Sans Mono",
                          "Charcoal",
                          "Gadget",
                          "Avenir",
                          "Techno",
                          "Delicious",
                          "Bitstream Vera Serif",
                          "Bitstream Vera Sans",
                          "Baby Kruffy",
                          "Berthold Akzidenz Grotesk BE",
                          "New York",
                          "DINSchrift",
                          "Sand",
                          "ITC Franklin Gothic",
                          "Abadi MT Condensed Light",
                          "Verdana Ref",
                          "Univers",
                          "Helvetica Narrow",
                          "Caflisch Script Pro",
                          "Ubuntu",
                          "Alba Super",
                          "Caslon",
                          "Andale Mono",
                          "Kabel Ult BT",
                          "Alba",
                          "AlMateen-Bold",
                          "AlMohanad",
                          "AlMothnna-Bold",
                          "Andy",
                          "Alba Matter",
                          "Palatino",
                          "Times",
                          "Bembo",
                          "News Gothic MT",
                          "Chick",
                          "Adobe Garamond",
                          "Bernhard Modern Std",
                          "Beesknees ITC",
                          "New Century Schoolbook",
                          "HelveticaNeue",
                          "Minion Std",
                          "Frosty",
                          "Braggadocio",
                          "Kino MT",
                          "Formata",
                          "ITC Franklin Gothic Std",
                          "Pussycat",
                          "GENUINE",
                          "OCRB",
                          "Freshbot",
                          "Jenkins v2.0",
                          "Placard Condensed",
                          "Gentium",
                          "Croobie",
                          "GlooGun",
                          "Weltron Urban",
                          "Abadi MT Condensed Extra Bold",
                          "Jokewood",
                          "Pepita MT",
                          "Arial Narrow",
                          "Georgia Ref",
                          "Poornut",
                          "Fat",
                          "Ubuntu",
                          "Gentium",
                          "Andale Mono IPA",
                          "RotisSemiSans",
                          "Sabon",
                          "MS Reference Serif",
                          "Abadi MT Condensed",
                          "Ubuntu Light",
                          "Ubuntu-Title",
                          "Monaco",
                          "Runic MT Condensed",
                          "Shelley",
                          "Courier Std",
                          "Gill Sans",
                          "Optima",
                          "Desdemona",
                          "Bickley Script",
                          "New Century Schoolbook",
                          "Archer",
                          "BauerBodoni",
                          "Monaco",
                          "Base 02",
                          "ITC Century",
                          "Porcelain",
                          "Geneva",
                          "AkzidenzGrotesk",
                          "Cronos Pro",
                          "Times CY",
                          "CAMPBELL",
                          "DomBold BT",
                          "Fine Hand",
                          "Mercurius Script MT Bold",
                          "Chicago",
                          "MARKETPRO",
                          "Kaufmann",
                          "Berkeley",
                          "Bookman",
                          "Franklin Gothic",
                          "Ryo Display Std",
                          "Utopia",
                          "Aachen",
                          "Adobe Sans MM",
                          "Helvetica Neue",
                          "A Charming Font",
                          "Champignon",
                          "Apple Casual",
                          "Futura",
                          "Apple Chancery",
                          "Belwe",
                          "FreeSans",
                          "Minion Web",
                          "New York",
                          "Algerian",
                          "Mead Bold",
                          "Avant Garde",
                          "FIRSTHOME",
                          "Hoefler Text",
                          "Helvetica",
                          "Monotype.com",
                          "FreeSerif",
                          "Zapf Chancery",
                          "DecoType Naskh",
                          "The Sans-",
                          "Ubuntu-Title",
                          "Caslon",
                          "FreeMono",
                          "Imprint MT Shadow",
                          "04b_21",
                          "BudHand",
                          "Minion Web",
                          "Palatino",
                          "Linux Libertine O",
                          "Monotype.com",
                          "URW Antiqua T",
                          "URW Grotesk T",
                          "Ubuntu-Title",
                          "Helvetica Narrow",
                          "Linux Biolinum O",
                          "MgOpen Canonica",
                          "Bookman",
                          "Fixed",
                          "Helvetica Narrow",
                          "Times",
                          "Gadget",
                          "Terminal",
                          "Textile"
     ];
            
            var encoding_array = ["j","i","g","u","r","d","a","x","y","z"]
            
            var tmp_count = 0;
            var prev_result = "";
            var cur_result = "";
            var result = "";
            var t = "";
            for (var i=0; i<fonts.length; i++) {
            //for (var i=11; i<31; i++) {
                var detected = self.detect(fonts[i]);
                if (detected) {
                    //t = t + "1";
                    cur_result = "1";
                } else {
                    //t = t + "0";
                    cur_result = "0";
                }           
                if ( prev_result == cur_result ) {
                    tmp_count++;
                } else if (prev_result != "" ){
                    if (tmp_count > 1) {
                        tmp_count = tmp_count.toString();
                        tmp_count = tmp_count.split('');
                        var hash = "";
                        for (var k=0; k<tmp_count.length; k++) {                        
                            hash += encoding_array[tmp_count[k]];
                        }

                        result += hash + prev_result;
                    } else {
                        for (var j=0; j<tmp_count; j++) {
                            result += prev_result;
                        }                    
                    }
                    tmp_count = 1;
                } else {            
                    tmp_count++;
                }
                prev_result = cur_result;

                //console.log("----------");        
                //console.log("font: " + fonts[i]);         
                //console.log("current result: " + cur_result);
                //console.log("tmp_count: " + tmp_count);
                //console.log("result: " + result);
            }
            
            if (tmp_count > 1) {                                    
                tmp_count = tmp_count.toString();
                tmp_count = tmp_count.split('');
                var hash = "";
                for (var k=0; k<tmp_count.length; k++) {                        
                    hash += encoding_array[tmp_count[k]];
                }
                result += hash + prev_result;
            } else {
                for (var j=0; j<tmp_count; j++) {
                    result += prev_result;
                }                    
            }   
        
            //console.log("result: " + result);
            //console.log(t);
            var h = document.getElementsByTagName("body")[0];
            h.removeChild(self.test_span);              
            return result; 
        }
    }

    var ex_engine_timezone = {
        name : "ex_engine_timezone",
        getFingerprint : function() {
            var now = new Date().toString();
            var TZ = now.indexOf('(') > -1 ? now.match(/\([^\)]+\)/)[0].match(
                    /[A-Z]/g).join('') : now.match(/[A-Z]{3,4}/)[0];
            if (TZ == "GMT" && /(GMT\W*\d{4})/.test(now))
                TZ = RegExp.$1;
            return TZ;
        }
    }
    
    var ex_engine_canvas = {
            name : "ex_engine_canvas",
            getFingerprint : function() {
                try {
                    canvas = document.createElement("canvas");
                    canvas.height = 60;
                    canvas.width = 400;
                    canvasContext = canvas.getContext("2d");
                    canvas.style.display = "inline";
                    canvasContext.textBaseline = "alphabetic";
                    canvasContext.fillStyle = "#f60";
                    canvasContext.fillRect(125, 1, 62, 20);
                    canvasContext.fillStyle = "#069";
                    canvasContext.font = "11pt no-real-font-123";
                    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
                    canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
                    canvasContext.font = "18pt Arial";
                    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
                    return hashCode(canvas.toDataURL().toString());
                } catch(e){
                    return null;
                }
            }
        }


    var ex_fingerprint_detector = {

        separator : '#',
        engines : [],
        result_field : 'fingerprint',
        
        isEmpty: function (value) {
            return (typeof value == 'undefined' || value == null || value == 'null' || !value.length || 0 === value.length || value == 'undefined');
        },
        
        registerEngine : function(engine) {
            var self = this;
            self.engines.push(engine);
            self.log("Registered engine '" + engine.name + "'");
        },

        getFingerprint : function() {
            var self = this;
            
            var result = [];
            
            for (var i=0;i<self.engines.length;i++) {
                self.log(self.engines[i].name +" start");

                try {
                    var fingerprint = self.engines[i].getFingerprint();
                } catch (e) {
                    var fingerprint = '';
                }

                self.log(self.engines[i].name +" end");
                result.push(fingerprint);
            }
            var fingerprint = result.join("|");     
            ex_device_info_detector.setFingerprint(fingerprint);
        },
        log : function(message) {
            message = 'ex_fingerprint_detector: ' + message;
            ex_messages_logger.log(message);
        }
    }   

try {ex_fingerprint_detector.registerEngine(ex_engine_browser);} catch (e) {}   
try {ex_fingerprint_detector.registerEngine(ex_engine_display);} catch (e) {}   
try {ex_fingerprint_detector.registerEngine(ex_engine_plugins);} catch (e) {}   
try {ex_fingerprint_detector.registerEngine(ex_engine_os);} catch (e) {}    
try {ex_fingerprint_detector.registerEngine(ex_engine_fonts);} catch (e) {} 
try {ex_fingerprint_detector.registerEngine(ex_engine_timezone);} catch (e) {}  
try {ex_fingerprint_detector.registerEngine(ex_engine_canvas);} catch (e) {}

// ----------------------------
// GLOBAL DEVICE INFO CONTAINER
// ----------------------------

var ex_device_info_detector = {
    device_id: '',
    fingerprint: '',
    keyups: 0,
    infoSent: false,
    settings: {
        js_callback: null,
        eventListener : null,
        devidAxInFld:null,      
        timelimit:5, //seconds
        version:'1.1'
    },  
    
    init: function (params) {
        var self = this;
        
        for(var key in self.settings) {         
            self.settings[key] = self.getObjParam(params,key) || self.settings[key];
            if(key == 'devidAxInFld' && !self.isEmpty(self.settings[key])) {
                self.settings[key] = self.settings[key].replace(new RegExp(" ", 'g'), '').replace(new RegExp("%20", 'g'), '');
            }               
        }

        var event = {
            name : 'ex_device_info_detector.init'
        };
        ex_device_info_detector.fireEvent(event);

        setTimeout(function () { 
            if (false == self.infoSent) {               
                self.sendDeviceInfoToClient();              
            }
        }, parseInt(self.settings.timelimit)*1000);
    },  

    getObjParam: function (obj, key) {
        for(var p in obj) {
            if(p == key) {
                return obj[p];
            }
        }
        return '';
    },
    
    isEmpty: function (value) {
        return (typeof value == 'undefined' || value == null || value == 'null' || !value.length || 0 === value.length || value == 'undefined');
    },
    
    setDeviceID: function(device_id) {
        var self = this;
        self.log("got DeviceID '" + device_id + "'");
        var event = {   
            name : 'ex_device_info_detector.gotDeviceID',
            device_id : device_id
        };
        ex_device_info_detector.fireEvent(event);
        
        self.device_id = device_id;
        if (!self.isEmpty(self.device_id) && !self.isEmpty(self.fingerprint)) {
            self.sendDeviceInfoToClient();
        }       
    },
    
    setFingerprint: function(fingerprint) {
        var self = this;
        self.log("got Fingerprint '" + fingerprint + "'");
        
        var event = {   
            name : 'ex_device_info_detector.gotFingerprint',
            fingerprint : fingerprint
        };
        ex_device_info_detector.fireEvent(event);   
        
        self.fingerprint = fingerprint;
        if (!self.isEmpty(self.device_id) && !self.isEmpty(self.fingerprint)) {
            self.sendDeviceInfoToClient();
        }
    },  
    
    sendDeviceInfoToClient: function() {
        var self = this;        
        self.infoSent = true;       
        var device_info = self.settings.version + "|" + self.device_id + "|" + self.fingerprint ;
        
        
        self.log("Sending Device info '" + device_info + "' to client");
        
        if(!self.isEmpty(self.settings.devidAxInFld)) {
            var ids=self.settings.devidAxInFld.split(','); 
            for(k in ids) { try {document.getElementById(ids[k]).value=device_info;} catch(err){} }
        }
        
        if(typeof self.settings.js_callback == 'string' && !self.isEmpty(self.settings.js_callback)) {
            try {               
                var fn = window[self.settings.js_callback];
                fn(device_info);
            } catch(err) {};
        }
        if(typeof self.settings.js_callback == 'function') {
            try {               
                self.settings.js_callback(device_info);
            } catch(err) {};
        }
    },
    log : function(message) {
        message = 'ex_device_info_detector: ' + message;
        ex_messages_logger.log(message);
    },
    fireEvent : function(event) {
        var self = this;    
        if(typeof self.settings.eventListener == 'function') {
            try {               
                self.settings.eventListener(event);
            } catch(err) {};
        }
    }
}

ex_messages_logger.log("ax.js loaded");
function __onload_handler() {
    ex_messages_logger.log("running __onload_handler");
    ex_device_info_detector.init(_axq);
    
    // getting device ID
    try {
        if (window['_axd'] != undefined) {
            ex_device_id_detector_params = window['_axd'];
        } else {
            ex_device_id_detector_params = [];
        }
    } catch (e) {
        ex_device_id_detector_params = [];
    }       
    ex_device_id_detector.init(ex_device_id_detector_params);
    
    // getting fingerprint
    try {ex_fingerprint_detector.getFingerprint();} catch (e) {}
}

setTimeout(__onload_handler, 300);

function ax_addEventHandler(elem,eventType,handler) {
     if (elem.addEventListener)
         elem.addEventListener (eventType,handler,false);
     else if (elem.attachEvent)
         elem.attachEvent ('on'+eventType,handler); 
}

function ax_keyupHandler() {
    ex_device_info_detector.keyups++;       
    ex_device_info_detector.sendDeviceInfoToClient();
}
}
