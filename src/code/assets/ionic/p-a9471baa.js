import{k as t}from"./p-21bf1337.js";import{createGesture as o}from"./p-e3be73c0.js";import"./p-0d9cab2d.js";const r=(r,e,s,n,a)=>{const c=r.ownerDocument.defaultView;return o({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:s,onMove:t=>{n(t.deltaX/c.innerWidth)},onEnd:o=>{const r=c.innerWidth,e=o.deltaX/r,s=o.velocityX,n=s>=0&&(s>.2||o.deltaX>r/2),p=(n?1-e:e)*r;let i=0;if(p>5){const t=p/Math.abs(s);i=Math.min(t,540)}a(n,e<=0?.01:t(0,e,.9999),i)}})};export{r as createSwipeBackGesture}