(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{38:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),i=(n(38),n(17)),o=n.n(i),j=n(31),b=n(21),u=n(11),d=n(4),h=n(5),l=n(7),O=n(6),x=n(2),p=n(3),m=n(0),f=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),v=f,g=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://media.istockphoto.com/photos/bank-picture-id626702872?k=20&m=626702872&s=612x612&w=0&h=sTDEN_vs_6LVV1iK9z103QhCR9nKWXiYZrWwVBnomKo=",alt:"bank"}),Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(x.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/LogIn",children:"Log In"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/Debits",children:"Debits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/Credits",children:"Credits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),C=g,S=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/LogIn",children:"Log In"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/Debits",children:"Debits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"Credits",children:"Credits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/",children:"Return to Home"}),Object(m.jsx)("h1",{}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),B=S,D=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(u.a)({},e.state.user),c=t.target.name,a=t.target.value;n[c]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(h.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(p.a,{to:"/userProfile"}):Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]})})}}]),n}(c.Component),k=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).debitsView=function(){return e.props.debits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)}))},e.handleChange=function(t){var n=Object(u.a)({},e.state.debit),c=t.target.name,a=t.target.value;n[c]=a;var r=new Date;n.date=r.toISOString(),e.setState({debit:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.addDebit(e.state.debit)},e.state={debit:{id:"NEW",amount:0,date:"FILL ME",description:"DESCRIPTION"}},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:" Debits "}),this.debitsView(),Object(m.jsx)("h1",{}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/LogIn",children:"Log In"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/Credits",children:"Credits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/",children:"Return to Home"}),Object(m.jsx)("h1",{}),Object(m.jsx)("h1",{}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"description",children:" Description: "}),Object(m.jsx)("input",{type:"text",name:"description",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"amount",children:" Amount: "}),Object(m.jsx)("input",{type:"text",name:"amount",onChange:this.handleChange})]}),Object(m.jsx)("button",{children:"Submit"})]})]})}}]),n}(c.Component),I=function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).creditsView=function(){return e.props.credits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)}))},e.handleChange=function(t){var n=Object(u.a)({},e.state.credit),c=t.target.name,a=t.target.value;n[c]=a;var r=new Date;n.date=r.toISOString(),e.setState({credit:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.addCredit(e.state.credit)},e.state={credit:{id:"NEW",amount:0,date:"FILL ME",description:"DESCRIPTION"}},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:" Credits "}),this.creditsView(),Object(m.jsx)("h1",{}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/LogIn",children:"Log In"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/Debits",children:"Debits"}),Object(m.jsx)("h1",{}),Object(m.jsx)(x.b,{to:"/",children:"Return to Home"}),Object(m.jsx)("h1",{}),Object(m.jsx)("h1",{}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"description",children:" Description: "}),Object(m.jsx)("input",{type:"text",name:"description",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"amount",children:" Amount: "}),Object(m.jsx)("input",{type:"text",name:"amount",onChange:this.handleChange})]}),Object(m.jsx)("button",{children:"Submit"})]})]})}}]),n}(c.Component),N=n(20),L=n.n(N),y=(n(67),function(e){Object(l.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(u.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n}),e.componentDidMount()},e.addDebit=function(t){var n=Object(b.a)(e.state.debits),c={id:t.id,amount:t.amount,date:t.date,description:t.description};n.push(c);var a=Number(e.state.accountBalance)-Number(t.amount);e.setState({debits:n}),e.setState({accountBalance:a})},e.addCredit=function(t){var n=Object(b.a)(e.state.credits),c={id:t.id,amount:t.amount,date:t.date,description:t.description};n.push(c);var a=Number(e.state.accountBalance)+Number(t.amount);e.setState({credits:n}),e.setState({accountBalance:a})},e.state={accountBalance:0,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"},debits:[],credits:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://moj-api.herokuapp.com/debits");case 2:return t=e.sent,e.next=5,L.a.get("https://moj-api.herokuapp.com/credits");case 5:n=e.sent,t=t.data,n=n.data,c=0,a=0,t.forEach((function(e){c+=e.amount})),n.forEach((function(e){a+=e.amount})),r=a-c,this.setState({debits:t,credits:n,accountBalance:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.debits,n=this.state.credits;return Object(m.jsx)(x.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(C,{accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/Debits",render:function(){return Object(m.jsx)(k,{addDebit:e.addDebit,debits:t,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/Credits",render:function(){return Object(m.jsx)(I,{addCredit:e.addCredit,credits:n,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/userProfile",render:function(){return Object(m.jsx)(B,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/login",render:function(){return Object(m.jsx)(D,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}})]})})}}]),n}(c.Component)),w=y,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),P()}},[[68,1,2]]]);
//# sourceMappingURL=main.4bd53f2b.chunk.js.map