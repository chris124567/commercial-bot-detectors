/*
Retrieved from https://cdn1.f-cdn.com/fp/check.js?org_id=lar9e74p&session_id=11b468fa68a861d862c95bdcc7797e4b371bb48e8046f1188347d89e7c3eb7adf33d0dbe2f4058a7&pageid=1.
NOTE: They randomize the variable names on every load, should've worked with an Internet Archive copy.
Beautified original threatmetrix
*/

var td_3i = td_3i || {};
td_3i.td_1h = function (td_p, td_k) {
  var td_G = [""];
  var td_D = 0;
  for (var td_s = 0; td_s < td_k.length; ++td_s) {
    td_G.push(String.fromCharCode(td_p.charCodeAt(td_D) ^ td_k.charCodeAt(td_s)));
    td_D++;
    if (td_D >= td_p.length) {
      td_D = 0;
    }
  }
  return td_G.join("");
};
td_3i.td_0w = function (td_l) {
  this.td_c = td_l;
  this.td_d = "";
  this.td_f = function (td_Y, td_E) {
    if (0 === this.td_d.length) {
      var td_X = this.td_c.substr(0, 32);
      var td_J = "";
      for (var td_j = 32; td_j < td_l.length; td_j += 2) {
        td_J += String.fromCharCode(parseInt(td_l.substr(td_j, 2), 16));
      }
      this.td_d = td_3i.td_1h(td_X, td_J);
    }
    return this.td_d.substr(td_Y, td_E);
  };
};
td_3i.td_4N = function (td_n) {
  if (td_n === null || td_n.length === null) {
    return null;
  }
  var td_G = null;
  try {
    var td_L = "";
    var td_I = [];
    var td_S = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
    var td_j = 0;
    for (var td_O = 0; td_O < td_n.length; ++td_O) {
      if (65 + td_j >= 126) {
        td_j = 0;
      }
      var td_i = (td_S + td_n.charCodeAt(td_j++)).slice(-3);
      td_I.push(td_i);
    }
    var td_b = td_I.join("");
    td_j = 0;
    for (var td_O = 0; td_O < td_b.length; ++td_O) {
      if (65 + td_j >= 126) {
        td_j = 0;
      }
      var td_Q = String.fromCharCode(65 + td_j++);
      if (td_Q !== [][[]] + "") {
        td_L += td_Q;
      }
    }
    td_G = td_3i.td_1h(td_L, td_b);
  } catch (td_z) {
    return null;
  }
  return td_G;
};
td_3i.td_1H = function (td_l) {
  if (td_l === null || td_l.length === null) {
    return null;
  }
  var td_j = "";
  try {
    var td_x = "";
    var td_H = 0;
    for (var td_q = 0; td_q < td_l.length; ++td_q) {
      if (65 + td_H >= 126) {
        td_H = 0;
      }
      var td_W = String.fromCharCode(65 + td_H++);
      if (td_W !== [][[]] + "") {
        td_x += td_W;
      }
    }
    var td_R = td_3i.td_1h(td_x, td_l);
    var td_v = td_R.match(/.{1,3}/g);
    for (var td_q = 0; td_q < td_v.length; ++td_q) {
      td_j += String.fromCharCode(parseInt(td_v[td_q], 10));
    }
  } catch (td_C) {
    return null;
  }
  return td_j;
};
var td_3i = td_3i || {};
if (typeof td_3i.td_4j === [][[]] + "") {
  td_3i.td_4j = [];
}
var td_0P, td_4J, td_3I, td_2n, td_4R, td_3r, td_2V, td_0C, td_0m, td_3E, td_l9 = [], td_3b, td_3c, td_4H, td_1m, td_0z, td_2L, td_2k = [], td_0x, td_3H, td_4t, td_0t, td_3Q, td_3p, td_3C, td_1J, td_2q, td_4T, td_0r, td_2p, td_4G, td_0S, td_4L, td_4Y, td_2j, td_2U, td_2W, td_3o, td_0E = null;
if (typeof navigator !== [][[]] + "") {
  td_l9 = navigator.mimeTypes;
}
td_3i.td_4j.push(function () {
  var td_2P = new td_3i.td_0w("5740f078c2964714b8c1dc2871a2ba115D434040150A18170B1C5658585E5F514F550645160A4A165954151D04111E425C536B56161E5F4C0E5E02757D6402672B7C5E0252270A7C06012504522709040C0F04752507070F53010E02760709035A7E530E0B1155675E555C5E03130854020344161555444B0A5D57695D530C05535A57075C05530E0F5059045305090707540D050454545B540500015103530755090153505B57000705575453500909060303545E09520F00015C5403565552510B07010001570A510551075A0006175B585A53030D560B010B0A0155540752565D01525D565A4C434112084D4E52555B061A564B5353564D51565B1B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258074408570C59445C44124044024C1D5A525A061F524F5B075F4A005D551857111D010D545047041A4008570C7B2A610A657D730C07547C5B755553760E077759075B590174760004075603000C210201010C71010B0D4A046E0D070F545643585755554117465247430F5F59670A560407055505025A5E02075C020A0E06555904500208045753575351070E0F06065B0503065356560006095457045E0600590A515506550D0E51070503525A54535D5007045504065A06030257020D0F5056140C0E5F52500A55030409040F02510F50005253575B0D0B4510134102181E0D531058540601475B5B015F544C02424A460154555E540D0C551717444D5A465741140F4952445255030409040F02510F50005253575B0D1050074D561656504F5D0C0D585F501A595512425E404D5C5C421B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258074405580C4C5247581244474B591D16555059001A041500550A4D51575A1E07424D155E416A51441E0E445A5458717065076478705F0B55755C270308730751745A540809057277075607070B54067B060C00097252070C43033C5B5C0A5D00405B0406054511475515435E570D6D505209060056560E5B5705550A590F0750565A5703520C0256540553000F5A055C0256040605005A5709015B020C015750035A59020502530C090307540B06500E5750510207060807530151540C0704595355475F5E5B54510D070355015005585502510551005B5A040C174648440B4E1D01055F001B511953025E195B0C5F165044185D473D5E131F0C175F540C72286151327875080402745E740608270409700C02080C527D20065454020B000523025A56097705085B42016F5E5C5E5E58440D520600121E105417105B57596E08565F50005301010C5607060F595B0408520C0103575B0D01550700050F0E06040600520600575500080308070C555408070C0F0200555C5B080154510B5253565306070202510750520302510C5307015703115F5B0C5B060C05505001040600515407055457540D050E444348100816195C195E5A0E510D54490E574C4558191C0C04451E53471B530A55564A4D4257510B5843533D51070C080240015206554244125442465E5B5E3959530552035B02020F575554000209525256000103020B57035552560003095155035A50050854560309515A085707025203000F02550506590854025407550407565C05010A5204535351505E5701515B530F115F0E5C01040C5006550D035151540E05065C54570E04120B5E5E420D075A4C434112084D4E52555B061A564B5353564D51565B1B51411B01540650164D4256500E0E40053E5855085B55425F55000C13144A534744585B0C670A555952035A03075954035709500D0105545E06055B5A075B52575406035B0F0605065005095553550A07590105035105015E08040C5456010F51005207075A54500005010B530105500753570505020C51511659570D515C0B5504530D510F02525205065D555258070A154541460D1B1F055459094D54145550591F570D554C57144C51545250131C120F5605505400075200050B53075F0501055758034A5A5453574209065355045A0750070D560C0657540F0E5151000356535257550F5A060157500B00000350565954090503025657010F0050060E520C0E5403010B06535302565E0402050206035403530304055E5100595050000503565202040C0653075A074C56504F5D0C0D585F501A595512425E404D5C5C42");
  td_3E = td_2P.td_f(1631, 16);
  td_4Z = td_2P.td_f(594, 241);
  td_2V = td_2P.td_f(1655, 80);
  td_0M = td_2P.td_f(1751, 1);
  td_4u = td_2P.td_f(1252, 178);
  td_4J = td_2P.td_f(1596, 35);
  td_2j = td_2P.td_f(1752, 20);
  td_2U = td_2P.td_f(1735, 16);
  td_2G = td_2P.td_f(214, 172);
  td_0T = td_2P.td_f(386, 208);
  td_3V = td_2P.td_f(835, 209);
  td_0C = td_2P.td_f(1647, 8);
  td_0P = td_2P.td_f(1430, 166);
  td_4R = td_2P.td_f(1044, 208);
  td_2n = td_2P.td_f(0, 214);
});
td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd = new td_3i.td_0w("a8b4fbb513fc40249aefccbbe46ff9cd144b07141516105c524707105d5e5a554d000b0e061b120f54585901574917050f480d43362b4b0f");
var td_3i = td_3i || {};
function td_2a() {
  td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(0, 10);
  var td_X5 = [[td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(10, 5), 1, function (td_eA) {
    return Math.log(td_eA + Math.sqrt(td_eA * td_eA + 1));
  }], [td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(15, 5), .5, function (td_H8) {
    return Math.log((1 + td_H8) / (1 - td_H8)) / 2;
  }], [td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(20, 5), 1, function (td_ZC) {
    return Math.exp(td_ZC) - 1;
  }], [td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(25, 5), 10, function (td_Uc) {
    return Math.log(1 + td_Uc);
  }], [Number(698714).toString(29), 1, function (td_pR) {
    var td_Lc = Math.exp(td_pR);
    return (td_Lc - 1 / td_Lc) / 2;
  }], [Number(313681).toString(29), 10, function (td_Eh) {
    var td_SU = Math.exp(td_Eh);
    return (td_SU + 1 / td_SU) / 2;
  }], [Number(792707).toString(30), 1, function (td_oX) {
    var td_i0 = Math.exp(2 * td_oX);
    return (td_i0 - 1) / (td_i0 + 1);
  }], [td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(30, 3), -1e300, function (td_Of) {
    return Math.tan(-1e300);
  }], [td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(33, 5), -100, function (td_zX) {
    return Math.pow(Math.PI, td_zX);
  }]];
  try {
    var td_iH = "";
    for (var td_Sp = 0; td_Sp < td_X5.length; td_Sp++) {
      var td_xU = td_X5[td_Sp][0] + "(" + td_X5[td_Sp][1] + td_3i.tdz_a8b4fbb513fc40249aefccbbe46ff9cd.td_f(38, 2) + td_X5[td_Sp][2](td_X5[td_Sp][1]);
      td_iH += td_xU + ",";
    }
    var td_s7 = new td_2K;
    return td_s7.hash(td_iH);
  } catch (td_rz) {}
  return null;
}
td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc = new td_3i.td_0w("8e5cc7b142364df5ab16fa312fe078fc4d1650431043105857461554551015415c0c445b040441135e0313555b1a5c414b1154171644400b16515b5746030f5b0640134308115f445501005415");
var td_3i = td_3i || {};
function td_4C() {
  td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(0, 10);
  var td_ie;
  var td_hK = true;
  this.tryAgain = function () {
    return td_ie ? false : td_hK;
  };
  this.getFPParams = function () {
    if (td_ie) {
      return td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(10, 7) + td_ie;
    }
    return null;
  };
  function td_ke(td_Ot, td_kW) {
    var td_Z4 = "";
    if (typeof td_Ot === td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(17, 6)) {
      td_Z4 = td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(23, 8) + td_Ot.toFixed(2);
    }
    if (typeof td_kW !== [][[]] + "") {
      if (td_Z4) {
        td_Z4 += ",";
      }
      td_Z4 += td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(31, 9) + (td_kW ? td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(40, 10) : td_3i.tdz_8e5cc7b142364df5ab16fa312fe078fc.td_f(50, 11));
    }
    if (td_Z4) {
      return "{" + td_Z4 + "}";
    }
    return null;
  }
  this.setup = function () {
    try {
      var td_lJ = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
      if (td_lJ) {
        td_ie = td_ke(td_lJ.level, td_lJ.charging);
      } else {
        if (navigator.getBattery) {
          navigator.getBattery().then(function (td_Rs) {
            td_ie = td_ke(td_Rs.level, td_Rs.charging);
          }, function (td_wF) {});
        } else {
          td_hK = false;
        }
      }
    } catch (td_YQ) {
      td_hK = false;
    }
  };
}
function td_2N() {
  td_4w(td_4Z, document);
}
td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9 = new td_3i.td_0w("879f4e48fcde44fcb266a6e516f93aa91e405c04461157670f0d1000465a070f3d5b460b47410057434205665619155c4a59580a6b0c4405401401074640053c0b4240005c10125c5c0b115c5113155a675e571251175a590a3c09015a4740140c5b520b16530747455539575c3e08574c524b0855096b5c07170506555a020a065342535b1e3e051c0f3b4568504c00656c094b0d3848093d53495c694f541e1e006d064c02386e011b5f644f535462081a0c3b1d3b1c164f1857184041140d580d4244005816455e4412044702114c5c475a095915585d1206");
function td_4q() {
  var td_Pg = 1;
  var td_Dy = td_Pg + ":" + td_0C + ":" + td_2V + ";" + td_2U;
  var td_kU = td_2V;
  var td_KQ = {};
  var td_fH = {};
  var td_ty = {};
  var td_GW = false;
  var td_in = false;
  var td_cO = null;
  var td_YZ = false;
  var td_Un = td_g();
  var td_Vt = false;
  this.tryAgain = function () {
    return !td_YZ;
  };
  function td_sC() {
    var td_xG = "";
    var td_ao = Object.keys(td_KQ);
    var td_q3 = Object.keys(td_fH);
    var td_nr = Object.keys(td_ty);
    if (td_ao.length > 0) {
      td_xG += td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(0, 20) + td_ao.join(",");
    } else {}
    if (td_q3.length > 0) {
      td_xG += td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(20, 20) + td_q3.join(",");
    }
    if (td_nr.length > 0) {
      td_xG += td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(40, 13) + td_nr.join(",");
    }
    if (td_GW) {
      td_xG += td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(53, 25);
    }
    if (!td_in) {
      td_xG += td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(78, 29);
    }
    return td_xG;
  }
  this.getFPParams = function () {
    if (!td_YZ) {
      if ((new Date).getTime() - td_Un > 2e3 || td_Vt) {
        td_YZ = true;
        td_cO.close();
        td_cO = null;
        return td_sC();
      }
    }
    return null;
  };
  this.setup = function () {
    if (!Object || !Object.create || !Object.keys) {
      td_YZ = true;
      return;
    }
    var td_SM = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!td_SM) {
      td_YZ = true;
      return;
    }
    this.startWaitTime = td_g();
    function td_wK(td_WN) {
      var td_Fi = td_WN.substr(td_WN.indexOf(td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(107, 10)) + 10).split(" ");
      if (td_Fi !== null && td_Fi.length > 7 && td_Fi[4] !== null) {
        var td_Ky = td_Fi[4];
        var td_Hg = td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(117, 48);
        var td_Fx = td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(165, 2) + td_Hg + td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(167, 5) + td_Hg + "$";
        var td_fa = td_Fi[7];
        if (td_fa === Number(481469).toString(30)) {
          td_in = true;
          if (td_Ky.match(/^.*\.local$/)) {
            td_GW = true;
            return;
          }
          if (td_Ky.match(td_Fx)) {
            td_KQ[td_Ky] = true;
          } else {
            td_ty[td_Ky] = true;
          }
        } else {
          if (td_Ky.match(td_Fx)) {
            td_fH[td_Ky] = true;
          } else {
            td_ty[td_Ky] = true;
          }
        }
      }
    }
    try {
      var td_YQ = {optional: [{RtpDataChannels: true}]};
      var td_Ar = td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(172, 5) + td_2j + td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(177, 11);
      var td_g4 = {iceServers: [{urls: td_Ar + td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(188, 3), username: td_Dy, credential: td_kU}, {urls: td_Ar + td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(191, 3), username: td_Dy, credential: td_kU}]};
      td_cO = new td_SM(td_g4, td_YQ);
      td_cO.onicecandidate = function (td_Y4) {
        if (td_Y4.candidate) {
          td_wK(td_Y4.candidate.candidate);
        } else {
          td_Vt = true;
        }
      };
      td_cO.onicegatheringstatechange = function () {
        if (td_cO !== null) {
          if (td_cO.iceGatheringState === td_3i.tdz_879f4e48fcde44fcb266a6e516f93aa9.td_f(194, 8)) {
            td_Vt = true;
          }
        }
      };
      td_cO.createDataChannel(Math.random().toString());
      var td_OP = function () {};
      var td_jB = function (td_so) {
        td_cO.setLocalDescription(td_so, function () {}, td_OP);
      };
      var td_it = function () {};
      if (typeof Promise === [][[]] + "" || td_cO.createOffer.length > 0) {
        td_cO.createOffer(td_jB, td_it);
      } else {
        td_cO.createOffer().then(td_jB, td_it);
      }
    } catch (td_DK) {
      return;
    }
  };
}
td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440 = new td_3i.td_0w("0cd10ec6abe24846818ba1c44c6d94401613090c490010580e362061607c756279657d31357a266d770b440b5451755e54110b58540c3357050b355a5b56517948544a0327581151520c4e214144585f420616625103024408570054010e50535d040f550057");
var td_3i = td_3i || {};
function td_4d() {
  var td_uQ;
  var td_Ow;
  var td_aC = td_1f.td_2u;
  var td_w3 = parseInt(td_1f.td_1I);
  var td_fh = td_1f.td_2E;
  var td_Fi = td_1f.td_0A;
  this.tryAgain = function () {
    return false;
  };
  this.getFPParams = function () {
    var td_SU = td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(0, 4);
    if (typeof td_uQ === [][[]] + "") {
      if (typeof td_Ow !== [][[]] + "" && td_Ow.readyState === Number(218714).toString(25)) {
        td_uQ = td_Ow.result ? false : true;
      } else {
        return null;
      }
    }
    td_SU += td_uQ ? td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(4, 3) : td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(7, 2);
    return td_SU;
  };
  function td_Ht() {
    if (navigator && typeof navigator.storage !== [][[]] + "" && typeof navigator.storage.estimate !== [][[]] + "") {
      navigator.storage.estimate().then(function (td_Mt) {
        td_uQ = td_Mt.quota < 12e7;
      });
    } else {
      td_uQ = false;
    }
  }
  function td_oI() {
    function td_jQ(td_Qk) {}
    navigator.webkitTemporaryStorage.requestQuota(12e7, function (td_KJ) {
      td_uQ = td_KJ < 12e7;
    }, td_jQ);
  }
  function td_vL() {
    if (window.openDatabase) {
      try {
        var td_F3 = window.openDatabase(null, null, null, null);
      } catch (td_Ku) {
        td_uQ = true;
      }
    } else {
      td_uQ = null;
    }
  }
  function td_ob() {
    if (!window.localStorage) {
      return;
    }
    var td_af = 0;
    try {
      td_uQ = false;
      var td_OS = "";
      for (; td_af < 11e4; ++td_af) {
        td_OS += td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(9, 8);
      }
      td_af = 0;
      for (; td_af < 5; ++td_af) {
        window.localStorage.setItem(td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(17, 7) + td_af, td_OS);
      }
      td_uQ = true;
      for (; td_af > 0; --td_af) {
        window.localStorage.removeItem(td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(17, 7) + td_af);
      }
    } catch (td_ct) {
      td_uQ = false;
      if (typeof td_ct.code !== [][[]] + "" && td_ct.code === DOMException.QUOTA_EXCEEDED_ERR) {}
      try {
        for (; td_af > 0; --td_af) {
          window.localStorage.removeItem(td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(17, 7) + td_af);
        }
      } catch (td_ct) {}
    }
  }
  this.setup = function () {
    if (td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(24, 6) && td_w3 >= 76) {
      td_uQ = false;
      if (!td_fh) {
        td_Ht();
      } else {
        switch (td_Fi) {
          case td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(30, 7):
            td_oI();
            break;
          case td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(37, 4):
          case td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(41, 6):
            td_vL();
            break;
          default:
            break;
        }
      }
    } else {
      if (td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(47, 5) || td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(24, 6)) {
        if (window.webkitRequestFileSystem) {
          window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
            td_uQ = false;
          }, function (td_Co) {
            td_uQ = true;
          });
        } else {
          if (window.openDatabase) {
            td_vL();
          }
        }
      } else {
        if (td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(52, 7) && window.indexedDB) {
          if (typeof td_Ow === [][[]] + "") {
            try {
              td_Ow = window.indexedDB.open(Number(796469).toString(30));
            } catch (td_zh) {
              td_uQ = true;
            }
          }
        } else {
          if (td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(59, 8) && td_w3 >= 10) {
            td_uQ = false;
            try {
              if (!window.indexedDB) {
                td_uQ = true;
              }
            } catch (td_zh) {
              td_uQ = true;
            }
          } else {
            if (td_aC === td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(67, 6)) {
              td_uQ = false;
              if (td_fh === true && td_w3 < 12 || td_w3 >= 11.1 && td_w3 < 12) {
                td_vL();
              } else {
                if ((td_uQ === null || td_uQ === false) && td_w3 >= 12) {
                  td_ob();
                }
              }
              if (td_uQ === null || td_uQ === false && window.localStorage) {
                try {
                  window.localStorage.setItem(td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(73, 13), 1);
                } catch (td_zh) {
                  td_uQ = true;
                }
                if (typeof td_uQ === [][[]] + "") {
                  window.localStorage.removeItem(td_3i.tdz_0cd10ec6abe24846818ba1c44c6d9440.td_f(73, 13));
                }
              }
            }
          }
        }
      }
    }
  };
}
td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e = new td_3i.td_0w("f5ca1fa14de64705acdc78c8bd95400e56045152055357060c5d045457535553040d2d2565792e7d0b024b545955550816411a00430f001c500d1657565b555100110d021a500a5c060157180543510b02570c194212185d51070a5a5b450a470601054b071453145248091c0f1056090954175b5d0307450f441559475e445c0e0d5e02554b0c5417105c0e14445f155c185151015d415d5102110c190500055a43060c455c064a5854494d4742530b095b00047c35397c78564b6e797b786135334a5019082e4b1a0955071a687d292e6137317c0f02435b170a50401968782d2b303767");
var td_3i = td_3i || {};
if (typeof td_3i.td_4j === [][[]] + "") {
  td_3i.td_4j = [];
}
td_3i.td_4V = function () {
  for (var td_G = 0; td_G < td_3i.td_4j.length; ++td_G) {
    td_3i.td_4j[td_G]();
  }
};
td_3i.td_2O = function (td_j, td_s) {
  var td_B = td_j.length + "&" + td_j;
  var td_Y = "";
  var td_G = td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(0, 16);
  for (var td_Q = 0, td_M = 0; td_Q < td_B.length; td_Q++) {
    var td_C = td_B.charCodeAt(td_Q) ^ td_s.charCodeAt(td_M) & 10;
    if (++td_M === td_s.length) {
      td_M = 0;
    }
    td_Y += td_G.charAt(td_C >> 4 & 15);
    td_Y += td_G.charAt(td_C & 15);
  }
  return td_Y;
};
td_3i.td_1P = function () {
  try {
    var td_E = window.top.document;
    var td_v = td_E.forms.length;
    return td_E;
  } catch (td_S) {
    return document;
  }
};
td_3i.td_4e = function (td_B) {
  try {
    var td_s;
    if (typeof td_B === [][[]] + "") {
      td_s = window;
    } else {
      if (td_B === "t") {
        td_s = window.top;
      } else {
        if (td_B === "p") {
          td_s = window.parent;
        } else {
          td_s = window;
        }
      }
    }
    var td_Z = td_s.document.forms.length;
    return td_s;
  } catch (td_V) {
    return window;
  }
};
td_3i.add_lang_attr_html_tag = function (td_z) {
  try {
    if (td_z === null) {
      return;
    }
    var td_K = td_z.getElementsByTagName(Number(485781).toString(30));
    if (typeof td_K !== [][[]] + "" && td_K !== null && typeof td_K.length !== [][[]] + "" && td_K.length !== null && td_K.length > 0 && typeof td_K[0] !== [][[]] + "" && typeof td_K[0] !== null && typeof td_K[0].setAttribute !== [][[]] + "" && td_K[0].setAttribute !== null && typeof td_K[0].getAttribute !== [][[]] + "" && td_K[0].getAttribute !== null && (td_K[0].getAttribute(Number(296632).toString(24)) === null || td_K[0].getAttribute(Number(296632).toString(24)) === "")) {
      td_K[0].setAttribute(Number(296632).toString(24), td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(16, 2));
    } else {}
  } catch (td_o) {}
};
td_3i.load_iframe = function (td_Z, td_G, td_M) {
  var td_Q = td_3X(5);
  if (typeof td_2y !== [][[]] + "") {
    td_2y(td_Q, td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(18, 6));
  }
  var td_T = td_M.createElement(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(24, 6));
  td_T.id = td_Q;
  td_T.title = td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(30, 5);
  td_T.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(35, 13), Number(890830).toString(31));
  td_T.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(48, 11), Number(890830).toString(31));
  td_T.width = "0";
  td_T.height = "0";
  if (typeof td_T.tabIndex !== [][[]] + "") {
    td_T.tabIndex = td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(59, 2);
  }
  if (td_0E !== null) {
    td_T.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(61, 7), td_G);
  }
  td_T.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(68, 5), td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(73, 83));
  td_T.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(156, 3), td_Z);
  td_M.body.appendChild(td_T);
};
td_3i.csp_nonce = null;
td_3i.td_0v = function (td_d) {
  if (typeof td_d.currentScript !== [][[]] + "" && td_d.currentScript !== null) {
    var td_v = td_d.currentScript.getAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(159, 5));
    if (typeof td_v !== [][[]] + "" && td_v !== null && td_v !== "") {
      td_3i.csp_nonce = td_v;
    } else {
      if (typeof td_d.currentScript.nonce !== [][[]] + "" && td_d.currentScript.nonce !== null && td_d.currentScript.nonce !== "") {
        td_3i.csp_nonce = td_d.currentScript.nonce;
      }
    }
  }
};
td_3i.td_0s = function (td_E) {
  if (td_3i.csp_nonce !== null) {
    td_E.setAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(159, 5), td_3i.csp_nonce);
    if (td_E.getAttribute(td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(159, 5)) !== td_3i.csp_nonce) {
      td_E.nonce = td_3i.csp_nonce;
    }
  }
};
td_3i.td_2Z = function () {
  try {
    return new ActiveXObject(activeXMode);
  } catch (td_F) {
    return null;
  }
};
td_3i.td_3U = function () {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest;
  }
  if (window.ActiveXObject) {
    var td_d = [td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(164, 18), td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(182, 14), td_3i.tdz_f5ca1fa14de64705acdc78c8bd95400e.td_f(196, 17)];
    for (var td_J = 0; td_J < td_d.length; td_J++) {
      var td_T = td_3i.td_2Z(td_d[td_J]);
      if (td_T !== null) {
        return td_T;
      }
    }
  }
  return null;
};
td_3i.tdz_2b7e611ffe62479e8d1728fb0b185aac = new td_3i.td_0w("2b7e611ffe62479e8d1728fb0b185aac471152454545430f05111053415351584c1658565c5f0a07");
var td_3i = td_3i || {};
function td_3e() {
  td_3i.tdz_2b7e611ffe62479e8d1728fb0b185aac.td_f(0, 10);
  var td_e1;
  var td_bP = true;
  this.tryAgain = function () {
    return td_e1 ? false : td_bP;
  };
  this.getFPParams = function () {
    if (td_e1) {
      return td_3i.tdz_2b7e611ffe62479e8d1728fb0b185aac.td_f(10, 6) + td_e1;
    }
    return null;
  };
  this.setup = function () {
    try {
      var td_Sh;
      if (td_Sh = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100), !td_Sh) {
        return null;
      }
      var td_dM = td_Sh.createOscillator();
      td_dM.type = td_3i.tdz_2b7e611ffe62479e8d1728fb0b185aac.td_f(16, 8);
      td_dM.frequency.value = 1e4;
      var td_gV = td_Sh.createDynamicsCompressor();
      td_gV.threshold && (td_gV.threshold.value = -50);
      td_gV.knee && (td_gV.knee.value = 40);
      td_gV.ratio && (td_gV.ratio.value = 12);
      td_gV.reduction && (td_gV.reduction.value = -20);
      td_gV.attack && (td_gV.attack.value = 0);
      td_gV.release && (td_gV.release.value = .25);
      td_dM.connect(td_gV);
      td_gV.connect(td_Sh.destination);
      td_dM.start(0);
      td_Sh.startRendering();
      td_Sh.oncomplete = function (td_S8) {
        if (typeof td_S8.renderedBuffer === [][[]] + "") {
          return;
        }
        var td_kw = new td_2K;
        for (var td_Lb = 0; td_Lb < td_S8.renderedBuffer.length; td_Lb++) {
          td_kw.update(td_S8.renderedBuffer.getChannelData(0)[td_Lb].toString());
        }
        td_gV.disconnect();
        td_e1 = td_kw.toString();
      };
    } catch (td_YK) {
      td_bP = false;
    }
  };
}
td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0 = new td_3i.td_0w("a554518c0afe47668ac8f6c6e8004bd0085b45414111511010080813555b5f5218151a480359015c005b4400055057045403020c0c505a005404003e5b555c535b1543791444024f384b44425d0c03");
td_2K = function () {
  var td_s = td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(0, 21);
  var td_H = typeof window === td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(21, 6);
  var td_K = td_H ? window : {};
  if (td_K.JS_SHA256_NO_WINDOW) {
    td_H = false;
  }
  var td_B = !td_K.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== [][[]] + "";
  var td_E = td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(27, 16).split("");
  var td_M = [-2147483648, 8388608, 32768, 128];
  var td_C = [24, 16, 8, 0];
  var td_Z = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  var td_o = [];
  if (td_K.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (td_y) {
      return Object.prototype.toString.call(td_y) === td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(43, 14);
    };
  }
  if (td_B && (td_K.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (td_y) {
      return typeof td_y === td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(21, 6) && td_y.buffer && td_y.buffer.constructor === ArrayBuffer;
    };
  }
  instance = new td_k(false, false);
  this.update = function (td_l) {
    instance.update(td_l);
  };
  this.hash = function (td_i) {
    instance.update(td_i);
    return instance.toString();
  };
  this.toString = function () {
    return instance.toString();
  };
  function td_k() {
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
  td_k.prototype.update = function (td_z) {
    if (this.finalized) {
      return;
    }
    var td_F, td_w = typeof td_z;
    if (td_w !== td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(57, 6)) {
      if (td_w === td_3i.tdz_a554518c0afe47668ac8f6c6e8004bd0.td_f(21, 6)) {
        if (td_z === null) {
          throw new Error(td_s);
        } else {
          if (td_B && td_z.constructor === ArrayBuffer) {
            td_z = new Uint8Array(td_z);
          } else {
            if (!Array.isArray(td_z)) {
              if (!td_B || !ArrayBuffer.isView(td_z)) {
                throw new Error(td_s);
              }
            }
          }
        }
      } else {
        throw new Error(td_s);
      }
      td_F = true;
    }
    var td_R, td_r = 0, td_v, td_Y = td_z.length, td_T = this.blocks;
    while (td_r < td_Y) {
      if (this.hashed) {
        this.hashed = false;
        td_T[0] = this.block;
        td_T[16] = td_T[1] = td_T[2] = td_T[3] = td_T[4] = td_T[5] = td_T[6] = td_T[7] = td_T[8] = td_T[9] = td_T[10] = td_T[11] = td_T[12] = td_T[13] = td_T[14] = td_T[15] = 0;
      }
      if (td_F) {
        for (td_v = this.start; td_r < td_Y && td_v < 64; ++td_r) {
          td_T[td_v >> 2] |= td_z[td_r] << td_C[td_v++ & 3];
        }
      } else {
        for (td_v = this.start; td_r < td_Y && td_v < 64; ++td_r) {
          td_R = td_z.charCodeAt(td_r);
          if (td_R < 128) {
            td_T[td_v >> 2] |= td_R << td_C[td_v++ & 3];
          } else {
            if (td_R < 2048) {
              td_T[td_v >> 2] |= (192 | td_R >> 6) << td_C[td_v++ & 3];
              td_T[td_v >> 2] |= (128 | td_R & 63) << td_C[td_v++ & 3];
            } else {
              if (td_R < 55296 || td_R >= 57344) {
                td_T[td_v >> 2] |= (224 | td_R >> 12) << td_C[td_v++ & 3];
                td_T[td_v >> 2] |= (128 | td_R >> 6 & 63) << td_C[td_v++ & 3];
                td_T[td_v >> 2] |= (128 | td_R & 63) << td_C[td_v++ & 3];
              } else {
                td_R = 65536 + ((td_R & 1023) << 10 | td_z.charCodeAt(++td_r) & 1023);
                td_T[td_v >> 2] |= (240 | td_R >> 18) << td_C[td_v++ & 3];
                td_T[td_v >> 2] |= (128 | td_R >> 12 & 63) << td_C[td_v++ & 3];
                td_T[td_v >> 2] |= (128 | td_R >> 6 & 63) << td_C[td_v++ & 3];
                td_T[td_v >> 2] |= (128 | td_R & 63) << td_C[td_v++ & 3];
              }
            }
          }
        }
      }
      this.lastByteIndex = td_v;
      this.bytes += td_v - this.start;
      if (td_v >= 64) {
        this.block = td_T[16];
        this.start = td_v - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = td_v;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  td_k.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var td_c = this.blocks, td_Y = this.lastByteIndex;
    td_c[16] = this.block;
    td_c[td_Y >> 2] |= td_M[td_Y & 3];
    this.block = td_c[16];
    if (td_Y >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      td_c[0] = this.block;
      td_c[16] = td_c[1] = td_c[2] = td_c[3] = td_c[4] = td_c[5] = td_c[6] = td_c[7] = td_c[8] = td_c[9] = td_c[10] = td_c[11] = td_c[12] = td_c[13] = td_c[14] = td_c[15] = 0;
    }
    td_c[14] = this.hBytes << 3 | this.bytes >>> 29;
    td_c[15] = this.bytes << 3;
    this.hash();
  };
  td_k.prototype.hash = function () {
    var td_yj = this.h0, td_sW = this.h1, td_Of = this.h2, td_F = this.h3, td_i = this.h4, td_z = this.h5, td_T = this.h6, td_Q = this.h7, td_ey = this.blocks, td_y, td_Y, td_l, td_v, td_c, td_R, td_r, td_AA, td_U1, td_w, td_W;
    for (td_y = 16; td_y < 64; ++td_y) {
      td_c = td_ey[td_y - 15];
      td_Y = (td_c >>> 7 | td_c << 25) ^ (td_c >>> 18 | td_c << 14) ^ td_c >>> 3;
      td_c = td_ey[td_y - 2];
      td_l = (td_c >>> 17 | td_c << 15) ^ (td_c >>> 19 | td_c << 13) ^ td_c >>> 10;
      td_ey[td_y] = td_ey[td_y - 16] + td_Y + td_ey[td_y - 7] + td_l << 0;
    }
    td_W = td_sW & td_Of;
    for (td_y = 0; td_y < 64; td_y += 4) {
      if (this.first) {
        td_AA = 704751109;
        td_c = td_ey[0] - 210244248;
        td_Q = td_c - 1521486534 << 0;
        td_F = td_c + 143694565 << 0;
        this.first = false;
      } else {
        td_Y = (td_yj >>> 2 | td_yj << 30) ^ (td_yj >>> 13 | td_yj << 19) ^ (td_yj >>> 22 | td_yj << 10);
        td_l = (td_i >>> 6 | td_i << 26) ^ (td_i >>> 11 | td_i << 21) ^ (td_i >>> 25 | td_i << 7);
        td_AA = td_yj & td_sW;
        td_v = td_AA ^ td_yj & td_Of ^ td_W;
        td_r = td_i & td_z ^ ~td_i & td_T;
        td_c = td_Q + td_l + td_r + td_Z[td_y] + td_ey[td_y];
        td_R = td_Y + td_v;
        td_Q = td_F + td_c << 0;
        td_F = td_c + td_R << 0;
      }
      td_Y = (td_F >>> 2 | td_F << 30) ^ (td_F >>> 13 | td_F << 19) ^ (td_F >>> 22 | td_F << 10);
      td_l = (td_Q >>> 6 | td_Q << 26) ^ (td_Q >>> 11 | td_Q << 21) ^ (td_Q >>> 25 | td_Q << 7);
      td_U1 = td_F & td_yj;
      td_v = td_U1 ^ td_F & td_sW ^ td_AA;
      td_r = td_Q & td_i ^ ~td_Q & td_z;
      td_c = td_T + td_l + td_r + td_Z[td_y + 1] + td_ey[td_y + 1];
      td_R = td_Y + td_v;
      td_T = td_Of + td_c << 0;
      td_Of = td_c + td_R << 0;
      td_Y = (td_Of >>> 2 | td_Of << 30) ^ (td_Of >>> 13 | td_Of << 19) ^ (td_Of >>> 22 | td_Of << 10);
      td_l = (td_T >>> 6 | td_T << 26) ^ (td_T >>> 11 | td_T << 21) ^ (td_T >>> 25 | td_T << 7);
      td_w = td_Of & td_F;
      td_v = td_w ^ td_Of & td_yj ^ td_U1;
      td_r = td_T & td_Q ^ ~td_T & td_i;
      td_c = td_z + td_l + td_r + td_Z[td_y + 2] + td_ey[td_y + 2];
      td_R = td_Y + td_v;
      td_z = td_sW + td_c << 0;
      td_sW = td_c + td_R << 0;
      td_Y = (td_sW >>> 2 | td_sW << 30) ^ (td_sW >>> 13 | td_sW << 19) ^ (td_sW >>> 22 | td_sW << 10);
      td_l = (td_z >>> 6 | td_z << 26) ^ (td_z >>> 11 | td_z << 21) ^ (td_z >>> 25 | td_z << 7);
      td_W = td_sW & td_Of;
      td_v = td_W ^ td_sW & td_F ^ td_w;
      td_r = td_z & td_T ^ ~td_z & td_Q;
      td_c = td_i + td_l + td_r + td_Z[td_y + 3] + td_ey[td_y + 3];
      td_R = td_Y + td_v;
      td_i = td_yj + td_c << 0;
      td_yj = td_c + td_R << 0;
    }
    this.h0 = this.h0 + td_yj << 0;
    this.h1 = this.h1 + td_sW << 0;
    this.h2 = this.h2 + td_Of << 0;
    this.h3 = this.h3 + td_F << 0;
    this.h4 = this.h4 + td_i << 0;
    this.h5 = this.h5 + td_z << 0;
    this.h6 = this.h6 + td_T << 0;
    this.h7 = this.h7 + td_Q << 0;
  };
  td_k.prototype.hex = function () {
    this.finalize();
    var td_r = this.h0, td_z = this.h1, td_Y = this.h2, td_l = this.h3, td_T = this.h4, td_F = this.h5, td_i = this.h6, td_W = this.h7;
    var td_v = td_E[td_r >> 28 & 15] + td_E[td_r >> 24 & 15] + td_E[td_r >> 20 & 15] + td_E[td_r >> 16 & 15] + td_E[td_r >> 12 & 15] + td_E[td_r >> 8 & 15] + td_E[td_r >> 4 & 15] + td_E[td_r & 15] + td_E[td_z >> 28 & 15] + td_E[td_z >> 24 & 15] + td_E[td_z >> 20 & 15] + td_E[td_z >> 16 & 15] + td_E[td_z >> 12 & 15] + td_E[td_z >> 8 & 15] + td_E[td_z >> 4 & 15] + td_E[td_z & 15] + td_E[td_Y >> 28 & 15] + td_E[td_Y >> 24 & 15] + td_E[td_Y >> 20 & 15] + td_E[td_Y >> 16 & 15] + td_E[td_Y >> 12 & 15] + td_E[td_Y >> 8 & 15] + td_E[td_Y >> 4 & 15] + td_E[td_Y & 15] + td_E[td_l >> 28 & 15] + td_E[td_l >> 24 & 15] + td_E[td_l >> 20 & 15] + td_E[td_l >> 16 & 15] + td_E[td_l >> 12 & 15] + td_E[td_l >> 8 & 15] + td_E[td_l >> 4 & 15] + td_E[td_l & 15] + td_E[td_T >> 28 & 15] + td_E[td_T >> 24 & 15] + td_E[td_T >> 20 & 15] + td_E[td_T >> 16 & 15] + td_E[td_T >> 12 & 15] + td_E[td_T >> 8 & 15] + td_E[td_T >> 4 & 15] + td_E[td_T & 15] + td_E[td_F >> 28 & 15] + td_E[td_F >> 24 & 15] + td_E[td_F >> 20 & 15] + td_E[td_F >> 16 & 15] + td_E[td_F >> 12 & 15] + td_E[td_F >> 8 & 15] + td_E[td_F >> 4 & 15] + td_E[td_F & 15] + td_E[td_i >> 28 & 15] + td_E[td_i >> 24 & 15] + td_E[td_i >> 20 & 15] + td_E[td_i >> 16 & 15] + td_E[td_i >> 12 & 15] + td_E[td_i >> 8 & 15] + td_E[td_i >> 4 & 15] + td_E[td_i & 15];
    td_v += td_E[td_W >> 28 & 15] + td_E[td_W >> 24 & 15] + td_E[td_W >> 20 & 15] + td_E[td_W >> 16 & 15] + td_E[td_W >> 12 & 15] + td_E[td_W >> 8 & 15] + td_E[td_W >> 4 & 15] + td_E[td_W & 15];
    return td_v;
  };
  td_k.prototype.toString = td_k.prototype.hex;
};
td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639 = new td_3i.td_0w("f834d6b4d0e9453890e11ea5ba72c63905595d42054515510657095c4c45564a505d005f45040d18150455550f5b5c434b4f5656035a1551065b0c4d1906575e4c5e0645580a0f");
var td_3i = td_3i || {};
function td_Va() {
  if (!!window.WebGLRenderingContext) {
    var td_lT = document.createElement(td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(0, 6));
    var td_kG = [td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(6, 5), td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(11, 18), td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(29, 9), td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(38, 9)];
    for (var td_sG = 0; td_sG < 4; td_sG++) {
      try {
        var td_Ih = td_lT.getContext(td_kG[td_sG]);
        if (td_Ih && typeof td_Ih.getParameter === td_3i.tdz_f834d6b4d0e9453890e11ea5ba72c639.td_f(47, 8)) {
          return {name: td_kG[td_sG], gl: td_Ih};
        }
      } catch (td_KV) {}
    }
    return -1;
  }
  return 0;
}
td_3i.tdz_70986e9e7af44dcf8f725af7331ef231 = new td_3i.td_0w("70986e9e7af44dcf8f725af7331ef2310c107c60623a4d004f151346513b050f541252406a00085e405c451709425a5260757b737f3166206f353940511c17134a0368545c0d1252416c500b0f415c45455f49515528763f68243e606b10061e4c1345576a070f5b4756433a075c5a4258444b57460c5a2b5815465542050a0a59045b5753140854475a5e0b317771767b6f5d5d54105e3a4504085051160614670f59545a0e045d5650451612405a5f50164e5f5a13044340060a4609");
var td_3i = td_3i || {};
function td_0c() {
  try {
    var td_ML = td_Va();
    if (td_ML === 0 || td_ML === -1) {
      return;
    }
    var td_QJ = td_ML.gl;
    var td_t9 = td_ML.name;
    td_t9 += td_QJ.getParameter(td_QJ.VERSION);
    td_t9 += td_QJ.getParameter(td_QJ.SHADING_LANGUAGE_VERSION);
    td_t9 += td_QJ.getParameter(td_QJ.VENDOR);
    td_t9 += td_QJ.getParameter(td_QJ.RENDERER);
    var td_Yp = [];
    try {
      td_Yp = td_QJ.getSupportedExtensions();
    } catch (td_nA) {}
    var td_r8 = td_Yp.length;
    if (td_r8) {
      var td_jP = "";
      for (var td_KH = 0; td_KH < td_r8; td_KH++) {
        if (td_jP.length) {
          td_jP += td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(0, 2);
        }
        td_jP += td_Yp[td_KH];
      }
      td_t9 += td_jP;
    }
    var td_j0;
    var td_nA = td_QJ.getExtension(td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(2, 30)) || td_QJ.getExtension(td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(32, 37)) || td_QJ.getExtension(td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(69, 34));
    if (td_nA) {
      td_j0 = td_QJ.getParameter(td_nA.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      if (td_j0 === 0) {
        td_j0 = 2;
      }
    } else {
      td_j0 = td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(103, 13);
    }
    td_t9 += td_j0;
    return td_t9;
  } catch (td_nA) {
    return null;
  }
}
function td_0o() {
  try {
    var td_Sh = td_Va();
    if (td_Sh === 0 || td_Sh === -1) {
      return;
    }
    var td_OX = td_Sh.gl;
    if (typeof td_OX.getExtension !== td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(116, 8) || typeof td_OX.getParameter !== td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(116, 8)) {
      return null;
    }
    var td_l8 = td_OX.getExtension(td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(124, 25));
    if (!td_l8 || typeof td_l8 !== td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(149, 6)) {
      return null;
    }
    var td_T9 = "";
    var td_s8 = td_OX.getParameter(td_l8.UNMASKED_VENDOR_WEBGL);
    if (typeof td_s8 === td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(155, 6)) {
      td_T9 += td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(161, 6) + encodeURIComponent(td_s8);
    }
    var td_Xq = td_OX.getParameter(td_l8.UNMASKED_RENDERER_WEBGL);
    if (typeof td_Xq === td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(155, 6)) {
      td_T9 += td_3i.tdz_70986e9e7af44dcf8f725af7331ef231.td_f(167, 6) + encodeURIComponent(td_Xq);
    }
    return td_T9;
  } catch (td_fj) {
    return null;
  }
}
td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1 = new td_3i.td_0w("c6e13a8fdd4a4ed994719150bb69f0e105430b5247085708110a5f0f5b120a5a5659475d5c45505f0c0e595802");
function td_q(td_z, td_m, td_n) {
  if (typeof td_n === [][[]] + "" || td_n === null) {
    td_n = 0;
  } else {
    if (td_n < 0) {
      td_n = Math.max(0, td_z.length + td_n);
    }
  }
  for (var td_c = td_n, td_F = td_z.length; td_c < td_F; td_c++) {
    if (td_z[td_c] === td_m) {
      return td_c;
    }
  }
  return -1;
}
function td_D(td_c, td_Z, td_E) {
  return td_c.indexOf(td_Z, td_E);
}
function td_X(td_Z) {
  return td_Z.replace(/^\s+|\s+$/g, "");
}
function td_p(td_N) {
  return td_N.trim();
}
function td_1Z(td_R) {
  return td_R.trim();
}
function td_3v(td_w, td_F, td_K) {
  return td_w.indexOf(td_F, td_K);
}
function td_g() {
  return Date.now();
}
function td_O() {
  return (new Date).getTime();
}
function td_L() {
  if (!Array.prototype.indexOf) {
    td_3v = td_q;
  } else {
    td_3v = td_D;
  }
  if (typeof String.prototype.trim !== td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(0, 8)) {
    td_1Z = td_X;
  } else {
    td_1Z = td_p;
  }
  if (typeof Date.now === [][[]] + "") {
    td_g = td_O;
  }
}
function td_1T(td_l) {
  if (typeof document.readyState !== [][[]] + "" && typeof document.readyState !== td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(8, 7) && document.readyState === td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(15, 8)) {
    td_l();
  } else {
    if (typeof document.readyState === [][[]] + "") {
      setTimeout(td_l, 300);
    } else {
      var td_o = 200;
      var td_G;
      if (typeof window !== [][[]] + "" && typeof window !== td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(8, 7) && window !== null) {
        td_G = window;
      } else {
        td_G = document.body;
      }
      if (td_G.addEventListener) {
        td_G.addEventListener(Number(343388).toString(25), function () {
          setTimeout(td_l, td_o);
        }, false);
      } else {
        if (td_G.attachEvent) {
          td_G.attachEvent(td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(23, 6), function () {
            setTimeout(td_l, td_o);
          }, false);
        } else {
          var td_R = td_G.onload;
          td_G.onload = new function () {
            var td_n = true;
            if (td_R !== null && typeof td_R === td_3i.tdz_c6e13a8fdd4a4ed994719150bb69f0e1.td_f(0, 8)) {
              td_n = td_R();
            }
            setTimeout(td_l, td_o);
            td_G.onload = td_R;
            return td_n;
          };
        }
      }
    }
  }
}
function td_x() {
  if (typeof td_3q !== [][[]] + "") {
    td_3q();
  }
  if (typeof td_2X !== [][[]] + "") {
    td_2X();
  }
  if (typeof td_1w !== [][[]] + "") {
    td_1w();
  }
  if (typeof td_0n !== [][[]] + "") {
    td_0n(td_0R);
  }
  if (typeof tmx_link_scan !== [][[]] + "") {
    tmx_link_scan();
  }
  if (typeof td_0V !== [][[]] + "") {
    td_0V();
  }
  if (typeof td_1D !== [][[]] + "") {
    td_1D.start();
  }
  if (typeof td_0B !== [][[]] + "") {
    td_0B.start();
  }
}
function td_4i() {
  td_3i.td_4V();
  td_3i.td_0v(document);
  td_1f.td_1G();
  td_L();
  td_1T(td_x);
}
td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc = new td_3i.td_0w("a4eb46a01efe441caf3d60e4311f9adc02550b1455455354562805015152560b080c58085b5e0a44424342124c17131b184e55530605550507525e5c0306411b410b5c0a59431555505406544919441004460c04030411481142414914595e0d0e1543055555421813425414500742145c120f045a0b475a570d5b435e52450d5c5609425c56115a0e000b0f5c470e050d094308500b");
var td_3i = td_3i || {};
var td_0u;
function td_1R() {
  try {
    var td_VP = td_3b.getFontsList();
    if (td_VP.length === 0) {
      return;
    }
    var td_ei = document.createElement(td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(0, 6));
    if (!td_ei || !td_ei.getContext) {
      return;
    }
    var td_Kc = td_ei.getContext(td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(6, 2));
    if (!td_Kc) {
      return;
    }
    if (typeof td_Kc.measureText === [][[]] + "") {
      return;
    }
    var td_sK = td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(8, 36);
    td_Kc.font = td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(44, 14);
    var td_Ll = td_Kc.measureText(td_sK).width;
    td_Kc.font = td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(58, 10);
    var td_JA = td_Kc.measureText(td_sK).width;
    var td_y0 = td_g();
    var td_tV = 0;
    var td_Zg = 0;
    var td_MC = "";
    var td_wN = false;
    for (var td_UB = 0; td_UB < td_VP.length; td_UB++) {
      td_Kc.font = td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(68, 6) + td_VP[td_UB] + td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(74, 12);
      var td_lz = td_Kc.measureText(td_sK).width;
      td_Kc.font = td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(68, 6) + td_VP[td_UB] + td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(86, 8);
      var td_ux = td_Kc.measureText(td_sK).width;
      if (td_Ll !== td_lz || td_JA !== td_ux) {
        td_Zg++;
        td_MC += "," + td_VP[td_UB];
      }
      if (td_0u > 0 && td_UB % 5 === 0) {
        td_tV = td_g() - td_y0;
        if (td_tV > td_0u) {
          td_wN = true;
          break;
        }
      }
    }
    if (!td_MC) {
      return;
    }
    if (td_tV === 0) {
      td_tV = td_g() - td_y0;
    }
    var td_KW = td_2Y(td_MC);
    var td_qa = "";
    if (td_3E !== null) {
      td_qa += td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(94, 3) + td_3E;
    }
    if (!td_wN) {
      td_qa += td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(97, 5) + td_Zg + td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(102, 5) + td_KW + td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(107, 8) + td_tV + ":" + td_Zg;
    } else {
      td_qa += td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(115, 8) + td_tV + ":" + td_Zg;
    }
    var td_C8 = td_MC.length;
    var td_bn = false;
    if (typeof td_2F !== [][[]] + "") {
      td_bn = td_2F;
    }
    if (td_C8 > 0 && td_bn && !td_wN) {
      var td_lW = 1800;
      if (td_C8 > td_lW && td_3c._eq(td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(123, 2)) && td_4H._eq("6")) {
        var td_bN = td_MC.indexOf(",", td_lW);
        if (td_bN !== -1) {
          td_C8 = td_bN;
        }
      }
      td_qa += td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(125, 5) + td_MC.substring(0, td_C8);
    }
    var td_UQ = td_0P + td_3i.tdz_a4eb46a01efe441caf3d60e4311f9adc.td_f(130, 4) + td_3i.td_2O(td_qa, td_2V);
    td_3m(td_UQ, document);
  } catch (td_rX) {}
}
td_0u = 1001;
var td_1m = ["Andale Mono", "Arial", "Arial Black", "AR PL UKai CN", "AR PL UMing CN", "Batang", "Bitstream Vera Sans", "Comic Sans MS", "Courier New", "Cursor", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dotum", "Droid Sans", "FreeMono", "FreeSans", "FreeSerif", "gargi", "Garuda", "Georgia", "Hei", "Impact", "KacstArt", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Sans Narrow", "Lohit Bengali", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monospace", "mry_KacstQurn", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Sans L Condensed", "Norasi", "OpenSymbol", "ori1Uni", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Saab", "Sawasdee", "System", "TakaoPGothic", "Times", "Times New Roman", "TlwgMono", "TlwgTypewriter", "Tlwg Typist", "Tlwg Typo", "Trebuchet MS", "Ubuntu", "Ubuntu Condensed", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Zen Hei"];
var td_0z = ["18thCentury", "8514oem", "AcmeFont", "Adobe Arabic", "Agency FB", "Aharoni", "Aldhabi", "Alfredo", "Algerian", "Alien Encounters", "Almonte Snow", "Amethyst", "Andalus", "Aparajita", "Arabic Transparent", "Arabic Typesetting", "AR BERKLEY", "Arial Baltic", "Arial CE", "Arial CYR", "Arial Greek", "Arial Narrow", "Arial Rounded MT Bold", "Arial TUR", "Arial Unicode MS", "Arimo", "AR JULIAN", "Asimov", "Autumn", "Baby Kruffy", "Balthazar", "Baskerville", "Baskerville Old Face", "Bastion", "Batang", "BatangChe", "Bauhaus 93", "Bellerose", "Bell MT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "Birch Std", "Bitstream Vera Sans", "Blackadder ITC", "Blackoak Std", "BN Jinx", "BN Machine", "Bobcat", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Poster Compressed", "BolsterBold", "Book Antiqua", "Bookman Old Style", "Bookshelf Symbol 7", "Borealis", "BOUTON International Symbols", "Bradley Hand ITC", "Brandish", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brussels", "Calibri", "Calibri Light", "Californian FB", "Calisto MT", "Calligraphic", "Calvin", "Cambria", "Cambria Math", "Candara", "Candles", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Chaparral Pro", "Chaparral Pro Light", "Charlemagne Std", "Chiller", "Chinyen", "Clarendon", "Colbert", "Colonna MT", "Comic Sans MS", "Commons", "Consolas", "Constantia", "Coolsville", "Cooper Black", "Cooper Std Black", "Copperplate", "Corbel", "Cordia New", "CordiaUPC", "Corporate", "Courier New Baltic", "Courier New CE", "Cracked Johnnie", "Creepygirl", "Curlz MT", "DaunPenh", "David", "Dayton", "DejaVu Sans", "Deneane", "Detente", "DFKai-SB", "Digifit", "DilleniaUPC", "Distant Galaxy", "DokChampa", "Dominican", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "Emmett", "Engravers MT", "Enliven", "Eras Bold ITC", "Ethnocentric", "EucrosiaUPC", "Euphemia", "Expressway Rg", "FangSong", "Felix Titling", "Fingerpop", "Fixedsys", "Flubber", "Footlight MT Light", "Forte", "Frankfurter Venetian TT", "Franklin Gothic Book", "Franklin Gothic Medium Cond", "FrankRuehl", "FreesiaUPC", "Freestyle Script", "French Script MT", "Gabriola", "Gadugi", "Garamond", "Gazzarelli", "Gentium Basic", "Gentium Book Basic", "Geotype TT", "Giddyup Std", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Glockenspiel", "Gloucester MT Extra Condensed", "Good Times", "Goudy Old Style", "Goudy Stout", "Greek Diner Inline TT", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Hand Me Down S (BRK)", "Hansen", "Harlow Solid Italic", "Harrington", "Harvest", "HarvestItal", "Haxton Logos TT", "Heavy Heap", "Hei", "Helvetica", "Helvetica LT Std", "HelveticaNeueLT Com 107 XBlkCn", "Highboot", "High Tower Text", "Hobo Std", "Hollywood Hills", "Hombre", "Huxley Titling", "Imprint MT Shadow", "Induction", "Informal Roman", "IrisUPC", "Iskoola Pota", "Italianate", "JasmineUPC", "Jokerman", "Juice ITC", "Kai", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N B", "Kristen ITC", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic Std", "LetterOMatic!", "Levenim MT", "LilyUPC", "Limousine", "Lithos Pro Regular", "LittleLordFontleroy", "Lucida Bright", "Lucida Calligraphy", "Lucida Fax", "Lucida Handwriting", "Lucida Sans Typewriter", "Mael", "Magneto", "Maiandra GD", "Malgun Gothic", "Manorly", "Martina", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "MelodBold", "Mesquite Std", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "Minerva", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Minion Pro", "Miriam", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "MoolBoran", "Moonbeam", "MS Gothic", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "Myanmar Text", "Mycalc", "Myriad Arabic", "Myriad Hebrew", "Myriad Pro", "Narkisim", "Nasalization", "Neon Lights", "Niagara Engraved", "Niagara Solid", "Nina", "Nirmala UI", "Notram", "November", "NSimSun", "Nueva Std", "Nueva Std Cond", "Nyala", "OCR A Extended", "OCR A Std", "Old English Text MT", "Onyx", "OpenSymbol", "OpineHeavy", "Orator Std", "Palace Script MT", "Palatino", "Papyrus", "Parchment", "Parry Hotter", "PenultimateLight", "Perpetua", "Perpetua Titling MT", "PhrasticMedium", "Pirate", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poplar Std", "PR Celtic Narrow", "Prestige Elite Std", "Pristina", "QuiverItal", "Rage Italic", "Ravie", "Rockwell", "Rockwell Condensed", "Rod", "Roland", "Rondalo", "Rosewood Std Regular", "RowdyHeavy", "Russel Write TT", "Sakkal Majalla", "Salina", "Script", "Script MT Bold", "Segoe Print", "Segoe UI Semilight", "Segoe UI Symbol", "SF Movie Poster", "Shonar Bangla", "Showcard Gothic", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Skinny", "Small Fonts", "Snap ITC", "Snowdrift", "Source Code Pro", "Splash", "Stencil", "Stencil Std", "Stephen", "SWGamekeys MT", "System", "Tarzan", "Tekton Pro", "Tekton Pro Cond", "Tekton Pro Ext", "Tempus Sans ITC", "Terminal", "Terminator Two", "Times New Roman Baltic", "Toledo", "Traditional Arabic", "Trajan Pro", "Tw Cen MT", "Urdu Typesetting", "Utsaah", "Valken", "Vani", "Vijaya", "Viner Hand ITC", "Vivaldi", "Vivian", "Vladimir Script", "Vrinda", "Waverly", "Whimsy TT", "Wide Latin", "Wingdings 2", "Woodcut", "X-Files", "Year supply of fairy cakes"];
var td_2L = ["Abadi MT Condensed Extra Bold", "Abadi MT Condensed Light", "Al Bayan Bold", "Al Bayan Plain", "American Typewriter Bold", "American Typewriter Condensed", "American Typewriter Light", "Apple Braille Outline 6 Dot", "Apple Braille Pinpoint 6 Dot", "AppleGothic Regular", "Apple LiGothic Medium", "Apple LiSung Light", "AppleMyungjo Regular", "Apple SD Gothic Neo", "Apple SD GothicNeo ExtraBold", "Apple SD Gothic Neo Regular", "Arial Bold", "Arial Bold Italic", "Arial Hebrew Bold", "Arial Italic", "Arial Narrow Bold", "Arial Narrow Bold Italic", "Arial Narrow Italic", "Avenir", "Avenir Black", "Avenir Next", "Avenir Next Bold", "Avenir Next Condensed", "Avenir Next Condensed Bold", "Avenir Next Demi Bold", "Avenir Next Heavy", "Avenir Next Regular", "Bangla MN Bold", "Bangla Sangam MN Bold", "Baskerville Bold", "Baskerville Bold Italic", "Baskerville SemiBold", "Baskerville SemiBold Italic", "Bell MT Bold", "Bell MT Italic", "Bernard MT Condensed", "Big Caslon Medium", "Book Antiqua", "Book Antiqua Bold", "Bookman Old Style", "Bookman Old Style Bold", "Bookshelf Symbol 7", "Braggadocio", "Britannic Bold", "Brush Script MT Italic", "Calibri", "Calibri Bold", "Calibri Light", "Calisto MT", "Calisto MT Bold", "Cambria", "Cambria Bold", "Cambria Math", "Candara Bold", "Century", "Century Gothic", "Century Gothic Bold", "Century Schoolbook", "Century Schoolbook Bold", "Chalkboard Bold", "Chalkboard SE", "Chalkboard SE Bold", "Cochin Bold", "Colonna MT", "Comic Sans MS Bold", "Consolas", "Consolas Bold", "Constantia", "Constantia Bold", "Cooper Black", "Copperplate Bold", "Copperplate Gothic Bold", "Copperplate Light", "Corbel", "Corbel Bold", "Corsiva Hebrew Bold", "Courier Bold", "Courier New Bold", "Courier New Italic", "Courier Oblique", "Curlz MT", "Damascus Bold", "Desdemona", "Devanagari MT Bold", "Didot Bold", "Edwardian Script ITC", "Engravers MT", "Engravers MT Bold", "Euphemia UCAS Bold", "Eurostile", "Eurostile Bold", "Footlight MT Light", "Franklin Gothic Book", "Franklin Gothic Book Italic", "Franklin Gothic Medium", "Franklin Gothic Medium Italic", "Futura Condensed ExtraBold", "Futura Medium", "Gabriola", "Garamond", "Garamond Bold", "Geeza Pro Bold", "Georgia Bold", "Gill Sans Bold", "Gill Sans MT", "Gill Sans MT Bold", "Gill Sans MT Italic", "Gill Sans Ultra Bold", "Gloucester MT Extra Condensed", "Goudy Old Style", "Goudy Old Style Bold", "Gujarati MT Bold", "Gujarati Sangam MN Bold", "Gulim", "GungSeo Regular", "Gurmukhi MN Bold", "Gurmukhi Sangam MN", "Gurmukhi Sangam MN Bold", "Haettenschweiler", "Harrington", "HeadLineA Regular", "Hei Regular", "Heiti SC Light", "Heiti TC Light", "Helvetica Bold", "Helvetica CY Bold", "Helvetica CY Plain", "Helvetica Light", "Helvetica Neue Bold", "Helvetica Neue Medium", "Helvetica Oblique", "Hiragino Kaku Gothic ProN W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic StdN W8", "Hiragino Maru Gothic ProN W4", "Hiragino Mincho ProN W3", "Hiragino Mincho ProN W6", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Hoefler Text Black", "Hoefler Text Ornaments", "Imprint MT Shadow", "Kailasa Regular", "Kai Regular", "Kaiti SC", "Kaiti SC Black", "Kannada MN Bold", "Kannada Sangam MN Bold", "Kefa Bold", "Khmer MN Bold", "Kino MT", "Kokonor Regular", "Lucida Blackletter", "Lucida Bright", "Lucida Bright Demibold", "Lucida Bright Demibold Italic", "Lucida Bright Italic", "Lucida Calligraphy", "Lucida Calligraphy Italic", "Lucida Console", "Lucida Fax", "Lucida Fax Demibold", "Lucida Fax Regular", "Lucida Grande Bold", "Lucida Handwriting", "Lucida Handwriting Italic", "Lucida Sans", "Lucida Sans Demibold Italic", "Lucida Sans Typewriter", "Lucida Sans Typewriter Bold", "Lucida Sans Unicode", "Malayalam MN Bold", "Malayalam Sangam MN Bold", "Marion", "Marion Bold", "Marker Felt Thin", "Marlett", "Matura MT Script Capitals", "Meiryo", "Meiryo Bold", "Menlo Bold", "Microsoft Himalaya", "Microsoft Tai Le", "Microsoft Tai Le Bold", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "Monotype Sorts", "MS Gothic", "Mshtakan Bold", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MT Extra", "Myanmar MN Bold", "NanumGothic", "Nanum Gothic", "NanumGothic Bold", "NanumMyeongjo", "Nanum Myeongjo", "NanumMyeongjo Bold", "New Peninim MT Bold", "News Gothic MT", "News Gothic MT Bold", "Noteworthy Bold", "Onyx", "Optima Bold", "Optima Regular", "Oriya MN Bold", "Oriya Sangam MN Bold", "Osaka-Mono", "Palatino Bold", "Palatino Linotype", "Palatino Linotype Bold", "Papyrus Condensed", "PCMyungjo Regular", "Perpetua", "Perpetua Bold", "Perpetua Titling MT", "Perpetua Titling MT Bold", "PilGi Regular", "Playbill", "PMingLiU", "PMingLiU-ExtB", "PT Sans Bold", "PT Sans Caption Bold", "PT Sans Narrow Bold", "Raanana Bold", "Rockwell", "Rockwell Bold", "Rockwell Extra Bold", "Rockwell Italic", "SimHei", "SimSun", "Sinhala MN Bold", "Sinhala Sangam MN Bold", "Skia Regular", "Songti SC", "Songti SC Black", "Stencil", "STIXGeneral-Bold", "STIXGeneral-Regular", "STIXIntegralsD-Bold", "STIXIntegralsSm-Bold", "STIXIntegralsUp-Bold", "STIXIntegralsUpD-Bold", "STIXIntegralsUpD-Regular", "STIXIntegralsUp-Regular", "STIXIntegralsUpSm-Bold", "STIXNonUnicode-Bold", "STIXSizeFiveSym-Regular", "STIXSizeFourSym-Bold", "STIXSizeOneSym-Bold", "STIXSizeThreeSym-Bold", "STIXSizeTwoSym-Bold", "STIXVariants-Bold", "STXihei", "Tahoma Negreta", "Tamil MN Bold", "Tamil Sangam MN Bold", "Telugu MN Bold", "Telugu Sangam MN Bold", "Thonburi Bold", "Times Bold", "Times New Roman Bold", "Times New Roman Italic", "Times Roman", "Trebuchet MS Bold", "Tw Cen MT", "Tw Cen MT Bold", "Tw Cen MT Italic", "Verdana Bold", "Wide Latin", "Yuppy SC", "Yuppy SC Regular", "Yuppy TC", "Yuppy TC Regular"];
var td_3z = ["AR PL UKai CN", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Andale Mono", "Arial", "Arial Black", "Arial Unicode MS", "Baskerville", "Batang", "Bitstream Charter", "Bitstream Vera Sans", "Carrois Gothic SC", "Century Schoolbook L", "Comic Sans MS", "Courier 10 Pitch", "Courier New", "Cursor", "Cutive Mono", "Dancing Script", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dingbats", "Dotum", "Droid Sans", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Garuda", "Gentium", "GentiumAlt", "Georgia", "Goudy", "Hei", "ITC Stone Serif", "Impact", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Devanagari", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumBarunGothic", "NanumGothic", "NanumGothicCoding", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Nimbus Sans L Condensed", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Serif", "OldeEnglish", "OpenSymbol", "Palatino", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Samyak Tamil", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "System", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Times", "Times New Roman", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "WenQuanYi Zen Hei", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
var td_1a = ["AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Arial", "Arial Unicode MS", "Baskerville", "Bitstream Charter", "Carrois Gothic SC", "Century Schoolbook L", "Copperplate", "Courier 10 Pitch", "Courier New", "Cutive Mono", "Dancing Script", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Didot", "Dingbats", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Futura", "Garuda", "Georgia", "Gill Sans", "Helvetica", "Hoefler Text", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Grande", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Canadian Aboriginal", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Gujarati", "Noto Sans Gurmukhi", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Malayalam", "Noto Sans Myanmar", "Noto Sans Oriya", "Noto Sans SC", "Noto Sans Sinhala", "Noto Sans Symbols", "Noto Sans TC", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", "Noto Sans Yi", "Noto Serif", "OpenSymbol", "Optima", "Palatino", "Palatino Linotype", "Papyrus", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "Symbol", "TAMu_Kadambri", "TAMu_Kalyani", "TAMu_Maduram", "TSCu_Comic", "TSCu_Paranar", "TSCu_Times", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Vemana2000", "Verdana", "Waree", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
td_3i.tdz_7d37ae49c23d4770847777b695aee7e7 = new td_3i.td_0w("7d37ae49c23d4770847777b695aee7e747164742141242431b170426110075150f7712007412557047544453555c0752521441431410434f194a1653764d12077a110074120024130e71104052751f42421644461f40037b191704271100744e1d03745656541245484144522646134e1253701256274e434605701a4a4612077a4e424346411b130e731117144211404015431256274e1c547016537712007642451200751255744c401f131c494000751e4b464452761c5470461143414f150f761200754d47017d10562640002312002652560207515b04545b0c5e545a5c575b6e61646436464a41141113411d461253714d4452701c5476441c555655404a4e424340411b481c02231f1c125274491a52560a07515d04541652045f5d5a48464d424340144f471056271f4e4000741a4d564453045a01575e03535e5f5b5744454d42431540404b4452274d1c1200274d490040020900505606535159404a4e424340411b481c02231f1c125274491a52560307515d0454520c5f5c474242414340414e1c130e771b1c40002649490516015100565c0442411e41434046414a1200754d1b130e761f1b04560f55530055590e0d5f5a0e5f5c0b5a115d515b0906115d525f");
var td_3i = td_3i || {};
var td_3G = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(0, 33);
var td_4a = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(33, 25);
var td_3w = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(58, 28);
var td_3F = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(86, 23);
var td_1b = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(109, 13);
var td_1S = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(122, 23);
var td_1u = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(145, 18);
var td_1v = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(163, 52);
var td_0F = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(215, 24);
var td_2R = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(239, 33);
var td_4m = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(272, 33);
var td_0W = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(305, 30);
var td_4E = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(335, 31);
var td_4P = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(366, 27);
var td_0U = td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(393, 34);
var td_j = 1;
var td_N = 0;
function td_0J(td_l, td_R, td_c, td_W) {
  return td_V(td_l, td_R, td_c, null, td_W);
}
function td_V(td_W, td_y, td_Q, td_z, td_H) {
  var td_k = td_3i.td_1H(decodeURIComponent(td_y));
  if (td_k === null) {
    return;
  }
  if (typeof td_z !== [][[]] + "" && td_z !== null) {
    return td_d(td_W, td_k, td_Q, td_H);
  } else {
    return td_G(td_W, td_k, td_Q, td_H);
  }
}
function td_G(td_K, td_Y, td_B, td_o) {
  if (td_K.attachEvent) {
    td_K.attachEvent(td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(427, 2) + td_Y, function (td_F) {
      td_B(td_F || window.event);
    });
  } else {
    if (typeof td_o === [][[]] + "") {
      td_K.addEventListener(td_Y, td_B, false);
    } else {
      td_K.addEventListener(td_Y, td_B, td_o);
    }
  }
}
function td_d(td_l, td_y, td_F, td_r) {
  if (typeof td_l.addEventListener !== [][[]] + "") {
    if (typeof td_r === [][[]] + "") {
      td_l.addEventListener(td_y, td_F, false);
    } else {
      td_l.addEventListener(td_y, td_F, td_r);
    }
  } else {
    td_l.attachEvent(td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(427, 2) + td_y, function (td_w) {
      td_F(td_w || window.event);
    });
  }
}
function td_1O(td_Q, td_k, td_c) {
  return td_J(td_Q, td_k, td_c, null);
}
function td_J(td_E, td_B, td_i, td_Q) {
  var td_w = td_3i.td_1H(decodeURIComponent(td_B));
  if (td_w === null) {
    return;
  }
  if (typeof td_Q !== [][[]] + "" && td_Q !== null) {
    return td_S(td_E, td_w, td_i);
  } else {
    return td_n(td_E, td_w, td_i);
  }
}
function td_n(td_i, td_C, td_B) {
  if (td_i.detachEvent) {
    td_i["e" + td_C + td_B] = td_B;
    td_i[td_C + td_B] = function () {
      td_i["e" + td_C + td_B](window.event);
    };
    td_i.detachEvent(td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(427, 2) + td_C, td_i[td_C + td_B]);
  } else {
    td_i.removeEventListener(td_C, td_B, false);
  }
}
function td_S(td_B, td_i, td_Y) {
  if (typeof td_B.removeEventListener !== [][[]] + "") {
    td_B.removeEventListener(td_i, td_Y, false);
  } else {
    td_B["e" + td_i + td_Y] = td_Y;
    td_B[td_i + td_Y] = function () {
      td_B["e" + td_i + td_Y](window.event);
    };
    td_B.detachEvent(td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(427, 2) + td_i, td_B[td_i + td_Y]);
  }
}
function td_m(td_s) {
  var td_w = td_s;
  var td_T = 500;
  var td_Y = 3e4;
  var td_H = [];
  var td_W = 0;
  this.addFeature = function (td_z, td_k) {
    if (typeof td_k === [][[]] + "" || td_k < td_T) {
      td_k = td_T;
    }
    var td_r = Math.ceil(td_k / td_T);
    td_H.push([td_z, td_r, true]);
    td_z.setup();
  };
  this.getFeaturesForTest = function () {
    return td_H;
  };
  this.start = function () {
    if (td_H.length === 0) {
      return;
    }
    setTimeout(td_C, td_T);
  };
  this.check = function () {
    td_C();
  };
  function td_C() {
    var td_r;
    var td_z = "";
    var td_F = 0;
    td_W++;
    for (td_r = 0; td_r < td_H.length; td_r++) {
      var td_i = td_H[td_r][0];
      var td_M = td_H[td_r][1];
      var td_o = td_H[td_r][2];
      if (!td_o) {
        td_F++;
        continue;
      }
      if (td_W >= td_M) {
        var td_K = td_i.getFPParams();
        if (td_K !== null) {
          td_z += td_K;
        }
        if (!td_i.tryAgain()) {
          td_H[td_r][2] = false;
          td_F++;
        } else {}
      }
    }
    if (td_z.length > 0) {
      var td_E = null;
      switch (td_w) {
        case 0:
          td_E = td_0T + td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(429, 10) + td_3i.td_2O(td_z, td_2V);
          break;
        case 1:
        default:
          td_E = td_0P + td_3i.tdz_7d37ae49c23d4770847777b695aee7e7.td_f(429, 10) + td_3i.td_2O(td_z, td_2V);
          break;
      }
      td_3m(td_E, document);
    }
    if (td_W >= Math.ceil(td_Y / td_T)) {
      return;
    }
    if (td_F < td_H.length) {
      setTimeout(td_C, td_T);
    } else {}
  }
}
var td_1D = new td_m(td_j);
var td_0B = new td_m(td_N);
td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f = new td_3i.td_0w("2a8ced26f79044b1b75729b13eddbd5f47125d431610405f05435845505d0d580c474043445006545c0c0a14171054135608570c10104243120b5b420a120f54065f08115858010c02430e015f");
var td_3i = td_3i || {};
function td_2v() {
  td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(0, 10);
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (td_IF) {
      var td_Mc = 0;
      var td_wM = 0;
      var td_ef = 0;
      var td_qQ = new td_2K;
      td_IF.forEach(function (td_Q6) {
        if (td_Q6.kind === td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(10, 10)) {
          td_Mc++;
        } else {
          if (td_Q6.kind === td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(20, 10)) {
            td_ef++;
          } else {
            if (td_Q6.kind === td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(30, 11)) {
              td_wM++;
            }
          }
        }
        var td_n5 = td_Q6.kind + "," + td_Q6.label + "," + td_Q6.deviceId;
        td_qQ.update(td_n5 + td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(41, 4));
      });
      var td_ji;
      if (td_Mc !== 0 || td_wM !== 0 || td_ef !== 0) {
        td_ji = "(" + td_Mc + "," + td_ef + "," + td_wM + "," + td_qQ.toString() + ")";
      }
      if (td_ji) {
        var td_A5 = td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(45, 6) + td_ji;
        var td_xt = td_0T + td_3i.tdz_2a8ced26f79044b1b75729b13eddbd5f.td_f(51, 10) + td_3i.td_2O(td_A5, td_2V);
        td_3m(td_xt, document);
      }
    }, function (td_ID) {});
  } catch (td_IS) {}
}
td_3i.tdz_71cb067a03394262b5a1a31abbc1cdd0 = new td_3i.td_0w("71cb067a03394262b5a1a31abbc1cdd00700515104030156080a525b57565354");
var td_2Y = function (td_My) {
  function td_z6(td_Ei) {
    return td_vW(td_ej(td_y4(td_Ei), td_Ei.length * 8));
  }
  function td_sO(td_Sx) {
    var td_J0 = td_3i.tdz_71cb067a03394262b5a1a31abbc1cdd0.td_f(0, 16);
    var td_Fg = "";
    var td_m0;
    for (var td_M0 = 0; td_M0 < td_Sx.length; td_M0++) {
      td_m0 = td_Sx.charCodeAt(td_M0);
      td_Fg += td_J0.charAt(td_m0 >>> 4 & 15) + td_J0.charAt(td_m0 & 15);
    }
    return td_Fg;
  }
  function td_rP(td_Os) {
    var td_ii = "";
    var td_p8 = -1;
    var td_yb, td_Xl;
    while (++td_p8 < td_Os.length) {
      td_yb = td_Os.charCodeAt(td_p8);
      td_Xl = td_p8 + 1 < td_Os.length ? td_Os.charCodeAt(td_p8 + 1) : 0;
      if (55296 <= td_yb && td_yb <= 56319 && 56320 <= td_Xl && td_Xl <= 57343) {
        td_yb = 65536 + ((td_yb & 1023) << 10) + (td_Xl & 1023);
        td_p8++;
      }
      if (td_yb <= 127) {
        td_ii += String.fromCharCode(td_yb);
      } else {
        if (td_yb <= 2047) {
          td_ii += String.fromCharCode(192 | td_yb >>> 6 & 31, 128 | td_yb & 63);
        } else {
          if (td_yb <= 65535) {
            td_ii += String.fromCharCode(224 | td_yb >>> 12 & 15, 128 | td_yb >>> 6 & 63, 128 | td_yb & 63);
          } else {
            if (td_yb <= 2097151) {
              td_ii += String.fromCharCode(240 | td_yb >>> 18 & 7, 128 | td_yb >>> 12 & 63, 128 | td_yb >>> 6 & 63, 128 | td_yb & 63);
            }
          }
        }
      }
    }
    return td_ii;
  }
  function td_y4(td_WL) {
    var td_NU = Array(td_WL.length >> 2);
    for (var td_Em = 0; td_Em < td_NU.length; td_Em++) {
      td_NU[td_Em] = 0;
    }
    for (td_Em = 0; td_Em < td_WL.length * 8; td_Em += 8) {
      td_NU[td_Em >> 5] |= (td_WL.charCodeAt(td_Em / 8) & 255) << td_Em % 32;
    }
    return td_NU;
  }
  function td_vW(td_ED) {
    var td_BT = "";
    for (var td_Wp = 0; td_Wp < td_ED.length * 32; td_Wp += 8) {
      td_BT += String.fromCharCode(td_ED[td_Wp >> 5] >>> td_Wp % 32 & 255);
    }
    return td_BT;
  }
  function td_ej(td_rt, td_iA) {
    td_rt[td_iA >> 5] |= 128 << td_iA % 32;
    td_rt[(td_iA + 64 >>> 9 << 4) + 14] = td_iA;
    var td_nz = 1732584193;
    var td_MX = -271733879;
    var td_zj = -1732584194;
    var td_nZ = 271733878;
    for (var td_R6 = 0; td_R6 < td_rt.length; td_R6 += 16) {
      var td_wn = td_nz;
      var td_jc = td_MX;
      var td_qA = td_zj;
      var td_p3 = td_nZ;
      td_nz = td_dz(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 0], 7, -680876936);
      td_nZ = td_dz(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 1], 12, -389564586);
      td_zj = td_dz(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 2], 17, 606105819);
      td_MX = td_dz(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 3], 22, -1044525330);
      td_nz = td_dz(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 4], 7, -176418897);
      td_nZ = td_dz(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 5], 12, 1200080426);
      td_zj = td_dz(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 6], 17, -1473231341);
      td_MX = td_dz(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 7], 22, -45705983);
      td_nz = td_dz(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 8], 7, 1770035416);
      td_nZ = td_dz(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 9], 12, -1958414417);
      td_zj = td_dz(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 10], 17, -42063);
      td_MX = td_dz(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 11], 22, -1990404162);
      td_nz = td_dz(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 12], 7, 1804603682);
      td_nZ = td_dz(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 13], 12, -40341101);
      td_zj = td_dz(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 14], 17, -1502002290);
      td_MX = td_dz(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 15], 22, 1236535329);
      td_nz = td_na(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 1], 5, -165796510);
      td_nZ = td_na(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 6], 9, -1069501632);
      td_zj = td_na(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 11], 14, 643717713);
      td_MX = td_na(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 0], 20, -373897302);
      td_nz = td_na(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 5], 5, -701558691);
      td_nZ = td_na(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 10], 9, 38016083);
      td_zj = td_na(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 15], 14, -660478335);
      td_MX = td_na(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 4], 20, -405537848);
      td_nz = td_na(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 9], 5, 568446438);
      td_nZ = td_na(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 14], 9, -1019803690);
      td_zj = td_na(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 3], 14, -187363961);
      td_MX = td_na(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 8], 20, 1163531501);
      td_nz = td_na(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 13], 5, -1444681467);
      td_nZ = td_na(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 2], 9, -51403784);
      td_zj = td_na(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 7], 14, 1735328473);
      td_MX = td_na(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 12], 20, -1926607734);
      td_nz = td_iH(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 5], 4, -378558);
      td_nZ = td_iH(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 8], 11, -2022574463);
      td_zj = td_iH(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 11], 16, 1839030562);
      td_MX = td_iH(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 14], 23, -35309556);
      td_nz = td_iH(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 1], 4, -1530992060);
      td_nZ = td_iH(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 4], 11, 1272893353);
      td_zj = td_iH(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 7], 16, -155497632);
      td_MX = td_iH(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 10], 23, -1094730640);
      td_nz = td_iH(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 13], 4, 681279174);
      td_nZ = td_iH(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 0], 11, -358537222);
      td_zj = td_iH(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 3], 16, -722521979);
      td_MX = td_iH(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 6], 23, 76029189);
      td_nz = td_iH(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 9], 4, -640364487);
      td_nZ = td_iH(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 12], 11, -421815835);
      td_zj = td_iH(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 15], 16, 530742520);
      td_MX = td_iH(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 2], 23, -995338651);
      td_nz = td_oc(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 0], 6, -198630844);
      td_nZ = td_oc(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 7], 10, 1126891415);
      td_zj = td_oc(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 14], 15, -1416354905);
      td_MX = td_oc(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 5], 21, -57434055);
      td_nz = td_oc(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 12], 6, 1700485571);
      td_nZ = td_oc(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 3], 10, -1894986606);
      td_zj = td_oc(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 10], 15, -1051523);
      td_MX = td_oc(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 1], 21, -2054922799);
      td_nz = td_oc(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 8], 6, 1873313359);
      td_nZ = td_oc(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 15], 10, -30611744);
      td_zj = td_oc(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 6], 15, -1560198380);
      td_MX = td_oc(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 13], 21, 1309151649);
      td_nz = td_oc(td_nz, td_MX, td_zj, td_nZ, td_rt[td_R6 + 4], 6, -145523070);
      td_nZ = td_oc(td_nZ, td_nz, td_MX, td_zj, td_rt[td_R6 + 11], 10, -1120210379);
      td_zj = td_oc(td_zj, td_nZ, td_nz, td_MX, td_rt[td_R6 + 2], 15, 718787259);
      td_MX = td_oc(td_MX, td_zj, td_nZ, td_nz, td_rt[td_R6 + 9], 21, -343485551);
      td_nz = td_AE(td_nz, td_wn);
      td_MX = td_AE(td_MX, td_jc);
      td_zj = td_AE(td_zj, td_qA);
      td_nZ = td_AE(td_nZ, td_p3);
    }
    return Array(td_nz, td_MX, td_zj, td_nZ);
  }
  function td_FL(td_FO, td_eu, td_UO, td_Kr, td_Fc, td_Xq) {
    return td_AE(td_zi(td_AE(td_AE(td_eu, td_FO), td_AE(td_Kr, td_Xq)), td_Fc), td_UO);
  }
  function td_dz(td_eD, td_FN, td_ue, td_T6, td_J8, td_ya, td_YE) {
    return td_FL(td_FN & td_ue | ~td_FN & td_T6, td_eD, td_FN, td_J8, td_ya, td_YE);
  }
  function td_na(td_pK, td_WC, td_ot, td_NB, td_Da, td_Va, td_Mh) {
    return td_FL(td_WC & td_NB | td_ot & ~td_NB, td_pK, td_WC, td_Da, td_Va, td_Mh);
  }
  function td_iH(td_tR, td_vR, td_zq, td_a4, td_Iq, td_dw, td_c1) {
    return td_FL(td_vR ^ td_zq ^ td_a4, td_tR, td_vR, td_Iq, td_dw, td_c1);
  }
  function td_oc(td_Np, td_rX, td_cJ, td_KX, td_In, td_YO, td_Gy) {
    return td_FL(td_cJ ^ (td_rX | ~td_KX), td_Np, td_rX, td_In, td_YO, td_Gy);
  }
  function td_AE(td_gV, td_nP) {
    var td_ai = (td_gV & 65535) + (td_nP & 65535);
    var td_jK = (td_gV >> 16) + (td_nP >> 16) + (td_ai >> 16);
    return td_jK << 16 | td_ai & 65535;
  }
  function td_zi(td_dS, td_pY) {
    return td_dS << td_pY | td_dS >>> 32 - td_pY;
  }
  return td_sO(td_z6(td_rP(td_My)));
};
td_3i.tdz_3692b81e657043cab339c29e426be9e4 = new td_3i.td_0w("3692b81e657043cab339c29e426be9e4445f57560d4f42125f5b5e405c5c0d044d5a4356075b56165953550d07530057475a505c1740500b5247585950561b110e5c415c115b5c");
function td_S3(td_3b) {
  var td_qS = td_3b.toLowerCase();
  if (td_qS === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(0, 7)) {
    td_qS = td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(7, 3);
  } else {
    if (td_qS === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(10, 11) || td_qS === Number(333541).toString(26)) {
      td_qS = td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(21, 3);
    }
  }
  this.os_name = td_qS;
  this._eq = function (td_3b) {
    return td_3b === this.os_name;
  };
  this._ne = function (td_3b) {
    return td_3b !== this.os_name;
  };
  this._gt = function (td_3b) {
    return this.os_name > td_3b;
  };
  this._ge = function (td_3b) {
    return this.os_name >= td_3b;
  };
  this._lt = function (td_3b) {
    return this.os_name < td_3b;
  };
  this._le = function (td_3b) {
    return this.os_name <= td_3b;
  };
  this._in = function (td_3b) {
    var td_IH = td_qS.constructor === String ? [td_qS] : td_qS;
    var td_ts;
    for (td_ts = 0; td_ts < td_IH.length; td_ts++) {
      if (this.os_name === td_IH[td_ts]) {
        return true;
      }
    }
    return false;
  };
  this.getFontsList = function () {
    if (this.os_name === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(24, 3)) {
      return typeof td_2L === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(27, 6) ? td_2L : [];
    }
    if (this.os_name === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(33, 5)) {
      return typeof td_1m === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(27, 6) ? td_1m : [];
    }
    if (this.os_name === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(7, 3)) {
      return typeof td_0z === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(27, 6) ? td_0z : [];
    }
    if (this.os_name === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(21, 3)) {
      return typeof td_1a === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(27, 6) ? td_1a : [];
    }
    if (this.os_name === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(38, 7)) {
      return typeof td_3z === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(27, 6) ? td_3z : [];
    } else {
      return [];
    }
  };
}
function td_Cz(td_3c) {
  var td_yh = td_3c.toLowerCase();
  if (td_yh === td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(45, 8)) {
    td_yh = td_3i.tdz_3692b81e657043cab339c29e426be9e4.td_f(53, 2);
  }
  this.browser_name = td_yh;
  this._eq = function (td_3c) {
    return td_3c === this.browser_name;
  };
  this._ne = function (td_3c) {
    return td_3c !== this.browser_name;
  };
  this._in = function (td_3c) {
    var td_Dh = td_3c.constructor === String ? [td_3c] : td_3c;
    var td_kC;
    for (td_kC = 0; td_kC < td_Dh.length; td_kC++) {
      if (this.browser_name === td_Dh[td_kC]) {
        return true;
      }
    }
    return false;
  };
}
function td_CZ(td_Bk) {
  this.version = td_Bk;
  this._eq = function (td_gs) {
    return this.version === parseInt(td_gs);
  };
  this._ne = function (td_av) {
    return this.version !== parseInt(td_av);
  };
  this._gt = function (td_PR) {
    return this.version > parseInt(td_PR);
  };
  this._ge = function (td_cn) {
    return this.version >= parseInt(td_cn);
  };
  this._lt = function (td_Cl) {
    return this.version < parseInt(td_Cl);
  };
  this._le = function (td_Sq) {
    return this.version <= parseInt(td_Sq);
  };
}
td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169 = new td_3i.td_0w("0d6c16631a214b4eb51e972c2a60e16953055815504504577123405e43115117114b14035059552462335f5e111510150c07570d4757450d09114a1175105d040e040315411773115b005a5d045653574405064d0407180343045658590353004d455f02");
var td_3i = td_3i || {};
function td_0b() {
  try {
    var td_j2 = document.createElement(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(0, 6));
    if (!td_j2) {
      return null;
    }
    if (!td_j2.getContext) {
      return null;
    }
    var td_p4 = td_j2.getContext(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(6, 2));
    if (!td_p4) {
      return null;
    }
    if (!td_p4.font || !td_p4.fillText) {
      return null;
    }
    td_j2.width = 300;
    td_j2.height = 100;
    td_p4 = td_j2.getContext(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(6, 2));
    var td_Di = td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(8, 32);
    td_p4.font = td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(40, 9);
    td_p4.fillText(td_Di, 0, 50);
    td_p4.font = td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(49, 10);
    var td_KW = td_p4.createLinearGradient(0, 0, td_j2.width, 0);
    td_KW.addColorStop("0", td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(59, 7));
    td_KW.addColorStop(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(66, 3), Number(348826).toString(31));
    td_KW.addColorStop(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(69, 3), td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(72, 3));
    td_p4.fillStyle = td_KW;
    td_p4.fillText(td_Di, 0, 90);
    var td_Qt = td_j2.toDataURL(td_3i.tdz_0d6c16631a214b4eb51e972c2a60e169.td_f(75, 9));
    if (!td_Qt) {
      return null;
    }
    return td_1A(td_Qt);
  } catch (td_OP) {
    return null;
  }
}
td_3i.tdz_d05391657ecf412c82c291786051ea0f = new td_3i.td_0w("d05391657ecf412c82c291786051ea0f114350134a45445c5411261e445d5d115d402a771955585d455e124545165f140f6576714b5e41465217362576435d144b5711125a5054505310545206044012445850525d54444664040507465861025e53115b19081a185551565900415105075545471959535453001115737466225b5106424d1b18121a10");
var td_3i = td_3i || {};
function td_pK() {
  td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(0, 10);
  var td_rL = [[td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(10, 8), 0, td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(18, 15)], [td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(33, 9), 0, td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(42, 30)], [td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(72, 6), 9, td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(78, 30)]];
  try {
    for (var td_og = 0; td_og < td_rL.length; td_og++) {
      var td_RO = td_rL[td_og][0];
      var td_DZ = td_rL[td_og][1];
      if (td_1f.td_2u !== td_RO) {
        continue;
      }
      if (td_DZ === 0) {
        return false;
      }
      var td_It = parseInt(td_1f.td_1I);
      if (td_It && td_DZ < td_It) {
        return true;
      }
      return false;
    }
  } catch (td_WI) {
    return false;
  }
  return true;
}
function td_1C() {
  td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(0, 10);
  var td_cV = td_3i.td_3U();
  if (!td_pK() || !td_cV) {
    return false;
  }
  try {
    var td_b3 = td_0C + "/" + td_2U + td_2V;
    td_b3 = td_b3.replace(/[\r\n]/g, "");
    td_cV.open(td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(108, 3), td_4J, true);
    td_cV.setRequestHeader(td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(111, 6), td_3i.tdz_d05391657ecf412c82c291786051ea0f.td_f(117, 5) + td_b3);
    td_cV.send(null);
    return true;
  } catch (td_dI) {
    return false;
  }
  return false;
}
var td_3i = td_3i || {};
td_3i.td_4z = function () {};
td_3i.hasDebug = false;
td_3i.trace = function () {};
td_3i.hasTrace = false;
td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8 = new td_3i.td_0w("968dfa45f55e4917b03ab9c9d3bd2af876666a2b160446542945501755197c5e0c597605055c2641145f0d165713235c5e197d0001385577145a4216514b68560c54561931580e4a115d0526400e114b5c446d2724135b42155047265c4b5e5a077f5e0f0b6e065b2b5e0c0d650404177f4e512b35275d4703535a1d774b587831685a000d740a16295a170d7013094f4a534a2516115850355453044650675210435a0e0c50205806782621790e08494c534a0b142255580f5b5a2b514d42540340562c31702670217e0d065b0d036c4b5f5c01081546432150560e5b745e4d0b5c5f0035500d6e0d5d060b45122b595a61510a020e434646655d0a5a5c705906425c080676135c0a713120611408776a7a510a1319145414584352587558591748710d035a087b0141101d5b310e57575351340e0e5a50495c650a50506156067c5a0f17414358165e2e0d5c141e1858574a070e365d5b025a4216140801600b5e570e154a43014a02350d5c05094f4a1600330f0f505a1146155263505f530d4740413450104d05640b0a560e114b19655d16100446155405055663505f530d4740413a6934500a570d134141540809066f0d08055b421515782063505f530d4740415b0134500a570d1341415f0d6e5f560009164715286115511a09665e0c545c161119207c335a0c005d1615180a1809552b0057152966153d795852172d6364080c5d0c4e1713320c5d0f03180f1808330f0f505a114615355c565f5242071d5135500d5d0b441144620909565c16004a56365d5b025a4216146959580c5513594c0834500a570d134141365056585d4457511a05135b5e0b5b4e5f5e2d63130811190d561013034444000a515d166d362a3a5b570c505611146a505103425a3307540c4d017d0d105b070f5b5842510b083c47540054470c564b5041070a1c4e204b024f01560603575b4917");
var td_3i = td_3i || {};
var td_1f = {td_1G: function () {
  if (typeof navigator !== [][[]] + "") {
    this.td_e(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
  }
}, td_e: function (td_D, td_s, td_H, td_F, td_W) {
  this.td_a = [{string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(0, 3), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(0, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(3, 5)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(8, 10), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(8, 10), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(8, 10)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(18, 4), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(18, 4), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(22, 8)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(30, 4), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(34, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(22, 8)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(37, 9), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(37, 9), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(46, 6)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(52, 14), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(52, 14)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(66, 9), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(66, 9)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(75, 6), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(75, 6)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(81, 7), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(88, 8), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(81, 7)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(96, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(101, 7), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(96, 5)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(108, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(75, 6), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(108, 5)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(113, 18), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(113, 18), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(113, 18)}, {string: td_s, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(131, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(136, 6), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(142, 7)}, {prop: td_W, identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(3, 5), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(142, 7)}, {string: td_s, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(149, 4), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(149, 4)}, {string: td_s, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(153, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(156, 9)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(101, 7), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(101, 7)}, {string: td_s, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(165, 6), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(165, 6)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(171, 8), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(171, 8)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(179, 4), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(22, 8), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(179, 4)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(183, 8), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(183, 8), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(183, 8)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(191, 7), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(22, 8), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(198, 2)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(200, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(205, 7), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(198, 2)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(205, 7), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(171, 8), versionSearch: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(205, 7)}];
  this.td_f = [{string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(212, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(215, 7)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(222, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(222, 3)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(225, 13), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(225, 13)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(245, 7), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(245, 7)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(252, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(252, 5)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(257, 12), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(269, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(269, 5)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(274, 10), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(274, 10)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(284, 6), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(290, 11)}, {string: td_D, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4)}];
  this.td_b = [{string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(212, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(215, 7)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(222, 3), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(222, 3)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(305, 9), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(314, 11), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(269, 5), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(269, 5)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(274, 10), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(274, 10)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(284, 6), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(284, 6)}, {string: td_H, subString: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4), identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4)}];
  this.td_U = [{identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(215, 7), versionMap: [{s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(325, 10), r: /(Windows 10.0|Windows NT 10.0)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(335, 11), r: /(Windows 8.1|Windows NT 6.3)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(346, 9), r: /(Windows 8|Windows NT 6.2)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(355, 9), r: /(Windows 7|Windows NT 6.1)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(364, 13), r: /Windows NT 6.0/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(377, 19), r: /Windows NT 5.2/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(396, 10), r: /(Windows NT 5.1|Windows XP)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(406, 12), r: /(Windows NT 5.0|Windows 2000)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(418, 10), r: /(Win 9x 4.90|Windows ME)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(428, 10), r: /(Windows 98|Win98)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(438, 10), r: /(Windows 95|Win95|Windows_95)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(448, 14), r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(462, 10), r: /Windows CE/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(472, 12), r: /Win16/}]}, {identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(222, 3), versionMap: [{s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(484, 8), r: /Mac OS X/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(492, 6), r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}]}, {identity: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(225, 13), versionMap: [{s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(498, 17), r: /Windows Phone 6.0/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(515, 17), r: /Windows Phone 7.0/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(532, 17), r: /Windows Phone 8.0/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(549, 17), r: /Windows Phone 8.1/}, {s: td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(566, 18), r: /Windows Phone 10.0/}]}];
  this.td_2E = typeof window.orientation !== [][[]] + "";
  this.td_0A = this.td_I(this.td_b) || td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
  this.td_3n = this.td_u(this.td_2E, this.td_0A) || td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
  this.td_2u = this.td_I(this.td_a) || td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
  this.td_1I = this.td_h(this.td_2u, td_D) || this.td_h(this.td_2u, td_F) || td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
  this.td_0y = this.td_I(this.td_f) || td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
  this.td_1E = this.td_t(this.td_U, this.td_0y, td_D, td_F) || this.td_0y;
}, td_t: function (td_O, td_K, td_W, td_c) {
  var td_X = td_W;
  var td_Y = td_c;
  var td_G = td_K;
  var td_g;
  for (var td_Z = 0; td_Z < td_O.length; td_Z++) {
    if (td_O[td_Z].identity === td_K) {
      for (var td_L = 0; td_L < td_O[td_Z].versionMap.length; td_L++) {
        var td_V = td_O[td_Z].versionMap[td_L];
        if (td_V.r.test(td_X)) {
          td_G = td_V.s;
          if (/Windows/.test(td_G)) {
            return td_G;
          }
          break;
        }
      }
      break;
    }
  }
  switch (td_G) {
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(484, 8):
      td_G = null;
      var td_i = /(Mac OS X 10[\.\_\d]+)/.exec(td_X);
      if (td_i !== null && td_i.length >= 1) {
        td_G = td_i[1];
      }
      break;
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(238, 7):
      td_G = null;
      var td_r = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_X);
      if (td_r !== null && td_r.length >= 1) {
        td_G = td_r[1];
      }
      break;
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4):
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(284, 6):
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(290, 11):
      td_G = null;
      td_g = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_Y);
      if (td_g !== null) {
        var td_C = td_g.length >= 1 ? td_g[1] : td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
        var td_w = td_g.length >= 2 ? td_g[2] : td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(584, 7);
        var td_T = td_g.length >= 3 ? td_g[3] | "0" : "0";
        td_G = td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(591, 4) + td_C + "." + td_w + "." + td_T;
      }
      break;
    default:
      return null;
  }
  return td_G;
}, td_I: function (td_s) {
  for (var td_m = 0; td_m < td_s.length; td_m++) {
    var td_g = td_s[td_m].string;
    var td_Y = td_s[td_m].prop;
    this.versionSearchString = td_s[td_m].versionSearch || td_s[td_m].identity;
    if (td_g) {
      if (td_g.indexOf(td_s[td_m].subString) !== -1) {
        return td_s[td_m].identity;
      }
    } else {
      if (td_Y) {
        return td_s[td_m].identity;
      }
    }
  }
}, td_h: function (td_E, td_B) {
  if (!td_E) {
    return null;
  }
  var td_g;
  switch (td_E) {
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(136, 6):
      var td_Y = /\WVersion[^\d]([\.\d]+)/.exec(td_B);
      if (td_Y !== null && td_Y.length >= 1) {
        td_g = td_Y[1];
      }
      break;
    case td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(3, 5):
      if (this.versionSearchString === td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(0, 3)) {
        var td_V = /\WOPR[^\d]*([\.\d]+)/.exec(td_B);
        if (td_V !== null && td_V.length >= 1) {
          td_g = td_V[1];
        }
        break;
      }
    default:
      var td_d = td_B.indexOf(this.versionSearchString);
      if (td_d !== -1) {
        td_g = td_B.substring(td_d + this.versionSearchString.length + 1);
      }
      break;
  }
  if (td_g) {
    return parseFloat(td_g);
  }
  return null;
}, td_A: function (td_E) {
  var td_R = null;
  try {
    td_R = new Worker(td_E);
  } catch (td_i) {
    if (td_R !== null && typeof td_R.terminate !== [][[]] + "") {
      td_R.terminate();
    }
    return td_i.toString().indexOf(td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(595, 18)) !== -1;
  }
  return false;
}, td_u: function (isMobile, osNoUA) {
  var psc = this.td_A;
  try {
    var check = typeof window.opr !== [][[]] + "" && typeof td_P.addons !== [][[]] + "" || typeof window.opera !== [][[]] + "";
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(3, 5);
    }
    check = typeof InstallTrigger !== [][[]] + "";
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(101, 7);
    }
    check = /constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(613, 33);
    }(!window[td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(646, 6)] || typeof safari !== [][[]] + "" && safari.pushNotification);
    check = typeof window.safari !== [][[]] + "";
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(136, 6);
    }
    check = false || typeof document.documentMode !== [][[]] + "";
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(22, 8);
    }
    if (!check && typeof window.StyleMedia !== [][[]] + "") {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(18, 4);
    }
    if (psc(td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(652, 8))) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(660, 5);
    }
    if (psc(td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(665, 7))) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(18, 4);
    }
    check = typeof window.chrome !== [][[]] + "" && typeof window.yandex == [][[]] + "" && (typeof window.chrome.webstore !== [][[]] + "" || typeof window.chrome.runtime !== [][[]] + "" || typeof window.chrome.loadTimes !== [][[]] + "");
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(75, 6);
    }
    if (isMobile) {
      check = typeof window.chrome !== [][[]] + "" && typeof window.chrome.Benchmarking !== [][[]] + "";
      if (check) {
        return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(52, 14);
      }
      check = typeof window.ucapi !== [][[]] + "";
      if (check) {
        return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(66, 9);
      }
    }
    if (osNoUA === td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(284, 6) || osNoUA === td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(301, 4)) {
      if (typeof navigator.serviceWorker !== [][[]] + "") {
        return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(136, 6);
      }
      if (typeof window.$jscomp !== [][[]] + "") {
        return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(75, 6);
      }
    }
    check = typeof window.chrome !== [][[]] + "" && typeof window.yandex !== [][[]] + "";
    if (check) {
      return td_3i.tdz_968dfa45f55e4917b03ab9c9d3bd2af8.td_f(46, 6);
    }
  } catch (err) {}
  return null;
}, td_a: {}, td_f: {}, td_b: {}, td_U: {}};
td_3i.tdz_544d524880a3441ab00f6f131f9519a8 = new td_3i.td_0w("544d524880a3441ab00f6f131f9519a8135e56595943091e52515c4647511112164259054208445e53034b76594b0e55507b44014753125e0516054346091700040d16154e1f0c155c1204135c575c1e4209120708144e051e43025709125d095f4344145f0856155514041341044748590912145d0f1250500d145d5f5a5e160c165a15595b1759420404135b4a0e4d08125e175747091e52430c460940431407165e0e555b175d550b041345430505135955105d40091e5d48520e12535d3e010d16015a39590e17055a510c");
var td_3i = td_3i || {};
var td_MW = 255;
function td_2X() {
  td_3b = new td_S3(td_1f.td_0y);
  td_3c = new td_Cz(td_1f.td_2u);
  td_4H = new td_CZ(td_1f.td_1I);
  var td_co = "";
  try {
    td_co += td_bI();
  } catch (td_si) {}
  try {
    td_co += td_yf();
  } catch (td_si) {}
  var td_ee = navigator.userAgent ? td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(0, 4) + td_3i.td_2O(td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(4, 3) + encodeURIComponent(navigator.userAgent), td_2V) : "";
  var td_BO = td_0P + td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(7, 4) + td_3i.td_2O(td_co, td_2V) + td_ee;
  if (typeof td_1M !== [][[]] + "") {
    var td_c2 = function () {
      setTimeout(function () {
        td_1M(td_2V);
      }, 2e3);
    };
  }
  td_3m(td_BO, document, td_c2);
}
function td_SO(td_jZ) {
  td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(11, 10);
  try {
    if (typeof td_jZ !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(21, 6) || td_jZ <= 0) {
      td_jZ = 1;
    } else {
      if (!td_1f.td_2E) {
        if (td_1f.td_2u === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(27, 6) || td_1f.td_2u === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(33, 5)) {
          td_jZ = Math.floor(td_jZ);
          if (td_jZ <= 0) {
            td_jZ = 1;
          }
        }
      }
    }
  } catch (td_vU) {}
  return td_jZ;
}
function td_Yy(td_me, td_Fj) {
  td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(11, 10);
  var td_NZ = td_me * td_Fj;
  try {
    if (td_Fj % 1 === 0) {
      return td_NZ;
    }
    td_NZ = Math.round(td_NZ);
    for (var td_RP = td_NZ - 2; td_RP < td_NZ + 2; td_RP++) {
      if (td_RP % 10 === 0) {
        return td_RP;
      }
    }
  } catch (td_on) {}
  return td_NZ;
}
function td_Xx() {
  try {
    var td_um = 1;
    if (window && window.devicePixelRatio) {
      td_um = window.devicePixelRatio;
    }
    td_um = td_SO(td_um);
    var td_Lz = 0;
    var td_KE = 0;
    var td_rK = 0;
    var td_db = 0;
    if (screen && screen.width && screen.height) {
      td_Lz = screen.width;
      td_KE = screen.height;
    } else {
      if (window && window.screen.width && window.screen.height) {
        td_Lz = window.screen.width;
        td_KE = window.screen.height;
      }
    }
    var td_zC = td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(38, 3) + td_Yy(td_Lz, td_um) + "x" + td_Yy(td_KE, td_um) + td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(41, 5) + td_um + "," + td_Lz + "x" + td_KE;
    if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
      td_rK = window.screen.availWidth * td_um;
      td_db = window.screen.availHeight * td_um;
    }
    if (td_rK !== 0 && td_db !== 0) {
      td_zC += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(46, 4) + td_rK + "x" + td_db;
    }
    if (typeof window !== [][[]] + "" && typeof window.screenX !== [][[]] + "" && typeof window.screenY !== [][[]] + "") {
      var td_eE = window.screenX * td_um;
      var td_Eu = window.screenY * td_um;
      td_zC += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(50, 5) + td_eE + "x" + td_Eu;
    }
    return td_zC;
  } catch (td_xc) {}
  return "";
}
function td_bI() {
  var td_Sn = new Date;
  td_Sn.setDate(1);
  td_Sn.setMonth(5);
  var td_Fh = -td_Sn.getTimezoneOffset();
  td_Sn.setMonth(11);
  var td_Y9 = -td_Sn.getTimezoneOffset();
  var td_Ad = Math.min(td_Fh, td_Y9);
  var td_ta = Math.max(td_Fh, td_Y9) - td_Ad;
  var td_tp = td_l9 ? td_l9.length : 0;
  var td_uv = [];
  for (var td_J2 = 0; td_J2 < td_tp; td_J2++) {
    td_uv[td_J2] = td_l9[td_J2].type;
  }
  var td_O8 = td_tp > 0 ? td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(55, 4) + td_2Y(td_uv.join()) + td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(59, 4) + td_tp : "";
  var td_Lr = "";
  if (td_3E !== null) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(63, 3) + td_3E;
  }
  td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(66, 3) + td_Ad + td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(69, 3) + td_ta + td_Xx() + td_O8;
  td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(72, 5) + screen.colorDepth;
  td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(77, 4) + encodeURIComponent(location.href.substring(0, td_MW));
  var td_Ej = encodeURIComponent(document.referrer.substring(0, td_MW));
  if (typeof td_4l === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(81, 6) && td_4l.length > 0 && window !== window.top && td_Ej.length === 0) {
    td_Ej = td_4l;
  }
  td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(87, 4) + td_Ej;
  var td_rW = td_zw();
  if (td_rW !== null) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(91, 3) + td_rW;
  }
  var td_Cx = navigator.plugins;
  if (td_Cx.length) {
    var td_Zr = td_Cx.length;
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(94, 4) + td_Zr;
    var td_ex;
    for (td_J2 = 0; td_J2 < td_Zr; td_J2++) {
      td_ex += td_Cx[td_J2].name + td_Cx[td_J2].description + td_Cx[td_J2].filename + td_Cx[td_J2].length;
    }
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(98, 4) + td_2Y(td_ex);
  }
  td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(102, 4) + td_2Y(td_0C + td_2V);
  if (td_1f.td_1E !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(106, 7)) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(113, 5) + encodeURIComponent(td_1f.td_1E);
  }
  if (td_1f.td_2u !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(106, 7)) {
    if (td_1f.td_1I !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(106, 7)) {
      td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(118, 5) + encodeURIComponent(td_1f.td_2u + " " + td_1f.td_1I);
    } else {
      td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(118, 5) + encodeURIComponent(td_1f.td_2u);
    }
  }
  if (td_1f.td_0A !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(106, 7)) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(123, 6) + encodeURIComponent(td_1f.td_0A);
  }
  if (td_1f.td_3n !== td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(106, 7)) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(129, 6) + encodeURIComponent(td_1f.td_3n);
  }
  if (td_1f.td_2E === true) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(135, 10);
  }
  if (typeof navigator !== [][[]] + "") {
    if (typeof navigator.hardwareConcurrency === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(21, 6)) {
      td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(145, 5) + navigator.hardwareConcurrency;
    }
    if (typeof navigator.deviceMemory === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(21, 6)) {
      td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(150, 5) + navigator.deviceMemory;
    }
  }
  if (typeof Intl !== [][[]] + "" && typeof Intl.DateTimeFormat !== [][[]] + "") {
    var td_el = Intl.DateTimeFormat();
    if (td_el !== null && typeof td_el !== [][[]] + "" && typeof td_el.resolvedOptions !== [][[]] + "") {
      var td_DZ = td_el.resolvedOptions();
      if (td_DZ !== null && typeof td_DZ.timeZone === td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(81, 6) && td_DZ.timeZone.length > 0) {
        td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(155, 5) + encodeURIComponent(td_DZ.timeZone);
      }
    }
  }
  var td_Vv = td_2a();
  if (td_Vv) {
    td_Lr += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(160, 7) + encodeURIComponent(td_Vv);
  }
  if (typeof td_1C === [][[]] + "" || !td_1C()) {
    td_4w(td_4J, document);
  }
  return td_Lr;
}
var td_iC = [];
var td_i7;
function td_yf() {
  var td_Vk = "";
  if (typeof td_0b !== [][[]] + "") {
    var td_qi = td_0b();
    if (td_qi) {
      td_Vk += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(167, 5) + td_qi;
    }
  }
  if (typeof td_0c !== [][[]] + "") {
    var td_CE = td_0c();
    if (td_CE) {
      td_Vk += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(172, 6) + encodeURIComponent(td_CE) + td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(178, 6) + td_1A(td_CE);
    }
  }
  if (typeof td_0o !== [][[]] + "") {
    var td_Mf = td_0o();
    if (td_Mf) {
      td_Vk += td_Mf;
    }
  }
  if (typeof td_3t !== [][[]] + "") {
    td_3t();
  }
  if (typeof td_0H !== [][[]] + "") {
    td_0H();
  }
  if (typeof td_2S !== [][[]] + "") {
    td_2S();
  }
  if (typeof td_2f !== [][[]] + "") {
    td_2f();
  }
  if (typeof td_1X !== [][[]] + "") {
    td_1X();
  }
  if (typeof td_1R !== [][[]] + "") {
    td_1R();
  }
  if (typeof td_2N !== [][[]] + "") {
    td_2N();
  }
  if (typeof td_1D !== [][[]] + "") {
    if (typeof td_4q !== [][[]] + "") {
      td_1D.addFeature(new td_4q);
    }
    if (typeof td_4d !== [][[]] + "") {
      td_1D.addFeature(new td_4d);
    }
    if (typeof td_4C !== [][[]] + "") {
      td_1D.addFeature(new td_4C);
    }
    if (typeof td_3e !== [][[]] + "") {
      td_1D.addFeature(new td_3e);
    }
  }
  if (typeof td_0B !== [][[]] + "") {
    if (typeof td_4s !== [][[]] + "") {
      td_0B.addFeature(new td_4s);
    }
    if (typeof td_4r !== [][[]] + "") {
      td_0B.addFeature(new td_4r);
    }
  }
  if (typeof td_2v !== [][[]] + "") {
    td_2v();
  }
  if (typeof td_1N !== [][[]] + "") {
    td_iC[new td_1N(td_4G, td_0S, td_4L)];
  }
  if (typeof td_3k !== [][[]] + "") {
    td_iC[new td_3k];
  }
  if (typeof td_0D !== [][[]] + "") {
    td_iC[new td_0D(td_4Q, td_3N, td_4k)];
  }
  if (typeof td_4X !== [][[]] + "") {
    td_iC[new td_4X(td_0x, td_3H, td_4t)];
  }
  if (typeof td_1k !== [][[]] + "") {
    td_iC[new td_1k(td_3C, td_1J, td_2q)];
  }
  if (typeof td_2l !== [][[]] + "" && typeof Object.create !== [][[]] + "" && typeof String.prototype.toUpperCase !== [][[]] + "") {
    td_iC[new td_2l(td_0t, td_3Q, td_3p)];
  }
  if (typeof td_1z !== [][[]] + "") {
    td_iC[new td_1z(td_4T, td_0r, td_2p)];
  }
  if (typeof td_1K !== [][[]] + "") {
    td_1K();
  }
  if (typeof td_2o !== [][[]] + "") {
    td_iC[new td_2o];
  }
  if (typeof td_1i !== [][[]] + "") {
    var td_WW = td_1i();
    if (td_WW !== null) {
      td_Vk += td_WW;
    }
  }
  if (typeof td_3A !== [][[]] + "") {
    td_3A();
  }
  if (td_2k.length > 0) {
    td_i7 = new td_2b(td_1f.td_0y, td_1f.td_2u, td_2k);
    if (td_i7.isValid()) {
      td_i7.scan();
    }
  }
  td_3i.load_iframe(td_3V, td_0E, document);
  if (typeof td_1Q !== [][[]] + "") {
    td_1Q();
  }
  if (typeof td_3i.td_0g !== [][[]] + "") {
    td_3i.td_0g();
  }
  if (typeof td_2z !== [][[]] + "") {
    var td_uB = td_2z();
    if (td_uB) {
      td_Vk += td_3i.tdz_544d524880a3441ab00f6f131f9519a8.td_f(184, 5) + td_uB;
    }
  }
  return td_Vk;
}
td_3i.tdz_20e5f684bf5041c69164585940ba1713 = new td_3i.td_0w("20e5f684bf5041c69164585940ba1713465d1d1802544c591a4b465950450e4e14425f500451514b5151060e5f5b484457525f5005524b552725716375614e040c076467746b66781960292262061c45036f50662e77150657504255560b114558435355514f4750405508165a405451084216540c41534417045e554d420a514b5f525a5a56565c040052530207425a566f175b020b1e470b026a545545060b1f425f506a4c4c49510d441258536e5857495813155f5c6b110f520d12420a504b0c07124651534b0900440b570a");
var td_3i = td_3i || {};
if (typeof td_3i.td_4j === [][[]] + "") {
  td_3i.td_4j = [];
}
var td_db = td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(0, 6);
var td_Yo = td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(6, 7);
var td_Qx = td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(13, 8);
var td_yM = window.crypto || window.msCrypto;
var td_ZJ = typeof td_yM !== [][[]] + "" ? td_yM.subtle || td_yM.webkitSubtle : null;
var td_fW = false;
function td_1X() {
  try {
    var td_Ap = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    if (!td_yM || !td_ZJ || !td_Ap) {
      return;
    }
    var td_Qs = td_Ap.open(td_db, 1);
    td_Qs.onupgradeneeded = function () {
      td_Qs.result.createObjectStore(td_Yo, {keyPath: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(21, 2)});
    };
    td_Qs.onsuccess = function () {
      td_u4(td_Qs.result);
    };
    td_Qs.onerror = function (td_ED) {};
  } catch (td_MA) {}
}
function td_u4(td_Ij) {
  var td_yx = td_Ij.transaction(td_Yo, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(23, 8));
  var td_tG = td_yx.objectStore(td_Yo);
  var td_yI = td_tG.get(td_Qx);
  td_yI.onsuccess = function () {
    if (td_yI.result === undefined || td_yI.result === null || td_yI.result.privateKey === null || td_yI.result.publicKey === null || td_yI.result.createTime === null || td_yI.result.type === null) {
      td_uS(td_Ij, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9));
    } else {
      td_bj(td_yI.result.privateKey, td_yI.result.publicKey, td_tX(td_yI.result.createTime, td_yI.result.type));
    }
  };
}
function td_uS(td_Jv, td_V1) {
  try {
    var td_AI;
    if (td_V1 === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
      td_AI = td_ZJ.generateKey({name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(40, 5), namedCurve: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(45, 5)}, false, [Number(698517).toString(29)]);
    } else {
      td_AI = td_ZJ.generateKey({name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(50, 17), modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: {name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(67, 7)}}, false, [Number(698517).toString(29)]);
    }
    if (typeof td_AI.then !== [][[]] + "") {
      td_AI.then(function (td_CI) {
        td_zk(td_Jv, td_CI, td_V1);
      }, function (td_DE) {
        if (td_V1 === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
          td_uS(td_Jv, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(74, 7));
        }
      });
    } else {
      td_AI.oncomplete = function (td_gT) {
        td_zk(td_Jv, td_gT.target.result, td_V1);
      };
      td_AI.onerror = function (td_YA) {
        if (td_V1 === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
          td_uS(td_Jv, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(74, 7));
        }
      };
    }
  } catch (td_ru) {
    if (td_V1 === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
      td_uS(td_Jv, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(74, 7));
    }
  }
}
function td_zk(td_LO, td_DT, td_DQ) {
  try {
    var td_lL = td_LO.transaction(td_Yo, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(81, 9));
    var td_Ff = td_lL.objectStore(td_Yo);
    var td_ly = Math.floor(td_g() / 1e3);
    var td_r5 = td_Ff.put({id: td_Qx, publicKey: td_DT.publicKey, privateKey: td_DT.privateKey, createTime: td_ly, type: td_DQ});
    td_r5.onsuccess = function () {
      td_bj(td_DT.privateKey, td_DT.publicKey, td_tX(td_ly, td_DQ));
    };
    td_r5.onerror = function () {
      if (td_DQ === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
        td_uS(td_LO, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(74, 7));
      }
    };
  } catch (td_lC) {
    if (td_DQ === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
      td_uS(td_LO, td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(74, 7));
    }
  }
}
function td_tX(td_pW, td_Af) {
  var td_wF = td_fW ? td_2W : td_3o;
  return {rnd: td_3X(16), nonce: td_wF, date: td_pW, type: td_Af};
}
function td_xp(td_cL, td_E4) {
  try {
    return td_ZJ.exportKey(td_cL, td_E4);
  } catch (td_BS) {
    return null;
  }
}
function td_bj(td_rZ, td_ha, td_ag) {
  var td_CA = td_xp(Number(704515).toString(29), td_ha);
  if (td_CA === null) {
    td_CA = td_xp(td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(90, 3), td_ha);
    td_ag[Number(1285914).toString(35)] = td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(93, 10);
  }
  if (td_CA === null || typeof td_CA === [][[]] + "") {
    return;
  }
  if (typeof td_CA.then !== [][[]] + "") {
    td_CA.then(function (td_Yc) {
      td_ag[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(103, 6)] = td_kO(td_Yc);
      td_Ri(td_rZ, td_ag);
    });
  } else {
    td_CA.oncomplete = function (td_vp) {
      td_ag[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(103, 6)] = td_kO(td_vp.target.result);
      td_Ri(td_rZ, td_ag);
    };
  }
}
function td_Ri(td_W4, td_dl) {
  try {
    var td_RM;
    if (td_dl[Number(1285914).toString(35)] === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
      td_RM = td_ZJ.sign({name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(40, 5), hash: {name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(67, 7)}}, td_W4, td_Ft(td_dl));
    } else {
      td_RM = td_ZJ.sign({name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(50, 17), hash: {name: td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(67, 7)}}, td_W4, td_Ft(td_dl));
    }
    if (typeof td_RM.then !== [][[]] + "") {
      td_RM.then(function (td_SY) {
        if (td_dl[Number(1285914).toString(35)] === td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(31, 9)) {
          td_dl[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(109, 3)] = td_h4(td_LJ(td_kO(td_SY.slice(0, 32))) + td_LJ(td_kO(td_SY.slice(32, 64))));
        } else {
          td_dl[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(109, 3)] = td_kO(td_SY);
        }
        td_pv(td_dl);
      }, function (td_XO) {});
    } else {
      td_RM.oncomplete = function (td_bn) {
        td_dl[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(109, 3)] = td_kO(td_bn.target.result);
        td_pv(td_dl);
      };
    }
  } catch (td_ma) {}
}
function td_Ft(td_Oq) {
  var td_pd = [];
  var td_aG = td_Oq[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(112, 3)] + td_Oq[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(115, 5)] + td_Oq[Number(360884).toString(30)] + td_Oq[Number(1285914).toString(35)];
  for (var td_lF = 0; td_lF < td_aG.length; td_lF++) {
    td_pd.push(td_aG.charCodeAt(td_lF));
  }
  return new Uint8Array(td_pd);
}
function td_kO(td_Dz) {
  return Array.prototype.map.call(new Uint8Array(td_Dz), td_KS).join("");
}
function td_KS(td_F1) {
  return (td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(120, 2) + td_F1.toString(16)).slice(-2);
}
function td_LJ(td_id) {
  if (td_id[0] >= "8") {
    return td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(122, 2) + td_KS(td_id.length / 2 + 1) + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(120, 2) + td_id;
  } else {
    return td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(122, 2) + td_KS(td_id.length / 2) + td_id;
  }
}
function td_h4(td_qh) {
  return td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(124, 2) + td_KS(td_qh.length / 2) + td_qh;
}
function td_pv(td_JR) {
  var td_xo = td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(126, 8) + td_JR[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(112, 3)] + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(134, 10) + td_JR[Number(360884).toString(30)] + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(144, 10) + td_JR[Number(1285914).toString(35)] + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(154, 9) + td_JR[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(103, 6)] + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(163, 9) + td_JR[td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(109, 3)];
  td_xo += td_fW ? td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(172, 7) : td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(179, 7);
  var td_KC = td_3I + td_3i.tdz_20e5f684bf5041c69164585940ba1713.td_f(186, 4) + td_3i.td_2O(td_xo, td_2V);
  td_4w(td_KC, document);
}
function td_0X() {
  td_3i.td_4V();
  td_3i.td_0v(document);
  td_L();
  td_fW = true;
  td_1X();
}
td_3i.td_4j.push(function () {
  var td_0q = new td_3i.td_0w("cf047ce8851f4a54a9b6c13c6b8146ca0B12444444594A175B515F571A07185705574C550C5C1C05464D5B5D515711504D165E530C202C6B0B66782209520370597D5306270703250E57010904732056535100070057270800020920045E5A4606660B525E5D52110F070F05441010041015595B593C0C5C0504000400570D52000F5A575B0702070E540A520D030105000507030E54000C5A0606575603010C04015202555702520E5A0B0503525B5806515307520152595C53025550515156040B040253040B020144565E5A55065C0255520D0454045B0E53050356020C015008000255095502005A5909020707595554530D0201015B5B02065F03040156520E535401050B060E520C07520752595B550403535B5C5D0F56020356565450070A51525355510604040C01010E02560255520D0454045B0E53050356020C01590D545402090A5A06515E0755030002");
  td_3I = td_0q.td_f(0, 208);
  td_3o = td_0q.td_f(304, 16);
  td_2V = td_0q.td_f(208, 80);
  td_2U = td_0q.td_f(288, 16);
});
td_3i.tdz_28b286ee00e14618b1dfa549760b1554 = new td_3i.td_0w("28b286ee00e14618b1dfa549760b1554575c55015e045500545203035601021e0e503b090d51091f5d500d0e42570812585a5f5e4b5758");
var td_3i = td_3i || {};
if (typeof td_3i.td_4j === [][[]] + "") {
  td_3i.td_4j = [];
}
function td_2S(td_fg) {
  try {
    if (window.localStorage) {
      var td_Dv = null;
      var td_Oj = null;
      var td_Hf = window.localStorage.getItem(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(0, 15));
      if (td_Hf !== null) {
        var td_qz = td_Hf.split("_");
        if (td_qz.length === 2) {
          var td_hk = td_qz[1];
          if (td_hk < td_g()) {
            window.localStorage.setItem(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(0, 15), td_0m);
            td_Dv = td_0m.split("_")[0];
            td_Oj = td_qz[0];
          } else {
            td_Dv = td_qz[0];
          }
        } else {
          if (td_qz.length === 1) {
            window.localStorage.setItem(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(0, 15), td_qz[0] + "_" + td_0m.split("_")[1]);
            td_Dv = td_qz[0];
          } else {
            window.localStorage.setItem(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(0, 15), td_0m);
            td_Dv = td_0m.split("_")[0];
          }
        }
      } else {
        window.localStorage.setItem(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(0, 15), td_0m);
        td_Dv = td_0m.split("_")[0];
      }
      var td_ul = "";
      if (td_Oj !== null) {
        td_ul = td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(15, 8) + td_Oj;
      }
      var td_tF = td_0P + td_ul;
      if (typeof td_fg !== [][[]] + "" && td_fg === true) {
        td_tF += td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(23, 4) + td_3i.td_2O(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(27, 4) + td_Dv, td_2V);
      } else {
        td_fg = false;
        td_tF += td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(31, 4) + td_3i.td_2O(td_3i.tdz_28b286ee00e14618b1dfa549760b1554.td_f(35, 4) + td_3E + td_Dv, td_2V);
      }
      td_3m(td_tF, document);
      if (typeof td_2H !== [][[]] + "") {
        td_2H(td_fg);
      }
      return td_tF;
    }
  } catch (td_d8) {}
}
function td_0X() {
  td_3i.td_4V();
  td_3i.td_0v(document);
  td_L();
  td_2S(true);
}
td_3i.td_4j.push(function () {
  var td_2c = new td_3i.td_0w("93d6d06c898649a8adcb77e0e40c0baa51471046170A194C5B5D56071A5F4C5B050A4D01585A4A56151B530F5503134F495D03090B42513C515D055A554B585D56501344445216430C5B5E3C59065C50085150005C56575500580000055D590E53075A575553065352030954555603520E0206545008535B080D0E5005085900525054060F0E000706075501070305070A000006005253515E0D08030C58561E0F0B0D01520A0403070D0354510157070D5606555D0502065B0D0F02040B520854025057055100015252055A00005354585750065603575508010F57025D045E5550005155513A0152010050055757590D07500F550154570E015E57020100005755075A0105060950565400535556580E565054570707015A0D00530C09550E0755525A0F045107010C0906070152045B04055202030507085D5A53065F5508545C0255");
  td_0m = td_2c.td_f(182, 46);
  td_3E = td_2c.td_f(166, 16);
  td_0P = td_2c.td_f(0, 166);
  td_2V = td_2c.td_f(228, 80);
});
td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2 = new td_3i.td_0w("c91d62e3154b453c888de9a496a3c8a2175d433b4551175a41416721667c6337515c4c011d4d4e5e58400040004a084217555e05525701505e58440e514156104a5b510902702c73585a15560e48154b104d480853440c4058575d0e5d414a5950515c000057");
function td_3X(td_y) {
  var td_J = "";
  var td_o = function () {
    var td_H = Math.floor(Math.random() * 62);
    if (td_H < 10) {
      return td_H;
    }
    if (td_H < 36) {
      return String.fromCharCode(td_H + 55);
    }
    return String.fromCharCode(td_H + 61);
  };
  while (td_J.length < td_y) {
    td_J += td_o();
  }
  return td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(0, 4) + td_J;
}
function td_3W(td_L) {
  var td_Q = td_3X(5);
  if (typeof td_2y !== [][[]] + "") {
    td_2y(td_Q, td_L);
  }
  return td_Q;
}
function td_3m(td_W, td_X, td_l) {
  var td_E = td_X.getElementsByTagName(Number(103873).toString(18)).item(0);
  var td_D = td_X.createElement(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(4, 6));
  var td_K = td_3W(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(10, 6));
  td_D.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(16, 2), td_K);
  td_D.setAttribute(Number(1285914).toString(35), td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(18, 15));
  td_3i.td_0s(td_D);
  if (typeof td_l !== [][[]] + "") {
    var td_M = false;
    td_D.onload = td_D.onreadystatechange = function () {
      if (!td_M && (!this.readyState || this.readyState === td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(33, 6) || this.readyState === td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(39, 8))) {
        td_M = true;
        td_l();
      }
    };
    td_D.onerror = function (td_J) {
      td_M = true;
      td_l();
    };
  }
  td_D.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(47, 3), td_W);
  td_E.appendChild(td_D);
}
function td_0N(td_F, td_Q, td_B, td_j) {
  var td_S = td_j.createElement(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(50, 3));
  var td_O = td_3W(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(53, 3));
  td_S.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(16, 2), td_O);
  td_S.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(56, 3), td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(59, 5));
  td_S.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(64, 5), td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(69, 17));
  td_S.setAttribute(td_3i.tdz_c91d62e3154b453c888de9a496a3c8a2.td_f(47, 3), td_Q);
  if (typeof td_B !== [][[]] + "") {
    td_S.onload = td_B;
    td_S.onabort = td_B;
    td_S.onerror = td_B;
    td_S.oninvalid = td_B;
  }
  td_F.appendChild(td_S);
}
function td_4w(td_B, td_w) {
  var td_m = td_w.getElementsByTagName(Number(103873).toString(18))[0];
  td_0N(td_m, td_B, null, td_w);
}
var td_3i = td_3i || {};
function td_0H() {
  td_3i.load_iframe(td_4R, td_0E, document);
}
td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843 = new td_3i.td_0w("e347f5df34e04e82a2208aa1e0ae184303525844035414165f5d0651400c575c4e4a1f43500e025a125117001c5e5852165b554716590d0552400c5f5a4a5e47154740554b110d501658001541545d5004475d58081a1c4b5e4409514d004a000042425c510200450c5f0f4a504b4c521543585e0554100f5c5a4a405003001c511d5e514c0413470c54040a1e49415a0658405e0b50051643580c535511515d0f1d4a1d491408520e440808544858521c56465e0b5403031c4c485d55064853085c4659550006544a484c1444515758115a59520745140a5a5704445d0a561d191f56594a0402450a42001541545d5004475d58081a1208571a175e19175d530d425e514104131c0f511704425b465a15470119565414165f5d0651400c575c4e4a1f4654024c410945060c5f594443095a5756125c0b081c4c48545113595e17404a59550006544a4317021c40595f0c5e5550031a1710541f1d5d580448420d5b51514c080e5f4a484c0f504e551e0443445b0341051643580c535511515d0f1d4a1d5200175048460c044148585a0652405e095b4b1e1e5e044655485a57005c615857020a46044604235d59475b4b605c58055e13074551235c551650530d4553494b574d0149025049011c425617405d58084209165f551c55464b5751196276761611055726441309705b465c3577721936712248021a54041a550f1c511d5e514c0413601059020e655159564b62415e055e300f5e5136677711541c32657144541215430c5e064b0916037206475d41036d2b045951064444094d55085c6d56540012593b400d1056515a6c125a5a53094217395e510159553a485e004b574266110d4402590f3a505c5b51006c5554145a0607476a155c4102515c3e4347595b0a155808553f155d4d535a0b6c475f09560f115242006e44094d55085c6d425d000d41095118004366445f10545d59394308056c4409514d004a6c115e4757510f3e5500460009474a6a430946535e086a1710546b135951125d403f425e455f080f6e0f5117046f");
function td_BE(td_yb) {
  var td_Ry = td_yb.constructor == String ? [td_yb] : td_yb;
  var td_Jo = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_fw = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_nj;
  for (td_nj = 0; td_nj < td_Ry.length; td_nj++) {
    var td_b2 = td_l9[td_Ry[td_nj]];
    if (td_b2 && td_b2.enabledPlugin) {
      var td_jh = td_b2.enabledPlugin;
      if (td_jh.name) {
        td_Jo = td_jh.name;
      } else {
        td_Jo = Number(890830).toString(31);
      }
      td_fw = td_jh.description;
      break;
    }
  }
  return [td_Jo, td_fw];
}
function td_oe() {
  var td_xg = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_og = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(5, 29), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(34, 24)]);
  var td_Mj = td_og[0];
  var td_i5 = td_og[1];
  if (td_Mj !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_Mj !== Number(890830).toString(31) && /Flash/i.test(td_Mj)) {
    td_xg = Number(890830).toString(31);
  }
  if (td_xg === Number(890830).toString(31) && td_i5) {
    var td_Oa = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_i5);
    if (td_Oa) {
      td_xg = td_Oa[0];
    }
  }
  return td_xg;
}
function td_kh() {
  var td_VM = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_le = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(58, 22), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(80, 15)]);
  var td_oi = td_le[0];
  if (td_oi !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_oi !== Number(890830).toString(31) && /Windows.*Media.*Firefox Plugin.*/i.test(td_oi)) {
    td_VM = Number(890830).toString(31);
  }
  return td_VM;
}
function td_Tb() {
  var td_cn = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_RK = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(95, 15)]);
  var td_Fd = td_RK[0];
  var td_ne = td_RK[1];
  if (td_Fd !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_Fd !== Number(890830).toString(31) && /Adobe Acrobat/i.test(td_Fd)) {
    td_cn = Number(890830).toString(31);
  }
  if (td_cn === Number(890830).toString(31) && td_ne) {
    var td_QF = /[\d][\d\.\_,-]*/.exec(td_ne);
    if (td_QF) {
      td_cn = td_QF[0];
    } else {
      td_cn = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(110, 9);
    }
  }
  return td_cn;
}
function td_E9() {
  var td_yP = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  if (navigator.platform && /linux/i.test(navigator.platform)) {
    td_yP = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  } else {
    var td_GF = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(119, 15), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(134, 29), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(163, 16), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(179, 17)]);
    var td_AO = td_GF[0];
    if (td_AO !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_AO !== Number(890830).toString(31) && /QuickTime.*(Plug-in|Plugin).*/i.test(td_AO)) {
      td_yP = Number(890830).toString(31);
      var td_Zz = /[\d][\d\.\_,-]*/.exec(td_AO);
      if (td_Zz) {
        td_yP = td_Zz[0];
      }
    }
  }
  return td_yP;
}
function td_J3() {
  var td_Hh = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_CU = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(196, 22)]);
  var td_PS = td_CU[0];
  var td_qo = td_CU[1];
  if (td_PS !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_PS !== Number(890830).toString(31) && /Shockwave for Director/i.test(td_PS)) {
    td_Hh = Number(890830).toString(31);
  }
  if (td_Hh === Number(890830).toString(31) && td_qo) {
    var td_tL = /[\d][\d\.\_,-]*/.exec(td_qo);
    if (td_tL) {
      td_Hh = td_tL[0];
    }
  }
  return td_Hh;
}
function td_P6() {
  var td_dU = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_K5 = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(218, 40)]);
  var td_oG = td_K5[0];
  var td_d6 = td_K5[1];
  if (td_oG !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_oG !== Number(890830).toString(31) && /RealPlayer.*Version.*/i.test(td_oG)) {
    td_dU = Number(890830).toString(31);
  }
  if (td_dU === Number(890830).toString(31) && td_d6) {
    var td_K4 = /[\d][\d\.\_,-]*/.exec(td_d6);
    if (td_K4) {
      td_dU = td_K4[0];
    } else {
      td_dU = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(258, 3);
    }
  }
  return td_dU;
}
function td_fM() {
  var td_at = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_G7 = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(261, 24)]);
  var td_cP = td_G7[0];
  var td_dF = td_G7[1];
  if (td_cP !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_cP !== Number(890830).toString(31) && /VLC.*(Plug-in|Plugin).*/i.test(td_cP)) {
    td_at = Number(890830).toString(31);
  }
  if (td_at === Number(890830).toString(31) && td_dF) {
    var td_PM = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_dF);
    if (td_PM) {
      td_at = td_PM[2];
    }
  }
  return td_at;
}
function td_Lf() {
  var td_Gs = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_ga = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(285, 22)]);
  var td_ta = td_ga[0];
  var td_T9 = td_ga[1];
  if (td_ta !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_ta !== Number(890830).toString(31) && /DevalVR/i.test(td_ta)) {
    td_Gs = Number(890830).toString(31);
  }
  if (td_Gs === Number(890830).toString(31) && td_T9) {
    var td_w9 = /(Plugin) ([\d][\d\.\,]*)/.exec(td_T9);
    if (td_w9) {
      td_Gs = td_w9[2];
    }
  }
  return td_Gs;
}
function td_xs() {
  var td_Ea = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Op = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(307, 13), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(320, 13)]);
  var td_QU = td_Op[0];
  var td_XK = td_Op[1];
  if (td_QU !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_QU !== Number(890830).toString(31) && /SVG Viewer/i.test(td_QU)) {
    td_Ea = Number(890830).toString(31);
  }
  if (td_Ea === Number(890830).toString(31) && td_XK) {
    var td_QR = /[\d][\d\.]*/.exec(td_XK);
    if (td_QR) {
      td_Ea = td_QR[0];
    }
  }
  return td_Ea;
}
function td_ze() {
  var td_Ya = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Xo = td_BE([td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(333, 25), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(358, 21), td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(379, 23)]);
  var td_bW = td_Xo[0];
  var td_bG = td_Xo[1];
  if (td_bW !== td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5) && td_bW !== Number(890830).toString(31) && /Java/i.test(td_bW)) {
    td_Ya = Number(890830).toString(31);
  }
  if (td_Ya === Number(890830).toString(31) && td_bG) {
    var td_kR = /[\d][\d\._]*/.exec(td_bG);
    if (td_kR) {
      td_Ya = td_kR[0];
    }
  }
  return td_Ya;
}
function td_NS(td_dg, td_h3) {
  var td_Cl = null;
  var td_wE = false;
  try {
    td_Cl = new ActiveXObject(td_dg);
    td_wE = true;
  } catch (td_Wl) {}
  if (typeof td_h3 !== [][[]] + "") {
    return td_wE;
  }
  return td_Cl;
}
function td_pF() {
  var td_eg = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(402, 29);
  var td_NR, td_zd = null, td_VL = null, td_Oj = null;
  var td_fW = 15;
  var td_Yl = 2;
  for (td_NR = td_fW; td_NR > td_Yl; td_NR--) {
    td_VL = td_NS(td_eg + "." + td_NR);
    if (td_VL) {
      td_zd = td_NR.toString();
      break;
    }
  }
  if (td_zd === "6") {
    try {
      td_VL.AllowScriptAccess = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(431, 6);
    } catch (td_tP) {
      td_Oj = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(437, 8);
    }
  } else {
    if (td_VL) {
      try {
        td_Oj = td_VL.GetVariable(td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(445, 8));
        var td_Lp = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_Oj);
        if (td_Lp) {
          td_Oj = td_Lp[0];
        } else {
          td_Oj = Number(890830).toString(31);
        }
      } catch (td_tP) {
        td_Oj = Number(890830).toString(31);
      }
    }
  }
  if (!td_Oj && td_zd) {
    td_Oj = td_zd;
  }
  if (!td_Oj) {
    td_Oj = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  }
  return td_Oj;
}
function td_hj() {
  var td_Mj = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(453, 12);
  var td_IK = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_zb = td_NS(td_Mj);
  if (td_zb) {
    td_IK = td_zb.versionInfo;
  }
  return td_IK;
}
function td_hc() {
  var td_gC = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(465, 11);
  var td_Me = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(476, 13);
  var td_ys;
  var td_Tn = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Tl = td_NS(td_Me);
  if (!td_Tl) {
    var td_Ix = 10;
    var td_oy = 1;
    for (td_ys = td_Ix; td_ys > td_oy; td_ys--) {
      td_Tl = td_NS(td_gC + "." + td_ys);
      if (td_Tl) {
        td_Tn = td_Tn.toString();
        break;
      }
    }
    if (!td_Tl) {
      td_Tl = td_NS(td_gC + td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(489, 2));
      if (td_Tl) {
        td_Tn = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(491, 3);
      }
    }
  } else {
    td_Tn = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(494, 9);
  }
  return td_Tn;
}
function td_p3() {
  var td_sK = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(503, 19);
  var td_ME = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_tp = null;
  try {
    td_tp = td_NS(td_sK);
  } catch (td_wn) {}
  if (td_tp) {
    if (td_tp.QuickTimeVersion) {
      td_ME = td_tp.QuickTimeVersion.toString(16);
      td_ME = td_ME.charAt(0) + "." + td_ME.charAt(1) + "." + td_ME.charAt(2);
    } else {
      td_ME = Number(890830).toString(31);
    }
  }
  return td_ME;
}
function td_jw() {
  var td_OC = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(522, 11);
  var td_jL = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5), td_O8 = null, td_iZ;
  try {
    td_O8 = td_NS(td_OC).ShockwaveVersion("");
  } catch (td_iZ) {}
  if (typeof td_O8 === td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(533, 6) && td_O8.length > 0) {
    td_jL = td_O8;
  } else {
    if (td_NS(td_OC + td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(539, 2), 1)) {
      td_jL = "8";
    } else {
      if (td_NS(td_OC + td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(541, 2), 1)) {
        td_jL = "7";
      } else {
        if (td_NS(td_OC + td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(489, 2), 1)) {
          td_jL = "6";
        }
      }
    }
  }
  return td_jL;
}
function td_zw() {
  var td_RJ = 0;
  var td_sH;
  var td_EF = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_FE = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_yo = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_tX = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_aN = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Cj = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_sJ = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_OF = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Gc = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  var td_Vi = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5);
  if (td_l9 && td_l9.length) {
    td_RJ = td_l9.length;
  }
  if (window.ActiveXObject || td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(543, 13) in window) {
    if (td_RJ > 0) {
      td_EF = td_oe();
    }
    if (td_EF === td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(0, 5)) {
      td_EF = td_pF();
    }
    td_FE = td_hj();
    td_yo = td_hc();
    td_tX = td_p3();
    td_aN = td_jw();
  } else {
    if (td_RJ > 0) {
      td_EF = td_oe();
      td_FE = td_kh();
      td_yo = td_Tb();
      td_tX = td_E9();
      td_aN = td_J3();
      td_Cj = td_P6();
      td_sJ = td_fM();
      td_OF = td_Lf();
      td_Gc = td_xs();
      td_Vi = td_ze();
    }
  }
  td_sH = td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(556, 13) + td_EF + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(569, 28) + td_FE + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(597, 21) + td_yo + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(618, 17) + td_tX + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(635, 17) + td_aN + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(652, 18) + td_Cj + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(670, 18) + td_sJ + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(688, 15) + td_OF + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(703, 18) + td_Gc + "!";
  td_sH += td_3i.tdz_e347f5df34e04e82a2208aa1e0ae1843.td_f(721, 12) + td_Vi;
  return td_sH;
}
td_3i.tdz_641631c538d4455e87a5bdca686606ce = new td_3i.td_0w("641631c538d4455e87a5bdca686606ce705d4353555e1b66525e05465d");
var td_3i = td_3i || {};
function td_2z() {
  var td_wq = 20;
  var td_MG = 10;
  var td_x0 = 10;
  var td_As = 0;
  var td_Fu = null;
  var td_wY = function () {
    return window.performance.now() * 1e3;
  };
  var td_nF = function () {
    return performance.now().toFixed(3) / 1e3;
  };
  var td_e0 = function () {
    return (td_g() - td_As).toFixed(3) * 1e3;
  };
  function td_Ld() {
    var td_q3 = 1;
    var td_rs = td_Fu();
    var td_rk = td_Fu();
    while (td_rk === td_rs) {
      td_rk = td_Fu();
      ++td_q3;
    }
    var td_hR = (td_rk - td_rs) * 1e6;
    var td_mv = td_q3 / td_hR;
    if (td_mv < 1e-8) {
      return 1e-8;
    }
    return td_mv;
  }
  function td_nv() {
    var td_wE = 0;
    var td_QU = 0;
    try {
      var td_wW = td_Ld();
      td_wE = td_Fu();
      td_QU = td_Fu() - td_wE;
      if (td_QU === 0 || td_QU < 1e-8) {
        td_QU = td_wW;
      }
      for (var td_yn = 0; td_yn < td_wq; ++td_yn) {
        td_QU = td_YA(td_QU, td_Fu() - td_wE);
      }
      return Math.round(1 / td_QU);
    } catch (td_CG) {
      return -1;
    }
  }
  function td_YA(td_cR, td_Wz) {
    try {
      if (td_cR < 1e-8) {
        return td_Wz;
      }
      if (td_cR < td_Wz) {
        return td_YA(td_Wz - Math.floor(td_Wz / td_cR) * td_cR, td_cR);
      } else {
        if (td_cR === td_Wz) {
          return td_cR;
        } else {
          return td_YA(td_Wz, td_cR);
        }
      }
    } catch (td_sx) {
      return 0;
    }
  }
  if (td_1f.td_2u !== td_3i.tdz_641631c538d4455e87a5bdca686606ce.td_f(0, 7) && td_1f.td_2u !== td_3i.tdz_641631c538d4455e87a5bdca686606ce.td_f(7, 6) && typeof performance !== [][[]] + "" && typeof performance.now !== [][[]] + "") {
    td_Fu = td_nF;
  } else {
    if (td_1f.td_2u !== td_3i.tdz_641631c538d4455e87a5bdca686606ce.td_f(7, 6) && typeof window.performance !== [][[]] + "" && typeof window.performance.now !== [][[]] + "") {
      td_Fu = td_wY;
    } else {
      td_As = td_g();
      td_Fu = td_e0;
    }
  }
  if (!td_Fu || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
    return null;
  }
  function td_Xd() {
    var td_Yc = [];
    for (var td_mM = 0; td_mM < td_MG; ++td_mM) {
      td_Yc.push(td_nv());
    }
    var td_p4 = td_3i.mean(td_Yc);
    var td_C8 = td_3i.std_dev(td_Yc, td_p4);
    var td_K1 = 0;
    var td_AN = 0;
    if (td_C8 !== 0) {
      var td_Yu = td_3i.confidence_interval(td_Yc, td_C8, td_p4, 1);
      td_AN = td_3i.mean(td_Yu);
      td_K1 = Math.round(td_AN);
    } else {
      td_K1 = Math.round(td_p4);
    }
    return td_K1;
  }
  var td_U7 = 0;
  var td_UE = 0;
  while (td_U7 === 0 && td_UE++ < td_x0) {
    td_U7 = td_Xd();
  }
  return encodeURIComponent(td_U7);
}
var td_3i = td_3i || {};
td_3i._mean = function (td_W) {
  if (td_W.length < 1) {
    return 0;
  }
  var td_B = 0;
  for (var td_c = 0; td_c < td_W.length; ++td_c) {
    td_B += td_W[td_c];
  }
  return td_B / td_W.length;
};
td_3i.mean = function (td_M) {
  return Math.floor(td_3i._mean(td_M));
};
td_3i.variance = function (td_r, td_H) {
  if (td_r.length < 2) {
    return 0;
  }
  var td_E = 0;
  for (var td_z = 0; td_z < td_r.length; ++td_z) {
    td_E += Math.pow(td_r[td_z] - td_H, 2);
  }
  return td_E / (td_r.length - 1);
};
td_3i._std_dev = function (td_v, td_K) {
  return Math.sqrt(td_3i.variance(td_v, td_K));
};
td_3i.std_dev = function (td_v, td_i) {
  return Math.floor(td_3i._std_dev(td_v, td_i));
};
td_3i.confidence_interval = function (td_T, td_Z, td_Q, td_v) {
  if (td_T.length < 1) {
    return 0;
  }
  var td_i = [];
  var td_Y = td_Q + td_Z * td_v;
  var td_r = td_Q - td_Z * td_v;
  for (var td_c = 0; td_c < td_T.length; td_c++) {
    if (td_T[td_c] > td_r && td_Y > td_T[td_c]) {
      td_i.push(td_T[td_c]);
    }
  }
  return td_i;
};
var td_3i = td_3i || {};
function td_2f() {
  td_3i.load_iframe(td_2n, td_0E, document);
}
var td_2i = {};
td_2i.td_1s = function (td_n, td_d) {
  td_d = typeof td_d === [][[]] + "" ? true : td_d;
  if (td_d) {
    td_n = td_2h.td_4S(td_n);
  }
  var td_D = [1518500249, 1859775393, 2400959708, 3395469782];
  td_n += String.fromCharCode(128);
  var td_m = td_n.length / 4 + 2;
  var td_F = Math.ceil(td_m / 16);
  var td_S = new Array(td_F);
  for (var td_s = 0; td_s < td_F; td_s++) {
    td_S[td_s] = new Array(16);
    for (var td_q = 0; td_q < 16; td_q++) {
      td_S[td_s][td_q] = td_n.charCodeAt(td_s * 64 + td_q * 4) << 24 | td_n.charCodeAt(td_s * 64 + td_q * 4 + 1) << 16 | td_n.charCodeAt(td_s * 64 + td_q * 4 + 2) << 8 | td_n.charCodeAt(td_s * 64 + td_q * 4 + 3);
    }
  }
  td_S[td_F - 1][14] = (td_n.length - 1) * 8 / Math.pow(2, 32);
  td_S[td_F - 1][14] = Math.floor(td_S[td_F - 1][14]);
  td_S[td_F - 1][15] = (td_n.length - 1) * 8 & 4294967295;
  var td_M = 1732584193;
  var td_E = 4023233417;
  var td_k = 2562383102;
  var td_N = 271733878;
  var td_Z = 3285377520;
  var td_H = new Array(80);
  var td_p, td_R, td_G, td_w, td_L;
  for (var td_s = 0; td_s < td_F; td_s++) {
    for (var td_j = 0; td_j < 16; td_j++) {
      td_H[td_j] = td_S[td_s][td_j];
    }
    for (var td_j = 16; td_j < 80; td_j++) {
      td_H[td_j] = td_2i.td_3x(td_H[td_j - 3] ^ td_H[td_j - 8] ^ td_H[td_j - 14] ^ td_H[td_j - 16], 1);
    }
    td_p = td_M;
    td_R = td_E;
    td_G = td_k;
    td_w = td_N;
    td_L = td_Z;
    for (var td_j = 0; td_j < 80; td_j++) {
      var td_Y = Math.floor(td_j / 20);
      var td_O = td_2i.td_3x(td_p, 5) + td_2i.f(td_Y, td_R, td_G, td_w) + td_L + td_D[td_Y] + td_H[td_j] & 4294967295;
      td_L = td_w;
      td_w = td_G;
      td_G = td_2i.td_3x(td_R, 30);
      td_R = td_p;
      td_p = td_O;
    }
    td_M = td_M + td_p & 4294967295;
    td_E = td_E + td_R & 4294967295;
    td_k = td_k + td_G & 4294967295;
    td_N = td_N + td_w & 4294967295;
    td_Z = td_Z + td_L & 4294967295;
  }
  return td_2i.td_1V(td_M) + td_2i.td_1V(td_E) + td_2i.td_1V(td_k) + td_2i.td_1V(td_N) + td_2i.td_1V(td_Z);
};
td_2i.f = function (td_E, td_Z, td_M, td_O) {
  switch (td_E) {
    case 0:
      return td_Z & td_M ^ ~td_Z & td_O;
    case 1:
      return td_Z ^ td_M ^ td_O;
    case 2:
      return td_Z & td_M ^ td_Z & td_O ^ td_M & td_O;
    case 3:
      return td_Z ^ td_M ^ td_O;
  }
};
td_2i.td_3x = function (td_M, td_S) {
  return td_M << td_S | td_M >>> 32 - td_S;
};
td_2i.td_1V = function (td_O) {
  var td_Q = "", td_x;
  for (var td_E = 7; td_E >= 0; td_E--) {
    td_x = td_O >>> td_E * 4 & 15;
    td_Q += td_x.toString(16);
  }
  return td_Q;
};
var td_2h = {};
td_2h.td_4S = function (td_q) {
  var td_H = td_q.replace(/[\u0080-\u07ff]/g, function (td_Q) {
    var td_v = td_Q.charCodeAt(0);
    return String.fromCharCode(192 | td_v >> 6, 128 | td_v & 63);
  });
  td_H = td_H.replace(/[\u0800-\uffff]/g, function (td_n) {
    var td_l = td_n.charCodeAt(0);
    return String.fromCharCode(224 | td_l >> 12, 128 | td_l >> 6 & 63, 128 | td_l & 63);
  });
  return td_H;
};
function td_1A(td_W) {
  return td_2i.td_1s(td_W, true);
}
td_4i();

