const t=[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],e=[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872];function n(t,e){const n=e(t),i=n[0]*n[0]+n[1]*n[1];return Math.sqrt(i)}class i{constructor(t,e,n,i){this.points=[],this.dpoints=[],this._lut=[],this.order=3,this.points.push(t,e,n),i&&this.points.push(i),this.order=this.points.length-1,this.update()}update(){this._lut=[],this.dpoints=function(t){const e=[];for(let n=t,i=n.length,s=i-1;i>1;i--,s--){const t=[];let i=[0,0];for(let e=0;e<s;e++)i=[s*(n[e+1][0]-n[e][0]),s*(n[e+1][1]-n[e][1])],t.push(i);e.push(t),n=t}return e}(this.points)}length(){return function(i){let s=0;const o=t.length;for(let h=0;h<o;h++){const o=.5*t[h]+.5;s+=e[h]*n(o,i)}return.5*s}(this.derivative.bind(this))}derivative(t){const e=1-t;let n=0,i=0,s=0,o=this.dpoints[0];return 2===this.order?(o=[o[0],o[1],[0,0]],n=e,i=t):3===this.order&&(n=e*e,i=e*t*2,s=t*t),[n*o[0][0]+i*o[1][0]+s*o[2][0],n*o[0][1]+i*o[1][1]+s*o[2][1]]}getLUT(t=100){if(!t)return[];if(this._lut.length===t)return this._lut;this._lut=[],t--;for(let e=0;e<=t;e++)this._lut.push(this.compute(e/t));return this._lut}compute(t){return function(t,e){if(0===t)return e[0];const n=e.length-1;if(1===t)return e[n];let i=e;const s=1-t;if(0===n)return e[0];if(1===n){return[s*i[0][0]+t*i[1][0],s*i[0][1]+t*i[1][1]]}if(n<4){const e=s*s,o=t*t;let h=0,r=0,l=0,a=0;return 2===n?(i=[i[0],i[1],i[2],[0,0]],r=e,l=s*t*2,a=o):3===n&&(r=e*s,l=e*t*3,a=s*o*3,h=t*o),[r*i[0][0]+l*i[1][0]+a*i[2][0]+h*i[3][0],r*i[0][1]+l*i[1][1]+a*i[2][1]+h*i[3][1]]}const o=JSON.parse(JSON.stringify(e));for(;o.length>1;){for(let e=0;e<o.length-1;e++)o[e]=[o[e][0]+(o[e+1][0]-o[e][0])*t,o[e][1]+(o[e+1][1]-o[e][1])*t];o.splice(o.length-1,1)}return o[0]}(t,this.points)}}const s=new Map;function o(t,e,n,i){const{brickSize:o,color:h}=i;t.save(),t.fillStyle=h,t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=3,t.shadowOffsetX=1,t.shadowOffsetY=1,t.beginPath(),t.rect(e,n,o,o),t.fill(),t.beginPath(),t.arc(e+o/2,n+o/2,function(t){if(s.has(t))return s.get(t);const e=Math.min(24,.5*t/2);return s.set(t,e),e}(o),0,2*Math.PI),t.fill(),t.restore()}function h(t,e,n,i){const s=i.brickSize;o(n,t*s,e*s,i)}function r(t,e,n,i=!1){i&&t.sort((t,e)=>t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:t[0]>e[0]?1:0);const s=n.brickSize;t.forEach(t=>{o(e,t[0]*s,t[1]*s,n)})}function l(t,e,n,i,s=new Set){const o=[],h=t=>{const e=t.join(",");s.has(e)||(s.add(e),o.push(t))};if(t===n){const n=Math.min(e,i),s=Math.max(e,i);for(let e=n;e<=s;e++)h([t,e])}else{const s=i-e,o=n-t,r=s/o,l=e-r*t;if(Math.abs(o)>=Math.abs(s)){const e=Math.min(t,n),i=Math.max(t,n);for(let t=e;t<=i;t++){h([t,Math.round(r*t+l)])}}else{const t=Math.min(e,i),n=Math.max(e,i);for(let e=t;e<=n;e++){h([Math.round((e-l)/r),e])}}}return o}function a(t,e=new Set){let n=[];for(let i=0;i<t.length-1;i++){const[s,o]=t[i],[h,r]=t[i+1],a=l(s,o,h,r,e);n=[...n,...a]}return n}function c(t,e,n,i,s,o,r=!1){if(o.filled||r)for(let r=0;r<n;r++)for(let n=0;n<i;n++)h(t+r,e+n,s,o);else n>0&&i>0&&u([[t,e],[t+n-1,e],[t+n-1,e+i-1],[t,e+i-1],[t,e]],s,o)}function f(t,e,n,i,s,o){r(l(t,e,n,i),s,o)}function u(t,e,n){r(a(t),e,n,!0)}function d(t,e,n,i,s,o){let h=0,l=i;const a=n*n,f=i*i,u=-(a/4+n%2+f),d=-(f/4+i%2+a),g=-(f/4+i%2);let p=-a*l,x=2*f*h,M=-2*a*l;const m=2*f,y=2*a,b=()=>{h++,p+=x+=m},w=()=>{l--,p+=M+=y};if(o.filled){const r=[];let x=h,M=l,m=1,y=1;const S=(t,e,n,i)=>{i<0&&(e+=i+1,i=Math.abs(i)),r.push({x:t,y:e,width:n,height:i})};if(0===i)S(t-1,e,2*n+1,1);else{for(;l>=0&&h<=n;)p+f*h<=u||p+a*l<=g?(1===y||(2*M+1>2*(y-1)?(S(t-x,e-M,m,y-1),S(t-x,e+M,m,1-y),M-=y-1,y=1):(S(t-x,e-M,m,2*M+1),M-=M,y=1)),b(),x++,m+=2):p-a*l>d?(w(),y++):(2*M+1>2*y?(S(t-x,e-M,m,y),S(t-x,e+M,m,-y)):S(t-x,e-M,m,2*M+1),b(),w(),x++,m+=2,M-=y,y=1);M>y?(S(t-x,e-M,m,y),S(t-x,e+M+1,m,-y)):S(t-x,e-M,m,2*M+1)}r.forEach(t=>{t.height<0&&(t.y+=t.height+1,t.height=Math.abs(t.height))}),r.sort((t,e)=>t.y-e.y),r.forEach(t=>c(t.x,t.y,t.width,t.height,s,o,!0))}else{const i=[];for(;l>=0&&h<=n;)i.push([t+h,e+l]),0===h&&0===l||i.push([t-h,e-l]),0!==h&&0!==l&&(i.push([t+h,e-l]),i.push([t-h,e+l])),p+f*h<=u||p+a*l<=g?b():p-a*l>d?w():(b(),w());r(i,s,o,!0)}}function g(t,e,n){if(0===t.length)return;if(1===t.length)return void h(t[0][0],t[0][1],e,n);if(2===t.length){const[[i,s],[o,h]]=t;return void f(i,s,o,h,e,n)}const i=[...t];if(i[0].join(",")!==i[i.length-1].join(",")&&i.push([i[0][0],i[0][1]]),n.filled){const t=new Set;let s=a(i,t);const o=[];for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e[1]!==n[1]){const t=Math.min(e[1],n[1]);o.push({ymin:t,ymax:Math.max(e[1],n[1]),x:t===e[1]?e[0]:n[0],islope:(n[0]-e[0])/(n[1]-e[1])})}}o.sort((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax));let h=[],c=o[0].ymin;for(;h.length||o.length;){if(o.length){let t=-1;for(let e=0;e<o.length&&!(o[e].ymin>c);e++)t=e;o.splice(0,t+1).forEach(t=>{h.push({s:c,edge:t})})}if((h=h.filter(t=>t.edge.ymax!==c)).sort((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x)),h.length>1)for(let e=0;e<h.length;e+=2){const n=e+1;if(n>=h.length)break;const i=h[e].edge,o=h[n].edge;s=s.concat(l(Math.round(i.x),c,Math.round(o.x),c,t))}c++,h.forEach(t=>{t.edge.x=t.edge.x+t.edge.islope})}r(s,e,n,!0)}else u(i,e,n)}export default class{constructor(t,e=24,n){this.defaultOptions={brickSize:24,color:"#2196F3",filled:!1},this.ctx=t,this.defaultOptions.brickSize=e,n&&(n.color&&(this.defaultOptions.color=n.color),"boolean"==typeof n.filled&&(this.defaultOptions.filled=n.filled))}opt(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}line(t,e,n,i,s){f(t,e,n,i,this.ctx,this.opt(s))}linearPath(t,e){u(t,this.ctx,this.opt(e))}rectangle(t,e,n,i,s){c(t,e,n,i,this.ctx,this.opt(s))}circle(t,e,n,i){!function(t,e,n,i,s){d(t,e,n,n,i,s)}(t,e,n,this.ctx,this.opt(i))}ellipse(t,e,n,i,s){d(t,e,n,i,this.ctx,this.opt(s))}polygon(t,e){g(t,this.ctx,this.opt(e))}arc(t,e,n,i,s,o,h,r){!function(t,e,n,i,s,o,h,r,l){let a=Math.min(s,o),c=Math.max(s,o);if(a===c)return;if(n<=0||i<=0)return;c-a>2*Math.PI&&(a=0,c=2*Math.PI);const f=Math.round(2*Math.sqrt((n*n+i*i)/2)*(c-a)),d=(c-a)/f,p=new Set,x=[];for(let s=0;s<=f;s++){const o=a+s*d,h=Math.cos(o),r=Math.sin(o),l=n*i/Math.sqrt(i*i*h*h+n*n*r*r),c=[t+Math.round(l*h),e+Math.round(l*r)],f=c.join(",");p.has(f)||(p.add(f),x.push(c))}if(h){const n=[t,e],i=n.join(",");p.has(i)||(p.add(i),x.push(n)),g(x,r,l)}else u(x,r,l)}(t,e,n,i,s,o,h,this.ctx,this.opt(r))}bezierCurve(t,e,n,s,o,h,r,l,a){!function(t,e,n,s,o,h,r,l,a,c){const f=new i([t,e],[n,s],[o,h],[r,l]),d=f.getLUT(f.length()).map(t=>[Math.round(t[0]),Math.round(t[1])]);d.push([r,l]),c.filled?g(d,a,c):u(d,a,c)}(t,e,n,s,o,h,r,l,this.ctx,this.opt(a))}quadraticCurve(t,e,n,s,o,h,r){!function(t,e,n,s,o,h,r,l){const a=new i([t,e],[n,s],[o,h]),c=a.getLUT(a.length()).map(t=>[Math.round(t[0]),Math.round(t[1])]);c.push([o,h]),l.filled?g(c,r,l):u(c,r,l)}(t,e,n,s,o,h,this.ctx,this.opt(r))}drawImage(t,e,n,i,s){!function(t,e,n,i,s,o,r){const l=e.brickSize;o||(o=[0,0]),r||(r=[n.width,n.height]),s||(s=[Math.round(r[0]/l),Math.round(r[1]/l)]);const[a,c]=s,f="undefined"!=typeof OffscreenCanvas?new OffscreenCanvas(a,c):document.createElement("canvas");f.width=a,f.height=c;const u=f.getContext("2d");u.drawImage(n,o[0],o[1],r[0],r[1],0,0,s[0],s[1]);const d=u.getImageData(0,0,a,c);for(let e=0;e<c;e++)for(let n=0;n<a;n++){const s={brickSize:l,color:`rgb(${d.data[e*a*4+4*n]}, ${d.data[e*a*4+4*n+1]}, ${d.data[e*a*4+4*n+2]})`,filled:!1};h(i[0]+n,i[1]+e,t,s)}}(this.ctx,this.opt(),t,e,n,i,s)}}
