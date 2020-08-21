/* Retrieved from https://pastebin.com/raw/5wnVZHbK. */
var linuxFonts = ['Andale Mono', 'Arial', 'Arial Black', 'AR PL UKai CN', 'AR PL UMing CN', 'Batang', 'Bitstream Vera Sans', 'Comic Sans MS', 'Courier New', 'Cursor', 'DejaVu LGC Sans', 'DejaVu Sans', 'DejaVu Sans Mono', 'DejaVu Serif', 'Dotum', 'Droid Sans', 'FreeMono', 'FreeSans', 'FreeSerif', 'gargi', 'Garuda', 'Georgia', 'Hei', 'Impact', 'KacstArt', 'Kedage', 'Khmer OS', 'Khmer OS System', 'Kinnari', 'Liberation Sans Narrow', 'Lohit Bengali', 'Loma', 'Lucida Bright', 'Lucida Sans', 'Lucida Sans Typewriter', 'Luxi Mono', 'Mallige', 'Meera', 'Monospace', 'mry_KacstQurn', 'Mukti Narrow', 'NanumGothic', 'NanumMyeongjo', 'Nimbus Sans L Condensed', 'Norasi', 'OpenSymbol', 'ori1Uni', 'Phetsarath OT', 'Pothana2000', 'Purisa', 'Rachana', 'Rekha', 'Saab', 'Sawasdee', 'System', 'TakaoPGothic', 'Times', 'Times New Roman', 'TlwgMono', 'TlwgTypewriter', 'Tlwg Typist', 'Tlwg Typo', 'Trebuchet MS', 'Ubuntu', 'Ubuntu Condensed', 'Ume Gothic', 'Ume Mincho', 'Ume P Gothic', 'Ume P Mincho', 'Ume UI Gothic', 'Umpush', 'UnBatang', 'UnDinaru', 'UnDotum', 'UnGraphic', 'UnGungseo', 'UnPilgi', 'Untitled1', 'Utopia', 'Vemana2000', 'Verdana', 'Waree', 'Webdings', 'WenQuanYi Bitmap Song', 'WenQuanYi Micro Hei', 'WenQuanYi Zen Hei'];

var windowsFonts = ['18thCentury', '8514oem', 'AcmeFont', 'Adobe Arabic', 'Agency FB', 'Aharoni', 'Aldhabi', 'Alfredo', 'Algerian', 'Alien Encounters', 'Almonte Snow', 'Amethyst', 'Andalus', 'Aparajita', 'Arabic Transparent', 'Arabic Typesetting', 'AR BERKLEY', 'Arial Baltic', 'Arial CE', 'Arial CYR', 'Arial Greek', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial TUR', 'Arial Unicode MS', 'Arimo', 'AR JULIAN', 'Asimov', 'Autumn', 'Baby Kruffy', 'Balthazar', 'Baskerville', 'Baskerville Old Face', 'Bastion', 'Batang', 'BatangChe', 'Bauhaus 93', 'Bellerose', 'Bell MT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'Birch Std', 'Bitstream Vera Sans', 'Blackadder ITC', 'Blackoak Std', 'BN Jinx', 'BN Machine', 'Bobcat', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Poster Compressed', 'BolsterBold', 'Book Antiqua', 'Bookman Old Style', 'Bookshelf Symbol 7', 'Borealis', 'BOUTON International Symbols', 'Bradley Hand ITC', 'Brandish', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Brush Script Std', 'Brussels', 'Calibri', 'Calibri Light', 'Californian FB', 'Calisto MT', 'Calligraphic', 'Calvin', 'Cambria', 'Cambria Math', 'Candara', 'Candles', 'Castellar', 'Centaur', 'Century', 'Century Gothic', 'Century Schoolbook', 'Chaparral Pro', 'Chaparral Pro Light', 'Charlemagne Std', 'Chiller', 'Chinyen', 'Clarendon', 'Colbert', 'Colonna MT', 'Comic Sans MS', 'Commons', 'Consolas', 'Constantia', 'Coolsville', 'Cooper Black', 'Cooper Std Black', 'Copperplate', 'Corbel', 'Cordia New', 'CordiaUPC', 'Corporate', 'Courier New Baltic', 'Courier New CE', 'Cracked Johnnie', 'Creepygirl', 'Curlz MT', 'DaunPenh', 'David', 'Dayton', 'DejaVu Sans', 'Deneane', 'Detente', 'DFKai-SB', 'Digifit', 'DilleniaUPC', 'Distant Galaxy', 'DokChampa', 'Dominican', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'Emmett', 'Engravers MT', 'Enliven', 'Eras Bold ITC', 'Ethnocentric', 'EucrosiaUPC', 'Euphemia', 'Expressway Rg', 'FangSong', 'Felix Titling', 'Fingerpop', 'Fixedsys', 'Flubber', 'Footlight MT Light', 'Forte', 'Frankfurter Venetian TT', 'Franklin Gothic Book', 'Franklin Gothic Medium Cond', 'FrankRuehl', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'Gabriola', 'Gadugi', 'Garamond', 'Gazzarelli', 'Gentium Basic', 'Gentium Book Basic', 'Geotype TT', 'Giddyup Std', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Glockenspiel', 'Gloucester MT Extra Condensed', 'Good Times', 'Goudy Old Style', 'Goudy Stout', 'Greek Diner Inline TT', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Haettenschweiler', 'Hand Me Down S (BRK)', 'Hansen', 'Harlow Solid Italic', 'Harrington', 'Harvest', 'HarvestItal', 'Haxton Logos TT', 'Heavy Heap', 'Hei', 'Helvetica', 'Helvetica LT Std', 'HelveticaNeueLT Com 107 XBlkCn', 'Highboot', 'High Tower Text', 'Hobo Std', 'Hollywood Hills', 'Hombre', 'Huxley Titling', 'Imprint MT Shadow', 'Induction', 'Informal Roman', 'IrisUPC', 'Iskoola Pota', 'Italianate', 'JasmineUPC', 'Jokerman', 'Juice ITC', 'Kai', 'KaiTi', 'Kalinga', 'Kartika', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Kozuka Gothic Pr6N B', 'Kristen ITC', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic Std', 'LetterOMatic!', 'Levenim MT', 'LilyUPC', 'Limousine', 'Lithos Pro Regular', 'LittleLordFontleroy', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Fax', 'Lucida Handwriting', 'Lucida Sans Typewriter', 'Mael', 'Magneto', 'Maiandra GD', 'Malgun Gothic', 'Manorly', 'Martina', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'MelodBold', 'Mesquite Std', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft JhengHei UI', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft YaHei UI', 'Microsoft Yi Baiti', 'Minerva', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'Minion Pro', 'Miriam', 'Mistral', 'Modern', 'Modern No. 20', 'Mongolian Baiti', 'Monotype Corsiva', 'MoolBoran', 'Moonbeam', 'MS Gothic', 'MS Mincho', 'MS Outlook', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS Reference Specialty', 'MS Sans Serif', 'MS Serif', 'MS UI Gothic', 'MT Extra', 'Myanmar Text', 'Mycalc', 'Myriad Arabic', 'Myriad Hebrew', 'Myriad Pro', 'Narkisim', 'Nasalization', 'Neon Lights', 'Niagara Engraved', 'Niagara Solid', 'Nina', 'Nirmala UI', 'Notram', 'November', 'NSimSun', 'Nueva Std', 'Nueva Std Cond', 'Nyala', 'OCR A Extended', 'OCR A Std', 'Old English Text MT', 'Onyx', 'OpenSymbol', 'OpineHeavy', 'Orator Std', 'Palace Script MT', 'Palatino', 'Papyrus', 'Parchment', 'Parry Hotter', 'PenultimateLight', 'Perpetua', 'Perpetua Titling MT', 'PhrasticMedium', 'Pirate', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poplar Std', 'PR Celtic Narrow', 'Prestige Elite Std', 'Pristina', 'QuiverItal', 'Rage Italic', 'Ravie', 'Rockwell', 'Rockwell Condensed', 'Rod', 'Roland', 'Rondalo', 'Rosewood Std Regular', 'RowdyHeavy', 'Russel Write TT', 'Sakkal Majalla', 'Salina', 'Script', 'Script MT Bold', 'Segoe Print', 'Segoe UI Semilight', 'Segoe UI Symbol', 'SF Movie Poster', 'Shonar Bangla', 'Showcard Gothic', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Skinny', 'Small Fonts', 'Snap ITC', 'Snowdrift', 'Source Code Pro', 'Splash', 'Stencil', 'Stencil Std', 'Stephen', 'SWGamekeys MT', 'System', 'Tarzan', 'Tekton Pro', 'Tekton Pro Cond', 'Tekton Pro Ext', 'Tempus Sans ITC', 'Terminal', 'Terminator Two', 'Times New Roman Baltic', 'Toledo', 'Traditional Arabic', 'Trajan Pro', 'Tw Cen MT', 'Urdu Typesetting', 'Utsaah', 'Valken', 'Vani', 'Vijaya', 'Viner Hand ITC', 'Vivaldi', 'Vivian', 'Vladimir Script', 'Vrinda', 'Waverly', 'Whimsy TT', 'Wide Latin', 'Wingdings 2', 'Woodcut', 'X-Files', 'Year supply of fairy cakes'];

var macFonts = ['Abadi MT Condensed Extra Bold', 'Abadi MT Condensed Light', 'Al Bayan Bold', 'Al Bayan Plain', 'American Typewriter Bold', 'American Typewriter Condensed', 'American Typewriter Light', 'Apple Braille Outline 6 Dot', 'Apple Braille Pinpoint 6 Dot', 'AppleGothic Regular', 'Apple LiGothic Medium', 'Apple LiSung Light', 'AppleMyungjo Regular', 'Apple SD Gothic Neo', 'Apple SD GothicNeo ExtraBold', 'Apple SD Gothic Neo Regular', 'Arial Bold', 'Arial Bold Italic', 'Arial Hebrew Bold', 'Arial Italic', 'Arial Narrow Bold', 'Arial Narrow Bold Italic', 'Arial Narrow Italic', 'Avenir', 'Avenir Black', 'Avenir Next', 'Avenir Next Bold', 'Avenir Next Condensed', 'Avenir Next Condensed Bold', 'Avenir Next Demi Bold', 'Avenir Next Heavy', 'Avenir Next Regular', 'Bangla MN Bold', 'Bangla Sangam MN Bold', 'Baskerville Bold', 'Baskerville Bold Italic', 'Baskerville SemiBold', 'Baskerville SemiBold Italic', 'Bell MT Bold', 'Bell MT Italic', 'Bernard MT Condensed', 'Big Caslon Medium', 'Book Antiqua', 'Book Antiqua Bold', 'Bookman Old Style', 'Bookman Old Style Bold', 'Bookshelf Symbol 7', 'Braggadocio', 'Britannic Bold', 'Brush Script MT Italic', 'Calibri', 'Calibri Bold', 'Calibri Light', 'Calisto MT', 'Calisto MT Bold', 'Cambria', 'Cambria Bold', 'Cambria Math', 'Candara Bold', 'Century', 'Century Gothic', 'Century Gothic Bold', 'Century Schoolbook', 'Century Schoolbook Bold', 'Chalkboard Bold', 'Chalkboard SE', 'Chalkboard SE Bold', 'Cochin Bold', 'Colonna MT', 'Comic Sans MS Bold', 'Consolas', 'Consolas Bold', 'Constantia', 'Constantia Bold', 'Cooper Black', 'Copperplate Bold', 'Copperplate Gothic Bold', 'Copperplate Light', 'Corbel', 'Corbel Bold', 'Corsiva Hebrew Bold', 'Courier Bold', 'Courier New Bold', 'Courier New Italic', 'Courier Oblique', 'Curlz MT', 'Damascus Bold', 'Desdemona', 'Devanagari MT Bold', 'Didot Bold', 'Edwardian Script ITC', 'Engravers MT', 'Engravers MT Bold', 'Euphemia UCAS Bold', 'Eurostile', 'Eurostile Bold', 'Footlight MT Light', 'Franklin Gothic Book', 'Franklin Gothic Book Italic', 'Franklin Gothic Medium', 'Franklin Gothic Medium Italic', 'Futura Condensed ExtraBold', 'Futura Medium', 'Gabriola', 'Garamond', 'Garamond Bold', 'Geeza Pro Bold', 'Georgia Bold', 'Gill Sans Bold', 'Gill Sans MT', 'Gill Sans MT Bold', 'Gill Sans MT Italic', 'Gill Sans Ultra Bold', 'Gloucester MT Extra Condensed', 'Goudy Old Style', 'Goudy Old Style Bold', 'Gujarati MT Bold', 'Gujarati Sangam MN Bold', 'Gulim', 'GungSeo Regular', 'Gurmukhi MN Bold', 'Gurmukhi Sangam MN', 'Gurmukhi Sangam MN Bold', 'Haettenschweiler', 'Harrington', 'HeadLineA Regular', 'Hei Regular', 'Heiti SC Light', 'Heiti TC Light', 'Helvetica Bold', 'Helvetica CY Bold', 'Helvetica CY Plain', 'Helvetica Light', 'Helvetica Neue Bold', 'Helvetica Neue Medium', 'Helvetica Oblique', 'Hiragino Kaku Gothic ProN W3', 'Hiragino Kaku Gothic Pro W3', 'Hiragino Kaku Gothic StdN W8', 'Hiragino Maru Gothic ProN W4', 'Hiragino Mincho ProN W3', 'Hiragino Mincho ProN W6', 'Hiragino Sans GB W3', 'Hiragino Sans GB W6', 'Hoefler Text Black', 'Hoefler Text Ornaments', 'Imprint MT Shadow', 'Kailasa Regular', 'Kai Regular', 'Kaiti SC', 'Kaiti SC Black', 'Kannada MN Bold', 'Kannada Sangam MN Bold', 'Kefa Bold', 'Khmer MN Bold', 'Kino MT', 'Kokonor Regular', 'Lucida Blackletter', 'Lucida Bright', 'Lucida Bright Demibold', 'Lucida Bright Demibold Italic', 'Lucida Bright Italic', 'Lucida Calligraphy', 'Lucida Calligraphy Italic', 'Lucida Console', 'Lucida Fax', 'Lucida Fax Demibold', 'Lucida Fax Regular', 'Lucida Grande Bold', 'Lucida Handwriting', 'Lucida Handwriting Italic', 'Lucida Sans', 'Lucida Sans Demibold Italic', 'Lucida Sans Typewriter', 'Lucida Sans Typewriter Bold', 'Lucida Sans Unicode', 'Malayalam MN Bold', 'Malayalam Sangam MN Bold', 'Marion', 'Marion Bold', 'Marker Felt Thin', 'Marlett', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo Bold', 'Menlo Bold', 'Microsoft Himalaya', 'Microsoft Tai Le', 'Microsoft Tai Le Bold', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'Mistral', 'Modern', 'Modern No. 20', 'Mongolian Baiti', 'Monotype Corsiva', 'Monotype Sorts', 'MS Gothic', 'Mshtakan Bold', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS Reference Specialty', 'MT Extra', 'Myanmar MN Bold', 'NanumGothic', 'Nanum Gothic', 'NanumGothic Bold', 'NanumMyeongjo', 'Nanum Myeongjo', 'NanumMyeongjo Bold', 'New Peninim MT Bold', 'News Gothic MT', 'News Gothic MT Bold', 'Noteworthy Bold', 'Onyx', 'Optima Bold', 'Optima Regular', 'Oriya MN Bold', 'Oriya Sangam MN Bold', 'Osaka-Mono', 'Palatino Bold', 'Palatino Linotype', 'Palatino Linotype Bold', 'Papyrus Condensed', 'PCMyungjo Regular', 'Perpetua', 'Perpetua Bold', 'Perpetua Titling MT', 'Perpetua Titling MT Bold', 'PilGi Regular', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'PT Sans Bold', 'PT Sans Caption Bold', 'PT Sans Narrow Bold', 'Raanana Bold', 'Rockwell', 'Rockwell Bold', 'Rockwell Extra Bold', 'Rockwell Italic', 'SimHei', 'SimSun', 'Sinhala MN Bold', 'Sinhala Sangam MN Bold', 'Skia Regular', 'Songti SC', 'Songti SC Black', 'Stencil', 'STIXGeneral-Bold', 'STIXGeneral-Regular', 'STIXIntegralsD-Bold', 'STIXIntegralsSm-Bold', 'STIXIntegralsUp-Bold', 'STIXIntegralsUpD-Bold', 'STIXIntegralsUpD-Regular', 'STIXIntegralsUp-Regular', 'STIXIntegralsUpSm-Bold', 'STIXNonUnicode-Bold', 'STIXSizeFiveSym-Regular', 'STIXSizeFourSym-Bold', 'STIXSizeOneSym-Bold', 'STIXSizeThreeSym-Bold', 'STIXSizeTwoSym-Bold', 'STIXVariants-Bold', 'STXihei', 'Tahoma Negreta', 'Tamil MN Bold', 'Tamil Sangam MN Bold', 'Telugu MN Bold', 'Telugu Sangam MN Bold', 'Thonburi Bold', 'Times Bold', 'Times New Roman Bold', 'Times New Roman Italic', 'Times Roman', 'Trebuchet MS Bold', 'Tw Cen MT', 'Tw Cen MT Bold', 'Tw Cen MT Italic', 'Verdana Bold', 'Wide Latin', 'Yuppy SC', 'Yuppy SC Regular', 'Yuppy TC', 'Yuppy TC Regular'];

function md5(s) {
  return s;
}

function generateIdOfLength(length) {
  var id = '';
  var makeChar = function() {
    var r = Math.floor(Math.random() * 62);
    if(r < 10) {
      return r;
    }
    if(r < 36) {
      return String.fromCharCode(r + 55);
    }
    return String.fromCharCode(r + 61);
  };
  while(id.length < length) {
    id += makeChar();
  }
  return 'tdr_' + id;
}

function appendScript(url, documentHandle) {
  var head = documentHandle.getElementsByTagName('head').item(0);
  var script = documentHandle.createElement('script');
  var id = generateIdOfLength(5);
  script.setAttribute('id', id);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', url);
  head.appendChild(script);
}

function appendImg(url, handler, documentHandle) {
  var head = documentHandle.getElementsByTagName('head')[0];
  var img = documentHandle.createElement('img');
  var id = generateIdOfLength(5);
  img.setAttribute('id', id);
  img.setAttribute('style', 'visibility:hidden');
  img.setAttribute('src', url);
  if(typeof handler !== 'undefined') {
    img.onload = handler;
    img.onabort = handler;
    img.onerror = handler;
    img.oninvalid = handler;
  }
  head.appendChild(img);
}

function getFontSignature() {
  var maxTimeMs = 500;
  var td_Xc = osData.getFontsList();
  if(td_Xc.length === 0) {
    return;
  }
  var td_xo = document.createElement('canvas');
  if(!td_xo || !td_xo.getContext) {
    return;
  }
  var td_cL = td_xo.getContext('2d');
  if(!td_cL) {
    return;
  }
  if(typeof td_cL.measureText === 'undefined') {
    return;
  }
  var td_IE = 'gMcdefghijklmnopqrstuvwxyz0123456789';
  td_cL.font = '72px monospace';
  var monoWidth = td_cL.measureText(td_IE).width;
  td_cL.font = '72px serif';
  var serifWidth = td_cL.measureText(td_IE).width;
  var now = (new Date()).getTime();
  var dt = 0;
  var numMismatched = 0;
  var fontNames = '';
  for(var td_Pu = 0; td_Pu < td_Xc.length; td_Pu++) {
    var fontName = td_Xc[td_Pu];
    td_cL.font = "72px '" + fontName + "', monospace";
    var fontMonoWidth = td_cL.measureText(td_IE).width;
    td_cL.font = "72px '" + fontName + "', serif";
    var fontSerifWidth = td_cL.measureText(td_IE).width;
    if(monoWidth !== fontMonoWidth || serifWidth !== fontSerifWidth) {
      numMismatched++;
      fontNames += "," + fontName;
      console.log('Dimension mismatch for %s: %d / %d  %d / %s', fontName,
        monoWidth, fontMonoWidth, serifWidth, fontSerifWidth);
    }
    if(maxTimeMs > 0 && (td_Pu % 5) === 0) {
      dt = (new Date()).getTime() - now;
      if(dt > maxTimeMs) {
        break;
      }
    }
  }
  if(!fontNames) {
    return;
  }
  if(dt === 0) {
    dt = (new Date()).getTime() - now;
  }
  var td_Qx = md5(fontNames);
  var td_Tf = lowJackUrl2 + '/clear.png?org_id=' +
    orgId + '&session=' +
    sessionId + '&jft=' + dt;
  var td_SG = '';
  if(dubbya !== null) {
    td_SG += '&w=' + dubbya;
  }
  td_SG += '&jfn=' + numMismatched + '&jfh=' + td_Qx;
  var td_Jc = fontNames.length;
  if(td_Jc > 0) {
    var td_Bt = 1800;
    if(td_Jc > td_Bt && browserData._eq('ie') && versionData._eq("6")) {
      var td_sB = fontNames.indexOf(",", td_Bt);
      if(td_sB !== -1) {
        td_Jc = td_sB;
      }
    }
    td_SG += '&jfl=' + fontNames.substring(0, td_Jc);
  }
  td_Tf += '&jd=' + hash(td_SG);
  appendScript(td_Tf, document);
}

function td_d(td_O, td_G, td_M) {
  if(typeof td_M === 'undefined' || td_M === null) {
    td_M = 0;
  } else {
    if(td_M < 0) {
      td_M = Math.max(0, td_O.length + td_M);
    }
  }
  for(var td_f = td_M, td_R = td_O.length; td_f < td_R; td_f++) {
    if(td_O[td_f] === td_G) {
      return td_f;
    }
  }
  return -1;
}

function td_S(td_z, td_t, td_i) {
  return td_z.indexOf(td_t, td_i);
}

function td_H(td_M) {
  return td_M.replace(/^\s+|\s+$/g, '');
}

function td_c(td_L) {
  return td_L.trim();
}

function td_0Q(td_R) {
  return td_R.trim();
}

function td_1g(td_s, td_M, td_a) {
  return td_s.indexOf(td_M, td_a);
}

function td_Z() {
  if(!Array.prototype.indexOf) {
    td_1g = td_d;
  } else {
    td_1g = td_S;
  }
  if(typeof String.prototype.trim !== 'function') {
    td_0Q = td_H;
  } else {
    td_0Q = td_c;
  }
}

function td_2b(td_x) {
  if(typeof document.readyState !== 'undefined' && typeof document.readyState !== 'unknown' &&
    document.readyState === 'complete') {
    td_x();
  } else {
    if(typeof document.readyState === 'undefined') {
      setTimeout(td_x, 300);
    } else {
      var delayMs = 200;
      var td_i;
      if(typeof window !== 'undefined' &&
          typeof window !== 'unknown' &&
          window !== null) {
        td_i = window;
      } else {
        td_i = document.body;
      }
      if(td_i.addEventListener) {
        td_i.addEventListener('load', function() {
          setTimeout(td_x, delayMs);
        }, false);
      } else {
        if(td_i.attachEvent) {
          td_i.attachEvent('onload', function() {
            setTimeout(td_x, delayMs);
          }, false);
        } else {
          var td_A = td_i.onload;
          td_i.onload = new function() {
            var td_f = true;
            if(td_A !== null && typeof td_A === 'function') {
              td_f = td_A();
            }
            setTimeout(td_x, delayMs);
            td_i.onload = td_A;
            return td_f;
          };
        }
      }
    }
  }
}

function td_K() {
  if(typeof td_0v !== 'undefined') {
    td_0v();
  }
  getClientMetrics();
  if(typeof td_1x !== 'undefined') {
    td_1x();
  }
}

function OsData(osData) {
  var td_qg = osData.toLowerCase();
  if(td_qg === 'windows') {
    td_qg = 'win';
  } else {
    if(td_qg === 'iphone/ipod') {
      td_qg = 'iphone';
    }
  }
  this.os_name = td_qg;
  this._eq = function(osData) {
    return (osData === this.os_name);
  };
  this._ne = function(osData) {
    return (osData !== this.os_name);
  };
  this._gt = function(osData) {
    return (this.os_name > osData);
  };
  this._ge = function(osData) {
    return (this.os_name >= osData);
  };
  this._lt = function(osData) {
    return (this.os_name < osData);
  };
  this._le = function(osData) {
    return (this.os_name <= osData);
  };
  this._in = function(osData) {
    var td_Ry = (td_qg.constructor === String ? [td_qg] : td_qg);
    var td_cH;
    for(td_cH = 0; td_cH < td_Ry.length; td_cH++) {
      if(this.os_name === td_Ry[td_cH]) {
        return true;
      }
    }
    return false;
  };
  this.getFontsList = function() {
    if(this.os_name === 'mac') {
      return (typeof(macFonts) === 'object' ? macFonts : []);
    }
    if(this.os_name === 'linux') {
      return (typeof(linuxFonts) === 'object' ? linuxFonts : []);
    }
    if(this.os_name === 'win') {
      return (typeof(windowsFonts) === 'object' ? windowsFonts : []);
    } else {
      return [];
    }
  };
}

function BrowserData(browserData) {
  var td_mZ = browserData.toLowerCase();
  if(td_mZ === 'explorer') {
    td_mZ = 'ie';
  }
  this.browser_name = td_mZ;
  this._eq = function(browserData) {
    return (browserData === this.browser_name);
  };
  this._ne = function(browserData) {
    return (browserData !== this.browser_name);
  };
  this._in = function(browserData) {
    var td_Ga = (browserData.constructor === String ? [browserData] : browserData);
    var td_qi;
    for(td_qi = 0; td_qi < td_Ga.length; td_qi++) {
      if(this.browser_name === td_Ga[td_qi]) {
        return true;
      }
    }
    return false;
  };
}

function VersionData(version) {
  this.version = version;
  this._eq = function(td_Gs) {
    return (this.version === parseInt(td_Gs));
  };
  this._ne = function(td_je) {
    return (this.version !== parseInt(td_je));
  };
  this._gt = function(td_qd) {
    return (this.version > parseInt(td_qd));
  };
  this._ge = function(td_Wk) {
    return (this.version >= parseInt(td_Wk));
  };
  this._lt = function(td_tG) {
    return (this.version < parseInt(td_tG));
  };
  this._le = function(td_uy) {
    return (this.version <= parseInt(td_uy));
  };
}

function td_2k() {
  var url = lowJackUrl1 + '/fp/clear.png?org_id=' + orgId +
    '&session=' + sessionId +
    '&di=yes';
  appendImg(url, console.log, document);
}

function td_0v() {
  try {
    var documentHandle = getDocumentHandle();
    var td_Jy = documentHandle.createElement('iframe');
    td_Jy.setAttribute('id', 'tdz_ifrm');
    td_Jy.setAttribute('name', '');
    td_Jy.setAttribute('width', '0px');
    td_Jy.setAttribute('height', '0px');
    td_Jy.setAttribute('marginwidth', '0');
    td_Jy.setAttribute('marginheight', '0');
    td_Jy.setAttribute('frameborder', '0');
    td_Jy.setAttribute('style', 'display:none !important; z-index:-9999 !important; visibility:hidden !important');
    td_Jy.onload = null;
    td_Jy.setAttribute('src', bitchPlease);
    documentHandle.body.appendChild(td_Jy);
  } catch(err) {
    console.error(err);
  }
}

function hash(td_Y7) {
  return td_Y7;
}

function getClientMetrics() {
  osData = new OsData(userAgentData.osName);
  browserData = new BrowserData(userAgentData.identity);
  versionData = new VersionData(userAgentData.version);
  var maxHrefLength = 255;
  var now = new Date();
  now.setDate(1);
  now.setMonth(5);
  var tzOffset1 = -now.getTimezoneOffset();
  now.setMonth(11);
  var tzOffset2 = -now.getTimezoneOffset();
  var tzMin = Math.min(tzOffset1, tzOffset2);
  var tzMax = Math.max(tzOffset1, tzOffset2) - tzMin;
  var td_yU = navigator.userAgent ?
    '&jb=' + hash('lq=' + encodeURIComponent(navigator.userAgent)) :
    '';
  var td_IM = mimeTypes ? mimeTypes.length : 0;
  var td_hj = [];
  for(var td_mf = 0; td_mf < td_IM; td_mf++) {
    td_hj[td_mf] = mimeTypes[td_mf].type;
  }
  var td_fe = td_IM > 0 ? '&mt=' + md5(td_hj.join()) + '&mn=' + td_IM : '';
  var td_EB = lowJackUrl2 + "/clear.png?org_id=" + orgId + '&session=' + sessionId;
  var td_fm = '';
  if(dubbya !== null) {
    td_fm += '&w=' + dubbya;
  }
  var devicePixelRatio = 1;
  if(window.devicePixelRatio) {
    devicePixelRatio = window.devicePixelRatio;
  }
  var width = screen.width * devicePixelRatio;
  var height = screen.height * devicePixelRatio;
  td_fm += '&c=' + tzMin +
    '&z=' + tzMax +
    '&f=' + width + "x" + height + td_fe;
  td_fm += '&scd=' + screen.colorDepth;
  td_fm += '&lh=' + encodeURIComponent(location.href.substring(0,
    maxHrefLength));
  var td_sV = encodeURIComponent(document.referrer.substring(0, maxHrefLength));
  if(typeof td_2z === 'string' &&
      td_2z.length > 0 &&
      window !== window.top &&
      td_sV.length === 0) {
    td_sV = td_2z;
  }
  td_fm += '&dr=' + td_sV;
  var td_M7 = td_Ak();
  if(td_M7 !== null) {
    td_fm += '&p=' + td_M7;
  }
  var td_RI = navigator.plugins;
  if(td_RI.length) {
    var td_sR = td_RI.length;
    td_fm += '&pl=' + td_sR;
    var td_MA;
    for(td_mf = 0; td_mf < td_sR; td_mf++) {
      td_MA += td_RI[td_mf].name + td_RI[td_mf].description +
        td_RI[td_mf].filename + td_RI[td_mf].length;
    }
    td_fm += '&ph=' + md5(td_MA);
  }
  td_fm += '&hh=' + md5(orgId + sessionId);
  if(typeof td_0X !== 'undefined') {
    var td_Ai = td_0X();
    if(td_Ai) {
      td_fm += '&ex3=' + td_Ai;
    }
  }
  if(typeof td_2g !== 'undefined') {
    var td_Ya = td_2g();
    if(td_Ya) {
      td_fm += '&ex1=' + td_Ya;
    }
  }
  if(userAgentData.td_1G !== 'unknown') {
    td_fm += '&jso=' + userAgentData.td_1G;
  }
  if(userAgentData.identity !== 'unknown') {
    td_fm += '&jsb=' + userAgentData.identity;
    if(userAgentData.version !== 'unknown') {
      td_fm += " " + userAgentData.version;
    }
  }
  td_EB += '&ja=' + hash(td_fm) + td_yU;
  appendScript(td_EB, document);
  if(typeof comeToDaddy !== 'undefined') {
    comeToDaddy();
  }
  if(typeof getFontSignature !== 'undefined') {
    if(typeof maxFontScanMs === 'undefined') {
      maxFontScanMs = -1;
    }
    getFontSignature();
  }
  if(typeof td_2k !== 'undefined') {
    td_2k();
  }
  if(typeof td_1H !== 'undefined') {
    if(typeof td_0G !== 'undefined') {
      td_1H.addFeature(td_0G);
    }
    if(typeof td_0Z !== 'undefined') {
      td_1H.addFeature(td_0Z, td_0z);
    }
    if(typeof td_1l !== 'undefined') {
      td_1H.addFeature(td_1l, td_1h);
    }
    if(typeof td_1a !== 'undefined') {
      td_1H.addFeature(td_1a);
    }
    td_1H.start();
  }
  td_EB = lowJackUrl2 + '/clear.png';
  appendImg(td_EB, console.log, document);
  if(typeof td_1w !== 'undefined') {
    td_1w();
  }
  if(portTypes.length > 0) {
    var portScanner = new PortScanner(userAgentData.osName,
      userAgentData.identity, portTypes);
    if(portScanner.isValid()) {
      portScanner.scan();
    }
  }
}

var osData, browserData, versionData;

var td_0z, td_1h;

var mimeTypes = [];
if(typeof navigator !== 'undefined') {
  mimeTypes = navigator.mimeTypes;
}

var orgId = 'j8ck72di';
var sessionId = '12c8f24c089c50edea6f829feafc00a1';
var dubbya = 'c4e675bb9e6ec558';
var portTypes = ['REF:63333', 'VNC:5900', 'VNC:5901', 'VNC:5902', 'VNC:5903',
  'RDP:3389', 'APC:5279', 'TV:5939'];
var lowJackUrl1 = 'http://127.0.0.1/';
var lowJackUrl2 = 'http://127.0.0.1/'

var userAgentData = {
  td_0M: function() {
    if(typeof navigator !== 'undefined') {
      this.td_o(navigator.userAgent, navigator.vendor, navigator.platform,
        navigator.appVersion, window.opera);
    }
  },
  td_o: function(userAgentStr, td_i, td_J, td_l, td_N) {
    this.identities = [{
      string: userAgentStr,
      subString: 'OPR',
      versionSearch: 'OPR',
      identity: 'Opera'
    }, {
      string: userAgentStr,
      subString: 'Opera Mini',
      versionSearch: 'Opera Mini',
      identity: 'Opera Mini'
    }, {
      string: userAgentStr,
      subString: 'Edge',
      versionSearch: 'Edge',
      identity: 'Explorer'
    }, {
      string: userAgentStr,
      subString: 'Chrome',
      identity: 'Chrome'
    }, {
      string: userAgentStr,
      subString: 'OmniWeb',
      versionSearch: 'OmniWeb/',
      identity: 'OmniWeb'
    }, {
      string: userAgentStr,
      subString: 'FxiOS',
      identity: 'Firefox',
      versionSearch: 'FxiOS'
    }, {
      string: userAgentStr,
      subString: 'CriOS',
      identity: 'Chrome',
      versionSearch: 'CriOS'
    }, {
      string: userAgentStr,
      subString: 'XiaoMi/MiuiBrowser',
      identity: 'XiaoMi/MiuiBrowser',
      versionSearch: 'XiaoMi/MiuiBrowser'
    }, {
      string: td_i,
      subString: 'Apple',
      identity: 'Safari',
      versionSearch: 'Version'
    }, {
      prop: td_N,
      identity: 'Opera',
      versionSearch: 'Version'
    }, {
      string: td_i,
      subString: 'iCab',
      identity: 'iCab'
    }, {
      string: td_i,
      subString: 'KDE',
      identity: 'Konqueror'
    }, {
      string: userAgentStr,
      subString: 'Firefox',
      identity: 'Firefox'
    }, {
      string: td_i,
      subString: 'Camino',
      identity: 'Camino'
    }, {
      string: userAgentStr,
      subString: 'Netscape',
      identity: 'Netscape'
    }, {
      string: userAgentStr,
      subString: 'MSIE',
      identity: 'Explorer',
      versionSearch: 'MSIE'
    }, {
      string: userAgentStr,
      subString: 'IEMobile',
      identity: 'IEMobile',
      versionSearch: 'IEMobile'
    }, {
      string: userAgentStr,
      subString: 'Trident',
      identity: 'Explorer',
      versionSearch: 'rv'
    }, {
      string: userAgentStr,
      subString: 'Gecko',
      identity: 'Mozilla',
      versionSearch: 'rv'
    }, {
      string: userAgentStr,
      subString: 'Mozilla',
      identity: 'Netscape',
      versionSearch: 'Mozilla'
    }];
    this.operatingSystems = [{
      string: td_J,
      subString: 'Win',
      identity: 'Windows'
    }, {
      string: td_J,
      subString: 'Mac',
      identity: 'Mac'
    }, {
      string: userAgentStr,
      subString: 'Windows Phone',
      identity: 'Windows Phone'
    }, {
      string: userAgentStr,
      subString: 'Android',
      identity: 'Android'
    }, {
      string: userAgentStr,
      subString: 'OpenBSD',
      identity: 'OpenBSD'
    }, {
      string: userAgentStr,
      subString: 'SunOS',
      identity: 'SunOS'
    }, {
      string: td_J,
      subString: 'Linux armv7l',
      identity: 'Android'
    }, {
      string: td_J,
      subString: 'Linux',
      identity: 'Linux'
    }, {
      string: td_J,
      subString: 'BlackBerry',
      identity: 'BlackBerry'
    }, {
      string: userAgentStr,
      subString: 'iPhone',
      identity: 'iPhone/iPod'
    }, {
      string: userAgentStr,
      subString: 'iPad',
      identity: 'iPad'
    }];
    this.windowsVersions = [{
      identity: 'Windows',
      versionMap: [{
        s: 'Windows 10',
        r: /(Windows 10.0|Windows NT 10.0)/
      }, {
        s: 'Windows 8.1',
        r: /(Windows 8.1|Windows NT 6.3)/
      }, {
        s: 'Windows 8',
        r: /(Windows 8|Windows NT 6.2)/
      }, {
        s: 'Windows 7',
        r: /(Windows 7|Windows NT 6.1)/
      }, {
        s: 'Windows Vista',
        r: /Windows NT 6.0/
      }, {
        s: 'Windows Server 2003',
        r: /Windows NT 5.2/
      }, {
        s: 'Windows XP',
        r: /(Windows NT 5.1|Windows XP)/
      }, {
        s: 'Windows 2000',
        r: /(Windows NT 5.0|Windows 2000)/
      }, {
        s: 'Windows ME',
        r: /(Win 9x 4.90|Windows ME)/
      }, {
        s: 'Windows 98',
        r: /(Windows 98|Win98)/
      }, {
        s: 'Windows 95',
        r: /(Windows 95|Win95|Windows_95)/
      }, {
        s: 'Windows NT 4.0',
        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
      }, {
        s: 'Windows CE',
        r: /Windows CE/
      }, {
        s: 'Windows 3.11',
        r: /Win16/
      }]
    }, {
      identity: 'Mac',
      versionMap: [{
        s: 'Mac OS X',
        r: /Mac OS X/
      }, {
        s: 'Mac OS',
        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      }]
    }, {
      identity: 'Windows Phone',
      versionMap: [{
        s: 'Windows Phone 6.0',
        r: /Windows Phone 6.0/
      }, {
        s: 'Windows Phone 7.0',
        r: /Windows Phone 7.0/
      }, {
        s: 'Windows Phone 8.0',
        r: /Windows Phone 8.0/
      }, {
        s: 'Windows Phone 8.1',
        r: /Windows Phone 8.1/
      }, {
        s: 'Windows Phone 10.0',
        r: /Windows Phone 10.0/
      }]
    }];
    this.identity = this.getIdentity(this.identities) || 'unknown';
    this.version = this.getVersion(userAgentStr) || this.getVersion(td_l) ||
      'unknown';
    this.osName = this.getIdentity(this.operatingSystems) || 'unknown';
    this.td_1G = this.td_B(this.windowsVersions, this.osName, userAgentStr, td_l) || this.osName;
  },
  td_B: function(td_b, td_X, td_T, td_c) {
    var td_U = td_T;
    var td_s = td_c;
    var osName = td_X;
    var td_r;
    for(var td_y = 0; td_y < td_b.length; td_y++) {
      if(td_b[td_y].identity === td_X) {
        for(var td_V = 0; td_V < td_b[td_y].versionMap.length; td_V++) {
          var td_S = td_b[td_y].versionMap[td_V];
          if(td_S.r.test(td_U)) {
            osName = td_S.s;
            if(/Windows/.test(osName)) {
              return osName;
            }
            break;
          }
        }
        break;
      }
    }
    switch(osName) {
      case 'Mac OS X':
        osName = null;
        var td_F = /(Mac OS X 10[\.\_\d]+)/.exec(td_U);
        if(td_F !== null && td_F.length >= 1) {
          osName = td_F[1];
        }
        break;
      case 'Android':
        osName = null;
        var td_R = /(Android[ ]*[\/\.\_\d]+)/.exec(td_U);
        if(td_R !== null && td_R.length >= 1) {
          osName = td_R[1];
        }
        break;
      case 'iPad':
      case 'iPhone/iPod':
        osName = null;
        td_r = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_s);
        if(td_r !== null) {
          var td_q = td_r.length >= 1 ? td_r[1] : 'unknown';
          var td_x = td_r.length >= 2 ? td_r[2] : 'unknown';
          var td_t = td_r.length >= 3 ? td_r[3] | "0" : "0";
          osName = 'iOS ' + td_q + "." + td_x + "." + td_t;
        }
        break;
      default:
        return null;
    }
    return osName;
  },
  getIdentity: function(td_O) {
    for(var td_d = 0; td_d < td_O.length; td_d++) {
      var td_w = td_O[td_d].string;
      var td_U = td_O[td_d].prop;
      this.versionSearchString = td_O[td_d].versionSearch || td_O[td_d].identity;
      if(td_w) {
        if(td_w.indexOf(td_O[td_d].subString) !== -1) {
          return td_O[td_d].identity;
        }
      } else {
        if(td_U) {
          return td_O[td_d].identity;
        }
      }
    }
  },
  getVersion: function(td_P) {
    var td_2t = td_P.indexOf(this.versionSearchString);
    if(td_2t === -1) {
      return;
    }
    return parseFloat(td_P.substring(td_2t + this.versionSearchString.length + 1));
  },
  identities: {},
  operatingSystems: {},
  windowsVersions: {}
};

function getDocumentHandle() {
  try {
    var windowTopDocument = window.top.document;
    var td_p = windowTopDocument.forms.length;
    return windowTopDocument;
  } catch(err) {
    return document;
  }
}

function comeToDaddy() {
  var id = generateIdOfLength(5);
  var iframe = document.createElement('iframe');
  iframe.id = id;
  iframe.width = "0";
  iframe.height = "0";
  iframe.setAttribute('style', ['color:rgba(0,0,0,0)', 'float:left',
    'position:absolute', 'top:-200', 'left:-200', 'border:0px'].join(';'));
  iframe.setAttribute('src',
    lowJackUrl2 + '/ls_fp.html?' +
    'org_id=' + orgId +
    '&session_id=' + sessionId);
  document.body.appendChild(iframe);
}

function PortScanner(osName, browserName, portTypes, logFn) {
  var td_td = function(td_rw, td_Fj, td_aq, td_yR, td_m3, td_f8) {
    if(typeof td_aq === 'undefined' || typeof td_f8 === 'undefined') {
      return false;
    }
    if(td_f8 < td_aq / 2) {
      return true;
    }
    return false;
  };
  this.timeout = 1500;
  this.validate = false;
  this.isValid = function() {
    return this.validate;
  };
  if(typeof WebSocket === 'undefined') {
    return;
  }
  var scanProfiles = [
    ["WIN:MAC", "Firefox:Chrome:Explorer:Safari", "REF", td_td],
    ["WIN", "Firefox:Chrome:Explorer", "VNC:RDP", td_td],
    ["WIN", "Firefox:Chrome:Explorer:Safari", "TV", td_td],
    ["WIN", "Firefox:Chrome:Explorer", "APC", td_td]
  ];
  if(osName === 'Windows') {
    this.os = 'WIN';
  } else {
    if(osName === 'Mac') {
      this.os = 'MAC';
    } else {
      this.os = osName;
    }
  }
  this.browser = browserName;
  this.ip = '127.0.0.1';

  logFn = logFn || console.log;

  if(typeof logFn === 'function') {
    this.logFunction = logFn;
  }
  this.log = function(td_um) {
    if(typeof this.logFunction !== 'undefined') {
      this.logFunction(td_um);
    }
  };
  this.scanPorts = [];
  for(var i = 0; i < portTypes.length; i++) {
    var profile = portTypes[i].split(":");
    var td_FT;
    var td_kI;
    if(profile.length === 2) {
      td_kI = profile[0];
      td_FT = profile[1];
    } else {
      if(profile.length === 3) {
        if(profile[1] !== this.os) {
          continue;
        }
        td_kI = profile[0];
        td_FT = profile[2];
      } else {
        this.log('Wrong Format of scan ports: ' + portTypes[i]);
        continue;
      }
    }
    for(var j=0; j<scanProfiles.length; j++) {
      if(scanProfiles[j][0].indexOf(this.os) === -1) {
        continue;
      }
      if(scanProfiles[j][1].indexOf(this.browser) === -1) {
        continue;
      }
      if(scanProfiles[j][2].indexOf(td_kI) === -1) {
        continue;
      }
      this.scanPorts.push([td_FT, td_kI, scanProfiles[j][3]]);
      break;
    }
  }
  // if(this.scanPorts.length > 1) {
    this.validate = true;
  // }
  if(this.validate === false) {
    return;
  }
  var td_VV = this;
  var td_PC;
  var td_ZO = 0;
  var td_NI = 0;
  var td_K3 = 1500;
  var td_X7 = {};
  var td_KJ = [];
  var td_NE = function() {
    td_X7[td_ZO + '_open'] = true;
    td_Bp(td_ZO + ':ws_open');
  };
  var td_g6 = function(td_r6) {
    td_X7[td_ZO + '_error'] = true;
    td_VV.log(td_ZO + ':ws_error: data, ' + td_r6.data +
      ', readyState, ' + this.readyState);
  };
  var td_Hh = function(td_qa) {
    td_X7[td_ZO + '_close'] = true;
    td_VV.log(td_ZO + ':ws_close: code, ' + td_qa.code +
      ', reason, ' + td_qa.reason);
  };

  function td_gp() {
    if(!td_IM()) {
      return;
    }
    td_PC = (new Date).getTime();
    try {
      td_ex = new WebSocket('wss://' + td_VV.ip + ":" + td_ZO);
      td_ex.onerror = td_g6;
      td_ex.onopen = td_NE;
      td_ex.onclose = td_Hh;
      setTimeout(td_AO, 5);
    } catch (td_WS) {
      return;
    }
  }

  function td_AO() {
    var td_pG = (new Date).getTime() - td_PC;
    if(td_ex.readyState === 0) {
      if(td_pG > td_K3) {
        td_X7[td_ZO + '_interval'] = td_K3;
        td_VV.log(td_ZO + ' - time exceeded');
        setTimeout(td_gp, 1);
        td_PC = (new Date).getTime();
      } else {
        setTimeout(td_AO, 5);
      }
    } else {
      td_VV.log(td_ZO + ': interval: ' + td_pG);
      td_X7[td_ZO + '_interval'] = td_pG;
      setTimeout(td_gp, 1);
    }
  }

  function td_IM() {
    if(td_NI >= td_VV.scanPorts.length) {
      td_HE();
      return false;
    }
    td_ZO = td_VV.scanPorts[td_NI++][0];
    return true;
  }

  function td_HE() {
    var td_LN = td_X7[td_VV.scanPorts[0][0] + '_error'];
    var td_w7 = td_X7[td_VV.scanPorts[0][0] + '_close'];
    var td_Aq = td_X7[td_VV.scanPorts[0][0] + '_interval'];
    var td_IG = td_VV.scanPorts[0][0] + "-" + td_Aq;
    for(var td_SL = 1; td_SL < td_VV.scanPorts.length; td_SL++) {
      var td_nK = td_X7[td_VV.scanPorts[td_SL][0] + '_error'];
      var td_HR = td_X7[td_VV.scanPorts[td_SL][0] + '_close'];
      var td_bS = td_X7[td_VV.scanPorts[td_SL][0] + '_interval'];
      if(td_VV.scanPorts[td_SL][2](td_LN, td_w7, td_Aq, td_nK, td_HR, td_bS)) {
        var td_sS = td_VV.scanPorts[td_SL][1] + ":" +
          td_VV.scanPorts[td_SL][0];
        td_KJ.push(td_sS);
        td_VV.log('FOUND Open Port: ' + td_sS);
      }
      td_IG += "," + td_VV.scanPorts[td_SL][0] + "-" + td_bS;
    }
    var td_uS = 'rd=' + td_KJ.join() + '&rdt=' + td_IG;
    var td_sZ = lowJackUrl2 + '/clear.png?org_id=' + orgId +
      '&session_id=' + sessionId +
      '&je=' + hash(td_uS);
    appendScript(td_sZ, document);
    if(typeof td_VV.logFunction !== 'undefined') {
      td_VV.log('<br><b>detail</b>');
      for(var td_YY in td_X7) {
        if(td_X7.hasOwnProperty(td_YY)) {
          td_VV.log(td_YY + ' : ' + td_X7[td_YY]);
        }
      }
    }
  }
  this.scan = function() {
    if(!this.isValid()) {
      return;
    }
    if(typeof this.scanPorts !== 'object' || this.scanPorts.length === 0) {
      return;
    }
    td_ZO = 0;
    td_KJ = [];
    setTimeout(td_gp, this.timeout);
  };
}

function getPluginInfo(checkMimeTypes) {
  checkMimeTypes = checkMimeTypes.constructor === String ?
    [checkMimeTypes] : checkMimeTypes;
  var name = 'false';
  var version = 'false';
  for(var i = 0; i < checkMimeTypes.length; i++) {
    var mimeType = mimeTypes[checkMimeTypes[i]];
    if(mimeType && mimeType.enabledPlugin) {
      var plugin = mimeType.enabledPlugin;
      if(plugin.name) {
        name = plugin.name;
      } else {
        name = 'true';
      }
      version = plugin.description;
      break;
    }
  }
  return [name, version];
}

function getFlashVersion() {
  var td_mo = 'false';
  var td_UE = getPluginInfo(['application/x-shockwave-flash',
    'application/futuresplash']);
  var td_hV = td_UE[0];
  var td_zD = td_UE[1];
  if(td_hV !== 'false' && td_hV !== 'true') {
    if((/Flash/i).test(td_hV)) {
      td_mo = 'true';
    }
  }
  if(td_mo === 'true' && td_zD) {
    var td_Yl = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_zD);
    if(td_Yl) {
      td_mo = td_Yl[0];
    }
  }
  return td_mo;
}

function td_zj() {
  var td_Cy = 'false';
  var td_xy = getPluginInfo(['application/x-mplayer2', 'application/asx']);
  var td_bK = td_xy[0];
  if(td_bK !== 'false' && td_bK !== 'true') {
    if((/Windows.*Media.*Firefox Plugin.*/i).test(td_bK)) {
      td_Cy = 'true';
    }
  }
  return td_Cy;
}

function td_Sz() {
  var td_f9 = 'false';
  var td_PV = getPluginInfo(['application/pdf']);
  var td_kh = td_PV[0];
  var td_B7 = td_PV[1];
  if(td_kh !== 'false' && td_kh !== 'true') {
    if((/Adobe Acrobat/i).test(td_kh)) {
      td_f9 = 'true';
    }
  }
  if(td_f9 === 'true' && td_B7) {
    var td_ZW = /[\d][\d\.\_,-]*/.exec(td_B7);
    if(td_ZW) {
      td_f9 = td_ZW[0];
    } else {
      td_f9 = '8.0/later';
    }
  }
  return td_f9;
}

function td_d8() {
  var td_t4 = 'false';
  if(navigator.platform && (/linux/i).test(navigator.platform)) {
    td_t4 = 'false';
  } else {
    var td_S6 = getPluginInfo(["video/quicktime", "application/x-quicktimeplayer",
      "image/x-macpaint", "image/x-quicktime"]);
    var td_PG = td_S6[0];
    if(td_PG !== 'false' && td_PG !== 'true') {
      if((/QuickTime.*(Plug-in|Plugin).*/i).test(td_PG)) {
        td_t4 = 'true';
        var td_iM = /[\d][\d\.\_,-]*/.exec(td_PG);
        if(td_iM) {
          td_t4 = td_iM[0];
        }
      }
    }
  }
  return td_t4;
}

function td_rD() {
  var td_aj = 'false';
  var td_yo = getPluginInfo(['application/x-director']);
  var td_vz = td_yo[0];
  var td_n3 = td_yo[1];
  if(td_vz !== 'false' && td_vz !== 'true') {
    if((/Shockwave for Director/i).test(td_vz)) {
      td_aj = 'true';
    }
  }
  if(td_aj === 'true' && td_n3) {
    var td_R2 = /[\d][\d\.\_,-]*/.exec(td_n3);
    if(td_R2) {
      td_aj = td_R2[0];
    }
  }
  return td_aj;
}

function td_Pd() {
  var td_z1 = 'false';
  var td_nB = getPluginInfo(['application/vnd.rn-realplayer-javascript']);
  var td_jq = td_nB[0];
  var td_hp = td_nB[1];
  if(td_jq !== 'false' && td_jq !== 'true') {
    if((/RealPlayer.*Version.*/i).test(td_jq)) {
      td_z1 = 'true';
    }
  }
  if(td_z1 === 'true' && td_hp) {
    var td_Dt = /[\d][\d\.\_,-]*/.exec(td_hp);
    if(td_Dt) {
      td_z1 = td_Dt[0];
    } else {
      td_z1 = '5.0';
    }
  }
  return td_z1;
}

function td_n0() {
  var td_vU = 'false';
  var td_U7 = getPluginInfo(['application/x-vlc-plugin']);
  var td_A8 = td_U7[0];
  var td_rm = td_U7[1];
  if(td_A8 !== 'false' && td_A8 !== 'true') {
    if((/VLC.*(Plug-in|Plugin).*/i).test(td_A8)) {
      td_vU = 'true';
    }
  }
  if(td_vU === 'true' && td_rm) {
    var td_lF = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_rm);
    if(td_lF) {
      td_vU = td_lF[2];
    }
  }
  return td_vU;
}

function td_J5() {
  var td_CL = 'false';
  var td_rL = getPluginInfo(['application/x-devalvrx']);
  var td_s3 = td_rL[0];
  var td_dV = td_rL[1];
  if(td_s3 !== 'false' && td_s3 !== 'true') {
    if((/DevalVR/i).test(td_s3)) {
      td_CL = 'true';
    }
  }
  if(td_CL === 'true' && td_dV) {
    var td_wC = /(Plugin) ([\d][\d\.\,]*)/.exec(td_dV);
    if(td_wC) {
      td_CL = td_wC[2];
    }
  }
  return td_CL;
}

function td_zv() {
  var td_i9 = 'false';
  var td_rq = getPluginInfo(["image/svg-xml", "image/svg+xml"]);
  var td_md = td_rq[0];
  var td_UM = td_rq[1];
  if(td_md !== 'false' && td_md !== 'true') {
    if((/SVG Viewer/i).test(td_md)) {
      td_i9 = 'true';
    }
  }
  if(td_i9 === 'true' && td_UM) {
    var td_bW = /[\d][\d\.]*/.exec(td_UM);
    if(td_bW) {
      td_i9 = td_bW[0];
    }
  }
  return td_i9;
}

function td_mC() {
  var td_AL = 'false';
  var td_hu = getPluginInfo(["application/x-java-applet", "application/x-java-vm",
    "application/x-java-bean"]);
  var td_o1 = td_hu[0];
  var td_JF = td_hu[1];
  if(td_o1 !== 'false' && td_o1 !== 'true') {
    if((/Java/i).test(td_o1)) {
      td_AL = 'true';
    }
  }
  if(td_AL === 'true' && td_JF) {
    var td_CT = /[\d][\d\._]*/.exec(td_JF);
    if(td_CT) {
      td_AL = td_CT[0];
    }
  }
  return td_AL;
}

function td_sE(td_Va, td_J3) {
  var td_lO = null;
  var td_eA = false;
  try {
    td_lO = new ActiveXObject(td_Va);
    td_eA = true;
  } catch (td_Ai) {}
  if(typeof td_J3 !== 'undefined') {
    return td_eA;
  }
  return td_lO;
}

function td_oI() {
  var td_n8 = 'ShockwaveFlash.ShockwaveFlash';
  var td_e2, td_T1 = null,
    td_NU = null,
    td_IB = null;
  var td_CR = 15;
  var td_iU = 2;
  for(td_e2 = td_CR; td_e2 > td_iU; td_e2--) {
    td_NU = td_sE(td_n8 + "." + td_e2);
    if(td_NU) {
      td_T1 = td_e2.toString();
      break;
    }
  }
  if(td_T1 === "6") {
    try {
      td_NU.AllowScriptAccess = 'always';
    } catch (td_Xe) {
      td_IB = '6,0,21,0';
    }
  } else {
    if(td_NU) {
      try {
        td_IB = td_NU.GetVariable('$version');
        var td_G0 = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_IB);
        if(td_G0) {
          td_IB = td_G0[0];
        } else {
          td_IB = 'true';
        }
      } catch (td_Xe) {
        td_IB = 'true';
      }
    }
  }
  if(!td_IB && td_T1) {
    td_IB = td_T1;
  }
  if(!td_IB) {
    td_IB = 'false';
  }
  return td_IB;
}

function td_Dv() {
  var td_wU = 'wmplayer.ocx';
  var td_WW = 'false';
  var td_h0 = td_sE(td_wU);
  if(td_h0) {
    td_WW = td_h0.versionInfo;
  }
  return td_WW;
}

function td_yv() {
  var td_nS = 'PDF.pdfCtrl';
  var td_KN = 'AcroPDF.PDF.1';
  var td_fD;
  var td_LL = 'false';
  var td_qq = td_sE(td_KN);
  if(!td_qq) {
    var td_xD = 10;
    var td_K3 = 1;
    for(td_fD = td_xD; td_fD > td_K3; td_fD--) {
      td_qq = td_sE(td_nS + "." + td_fD);
      if(td_qq) {
        td_LL = td_LL.toString();
        break;
      }
    }
    if(!td_qq) {
      td_qq = td_sE(td_nS + '.1');
      if(td_qq) {
        td_LL = '4.0';
      }
    }
  } else {
    td_LL = '7.0/later';
  }
  return td_LL;
}

function td_R9() {
  var td_gg = 'QuickTime.QuickTime';
  var td_gP = 'false';
  var td_Jn = null;
  try {
    td_Jn = td_sE(td_gg);
  } catch (td_ZC) {}
  if(td_Jn) {
    if(td_Jn.QuickTimeVersion) {
      td_gP = td_Jn.QuickTimeVersion.toString(16);
      td_gP = td_gP.charAt(0) + "." + td_gP.charAt(1) + "." + td_gP.charAt(2);
    } else {
      td_gP = 'true';
    }
  }
  return td_gP;
}

function td_TO() {
  var td_YH = 'SWCtl.SWCtl';
  var td_pG = 'false',
    td_aF = null,
    td_jg;
  try {
    td_aF = td_sE(td_YH).ShockwaveVersion('');
  } catch (td_jg) {}
  if(typeof td_aF === 'string' && td_aF.length > 0) {
    td_pG = td_aF;
  } else {
    if(td_sE(td_YH + '.8', 1)) {
      td_pG = "8";
    } else {
      if(td_sE(td_YH + '.7', 1)) {
        td_pG = "7";
      } else {
        if(td_sE(td_YH + '.1', 1)) {
          td_pG = "6";
        }
      }
    }
  }
  return td_pG;
}

function td_Ak() {
  var td_vp = 0;
  var td_lp;
  var td_r1 = 'false';
  var td_TD = 'false';
  var td_nE = 'false';
  var td_qG = 'false';
  var td_Hq = 'false';
  var td_PX = 'false';
  var td_me = 'false';
  var td_Kw = 'false';
  var td_PI = 'false';
  var td_qq = 'false';
  if(mimeTypes && mimeTypes.length) {
    td_vp = mimeTypes.length;
  }
  if(window.ActiveXObject || 'ActiveXObject' in window) {
    if(td_vp > 0) {
      td_r1 = getFlashVersion();
    }
    if(td_r1 === 'false') {
      td_r1 = td_oI();
    }
    td_TD = td_Dv();
    td_nE = td_yv();
    td_qG = td_R9();
    td_Hq = td_TO();
  } else {
    if(td_vp > 0) {
      td_r1 = getFlashVersion();
      td_TD = td_zj();
      td_nE = td_Sz();
      td_qG = td_d8();
      td_Hq = td_rD();
      td_PX = td_Pd();
      td_me = td_n0();
      td_Kw = td_J5();
      td_PI = td_zv();
      td_qq = td_mC();
    }
  }
  td_lp = 'plugin_flash^' + td_r1 + "!";
  td_lp += "plugin_windows_media_player^" + td_TD + "!";
  td_lp += "plugin_adobe_acrobat^" + td_nE + "!";
  td_lp += "plugin_quicktime^" + td_qG + "!";
  td_lp += "plugin_shockwave^" + td_Hq + "!";
  td_lp += "plugin_realplayer^" + td_PX + "!";
  td_lp += "plugin_vlc_player^" + td_me + "!";
  td_lp += "plugin_devalvr^" + td_Kw + "!";
  td_lp += "plugin_svg_viewer^" + td_PI + "!";
  td_lp += "plugin_java^" + td_qq;
  return td_lp;
}

function initialize() {
  userAgentData.td_0M();
  td_Z();
  td_2b(td_K);
}

var bitchPlease = "http://127.0.0.1/?&tdrnd=198480d6970dff26&session_id=12c8f24c089c50edea6f829feafc00a1&org_id=j8ck72di&hp=.co-operativebank.co.uk/CBIBSWeb/login.do.co-operativebank.co.uk/CBIBSWeb/start.do.de/portal/portal/x.entropay.com/basemenu/prot/x.facebook.comx.nationet.com/x.netbank.commbank.com.au/netbank/bankmainx.npbs.co.uk/netmastergoldbanking/x.nwolb.xlogin.aspx?refereridentx.rbsdigital.xAccountSummaryx.smile.co.uk/SmileWeb/login.do.smile.co.uk/SmileWeb/start.do.yandex.rux/CapitalOne_Consumer/x/easypay.by/x/sbank.ru/x53.com/servlet/efsonlinex://online.wellsfargo.com/x://secure.assist.ru/assistid/protected/main.doxabbeynational.co.uk/EBAN_ENS/BtoChannelDriverxalliance-leicesterxaltergold.com/login.phpxamericanexpress.com/myca/intl/acctsumm/emea/accountSummaryxbancaintesa.it/xbankcardservices.co.ukxbankofamerica.com/xbanquepopulaire.fr/xbnpparibas.net/xcahoot.comxcapitaloneonline.co.uk/CapitalOne_Consumer/Transactionsxcbonline.co.uk/ralu/reglm-web/setupSecurityQuestionPagexcibc.comxPreSignOnxcibc.comxSignOnxcitibank.ru/xclient.uralsibbank.ruxco-operativebank.co.uk/CBIBSWeb/loginSpixcommerceonlinebanking.comxcoventrybuildingsociety.co.ukxdeutsche-bank.dexdiscovercard.com/cardmembersvcs/strongauth/app/sa_mainxebanking.bawag.comxebc_ebc1961xegg.com/customer/movemoneyxegg.com/customer/yourmoneyxfacebook.com/xhalifax-online.co.ukxMyAccountsxhalifax-online.co.uk/x/Mhalifax-online.co.uk/personalxhsbc.co.uk/1/2/personal/internet-banking/xhsbc.comxhttps://banking.postbank.de/app/finanzstatus.init.do;jsessionidxib.fineco.it/FinecoWeb/BonificiServletxib.fineco.it/FinecoWeb/jsp/Main/HBFineco.jspxib.fineco.it/FinecoWeb/jsp/Main/Principale.jspxibank.alfabank.ruxin-biz.it/xipko.plxlibertyreserve.com/x/historylibertyreserve.com/x/loginwww.libertyreserve.com/x/Core.jswww.libertyreserve.com/x/transfer.libertyreserve.com/x/commonscript.jslloydstsb.co.uk/personal/a/account_overview/xmbna.co.ukxmenyala.ruxmoney.yandex.ruxmoneybookers.com/app/login.plxmoneymail.ruxmy.ebay.co.uk/ws/eBayISAPI.dll?MyEbayxmy.ebay.com/ws/eBayISAPI.dll?MyEbayxmy.ebay.fr/ws/eBayISAPI.dll?MyEbayxmybusinessbank.co.ukxnationet.com/AppServices/SignOn/SignOnProcess/RcaSignOnxnpbs.co.ukxnwolb.com/AccountSummaryxnwolb.com/Statementsxnwolb.com/TransfersLandingPagexoltx.fidelity.com/x/x/ofsummary/summaryxonline.lloydstsb.co.ukxonlinebanking.mandtbank.com/summary/AccountSummaryxpassport.yandex.ruxpaypal.com/x/cgi-bin/webscr?cmd=_accountxpaypal.com/x/cgi-bin/webscr?cmd=_login-done&login_access=xpaypal.com/us/cgi-bin/webscr?cmd=_login-done&login_access=xposte.it/xpsk.co.at/xsecure.lloydstsb.co.uk/personal/a/account_overviewxsmile.co.uk/SmileWeb/passcodexusaa.com/xusbank.com/internetBanking/RequestRouter?requestCmdId=Gxwachovia.comxybonline.co.uk/ralu/reglm-web/setupSecurityQuestionPagex.amazon.fr/xhistory/orders/view.htmlx.banquepopulaire.frxShowPortal.dox.bnpparibasfortis.bexHome_Logon.aspx.cdiscount.com/Account/Home.aspxx.cmb.frxaccueil.jspx.credit-agricole.frxentreeBam?sessionSAGx.labanquepostale.fr/xreleveCPP-releve_ccp.eax.secure.bnpparibas.net/NSFR?Actionx.secure.lcl.frxAccueilxcredem.it/OneToOne/ebank/functionsxmijn.ing.nl/xonline.ybs.co.ukxwww.discover.com/xorder.cdiscount.comxCustomer.aspxxsealinfo.verisign.com/splash?form_filexvos-comptes.credit-du-nord.fr/CDC_TableauDeBord_0.asp?xvoscomptesenligne.labanquepostale.frxwww.x.caisse-epargne.fr/Portail.aspxxwww.exabanque.netxonglet.phpxdeutsche-bank.de/xnorisbank.de/xpostbank.de/xtargobank.de/x.x.de/portal/x.bankofamerica.com/x/commonscript.js.bmo.com/OLB?id=x.bmo.com/RMC?id=x.chase.com/x.aspxx.chase.com/js/Reporting.jsx.koodomobile.com/account/selfserve/x/xaccountId=x.payment.ru/x.scotiabank.com/portal/index.jsp?xbancopopular.es/empresasxcreval.it/login2007/loginSiciliano.aspxfirst-direct.com/xipko.plxmybusinessbank.co.ukxsanpaoloimi.com/xulsterbankanytimebanking.x/login.aspxx";

initialize();