!function(){function a(){var a={},b={};for(var c in k){var d=c.match(l);if(d){var e=c.replace(l,(d[1]||d[3])+"{version}"+(d[2]||d[4])),f=a[e]||(a[e]=[]);-1===n(f,c)&&(f.push(c),f.length>1&&(b[e]=f))}}return b}function b(){this.nodes=[]}function c(a){this.name=a,this.inEdges=[],this.outEdges=[],this.depth=0}function d(a,b){this.from=a,this.to=b}function e(a,b){a.splice(n(a,b),1)}function f(a,b){b&&i(b.dependencies,function(c){var d=m.add(c);a.addEdge(d),f(d,k[b.resolve(c)])})}function g(){for(var a in k)if(h(a)){var b=k[a],c=m.add(a);f(c,b)}return{circles:m.getCircleNodes(),nodes:m.nodes}}function h(a){return/_use_\d+$/.test(a)}function i(a,b){for(var c=0,d=a.length;d>c;c++)b(a[c],c)}function j(a,b){var c=[];return i(a,function(a){b.call(null,a)&&c.push(a)}),c}seajs.health=function(){return{multiVersions:a(),circles:g()}};var k=seajs.cache,l=/(\/)(?:\d+\.){1,2}\d+(\/)|(\D)(?:\d+\.){1,2}\d+[^/]*(\.(?:js|css))/;b.prototype={add:function(a,b){return this.getNode(a,b)},getNode:function(a,b){for(var d=this.nodes,e={name:a},f=0,g=d.length;g>f;f++)if(d[f].equals(e))return d[f];var h=new c(a);return h.data=b,this.nodes.push(h),h},getCircleNodes:function(){var a=[],b=[];for(i(this.nodes,function(a){0==a.inEdges.length&&b.push(a)});b.length;){var c=b.shift();for(a.push(c);c.outEdges.length;){var d=c.outEdges.shift(),e=d.to;d.remove(),0==e.inEdges.length&&b.push(e)}return j(this.nodes,function(a){return 0!=a.inEdges.length})}return this.nodes.filter(function(a){return 0!=a.inEdges.length})},clone:function(){var a=new b;return this.nodes.forEach(function(b){var c=a.add(b.name,b.data);b.outEdges.forEach(function(b){var d=b.to;c.addEdge(a.add(d.name,d.data))})}),a}},c.prototype={addEdge:function(a){var b=new d(this,a);return this.outEdges.push(b),a.inEdges.push(b),a.setDepth(this.depth+1),this},setDepth:function(a){a<this.depth||(this.depth=a)},equals:function(a){return a.name==this.name}},d.prototype={equals:function(a){return a.from==this.from&&a.to==this.to},remove:function(){for(var a=this.to.inEdges.slice(0),b=0,c=a.length;c>b;b++)a[b].equals(this)&&e(this.to.inEdges,a[b])}};var m=new b,n=[].indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1};define("seajs/seajs-health/0.1.1/seajs-health",[],{})}();