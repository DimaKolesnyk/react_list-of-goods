(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),a=s.n(r),c=s(5),i=s(6),o=s(9),l=s(7),h=s(8),u=s(1),d=(s(14),s(15),s(2)),b=s.n(d),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function N(e,t){var s=t.sortType,r=t.isReversed,a=Object(h.a)(e);return a.sort((function(e,t){switch(s){case n.ALPHABET:return e.localeCompare(t);case n.LENGTH:return e.length-t.length;default:return 0}})),r&&a.reverse(),a}!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isReversed:!1,sortType:n.NONE},e.handleSortAlphabetically=function(){e.setState({sortType:n.ALPHABET})},e.handleSortByLength=function(){e.setState({sortType:n.LENGTH})},e.handleReversed=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:n.NONE})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortType,r=b()("button is-info",{"is-light":s!==n.ALPHABET}),a=b()("button is-success",{"is-light":s!==n.LENGTH}),c=b()("button is-warning",{"is-light":!t});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsx)("h1",{className:"title is-1",children:"React List of Goods"}),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:r,onClick:this.handleSortAlphabetically,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:a,onClick:this.handleSortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:c,onClick:this.handleReversed,children:"Reverse"}),(s!==n.NONE||t)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:N(j,this.state).map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})]})}}]),s}(u.Component);a.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c966e63e.chunk.js.map