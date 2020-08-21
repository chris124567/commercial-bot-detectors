const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./arkoselabs.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/*
String deobfuscation functions, copied from arkoselabs.js
*/
var deobfuscationParent = "J4vv";

function e4QQ() {
    return "(;+64F%25(%22*i@&$=-(p=;)7%20%5E$$-4*N$$-4+O%204@$&A:&,,3F4jpo~%5E%04%1A%60%0A&M:i%13%3C5J/4%226(W:=287%0C4y8j%7F%17p%7C!;r%5E%0D%06=l:E*%16**%18A&&4*3Q(9n13N%254%06,)@=%20/7:%11p4$83B%124**:t%20'$60Pi%19(6)F4'/34%5E%19%1B=f:%131%7Bwmr%1Az~&$u%16%7F4p!v%13z%7Bump%154%7Bt$/W=93$%0AJ*;/*(E=i%0973F;'%25-gf19,65F;4vj:%12%7B4%10%1D%01%0D%19-&%1A3Q%254%01%0A:%12y4um:b;%20!5gm(;260%5E%20$'$%04B$+20&%5E%144(-3S:sov!V'*!)3@!(n:(%5Ezypi:p,./%3Cgs;%20.-:%05(:3%3C3%1E4%0F%12$%0AP1$,ki%7B%04%05%08%0D%13s4%7Cv$%25L&=3-5B9%1631(T'4%7B$+J'%3C8$.M%25%20.%3CjA%25&#2:%01i/28*F+&2=%22Qtkp%7BgP*;/5+J'.%7D%7B)Lki3-%3EO,tb..G=!zyt%13q98bgK,%20'13%19%7Dyx)?%18i+/+#F;d3-%3EO,s%607(M,rbgg%1Ff%20&+&N,w=%09:%1F%20'0,3%03=00%3Cz%01=,8-e%03%20-%7D%7B%01V'%0A!)3@!(m%0D(H,'by)B$,%7D%7B!@d=/2%22Mki05&@,!/5#F;tb%1A(S0i6%3C5J/%20#83J&'%60:(G,i)7gK,;%25%7BgP=0,%3Cz%01-%203)+B0s.6)Frk~$%08W!,2$%15F(%25%105&Z,;=07B-4%22*i%5E9%3C%225.@%16%22%25%20:%17yq=%152@%20-!y%0FB'-7+.W%20''$2M%22'/.)%5E*;/*:N,:38%20F4%08.=&O,i%0D6)L4%2006#%5Eyypiw%13yy=%10*S(*4$%0AJ*;/*(E=i%138)Pi%1A%25+.E4:2::a&&+4&Mi%06,=gp=0,%3C:P%20$55&W,-=%18$W%20?%25%01%08A#,#-:d,&2%3E.B4zs$%7D%5E:*26+O%20''$%14H09%25w%03F=,#-.L'4%0D8$Q&$%25=.B%0F%25!*/s(9%25+in(*26*F-%20!%1F+B:!%1087F;4(-3Ss4%0D*?N%25%7Bn%1D%08n%0D&#,*F'==i?%12yxphw%124=%25!3%0C#(684@;%200-:%60&$):gp('3$r%13y4so:B99,0$B=%20/7h%5Bd%3E7.jE&;-t2Q%25,.:(G,-%7By$K(;3%3C3%1E%1C%1D%06t%7F%5Ey1s?:b;%20!5gq&%3C.=%22Gi%04%14y%05L%25-=ju%5E%0A&.-%22M=d%14%207F4?%25+.E%20*!-.L'd46,F'4(-3S:sov!V'*!)3@!(n:(N45=*$Q%2094%024Q*c%7D85H&:%255&A:%15n:(N%15f&:%1B%0C(9)%04:%11x%7Fpi:g,?!5%11q%11%0A4++%0D%0D,68+u%1B%11%03-5Ogx=*$Q%2094%024Q*c%7D%05hE*%15o87J%14400,F4y8h%25%5E!=4)4%19ff!+,L:,,8%25Pg*/4:%054xnii%14gy=)2A%25%20#%06,F0f=8)G;&)=:E%3C'#87W*!!w$L$4uh:%0F4%3E($!A4%055:.G(i%138)Pi%1C.0$L-,=%1F%08p4:%25+.E4%0A/,5J,;=%1D%0Aw%064q)?%03:&,0#%03j/&h~%12p4&,)@(94:/B%16+/63P=;!)iI:4riw%10yxpn:%1E4-)/:n%1Ai%12%3C!F;,.:%22%03%1A(.*gp,;)?:%1F-%206y.Gtn%06,)%60(94:/Bnw%7Cv#J?w=4&@4%7Bs$*L'&3)&@,4ul:M&4vh:%19s4/)%22Q(4%148/L$(=%18%20%60&'4+(Og%08'%1A(M=;/5:n%1Ai%10%1E(W!%20#$%0Eg%0B4%0E%1A%02%5Ey1ti:Q.+hik%11%7C%7Clkr%16%604%226(W:=287S,-o$%04Q%06%1A=6)O&($$%0BV*%20$8g%60&'36+F4%04%13y%14F;%20&$%0AB%25//+*F-i%15%0D%01%0Eqi$83B4%7Cy$(W!,2$r%1091=i?%12yxphw%134j%06,)%60(94:/Bd%1D/2%22M4%7Bu$%03m%1D4ta:Hs?=5(B-4n$2P,;%22+(T:,2$w%0D~%7C==%22U%20*%2565J,'483J&'=%185J(%25=kv%5E%7D%7C=z!%15y424(@1g%12%3C&O%19%25!%20%22Qi%0Ery%04L'=26+%0Dx468+P4,#%06)L:%3C0)5F::%7Dh:%0C/*o87Jf4!57K(+%25-.@4y8iwE/yp?!%5E:%20-,+B=,%1F+&W,%16,0*J=4to:s(%25!-.M&4%01+.B%25i%0D%0D:N:%20%25$!V'*!)3@!(=i?%1By4riw%134%05=ug%5Ezx=%1A%22M=%3C2%20gp*!/6+A&&+$%13J$,3$%0BV*%20$8gp('3y%13Z9,7+.W,;=i?%17*/u8#%17z42%3E%25%0B%7B%7Cuuu%16%7Cepp:%0C/*o%3E$%0C%20$!%3E%22Pf/#%06*F=(%1F5(B-,2w%20J/4%0C,$J-(%60%0A&M:4p!%22G%7C%7Cx:$G4%04!::%11%7B%7D=?:%1791%60huS14%226#Z4:4%20+F%16=(%3C*F4%7Cs$%00F',68:p,./%3Cgv%00i%0C0%20K=4qn:%60(%25);5J4zy$%00B;(-6)G4%06%04%1B:%11p%7B=~k%5E%0A(-;5J(i%0D83K4!4-7%5E%7Cxr$w%5By%7B=os%5Ey1pm:%17%7D4%06%1B:J9!/7%22%5E74%04%16%13l4%1B%258+s%25(9%3C5%0D%1B,!5%17O(0%25+oW$%60%60%18$W%20?%25%01g%60&'4+(OiaskjA%20=i$t%134%7Dp$.E,%16(84K4%1850$H%1D%20-%3C%04K,*+%16%25I,*4w%16V%20*+%0D.N,%0A(%3C$Hgx=):e%3C'%0387W*!!cgf;;/+gQ,=5+)F-i/7gP,;6%3C5%03:,4,7%0D4=20#F'==i?%12yypiw%13yy=h~%114/57$B9=#1&%0D*&=i?%1Aq+!=$E,43-5J'.=m:%104p=mtS142%3E%25%0B%7B%7Cuuw%0F%7B%7Cup:%11%7B4067V%25(4%3C%18M&#3$%03w4xq)3%03'&m+%22B%25d&6)Wdxrj:%11~427#%5Eu%20.)2Wi=9)%22%1En!)=#F'n%600#%1En%0F57%04B9=#1&%0E%1D&+%3C)%04i'!4%22%1En/#t3L%22,.~gU(%255%3Cz%044%0822(P,i%0C8%25Psi%0E6gS%3C+,0$%03%22,9y/B:i%22%3C%22Mi:%25-i%03%10&5y$B'i'%3C3%030&5+gS%3C+,0$%03%22,9y&Wi%3E7.iB;%22/*%22O(+3w$L$g%60%09+F(:%25y&G-i41.Pi=/y3K,ig85H&:%25%06%22M/&2:%22N,'4~gF%25,-%3C)Wi(3y&Mi(4-5J+%3C4%3Cg@(%25,%3C#%03n-!-&%0E9%22%25%20%60%0D4!4-7%19ff=v!@f(o$+B'.58%20F4n~$v%1A4%055:.G(i%068?%5E%18%3C):,w%20$%25w%16V%20*+%0D.N,4%138!B;%20=%185J(%25%60%11%22A;,7$%10J'.$0)D:is$xQ,9,8$F%19%3C%225.@%02,9d:%131%0F%06%1F%01%5E%0A%19%15%1A:%60,'4,5Zi%0E/-/J*4)7.W4y8mq%16y4%036)P&%25!*:p,./%3Cgv%00i%13%20*A&%25=6%25I,*4$%7F%5Ev%25!7%20V(.%25d:x!=-5%01L;4%7C=.Ui:4%20+Ftn70#W!s%60jw%1591%7B1%22J.!4cg%15y98b%25L;-%25+jP=0,%3C%7D%03'&.%3C%7CA&=46*%19ixr)?%18%25,&-%7D%03%7B%7C0!%7CN(;'0)%19i%7C0!g%13iy%60i%7CS(-$0)Dsip)?%18;%20'13%19i%7Bu)?%18+(#2%20Q&%3C.=%7D%03j/&?!E/r%2265G,;zyvS1i36+J-ic?pE~/wb%25L;-%25+jQ(-),4%19i%7C0!%7C%04wu)77V=i4%207Ftn4%3C?Wni)=z%04/*m-(H,'gy)B$,%7D~!@d=/2%22Mni05&@,!/5#F;tg%1A(S0i6%3C5J/%20#83J&'%60:(G,i)73Li!%25+%22%04i:4%20+Ftn70#W!s%60kp%1391%7B1%22J.!4cg%11%7D98b%25L;-%25+%7D%03x98y4L%25%20$ydE~/w?p%18+&2=%22Qd;!=.V:s%60l7%5Br9!=#J'.zyv%1391%7B4&Q.%20.cg%1491%7B+%22P%203%25cgM&'%25b!L'=m*.Y,s%60hvS1rm.%22A%22%204t!L'=m**L&=(0)Dsi!73J(%25)84F-r#6+L;s%60zu%12%7Bxrh%7CA(*+%3E5L%3C'$cg%00/~&n!%14r=%25!3%0E(%25)%3E)%19i*%2573F;rgg%7B%0C-%206g:b%0B%0A%04%1C%01d%01%00%0A%12%0Bn%07%06%10%08%15p%1D%1C%16%0E%1Fz%13(%22:#F/.(0-H%25$.67R;:4,1T10:iv%11z%7Duop%1Bpbod:n&'!:(%5E%014ql:%60%3C:46*f?,.-:E,4%14%16:%16%7B4%3E'9%5Ef/#v&S%20f.6-Pfv02%22Zt4tkw%5Ey1qi:A&&4*3Q(9%1F/%22Q%20/9%06$O%20*+$v%124*/47O,=%25$4B':m*%22Q%20/=k:N%3C%25407O04sa:A%25&#2:s(%25!-.M&i%0C0)L=00%3C:o%3C*)=&%03%0A(,5.D;(01%3E%5E!;%25?:J'%25)7%22%5E#:%22=:b;%20!5ga%25(#2:%60,'4,5Z4%7Ds$%03n%1D4%10%16%14w4&0+:%0C/*o%3E3%11f4p!q%14%7D%7Crjw%124y8or%15%7D%7C&l!%5E:(&85J4y8?!E/4qiw%134%0B)-4W;,!4gu,;!y%14B':%60%14(M&4%08%3C+U,=):&%03%07,5%3C:%11q4qj:L'=/,$K:=!+3%5E%05%0C%07%18%04z%16%0C%0E%0F:o%3C*)=&%03%0B;)%3E/W4f&:hD*f)4&D,:o+%22O&($w4U.4!).%7C=00%3C:%12q94y%06Q%20(,$#B=(m),F04p!r%11-*%25nu%1A4&.4%22P:('%3C:%131xph:w&%3C#1%02U,'4$%05L&%22%60%18)W%20858:K==0*%7D%0Cf*$7iB;%22/*%22O(+3w$L$4%7C0)S%3C=%60-%3ES,tg1.G-,.~gJ-tg/%22Q%20/):&W%20&.t3L%22,.~gM($%25d%60U,;)?.@(=)6)%0E=&+%3C)%04i?!52Ftn=13W9:zvh@-'n?2M*(0-$K(g#6*%5Eu%20&+&N,i3+$%1Ek49%3C4%5E%1E%20.%3E#J'.3yu%5E~%7B0!:E*%1631(T'4%0A%0A%01%5E%08;)8+%03%1C'):(G,i%0D%0A:%154%1D%04%1A%04W%25g%14%1D%04%60=%25=lw%13y4p!w%124%1A%17%1F:o%1C%0A%09%1D%06%03%0E%1B%01%17%03f44p!v%12%7D%7Buj#%164%04%19%0B%0Eb%0D4.65N(%25=%1F.Q,//!:K%20-$%3C)%5E%07,4*$B9,=%0A%22D&,%60%0A$Q%2094$d%5E%7F98$!Q($%25%1B(Q-,2$5D+(hhw%11eiris%0Fiylyw%0D%7B%60=?$%0E:*207W4%1D)4%22Pi%07%25.gq&$!7gs%1A4%0973F;'%25-gf19,65F;43)&M4%20%0F%0A:T%20'$60Pi9(6)F4%7Cx$v%11%7C4#8)U(:%60..M-%20.%3E%7D%5Ex%7D=jp%5E%1F,2=&M(4%0D%0Agd&=(0$%5E%04&.63Z9,%60%1A(Q:%2068:%131%7Bp$5N&*8w%15F(%25%105&Z,;%60%1Eu%03%0A&.-5L%254%08%15:%12%7Bq=%0A:w4y8?!%5Ey1s8#F%7Fq%22h:%10yq=%1F2M%0A(0-$K(d%146,F'4&:%18M&:5)7Q,:3dv%5Ey1ujq%12%7F*wm:p%1E%0A45ip%1E%0A45:F*d31(V%25-m+%22O&($$!O%3C:($%14p42=vh%5E%1E%20.=(T:47%3C%25G;%206%3C5%5E%04%10%12%10%06gi%19%12%16:%12%7F4%25/%22M&-$$%7D%0Cf4%04%16%13%5E%0A&5+.F;i%0E%3C0%5E%0A%3E-y!I&;$;&M%22i'5%3ES!:%60/%22%5B=i1,.Yei%F0%AF%99%9A:p,./%3Cgv%00i%13%3C*J+&,=:g4%0A%06%09:%1A%7F%7Fwn%25B%7Bx&i%22%14%7D+!k&%10%7Cq!jw%16z-sj$Gpf3-&M-(2=h%5Ef/#v-Pf4%06,)%60(94:/Bd(#-.L'4&):o%00%04%09%0D%02g4o,8)Dt4%14+%22A%3C*(%3C3%03%04%1A=)?%5E+&/-4W;(0%06+L(-%25=:%0C/*o5(D%20*o4.P*f!*4F=%1926?Zg9():%60&$):gp('3y%0Ap4%7Dy$%09t%0D457#F/%20.%3C#%5E:*207W%12,#t&S%20d3:5J9=%7D~3Q%3C,g%04:w%20$%25*gm,%3E%60%0B(N('=k#%5E*!26*F4%1A%25%3E(Fi%1C%09$s%114~=..M4:%25*4J&'%1F?&J%25,$$w%5Bxx%22$w%5By/=*$Q%2094$%01V'%0A!)3@!(zy%04B''/-gE%20'$y%60E%3C'#87W*!!~gG%20?%60%3C+F$,.-gL;i485D,=%6013N%25g=i?E/yp?!%13y4&0)J:!%25=%18O&($0)D%16.!4%22%5E%04%1A%60%162W%25&/2:p*;))3J'.n%1D.@=%20/7&Q04#5.@%224#8)U(:%60?7%194%0D%12$u%13yyp$!@%16'/34%7C+&/-4W;(0w/W$%25=%15%14%5E*:=%1B:K==0*%7D%0Cf4d$$B'?!*:K==0*%7D%5E%7Cy=7:t%20''=.M.:=%3C$%0E%25&!=.M.d3).M',2$!V'*40(M4u)77V=i4%207Ftk4%3C?Wki)=z%01?,20!J*(40(Md=/2%22Mki.8*Ftk6%3C5J/%20#83J&'m-(H,'by7O(*%251(O-,2de%60&99y1F;%20&0$B=%20/7g@&-%25y.Mi!%25+%22%01i:4%20+Ftk$04S%25(9c)L',%7B%7By%5E%01,,/%22W%20*!$!B%22,$$%60%5E%08'$+(J-4ro:%12yy==%22U%20*%254(W%20&.$u%13y4wl:S4%25!7%20V(.%25$%06@;&%10%1D%01%0D%19%0D%06$4F::)6)%7C=%20-%3C(V=4ri:%044%1E)7#L%3E:%60%09/L',=%0A/L*%22781F%0F%25!*/%0D%1A!/:,T(?%25%1F+B:!=..M-&7$%03b4%08$6#Ag%1A4+%22B$4vk:%11%7F43%3C5J/4p!!E%7Cx!?#%144%20&+&N,4*81B:*207Wsr=%152@%20-!y%04L':/5%22%5E:%204%3C:E%20;%25?(%5B4,.$&%5E/*%1F*2S9;%25*4F-4%17%14%17O(0%25+il%0A%11=mu%5E,'=h%7F%5E%19%02=%167F;(=%1A/Q&$%25$j%1Appy)?%5Ey42%3C4W(;4$4@;%200-:%60($%22+.Bi%04!-/%5E%1A!%255+%0D%1C%00%08%3C+S,;=%15.M%3C1=h:%131qw:t%14+pq$4@;%200-%1CP;*jd!V'*!)3@!(%1Cw$L$%15o?$%7Ff(00%1A%5E%1B,!5%11J-,/w%15F(%25%160#F&a44n%03%08*401F%11i%036)W;&,yo%10%7Bd%2203%0A4%20$$r";
}

Z9KK(X9KK());
B3YY(m3YY());
J4vv.e4QQ = e4QQ;
I8JJ(O8JJ());
J4vv.A2H = function() {
    var l8H = 2;
    for (; l8H !== 1;) {
        switch (l8H) {
            case 2:
                return {
                    b1k: function(F4k) {
                        var P8H = 2;
                        for (; P8H !== 10;) {
                            switch (P8H) {
                                case 4:
                                    P8H = t1k < i1k.length ? 3 : 6;
                                    break;
                                case 2:
                                    var w4k = function(g4k) {
                                        var S8H = 2;
                                        for (; S8H !== 13;) {
                                            switch (S8H) {
                                                case 2:
                                                    var y4k = [];
                                                    S8H = 1;
                                                    break;
                                                case 1:
                                                    var V4k = 0;
                                                    S8H = 5;
                                                    break;
                                                case 5:
                                                    S8H = V4k < g4k.length ? 4 : 9;
                                                    break;
                                                case 4:
                                                    y4k.g8JJ(v8JJ.o8JJ(g4k[V4k] + 94));
                                                    S8H = 3;
                                                    break;
                                                case 9:
                                                    var v4k, H4k;
                                                    S8H = 8;
                                                    break;
                                                case 3:
                                                    V4k++;
                                                    S8H = 5;
                                                    break;
                                                case 8:
                                                    v4k = y4k.R8JJ(function() {
                                                        var h8H = 2;
                                                        for (; h8H !== 1;) {
                                                            switch (h8H) {
                                                                case 2:
                                                                    return 0.5 - P8JJ.K8JJ();
                                                                    break;
                                                            }
                                                        }
                                                    }).k8JJ('');
                                                    H4k = J4vv[v4k];
                                                    S8H = 6;
                                                    break;
                                                case 6:
                                                    S8H = !H4k ? 8 : 14;
                                                    break;
                                                case 14:
                                                    return H4k;
                                                    break;
                                            }
                                        }
                                    };
                                    var W1k = '',
                                        i1k = e8JJ(w4k([-42, 7, -13, -13])());
                                    P8H = 5;
                                    break;
                                case 9:
                                    X1k = 0;
                                    P8H = 8;
                                    break;
                                case 3:
                                    P8H = X1k === F4k.length ? 9 : 8;
                                    break;
                                case 5:
                                    var t1k = 0,
                                        X1k = 0;
                                    P8H = 4;
                                    break;
                                case 6:
                                    W1k = W1k.d8JJ('}');
                                    var j1k = 0;
                                    var z4k = function(o4k) {
                                        var z8H = 2;
                                        for (; z8H !== 18;) {
                                            switch (z8H) {
                                                case 19:
                                                    z4k = A4k;
                                                    z8H = 5;
                                                    break;
                                                case 20:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-5, 5).L8JJ(0, 3));
                                                    z8H = 5;
                                                    break;
                                                case 3:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-9, 9).L8JJ(0, 7));
                                                    z8H = 5;
                                                    break;
                                                case 13:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-7, 7).L8JJ(0, 5));
                                                    z8H = 5;
                                                    break;
                                                case 1:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-8, 8).L8JJ(0, 7));
                                                    z8H = 5;
                                                    break;
                                                case 9:
                                                    z8H = j1k === 2 && o4k === 142 ? 8 : 7;
                                                    break;
                                                case 7:
                                                    z8H = j1k === 3 && o4k === 115 ? 6 : 14;
                                                    break;
                                                case 6:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-4, 4).L8JJ(0, 3));
                                                    z8H = 5;
                                                    break;
                                                case 12:
                                                    z8H = j1k === 5 && o4k === 334 ? 11 : 10;
                                                    break;
                                                case 8:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-8, 8).L8JJ(0, 6));
                                                    z8H = 5;
                                                    break;
                                                case 11:
                                                    W1k.M8JJ.n8JJ(W1k, W1k.L8JJ(-5, 5).L8JJ(0, 3));
                                                    z8H = 5;
                                                    break;
                                                case 10:
                                                    z8H = j1k === 6 && o4k === 255 ? 20 : 19;
                                                    break;
                                                case 14:
                                                    z8H = j1k === 4 && o4k === 136 ? 13 : 12;
                                                    break;
                                                case 4:
                                                    z8H = j1k === 1 && o4k === 180 ? 3 : 9;
                                                    break;
                                                case 5:
                                                    return j1k++, W1k[o4k];
                                                    break;
                                                case 2:
                                                    z8H = j1k === 0 && o4k === 314 ? 1 : 4;
                                                    break;
                                            }
                                        }
                                    };
                                    P8H = 12;
                                    break;
                                case 8:
                                    W1k += v8JJ.o8JJ(i1k.c8JJ(t1k) ^ F4k.c8JJ(X1k));
                                    P8H = 7;
                                    break;
                                case 7:
                                    t1k++, X1k++;
                                    P8H = 4;
                                    break;
                                case 12:
                                    var A4k = function(R4k) {
                                        var n2H = 2;
                                        for (; n2H !== 1;) {
                                            switch (n2H) {
                                                case 2:
                                                    return W1k[R4k];
                                                    break;
                                            }
                                        }
                                    };
                                    return z4k;
                                    break;
                            }
                        }
                    }('II@YG#')
                };
                break;
        }
    }
}();
J4vv.J2H = function() {
    return typeof J4vv.A2H.b1k === 'function' ? J4vv.A2H.b1k.apply(J4vv.A2H, arguments) : J4vv.A2H.b1k;
};
J4vv.t2H = function() {
    return typeof J4vv.A2H.b1k === 'function' ? J4vv.A2H.b1k.apply(J4vv.A2H, arguments) : J4vv.A2H.b1k;
};

function B3YY() {
    var l6L = 2;
    for (; l6L !== 11;) {
        switch (l6L) {
            case 3:
                M6L[2] = "d2";
                M6L[3] = 3;
                M6L[3] = 1;
                M6L[4] = M6L[2];
                M6L[4] += M6L[7];
                l6L = 14;
                break;
            case 13:
                var s7L = function() {
                    var m6L = 2;
                    for (; m6L !== 5;) {
                        switch (m6L) {
                            case 2:
                                var g6L = [arguments];
                                R7L(M6L[0][0], g6L[0][0], g6L[0][1], g6L[0][2], g6L[0][3]);
                                m6L = 5;
                                break;
                        }
                    }
                };
                l6L = 12;
                break;
            case 2:
                var M6L = [arguments];
                M6L[7] = "Y";
                M6L[2] = "";
                M6L[2] = "";
                l6L = 3;
                break;
            case 14:
                M6L[4] += M6L[7];
                l6L = 13;
                break;
            case 12:
                s7L(D7L, "charCodeAt", M6L[3], M6L[4]);
                l6L = 11;
                break;
        }
    }

    function D7L() {
        var q6L = 2;
        for (; q6L !== 5;) {
            switch (q6L) {
                case 2:
                    var y6L = [arguments];
                    return y6L[0][0].String;
                    break;
            }
        }
    }

    function R7L() {
        var v6L = 2;
        for (; v6L !== 13;) {
            switch (v6L) {
                case 2:
                    var h6L = [arguments];
                    h6L[3] = "eProperty";
                    h6L[9] = "";
                    h6L[9] = "in";
                    h6L[8] = "";
                    h6L[8] = "def";
                    v6L = 8;
                    break;
                case 8:
                    h6L[2] = 2;
                    h6L[2] = 7;
                    h6L[2] = 9;
                    try {
                        var o6L = 2;
                        for (; o6L !== 9;) {
                            switch (o6L) {
                                case 2:
                                    h6L[7] = {};
                                    h6L[1] = (1, h6L[0][1])(h6L[0][0]);
                                    h6L[5] = [h6L[2], h6L[1].prototype][h6L[0][3]];
                                    h6L[7].value = h6L[5][h6L[0][2]];
                                    try {
                                        var p6L = 2;
                                        for (; p6L !== 3;) {
                                            switch (p6L) {
                                                case 5:
                                                    h6L[6] += h6L[3];
                                                    h6L[0][0].Object[h6L[6]](h6L[5], h6L[0][4], h6L[7]);
                                                    p6L = 3;
                                                    break;
                                                case 2:
                                                    h6L[6] = h6L[8];
                                                    h6L[6] += h6L[9];
                                                    p6L = 5;
                                                    break;
                                            }
                                        }
                                    } catch (T7L) {
                                        h6L[5][h6L[0][4]] = h6L[7].value;
                                    }
                                    o6L = 9;
                                    break;
                            }
                        }
                    } catch (n7L) {}
                    v6L = 13;
                    break;
            }
        }
    }
}
J4vv.a6L = function() {
    var J0J = function(o0J, i0J) {
            var O0J = i0J & 0xffff;
            var N0J = i0J - O0J;
            return (N0J * o0J | 0) + (O0J * o0J | 0) | 0;
        },
        P0J = function(F0J, k0J, C0J) {
            var y0J = 0xcc9e2d51,
                V0J = 0x1b873593;
            var Z0J = C0J;
            var r0J = k0J & ~0x3;
            for (var K0J = 0; K0J < r0J; K0J += 4) {
                var H0J = F0J.d2YY(K0J) & 0xff | (F0J.d2YY(K0J + 1) & 0xff) << 8 | (F0J.d2YY(K0J + 2) & 0xff) << 16 | (F0J.d2YY(K0J + 3) & 0xff) << 24;
                H0J = J0J(H0J, y0J);
                H0J = (H0J & 0x1ffff) << 15 | H0J >>> 17;
                H0J = J0J(H0J, V0J);
                Z0J ^= H0J;
                Z0J = (Z0J & 0x7ffff) << 13 | Z0J >>> 19;
                Z0J = Z0J * 5 + 0xe6546b64 | 0;
            }
            H0J = 0;
            switch (k0J % 4) {
                case 3:
                    H0J = (F0J.d2YY(r0J + 2) & 0xff) << 16;
                case 2:
                    H0J |= (F0J.d2YY(r0J + 1) & 0xff) << 8;
                case 1:
                    H0J |= F0J.d2YY(r0J) & 0xff;
                    H0J = J0J(H0J, y0J);
                    H0J = (H0J & 0x1ffff) << 15 | H0J >>> 17;
                    H0J = J0J(H0J, V0J);
                    Z0J ^= H0J;
            }
            Z0J ^= k0J;
            Z0J ^= Z0J >>> 16;
            Z0J = J0J(Z0J, 0x85ebca6b);
            Z0J ^= Z0J >>> 13;
            Z0J = J0J(Z0J, 0xc2b2ae35);
            Z0J ^= Z0J >>> 16;
            return Z0J;
        };
    return {
        p0J: P0J
    };
}();
J4vv.W3i = function() {
    var p3i = 2;
    for (; p3i !== 9;) {
        switch (p3i) {
            case 2:
                var L4i = [arguments];
                L4i[6] = undefined;
                L4i[7] = {};
                L4i[7].Y1s = function() {
                    var q3i = 2;
                    for (; q3i !== 90;) {
                        switch (q3i) {
                            case 69:
                                q3i = function() {
                                    var o3i = 2;
                                    for (; o3i !== 22;) {
                                        switch (o3i) {
                                            case 17:
                                                U3i[6] = 0;
                                                o3i = 16;
                                                break;
                                            case 7:
                                                o3i = U3i[6] < U3i[0][0].length ? 6 : 18;
                                                break;
                                            case 6:
                                                U3i[7] = U3i[0][0][U3i[6]];
                                                o3i = 14;
                                                break;
                                            case 20:
                                                U3i[5][U3i[7][r4i[90]]].h += true;
                                                o3i = 19;
                                                break;
                                            case 24:
                                                U3i[6]++;
                                                o3i = 16;
                                                break;
                                            case 1:
                                                o3i = U3i[0][0].length === 0 ? 5 : 4;
                                                break;
                                            case 19:
                                                U3i[6]++;
                                                o3i = 7;
                                                break;
                                            case 12:
                                                U3i[3].x9KK(U3i[7][r4i[90]]);
                                                o3i = 11;
                                                break;
                                            case 26:
                                                o3i = U3i[8] >= 0.5 ? 25 : 24;
                                                break;
                                            case 16:
                                                o3i = U3i[6] < U3i[3].length ? 15 : 23;
                                                break;
                                            case 10:
                                                o3i = U3i[7][r4i[70]] === r4i[17] ? 20 : 19;
                                                break;
                                            case 23:
                                                return U3i[4];
                                                break;
                                            case 8:
                                                U3i[6] = 0;
                                                o3i = 7;
                                                break;
                                            case 13:
                                                U3i[5][U3i[7][r4i[90]]] = function() {
                                                    var z3i = 2;
                                                    for (; z3i !== 9;) {
                                                        switch (z3i) {
                                                            case 2:
                                                                var v3i = [arguments];
                                                                v3i[1] = {};
                                                                v3i[1].h = 0;
                                                                v3i[1].t = 0;
                                                                return v3i[1];
                                                                break;
                                                        }
                                                    }
                                                }.I9KK(this, arguments);
                                                o3i = 12;
                                                break;
                                            case 11:
                                                U3i[5][U3i[7][r4i[90]]].t += true;
                                                o3i = 10;
                                                break;
                                            case 18:
                                                U3i[4] = false;
                                                o3i = 17;
                                                break;
                                            case 14:
                                                o3i = typeof U3i[5][U3i[7][r4i[90]]] === 'undefined' ? 13 : 11;
                                                break;
                                            case 4:
                                                U3i[5] = {};
                                                U3i[3] = [];
                                                U3i[6] = 0;
                                                o3i = 8;
                                                break;
                                            case 15:
                                                U3i[1] = U3i[3][U3i[6]];
                                                U3i[8] = U3i[5][U3i[1]].h / U3i[5][U3i[1]].t;
                                                o3i = 26;
                                                break;
                                            case 2:
                                                var U3i = [arguments];
                                                o3i = 1;
                                                break;
                                            case 25:
                                                U3i[4] = true;
                                                o3i = 24;
                                                break;
                                            case 5:
                                                return;
                                                break;
                                        }
                                    }
                                }(r4i[71]) ? 68 : 67;
                                break;
                            case 70:
                                r4i[64]++;
                                q3i = 57;
                                break;
                            case 75:
                                r4i[19] = {};
                                r4i[19][r4i[90]] = r4i[40][r4i[29]][r4i[44]];
                                r4i[19][r4i[70]] = r4i[47];
                                q3i = 72;
                                break;
                            case 76:
                                q3i = r4i[44] < r4i[40][r4i[29]].length ? 75 : 70;
                                break;
                            case 20:
                                r4i[5].v5z = function() {
                                    var B1s = typeof u9KK === 'function';
                                    return B1s;
                                };
                                r4i[3] = r4i[5];
                                r4i[1] = {};
                                q3i = 17;
                                break;
                            case 57:
                                q3i = r4i[64] < r4i[7].length ? 56 : 69;
                                break;
                            case 56:
                                r4i[40] = r4i[7][r4i[64]];
                                try {
                                    r4i[47] = r4i[40][r4i[58]]() ? r4i[17] : r4i[56];
                                } catch (o0s) {
                                    r4i[47] = r4i[56];
                                }
                                q3i = 77;
                                break;
                            case 46:
                                r4i[7].x9KK(r4i[82]);
                                r4i[7].x9KK(r4i[3]);
                                r4i[71] = [];
                                r4i[17] = 'q5z';
                                r4i[56] = 'k5z';
                                r4i[29] = 'F5z';
                                r4i[70] = 'u5z';
                                q3i = 60;
                                break;
                            case 49:
                                r4i[7].x9KK(r4i[38]);
                                r4i[7].x9KK(r4i[4]);
                                r4i[7].x9KK(r4i[26]);
                                q3i = 46;
                                break;
                            case 5:
                                return 7;
                                break;
                            case 71:
                                r4i[44]++;
                                q3i = 76;
                                break;
                            case 16:
                                r4i[1].v5z = function() {
                                    var p1s = function() {
                                        return encodeURI('%');
                                    };
                                    var H1s = /\u0032\x35/.e9KK(p1s + []);
                                    return H1s;
                                };
                                r4i[4] = r4i[1];
                                r4i[63] = {};
                                r4i[63].F5z = ['s7z'];
                                r4i[63].v5z = function() {
                                    var y1s = false;
                                    var z1s = [];
                                    try {
                                        for (var c1s in console) z1s.x9KK(c1s);
                                        y1s = z1s.length === 0;
                                    } catch (T1s) {}
                                    var W1s = y1s;
                                    return W1s;
                                };
                                r4i[75] = r4i[63];
                                q3i = 23;
                                break;
                            case 53:
                                r4i[7].x9KK(r4i[20]);
                                r4i[7].x9KK(r4i[8]);
                                r4i[7].x9KK(r4i[9]);
                                r4i[7].x9KK(r4i[69]);
                                q3i = 49;
                                break;
                            case 2:
                                var r4i = [arguments];
                                q3i = 1;
                                break;
                            case 23:
                                r4i[10] = {};
                                r4i[10].F5z = ['i5z'];
                                r4i[10].v5z = function() {
                                    var Z1s = function() {
                                        var Q1s = function(q1s) {
                                            for (var N1s = 0; N1s < 20; N1s++) q1s += N1s;
                                            return q1s;
                                        };
                                        Q1s(2);
                                    };
                                    var X1s = /\u0031\u0039\u0032/.e9KK(Z1s + []);
                                    return X1s;
                                };
                                r4i[82] = r4i[10];
                                r4i[59] = {};
                                r4i[59].F5z = ['i5z'];
                                q3i = 32;
                                break;
                            case 14:
                                r4i[2].F5z = ['s7z'];
                                r4i[2].v5z = function() {
                                    var D1s = typeof G9KK === 'function';
                                    return D1s;
                                };
                                r4i[8] = r4i[2];
                                r4i[5] = {};
                                r4i[5].F5z = ['s7z'];
                                q3i = 20;
                                break;
                            case 68:
                                q3i = 61 ? 68 : 67;
                                break;
                            case 60:
                                r4i[58] = 'v5z';
                                r4i[90] = 'E5z';
                                q3i = 58;
                                break;
                            case 72:
                                r4i[71].x9KK(r4i[19]);
                                q3i = 71;
                                break;
                            case 9:
                                r4i[6].F5z = ['i5z'];
                                r4i[6].v5z = function() {
                                    var C1s = function() {
                                        return 'c'.indexOf('c');
                                    };
                                    var L1s = !/['"]/.e9KK(C1s + []);
                                    return L1s;
                                };
                                r4i[9] = r4i[6];
                                r4i[2] = {};
                                q3i = 14;
                                break;
                            case 17:
                                r4i[1].F5z = ['i5z'];
                                q3i = 16;
                                break;
                            case 67:
                                L4i[6] = 21;
                                return 63;
                                break;
                            case 32:
                                r4i[59].v5z = function() {
                                    var d1s = function() {
                                        return 'x'.startsWith('x');
                                    };
                                    var S1s = /\u0074\x72\x75\x65/.e9KK(d1s + []);
                                    return S1s;
                                };
                                r4i[20] = r4i[59];
                                q3i = 30;
                                break;
                            case 77:
                                r4i[44] = 0;
                                q3i = 76;
                                break;
                            case 30:
                                r4i[57] = {};
                                r4i[57].F5z = ['i5z'];
                                r4i[57].v5z = function() {
                                    var h1s = function() {
                                        return [] + 'a'.concat('a');
                                    };
                                    var s1s = !/\u005b\u005d/.e9KK(h1s + []) && /\x61\x61/.e9KK(h1s + []);
                                    return s1s;
                                };
                                r4i[69] = r4i[57];
                                r4i[77] = {};
                                r4i[77].F5z = ['i5z'];
                                r4i[77].v5z = function() {
                                    var r0s = function() {
                                        return ['a', 'a'].join();
                                    };
                                    var J0s = !/(\u005b|\u005d)/.e9KK(r0s + []);
                                    return J0s;
                                };
                                q3i = 40;
                                break;
                            case 40:
                                r4i[38] = r4i[77];
                                r4i[81] = {};
                                r4i[81].F5z = ['s7z'];
                                r4i[81].v5z = function() {
                                    var O0s = typeof E9KK === 'function';
                                    return O0s;
                                };
                                r4i[26] = r4i[81];
                                r4i[7].x9KK(r4i[75]);
                                q3i = 53;
                                break;
                            case 58:
                                r4i[64] = 0;
                                q3i = 57;
                                break;
                            case 4:
                                r4i[7] = [];
                                r4i[6] = {};
                                q3i = 9;
                                break;
                            case 1:
                                q3i = L4i[6] ? 5 : 4;
                                break;
                        }
                    }
                };
                p3i = 3;
                break;
            case 3:
                return L4i[7];
                break;
        }
    }
}();
J4vv.C3i = function() {
    return typeof J4vv.W3i.Y1s === 'function' ? J4vv.W3i.Y1s.apply(J4vv.W3i, arguments) : J4vv.W3i.Y1s;
};
J4vv.x3x = function() {
    return typeof J4vv.P3x.V3x === 'function' ? J4vv.P3x.V3x.apply(J4vv.P3x, arguments) : J4vv.P3x.V3x;
};
J4vv.w6L = function() {
    return typeof J4vv.a6L.p0J === 'function' ? J4vv.a6L.p0J.apply(J4vv.a6L, arguments) : J4vv.a6L.p0J;
};

function X9KK() {
    var n4i = 2;
    for (; n4i !== 3;) {
        switch (n4i) {
            case 5:
                try {
                    var K4i = 2;
                    for (; K4i !== 9;) {
                        switch (K4i) {
                            case 2:
                                Object.defineProperty(Object.prototype, 'oTBTQ', {
                                    get: function() {
                                        return this;
                                    },
                                    configurable: true
                                });
                                oTBTQ.globalThis = oTBTQ;
                                K4i = 5;
                                break;
                            case 5:
                                K4i = typeof globalThis === 'undefined' ? 4 : 3;
                                break;
                            case 4:
                                window.globalThis = window;
                                K4i = 3;
                                break;
                            case 3:
                                delete Object.prototype.oTBTQ;
                                K4i = 9;
                                break;
                        }
                    }
                } catch (B7i) {
                    window.globalThis = window;
                }
                return globalThis;
                break;
            case 1:
                return globalThis;
                break;
            case 2:
                n4i = typeof globalThis === 'object' ? 1 : 5;
                break;
        }
    }
}
J4vv.P3x = function() {
    var u3x = [arguments];
    u3x[2] = 2;
    for (; u3x[2] !== 1;) {
        switch (u3x[2]) {
            case 2:
                return {
                    V3x: function() {
                        var G3x = [arguments];
                        G3x[9] = 2;
                        for (; G3x[9] !== 20;) {
                            switch (G3x[9]) {
                                case 10:
                                    G3x[1] = 83;
                                    G3x[9] = 20;
                                    break;
                                case 5:
                                    G3x[9] = J4vv.J2H(180) != 70 ? 4 : 3;
                                    break;
                                case 3:
                                    G3x[9] = J4vv.t2H(142) >= 99 ? 9 : 8;
                                    break;
                                case 14:
                                    G3x[3] = 70;
                                    G3x[9] = 13;
                                    break;
                                case 12:
                                    G3x[6] = 45;
                                    G3x[9] = 11;
                                    break;
                                case 9:
                                    G3x[7] = 73;
                                    G3x[9] = 8;
                                    break;
                                case 13:
                                    G3x[9] = 93 <= J4vv.t2H(334) ? 12 : 11;
                                    break;
                                case 1:
                                    G3x[8] = 57;
                                    G3x[9] = 5;
                                    break;
                                case 2:
                                    G3x[9] = J4vv.J2H(314) >= 54 ? 1 : 5;
                                    break;
                                case 8:
                                    G3x[9] = 90 == J4vv.J2H(115) ? 7 : 6;
                                    break;
                                case 6:
                                    G3x[9] = 67 == J4vv.J2H(136) ? 14 : 13;
                                    break;
                                case 11:
                                    G3x[9] = 85 === J4vv.t2H(255) ? 10 : 20;
                                    break;
                                case 4:
                                    G3x[4] = 32;
                                    G3x[9] = 3;
                                    break;
                                case 7:
                                    G3x[5] = 57;
                                    G3x[9] = 6;
                                    break;
                            }
                        }
                    }()
                };
                break;
        }
    }
}();
J4vv.C6L = function() {
    return typeof J4vv.a6L.p0J === 'function' ? J4vv.a6L.p0J.apply(J4vv.a6L, arguments) : J4vv.a6L.p0J;
};

function O8JJ() {
    var r8H = 2;
    for (; r8H !== 3;) {
        switch (r8H) {
            case 1:
                return globalThis;
                break;
            case 5:
                try {
                    var u8H = 2;
                    for (; u8H !== 9;) {
                        switch (u8H) {
                            case 4:
                                window.globalThis = window;
                                u8H = 3;
                                break;
                            case 5:
                                u8H = typeof globalThis === 'undefined' ? 4 : 3;
                                break;
                            case 2:
                                Object.defineProperty(Object.prototype, 'ZTQ2v', {
                                    get: function() {
                                        return this;
                                    },
                                    configurable: true
                                });
                                ZTQ2v.globalThis = ZTQ2v;
                                u8H = 5;
                                break;
                            case 3:
                                delete Object.prototype.ZTQ2v;
                                u8H = 9;
                                break;
                        }
                    }
                } catch (o9H) {
                    window.globalThis = window;
                }
                return globalThis;
                break;
            case 2:
                r8H = typeof globalThis === 'object' ? 1 : 5;
                break;
        }
    }
}
J4vv.A3i = function() {
    return typeof J4vv.W3i.Y1s === 'function' ? J4vv.W3i.Y1s.apply(J4vv.W3i, arguments) : J4vv.W3i.Y1s;
};

function Z9KK() {
    function u7i() {
        var e4i = 2;
        for (; e4i !== 14;) {
            switch (e4i) {
                case 2:
                    var J4i = [arguments];
                    J4i[7] = "";
                    J4i[7] = "";
                    J4i[7] = "ty";
                    e4i = 3;
                    break;
                case 6:
                    try {
                        var V4i = 2;
                        for (; V4i !== 9;) {
                            switch (V4i) {
                                case 3:
                                    try {
                                        var X4i = 2;
                                        for (; X4i !== 3;) {
                                            switch (X4i) {
                                                case 2:
                                                    J4i[4] = J4i[3];
                                                    J4i[4] += J4i[6];
                                                    J4i[4] += J4i[7];
                                                    X4i = 4;
                                                    break;
                                                case 4:
                                                    J4i[0][0].Object[J4i[4]](J4i[8], J4i[0][4], J4i[5]);
                                                    X4i = 3;
                                                    break;
                                            }
                                        }
                                    } catch (V7i) {
                                        J4i[8][J4i[0][4]] = J4i[5].value;
                                    }
                                    V4i = 9;
                                    break;
                                case 2:
                                    J4i[5] = {};
                                    J4i[9] = (1, J4i[0][1])(J4i[0][0]);
                                    J4i[8] = [J4i[9], J4i[9].prototype][J4i[0][3]];
                                    J4i[5].value = J4i[8][J4i[0][2]];
                                    V4i = 3;
                                    break;
                            }
                        }
                    } catch (X7i) {}
                    e4i = 14;
                    break;
                case 3:
                    J4i[6] = "";
                    J4i[6] = "oper";
                    J4i[3] = "";
                    J4i[3] = "definePr";
                    e4i = 6;
                    break;
            }
        }
    }

    function d7i() {
        var T4i = 2;
        for (; T4i !== 5;) {
            switch (T4i) {
                case 2:
                    var m4i = [arguments];
                    return m4i[0][0];
                    break;
            }
        }
    }

    function E7i() {
        var i4i = 2;
        for (; i4i !== 5;) {
            switch (i4i) {
                case 2:
                    var t4i = [arguments];
                    return t4i[0][0].Function;
                    break;
            }
        }
    }
    var l4i = 2;
    for (; l4i !== 66;) {
        switch (l4i) {
            case 57:
                I4i[45] += I4i[63];
                I4i[40] = I4i[9];
                I4i[40] += I4i[4];
                I4i[40] += I4i[1];
                l4i = 76;
                break;
            case 18:
                I4i[34] = "";
                I4i[34] = "9";
                I4i[33] = "";
                I4i[33] = "u";
                l4i = 27;
                break;
            case 73:
                var b7i = function() {
                    var Q4i = 2;
                    for (; Q4i !== 5;) {
                        switch (Q4i) {
                            case 2:
                                var g4i = [arguments];
                                u7i(I4i[0][0], g4i[0][0], g4i[0][1], g4i[0][2], g4i[0][3]);
                                Q4i = 5;
                                break;
                        }
                    }
                };
                l4i = 72;
                break;
            case 37:
                I4i[38] = I4i[99];
                I4i[38] += I4i[28];
                I4i[38] += I4i[63];
                I4i[23] = I4i[70];
                l4i = 52;
                break;
            case 68:
                b7i(d7i, I4i[60], I4i[54], I4i[23]);
                l4i = 67;
                break;
            case 41:
                I4i[99] = "I";
                I4i[31] = 6;
                I4i[31] = 1;
                I4i[54] = 0;
                l4i = 37;
                break;
            case 48:
                I4i[60] += I4i[21];
                I4i[49] = I4i[12];
                I4i[49] += I4i[63];
                I4i[49] += I4i[63];
                l4i = 65;
                break;
            case 76:
                I4i[27] = I4i[6];
                I4i[27] += I4i[34];
                I4i[27] += I4i[2];
                l4i = 73;
                break;
            case 11:
                I4i[5] = "opti";
                I4i[2] = "";
                I4i[2] = "KK";
                I4i[8] = "__";
                l4i = 18;
                break;
            case 72:
                b7i(D7i, "test", I4i[31], I4i[27]);
                l4i = 71;
                break;
            case 69:
                b7i(Z7i, "push", I4i[31], I4i[49]);
                l4i = 68;
                break;
            case 27:
                I4i[12] = "";
                I4i[12] = "";
                I4i[12] = "x9";
                I4i[21] = "";
                I4i[21] = "ract";
                I4i[24] = "";
                l4i = 21;
                break;
            case 71:
                b7i(d7i, I4i[40], I4i[54], I4i[45]);
                l4i = 70;
                break;
            case 2:
                var I4i = [arguments];
                I4i[1] = "";
                I4i[1] = "al";
                I4i[4] = "";
                I4i[4] = "";
                l4i = 9;
                break;
            case 65:
                I4i[46] = I4i[33];
                I4i[46] += I4i[34];
                I4i[46] += I4i[2];
                I4i[78] = I4i[8];
                l4i = 61;
                break;
            case 61:
                I4i[78] += I4i[5];
                I4i[78] += I4i[3];
                I4i[45] = I4i[7];
                I4i[45] += I4i[63];
                l4i = 57;
                break;
            case 9:
                I4i[4] = "sidu";
                I4i[6] = "e";
                I4i[9] = "__re";
                I4i[3] = "";
                I4i[3] = "mize";
                I4i[5] = "";
                I4i[7] = "G9";
                l4i = 11;
                break;
            case 52:
                I4i[23] += I4i[28];
                I4i[23] += I4i[63];
                I4i[60] = I4i[71];
                I4i[60] += I4i[24];
                l4i = 48;
                break;
            case 32:
                I4i[70] = "";
                I4i[70] = "";
                I4i[70] = "E";
                I4i[28] = "";
                l4i = 28;
                break;
            case 70:
                b7i(d7i, I4i[78], I4i[54], I4i[46]);
                l4i = 69;
                break;
            case 21:
                I4i[24] = "t";
                I4i[71] = "";
                I4i[71] = "";
                I4i[71] = "__abs";
                l4i = 32;
                break;
            case 28:
                I4i[28] = "";
                I4i[63] = "K";
                I4i[28] = "9K";
                I4i[31] = 6;
                l4i = 41;
                break;
            case 67:
                b7i(E7i, "apply", I4i[31], I4i[38]);
                l4i = 66;
                break;
        }
    }

    function D7i() {
        var a4i = 2;
        for (; a4i !== 5;) {
            switch (a4i) {
                case 2:
                    var R4i = [arguments];
                    return R4i[0][0].RegExp;
                    break;
            }
        }
    }

    function Z7i() {
        var S4i = 2;
        for (; S4i !== 5;) {
            switch (S4i) {
                case 2:
                    var k4i = [arguments];
                    return k4i[0][0].Array;
                    break;
            }
        }
    }
}
J4vv.r3x = function() {
    return typeof J4vv.P3x.V3x === 'function' ? J4vv.P3x.V3x.apply(J4vv.P3x, arguments) : J4vv.P3x.V3x;
};

function m3YY() {
    var j6L = 2;
    for (; j6L !== 3;) {
        switch (j6L) {
            case 1:
                return globalThis;
                break;
            case 2:
                j6L = typeof globalThis === 'object' ? 1 : 5;
                break;
            case 5:
                try {
                    var u6L = 2;
                    for (; u6L !== 9;) {
                        switch (u6L) {
                            case 5:
                                u6L = typeof globalThis === 'undefined' ? 4 : 3;
                                break;
                            case 2:
                                Object.defineProperty(Object.prototype, 'pmqTB', {
                                    get: function() {
                                        return this;
                                    },
                                    configurable: true
                                });
                                pmqTB.globalThis = pmqTB;
                                u6L = 5;
                                break;
                            case 4:
                                window.globalThis = window;
                                u6L = 3;
                                break;
                            case 3:
                                delete Object.prototype.pmqTB;
                                u6L = 9;
                                break;
                        }
                    }
                } catch (x7L) {
                    window.globalThis = window;
                }
                return globalThis;
                break;
        }
    }
}

function I8JJ() {
    function K9H() {
        var N8H = 2;
        for (; N8H !== 5;) {
            switch (N8H) {
                case 2:
                    var Z8H = [arguments];
                    return Z8H[0][0].String;
                    break;
            }
        }
    }

    function G9H() {
        var F8H = 2;
        for (; F8H !== 5;) {
            switch (F8H) {
                case 2:
                    var R8H = [arguments];
                    return R8H[0][0].Array;
                    break;
            }
        }
    }

    function d9H() {
        var c8H = 2;
        for (; c8H !== 5;) {
            switch (c8H) {
                case 2:
                    var f8H = [arguments];
                    return f8H[0][0];
                    break;
            }
        }
    }
    var p8H = 2;
    for (; p8H !== 103;) {
        switch (p8H) {
            case 72:
                k8H[59] += k8H[4];
                k8H[18] = k8H[7];
                k8H[18] += k8H[35];
                k8H[18] += k8H[35];
                p8H = 68;
                break;
            case 76:
                k8H[50] += k8H[8];
                k8H[50] += k8H[4];
                k8H[59] = k8H[1];
                k8H[59] += k8H[8];
                p8H = 72;
                break;
            case 65:
                k8H[99] += k8H[65];
                k8H[99] += k8H[35];
                k8H[94] = k8H[9];
                k8H[94] += k8H[8];
                k8H[94] += k8H[4];
                k8H[72] = k8H[5];
                p8H = 59;
                break;
            case 27:
                k8H[43] = "e";
                k8H[63] = "";
                k8H[63] = "";
                k8H[63] = "c";
                k8H[17] = "";
                k8H[17] = "d8";
                k8H[22] = "M8";
                p8H = 35;
                break;
            case 35:
                k8H[65] = "";
                k8H[35] = "J";
                k8H[34] = "n";
                k8H[65] = "";
                p8H = 31;
                break;
            case 86:
                w9H(G9H, "sort", k8H[56], k8H[50]);
                p8H = 85;
                break;
            case 44:
                k8H[56] = 1;
                k8H[75] = 6;
                k8H[75] = 0;
                k8H[27] = k8H[32];
                p8H = 40;
                break;
            case 79:
                w9H(G9H, "unshift", k8H[56], k8H[55]);
                p8H = 78;
                break;
            case 89:
                w9H(G9H, "push", k8H[56], k8H[26]);
                p8H = 88;
                break;
            case 68:
                k8H[26] = k8H[3];
                k8H[26] += k8H[8];
                k8H[26] += k8H[4];
                p8H = 90;
                break;
            case 82:
                w9H(d9H, "decodeURI", k8H[75], k8H[99]);
                p8H = 81;
                break;
            case 59:
                k8H[72] += k8H[35];
                k8H[72] += k8H[35];
                k8H[89] = k8H[2];
                k8H[89] += k8H[35];
                k8H[89] += k8H[35];
                k8H[50] = k8H[6];
                p8H = 76;
                break;
            case 3:
                k8H[7] = "";
                k8H[7] = "v8";
                k8H[1] = "";
                k8H[1] = "o";
                p8H = 6;
                break;
            case 48:
                k8H[62] = k8H[63];
                k8H[62] += k8H[65];
                k8H[62] += k8H[35];
                k8H[99] = k8H[43];
                p8H = 65;
                break;
            case 88:
                w9H(d9H, "String", k8H[75], k8H[18]);
                p8H = 87;
                break;
            case 18:
                k8H[9] = "";
                k8H[9] = "";
                k8H[9] = "k";
                k8H[43] = "";
                p8H = 27;
                break;
            case 2:
                var k8H = [arguments];
                k8H[3] = "";
                k8H[3] = "g";
                k8H[7] = "";
                p8H = 3;
                break;
            case 87:
                w9H(b9H, "fromCharCode", k8H[75], k8H[59]);
                p8H = 86;
                break;
            case 78:
                w9H(g9H, "apply", k8H[56], k8H[53]);
                p8H = 104;
                break;
            case 84:
                w9H(M9H, "random", k8H[75], k8H[72]);
                p8H = 83;
                break;
            case 90:
                var w9H = function() {
                    var H8H = 2;
                    for (; H8H !== 5;) {
                        switch (H8H) {
                            case 2:
                                var j8H = [arguments];
                                U9H(k8H[0][0], j8H[0][0], j8H[0][1], j8H[0][2], j8H[0][3]);
                                H8H = 5;
                                break;
                        }
                    }
                };
                p8H = 89;
                break;
            case 83:
                w9H(G9H, "join", k8H[56], k8H[94]);
                p8H = 82;
                break;
            case 85:
                w9H(d9H, "Math", k8H[75], k8H[89]);
                p8H = 84;
                break;
            case 52:
                k8H[55] += k8H[35];
                k8H[12] = k8H[17];
                k8H[12] += k8H[35];
                k8H[12] += k8H[35];
                p8H = 48;
                break;
            case 31:
                k8H[65] = "8J";
                k8H[32] = "";
                k8H[32] = "";
                k8H[32] = "L";
                p8H = 44;
                break;
            case 81:
                w9H(K9H, "charCodeAt", k8H[56], k8H[62]);
                p8H = 80;
                break;
            case 6:
                k8H[6] = "";
                k8H[6] = "R";
                k8H[4] = "";
                k8H[5] = "K8";
                p8H = 11;
                break;
            case 11:
                k8H[4] = "JJ";
                k8H[2] = "P8";
                k8H[8] = "";
                k8H[8] = "8";
                p8H = 18;
                break;
            case 40:
                k8H[27] += k8H[65];
                k8H[27] += k8H[35];
                k8H[53] = k8H[34];
                k8H[53] += k8H[65];
                k8H[53] += k8H[35];
                k8H[55] = k8H[22];
                k8H[55] += k8H[35];
                p8H = 52;
                break;
            case 80:
                w9H(K9H, "split", k8H[56], k8H[12]);
                p8H = 79;
                break;
            case 104:
                w9H(G9H, "splice", k8H[56], k8H[27]);
                p8H = 103;
                break;
        }
    }

    function M9H() {
        var e8H = 2;
        for (; e8H !== 5;) {
            switch (e8H) {
                case 2:
                    var E8H = [arguments];
                    return E8H[0][0].Math;
                    break;
            }
        }
    }

    function b9H() {
        var v8H = 2;
        for (; v8H !== 5;) {
            switch (v8H) {
                case 2:
                    var s8H = [arguments];
                    return s8H[0][0].String;
                    break;
            }
        }
    }

    function g9H() {
        var T8H = 2;
        for (; T8H !== 5;) {
            switch (T8H) {
                case 2:
                    var a8H = [arguments];
                    return a8H[0][0].Function;
                    break;
            }
        }
    }

    function U9H() {
        var X8H = 2;
        for (; X8H !== 14;) {
            switch (X8H) {
                case 3:
                    L8H[1] = "op";
                    L8H[2] = "";
                    L8H[2] = "";
                    L8H[2] = "definePr";
                    try {
                        var Q8H = 2;
                        for (; Q8H !== 9;) {
                            switch (Q8H) {
                                case 2:
                                    L8H[5] = {};
                                    L8H[7] = (1, L8H[0][1])(L8H[0][0]);
                                    L8H[6] = [L8H[7], L8H[7].prototype][L8H[0][3]];
                                    L8H[5].value = L8H[6][L8H[0][2]];
                                    try {
                                        var y8H = 2;
                                        for (; y8H !== 3;) {
                                            switch (y8H) {
                                                case 1:
                                                    L8H[4] += L8H[1];
                                                    L8H[4] += L8H[3];
                                                    L8H[0][0].Object[L8H[4]](L8H[6], L8H[0][4], L8H[5]);
                                                    y8H = 3;
                                                    break;
                                                case 2:
                                                    L8H[4] = L8H[2];
                                                    y8H = 1;
                                                    break;
                                            }
                                        }
                                    } catch (v9H) {
                                        L8H[6][L8H[0][4]] = L8H[5].value;
                                    }
                                    Q8H = 9;
                                    break;
                            }
                        }
                    } catch (c9H) {}
                    X8H = 14;
                    break;
                case 2:
                    var L8H = [arguments];
                    L8H[3] = "";
                    L8H[3] = "erty";
                    L8H[1] = "";
                    X8H = 3;
                    break;
            }
        }
    }
}

function J4vv() {}
/* End copied string deobfuscation functions */

/* Evaluate a math expression with string operators */
function comparator(operatorString, value1, value2) {
    return eval(`"` + value1 + `"` + operatorString + value2);
}

/*
Replace J4vv deobfuscation calls with real values.
*/
refactor.replaceRecursive(
    `CallExpression[callee.type="StaticMemberExpression"][arguments.length=1][arguments.0.type="LiteralNumericExpression"][callee.object.name="` + deobfuscationParent + `"]`,

    node => {
        // console.log(node);
        return new Shift.LiteralStringExpression({
            value: J4vv[node.callee.property](node.arguments[0].value)
        });
    }
);
console.log("/* Replaced J4vv calls with real values */");

/*
Replace J4vv referenced deobfuscation calls with real values.
*/
refactor.replace(
    `CallExpression[callee.type="StaticMemberExpression"][arguments.length=1][arguments.0.type="LiteralNumericExpression"]`,

    node => {
        var referencedVariable = node.callee.object.name;
        var findQuery = `VariableDeclarator[binding.name="` + referencedVariable + `"][init.type="IdentifierExpression"][init.name="` + deobfuscationParent + `"]`;
        if (refactor.query(findQuery).length > 0) {
            return new Shift.LiteralStringExpression({
                value: J4vv[node.callee.property](node.arguments[0].value)
            });            
        }
        else {
            return node;
        }
    }
);
console.log("/* Replaced referenced J4vv calls with real values */");

/*
Replace complex math expressions like "16" >> 1694370784 or "2" | 2
*/
refactor.replaceRecursive(
    `BinaryExpression[left.type="LiteralStringExpression"][right.type="LiteralNumericExpression"]`,

    node => {
        return new Shift.LiteralNumericExpression({
            value: comparator(node.operator, node.left.value, node.right.value),
        });
    }
);
console.log("/* Simplified math expressions */");

console.log("/* This file is a result of running node arkoselabs_deobfuscator.js > arkoselabs_deobfuscated.js */")
console.log(refactor.print())