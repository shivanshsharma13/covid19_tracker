(this.webpackJsonpcovid19_tracker=this.webpackJsonpcovid19_tracker||[]).push([[0],{191:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),s=n.n(a),r=n(8),i=n.n(r),o=(n(87),n(32)),l=n.n(o),u=n(54),d=n(11),j=(n(89),n(223)),h=n(224),b=n(225),f=n(217),v=n(221),O=n(222);n(90);var p=function(e){var t=e.title,n=e.total,a=e.cases;return Object(c.jsx)(f.a,{className:"infobox",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(O.a,{className:"infobox__title",color:"textSecondary",children:t}),Object(c.jsx)("h2",{className:"infobox__cases",children:a}),Object(c.jsxs)(O.a,{className:"infobox__total",color:"textSecondary",children:[n," Total"]})]})})};n(94);var x=function(e){var t=e.countries;return Object(c.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,n=e.cases;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:n})})]})}))})},m=n(12),y=function(e){var t=Object(m.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},_=n(55),g=n.n(_),w=n(76);var C=function(e){e.casesType;var t={legend:{display:!1},element:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLine:{display:!1},ticks:{callback:function(e,t,n){return g()(e).format("0a")}}}]}},n=Object(a.useState)(),s=Object(d.a)(n,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[];for(var a in e.cases){if(t){var s={x:a,y:e[n][a]-t};c.push(s)}t=e[n][a]}return c}(e);i(t)}))}),[]),Object(c.jsx)("div",{className:"linegraph",children:(null===r||void 0===r?void 0:r.length)>0&&Object(c.jsx)(w.Line,{data:{datasets:[{data:r,borderColor:"#CC1034",backgroundColor:"rgba(204, 16, 52, 0.5)"}]},options:t})})};var N=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("worldwide"),i=Object(d.a)(r,2),o=i[0],O=i[1],m=Object(a.useState)({}),_=Object(d.a)(m,2),g=_[0],w=_[1],N=Object(a.useState)([]),k=Object(d.a)(N,2),S=k[0],D=k[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){w(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=y(e);s(t),D(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var F=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,O(n),c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){O(n),w(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"app__left",children:[Object(c.jsxs)("div",{className:"app__header",children:[Object(c.jsx)("h1",{children:"Covid19 tracker"}),Object(c.jsx)(j.a,{classNmae:"app__dropdown",children:Object(c.jsxs)(h.a,{variant:"outlined",onChange:F,value:o,children:[Object(c.jsx)(b.a,{value:"worldwide",children:"Worldwide"}),n.map((function(e){return Object(c.jsx)(b.a,{value:e.value,children:e.name})}))]})})]}),Object(c.jsxs)("div",{className:"app__stats",children:[Object(c.jsx)(p,{title:"Corona Virus Cases",total:g.cases,cases:g.todayCases}),Object(c.jsx)(p,{title:"Corona Virus Recoverd",total:g.recovered,cases:g.todayRecovered}),Object(c.jsx)(p,{title:"Corona Virus Deaths",total:g.deaths,cases:g.todayDeaths})]}),Object(c.jsx)(C,{})]}),Object(c.jsx)("div",{className:"app__right",children:Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)("h3",{children:"Live cases in World"}),Object(c.jsx)(x,{countries:S}),Object(c.jsx)("h3",{children:"World cases"})]})})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()},87:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.4834fc7f.chunk.js.map