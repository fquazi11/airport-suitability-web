(self.webpackChunkairport_suitability=self.webpackChunkairport_suitability||[]).push([[189],{1158:(e,i,s)=>{"use strict";s.d(i,{A:()=>l});var t=s(8775),n=s(9241),r=s(9573);function l(e){let{children:i,className:s,variant:l="primary",size:a="md",isLoading:o=!1,disabled:c,...d}=e;return(0,t.jsx)("button",{className:function(){for(var e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s];return(0,r.QP)((0,n.$)(i))}("inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 dark:bg-white",{primary:"bg-green-600 text-black bg-white hover:bg-white/90 dark:bg-white-600",secondary:"bg-white-600 text-black bg-white hover:bg-white/80",outline:"border border-input bg-green-600 border-black-300 text-black dark:bg-white hover:bg-white hover:text-accent-foreground",ghost:"hover:bg-white hover:text-accent-foreground text-gray-700 hover:bg-white-100"}[l],{sm:"h-9 px-3 text-sm",md:"h-10 px-4 py-2",lg:"h-11 px-8"}[a],s),disabled:c||o,...d,children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{className:"mr-2 h-4 w-4 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading..."]}):i})}},1865:(e,i,s)=>{"use strict";s.d(i,{A:()=>c});var t=s(8775),n=s(1833),r=s.n(n),l=s(3884);let a=r()(()=>Promise.all([s.e(805),s.e(698)]).then(s.bind(s,6698)).then(e=>e.MapContainer),{loadableGenerated:{webpack:()=>[6698]},ssr:!1}),o=r()(()=>Promise.all([s.e(805),s.e(698)]).then(s.bind(s,6698)).then(e=>e.TileLayer),{loadableGenerated:{webpack:()=>[6698]},ssr:!1});function c(){let[e,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{s.e(805).then(s.t.bind(s,6895,23)).then(e=>{e.Icon.Default.mergeOptions({iconRetinaUrl:"/leaflet/images/marker-icon-2x.png",iconUrl:"/leaflet/images/marker-icon.png",shadowUrl:"/leaflet/images/marker-shadow.png"})}),i(!0)},[]),e)?(0,t.jsx)(a,{center:[51.505,-.09],zoom:6,className:"w-full h-[600px] rounded-xl shadow-xl",children:(0,t.jsx)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 OpenStreetMap contributors"})}):null}},6541:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>d});var t=s(8775),n=s(446),r=s(339),l=s.n(r),a=s(1158),o=s(9445),c=s(1865);let d=()=>(0,t.jsx)(n.N,{children:(0,t.jsxs)("main",{className:"min-h-screen p-8 transition-colors dark:bg-gray-90",children:[(0,t.jsx)("div",{className:"fixed top-4 right-4",children:(0,t.jsx)(o.U,{})}),(0,t.jsx)("section",{className:"mb-10 text-center",children:(0,t.jsx)(l(),{href:"/",className:"text-blue-500 underline",children:"Back to Home"})}),(0,t.jsxs)("section",{className:"mb-10 text-center",children:[(0,t.jsx)("h1",{className:"text-6xl font-bold",children:"Airport Suitability API"}),(0,t.jsx)("h2",{className:"text-2xl mt-4",children:"Unlock Smarter Flight Planning with AI-Powered Airport Suitability Insights"}),(0,t.jsxs)("p",{className:"mt-4",children:["Our ",(0,t.jsx)("strong",{children:"Airport Suitability API"})," provides real-time, AI-driven insights to optimize airport selection, route planning, and operational efficiency. Designed for ",(0,t.jsx)("strong",{children:"airlines, cargo operators, and flight planning systems"}),", this API delivers predictive analytics and geospatial intelligence for informed decision-making."]})]}),(0,t.jsxs)("section",{className:"mt-10",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-center",children:"Key Features"}),(0,t.jsxs)("div",{className:"mt-6",children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold",children:"1. AI-Powered Airport Scoring"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:["Advanced ",(0,t.jsx)("strong",{children:"machine learning models"})," analyze ",(0,t.jsx)("strong",{children:"runway conditions, weather trends, NOTAMs, and infrastructure"})," to provide a ",(0,t.jsx)("strong",{children:"real-time airport suitability score"}),"."]}),(0,t.jsxs)("li",{children:["Optimized for ",(0,t.jsx)("strong",{children:"airline operations, private aviation, and cargo logistics"}),"."]})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"2. Real-Time Data & Risk Analysis"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Live NOTAMs, METAR/TAF, and ADS-B integration"})," for up-to-date airport conditions."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"AI-driven risk assessment"})," for weather disruptions, congestion, and regulatory restrictions."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Predictive delay forecasting"})," based on historical trends and live data."]})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"3. GeoServer Integration for Mapping & Visualization"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Interactive maps"})," displaying airport suitability rankings."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Real-time overlays"})," for air traffic, terrain, and approach constraints."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Custom API endpoints"})," for easy integration into ",(0,t.jsx)("strong",{children:"existing flight planning software"}),"."]})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"4. Fuel & Cost Optimization"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:["AI-driven ",(0,t.jsx)("strong",{children:"fuel tankering recommendations"})," based on pricing trends and operational feasibility."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Cargo hub suitability analysis"})," for selecting the most efficient airports."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Regulatory compliance automation"})," to ensure seamless global operations."]})]})]})]}),(0,t.jsxs)("section",{className:"mt-10",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-center",children:"Who Uses the Airport Suitability API?"}),(0,t.jsxs)("div",{className:"mt-6",children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold",children:"Airlines & Flight Planners"}),(0,t.jsxs)("p",{children:["Optimize ",(0,t.jsx)("strong",{children:"route selection and alternate airport planning"}),". Reduce fuel costs and minimize disruptions."]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-4",children:"Cargo & Logistics Operators"}),(0,t.jsxs)("p",{children:["Identify ",(0,t.jsx)("strong",{children:"cost-efficient cargo hubs"})," with AI-driven insights. Predict and mitigate ",(0,t.jsx)("strong",{children:"airport congestion issues"}),"."]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-4",children:"Business Aviation & Private Jet Operators"}),(0,t.jsxs)("p",{children:["Access real-time ",(0,t.jsx)("strong",{children:"airport suitability scores"})," for ",(0,t.jsx)("strong",{children:"seamless executive travel"}),". Ensure optimal airport selection for VIP operations."]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-4",children:"Aviation Software Developers"}),(0,t.jsxs)("p",{children:["Integrate real-time ",(0,t.jsx)("strong",{children:"airport analytics"})," into existing ",(0,t.jsx)("strong",{children:"flight planning systems"}),". Enhance aviation applications with ",(0,t.jsx)("strong",{children:"AI-driven geospatial insights"}),"."]})]})]}),(0,t.jsxs)("section",{className:"mt-10",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-center",children:"Seamless Integration & Scalable Performance"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-6",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"RESTful API"})," for easy integration with aviation platforms."]}),(0,t.jsxs)("li",{children:["Supports ",(0,t.jsx)("strong",{children:"real-time queries"})," with ",(0,t.jsx)("strong",{children:"high-speed response times"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Cloud-based deployment"})," for global scalability."]})]})]}),(0,t.jsxs)("section",{className:"mt-10",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-center",children:"Partner with Us"}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-4",children:"Join Our Network of Aviation Innovators"}),(0,t.jsxs)("p",{className:"mt-4",children:["We collaborate with leading ",(0,t.jsx)("strong",{children:"airlines, airports, aviation software providers, and research institutions"})," to enhance the future of airport suitability analysis. Our partner ecosystem enables seamless ",(0,t.jsx)("strong",{children:"technology integration, innovation, and joint development"}),"."]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"Why Partner with Us?"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:["Access to ",(0,t.jsx)("strong",{children:"cutting-edge AI-driven aviation solutions"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Seamless integration"})," with existing aviation planning tools."]}),(0,t.jsxs)("li",{children:["Collaborative ",(0,t.jsx)("strong",{children:"research and development opportunities"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Early access to new API features and data insights"}),"."]})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"Who Can Partner?"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Airlines & Airports"})," looking for ",(0,t.jsx)("strong",{children:"AI-powered optimization"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Aviation Software Developers"})," building ",(0,t.jsx)("strong",{children:"next-gen planning tools"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Regulatory Bodies & Air Navigation Service Providers"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Academic & Research Institutions"})," driving aviation technology innovation."]})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mt-6",children:"Let’s Build the Future of Airport Suitability Together"}),(0,t.jsxs)("p",{className:"mt-4",children:["Join us in creating smarter, data-driven aviation solutions. Contact us to discuss partnership opportunities and explore how we can work together to transform ",(0,t.jsx)("strong",{children:"airport suitability analysis"}),"."]}),(0,t.jsx)(a.A,{variant:"primary",className:"mt-4",children:"Become a Partner"})]}),(0,t.jsxs)("section",{className:"mt-10 text-center",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold",children:"Get Started Today"}),(0,t.jsxs)("p",{className:"mt-4",children:["Enhance your flight operations with ",(0,t.jsx)("strong",{children:"AI-powered airport suitability insights"}),". Contact us to access the ",(0,t.jsx)("strong",{children:"Airport Suitability API"})," and revolutionize your ",(0,t.jsx)("strong",{children:"aviation decision-making"}),"."]}),(0,t.jsx)(a.A,{variant:"primary",className:"mt-4",children:(0,t.jsx)(l(),{href:"/contract",children:"Request API Access"})})]}),(0,t.jsx)("section",{className:"mt-10",children:(0,t.jsx)(c.A,{})}),(0,t.jsxs)("footer",{className:"mt-10 text-center",children:[(0,t.jsx)("p",{children:"Contact us at: info@airportsuitability.com"}),(0,t.jsx)("p",{children:"\xa9 2025 AirportSuitability"})]})]})})},9368:(e,i,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners/page",function(){return s(6541)}])},9445:(e,i,s)=>{"use strict";s.d(i,{U:()=>l});var t=s(8775),n=s(446),r=s(1158);function l(){let{theme:e,toggleTheme:i}=(0,n.D)();return(0,t.jsx)(r.A,{variant:"ghost",size:"sm",onClick:i,children:"light"===e?"\uD83C\uDF19":"☀️"})}}},e=>{var i=i=>e(e.s=i);e.x(),_N_E=Promise.all([e.f.consumes||function(e,i){},e.f.remotes||function(e,i){}].reduce((e,i)=>(i("189",e),e),[])).then(()=>e.X(0,[749,339,833,636,792],()=>i(9368)))}]);