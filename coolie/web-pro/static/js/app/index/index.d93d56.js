/*coolie@0.22.12*/
define("0",["1"],function(l,o,e){l("1");console.log(e.id);alert("hello world!")});
define("1",["2"],function(n,o,e){n("2");console.log(e.id)});
define("2",["3"],function(n,o,e){n("3");console.log(e.id)});
define("3",["4"],function(n,o,r){function e(){for(var n=1;9>=n;n++){for(var o=1;n>=o;o++)p(".step").append(o+"x"+n+"="+n*o+"  &nbsp;");p(".step").append("<br/>")}}function a(){for(var n=["a","b","c"],o=[1,2,3],r=0;r<n.length;r++)for(var e=0;e<o.length;e++){var a="";a+=n[r]+o[e]+",&nbsp;";p(".row").append(a)}}var p=n("4");console.log(r.id);console.log(p);e();a()});
coolie.chunk(["0"]);