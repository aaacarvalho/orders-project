(this.webpackJsonporders=this.webpackJsonporders||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),i=n(4),u=n.n(i),o=n(5),s=n(1),m=function(e){return r.a.createElement("section",{className:"app-container"},e.children)},f=n(2),d=n(17),p=function(e){return r.a.createElement("h2",{className:"section-title"},e.title)},E=function(e){return r.a.createElement("div",{className:"input-container"},e.children)},b=function(e){return r.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),e.action()}(t)},className:"standard-button"},e.title)},g=n(16),h=n.n(g).a.create({baseURL:"https://globalnetsis.com.br/clientes/chicrecheme/api",timeout:1e4,headers:{accept:"application/json"}}),O=function(){return r.a.createElement("img",{src:"./chicrecheme/wp-content/themes/chicrecheme/assets/app/media/load.84b69321.gif",className:"loading",alt:"Loading Icon"})},j=function(e){var t=["email","phone","comp"];for(var n in e)if(-1===t.indexOf(n)&&""===e[n])return!1;return!0},v=function(e){var t=Object(a.useState)(e.cities[0].id),n=Object(s.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(e.neighborhoods.filter((function(e){return e.city_id===c}))),m=Object(s.a)(i,2),g=m[0],v=m[1],y=Object(a.useState)(g[0]),k=Object(s.a)(y,2),N=k[0],x=k[1],C=Object(a.useState)(parseFloat(N.price)),_=Object(s.a)(C,2),S=_[0],F=_[1];Object(a.useEffect)((function(){var e=parseFloat(N.price);F(e)}),[N]),Object(a.useEffect)((function(){x(g[0])}),[g]),Object(a.useEffect)((function(){v(e.neighborhoods.filter((function(e){return e.city_id===c})))}),[c]);var w=Object(a.useState)(e.snacks_categories[0].id),A=Object(s.a)(w,2),R=A[0],I=A[1],T=Object(a.useState)(e.snacks.filter((function(e){return e.category_id===R}))),$=Object(s.a)(T,2),P=$[0],q=$[1],D=Object(a.useState)(P[0]),J=Object(s.a)(D,2),Q=J[0],B=J[1],H=Object(a.useState)(""),L=Object(s.a)(H,2),U=L[0],V=L[1],z=Object(a.useState)(0),G=Object(s.a)(z,2),K=G[0],M=G[1],W=Object(a.useState)([]),X=Object(s.a)(W,2),Y=X[0],Z=X[1];Object(a.useEffect)((function(){q(e.snacks.filter((function(e){return e.category_id===R})))}),[R]),Object(a.useEffect)((function(){B(P[0])}),[P]),Object(a.useEffect)((function(){Q&&M(Q.price*U)}),[U,Q]),Object(a.useEffect)((function(){V(0)}),[Q]);var ee=Object(a.useState)({name:"",cellphone:"",email:"",phone:"",date:"",time:"",city:e.cities.find((function(e){return e.id===c})),neighborhood:N.name,street:"",number:"",comp:"",delivery:!1,price:S}),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(""),ce=Object(s.a)(re,2),le=ce[0],ie=ce[1],ue=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y.length){e.next=14;break}if(!j(ne)){e.next=11;break}return t=JSON.stringify({order:Y,customerData:ne}),ie(r.a.createElement(O,null)),e.next=6,h.post("/orders",t);case 6:n=e.sent,n.data.success?ie(r.a.createElement("p",{className:"success"},"Seu pedido foi criado com sucesso!")):ie(r.a.createElement("p",{className:"error"},"Houve algum problema ao criar o seu pedido. Por favor, tente novamente!")),e.next=12;break;case 11:ie(r.a.createElement("p",{className:"warning"},"Preencha todos os campos!"));case 12:e.next=15;break;case 14:ie(r.a.createElement("p",{className:"warning"},"Seu pedido n\xe3o cont\xe9m nenhum produto!"));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){ae(Object(f.a)({},ne,{city:e.cities.find((function(e){return e.id===c}))}))}),[c]),Object(a.useEffect)((function(){ae(Object(f.a)({},ne,{neighborhood:N.name}))}),[N]),Object(a.useEffect)((function(){ae(Object(f.a)({},ne,{price:S}))}),[S]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Fa\xe7a o seu pedido"}),r.a.createElement("div",{className:"order-container"},r.a.createElement("h3",null,"Informa\xe7\xf5es Pessoais"),r.a.createElement(E,null,"Nome",r.a.createElement("input",{type:"text",placeholder:"Nome",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{name:e.target.value}))}(e)}})),r.a.createElement(E,null,"Celular",r.a.createElement("input",{type:"number",placeholder:"Celular",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{cellphone:e.target.value}))}(e)}})),r.a.createElement(E,null,"Email",r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{email:e.target.value}))}(e)}})),r.a.createElement(E,null,"Telefone",r.a.createElement("input",{type:"number",placeholder:"Telefone",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{phone:e.target.value}))}(e)}})),r.a.createElement(E,null,"Data para entrega do pedido",r.a.createElement("input",{type:"date",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{date:e.target.value}))}(e)}})),r.a.createElement(E,null,"Hora para entrega do pedido",r.a.createElement("input",{type:"time",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{time:e.target.value}))}(e)}}))),r.a.createElement("div",{className:"order-container"},r.a.createElement("h3",null,"Endere\xe7o de Entrega"),r.a.createElement(E,null,"Cidade",r.a.createElement("select",{onChange:function(t){return function(t){var n=e.cities.find((function(e){return e.name===t.target.value}));l(n.id)}(t)}},function(){var t="";return Array.isArray(e.cities)&&e.cities.length&&(t=e.cities.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),t}())),r.a.createElement(E,null,"Bairro",r.a.createElement("select",{onChange:function(e){return function(e){var t=g.find((function(t){return t.name===e.target.value}));x(t)}(e)}},function(){var t="";return Array.isArray(e.neighborhoods)&&e.neighborhoods.length&&c&&(t=g.map((function(e){if(e.city_id===c)return r.a.createElement("option",{key:e.id},e.name)}))),t}())),r.a.createElement(E,null,"Endere\xe7o",r.a.createElement("input",{type:"text",placeholder:"Rua",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{street:e.target.value}))}(e)}})),r.a.createElement(E,null,"N\xfamero",r.a.createElement("input",{type:"number",placeholder:"N\xba",min:"0",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{number:e.target.value}))}(e)}})),r.a.createElement(E,null,"Complemento",r.a.createElement("input",{type:"text",placeholder:"Complemento",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{comp:e.target.value}))}(e)}})),r.a.createElement(E,null,"Valor de Entrega: R$ ",isNaN(S)?"0,00":S.toFixed(2).replace(".",","),r.a.createElement("label",null,"Incluir Entrega?",r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){return ae(Object(f.a)({},ne,{delivery:e.target.checked}))}(e)}})))),r.a.createElement("div",{className:"products"},r.a.createElement("h3",null,"Escolha seus produtos"),r.a.createElement("ul",{className:"products__title"},r.a.createElement("li",null,"Categoria"),r.a.createElement("li",null,"Nome"),r.a.createElement("li",null,"Pre\xe7o Unit\xe1rio"),r.a.createElement("li",null,"Quantidade"),r.a.createElement("li",null,"Total")),r.a.createElement("ul",{className:"products__menu"},r.a.createElement("li",null,r.a.createElement(E,null,r.a.createElement("p",null,"Categoria"),r.a.createElement("select",{onChange:function(t){return function(t){var n=e.snacks_categories.find((function(e){return e.name===t.target.value}));I(n.id)}(t)}},function(){var t="";return Array.isArray(e.snacks_categories)&&e.snacks_categories.length&&(t=e.snacks_categories.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),t}()))),r.a.createElement("li",null,r.a.createElement(E,null,r.a.createElement("p",null,"Nome"),r.a.createElement("select",{onChange:function(e){return function(e){B(P.find((function(t){return t.name===e.target.value})))}(e)}},function(){var t="";return Array.isArray(e.snacks)&&e.snacks.length&&(t=P.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),t}()))),r.a.createElement("li",null,r.a.createElement("p",null,"Valor unit\xe1rio"),"R$ ",Q?parseFloat(Q.price).toFixed(2).replace(".",","):"0,00"),r.a.createElement("li",null,r.a.createElement(E,null,r.a.createElement("p",null,"Quantidade m\xednima"),r.a.createElement("input",{type:"number",min:"0",value:isNaN(U)?"":U,step:Q?Q.minimum:1,onChange:function(e){return function(e){isNaN(e.target.value)?V(""):V(parseInt(e.target.value))}(e)}}),r.a.createElement("small",null,"Escolha de ",Q?Q.minimum:1," em ",Q?Q.minimum:1," "))),r.a.createElement("li",null,r.a.createElement("p",null,"Total"),r.a.createElement("div",null,"R$ ",isNaN(K)?"0,00":K.toFixed(2).replace(".",",")))),r.a.createElement(b,{title:"Adicionar ao pedido",action:function(){var t={id:Q.id,name:Q.name,price:Q.price,category:e.snacks_categories.find((function(e){return e.id===R})),quantity:U,total:K};t.quantity>0&&t.quantity%Q.minimum===0&&Z([].concat(Object(d.a)(Y),[t]))}})),r.a.createElement("div",{className:"your-order"},r.a.createElement("h3",null,"Seu pedido"),function(){if(Y.length)return r.a.createElement("ul",{className:"order-list order-list--header"},r.a.createElement("li",null,"Item"),r.a.createElement("li",null,"Nome"),r.a.createElement("li",null,"Categoria"),r.a.createElement("li",null,"Pre\xe7o"),r.a.createElement("li",null,"Quantidade"),r.a.createElement("li",null,"Total"))}(),Y.map((function(e,t){return r.a.createElement("ul",{className:"order-list",key:t},r.a.createElement("li",null,t+1),r.a.createElement("li",null,e.name),r.a.createElement("li",null,e.category.name),r.a.createElement("li",null,"R$ ",parseFloat(e.price).toFixed(2).replace(".",",")),r.a.createElement("li",null,e.quantity),r.a.createElement("li",null,"R$ ",e.total.toFixed(2).replace(".",",")))})),r.a.createElement("p",{className:"order-total"},"Total do pedido: R$ ",Y.reduce((function(e,t){return e+t.total}),0).toFixed(2).replace(".",",")),le,r.a.createElement(b,{title:"Enviar pedido",action:ue})))};n(41);var y=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({cities:[],neighborhoods:[],buffets:[],buffets_categories:[],snacks:[],snacks_categories:[]}),i=Object(s.a)(l,2),f=i[0],d=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,n,a,r,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/cities");case 2:return t=e.sent,e.next=5,h.get("/neighborhoods");case 5:return n=e.sent,e.next=8,h.get("/buffets");case 8:return a=e.sent,e.next=11,h.get("/buffets/categories");case 11:return r=e.sent,e.next=14,h.get("/snacks");case 14:return l=e.sent,e.next=17,h.get("/snacks/categories");case 17:i=e.sent,d({cities:t.data,neighborhoods:n.data,buffets:a.data,buffets_categories:r.data,snacks:l.data,snacks_categories:i.data}),c(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(m,null,n&&r.a.createElement(v,{cities:f.cities,neighborhoods:f.neighborhoods,snacks_categories:f.snacks_categories,snacks:f.snacks}))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7476e471.chunk.js.map