(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),o=(t(55),t(56),t(57),t(5)),s=t(40),i=t.n(s),m=t(81),u=t(35),h=t(18),d=(t(58),t(25)),E=t.n(d),v=t(39),g=t.n(v),p=t(80),_=t(3),f=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},r)},N=function(){return Object(n.useContext)(f)},w=t(30),y="SET_SEARCH_TERM",P=function(e,a){switch(console.log(a),a.type){case y:return Object(w.a)(Object(w.a)({},e),{},{term:a.term});default:return e}},k=function(e){var a=e.hideButtons,t=void 0!==a&&a,r=e.termm,c=N(),o=Object(h.a)(c,2);Object(u.a)(o[0]);var s=o[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),d=m[0],v=m[1],f=Object(_.f)(),b=function(e){e.preventDefault(),f.push("/search"),s({type:y,term:d})};return l.a.createElement("form",{className:"search"},l.a.createElement("div",{className:"search__input"},l.a.createElement(E.a,{className:"search__inputIcon"}),t?l.a.createElement("input",{value:d,placeholder:r,onChange:function(e){return v(e.target.value)}}):l.a.createElement("input",{value:d,onChange:function(e){return v(e.target.value)}}),l.a.createElement(g.a,null)),t?l.a.createElement("div",{className:"search__buttons"},l.a.createElement(p.a,{className:"search__buttonsHidden",type:"submit",variant:"outlined",onClick:b},"Google Search"),l.a.createElement(p.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):l.a.createElement("div",{className:"search__buttons"},l.a.createElement(p.a,{type:"submit",variant:"outlined",onClick:b},"Google Search"),l.a.createElement(p.a,{variant:"outlined"},"I'm Feeling Lucky")))};var S=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home__header"},l.a.createElement("div",{className:"home__headerLeft"},l.a.createElement(o.b,{to:"/about"},"About"),l.a.createElement(o.b,{to:"/store"},"Store")),l.a.createElement("div",{className:"home__headerRight"},l.a.createElement(o.b,{to:"/gmail"},"Gmail"),l.a.createElement(o.b,{to:"/image"},"Images"),l.a.createElement(i.a,null),l.a.createElement(m.a,null))),l.a.createElement("div",{className:"home__body"},l.a.createElement("img",{alt:"To all the coronavirus helpers, thank you",src:"https://www.google.com/logos/doodles/2020/thank-you-coronavirus-helpers-april-25-26-copy-6753651837108821-law.gif",title:"To all the coronavirus helpers, thank you"}),l.a.createElement("div",{className:"home__inputContainer"},l.a.createElement(k,null))))},j=(t(65),t(29)),O=t.n(j),I=t(41),C=function(e){var a=Object(n.useState)(null),t=Object(h.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(I.a)(O.a.mark((function a(){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyAsxbk97IUSpBNQ6K5KhCxgq187amii0X0&cx=".concat("3b7d248ed38f2a460","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){r(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:l}},T=t(42),x=t.n(T),A=t(43),B=t.n(A),L=t(44),R=t.n(L),M=t(45),G=t.n(M),H=t(46),q=t.n(H);var F=function(){var e=N(),a=Object(h.a)(e,2),t=a[0].term,n=(a[1],C(t).data);return l.a.createElement("div",{className:"SearchPage"},l.a.createElement("div",{className:"searchPage__header"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{className:"searchPage__Logo",alt:"To all the coronavirus helpers, thank you",src:"https://www.google.com/logos/doodles/2020/thank-you-coronavirus-helpers-april-25-26-copy-6753651837108821-s.png",title:"To all the coronavirus helpers, thank you"})),l.a.createElement("div",{className:"searchPage__headerBody"},l.a.createElement(k,{hideButtons:!0,termm:t}),l.a.createElement("div",{className:"searchPage__options"},l.a.createElement("div",{className:"searchPage__optionsLeft"},l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(E.a,null),l.a.createElement(o.b,{to:"/all"}," All ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(x.a,null),l.a.createElement(o.b,{to:"/news"}," News ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(B.a,null),l.a.createElement(o.b,{to:"/images"}," Images ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(R.a,null),l.a.createElement(o.b,{to:"/shopping"}," Shopping ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(G.a,null),l.a.createElement(o.b,{to:"/maps"}," Maps ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(q.a,null),l.a.createElement(o.b,{to:"/more"}," More "))),l.a.createElement("div",{className:"searchPage__optionsRight"},l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(o.b,{to:"/settings"}," Settings ")),l.a.createElement("div",{className:"searchPage__option"},l.a.createElement(o.b,{to:"/tools"}," Tools ")))))),t&&l.a.createElement("div",{className:"searchPage__results"},l.a.createElement("p",{className:"searchPage__resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results"," ",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds for ",t,null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,r,c,o,s,i;return l.a.createElement("div",{className:"searchPage__result"},l.a.createElement("a",{href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(r=n.cse_image[0])||void 0===r?void 0:r.src)&&l.a.createElement("img",{className:"searchPage__resultImage",src:(null===(c=e.pagemap)||void 0===c||null===(o=c.cse_image)||void 0===o?void 0:o.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(i=s.cse_image[0])||void 0===i?void 0:i.src),alt:""}),e.displayLink),l.a.createElement("a",{className:"searchPage__resultTitle",href:e.link},l.a.createElement("h2",null," ",e.title)),l.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))})))))};var J=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(_.c,null,l.a.createElement(_.a,{path:"/search"},l.a.createElement(F,null)),l.a.createElement(_.a,{path:"/"},l.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,{initialState:{term:null},reducer:P},l.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.872a2c52.chunk.js.map