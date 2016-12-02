define("gallery/charts/0.0.1/src/modules/exporting",function(t,e,n){n.exports=function(t){var e,n,o=t.Chart,i=t.addEvent,r=t.removeEvent,a=HighchartsAdapter.fireEvent,s=t.createElement,l=t.discardElement,c=t.css,p=t.merge,u=t.each,h=t.extend,d=t.splat,g=Math,m=g.max,x=document,y=window,f=t.isTouchDevice,b="M",v="L",w="div",S="hidden",k="none",E="highcharts-",C="absolute",G="px",F=t.Renderer.prototype.symbols,M=t.getOptions();return h(M.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"}),M.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:k,color:"#303030",fontSize:f?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}},M.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:E+"contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}},t.post=function(t,e,n){var o,i;i=s("form",p({method:"post",action:t,enctype:"multipart/form-data"},n),{display:k},x.body);for(o in e)s("input",{type:S,name:o,value:e[o]},null,i);i.submit(),l(i)},h(o.prototype,{sanitizeSVG:function(t){return t.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,"\xa0").replace(/&shy;/g,"\xad").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(t){return t.toLowerCase()})},getSVG:function(n){var o,i,r,a,c,g,m,y,f=this,b=p(f.options,n);return x.createElementNS||(x.createElementNS=function(t,e){return x.createElement(e)}),i=s(w,null,{position:C,top:"-9999em",width:f.chartWidth+G,height:f.chartHeight+G},x.body),m=f.renderTo.style.width,y=f.renderTo.style.height,c=b.exporting.sourceWidth||b.chart.width||/px$/.test(m)&&parseInt(m,10)||600,g=b.exporting.sourceHeight||b.chart.height||/px$/.test(y)&&parseInt(y,10)||400,h(b.chart,{animation:!1,renderTo:i,forExport:!0,width:c,height:g}),b.exporting.enabled=!1,delete b.data,b.series=[],u(f.series,function(t){a=p(t.options,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:t.visible}),a.isInternal||b.series.push(a)}),n&&u(["xAxis","yAxis"],function(t){u(d(n[t]),function(e,n){b[t][n]=p(b[t][n],e)})}),o=new t.Chart(b,f.callback),u(["xAxis","yAxis"],function(t){u(f[t],function(n,i){var r=o[t][i],a=n.getExtremes(),s=a.userMin,l=a.userMax;!r||s===e&&l===e||r.setExtremes(s,l,!0,!1)})}),r=o.container.innerHTML,b=null,o.destroy(),l(i),r=this.sanitizeSVG(r),r=r.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")},getSVGForExport:function(t,e){var n=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},n.chartOptions,e,{exporting:{sourceWidth:t&&t.sourceWidth||n.sourceWidth,sourceHeight:t&&t.sourceHeight||n.sourceHeight}}))},exportChart:function(e,n){var o=this.getSVGForExport(e,n);e=p(this.options.exporting,e),t.post(e.url,{filename:e.filename||"chart",type:e.type,width:e.width||0,scale:e.scale||2,svg:o},e.formAttributes)},print:function(){var t=this,e=t.container,n=[],o=e.parentNode,i=x.body,r=i.childNodes;t.isPrinting||(t.isPrinting=!0,a(t,"beforePrint"),u(r,function(t,e){1===t.nodeType&&(n[e]=t.style.display,t.style.display=k)}),i.appendChild(e),y.focus(),y.print(),setTimeout(function(){o.appendChild(e),u(r,function(t,e){1===t.nodeType&&(t.style.display=n[e])}),t.isPrinting=!1,a(t,"afterPrint")},1e3))},contextMenu:function(t,e,n,o,a,l,p){var d,g,x,y,f=this,b=f.options.navigation,v=b.menuItemStyle,S=f.chartWidth,E=f.chartHeight,F="cache-"+t,M=f[F],D=m(a,l),P="3px 3px 10px #888",H=function(e){f.pointer.inClass(e.target,t)||g()};M||(f[F]=M=s(w,{className:t},{position:C,zIndex:1e3,padding:D+G},f.container),d=s(w,null,h({MozBoxShadow:P,WebkitBoxShadow:P,boxShadow:P},b.menuStyle),M),g=function(){c(M,{display:k}),p&&p.setState(0),f.openMenu=!1},i(M,"mouseleave",function(){x=setTimeout(g,500)}),i(M,"mouseenter",function(){clearTimeout(x)}),i(document,"mouseup",H),i(f,"destroy",function(){r(document,"mouseup",H)}),u(e,function(t){if(t){var e=t.separator?s("hr",null,null,d):s(w,{onmouseover:function(){c(this,b.menuItemHoverStyle)},onmouseout:function(){c(this,v)},onclick:function(){g(),t.onclick&&t.onclick.apply(f,arguments)},innerHTML:t.text||f.options.lang[t.textKey]},h({cursor:"pointer"},v),d);f.exportDivElements.push(e)}}),f.exportDivElements.push(d,M),f.exportMenuWidth=M.offsetWidth,f.exportMenuHeight=M.offsetHeight),y={display:"block"},n+f.exportMenuWidth>S?y.right=S-n-a-D+G:y.left=n-D+G,o+l+f.exportMenuHeight>E&&"top"!==p.alignOptions.verticalAlign?y.bottom=E-o-D+G:y.top=o+l-D+G,c(M,y),f.openMenu=!0},addButton:function(e){var o,i,r=this,a=r.renderer,s=p(r.options.navigation.buttonOptions,e),l=s.onclick,c=s.menuItems,u={stroke:s.symbolStroke,fill:s.symbolFill},d=s.symbolSize||12;if(r.btnCount||(r.btnCount=0),r.exportDivElements||(r.exportDivElements=[],r.exportSVGElements=[]),s.enabled!==!1){var g,m=s.theme,x=m.states,y=x&&x.hover,f=x&&x.select;delete m.states,l?g=function(){l.apply(r,arguments)}:c&&(g=function(){r.contextMenu(i.menuClassName,c,i.translateX,i.translateY,i.width,i.height,i),i.setState(2)}),s.text&&s.symbol?m.paddingLeft=t.pick(m.paddingLeft,25):s.text||h(m,{width:s.width,height:s.height,padding:0}),i=a.button(s.text,0,0,g,m,y,f).attr({title:r.options.lang[s._titleKey],"stroke-linecap":"round"}),i.menuClassName=e.menuClassName||E+"menu-"+r.btnCount++,s.symbol&&(o=a.symbol(s.symbol,s.symbolX-d/2,s.symbolY-d/2,d,d).attr(h(u,{"stroke-width":s.symbolStrokeWidth||1,zIndex:1})).add(i)),i.add().align(h(s,{width:i.width,x:t.pick(s.x,n)}),!0,"spacingBox"),n+=(i.width+s.buttonSpacing)*("right"===s.align?-1:1),r.exportSVGElements.push(i,o)}},destroyExport:function(t){var e,n,o=t.target;for(e=0;e<o.exportSVGElements.length;e++)n=o.exportSVGElements[e],n&&(n.onclick=n.ontouchstart=null,o.exportSVGElements[e]=n.destroy());for(e=0;e<o.exportDivElements.length;e++)n=o.exportDivElements[e],r(n,"mouseleave"),o.exportDivElements[e]=n.onmouseout=n.onmouseover=n.ontouchstart=n.onclick=null,l(n)}}),F.menu=function(t,e,n,o){var i=[b,t,e+2.5,v,t+n,e+2.5,b,t,e+o/2+.5,v,t+n,e+o/2+.5,b,t,e+o-1.5,v,t+n,e+o-1.5];return i},o.prototype.callbacks.push(function(t){var e,o=t.options.exporting,r=o.buttons;if(n=0,o.enabled!==!1){for(e in r)t.addButton(r[e]);i(t,"destroy",t.destroyExport)}}),t}});