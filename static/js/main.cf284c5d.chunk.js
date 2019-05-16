(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(68),o=a.n(n),s=(a(84),a(0)),c=a.n(s),i=a(42),r=a(18),l=a(77),u=a(6),m=a.n(u),d=a(19),p=a(12),h=a(13),g=a(15),b=a(14),f=a(1),k=a(16),v=a(4),E=a.n(v),y=(a(104),a(69)),S=a.n(y),w=a(78),O=a(70),j=a.n(O),x=a(71),N=a.n(x),C=(a(105),function(e){var t=Object(s.useState)(!1),a=Object(w.a)(t,2),n=a[0],o=a[1];return c.a.createElement("div",{className:"menu"},c.a.createElement("header",null,c.a.createElement("div",{className:"second-box"}),c.a.createElement("a",{href:"http://localhost:3000/#/"},c.a.createElement("img",{className:"logo",src:j.a,alt:" "})),c.a.createElement("p",{className:"signed-in-user-gravatar"}," "),e.user?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"gravatar",src:N.a,alt:" "}),c.a.createElement("input",{id:"burger",type:"checkbox"}),c.a.createElement("label",{id:"label-menu",for:"burger",onClick:function(){return o(!n)}},c.a.createElement("span",{className:"nav-line"}),c.a.createElement("span",{className:"nav-line"}),c.a.createElement("span",{className:"nav-line"})),n?c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"drop-down"},c.a.createElement("div",{className:"nav-item"},e.user.name),c.a.createElement("button",{className:"nav-item nav-button",onClick:e.onLogout},"Logout"))):null):c.a.createElement("button",{className:"login-button",onClick:e.onLogin},"Login")))}),L=(a(106),function(e){return c.a.createElement("div",null,e.stocks.map(function(t){return c.a.createElement("div",{key:t.symbol,className:"item"},c.a.createElement("button",{onClick:e.delStock},"Delete"),c.a.createElement("div",{className:"symbol_name"},c.a.createElement("div",{className:"symbol"},t.symbol)),c.a.createElement("div",{className:"price_percent"},c.a.createElement("div",{className:"price"},"$ ",t.price)),c.a.createElement("button",{onClick:function(){return e.selectStock(t.symbol)}},"\u24d8"))}))}),P=(a(107),a(72)),F=a.n(P),I=function(e){var t=e.getValueFromInput,a=e.addStockToList;return c.a.createElement("div",null,c.a.createElement("form",{className:"search-stock",onSubmit:a},c.a.createElement("div",{className:"search-input"},c.a.createElement("div",{className:"cursor"},c.a.createElement("input",{className:"input_field",type:"search",onChange:t,placeholder:"symbol",autoFocus:!0}),c.a.createElement("i",null))),c.a.createElement("div",null,c.a.createElement("button",{className:"submit_input",type:"submit",value:""},c.a.createElement("img",{className:"search-button",src:F.a,alt:" "})))))};a(108);var T=function(e){var t=e.stock;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"stock-details-container item"},c.a.createElement("div",{className:"symbol-name"},c.a.createElement("div",{className:"company-symbol"}," ",t.symbol),c.a.createElement("div",{className:"company-name"},t.companyName)),c.a.createElement("div",{className:"price-osc"},c.a.createElement("div",{className:"price-list"},"$ ",t.price.toFixed(2)),c.a.createElement("div",null,t.changePercent.toFixed(2)))),c.a.createElement("div",{className:"stock-details"},c.a.createElement("p",null,"week52Low:($) ",t.week52low.toFixed(2)),c.a.createElement("p",null,"week52High:($) ",t.week52high.toFixed(2)),c.a.createElement("p",null,"Market cap:($) ",function(e){var t=Math.floor((""+e).length/3),a=parseFloat((0!=t?e/Math.pow(1e3,t):e).toPrecision(2));return a+["","K","M","B","T"][t]}(t.marketcap)),c.a.createElement("p",null,"Revenue:($) ",t.revenue.toFixed(2)),c.a.createElement("p",null,"Revenue per share:($) ",t.revenuePerShare.toFixed(2)),c.a.createElement("p",null,"EBITDA: ",t.ebitda.toFixed(2)),c.a.createElement("p",null,"Profit Margin: $ ",t.profitMargin.toFixed(2)),c.a.createElement("p",null,"ROE: ",t.returnOnEquity.toFixed(2)),c.a.createElement("p",null,"EPS: ",t.ttmEPS.toFixed(2)),c.a.createElement("p",null,"Div.Yield: ",t.dividendYield.toFixed(2))))},D=a(73),U=(a(202),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).stock_period_url=function(e,t){return"https://api.iextrading.com/1.0/stock/".concat(e,"/chart/").concat(t)},a.setPeriod=function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({period:t.target.value});case 3:console.log(a.state.period),a.setState({buttonColor:"#66fcf1"}),a.setState({textColor:"#1f2833"}),a.getChartData();case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={period:"1y",chartData:{},buttonColor:"#45a29e",textColor:"#1f2833"},a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){var e=this;E.a.get(this.stock_period_url(this.props.symbol,this.state.period)).then(function(t){var a=t.data,n=a.map(function(e){return e.high}),o=a.map(function(e){return e.date}),s=a.map(function(e){return e.minute});e.setState({chartData:{labels:"1d"===e.state.period?s:o,datasets:[{label:"Price",data:n,backgroundColor:["rgba(75, 192, 192, 0.6)"]}]}})})}},{key:"render",value:function(){var e=this,t=["1d","1m","3m","6m","1y","2y","5y"];if(console.log(t[0]),t[0])return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"chart-container"},c.a.createElement("div",{className:"current-period"}),t.map(function(t){return c.a.createElement("button",{className:"period-buttons",onClick:e.setPeriod,style:t===e.state.period?{color:"#1f2833",backgroundColor:"#66fcf1",border:"2px solid #1f2833"}:{color:"#66fcf1",backgroundColor:"#1f2833"},value:t},t)}),c.a.createElement(D.a,{data:this.state.chartData})))}}]),t}(s.Component)),M=function(e){return"https://api.iextrading.com/1.0/stock/".concat(e,"/quote?displayPercent=true")},_=function(e){return"https://api.iextrading.com/1.0/stock/".concat(e,"/stats")},V=function(e){var t=e.selectedStock,a=e.backToList,n=e.symbol;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("button",{className:"mobile-button",onClick:a},c.a.createElement("img",{className:"mobile-button-icon",src:S.a,alt:" "})),c.a.createElement("button",{className:"back-to-list",onClick:a},"Back to list")),c.a.createElement(T,{stock:t}),c.a.createElement(U,{symbol:n}))},$=function(e){function t(){var e;Object(p.a)(this,t),(e=Object(g.a)(this,Object(b.a)(t).call(this))).deleteStock=function(t,a){var n=Object.assign([],e.state.stocks);n.splice(t,1),e.setState({stocks:n})};return e.state={selectedStock:{changePercent:0},stocks:[],page:"LIST",symbol:"",results:[],menuVisible:!1,currentUser:{menu_icon:"menu_icon",gravata:"gravata",name:"Luke",email:"luke@email.com"}},e.logout=e.logout.bind(Object(f.a)(e)),e.login=e.login.bind(Object(f.a)(e)),e.selectStock=e.selectStock.bind(Object(f.a)(e)),e.backToList=e.backToList.bind(Object(f.a)(e)),e.getValueFromInput=e.getValueFromInput.bind(Object(f.a)(e)),e.addStockToList=e.addStockToList.bind(Object(f.a)(e)),e.gettingUserInfo=e.gettingUserInfo.bind(Object(f.a)(e)),e.gettingUserStock=e.gettingUserStock.bind(Object(f.a)(e)),e.gettingStockList=e.gettingStockList.bind(Object(f.a)(e)),e.addingStocktoUser=e.addingStocktoUser.bind(Object(f.a)(e)),e.addingStockList=e.addingStockList.bind(Object(f.a)(e)),e}return Object(k.a)(t,e),Object(h.a)(t,[{key:"addingStockList",value:function(){console.log("addingStockList fired"),E.a.post("http://localhost:3333/stock/addlist",{listname:"test",listcontents:"test"},{withCredentials:!0}).then(function(e){console.log("This is addingStockList result: ")})}},{key:"addingStocktoUser",value:function(){console.log("addingStocktoUser fired"),E.a.post("http://localhost:3333/stock/addstock",{stocksymbol:"test"},{withCredentials:!0}).then(function(e){console.log("This is added stock info: ",e.data)})}},{key:"gettingStockList",value:function(){console.log("gettingStockList fired"),E.a.get("http://localhost:3333/stock/mylist",{withCredentials:!0}).then(function(e){console.log("This is favorite Stock List info: ",e.data)})}},{key:"gettingUserStock",value:function(){console.log("gettingUserStock fired"),E.a.get("http://localhost:3333/stock/mystock",{withCredentials:!0}).then(function(e){console.log("this is userStock info: ",e.data)})}},{key:"gettingUserInfo",value:function(){console.log("userinfo fired"),E.a.get("http://localhost:3333/user/info",{withCredentials:!0}).then(function(e){console.log("This is the user info: ",e.data)})}},{key:"clickMenuDropDown",value:function(){this.setState({menuVisible:!this.state.menuVisible})}},{key:"logout",value:function(){console.log("logging out"),this.setState({currentUser:null})}},{key:"login",value:function(){this.props.history.push("/login")}},{key:"getValueFromInput",value:function(e){this.setState({symbol:e.target.value})}},{key:"fetchStockDetailsFromAPI",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a,n,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.iextrading.com/1.0/stock/".concat(t,"/price"));case 2:return a=e.sent,e.next=5,E.a.get(M(t));case 5:return n=e.sent,e.next=8,E.a.get(_(t));case 8:return o=e.sent,e.abrupt("return",{price:a.data,symbol:n.data.symbol,companyName:n.data.companyName,changePercent:n.data.changePercent,marketcap:o.data.marketcap,revenuePerShare:o.data.revenuePerShare,revenue:o.data.revenue,week52high:o.data.week52high,week52low:o.data.week52low,ebitda:o.data.EBITDA,dividendYield:o.data.dividendYield,profitMargin:o.data.profitMargin,returnOnEquity:o.data.returnOnEquity,ttmEPS:o.data.ttmEPS});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addStockToList",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.fetchStockDetailsFromAPI(this.state.symbol);case 3:a=e.sent,this.setState({stocks:[].concat(Object(l.a)(this.state.stocks),[a])});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"backToList",value:function(){this.setState({page:"LIST",selectedStock:null})}},{key:"selectStock",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchStockDetailsFromAPI(t);case 2:a=e.sent,this.setState({page:"DETAILS",selectedStock:a,symbol:t});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.iextrading.com/1.0/tops/last?symbols=".concat("googl,aapl,msft,fb,dis,amzn,baba,jnj,brk.a,jpm"));case 2:t=e.sent,this.setState({stocks:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,{user:this.state.currentUser,onLogin:this.login,onLogout:this.logout}),"LIST"===this.state.page?c.a.createElement(c.a.Fragment,null,c.a.createElement(I,{getValueFromInput:this.getValueFromInput,addStockToList:this.addStockToList}),c.a.createElement(L,{stocks:this.state.stocks,page:this.state.page,selectStock:this.selectStock,delStock:this.deleteStock.bind(this.index)})):c.a.createElement(V,{selectedStock:this.state.selectedStock,backToList:this.backToList,symbol:this.state.symbol}))}}]),t}(c.a.Component),A=(a(203),function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(C,{user:e.currentUser,onLogout:e.logout,onLogin:e.login}))}),B=(a(204),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={email:"",password:""},a.getEmail=a.getEmail.bind(Object(f.a)(a)),a.getPassword=a.getPassword.bind(Object(f.a)(a)),a.login=a.login.bind(Object(f.a)(a)),a.routeChange=a.routeChange.bind(Object(f.a)(a)),a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"routeChange",value:function(){this.props.history.push("/signup")}},{key:"getEmail",value:function(e){this.setState({email:e.target.value})}},{key:"getPassword",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(e){var t=this;e.preventDefault(),console.log("Email "+this.state.email,"Password "+this.state.password),E.a.post("http://localhost:3333/auth/login",{userId:this.state.email,password:this.state.password},{withCredentials:!0}).then(function(e){console.log("here is what is going on result 1111",e),console.log("here is what is going on result.data 1111",e.data),console.log("here is what is going on result.data.data 1111",e.data.data),t.props.history.push("/")}).then(function(e){console.log("here is  what is going on 22:",e)}).then(function(e){console.log("getting info fired")}).then(function(e){console.log("getting info fired")})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"LOGIN!"),c.a.createElement("form",{onSubmit:this.login},c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"text",value:this.state.email,onChange:this.getEmail})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",value:this.state.password,onChange:this.getPassword})),c.a.createElement("input",{type:"submit",value:"Login"})),c.a.createElement("h3",null,"New user? ",c.a.createElement("button",{onClick:this.routeChange},"SIGNUP!")))}}]),t}(s.Component)),q=(a(205),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={name:"",email:"",password:""},a.getName=a.getName.bind(Object(f.a)(a)),a.getEmail=a.getEmail.bind(Object(f.a)(a)),a.getPassword=a.getPassword.bind(Object(f.a)(a)),a.signup=a.signup.bind(Object(f.a)(a)),a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"getName",value:function(e){this.setState({name:e.target.value})}},{key:"getEmail",value:function(e){this.setState({email:e.target.value})}},{key:"getPassword",value:function(e){this.setState({password:e.target.value})}},{key:"signup",value:function(e){var t=this;e.preventDefault(),E.a.post("http://localhost:3333/auth/join",{name:this.state.name,userId:this.state.email,password:this.state.password}).then(function(e){console.log(e),t.props.history.push("/login")})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"SIGN UP!"),c.a.createElement("form",{onSubmit:this.signup},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",value:this.state.name,onChange:this.getName})),c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"text",value:this.state.email,onChange:this.getEmail})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",value:this.state.password,onChange:this.getPassword})),c.a.createElement("input",{type:"submit",value:"Signup!"})))}}]),t}(s.Component)),Y=c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(r.a,{exact:!0,path:"/",component:$}),c.a.createElement(r.a,{exact:!0,path:"/menu",component:C}),c.a.createElement(r.a,{exact:!0,path:"/user",component:A}),c.a.createElement(r.a,{exact:!0,path:"/stockchart",component:U}),c.a.createElement(r.a,{exact:!0,path:"/stockdetails",component:T}),c.a.createElement(r.a,{exact:!0,path:"/login",component:B}),c.a.createElement(r.a,{exact:!0,path:"/searchstock",component:I}),c.a.createElement(r.a,{exact:!0,path:"/watchlist",component:L}),c.a.createElement(r.a,{exact:!0,path:"/signup",component:q})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a.p+"static/media/home.4bb5e575.svg"},70:function(e,t,a){e.exports=a.p+"static/media/stocklogo.b73a3ac8.svg"},71:function(e,t,a){e.exports=a.p+"static/media/grav.2f1629cc.png"},72:function(e,t,a){e.exports=a.p+"static/media/search.45286e8e.svg"},79:function(e,t,a){e.exports=a(212)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.cf284c5d.chunk.js.map