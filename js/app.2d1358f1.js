(function(t){function e(e){for(var i,n,r=e[0],c=e[1],l=e[2],h=0,u=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6fe45a3d"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"1dec60f6"}[t]+".css",s=c.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===i||h===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],h=l.getAttribute("data-href");if(h===i||h===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[t],d.parentNode.removeChild(d),a(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=o);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,c.nc&&h.setAttribute("nonce",c.nc),h.src=r(t);var u=new Error;l=function(e){h.onerror=h.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,a[1](u)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=h;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d8d":function(t,e,a){"use strict";var i=a("e157"),n=a.n(i);n.a},"21bb":function(t,e,a){"use strict";var i=a("2dad"),n=a.n(i);n.a},"2dad":function(t,e,a){},3356:function(t,e,a){},"555a":function(t,e,a){t.exports=a.p+"img/icon.3c9ddacd.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"logo",on:{click:t.toHome}},[i("img",{attrs:{src:a("555a")}}),i("h3",[t._v("DSEXIG")])]),i("router-view"),i("div",{staticClass:"version"},[t._v(t._s(t.version))])],1)},s=[],o=(a("b0c0"),{data:function(){return{version:"v. 0.0.4"}},mounted:function(){},methods:{toHome:function(){"land"!=this.$route.name&&this.$router.push("/")}}}),r=o,c=(a("5c0b"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,null,null),h=l.exports,u=a("ecee"),d=a("c074"),m=a("ad3d"),p=(a("d3b7"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Home"}},[a("LittleAlert",{ref:"LittleAlert"}),a("transition",{attrs:{name:"fade"}},[t.isDialogOpen?a("div",{staticClass:"bgCover"}):t._e()]),a("div",{staticClass:"Wrapper"},[a("transition",{attrs:{name:"openDialog"}},[t.isDialogOpen?a("Dialog",{attrs:{message:t.dialogMessage,password:t.password,webUrl:t.webUrl,imageData:t.$refs.myCanvas.returnCanvas()},on:{closeDialog:t.openDialog}}):t._e()],1),a("Blur",{ref:"myCanvas",attrs:{thumbnail:t.thumbnail}}),a("div",{staticClass:"btngroup"},[a("file-upload",{ref:"upload",staticClass:"btn",attrs:{accept:"image/png,image/gif,image/jpeg,image/webp",data:{duration:"access_token"}},on:{"input-filter":t.inputFilter,"input-file":t.inputFile},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[t._v("選擇檔案")]),a("div",{staticClass:"btn",class:{unUploadIcon:!t.canUpload},on:{click:t.upload}},[t._v("上傳 "),a("font-awesome-icon",{class:{unUploadIcon:!t.canUpload},attrs:{icon:"arrow-up"}})],1)],1),a("div",{staticClass:"uploadOptions"},[a("div",{staticClass:"timeOptions"},[a("div",{staticClass:"timeOptionTitle",on:{click:t.test}},[t._v("圖片時效")]),a("div",{staticClass:"inputForm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],staticClass:"in",attrs:{type:"number",placeholder:"分鐘 空白表示一天",value:"duration"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=e.target.value)}}})])]),a("div",{staticClass:"timeOptions"},[t._m(0),a("div",{staticClass:"inputForm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"in",attrs:{placeholder:"空白表示不設置密碼"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])])],1)],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeOptionTitle"},[a("span",[t._v("密碼")])])}],f=(a("fb6a"),a("a9e3"),a("8019")),w=a.n(f),C=a("bc3a"),b=a.n(C),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blur"}},[a("div",{staticClass:"canvass"},[a("canvas",{ref:"myCanvas",attrs:{id:"mycanvas",width:t.canvasWidth,height:t.canvasHeight},on:{mousedown:t.handleMouseDown,mousemove:function(e){return t.handleMouseMove(!1,e)},mouseup:t.handleMouseUp,mouseout:t.handleMouseOut,touchstart:t.handleMouseDown,touchend:t.handleMouseUp,touchmove:function(e){return t.handleMouseMove(!0,e)}}}),a("canvas",{ref:"tempCanvas",attrs:{id:"tempCanvas",width:t.canvasWidth,height:t.canvasHeight}}),a("canvas",{ref:"tempCanvasOrign",attrs:{id:"tempCanvas2",width:t.canvasWidth,height:t.canvasHeight}}),t.isRotateable?t._e():a("div",{staticClass:"cover",style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px"}},[t._v(t._s(t.message))])]),a("div",{staticClass:"tips"},[t.thumbnail?a("div",{staticClass:"tip clean",on:{click:t.cleanCtx}},[a("font-awesome-icon",{attrs:{icon:"times",color:"white"}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("清除效果")])],1):t._e(),t.thumbnail?a("div",{staticClass:"tip rotate",on:{click:function(e){return t.rotateCtx(90)}}},[a("font-awesome-icon",{attrs:{icon:"undo",color:"white"}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("旋轉")])],1):t._e()]),t.thumbnail?a("div",{staticClass:"mode"},[a("div",{staticClass:"tip",class:{unUploadIcon:!t.isblurMode},on:{click:function(e){return t.changeBlurMode(!0)}}},[t._v("模糊背景")]),a("div",{staticClass:"tip",class:{unUploadIcon:t.isblurMode},on:{click:function(e){return t.changeBlurMode(!1)}}},[t._v("刮刮樂")])]):t._e()])},y=[],O=(a("cb29"),a("e25e"),a("59b8")),_=a.n(O),M={name:"Blur",props:{thumbnail:String},mounted:function(){this.init(),this.registListener()},data:function(){return{canvasWidth:640,canvasHeight:640,isDown:!1,tempCtx:null,ctx:null,tempCanvas:null,tempCanvasOrign:null,tempCanvasOrignCtx:null,canvas:null,PI2:2*Math.PI,img:null,adjust:[],resizeTime:null,isblurMode:!0,degrees:0,isRotateable:!0,message:"",cropConfig:{}}},computed:{canvasOffset:function(){return this.canvas.getBoundingClientRect()},offsetX:function(){return this.canvasOffset.left},offsetY:function(){return this.canvasOffset.top},scrollX:function(){return this.canvas.scrollLeft()},scrollY:function(){return this.canvas.scrollTop()}},methods:{rotateCtx:function(t){if(this.isRotateable){this.tempCanvasOrignCtx.clearRect(0,0,this.tempCanvasOrign.width,this.tempCanvasOrign.height),this.degrees=this.degrees+t,this.isRotateable=!1,this.message="旋轉中",this.message="",this.isRotateable=!0;var e="";this.handleMouseUp(e,!0)}},changeBlurMode:function(t){this.isblurMode!=t&&(this.isblurMode=!this.isblurMode)},registListener:function(){var t=this;window.document.addEventListener("mouseup",t.handleMouseUp)},removeListener:function(){var t=this;window.document.removeEventListener("mouseup",t.handleMouseUp,!1)},cropCanvas:function(t,e){var a=t.getContext("2d"),i=a.getImageData(e.offset.x,e.offset.y,e.width,e.height),n=document.createElement("canvas");n.width=e.width,n.height=e.height;var s=n.getContext("2d");return s.putImageData(i,0,0),n},returnCanvas:function(){var t=document.getElementById("mycanvas");return this.cropCanvas(t,this.cropConfig).toDataURL()},init:function(){this.tempCanvas=this.$refs.tempCanvas,this.tempCtx=this.tempCanvas.getContext("2d"),this.tempCanvasOrign=this.$refs.tempCanvasOrign,this.tempCanvasOrignCtx=this.tempCanvasOrign.getContext("2d"),this.canvas=this.$refs.myCanvas,this.ctx=this.canvas.getContext("2d"),this.img=new Image,this.img.crossOrigin="anonymous",this.img.onload=this.start,this.img.src=this.thumbnail},start:function(){var t=Math.min(this.canvas.width/this.img.width,this.canvas.height/this.img.height),e=this.canvas.width/2-this.img.width/2*t,a=this.canvas.height/2-this.img.height/2*t;this.adjust.push(e,a,t),this.cropConfig={width:this.img.width*t,height:this.img.height*t,offset:{x:e,y:a}},this.drawAdjustImage(this.ctx,this.img)},drawAdjustImage:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(a){if(t.translate(this.canvas.width/2,this.canvas.height/2),t.rotate(this.degrees*Math.PI/180),this.img.width>this.img.height&&this.degrees%360==90||this.img.width>this.img.height&&this.degrees%360==270)var i=Math.min(this.canvas.width/this.img.height,this.canvas.height/this.img.width);else i=Math.min(this.canvas.width/this.img.width,this.canvas.height/this.img.height);this.adjust[2]=i,t.drawImage(e,-this.img.width*i/2,-this.img.height*i/2,this.img.width*i,this.img.height*i)}else console.log("normal"),t.drawImage(e,this.adjust[0],this.adjust[1],this.img.width*this.adjust[2],this.img.height*this.adjust[2])},_clearTempCtx:function(){this.tempCtx.clearRect(0,0,this.tempCanvas.width,this.tempCanvas.height)},handleMouseDown:function(t){t.preventDefault(),t.stopPropagation(),this.isDown=!0},handleMouseUp:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("from",e),t&&(t.preventDefault(),t.stopPropagation()),this.isDown=!1,this._clearTempCtx(),this.tempCtx.drawImage(this.tempCanvasOrign,0,0,this.canvas.width,this.canvas.height),this.tempCtx.save(),this.tempCtx.globalCompositeOperation="source-in",this.drawAdjustImage(this.tempCtx,this.img,!0),this.tempCtx.restore();var a=this;this.isblurMode&&_.a.boxBlurCanvasRGBA("tempCanvas",0,0,a.tempCanvas.width,a.tempCanvas.height,10,1),this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.tempCanvas,0,0,this.canvas.width,this.canvas.height),this.ctx.globalCompositeOperation="destination-over",(this.isblurMode||e)&&this.drawAdjustImage(this.ctx,this.img,!0),this.ctx.restore()},handleMouseOut:function(t){t.preventDefault(),t.stopPropagation(),this.isDown=!1},handleMouseMove:function(t,e){if(this.isDown&&""!=this.thumbnail){if(t)var a=e.touches[0].clientX,i=e.touches[0].clientY;else a=e.clientX,i=e.clientY;e.preventDefault(),e.stopPropagation();var n=parseInt(a-this.getScroll()[0]-this.offsetX)*(640/document.getElementsByTagName("canvas")[0].offsetWidth),s=parseInt(i+this.getScroll()[1]-this.offsetY)*(640/document.getElementsByTagName("canvas")[0].offsetHeight);console.log(a,this.getScroll()[0],this.offsetX),console.log(n),this.ctx.fillStyle="rgba(107, 62, 255, 0.3)",this.ctx.beginPath(),this.ctx.arc(n,s,20,0,this.PI2),this.ctx.closePath(),this.ctx.fill(),this.tempCtx.beginPath(),this.tempCtx.arc(n,s,20,0,this.PI2),this.tempCtx.closePath(),this.tempCtx.fill(),this.tempCanvasOrignCtx.beginPath(),this.tempCanvasOrignCtx.arc(n,s,20,0,this.PI2),this.tempCanvasOrignCtx.closePath(),this.tempCanvasOrignCtx.fill()}},getScroll:function(){var t,e;return"undefined"!=typeof window.pageYOffset?(t=window.pageYOffset,e=window.pageXOffset):"undefined"!=typeof document.compatMode&&"BackCompat"!=document.compatMode?(t=document.documentElement.scrollTop,e=document.documentElement.scrollLeft):"undefined"!=typeof document.body&&(t=document.body.scrollTop,e=document.body.scrollLeft),[e,t]},cleanCtx:function(){this.adjust=[],this.degrees=0,this.tempCtx.clearRect(0,0,this.tempCanvas.width,this.tempCanvas.height),this.ctx.clearRect(0,0,this.tempCanvas.width,this.tempCanvas.height),this.tempCanvasOrignCtx.clearRect(0,0,this.tempCanvas.width,this.tempCanvas.height),this.init()}},destroyed:function(){this.removeListener()},watch:{thumbnail:function(t,e){this.cleanCtx()}}},D=M,I=(a("c533"),Object(c["a"])(D,x,y,!1,null,"09750c42",null)),E=I.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Dialog"}},[a("LittleAlert",{ref:"LittleAlert"}),a("div",{staticClass:"dialogWrapper"},[a("div",{staticClass:"fun"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imageData}})]),a("div",{staticClass:"uploadOptions"},[a("div",{staticClass:"timeOptions"},[a("div",{staticClass:"timeOptionTitle"},[t._v("分享")]),a("div",{staticClass:"inputForm"},[a("input",{attrs:{type:"text",readonly:""},domProps:{value:t.webUrl},on:{click:function(e){return t.select(e,"網址")}}})])]),a("div",{staticClass:"timeOptions"},[a("div",{staticClass:"timeOptionTitle"},[t._v("密碼")]),a("div",{staticClass:"inputForm"},[a("input",{attrs:{type:"text",readonly:""},domProps:{value:t.password},on:{click:function(e){return t.select(e,"密碼")}}})])])])]),a("div",{staticClass:"close",on:{click:t.closeDialog}},[a("hr"),a("span",[t._v(" 關閉")]),a("font-awesome-icon",{staticClass:"closebtn",attrs:{icon:"times",color:"black"}})],1)])],1)},P=[],T=a("dc46"),U={components:{LittleAlert:T["a"]},props:{message:String,webUrl:String,imageData:String,password:String},data:function(){return{}},mounted:function(){},methods:{closeDialog:function(t){t.stopPropagation(),this.$emit("closeDialog")},select:function(t,e){t.target.select(),t.target.select(),t.target.setSelectionRange(0,99999),document.execCommand("copy"),""!=t.target.value&&this.$refs.LittleAlert.showLittleAlert(e+"已複製",document.documentElement.scrollTop)}}},j=U,A=(a("6fb4"),Object(c["a"])(j,L,P,!1,null,"597a2086",null)),k=A.exports,S={name:"app",components:{FileUpload:w.a,Blur:E,Dialog:k,LittleAlert:T["a"]},data:function(){return{file:[],canUpload:!1,thumbnail:"",password:"",duration:Number,dialogMessage:"",isDialogOpen:!1,webUrl:"",keyCode:"a"}},mounted:function(){console.log("s");var t=this;window.document.addEventListener("keyup",(function(e){t.keyCode=e.keyCode||e.which;var a=document.querySelector('meta[name="viewport"]');a&&(console.log(a),a.content="initial-scale=1",a.content="width=device-width"),console.log(t.keyCode)}))},computed:{},beforeRouteLeave:function(t,e,a){var i;window.document.removeEventListener("mouseup",i),a()},methods:{openDialog:function(){this.isDialogOpen=!this.isDialogOpen},test:function(){var t=document.querySelector('meta[name="viewport"]');t&&(console.log(t),t.content="initial-scale=1",t.content="width=device-width")},validateForm:function(){return this.duration<0?(this.$refs.LittleAlert.showLittleAlert("時間請 > 0",this.$refs.myCanvas.getScroll()[1]),!1):!(this.duration>1e4)||(this.$refs.LittleAlert.showLittleAlert("數字不要 > 一萬",this.$refs.myCanvas.getScroll()[1]),!1)},upload:function(){if(this.canUpload&&this.validateForm()){this.canUpload=!1;var t=this,e="https://imagewall.ahkui.com/api/v1/photo";b.a.post(e,{duration:this.duration,password:this.password,photo:t.$refs.myCanvas.returnCanvas()}).then((function(e){t.canUpload=!0,t.isDialogOpen=!0;var a=window.location.href;t.webUrl=a.slice(0,-4)+"photo/"+e.data.photo._id})).catch((function(e){t.canUpload=!0,this.$refs.LittleAlert.showLittleAlert("上傳失敗",this.$refs.myCanvas.getScroll()[1]),console.log(e)}))}},inputFilter:function(t,e,a){if(t&&!e){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(t.name))return a();if(/\.(php5?|html?|jsx?)$/i.test(t.name))return a()}},inputFile:function(t,e){t&&!e&&(this.drawThumbNail(t),this.canUpload=!0),t&&e&&(this.canUpload=!0),!t&&e&&(this.canUpload=!1)},drawCanvas:function(t){var e=this.$refs.myCanvas,a=e.getContext("2d"),i=new Image;i.onload=function(){var t=e.width/i.width,n=e.height/i.height,s=Math.min(t,n),o=(e.width-i.width*s)/2,r=(e.height-i.height*s)/2;a.clearRect(0,0,e.width,e.height),a.drawImage(i,0,0,i.width,i.height,o,r,i.width*s,i.height*s)},i.src=t},drawThumbNail:function(t){var e=this,a=new FileReader;a.onload=function(t){e.thumbnail=t.target.result},a.readAsDataURL(t.file)}}},B=S,$=(a("21bb"),Object(c["a"])(B,g,v,!1,null,null,null)),R=$.exports;i["a"].use(p["a"]);var N=[{path:"/edit",name:"edit",component:R},{path:"/",name:"land",component:function(){return a.e("about").then(a.bind(null,"d115"))}},{path:"/photo/:id",name:"photo",component:function(){return a.e("about").then(a.bind(null,"6ec5"))}}],F=new p["a"]({routes:N}),H=F,W=a("2f62");i["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});u["c"].add(d["f"],d["a"],d["c"],d["d"],d["e"],d["b"]),i["a"].component("font-awesome-icon",m["a"]),i["a"].config.productionTip=!1,new i["a"]({router:H,store:X,render:function(t){return t(h)}}).$mount("#app")},"59b8":function(t,e){var a=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],i=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function n(t,e,a,i,n){var r=document.getElementById(t),c=r.naturalWidth,l=r.naturalHeight,h=document.getElementById(e);h.style.width=c+"px",h.style.height=l+"px",h.width=c,h.height=l;var u=h.getContext("2d");u.clearRect(0,0,c,l),u.drawImage(r,0,0),isNaN(a)||a<1||(i?s(e,0,0,c,l,a,n):o(e,0,0,c,l,a,n))}function s(t,e,n,s,o,r,c){if(!(isNaN(r)||r<1)){r|=0,isNaN(c)&&(c=1),c|=0,c>3&&(c=3),c<1&&(c=1);var l,h=document.getElementById(t),u=h.getContext("2d");try{try{l=u.getImageData(e,n,s,o)}catch($){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),l=u.getImageData(e,n,s,o)}catch($){throw alert("Cannot access local image"),new Error("unable to access local image data: "+$)}}}catch($){throw alert("Cannot access image"),new Error("unable to access image data: "+$)}var d,m,p,g,v,f,w,C,b,x,y,O,_,M,D=l.data,I=s-1,E=o-1,L=r+1,P=a[r],T=i[r],U=[],j=[],A=[],k=[],S=[],B=[];while(c-- >0){for(_=O=0,f=0;f<o;f++){for(d=D[_]*L,m=D[_+1]*L,p=D[_+2]*L,g=D[_+3]*L,w=1;w<=r;w++)C=_+((w>I?I:w)<<2),d+=D[C++],m+=D[C++],p+=D[C++],g+=D[C];for(v=0;v<s;v++)U[O]=d,j[O]=m,A[O]=p,k[O]=g,0==f&&(S[v]=((C=v+L)<I?C:I)<<2,B[v]=(C=v-r)>0?C<<2:0),b=_+S[v],x=_+B[v],d+=D[b++]-D[x++],m+=D[b++]-D[x++],p+=D[b++]-D[x++],g+=D[b]-D[x],O++;_+=s<<2}for(v=0;v<s;v++){for(y=v,d=U[y]*L,m=j[y]*L,p=A[y]*L,g=k[y]*L,w=1;w<=r;w++)y+=w>E?0:s,d+=U[y],m+=j[y],p+=A[y],g+=k[y];for(O=v<<2,f=0;f<o;f++)D[O+3]=M=g*P>>>T,M>0?(M=255/M,D[O]=(d*P>>>T)*M,D[O+1]=(m*P>>>T)*M,D[O+2]=(p*P>>>T)*M):D[O]=D[O+1]=D[O+2]=0,0==v&&(S[f]=((C=f+L)<E?C:E)*s,B[f]=(C=f-r)>0?C*s:0),b=v+S[f],x=v+B[f],d+=U[b]-U[x],m+=j[b]-j[x],p+=A[b]-A[x],g+=k[b]-k[x],O+=s<<2}}u.putImageData(l,e,n)}}function o(t,e,n,s,o,r,c){if(!(isNaN(r)||r<1)){r|=0,isNaN(c)&&(c=1),c|=0,c>3&&(c=3),c<1&&(c=1);var l,h=document.getElementById(t),u=h.getContext("2d");try{try{l=u.getImageData(e,n,s,o)}catch(k){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),l=u.getImageData(e,n,s,o)}catch(k){throw alert("Cannot access local image"),new Error("unable to access local image data: "+k)}}}catch(k){throw alert("Cannot access image"),new Error("unable to access image data: "+k)}var d,m,p,g,v,f,w,C,b,x,y,O,_=l.data,M=s-1,D=o-1,I=r+1,E=[],L=[],P=[],T=a[r],U=i[r],j=[],A=[];while(c-- >0){for(O=y=0,v=0;v<o;v++){for(d=_[O]*I,m=_[O+1]*I,p=_[O+2]*I,f=1;f<=r;f++)w=O+((f>M?M:f)<<2),d+=_[w++],m+=_[w++],p+=_[w++];for(g=0;g<s;g++)E[y]=d,L[y]=m,P[y]=p,0==v&&(j[g]=((w=g+I)<M?w:M)<<2,A[g]=(w=g-r)>0?w<<2:0),C=O+j[g],b=O+A[g],d+=_[C++]-_[b++],m+=_[C++]-_[b++],p+=_[C++]-_[b++],y++;O+=s<<2}for(g=0;g<s;g++){for(x=g,d=E[x]*I,m=L[x]*I,p=P[x]*I,f=1;f<=r;f++)x+=f>D?0:s,d+=E[x],m+=L[x],p+=P[x];for(y=g<<2,v=0;v<o;v++)_[y]=d*T>>>U,_[y+1]=m*T>>>U,_[y+2]=p*T>>>U,0==g&&(j[v]=((w=v+I)<D?w:D)*s,A[v]=(w=v-r)>0?w*s:0),C=g+j[v],b=g+A[v],d+=E[C]-E[b],m+=L[C]-L[b],p+=P[C]-P[b],y+=s<<2}}u.putImageData(l,e,n)}}t.exports.boxBlurImage=n,t.exports.boxBlurCanvasRGBA=s},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"6fb4":function(t,e,a){"use strict";var i=a("3356"),n=a.n(i);n.a},"9c0c":function(t,e,a){},c533:function(t,e,a){"use strict";var i=a("cce1"),n=a.n(i);n.a},cce1:function(t,e,a){},dc46:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.showTips?a("div",{staticClass:"LittleAlertCover",style:{top:this.top+75+"px"}},[t.showTips?a("div",{staticClass:"littleAlert"},[a("font-awesome-icon",{attrs:{icon:"grin-hearts",color:"white"}}),a("span",[t._v(" "+t._s(t.tipMessage))])],1):t._e()]):t._e()])},n=[],s={data:function(){return{showTips:!1,tipMessage:"",top:0}},methods:{showLittleAlert:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.tipMessage=t,this.showTips=!this.showTips,this.top=e;var a=this;1==a.showTips&&window.setTimeout((function(){return a.showTips=!1}),2e3),console.log("childMethods")}}},o=s,r=(a("1d8d"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},e157:function(t,e,a){}});
//# sourceMappingURL=app.2d1358f1.js.map