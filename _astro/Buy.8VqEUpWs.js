import{j as e}from"./jsx-runtime.TgE5XOvc.js";import{r as m}from"./index.-VfdvS1U.js";import{d as f,R as j,g as C,a as S,T as v,U as D,u as N,b as h,C as U,c as A}from"./CustomConnectButton.CnwfV2yS.js";import{g as k}from"./index.DjKJqAo0.js";const d=(l,s)=>{let t=document.getElementById("message-box");t||(t=document.createElement("div"),t.id="message-box",t.style.position="fixed",t.style.bottom="20px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.padding="15px 20px",t.style.borderRadius="8px",t.style.fontFamily="Arial, sans-serif",t.style.fontSize="16px",t.style.zIndex="1000",t.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",document.body.appendChild(t)),t.textContent=l,s==="success"?(t.style.backgroundColor="#4caf50",t.style.color="#ffffff"):s==="error"&&(t.style.backgroundColor="#f44336",t.style.color="#ffffff"),setTimeout(()=>{t&&t.remove()},3e3)},E=async(l,s,t)=>{if(!s){console.error("User address is not available"),d("User address is not available","error");return}const o=t*1e6,x=f.beginCell().storeUint(0,32).storeStringTail("USDT Pass payment!").endCell(),u=f.beginCell().storeUint(260734629,32).storeUint(0,64).storeCoins(o).storeAddress(j).storeAddress(f.Address.parse(s)).storeBit(0).storeCoins(f.toNano("0.01")).storeBit(1).storeRef(x).endCell();let n,i;if(s){const r=await C(s,D);n=r.walletAddress,i=r.balance}if(!i||i<o){d("Insufficient funds","error");return}if(!n){d("Jetton Wallet Address is not available","error");return}const a={validUntil:S(),messages:[{address:n.toString(),amount:v.toString(),payload:u.toBoc().toString("base64")}]};try{await l.sendTransaction(a),d("USDT payment sent successfully","success"),console.log("USDT payment sent successfully")}catch(r){console.error("Error sending USDT transaction:",r),d("Error sending USDT transaction","error")}},I=()=>{const[l]=N(),s=h(),t=h(!1),[o,x]=m.useState(0),[u,n]=m.useState({days:0,hours:0,minutes:0,seconds:0}),i=new Date("2025-03-01T00:00:00");return m.useEffect(()=>{const a=()=>{const T=new Date,c=i.getTime()-T.getTime();if(c<=0){n({days:0,hours:0,minutes:0,seconds:0});return}const g=Math.floor(c/(1e3*60*60*24)),p=Math.floor(c/(1e3*60*60)%24),b=Math.floor(c/1e3/60%60),y=Math.floor(c/1e3%60);n({days:g,hours:p,minutes:b,seconds:y}),localStorage.setItem("rialTimer",JSON.stringify({days:g,hours:p,minutes:b,seconds:y}))},r=localStorage.getItem("rialTimer");r&&n(JSON.parse(r));const w=setInterval(a,1e3);return()=>clearInterval(w)},[]),m.useEffect(()=>{k.fromTo(".timer-box",{opacity:0,y:30},{opacity:1,y:0,duration:1,stagger:.2})},[]),e.jsxs("div",{className:"flex flex-col items-center justify-center text-primaryText font-Inter p-8 min-h-screen bg-gradient-to-br from-bgDark1 to-bgDark2",children:[e.jsx("div",{className:"flex flex-wrap justify-center items-center mb-8 mt-8",children:Object.entries(u).map(([a,r])=>e.jsxs("div",{className:"timer-box bg-primaryColor text-white rounded-lg p-4 w-24 sm:w-28 lg:w-32 shadow-md flex flex-col items-center mx-2 mt-4",children:[e.jsx("p",{className:"text-3xl sm:text-4xl font-extrabold",children:r}),e.jsx("p",{className:"text-sm sm:text-base mt-1 uppercase tracking-wide",children:a})]},a))}),e.jsx(U,{}),s&&t?e.jsx("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-6 w-full max-w-lg transform transition hover:scale-105",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"bg-primaryColor text-primaryText rounded-full p-3",children:e.jsx("i",{className:"fas fa-wallet text-xl"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-primaryColor",children:"Wallet Connected"}),e.jsx("p",{className:"text-secondaryText text-sm",children:"Your wallet is successfully connected. Start your transactions now."})]})]})}):e.jsx("div",{className:"bg-gradient-to-r from-bgDark3 to-bgDark2 text-secondaryText shadow-lg rounded-lg p-6 w-full max-w-lg text-center transform transition hover:scale-105",children:e.jsx("p",{className:"text-lg",children:"Please connect your wallet to proceed."})}),e.jsxs("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-8 w-full max-w-lg mt-8",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"usdtAmount",className:"block text-lg font-semibold mb-3 text-primaryText",children:"Enter USDT Amount"}),e.jsx("input",{type:"number",id:"usdtAmount",value:o,onChange:a=>x(parseFloat(a.target.value)),placeholder:"Amount in USDT",min:"0",className:"w-full px-4 py-2 border border-mainBorder bg-bgDark3 text-primaryText rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"}),e.jsxs("p",{className:"text-sm text-secondaryText mt-2",children:["By sending this amount, you will receive"," ",e.jsx("span",{className:"font-bold text-primaryColor",children:o||0})," Rial Coins."]})]}),e.jsxs("button",{onClick:()=>E(l,s,o),disabled:!s||o<=0,className:`w-full px-6 py-3 rounded-md text-lg font-semibold transition-transform transform ${s&&o>0?"bg-primaryColor text-white hover:bg-secondaryColor hover:scale-105 focus:ring-4 focus:ring-primaryColor":"bg-bgDark4 text-secondaryText cursor-not-allowed"}`,children:[e.jsx("i",{className:"fas fa-paper-plane mr-2"}),"Buy RIAL"]})]}),e.jsx("section",{className:"bg-gradient-to-r from-bgDark2 to-bgDark3 shadow-lg rounded-lg p-8 w-full max-w-lg mt-8",children:e.jsx("a",{href:"/sell",className:"block w-full px-6 py-3 rounded-md text-lg font-semibold text-center bg-red-600 text-white hover:bg-red-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-red-400",children:"Go to Sell Page"})})]})},W=()=>e.jsx(A,{manifestUrl:"https://rialcoin.io/tonconnect-manifest.json",children:e.jsx(I,{"client:only":"react"})});export{W as Buy};