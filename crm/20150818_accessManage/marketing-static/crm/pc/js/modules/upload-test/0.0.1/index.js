define("modules/upload-test/0.0.1/index",["jquery","upload","plupload","mousewheel","fancybox"],function(require,exports,module){var uploadTest,$=require("jquery"),upload=require("upload"),pl=require("plupload");require("mousewheel")($),require("fancybox")($,["buttons","thumbs","media"]),$(function(){function uploadInit(){new upload.initalize({browse_button:"uploadbtn",uptoken_url:"/cdn/qn/token",uptoken_key:"token",domain_key:"domain",downloadUrl:domain,init:{FilesAdded:function(up,files){pl.upload.each(files,function(file){var div=document.createElement("div");div.className="uploading";var i=document.createElement("i");i.className="fa fa-spinner fa-spin fa-2x",file.loading=div,div.appendChild(i),imglist.appendChild(div)})},FileUploaded:function(up,file,info){console.log("uploaed",up,info,file);var res=JSON.parse(info),img=document.createElement("img");img.src=upload.sdk.getUrl(res.key),imglist.replaceChild(img,file.loading);var url=upload.sdk.imageView2({mode:2,w:500,h:200,quality:90},res.key),url2=upload.sdk.imageMogr2({blur:"20x2"},res.key),t=document.createElement("img");t.src=url,imglist.appendChild(t);var t2=document.createElement("img");t2.src=url2,imglist.appendChild(t2),upload.sdk.imageAve(res.key,function(info){for(var sColorChange=[],i=2;7>i;i+=2)sColorChange.push(parseInt("0x"+info.RGB.slice(i,i+2)));document.querySelector("body").style.backgroundColor="RGB("+sColorChange.join(",")+")"}),upload.sdk.imageInfo(res.key,function(info){console.log(info)})},UploadProgress:function(up,file){var chunk_size=pl.upload.parseSize(this.getOption("chunk_size"));console.log(file.percent+"%",up.total.bytesPerSec,chunk_size)}}})}var domain=null,imglist=document.querySelector("#imglist");uploadInit(),$("#imglist img").fancybox({padding:0,margin:5,helpers:{overlay:{css:{background:"rgba(58, 42, 45, 0.95)"}}}})}),module.exports=uploadTest});