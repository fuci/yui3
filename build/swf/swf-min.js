YUI.add("swf",function(b){var m=b.Event,g=b.SWFDetect,i=b.Lang,h=b.UA,j=b.Node,n=b.Escape,f="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",e="application/x-shockwave-flash",d="10.0.22",a="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+Math.random(),c="SWF.eventHandler",k={align:"",allowFullScreen:"",allowNetworking:"",allowScriptAccess:"",base:"",bgcolor:"",menu:"",name:"",quality:"",salign:"",scale:"",tabindex:"",wmode:""};function l(s,p,E){this._id=b.guid("yuiswf");var t=this._id;var y=j.one(s);var E=E||{};var H=E.version||d;var B=(H+"").split(".");var u=g.isFlashVersionAtLeast(parseInt(B[0],10),parseInt(B[1],10),parseInt(B[2],10));var A=(g.isFlashVersionAtLeast(8,0,0));var r=A&&!u&&E.useExpressInstall;var q=(r)?a:p;var G="<object ";var v,D;var F="yId="+b.id+"&YUISwfId="+t+"&YUIBridgeCallback="+c+"&allowedDomain="+document.location.hostname;b.SWF._instances[t]=this;if(y&&(u||r)&&q){G+='id="'+t+'" ';if(h.ie){G+='classid="'+f+'" ';}else{G+='type="'+e+'" data="'+n.html(q)+'" ';}v="100%";D="100%";G+='width="'+v+'" height="'+D+'">';if(h.ie){G+='<param name="movie" value="'+n.html(q)+'"/>';}for(var x in E.fixedAttributes){if(k.hasOwnProperty(x)){G+='<param name="'+n.html(x)+'" value="'+n.html(E.fixedAttributes[x])+'"/>';}}for(var z in E.flashVars){var o=E.flashVars[z];if(i.isString(o)){F+="&"+n.html(z)+"="+n.html(encodeURIComponent(o));}}if(F){G+='<param name="flashVars" value="'+F+'"/>';}G+="</object>";y.set("innerHTML",G);this._swf=j.one("#"+t);}else{var C={};C.type="wrongflashversion";this.publish("wrongflashversion",{fireOnce:true});this.fire("wrongflashversion",C);}}l._instances=l._instances||{};l.eventHandler=function(o,p){l._instances[o]._eventHandler(p);};l.prototype={_eventHandler:function(o){if(o.type==="swfReady"){this.publish("swfReady",{fireOnce:true});this.fire("swfReady",o);}else{if(o.type==="log"){}else{this.fire(o.type,o);}}},callSWF:function(p,o){if(!o){o=[];}if(this._swf._node[p]){return(this._swf._node[p].apply(this._swf._node,o));}else{return null;}},toString:function(){return"SWF "+this._id;}};b.augment(l,b.EventTarget);b.SWF=l;},"@VERSION@",{requires:["event-custom","node","swfdetect","escape"]});