(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{7627:function(e,t,s){Promise.resolve().then(s.t.bind(s,8326,23)),Promise.resolve().then(s.bind(s,4484)),Promise.resolve().then(s.bind(s,2009)),Promise.resolve().then(s.bind(s,4196)),Promise.resolve().then(s.bind(s,5909)),Promise.resolve().then(s.bind(s,6643)),Promise.resolve().then(s.bind(s,8448)),Promise.resolve().then(s.bind(s,5352)),Promise.resolve().then(s.bind(s,1141)),Promise.resolve().then(s.bind(s,7874)),Promise.resolve().then(s.bind(s,9666)),Promise.resolve().then(s.bind(s,6347)),Promise.resolve().then(s.bind(s,6147)),Promise.resolve().then(s.bind(s,3410))},9666:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(2265),i=s(7042),o=s(6347);t.default=e=>{let[t,s]=(0,a.useState)(null),r=(0,o.useSdkMessaging)(),l=e.tpa.frontend_url+(e.pathname||""),d=e.tpa.fullscreen_supported;return(0,a.useEffect)(()=>{t&&r.initializeSdk(t,e.tpa)},[t]),(0,n.jsx)("div",{className:"flex w-full flex-1",children:(0,n.jsx)("div",{className:(0,i.Z)(["flex-1",!d&&"flex items-center justify-center"]),children:(0,n.jsx)("div",{className:(0,i.Z)(["h-full w-full",!d&&"sm:my-4 sm:max-w-[520px] sm:flex-none"]),children:(0,n.jsx)("iframe",{title:"PiNet",src:l,ref:e=>s(e),frameBorder:"0",className:"block h-full w-full"})})})})}},6347:function(e,t,s){"use strict";s.r(t),s.d(t,{SdkMessagingProvider:function(){return SdkMessagingProvider},useSdkMessaging:function(){return useSdkMessaging}});var n=s(7437),a=s(2265);let i={TRACK_LOCATION:"@pi:app:sdk:track_location",OPEN_CONSENT_MODAL:"@pi:app:sdk:open_consent_modal",SDK_NEED_UPDATE:"@pi:app:sdk:need_update",COMMUNICATION_INFORMATION_REQUEST:"@pi:app:sdk:communication_information_request",DECIDE_CALLBACK_RETRIAL:"@pi:app:sdk:decide_callback_retrial",PREPARE_PAYMENT_FLOW:"@pi:app:payments:prepare_payment_flow",SHOW_PRE_PAYMENT_ERROR:"@pi:app:payments:start_payment_flow",START_PAYMENT_FLOW:"@pi:app:payments:start_payment_flow",WAIT_FOR_TRANSACTION:"@pi:app:payments:wait_for_transaction",OPEN_APP_CONVERSATION:"@pi:app:conversation:open",OPEN_CONVERSATION:"@pi:app:conversation:open_with_id",COPY_TEXT_FROM_TPA:"@pi:app:sdk:copy_text_from_tpa",CHECK_NATIVE_FEATURES:"@pi:app:sdk:check_native_features",OPEN_URL_IN_SYSTEM_BROWSER:"@pi:app:sdk:open_url_in_system_browser",OPEN_SHARE_DIALOG:"@pi:app:share_dialog:open",REQUEST_NATIVE_PERMISSION:"@pi:app:sdk:request_native_permission",IS_AD_READY:"@pi:app:sdk:is_ad_ready",REQUEST_AD:"@pi:app:sdk:request_ad",SHOW_AD:"@pi:app:sdk:show_ad"},createPinetPathnameUrl=e=>{let t=window.location.protocol,s=window.location.hostname,n=window.location.port,a=new URL("".concat(t,"//").concat(s).concat(n?":".concat(n):"")),i="/"===e.pathname?"":e.pathname;return a.pathname=i,a.search=e.search,a.hash=e.hash,a.toString()},useShareMessageHandler=()=>{let[e,t]=(0,a.useState)(null);return{handleMessage:(e,s)=>{t(e),s(e,{success:!0})},closeShareMessageModal:()=>t(null),payload:null==e?void 0:e.payload}};var o=s(6108);let CopyButton=e=>{let{value:t}=e,[s,i]=(0,a.useState)(!1),r=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=r.current;return()=>{e&&clearTimeout(e)}},[]);let handleCopy=async()=>{try{let e=r.current;e&&clearTimeout(e),await navigator.clipboard.writeText(t),i(!0)}catch(e){}finally{r.current=setTimeout(()=>i(!1),2e3)}};return(0,n.jsxs)("div",{className:"inline-block relative",children:[(0,n.jsxs)("button",{onClick:handleCopy,className:"text-primary-300 font-bold flex gap-1 items-center",children:["Copy",(0,n.jsx)(o.Z,{className:"h-6 w-6"})]}),(0,n.jsx)("div",{className:"absolute top-[130%] left-[50%] bg-gray-300 rounded px-4 py-1 -translate-x-1/2 text-gray-900 cursor-pointer",style:{opacity:s?"100%":0},onClick:()=>i(!1),children:"Copied!"})]})};var r=s(3893),l=s(5775),d=s(6514),c=s(8870),p=s(6339);let SdkShareMessageModal=e=>{var t,s,a,i,o,h;let u=window.location.href,m=window.location.origin;return(0,n.jsxs)(r.s,{show:!!e.payload,onClose:e.closeShareMessageModal,title:"Share",image:{type:"component",component:(0,n.jsx)(l.x,{})},children:[(0,n.jsxs)("div",{className:"mb-12",children:[(null===(t=e.payload)||void 0===t?void 0:t.title)&&(0,n.jsx)("p",{className:"text-md mb-2 text-center font-bold",children:null===(s=e.payload)||void 0===s?void 0:s.title}),(null===(a=e.payload)||void 0===a?void 0:a.sharingMessage)&&(0,n.jsx)("p",{className:"mb-6 text-center text-sm",children:null===(i=e.payload)||void 0===i?void 0:i.sharingMessage}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(CopyButton,{value:(null===(o=e.payload)||void 0===o?void 0:o.sharingMessage)||""})})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center gap-10",children:[(0,n.jsx)("a",{href:"http://twitter.com/share?text=".concat(null===(h=e.payload)||void 0===h?void 0:h.sharingMessage,"&url=").concat(u),target:"_blank",children:(0,n.jsx)(d.u,{width:36,height:36})}),(0,n.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(u),target:"_blank",children:(0,n.jsx)(c.R,{width:36,height:36})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(m),target:"_blank",children:(0,n.jsx)(p.I,{width:36,height:36})})]})]})},useActionNotAvailableHandler=()=>{let[e,t]=(0,a.useState)(!1);return{handleMessage:(e,s)=>{console.warn(!1,e.type),s(e,{success:!1,pinet_unsupported:!0}),t(!0)},open:e,closeModal:()=>t(!1)}};var h=s(1396),u=s.n(h),m=s(3971),g=s(8387),f={src:"/_next/static/media/pi-secondary-dark.a401517a.svg"};let getMobileOS=()=>{let e=window.navigator.userAgent;return/android/i.test(e)?"android":/iphone|ipad/i.test(e)?"ios":void 0};var x=s(2933),_=s(200),v=s(8493);let PiBrowserQrModal=e=>{let t=getMobileOS(),s=(0,x.yc)({pathname:"/api/redirect/pi-browser",searchParams:e.appSlug?new URLSearchParams({ref:e.appSlug}):void 0}),i=(0,a.useMemo)(()=>(0,n.jsx)(u(),{href:s,target:"_blank",className:"rounded-md focus:outline-none",children:(0,n.jsx)(v.y,{width:196,height:64})}),[s]),o=(0,a.useMemo)(()=>(0,n.jsx)(u(),{href:s,target:"_blank",className:"rounded-md focus:outline-none",children:(0,n.jsx)(_.I,{width:196,height:64})}),[s]);return t?(0,n.jsx)(r.s,{show:e.open,onClose:e.onClose,title:"You must have an account to access this content",description:"To access this section, you first need to create an account on Pi Network. Use below button to download our Pi Browser app.",image:{type:"component",component:(0,n.jsx)(l.x,{})},children:(0,n.jsxs)("div",{className:"flex justify-center items-center mx-auto",children:["android"===t&&(0,n.jsxs)("div",{children:[o,(0,n.jsx)("a",{href:"https://minepi.com/pi-browser-apk",className:"block mt-4 text-center text-primary-500 text-lg font-bold underline",children:"Download APK"})]}),"ios"===t&&i]})}):(0,n.jsx)(r.s,{show:e.open,onClose:e.onClose,children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center gap-8",children:[(0,n.jsx)(g.V.Title,{as:"h2",className:"text-3xl text-center font-bold leading-6",children:"Scan QR Code to Download Pi Browser"}),(0,n.jsx)(m.QRCode,{value:s.toString(),size:240,ecLevel:"M",logoImage:f.src,logoHeight:60,logoWidth:60,removeQrCodeBehindLogo:!0,bgColor:"#F3F4F6",fgColor:"#583073"}),(0,n.jsx)(g.V.Title,{as:"h3",className:"text-3xl text-center font-bold leading-6",children:"Log in to Pi Ecosystem!"}),(0,n.jsxs)(g.V.Description,{as:"p",className:"text-center",children:["Download the ",(0,n.jsx)("span",{className:"font-bold",children:"Pi Browser"}),". Sign in or create your"," ",(0,n.jsx)("span",{className:"font-bold",children:"Pi Network"})," account there to engage with this content."]}),(0,n.jsxs)(g.V.Description,{as:"div",children:[(0,n.jsxs)("div",{className:"hidden sm:flex sm:flex-col md:flex-row justify-center gap-4",children:[(0,n.jsx)(u(),{href:"https://play.google.com/store/apps/details?id=pi.browser",target:"_blank",className:"rounded-md focus:outline-none",children:(0,n.jsx)(_.I,{width:196,height:64})}),(0,n.jsx)(u(),{href:"https://apps.apple.com/us/app/pi-browser/id1560911608",target:"_blank",className:"rounded-md focus:outline-none",children:(0,n.jsx)(v.y,{width:196,height:64})})]}),(0,n.jsxs)("div",{className:"sm:hidden flex flex-col md:flex-row justify-center gap-4",children:[o,i]}),(0,n.jsx)("a",{href:"https://minepi.com/pi-browser-apk",className:"block mt-4 text-center text-primary-500 text-lg font-bold underline",children:"Download APK"})]})]})})},w=(0,a.createContext)(void 0),SdkMessagingProvider=e=>{var t,s;let o=(0,a.useRef)({iframe:null,tpa:null}),r=useActionNotAvailableHandler(),l=useShareMessageHandler();function checkInitialized(e){if(!e.current.tpa||!e.current.iframe)throw Error("SdkMessaging uninitialized.")}let onSdkMessage=e=>{var t;if(e.origin!==(null===(t=o.current.tpa)||void 0===t?void 0:t.frontend_url)||"string"!=typeof e.data)return;checkInitialized(o);let s=JSON.parse(e.data);handleSdkMessage(s)},handleSdkMessage=async e=>{switch(checkInitialized(o),e.type){case i.TRACK_LOCATION:let t=createPinetPathnameUrl(e.payload.location);window.history.replaceState(null,o.current.tpa.name,t);break;case i.OPEN_SHARE_DIALOG:l.handleMessage(e,sendSdkResponse);break;default:if(!Object.values(i).includes(e.type))return;r.handleMessage(e,sendSdkResponse)}},sendSdkResponse=(e,t)=>{if(checkInitialized(o),void 0===e.id||!o.current.iframe.contentWindow)return console.warn(!1);let s={id:e.id,payload:t},n=JSON.stringify(s);o.current.iframe.contentWindow.postMessage(n,o.current.tpa.frontend_url)};return(0,n.jsxs)(w.Provider,{value:{initializeSdk:(e,t)=>(o.current.iframe=e,o.current.tpa=t,window.addEventListener("message",onSdkMessage),()=>window.removeEventListener("message",onSdkMessage)),onSdkMessage,sendSdkResponse,tpa:null===(t=o.current)||void 0===t?void 0:t.tpa},children:[e.children,(0,n.jsx)(PiBrowserQrModal,{open:r.open,onClose:r.closeModal,appSlug:null===(s=o.current.tpa)||void 0===s?void 0:s.slug}),(0,n.jsx)(SdkShareMessageModal,{...l})]})},useSdkMessaging=()=>{let e=(0,a.useContext)(w);if(!e)throw Error("useSdkMessaging must be used within a SdkMessagingProvider");return e}}},function(e){e.O(0,[603,418,249,503,456,147,775,971,472,744],function(){return e(e.s=7627)}),_N_E=e.O()}]);