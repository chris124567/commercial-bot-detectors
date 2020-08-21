/* This file is the result of running `node threatmetrix_deobfuscator.js > threatmetrix_deobfuscated.js` */
var a = a || {};
a.td_1h = function (cg, ch) {
  var ci = [""];
  var cj = 0;
  for (var ck = 0; ck < ch.length; ++ck) {
    ci.push(String.fromCharCode(cg.charCodeAt(cj) ^ ch.charCodeAt(ck)));
    cj++;
    if (cj >= cg.length) {
      cj = 0;
    }
  }
  return ci.join("");
};
a.td_0w = function (cl) {
  this.td_c = cl;
  this.td_d = "";
  this.td_f = function (cm, cn) {
    if (0 === this.td_d.length) {
      var co = this.td_c.substr(0, 32);
      var cp = "";
      for (var cq = 32; cq < cl.length; cq += 2) {
        cp += String.fromCharCode(parseInt(cl.substr(cq, 2), 16));
      }
      this.td_d = a.td_1h(co, cp);
    }
    return this.td_d.substr(cm, cn);
  };
};
a.td_4N = function (cr) {
  if (cr === null || cr.length === null) {
    return null;
  }
  var cs = null;
  try {
    var ct = "";
    var cu = [];
    var cv = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
    var cw = 0;
    for (var cx = 0; cx < cr.length; ++cx) {
      if (65 + cw >= 126) {
        cw = 0;
      }
      var cy = (cv + cr.charCodeAt(cw++)).slice(-3);
      cu.push(cy);
    }
    var cz = cu.join("");
    cw = 0;
    for (var cx = 0; cx < cz.length; ++cx) {
      if (65 + cw >= 126) {
        cw = 0;
      }
      var cA = String.fromCharCode(65 + cw++);
      if (cA !== "undefined") {
        ct += cA;
      }
    }
    cs = a.td_1h(ct, cz);
  } catch (cB) {
    return null;
  }
  return cs;
};
a.td_1H = function (cC) {
  if (cC === null || cC.length === null) {
    return null;
  }
  var cD = "";
  try {
    var cE = "";
    var cF = 0;
    for (var cG = 0; cG < cC.length; ++cG) {
      if (65 + cF >= 126) {
        cF = 0;
      }
      var cH = String.fromCharCode(65 + cF++);
      if (cH !== "undefined") {
        cE += cH;
      }
    }
    var cI = a.td_1h(cE, cC);
    var cJ = cI.match(/.{1,3}/g);
    for (var cG = 0; cG < cJ.length; ++cG) {
      cD += String.fromCharCode(parseInt(cJ[cG], 10));
    }
  } catch (cK) {
    return null;
  }
  return cD;
};
var a = a || {};
if (typeof a.td_4j === "undefined") {
  a.td_4j = [];
}
var b, c, d, e, f, g, h, i, j, k, l = [], m, n, o, p, q, r, s = [], t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = null;
if (typeof navigator !== "undefined") {
  l = navigator.mimeTypes;
}
a.td_4j.push(function () {
  var cL = new a.td_0w("5740f078c2964714b8c1dc2871a2ba115D434040150A18170B1C5658585E5F514F550645160A4A165954151D04111E425C536B56161E5F4C0E5E02757D6402672B7C5E0252270A7C06012504522709040C0F04752507070F53010E02760709035A7E530E0B1155675E555C5E03130854020344161555444B0A5D57695D530C05535A57075C05530E0F5059045305090707540D050454545B540500015103530755090153505B57000705575453500909060303545E09520F00015C5403565552510B07010001570A510551075A0006175B585A53030D560B010B0A0155540752565D01525D565A4C434112084D4E52555B061A564B5353564D51565B1B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258074408570C59445C44124044024C1D5A525A061F524F5B075F4A005D551857111D010D545047041A4008570C7B2A610A657D730C07547C5B755553760E077759075B590174760004075603000C210201010C71010B0D4A046E0D070F545643585755554117465247430F5F59670A560407055505025A5E02075C020A0E06555904500208045753575351070E0F06065B0503065356560006095457045E0600590A515506550D0E51070503525A54535D5007045504065A06030257020D0F5056140C0E5F52500A55030409040F02510F50005253575B0D0B4510134102181E0D531058540601475B5B015F544C02424A460154555E540D0C551717444D5A465741140F4952445255030409040F02510F50005253575B0D1050074D561656504F5D0C0D585F501A595512425E404D5C5C421B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258074405580C4C5247581244474B591D16555059001A041500550A4D51575A1E07424D155E416A51441E0E445A5458717065076478705F0B55755C270308730751745A540809057277075607070B54067B060C00097252070C43033C5B5C0A5D00405B0406054511475515435E570D6D505209060056560E5B5705550A590F0750565A5703520C0256540553000F5A055C0256040605005A5709015B020C015750035A59020502530C090307540B06500E5750510207060807530151540C0704595355475F5E5B54510D070355015005585502510551005B5A040C174648440B4E1D01055F001B511953025E195B0C5F165044185D473D5E131F0C175F540C72286151327875080402745E740608270409700C02080C527D20065454020B000523025A56097705085B42016F5E5C5E5E58440D520600121E105417105B57596E08565F50005301010C5607060F595B0408520C0103575B0D01550700050F0E06040600520600575500080308070C555408070C0F0200555C5B080154510B5253565306070202510750520302510C5307015703115F5B0C5B060C05505001040600515407055457540D050E444348100816195C195E5A0E510D54490E574C4558191C0C04451E53471B530A55564A4D4257510B5843533D51070C080240015206554244125442465E5B5E3959530552035B02020F575554000209525256000103020B57035552560003095155035A50050854560309515A085707025203000F02550506590854025407550407565C05010A5204535351505E5701515B530F115F0E5C01040C5006550D035151540E05065C54570E04120B5E5E420D075A4C434112084D4E52555B061A564B5353564D51565B1B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258070A154541460D1B1F055459094D54145550591F570D554C57144C51545250131C120F5605505400075200050B53075F0501055758034A5A5453574209065355045A0750070D560C0657540F0E5151000356535257550F5A060157500B00000350565954090503025657010F0050060E520C0E5403010B06535302565E0402050206035403530304055E5100595050000503565202040C0653075A074C56504F5D0C0D585F501A595512425E404D5C5C42");
  k = "4ec47402305f352f";
  td_4Z = "https://lar9e74pokgoctapsp5cdj65odstvumw6svnxcqea3b937ac6f4ebc95sac.d.aa.online-metrix.net/fp/clear.png?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95&di=yes";
  h = "11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7";
  td_0M = "t";
  td_4u = "https://h.online-metrix.net/fp/clear.png?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95&if=sid";
  c = "https://cdn1.f-cdn.com/fp/clear.png";
  J = "aa.online-metrix.net";
  K = "a3b937ac6f4ebc95";
  td_2G = "https://cdn1.f-cdn.com/fp/clear.png?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95&if=ls";
  td_0T = "https://cdn1.f-cdn.com/fp/clear3.png;CIS3SID=36D8D10D60F85980EC7070374B0878F0?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  td_3V = "https://cdn1.f-cdn.com/fp/top_fp.html;CIS3SID=36D8D10D60F85980EC7070374B0878F0?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  i = "lar9e74p";
  b = "https://cdn1.f-cdn.com/fp/clear.png?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  f = "https://cdn1.f-cdn.com/fp/ls_fp.html;CIS3SID=36D8D10D60F85980EC7070374B0878F0?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  e = "https://h.online-metrix.net/fp/sid_fp.html;CIS3SID=36D8D10D60F85980EC7070374B0878F0?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
});
a.tdz_a8b4fbb513fc40249aefccbbe46ff9cd = new a.td_0w("a8b4fbb513fc40249aefccbbe46ff9cd144b07141516105c524707105d5e5a554d000b0e061b120f54585901574917050f480d43362b4b0f");
var a = a || {};
function ax() {
  ("use strict");
  var cM = [["asinh", 1, function (cR) {
    return Math.log(cR + Math.sqrt(cR * cR + 1));
  }], ["atanh", .5, function (cS) {
    return Math.log((1 + cS) / (1 - cS)) / 2;
  }], ["expm1", 1, function (cT) {
    return Math.exp(cT) - 1;
  }], ["log1p", 10, function (cU) {
    return Math.log(1 + cU);
  }], ["sinh", 1, function (cV) {
    var cW = Math.exp(cV);
    return (cW - 1 / cW) / 2;
  }], ["cosh", 10, function (cX) {
    var cY = Math.exp(cX);
    return (cY + 1 / cY) / 2;
  }], ["tanh", 1, function (cZ) {
    var da = Math.exp(2 * cZ);
    return (da - 1) / (da + 1);
  }], ["tan", -1e300, function (db) {
    return Math.tan(-1e300);
  }], ["powPI", -100, function (dc) {
    return Math.pow(Math.PI, dc);
  }]];
  try {
    var cN = "";
    for (var cO = 0; cO < cM.length; cO++) {
      var cP = cM[cO][0] + "(" + cM[cO][1] + "):" + cM[cO][2](cM[cO][1]);
      cN += cP + ",";
    }
    var cQ = new td_2K;
    return cQ.hash(cN);
  } catch (dd) {}
  return null;
}
a.tdz_8e5cc7b142364df5ab16fa312fe078fc = new a.td_0w("8e5cc7b142364df5ab16fa312fe078fc4d1650431043105857461554551015415c0c445b040441135e0313555b1a5c414b1154171644400b16515b5746030f5b0640134308115f445501005415");
var a = a || {};
function ay() {
  ("use strict");
  var de;
  var df = true;
  this.tryAgain = function () {
    return de ? false : df;
  };
  this.getFPParams = function () {
    if (de) {
      return "&batst=" + de;
    }
    return null;
  };
  function dg(dh, di) {
    var dj = "";
    if (typeof dh === "number") {
      dj = '"level":' + dh.toFixed(2);
    }
    if (typeof di !== "undefined") {
      if (dj) {
        dj += ",";
      }
      dj += '"status":' + (di ? '"charging"' : '"unplugged"');
    }
    if (dj) {
      return "{" + dj + "}";
    }
    return null;
  }
  this.setup = function () {
    try {
      var dk = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
      if (dk) {
        de = dg(dk.level, dk.charging);
      } else {
        if (navigator.getBattery) {
          navigator.getBattery().then(function (dl) {
            de = dg(dl.level, dl.charging);
          }, function (dm) {});
        } else {
          df = false;
        }
      }
    } catch (dn) {
      df = false;
    }
  };
}
function az() {
  bJ(td_4Z, document);
}
a.tdz_879f4e48fcde44fcb266a6e516f93aa9 = new a.td_0w("879f4e48fcde44fcb266a6e516f93aa91e405c04461157670f0d1000465a070f3d5b460b47410057434205665619155c4a59580a6b0c4405401401074640053c0b4240005c10125c5c0b115c5113155a675e571251175a590a3c09015a4740140c5b520b16530747455539575c3e08574c524b0855096b5c07170506555a020a065342535b1e3e051c0f3b4568504c00656c094b0d3848093d53495c694f541e1e006d064c02386e011b5f644f535462081a0c3b1d3b1c164f1857184041140d580d4244005816455e4412044702114c5c475a095915585d1206");
function aA() {
  var dp = 1;
  var dq = dp + ":" + i + ":" + h + ";" + K;
  var dr = h;
  var ds = {};
  var dt = {};
  var du = {};
  var dv = false;
  var dw = false;
  var dx = null;
  var dy = false;
  var dz = aM();
  var dA = false;
  this.tryAgain = function () {
    return !dy;
  };
  function dB() {
    var dC = "";
    var dD = Object.keys(ds);
    var dE = Object.keys(dt);
    var dF = Object.keys(du);
    if (dD.length > 0) {
      dC += "&webrtc_internal_ip=" + dD.join(",");
    } else {}
    if (dE.length > 0) {
      dC += "&webrtc_external_ip=" + dE.join(",");
    }
    if (dF.length > 0) {
      dC += "&webrtc_ipv6=" + dF.join(",");
    }
    if (dv) {
      dC += "&wim=webrtc_internal_mdns";
    }
    if (!dw) {
      dC += "&wnid=webrtc_no_internal_data";
    }
    return dC;
  }
  this.getFPParams = function () {
    if (!dy) {
      if ((new Date).getTime() - dz > 2e3 || dA) {
        dy = true;
        dx.close();
        dx = null;
        return dB();
      }
    }
    return null;
  };
  this.setup = function () {
    if (!Object || !Object.create || !Object.keys) {
      dy = true;
      return;
    }
    var dG = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!dG) {
      dy = true;
      return;
    }
    this.startWaitTime = aM();
    function dN(dO) {
      var dP = dO.substr(dO.indexOf("candidate:") + 10).split(" ");
      if (dP !== null && dP.length > 7 && dP[4] !== null) {
        var dQ = dP[4];
        var dR = "([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])";
        var dS = "^(" + dR + ".){3}" + dR + "$";
        var dT = dP[7];
        if (dT === "host") {
          dw = true;
          if (dQ.match(/^.*\.local$/)) {
            dv = true;
            return;
          }
          if (dQ.match(dS)) {
            ds[dQ] = true;
          } else {
            du[dQ] = true;
          }
        } else {
          if (dQ.match(dS)) {
            dt[dQ] = true;
          } else {
            du[dQ] = true;
          }
        }
      }
    }
    try {
      var dH = {optional: [{RtpDataChannels: true}]};
      var dI = "turn:" + J + "?transport=";
      var dJ = {iceServers: [{urls: dI + "tcp", username: dq, credential: dr}, {urls: dI + "udp", username: dq, credential: dr}]};
      dx = new dG(dJ, dH);
      dx.onicecandidate = function (dU) {
        if (dU.candidate) {
          dN(dU.candidate.candidate);
        } else {
          dA = true;
        }
      };
      dx.onicegatheringstatechange = function () {
        if (dx !== null) {
          if (dx.iceGatheringState === "complete") {
            dA = true;
          }
        }
      };
      dx.createDataChannel(Math.random().toString());
      var dK = function () {};
      var dL = function (dV) {
        dx.setLocalDescription(dV, function () {}, dK);
      };
      var dM = function () {};
      if (typeof Promise === "undefined" || dx.createOffer.length > 0) {
        dx.createOffer(dL, dM);
      } else {
        dx.createOffer().then(dL, dM);
      }
    } catch (dW) {
      return;
    }
  };
}
a.tdz_0cd10ec6abe24846818ba1c44c6d9440 = new a.td_0w("0cd10ec6abe24846818ba1c44c6d94401613090c490010580e362061607c756279657d31357a266d770b440b5451755e54110b58540c3357050b355a5b56517948544a0327581151520c4e214144585f420616625103024408570054010e50535d040f550057");
var a = a || {};
function aB() {
  var dX;
  var dY;
  var dZ = al.td_2u;
  var ea = parseInt(al.td_1I);
  var eb = al.td_2E;
  var ec = al.td_0A;
  this.tryAgain = function () {
    return false;
  };
  this.getFPParams = function () {
    var eh = "&pm=";
    if (typeof dX === "undefined") {
      if (typeof dY !== "undefined" && dY.readyState === "done") {
        dX = dY.result ? false : true;
      } else {
        return null;
      }
    }
    eh += dX ? "yes" : "no";
    return eh;
  };
  function ed() {
    if (navigator && typeof navigator.storage !== "undefined" && typeof navigator.storage.estimate !== "undefined") {
      navigator.storage.estimate().then(function (ei) {
        dX = ei.quota < 12e7;
      });
    } else {
      dX = false;
    }
  }
  function ee() {
    function ej(ek) {}
    navigator.webkitTemporaryStorage.requestQuota(12e7, function (el) {
      dX = el < 12e7;
    }, ej);
  }
  function ef() {
    if (window.openDatabase) {
      try {
        var em = window.openDatabase(null, null, null, null);
      } catch (en) {
        dX = true;
      }
    } else {
      dX = null;
    }
  }
  function eg() {
    if (!window.localStorage) {
      return;
    }
    var eo = 0;
    try {
      dX = false;
      var ep = "";
      for (; eo < 11e4; ++eo) {
        ep += "TESTDATA";
      }
      eo = 0;
      for (; eo < 5; ++eo) {
        window.localStorage.setItem("TESTKEY" + eo, ep);
      }
      dX = true;
      for (; eo > 0; --eo) {
        window.localStorage.removeItem("TESTKEY" + eo);
      }
    } catch (eq) {
      dX = false;
      if (typeof eq.code !== "undefined" && eq.code === DOMException.QUOTA_EXCEEDED_ERR) {}
      try {
        for (; eo > 0; --eo) {
          window.localStorage.removeItem("TESTKEY" + eo);
        }
      } catch (er) {}
    }
  }
  this.setup = function () {
    if (dZ === "Chrome" && ea >= 76) {
      dX = false;
      if (!eb) {
        ed();
      } else {
        switch (ec) {
          case "Android":
            ee();
            break;
          case "iPad":
          case "iPhone":
            ef();
            break;
          default:
            break;
        }
      }
    } else {
      if (dZ === "Opera" || dZ === "Chrome") {
        if (window.webkitRequestFileSystem) {
          window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
            dX = false;
          }, function (es) {
            dX = true;
          });
        } else {
          if (window.openDatabase) {
            ef();
          }
        }
      } else {
        if (dZ === "Firefox" && window.indexedDB) {
          if (typeof dY === "undefined") {
            try {
              dY = window.indexedDB.open("test");
            } catch (et) {
              dX = true;
            }
          }
        } else {
          if (dZ === "Explorer" && ea >= 10) {
            dX = false;
            try {
              if (!window.indexedDB) {
                dX = true;
              }
            } catch (eu) {
              dX = true;
            }
          } else {
            if (dZ === "Safari") {
              dX = false;
              if (eb === true && ea < 12 || ea >= 11.1 && ea < 12) {
                ef();
              } else {
                if ((dX === null || dX === false) && ea >= 12) {
                  eg();
                }
              }
              if (dX === null || dX === false && window.localStorage) {
                try {
                  window.localStorage.setItem("5ef56dee577af", 1);
                } catch (ev) {
                  dX = true;
                }
                if (typeof dX === "undefined") {
                  window.localStorage.removeItem("5ef56dee577af");
                }
              }
            }
          }
        }
      }
    }
  };
}
a.tdz_f5ca1fa14de64705acdc78c8bd95400e = new a.td_0w("f5ca1fa14de64705acdc78c8bd95400e56045152055357060c5d045457535553040d2d2565792e7d0b024b545955550816411a00430f001c500d1657565b555100110d021a500a5c060157180543510b02570c194212185d51070a5a5b450a470601054b071453145248091c0f1056090954175b5d0307450f441559475e445c0e0d5e02554b0c5417105c0e14445f155c185151015d415d5102110c190500055a43060c455c064a5854494d4742530b095b00047c35397c78564b6e797b786135334a5019082e4b1a0955071a687d292e6137317c0f02435b170a50401968782d2b303767");
var a = a || {};
if (typeof a.td_4j === "undefined") {
  a.td_4j = [];
}
a.td_4V = function () {
  for (var ew = 0; ew < a.td_4j.length; ++ew) {
    a.td_4j[ew]();
  }
};
a.td_2O = function (ex, ey) {
  var ez = ex.length + "&" + ex;
  var eA = "";
  var eB = "0123456789abcdef";
  for (var eC = 0, eD = 0; eC < ez.length; eC++) {
    var eE = ez.charCodeAt(eC) ^ ey.charCodeAt(eD) & 10;
    if (++eD === ey.length) {
      eD = 0;
    }
    eA += eB.charAt(eE >> 4 & 15);
    eA += eB.charAt(eE & 15);
  }
  return eA;
};
a.td_1P = function () {
  try {
    var eF = window.top.document;
    var eG = eF.forms.length;
    return eF;
  } catch (eH) {
    return document;
  }
};
a.td_4e = function (eI) {
  try {
    var eJ;
    if (typeof eI === "undefined") {
      eJ = window;
    } else {
      if (eI === "t") {
        eJ = window.top;
      } else {
        if (eI === "p") {
          eJ = window.parent;
        } else {
          eJ = window;
        }
      }
    }
    var eK = eJ.document.forms.length;
    return eJ;
  } catch (eL) {
    return window;
  }
};
a.add_lang_attr_html_tag = function (eM) {
  try {
    if (eM === null) {
      return;
    }
    var eN = eM.getElementsByTagName("html");
    if (typeof eN !== "undefined" && eN !== null && typeof eN.length !== "undefined" && eN.length !== null && eN.length > 0 && typeof eN[0] !== "undefined" && typeof eN[0] !== null && typeof eN[0].setAttribute !== "undefined" && eN[0].setAttribute !== null && typeof eN[0].getAttribute !== "undefined" && eN[0].getAttribute !== null && (eN[0].getAttribute("lang") === null || eN[0].getAttribute("lang") === "")) {
      eN[0].setAttribute("lang", "en");
    } else {}
  } catch (eO) {}
};
a.load_iframe = function (eP, eQ, eR) {
  var eS = bF(5);
  if (typeof td_2y !== "undefined") {
    td_2y(eS, "IFRAME");
  }
  var eT = eR.createElement("iframe");
  eT.id = eS;
  eT.title = "empty";
  eT.setAttribute("aria-disabled", "true");
  eT.setAttribute("aria-hidden", "true");
  eT.width = "0";
  eT.height = "0";
  if (typeof eT.tabIndex !== "undefined") {
    eT.tabIndex = "-1";
  }
  if (N !== null) {
    eT.setAttribute("sandbox", eQ);
  }
  eT.setAttribute("style", "color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px");
  eT.setAttribute("src", eP);
  eR.body.appendChild(eT);
};
a.csp_nonce = null;
a.td_0v = function (eU) {
  if (typeof eU.currentScript !== "undefined" && eU.currentScript !== null) {
    var eV = eU.currentScript.getAttribute("nonce");
    if (typeof eV !== "undefined" && eV !== null && eV !== "") {
      a.csp_nonce = eV;
    } else {
      if (typeof eU.currentScript.nonce !== "undefined" && eU.currentScript.nonce !== null && eU.currentScript.nonce !== "") {
        a.csp_nonce = eU.currentScript.nonce;
      }
    }
  }
};
a.td_0s = function (eW) {
  if (a.csp_nonce !== null) {
    eW.setAttribute("nonce", a.csp_nonce);
    if (eW.getAttribute("nonce") !== a.csp_nonce) {
      eW.nonce = a.csp_nonce;
    }
  }
};
a.td_2Z = function () {
  try {
    return new ActiveXObject(activeXMode);
  } catch (eX) {
    return null;
  }
};
a.td_3U = function () {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest;
  }
  if (window.ActiveXObject) {
    var eY = ["MSXML2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var eZ = 0; eZ < eY.length; eZ++) {
      var fa = a.td_2Z(eY[eZ]);
      if (fa !== null) {
        return fa;
      }
    }
  }
  return null;
};
a.tdz_2b7e611ffe62479e8d1728fb0b185aac = new a.td_0w("2b7e611ffe62479e8d1728fb0b185aac471152454545430f05111053415351584c1658565c5f0a07");
var a = a || {};
function aC() {
  ("use strict");
  var fb;
  var fc = true;
  this.tryAgain = function () {
    return fb ? false : fc;
  };
  this.getFPParams = function () {
    if (fb) {
      return "&audh=" + fb;
    }
    return null;
  };
  this.setup = function () {
    try {
      var fd;
      if (fd = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100), !fd) {
        return null;
      }
      var fe = fd.createOscillator();
      fe.type = "triangle";
      fe.frequency.value = 1e4;
      var ff = fd.createDynamicsCompressor();
      ff.threshold && (ff.threshold.value = -50);
      ff.knee && (ff.knee.value = 40);
      ff.ratio && (ff.ratio.value = 12);
      ff.reduction && (ff.reduction.value = -20);
      ff.attack && (ff.attack.value = 0);
      ff.release && (ff.release.value = .25);
      fe.connect(ff);
      ff.connect(fd.destination);
      fe.start(0);
      fd.startRendering();
      fd.oncomplete = function (fg) {
        if (typeof fg.renderedBuffer === "undefined") {
          return;
        }
        var fh = new td_2K;
        for (var fi = 0; fi < fg.renderedBuffer.length; fi++) {
          fh.update(fg.renderedBuffer.getChannelData(0)[fi].toString());
        }
        ff.disconnect();
        fb = fh.toString();
      };
    } catch (fj) {
      fc = false;
    }
  };
}
a.tdz_a554518c0afe47668ac8f6c6e8004bd0 = new a.td_0w("a554518c0afe47668ac8f6c6e8004bd0085b45414111511010080813555b5f5218151a480359015c005b4400055057045403020c0c505a005404003e5b555c535b1543791444024f384b44425d0c03");
td_2K = function () {
  var fk = "input is invalid type";
  var fl = typeof window === "object";
  var fm = fl ? window : {};
  if (fm.JS_SHA256_NO_WINDOW) {
    fl = false;
  }
  var fn = !fm.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var fo = "0123456789abcdef".split("");
  var fp = [-2147483648, 8388608, 32768, 128];
  var fq = [24, 16, 8, 0];
  var fr = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  var fs = [];
  if (fm.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (fu) {
      return Object.prototype.toString.call(fu) === "[object Array]";
    };
  }
  if (fn && (fm.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (fv) {
      return typeof fv === "object" && fv.buffer && fv.buffer.constructor === ArrayBuffer;
    };
  }
  instance = new ft(false, false);
  this.update = function (fw) {
    instance.update(fw);
  };
  this.hash = function (fx) {
    instance.update(fx);
    return instance.toString();
  };
  this.toString = function () {
    return instance.toString();
  };
  function ft() {
    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.h0 = 1779033703;
    this.h1 = 3144134277;
    this.h2 = 1013904242;
    this.h3 = 2773480762;
    this.h4 = 1359893119;
    this.h5 = 2600822924;
    this.h6 = 528734635;
    this.h7 = 1541459225;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  ft.prototype.update = function (fy) {
    if (this.finalized) {
      return;
    }
    var fz, fA = typeof fy;
    if (fA !== "string") {
      if (fA === "object") {
        if (fy === null) {
          throw new Error(fk);
        } else {
          if (fn && fy.constructor === ArrayBuffer) {
            fy = new Uint8Array(fy);
          } else {
            if (!Array.isArray(fy)) {
              if (!fn || !ArrayBuffer.isView(fy)) {
                throw new Error(fk);
              }
            }
          }
        }
      } else {
        throw new Error(fk);
      }
      fz = true;
    }
    var fB, fC = 0, fD, fE = fy.length, fF = this.blocks;
    while (fC < fE) {
      if (this.hashed) {
        this.hashed = false;
        fF[0] = this.block;
        fF[16] = fF[1] = fF[2] = fF[3] = fF[4] = fF[5] = fF[6] = fF[7] = fF[8] = fF[9] = fF[10] = fF[11] = fF[12] = fF[13] = fF[14] = fF[15] = 0;
      }
      if (fz) {
        for (fD = this.start; fC < fE && fD < 64; ++fC) {
          fF[fD >> 2] |= fy[fC] << fq[fD++ & 3];
        }
      } else {
        for (fD = this.start; fC < fE && fD < 64; ++fC) {
          fB = fy.charCodeAt(fC);
          if (fB < 128) {
            fF[fD >> 2] |= fB << fq[fD++ & 3];
          } else {
            if (fB < 2048) {
              fF[fD >> 2] |= (192 | fB >> 6) << fq[fD++ & 3];
              fF[fD >> 2] |= (128 | fB & 63) << fq[fD++ & 3];
            } else {
              if (fB < 55296 || fB >= 57344) {
                fF[fD >> 2] |= (224 | fB >> 12) << fq[fD++ & 3];
                fF[fD >> 2] |= (128 | fB >> 6 & 63) << fq[fD++ & 3];
                fF[fD >> 2] |= (128 | fB & 63) << fq[fD++ & 3];
              } else {
                fB = 65536 + ((fB & 1023) << 10 | fy.charCodeAt(++fC) & 1023);
                fF[fD >> 2] |= (240 | fB >> 18) << fq[fD++ & 3];
                fF[fD >> 2] |= (128 | fB >> 12 & 63) << fq[fD++ & 3];
                fF[fD >> 2] |= (128 | fB >> 6 & 63) << fq[fD++ & 3];
                fF[fD >> 2] |= (128 | fB & 63) << fq[fD++ & 3];
              }
            }
          }
        }
      }
      this.lastByteIndex = fD;
      this.bytes += fD - this.start;
      if (fD >= 64) {
        this.block = fF[16];
        this.start = fD - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = fD;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  ft.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var fG = this.blocks, fH = this.lastByteIndex;
    fG[16] = this.block;
    fG[fH >> 2] |= fp[fH & 3];
    this.block = fG[16];
    if (fH >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      fG[0] = this.block;
      fG[16] = fG[1] = fG[2] = fG[3] = fG[4] = fG[5] = fG[6] = fG[7] = fG[8] = fG[9] = fG[10] = fG[11] = fG[12] = fG[13] = fG[14] = fG[15] = 0;
    }
    fG[14] = this.hBytes << 3 | this.bytes >>> 29;
    fG[15] = this.bytes << 3;
    this.hash();
  };
  ft.prototype.hash = function () {
    var fI = this.h0, fJ = this.h1, fK = this.h2, fL = this.h3, fM = this.h4, fN = this.h5, fO = this.h6, fP = this.h7, fQ = this.blocks, fR, fS, fT, fU, fV, fW, fX, fY, fZ, ga, gb;
    for (fR = 16; fR < 64; ++fR) {
      fV = fQ[fR - 15];
      fS = (fV >>> 7 | fV << 25) ^ (fV >>> 18 | fV << 14) ^ fV >>> 3;
      fV = fQ[fR - 2];
      fT = (fV >>> 17 | fV << 15) ^ (fV >>> 19 | fV << 13) ^ fV >>> 10;
      fQ[fR] = fQ[fR - 16] + fS + fQ[fR - 7] + fT << 0;
    }
    gb = fJ & fK;
    for (fR = 0; fR < 64; fR += 4) {
      if (this.first) {
        fY = 704751109;
        fV = fQ[0] - 210244248;
        fP = fV - 1521486534 << 0;
        fL = fV + 143694565 << 0;
        this.first = false;
      } else {
        fS = (fI >>> 2 | fI << 30) ^ (fI >>> 13 | fI << 19) ^ (fI >>> 22 | fI << 10);
        fT = (fM >>> 6 | fM << 26) ^ (fM >>> 11 | fM << 21) ^ (fM >>> 25 | fM << 7);
        fY = fI & fJ;
        fU = fY ^ fI & fK ^ gb;
        fX = fM & fN ^ ~fM & fO;
        fV = fP + fT + fX + fr[fR] + fQ[fR];
        fW = fS + fU;
        fP = fL + fV << 0;
        fL = fV + fW << 0;
      }
      fS = (fL >>> 2 | fL << 30) ^ (fL >>> 13 | fL << 19) ^ (fL >>> 22 | fL << 10);
      fT = (fP >>> 6 | fP << 26) ^ (fP >>> 11 | fP << 21) ^ (fP >>> 25 | fP << 7);
      fZ = fL & fI;
      fU = fZ ^ fL & fJ ^ fY;
      fX = fP & fM ^ ~fP & fN;
      fV = fO + fT + fX + fr[fR + 1] + fQ[fR + 1];
      fW = fS + fU;
      fO = fK + fV << 0;
      fK = fV + fW << 0;
      fS = (fK >>> 2 | fK << 30) ^ (fK >>> 13 | fK << 19) ^ (fK >>> 22 | fK << 10);
      fT = (fO >>> 6 | fO << 26) ^ (fO >>> 11 | fO << 21) ^ (fO >>> 25 | fO << 7);
      ga = fK & fL;
      fU = ga ^ fK & fI ^ fZ;
      fX = fO & fP ^ ~fO & fM;
      fV = fN + fT + fX + fr[fR + 2] + fQ[fR + 2];
      fW = fS + fU;
      fN = fJ + fV << 0;
      fJ = fV + fW << 0;
      fS = (fJ >>> 2 | fJ << 30) ^ (fJ >>> 13 | fJ << 19) ^ (fJ >>> 22 | fJ << 10);
      fT = (fN >>> 6 | fN << 26) ^ (fN >>> 11 | fN << 21) ^ (fN >>> 25 | fN << 7);
      gb = fJ & fK;
      fU = gb ^ fJ & fL ^ ga;
      fX = fN & fO ^ ~fN & fP;
      fV = fM + fT + fX + fr[fR + 3] + fQ[fR + 3];
      fW = fS + fU;
      fM = fI + fV << 0;
      fI = fV + fW << 0;
    }
    this.h0 = this.h0 + fI << 0;
    this.h1 = this.h1 + fJ << 0;
    this.h2 = this.h2 + fK << 0;
    this.h3 = this.h3 + fL << 0;
    this.h4 = this.h4 + fM << 0;
    this.h5 = this.h5 + fN << 0;
    this.h6 = this.h6 + fO << 0;
    this.h7 = this.h7 + fP << 0;
  };
  ft.prototype.hex = function () {
    this.finalize();
    var gc = this.h0, gd = this.h1, ge = this.h2, gf = this.h3, gg = this.h4, gh = this.h5, gi = this.h6, gj = this.h7;
    var gk = fo[gc >> 28 & 15] + fo[gc >> 24 & 15] + fo[gc >> 20 & 15] + fo[gc >> 16 & 15] + fo[gc >> 12 & 15] + fo[gc >> 8 & 15] + fo[gc >> 4 & 15] + fo[gc & 15] + fo[gd >> 28 & 15] + fo[gd >> 24 & 15] + fo[gd >> 20 & 15] + fo[gd >> 16 & 15] + fo[gd >> 12 & 15] + fo[gd >> 8 & 15] + fo[gd >> 4 & 15] + fo[gd & 15] + fo[ge >> 28 & 15] + fo[ge >> 24 & 15] + fo[ge >> 20 & 15] + fo[ge >> 16 & 15] + fo[ge >> 12 & 15] + fo[ge >> 8 & 15] + fo[ge >> 4 & 15] + fo[ge & 15] + fo[gf >> 28 & 15] + fo[gf >> 24 & 15] + fo[gf >> 20 & 15] + fo[gf >> 16 & 15] + fo[gf >> 12 & 15] + fo[gf >> 8 & 15] + fo[gf >> 4 & 15] + fo[gf & 15] + fo[gg >> 28 & 15] + fo[gg >> 24 & 15] + fo[gg >> 20 & 15] + fo[gg >> 16 & 15] + fo[gg >> 12 & 15] + fo[gg >> 8 & 15] + fo[gg >> 4 & 15] + fo[gg & 15] + fo[gh >> 28 & 15] + fo[gh >> 24 & 15] + fo[gh >> 20 & 15] + fo[gh >> 16 & 15] + fo[gh >> 12 & 15] + fo[gh >> 8 & 15] + fo[gh >> 4 & 15] + fo[gh & 15] + fo[gi >> 28 & 15] + fo[gi >> 24 & 15] + fo[gi >> 20 & 15] + fo[gi >> 16 & 15] + fo[gi >> 12 & 15] + fo[gi >> 8 & 15] + fo[gi >> 4 & 15] + fo[gi & 15];
    gk += fo[gj >> 28 & 15] + fo[gj >> 24 & 15] + fo[gj >> 20 & 15] + fo[gj >> 16 & 15] + fo[gj >> 12 & 15] + fo[gj >> 8 & 15] + fo[gj >> 4 & 15] + fo[gj & 15];
    return gk;
  };
  ft.prototype.toString = ft.prototype.hex;
};
a.tdz_f834d6b4d0e9453890e11ea5ba72c639 = new a.td_0w("f834d6b4d0e9453890e11ea5ba72c63905595d42054515510657095c4c45564a505d005f45040d18150455550f5b5c434b4f5656035a1551065b0c4d1906575e4c5e0645580a0f");
var a = a || {};
function aD() {
  if (!!window.WebGLRenderingContext) {
    var gl = document.createElement("canvas");
    var gm = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    for (var gn = 0; gn < 4; gn++) {
      try {
        var go = gl.getContext(gm[gn]);
        if (go && typeof go.getParameter === "function") {
          return {name: gm[gn], gl: go};
        }
      } catch (gp) {}
    }
    return -1;
  }
  return 0;
}
a.tdz_70986e9e7af44dcf8f725af7331ef231 = new a.td_0w("70986e9e7af44dcf8f725af7331ef2310c107c60623a4d004f151346513b050f541252406a00085e405c451709425a5260757b737f3166206f353940511c17134a0368545c0d1252416c500b0f415c45455f49515528763f68243e606b10061e4c1345576a070f5b4756433a075c5a4258444b57460c5a2b5815465542050a0a59045b5753140854475a5e0b317771767b6f5d5d54105e3a4504085051160614670f59545a0e045d5650451612405a5f50164e5f5a13044340060a4609");
var a = a || {};
function aE() {
  try {
    var gq = aD();
    if (gq === 0 || gq === -1) {
      return;
    }
    var gr = gq.gl;
    var gs = gq.name;
    gs += gr.getParameter(gr.VERSION);
    gs += gr.getParameter(gr.SHADING_LANGUAGE_VERSION);
    gs += gr.getParameter(gr.VENDOR);
    gs += gr.getParameter(gr.RENDERER);
    var gt = [];
    try {
      gt = gr.getSupportedExtensions();
    } catch (gz) {}
    var gu = gt.length;
    if (gu) {
      var gv = "";
      for (var gw = 0; gw < gu; gw++) {
        if (gv.length) {
          gv += "; ";
        }
        gv += gt[gw];
      }
      gs += gv;
    }
    var gx;
    var gy = gr.getExtension("EXT_texture_filter_anisotropic") || gr.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gr.getExtension("MOZ_EXT_texture_filter_anisotropic");
    if (gy) {
      gx = gr.getParameter(gy.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      if (gx === 0) {
        gx = 2;
      }
    } else {
      gx = "Not available";
    }
    gs += gx;
    return gs;
  } catch (gA) {
    return null;
  }
}
function aF() {
  try {
    var gB = aD();
    if (gB === 0 || gB === -1) {
      return;
    }
    var gC = gB.gl;
    if (typeof gC.getExtension !== "function" || typeof gC.getParameter !== "function") {
      return null;
    }
    var gD = gC.getExtension("WEBGL_debug_renderer_info");
    if (!gD || typeof gD !== "object") {
      return null;
    }
    var gE = "";
    var gF = gC.getParameter(gD.UNMASKED_VENDOR_WEBGL);
    if (typeof gF === "string") {
      gE += "&wglv=" + encodeURIComponent(gF);
    }
    var gG = gC.getParameter(gD.UNMASKED_RENDERER_WEBGL);
    if (typeof gG === "string") {
      gE += "&wglr=" + encodeURIComponent(gG);
    }
    return gE;
  } catch (gH) {
    return null;
  }
}
a.tdz_c6e13a8fdd4a4ed994719150bb69f0e1 = new a.td_0w("c6e13a8fdd4a4ed994719150bb69f0e105430b5247085708110a5f0f5b120a5a5659475d5c45505f0c0e595802");
function aG(gI, gJ, gK) {
  if (typeof gK === "undefined" || gK === null) {
    gK = 0;
  } else {
    if (gK < 0) {
      gK = Math.max(0, gI.length + gK);
    }
  }
  for (var gL = gK, gM = gI.length; gL < gM; gL++) {
    if (gI[gL] === gJ) {
      return gL;
    }
  }
  return -1;
}
function aH(gN, gO, gP) {
  return gN.indexOf(gO, gP);
}
function aI(gQ) {
  return gQ.replace(/^\s+|\s+$/g, "");
}
function aJ(gR) {
  return gR.trim();
}
function aK(gS) {
  return gS.trim();
}
function aL(gT, gU, gV) {
  return gT.indexOf(gU, gV);
}
function aM() {
  return Date.now();
}
function aN() {
  return (new Date).getTime();
}
function aO() {
  if (!Array.prototype.indexOf) {
    aL = aG;
  } else {
    aL = aH;
  }
  if (typeof String.prototype.trim !== "function") {
    aK = aI;
  } else {
    aK = aJ;
  }
  if (typeof Date.now === "undefined") {
    aM = aN;
  }
}
function aP(gW) {
  if (typeof document.readyState !== "undefined" && typeof document.readyState !== "unknown" && document.readyState === "complete") {
    gW();
  } else {
    if (typeof document.readyState === "undefined") {
      setTimeout(gW, 300);
    } else {
      var gX = 200;
      var gY;
      if (typeof window !== "undefined" && typeof window !== "unknown" && window !== null) {
        gY = window;
      } else {
        gY = document.body;
      }
      if (gY.addEventListener) {
        gY.addEventListener("load", function () {
          setTimeout(gW, gX);
        }, false);
      } else {
        if (gY.attachEvent) {
          gY.attachEvent("onload", function () {
            setTimeout(gW, gX);
          }, false);
        } else {
          var gZ = gY.onload;
          gY.onload = new function () {
            var ha = true;
            if (gZ !== null && typeof gZ === "function") {
              ha = gZ();
            }
            setTimeout(gW, gX);
            gY.onload = gZ;
            return ha;
          };
        }
      }
    }
  }
}
function aQ() {
  if (typeof td_3q !== "undefined") {
    td_3q();
  }
  if (typeof bj !== "undefined") {
    bj();
  }
  if (typeof td_1w !== "undefined") {
    td_1w();
  }
  if (typeof td_0n !== "undefined") {
    td_0n(td_0R);
  }
  if (typeof tmx_link_scan !== "undefined") {
    tmx_link_scan();
  }
  if (typeof td_0V !== "undefined") {
    td_0V();
  }
  if (typeof ai !== "undefined") {
    ai.start();
  }
  if (typeof aj !== "undefined") {
    aj.start();
  }
}
function aR() {
  a.td_4V();
  a.td_0v(document);
  al.td_1G();
  aO();
  aP(aQ);
}
a.tdz_a4eb46a01efe441caf3d60e4311f9adc = new a.td_0w("a4eb46a01efe441caf3d60e4311f9adc02550b1455455354562805015152560b080c58085b5e0a44424342124c17131b184e55530605550507525e5c0306411b410b5c0a59431555505406544919441004460c04030411481142414914595e0d0e1543055555421813425414500742145c120f045a0b475a570d5b435e52450d5c5609425c56115a0e000b0f5c470e050d094308500b");
var a = a || {};
var O;
function aS() {
  try {
    var hb = m.getFontsList();
    if (hb.length === 0) {
      return;
    }
    var hc = document.createElement("canvas");
    if (!hc || !hc.getContext) {
      return;
    }
    var hd = hc.getContext("2d");
    if (!hd) {
      return;
    }
    if (typeof hd.measureText === "undefined") {
      return;
    }
    var he = "gMcdefghijklmnopqrstuvwxyz0123456789";
    hd.font = "72px monospace";
    var hf = hd.measureText(he).width;
    hd.font = "72px serif";
    var hg = hd.measureText(he).width;
    var hh = aM();
    var hi = 0;
    var hj = 0;
    var hk = "";
    var hl = false;
    for (var hm = 0; hm < hb.length; hm++) {
      hd.font = "72px '" + hb[hm] + "', monospace";
      var hn = hd.measureText(he).width;
      hd.font = "72px '" + hb[hm] + "', serif";
      var ho = hd.measureText(he).width;
      if (hf !== hn || hg !== ho) {
        hj++;
        hk += "," + hb[hm];
      }
      if (O > 0 && hm % 5 === 0) {
        hi = aM() - hh;
        if (hi > O) {
          hl = true;
          break;
        }
      }
    }
    if (!hk) {
      return;
    }
    if (hi === 0) {
      hi = aM() - hh;
    }
    var hp = ak(hk);
    var hq = "";
    if (k !== null) {
      hq += "&w=" + k;
    }
    if (!hl) {
      hq += "&jfn=" + hj + "&jfh=" + hp + "&jftn=0:" + hi + ":" + hj;
    } else {
      hq += "&jftn=1:" + hi + ":" + hj;
    }
    var hr = hk.length;
    var hs = false;
    if (typeof td_2F !== "undefined") {
      hs = td_2F;
    }
    if (hr > 0 && hs && !hl) {
      var ht = 1800;
      if (hr > ht && n._eq("ie") && o._eq("6")) {
        var hu = hk.indexOf(",", ht);
        if (hu !== -1) {
          hr = hu;
        }
      }
      hq += "&jfl=" + hk.substring(0, hr);
    }
    var hv = b + "&jd=" + a.td_2O(hq, h);
    bH(hv, document);
  } catch (hw) {}
}
O = 1001;
var p = ["Andale Mono", "Arial", "Arial Black", "AR PL UKai CN", "AR PL UMing CN", "Batang", "Bitstream Vera Sans", "Comic Sans MS", "Courier New", "Cursor", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dotum", "Droid Sans", "FreeMono", "FreeSans", "FreeSerif", "gargi", "Garuda", "Georgia", "Hei", "Impact", "KacstArt", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Sans Narrow", "Lohit Bengali", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monospace", "mry_KacstQurn", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Sans L Condensed", "Norasi", "OpenSymbol", "ori1Uni", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Saab", "Sawasdee", "System", "TakaoPGothic", "Times", "Times New Roman", "TlwgMono", "TlwgTypewriter", "Tlwg Typist", "Tlwg Typo", "Trebuchet MS", "Ubuntu", "Ubuntu Condensed", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Zen Hei"];
var q = ["18thCentury", "8514oem", "AcmeFont", "Adobe Arabic", "Agency FB", "Aharoni", "Aldhabi", "Alfredo", "Algerian", "Alien Encounters", "Almonte Snow", "Amethyst", "Andalus", "Aparajita", "Arabic Transparent", "Arabic Typesetting", "AR BERKLEY", "Arial Baltic", "Arial CE", "Arial CYR", "Arial Greek", "Arial Narrow", "Arial Rounded MT Bold", "Arial TUR", "Arial Unicode MS", "Arimo", "AR JULIAN", "Asimov", "Autumn", "Baby Kruffy", "Balthazar", "Baskerville", "Baskerville Old Face", "Bastion", "Batang", "BatangChe", "Bauhaus 93", "Bellerose", "Bell MT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "Birch Std", "Bitstream Vera Sans", "Blackadder ITC", "Blackoak Std", "BN Jinx", "BN Machine", "Bobcat", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Poster Compressed", "BolsterBold", "Book Antiqua", "Bookman Old Style", "Bookshelf Symbol 7", "Borealis", "BOUTON International Symbols", "Bradley Hand ITC", "Brandish", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brussels", "Calibri", "Calibri Light", "Californian FB", "Calisto MT", "Calligraphic", "Calvin", "Cambria", "Cambria Math", "Candara", "Candles", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Chaparral Pro", "Chaparral Pro Light", "Charlemagne Std", "Chiller", "Chinyen", "Clarendon", "Colbert", "Colonna MT", "Comic Sans MS", "Commons", "Consolas", "Constantia", "Coolsville", "Cooper Black", "Cooper Std Black", "Copperplate", "Corbel", "Cordia New", "CordiaUPC", "Corporate", "Courier New Baltic", "Courier New CE", "Cracked Johnnie", "Creepygirl", "Curlz MT", "DaunPenh", "David", "Dayton", "DejaVu Sans", "Deneane", "Detente", "DFKai-SB", "Digifit", "DilleniaUPC", "Distant Galaxy", "DokChampa", "Dominican", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "Emmett", "Engravers MT", "Enliven", "Eras Bold ITC", "Ethnocentric", "EucrosiaUPC", "Euphemia", "Expressway Rg", "FangSong", "Felix Titling", "Fingerpop", "Fixedsys", "Flubber", "Footlight MT Light", "Forte", "Frankfurter Venetian TT", "Franklin Gothic Book", "Franklin Gothic Medium Cond", "FrankRuehl", "FreesiaUPC", "Freestyle Script", "French Script MT", "Gabriola", "Gadugi", "Garamond", "Gazzarelli", "Gentium Basic", "Gentium Book Basic", "Geotype TT", "Giddyup Std", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Glockenspiel", "Gloucester MT Extra Condensed", "Good Times", "Goudy Old Style", "Goudy Stout", "Greek Diner Inline TT", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Hand Me Down S (BRK)", "Hansen", "Harlow Solid Italic", "Harrington", "Harvest", "HarvestItal", "Haxton Logos TT", "Heavy Heap", "Hei", "Helvetica", "Helvetica LT Std", "HelveticaNeueLT Com 107 XBlkCn", "Highboot", "High Tower Text", "Hobo Std", "Hollywood Hills", "Hombre", "Huxley Titling", "Imprint MT Shadow", "Induction", "Informal Roman", "IrisUPC", "Iskoola Pota", "Italianate", "JasmineUPC", "Jokerman", "Juice ITC", "Kai", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N B", "Kristen ITC", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic Std", "LetterOMatic!", "Levenim MT", "LilyUPC", "Limousine", "Lithos Pro Regular", "LittleLordFontleroy", "Lucida Bright", "Lucida Calligraphy", "Lucida Fax", "Lucida Handwriting", "Lucida Sans Typewriter", "Mael", "Magneto", "Maiandra GD", "Malgun Gothic", "Manorly", "Martina", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "MelodBold", "Mesquite Std", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "Minerva", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Minion Pro", "Miriam", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "MoolBoran", "Moonbeam", "MS Gothic", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "Myanmar Text", "Mycalc", "Myriad Arabic", "Myriad Hebrew", "Myriad Pro", "Narkisim", "Nasalization", "Neon Lights", "Niagara Engraved", "Niagara Solid", "Nina", "Nirmala UI", "Notram", "November", "NSimSun", "Nueva Std", "Nueva Std Cond", "Nyala", "OCR A Extended", "OCR A Std", "Old English Text MT", "Onyx", "OpenSymbol", "OpineHeavy", "Orator Std", "Palace Script MT", "Palatino", "Papyrus", "Parchment", "Parry Hotter", "PenultimateLight", "Perpetua", "Perpetua Titling MT", "PhrasticMedium", "Pirate", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poplar Std", "PR Celtic Narrow", "Prestige Elite Std", "Pristina", "QuiverItal", "Rage Italic", "Ravie", "Rockwell", "Rockwell Condensed", "Rod", "Roland", "Rondalo", "Rosewood Std Regular", "RowdyHeavy", "Russel Write TT", "Sakkal Majalla", "Salina", "Script", "Script MT Bold", "Segoe Print", "Segoe UI Semilight", "Segoe UI Symbol", "SF Movie Poster", "Shonar Bangla", "Showcard Gothic", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Skinny", "Small Fonts", "Snap ITC", "Snowdrift", "Source Code Pro", "Splash", "Stencil", "Stencil Std", "Stephen", "SWGamekeys MT", "System", "Tarzan", "Tekton Pro", "Tekton Pro Cond", "Tekton Pro Ext", "Tempus Sans ITC", "Terminal", "Terminator Two", "Times New Roman Baltic", "Toledo", "Traditional Arabic", "Trajan Pro", "Tw Cen MT", "Urdu Typesetting", "Utsaah", "Valken", "Vani", "Vijaya", "Viner Hand ITC", "Vivaldi", "Vivian", "Vladimir Script", "Vrinda", "Waverly", "Whimsy TT", "Wide Latin", "Wingdings 2", "Woodcut", "X-Files", "Year supply of fairy cakes"];
var r = ["Abadi MT Condensed Extra Bold", "Abadi MT Condensed Light", "Al Bayan Bold", "Al Bayan Plain", "American Typewriter Bold", "American Typewriter Condensed", "American Typewriter Light", "Apple Braille Outline 6 Dot", "Apple Braille Pinpoint 6 Dot", "AppleGothic Regular", "Apple LiGothic Medium", "Apple LiSung Light", "AppleMyungjo Regular", "Apple SD Gothic Neo", "Apple SD GothicNeo ExtraBold", "Apple SD Gothic Neo Regular", "Arial Bold", "Arial Bold Italic", "Arial Hebrew Bold", "Arial Italic", "Arial Narrow Bold", "Arial Narrow Bold Italic", "Arial Narrow Italic", "Avenir", "Avenir Black", "Avenir Next", "Avenir Next Bold", "Avenir Next Condensed", "Avenir Next Condensed Bold", "Avenir Next Demi Bold", "Avenir Next Heavy", "Avenir Next Regular", "Bangla MN Bold", "Bangla Sangam MN Bold", "Baskerville Bold", "Baskerville Bold Italic", "Baskerville SemiBold", "Baskerville SemiBold Italic", "Bell MT Bold", "Bell MT Italic", "Bernard MT Condensed", "Big Caslon Medium", "Book Antiqua", "Book Antiqua Bold", "Bookman Old Style", "Bookman Old Style Bold", "Bookshelf Symbol 7", "Braggadocio", "Britannic Bold", "Brush Script MT Italic", "Calibri", "Calibri Bold", "Calibri Light", "Calisto MT", "Calisto MT Bold", "Cambria", "Cambria Bold", "Cambria Math", "Candara Bold", "Century", "Century Gothic", "Century Gothic Bold", "Century Schoolbook", "Century Schoolbook Bold", "Chalkboard Bold", "Chalkboard SE", "Chalkboard SE Bold", "Cochin Bold", "Colonna MT", "Comic Sans MS Bold", "Consolas", "Consolas Bold", "Constantia", "Constantia Bold", "Cooper Black", "Copperplate Bold", "Copperplate Gothic Bold", "Copperplate Light", "Corbel", "Corbel Bold", "Corsiva Hebrew Bold", "Courier Bold", "Courier New Bold", "Courier New Italic", "Courier Oblique", "Curlz MT", "Damascus Bold", "Desdemona", "Devanagari MT Bold", "Didot Bold", "Edwardian Script ITC", "Engravers MT", "Engravers MT Bold", "Euphemia UCAS Bold", "Eurostile", "Eurostile Bold", "Footlight MT Light", "Franklin Gothic Book", "Franklin Gothic Book Italic", "Franklin Gothic Medium", "Franklin Gothic Medium Italic", "Futura Condensed ExtraBold", "Futura Medium", "Gabriola", "Garamond", "Garamond Bold", "Geeza Pro Bold", "Georgia Bold", "Gill Sans Bold", "Gill Sans MT", "Gill Sans MT Bold", "Gill Sans MT Italic", "Gill Sans Ultra Bold", "Gloucester MT Extra Condensed", "Goudy Old Style", "Goudy Old Style Bold", "Gujarati MT Bold", "Gujarati Sangam MN Bold", "Gulim", "GungSeo Regular", "Gurmukhi MN Bold", "Gurmukhi Sangam MN", "Gurmukhi Sangam MN Bold", "Haettenschweiler", "Harrington", "HeadLineA Regular", "Hei Regular", "Heiti SC Light", "Heiti TC Light", "Helvetica Bold", "Helvetica CY Bold", "Helvetica CY Plain", "Helvetica Light", "Helvetica Neue Bold", "Helvetica Neue Medium", "Helvetica Oblique", "Hiragino Kaku Gothic ProN W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic StdN W8", "Hiragino Maru Gothic ProN W4", "Hiragino Mincho ProN W3", "Hiragino Mincho ProN W6", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Hoefler Text Black", "Hoefler Text Ornaments", "Imprint MT Shadow", "Kailasa Regular", "Kai Regular", "Kaiti SC", "Kaiti SC Black", "Kannada MN Bold", "Kannada Sangam MN Bold", "Kefa Bold", "Khmer MN Bold", "Kino MT", "Kokonor Regular", "Lucida Blackletter", "Lucida Bright", "Lucida Bright Demibold", "Lucida Bright Demibold Italic", "Lucida Bright Italic", "Lucida Calligraphy", "Lucida Calligraphy Italic", "Lucida Console", "Lucida Fax", "Lucida Fax Demibold", "Lucida Fax Regular", "Lucida Grande Bold", "Lucida Handwriting", "Lucida Handwriting Italic", "Lucida Sans", "Lucida Sans Demibold Italic", "Lucida Sans Typewriter", "Lucida Sans Typewriter Bold", "Lucida Sans Unicode", "Malayalam MN Bold", "Malayalam Sangam MN Bold", "Marion", "Marion Bold", "Marker Felt Thin", "Marlett", "Matura MT Script Capitals", "Meiryo", "Meiryo Bold", "Menlo Bold", "Microsoft Himalaya", "Microsoft Tai Le", "Microsoft Tai Le Bold", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "Monotype Sorts", "MS Gothic", "Mshtakan Bold", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MT Extra", "Myanmar MN Bold", "NanumGothic", "Nanum Gothic", "NanumGothic Bold", "NanumMyeongjo", "Nanum Myeongjo", "NanumMyeongjo Bold", "New Peninim MT Bold", "News Gothic MT", "News Gothic MT Bold", "Noteworthy Bold", "Onyx", "Optima Bold", "Optima Regular", "Oriya MN Bold", "Oriya Sangam MN Bold", "Osaka-Mono", "Palatino Bold", "Palatino Linotype", "Palatino Linotype Bold", "Papyrus Condensed", "PCMyungjo Regular", "Perpetua", "Perpetua Bold", "Perpetua Titling MT", "Perpetua Titling MT Bold", "PilGi Regular", "Playbill", "PMingLiU", "PMingLiU-ExtB", "PT Sans Bold", "PT Sans Caption Bold", "PT Sans Narrow Bold", "Raanana Bold", "Rockwell", "Rockwell Bold", "Rockwell Extra Bold", "Rockwell Italic", "SimHei", "SimSun", "Sinhala MN Bold", "Sinhala Sangam MN Bold", "Skia Regular", "Songti SC", "Songti SC Black", "Stencil", "STIXGeneral-Bold", "STIXGeneral-Regular", "STIXIntegralsD-Bold", "STIXIntegralsSm-Bold", "STIXIntegralsUp-Bold", "STIXIntegralsUpD-Bold", "STIXIntegralsUpD-Regular", "STIXIntegralsUp-Regular", "STIXIntegralsUpSm-Bold", "STIXNonUnicode-Bold", "STIXSizeFiveSym-Regular", "STIXSizeFourSym-Bold", "STIXSizeOneSym-Bold", "STIXSizeThreeSym-Bold", "STIXSizeTwoSym-Bold", "STIXVariants-Bold", "STXihei", "Tahoma Negreta", "Tamil MN Bold", "Tamil Sangam MN Bold", "Telugu MN Bold", "Telugu Sangam MN Bold", "Thonburi Bold", "Times Bold", "Times New Roman Bold", "Times New Roman Italic", "Times Roman", "Trebuchet MS Bold", "Tw Cen MT", "Tw Cen MT Bold", "Tw Cen MT Italic", "Verdana Bold", "Wide Latin", "Yuppy SC", "Yuppy SC Regular", "Yuppy TC", "Yuppy TC Regular"];
var P = ["AR PL UKai CN", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Andale Mono", "Arial", "Arial Black", "Arial Unicode MS", "Baskerville", "Batang", "Bitstream Charter", "Bitstream Vera Sans", "Carrois Gothic SC", "Century Schoolbook L", "Comic Sans MS", "Courier 10 Pitch", "Courier New", "Cursor", "Cutive Mono", "Dancing Script", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dingbats", "Dotum", "Droid Sans", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Garuda", "Gentium", "GentiumAlt", "Georgia", "Goudy", "Hei", "ITC Stone Serif", "Impact", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Devanagari", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumBarunGothic", "NanumGothic", "NanumGothicCoding", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Nimbus Sans L Condensed", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Serif", "OldeEnglish", "OpenSymbol", "Palatino", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Samyak Tamil", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "System", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Times", "Times New Roman", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "WenQuanYi Zen Hei", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
var Q = ["AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Arial", "Arial Unicode MS", "Baskerville", "Bitstream Charter", "Carrois Gothic SC", "Century Schoolbook L", "Copperplate", "Courier 10 Pitch", "Courier New", "Cutive Mono", "Dancing Script", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Didot", "Dingbats", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Futura", "Garuda", "Georgia", "Gill Sans", "Helvetica", "Hoefler Text", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Grande", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Canadian Aboriginal", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Gujarati", "Noto Sans Gurmukhi", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Malayalam", "Noto Sans Myanmar", "Noto Sans Oriya", "Noto Sans SC", "Noto Sans Sinhala", "Noto Sans Symbols", "Noto Sans TC", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", "Noto Sans Yi", "Noto Serif", "OpenSymbol", "Optima", "Palatino", "Palatino Linotype", "Papyrus", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "Symbol", "TAMu_Kadambri", "TAMu_Kalyani", "TAMu_Maduram", "TSCu_Comic", "TSCu_Paranar", "TSCu_Times", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Vemana2000", "Verdana", "Waree", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
a.tdz_7d37ae49c23d4770847777b695aee7e7 = new a.td_0w("7d37ae49c23d4770847777b695aee7e747164742141242431b170426110075150f7712007412557047544453555c0752521441431410434f194a1653764d12077a110074120024130e71104052751f42421644461f40037b191704271100744e1d03745656541245484144522646134e1253701256274e434605701a4a4612077a4e424346411b130e731117144211404015431256274e1c547016537712007642451200751255744c401f131c494000751e4b464452761c5470461143414f150f761200754d47017d10562640002312002652560207515b04545b0c5e545a5c575b6e61646436464a41141113411d461253714d4452701c5476441c555655404a4e424340411b481c02231f1c125274491a52560a07515d04541652045f5d5a48464d424340144f471056271f4e4000741a4d564453045a01575e03535e5f5b5744454d42431540404b4452274d1c1200274d490040020900505606535159404a4e424340411b481c02231f1c125274491a52560307515d0454520c5f5c474242414340414e1c130e771b1c40002649490516015100565c0442411e41434046414a1200754d1b130e761f1b04560f55530055590e0d5f5a0e5f5c0b5a115d515b0906115d525f");
var a = a || {};
var R = "prtuuwvzx%7B%7B%7C%7C%7F~a%60kbee";
var S = "prtuuwvzx%7Bz%7B%7C%7F%7D";
var T = "q%7Bzuurwq~%7Bz%7C%7C~%7Caac";
var U = "psqt%7Cqvy%7C%7Bzz%7C~~";
var V = "q%7Bzutqvy%7F";
var W = "prqutwwqp%7Bz%7B%7C%7Fz";
var X = "q%7B%7Buu~vy~%7Bzx";
var Y = "q%7B%7Buuwvx%7B%7Bz%7D%7C%7F%7BaacbebgfhhjcmlooYVSST";
var Z = "pstutvvxq%7Bz%7D%7Dwxaab";
var aa = "przutwvy~%7Bzy%7C~~aakbedgf%60hjj";
var ab = "przutwvy~%7Bzy%7C~~a%60cbemggihko";
var ac = "przutwvy~%7Bzy%7C~~a%60cbebgfn";
var ad = "przutwvy~%7Bzy%7C~~aabbedgfahkk";
var ae = "przutwvy~%7Bzy%7C~~a%60ebeg";
var af = "przutwvy~%7Bzy%7C~~aajbddfnohkcmmo";
var ag = 1;
var ah = 0;
function aT(hx, hy, hz, hA) {
  return aU(hx, hy, hz, null, hA);
}
function aU(hB, hC, hD, hE, hF) {
  var hG = a.td_1H(decodeURIComponent(hC));
  if (hG === null) {
    return;
  }
  if (typeof hE !== "undefined" && hE !== null) {
    return aW(hB, hG, hD, hF);
  } else {
    return aV(hB, hG, hD, hF);
  }
}
function aV(hH, hI, hJ, hK) {
  if (hH.attachEvent) {
    hH.attachEvent("on" + hI, function (hL) {
      hJ(hL || window.event);
    });
  } else {
    if (typeof hK === "undefined") {
      hH.addEventListener(hI, hJ, false);
    } else {
      hH.addEventListener(hI, hJ, hK);
    }
  }
}
function aW(hM, hN, hO, hP) {
  if (typeof hM.addEventListener !== "undefined") {
    if (typeof hP === "undefined") {
      hM.addEventListener(hN, hO, false);
    } else {
      hM.addEventListener(hN, hO, hP);
    }
  } else {
    hM.attachEvent("on" + hN, function (hQ) {
      hO(hQ || window.event);
    });
  }
}
function aX(hR, hS, hT) {
  return aY(hR, hS, hT, null);
}
function aY(hU, hV, hW, hX) {
  var hY = a.td_1H(decodeURIComponent(hV));
  if (hY === null) {
    return;
  }
  if (typeof hX !== "undefined" && hX !== null) {
    return ba(hU, hY, hW);
  } else {
    return aZ(hU, hY, hW);
  }
}
function aZ(hZ, ia, ib) {
  if (hZ.detachEvent) {
    hZ["e" + ia + ib] = ib;
    hZ[ia + ib] = function () {
      hZ["e" + ia + ib](window.event);
    };
    hZ.detachEvent("on" + ia, hZ[ia + ib]);
  } else {
    hZ.removeEventListener(ia, ib, false);
  }
}
function ba(ic, id, ie) {
  if (typeof ic.removeEventListener !== "undefined") {
    ic.removeEventListener(id, ie, false);
  } else {
    ic["e" + id + ie] = ie;
    ic[id + ie] = function () {
      ic["e" + id + ie](window.event);
    };
    ic.detachEvent("on" + id, ic[id + ie]);
  }
}
function bb(ig) {
  var ih = ig;
  var ii = 500;
  var ij = 3e4;
  var ik = [];
  var il = 0;
  this.addFeature = function (io, ip) {
    if (typeof ip === "undefined" || ip < ii) {
      ip = ii;
    }
    var iq = Math.ceil(ip / ii);
    ik.push([io, iq, true]);
    io.setup();
  };
  this.getFeaturesForTest = function () {
    return ik;
  };
  this.start = function () {
    if (ik.length === 0) {
      return;
    }
    setTimeout(im, ii);
  };
  this.check = function () {
    im();
  };
  function im() {
    var ir;
    var is = "";
    var it = 0;
    il++;
    for (ir = 0; ir < ik.length; ir++) {
      var iu = ik[ir][0];
      var iv = ik[ir][1];
      var iw = ik[ir][2];
      if (!iw) {
        it++;
        continue;
      }
      if (il >= iv) {
        var ix = iu.getFPParams();
        if (ix !== null) {
          is += ix;
        }
        if (!iu.tryAgain()) {
          ik[ir][2] = false;
          it++;
        } else {}
      }
    }
    if (is.length > 0) {
      var iy = null;
      switch (ih) {
        case 0:
          iy = td_0T + "&jac=1&je=" + a.td_2O(is, h);
          break;
        case 1:
        default:
          iy = b + "&jac=1&je=" + a.td_2O(is, h);
          break;
      }
      bH(iy, document);
    }
    if (il >= Math.ceil(ij / ii)) {
      return;
    }
    if (it < ik.length) {
      setTimeout(im, ii);
    } else {}
  }
}
var ai = new bb(ag);
var aj = new bb(ah);
a.tdz_2a8ced26f79044b1b75729b13eddbd5f = new a.td_0w("2a8ced26f79044b1b75729b13eddbd5f47125d431610405f05435845505d0d580c474043445006545c0c0a14171054135608570c10104243120b5b420a120f54065f08115858010c02430e015f");
var a = a || {};
function bc() {
  ("use strict");
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (iz) {
      var iA = 0;
      var iB = 0;
      var iC = 0;
      var iD = new td_2K;
      iz.forEach(function (iH) {
        if (iH.kind === "audioinput") {
          iA++;
        } else {
          if (iH.kind === "videoinput") {
            iC++;
          } else {
            if (iH.kind === "audiooutput") {
              iB++;
            }
          }
        }
        var iI = iH.kind + "," + iH.label + "," + iH.deviceId;
        iD.update(iI + "<br>");
      });
      var iE;
      if (iA !== 0 || iB !== 0 || iC !== 0) {
        iE = "(" + iA + "," + iC + "," + iB + "," + iD.toString() + ")";
      }
      if (iE) {
        var iF = "&medh=" + iE;
        var iG = td_0T + "&jac=1&je=" + a.td_2O(iF, h);
        bH(iG, document);
      }
    }, function (iJ) {});
  } catch (iK) {}
}
a.tdz_71cb067a03394262b5a1a31abbc1cdd0 = new a.td_0w("71cb067a03394262b5a1a31abbc1cdd00700515104030156080a525b57565354");
var ak = function (iL) {
  function iM(iZ) {
    return iQ(iR(iP(iZ), iZ.length * 8));
  }
  function iN(ja) {
    var jb = "0123456789abcdef";
    var jc = "";
    var jd;
    for (var je = 0; je < ja.length; je++) {
      jd = ja.charCodeAt(je);
      jc += jb.charAt(jd >>> 4 & 15) + jb.charAt(jd & 15);
    }
    return jc;
  }
  function iO(jf) {
    var jg = "";
    var jh = -1;
    var ji, jj;
    while (++jh < jf.length) {
      ji = jf.charCodeAt(jh);
      jj = jh + 1 < jf.length ? jf.charCodeAt(jh + 1) : 0;
      if (55296 <= ji && ji <= 56319 && 56320 <= jj && jj <= 57343) {
        ji = 65536 + ((ji & 1023) << 10) + (jj & 1023);
        jh++;
      }
      if (ji <= 127) {
        jg += String.fromCharCode(ji);
      } else {
        if (ji <= 2047) {
          jg += String.fromCharCode(192 | ji >>> 6 & 31, 128 | ji & 63);
        } else {
          if (ji <= 65535) {
            jg += String.fromCharCode(224 | ji >>> 12 & 15, 128 | ji >>> 6 & 63, 128 | ji & 63);
          } else {
            if (ji <= 2097151) {
              jg += String.fromCharCode(240 | ji >>> 18 & 7, 128 | ji >>> 12 & 63, 128 | ji >>> 6 & 63, 128 | ji & 63);
            }
          }
        }
      }
    }
    return jg;
  }
  function iP(jk) {
    var jl = Array(jk.length >> 2);
    for (var jm = 0; jm < jl.length; jm++) {
      jl[jm] = 0;
    }
    for (jm = 0; jm < jk.length * 8; jm += 8) {
      jl[jm >> 5] |= (jk.charCodeAt(jm / 8) & 255) << jm % 32;
    }
    return jl;
  }
  function iQ(jn) {
    var jo = "";
    for (var jp = 0; jp < jn.length * 32; jp += 8) {
      jo += String.fromCharCode(jn[jp >> 5] >>> jp % 32 & 255);
    }
    return jo;
  }
  function iR(jq, jr) {
    jq[jr >> 5] |= 128 << jr % 32;
    jq[(jr + 64 >>> 9 << 4) + 14] = jr;
    var js = 1732584193;
    var jt = -271733879;
    var ju = -1732584194;
    var jv = 271733878;
    for (var jw = 0; jw < jq.length; jw += 16) {
      var jx = js;
      var jy = jt;
      var jz = ju;
      var jA = jv;
      js = iT(js, jt, ju, jv, jq[jw + 0], 7, -680876936);
      jv = iT(jv, js, jt, ju, jq[jw + 1], 12, -389564586);
      ju = iT(ju, jv, js, jt, jq[jw + 2], 17, 606105819);
      jt = iT(jt, ju, jv, js, jq[jw + 3], 22, -1044525330);
      js = iT(js, jt, ju, jv, jq[jw + 4], 7, -176418897);
      jv = iT(jv, js, jt, ju, jq[jw + 5], 12, 1200080426);
      ju = iT(ju, jv, js, jt, jq[jw + 6], 17, -1473231341);
      jt = iT(jt, ju, jv, js, jq[jw + 7], 22, -45705983);
      js = iT(js, jt, ju, jv, jq[jw + 8], 7, 1770035416);
      jv = iT(jv, js, jt, ju, jq[jw + 9], 12, -1958414417);
      ju = iT(ju, jv, js, jt, jq[jw + 10], 17, -42063);
      jt = iT(jt, ju, jv, js, jq[jw + 11], 22, -1990404162);
      js = iT(js, jt, ju, jv, jq[jw + 12], 7, 1804603682);
      jv = iT(jv, js, jt, ju, jq[jw + 13], 12, -40341101);
      ju = iT(ju, jv, js, jt, jq[jw + 14], 17, -1502002290);
      jt = iT(jt, ju, jv, js, jq[jw + 15], 22, 1236535329);
      js = iU(js, jt, ju, jv, jq[jw + 1], 5, -165796510);
      jv = iU(jv, js, jt, ju, jq[jw + 6], 9, -1069501632);
      ju = iU(ju, jv, js, jt, jq[jw + 11], 14, 643717713);
      jt = iU(jt, ju, jv, js, jq[jw + 0], 20, -373897302);
      js = iU(js, jt, ju, jv, jq[jw + 5], 5, -701558691);
      jv = iU(jv, js, jt, ju, jq[jw + 10], 9, 38016083);
      ju = iU(ju, jv, js, jt, jq[jw + 15], 14, -660478335);
      jt = iU(jt, ju, jv, js, jq[jw + 4], 20, -405537848);
      js = iU(js, jt, ju, jv, jq[jw + 9], 5, 568446438);
      jv = iU(jv, js, jt, ju, jq[jw + 14], 9, -1019803690);
      ju = iU(ju, jv, js, jt, jq[jw + 3], 14, -187363961);
      jt = iU(jt, ju, jv, js, jq[jw + 8], 20, 1163531501);
      js = iU(js, jt, ju, jv, jq[jw + 13], 5, -1444681467);
      jv = iU(jv, js, jt, ju, jq[jw + 2], 9, -51403784);
      ju = iU(ju, jv, js, jt, jq[jw + 7], 14, 1735328473);
      jt = iU(jt, ju, jv, js, jq[jw + 12], 20, -1926607734);
      js = iV(js, jt, ju, jv, jq[jw + 5], 4, -378558);
      jv = iV(jv, js, jt, ju, jq[jw + 8], 11, -2022574463);
      ju = iV(ju, jv, js, jt, jq[jw + 11], 16, 1839030562);
      jt = iV(jt, ju, jv, js, jq[jw + 14], 23, -35309556);
      js = iV(js, jt, ju, jv, jq[jw + 1], 4, -1530992060);
      jv = iV(jv, js, jt, ju, jq[jw + 4], 11, 1272893353);
      ju = iV(ju, jv, js, jt, jq[jw + 7], 16, -155497632);
      jt = iV(jt, ju, jv, js, jq[jw + 10], 23, -1094730640);
      js = iV(js, jt, ju, jv, jq[jw + 13], 4, 681279174);
      jv = iV(jv, js, jt, ju, jq[jw + 0], 11, -358537222);
      ju = iV(ju, jv, js, jt, jq[jw + 3], 16, -722521979);
      jt = iV(jt, ju, jv, js, jq[jw + 6], 23, 76029189);
      js = iV(js, jt, ju, jv, jq[jw + 9], 4, -640364487);
      jv = iV(jv, js, jt, ju, jq[jw + 12], 11, -421815835);
      ju = iV(ju, jv, js, jt, jq[jw + 15], 16, 530742520);
      jt = iV(jt, ju, jv, js, jq[jw + 2], 23, -995338651);
      js = iW(js, jt, ju, jv, jq[jw + 0], 6, -198630844);
      jv = iW(jv, js, jt, ju, jq[jw + 7], 10, 1126891415);
      ju = iW(ju, jv, js, jt, jq[jw + 14], 15, -1416354905);
      jt = iW(jt, ju, jv, js, jq[jw + 5], 21, -57434055);
      js = iW(js, jt, ju, jv, jq[jw + 12], 6, 1700485571);
      jv = iW(jv, js, jt, ju, jq[jw + 3], 10, -1894986606);
      ju = iW(ju, jv, js, jt, jq[jw + 10], 15, -1051523);
      jt = iW(jt, ju, jv, js, jq[jw + 1], 21, -2054922799);
      js = iW(js, jt, ju, jv, jq[jw + 8], 6, 1873313359);
      jv = iW(jv, js, jt, ju, jq[jw + 15], 10, -30611744);
      ju = iW(ju, jv, js, jt, jq[jw + 6], 15, -1560198380);
      jt = iW(jt, ju, jv, js, jq[jw + 13], 21, 1309151649);
      js = iW(js, jt, ju, jv, jq[jw + 4], 6, -145523070);
      jv = iW(jv, js, jt, ju, jq[jw + 11], 10, -1120210379);
      ju = iW(ju, jv, js, jt, jq[jw + 2], 15, 718787259);
      jt = iW(jt, ju, jv, js, jq[jw + 9], 21, -343485551);
      js = iX(js, jx);
      jt = iX(jt, jy);
      ju = iX(ju, jz);
      jv = iX(jv, jA);
    }
    return Array(js, jt, ju, jv);
  }
  function iS(jB, jC, jD, jE, jF, jG) {
    return iX(iY(iX(iX(jC, jB), iX(jE, jG)), jF), jD);
  }
  function iT(jH, jI, jJ, jK, jL, jM, jN) {
    return iS(jI & jJ | ~jI & jK, jH, jI, jL, jM, jN);
  }
  function iU(jO, jP, jQ, jR, jS, jT, jU) {
    return iS(jP & jR | jQ & ~jR, jO, jP, jS, jT, jU);
  }
  function iV(jV, jW, jX, jY, jZ, ka, kb) {
    return iS(jW ^ jX ^ jY, jV, jW, jZ, ka, kb);
  }
  function iW(kc, kd, ke, kf, kg, kh, ki) {
    return iS(ke ^ (kd | ~kf), kc, kd, kg, kh, ki);
  }
  function iX(kj, kk) {
    var kl = (kj & 65535) + (kk & 65535);
    var km = (kj >> 16) + (kk >> 16) + (kl >> 16);
    return km << 16 | kl & 65535;
  }
  function iY(kn, ko) {
    return kn << ko | kn >>> 32 - ko;
  }
  return iN(iM(iO(iL)));
};
a.tdz_3692b81e657043cab339c29e426be9e4 = new a.td_0w("3692b81e657043cab339c29e426be9e4445f57560d4f42125f5b5e405c5c0d044d5a4356075b56165953550d07530057475a505c1740500b5247585950561b110e5c415c115b5c");
function bd(kp) {
  var kq = kp.toLowerCase();
  if (kq === "windows") {
    kq = "win";
  } else {
    if (kq === "iphone/ipod" || kq === "ipad") {
      kq = "ios";
    }
  }
  this.os_name = kq;
  this._eq = function (kr) {
    return kr === this.os_name;
  };
  this._ne = function (ks) {
    return ks !== this.os_name;
  };
  this._gt = function (kt) {
    return this.os_name > kt;
  };
  this._ge = function (ku) {
    return this.os_name >= ku;
  };
  this._lt = function (kv) {
    return this.os_name < kv;
  };
  this._le = function (kw) {
    return this.os_name <= kw;
  };
  this._in = function (kx) {
    var ky = kq.constructor === String ? [kq] : kq;
    var kz;
    for (kz = 0; kz < ky.length; kz++) {
      if (this.os_name === ky[kz]) {
        return true;
      }
    }
    return false;
  };
  this.getFontsList = function () {
    if (this.os_name === "mac") {
      return typeof r === "object" ? r : [];
    }
    if (this.os_name === "linux") {
      return typeof p === "object" ? p : [];
    }
    if (this.os_name === "win") {
      return typeof q === "object" ? q : [];
    }
    if (this.os_name === "ios") {
      return typeof Q === "object" ? Q : [];
    }
    if (this.os_name === "android") {
      return typeof P === "object" ? P : [];
    } else {
      return [];
    }
  };
}
function be(kA) {
  var kB = kA.toLowerCase();
  if (kB === "explorer") {
    kB = "ie";
  }
  this.browser_name = kB;
  this._eq = function (kC) {
    return kC === this.browser_name;
  };
  this._ne = function (kD) {
    return kD !== this.browser_name;
  };
  this._in = function (kE) {
    var kF = kE.constructor === String ? [kE] : kE;
    var kG;
    for (kG = 0; kG < kF.length; kG++) {
      if (this.browser_name === kF[kG]) {
        return true;
      }
    }
    return false;
  };
}
function bf(kH) {
  this.version = kH;
  this._eq = function (kI) {
    return this.version === parseInt(kI);
  };
  this._ne = function (kJ) {
    return this.version !== parseInt(kJ);
  };
  this._gt = function (kK) {
    return this.version > parseInt(kK);
  };
  this._ge = function (kL) {
    return this.version >= parseInt(kL);
  };
  this._lt = function (kM) {
    return this.version < parseInt(kM);
  };
  this._le = function (kN) {
    return this.version <= parseInt(kN);
  };
}
a.tdz_0d6c16631a214b4eb51e972c2a60e169 = new a.td_0w("0d6c16631a214b4eb51e972c2a60e16953055815504504577123405e43115117114b14035059552462335f5e111510150c07570d4757450d09114a1175105d040e040315411773115b005a5d045653574405064d0407180343045658590353004d455f02");
var a = a || {};
function bg() {
  try {
    var kO = document.createElement("canvas");
    if (!kO) {
      return null;
    }
    if (!kO.getContext) {
      return null;
    }
    var kP = kO.getContext("2d");
    if (!kP) {
      return null;
    }
    if (!kP.font || !kP.fillText) {
      return null;
    }
    kO.width = 300;
    kO.height = 100;
    kP = kO.getContext("2d");
    var kQ = "@Browsers~%fingGPRint$&,<canvas>";
    kP.font = "8px Arial";
    kP.fillText(kQ, 0, 50);
    kP.font = "12px Arial";
    var kR = kP.createLinearGradient(0, 0, kO.width, 0);
    kR.addColorStop("0", "magenta");
    kR.addColorStop("0.5", "blue");
    kR.addColorStop("1.0", "red");
    kP.fillStyle = kR;
    kP.fillText(kQ, 0, 90);
    var kS = kO.toDataURL("image/png");
    if (!kS) {
      return null;
    }
    return cf(kS);
  } catch (kT) {
    return null;
  }
}
a.tdz_d05391657ecf412c82c291786051ea0f = new a.td_0w("d05391657ecf412c82c291786051ea0f114350134a45445c5411261e445d5d115d402a771955585d455e124545165f140f6576714b5e41465217362576435d144b5711125a5054505310545206044012445850525d54444664040507465861025e53115b19081a185551565900415105075545471959535453001115737466225b5106424d1b18121a10");
var a = a || {};
function bh() {
  ("use strict");
  var kU = [["Explorer", 0, "IE doesn't work"], ["UCBrowser", 0, "UCBrowser cache accept headers"], ["Safari", 9, "Safari 9- cache accept headers"]];
  try {
    for (var kV = 0; kV < kU.length; kV++) {
      var kW = kU[kV][0];
      var kX = kU[kV][1];
      if (al.td_2u !== kW) {
        continue;
      }
      if (kX === 0) {
        return false;
      }
      var kY = parseInt(al.td_1I);
      if (kY && kX < kY) {
        return true;
      }
      return false;
    }
  } catch (kZ) {
    return false;
  }
  return true;
}
function bi() {
  ("use strict");
  var la = a.td_3U();
  if (!bh() || !la) {
    return false;
  }
  try {
    var lb = i + "/" + K + h;
    lb = lb.replace(/[\r\n]/g, "");
    la.open("GET", c, true);
    la.setRequestHeader("Accept", "*/*, " + lb);
    la.send(null);
    return true;
  } catch (lc) {
    return false;
  }
  return false;
}
var a = a || {};
a.td_4z = function () {};
a.hasDebug = false;
a.trace = function () {};
a.hasTrace = false;
a.tdz_968dfa45f55e4917b03ab9c9d3bd2af8 = new a.td_0w("968dfa45f55e4917b03ab9c9d3bd2af876666a2b160446542945501755197c5e0c597605055c2641145f0d165713235c5e197d0001385577145a4216514b68560c54561931580e4a115d0526400e114b5c446d2724135b42155047265c4b5e5a077f5e0f0b6e065b2b5e0c0d650404177f4e512b35275d4703535a1d774b587831685a000d740a16295a170d7013094f4a534a2516115850355453044650675210435a0e0c50205806782621790e08494c534a0b142255580f5b5a2b514d42540340562c31702670217e0d065b0d036c4b5f5c01081546432150560e5b745e4d0b5c5f0035500d6e0d5d060b45122b595a61510a020e434646655d0a5a5c705906425c080676135c0a713120611408776a7a510a1319145414584352587558591748710d035a087b0141101d5b310e57575351340e0e5a50495c650a50506156067c5a0f17414358165e2e0d5c141e1858574a070e365d5b025a4216140801600b5e570e154a43014a02350d5c05094f4a1600330f0f505a1146155263505f530d4740413450104d05640b0a560e114b19655d16100446155405055663505f530d4740413a6934500a570d134141540809066f0d08055b421515782063505f530d4740415b0134500a570d1341415f0d6e5f560009164715286115511a09665e0c545c161119207c335a0c005d1615180a1809552b0057152966153d795852172d6364080c5d0c4e1713320c5d0f03180f1808330f0f505a114615355c565f5242071d5135500d5d0b441144620909565c16004a56365d5b025a4216146959580c5513594c0834500a570d134141365056585d4457511a05135b5e0b5b4e5f5e2d63130811190d561013034444000a515d166d362a3a5b570c505611146a505103425a3307540c4d017d0d105b070f5b5842510b083c47540054470c564b5041070a1c4e204b024f01560603575b4917");
var a = a || {};
var al = {td_1G: function () {
  if (typeof navigator !== "undefined") {
    this.td_e(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
  }
}, td_e: function (ld, le, lf, lg, lh) {
  this.td_a = [{string: ld, subString: "OPR", versionSearch: "OPR", identity: "Opera"}, {string: ld, subString: "Opera Mini", versionSearch: "Opera Mini", identity: "Opera Mini"}, {string: ld, subString: "Edge", versionSearch: "Edge", identity: "Explorer"}, {string: ld, subString: "Edg/", versionSearch: "Edg", identity: "Explorer"}, {string: ld, subString: "YaBrowser", versionSearch: "YaBrowser", identity: "Yandex"}, {string: ld, subString: "SamsungBrowser", identity: "SamsungBrowser"}, {string: ld, subString: "UCBrowser", identity: "UCBrowser"}, {string: ld, subString: "Chrome", identity: "Chrome"}, {string: ld, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"}, {string: ld, subString: "FxiOS", identity: "Firefox", versionSearch: "FxiOS"}, {string: ld, subString: "CriOS", identity: "Chrome", versionSearch: "CriOS"}, {string: ld, subString: "XiaoMi/MiuiBrowser", identity: "XiaoMi/MiuiBrowser", versionSearch: "XiaoMi/MiuiBrowser"}, {string: le, subString: "Apple", identity: "Safari", versionSearch: "Version"}, {prop: lh, identity: "Opera", versionSearch: "Version"}, {string: le, subString: "iCab", identity: "iCab"}, {string: le, subString: "KDE", identity: "Konqueror"}, {string: ld, subString: "Firefox", identity: "Firefox"}, {string: le, subString: "Camino", identity: "Camino"}, {string: ld, subString: "Netscape", identity: "Netscape"}, {string: ld, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"}, {string: ld, subString: "IEMobile", identity: "IEMobile", versionSearch: "IEMobile"}, {string: ld, subString: "Trident", identity: "Explorer", versionSearch: "rv"}, {string: ld, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"}, {string: ld, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}];
  this.td_f = [{string: lf, subString: "Win", identity: "Windows"}, {string: lf, subString: "Mac", identity: "Mac"}, {string: ld, subString: "Windows Phone", identity: "Windows Phone"}, {string: ld, subString: "Android", identity: "Android"}, {string: ld, subString: "OpenBSD", identity: "OpenBSD"}, {string: ld, subString: "SunOS", identity: "SunOS"}, {string: lf, subString: "Linux armv7l", identity: "Android"}, {string: lf, subString: "Linux", identity: "Linux"}, {string: lf, subString: "BlackBerry", identity: "BlackBerry"}, {string: ld, subString: "iPhone", identity: "iPhone/iPod"}, {string: ld, subString: "iPad", identity: "iPad"}];
  this.td_b = [{string: lf, subString: "Win", identity: "Windows"}, {string: lf, subString: "Mac", identity: "Mac"}, {string: lf, subString: "Linux arm", identity: "Android"}, {string: lf, subString: "Linux aarch", identity: "Android"}, {string: lf, subString: "Linux", identity: "Linux"}, {string: lf, subString: "BlackBerry", identity: "BlackBerry"}, {string: lf, subString: "iPhone", identity: "iPhone"}, {string: lf, subString: "iPad", identity: "iPad"}];
  this.td_U = [{identity: "Windows", versionMap: [{s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/}, {s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/}, {s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/}, {s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/}, {s: "Windows Vista", r: /Windows NT 6.0/}, {s: "Windows Server 2003", r: /Windows NT 5.2/}, {s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/}, {s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/}, {s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/}, {s: "Windows 98", r: /(Windows 98|Win98)/}, {s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/}, {s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/}, {s: "Windows CE", r: /Windows CE/}, {s: "Windows 3.11", r: /Win16/}]}, {identity: "Mac", versionMap: [{s: "Mac OS X", r: /Mac OS X/}, {s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}]}, {identity: "Windows Phone", versionMap: [{s: "Windows Phone 6.0", r: /Windows Phone 6.0/}, {s: "Windows Phone 7.0", r: /Windows Phone 7.0/}, {s: "Windows Phone 8.0", r: /Windows Phone 8.0/}, {s: "Windows Phone 8.1", r: /Windows Phone 8.1/}, {s: "Windows Phone 10.0", r: /Windows Phone 10.0/}]}];
  this.td_2E = typeof window.orientation !== "undefined";
  this.td_0A = this.td_I(this.td_b) || "unknown";
  this.td_3n = this.td_u(this.td_2E, this.td_0A) || "unknown";
  this.td_2u = this.td_I(this.td_a) || "unknown";
  this.td_1I = this.td_h(this.td_2u, ld) || this.td_h(this.td_2u, lg) || "unknown";
  this.td_0y = this.td_I(this.td_f) || "unknown";
  this.td_1E = this.td_t(this.td_U, this.td_0y, ld, lg) || this.td_0y;
}, td_t: function (li, lj, lk, ll) {
  var lm = lk;
  var ln = ll;
  var lo = lj;
  var lp;
  for (var lq = 0; lq < li.length; lq++) {
    if (li[lq].identity === lj) {
      for (var lr = 0; lr < li[lq].versionMap.length; lr++) {
        var ls = li[lq].versionMap[lr];
        if (ls.r.test(lm)) {
          lo = ls.s;
          if (/Windows/.test(lo)) {
            return lo;
          }
          break;
        }
      }
      break;
    }
  }
  switch (lo) {
    case "Mac OS X":
      lo = null;
      var lt = /(Mac OS X 10[\.\_\d]+)/.exec(lm);
      if (lt !== null && lt.length >= 1) {
        lo = lt[1];
      }
      break;
    case "Android":
      lo = null;
      var lu = /[^-](Android[^\d]?[\.\_\d]+)/.exec(lm);
      if (lu !== null && lu.length >= 1) {
        lo = lu[1];
      }
      break;
    case "iPad":
    case "iPhone":
    case "iPhone/iPod":
      lo = null;
      lp = /OS (\d+)_(\d+)_?(\d+)?/.exec(ln);
      if (lp !== null) {
        var lv = lp.length >= 1 ? lp[1] : "unknown";
        var lw = lp.length >= 2 ? lp[2] : "unknown";
        var lx = lp.length >= 3 ? lp[3] | "0" : "0";
        lo = "iOS " + lv + "." + lw + "." + lx;
      }
      break;
    default:
      return null;
  }
  return lo;
}, td_I: function (ly) {
  for (var lz = 0; lz < ly.length; lz++) {
    var lA = ly[lz].string;
    var lB = ly[lz].prop;
    this.versionSearchString = ly[lz].versionSearch || ly[lz].identity;
    if (lA) {
      if (lA.indexOf(ly[lz].subString) !== -1) {
        return ly[lz].identity;
      }
    } else {
      if (lB) {
        return ly[lz].identity;
      }
    }
  }
}, td_h: function (lC, lD) {
  if (!lC) {
    return null;
  }
  var lE;
  switch (lC) {
    case "Safari":
      var lF = /\WVersion[^\d]([\.\d]+)/.exec(lD);
      if (lF !== null && lF.length >= 1) {
        lE = lF[1];
      }
      break;
    case "Opera":
      if (this.versionSearchString === "OPR") {
        var lG = /\WOPR[^\d]*([\.\d]+)/.exec(lD);
        if (lG !== null && lG.length >= 1) {
          lE = lG[1];
        }
        break;
      }
    default:
      var lH = lD.indexOf(this.versionSearchString);
      if (lH !== -1) {
        lE = lD.substring(lH + this.versionSearchString.length + 1);
      }
      break;
  }
  if (lE) {
    return parseFloat(lE);
  }
  return null;
}, td_A: function (lI) {
  var lJ = null;
  try {
    lJ = new Worker(lI);
  } catch (lK) {
    if (lJ !== null && typeof lJ.terminate !== "undefined") {
      lJ.terminate();
    }
    return lK.toString().indexOf("is not a valid URL") !== -1;
  }
  return false;
}, td_u: function (lL, lM) {
  var lN = this.td_A;
  try {
    var lO = typeof window.opr !== "undefined" && typeof td_P.addons !== "undefined" || typeof window.opera !== "undefined";
    if (lO) {
      return "Opera";
    }
    lO = typeof InstallTrigger !== "undefined";
    if (lO) {
      return "Firefox";
    }
    lO = /constructor/i.test(window.HTMLElement) || function (lP) {
      return lP.toString() === "[object SafariRemoteNotification]";
    }(!window.safari || typeof safari !== "undefined" && safari.pushNotification);
    lO = typeof window.safari !== "undefined";
    if (lO) {
      return "Safari";
    }
    lO = false || typeof document.documentMode !== "undefined";
    if (lO) {
      return "Explorer";
    }
    if (!lO && typeof window.StyleMedia !== "undefined") {
      return "Edge";
    }
    if (lN("brave://")) {
      return "Brave";
    }
    if (lN("edge://")) {
      return "Edge";
    }
    lO = typeof window.chrome !== "undefined" && typeof window.yandex == "undefined" && (typeof window.chrome.webstore !== "undefined" || typeof window.chrome.runtime !== "undefined" || typeof window.chrome.loadTimes !== "undefined");
    if (lO) {
      return "Chrome";
    }
    if (lL) {
      lO = typeof window.chrome !== "undefined" && typeof window.chrome.Benchmarking !== "undefined";
      if (lO) {
        return "SamsungBrowser";
      }
      lO = typeof window.ucapi !== "undefined";
      if (lO) {
        return "UCBrowser";
      }
    }
    if (lM === "iPhone" || lM === "iPad") {
      if (typeof navigator.serviceWorker !== "undefined") {
        return "Safari";
      }
      if (typeof window.$jscomp !== "undefined") {
        return "Chrome";
      }
    }
    lO = typeof window.chrome !== "undefined" && typeof window.yandex !== "undefined";
    if (lO) {
      return "Yandex";
    }
  } catch (lQ) {}
  return null;
}, td_a: {}, td_f: {}, td_b: {}, td_U: {}};
a.tdz_544d524880a3441ab00f6f131f9519a8 = new a.td_0w("544d524880a3441ab00f6f131f9519a8135e56595943091e52515c4647511112164259054208445e53034b76594b0e55507b44014753125e0516054346091700040d16154e1f0c155c1204135c575c1e4209120708144e051e43025709125d095f4344145f0856155514041341044748590912145d0f1250500d145d5f5a5e160c165a15595b1759420404135b4a0e4d08125e175747091e52430c460940431407165e0e555b175d550b041345430505135955105d40091e5d48520e12535d3e010d16015a39590e17055a510c");
var a = a || {};
var am = 255;
function bj() {
  m = new bd(al.td_0y);
  n = new be(al.td_2u);
  o = new bf(al.td_1I);
  var lR = "";
  try {
    lR += bn();
  } catch (lV) {}
  try {
    lR += bo();
  } catch (lW) {}
  var lS = navigator.userAgent ? "&jb=" + a.td_2O("lq=" + encodeURIComponent(navigator.userAgent), h) : "";
  var lT = b + "&ja=" + a.td_2O(lR, h) + lS;
  if (typeof td_1M !== "undefined") {
    var lU = function () {
      setTimeout(function () {
        td_1M(h);
      }, 2e3);
    };
  }
  bH(lT, document, lU);
}
function bk(lX) {
  ("use strict");
  try {
    if (typeof lX !== "number" || lX <= 0) {
      lX = 1;
    } else {
      if (!al.td_2E) {
        if (al.td_2u === "Chrome" || al.td_2u === "Opera") {
          lX = Math.floor(lX);
          if (lX <= 0) {
            lX = 1;
          }
        }
      }
    }
  } catch (lY) {}
  return lX;
}
function bl(lZ, ma) {
  ("use strict");
  var mb = lZ * ma;
  try {
    if (ma % 1 === 0) {
      return mb;
    }
    mb = Math.round(mb);
    for (var mc = mb - 2; mc < mb + 2; mc++) {
      if (mc % 10 === 0) {
        return mc;
      }
    }
  } catch (md) {}
  return mb;
}
function bm() {
  try {
    var me = 1;
    if (window && window.devicePixelRatio) {
      me = window.devicePixelRatio;
    }
    me = bk(me);
    var mf = 0;
    var mg = 0;
    var mh = 0;
    var mi = 0;
    if (screen && screen.width && screen.height) {
      mf = screen.width;
      mg = screen.height;
    } else {
      if (window && window.screen.width && window.screen.height) {
        mf = window.screen.width;
        mg = window.screen.height;
      }
    }
    var mj = "&f=" + bl(mf, me) + "x" + bl(mg, me) + "&dpr=" + me + "," + mf + "x" + mg;
    if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
      mh = window.screen.availWidth * me;
      mi = window.screen.availHeight * me;
    }
    if (mh !== 0 && mi !== 0) {
      mj += "&af=" + mh + "x" + mi;
    }
    if (typeof window !== "undefined" && typeof window.screenX !== "undefined" && typeof window.screenY !== "undefined") {
      var mk = window.screenX * me;
      var ml = window.screenY * me;
      mj += "&sxy=" + mk + "x" + ml;
    }
    return mj;
  } catch (mm) {}
  return "";
}
function bn() {
  var mn = new Date;
  mn.setDate(1);
  mn.setMonth(5);
  var mo = -mn.getTimezoneOffset();
  mn.setMonth(11);
  var mp = -mn.getTimezoneOffset();
  var mq = Math.min(mo, mp);
  var mr = Math.max(mo, mp) - mq;
  var ms = l ? l.length : 0;
  var mt = [];
  for (var mu = 0; mu < ms; mu++) {
    mt[mu] = l[mu].type;
  }
  var mv = ms > 0 ? "&mt=" + ak(mt.join()) + "&mn=" + ms : "";
  var mw = "";
  if (k !== null) {
    mw += "&w=" + k;
  }
  mw += "&c=" + mq + "&z=" + mr + bm() + mv;
  mw += "&scd=" + screen.colorDepth;
  mw += "&lh=" + encodeURIComponent(location.href.substring(0, am));
  var mx = encodeURIComponent(document.referrer.substring(0, am));
  if (typeof td_4l === "string" && td_4l.length > 0 && window !== window.top && mx.length === 0) {
    mx = td_4l;
  }
  mw += "&dr=" + mx;
  var my = cc();
  if (my !== null) {
    mw += "&p=" + my;
  }
  var mz = navigator.plugins;
  if (mz.length) {
    var mA = mz.length;
    mw += "&pl=" + mA;
    var mB;
    for (mu = 0; mu < mA; mu++) {
      mB += mz[mu].name + mz[mu].description + mz[mu].filename + mz[mu].length;
    }
    mw += "&ph=" + ak(mB);
  }
  mw += "&hh=" + ak(i + h);
  if (al.td_1E !== "unknown") {
    mw += "&jso=" + encodeURIComponent(al.td_1E);
  }
  if (al.td_2u !== "unknown") {
    if (al.td_1I !== "unknown") {
      mw += "&jsb=" + encodeURIComponent(al.td_2u + " " + al.td_1I);
    } else {
      mw += "&jsb=" + encodeURIComponent(al.td_2u);
    }
  }
  if (al.td_0A !== "unknown") {
    mw += "&jsou=" + encodeURIComponent(al.td_0A);
  }
  if (al.td_3n !== "unknown") {
    mw += "&jsbu=" + encodeURIComponent(al.td_3n);
  }
  if (al.td_2E === true) {
    mw += "&jsmu=true";
  }
  if (typeof navigator !== "undefined") {
    if (typeof navigator.hardwareConcurrency === "number") {
      mw += "&nhc=" + navigator.hardwareConcurrency;
    }
    if (typeof navigator.deviceMemory === "number") {
      mw += "&ndm=" + navigator.deviceMemory;
    }
  }
  if (typeof Intl !== "undefined" && typeof Intl.DateTimeFormat !== "undefined") {
    var mC = Intl.DateTimeFormat();
    if (mC !== null && typeof mC !== "undefined" && typeof mC.resolvedOptions !== "undefined") {
      var mD = mC.resolvedOptions();
      if (mD !== null && typeof mD.timeZone === "string" && mD.timeZone.length > 0) {
        mw += "&tzd=" + encodeURIComponent(mD.timeZone);
      }
    }
  }
  var mE = ax();
  if (mE) {
    mw += "&mathr=" + encodeURIComponent(mE);
  }
  if (typeof bi === "undefined" || !bi()) {
    bJ(c, document);
  }
  return mw;
}
var an = [];
var ao;
function bo() {
  var mF = "";
  if (typeof bg !== "undefined") {
    var mG = bg();
    if (mG) {
      mF += "&ex3=" + mG;
    }
  }
  if (typeof aE !== "undefined") {
    var mH = aE();
    if (mH) {
      mF += "&gl_c=" + encodeURIComponent(mH) + "&gl_h=" + cf(mH);
    }
  }
  if (typeof aF !== "undefined") {
    var mI = aF();
    if (mI) {
      mF += mI;
    }
  }
  if (typeof td_3t !== "undefined") {
    td_3t();
  }
  if (typeof bK !== "undefined") {
    bK();
  }
  if (typeof bE !== "undefined") {
    bE();
  }
  if (typeof ce !== "undefined") {
    ce();
  }
  if (typeof bp !== "undefined") {
    bp();
  }
  if (typeof aS !== "undefined") {
    aS();
  }
  if (typeof az !== "undefined") {
    az();
  }
  if (typeof ai !== "undefined") {
    if (typeof aA !== "undefined") {
      ai.addFeature(new aA);
    }
    if (typeof aB !== "undefined") {
      ai.addFeature(new aB);
    }
    if (typeof ay !== "undefined") {
      ai.addFeature(new ay);
    }
    if (typeof aC !== "undefined") {
      ai.addFeature(new aC);
    }
  }
  if (typeof aj !== "undefined") {
    if (typeof td_4s !== "undefined") {
      aj.addFeature(new td_4s);
    }
    if (typeof td_4r !== "undefined") {
      aj.addFeature(new td_4r);
    }
  }
  if (typeof bc !== "undefined") {
    bc();
  }
  if (typeof td_1N !== "undefined") {
    an[new td_1N(F, G, H)];
  }
  if (typeof td_3k !== "undefined") {
    an[new td_3k];
  }
  if (typeof td_0D !== "undefined") {
    an[new td_0D(td_4Q, td_3N, td_4k)];
  }
  if (typeof td_4X !== "undefined") {
    an[new td_4X(t, u, v)];
  }
  if (typeof td_1k !== "undefined") {
    an[new td_1k(z, A, B)];
  }
  if (typeof td_2l !== "undefined" && typeof Object.create !== "undefined" && typeof String.prototype.toUpperCase !== "undefined") {
    an[new td_2l(w, x, y)];
  }
  if (typeof td_1z !== "undefined") {
    an[new td_1z(C, D, E)];
  }
  if (typeof td_1K !== "undefined") {
    td_1K();
  }
  if (typeof td_2o !== "undefined") {
    an[new td_2o];
  }
  if (typeof td_1i !== "undefined") {
    var mJ = td_1i();
    if (mJ !== null) {
      mF += mJ;
    }
  }
  if (typeof td_3A !== "undefined") {
    td_3A();
  }
  if (s.length > 0) {
    ao = new td_2b(al.td_0y, al.td_2u, s);
    if (ao.isValid()) {
      ao.scan();
    }
  }
  a.load_iframe(td_3V, N, document);
  if (typeof td_1Q !== "undefined") {
    td_1Q();
  }
  if (typeof a.td_0g !== "undefined") {
    a.td_0g();
  }
  if (typeof cd !== "undefined") {
    var mK = cd();
    if (mK) {
      mF += "&ccd=" + mK;
    }
  }
  return mF;
}
a.tdz_20e5f684bf5041c69164585940ba1713 = new a.td_0w("20e5f684bf5041c69164585940ba1713465d1d1802544c591a4b465950450e4e14425f500451514b5151060e5f5b484457525f5005524b552725716375614e040c076467746b66781960292262061c45036f50662e77150657504255560b114558435355514f4750405508165a405451084216540c41534417045e554d420a514b5f525a5a56565c040052530207425a566f175b020b1e470b026a545545060b1f425f506a4c4c49510d441258536e5857495813155f5c6b110f520d12420a504b0c07124651534b0900440b570a");
var a = a || {};
if (typeof a.td_4j === "undefined") {
  a.td_4j = [];
}
var ap = "tmx-db";
var aq = "tmx-sid";
var ar = "tmx-sid1";
var as = window.crypto || window.msCrypto;
var at = typeof as !== "undefined" ? as.subtle || as.webkitSubtle : null;
var au = false;
function bp() {
  try {
    var mL = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    if (!as || !at || !mL) {
      return;
    }
    var mM = mL.open(ap, 1);
    mM.onupgradeneeded = function () {
      mM.result.createObjectStore(aq, {keyPath: "id"});
    };
    mM.onsuccess = function () {
      bq(mM.result);
    };
    mM.onerror = function (mN) {};
  } catch (mO) {}
}
function bq(mP) {
  var mQ = mP.transaction(aq, "readonly");
  var mR = mQ.objectStore(aq);
  var mS = mR.get(ar);
  mS.onsuccess = function () {
    if (mS.result === undefined || mS.result === null || mS.result.privateKey === null || mS.result.publicKey === null || mS.result.createTime === null || mS.result.type === null) {
      br(mP, "web:ecdsa");
    } else {
      bv(mS.result.privateKey, mS.result.publicKey, bt(mS.result.createTime, mS.result.type));
    }
  };
}
function br(mT, mU) {
  try {
    var mV;
    if (mU === "web:ecdsa") {
      mV = at.generateKey({name: "ECDSA", namedCurve: "P-256"}, false, ["sign"]);
    } else {
      mV = at.generateKey({name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: {name: "SHA-256"}}, false, ["sign"]);
    }
    if (typeof mV.then !== "undefined") {
      mV.then(function (mW) {
        bs(mT, mW, mU);
      }, function (mX) {
        if (mU === "web:ecdsa") {
          br(mT, "web:rsa");
        }
      });
    } else {
      mV.oncomplete = function (mY) {
        bs(mT, mY.target.result, mU);
      };
      mV.onerror = function (mZ) {
        if (mU === "web:ecdsa") {
          br(mT, "web:rsa");
        }
      };
    }
  } catch (na) {
    if (mU === "web:ecdsa") {
      br(mT, "web:rsa");
    }
  }
}
function bs(nb, nc, nd) {
  try {
    var ne = nb.transaction(aq, "readwrite");
    var nf = ne.objectStore(aq);
    var ng = Math.floor(aM() / 1e3);
    var nh = nf.put({id: ar, publicKey: nc.publicKey, privateKey: nc.privateKey, createTime: ng, type: nd});
    nh.onsuccess = function () {
      bv(nc.privateKey, nc.publicKey, bt(ng, nd));
    };
    nh.onerror = function () {
      if (nd === "web:ecdsa") {
        br(nb, "web:rsa");
      }
    };
  } catch (ni) {
    if (nd === "web:ecdsa") {
      br(nb, "web:rsa");
    }
  }
}
function bt(nj, nk) {
  var nl = au ? L : M;
  return {rnd: bF(16), nonce: nl, date: nj, type: nk};
}
function bu(nm, nn) {
  try {
    return at.exportKey(nm, nn);
  } catch (no) {
    return null;
  }
}
function bv(np, nq, nr) {
  var ns = bu("spki", nq);
  if (ns === null) {
    ns = bu("jwk", nq);
    nr.type = "web:rsajwk";
  }
  if (ns === null || typeof ns === "undefined") {
    return;
  }
  if (typeof ns.then !== "undefined") {
    ns.then(function (nt) {
      nr.pubkey = by(nt);
      bw(np, nr);
    });
  } else {
    ns.oncomplete = function (nu) {
      nr.pubkey = by(nu.target.result);
      bw(np, nr);
    };
  }
}
function bw(nv, nw) {
  try {
    var nx;
    if (nw.type === "web:ecdsa") {
      nx = at.sign({name: "ECDSA", hash: {name: "SHA-256"}}, nv, bx(nw));
    } else {
      nx = at.sign({name: "RSASSA-PKCS1-v1_5", hash: {name: "SHA-256"}}, nv, bx(nw));
    }
    if (typeof nx.then !== "undefined") {
      nx.then(function (ny) {
        if (nw.type === "web:ecdsa") {
          nw.sig = bB(bA(by(ny.slice(0, 32))) + bA(by(ny.slice(32, 64))));
        } else {
          nw.sig = by(ny);
        }
        bC(nw);
      }, function (nz) {});
    } else {
      nx.oncomplete = function (nA) {
        nw.sig = by(nA.target.result);
        bC(nw);
      };
    }
  } catch (nB) {}
}
function bx(nC) {
  var nD = [];
  var nE = nC.rnd + nC.nonce + nC.date + nC.type;
  for (var nF = 0; nF < nE.length; nF++) {
    nD.push(nE.charCodeAt(nF));
  }
  return new Uint8Array(nD);
}
function by(nG) {
  return Array.prototype.map.call(new Uint8Array(nG), bz).join("");
}
function bz(nH) {
  return ("00" + nH.toString(16)).slice(-2);
}
function bA(nI) {
  if (nI[0] >= "8") {
    return "02" + bz(nI.length / 2 + 1) + "00" + nI;
  } else {
    return "02" + bz(nI.length / 2) + nI;
  }
}
function bB(nJ) {
  return "30" + bz(nJ.length / 2) + nJ;
}
function bC(nK) {
  var nL = "sid_rnd=" + nK.rnd + "&sid_date=" + nK.date + "&sid_type=" + nK.type + "&sid_key=" + nK.pubkey + "&sid_sig=" + nK.sig;
  nL += au ? "&sifr=1" : "&sifr=0";
  var nM = d + "&jf=" + a.td_2O(nL, h);
  bJ(nM, document);
}
function bD() {
  a.td_4V();
  a.td_0v(document);
  aO();
  au = true;
  bp();
}
a.td_4j.push(function () {
  var nN = new a.td_0w("cf047ce8851f4a54a9b6c13c6b8146ca0B12444444594A175B515F571A07185705574C550C5C1C05464D5B5D515711504D165E530C202C6B0B66782209520370597D5306270703250E57010904732056535100070057270800020920045E5A4606660B525E5D52110F070F05441010041015595B593C0C5C0504000400570D52000F5A575B0702070E540A520D030105000507030E54000C5A0606575603010C04015202555702520E5A0B0503525B5806515307520152595C53025550515156040B040253040B020144565E5A55065C0255520D0454045B0E53050356020C015008000255095502005A5909020707595554530D0201015B5B02065F03040156520E535401050B060E520C07520752595B550403535B5C5D0F56020356565450070A51525355510604040C01010E02560255520D0454045B0E53050356020C01590D545402090A5A06515E0755030002");
  d = "https://cdn1.f-cdn.com/fp/clear1.png;CIS3SID=36D8D10D60F85980EC7070374B0878F0?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  M = "846ba89903f6a5cc";
  h = "11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7";
  K = "a3b937ac6f4ebc95";
});
a.tdz_28b286ee00e14618b1dfa549760b1554 = new a.td_0w("28b286ee00e14618b1dfa549760b1554575c55015e045500545203035601021e0e503b090d51091f5d500d0e42570812585a5f5e4b5758");
var a = a || {};
if (typeof a.td_4j === "undefined") {
  a.td_4j = [];
}
function bE(nO) {
  try {
    if (window.localStorage) {
      var nP = null;
      var nQ = null;
      var nR = window.localStorage.getItem("ed73f20edbf2b73");
      if (nR !== null) {
        var nS = nR.split("_");
        if (nS.length === 2) {
          var nT = nS[1];
          if (nT < aM()) {
            window.localStorage.setItem("ed73f20edbf2b73", j);
            nP = j.split("_")[0];
            nQ = nS[0];
          } else {
            nP = nS[0];
          }
        } else {
          if (nS.length === 1) {
            window.localStorage.setItem("ed73f20edbf2b73", nS[0] + "_" + j.split("_")[1]);
            nP = nS[0];
          } else {
            window.localStorage.setItem("ed73f20edbf2b73", j);
            nP = j.split("_")[0];
          }
        }
      } else {
        window.localStorage.setItem("ed73f20edbf2b73", j);
        nP = j.split("_")[0];
      }
      var nU = "";
      if (nQ !== null) {
        nU = "&la_old=" + nQ;
      }
      var nV = b + nU;
      if (typeof nO !== "undefined" && nO === true) {
        nV += "&jf=" + a.td_2O("lsb=" + nP, h);
      } else {
        nO = false;
        nV += "&jb=" + a.td_2O("lsa=" + k + nP, h);
      }
      bH(nV, document);
      if (typeof td_2H !== "undefined") {
        td_2H(nO);
      }
      return nV;
    }
  } catch (nW) {}
}
function bD() {
  a.td_4V();
  a.td_0v(document);
  aO();
  bE(true);
}
a.td_4j.push(function () {
  var nX = new a.td_0w("93d6d06c898649a8adcb77e0e40c0baa51471046170A194C5B5D56071A5F4C5B050A4D01585A4A56151B530F5503134F495D03090B42513C515D055A554B585D56501344445216430C5B5E3C59065C50085150005C56575500580000055D590E53075A575553065352030954555603520E0206545008535B080D0E5005085900525054060F0E000706075501070305070A000006005253515E0D08030C58561E0F0B0D01520A0403070D0354510157070D5606555D0502065B0D0F02040B520854025057055100015252055A00005354585750065603575508010F57025D045E5550005155513A0152010050055757590D07500F550154570E015E57020100005755075A0105060950565400535556580E565054570707015A0D00530C09550E0755525A0F045107010C0906070152045B04055202030507085D5A53065F5508545C0255");
  j = "e17f590b25ad4023a6087a6def44c3bf_1750355684449";
  k = "4ec47402305f352f";
  b = "https://cdn1.f-cdn.com/fp/clear.png?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&nonce=a3b937ac6f4ebc95";
  h = "11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7";
});
a.tdz_c91d62e3154b453c888de9a496a3c8a2 = new a.td_0w("c91d62e3154b453c888de9a496a3c8a2175d433b4551175a41416721667c6337515c4c011d4d4e5e58400040004a084217555e05525701505e58440e514156104a5b510902702c73585a15560e48154b104d480853440c4058575d0e5d414a5950515c000057");
function bF(nY) {
  var nZ = "";
  var oa = function () {
    var ob = Math.floor(Math.random() * 62);
    if (ob < 10) {
      return ob;
    }
    if (ob < 36) {
      return String.fromCharCode(ob + 55);
    }
    return String.fromCharCode(ob + 61);
  };
  while (nZ.length < nY) {
    nZ += oa();
  }
  return "tdr_" + nZ;
}
function bG(oc) {
  var od = bF(5);
  if (typeof td_2y !== "undefined") {
    td_2y(od, oc);
  }
  return od;
}
function bH(oe, of, og) {
  var oh = of.getElementsByTagName("head").item(0);
  var oi = of.createElement("script");
  var oj = bG("SCRIPT");
  oi.setAttribute("id", oj);
  oi.setAttribute("type", "text/javascript");
  a.td_0s(oi);
  if (typeof og !== "undefined") {
    var ok = false;
    oi.onload = oi.onreadystatechange = function () {
      if (!ok && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        ok = true;
        og();
      }
    };
    oi.onerror = function (ol) {
      ok = true;
      og();
    };
  }
  oi.setAttribute("src", oe);
  oh.appendChild(oi);
}
function bI(om, on, oo, op) {
  var oq = op.createElement("img");
  var or = bG("IMG");
  oq.setAttribute("id", or);
  oq.setAttribute("alt", "empty");
  oq.setAttribute("style", "visibility:hidden");
  oq.setAttribute("src", on);
  if (typeof oo !== "undefined") {
    oq.onload = oo;
    oq.onabort = oo;
    oq.onerror = oo;
    oq.oninvalid = oo;
  }
  om.appendChild(oq);
}
function bJ(os, ot) {
  var ou = ot.getElementsByTagName("head")[0];
  bI(ou, os, null, ot);
}
var a = a || {};
function bK() {
  a.load_iframe(f, N, document);
}
a.tdz_e347f5df34e04e82a2208aa1e0ae1843 = new a.td_0w("e347f5df34e04e82a2208aa1e0ae184303525844035414165f5d0651400c575c4e4a1f43500e025a125117001c5e5852165b554716590d0552400c5f5a4a5e47154740554b110d501658001541545d5004475d58081a1c4b5e4409514d004a000042425c510200450c5f0f4a504b4c521543585e0554100f5c5a4a405003001c511d5e514c0413470c54040a1e49415a0658405e0b50051643580c535511515d0f1d4a1d491408520e440808544858521c56465e0b5403031c4c485d55064853085c4659550006544a484c1444515758115a59520745140a5a5704445d0a561d191f56594a0402450a42001541545d5004475d58081a1208571a175e19175d530d425e514104131c0f511704425b465a15470119565414165f5d0651400c575c4e4a1f4654024c410945060c5f594443095a5756125c0b081c4c48545113595e17404a59550006544a4317021c40595f0c5e5550031a1710541f1d5d580448420d5b51514c080e5f4a484c0f504e551e0443445b0341051643580c535511515d0f1d4a1d5200175048460c044148585a0652405e095b4b1e1e5e044655485a57005c615857020a46044604235d59475b4b605c58055e13074551235c551650530d4553494b574d0149025049011c425617405d58084209165f551c55464b5751196276761611055726441309705b465c3577721936712248021a54041a550f1c511d5e514c0413601059020e655159564b62415e055e300f5e5136677711541c32657144541215430c5e064b0916037206475d41036d2b045951064444094d55085c6d56540012593b400d1056515a6c125a5a53094217395e510159553a485e004b574266110d4402590f3a505c5b51006c5554145a0607476a155c4102515c3e4347595b0a155808553f155d4d535a0b6c475f09560f115242006e44094d55085c6d425d000d41095118004366445f10545d59394308056c4409514d004a6c115e4757510f3e5500460009474a6a430946535e086a1710546b135951125d403f425e455f080f6e0f5117046f");
function bL(ov) {
  var ow = ov.constructor == String ? [ov] : ov;
  var ox = "false";
  var oy = "false";
  var oz;
  for (oz = 0; oz < ow.length; oz++) {
    var oA = l[ow[oz]];
    if (oA && oA.enabledPlugin) {
      var oB = oA.enabledPlugin;
      if (oB.name) {
        ox = oB.name;
      } else {
        ox = "true";
      }
      oy = oB.description;
      break;
    }
  }
  return [ox, oy];
}
function bM() {
  var oC = "false";
  var oD = bL(["application/x-shockwave-flash", "application/futuresplash"]);
  var oE = oD[0];
  var oF = oD[1];
  if (oE !== "false" && oE !== "true" && /Flash/i.test(oE)) {
    oC = "true";
  }
  if (oC === "true" && oF) {
    var oG = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(oF);
    if (oG) {
      oC = oG[0];
    }
  }
  return oC;
}
function bN() {
  var oH = "false";
  var oI = bL(["application/x-mplayer2", "application/asx"]);
  var oJ = oI[0];
  if (oJ !== "false" && oJ !== "true" && /Windows.*Media.*Firefox Plugin.*/i.test(oJ)) {
    oH = "true";
  }
  return oH;
}
function bO() {
  var oK = "false";
  var oL = bL(["application/pdf"]);
  var oM = oL[0];
  var oN = oL[1];
  if (oM !== "false" && oM !== "true" && /Adobe Acrobat/i.test(oM)) {
    oK = "true";
  }
  if (oK === "true" && oN) {
    var oO = /[\d][\d\.\_,-]*/.exec(oN);
    if (oO) {
      oK = oO[0];
    } else {
      oK = "8.0/later";
    }
  }
  return oK;
}
function bP() {
  var oP = "false";
  if (navigator.platform && /linux/i.test(navigator.platform)) {
    oP = "false";
  } else {
    var oQ = bL(["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"]);
    var oR = oQ[0];
    if (oR !== "false" && oR !== "true" && /QuickTime.*(Plug-in|Plugin).*/i.test(oR)) {
      oP = "true";
      var oS = /[\d][\d\.\_,-]*/.exec(oR);
      if (oS) {
        oP = oS[0];
      }
    }
  }
  return oP;
}
function bQ() {
  var oT = "false";
  var oU = bL(["application/x-director"]);
  var oV = oU[0];
  var oW = oU[1];
  if (oV !== "false" && oV !== "true" && /Shockwave for Director/i.test(oV)) {
    oT = "true";
  }
  if (oT === "true" && oW) {
    var oX = /[\d][\d\.\_,-]*/.exec(oW);
    if (oX) {
      oT = oX[0];
    }
  }
  return oT;
}
function bR() {
  var oY = "false";
  var oZ = bL(["application/vnd.rn-realplayer-javascript"]);
  var pa = oZ[0];
  var pb = oZ[1];
  if (pa !== "false" && pa !== "true" && /RealPlayer.*Version.*/i.test(pa)) {
    oY = "true";
  }
  if (oY === "true" && pb) {
    var pc = /[\d][\d\.\_,-]*/.exec(pb);
    if (pc) {
      oY = pc[0];
    } else {
      oY = "5.0";
    }
  }
  return oY;
}
function bS() {
  var pd = "false";
  var pe = bL(["application/x-vlc-plugin"]);
  var pf = pe[0];
  var pg = pe[1];
  if (pf !== "false" && pf !== "true" && /VLC.*(Plug-in|Plugin).*/i.test(pf)) {
    pd = "true";
  }
  if (pd === "true" && pg) {
    var ph = /(Version) ([\d][\d\.]*[a-z]*)/.exec(pg);
    if (ph) {
      pd = ph[2];
    }
  }
  return pd;
}
function bT() {
  var pi = "false";
  var pj = bL(["application/x-devalvrx"]);
  var pk = pj[0];
  var pl = pj[1];
  if (pk !== "false" && pk !== "true" && /DevalVR/i.test(pk)) {
    pi = "true";
  }
  if (pi === "true" && pl) {
    var pm = /(Plugin) ([\d][\d\.\,]*)/.exec(pl);
    if (pm) {
      pi = pm[2];
    }
  }
  return pi;
}
function bU() {
  var pn = "false";
  var po = bL(["image/svg-xml", "image/svg+xml"]);
  var pp = po[0];
  var pq = po[1];
  if (pp !== "false" && pp !== "true" && /SVG Viewer/i.test(pp)) {
    pn = "true";
  }
  if (pn === "true" && pq) {
    var pr = /[\d][\d\.]*/.exec(pq);
    if (pr) {
      pn = pr[0];
    }
  }
  return pn;
}
function bV() {
  var ps = "false";
  var pt = bL(["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"]);
  var pu = pt[0];
  var pv = pt[1];
  if (pu !== "false" && pu !== "true" && /Java/i.test(pu)) {
    ps = "true";
  }
  if (ps === "true" && pv) {
    var pw = /[\d][\d\._]*/.exec(pv);
    if (pw) {
      ps = pw[0];
    }
  }
  return ps;
}
function bW(px, py) {
  var pz = null;
  var pA = false;
  try {
    pz = new ActiveXObject(px);
    pA = true;
  } catch (pB) {}
  if (typeof py !== "undefined") {
    return pA;
  }
  return pz;
}
function bX() {
  var pC = "ShockwaveFlash.ShockwaveFlash";
  var pD, pE = null, pF = null, pG = null;
  var pH = 15;
  var pI = 2;
  for (pD = pH; pD > pI; pD--) {
    pF = bW(pC + "." + pD);
    if (pF) {
      pE = pD.toString();
      break;
    }
  }
  if (pE === "6") {
    try {
      pF.AllowScriptAccess = "always";
    } catch (pK) {
      pG = "6,0,21,0";
    }
  } else {
    if (pF) {
      try {
        pG = pF.GetVariable("$version");
        var pJ = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(pG);
        if (pJ) {
          pG = pJ[0];
        } else {
          pG = "true";
        }
      } catch (pL) {
        pG = "true";
      }
    }
  }
  if (!pG && pE) {
    pG = pE;
  }
  if (!pG) {
    pG = "false";
  }
  return pG;
}
function bY() {
  var pM = "wmplayer.ocx";
  var pN = "false";
  var pO = bW(pM);
  if (pO) {
    pN = pO.versionInfo;
  }
  return pN;
}
function bZ() {
  var pP = "PDF.pdfCtrl";
  var pQ = "AcroPDF.PDF.1";
  var pR;
  var pS = "false";
  var pT = bW(pQ);
  if (!pT) {
    var pU = 10;
    var pV = 1;
    for (pR = pU; pR > pV; pR--) {
      pT = bW(pP + "." + pR);
      if (pT) {
        pS = pS.toString();
        break;
      }
    }
    if (!pT) {
      pT = bW(pP + ".1");
      if (pT) {
        pS = "4.0";
      }
    }
  } else {
    pS = "7.0/later";
  }
  return pS;
}
function ca() {
  var pW = "QuickTime.QuickTime";
  var pX = "false";
  var pY = null;
  try {
    pY = bW(pW);
  } catch (pZ) {}
  if (pY) {
    if (pY.QuickTimeVersion) {
      pX = pY.QuickTimeVersion.toString(16);
      pX = pX.charAt(0) + "." + pX.charAt(1) + "." + pX.charAt(2);
    } else {
      pX = "true";
    }
  }
  return pX;
}
function cb() {
  var qa = "SWCtl.SWCtl";
  var qb = "false", qc = null, qd;
  try {
    qc = bW(qa).ShockwaveVersion("");
  } catch (qe) {}
  if (typeof qc === "string" && qc.length > 0) {
    qb = qc;
  } else {
    if (bW(qa + ".8", 1)) {
      qb = "8";
    } else {
      if (bW(qa + ".7", 1)) {
        qb = "7";
      } else {
        if (bW(qa + ".1", 1)) {
          qb = "6";
        }
      }
    }
  }
  return qb;
}
function cc() {
  var qf = 0;
  var qg;
  var qh = "false";
  var qi = "false";
  var qj = "false";
  var qk = "false";
  var ql = "false";
  var qm = "false";
  var qn = "false";
  var qo = "false";
  var qp = "false";
  var qq = "false";
  if (l && l.length) {
    qf = l.length;
  }
  if (window.ActiveXObject || "ActiveXObject" in window) {
    if (qf > 0) {
      qh = bM();
    }
    if (qh === "false") {
      qh = bX();
    }
    qi = bY();
    qj = bZ();
    qk = ca();
    ql = cb();
  } else {
    if (qf > 0) {
      qh = bM();
      qi = bN();
      qj = bO();
      qk = bP();
      ql = bQ();
      qm = bR();
      qn = bS();
      qo = bT();
      qp = bU();
      qq = bV();
    }
  }
  qg = "plugin_flash^" + qh + "!";
  qg += "plugin_windows_media_player^" + qi + "!";
  qg += "plugin_adobe_acrobat^" + qj + "!";
  qg += "plugin_quicktime^" + qk + "!";
  qg += "plugin_shockwave^" + ql + "!";
  qg += "plugin_realplayer^" + qm + "!";
  qg += "plugin_vlc_player^" + qn + "!";
  qg += "plugin_devalvr^" + qo + "!";
  qg += "plugin_svg_viewer^" + qp + "!";
  qg += "plugin_java^" + qq;
  return qg;
}
a.tdz_641631c538d4455e87a5bdca686606ce = new a.td_0w("641631c538d4455e87a5bdca686606ce705d4353555e1b66525e05465d");
var a = a || {};
function cd() {
  var qr = 20;
  var qs = 10;
  var qt = 10;
  var qu = 0;
  var qv = null;
  var qw = function () {
    return window.performance.now() * 1e3;
  };
  var qx = function () {
    return performance.now().toFixed(3) / 1e3;
  };
  var qy = function () {
    return (aM() - qu).toFixed(3) * 1e3;
  };
  function qB() {
    var qF = 1;
    var qG = qv();
    var qH = qv();
    while (qH === qG) {
      qH = qv();
      ++qF;
    }
    var qI = (qH - qG) * 1e6;
    var qJ = qF / qI;
    if (qJ < 1e-8) {
      return 1e-8;
    }
    return qJ;
  }
  function qC() {
    var qK = 0;
    var qL = 0;
    try {
      var qM = qB();
      qK = qv();
      qL = qv() - qK;
      if (qL === 0 || qL < 1e-8) {
        qL = qM;
      }
      for (var qN = 0; qN < qr; ++qN) {
        qL = qD(qL, qv() - qK);
      }
      return Math.round(1 / qL);
    } catch (qO) {
      return -1;
    }
  }
  function qD(qP, qQ) {
    try {
      if (qP < 1e-8) {
        return qQ;
      }
      if (qP < qQ) {
        return qD(qQ - Math.floor(qQ / qP) * qP, qP);
      } else {
        if (qP === qQ) {
          return qP;
        } else {
          return qD(qQ, qP);
        }
      }
    } catch (qR) {
      return 0;
    }
  }
  if (al.td_2u !== "Firefox" && al.td_2u !== "Safari" && typeof performance !== "undefined" && typeof performance.now !== "undefined") {
    qv = qx;
  } else {
    if (al.td_2u !== "Safari" && typeof window.performance !== "undefined" && typeof window.performance.now !== "undefined") {
      qv = qw;
    } else {
      qu = aM();
      qv = qy;
    }
  }
  if (!qv || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
    return null;
  }
  function qE() {
    var qS = [];
    for (var qT = 0; qT < qs; ++qT) {
      qS.push(qC());
    }
    var qU = a.mean(qS);
    var qV = a.std_dev(qS, qU);
    var qW = 0;
    var qX = 0;
    if (qV !== 0) {
      var qY = a.confidence_interval(qS, qV, qU, 1);
      qX = a.mean(qY);
      qW = Math.round(qX);
    } else {
      qW = Math.round(qU);
    }
    return qW;
  }
  var qz = 0;
  var qA = 0;
  while (qz === 0 && qA++ < qt) {
    qz = qE();
  }
  return encodeURIComponent(qz);
}
var a = a || {};
a._mean = function (qZ) {
  if (qZ.length < 1) {
    return 0;
  }
  var ra = 0;
  for (var rb = 0; rb < qZ.length; ++rb) {
    ra += qZ[rb];
  }
  return ra / qZ.length;
};
a.mean = function (rc) {
  return Math.floor(a._mean(rc));
};
a.variance = function (rd, re) {
  if (rd.length < 2) {
    return 0;
  }
  var rf = 0;
  for (var rg = 0; rg < rd.length; ++rg) {
    rf += Math.pow(rd[rg] - re, 2);
  }
  return rf / (rd.length - 1);
};
a._std_dev = function (rh, ri) {
  return Math.sqrt(a.variance(rh, ri));
};
a.std_dev = function (rj, rk) {
  return Math.floor(a._std_dev(rj, rk));
};
a.confidence_interval = function (rl, rm, rn, ro) {
  if (rl.length < 1) {
    return 0;
  }
  var rp = [];
  var rq = rn + rm * ro;
  var rr = rn - rm * ro;
  for (var rs = 0; rs < rl.length; rs++) {
    if (rl[rs] > rr && rq > rl[rs]) {
      rp.push(rl[rs]);
    }
  }
  return rp;
};
var a = a || {};
function ce() {
  a.load_iframe(e, N, document);
}
var av = {};
av.td_1s = function (rt, ru) {
  ru = typeof ru === "undefined" ? true : ru;
  if (ru) {
    rt = aw.td_4S(rt);
  }
  var rv = [1518500249, 1859775393, 2400959708, 3395469782];
  rt += String.fromCharCode(128);
  var rw = rt.length / 4 + 2;
  var rx = Math.ceil(rw / 16);
  var ry = new Array(rx);
  for (var rz = 0; rz < rx; rz++) {
    ry[rz] = new Array(16);
    for (var rA = 0; rA < 16; rA++) {
      ry[rz][rA] = rt.charCodeAt(rz * 64 + rA * 4) << 24 | rt.charCodeAt(rz * 64 + rA * 4 + 1) << 16 | rt.charCodeAt(rz * 64 + rA * 4 + 2) << 8 | rt.charCodeAt(rz * 64 + rA * 4 + 3);
    }
  }
  ry[rx - 1][14] = (rt.length - 1) * 8 / Math.pow(2, 32);
  ry[rx - 1][14] = Math.floor(ry[rx - 1][14]);
  ry[rx - 1][15] = (rt.length - 1) * 8 & 4294967295;
  var rB = 1732584193;
  var rC = 4023233417;
  var rD = 2562383102;
  var rE = 271733878;
  var rF = 3285377520;
  var rG = new Array(80);
  var rH, rI, rJ, rK, rL;
  for (var rz = 0; rz < rx; rz++) {
    for (var rM = 0; rM < 16; rM++) {
      rG[rM] = ry[rz][rM];
    }
    for (var rM = 16; rM < 80; rM++) {
      rG[rM] = av.td_3x(rG[rM - 3] ^ rG[rM - 8] ^ rG[rM - 14] ^ rG[rM - 16], 1);
    }
    rH = rB;
    rI = rC;
    rJ = rD;
    rK = rE;
    rL = rF;
    for (var rM = 0; rM < 80; rM++) {
      var rN = Math.floor(rM / 20);
      var rO = av.td_3x(rH, 5) + av.f(rN, rI, rJ, rK) + rL + rv[rN] + rG[rM] & 4294967295;
      rL = rK;
      rK = rJ;
      rJ = av.td_3x(rI, 30);
      rI = rH;
      rH = rO;
    }
    rB = rB + rH & 4294967295;
    rC = rC + rI & 4294967295;
    rD = rD + rJ & 4294967295;
    rE = rE + rK & 4294967295;
    rF = rF + rL & 4294967295;
  }
  return av.td_1V(rB) + av.td_1V(rC) + av.td_1V(rD) + av.td_1V(rE) + av.td_1V(rF);
};
av.f = function (rP, rQ, rR, rS) {
  switch (rP) {
    case 0:
      return rQ & rR ^ ~rQ & rS;
    case 1:
      return rQ ^ rR ^ rS;
    case 2:
      return rQ & rR ^ rQ & rS ^ rR & rS;
    case 3:
      return rQ ^ rR ^ rS;
  }
};
av.td_3x = function (rT, rU) {
  return rT << rU | rT >>> 32 - rU;
};
av.td_1V = function (rV) {
  var rW = "", rX;
  for (var rY = 7; rY >= 0; rY--) {
    rX = rV >>> rY * 4 & 15;
    rW += rX.toString(16);
  }
  return rW;
};
var aw = {};
aw.td_4S = function (rZ) {
  var sa = rZ.replace(/[\u0080-\u07ff]/g, function (sb) {
    var sc = sb.charCodeAt(0);
    return String.fromCharCode(192 | sc >> 6, 128 | sc & 63);
  });
  sa = sa.replace(/[\u0800-\uffff]/g, function (sd) {
    var se = sd.charCodeAt(0);
    return String.fromCharCode(224 | se >> 12, 128 | se >> 6 & 63, 128 | se & 63);
  });
  return sa;
};
function cf(sf) {
  return av.td_1s(sf, true);
}
aR();

