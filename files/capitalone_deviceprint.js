/* Retrieved from https://www.capitalone.com/assets/js/component/fp_AA.js */
/*
 * Misc. Utility Functions
 */
function activeXDetect(componentClassID) {
    componentVersion = document.body.getComponentVersion('{' + componentClassID + '}', 'ComponentID');
    return (componentVersion != null) ? componentVersion : false;
}

function stripIllegalChars(value) {
    t = "";
    // first we need to escape any "\n" or "/" or "\"
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
}

function stripFullPath(tempFileName, filePrefix, fileSuffix) {
    var prefix = filePrefix;
    var suffix = fileSuffix; 
    var fileName = tempFileName;
        
    // omit the prefix
    var prefixStart = fileName.lastIndexOf(prefix); 
    if (prefixStart >= 0)
    {
        filenameLen = fileName.length;
        fileName = fileName.substring(prefixStart + prefix.length, filenameLen );
    }
    
    // omit the suffix  
    var suffixStart= fileName.indexOf(suffix);
    if( suffixStart >=0 )
    {
        fileName = fileName.slice(0,suffixStart);       
    }
        
    return fileName;
}

var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",                
                identity: "Chrome"
            },
            {   string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {       // for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",               
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            {       // for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                   string: navigator.userAgent,
                   subString: "iPhone",
                   identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };  /*
    Helper Hashtable implementation
    */
    function Hashtable()
    {
        var keysToIndex = {__indexToValue:[],__indexToKeys:[]};
        var activeEnum = [];
        var tableLength = 0;
        var self = this;

        /*
        This inner Object constructor is used to implement a Java
        style Enumerator (and Iterator) Object.
        */

        function Enumeration(arrNm)
        {
            var lastIndex = null;
            var enumIndex = 0;
            while(typeof activeEnum[enumIndex] == 'number')enumIndex += 1;
            activeEnum[enumIndex] = 0;

            /*
            Returns true if this Enumerator/ has another entry to
            return, else returns false.
            */
            this.hasNext = this.hasMoreElements = function(){
            if(activeEnum[enumIndex] < tableLength){
                return true;
            }else{
                if(typeof activeEnum[enumIndex] == 'number'){
                    activeEnum[enumIndex] = null;
                }
                return false;
            }
        };

        /*
        Returns the next item from this Enumerator/Iterator (key
        or value, depending on whether it was created with the keys
        or elements methods).
        */
        this.next = this.nextElement = function(){
            if(this.hasNext){
                lastIndex = activeEnum[enumIndex];
                return keysToIndex[arrNm][activeEnum[enumIndex]++];
            }else{
                return null;
            }
        };

        /*
        Removes the last entry (key/value pair) accessed with the
        next or nextElement methods of this Enumerator/Iterator
        (if any). The key/value pair is removed regardless of whether
        the Enumerator/Iterator was accessing keys or values.
        */
        this.remove = function(){
            if(typeof lastIndex == 'number'){
                self.remove(keysToIndex.__indexToKeys[lastIndex]);
                lastIndex = null;
            }
            };
        };
        // End Enumeration

        /*
        Returns the value mapped to the provided (String) key, or null
        if the key is not mapped to a value.
        */
        this.get = function(key){
        if(typeof keysToIndex[key] == 'number'){
            return keysToIndex.__indexToValue[keysToIndex[key]];
        }else{
            return null;
        }
        };
        /*
        Adds the value provided to this Hashtable mapped to the key
        provided.
        */
        this.put = function(key, value){
        if(typeof keysToIndex[key] == 'number'){
            keysToIndex.__indexToValue[keysToIndex[key]] = value;
        }else{
            keysToIndex[key] = tableLength;
            keysToIndex.__indexToValue[tableLength] = value;
            keysToIndex.__indexToKeys[tableLength++] = key;
        }
        };
        /*
        Removes the key and any value mapped to it from this
        Hashtable.
        */
        this.remove = function(key){
            var remIndex = keysToIndex[key];
            if(typeof remIndex == 'number'){
                delete keysToIndex[key];
                tableLength -= 1;
                for(var c = remIndex;c < tableLength;c++){
                    keysToIndex.__indexToValue[c] =
                                     keysToIndex.__indexToValue[c+1];
                    keysToIndex[(keysToIndex.__indexToKeys[c] =
                                keysToIndex.__indexToKeys[c+1])] = c;
                }
                for(var c = 0;c < activeEnum.length;c++){
                    if((activeEnum[c])&&(remIndex < activeEnum[c])){
                        activeEnum[c] -= 1;
                }
            }
            }
        };

        /*
        Returns the length of this Hashtable.
        */
        this.size = function(){
            return tableLength;
        };

        /*
        This method is not intended for external use! use elements
        and keys methods instead.
        */
        this.__enumerate = function(type){
            return new Enumeration(type);
        };

        /*
        Returns an object that is similar to the Java Enumeration
        Interface, having hasMoreElements and nextElement Methods. This
        object also reproduces the Java Iterator interface, having methods
        hasNext, next and remove. This enumeration is of the values stored
        in the Hashtable.
        */
        Hashtable.prototype.elements = function(){
            return this.__enumerate('__indexToValue');
        }

        /*
        Returns an object that is similar to the Java Enumeration
        Interface, having hasMoreElements and nextElement Methods. This
        object also reproduces the Java Iterator interface, having methods
        hasNext, next and remove. This enumeration is of the keys stored
        in the Hashtable.
        */
        Hashtable.prototype.keys = function(){
            return this.__enumerate('__indexToKeys');
        }

        /*
        Removes all entry's from the Hashtable
        */
        Hashtable.prototype.clear = function(){
            var e = this.keys();
            while(e.hasNext()){
                this.remove(e.next());
            }
        }

        Hashtable.prototype.toString = function(){
        var n,e = this.keys();
        var st = '';
        while(e.hasNext()){
            n = e.next();
            st += n+' =&gt; '+this.get(n)+'\r\n';
        }
        return st;

        }

        /*
        Returns true if this Hashtable contains a value that is equal
        to the value provided, else returns false
        */
        Hashtable.prototype.contains = function(testVal){
            var e = this.elements();
            while(e.hasNext()){
                if(e.next() == testVal)return true;
            }
            return false;
        }

        /*
        Returns true if this Hashtable contains a value that is equal
        to the value provided, else returns false.
        */
        Hashtable.prototype.containsValue = Hashtable.prototype.contains;

        /*
        Returns true if this Hashtable contains a value mapped to
        the value provided, else returns false.
        */
        Hashtable.prototype.containsKey = function(testKey){
            return (this.get(testKey) != null);
        }

        /*
        Returns true if this Hashtable has zero entry's.
        */
        Hashtable.prototype.isEmpty = function(){
            return (this.size() == 0);
        }

        /*
        If the parameter provided is another Hashtable object
        then all of the key/value pairs from the provided Hashtable
        are added to this Hashtable.
        */
        Hashtable.prototype.putAll = function(hTable){
        if(hTable.constructor == Hashtable){
            var n,e = hTable.keys();
            while(e.hasNext()){
                n = e.next();
                this.put(n, hTable.get(n));
            }
        }
        }

        /*
        Returns a 'shallow' copy of this Hashtable.
        */
        Hashtable.prototype.clone = function(){
            var ht = new Hashtable();
            ht.putAll(this);
            return ht;
        }

        /*
        Returns true if this Hashtable equals the parameter
        provided, else it returns false.
        */
        Hashtable.prototype.equals = function(o){
        return (o == this);
        }
}
IE_FingerPrint.prototype = new FingerPrint();

function IE_FingerPrint() {
    /*
     * This function captures the User Agent String from the Client Browser
     */
    this.deviceprint_browser = function () {
        var ua = navigator.userAgent.toLowerCase();
        t = ua + SEP + navigator.appVersion + SEP + navigator.platform;
        t += SEP + navigator.appMinorVersion + SEP + navigator.cpuClass + SEP + navigator.browserLanguage;
        t += SEP + ScriptEngineBuildVersion();
        return t;
    }

    this.deviceprint_software = function() {
        var t = "";
        var isFirst = true;

        document.body.addBehavior("#default#clientCaps")
        var compVer;
        for (i = 0; i < components.length; i++) {
            compVer = activeXDetect(components[i]);
            var name = names[i];
            if (compVer) {
                if (isFirst == true) {
                    t += name + PAIR + compVer;
                    isFirst = false;
                } else {
                    t += SEP + name + PAIR + compVer;
                }
            } else {
                t += "";
                isFirst = false;
            }
        }
        return t;
    }
    var names = new Array(  "abk", // Address Book
                            "wnt", // Windows Desktop Update NT
                            "aol", // AOL ART Image Format Support
                            "arb", // Arabic Text Display Support
                            "chs", // Chinese (Simplified) Text Display Support
                            "cht", // Chinese (traditional) Text Display Support
                            "dht", // Dynamic HTML Data Binding
                            "dhj", // Dynamic HTML Data Binding for Java
                            "dan", // DirectAnimation
                            "dsh", // DirectShow
                            "heb", // Hebrew Text Display Support
                            "ie5", // Internet Explorer 5 Browser
                            "icw", // Internet Connection Wizard
                            "ibe", // Internet Explorer Browsing Enhancements
                            "iec", // Internet Explorer Classes for Java
                            "ieh", // Internet Explorer Help
                            "iee", // Internet Explorer Help Engine
                            "jap", // Japanese Text Display Support
                            "krn", // Korean Text Display Support
                            "lan", // Language Auto-Selection
                            "swf", // Macromedia Flash
                            "shw", // Macromedia Shockwave Director
                            "msn", // MSN Messenger Service
                            "wmp", // Windows Media Player
                            "obp", // Offline Browsing Pack
                            "oex", // Outlook Express
                            "net", // NetMeeting NT
                            "pan", // Pan-European Text Display Support
                            "thi", // Thai Text Display Support
                            "tks", // Task Scheduler
                            "uni", // Uniscribe
                            "vtc", // Vector Graphics Rendering (VML)
                            "vnm", // Vietnamese Text Display Support
                            "mvm", // Microsoft virtual machine
                            "vbs", // Visual Basic Scripting Support
                            "wfd" // Web Folders
    );

    /*
     * Create a Hashtable of IE components guids
     */
    var components = new Array( "7790769C-0471-11D2-AF11-00C04FA35D02",
                                "89820200-ECBD-11CF-8B85-00AA005B4340",
                                "47F67D00-9E55-11D1-BAEF-00C04FC2D130",
                                "76C19B38-F0C8-11CF-87CC-0020AFEECF20",
                                "76C19B34-F0C8-11CF-87CC-0020AFEECF20",
                                "76C19B33-F0C8-11CF-87CC-0020AFEECF20",
                                "9381D8F2-0288-11D0-9501-00AA00B911A5",
                                "4F216970-C90C-11D1-B5C7-0000F8051515",
                                "283807B5-2C60-11D0-A31D-00AA00B92C03",
                                "44BBA848-CC51-11CF-AAFA-00AA00B6015C",
                                "76C19B36-F0C8-11CF-87CC-0020AFEECF20",
                                "89820200-ECBD-11CF-8B85-00AA005B4383",
                                "5A8D6EE0-3E18-11D0-821E-444553540000",
                                "630B1DA0-B465-11D1-9948-00C04F98BBC9",
                                "08B0E5C0-4FCB-11CF-AAA5-00401C608555",
                                "45EA75A0-A269-11D1-B5BF-0000F8051515",
                                "DE5AED00-A4BF-11D1-9948-00C04F98BBC9",
                                "76C19B30-F0C8-11CF-87CC-0020AFEECF20",
                                "76C19B31-F0C8-11CF-87CC-0020AFEECF20",
                                "76C19B50-F0C8-11CF-87CC-0020AFEECF20",
                                "D27CDB6E-AE6D-11CF-96B8-444553540000",
                                "2A202491-F00D-11CF-87CC-0020AFEECF20",
                                "5945C046-LE7D-LLDL-BC44-00C04FD912BE",
                                "22D6F312-B0F6-11D0-94AB-0080C74C7E95",
                                "3AF36230-A269-11D1-B5BF-0000F8051515",
                                "44BBA840-CC51-11CF-AAFA-00AA00B6015C",
                                "44BBA842-CC51-11CF-AAFA-00AA00B6015B",
                                "76C19B32-F0C8-11CF-87CC-0020AFEECF20",
                                "76C19B35-F0C8-11CF-87CC-0020AFEECF20",
                                "CC2A9BA0-3BDD-11D0-821E-444553540000",
                                "3BF42070-B3B1-11D1-B5C5-0000F8051515",
                                "10072CEC-8CC1-11D1-986E-00A0C955B42F",
                                "76C19B37-F0C8-11CF-87CC-0020AFEECF20",
                                "08B0E5C0-4FCB-11CF-AAA5-00401C608500",
                                "4F645220-306D-11D2-995D-00C04F98BBC9",
                                "73FA19D0-2D75-11D2-995D-00C04F98BBC9");

}


Mozilla_FingerPrint.prototype = new FingerPrint();

function Mozilla_FingerPrint() {
    
}



Opera_FingerPrint.prototype = new FingerPrint();

function Opera_FingerPrint() {  
        
}



    /*
     * detectFields() - return a delimited string that includes the URL of the page, the forms names
     * and their non hidden input fields names.
     * 
     * Available since AAH-8.5   
     */
    function detectFields()
    {                       
        var formPrefix = "form";
        var inputPrefix = "input";
        var formsInPage = document.getElementsByTagName('form');
        var numOfForms = formsInPage.length;
        var inputsInForm;
        var numOfInputs;
        var formsInputsData = [];
        formsInputsData.push("url=" + window.location.href);
        for ( var i = 0; i < numOfForms; i++ )
        {
            formsInputsData.push(formPrefix + "=" + formsInPage[i].name);       
            inputsInForm = formsInPage[i].getElementsByTagName('input');
            numOfInputs = inputsInForm.length;
            for ( var j = 0; j < numOfInputs;j++)
            {
                if( inputsInForm[j].type != "hidden")
                {
                    formsInputsData.push(inputPrefix + "=" + inputsInForm[j].name);
                }           
            }   
        }           
        var finalFormsData = formsInputsData.join("|");     
        return finalFormsData;      
    }   /*
     *include all the java script 
     * 
     * 
     */





    
    var SEP = '|';
    var PAIR = '=';
    var DEV = '~';  
    
    /*
     * the FingerPrint prototype object defines the following properties, deviceprint_browser,
     * deviceprint_software, deviceprint_display...., that reference the functions, deviceprint_browser,
     * deviceprint_software, deviceprint_display, .... Every instance of FingerPrint inherits the
     * prototype allowing them to call the FingerPrint functions through the
     * properties.
     */
    function FingerPrint() {
        var ver = 2;        
        
        /*
         Create a Hashtable of mozilla components
         */
        var ht = new Hashtable();
        ht.put('npnul32','def');        // Default netscape plugin
        ht.put('npqtplugin6','qt6');    // Quicktime 6.5.1
        ht.put('npqtplugin5','qt5');    // Quicktime 6.5.1
        ht.put('npqtplugin4','qt4');    // Quicktime 6.5.1
        ht.put('npqtplugin3','qt3');    // Quicktime 6.5.1
        ht.put('npqtplugin2','qt2');    // Quicktime 6.5.1
        ht.put('npqtplugin','qt1');     // Quicktime 6.5.1
        ht.put('nppdf32','pdf');        // Adobe Acrobat
        ht.put('NPSWF32','swf');        // Macromedia Flash
        ht.put('NPJava11','j11');       // Java 1.4.2_02
        ht.put('NPJava12','j12');       // Java 1.4.2_02
        ht.put('NPJava13','j13');       // Java 1.4.2_02
        ht.put('NPJava32','j32');       // Java 1.4.2_02
        ht.put('NPJava14','j14');       // Java 2 5.0 Update 4
        ht.put('npoji600','j61');       // Java 2 5.0 Update 4
        ht.put('NPJava131_16','j16');   // Java 1.3.1_16
        ht.put('NPOFFICE','mso');       // Microsoft Office 2003
        ht.put('npdsplay','wpm');       // Windows Media Player
        ht.put('npwmsdrm','drm');       // Windows DRM
        ht.put('npdrmv2','drn');        // Netscape DRM
        ht.put('nprjplug','rjl');       // Real Jukebox
        ht.put('nppl3260','rpl');       // Real Player Live Connect
        ht.put('nprpjplug','rpv');      // Real Player Version
        ht.put('npchime','chm');        // Chime
        ht.put('npCortona','cor');      // Cortina
        ht.put('np32dsw','dsw');        // Macromedia Director
        ht.put('np32asw','asw');        // Macromedia Authorware
    
        /*
         * This function return the js version
         */
        this.deviceprint_version = function () {                        
            return ver;
        }
        
        /*
         * This function captures the User Agent String from the Client Browser
         */
        this.deviceprint_browser = function () {            
            var userAgent = navigator.userAgent;
            var ua = userAgent.toLowerCase();
            var t = ua + SEP + navigator.appVersion + SEP + navigator.platform;
            return t;
        }
    
        /*
         * This function captures the User software String
         */
        this.deviceprint_software = function () {       
            var t = "";
            var isFirst = true;
            if (navigator.plugins.length > 0)
            {                   
                var temp = "";
                var fileName = "";
                var key = "";
                var lastDir = "Plugins";                
                for (i = 0; i < navigator.plugins.length; i++)
                {                           
                    plugin = navigator.plugins[i];
                    fileName = stripFullPath(plugin.filename, lastDir,".");                                     
                    if (isFirst==true)
                    {                       
                        key = ht.containsKey(fileName);
                        if(key)
                        {
                            temp += ht.get(fileName);
                            isFirst=false;
                        }
                        else
                        {
                            temp = "";
                            isFirst=false;
                        }
                    }
                    else
                    {
                        key = ht.containsKey(fileName);
                        if(key)
                        {
                            temp += SEP + ht.get(fileName);
                        }
                        else
                        {
                            temp += "";
                        }
                    }
                }               
                t = stripIllegalChars(temp);
        
            }
            else if (navigator.mimeTypes.length > 0)
            {
                key = "";
                for (i = 0; i < navigator.mimeTypes.length; i++)
                {
                    mimeType = navigator.mimeTypes[i];
                    if (isFirst==true)
                    {
                        key = ht.containsKey(mimeType);
                        if(key)
                        {
                            t += ht.get(mimeType) + PAIR + mimeType;
                            isFirst=false;
                        }
                        else
                        {
                            t += "unknown" + PAIR + mimeType;
                            isFirst=false;
                        }
                    }
                    else
                    {
                        key = ht.containsKey(mimeType);
                        if(key)
                        {
                            t += SEP + ht.get(mimeType) + PAIR + mimeType;
                        }
                        else
                        {
                            temp += "";
                        }
                    }
                }
            }                       
            return t;
        }
                
    
        /*
         * This function captures the Client's Screen Information
         */
        this.deviceprint_display = function () {
            var t = "";
            if (self.screen) {
                t += screen.colorDepth + SEP + screen.width + SEP + screen.height + SEP + screen.availHeight;
            }
            return t;
        }   

        /*
         This function captures ALL the user's plugin types from the browser.        
        */
        this.deviceprint_all_software = function () {
            var t = "";
            var isFirst = true;
            if (navigator.plugins.length > 0) {
                var temp = "";
                var fileName = "";
                var key = "";
                for (i = 0; i < navigator.plugins.length; i++) {
                    var plugin = navigator.plugins[i];
                    fileName = plugin.filename;
                    fileName = stripFullPath(fileName,"Plugins",".");                                   
                    if (isFirst == true) {                      
                        temp += fileName;
                        isFirst = false;                        
                    } else {                        
                        temp += SEP + fileName;                     
                    }
                }
                t = stripIllegalChars(temp);    
            }
            return t;
        }
                
        /*
         * This function captures the user's timezone in GMT
         */
        this.deviceprint_timezone = function () {
            var gmtHours = (new Date().getTimezoneOffset() / 60) * (-1);
            return gmtHours;
        }
    
        /*
         * This function captures the user's browser language. Note: this is captured in
         * the User Agent String, but this function provides more detailed information
         * from IE (system language)
         */
        this.deviceprint_language = function () {
            var lang;
    
            if (typeof (navigator.language) !== "undefined") {
                lang = "lang" + PAIR + navigator.language + SEP;
            } else if (typeof (navigator.browserLanguage) !== "undefined") {
                lang = "lang" + PAIR + navigator.browserLanguage + SEP;
            } else {
                lang = "lang" + PAIR + "" + SEP;
            }
    
            if ((typeof (navigator.systemLanguage) !== "undefined"))
            {
                lang += "syslang" + PAIR + navigator.systemLanguage + SEP;
            } else {
                lang += "syslang" + PAIR + "" + SEP;
            }
            if ((typeof (navigator.userLanguage) !== "undefined"))
            {
                lang += "userlang" + PAIR + navigator.userLanguage;
            } else
            {
                lang += "userlang" + PAIR + "";
            }
            return lang;
        }
    
        /*
         * This function captures whether or not Java is enabled
         */
        this.deviceprint_java = function() {
            var javaEnabled = (navigator.javaEnabled()) ? 1 : 0;
            return javaEnabled;
        }
    
        /*
         * This function captures whether or not user enabled cookies or not
         */
        this.deviceprint_cookie = function () {
    
            var cookieEnabled = (navigator.cookieEnabled) ? 1 : 0;
            // if not IE4+ nor NS6+
            if (typeof navigator.cookieEnabled === "undefined" && !cookieEnabled) {
                document.cookie = "testcookie";
                cookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? 1 : 0;
            }
            return cookieEnabled;
        }
    
        /*
        This function captures the Client's Application Name
        */
        this.deviceprint_appName = function() { 
            return (typeof(navigator.appName) != "undefined" ) ? navigator.appName : "";
        }   
        
        /*
        This function captures the Client's Application Code Name
        */
        this.deviceprint_appCodeName = function () {        
            return (typeof(navigator.appCodeName) != "undefined" ) ? navigator.appCodeName : "";                    
        }   
        
        /*
        This function captures the Client's online browser status
        */
        this.deviceprint_online = function () {     
            return (typeof(navigator.onLine) != "undefined" ) ? navigator.onLine : "";
        }
        
        /*
        This function captures the Client's operating system profile
        */
        this.deviceprint_opsProfile = function () {                 
            return ((typeof(navigator.opsProfile) != "undefined") && (navigator.opsProfile != null) ) ? navigator.opsProfile : "";
        }
        
        /*
        This function captures the user profile
        */
        this.deviceprint_userProfile = function () {        
            return ((typeof(navigator.userProfile) != "undefined") && (navigator.userProfile != null) ) ? navigator.userProfile : "";
        }
                
        /*
        This function captures the width of the Client's display screen - excluding the Windows Taskbar 
        */
        this.deviceprint_screen_availWidth = function () {      
            return (typeof(screen.availWidth ) != "undefined") ? screen.availWidth  : "";
        }
        
        /*
        This function captures the Client's color resolution - Pixel Depth 
        */
        this.deviceprint_screen_pixelDepth = function () {      
            return (typeof(screen.pixelDepth ) != "undefined") ? screen.pixelDepth  : "";
        }
        
        /*
        This function captures the Client's bit depth of the color palette in the off-screen bitmap buffer. 
        */
        this.deviceprint_screen_bufferDepth = function () {         
            return (typeof(screen.bufferDepth ) != "undefined") ? screen.bufferDepth  : "";
        }
        
        /*
        This function captures the Client's number of horizontal dots per inch of the display screen 
        */
        this.deviceprint_screen_deviceXDPI = function () {          
            return (typeof(screen.deviceXDPI ) != "undefined") ? screen.deviceXDPI  : "";
        }
        
        /*
        This function captures the Client's number of vertical  dots per inch of the display screen 
        */
        this.deviceprint_screen_deviceYDPI = function () {          
            return (typeof(screen.deviceYDPI ) != "undefined") ? screen.deviceYDPI  : "";
        }
        
        /*
        This function captures the Client's normal number of horizontal dots per inch of the display screen. 
        */
        this.deviceprint_screen_logicalXDPI = function () {         
            return (typeof(screen.logicalXDPI ) != "undefined") ? screen.logicalXDPI  : "";
        }
        
        /*
        This function captures the Client's normal number of vertical dots per inch of the display screen. 
        */
        this.deviceprint_screen_logicalYDPI = function () {         
            return (typeof(screen.logicalYDPI ) != "undefined") ? screen.logicalYDPI  : "";
        }               
        
        /*
        This function captures whether or not the user has enabled font-smoothing in the display control panel. 
        */
        this.deviceprint_screen_fontSmoothingEnabled = function () {            
            return (typeof(screen.fontSmoothingEnabled ) != "undefined") ? screen.fontSmoothingEnabled  : "";
        }                                                                   
        
        /*      
        This function captures the Client's update interval for the screen. 
        */
        this.deviceprint_screen_updateInterval = function () {          
            return (typeof(screen.updateInterval ) != "undefined") ? screen.updateInterval  : "";
        }       
        
                    
        /*
         * This function captures the user's timezone in GMT
         */
        this.deviceprint_timezone = function () {
            var gmtHours = (new Date().getTimezoneOffset() / 60) * (-1);
            return gmtHours;
        }
                
    }
    /*
     * URL encode the string to make it portable safely
     */
    function urlEncode(text) {
        // The escape() function encodes special characters, with the exception of:
        // * @ - _ + . /
        // find *+-_/.@ and replace with equivalent url-encode value
        var encodedString = escape(text).replace(/\*/g, "%2A").replace(/\+/g, "%2B")
        .replace(/-/g, "%2D").replace(/\./g, "%2E").replace(/\//g, "%2F")
                .replace(/_/g, "%5F").replace(/@/g, "%40");
    
        return encodedString;
    }
    
    
    /*
     * Encoded Deviceprint - Encodes The Deviceprint
     */
    function encode_deviceprint() {
        var t = add_deviceprint();      
        return urlEncode(t);
    }
    
    /*
     * Helper Function - Shows How to Decode The Deviceprint
     */
    function decode_deviceprint() {     
        return unescape( encode_deviceprint() );
    }
    
    /*
     * deviceprint - POST data
     */
    function post_deviceprint() {       
        document.forms[0].pm_fp.value = encode_deviceprint();
        return true;
    }
    
    /*
    Post fingerprints - calles to add_deviceprint.
    This is the call from old API 58
    */  
    function post_fingerprints( form ) 
    {               
        form.deviceprint.value = encode_deviceprint();
    }
    
    
    /*
     * Deviceprint - delimited string value where names are in accordance with
     * PassMarkDeviceRequest
     */
    function add_deviceprint() {
        /*
         * Browser Detection
         */             
        BrowserDetect.init();
        var fp;             
        switch (BrowserDetect.browser)
        {
        case 'Explorer':
            fp = new IE_FingerPrint();
            break;
        case 'Firefox':
            fp = new Mozilla_FingerPrint();
            break;
        case 'Opera':
            fp = new Opera_FingerPrint();
            break;          
        default:
            fp = new FingerPrint();
        }                   
        var t = "version=" + fp.deviceprint_version() + "&pm_fpua=" + fp.deviceprint_browser() + "&pm_fpsc=" + fp.deviceprint_display() + "&pm_fpsw=" + fp.deviceprint_software() +
                "&pm_fptz=" + fp.deviceprint_timezone() + "&pm_fpln=" + fp.deviceprint_language() + "&pm_fpjv=" + fp.deviceprint_java() +
                "&pm_fpco=" + fp.deviceprint_cookie();
        
        // new Field to collect the all the plugins and not just from the hashtable
        t = t + "&pm_fpasw=" + fp.deviceprint_all_software();
        
        // 14 New elements to collect 
        t = t + "&pm_fpan=" + fp.deviceprint_appName() + "&pm_fpacn=" + fp.deviceprint_appCodeName() + "&pm_fpol=" + fp.deviceprint_online() +
            "&pm_fposp=" + fp.deviceprint_opsProfile() + "&pm_fpup=" + fp.deviceprint_userProfile() + "&pm_fpsaw=" + fp.deviceprint_screen_availWidth() +
            "&pm_fpspd=" + fp.deviceprint_screen_pixelDepth() + "&pm_fpsbd=" + fp.deviceprint_screen_bufferDepth() +
            "&pm_fpsdx=" + fp.deviceprint_screen_deviceXDPI() + "&pm_fpsdy=" + fp.deviceprint_screen_deviceYDPI() +         
            "&pm_fpslx=" + fp.deviceprint_screen_logicalXDPI() + "&pm_fpsly=" + fp.deviceprint_screen_logicalYDPI() +
            "&pm_fpsfse=" + fp.deviceprint_screen_fontSmoothingEnabled() + "&pm_fpsui=" + fp.deviceprint_screen_updateInterval();                                       
        return t;
    }
    
    /*
     * deviceprint Communication - 3 options 1. Post Asynchronously 2. Post
     * Synchronously 3. Query String
     */

    /*
     * Async Post Helper Method
     */
    function form_add_data(fd, name, value) {
        if (fd && fd.length > 0) {
            fd += "&";
        } else {
            fd = "";
        }

        fd += name + '=' + escape(value.toString());
        return fd;
    }

    function form_add_deviceprint(fd, name, value) {
        fd = form_add_data(fd, name + "d", value);
        return fd;
    }

    /*
     * deviceprint - POST Asynchronously
     */
    function asyncpost_deviceprint(url) {
        var xmlhttp = false;
        /* @cc_on @ */
        /*
         * @if (@_jscript_version >= 5) // JScript gives us Conditional compilation,
         * we can cope with old IE versions. // and security blocked creation of the
         * objects. try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
         * try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (E) {
         * xmlhttp = false; } } @end @
         */

        if (!xmlhttp && typeof XMLHttpRequest !== 'undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        if (!xmlhttp) {
            return false;
        }

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded");
        /*
         * Browser Detection
         */             
        BrowserDetect.init();
        var fp;             
        switch (BrowserDetect.browser)
        {
        case 'Explorer':
            fp = new IE_FingerPrint();
            break;
        case 'Firefox':
            fp = new Mozilla_FingerPrint();
            break;
        case 'Opera':
            fp = new Opera_FingerPrint();
            break;          
        default:
            fp = new FingerPrint();
        }
        var fd;
        fd = form_add_deviceprint(fd, "fp_browser", fp.deviceprint_browser());
        fd = form_add_deviceprint(fd, "fp_display", fp.deviceprint_display());
        fd = form_add_deviceprint(fd, "fp_software", fp.deviceprint_software());
        fd = form_add_deviceprint(fd, "fp_timezone", fp.deviceprint_timezone());
        fd = form_add_deviceprint(fd, "fp_language", fp.deviceprint_language());
        fd = form_add_deviceprint(fd, "fp_java", fp.deviceprint_java());
        fd = form_add_deviceprint(fd, "fp_cookie", fp.deviceprint_cookie());

        xmlhttp.send(fd); // fire and forget
        return true;
    }