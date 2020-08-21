const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');
const unraw = require('unraw');

const fileContents = require('fs').readFileSync('./geocomply.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/*
String deobfuscation functions, copied from original geocomply.js
*/
G3HH.X2k = 1342;
G3HH.r4R = function() {
    return typeof G3HH.u4R.X4R === 'function' ? G3HH.u4R.X4R.apply(G3HH.u4R, arguments) : G3HH.u4R.X4R;
};
G3HH.v7Y = function() {
    var z7Y = 2;
    while (z7Y !== 1) {
        switch (z7Y) {
            case 2:
                return {
                    o1F: function(K7Y) {
                        var R7Y = 2;
                        while (R7Y !== 14) {
                            switch (R7Y) {
                                case 9:
                                    p1F += String.fromCharCode(e1F.charCodeAt(m1F) ^ K7Y.charCodeAt(q1F));
                                    R7Y = 8;
                                    break;
                                case 4:
                                    R7Y = q1F === K7Y.length ? 3 : 9;
                                    break;
                                case 1:
                                    var m1F = 0,
                                        q1F = 0;
                                    R7Y = 5;
                                    break;
                                case 2:
                                    var p1F = '',
                                        e1F = decodeURI("%16%7Cc%19%13w%12!/4%5C23%04;5S2!&;%06@='&61z19*8%20Uqs#4:%08q3gdns:!*=;M/%1E&51S:6#?(%7B6'%09);%5B'z/w4w%1F%16o%12%12%15%1D%1C%1B%7B%11m%1A%00%1B%08tQ2'.%7B%7C%15=2%22%3Eta%16%0B%1B%7B%1Az%07s%01%0E%18ys%03%1D%12%19t%01%0Ao%10%11l%7Fs9:8@6s%1B%1E%0Cas%1D%00%0Ft%7B%06%1F%03%7B%7DU#!/57A:3%20%04:Z'%0C;)4j%0C'*(%20j%0C3%00%084j:#/%085C6s;4te%3C0$%3E%20Uhs+49T:=ru4Zs3=4&j0%3C/-1G0%3C%20;z%1B%7C?&9%7Bj3%129:'As%1C!7=%5B6s%1C%3E7@!:;%224%1B%7D%7C%3C%3E&C:0*;;Es%3E/%1F4A*#/(!E#%3C=/4A&=u(%20@=3%0D);B%206=%7B3P%3C?%2085A:%3C!%7B&P%22&*(%20%15$:;3tY%3C$o:7V&!.8-U%1D6;%1D&Z='/%0B5Y6%1E%204:U~kmdjU;'%22;%12M:%1C/(%0BQ6%20$/;U%14%10%10%17%15f%07%0C%0E%17%11g%0739:'U%14%3C%20%3C8Ps%07%19;$%5C%3C0#+;E?0+95P5:':9_36%10=1T'&=%3E'U5&!8%20%5C%3C3%3C48@%20%0C+%3E'%5E'%3C?;=%1B20,&)%17s2#/=A&7*fvN($&==%1B2?;2%20@762&v%152?;2%20@76%0E87@!2,%22i%17((822%5C%7D2#/=A&7*%1A7V&!.8-H.qo31T7:!%3Ci%17((822%5C%7D;*:0%5C=42&v%15%20#*%3E0%08q(4,=S:%7D%3C+1P7.2ytP!!ry/N$:)2zP!!2&v%15s1=4#F6!%10%3E&G%3C!ry/N$:)2zW!%3C8(1G%0C6=);G..m;%19%5C3%3C=61Qs%06%1B%1D4r%07~%06be%05c3:5=S%3C!%22%142S%206;;$Y2')4&Xs#=%3E%22%5C6$/u%7BS#%7C.;2E%7C#%22;0Z0&%22%3E:A%7D!*:0L3%20u;%0BA=3o75Anq4%203F%3E%7D#:%20H.qo7;%5Bnq4%203F%3E%7D#4:H.37%7Bst!:.7sU%03;.5%20Z%3E%19%1C;(f:?$v%15V03pdi%5Dn%0D)i9X'%1B%3Ef%00T0%01y;%1FZ=%22:%3E&Z!3,v%3CU2?;;=%5B:'a=5%5C?3.)-%5C=%07*#%17Z%3C3%0D74S70(?:%5E:7%25:5Q25!27%5D5#.9%3CS%3C%3E,%3E6X6%7C820R6'a3%20X?3-);B3=-8;_65!87W2=?7$Z55%20;%00@!=o%14:%15%1F%3C,:%20%5C%3C=o%081G3%15*;%60%1Bjc/?1C'%3C%2074P5:!%3E0U%1E2,%7B%1Bfs%0B/u%7BU&!=%3E0U%16%25*):Z'6o%0C1Ws%10#2$E6!/:9P3s%3C29@?2;%3E0%08q(4,=S:%7D/%1A:Q!%3C&?4W%7C3%1B)=Q6=;;%03p%11%18%06%0F%0Bp%0B%07%10;6S12%22%3E:U?%20*;zR3%20;;%12G66%0D%08%10Usuo84g63s%3E:T1?*?%0BQ6%25*7;E6!%106;Q6(46;Q6.2%7B4%5B7%3C8(tU50/u%7BV&%20;49%185:*70F3:!2%20U%3C7*;%7C%0Ai%10=2%1Bf/%10/%3C7j%206;%048T=4/(i%1736o%12&Z=3sd,X?s9%3E&F:%3C!fv%04%7Dcm%7B1%5B0%3C+2:Rn3/,1W8:;-=F:1&7=A*0'::R63%00%0B%06U6=/9=R?:+49%1A:0%205'%1A:0%205f%01%7D#!%3C4W88-83R=;.+0X86#18U#:=%3E0U'~=/7U52//1M'%7C?75%5C=3;(i%17(((;5A'!&9!A6s9%3E7%07s2;/&c6!;%3E,%0E%252=%22=%5B4s9%3E7%07s%25.)-%5C=%07/%3E:A3:(u2T:?*?4%5B314%03%0D%16m'8%60mU2'/%22%07A23*4!A3%0C8:%20V;%0C.7#U#%3C/%22%0Cua4y%0A5%1E8%00v!%01%08%1D3gdnU%3C%3C(71%1B0%3C%22ae%0C%60c%7D;=e%3C7/%7B%7B%0B37=44%7F2=::&Lsbc%7Bf%05cbo%0E%00v30:)5V*nm;%17%5D!%3C/oz%0534,v%3CA%3E?zt5%5B':/.7V6%20%3C;,%0De%0Cyo4F%3C?:(%0BQ6%20$/;E%0C1=4#F6!/8'F3%04*;%20T':%205tc:'.;0%5C%253*=4Z7%3C-9?Z#0*27%5D6%7C&65R6%20%6027U*s%1C;1G!*/ytT?'&/!Q6%12,;6G%3C$%3C;%14%074e%1E:%7F%5E3y%085%07l3%1B%0A%1A%10U16;:4j?:%3C;%00G3=..%20%5D%3C!&!1Qs1/57%5E42':0T4%3C.:%3E_42)35V92!:;%5C:;.+4%5C=7#;=U%20'=2:Uo#%20(tY2'ry4P%7D0%206n%043%1E%20;#G:3%102:A6!9:8U?3%22%3C=_%3E2%2547R50-%3E6Z20.;5X#.2y4T!3%60(1G%25://;@0;*50U$%20*)zF3%3C=24%1A0%3C!54X3%1E%03;%04Y2*%1C/5A:%3C!%7B%02%5C'2/3%20X?f%10/=X6%3C:/4o6=%02:%20Ps%05%1F%154s?%3C,04@3=!%3E7Usuo61F%203*53U%04%1C%1B%7By%15%046-%7B;Ss%07=.'A3!.%22%09U40%1075F'%0C:#%0B%5D:=;;~%1B52&71Q3%3C!jb%1B#=(;%3CA%3E?/?!Y3%3C8(4%5B&%3E-%3E&U%0Al%02~%7FL%0B%13%7D%3Cbd2x$%08mU&+b:!A%3C~+2'E?2/.&U:%3C!%04=Q3%3C:/1G%04:+/%3C%08q(44#H.qo2:%5B6!%1820A;3?%045Y6!;%04!%5B':#%04%20%5C%3E6/%1E0R36.5=%5C9%7C.+$%1A:%3E.%3C1F%7C#.51Y%7C4'4'A6!/:'X23?%3E4%5B7?*;2%00%18*%0A;0@3%16/%1A&Z!2/p4r2?.#-%15%00g/%08!f%163%107=F'6!;t@=29:=Y21#%3E4P%256!/1X:';%3E&U%0F1/g1%5B%25s%20(i%17%20%3C#.4%10%03d%1F;%07%5C?8/fvN(:8&)%17s%3C:/1G%1B6&%3C%3CAnq4%20;%5D..m%7B=%5B=6=%131%5C4;;fvN(:'&)%17s7*-=V6%03&#1Y%012;2;%08q(4+&H.qo61A;%3C+(i%17((%22&)%173%10:)&P='o9&Z$%20*)t%5C%20s&57Z%3E#./=W?6o,=A;s%07%0F%19yfs(%3E;Y%3C0./=Z=36(%20P%3E3%1C3;V8$.-1s?2%3C3zf;%3C,0#T%256%0975F;3#26%1A:3%01:4X63%3C48@%20%0C#47T':%205%0BF#%3C%20==%5B4%0C+%3E%20T:?/kdU6=(2:P%0C'&61Z&'/u7Z%3Ei~bg%05a3#02Y90%2080%5C=2(47%5C9%3E?%3C6%5D21%6065%5B:5*(%20%1B9%20%2054E6%3E%10;1%5C%3C8$%3C6Q%3E:*0%3C_=%3E)07%5B?7'39%1A0%3C%226;%5B%7C:%22:3P%20%7C#43Z%20%7C):%22%5C0%3C!u=V%3C3);3V~;;68%00%7C?&9%7Bj32,81Y6!./1Q3:!%3EzS2:#%3E4F%3C?:(%0BP=2-71j76%3C0%20Z#%0C-);B%206=%3C1Z%0C2#%3E&A3%20%207!F%0C6!:6Y6%0C%2246%5C?6%109&Z$%20*)3P%3C%0C.71G'3at2E%7C##.3%5C3k/%19&Z$%20*)t%7D%07%1E%03ntR6%3C#47T':%205tT00*('%1576!21Q35?t2Z='%3C;a%1Bc3(8y%5D'%3E#n%7BS#%7C8%3E6R?3=?=%5B2'*wd%19bzt&4r60$44%5B4su;%0Cese%7Bv6%5C'3%205%20F%0C3-%3EtU%142//;Uo4*48Z02;2;%5B%0C'&61Z&'q;$%5B:!/.:Q65&51Q3=%0D%084%07!%0B%02z4G*s#%3E5%5Es7*/1V'6+ut%107s#2'A6=*)'%1527+%3E0%1Bs%06%3C%3EtP%3E:;/1G%7D%20*/%19T+%1F&(%20P3#%20%3E:S11&04%5D:%20;4&L3!*/&T=%20%222'F:%3C!%045A'6%22+%20F%0C0%20.:A31#.&U%03?.;aj%3E2729@%3E%0C.%3C1U%3C%3C!;y%5D'%3E#n%7BU%18%1B%1B%16%18U%1E:,);F%3C5;%7B%1D%5B'6=51As%167+8Z!6=;8A6!%10::%5C%20%3C;);E:0/u%7BS#%7C?64p#:?;6U1!%20,'P37*=5@?'%10=;%5B'%20/%20/P+'=:)Hm(42'q6%25%1B4;Y%1C#*5=%5B4.2g%7BP=2-71Q%0C7*-1Y%3C#*)%0BX%3C7*e4%5C?6+;7%5D2=(;tZ3ba;%07P2%1E%205?P*3.):U=1/(v%0Bo5*:%20@!6o20%083w/61%15%1E3#2:%5E%08;=;e%07#3;%3E'A3%20':&P7~84&%5E6!/%081G%256=%7Bf%05c%60/81E':%205tu'!&%3C3U!!%20)%0BV%3C7*;h%1A%20:%22.8T':%205jUnb/5;A%00&?+;G'6+;r%150%3C+%3Et%083:+%3E:A:56;$W98)+2%5C??,%3C?Z1?(+9_%7C3%1D%3E5Y%05:+%3E;%1B%016.7%02%5C76%20s%20U6%3C)86%5B%3E2%256%3EX#?)75E2%3C%251:%5C;0%250=R08%608;X%3E%3C!t!%5C%7C:,4:F%7C?%20%3C;%18%202)%3E$G:0*vb%01%7D#!%3C4A:%3C!%04'E%3C%3C)2:R%0C67/1%5B%20:%205v%153!*-=F6%7D%3C.7V6%20%3C;%CF%A6U%3E%20%0720Q6=/lt%1As%00*)%22P!s%7Dkd%0Ds%01%7D;%13T?27%22tf3!a(1A%1E27%17=F'6!%3E&F%7Bzo/;%15:=,)1T%206o7=X:'a;&Z3*&53%152%20o;%07P!%25*)tV%3C%3E%22.:%5C02;2;%5Bs6=);G3%0B%0094G:#/7=W%7C7*9!R39.9;E%3C1(8$_%3E6+7%3EE10.:6Y#%3E#62V%3C4%22t=X4%7C;,1P'%7D%3C-3U%18~%02%3E8P%3C=/(%20@=i%3C/!%5B%7D?a%3C;Z4?*u4F6!/%16=V!%3C%3C42As%16+%3C1U%12$*(;X6s%1C8&P6=%3C3;A3%20*%7By%153s%1B%3E7%5D=:,:8%15%03!*-=P$3+%3E:A:5/jtU!69;8%5C86o%085S2!&;%1Dp%1E%3C-28P36%0D:-%155%3C=%7B%17%5D!%3C%22%3E4%1A53%0C%0FtC2?:%3Ets%01%1C%02%7B4Y%3C$%10:7V&!.8-j':%22%3E;@'3%1A%0F%17U%04:&%0E4%0F%20':5g%1B?%7D(4;R?3b(4%1Bcw~;2@3lr3ik5a%226%20%7D%223%227;X:6%25?2%5E%3C?&8%3CV5?*17Y01%22+4%1B%7C?&9%7BF'%3C=:3U6=(2:P%7D%20:87P%20%20m%7B%20Fnq/g1C6=;%7B:T%3E6ry$G6%25&4!F30*;7P??:;%3CG%3C3).:V3%3C-28P3%20&6!Y2'*?)Hq3(8y%5D'%3E#n%7BF:3=%3E2Z+s%00%084A0;/%14$P!2o%16=%5B:3#?%7DU%072%3C65%5B31=4#F6!/%151Us%15&)1U%3C%20a54y&%3E&:4Z%3E#;;7%5E%073%7D;%0Fn%10?.('h%0E3%1B;%19z%09%0C%0A%03%00j'67/!U63&=-%5C3%7Dat8%5C1%7C%3C/;G24*;iC60%7Bs%22Uqs%3C%3E'F3s;(i%17((822%5C%7D'%3C&)%17s%3E;?i%17%11q/4#F6!a2:V%3C%3E?:%20%5C1?*;#%5C';g46_z(=%3E%20@!=o%7C4L~:,4:%1B34,%047Z=5&%3C%0BY3+%0C4;G7:!:%20Ph&!22Z!%3Eo-1Vas:5=S%3C!%22%142S%206;%60%22Z:7o65%5C=%7Bf%20%22T!*&5%00P+%10%204&Q:=./1%082';)%02P!'*#%7F@=:)4&X%1C5)(1Ah4#%04%04Z%20:;2;%5Bn%25*8%60%1D2';)%02P!'*#x%05%7Fbf%60)U;2-%3E%20%5C03&%14%07Uii/%3E&F3u(/oU%00&!)=F63%1A5%3CT=7#%3E0%156+/5nF'&!izY%7D4%2043Y3%1F&5!M35%205%20F%0C9%3C;%0CU%1C#*;%7C%0Ai%7C%14%070%1B%0Ex3%00ti$%7D%12q%7DU76%3C0%20U%7D5.28P73%205tZ=?6%7B5V06?/'%15:=%3C/5%5B06%3C%7B;Ss%15:57A:%3C!;%22P=3%3C%3E%20U=%0C;24Eh3%18%3E6c:68;=E'%08%3C)7%083%03%10%1A%01q%1A%1C/,5A3%20%207!F%0C%3E%209=Y6%0C,34O3%0Ap%16q%1E*%0B/j'A%0C'!(4C:%20&9=Y:'68%3CT=4*;=%5B4s&?i%173%7D%607=W%7C%20;4&T46/%1E%0Ca%0C'*#%20@!6%10==Y'6=%045%5B:%20/28P36=;!%5B3%11%0D;5%5B%253%7B)4t03!%3EtF6!927Ps!*($Z=3%0Bmgj%12%09%0Eh4%00qs4%20'Q8%0C'&)%1Amo%3C%3E'F:%3C!%04=Qs:+fvN(%20*('%5C%3C=2&v%15!6;)-%08q(4(1F%20:%205%0BG6'=%22)Hqs%60e4F03%0C%3E:A%1C%00/7=U!'%3C;jU6%20;;%5EU%17&*%7B%20Zs%25.)-%5C=4o%3C1Z4!.+%3C%5C02#%7B&P%20'=27A:%3C!(tZ=s,4:A6%20;%7B$T!'&8=E2'&4:%152=+%7B7T%20;o+&%5C)6%3CwtY%3C0./=Z=s%3C%3E&C:0*(tX&%20;%7B6Ps%12%03%17%1Bb%16%17a;8Z02/:8A:':?1t00:)5V*3%0C;%0FZ19*8%20%153!:5:%5C=4o2:%15%07&=9;%1A%06=,49E!6%3C(1Qs%3E%20?1U%07;*%7B:P'$%20)?%150%3C!51V':%205t%5C%20s!4%20%152%25.28T1?*;%7C%0Ai~%14%070%1B%0Ex%60'%7C%0Ais)4&%15%08%0F8v%09%1Ezl%14%7B%7B%18%0Ezg%00%08Q%7D%0Ed%00%0A%15%7Bztt%0B%18%0Eyf;tU%10%01%0A%1A%00p326(4Fmo%3C??%15%25nm%20/C6!%3C2;%5B..m%7B;B=nm3%20X?3,81U6=;:4M34,v%3CA%3E?zt7Z=5&%3C4Z$%20*)zF&0,%3E'F3u.6$%0E37*(?A%3C#o6;Q63=6;V+%7D%1D%3E5Y%03?.%221Gs%14%7D%7B%17Z='=48%1Bb3w%1B4e%17%15a%0B0S%10'=74%5E;;,0$E9;%2052X0#*%3C0_7:-6:R2;.3%3CV8%7C:2%7BF8:!t7Z!6%604$A:%3C!(zV%20%20/%3C0%02g9%1D%1Em%05%25%05%0Bha%04%013*55W?3(8yUs'&61F'2%22+i%17((822%5C%7D'&61F'2%22+)Hq3at8%5C1%7C%10;!M~2:/;%187:%3C+8T*su%7B7Z=aoftU5#//1M'%7C%25;g%07~1&/%7DU6%25.7%0BY6=(/%3CU%03?.%22%07A2'&4:%15g3#47U%07%3Co%0B&Z06*?x%153;*:0%5C=4/%3E&G%3C3%0C44@&:+u'@00/%3E8U's%0123%5D'3r%0F5V%01ej%0Bce%16%60w%16r%113?*)%20U8%04-%1F%22%13=g%0E%0E%06d)w%1A%084P+'*5'%5C%3C=%3C;3V~;;68%00%7C5?t=E3%20%10?1W&4(%3E&U03o(1V3=*)'U6%25&4!F%0C6%3C%04%20F3',;5C2%20,)=E'3%06%1Eta21/%3E:R:3#n%7BY:1%60?1W&4/%0E%00s~km;7P??:75G3$.;3V~;;68%00%7C5?t5Q1?%208?U%14%07b%12m%05cc/%1A4C6!%3C2;%5B3n/%1C%11a3%7D/:5E17-?;X98$1?T%3C=)3?%5E:8)%3C%3EY?0#%3E6%1A%3C#;2;%5B%20%7D'/9Y3:%1F;%12%5C!6)4,U'!&;zG6%22:;3V~;;68%00%7C5?t$Y&4&5'U%7C:?;%15%5B7!%2020%15%11!%20,'P!3oq4F'&!a'A&=a7zR%3C%3C(71%1B0%3C%22ae%0C%60c%7D;!M~2:/4S&=,/=Z=s(%3E%20v&!=%3E:A%03%3C%3C2%20%5C%3C=grtNs%08!:%20%5C%256o8;Q6%0Eo&4f$:)/2Z+3(%7B=Fs%3E&('%5C=4/98Z1~-.=Y76=;$P!2/46_34,v%3CA%3E?zt'P!%25&81U%032,04F%3C?:(%0BB2',3%0BB:''2:U2??35U%3C%3E*;:R:=*u'@03::3P3j%7CkfU%1F&!:'V2#*;%7C%0Ai%10#4!Qj/%1C28%5E3%3E,7?%5E%3C5$;%17Y:0$v%17Y62!;7%5E:2'97X?%3E$+2%5C:9*86E5?):%3CZ:%3E$7?P%7C%25*50Z!%7C%20:!A;a%6045@';%7Du%3CA%3E?/%3C1Z?3%205%60U%11?&5?U52&71Q3%00;)=%5B43(%3E;Y%3C0./=Z=3&/%1C%5C77*54%1B%7C?&9%7BP%256=8;Z8:*;1%1552&71Qs~o;'A!36;&Z$%20*)4Z='.74E?&(2:F3%20%3C2'A2=,%3E4%00%7C?&9%7BV!*?/;Uqs%3C+1P7nm;8T+*o%08gU%7C+%22;z%1A5#%60:0W?%3C,04Y*3t;%13Z%3C4#%3Etq:0;2;%5B2!6;%7Dn~3wueUo%20/%7Br%15%3E6%3C(5R6sr%7B4A:3%1D%1A%02Dk1%18%3E%12_%03'r%04%7F%5D36,04%5C%1C%00o;3V%0C3'+#z%003#43R3%3C$21U%15:=%3E2Z+s%0246%5C?6//9Y3%7B!40Pzs8:4t%11%10%0B%1E%12r%1B%1A%05%10%18x%1D%1C%1F%0A%06f%07%06%19%0C%0Cl%092-80P54'2%3E%5E?%3E!4$D!%20;.%22B+*5ke%07%60gzmc%0Djx%60f4b:=+4#Fs%03'4:Pska#4%5C%032/u%09%0A%7B%0F8;'E%3C%3C)%3E0%1B1!%20,'P!%7D=%3E%25@6%20;;5%5B'6/%0C%19e?2/%1A%1Dg3p);%01W&=;.4%07d3%3C%3E%20A:=((4%5C%3C=oo4R0~'/9Yf%7C#26%1A%20'%20)5R63%205tU%11!%20,'P!s%07%0F%19yfs(%3E;Y%3C0./=Z=s;29P7s%20.%20U!=&53%0Fs#%20('%5C1?*%7B%11C6=;%1E4H35#7=%5C?=+11Z;0':8E11,?1%5E98#90R58$t=X4%7C%3C%3E&E%0C:!=;j%202)%3EzF%254/%0B8T*3,%047Z30?.%0BV?2%3C(4A23%0C%17%1Bf%1A%1D%08;6G3%3E?fvN(3%192'A23%0E+$Y6%04*9%1F%5C'3%207!F%0C2/%1A%17Uhs*;1%5B%206/5!X13%7D?4a21#%3E%20%15%1C%00/%198T08%0D%3E&G*3:%3E4W&:#?4j3%22:44%09%20#%2042P7%0C#47%15?2;fvN(%20?4;S67a75A..m%7B8Z=nm%20/F#%3C%20=1Q%7D?%205)Hqs.87%08q(4($Z%3C5*?zT002&v%152?;2%20@76ry/N%20#%2042P7%7D.7%20%5C'&+%3E)Hqs.7%20%5C'&+%3E%15V0&=:7Lnq4%20'E%3C%3C)%3E0%1B2?;2%20@76%0E87@!2,%22)Hqs'%3E5Q:=(fvN(%20?4;S67a31T7:!%3C)Hqs%3C+1P7nm%20/F#%3C%20=1Q%7D%20?%3E1Q..m%7B%20%5C%3E6%3C/5X#nm%20/F#%3C%20=1Q%7D'&61F'2%22+)Hq%7Cq;%03%5C:3)47@%203at2E3'%22;%7B%0B398c7_7:%3C5%13%5C6%19%06%0E%3C_9;%25n2%03)S/4:%15;!*=i%173wj6#%133%7D%607=W%7C%20;4&U%03!*(%20Z36=%1E%22U%04:!?;B%20s%1F3;%5B6s/8;Xibvhd%073%20%207!F%0C%3E%209=Y6%0C-);B%206=%3C1Z%0C2#%3E&A%0C%3E%3C%3C4Z53*-=V6s%1C42A$2=%3E4A6%20;%04%0BU40b3%20X?f%60=$%1A6+;%3E:F:%3C!;cD%19%1E++q%083'*#%20%1A0%20%3C;5E#?&85A:%3C!t,%18$$8v2Z!%3Eb.&Y6=,40P73au%7BY:1%608&L#'%20;6G%3C$%3C%3E&%1B52/%15;Z8s/%7B5V3%04*9%1FU%10%16/%091Qs%1B./4P%200.;%13Z%3C3%22(%22%5C%20:-28%5C'*,35%5B46/(1G%25:,%3EtG6%20?4:F6sb%7B4b:=+4#F3%7D%25(4e%3C#*)tw?%3C,01G3?z;%15V!%3C%1F%1F%12%1B%03%17%09;8Ps%3E/9;U%14%3C%20%3C8Ps%1A!+!As%07%2048F34,v%3CA%3E3&4:j7:%3C:6Y67%10:8P!'%1061F%202(%3E4R?6/)=%5B43grtA%3Cs&57G62%3C%3EtY:%3E&/zU%11!%20,'P3%07'%3EtV&%20;49%155:*70Fs?&(%20%15:%20o2:C2?&?4V8%0C?:'A%0C'=::F20;2;%5B%0C2/.!%5C3%1E.#%20%5D%3C=/2%20%1C3%04./1G5%3C7;5F3%04/8;%5B5:(u'@3%7B!40Pzs8:&%5B:=(atE%3C%20%3C26Y6s%0A-1%5B'%16%222%20A6!o61X%3C3;2:R3%1A%0A;'Z?&%3C%045Y6!;;tw!3%1C%14%18%60%00s/a4%7D2:$.4r%3C%3C(71%15%1B2!%3C;@'%20/(%20L?6%3C31P'34%207@%20'%206%0BS:6#?'H.o+5'%60%06%1A%0Be/N7=%3C%0E%01%7C%17.2g%7BQ=%20%1A%0E%1Dqm(49&Z$%20*)%0BX2!$&)N(%20&6!Y2'&4:H.(4::A:%0C%3C+;Z5.2%20/R6%3C#47T':%205%0BA:%3E*4!A..st0T'2q;%06P2?%1F;8P!'%10.:A:?%10/=X6!/+8P3!*;%1BE6!/kfU%18:!?8Ps%15&)1U+%3E#;%20U=%3C;%08!E3%7D%3C.7V3:?;%0BE3%3E%20!yG'0/%08%06b2!/43Y63=u'@00*;3P3!)44G6%3E%20-1y:%20;%3E:P!s%2058Ls'.01U%20;/%7B9%5C%20%20&53%153%7D%60::A:~%3C+4%5C%20:/%7C%7F%1DwbfpsUs2)/4q61&::U%20%3C#.'j76%3C0%20Z#%0C.71G'%0C+%3E:%5C67%10.'P!%20/65%5C=3-71Uu3%7FytP=0%20?=%5B4nm%0E%00s3%0C#2'A6=*)'U0&%22%3E:A%7D!/?%7BX2=&=1F'%7D%25(;%5B3u(;%3EF3%20%10(%20T'&%3C;%07%5C%3E&#:%20Z!3=/7U'67/%7BM%3E?//1U%12%11%0C%1F%11s%14%1B%06%11%1Fy%1E%1D%00%0B%05g%00%07%1A%0D%03m%0A%09.97Q65(3=_8?%22;&Z:3m%7B4F#6*?4R0~'/9Yf38:&%5B37%20;0P1&(;h%1A2=;2%0BF#%3C%20=jUs'&61F'2//%20E%20i%60t4%15?2!%3Ci%173=*%7B'P!%25/v%15V06#%3E&T'6+r4%5D%3C!/,1W4?/%14%1FU%1E2,%7B%1Bf3'&-1U%013gdnk/%08t%7D%09%1C%0F%20p;z%1A76-.4%18%1Ajz;1V:5&%3E0%15t6=);Gts*-1%5B'%7D/3=%5B'3s8;%5B5%0C=%3E%25%152&;3i%17((..%20%5D..m%20/Y2=(.5R6.2ehF6';2:R%20m4%20'P''&53F..st'P''&53Fmo%608;%5B5%0C=%3E%25%0B3q#47T3i~bg%05a3m%064%7B3%20?4;S67a9&Z$%20*)zF&0,%3E'F3o(%3E;Y%3C0./=Z=%0C;29P%3C&;tjU%18:/:7U%206;u8%5C03%0E)4@&:+u&P%22&*(%20Uy37%0C%1F%062%18)b4@%20'%206%0BS:6#?4G$;.74%183;.5-U0%0C,4:S:4%10;:%153;&+6S:9&5$V45%20%3C5Z#%3E(%3E%3C%5C64.86%5D%3E%3C-t2P67#%22y%5C0%3C!v%60%0D%7D#!%3C4%5D63%12q%7DU%06=*#$P0'*?tP3%3C8(1G%7D3(8%0BE!69%046G%3C$%3C%3E&j52&74F'&!a'A&=a(1G%25:,%3E'%1B%3E%3C528Y2%7D,49U6%25/(%20@3%06!35%5B7?*?tP+0*+%20%5C%3C=o%1B3P'%067%18;%5B5:((x%150%3C!==Rsno;%CF%A5U!?/%3E'V2#*;=%5E?#$1:Z2;)63%1A%20#%2042P!%0C,(4%15%07%12/mdU%3E2%3C04t='/t0P1&/8y%5D'%3E#n%7BV?:*5%20U=6%10;8%00%7C0:;%7Fn%7D%0F8%044F%3C?:;8%5C86o%18%3CG3%07'%3EtY:0*5'Ps;.(t%5C=%25.7=Qs5%20;%16U%60e%7F;$%5E%3C6?19%5D47(3%7B%5C%3E4%60(-X1%3C#ol%1B#=(;%3CU%06n%01.%22O3=;;0U%3E%3C5;zY%7D4%2043Y6%7D,49%0Fbj%7CkfU%3C?:;%22U%143%07%164G6%22:%3E'A3%04&50Z$%20o;'Z?&%3C%041%5B21#%3E%0BY%3C0./=Z=%0C+2'T1?*?%0BT?6=/4%0972;:tV%3C=)23j%256=fvN(0%2052%5C4%0C9%3E&H.qqg5@';q%20/T&''&)%09%7C2:/%3C%0Bo&!:9Pm(4.:T%3E62&h%1A&=.61%0Bo!*:'Z=m4%20&P2%20%205)Ho%7C=%3E5F%3C=qg#Wm(4,6H.o%60,6%0Bo#'4:Pm(4+%3CZ=62&h%1A#;%2051%0Bo?.53%0B((#::R..st8T=4qg%20Om(4/.H.o%60/.%0Bo%3C%3Ce/N%3C%202&h%1A%3C%20qg'G6%20q%20/F!6%3C&)%09%7C%20=%3E4Y63!8%20%5C%3C=/%1C5Y2+6%7B%07%0734%2043Y6%7D,49%0Fbj%7CkfU2?%224:Q3ho;'E%3C%3C)e4a;6o%13%00x%1Ffo(;Y&'&4:%15:%20o?=F21#%3E0U%20%3C#.'j&+%108;%5B5:((4%5C5:/42P7%7D-);B3&(;1S%3C!*%043P%3C3%02:7U5&!;=%5E9:#8%7B%5C%3E2(%3E'%1A?%3C.?=%5B4%7D(22U%01%3C,0%19P?'/%036Z+s%7CmdU%20%20/d%19%10x*%17%1BfRe%02.p?fj)%1Af4%5B'!%2074F'&!a'A&=~u8%1B3=.-4Y%3C0.7%0BU%03%1C%1C%0F4O63%032:@+s%022:A3'6+1U46%20%045Y6!;%04=%5B'6=-5Y3%3E%209=Y6%0C,4:%5B'*?%3E4F'&!a'A&=~;%0CW37%20,'%1534=::A67/%06~U%0B&-.:A&3%3C48@%20%0C/(%20G:=(;6%5C;%3E?7%3CZ10'45R66%2009R17&3?%5B89-0:Q%7C2%3C(1A%20%7C);;W96,/4%7C%16s/g%7BP%256!/'%0B3%129:'As%00.=1e!:,%3E4%1A0?&;hB:5&%7B8T'nm%20/B:5&u8T'.2ytY%3C=ry/N$:)2zY%3C=2&v%1520,fvN($&=4P+3&53Z3o.54c6!%3C2;%5B31%25;h%1A32/-5Y:7o(1G%256=%7B%06P%20#%205'P3;?%04!G?3,4&P%203'24%15%7Cs%1C%3E&C6!oid%05k3%20,4%03%7Dc/4yQ:%20?75Lsio?=F21#%3E0U%12%25&)5%15%11!%20,'P!s%1C:2P'*/20U%20#%2042P7%7D/t1%5B%253o/=X6%20;:9En3at7Z=5&%3C4R:4'69E:%3C-08S6#%2547%5B2%3E(0?Uf3au%7BU%0B%3C%2064Q95#3;%5C14$?%3C%5E;3*)&Z!%0C,40P3%7Co;%1Ef3%1E/+&P%25:%20.4F%3C?:(%0BQ6%20$/;E%0C6!:6Y6%0C#47T':%205%0BQ:%20.98P7%0C.71G'3:?=Z32+;%04T?6%02;8%5C=8/sk%0F%0F13%07#%1F%0F3,3%0BY:%3E&/4W%1C%00/%3E5Q*3%179;Ms%1C!%3E4%053%14%0C%044F%3C?:(%0BP=2-71j;%3E.84%103%7Bpa%17Y%3C&+b(v!:%00%08(v!%1E%20'%11Q463%1D,%5C%1C%003%12%11x%3C1&71I%1A!%205(z#6=:t%0A%1E:!2(z%03:%00%08(z%03%013%095C6=3%08=Y8%7Bpz%7Bn%0F7a%06%7F%11zz/%1C%00Us%3E/:!Q:%3C/,;G86=;%1EU40%107;R46=;t%13s0%205g%15ns/.!U=%3C?*&F'&9,,L)c~ig%01fexcm%1E%7Cn/(;Y&%20%10?1F8'%20+%0BY%3C0./=Z=%0C+2'T1?*?%0BT?6=/%0BX6%20%3C:3P3:%22%3E4d&:,0%00%5C%3E6a;?U%05:+%3E;%15%17%3C858Z27*)tE!%3C)%3E'F:%3C!:8U1:#%3E4%0A3%00;)4%1A?:-t%0BU40%1075F'3'81Q93%1B31%15?:,%3E:F6s/52%5C43&?zG6%22/(;Y&%20%10?1F8'%20+%0BV;6/%0E'P!~%0E%3C1%5B's%1C,=A0;*)tS%3C!o%18%3CG%3C%3E*;%07L%3E1&:4b61%1F4'%5C':9%3E4A:%3E/tj%093%209%3C4%13pc%7CboU%1E%3Cf;=%5B43,4:A6=;v%20L#6/:6Z!3%7Fs4%06a~-;%60%1B%60x/g#T3%7C)+4Z='%3Ct%13Z';.%0B&Z%016(u;A53'f4V%3C=)23%1B!6/(;Y&%20%104%22P!$=2%20P%0C%20?4;S67%1061A;%3C+(4%04%60x/yt%5D62/%3C7%18;'%227a%1A5#%608;%5B=3*5y%60%003?);X#'/9%3CX%3E%3C%222=%5B:4%20=?_02?%3E3_9=++6%5C81#5$%1A%20'671F%7C%3E.2:%1B03%203:P51/)&L3'&-4e?26%08%20U%7D%7D%6074A:%3C!;1A'3%1C8&%5C#'%0D)=Q4:!%3C%04G%3C+6%146_3:!;%7C%0Aihoq%7C%0Ai%08.v.hx%08%10v%09%1Cl%08.v.hx%0F/%0E:V2&(3%20%19s&!($U%102/)&Z!s%2087U%083&9%7BU%00%04%0C/8%1B%00%04%0C/8U!6%10==Y'3.%3C4A%3C#/gkM%3E?o-1G%20:%205i%17b%7D%7Fy4%15%1E3&5=A%7D%20:87P31%0B-r%5Bg%12%1A%094E?2&5i%04u3%1A;'E%3C%3C)%3E0%1B1!%20,'P!%7D):=Y67/8iU76-.4z3%7Cg%00zi7%0Edr4E?2;=;G%3E3./=Z=3%1824E3f%10;:A%3C3%7Bu8%1B4%3C%20%3C8P%7D0%2064A%3C%20';%13Z%3Es%19%0B%1AU%3C%20a-1G%20:%2054%1C34,%04#T'0'%04$Z%203=%3C6T%7Bb%7Fix%15ac%7Bwt%05%7Fs%7Fuc%1C3%20%207!F%0C6!:4%5D6s#27P=%20*%7B=Fs3%60=;%5B'%20/(5%5B%203.53U1%3C7;%20P=%20&44@%206=%045R6=;;:F5%3C=64%17%7Cmst$P!%3E&('%5C%3C=%3Ce4P!:);#P1%1C%1C;9%1Cs%12,/=C6%0Bo%18;%5B'!%207tU%1A%16o%16;W:?*;;F%7D2=;#P18&;e%0536=u&P%22&*(%20U%0C%0C/u%7BF6!927P3nt%7B1M#:=%3E'%08%00&!wt%06bs%0B%3E7%15ac%7Fkt%05ci%7Fkn%05cs%1A%0F%17U%1E2#=4A%200/%3C'X3o,.'A%3C%3E%10==P?7o20%08t37+=G6%20r%0F!P%7F3=4#Us6!8;Q:=(fv%60%07%15bcv%0Am3%1F)1F3%00v!%01%08%1D3#:%20S3!%22:%20U%102-;h%0A+%3E#%7B%22P!%20&4:%08q3&94P!!%20)%0BA3%20%20;!G2'&4:%153%3E:74W?6%10,5U1%3C%2071T=39%3E4%5C%3E2(%3E'%1A:0%205e%0C%7D#!%3C4V~;;68%00%7C?&9%7BP%256=8;U*#/uz%1A?:-t=F3qo:7Vnq4%203F%3E%7D.87H.qo:8A:':?1%08q(4%3C'X%7D2#/=A&7*&)%17s2#/=A&7*%1A7V&!.8-%08q(4%3C'X%7D2#/=A&7*%1A7V&!.8-H.qo31T7:!%3Ci%17((((9%1B;6.?=%5B4.2ytF#6*?i%17((((9%1B%20#*%3E0H.qo%3E&Gnq4%203F%3E%7D*)&H.q/?1%5B:6+;'P'%7D#27P=%20*;%3CA%3E?z%04%3C%5C4;%10:7V&!.8-Ur3%0E%3C%17Z='=48%1B%124%0C44j#2%3C/%0BA!2!(5V':%205%0BT?6=/4ll%1Ejp-m%13a(m%05Tx8%1Cb.%60n%1D:-.M%04%18%7C:%1FSj3e%070U%3C=%0E5-%15%3C=#%22tT00*+%20Fs:!(%20T=0*(tZ5s%09.:V':%2054F'&!a'A&=%7Cu8U4%20%22u%20%5C%3E6%3C/4d&:/%60tE2'/53Y63%1F)1C:%3C:(tR6%3C#47T':%205t%5C%20s!4%20%155:!2'%5D67/fvU%04%16%0D%1C%18j76-.3j!6!?1G6!%102:S%3C3%60;%0BX%3C1&71j?%3C,:%20U7x3%00%0A%15%7Bztv4Z%20%0C9%3E&U':%205%0BU2%25.;!F3%11=4#F6!o%13%00x%1Ffo%3C1Z?%3C,:%20%5C%3C=o2'%15&=.-5%5C?2-71U72;:tb%1B%16%1D%1Et%5B2%3E*%7Bi%15l3%0C3&Z%3E6o%16;W:?*;z%1A%0C32&v%15%3E'+fvwq3%0A?3P%1B%07/%1F%1Bx%10%3C!/1%5B'%1F%20:0P73%3C;&P%25:%3C%3EzS2:#%3E0U%7Blu%188Z&7v;'A&=u(%20@=%60a7zR%3C%3C(71%1B0%3C%22ae%0C%60c%7D;,I%1E:!%3E2%5C63s8!F'%3C%22%042%5C6?+(jU%16=(24Y&%20%10;%20X?f/8%3CG%3C%3E*v1M'6!(=Z=i%60t4_3%0D%0A3b%13wy/47%5E3%7D%60(=X&?/%12:C2?&?tU%1A0*,1T%206#;5R63=48U%102%222:Z3%7D%60(%20Z!2(%3E4%09%7C0/jd%1Bc3bctQ2'.;%06P2?%1F75L6!a%091T?%03#:-P3#%60,1W4?/:%20A!%20/9%1F%5C32#+4B%203*%7Bi%153*oatY:%3E&/tV%3C=)24R:3%205%20Z&0'(%20T!'/:%20A!%05*)%20P+3+?$j&!#;&%5C3%20%207!F%0C2#%3E&A%0C&!/=Y%0C0%20.:A6!/%22tF6!9%3E&Ulm/)=X6=;:8%18$6-%3C8Us=.61%08q3':4G%3E%3C,#zg3lk;%13T?27%22tf%603927P%20%7DEQ%02%5C%20:;%7B%1B@!s%09%1A%05Fs%15%20)tt34,v%3CA%3E?zt8Z44*)4%17%7Cm/%3E'F3%14%2043Y6s%1B)5%5B%20?./1U%20%3C#.'j6=.98P%0C0#21%5B'%0C&jl%5B3%25.;%07T52=24%7B&%255#%03~%602%04=mU%3C1/,gV35%20;%13T?27;%09U1$b%0Dfn+i%22;h%1A46%207;V2'&44%1D38%189%10C3%01.;%12%5C!6)44S:=(%3E&E!:!/=Usn/(;Y&%20%10%3E,A6=%3C2;%5B%203%22(4@+~..%20Z~7&($Y2*oatY%3C0.7%07A%3C!.%3C1%15:%20/,1W83?)=C2'*%049Z76/%124X&?./=Z=ms%3E%22P='%3Ce4z#6=:4V%3C=)23%1B!6%3E;%0BT?6=/%0B@3%16!-=G%3C=%22%3E:A3%10=%14%07U%002/%0C5A3##.4W65%20)1U%14%3C%20%3C8Ps%00*:&V;s-%22t%7C%3E2(%3E4e?26%08%20T':%205t%0632+(4%5B43%60%044P=:*?%0B@%206=(4W?6+;yF#%3C%20=4G6%22:2&P34,%04%20%5B%20%0C,4!%5B'3+%3E:A3%7Fo;h%0A+%3E/%7B%1Bf3=(%7B5Fs%15&)1S%3C+o;z%1A0!/51%1B%20&,81F3%10');X6s%00%084P%7D0%206n%04j%60%7Fi4Z+3,4:S:4/(7G63?);X#3(8y%5D'%3E#n%7BW!%3C8(1G37.11Q8=,+;Q84(08W64,8%3EE%3E=(79%5B5?%22t1X#'6u$U%3E6%20.%20%0B3%18&/4r!6*5%16G%3C$%3C%3E&U%0B%03/)9Use%7Bv6%5C'3*84i3s%60;3V3%129::As%11=4#F6!/%7B%19Z1:#%3E4T##,:7%5D63%18%3E6%15%1769%3E8Z#6=;r%5Bg%12%1A%09%05Ow%06%1C;%3C%08%7C3%08%18y%7D%07%1E%03ny%60%06%1A%0B;%00%5D6s,7=P='o:7V%3C&!/t%5C%20s%3C.'E6=+%3E0U'!/u%7BY:1/(%20@=i%3C/!%5B%60%7D#u4P1%18&;h%1A$2;8%3C%0B37*;'Z?&%3C;'E%3C3*7=V#9'8=Q;#%2549%5D:1&=2Z9#&5$X%3E#&7%7BF'2=/$T46%602:Q6+a3%20X?3%00+4P%256=8;Z8:*%04$U!%7B;6%7D%15%120;2%22P%0Bs%0C4:A!%3C#%7B%7C%06a~-;!F6s%3C/&%5C0'/.'A%3C%3E%10==P?7%3Ce4%5C)3,34V%3C=;%3E:A~3;29P%0C)%2051U%112=51Fsuo%15;W?6/%3C8Z12#;'%5C3%1A%01%08%11g%07s%00%09tg%16%03%03%1A%17ps%1A%01%0F%1B%1572;:%7C%5B2%3E*wtC2?:%3E%7D%15%05%12%03%0E%11f%7Blc%7Bk%1C3$%3Cv4%1A+%3E#;%20P=3m%7B%20U%07%3C:8%3Ce27/4'Z3!*/&L3:%2054%08%7B%08%11%7DoU!2/(%20Z!3-t=F3%15&;1_69%256%3C%5D0;)4:X2%3E*?7W6%3C+t=%1Abea+:R31=4#F6!a)1U%03?.%22%16Z%3C8/%15%3E%5Dxd%1Bb%06U%7D%7C)+%7BP+'*5'%5C%3C=/:7%5E%113%7Fh4%5Bs%60/:%20S%3C3!/=Y%0C0%20.:A6!/)%20U!'&85Y37./5U6!./1Qz3%3C%3E4x20o%144%5C4%7D%3C.7V37*/1V':?;:P$%1F&(%20P=6=;6S4%3C-6%3ER90%2015%1A0%3C!/1%5B'%7D%222:U%20'%206yS:6#?'Us%60~%7B%10P0s%7Dkg%05sc%7Fad%05ic%7F%7B%01a%103%16;3V~;;68%00%7C5?t5@7:%20;f%1B3%11#:4E!6,2'%5C%3C=o61Q:&%22+tS?%3C./oC2!62:Rs%25*8f%15%252=%22=%5B%0767%18;Z!7&55A6h94=Qs%3E.2:%1Dzs4%3C8j%15!.%3C%17Z?%3C=;3Z%3E6$6=Q?%3C+%3C8W1%3E.77%5B66(21T01+6?%5C%7C0%2069Z=%7C:2%7B%5C0%3C!(%7B%5C0%3C!hf%1B#=(;'E%3C%3C)%3E0%1B1!/55X63;2;U&!,%3E4z%03:%00%084F6!a;f%05cco%08%04%043%3C!;:S3gd;1T?%03#:-P!s%08itv%3C3%1C;l%05g3*?4%063%7D%607=W%7C:%3C;1G%0C2!2'Z'!%20+=V34';%15%5B73%2074e37%20)4V%3C3%0D);B%206=%7B%1Ca%1E%1Fz%7B3P%3C?%2085A:%3C!%7B!%5B8=%20,:%15#!%2098P%3E3eq4s6=!%3E7U%0Al%02~%7FU;6'2%3EW54&%3E?X95$=%3EE18-:9X91+%3E:T77%60)1Q:!a3%20X3;;;'j6%20%10(1F%20:%2054%5C%20s:;8T*6=;7E&%0C/%7C4D&6%3C/4%5B:?%2087P%3E%3C.?7Q87%257=%5B84+=1%5E62'62Y9%7C.+$%1A:%3E.%3C1F%7C#%208?P'~#43Z%7D#!%3C4%0Aln'f%0ASa%3E%22/%1CDn%07.8%06%03v%03x%0B%11%06k%1Ei%7F%15%5B'3'e4W!%3C8(1G%7D%20:87P%20%20/%088P34,v%3CA%3E?zt8%5C1%7C&(4x:0=4'Z5'a%03%19y%17%1C%02;%05Ow%06%1C;%3EP0'/?=%5B4nm;:F%0C9%3C;%07Y:%3E%0D);B%206=;5S'6=%043P%3C?%2085A:=(;0%1C3q/65%5B*s%2058Ls2,81E'%20o2:F'2!81Fs%3C)%7B%12@=0;;$Z!'*?4C2?:%3E4%1B%7D%7C#26%1A76-.3U%3C8/)4T71/%1A0Z30.54~&1:5%20@34/%1D4%04a#7;=V3'*#%20@!6%10==Usjw;z%1A?:-t4%5D'%3E#n%0BP=2/85%5B%252%3C;%1CZ++o%0D%04%7Bs%03=4,L3$&;&P5%3C7;%3CQ%3C8&%3E%3E%5B#:%22:?P7;.1%3CQ?0*%3C1E?:%20:%3CQ%7C%3C9%3E&Y2*a3%20X?3&/!Q63*53%5C=6a)1D&6%3C/4%043%15=%3E1%15%03!%20#-%15'%3Co%0E:W?%3C,0tT=*o(=A6%20/:%20S%3C!%22;3T13%60ehR%20%3E/2%20U16/%18-U%3C'=4$U&%255#%03~%602%04=mU1!%20,'P!%7D):=Y67/46%5C3%00*%3EtT?%3E%2050%15%01%16%0E%1F%19pis&57Z!!*8%20%15%3E%3C+.8Ps1:28Q%7Fs!4tX%3C7:71%15=2%22%3E4K3%0Cb%06%7D%0A3%14%1Bv%1D%0C%60c%7F;hY%3C0./=U%00%16%03%1E4f8*?%3Ezq6'*;:R%3C%7C*53%5C=6/8y%5D'%3E#n%7BU$3%20;!@:7/=!%5B0'&4:Us:!(%20T=0*(tZ5s%09.:V':%2054r2?*4:U6+?4&A%203:57Uhsesk%0F36!%3C=%5B63%25%3E4%7B%3C7*u%3EF3%7Da;;V23%3C/!%5Bi%20;.:%06%7D?a%3C;U40b34F%0C%3E%209=Y6%0C-);B%206=%3C1Z%0C2#%3E4%7C!%3C!;%03%5C:s%1A;tF:%3E:75A67ry/N4%20%22u'%5C%3E&#:%20P7.2y4%17s2#/=A&7*fvU6=;wt%5B2%3E*%7Bi%153%1D%1B;%7BY3=#24G62+;'Z?&%3C%040P%208;4$j1!%20,'P!4*4%0BT?6=/%0BX%204/%7B9Z76ry4%093;&+7Uwb/%0C1W%18:;;z%1A?:-t0P13,04P0'/%3C7%18;'%227a%1A%3E2&54Z?&%3C%042E%0C3%3C8&U%7D%7C#24%09#6=6=F%20:%205'%0Bo4*48Z02;2;%5Bs1*=;G6nm;%11Q46/%12:U%3E:;/1Gs%3E*6;G*s#%3E5%5Es7*/1V'6+ut%107s#2'A6=*)'%1527+%3E0%1Bs%06%3C%3EtP%3E:;/1U%223&53%152%20o;;Y&%20/0=P%0C$*97T0;*;'X%7D'%3C;:F3**)zz%10");
                                    R7Y = 1;
                                    break;
                                case 8:
                                    m1F++, q1F++;
                                    R7Y = 5;
                                    break;
                                case 5:
                                    R7Y = m1F < e1F.length ? 4 : 7;
                                    break;
                                case 3:
                                    q1F = 0;
                                    R7Y = 9;
                                    break;
                                case 7:
                                    p1F = p1F.split('`');
                                    return function(w7Y) {
                                        var G7Y = 2;
                                        while (G7Y !== 1) {
                                            switch (G7Y) {
                                                case 2:
                                                    return p1F[w7Y];
                                                    break;
                                            }
                                        }
                                    };
                                    break;
                            }
                        }
                    }('SO[T5S')
                };
                break;
        }
    }
}();

function G3HH() {}
G3HH.M4R = function() {
    return typeof G3HH.u4R.X4R === 'function' ? G3HH.u4R.X4R.apply(G3HH.u4R, arguments) : G3HH.u4R.X4R;
};
G3HH.g7Y = function() {
    return typeof G3HH.v7Y.X4R === 'function' ? G3HH.v7Y.X4R.apply(G3HH.v7Y, arguments) : G3HH.v7Y.X4R;
};
G3HH.Q7Y = function() {
    return typeof G3HH.v7Y.o1F === 'function' ? G3HH.v7Y.o1F.apply(G3HH.v7Y, arguments) : G3HH.v7Y.o1F;
};
G3HH.u4R = function() {
    var U4R = function(I4R, P4R) {
            var s4R = P4R & 0xffff;
            var R4R = P4R - s4R;
            return (R4R * I4R | 0) + (s4R * I4R | 0) | 0;
        },
        H4R = function(p4R, j4R, O4R) {
            var o4R = 0xcc9e2d51,
                z4R = 0x1b873593;
            var L4R = O4R;
            var f4R = j4R & ~0x3;
            for (var m4R = 0; m4R < f4R; m4R += 4) {
                var C4R = p4R.charCodeAt(m4R) & 0xff | (p4R.charCodeAt(m4R + 1) & 0xff) << 8 | (p4R.charCodeAt(m4R + 2) & 0xff) << 16 | (p4R.charCodeAt(m4R + 3) & 0xff) << 24;
                C4R = U4R(C4R, o4R);
                C4R = (C4R & 0x1ffff) << 15 | C4R >>> 17;
                C4R = U4R(C4R, z4R);
                L4R ^= C4R;
                L4R = (L4R & 0x7ffff) << 13 | L4R >>> 19;
                L4R = L4R * 5 + 0xe6546b64 | 0;
            }
            C4R = 0;
            switch (j4R % 4) {
                case 3:
                    C4R = (p4R.charCodeAt(f4R + 2) & 0xff) << 16;
                case 2:
                    C4R |= (p4R.charCodeAt(f4R + 1) & 0xff) << 8;
                case 1:
                    C4R |= p4R.charCodeAt(f4R) & 0xff;
                    C4R = U4R(C4R, o4R);
                    C4R = (C4R & 0x1ffff) << 15 | C4R >>> 17;
                    C4R = U4R(C4R, z4R);
                    L4R ^= C4R;
            }
            L4R ^= j4R;
            L4R ^= L4R >>> 16;
            L4R = U4R(L4R, 0x85ebca6b);
            L4R ^= L4R >>> 13;
            L4R = U4R(L4R, 0xc2b2ae35);
            L4R ^= L4R >>> 16;
            return L4R;
        };
    return {
        X4R: H4R
    };
}();
G3HH.I7Y = function() {
    return typeof G3HH.v7Y.o1F === 'function' ? G3HH.v7Y.o1F.apply(G3HH.v7Y, arguments) : G3HH.v7Y.o1F;
};
G3HH.b7Y = function() {
    return typeof G3HH.v7Y.X4R === 'function' ? G3HH.v7Y.X4R.apply(G3HH.v7Y, arguments) : G3HH.v7Y.X4R;
};
/* End copied string deobfuscation functions */

/*
Replaces U8o.I7Y(variable) calls with variables that are literal numeric expressions with decoded value.
*/
refactor.replace(
  `CallExpression[callee.type="StaticMemberExpression"][callee.property="I7Y"][callee.object.type="IdentifierExpression"][callee.object.name="U8o"][arguments.length=1][arguments.0.type="IdentifierExpression"]`,

  node => {
    var referencedVariable = refactor.query(`VariableDeclarator[binding.type="BindingIdentifier"][init.type="LiteralNumericExpression"][binding.name="` + node.arguments[0].name + `"]`);
    return new Shift.LiteralStringExpression({
      value: G3HH.I7Y(referencedVariable[0].init.value),
    })      
});
console.log("/* Done replacing I7Y obfuscated strings */")

/*
Replaces U8o.Q7Y(variable) calls with variables that are literal numeric expressions with decoded value.
*/
refactor.replace(
  `CallExpression[callee.type="StaticMemberExpression"][callee.property="Q7Y"][callee.object.type="IdentifierExpression"][callee.object.name="U8o"][arguments.length=1][arguments.0.type="IdentifierExpression"]`,

  node => {
    var referencedVariable = refactor.query(`VariableDeclarator[binding.type="BindingIdentifier"][init.type="LiteralNumericExpression"][binding.name="` + node.arguments[0].name + `"]`);
    return new Shift.LiteralStringExpression({
      value: G3HH.Q7Y(referencedVariable[0].init.value),
    })      
});
console.log("/* Done replacing Q7Y obfuscated strings*/")


/*
Make sure we don't acidentally run on the wrong string
*/
refactor.normalizeIdentifiers();
console.log("/* Done normalizing identifiers */")

/*
Combine strings that are put together with "+=" into original variable declaration.
*/

/*
We have to do this weird check for variables we've already replaced because for some reason the AST duplicates its output.
This works fine for deterministic things (like XOR decryption functions), but not things where elements are deleted.
TODO: Make a Github issue
*/
var coveredVariables = {};

refactor.replace(
    `VariableDeclarator[binding.type="BindingIdentifier"][init.type="LiteralStringExpression"]`,

    node => {
        var variableName = node.binding.name;
        if (variableName in coveredVariables) {
            return new Shift.VariableDeclarator({
                binding: new Shift.BindingIdentifier({
                    name: variableName,
                }),
                init: new Shift.LiteralStringExpression({
                    value: coveredVariables[variableName],
                }),
            });
        }

        var plusEqualsQuery = `ExpressionStatement[expression.type="CompoundAssignmentExpression"][expression.binding.type="AssignmentTargetIdentifier"][expression.operator="+="][expression.expression.type="LiteralStringExpression"][expression.binding.name="` + variableName + `"]`;
        var plusEqualsNodes = refactor.query(plusEqualsQuery)

        var newValue = node.init.value;
        for (var i = 0; i < plusEqualsNodes.length; i++) {
            newValue += plusEqualsNodes[i].expression.expression.value;
        }
        coveredVariables[variableName] = newValue;

        refactor.delete(plusEqualsQuery);

        return new Shift.VariableDeclarator({
            binding: new Shift.BindingIdentifier({
                name: variableName,
            }),
            init: new Shift.LiteralStringExpression({
                value: newValue,
            }),
        })
    }
);
console.log("/* Done combining string literals */")

/*
If a variable is just a static string, this replaces all references to it with simply its value (and deletes the original declaration).
*/
var replacedVariablesQueries = [];
refactor.replace(
    `IdentifierExpression`,

    node => {
        var referencedVariableName = node.name;
        var referencedVariableDeclaration = `VariableDeclarator[binding.type="BindingIdentifier"][init.type="LiteralStringExpression"][binding.name="` + referencedVariableName + `"]`;
        var queryResults = refactor.query(referencedVariableDeclaration);
        if (queryResults.length === 0) {
            return node;
        }
        else {
            replacedVariablesQueries.push(referencedVariableDeclaration);
            return new Shift.LiteralStringExpression({
                value: queryResults[0].init.value,
            });
        }
        return node;
    }
);
console.log("/* Done replacing variable references with values */")
for (var i = 0; i < replacedVariablesQueries.length; i++) {
    refactor.delete(replacedVariablesQueries[i]);
}
console.log("/* Done deleting original variable declarations */")


refactor.replace(
  `LiteralRegExpExpression`,

  node => {
    return new Shift.LiteralRegExpExpression({
      pattern: unraw.unraw(node.pattern),
      global: node.global,
      ignoreCase: node.ignoreCase,
      multiLine: node.multiLine,
      dotAll: node.dotAll,
      unicode: node.unicode,
      sticky: node.sticky
    });
})
console.log("/* Done unrawing regex patterns */")


// refactor.expandBoolean();
// refactor.convertComputedToStatic();
console.log("/* This file is the result of running `node geocomply_deobfuscator.js > geocomply_deobfuscated.js` */");
console.log(refactor.print());
