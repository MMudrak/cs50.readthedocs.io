/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("jsonp",function(e,t){function r(){this._init.apply(this,arguments)}var n=e.Lang.isFunction;r.prototype={_init:function(t,r){this.url=t,this._requests={},this._timeouts={},r=n(r)?{on:{success:r}}:r||{};var i=r.on||{};i.success||(i.success=this._defaultCallback(t,r)),this._config=e.merge({context:this,args:[],format:this._format,allowCache:!1},r,{on:i})},_defaultCallback:function(){},send:function(){function u(e,r){return n(e)?function(n){var o=!0,u="_requests";r?(++t._timeouts[s],--t._requests[s]):(t._requests[s]||(o=!1,u="_timeouts"),--t[u][s]),!t._requests[s]&&!t._timeouts[s]&&delete YUI.Env.JSONP[s],o&&e.apply(i.context,[n].concat(i.args))}:null}var t=this,r=e.Array(arguments,0,!0),i=t._config,s=t._proxy||e.guid(),o;return i.allowCache&&(t._proxy=s),t._requests[s]===undefined&&(t._requests[s]=0),t._timeouts[s]===undefined&&(t._timeouts[s]=0),t._requests[s]++,r.unshift(t.url,"YUI.Env.JSONP."+s),o=i.format.apply(t,r),i.on.success?(YUI.Env.JSONP[s]=u(i.on.success),e.Get.js(o,{onFailure:u(i.on.failure),onTimeout:u(i.on.timeout,!0),timeout:i.timeout,charset:i.charset,attributes:i.attributes,async:i.async}).execute(),t):t},_format:function(e,t){return e.replace(/\{callback\}/,t)}},e.JSONPRequest=r,e.jsonp=function(t,n){var r=new e.JSONPRequest(t,n);return r.send.apply(r,e.Array(arguments,2,!0))},YUI.Env.JSONP||(YUI.Env.JSONP={})},"3.10.0",{requires:["get","oop"]});
