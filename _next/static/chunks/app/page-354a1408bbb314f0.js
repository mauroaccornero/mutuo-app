(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5931:function(e,t,a){Promise.resolve().then(a.t.bind(a,4649,23)),Promise.resolve().then(a.bind(a,2943)),Promise.resolve().then(a.bind(a,8147)),Promise.resolve().then(a.bind(a,505)),Promise.resolve().then(a.bind(a,4376)),Promise.resolve().then(a.bind(a,1469))},2943:function(e,t,a){"use strict";a.d(t,{HeaderInfo:function(){return o}});var n=a(7437),r=a(2265),s=a(9746);let i=()=>(0,n.jsx)("div",{className:"empty-message message","data-cy":"message-box",children:"Fill the form with capital, interest rate and duration to see the amortization schedule. By adding repayments, you can save money on interests!"}),l=()=>{let{items:e}=(0,r.useContext)(s.I),t=e.slice(-1).pop();if(!t)return null;{let{month:a,paidUpInterests:r,paidUpCapital:s}=t,i=e.filter(e=>e.repayment>0),l=i.reduce((e,t)=>e+t.repayment,0),o=i.reduce((e,t)=>e+t.repaymentSaving,0);return(0,n.jsx)("div",{id:"boxes-container",className:"message","data-cy":"feedback-box",children:(0,n.jsxs)("div",{children:["On a ",(0,n.jsxs)("strong",{children:["paid-up capital of ",s.toFixed(2)," €"]})," ","you will pay"," ",(0,n.jsxs)("strong",{children:[r.toFixed(2)," € of interests"]})," in"," ",(0,n.jsxs)("strong",{children:[a," months"]}),". ",(0,n.jsx)("br",{}),"Total amount of interests is"," ",(0,n.jsxs)("strong",{children:[(r/s*100).toFixed(2),"% of capital"]}),"."," ",0===i.length?(0,n.jsx)(n.Fragment,{children:"No repayments were applied."}):(0,n.jsxs)(n.Fragment,{children:["With ",i.length," repayment",i.length>1&&"s",", for a total amount of"," ",(0,n.jsxs)("strong",{children:[l.toFixed(2)," €"]}),","," ",(0,n.jsxs)("strong",{children:["you can save ",o.toFixed(2)," € on interests"]}),"."," "]}),(0,n.jsx)("br",{}),"Try to update your repayments to see how much you can save."]})})}},o=()=>{let{items:e}=(0,r.useContext)(s.I);return(0,n.jsx)("div",{id:"head-wrapper",className:"box",children:0===e.length?(0,n.jsx)(i,{}):(0,n.jsx)(l,{})})}},2886:function(e,t,a){"use strict";a.d(t,{I:function(){return r}});var n=a(7437);a(2265);let r=e=>(0,n.jsx)("input",{type:"text",pattern:"[0-9]+([,][0-9]{0,2})?",...e})},8147:function(e,t,a){"use strict";a.d(t,{MortgageForm:function(){return u}});var n=a(7437),r=a(2265),s=a(9746);let i=[{year:5,months:60},{year:10,months:120},{year:15,months:180},{year:20,months:240},{year:25,months:300},{year:30,months:360},{year:35,months:420},{year:40,months:480}];var l=a(9212),o=a.n(l);let d=()=>{let e=o()(),t=[e.format("MM/YYYY")];for(let a=0;a<13;a++){let a=e.add(1,"month");t.push(a.format("MM/YYYY"))}return t};var c=a(2886);let u=()=>{let{handleChange:e,data:t}=(0,r.useContext)(s.I),{interestRate:a,capital:l,duration:o,startDate:u}=t,h=d();return(0,n.jsx)("div",{className:"box box-orange",children:(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"capital-field",children:[(0,n.jsx)("label",{htmlFor:"input-capital",children:"Capital"}),(0,n.jsxs)("div",{className:"input-container",children:[(0,n.jsx)(c.I,{placeholder:"Insert your mortgage capital",name:"capital","data-testid":"capital-input",value:l,id:"input-capital",onChange:t=>e(t),required:!0}),(0,n.jsx)("span",{children:"€"})]})]}),(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"interest-rate-field",children:[(0,n.jsx)("label",{htmlFor:"input-interest-rate",children:"Interest rate"}),(0,n.jsxs)("div",{className:"input-container",children:[(0,n.jsx)(c.I,{placeholder:"Insert your mortgage interest rate",name:"interestRate","data-testid":"interest-rate-input",id:"input-interest-rate",value:a,onChange:t=>e(t),required:!0}),(0,n.jsx)("span",{children:"%"})]})]}),(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"duration-field",children:[(0,n.jsx)("label",{htmlFor:"input-duration",children:"Duration"}),(0,n.jsx)("div",{className:"input-container",children:(0,n.jsxs)("select",{required:!0,"data-testid":"duration-select",name:"duration",id:"input-duration",onChange:t=>e(t),value:o,children:[(0,n.jsx)("option",{value:0,children:"Choose a duration"},"option-duration-0"),Object.entries(i).map(e=>{let[,{months:t,year:a}]=e;return(0,n.jsxs)("option",{value:t,children:[a," years"]},"option-duration-".concat(t))})]})})]}),(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"start-date-field",children:[(0,n.jsx)("label",{htmlFor:"input-start-date",children:"Start date"}),(0,n.jsx)("div",{className:"input-container",children:(0,n.jsxs)("select",{name:"startDate",onChange:t=>e(t),value:u,"data-testid":"start-date-select",id:"input-start-date",required:!0,children:[(0,n.jsx)("option",{value:0,children:"Choose a start date"},"option-month-0"),h.map(e=>(0,n.jsxs)("option",{value:e,children:[e," "]},"option-month-".concat(e)))]})})]})]})})}},505:function(e,t,a){"use strict";a.d(t,{RepaymentForm:function(){return l}});var n=a(7437),r=a(2265),s=a(2886),i=a(9746);let l=()=>{let{items:e,addRepayment:t}=(0,r.useContext)(i.I),[a,l]=(0,r.useState)(!1),[o,d]=(0,r.useState)([]),[c,u]=(0,r.useState)({date:e.length>0?e[0].date:"",amount:"",month:e.length>0?e[0].month.toString():""});(0,r.useEffect)(()=>{l(e.filter(e=>e.repayment>0).map(e=>e.month.toString()).includes(c.month))},[c,e]),(0,r.useEffect)(()=>{d(e.map(e=>({date:e.date,month:e.month})))},[e]);let h=e=>{let{value:t,name:a,validity:n}=e.target;n.valid&&u({...c,[a]:t})},m=e=>{t(c),e.preventDefault()};return(0,n.jsx)(n.Fragment,{children:e.length>0&&(0,n.jsx)("div",{id:"form-repayment",className:"box box-orange",children:(0,n.jsxs)("form",{onSubmit:e=>m(e),children:[(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"repayment-amount-field",children:[(0,n.jsx)("label",{htmlFor:"input-amount",children:"Amount"}),(0,n.jsxs)("div",{className:"input-container",children:[(0,n.jsx)(s.I,{placeholder:"Insert a repayment amount",name:"amount",id:"input-amount","data-testid":"amount-input",onChange:e=>h(e),value:c.amount,required:!0}),(0,n.jsx)("span",{children:"€"})]})]}),(0,n.jsxs)("div",{className:"input-wrapper","data-cy":"repayment-month-field",children:[(0,n.jsx)("label",{htmlFor:"input-month",children:"Month"}),(0,n.jsxs)("select",{required:!0,name:"month",id:"input-month","data-testid":"month-input",onChange:e=>h(e),value:c.month,children:[(0,n.jsx)("option",{value:0,children:"Choose a month"},"option-month-0"),o.map(e=>(0,n.jsx)("option",{value:e.month,children:e.date},"option-month-".concat(e.date)))]})]}),(0,n.jsx)("div",{className:"input-wrapper",children:(0,n.jsx)("input",{role:"button",type:"submit","data-testid":"submit-repayment-input",value:"".concat(a?"Update":"Add"," repayment"),"data-cy":"repayment-button"})})]})})})}},4376:function(e,t,a){"use strict";a.d(t,{RepaymentsBox:function(){return i}});var n=a(7437),r=a(2265),s=a(9746);let i=()=>{let{items:e,removeRepayment:t}=(0,r.useContext)(s.I),a=e.filter(e=>e.repayment>0),i=a.reduce((e,t)=>e+t.repayment,0),l=a.reduce((e,t)=>e+t.repaymentSaving,0);return(0,n.jsx)(n.Fragment,{children:e.length>0&&(0,n.jsxs)("div",{id:"box-repayments",className:"box box-orange",children:[(0,n.jsx)("ul",{children:a.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{children:["With a repayment of"," ",(0,n.jsxs)("strong",{children:[e.repayment.toFixed(2)," €"]})," on"," ",(0,n.jsx)("strong",{children:e.date})," you save"," ",(0,n.jsxs)("strong",{children:[e.repaymentSaving.toFixed(2)," €"]})," on interests."]}),(0,n.jsx)("button",{onClick:()=>t(e.month),children:"x"})]},"repayment-".concat(e.month)))}),(0,n.jsxs)("div",{id:"total-repayments",children:[(0,n.jsxs)("div",{className:"total-repayment",children:[(0,n.jsx)("div",{children:"Total repayments"}),(0,n.jsxs)("div",{children:[i.toFixed(2)," €"]})]}),(0,n.jsxs)("div",{className:"total-repayment",children:[(0,n.jsx)("div",{children:"Total savings"}),(0,n.jsxs)("div",{children:[l.toFixed(2)," €"]})]}),(0,n.jsxs)("div",{className:"total-repayment",children:[(0,n.jsx)("div",{children:"Percentage"}),(0,n.jsxs)("div",{children:[(l/i*100||0).toFixed(2)," %"]})]})]})]})})}},1469:function(e,t,a){"use strict";a.d(t,{Table:function(){return l}});var n=a(7437),r=a(2265),s=a(9746);let i=e=>{let{item:t}=e;return(0,n.jsxs)("tr",{"data-cy":"table-row",children:[(0,n.jsx)("td",{"data-cy":"date-cell",children:t.date}),(0,n.jsxs)("td",{"data-cy":"interestsQuote-cell",className:"hide-on-mobile",children:[t.interestsQuote.toFixed(2)," €"]}),(0,n.jsxs)("td",{"data-cy":"capitalQuote-cell",className:"hide-on-mobile",children:[t.capitalQuote.toFixed(2)," €"]}),(0,n.jsxs)("td",{"data-cy":"installment-cell",children:[t.installment.toFixed(2)," €"]}),(0,n.jsxs)("td",{"data-cy":"paidUpCapital-cell",children:[t.paidUpCapital.toFixed(2)," €"]}),(0,n.jsxs)("td",{"data-cy":"residualDebt-cell",children:[t.residualDebt.toFixed(2)," €"]}),(0,n.jsxs)("td",{"data-cy":"paidUpInterest-cell",children:[t.paidUpInterests.toFixed(2)," €"]})]},t.date)},l=()=>{let{items:e}=(0,r.useContext)(s.I);return(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Month"}),(0,n.jsx)("th",{className:"hide-on-mobile",children:"Interests quote"}),(0,n.jsx)("th",{className:"hide-on-mobile",children:"Capital quote"}),(0,n.jsx)("th",{children:"Installment"}),(0,n.jsx)("th",{children:"Paid-up capital"}),(0,n.jsx)("th",{children:"Residual debt"}),(0,n.jsx)("th",{children:"Paid-up interests"})]})}),(0,n.jsx)("tbody",{children:e.length>0?e.map((e,t)=>(0,n.jsx)(i,{item:e},t)):(0,n.jsx)("tr",{className:"empty-table",children:(0,n.jsx)("td",{colSpan:6,"data-cy":"empty-form-message",children:"Fill the form to see the amortization schedule"})})})]})}},9746:function(e,t,a){"use strict";a.d(t,{I:function(){return b},AppStoreWithRedux:function(){return N}});var n=a(7437),r=a(2265),s=a(9212),i=a.n(s);let l=e=>{let{capital:t,interestRate:a,duration:n,startDate:r,repayments:s}=e;if(""===a||""===t||""===n||0>=parseFloat(t.replace(",","."))||0>=parseFloat(a.replace(",",".")))return null;let i=s.map(e=>e?{...e,amount:parseFloat(e.amount.replace(",",".")),month:parseInt(e.month)}:e);return{interestRate:parseFloat(a.replace(",",".")),capital:parseFloat(t.replace(",",".")),duration:parseInt(n),startDate:r,repayments:i}},o=e=>e/100/12,d=(e,t,a)=>{let n=o(t);return n/(1-Math.pow(1+n,-a))*e},c=(e,t)=>e*o(t),u=e=>{let{interestRate:t,capital:a,duration:n,startDate:r,repayments:s}=e,l=[],o=d(a,t,n);for(let e=0;e<n;e+=1){let u=e+1,h=void 0!==s[u]?s[u].amount:0,m=0,p=o,x=l[e-1]?l[e-1].residualDebt:a;0!==h&&(p-=o=d(x-h,t,n-u+1),m=(n-u+1)*p-h);let j=c(x-h,t),y=o-j,v=(l[e-1]?l[e-1].paidUpCapital:0)+(y+h),f=x-(y+h),g=(l[e-1]?l[e-1].paidUpInterests:0)+j,b=i()(r,"MM/YYYY").add(e,"month").format("MM/YYYY");l[e]={month:u,date:b,installment:o,interestsQuote:j,capitalQuote:y,paidUpCapital:v,residualDebt:f,paidUpInterests:g,repayment:h,repaymentSaving:m}}return l};var h=a(9753);let m=(0,h.oM)({name:"AmortizationSchedule",initialState:{value:[]},reducers:{setAmortizationSchedule:(e,t)=>{e.value=t.payload}}}),{setAmortizationSchedule:p}=m.actions;var x=m.reducer,j=a(1444);let y=j.I0,v=j.v9,f=(0,h.xC)({reducer:{amortizationSchedule:x}}),g={data:{interestRate:"",duration:"",capital:"",startDate:i()().format("MM/YYYY"),repayments:[]},setData:()=>{},handleChange:()=>{},addRepayment:()=>{},removeRepayment:()=>{},items:[]},b=(0,r.createContext)(g),F=e=>{let{children:t,mockData:a}=e,[s,i]=(0,r.useState)(a?{...g.data,...a.data}:g.data),o=v(e=>e.amortizationSchedule.value),d=y();return(0,r.useEffect)(()=>{let e=l(s);e?d(p(u(e))):d(p([]))},[s,d]),(0,n.jsx)(b.Provider,{value:{data:s,setData:i,handleChange:e=>{let{value:t,name:a,validity:n}=e.target;n.valid&&i({...s,[a]:t})},addRepayment:e=>{let{month:t,amount:a,date:n}=e,r=[...s.repayments];r[parseInt(t)]={amount:a,date:n,month:t},i({...s,repayments:r})},removeRepayment:e=>{let t=[...s.repayments];t.splice(e,1),i({...s,repayments:t})},items:o},children:t})};function N(e){let{children:t}=e;return(0,n.jsx)(j.zt,{store:f,children:(0,n.jsx)(F,{children:t})})}},4649:function(e){e.exports={style:{fontFamily:"'__Lato_58b346', '__Lato_Fallback_58b346'",fontStyle:"normal"},className:"__className_58b346"}}},function(e){e.O(0,[592,990,123,971,23,744],function(){return e(e.s=5931)}),_N_E=e.O()}]);