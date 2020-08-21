const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');
const unraw = require('unraw');

const fileContents = require('fs').readFileSync('./malvertising_css.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);


stringDict = ((function(j, k) {
        function H(index) {
            return Number(index).toString(36).replace(/[0-9]/g, function(s) {
                return String.fromCharCode(parseInt(s, 10) + 65);
            });
        }
        var o = {
            $: function() {
                var o = {};
                for (var i = 0; i < arguments.length; i += 2) {
                    o[arguments[i]] = arguments[i + 1];
                }
                return o;
            }
        };
        j = j.split('+');
        for (var i = 0; i < 813; i++) {
            (function(I) {
                Object['defineProperty'](o, H(I), {
                    get: function() {
                        return j[I][0] !== ';' ? k(j[I]) : parseFloat(j[I].slice(1), 10);
                    }
                });
            }(i));
        }
        return o;
    }(';0++i#l.*#:6q=:+lBZo6:#+iE9lHqEl9+MoW9l9+;8+;86400000+:E._.[NZ#.m9.Q~+B~HNl._.x.TE5+.go:.@E.@H6Wwl+;299+;2147483647+3::Z#.J.4.4NNN.)^oo^Ml.)=ow.4HW}q=oE.)q=o+;1+;2+;3+;4+;100+tWqB.j}W.0.m~+AH^Ho6wW:#+kAz.t}3.Nl~.f.[6.1-#t&.U.G.QM.F].m*R1.|N./oK.c.O.:.JqV.g.!:.P=Zh._.A.j(s.TwSv.a7BY.8i.X.D.0E9.,.6e.@.4.b.I.L.d.xH5p^W.V+9lHqEl.,6oZl6:t+Ho6./W=3+=WMM+AH^MoW9l9ZoZiZ+#l6ql#R:W6:+ZZi.XoiE:+MW#:.,Zi+=Mq=~#RqE=lRl##qoER:W6:+=Mq=~#RqE=l.bW#:.,Zi+o5Sl=:+qH6Wwl+lw5l9+}q9lo+Wi9qo+9lHWiM:+.)+.}+c+oE.IowWqE.X3WE^l+^l:.aZ:qoE#+#l:.aZ:qoE#+#l:.aZ:qoE+q#.Dlo.|W:=3+^l:hqlNW5qMq:t+:6t(oZ+^l:.,W6lE:.go9l+qEq:Rl##qoE+^l:.,6l}qoi#.XMq=~+qE=6lwlE:.XMq=~#+qE=6lwlE:.@wZ6l##qoE#+6l#l:.XoiE:l6#+6l#l:.XMo#l.XoiE:l6+^l:.XMo#l.XoiE:l6+#W}lRl##qoE.IW:W+#W}lRl##qoE.Xi#:ow.flt+=3l=~Rl##qoE.Xi#:ow.flt+q#Rl6ql#./E9l9+q#.@E:l6wl9qW:l.@wZ6l##qoE.P}WqMW5Ml+q#.@wZ6l##qoE.P}WqMW5Ml+^l:.X3l=~.@.L6Wwl+#l:.X3l=~.@.L6Wwl+wWZ.@:+*il6t+#l=i6lR=6qZ:.@ESl=:+^l:./B=Mi9l#+q#./M.,oZZqE^+wW~l.L6Wwl+qESl=:.Xi6#o6.,oqE:l6.Lo6.@Z3oEl+wW~lR=6qZ:#+9E#.,6lHl:=3+=3l=~v.!Mo=~+=3l=~.,oZl6.!Mo=~l6+:6W}l6#l.,W6lE:#+^l:&qE9oN.Flq^3:+^l:&qE9oN&q9:3+^l:&qE9oN(oZ+^l:&qE9oN.blH:+q#.aZlE(36oi^3.PE:q.P95Mo=~+=WE.LoMMoN.bqE~+q#.@E:l6wl9qW:l(W6^l:+^l:v#l9.|l:3o9#+W99v#l9.|l:3o9+:6W=~&qE9oN+6lwo}lYil6t.,W6Ww+#l:Yil6t.,W6Ww+#l:YiWMq:t.,W6Ww#+^l:.a}l6MWt.XoE:WqEl6+q#.|W=.aR.LiMMR=6llE.|o9l+q#.@E.fEoNE&l5hqlN+q#.@.aR.,i:Mo=~l6+q#.,oZiE9l6.aE.|o5qMl+q#.@.aR.XMq=~.LqB+q#.PE96oq9.XMq=~.LqB+^lEl6W:lzWE9ow.F(.|.bv6M+^lEl6W:lzWE9ow.,.F.,v6M+^l:vz.bR=o6l+=6lW:l.@E}q#q5Ml.@H6Wwl+#l:.IowWqE+^l:.,6oBt.IowWqE+^l:(W5.bWiE=3l6+oZlE.L6l#3.,oZiE9l6+=3l=~.bWAt.L6l#3.,oZiE9l6+56oW9=W#:.@EHo+56oW9=W#:.XWMM#q^E+iE.!6oW9=W#:.@EHo+q#.boW9l9+^l:.Lo6wW:#+6iE.P.P.!+qESl=:.,6oBt.IowWqE+H6owR:6qE^+:oR:6qE^+^l:.|qEqHql9(oR:6qE^+ssl#.|o9iMl+;33+;7+;6+;19+;30+;5+;13+;29+=i66lE:R=6qZ:+;12+#=6oMMk+qEEl6.Flq^3:+3q#:o6t+o6qlE:W:qoE+;16+;17+;18+.tMo^op56WE9.A+q+]5Mo5.J+#=6llE+=36owlhl6#qoE.X36owl.|W:=3+=36owlhl6#qoE.X6q.aR.|W:=3+=36owlhl6#qoE+q#.|W=.aR+q#.LW=l5oo~.!6oN#l6+q#(Nq::l6&l5hqlN+q#RWHW6qh.X+oEl66o6+:ElwlM./:Elwi=o9+ZW^l.aE.IowWqERl6ql#.Lo6.bqw.bo+Nq9:3+3::Z#.J.4.4+q9+#ZMq:+MlE^:3+q#.PZZMl&l5~q:+q#.PE96oq9+q#.|o5qMl.Lq6lHoB+q#.Lq6lHoB+q#.@.aR+q#v.X.!6oN#l6+q#.aZl6W.|qEq+q#.|o5qMl+q#.LW=l5oo~.!6oN#l6.aE.PE96oq9+q#.@.aRRWHW6q+q#.@.aR.X36owl+q#.@.aR.Lq6lHoB+q#RWHW6q+q#.@././9^l+q#kWE9lB.!6oN#l6+q#.X36owl+q#RwWMM.P996l##.!W6+q#.aM9.@./+q#.@.aR&l5hqlN+wWB+.,+.g+.,.4.g+.g.4.,+.,.4.g.4.g+.g.4.,.4.g+.,.4.g.4.,.4.g+.g.4.g.4.g.4.g+.T+.T.T+.T.T.T+.T.T.T.T+.T.T.T.T.T+ElN#+ZW^l#+Nq~q+56oN#l+}qlN+wo}ql+W6:q=Ml+W6:q=Ml#+#:W:q=+ZW^l+qE9lB+Nl5+NqE+}WMil+9o=+W}WqM.Flq^3:+;31+;32+;34+;35+;9+;10+;15+;20+;22+;23+;24+;25+;26+;27+;28+;11+;14+;21+=6lW:l./MlwlE:+#l:.IW:l+^l:(qwl+6oiE9+HMoo6+oZlE.,oZ#&3lE.@E.@H6Wwl+H6l#3.,oZiE9l6+EW}+#:tMl+AH^Z6oBt3::Z+#6=+SoqE+#Mq=l+#:6qE^+9owWqE+ZZi.XMq=~#+#l##qoE(qwloi:+W99.a}l6MWt+#wW6:.a}l6MWt.|qE&q9:3+#wW6:.a}l6MWt.|qE.Flq^3:+oE.XMq=~(6q^^l6+.|W=qE:o#3+.L.!.Phr.4+#=6qZ:#+wW3.XMq=~#+Zi#3iZv6M+lB:6W.aE=Mq=~v6M+qE.,W^l.,i#3v6M+qE:l6#:q:qWMv6M+#Mq9l6v6M+Eo:qHq=W:qoE./EW5Ml+.@E}WMq9.*W::lwZ:.*:o.*9l#:6i=:i6l.*EoE.1q:l6W5Ml.*qE#:WE=l+Eiw5l6+HqM:l6+:l#:+q#.P66Wt+lB=Mi9l#+WZZMlNl5~q:+WE96oq9+Hq6lHoB+^q+q.,3oElpq.,W9pq.,o9+v.X.!6oN#l6r.4+.aZl6W.*.|qEqr.4+hl6#qoEr.47]R-.pRWHW6q+./9^lr.4r9.p+kW.!6oN#l6+;10802+:6t(o./#=WZl.@H6Wwl+Eo:qHq=W:qoE.aE.,W^l./EW5Ml9+q#.aE=Mq=~.Iq#W5Ml9.@E.fEoNE&l5hqlN+q:l6W:o6+Z6l}lE:.a:3l6.XMq=~#+9WE=qE^.,oZiE9l6+Zi#3+i#l6.P^lE:+.4+3lq^3:+oZW=q:t+9W:W#l:+q#.,6oBt+i#l6.Dlo+.PE96oq9+ZW6:El6+Zl6Ho6wWE=lv6M+6l}l6#l+Ho6=l.XMq=~+^l:.!oiE9qE^.XMqlE:zl=:+.@E.@H6Wwl.XWE.go:./Bq:+:W6^l:+W95Mo=~.,oZiZ+Nq:3+9o=iwlE:./MlwlE:+:oZ+6lZMW=l+Eo+wW:=3+=MqlE:(oZ+=MqlE:.blH:+5o9t+._ZB+AoEl+9o=./MlwlE:+=Mo#l.XoiE:+#wW6:.a}l6MWt+~lt#+qEq:R:W6:+.X6q.aRr.4+.LBq.aR+r.4:.)=or5+=lqM+MlH:+qE:l6wl9qW:l.,W^lRtw5qo#q#+HiE=:qoE+W99./}lE:.bq#:lEl6+:oi=3#:W6:+MWAt.L6l#3.,oZiE9l6+#o6:+oE=Mq=~+.T.).T.)._+Mo=WMR:o6W^l+i6M+=Mq=~+qH6Wwl&qE9oN.aZlE+oHH#l:.Flq^3:+hl6#qoEr.4+=oo~ql+qEEl6&q9:3+.*ZoZl65Mo=~l6+#=6llE(oZ+=WZZqE^.Il=6lW#l.Dlo#+=WZZqE^.Il=6lW#lKoEl.@9+ZoZiE9l6hqlN.IlW9MqEl.XoiE:+=WZZqE^.Il=6lW#l.Iq#W5Ml.,6oBt+ZoZiE9l6hqlN.IlW9MqEl(qwloi:+3lW9+ZW6lE:.go9l+Mqw.bo+AoEl.@9+6lH6l#3.,W^l.aE.IowWqERl6ql#.Lo6.bqw.bo.aE.,W^lzlH6l#3+qE:l6wl9qW:l.,W^l+qE:l6wl9qW:l.,W^l.XMq=~#+qE:l6wl9qW:l.,W^l.Dlo+ZZiYE:t+ZZi(qwloi:+#:W6:.XMq=~#+#:W6:(qwloi:+#l##qoE.XMq=~#+WMMoN.Iq#W5Ml(6q^^l6+.tWZi.)Z3Zp:W^.)wqE.)S#.A+.t.n.G.).cWW5.A.t.n.G.).coE=Mq=~.A.).c+:qwloi:+.X36owlr.4.t7.T.1.Q-c._.VV.A+.X6q.aRr.4.t7.T.1.Q-c._.VV.A+#i5wq:+Ho6=l9.,l6HowWE=l.XWMM+Zl6Ho6wWE=l.,6o5W5qMq:t+qwW^l(o(6W=~.,l6Ho6wWE=l.aE+9q#W5Ml.,l6Ho6WwE=l.XowZMl:lMt+ss.,.,vsR./RR.@.a.gs._s+ss.,.,vsR./RR.@.a.gs.a.gs.I.a.|.P.@.gs._s+=Mq=~.PEtN3l6l+36lH+W95Mo=~.Iq#W5Mlv5Mo=~+q#.,6lZW6l9+oEzlW9t+^l:.IW:l+^l:.ai:.L6ow.@H6Wwl+9o=iwlE:+ss.,.,vs+#l:.P::6q5i:l+Ho6wW:+}l6#qoE+#oi6=lKoEl.@9+^lEl6W:qoE(qwl+9q#ZMWt+:W^.gWwl+oZlEl6+;800+;1000+ZoZ+oZlE+#l:zl*il#:.FlW9l6+#lE9+ZW6lE:+oE.XMo#l.@E:l6#:q:qWMv6M+oE.XMo#l.@E:l6#:q:qWM(qwloi:+;200+=##(lB:+EoR=6oMM.,MlW#l+wo5qMl.,oZvZ(W6^l:.!MWE~.bqE~#+wo5qMl.,oZiE9l6(W6^l:.!MWE~.bqE~#+.P+s5MWE~+lEW5Ml.,oZiE9l6.Lo6.bqE~#+oZlEhqW.Il#~:oZ.,oZiE9l6+9l#~:oZ.,oZiE9l6./}l6tN3l6l+ZoZiZ&q:3oi:.,6oZW^W:qoE.PEtN3l6l+9q#W5MlRWHl.aZlE+W5i#q}lzl9q6l=:+W95Mo=~.,oZiZRWwl.a6q^qE+.)3:wM+oZlEhqW.|o5qMl.,oZiE9l6.PE9.,6oZW^W:l.Lo6wRi5wq:+9q#W5Ml.aZlEhqW.|o5qMl.,oZiE9l6.PE9.LoMMoN.bqE~#+9q#W5Ml&Wq:.Lo6&qE9oN.Lo=i#.!lHo6lzl9q6l=:+WZZlE9.X3qM9+W#tE=+#=6llE.blH:+.4.4^oo^Ml.)=ow.n5}l6.G+W5oi:.J5MWE~+*il6tRlMl=:o6.PMM+wl##W^l+#l##qoER:o6W^l+qE=Mi9l#+Mo=W:qoE+;250+;500+wWZ+qE9lB.aH+6lwo}l.X3qM9+:tZl+N6q:l+=Mo#l+lB:6W+q.aR.X36owlRNWZ.,oZiE9l6+ZZi.Iq#W5Ml(6q^^l6+9lHl6+EoEl+Ho=i#+6WE9ow+^l:+#=6qZ:+ZW^lk.aHH#l:+ZW^le.aHH#l:+*il6tRlMl=:o6+.,.aR(+.XoE:lE:.1:tZl+WZZMq=W:qoE.4S#oE+=oE:lE:&qE9oN+9l#~:oZ.X36owl.LqB.,oZiE9l6+s:oZ+#9+^iw+s+qE#l6:.!lHo6l+W99.a}l6MWt#+.Lq6lHoB+6lHl66l6+qw^+.G.u.*lBZq6l#.G(3i.V.*.T._.*.8WE.*._.Q.[.T.*.T.T.J.T.T.J.T._.*.D.|(.u.*ZW:3.G.4+r5.N.n+oZlEhqW&qE9oN.m+oZlE.P95Mo=~(W5iE9l6+oZlEhqW.IWE=qE^.,oZiE9l6+oZlEhqW.|o5qMl.,oZiE9l6+ZW6#l+:o.boNl6.XW#l+.n+.N+oZlE.Lo6.@.aREo:RWHW6q._+ssZi#3iZ.@Eq:l9+ssqE:l6#:q:qWM.@Eq:l9+WW5:l#:.J+^l:.P::6q5i:l+.:+ZZi+:q:Ml+wl:W7EWwl.G~ltNo69#-+wl:W7EWwl.G9l#=6qZ:qoE-+6lM+Z6oBt.G+=MqlE:.Flq^3:+#=6oMM.Flq^3:+6l9i=l+#lE9.|l:W+=oE=W:+ZZi&W#R3oNE.Lo6+Zow=+q.aR.XMq=~.LqB+WE96oq9.XMq=~.LqB+=Mo#l9+W^^6l##q}l+^l:./MlwlE:#.!t(W^.gWwl+i6M.G+WZi.G+WW5.G+:oi=3lE9+.*WE:qW95Mo=~.*qE.*Mq#:lEl6+Z6oBtzl9q6l=:.,oZiZ+oZlE.P95Mo=~.,oZiZ+.)Z3Z+:oZ.G.T.VMlH:.G.Q.Q.Q.Q.Q.VNq9:3.G._.V3lq^3:.G._.V:ooM5W6.G._.VMo=W:qoE.G._.V#:W:i#.G._+.L.az.|+.V+:3lE+qEEl6.F(.|.b+#:6qE^qHt+9l#~:oZ.,oZiE9l6./}l6tN3l6l.bqE~#+.G+oZlEhqW&qE9oN.0+9E#.1Z6lHl:=3+Eo:qHq=W:qoE#v6M+ZW:3EWwl+6l:W6^l:qE^.L6Wwlv6M+Z6lHl:=3+l}lE:+wl:3o9+W=:qoE+#=6oMM(oZ+#=6oMM.blH:+.7.*.*.*.*.*.*.*.*.*.*.*.*ZoqE:l6.1l}lE:#.J.*EoEl.u.7.*.*.*.*.*.*.*.*.*.*.*.*Zo#q:qoE.J.*W5#oMi:l.u.7.*.*.*.*.*.*.*.*.*.*.*.*:oZ.J.*.T.u.7.*.*.*.*.*.*.*.*.*.*.*.*MlH:.J.*.T.u.7.*.*.*.*.*.*.*.*.*.*.*.*Nq9:3.J.*+Z6l}lE:.IlHWiM:+#:oZ.@wwl9qW:l.,6oZW^W:qoE+;171+MWAt.L6l#3.,oZiE9l6.J~EoNE+.G.t7].N.:-.c.A+Nq:3.X6l9lE:qWM#+oEMoW9+3o#:+#=6+tl#+lE:6ql#+oZlE.P99q:qoEWM(W5#.j+#3ll:+W+9oE:.LoMMoN.bqE~+;36+.4Mo^.)S#.nA.G+=oE:lE:+Z5&qE9oN.aZlE+#owl+l#=9E.)=o+oE.XMq=~./B=Mi9l#+=3l=~.,oZiE9l6hqlN(qwl.J+.D./(+.u+9q}+H6l#3.,oZiE9l6.JEoNqE+oZlEhqW.Lo6wRi5wq:+#lMl=:o6+Zo#:.|l##W^l+3::Z#.J.4.45l96WZqoEW.)=ow.4WZi.)Z3Z.noo.G._.NAoElq9.G+qE#l6:ziMl+Eo(6W=~&qE9oN+.|R.@./+#3+#W3+Nt+N3+=N+Nq3+NH=+ZM+96H+EZ+Z:+E5+E^+qB+EN+:5+MWAt.L6l#3.,oZiE9l6.JHoiE9+Zo#q:qoE+A.@E9lB+}q#q5qMq:t+=H+EW:q}l+#=6llEk+#=6llEe+.C#=6qZ:.2.7.*.*.*.*NqE9oN.)6l#qAl(o.t._.V._.A.u.7.*.*.*.*=oE#:.*q.*.G.*#l:.@E:l6}WM.tHiE=:qoE.*.t.A.*c.7.*.*.*.*.*.*.*.*qH.*.t#=6llEk.*.2.*._.T.T.A.7.*.*.*.*.*.*.*.*.*.*NqE9oN.)wo}l(o.t.Q.Q.Q.Q.Q.V.*.T.A.u.7.*.*.*.*.*.*.*.*lM#l.7.*.*.*.*.*.*.*.*.*.*NqE9oN.)wo}l(o.t.Q.Q.Q.Q.Q.V.*.Q.Q.Q.Q.Q.A.7.*.*.*.*V.V.*.0.T.A.7.*.*.*.*NqE9oN.)oE5Mi6.GHiE=:qoE.t.Ac.7.*.*.*.*.*.*.*.*=MlW6.@E:l6}WM.tq.A.u.7.*.*.*.*.*.*.*.*NqE9oN.)wo}l(o.t+;110+#:WE9WMoEl+Nl596q}l6+.c.V.*.c.*.c.V.*.c.*.c.*.c.V.*.c.*.2.*.c.V.*.c.*.2.*.c.*.2.*.cc=i6#o6.J.*ZoqE:l6.6qwZo6:WE:.uV+qEq:.|oi#l./}lE:+9q#ZW:=3./}lE:+.u.*lBZq6l#.G+.@E.1.,W^l.*.,i#3+W5#oMi:l.6qwZo6:WE:+5Mo=~.6qwZo6:WE:+.1._.T.T.T.TZB.6qwZo6:WE:+._ZB.6qwZo6:WE:+.1._.T.T+3q99lE.6qwZo6:WE:+o6q^qE+=MW##.gWwl+Eo.@wZ6l##qoE.P}WqMW5Ml+5Mi6+oZlE.P99q:qoEWM(W5#.0+~ltNo69#+9l#=6qZ:qoE+MoW9+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*3lq^3:.J.*+.t]p.u.*.A+MqE~+.:.).c.i+#lMH+wWB(oi=3.,oqE:#+HqE9+#.J+ZMi^qE#+Eo:qHq=W:qoE.aE.,W^l.bq5v6M+Ho6w+#lE9.!lW=oE+lB=Mi9l9.XMq=~+#N+NB+NN+NqN+:W6^l:(oi=3l#+H#+6l:i6E.G+woA.,WqE:.XoiE:+#3qH:+.G.t7].u-.c.A+:ov(.XR:6qE^+.*+R3o=~NW}l.LMW#3.)R3o=~NW}l.LMW#3.).[+R3o=~NW}l.LMW#3.)R3o=~NW}l.LMW#3.).O+R3o=~NW}l.LMW#3.)R3o=~NW}l.LMW#3+^loMo=W:qoE+W95Mo=~.,oZiZ.bqE~+W95Mo=~.,oZiZ(qwloi:+EWwl+.NH.G+p+qE#:WMMl9+6WN+wWSo6+wqEo6+6l}q#qoE+6l}q#qoER:6+wWSo6.P:.blW#:+wqEo6.P:.blW#:+6l}q#qoE.P:.blW#:+}l6#qoE.P:.blW#:+.LMW#3.Il:l=:+:6qw+oi:l6.Flq^3:+=MqlE:&q9:3+=6lW:l(lB:.go9l+3o#:EWwl+;56+;3571+=oE:lE:.Io=iwlE:+#6=./MlwlE:+#oi6#l.Iq}+Eo.*NqE9oN+9W:W+=6lW:l./}lE:+6l#ZoE#l+oZ:qoE#zl*il#:.LWqM+6l*il#:.PEqwW:qoE.L6Wwl+Nl5~q:zl*il#:.PEqwW:qoE.L6Wwl+woAzl*il#:.PEqwW:qoE.L6Wwl+ozl*il#:.PEqwW:qoE.L6Wwl+9oi5Ml.XMq=~+q.aRRWHW6qRNWZ.,oZiE9l6+=oiE:+3W#.Lo=i#+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*A.1qE9lB.J.*+^+.|oi#l./}lE:#+H6Wwl#+H6l#3.,oZiE9l6.J6l9q6l=:+oZlEhqW.Il#~:oZ.bqE~.,oZiE9l6._+.|oi#l./}lE:+.*i5Mo=~+=i66lE:(W6^l:+.u.*ZW:3.G.4.u.*9owWqE.G+=MW##.bq#:+=WMM.,3WE:ow+=MqlE:e+=MqlE:k+:lB:.4SW}W#=6qZ:+oi:l6&q9:3+Z6o:o:tZl+AoElq9+.O.V.T.V.0._+9WE=qE^.,oZiE9l6.Dlo#+oZlE.Lo6.@.aREo:RWHW6q.0+=3W6.Xo9l.P:+3W#.P::6q5i:l+E+.A.u.7.*.*.*.*.*.*.*.*NqE9oN.)6l#qAl(o.t+3q99lE+oZlEhqW&qE9oN._+.u.7.*.*.*.*.*.*.*.*+.nS#oE.flt.G+.Dl:hW6qW5Ml+9lHWiM:.bq#:lEl6+.*.p+.PMMoNR=6qZ:.P==l##+cAoElq9V+Hq6#:.X3qM9+.i}l6#qoE+ss.,.,vs.,z.L.0+WMNWt#+wqE+ZoN+EooZlEl6.*Eo6lHl6l6+.@E.@H6Wwl.XWE./Bq:+r.)+Eo.a}l6MWt#+ZoZiE9l6hqlN(qwl.J+H6ow.X3W6.Xo9l+6lwo}l./}lE:.bq#:lEl6+qEZi:+Eo:qHq=W:qoE.aE.,W^lKoEl.@9+=Mo#l9.,oZ.J+7W.1A.P.1K-+oZlE.P99q:qoEWM(W5#._+woi#l9oNE+Eo:qHq=W:qoE.aE.,W^l.,i5+Eo:qHq=W:qoE.aE.,W^l.L6l*+Eo:qHq=W:qoE.aE.,W^l.,l6qo9.|#+Eo:qHq=W:qoE.aE.,W^l.IlMWt.|#+=Mo#ls:qwl+H6l#3.,oZiE9l6.JNqE+w#+.c+^9Z6+;3600000+:+;12000+6l^q#:l6.,i#3+i+Zi5+9WE=qE^.,oZiE9l6.Iq#W5Ml.,6oBt+sZ3WE:ow+ElB:+.A.u.7.*.*.*.*.*.*.*.*NqE9oN.)Mo=W:qoE.)36lH.G.B+6lwo}l.P::6q5i:l+.@.g.,v(+WZZMq=W:qoE.4B.1#3o=~NW}l.1HMW#3+oZlEhqW.Il#~:oZ.bqE~.,oZiE9l6.0+oZ:qoE#.,W6#l.LWqM+W=:q}le./66o6+=Mq=~.bq#:lEl6+lBZq6l#.!W=~.XMq=~+.!.P.X.f.X.b.X.f+;300+woi#liZ+9oEl+wqwl(tZl#+.B.u.7.*.*.*.*V.u.7.*.*.*.*.C.4#=6qZ:.2+5+H6l#3.,oZiE9l6.JHWqM+;97+Eo9l.gWwl+6lMW:q}l+.!v((.a.g+lEW5Ml9.,Mi^qE+;60+oE.XMo#l.@E:l6#:q:qWM+oZlE.P99q:qoEWM(W5#.m+5W=~.XMq=~.P9+.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*Zo#q:qoE.J.*W5#oMi:l.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*:oZ.J.*+=3WE^l9(oi=3l#+H6l#3.,oZiE9l6.JMqE~+5W=~.XMq=~KoEl+qE:l6wl9qW:l.,W^l.JEo.bqE~+#l:.XWZZqE^.Il=6lW#lKoEl.@9+:oi=3lE9.bq#:lEl6+oWq9+Zl6Ho6wWE=l+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*MlH:.J.*+sl66soWq9sEo:s9lHqEl9+~~Z.jW.UB.U:}+A=9+Eo.1oE.XMo#l.@E:l6#:q:qWM+W5#+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*Nq9:3.J.*+:oi=3#:W6:.bq#:lEl6+H6l#3.,oZiE9l6.JHo6w+Zi#3R:W:l+;55+^l:./E:6ql#+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*3lq^3:.J.*+6l#l:.XWZZqE^.Il=6lW#lKoEl.@9+;2000+5W=~.XMq=~.go.Fq#:o6t.aEMt+ZB.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*A.1qE9lB.J.*+3::Z.J.4.4+.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*+oEv#l6.P=:q}W:qoE+lEW5Mlv#l6.P=:q}W:qoE+WZZhl6#qoE+.4WHi.)Z3Z.nAoElq9.G+i#l6.P=:q}W:qoE+^6oo~#ow.)=ow+qEq:./E9+ZoZ#:W:l+.|W=+96WN.a}l6MWt#+lBZ+.N}W6.G+5W=~^6oiE9.J.*6^5W.t.T.V.*.T.V.*.0.U.U.V.*.T.).m.A.u+3WE9Ml.XMq=~#.bq#:lEl6+lBl=R=6qZ:+6l:i6E+.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*ZoqE:l6.1l}lE:#.J.*Wi:o.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*+=oEEl=:./E9+q#.P=:q}l+wl:6q~W.@9+#lE9.|l:Wv6M+q#.gW.g+=oEEl=:R:W6:+=Mq=~.bq#:lEl6.0+W::W=3./}lE:+.tHiE=:qoE.tw.Vl.V:.V6.Vq.V~.VW.Acw7q-.Gw7q-ppHiE=:qoE.t.Ac.tw7q-.)W.Gw7q-.)Wpp7-.A.)Zi#3.tW6^iwlE:#.AV.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*w7q-.)M.G._.cElN.*.IW:l.t.A.u~.Gl.)=6lW:l./MlwlE:.t:.A.VW.Gl.)^l:./MlwlE:#.!t(W^.gWwl.t:.A7.T-.V~.)W#tE=.G._.V~.)#6=.G6.VW.)ZW6lE:.go9l.)qE#l6:.!lHo6l.t~.VW.AV.A.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.tNqE9oN.V.*9o=iwlE:.V.*.##=6qZ:.#.V.*.#3::Z#.J.4.4w=.)tWE9lB.)6i.4wl:6q~W.4:W^.)S#.#.V.*.#tw.#.A.u.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*tw.t+.V.*.#qEq:.#.V.*c.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*=Mq=~wWZ.J:6il.V.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*:6W=~.bqE~#.J:6il.V.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*W==i6W:l(6W=~.!oiE=l.J:6il.V.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*Nl5}q#o6.J:6il.7.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*V.A.u+#=6qZ:.boW9.,l6Ho6wWE=l+9q#W5Mlv#l6.P=:q}W:qoE+qw^.boW9.,l6Ho6wWE=l', function(n) {
        for (var r = 'YzR(vh&ekK7r-]syW5=9lH^3qS~MwEoZ*6#:i}NBtAcpV1)4T_0mjUO[xQJuCG2ndP!XI/LDF@8fb|ga,', t = ['.', '%', '{'], e = '', i = 1, f = 0; f < n.length; f++) {
            var o = r.indexOf(n[f]);
            t.indexOf(n[f]) > -1 && 0 === t.indexOf(n[f]) && (i = 0), o > -1 && (e += String.fromCharCode(i * r.length + o), i = 1);
        }
        return e;
})));


refactor.replace(
    `StaticMemberExpression[object.type="IdentifierExpression"][object.name="$"][property]`,

    node => {
        var newValue = stringDict[node.property];
        var newType = typeof(newValue);
        if (newValue === undefined) { // if no dict value exists, return original node
            return node;
        }
        else if (newValue === null) {
            return new Shift.LiteralNullExpression({});
        }
        else if (newType === "number") {
            return new Shift.LiteralNumericExpression({
                  value: newValue,
            })
        }
        else if (newType === "string") {
            return new Shift.LiteralStringExpression({
                  value: newValue,
            });        
        }
        else {
            return node;
        }
    }
)

refactor.normalizeIdentifiers();
refactor.expandBoolean();
refactor.convertComputedToStatic();
console.log("/* This file is the result of running `node malvertising_css_deobfuscator.js > malvertising_css_deobfuscated.js` */");
console.log(refactor.print());
