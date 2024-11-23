import{j as e}from"./jsx-runtime.TgE5XOvc.js";import{r as c}from"./index.-VfdvS1U.js";import{d,R as j,g as T,a as N,T as C,U as S,u as v,b as h,C as D,c as U}from"./CustomConnectButton.EgA26bld.js";import{g as A}from"./index.DjKJqAo0.js";const k=async(i,t,m)=>{if(!t){console.error("User address is not available");return}const r=m*1e6,x=d.beginCell().storeUint(0,32).storeStringTail("USDT Pass payment!").endCell(),u=d.beginCell().storeUint(260734629,32).storeUint(0,64).storeCoins(r).storeAddress(j).storeAddress(d.Address.parse(t)).storeBit(0).storeCoins(d.toNano("0.01")).storeBit(1).storeRef(x).endCell();let a,n;if(t){const s=await T(t,S);a=s.walletAddress,n=s.balance}if(!n||n<r){alert("Insufficient funds");return}if(!a){alert("Jetton Wallet Address is not available");return}const o={validUntil:N(),messages:[{address:a.toString(),amount:C.toString(),payload:u.toBoc().toString("base64")}]};try{await i.sendTransaction(o),console.log("USDT payment sent successfully")}catch(s){console.error("Error sending USDT transaction:",s)}},E=()=>{const[i]=v(),t=h(),m=h(!1),[r,x]=c.useState(0),[u,a]=c.useState({days:0,hours:0,minutes:0,seconds:0}),n=new Date("2025-03-01T00:00:00");return c.useEffect(()=>{const o=()=>{const w=new Date,l=n.getTime()-w.getTime();if(l<=0){a({days:0,hours:0,minutes:0,seconds:0});return}const f=Math.floor(l/(1e3*60*60*24)),g=Math.floor(l/(1e3*60*60)%24),p=Math.floor(l/1e3/60%60),b=Math.floor(l/1e3%60);a({days:f,hours:g,minutes:p,seconds:b}),localStorage.setItem("rialTimer",JSON.stringify({days:f,hours:g,minutes:p,seconds:b}))},s=localStorage.getItem("rialTimer");s&&a(JSON.parse(s));const y=setInterval(o,1e3);return()=>clearInterval(y)},[]),c.useEffect(()=>{A.fromTo(".timer-box",{opacity:0,y:30},{opacity:1,y:0,duration:1,stagger:.2})},[]),e.jsxs("div",{className:"flex flex-col items-center justify-center text-primaryText font-Inter p-8 min-h-screen bg-gradient-to-br from-bgDark1 to-bgDark2",children:[e.jsx("div",{className:"flex flex-wrap justify-center items-center mb-8 mt-8",children:Object.entries(u).map(([o,s])=>e.jsxs("div",{className:"timer-box bg-primaryColor text-white rounded-lg p-4 w-24 sm:w-28 lg:w-32 shadow-md flex flex-col items-center mx-2 mt-4",children:[e.jsx("p",{className:"text-3xl sm:text-4xl font-extrabold",children:s}),e.jsx("p",{className:"text-sm sm:text-base mt-1 uppercase tracking-wide",children:o})]},o))}),e.jsx(D,{}),t&&m?e.jsx("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-6 w-full max-w-lg transform transition hover:scale-105",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"bg-primaryColor text-primaryText rounded-full p-3",children:e.jsx("i",{className:"fas fa-wallet text-xl"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-primaryColor",children:"Wallet Connected"}),e.jsx("p",{className:"text-secondaryText text-sm",children:"Your wallet is successfully connected. Start your transactions now."})]})]})}):e.jsx("div",{className:"bg-gradient-to-r from-bgDark3 to-bgDark2 text-secondaryText shadow-lg rounded-lg p-6 w-full max-w-lg text-center transform transition hover:scale-105",children:e.jsx("p",{className:"text-lg",children:"Please connect your wallet to proceed."})}),e.jsxs("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-8 w-full max-w-lg mt-8",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"usdtAmount",className:"block text-lg font-semibold mb-3 text-primaryText",children:"Enter USDT Amount"}),e.jsx("input",{type:"number",id:"usdtAmount",value:r,onChange:o=>x(parseFloat(o.target.value)),placeholder:"Amount in USDT",min:"0",className:"w-full px-4 py-2 border border-mainBorder bg-bgDark3 text-primaryText rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"}),e.jsxs("p",{className:"text-sm text-secondaryText mt-2",children:["By sending this amount, you will receive"," ",e.jsx("span",{className:"font-bold text-primaryColor",children:r||0})," Rial Coins."]})]}),e.jsxs("button",{onClick:()=>k(i,t,r),disabled:!t||r<=0,className:`w-full px-6 py-3 rounded-md text-lg font-semibold transition-transform transform ${t&&r>0?"bg-primaryColor text-white hover:bg-secondaryColor hover:scale-105 focus:ring-4 focus:ring-primaryColor":"bg-bgDark4 text-secondaryText cursor-not-allowed"}`,children:[e.jsx("i",{className:"fas fa-paper-plane mr-2"}),"Buy RIAL"]})]}),e.jsx("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-8 w-full max-w-lg mt-8",children:e.jsx("a",{href:"/sell",className:"block w-full px-6 py-3 mt-6 rounded-md text-lg font-semibold text-center bg-red-600 text-white hover:bg-red-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-red-400",children:"Go to Sell Page"})})]})},P=()=>e.jsx(U,{manifestUrl:"https://rialcoin.io/tonconnect-manifest.json",children:e.jsx(E,{"client:only":"react"})});export{P as Buy};
