/**
 * jssdk 2.4
 */
(function (global, factory) {

  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("EZUIPlayer requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

  /**
   * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
   */
  !function (a, b) { function c(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function d() { var a = t.elements; return "string" == typeof a ? a.split(" ") : a } function e(a, b) { var c = t.elements; "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b) } function f(a) { var b = s[a[q]]; return b || (b = {}, r++ , a[q] = r, s[r] = b), b } function g(a, c, d) { if (c || (c = b), l) return c.createElement(a); d || (d = f(c)); var e; return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e) } function h(a, c) { if (a || (a = b), l) return a.createDocumentFragment(); c = c || f(a); for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)e.createElement(h[g]); return e } function i(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return t.shivMethods ? g(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(t, b.frag) } function j(a) { a || (a = b); var d = f(a); return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a } var k, l, m = "3.7.3", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {}; !function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function () { b.createElement("a"); var a = b.createDocumentFragment(); return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement }() } catch (c) { k = !0, l = !0 } }(); var t = { elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: m, shivCSS: n.shivCSS !== !1, supportsUnknownElements: l, shivMethods: n.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e }; a.html5 = t, j(b), "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : this, document);

  /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
  if ("document" in self) { if (!("classList" in document.createElement("_"))) { (function (j) { "use strict"; if (!("Element" in j)) { return } var a = "classList", f = "prototype", m = j.Element[f], b = Object, k = String[f].trim || function () { return this.replace(/^\s+|\s+$/g, "") }, c = Array[f].indexOf || function (q) { var p = 0, o = this.length; for (; p < o; p++) { if (p in this && this[p] === q) { return p } } return -1 }, n = function (o, p) { this.name = o; this.code = DOMException[o]; this.message = p }, g = function (p, o) { if (o === "") { throw new n("SYNTAX_ERR", "An invalid or illegal string was specified") } if (/\s/.test(o)) { throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character") } return c.call(p, o) }, d = function (s) { var r = k.call(s.getAttribute("class") || ""), q = r ? r.split(/\s+/) : [], p = 0, o = q.length; for (; p < o; p++) { this.push(q[p]) } this._updateClassName = function () { s.setAttribute("class", this.toString()) } }, e = d[f] = [], i = function () { return new d(this) }; n[f] = Error[f]; e.item = function (o) { return this[o] || null }; e.contains = function (o) { o += ""; return g(this, o) !== -1 }; e.add = function () { var s = arguments, r = 0, p = s.length, q, o = false; do { q = s[r] + ""; if (g(this, q) === -1) { this.push(q); o = true } } while (++r < p); if (o) { this._updateClassName() } }; e.remove = function () { var t = arguments, s = 0, p = t.length, r, o = false, q; do { r = t[s] + ""; q = g(this, r); while (q !== -1) { this.splice(q, 1); o = true; q = g(this, r) } } while (++s < p); if (o) { this._updateClassName() } }; e.toggle = function (p, q) { p += ""; var o = this.contains(p), r = o ? q !== true && "remove" : q !== false && "add"; if (r) { this[r](p) } if (q === true || q === false) { return q } else { return !o } }; e.toString = function () { return this.join(" ") }; if (b.defineProperty) { var l = { get: i, enumerable: true, configurable: true }; try { b.defineProperty(m, a, l) } catch (h) { if (h.number === -2146823252) { l.enumerable = false; b.defineProperty(m, a, l) } } } else { if (b[f].__defineGetter__) { m.__defineGetter__(a, i) } } }(self)) } else { (function () { var b = document.createElement("_"); b.classList.add("c1", "c2"); if (!b.classList.contains("c2")) { var c = function (e) { var d = DOMTokenList.prototype[e]; DOMTokenList.prototype[e] = function (h) { var g, f = arguments.length; for (g = 0; g < f; g++) { h = arguments[g]; d.call(this, h) } } }; c("add"); c("remove") } b.classList.toggle("c3", false); if (b.classList.contains("c3")) { var a = DOMTokenList.prototype.toggle; DOMTokenList.prototype.toggle = function (d, e) { if (1 in arguments && !this.contains(d) === !e) { return e } else { return a.call(this, d) } } } b = null }()) } };


  Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //??????
      "d+": this.getDate(), //???
      "h+": this.getHours(), //??????
      "m+": this.getMinutes(), //???
      "s+": this.getSeconds(), //???
      "q+": Math.floor((this.getMonth() + 3) / 3), //??????
      "S": this.getMilliseconds() //??????
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };


  var Domain = 'https://open.ys7.com';
  var logDomain = 'https://log.ys7.com/statistics.do';

  var jqueryJS = Domain + '/sdk/js/2.0/js/jquery.min.js';
  var ckplayerJS = Domain + '/sdk/js/2.0/js/ckplayer/ckplayer.js';
  var ckplayerSWF = Domain + '/sdk/js/2.0/js/ckplayer/ckplayer.swf';
  var m3u8SWF = Domain + '/sdk/js/2.0/js/ckplayer/m3u8.swf';
  var flv_js = Domain + '/sdk/js/2.0/js/flv.min.js';
  var hlsJS = Domain + '/sdk/js/2.0/js/hls.min.js';
  var mpegJS = Domain + '/sdk/js/2.0/js/jsmpeg.min.js';
  var wav = Domain + '/sdk/js/2.0/js/wav-audio-encoder.js';


  // ?????????????????????https??????
  var isHttps = window.location.protocol === 'https:' ? true : false;
  // ??????????????????
  var isMobile = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios|SymbianOS)/i);
  var testVideo = document.createElement('video');
  // ????????????video?????????addEventListener???????????????????????????ie8???
  var isModernBrowser = !!testVideo.canPlayType && !!window.addEventListener;
  // ???????????????video????????????hls???????????????safari??????????????????video?????????
  var isNativeSupportHls = isModernBrowser && testVideo.canPlayType('application/vnd.apple.mpegURL');
  // ???????????????hls.js??????
  var isSupportHls = false;
  // ????????????flash
  var useFlash = false;

  // ??????????????????
  var LOCALINFO = 'open_netstream_localinfo';
  // ??????????????????
  var PLAY_MAIN = 'open_netstream_play_main';

  function dclog(obj) {
    var domain = window.location.protocol + '//' + window.location.host;
    var logObj = {
      Ver: 'v.2.3.0',
      PlatAddr: domain,
      ExterVer: 'Ez.2.3.0',
      CltType: 102,
      StartTime: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),  // ?????????????????????????????????
      OS: navigator.platform
    }
    for (var i in obj) {
      logObj[i] = obj[i];
    }

    var tempArray = [];
    for (var j in logObj) {
      tempArray.push(j + '=' + logObj[j]);
    }
    var params = '?' + tempArray.join('&');
    // ??????????????????????????????
    var img = new Image();
    img.src = logDomain + params;
  }

  // ????????????????????????
  dclog({
    systemName: LOCALINFO
  });

  var RTMP_REG = /^rtmp/;
  var HLS_REG = /\.m3u8/;

  // ??????????????????
  function getStyle(el) {
    return window.getComputedStyle
      ? window.getComputedStyle(el, null)
      : el.currentStyle;
  }

  // ??????js
  function addJs(filepath, callback) {
    var oJs = document.createElement("script");
    oJs.setAttribute("src", filepath);
    oJs.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(oJs);
  }
  // ??????????????????
  function request(url, method, params, header, success, error) {
    var _url = url;
    var http_request = new XMLHttpRequest();
    http_request.onreadystatechange = function () {
      if (http_request.readyState == 4) {
        if (http_request.status == 200) {
          var _data = JSON.parse(http_request.responseText);
          success(_data);
        }
      }
    };
    http_request.open(method, _url, true);
    // http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = new FormData();
    for (i in params) {
      data.append(i, params[i]);
    }
    http_request.send(data);
  };
  //??????url??????
  function getQueryString(name, url) {
    var r = new RegExp("(\\?|#|&)" + name + "=(.*?)(#|&|$)");
    var m = (url || location.href).match(r);
    return decodeURIComponent(m ? m[2] : '');
  }
  /**???????????????promise?????? */
  function isPromise(obj) { return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'; }


  var EZUIPlayer = function (playParams) {
    if (!isModernBrowser) {
      throw new Error('?????????ie8?????????????????????');
      return;
    }
    /**????????????????????? */
    this.opt = {};
    this.opt.sources = [];
    this.handlers = {};

    // ?????? - ??????JS Decoder ???????????????????????????
    if (typeof playParams === 'object' && playParams.decoderPath) {
      /* ???????????????????????????????????? */
      // ???????????????
      if (typeof playParams.decoderPath !== 'string' || typeof playParams.decoderPath === 'undefined') {
        throw new Error('EZUIDecoder requires the path of decoder');
        return;
      }
      // Id
      if (typeof playParams.id !== 'string' || typeof playParams.id === 'undefined') {
        throw new Error('EZUIDecoder requires parameter id');
        return;
      }
      if (typeof playParams.url !== 'string' || typeof playParams.url === 'undefined') {
        throw new Error('EZUIDecoder requires parameter url');
        return;
      }
      // ?????????????????????????????? opt ?????????
      this.opt.sources.push(playParams.url);
      // JSDecoder  ????????????????????????
      this.opt.currentSource = this.opt.sources[0];

      /* ?????????????????????????????? - ?????? */
      /** 
       * ??????????????????
       * ?????????dev????????????API????????????
       */
      var domain = "https://open.ys7.com";
      if (playParams.env) {
        var environmentParams = playParams.env;
        domain = environmentParams.domain;
      }

      /** ??????jSPlugin ?????? */
      this.jSPlugin = {};
      var _this = this;
      /** ?????????????????????????????????????????? */
      var getRealUrl = this.getRealUrl(playParams);
      /**?????????????????? */
      if (isPromise(getRealUrl)) {
        getRealUrl.then(function () {
          var initDecoder = _this.initDecoder(playParams);
          if (isPromise(initDecoder) && (playParams.autoplay !== false)) {
            initDecoder.then(function () {
              _this.play({ handleError: playParams.handleError });
            })
          }
        })
        .catch(function(err){
          var initDecoder = _this.initDecoder(playParams);
          if (isPromise(initDecoder) && (playParams.autoplay !== false)) {
            initDecoder.then(function () {
             // _this.play({ handleError: playParams.handleError });
            })
          }
        });
      }
    } else {
      var elementID = '';
      if (typeof playParams === 'string') {         //???????????? new EZUIPlayer('myplayer')
        elementID = playParams;
      } else if (typeof playParams === 'object') {  //???????????? new EZUIPlayer({id: 'myplayer'})
        elementID = playParams.id;
      }
      this.videoId = elementID;
      this.video = document.getElementById(elementID);
      if (!this.video) {
        throw new Error('EZUIPlayer requires parameter videoId');
      }
      var sources = this.video.getElementsByTagName('source');
      // ???????????????????????????removeChild??????
      sources = Array.prototype.slice.call(sources, 0);

      if (this.video.src) {
        // ???????????????rtmp??????
        if (isMobile && RTMP_REG.test(this.video.src)) {
          this.video.removeAttribute('src');
          this.video.load();
        } else {
          this.opt.sources.push(this.video.src);
        }
      }

      var l = sources.length;
      if (l > 0) {
        for (var i = 0; i < l; i++) {
          // ???????????????rtmp??????
          if (isMobile && RTMP_REG.test(sources[i].src)) {
            this.video.removeChild(sources[i]);
          } else {
            this.opt.sources.push(sources[i].src);
          }
        }
      }
      if (this.opt.sources.length < 1) {
        throw new Error('no source found in video tag.');
      }
      this.opt.cur = 0;
      this.opt.poster = this.video.poster;
      var videoStyle = getStyle(this.video);
      var width = this.video.width;
      var height = this.video.height;
      if (width) {
        this.opt.width = width;
        if (height) {
          this.opt.height = height;
        } else {
          this.opt.height = 'auto';
        }
        this.log('video width:' + this.opt.width + ' height:' + this.opt.height);
      } else {
        this.opt.width = videoStyle.width;
        this.opt.height = videoStyle.height;
        this.log('videoStyle.width:' + videoStyle.width + ' wideoStyle.height:' + videoStyle.height);
      }
      this.opt.parentId = elementID;
      this.opt.autoplay = this.video.autoplay ? true : false;
      this.log('autoplay:' + this.video.autoplay);

      this.opt.currentSource = this.opt.sources[this.opt.cur];
      this.getRealUrl(playParams);
    }

    /* ??????????????????????????????????????????????????????????????? */
    this.handlers = {};
    this.initTime = (new Date()).getTime();

    this.on('play', function () {
      // ????????????????????????
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        Time: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),
        Enc: 0,  // 0 ????????? 1 ??????
        PlTp: 1,  // 1 ?????? 2 ??????
        Via: 2,  // 2 ???????????????
        ErrCd: 0,
        Cost: (new Date()).getTime() - this.initTime  // ?????????
      });
    });
    this.retry = 2;
    this.on('error', function () {
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        cost: -1,
        ErrCd: -1
      });
    });
  };

  // ????????????
  EZUIPlayer.prototype.on = function (eventName, callback) {
    if (typeof eventName !== 'string' || typeof callback !== 'function') {
      return;
    }
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  };

  // ????????????
  EZUIPlayer.prototype.emit = function () {
    if (this.handlers[arguments[0]] instanceof Array) {
      var handlers = this.handlers[arguments[0]];
      var l = handlers.length;
      for (var i = 0; i < l; i++) {
        handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };

  EZUIPlayer.prototype.getRealUrl = function (playParams) {
    var _this = this;
    var apiDomain = 'https://open.ys7.com';
    if (playParams && playParams.env) {
      apiDomain = playParams.env.domain;
    }
    /** jsDecoder ?????????????????? -- ?????? */
    if (playParams && playParams.decoderPath) {
      var getRealUrlPromise = function (resolve, reject, ezopenURL) {
        var realUrl = '';
        if (!/^ezopen:\/\//.test(ezopenURL)) { // JSDecoder ws????????????
          resolve(ezopenURL);
        } else {
          var nodeUrl = apiDomain + "/jssdk/ezopen/getStreamToken?accessToken=" + playParams.accessToken + '&num=10&type=' + (playParams.url.indexOf('live') !== -1 ? 'live' : 'playback');
          var nodeSuccess = function (data) {
            if (data.retcode === 0) {
              realUrl = realUrl + data.data.params + '&ssn=' + data.data.tokens[0];
              // _this.opt.currentSource = realUrl;
              resolve(realUrl);
            } else {
              resolve('get realURL error')
              throw new Error('????????????token??????');
            }
          }
          var nodeError = function (error) {
            console.log("getdecoder url from api error", error);
            throw new Error('????????????token??????');
          }
          // ???API??????????????????
          var apiUrl = apiDomain + "/api/lapp/live/url/ezopen";
          var apiSuccess = function (data) {
            if (data.code == 200 || data.retcode == 0) {
              // ???????????????
              var validateCode = getQueryString('checkCode',data.data);
              //var validateCode = 'ZQGWMV';
              if(validateCode){
                _this.opt.validateCode = validateCode;
              }
              realUrl += data.data;
              /**??????????????????  start*/
              if (data.data.indexOf('playback') !== -1) { //??????
                // ????????????????????????
                if (!getQueryString('begin', data.data)) {
                  var defaultDate = new Date();
                  realUrl = realUrl + '&begin=' + defaultDate.Format('yyyyMMdd') + 'T000000Z';
                } else {
                  realUrl = realUrl.replace('&begin=' + getQueryString('begin', data.data), '&begin=' + formatRecTime(getQueryString('begin', data.data), '000000'))
                }
                if (!getQueryString('end', data.data)) {
                  var defaultDate = new Date();
                  realUrl = realUrl + '&end=' + defaultDate.Format('yyyyMMdd') + 'T235959Z';
                } else {
                  realUrl = realUrl.replace('&end=' + getQueryString('end', data.data), '&end=' + formatRecTime(getQueryString('end', data.data), '235959'))
                }
                // api????????????
                if (!getQueryString('stream', data.data)) {
                  realUrl = realUrl.replace('stream', '&stream');
                }
              }
              request(nodeUrl, 'GET', '', '', nodeSuccess, nodeError);
            } else {
              resolve('get realURL error')
              //throw new Error('??????????????????????????????');
            }
            /**??????????????????  end*/
          }
          var apiError = function (error) {
            console.log("getdecoder url from api error", error);
            resolve('get realURL error')
            //throw new Error('??????????????????????????????');
          }
          var isHttp = 'false';
          if (playParams && playParams.env && playParams.env.domain) {
            isHttp = playParams.env.domain.indexOf('https') !== -1 ? 'false' : 'true';
          } else {
            isHttp = window.location.href.indexOf('https') !== -1 ? 'false' : 'true';
          }
          var apiParams = {
            ezopen: ezopenURL,
            userAgent: window.navigator.userAgent,
            isFlv: false,
            addressTypes: null,
            isHttp: isHttp,
            accessToken: playParams.accessToken,
          }
          request(apiUrl, 'POST', apiParams, '', apiSuccess, apiError);
        }
      }
      var urlList = playParams.url.split(',')
      var promiseTaskList = [];
      var promiseTaskFun = (ezopenURL) => {
        return new Promise((resolve, reject) => getRealUrlPromise(resolve, reject, ezopenURL))
      };
      urlList.map(function (item, index) {
        promiseTaskList.push(promiseTaskFun(item));
      });
      var getRealUrlPromiseObj = Promise.all(promiseTaskList)
      .then(function (result) {
        _this.opt.sources = result;
        _this.opt.currentSource = result[0];
      })
      .catch(function(err){
      })
      return getRealUrlPromiseObj;
    } else {
      if (!this.opt.currentSource) {
        this.log('????????????????????????URL');
        return;
      }
      var me = this;
      // ????????????ezopen????????????????????????????????????
      if (!/^ezopen:\/\//.test(this.opt.currentSource)) {
        this.tryPlay(this.opt.currentSource);
      } else {
        // ?????????ezopen????????????????????????????????????????????????
        if (!/^ezopen:\/\//.test(this.opt.currentSource)) {
          throw new Error('EZOPEN??????????????????ezopen://??????');
          return;
        } else if (this.opt.currentSource.indexOf('.com/') === -1) {
          throw new Error('EZOPEN?????????????????????');
          return;
        } else if (!/[a-z\d]{32}(\.hd)?\.live/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN????????????uuid???????????????');
          return;
        } else if (/(.*.hls.*|.*.m3u8.*|.*.wss.*|.*.flv.*|.*.rtmp.*){2,}/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN??????????????????????????????');
          return;
        } else if (this.opt.currentSource.search(/(.hls|.m3u8|.wss|.flv|.rtmp)/) !== -1 && !/.live(.hls|.m3u8|.wss|.flv|.rtmp)/.test(this.opt.currentSource)) {
          throw new Error('??????????????????????????????');
          return;
        } else if (this.opt.currentSource.search(/(.hls|.m3u8|.wss|.flv|.rtmp)/) === -1 && !/[a-z\d]{32}(\.hd)?\.live$/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN?????????????????????');
          return;
        } else {
          /* ?????????????????? - ?????? */
          var that = this;
          addJs(flv_js, function () {
            var para = {
              "ezopen": that.opt.currentSource,
              "userAgent": window.navigator.userAgent,
              "isFlv": flvjs && flvjs.isSupported() ? flvjs.isSupported() : false,
              "addressTypes": "HLS,RTMP,WS,FLV",
              "isHttp": window.location.protocol.indexOf('s') > 0 ? false : true,
            };

            dclog({
              "ezopen": that.opt.currentSource,
              "userAgent": window.navigator.userAgent,
              "isFlv": flvjs && flvjs.isSupported() ? flvjs.isSupported() : false,
              "addressTypes": "HLS,RTMP,WS,FLV",
              "isHttp": window.location.protocol.indexOf('s') > 0 ? false : true,
              'systemName': 'EZOPEN',
            });

            that.log('---------------------------------------');
            that.log('??????(ezopen)??????   ' + para.ezopen);
            that.log('---------------------------------------');
            that.log('??????(userAgent)??????   ' + para.userAgent);
            that.log('---------------------------------------');
            that.log('??????(isFlv)??????   ' + para.isFlv);
            that.log('---------------------------------------');
            that.log('??????(addressTypes)??????   ' + para.addressTypes);
            that.log('---------------------------------------');
            that.log('??????(isHttp)??????   ' + para.isHttp);
            that.log('---------------------------------------');

            var apiUrl = apiDomain + "/api/lapp/live/url/ezopen";
            var apiSuccess = function (data) {
              if (data.code == 200) {
                that.log('??????????????????   ' + data.data);
                that.video.src = data.data;
                that.video.load();
                that.tryPlay(data.data);
              } else {
                console.log("??????????????????????????????")
                that.log('data???   ' + JSON.stringify(data));
                throw new Error(data.msg);
                return;
              }
            }
            var apiError = function (error) {
              console.log("getdecoder url from api error", error);
            }
            request(apiUrl, 'POST', para, '', apiSuccess, apiError);
          });
        } /* ?????????????????? - ?????? */
      }
    }
    // ?????????????????????
    function formatRecTime(time, defaultTime) {
      // ???????????? ???????????? => 20182626T000000Z
      // return time
      // ????????????????????????
      //????????????????????? 14 20181226000000  =??? 20181226000000
      // ???????????????12     201812260000    =??? 201812260000 + defaultTime??????2???
      // ???????????????10     2018122600      =??? 201812260000 + defaultTime??????4???
      // ???????????????8     20181226         =??? 201812260000 + defaultTime??????6???
      // ?????? 20181226000000 14???
      // ?????? TZ
      var reg = /^[0-9]{8}T[0-9]{6}Z$/;
      if (reg.test(time)) { // ???????????? ???????????? => 20182626T000000Z
        return time;
      } else if (/[0-9]{8,14}/.test(time)) {
        var start = 6 - (14 - time.length);
        var end = defaultTime.length;
        var standardTime = time + defaultTime.substring(start, end);
        return standardTime.slice(0, 8) + 'T' + standardTime.slice(8) + 'Z';
      } else {
        throw new Error('????????????????????????????????????');
      }
    }
  };

  // ????????????
  EZUIPlayer.prototype.tryPlay = function (playParams) {
    this.log("?????????????????????????????????????????????");
    this.log(playParams);
    var _this = this;
    // JSDecoder ??????
    if (playParams && typeof playParams === 'object' && playParams.decoderPath) {
      /** ?????????Decoder */
      // this.initDecoder(playParams);
      // ????????????
      // if(playParams.autoplay){
      //   console.log('?????????????????????');
      //   setTimeout(function(){
      //     _this.play();
      //   },2000)   
      // }
    } else {
      this.opt.currentSource = playParams;
      var me = this;
      // ?????????HLS??????
      if (/\.m3u8/.test(playParams)) {
        // ??????????????????????????????,??????????????????HLS?????????,????????????video????????????
        // ??????????????????hls.js?????????
        // ????????????flash
        if (isMobile || isNativeSupportHls) {
          this.log('????????????video');
          this.video.style.heght = this.opt.height = Number(this.opt.width.replace(/px$/g, '')) * 9 / 16 + 'px';
          this.initVideoEvent();
        } else {
          var isPlayUrlHttps = playParams.indexOf('https') !== -1;
          if (isHttps && !isPlayUrlHttps) { //https?????????http???????????????????????????flash??????
            addJs(ckplayerJS, function () {
              me.initCKPlayer();
            });
          } else {
            addJs(hlsJS, function () {
              isSupportHls = Hls.isSupported();
              if (isSupportHls) {
                me.log('??????hls.js');
                me.initHLS(playParams);
              } else {
                useFlash = true;
                me.log('2 ??????flash');
                addJs(ckplayerJS, function () {
                  me.initCKPlayer();
                });
              }
            });
          }
        }
      } else if (/^rtmp:/.test(playParams)) {
        if (isMobile) {
          this.opt.cur++;
          this.tryPlay(playParams);
          return;
        } else {
          addJs(ckplayerJS, function () {
            me.initCKPlayer(playParams);
          });
        }
      } else if (/^wss:|^ws:/.test(playParams)) {
        /*
        *   WS?????????JSMpeg????????????IE11???????????????
        *   ???????????????????????????IE8???????????????????????????????????????????????????IE9 ??????IE10
        *
        * */
        if (!ltIE11()) {
          addJs(mpegJS, function () {
            me.initJSmpeg(playParams);
          });
        } else {
          alert('WS???????????????Ie11??????????????????????????????IE11?????????????????????????????????');
          return;
        }
      } else if (/\.flv/.test(this.opt.currentSource)) {
        addJs(flv_js, function () {
          me.log("??????flv.js??????");
          me.initflv();
        });
      }
    }
  };

  // ?????????hls.js
  EZUIPlayer.prototype.initHLS = function (hlsURL) {
    var me = this;
    var hls = new Hls({ defaultAudioCodec: 'mp4a.40.2' }); // ???????????????????????? AAC LC ????????????
    hls.loadSource(hlsURL);
    hls.attachMedia(this.video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      if (me.opt.autoplay) {
        me.video.play();
      }
      me.initVideoEvent();
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.log("fatal network error encountered, try to recover");
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover");
            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });

    this.hls = hls;
  };

  // ??????
  EZUIPlayer.prototype.log = function (msg) {
    this.emit('log', msg);
  };

  // ?????????ckplayer
  EZUIPlayer.prototype.initCKPlayer = function (url) {
    this.log('ckplayer?????????');
    var me = this;
    var events = {
      'play': function () { me.emit('play') },
      'pause': function () { me.emit('pause') },
      'error': function () { me.emit('error') }
    };
    window.ckplayer_status = function () {
      me.log(arguments);
      events[arguments[0]] && events[arguments[0]]();
    };

    // ????????????id???div?????????????????????video??????
    this.videoFlash = document.createElement('DIV');
    this.video.parentNode.replaceChild(this.videoFlash, this.video);
    this.video = this.videoFlash;
    this.videoFlash.id = this.opt.parentId;
    var flashvars = null;
    // ??????rtmp???????????????????????????????????????????????????
    // ????????????ckplayer.js  setup?????????30??????
    // ???????????????????????????????????????????????????????????????
    if (/^rtmp/.test(this.opt.currentSource)) {
      flashvars = {
        f: this.opt.currentSource,
        c: 0,
        p: this.opt.autoplay ? 1 : 0,
        i: this.opt.poster,
        lv: 1,
        loaded: 'loadHandler'
      };
    } else if (/\.m3u8/.test(this.opt.currentSource)) {
      flashvars = {
        s: 4,  // 4-??????swf?????????????????????
        f: m3u8SWF,
        a: this.opt.currentSource,
        c: 0,  // 0-??????ckplayer.js????????? 1-??????ckplayer.xml?????????
        lv: 1, // 1-?????? 0-????????????
        p: this.opt.autoplay ? 1 : 0,   // 1-???????????? 0-????????????
        i: this.opt.poster,
        loaded: 'loadHandler'
      };
    } else {
      flashvars = {
        f: this.opt.currentSource,
        c: 0,
        p: 1,
        loaded: 'loadHandler'
      };
    }
    var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
    this.flashId = this.opt.parentId + 'flashId';
    window.CKobject.embedSWF(ckplayerSWF, this.opt.parentId, this.flashId, this.opt.width, this.opt.height, flashvars, params);
  };

  EZUIPlayer.prototype.initVideoEvent = function () {
    var me = this;
    var EVENT = {
      'loadstart': function (e) {
        me.log('loadstart...??????????????????????????????/?????????...');
        me.emit('loadstart', e);
      },
      'durationchange': function (e) {
        me.log('durationchange...?????????/???????????????????????????...');
        me.emit('durationchange', e);
      },
      'loadedmetadata': function (e) {
        me.log('loadedmetadata...???????????????????????????/?????????????????????...');
        me.emit('loadedmetadata', e);
      },
      'loadeddata': function (e) {
        me.log('loadeddata...???????????????????????????/?????????????????????...');
        me.emit('loadeddata', e);
      },
      'progress': function (e) {
        me.log('progress...??????????????????????????????/?????????...');
        me.emit('progress', e);
      },
      'canplay': function (e) {
        me.log('canplay...??????????????????????????????/?????????...');
        me.emit('canplay', e);
      },
      'canplaythrough': function (e) {
        me.log('canplaythrough...??????????????????????????????????????????????????????????????????...');
        me.emit('canplaythrough', e);
      },
      'abort': function (e) {
        me.log('abort...?????????/???????????????????????????...');
        me.emit('abort', e);
      },
      'emptied': function (e) {
        me.log('emptied...?????????????????????????????????...');
        me.emit('emptied', e);
      },
      'ended': function (e) {
        me.log('ended...????????????????????????????????????...');
        me.emit('ended', e);
      },
      'pause': function (e) {
        me.log('pause...?????????/??????????????????...');
        me.emit('pause', e);
      },
      'play': function (e) {
        me.log('play...?????????/?????????????????????????????????...');
        me.emit('play', e);
      },
      'playing': function (e) {
        me.log('playing...?????????/??????????????????????????????????????????????????????...');
        me.emit('playing', e);
      },
      'ratechange': function (e) {
        me.log('ratechange...?????????/?????????????????????????????????...');
        me.emit('ratechange', e);
      },
      'seeked': function (e) {
        me.log('seeked...??????????????????/???????????????/????????????????????????...');
        me.emit('seeked', e);
      },
      'seeking': function (e) {
        me.log('seeking...?????????????????????/???????????????/????????????????????????...');
        me.emit('seeking', e);
      },
      'stalled': function (e) {
        me.log('stalled...????????????????????????????????????????????????????????????...');
        me.emit('stalled', e);
      },
      'suspend': function (e) {
        me.log('suspend...??????????????????????????????????????????...');
        me.emit('suspend', e);
        if (me.opt.autoplay) {
          me.video.play();
        }
      },
      'timeupdate': function (e) {
        //me.log('timeupdate...????????????????????????????????????...');
        me.emit('timeupdate', e);
      },
      'volumechange': function (e) {
        me.log('volumechange...?????????????????????...');
        me.emit('volumechange', e);
      },
      'waiting': function (e) {
        me.log('waiting...?????????????????????????????????????????????...');
        me.emit('waiting', e);
      },
      'error': function (e) {
        me.log('error...????????????/?????????????????????????????????...');
        me.emit('error', e);
      }

    };
    for (var i in EVENT) {
      this.video.addEventListener(i, EVENT[i], false);
    }

    ios11Hack(this.video);

  };

  EZUIPlayer.prototype.initJSmpeg = function (jsmpegUrl) {
    this.canvasEle = document.createElement('canvas');
    this.canvasEle.style.width = this.opt.width;
    this.canvasEle.style.height = this.opt.height;
    this.video.parentNode.replaceChild(this.canvasEle, this.video);
    this.canvasEle.id = this.opt.parentId;
    var player;
    if (player && player.destroy) {
      player.destroy();
    }
    player = new JSMpeg.Player(jsmpegUrl, { canvas: this.canvasEle });
    this.JSmpeg = player;
  };

  EZUIPlayer.prototype.initflv = function () {
    if (flvjs.isSupported()) {
      var player = this.video;
      var hasControls = player.getAttribute('controls');
      if (!hasControls) {
        player.setAttribute('controls', true);
      }
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: this.opt.currentSource,
        isLive: true,
      }, {
          enableStashBuffer: true,
          stashInitialSize: 128,
          enableWorker: true
        });

      flvPlayer.attachMediaElement(player);
      flvPlayer.load();
      flvPlayer.play();
    } else {
      this.log("??????????????????flv??????");
      throw new Error('??????????????????flv??????');
      return;
    }
    this.flv = flvPlayer;
  };


  EZUIPlayer.prototype.play = function (params) {
    //var index = params.index;
    this.log("????????????" + this.opt.currentSource);
    if (!!window['CKobject']) {
      this.opt.autoplay = true;
      this.initCKPlayer();
    } else if (!!this.video) { // video?????? ??????flv, hls
      if (!!this.hls) { // hls?????????????????? this.hls
        this.opt.autoplay = true;
        this.hls.startLoad();
        this.video.play();
      } else if (!!this.JSmpeg) {
        this.JSmpeg.play();
      } else {       // ??????????????????????????????video
        this.opt.autoplay = true;
        this.video.play();
      }
    } else if (!!this.jSPlugin) {
      var _this = this;
      // ???????????????????????????
      setTimeout(function(){
        _this.log("???????????????????????????")
        _this.jSPlugin.JS_OpenSound(0);
      },5000)
      function getPlayParams(url) {
        var websocketConnectUrl = url.split('?')[0].replace('/live', '').replace('/playback', '');
        var websocketStreamingParam = (url.indexOf('/live')=== -1 ? '/playback?': '/live?') + url.split('?')[1];
        return { websocketConnectUrl: websocketConnectUrl, websocketStreamingParam: websocketStreamingParam }
      }
      if (!params || typeof params.index === 'undefined') {
        _this.opt.sources.forEach(function (item, index) {
          _this.jSPlugin.JS_Play(getPlayParams(item).websocketConnectUrl, { playURL: getPlayParams(item).websocketStreamingParam }, index).then(function () {
            console.log("realplay success");
            if (params && params.handleSuccess) {
              params.handleSuccess();
            }
          }, function (err) {
            console.log("realplay failed", err.oError);
            if (params && params.handleError) {
              var errorInfo = JSON.parse(_this.errorCode).find(function(item){return item.detailCode.substr(-4) == err.oError.errorCode})
              params.handleError({retcode: err.oError.errorCode,msg: errorInfo ? errorInfo.description :  '????????????'});
            }
          })
        })
      } else {
        params.index.forEach(function (item, index) {
          _this.jSPlugin.JS_Play(getPlayParams(_this.opt.sources[item]).websocketConnectUrl, { playURL: getPlayParams(_this.opt.sources[item]).websocketStreamingParam }, item).then(function () {
            console.log("realplay success");
            if (params && params.handleSuccess) {
              params.handleSuccess();
            }
          }, function (err) {
            console.log("realplay failed", err.oError);
            if (params && params.handleError) {
              var errInfo = err.oError;// ???????????????
              params.handleError(errInfo);
            }
          })
        })
      }
    }

  };
  EZUIPlayer.prototype.initDecoder = function (playParams) {
    this.opt.id = playParams.id;
    this.log("??????????????????---??????");
    var _this = this;
    // DOM id
    function initDecoder(resolve, reject) {
      var jsPluginPath = playParams.decoderPath + '/js/jsPlugin-1.2.0_test.js';

      /** ?????????????????? */
      addJs(jsPluginPath, function () {
        _this.log("???????????????????????????????????????");
        /* decoder ???????????? */
        _this.jSPlugin = new JSPlugin({
          szId: playParams.id,
          iType: 1,
          iWidth: playParams.width || 600,
          iHeight: playParams.height || 400,
          iMaxSplit: Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          iCurrentSplit: playParams.splitBasis || Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          szBasePath: playParams.decoderPath + '/js/',
        });
          // ??????????????????
        window.onresize = function () {
          _this.jSPlugin.JS_Resize(playParams.width || 600, playParams.height || 400);
        }
        _this.log("??????????????????----??????");
        _this.log("??????????????????");
        var validateCode = _this.opt.validateCode;
        if(validateCode){
          _this.jSPlugin.JS_SetSecretKey(0, validateCode);
        }
        resolve('200 OK')
      });
      /** 
       * ???????????????
       * ????????????????????? - omm????????????
       */
      function success(data) {
        if (data.code == 200) {
          if (!window.localStorage) {
            return false;
          } else {
            var storage = window.localStorage;
            //??????a??????
            storage["errorCode"] = JSON.stringify(data.data);
            _this.errorCode = storage['errorCode'];
          }
        }
      }
      if (!window.localStorage) {
        request(
          playParams.decoderPath + "/js/errorCode.json",
          "get",
          {
            language: 1,
            time: new Date().getTime(),
            appKey: '26810f3acd794862b608b6cfbc32a6b8',
          },
          '',
          success
        );
      } else {
        var storage = window.localStorage;
        var errorCode=storage.errorCode;
        if(!errorCode){
          request(
            playParams.decoderPath + "/js/errorCode.json",
            "get",
            {
              language: 1,
              time: new Date().getTime(),
              appKey: '26810f3acd794862b608b6cfbc32a6b8',
            },
            '',
            success
          );
        } else {
          _this.errorCode = storage['errorCode'];
        }
      }
     

    }
    var initDecoderPromise = new Promise(initDecoder);

    return initDecoderPromise;
  }
  EZUIPlayer.prototype.stop = function (i) {
    // ????????????
    this.log("????????????" + this.opt.currentSource);
    this.opt.autoplay = false;
    if (!!window['CKobject']) {
      //CKobject.getObjectById(this.flashId).destroy();
      this.video.src=""
      // this.video.remove();
    } else if (!!this.video) {
      if (!!this.hls) {   // hls????????????this.hls
        // ????????????????????????
        this.video.pause();
        this.video.src=""
        // ????????????
        this.hls.stopLoad();
      } else if (!!this.flv) {
        this.flv.pause();
        this.flv.unload();
        this.flv.detachMediaElement();
        this.flv.destroy();
        this.flv = null;
      } else if (!!this.JSmpeg) {
        this.JSmpeg.stop();
        // this.JSmpeg.destroy();
      }
    } else if (!!this.jSPlugin) {
      var _this = this;
      if (typeof i === "undefined") {
        var length = this.opt.sources.length;
        for (index = 0; index < length; index++) {
          this.jSPlugin.JS_Stop(index).then(function () {
            _this.log("??????????????????" + _this.opt.currentSource);
            console.log("stop success");
          }, function () {
            _this.log("??????????????????" + _this.opt.currentSource);
            console.log("stop failed");
          });
          // ????????????worker
          //this.jSPlugin.JS_DestroyWorker();
          removeChild(index);
        }
      } else {
        this.jSPlugin.JS_Stop(i).then(function () {
          _this.log("??????????????????" + _this.opt.currentSource);
          console.log("stop success");
        }, function () {
          _this.log("??????????????????" + _this.opt.currentSource);
          console.log("stop failed");
        });
        // ????????????worker
        //this.jSPlugin.JS_DestroyWorker();
        removeChild(i);
      }
      function removeChild(index) {
        var windDOM = document.getElementById(_this.opt.id).childNodes[0].childNodes[index];
        var childs = windDOM.childNodes;
        for (var i = childs.length - 1; i >= 0; i--) {
          windDOM.removeChild(childs[i]);
        }
      }
    }
  };
  // ??????OSD??????
  EZUIPlayer.prototype.getOSDTime = function(callback,iWind){
    if (!!this.jSPlugin){
      this.jSPlugin.JS_GetOSDTime(iWind || 0).then(function(iTime){
        callback(iTime * 1000);
      }, function (err) {
        console.log("get OSD Time error", err);
      });
    }else {
      throw new Error("Method  not support");
    }
  }
  // ????????????
  EZUIPlayer.prototype.openSound = function(iWind){
    if (!!this.jSPlugin){
      this.jSPlugin.JS_OpenSound(iWind || 0)
    }else {
      throw new Error("Method  not support");
    }
  }
  EZUIPlayer.prototype.pause = function () {
    this.opt.autoplay = false;
    if (!!window['CKobject']) {
      CKobject.getObjectById(this.flashId).videoPause();
    } else if (!!this.video) {
      if (!!this.JSmpeg) {
        this.JSmpeg.pause();
      } else {
        this.video.pause();
      }
    } else if (!!this.jSPlugin) {
      this.jSPlugin.JS_Pause(0).then(function () {
      }, function () {
      });
    }
  };

  EZUIPlayer.prototype.load = function () {
    if (!!window['CKobject']) {
      // flash load
    } else if (!!this.video) {
      this.video.load();
    }
  };


  // iOS11??????HLS?????????m3u8???????????????????????????????????????hack
  function ios11Hack(video) {
    var isloadeddata = false;
    var isPlaying = false;
    var stalledCount = 0;
    video.addEventListener('loadeddata', function () {
      isloadeddata = true;
    }, false);
    video.addEventListener('stalled', function () {
      stalledCount++;
      if (!isPlaying) {
        if (stalledCount >= 2 && !isloadeddata) {
          video.load();
          video.play();
          isloadeddata = false;
          isPlaying = false;
          stalledCount = 0;
        }
      }
    }, false);
    video.addEventListener('playing', function () {
      isPlaying = true;
    });
  }

  function ltIE11() {
    var userAgent = navigator.userAgent; //??????????????????userAgent?????????
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //????????????IE<11?????????
    if (isIE) {
      return true;
    } else {
      return false;
    }
  }

  // ???????????????????????????
  function browserTerminal() {
    var u = window.navigator.userAgent;
    var browserClass = {
      trident: u.indexOf('Trident') > -1, //IE??????
      presto: u.indexOf('Presto') > -1, //opera??????
      webKit: u.indexOf('AppleWebKit') > -1, //?????????????????????
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //????????????
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //?????????????????????
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios??????
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android??????
      iPhone: u.indexOf('iPhone') > -1, //?????????iPhone??????QQHD?????????
      iPad: u.indexOf('iPad') > -1, //??????iPad
      webApp: u.indexOf('Safari') == -1, //??????web????????????????????????????????????
      weixin: u.indexOf('MicroMessenger') > -1, //????????????
      qq: u.match(/\sQQ/i) == " qq", //??????QQ
      ie: u.indexOf('Trident') > -1 || u.indexOf('MSIE') > -1 || u.indexOf('compatible') > -1,
    };
    return browserClass;
  }


  //????????????
  var Util = {
    //?????????
    init: function () {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      window.AudioContext = window.AudioContext ||
        window.webkitAudioContext;
    },
    //??????
    log: function (str) {
      console.log.apply(console, arguments);
    }
  };


  var EZUITalk = function (bizParams) {
    if (bizParams && typeof bizParams !== 'object') {
      throw new Error("EZUITalk requires parameter it doesn't right");
      return;
    }
    var audioId = bizParams.id;
    var Token = bizParams.token;
    var uuid = bizParams.uuid;
    if (typeof audioId !== 'string' || typeof audioId === 'undefined') {
      throw new Error('EZUITalk requires parameter audioId');
      return;
    }
    this.audio = document.getElementById(audioId);
    if (!this.audio) {
      throw new Error('EZUITalk requires parameter audioElement');
      return;
    }
    if (!Token) {
      throw new Error('EZUITalk requires parameter accessToken');
      return
    }
    if (!uuid) {
      throw new Error('EZUITalk requires parameter uuid');
      return;
    }
    Util.init();
    if (!navigator.getUserMedia) {
      throw new Error('????????????????????????????????????');
      return;
    }
    var browserC = browserTerminal();
    if (!browserC.mobile) {
      throw new Error('?????????????????????????????????????????????');
      return;
    }

    // ????????????
    this.handlers = {};
    var _this = this;
    this.BUFFER = [];
    this.encoder = undefined;


    this.isEnded = true;
    this.LENGTH = 20;
    this.audio.addEventListener('ended', function () {
      _this.isEnded = true;
    });

    // ?????????????????????
    this.audioPlay = function () {
      if (this.isEnded) {
        this.isEnded = false;
        if (this.BUFFER.length > this.LENGTH) {
          this.BUFFER = this.BUFFER.slice(0, this.LENGTH)
        }
        this.encoder = new WavAudioEncoder(16000, 1);
        var buf = this.BUFFER.shift();
        while (buf) {
          this.encoder.encode(buf);
          buf = this.BUFFER.shift();
        }
        this.audio.src = URL.createObjectURL(this.encoder.finish());
      }
    };

    // ????????????????????????
    this.start = function () {
      this.wsUrl = 'wss://test2.ys7.com:20007/opentalk/' + uuid;
      this.socket = new WebSocket(this.wsUrl);
      this.talk();
    };

    this.talk = function () {
      addJs(wav, function () {
        _this.socket.onopen = function () {
          _this.log('websocket?????????');
          var sendData = {
            'accessToken': Token,
            'uuid': uuid,
          };
          var messageJson = JSON.stringify(sendData);
          _this.socket.send(messageJson);
          _this.log('websocket ??????????????????');
          _this.startRecord();
        };
        _this.socket.onclose = function () {
          _this.log('websocket?????????');
        };
        _this.socket.onerror = function (e) {
          _this.log('websocket??????->' + JSON.stringify(e));
        };
        _this.socket.onmessage = function (e) {
          _this.log('websocket ????????????');
          _this.BUFFER.push(e.data);
          _this.audioPlay();
        };

        _this.audio.setAttribute('autoplay', true);
        _this.audio.play();

      });
    };

    // ????????????????????????
    this.startRecord = function () {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
          var context = new AudioContext(),
            microphone = context.createMediaStreamSource(stream), //??????????????????
            processor = context.createScriptProcessor(16384, 1, 1); //js???????????????

          _this.log('?????????????????????????????? ' + context.sampleRate);

          processor.onaudioprocess = function (event) {
            //????????????????????????
            var array = event.inputBuffer.getChannelData(0);
            // _this.log('??????????????????');
            realTimeWorker.postMessage({ cmd: 'encode', buf: array });
          };

          var realTimeWorker = new Worker('../js/worker.js'); //??????????????????

          realTimeWorker.onmessage = function (e) {
            //??????????????????????????????????????????
            switch (e.data.cmd) {
              case 'pcm':
                _this.socket.send(e.data.buf);
                console.log(e.data.buf);
                _this.log('websocket ????????????');
                break;
              default:
                _this.log('???????????????' + e.data);
            }
          };

          //????????????
          if (processor && microphone) {
            microphone.connect(processor);
            processor.connect(context.destination);
          }
          _this.log('????????????');

          //????????????
          _this.stop = function () {
            if (processor && microphone) {
              microphone.disconnect();
              processor.disconnect();
            }
            _this.socket.close();
            _this.log('????????????');
          };

        }).catch(function (error) {
          var msg;
          switch (error.code || error.name) {
            case 'PermissionDeniedError':
            case 'PERMISSION_DENIED':
            case 'NotAllowedError':
              msg = '???????????????????????????';
              break;
            case 'NOT_SUPPORTED_ERROR':
            case 'NotSupportedError':
              msg = '???????????????????????????';
              break;
            case 'MANDATORY_UNSATISFIED_ERROR':
            case 'MandatoryUnsatisfiedError':
              msg = '????????????????????????';
              break;
            default:
              msg = '????????????????????????????????????:' + (error.code || error.name);
              break;
          }
          _this.log(msg);
          alert(msg);
        })
    }
  };

  // ????????????
  EZUITalk.prototype.on = function (eventName, callback) {
    if (typeof eventName !== 'string' || typeof callback !== 'function') {
      return;
    }
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  };

  // ????????????
  EZUITalk.prototype.emit = function () {
    if (this.handlers[arguments[0]] instanceof Array) {
      var handlers = this.handlers[arguments[0]];
      var l = handlers.length;
      for (var i = 0; i < l; i++) {
        handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };

  EZUITalk.prototype.log = function (msg) {
    this.emit('log', msg);
  };

  var EZUIKit = {
    'EZUIPlayer': EZUIPlayer,
    'EZUITalk': EZUITalk,
  };
  // ??????1.4 ???????????????
  // var EZUIPlayer = EZuikit.EZUIPlayer;

  if (!noGlobal) {
    window.EZUIKit = EZUIKit;
    // ??????1.4 ???????????????
    window.EZUIPlayer = EZUIPlayer;
  }
  return EZUIKit;
});
