// function isIE(userAgent) {
//     userAgent = userAgent || navigator.userAgent;
//     return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
// }

// (function($){
// 	$(document).ready(function(){
// 		posts_grid_jscroll();
// 		wrap_iframes();		

// 		// set all external links to open in new tab
// 	    // $('a').each(function() {
// 		// 	var a = new RegExp('/' + window.location.host + '/');

// 		// 	if((!a.test(this.href) && this.href.indexOf('mailto') != 0) || this.href.indexOf('.pdf') >= 0) {
//         //     	$(this).prop('target','_blank');
//         //     	$(this).addClass('external-link');
//         // 	}	
			
// 	    // });		

// 		$(document).on('click','.search-trigger',function(e){
// 			e.preventDefault();
// 			$(this).toggleClass('active');
// 			$(this).siblings('.search-form').toggleClass('active');
// 			$(this).siblings('.search-form').find('.search-field').focus();
// 			$(this).siblings('.back-to-menu').addClass('active');
// 		});

// 		$(document).on('click','.back-to-menu',function(e){
// 			e.preventDefault();
// 			$(this).removeClass('active');
// 			$(this).siblings('.search-form').removeClass('active');
// 		});

// 		$(document).click(function(e){
// 			$is_search = (e.target.classList.contains('search-form') || e.target.classList.contains('search-field') || e.target.classList.contains('search-trigger'));

// 			if(!$is_search && $(window).width() > 991) {
// 				$('.search-form, .search-trigger').removeClass('active');
// 			}
// 		});

// 		$('body').on('click','#mobile-menu ul li.menu-item-has-children',function(e){
// 			if(!$(this).hasClass('active')) {
// 				e.preventDefault();
// 				$(this).addClass('active');
// 				$(this).find('.sub-menu').slideDown();
// 			} else {
// 				$(this).removeClass('active');
// 				$(this).find('.sub-menu').slideUp();
// 			}
// 		});

		
// 	    function posts_grid_jscroll() {
// 			if($('.posts--grid').length) {
// 				$('.posts--grid').jscroll({
// 					loadingHtml: '',
// 					loadingFunction: function() {
// 						$('.btn-loading-container').show();
// 					},
// 					nextSelector: '#posts--grid--next-page:last a.posts-next-link',
// 					contentSelector: '.posts--grid-content',
// 					autoTrigger: false,
// 					callback: function() {
// 						$('html,body').animate({scrollTop: $(this).offset().top - 300 }, 500);
// 						$('.btn-loading-container').hide();
// 					}
// 				});
// 			}
// 		}

// 		function wrap_iframes() {
			
// 			$('iframe[src*="vimeo"]').each(function(){
// 				// get the src
// 				var src = $(this).attr('src');
// 				// replace parameter with nothing
// 				$(this).attr('src',src.replace('dnt=1&', ''));
// 			});

// 			$('iframe[src*="vimeo"]').wrap("<div class='iframe-wrapper inline-vimeo'></div>");
// 			$('iframe[src*="youtube"]').wrap("<div class='iframe-wrapper inline-youtube'></div>");
// 		}
		
// 	});
	
// })(jQuery);

// // function onPlayerReady($player_obj) {
// // 	$player_obj.closest('.video-wrapper').addClass('loaded');
// // }

// // window.onYouTubeIframeAPIReady = function() {

// // 	setTimeout(function(){
		
// // 		jQuery('.youtube-video').each(function(i){

// // 			var varname = jQuery(this).attr('id');

// // 			window[varname] = new YT.Player(jQuery(this).attr('id'), {
// // 				width: '100%',
// // 				height: '100%',
// // 				videoId: jQuery(this).attr('data-video-id'),
// // 				playerVars: { rel: 0 },
// // 				origin: window.location.href,
// // 				enablejsapi: 1,
// // 				events: {
// // 					'onReady': onPlayerReady(jQuery(this))
// // 				}
// // 			});
// // 		});

// // 	}, 300);
// // };
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    const e = function(t) {
        if (t && t.__esModule)
            return t;
        const e = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => t[i]
                    })
                }
        return e.default = t,
        Object.freeze(e)
    }(t)
      , i = "transitionend"
      , s = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }
      , n = t => {
        const e = s(t);
        return e && document.querySelector(e) ? e : null
    }
      , o = t => {
        const e = s(t);
        return e ? document.querySelector(e) : null
    }
      , r = t => {
        t.dispatchEvent(new Event(i))
    }
      , a = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , l = t => a(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , c = t => {
        if (!a(t) || 0 === t.getClientRects().length)
            return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , i = t.closest("details:not([open])");
        if (!i)
            return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i)
                return !1;
            if (null === e)
                return !1
        }
        return e
    }
      , h = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , d = t => {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null
    }
      , u = () => {}
      , f = t => {
        t.offsetHeight
    }
      , p = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , m = []
      , g = () => "rtl" === document.documentElement.dir
      , _ = t => {
        var e;
        e = () => {
            const e = p();
            if (e) {
                const i = t.NAME
                  , s = e.fn[i];
                e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = () => (e.fn[i] = s,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", ( () => {
            for (const t of m)
                t()
        }
        )),
        m.push(e)) : e()
    }
      , v = t => {
        "function" == typeof t && t()
    }
      , y = (t, e, s=!0) => {
        if (!s)
            return void v(t);
        const n = (t => {
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
            const s = Number.parseFloat(e)
              , n = Number.parseFloat(i);
            return s || n ? (e = e.split(",")[0],
            i = i.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        }
        )(e) + 5;
        let o = !1;
        const a = ({target: s}) => {
            s === e && (o = !0,
            e.removeEventListener(i, a),
            v(t))
        }
        ;
        e.addEventListener(i, a),
        setTimeout(( () => {
            o || r(e)
        }
        ), n)
    }
      , b = (t, e, i, s) => {
        const n = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1,
        s && (o = (o + n) % n),
        t[Math.max(0, Math.min(o, n - 1))])
    }
      , w = /[^.]*(?=\..*)\.|.*/
      , T = /\..*/
      , x = /::\d+$/
      , k = {};
    let S = 1;
    const C = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , A = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function O(t, e) {
        return e && `${e}::${S++}` || t.uidEvent || S++
    }
    function P(t) {
        const e = O(t);
        return t.uidEvent = e,
        k[e] = k[e] || {},
        k[e]
    }
    function E(t, e, i=null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }
    function M(t, e, i) {
        const s = "string" == typeof e
          , n = s ? i : e || i;
        let o = I(t);
        return A.has(o) || (o = t),
        [s, n, o]
    }
    function D(t, e, i, s, n) {
        if ("string" != typeof e || !t)
            return;
        let[o,r,a] = M(e, i, s);
        if (e in C) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            r = t(r)
        }
        const l = P(t)
          , c = l[a] || (l[a] = {})
          , h = E(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = O(r, e.replace(w, ""))
          , u = o ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = n; r && r !== this; r = r.parentNode)
                    for (const a of o)
                        if (a === r)
                            return R(n, {
                                delegateTarget: r
                            }),
                            s.oneOff && $.off(t, n.type, e, i),
                            i.apply(r, [n])
            }
        }(t, i, r) : function(t, e) {
            return function i(s) {
                return R(s, {
                    delegateTarget: t
                }),
                i.oneOff && $.off(t, s.type, e),
                e.apply(t, [s])
            }
        }(t, r);
        u.delegationSelector = o ? i : null,
        u.callable = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function L(t, e, i, s, n) {
        const o = E(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)),
        delete e[i][o.uidEvent])
    }
    function j(t, e, i, s) {
        const n = e[i] || {};
        for (const o of Object.keys(n))
            if (o.includes(s)) {
                const s = n[o];
                L(t, e, i, s.callable, s.delegationSelector)
            }
    }
    function I(t) {
        return t = t.replace(T, ""),
        C[t] || t
    }
    const $ = {
        on(t, e, i, s) {
            D(t, e, i, s, !1)
        },
        one(t, e, i, s) {
            D(t, e, i, s, !0)
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = M(e, i, s)
              , a = r !== e
              , l = P(t)
              , c = l[r] || {}
              , h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l))
                        j(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const s = i.replace(x, "");
                    if (!a || e.includes(s)) {
                        const e = c[i];
                        L(t, l, r, e.callable, e.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length)
                    return;
                L(t, l, r, o, n ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const s = p();
            let n = null
              , o = !0
              , r = !0
              , a = !1;
            e !== I(e) && s && (n = s.Event(e, i),
            s(t).trigger(n),
            o = !n.isPropagationStopped(),
            r = !n.isImmediatePropagationStopped(),
            a = n.isDefaultPrevented());
            let l = new Event(e,{
                bubbles: o,
                cancelable: !0
            });
            return l = R(l, i),
            a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && n && n.preventDefault(),
            l
        }
    };
    function R(t, e) {
        for (const [i,s] of Object.entries(e || {}))
            try {
                t[i] = s
            } catch (e) {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    get: () => s
                })
            }
        return t
    }
    const z = new Map
      , N = {
        set(t, e, i) {
            z.has(t) || z.set(t, new Map);
            const s = z.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (t, e) => z.has(t) && z.get(t).get(e) || null,
        remove(t, e) {
            if (!z.has(t))
                return;
            const i = z.get(t);
            i.delete(e),
            0 === i.size && z.delete(t)
        }
    };
    function F(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function H(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const B = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${H(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${H(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {}
              , i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const s of i) {
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = F(t.dataset[s])
            }
            return e
        },
        getDataAttribute: (t, e) => F(t.getAttribute(`data-bs-${H(e)}`))
    };
    class W {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = a(e) ? B.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...a(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const s of Object.keys(e)) {
                const n = e[s]
                  , o = t[s]
                  , r = a(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(n).test(r))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
            }
            var i
        }
    }
    class X extends W {
        constructor(t, e) {
            super(),
            (t = l(t)) && (this._element = t,
            this._config = this._getConfig(e),
            N.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            N.remove(this._element, this.constructor.DATA_KEY),
            $.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, i=!0) {
            y(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return N.get(l(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.3"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const q = (t, e="hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`
          , s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            h(this))
                return;
            const n = o(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]()
        }
        ))
    }
    ;
    class Y extends X {
        static get NAME() {
            return "alert"
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(( () => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            $.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    q(Y, "close"),
    _(Y);
    const U = '[data-bs-toggle="button"]';
    class V extends X {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = V.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    $.on(document, "click.bs.button.data-api", U, (t => {
        t.preventDefault();
        const e = t.target.closest(U);
        V.getOrCreateInstance(e).toggle()
    }
    )),
    _(V);
    const Q = {
        find: (t, e=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e=document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
        parents(t, e) {
            const i = [];
            let s = t.parentNode.closest(e);
            for (; s; )
                i.push(s),
                s = s.parentNode.closest(e);
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t => !h(t) && c(t)))
        }
    }
      , K = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , G = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class Z extends W {
        constructor(t, e) {
            super(),
            this._element = t,
            t && Z.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return K
        }
        static get DefaultType() {
            return G
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            $.off(this._element, ".bs.swipe")
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            v(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? ($.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))),
            $.on(this._element, "pointerup.bs.swipe", (t => this._end(t))),
            this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.swipe", (t => this._start(t))),
            $.on(this._element, "touchmove.bs.swipe", (t => this._move(t))),
            $.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const J = "next"
      , tt = "prev"
      , et = "left"
      , it = "right"
      , st = "slid.bs.carousel"
      , nt = "carousel"
      , ot = "active"
      , rt = {
        ArrowLeft: it,
        ArrowRight: et
    }
      , at = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , lt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class ct extends X {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = Q.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === nt && this.cycle()
        }
        static get Default() {
            return at
        }
        static get DefaultType() {
            return lt
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(J)
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next()
        }
        prev() {
            this._slide(tt)
        }
        pause() {
            this._isSliding && r(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(( () => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? $.one(this._element, st, ( () => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void $.one(this._element, st, ( () => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t)
                return;
            const s = t > i ? J : tt;
            this._slide(s, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))),
            "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", ( () => this.pause())),
            $.on(this._element, "mouseleave.bs.carousel", ( () => this._maybeEnableCycle()))),
            this._config.touch && Z.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element))
                $.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(et)),
                rightCallback: () => this._slide(this._directionToOrder(it)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(( () => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new Z(this._element,t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = rt[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = Q.findOne(".active", this._indicatorsElement);
            e.classList.remove(ot),
            e.removeAttribute("aria-current");
            const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(ot),
            i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const i = this._getActive()
              , s = t === J
              , n = e || b(this._getItems(), i, s, this._config.wrap);
            if (n === i)
                return;
            const o = this._getItemIndex(n)
              , r = e => $.trigger(this._element, e, {
                relatedTarget: n,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o
            });
            if (r("slide.bs.carousel").defaultPrevented)
                return;
            if (!i || !n)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = n;
            const l = s ? "carousel-item-start" : "carousel-item-end"
              , c = s ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c),
            f(n),
            i.classList.add(l),
            n.classList.add(l),
            this._queueCallback(( () => {
                n.classList.remove(l, c),
                n.classList.add(ot),
                i.classList.remove(ot, c, l),
                this._isSliding = !1,
                r(st)
            }
            ), i, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return Q.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return Q.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return g() ? t === et ? tt : J : t === et ? J : tt
        }
        _orderToDirection(t) {
            return g() ? t === tt ? et : it : t === tt ? it : et
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ct.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            }
            ))
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = o(this);
        if (!e || !e.classList.contains(nt))
            return;
        t.preventDefault();
        const i = ct.getOrCreateInstance(e)
          , s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s),
        void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(),
        void i._maybeEnableCycle()) : (i.prev(),
        void i._maybeEnableCycle())
    }
    )),
    $.on(window, "load.bs.carousel.data-api", ( () => {
        const t = Q.find('[data-bs-ride="carousel"]');
        for (const e of t)
            ct.getOrCreateInstance(e)
    }
    )),
    _(ct);
    const ht = "show"
      , dt = "collapse"
      , ut = "collapsing"
      , ft = '[data-bs-toggle="collapse"]'
      , pt = {
        parent: null,
        toggle: !0
    }
      , mt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class gt extends X {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const i = Q.find(ft);
            for (const t of i) {
                const e = n(t)
                  , i = Q.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return pt
        }
        static get DefaultType() {
            return mt
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => gt.getOrCreateInstance(t, {
                toggle: !1
            })))),
            t.length && t[0]._isTransitioning)
                return;
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            for (const e of t)
                e.hide();
            const e = this._getDimension();
            this._element.classList.remove(dt),
            this._element.classList.add(ut),
            this._element.style[e] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(ut),
                this._element.classList.add(dt, ht),
                this._element.style[e] = "",
                $.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            f(this._element),
            this._element.classList.add(ut),
            this._element.classList.remove(dt, ht);
            for (const t of this._triggerArray) {
                const e = o(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback(( () => {
                this._isTransitioning = !1,
                this._element.classList.remove(ut),
                this._element.classList.add(dt),
                $.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(ht)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = l(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(ft);
            for (const e of t) {
                const t = o(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t)
                    i.classList.toggle("collapsed", !e),
                    i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each((function() {
                const i = gt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.collapse.data-api", ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = n(this)
          , i = Q.find(e);
        for (const t of i)
            gt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }
    )),
    _(gt);
    const _t = "dropdown"
      , vt = "ArrowUp"
      , yt = "ArrowDown"
      , bt = "click.bs.dropdown.data-api"
      , wt = "keydown.bs.dropdown.data-api"
      , Tt = "show"
      , xt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , kt = `${xt}.show`
      , St = ".dropdown-menu"
      , Ct = g() ? "top-end" : "top-start"
      , At = g() ? "top-start" : "top-end"
      , Ot = g() ? "bottom-end" : "bottom-start"
      , Pt = g() ? "bottom-start" : "bottom-end"
      , Et = g() ? "left-start" : "right-start"
      , Mt = g() ? "right-start" : "left-start"
      , Dt = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , Lt = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class jt extends X {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = Q.next(this._element, St)[0] || Q.prev(this._element, St)[0] || Q.findOne(St, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Dt
        }
        static get DefaultType() {
            return Lt
        }
        static get NAME() {
            return _t
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (h(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        $.on(t, "mouseover", u);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Tt),
                this._element.classList.add(Tt),
                $.trigger(this._element, "shown.bs.dropdown", t)
            }
        }
        hide() {
            if (h(this._element) || !this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        $.off(t, "mouseover", u);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Tt),
                this._element.classList.remove(Tt),
                this._element.setAttribute("aria-expanded", "false"),
                B.removeDataAttribute(this._menu, "popper"),
                $.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${_t.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === e)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : a(this._config.reference) ? t = l(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const i = this._getPopperConfig();
            this._popper = e.createPopper(t, this._menu, i)
        }
        _isShown() {
            return this._menu.classList.contains(Tt)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return Et;
            if (t.classList.contains("dropstart"))
                return Mt;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? At : Ct : e ? Pt : Ot
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => c(t)));
            i.length && b(i, e, t === yt, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = jt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = Q.find(kt);
            for (const i of e) {
                const e = jt.getInstance(i);
                if (!e || !1 === e._config.autoClose)
                    continue;
                const s = t.composedPath()
                  , n = s.includes(e._menu);
                if (s.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n)
                    continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t),
                e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , i = "Escape" === t.key
              , s = [vt, yt].includes(t.key);
            if (!s && !i)
                return;
            if (e && !i)
                return;
            t.preventDefault();
            const n = this.matches(xt) ? this : Q.prev(this, xt)[0] || Q.next(this, xt)[0] || Q.findOne(xt, t.delegateTarget.parentNode)
              , o = jt.getOrCreateInstance(n);
            if (s)
                return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(),
            o.hide(),
            n.focus())
        }
    }
    $.on(document, wt, xt, jt.dataApiKeydownHandler),
    $.on(document, wt, St, jt.dataApiKeydownHandler),
    $.on(document, bt, jt.clearMenus),
    $.on(document, "keyup.bs.dropdown.data-api", jt.clearMenus),
    $.on(document, bt, xt, (function(t) {
        t.preventDefault(),
        jt.getOrCreateInstance(this).toggle()
    }
    )),
    _(jt);
    const It = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , $t = ".sticky-top"
      , Rt = "padding-right"
      , zt = "margin-right";
    class Nt {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Rt, (e => e + t)),
            this._setElementAttributes(It, Rt, (e => e + t)),
            this._setElementAttributes($t, zt, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Rt),
            this._resetElementAttributes(It, Rt),
            this._resetElementAttributes($t, zt)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(n))}px`)
            }
            ))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e),
                t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            if (a(t))
                e(t);
            else
                for (const i of Q.find(t, this._element))
                    e(i)
        }
    }
    const Ft = "show"
      , Ht = "mousedown.bs.backdrop"
      , Bt = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , Wt = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Xt extends W {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return Bt
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "backdrop"
        }
        show(t) {
            if (!this._config.isVisible)
                return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && f(e),
            e.classList.add(Ft),
            this._emulateAnimation(( () => {
                v(t)
            }
            ))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ft),
            this._emulateAnimation(( () => {
                this.dispose(),
                v(t)
            }
            ))) : v(t)
        }
        dispose() {
            this._isAppended && ($.off(this._element, Ht),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = l(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            $.on(t, Ht, ( () => {
                v(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated)
        }
    }
    const qt = ".bs.focustrap"
      , Yt = "backward"
      , Ut = {
        autofocus: !0,
        trapElement: null
    }
      , Vt = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Qt extends W {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return Ut
        }
        static get DefaultType() {
            return Vt
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            $.off(document, qt),
            $.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))),
            $.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            $.off(document, qt))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const i = Q.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Yt ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward")
        }
    }
    const Kt = "hidden.bs.modal"
      , Gt = "show.bs.modal"
      , Zt = "modal-open"
      , Jt = "show"
      , te = "modal-static"
      , ee = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , ie = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class se extends X {
        constructor(t, e) {
            super(t, e),
            this._dialog = Q.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Nt,
            this._addEventListeners()
        }
        static get Default() {
            return ee
        }
        static get DefaultType() {
            return ie
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || $.trigger(this._element, Gt, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(Zt),
            this._adjustDialog(),
            this._backdrop.show(( () => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && ($.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(Jt),
            this._queueCallback(( () => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            for (const t of [window, this._dialog])
                $.off(t, ".bs.modal");
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Xt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            f(this._element),
            this._element.classList.add(Jt),
            this._queueCallback(( () => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key)
                    return this._config.keyboard ? (t.preventDefault(),
                    void this.hide()) : void this._triggerBackdropTransition()
            }
            )),
            $.on(window, "resize.bs.modal", ( () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            $.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                $.one(this._element, "click.dismiss.bs.modal", (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(( () => {
                document.body.classList.remove(Zt),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                $.trigger(this._element, Kt)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(te) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(te),
            this._queueCallback(( () => {
                this._element.classList.remove(te),
                this._queueCallback(( () => {
                    this._element.style.overflowY = e
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
            if (i && !t) {
                const t = g() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = g() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = se.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = o(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        $.one(e, Gt, (t => {
            t.defaultPrevented || $.one(e, Kt, ( () => {
                c(this) && this.focus()
            }
            ))
        }
        ));
        const i = Q.findOne(".modal.show");
        i && se.getInstance(i).hide(),
        se.getOrCreateInstance(e).toggle(this)
    }
    )),
    q(se),
    _(se);
    const ne = "show"
      , oe = "showing"
      , re = "hiding"
      , ae = ".offcanvas.show"
      , le = "hidePrevented.bs.offcanvas"
      , ce = "hidden.bs.offcanvas"
      , he = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , de = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class ue extends X {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return he
        }
        static get DefaultType() {
            return de
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Nt).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(oe),
            this._queueCallback(( () => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(ne),
                this._element.classList.remove(oe),
                $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(re),
            this._backdrop.hide(),
            this._queueCallback(( () => {
                this._element.classList.remove(ne, re),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Nt).reset(),
                $.trigger(this._element, ce)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Xt({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : $.trigger(this._element, le)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : $.trigger(this._element, le))
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ue.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = o(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        h(this))
            return;
        $.one(e, ce, ( () => {
            c(this) && this.focus()
        }
        ));
        const i = Q.findOne(ae);
        i && i !== e && ue.getInstance(i).hide(),
        ue.getOrCreateInstance(e).toggle(this)
    }
    )),
    $.on(window, "load.bs.offcanvas.data-api", ( () => {
        for (const t of Q.find(ae))
            ue.getOrCreateInstance(t).show()
    }
    )),
    $.on(window, "resize.bs.offcanvas", ( () => {
        for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && ue.getOrCreateInstance(t).hide()
    }
    )),
    q(ue),
    _(ue);
    const fe = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , pe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , ge = (t, e) => {
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !fe.has(i) || Boolean(pe.test(t.nodeValue) || me.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
    }
      , _e = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , ve = {
        allowList: _e,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , ye = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , be = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class we extends W {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return ve
        }
        static get DefaultType() {
            return ye
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e,i] of Object.entries(this._config.content))
                this._setContent(t, i, e);
            const e = t.children[0]
              , i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,i] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: i
                }, be)
        }
        _setContent(t, e, i) {
            const s = Q.findOne(i, t);
            s && ((e = this._resolvePossibleFunction(e)) ? a(e) ? this._putElementInTemplate(l(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length)
                    return t;
                if (i && "function" == typeof i)
                    return i(t);
                const s = (new window.DOMParser).parseFromString(t, "text/html")
                  , n = [].concat(...s.body.querySelectorAll("*"));
                for (const t of n) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const s = [].concat(...t.attributes)
                      , n = [].concat(e["*"] || [], e[i] || []);
                    for (const e of s)
                        ge(e, n) || t.removeAttribute(e.nodeName)
                }
                return s.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Te = new Set(["sanitize", "allowList", "sanitizeFn"])
      , xe = "fade"
      , ke = "show"
      , Se = ".modal"
      , Ce = "hide.bs.modal"
      , Ae = "hover"
      , Oe = "focus"
      , Pe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: g() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: g() ? "right" : "left"
    }
      , Ee = {
        allowList: _e,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , Me = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class De extends X {
        constructor(t, i) {
            if (void 0 === e)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, i),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return Ee
        }
        static get DefaultType() {
            return Me
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            $.off(this._element.closest(Se), Ce, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = $.trigger(this._element, this.constructor.eventName("show"))
              , e = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e)
                return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: s} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i),
            $.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(i),
            i.classList.add(ke),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    $.on(t, "mouseover", u);
            this._queueCallback(( () => {
                $.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !$.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(ke),
                "ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        $.off(t, "mouseover", u);
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this._isHovered = null,
                this._queueCallback(( () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    $.trigger(this._element, this.constructor.eventName("hidden")))
                }
                ), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(xe, ke),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", i),
            this._isAnimated() && e.classList.add(xe),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new we({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(xe)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(ke)
        }
        _createPopper(t) {
            const i = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement
              , s = Pe[i.toUpperCase()];
            return e.createPopper(this._element, t, this._getPopperConfig(s))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    $.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                        this._initializeOnDelegatedTarget(t).toggle()
                    }
                    ));
                else if ("manual" !== e) {
                    const t = e === Ae ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , i = e === Ae ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    $.on(this._element, t, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusin" === t.type ? Oe : Ae] = !0,
                        e._enter()
                    }
                    )),
                    $.on(this._element, i, this._config.selector, (t => {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? Oe : Ae] = e._element.contains(t.relatedTarget),
                        e._leave()
                    }
                    ))
                }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            $.on(this._element.closest(Se), Ce, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(( () => {
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(( () => {
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e))
                Te.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : l(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = De.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    _(De);
    const Le = {
        ...De.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , je = {
        ...De.DefaultType,
        content: "(null|string|element|function)"
    };
    class Ie extends De {
        static get Default() {
            return Le
        }
        static get DefaultType() {
            return je
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ie.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    _(Ie);
    const $e = "click.bs.scrollspy"
      , Re = "active"
      , ze = "[href]"
      , Ne = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , Fe = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class He extends X {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return Ne
        }
        static get DefaultType() {
            return Fe
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = l(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))),
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && ($.off(this._config.target, $e),
            $.on(this._config.target, $e, ze, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window
                      , s = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo)
                        return void i.scrollTo({
                            top: s,
                            behavior: "smooth"
                        });
                    i.scrollTop = s
                }
            }
            )))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t => this._observerCallback(t)),t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`)
              , i = t => {
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , s = (this._rootElement || document.documentElement).scrollTop
              , n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if (i(o),
                    !s)
                        return
                } else
                    n || t || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = Q.find(ze, this._config.target);
            for (const e of t) {
                if (!e.hash || h(e))
                    continue;
                const t = Q.findOne(e.hash, this._element);
                c(t) && (this._targetLinks.set(e.hash, e),
                this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(Re),
            this._activateParents(t),
            $.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Re);
            else
                for (const e of Q.parents(t, ".nav, .list-group"))
                    for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                        t.classList.add(Re)
        }
        _clearActiveClass(t) {
            t.classList.remove(Re);
            const e = Q.find("[href].active", t);
            for (const t of e)
                t.classList.remove(Re)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = He.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", ( () => {
        for (const t of Q.find('[data-bs-spy="scroll"]'))
            He.getOrCreateInstance(t)
    }
    )),
    _(He);
    const Be = "ArrowLeft"
      , We = "ArrowRight"
      , Xe = "ArrowUp"
      , qe = "ArrowDown"
      , Ye = "active"
      , Ue = "fade"
      , Ve = "show"
      , Qe = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , Ke = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Qe}`;
    class Ge extends X {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            $.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , i = e ? $.trigger(e, "hide.bs.tab", {
                relatedTarget: t
            }) : null;
            $.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(Ye),
            this._activate(o(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                $.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                })) : t.classList.add(Ve)
            }
            ), t, t.classList.contains(Ue)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Ye),
            t.blur(),
            this._deactivate(o(t)),
            this._queueCallback(( () => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                })) : t.classList.remove(Ve)
            }
            ), t, t.classList.contains(Ue)))
        }
        _keydown(t) {
            if (![Be, We, Xe, qe].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = [We, qe].includes(t.key)
              , i = b(this._getChildren().filter((t => !h(t))), t.target, e, !0);
            i && (i.focus({
                preventScroll: !0
            }),
            Ge.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return Q.find(Ke, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)
                this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = o(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown"))
                return;
            const s = (t, s) => {
                const n = Q.findOne(t, i);
                n && n.classList.toggle(s, e)
            }
            ;
            s(".dropdown-toggle", Ye),
            s(".dropdown-menu", Ve),
            i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(Ye)
        }
        _getInnerElement(t) {
            return t.matches(Ke) ? t : Q.findOne(Ke, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ge.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.tab", Qe, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        h(this) || Ge.getOrCreateInstance(this).show()
    }
    )),
    $.on(window, "load.bs.tab", ( () => {
        for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            Ge.getOrCreateInstance(t)
    }
    )),
    _(Ge);
    const Ze = "hide"
      , Je = "show"
      , ti = "showing"
      , ei = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ii = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class si extends X {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return ii
        }
        static get DefaultType() {
            return ei
        }
        static get NAME() {
            return "toast"
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Ze),
            f(this._element),
            this._element.classList.add(Je, ti),
            this._queueCallback(( () => {
                this._element.classList.remove(ti),
                $.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ti),
            this._queueCallback(( () => {
                this._element.classList.add(Ze),
                this._element.classList.remove(ti, Je),
                $.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Je),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Je)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(( () => {
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))),
            $.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))),
            $.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))),
            $.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = si.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return q(si),
    _(si),
    {
        Alert: Y,
        Button: V,
        Carousel: ct,
        Collapse: gt,
        Dropdown: jt,
        Modal: se,
        Offcanvas: ue,
        Popover: Ie,
        ScrollSpy: He,
        Tab: Ge,
        Toast: si,
        Tooltip: De
    }
}
)),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, s) {
            var n, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(o, o.initials),
            o.activeBreakpoint = null,
            o.animType = null,
            o.animProp = null,
            o.breakpoints = [],
            o.breakpointSettings = [],
            o.cssTransitions = !1,
            o.focussed = !1,
            o.interrupted = !1,
            o.hidden = "hidden",
            o.paused = !0,
            o.positionProp = null,
            o.respondTo = null,
            o.rowCount = 1,
            o.shouldClick = !0,
            o.$slider = t(i),
            o.$slidesCache = null,
            o.transformType = null,
            o.transitionType = null,
            o.visibilityChange = "visibilitychange",
            o.windowWidth = 0,
            o.windowTimer = null,
            n = t(i).data("slick") || {},
            o.options = t.extend({}, o.defaults, s, n),
            o.currentSlide = o.options.initialSlide,
            o.originalSettings = o.options,
            void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
            o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
            o.visibilityChange = "webkitvisibilitychange"),
            o.autoPlay = t.proxy(o.autoPlay, o),
            o.autoPlayClear = t.proxy(o.autoPlayClear, o),
            o.autoPlayIterator = t.proxy(o.autoPlayIterator, o),
            o.changeSlide = t.proxy(o.changeSlide, o),
            o.clickHandler = t.proxy(o.clickHandler, o),
            o.selectHandler = t.proxy(o.selectHandler, o),
            o.setPosition = t.proxy(o.setPosition, o),
            o.swipeHandler = t.proxy(o.swipeHandler, o),
            o.dragHandler = t.proxy(o.dragHandler, o),
            o.keyHandler = t.proxy(o.keyHandler, o),
            o.instanceUid = e++,
            o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            o.registerBreakpoints(),
            o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
        var n = this;
        if ("boolean" == typeof i)
            s = i,
            i = null;
        else if (i < 0 || i >= n.slideCount)
            return !1;
        n.unload(),
        "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === s ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e)
        }
        )),
        n.$slidesCache = n.$slides,
        n.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var s = {}
          , n = this;
        n.animateHeight(),
        !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
        !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
        t({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)",
                n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)",
                n.$slideTrack.css(s))
            },
            complete: function() {
                i && i.call()
            }
        })) : (n.applyTransition(),
        e = Math.ceil(e),
        !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)",
        n.$slideTrack.css(s),
        i && setTimeout((function() {
            n.disableTransition(),
            i.call()
        }
        ), n.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }
        ))
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, s = this;
        if (!0 === s.options.dots) {
            for (s.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(s.options.dotsClass),
            e = 0; e <= s.getDotCount(); e += 1)
                i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
            s.$dots = i.appendTo(s.options.appendDots),
            s.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }
        )),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, s, n, o, r, a = this;
        if (s = document.createDocumentFragment(),
        o = a.$slider.children(),
        a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows,
            n = Math.ceil(o.length / r),
            t = 0; t < n; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        o.get(h) && c.appendChild(o.get(h))
                    }
                    l.appendChild(c)
                }
                s.appendChild(l)
            }
            a.$slider.empty().append(s),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var s, n, o, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (s in n = null,
            r.breakpoints)
                r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[s] && (n = r.breakpoints[s]) : o > r.breakpoints[s] && (n = r.breakpoints[s]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n,
            "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = n) : (r.activeBreakpoint = n,
            "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            a = n),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var s, n, o = this, r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        s = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        e.data.message) {
        case "previous":
            n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
            break;
        case "next":
            n = 0 === s ? o.options.slidesToScroll : s,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, i),
            r.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var s in e) {
                if (t < e[s]) {
                    t = i;
                    break
                }
                i = e[s]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }
        )),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout((function() {
            i.disableTransition(t),
            e.call()
        }
        ), i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout((function() {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"),
                e.autoPlay())
            }
            ), 0)
        }
        ))
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , s = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow)
                ++s;
            else
                for (; e < t.slideCount; )
                    ++s,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            s = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++s,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, s, n, o = this, r = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        n = -1,
        !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)),
        r = i * o.options.slidesToShow * n),
        o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (t + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r,
        !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
        e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
        e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        e += (o.$list.width() - s.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, s = 0, n = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        s = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); i < t; )
            n.push(i),
            i = s + e.options.slidesToScroll,
            s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0,
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each((function(n, o) {
            if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * s.swipeLeft)
                return e = o,
                !1
        }
        )),
        Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , i = Math.ceil(e.slideCount / e.options.slidesToShow)
          , s = e.getNavigableIndexes().filter((function(t) {
            return t >= 0 && t < e.slideCount
        }
        ));
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i) {
            var n = s.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }),
            -1 !== n && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + n
            })
        }
        )),
        e.$dots.attr("role", "tablist").find("li").each((function(n) {
            var o = s[n];
            t(this).attr({
                role: "presentation"
            }),
            t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + n,
                "aria-controls": "slick-slide" + e.instanceUid + o,
                "aria-label": n + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }
        )).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var n = e.currentSlide, o = n + e.options.slidesToShow; n < o; n++)
            e.$slides.eq(n).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
        t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each((function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , s = t(this).attr("data-srcset")
                  , n = t(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, (function() {
                        s && (e.attr("srcset", s),
                        n && e.attr("sizes", n)),
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }
                        )),
                        o.$slider.trigger("lazyLoaded", [o, e, i])
                    }
                    ))
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, e, i])
                }
                ,
                r.src = i
            }
            ))
        }
        var i, s, n, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (s = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (s = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        n = Math.ceil(s + o.options.slidesToShow),
        !0 === o.options.fade && (s > 0 && s--,
        n <= o.slideCount && n++)),
        i = o.$slider.find(".slick-slide").slice(s, n),
        "anticipated" === o.options.lazyLoad)
            for (var r = s - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                r < 0 && (r = o.slideCount - 1),
                i = (i = i.add(l.eq(r))).add(l.eq(a)),
                r--,
                a++;
        e(i),
        o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]),
        i.animating = !1,
        i.slideCount > i.options.slidesToShow && i.setPosition(),
        i.swipeLeft = null,
        i.options.autoplay && i.autoPlay(),
        !0 === i.options.accessibility && (i.initADA(),
        i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, s, n, o, r, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(),
        s = i.attr("data-lazy"),
        n = i.attr("data-srcset"),
        o = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            n && (i.attr("srcset", n),
            o && i.attr("sizes", o)),
            i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, i, s]),
            a.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(e + 1)
            }
            ), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, i, s]),
            a.progressiveLazyLoad())
        }
        ,
        r.src = s) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, s, n = this;
        s = n.slideCount - n.options.slidesToShow,
        !n.options.infinite && n.currentSlide > s && (n.currentSlide = s),
        n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
        i = n.currentSlide,
        n.destroy(!0),
        t.extend(n, n.initials, {
            currentSlide: i
        }),
        n.init(),
        e || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, s, n = this, o = n.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window",
            o)
                if (s = n.breakpoints.length - 1,
                o.hasOwnProperty(e)) {
                    for (i = o[e].breakpoint; s >= 0; )
                        n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1),
                        s--;
                    n.breakpoints.push(i),
                    n.breakpointSettings[i] = o[e].settings
                }
            n.breakpoints.sort((function(t, e) {
                return n.options.mobileFirst ? t - e : e - t
            }
            ))
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout((function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }
        ), 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var s = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t,
        s.slideCount < 1 || t < 0 || t > s.slideCount - 1)
            return !1;
        s.unload(),
        !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, s = this, n = {};
        !0 === s.options.rtl && (t = -t),
        e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px",
        n[s.positionProp] = t,
        !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {},
        !1 === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")",
        s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        s.$slideTrack.css(n)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each((function(s, n) {
            e = i.slideWidth * s * -1,
            !0 === i.options.rtl ? t(n).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(n).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }
        )),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, s, n, o, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0],
        a = arguments[1],
        o = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0],
        n = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            r.options[s] = n;
        else if ("multiple" === o)
            t.each(s, (function(t, e) {
                r.options[t] = e
            }
            ));
        else if ("responsive" === o)
            for (i in n)
                if ("array" !== t.type(r.options.responsive))
                    r.options.responsive = [n[i]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(n[i])
                }
        a && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, s, n, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(t).addClass("slick-current"),
        !0 === o.options.centerMode) {
            var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2),
            !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = o.options.slidesToShow + t,
            i.slice(s - e + 1 + r, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(t).addClass("slick-center")
        } else
            t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow,
            s = !0 === o.options.infinite ? o.options.slidesToShow + t : t,
            o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(s - (o.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, s, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1),
        !0 === n.options.infinite && !1 === n.options.fade && (i = null,
        n.slideCount > n.options.slidesToShow)) {
            for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow,
            e = n.slideCount; e > n.slideCount - s; e -= 1)
                i = e - 1,
                t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < s + n.slideCount; e += 1)
                i = e,
                t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                t(this).attr("id", "")
            }
            ))
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , n = parseInt(s.attr("data-slick-index"));
        n || (n = 0),
        i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var s, n, o, r, a, l = null, c = this;
        if (e = e || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t),
            s = t,
            l = c.getLeft(s),
            r = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (s = c.currentSlide,
                !0 !== i ? c.animateSlide(r, (function() {
                    c.postSlide(s)
                }
                )) : c.postSlide(s));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (s = c.currentSlide,
                !0 !== i ? c.animateSlide(r, (function() {
                    c.postSlide(s)
                }
                )) : c.postSlide(s));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                n = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, n]),
                o = c.currentSlide,
                c.currentSlide = n,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(o),
                    c.fadeSlide(n, (function() {
                        c.postSlide(n)
                    }
                    ))) : c.postSlide(n),
                    void c.animateHeight();
                !0 !== i ? c.animateSlide(l, (function() {
                    c.postSlide(n)
                }
                )) : c.postSlide(n)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, s, n = this;
        return t = n.touchObject.startX - n.touchObject.curX,
        e = n.touchObject.startY - n.touchObject.curY,
        i = Math.atan2(e, t),
        (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)),
        s <= 45 && s >= 0 || s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i, s = this;
        if (s.dragging = !1,
        s.swiping = !1,
        s.scrolling)
            return s.scrolling = !1,
            !1;
        if (s.interrupted = !1,
        s.shouldClick = !(s.touchObject.swipeLength > 10),
        void 0 === s.touchObject.curX)
            return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]),
        s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
            case "left":
            case "down":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(),
                s.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(),
                s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e),
            s.touchObject = {},
            s.$slider.trigger("swipe", [s, i]))
        } else
            s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide),
            s.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, s, n, o, r, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX,
        a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
        i = a.swipeDirection(),
        void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        t.preventDefault()),
        n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        s = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = e + s * n : a.swipeLeft = e + s * (a.$list.height() / a.listWidth) * n,
        !0 === a.options.verticalSwiping && (a.swipeLeft = e + s * n),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
            return i.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        i.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, i, s = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = s.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof n || void 0 === n ? s[t].slick = new e(s[t],n) : i = s[t].slick[n].apply(s[t].slick, o),
            void 0 !== i)
                return i;
        return s
    }
}
)),
function(t) {
    "use strict";
    t.jscroll = {
        defaults: {
            debug: !1,
            autoTrigger: !0,
            autoTriggerUntil: !1,
            loadingHtml: "<small>Loading...</small>",
            loadingFunction: !1,
            padding: 0,
            nextSelector: "a:last",
            contentSelector: "",
            pagingSelector: "",
            callback: !1
        }
    };
    t.fn.jscroll = function(e) {
        return this.each((function() {
            var i = t(this)
              , s = i.data("jscroll");
            s && s.initialized || function(e, i) {
                var s, n = e.data("jscroll"), o = "function" == typeof i ? {
                    callback: i
                } : i, r = t.extend({}, t.jscroll.defaults, o, n || {}), a = "visible" === e.css("overflow-y"), l = e.find(r.nextSelector).first(), c = t(window), h = t("body"), d = a ? c : e, u = t.trim(l.prop("href") + " " + r.contentSelector), f = function() {
                    e.find(".jscroll-inner").length || e.contents().wrapAll('<div class="jscroll-inner" />')
                }, p = function(t) {
                    r.pagingSelector ? t.closest(r.pagingSelector).hide() : t.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide().length || t.wrap('<div class="jscroll-next-parent" />').parent().hide()
                }, m = function() {
                    return d.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()
                }, g = function() {
                    if (e.is(":visible")) {
                        f();
                        var t = e.find("div.jscroll-inner").first()
                          , i = e.data("jscroll")
                          , s = parseInt(e.css("borderTopWidth"), 10)
                          , n = isNaN(s) ? 0 : s
                          , o = parseInt(e.css("paddingTop"), 10) + n
                          , l = a ? d.scrollTop() : e.offset().top
                          , c = t.length ? t.offset().top : 0
                          , h = Math.ceil(l - c + d.height() + o);
                        if (!i.waiting && h + r.padding >= t.outerHeight())
                            return y("info", "jScroll:", t.outerHeight() - h, "from bottom. Loading next request..."),
                            v()
                    }
                }, _ = function() {
                    var i = e.find(r.nextSelector).first();
                    if (i.length)
                        if (r.autoTrigger && (!1 === r.autoTriggerUntil || 0 < r.autoTriggerUntil)) {
                            p(i);
                            var s = h.height() - e.offset().top;
                            (e.height() < s ? e.height() : s) <= (0 < e.offset().top - c.scrollTop() ? c.height() - (e.offset().top - t(window).scrollTop()) : c.height()) && g(),
                            d.unbind(".jscroll").bind("scroll.jscroll", (function() {
                                return g()
                            }
                            )),
                            0 < r.autoTriggerUntil && r.autoTriggerUntil--
                        } else
                            d.unbind(".jscroll"),
                            i.bind("click.jscroll", (function() {
                                return p(i),
                                v(),
                                !1
                            }
                            ))
                }, v = function() {
                    var i = e.find("div.jscroll-inner").first()
                      , s = e.data("jscroll");
                    return s.waiting = !0,
                    i.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading" id="jscroll-loading">' + r.loadingHtml + "</div>").promise().done((function() {
                        r.loadingFunction && r.loadingFunction()
                    }
                    )),
                    e.animate({
                        scrollTop: i.outerHeight()
                    }, 0, (function() {
                        var n = s.nextHref;
                        i.find("div.jscroll-added").last().load(n, (function(i, o) {
                            if ("error" === o)
                                return m();
                            var a, l = t(this).find(r.nextSelector).first();
                            s.waiting = !1,
                            s.nextHref = !!l.prop("href") && t.trim(l.prop("href") + " " + r.contentSelector),
                            t(".jscroll-next-parent", e).remove(),
                            (a = a || e.data("jscroll")) && a.nextHref ? _() : (y("warn", "jScroll: nextSelector not found - destroying"),
                            m()),
                            r.callback && r.callback.call(this, n),
                            y("dir", s)
                        }
                        ))
                    }
                    ))
                }, y = function(t) {
                    if (r.debug && "object" == typeof console && ("object" == typeof t || "function" == typeof console[t]))
                        if ("object" == typeof t) {
                            var e = [];
                            for (var i in t)
                                "function" == typeof console[i] ? (e = t[i].length ? t[i] : [t[i]],
                                console[i].apply(console, e)) : console.log.apply(console, e)
                        } else
                            console[t].apply(console, Array.prototype.slice.call(arguments, 1))
                };
                e.data("jscroll", t.extend({}, n, {
                    initialized: !0,
                    waiting: !1,
                    nextHref: u
                })),
                f(),
                (s = t(r.loadingHtml).filter("img").attr("src")) && ((new Image).src = s),
                _(),
                t.extend(e.jscroll, {
                    destroy: m
                })
            }(i, e)
        }
        ))
    }
}(jQuery),
function(t, e) {
    "use strict";
    function i(t, e) {
        for (var i in e)
            e.hasOwnProperty(i) && (t[i] = e[i])
    }
    function s(t) {
        return parseFloat(t) || 0
    }
    function n(t) {
        for (var e = 0; t; )
            e += t.offsetTop,
            t = t.offsetParent;
        return e
    }
    function o() {
        function i() {
            t.pageXOffset != d.left ? (d.top = t.pageYOffset,
            d.left = t.pageXOffset,
            p.refreshAll()) : t.pageYOffset != d.top && (d.top = t.pageYOffset,
            d.left = t.pageXOffset,
            u.forEach((function(t) {
                return t._recalcPosition()
            }
            )))
        }
        function s() {
            n = setInterval((function() {
                u.forEach((function(t) {
                    return t._fastCheck()
                }
                ))
            }
            ), 500)
        }
        if (!c) {
            c = !0,
            i(),
            t.addEventListener("scroll", i),
            t.addEventListener("resize", p.refreshAll),
            t.addEventListener("orientationchange", p.refreshAll);
            var n = void 0
              , o = void 0
              , r = void 0;
            "hidden"in e ? (o = "hidden",
            r = "visibilitychange") : "webkitHidden"in e && (o = "webkitHidden",
            r = "webkitvisibilitychange"),
            r ? (e[o] || s(),
            e.addEventListener(r, (function() {
                e[o] ? clearInterval(n) : s()
            }
            ))) : s()
        }
    }
    var r = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(t, s.key, s)
            }
        }
        return function(e, i, s) {
            return i && t(e.prototype, i),
            s && t(e, s),
            e
        }
    }()
      , a = !1
      , l = void 0 !== t;
    l && t.getComputedStyle ? function() {
        var t = e.createElement("div");
        ["", "-webkit-", "-moz-", "-ms-"].some((function(e) {
            try {
                t.style.position = e + "sticky"
            } catch (t) {}
            return "" != t.style.position
        }
        )) && (a = !0)
    }() : a = !0;
    var c = !1
      , h = "undefined" != typeof ShadowRoot
      , d = {
        top: null,
        left: null
    }
      , u = []
      , f = function() {
        function o(t) {
            if (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            !(t instanceof HTMLElement))
                throw new Error("First argument must be HTMLElement");
            if (u.some((function(e) {
                return e._node === t
            }
            )))
                throw new Error("Stickyfill is already applied to this node");
            this._node = t,
            this._stickyMode = null,
            this._active = !1,
            u.push(this),
            this.refresh()
        }
        return r(o, [{
            key: "refresh",
            value: function() {
                if (!a && !this._removed) {
                    this._active && this._deactivate();
                    var o = this._node
                      , r = getComputedStyle(o)
                      , l = {
                        position: r.position,
                        top: r.top,
                        display: r.display,
                        marginTop: r.marginTop,
                        marginBottom: r.marginBottom,
                        marginLeft: r.marginLeft,
                        marginRight: r.marginRight,
                        cssFloat: r.cssFloat
                    };
                    if (!isNaN(parseFloat(l.top)) && "table-cell" != l.display && "none" != l.display) {
                        this._active = !0;
                        var c = o.style.position;
                        "sticky" != r.position && "-webkit-sticky" != r.position || (o.style.position = "static");
                        var d = o.parentNode
                          , u = h && d instanceof ShadowRoot ? d.host : d
                          , f = o.getBoundingClientRect()
                          , p = u.getBoundingClientRect()
                          , m = getComputedStyle(u);
                        this._parent = {
                            node: u,
                            styles: {
                                position: u.style.position
                            },
                            offsetHeight: u.offsetHeight
                        },
                        this._offsetToWindow = {
                            left: f.left,
                            right: e.documentElement.clientWidth - f.right
                        },
                        this._offsetToParent = {
                            top: f.top - p.top - s(m.borderTopWidth),
                            left: f.left - p.left - s(m.borderLeftWidth),
                            right: -f.right + p.right - s(m.borderRightWidth)
                        },
                        this._styles = {
                            position: c,
                            top: o.style.top,
                            bottom: o.style.bottom,
                            left: o.style.left,
                            right: o.style.right,
                            width: o.style.width,
                            marginTop: o.style.marginTop,
                            marginLeft: o.style.marginLeft,
                            marginRight: o.style.marginRight
                        };
                        var g = s(l.top);
                        this._limits = {
                            start: f.top + t.pageYOffset - g,
                            end: p.top + t.pageYOffset + u.offsetHeight - s(m.borderBottomWidth) - o.offsetHeight - g - s(l.marginBottom)
                        };
                        var _ = m.position;
                        "absolute" != _ && "relative" != _ && (u.style.position = "relative"),
                        this._recalcPosition();
                        var v = this._clone = {};
                        v.node = e.createElement("div"),
                        i(v.node.style, {
                            width: f.right - f.left + "px",
                            height: f.bottom - f.top + "px",
                            marginTop: l.marginTop,
                            marginBottom: l.marginBottom,
                            marginLeft: l.marginLeft,
                            marginRight: l.marginRight,
                            cssFloat: l.cssFloat,
                            padding: 0,
                            border: 0,
                            borderSpacing: 0,
                            fontSize: "1em",
                            position: "static"
                        }),
                        d.insertBefore(v.node, o),
                        v.docOffsetTop = n(v.node)
                    }
                }
            }
        }, {
            key: "_recalcPosition",
            value: function() {
                if (this._active && !this._removed) {
                    var t = d.top <= this._limits.start ? "start" : d.top >= this._limits.end ? "end" : "middle";
                    if (this._stickyMode != t) {
                        switch (t) {
                        case "start":
                            i(this._node.style, {
                                position: "absolute",
                                left: this._offsetToParent.left + "px",
                                right: this._offsetToParent.right + "px",
                                top: this._offsetToParent.top + "px",
                                bottom: "auto",
                                width: "auto",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: 0
                            });
                            break;
                        case "middle":
                            i(this._node.style, {
                                position: "fixed",
                                left: this._offsetToWindow.left + "px",
                                right: this._offsetToWindow.right + "px",
                                top: this._styles.top,
                                bottom: "auto",
                                width: "auto",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: 0
                            });
                            break;
                        case "end":
                            i(this._node.style, {
                                position: "absolute",
                                left: this._offsetToParent.left + "px",
                                right: this._offsetToParent.right + "px",
                                top: "auto",
                                bottom: 0,
                                width: "auto",
                                marginLeft: 0,
                                marginRight: 0
                            })
                        }
                        this._stickyMode = t
                    }
                }
            }
        }, {
            key: "_fastCheck",
            value: function() {
                this._active && !this._removed && (Math.abs(n(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) && this.refresh()
            }
        }, {
            key: "_deactivate",
            value: function() {
                var t = this;
                this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node),
                delete this._clone,
                i(this._node.style, this._styles),
                delete this._styles,
                u.some((function(e) {
                    return e !== t && e._parent && e._parent.node === t._parent.node
                }
                )) || i(this._parent.node.style, this._parent.styles),
                delete this._parent,
                this._stickyMode = null,
                this._active = !1,
                delete this._offsetToWindow,
                delete this._offsetToParent,
                delete this._limits)
            }
        }, {
            key: "remove",
            value: function() {
                var t = this;
                this._deactivate(),
                u.some((function(e, i) {
                    if (e._node === t._node)
                        return u.splice(i, 1),
                        !0
                }
                )),
                this._removed = !0
            }
        }]),
        o
    }()
      , p = {
        stickies: u,
        Sticky: f,
        forceSticky: function() {
            a = !1,
            o(),
            this.refreshAll()
        },
        addOne: function(t) {
            if (!(t instanceof HTMLElement)) {
                if (!t.length || !t[0])
                    return;
                t = t[0]
            }
            for (var e = 0; e < u.length; e++)
                if (u[e]._node === t)
                    return u[e];
            return new f(t)
        },
        add: function(t) {
            if (t instanceof HTMLElement && (t = [t]),
            t.length) {
                for (var e = [], i = function(i) {
                    var s = t[i];
                    return s instanceof HTMLElement ? u.some((function(t) {
                        if (t._node === s)
                            return e.push(t),
                            !0
                    }
                    )) ? "continue" : void e.push(new f(s)) : (e.push(void 0),
                    "continue")
                }, s = 0; s < t.length; s++)
                    i(s);
                return e
            }
        },
        refreshAll: function() {
            u.forEach((function(t) {
                return t.refresh()
            }
            ))
        },
        removeOne: function(t) {
            if (!(t instanceof HTMLElement)) {
                if (!t.length || !t[0])
                    return;
                t = t[0]
            }
            u.some((function(e) {
                if (e._node === t)
                    return e.remove(),
                    !0
            }
            ))
        },
        remove: function(t) {
            if (t instanceof HTMLElement && (t = [t]),
            t.length)
                for (var e = function(e) {
                    var i = t[e];
                    u.some((function(t) {
                        if (t._node === i)
                            return t.remove(),
                            !0
                    }
                    ))
                }, i = 0; i < t.length; i++)
                    e(i)
        },
        removeAll: function() {
            for (; u.length; )
                u[0].remove()
        }
    };
    a || o(),
    "undefined" != typeof module && module.exports ? module.exports = p : l && (t.Stickyfill = p)
}(window, document),
function t(e, i, s) {
    function n(r, a) {
        if (!i[r]) {
            if (!e[r]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(r, !0);
                if (o)
                    return o(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var h = i[r] = {
                exports: {}
            };
            e[r][0].call(h.exports, (function(t) {
                var i = e[r][1][t];
                return n(i || t)
            }
            ), h, h.exports, t, e, i, s)
        }
        return i[r].exports
    }
    for (var o = "function" == typeof require && require, r = 0; r < s.length; r++)
        n(s[r]);
    return n
}({
    1: [function(t, e, i) {
        !function(i, s) {
            "use strict";
            var n = i.document
              , o = t("./src/utils/get-by-class")
              , r = t("./src/utils/extend")
              , a = t("./src/utils/index-of")
              , l = t("./src/utils/events")
              , c = t("./src/utils/to-string")
              , h = t("./src/utils/natural-sort")
              , d = t("./src/utils/classes")
              , u = t("./src/utils/get-attribute")
              , f = t("./src/utils/to-array")
              , p = function(e, i, m) {
                var g, _ = this, v = t("./src/item")(_), y = t("./src/add-async")(_);
                g = {
                    start: function() {
                        _.listClass = "list",
                        _.searchClass = "search",
                        _.sortClass = "sort",
                        _.page = 1e4,
                        _.i = 1,
                        _.items = [],
                        _.visibleItems = [],
                        _.matchingItems = [],
                        _.searched = !1,
                        _.filtered = !1,
                        _.searchColumns = s,
                        _.handlers = {
                            updated: []
                        },
                        _.plugins = {},
                        _.valueNames = [],
                        _.utils = {
                            getByClass: o,
                            extend: r,
                            indexOf: a,
                            events: l,
                            toString: c,
                            naturalSort: h,
                            classes: d,
                            getAttribute: u,
                            toArray: f
                        },
                        _.utils.extend(_, i),
                        _.listContainer = "string" == typeof e ? n.getElementById(e) : e,
                        _.listContainer && (_.list = o(_.listContainer, _.listClass, !0),
                        _.parse = t("./src/parse")(_),
                        _.templater = t("./src/templater")(_),
                        _.search = t("./src/search")(_),
                        _.filter = t("./src/filter")(_),
                        _.sort = t("./src/sort")(_),
                        this.handlers(),
                        this.items(),
                        _.update(),
                        this.plugins())
                    },
                    handlers: function() {
                        for (var t in _.handlers)
                            _[t] && _.on(t, _[t])
                    },
                    items: function() {
                        _.parse(_.list),
                        m !== s && _.add(m)
                    },
                    plugins: function() {
                        for (var t = 0; t < _.plugins.length; t++) {
                            var e = _.plugins[t];
                            _[e.name] = e,
                            e.init(_, p)
                        }
                    }
                },
                this.reIndex = function() {
                    _.items = [],
                    _.visibleItems = [],
                    _.matchingItems = [],
                    _.searched = !1,
                    _.filtered = !1,
                    _.parse(_.list)
                }
                ,
                this.toJSON = function() {
                    for (var t = [], e = 0, i = _.items.length; e < i; e++)
                        t.push(_.items[e].values());
                    return t
                }
                ,
                this.add = function(t, e) {
                    if (0 !== t.length) {
                        if (e)
                            return void y(t, e);
                        var i = []
                          , n = !1;
                        t[0] === s && (t = [t]);
                        for (var o = 0, r = t.length; o < r; o++) {
                            var a;
                            n = _.items.length > _.page,
                            a = new v(t[o],s,n),
                            _.items.push(a),
                            i.push(a)
                        }
                        return _.update(),
                        i
                    }
                }
                ,
                this.show = function(t, e) {
                    return this.i = t,
                    this.page = e,
                    _.update(),
                    _
                }
                ,
                this.remove = function(t, e, i) {
                    for (var s = 0, n = 0, o = _.items.length; n < o; n++)
                        _.items[n].values()[t] == e && (_.templater.remove(_.items[n], i),
                        _.items.splice(n, 1),
                        o--,
                        n--,
                        s++);
                    return _.update(),
                    s
                }
                ,
                this.get = function(t, e) {
                    for (var i = [], s = 0, n = _.items.length; s < n; s++) {
                        var o = _.items[s];
                        o.values()[t] == e && i.push(o)
                    }
                    return i
                }
                ,
                this.size = function() {
                    return _.items.length
                }
                ,
                this.clear = function() {
                    return _.templater.clear(),
                    _.items = [],
                    _
                }
                ,
                this.on = function(t, e) {
                    return _.handlers[t].push(e),
                    _
                }
                ,
                this.off = function(t, e) {
                    var i = _.handlers[t]
                      , s = a(i, e);
                    return s > -1 && i.splice(s, 1),
                    _
                }
                ,
                this.trigger = function(t) {
                    for (var e = _.handlers[t].length; e--; )
                        _.handlers[t][e](_);
                    return _
                }
                ,
                this.reset = {
                    filter: function() {
                        for (var t = _.items, e = t.length; e--; )
                            t[e].filtered = !1;
                        return _
                    },
                    search: function() {
                        for (var t = _.items, e = t.length; e--; )
                            t[e].found = !1;
                        return _
                    }
                },
                this.update = function() {
                    var t = _.items
                      , e = t.length;
                    _.visibleItems = [],
                    _.matchingItems = [],
                    _.templater.clear();
                    for (var i = 0; i < e; i++)
                        t[i].matching() && _.matchingItems.length + 1 >= _.i && _.visibleItems.length < _.page ? (t[i].show(),
                        _.visibleItems.push(t[i]),
                        _.matchingItems.push(t[i])) : t[i].matching() ? (_.matchingItems.push(t[i]),
                        t[i].hide()) : t[i].hide();
                    return _.trigger("updated"),
                    _
                }
                ,
                g.start()
            };
            "function" == typeof define && define.amd && define((function() {
                return p
            }
            )),
            e.exports = p,
            i.List = p
        }(window)
    }
    , {
        "./src/add-async": 2,
        "./src/filter": 3,
        "./src/item": 4,
        "./src/parse": 5,
        "./src/search": 6,
        "./src/sort": 7,
        "./src/templater": 8,
        "./src/utils/classes": 9,
        "./src/utils/events": 10,
        "./src/utils/extend": 11,
        "./src/utils/get-attribute": 12,
        "./src/utils/get-by-class": 13,
        "./src/utils/index-of": 14,
        "./src/utils/natural-sort": 15,
        "./src/utils/to-array": 16,
        "./src/utils/to-string": 17
    }],
    2: [function(t, e, i) {
        e.exports = function(t) {
            var e = function(i, s, n) {
                var o = i.splice(0, 50);
                n = (n = n || []).concat(t.add(o)),
                i.length > 0 ? setTimeout((function() {
                    e(i, s, n)
                }
                ), 1) : (t.update(),
                s(n))
            };
            return e
        }
    }
    , {}],
    3: [function(t, e, i) {
        e.exports = function(t) {
            return t.handlers.filterStart = t.handlers.filterStart || [],
            t.handlers.filterComplete = t.handlers.filterComplete || [],
            function(e) {
                if (t.trigger("filterStart"),
                t.i = 1,
                t.reset.filter(),
                void 0 === e)
                    t.filtered = !1;
                else {
                    t.filtered = !0;
                    for (var i = t.items, s = 0, n = i.length; s < n; s++) {
                        var o = i[s];
                        e(o) ? o.filtered = !0 : o.filtered = !1
                    }
                }
                return t.update(),
                t.trigger("filterComplete"),
                t.visibleItems
            }
        }
    }
    , {}],
    4: [function(t, e, i) {
        e.exports = function(t) {
            return function(e, i, s) {
                var n = this;
                this._values = {},
                this.found = !1,
                this.filtered = !1;
                this.values = function(e, i) {
                    if (void 0 === e)
                        return n._values;
                    for (var s in e)
                        n._values[s] = e[s];
                    !0 !== i && t.templater.set(n, n.values())
                }
                ,
                this.show = function() {
                    t.templater.show(n)
                }
                ,
                this.hide = function() {
                    t.templater.hide(n)
                }
                ,
                this.matching = function() {
                    return t.filtered && t.searched && n.found && n.filtered || t.filtered && !t.searched && n.filtered || !t.filtered && t.searched && n.found || !t.filtered && !t.searched
                }
                ,
                this.visible = function() {
                    return !(!n.elm || n.elm.parentNode != t.list)
                }
                ,
                function(e, i, s) {
                    if (void 0 === i)
                        s ? n.values(e, s) : n.values(e);
                    else {
                        n.elm = i;
                        var o = t.templater.get(n, e);
                        n.values(o)
                    }
                }(e, i, s)
            }
        }
    }
    , {}],
    5: [function(t, e, i) {
        e.exports = function(e) {
            var i = t("./item")(e)
              , s = function(t, s) {
                for (var n = 0, o = t.length; n < o; n++)
                    e.items.push(new i(s,t[n]))
            }
              , n = function(t, i) {
                var o = t.splice(0, 50);
                s(o, i),
                t.length > 0 ? setTimeout((function() {
                    n(t, i)
                }
                ), 1) : (e.update(),
                e.trigger("parseComplete"))
            };
            return e.handlers.parseComplete = e.handlers.parseComplete || [],
            function() {
                var t = function(t) {
                    for (var e = t.childNodes, i = [], s = 0, n = e.length; s < n; s++)
                        void 0 === e[s].data && i.push(e[s]);
                    return i
                }(e.list)
                  , i = e.valueNames;
                e.indexAsync ? n(t, i) : s(t, i)
            }
        }
    }
    , {
        "./item": 4
    }],
    6: [function(t, e, i) {
        e.exports = function(t) {
            var e, i, s, n, o = {
                resetList: function() {
                    t.i = 1,
                    t.templater.clear(),
                    n = void 0
                },
                setOptions: function(t) {
                    2 == t.length && t[1]instanceof Array ? i = t[1] : 2 == t.length && "function" == typeof t[1] ? (i = void 0,
                    n = t[1]) : 3 == t.length ? (i = t[1],
                    n = t[2]) : i = void 0
                },
                setColumns: function() {
                    0 !== t.items.length && void 0 === i && (i = void 0 === t.searchColumns ? o.toArray(t.items[0].values()) : t.searchColumns)
                },
                setSearchString: function(e) {
                    e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"),
                    s = e
                },
                toArray: function(t) {
                    var e = [];
                    for (var i in t)
                        e.push(i);
                    return e
                }
            }, r = {
                list: function() {
                    for (var e = 0, i = t.items.length; e < i; e++)
                        r.item(t.items[e])
                },
                item: function(t) {
                    t.found = !1;
                    for (var e = 0, s = i.length; e < s; e++)
                        if (r.values(t.values(), i[e]))
                            return void (t.found = !0)
                },
                values: function(i, n) {
                    return !!(i.hasOwnProperty(n) && (e = t.utils.toString(i[n]).toLowerCase(),
                    "" !== s && e.search(s) > -1))
                },
                reset: function() {
                    t.reset.search(),
                    t.searched = !1
                }
            }, a = function(e) {
                return t.trigger("searchStart"),
                o.resetList(),
                o.setSearchString(e),
                o.setOptions(arguments),
                o.setColumns(),
                "" === s ? r.reset() : (t.searched = !0,
                n ? n(s, i) : r.list()),
                t.update(),
                t.trigger("searchComplete"),
                t.visibleItems
            };
            return t.handlers.searchStart = t.handlers.searchStart || [],
            t.handlers.searchComplete = t.handlers.searchComplete || [],
            t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", (function(e) {
                var i = e.target || e.srcElement;
                "" === i.value && !t.searched || a(i.value)
            }
            )),
            t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", (function(t) {
                "" === (t.target || t.srcElement).value && a("")
            }
            )),
            a
        }
    }
    , {}],
    7: [function(t, e, i) {
        e.exports = function(t) {
            t.sortFunction = t.sortFunction || function(e, i, s) {
                return s.desc = "desc" == s.order,
                t.utils.naturalSort(e.values()[s.valueName], i.values()[s.valueName], s)
            }
            ;
            var e = {
                els: void 0,
                clear: function() {
                    for (var i = 0, s = e.els.length; i < s; i++)
                        t.utils.classes(e.els[i]).remove("asc"),
                        t.utils.classes(e.els[i]).remove("desc")
                },
                getOrder: function(e) {
                    var i = t.utils.getAttribute(e, "data-order");
                    return "asc" == i || "desc" == i ? i : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc"
                },
                getInSensitive: function(e, i) {
                    var s = t.utils.getAttribute(e, "data-insensitive");
                    i.insensitive = "false" !== s
                },
                setOrder: function(i) {
                    for (var s = 0, n = e.els.length; s < n; s++) {
                        var o = e.els[s];
                        if (t.utils.getAttribute(o, "data-sort") === i.valueName) {
                            var r = t.utils.getAttribute(o, "data-order");
                            "asc" == r || "desc" == r ? r == i.order && t.utils.classes(o).add(i.order) : t.utils.classes(o).add(i.order)
                        }
                    }
                }
            }
              , i = function() {
                t.trigger("sortStart");
                var i = {}
                  , s = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                s ? (i.valueName = t.utils.getAttribute(s, "data-sort"),
                e.getInSensitive(s, i),
                i.order = e.getOrder(s)) : ((i = arguments[1] || i).valueName = arguments[0],
                i.order = i.order || "asc",
                i.insensitive = void 0 === i.insensitive || i.insensitive),
                e.clear(),
                e.setOrder(i),
                i.sortFunction = i.sortFunction || t.sortFunction,
                t.items.sort((function(t, e) {
                    var s = "desc" === i.order ? -1 : 1;
                    return i.sortFunction(t, e, i) * s
                }
                )),
                t.update(),
                t.trigger("sortComplete")
            };
            return t.handlers.sortStart = t.handlers.sortStart || [],
            t.handlers.sortComplete = t.handlers.sortComplete || [],
            e.els = t.utils.getByClass(t.listContainer, t.sortClass),
            t.utils.events.bind(e.els, "click", i),
            t.on("searchStart", e.clear),
            t.on("filterStart", e.clear),
            i
        }
    }
    , {}],
    8: [function(t, e, i) {
        var s = function(t) {
            var e, i = this;
            this.clearSourceItem = function(e, i) {
                for (var s = 0, n = i.length; s < n; s++) {
                    var o;
                    if (i[s].data)
                        for (var r = 0, a = i[s].data.length; r < a; r++)
                            e.setAttribute("data-" + i[s].data[r], "");
                    else
                        i[s].attr && i[s].name ? (o = t.utils.getByClass(e, i[s].name, !0)) && o.setAttribute(i[s].attr, "") : (o = t.utils.getByClass(e, i[s], !0)) && (o.innerHTML = "");
                    o = void 0
                }
                return e
            }
            ,
            this.getItemSource = function(e) {
                if (void 0 === e) {
                    for (var i = t.list.childNodes, s = 0, n = i.length; s < n; s++)
                        if (void 0 === i[s].data)
                            return i[s].cloneNode(!0)
                } else {
                    if (/<tr[\s>]/g.exec(e)) {
                        var o = document.createElement("tbody");
                        return o.innerHTML = e,
                        o.firstChild
                    }
                    if (-1 !== e.indexOf("<")) {
                        var r = document.createElement("div");
                        return r.innerHTML = e,
                        r.firstChild
                    }
                    var a = document.getElementById(t.item);
                    if (a)
                        return a
                }
            }
            ,
            this.get = function(e, s) {
                i.create(e);
                for (var n = {}, o = 0, r = s.length; o < r; o++) {
                    var a;
                    if (s[o].data)
                        for (var l = 0, c = s[o].data.length; l < c; l++)
                            n[s[o].data[l]] = t.utils.getAttribute(e.elm, "data-" + s[o].data[l]);
                    else
                        s[o].attr && s[o].name ? (a = t.utils.getByClass(e.elm, s[o].name, !0),
                        n[s[o].name] = a ? t.utils.getAttribute(a, s[o].attr) : "") : (a = t.utils.getByClass(e.elm, s[o], !0),
                        n[s[o]] = a ? a.innerHTML : "");
                    a = void 0
                }
                return n
            }
            ,
            this.set = function(e, s) {
                var n = function(i, s) {
                    var n, o = function(e) {
                        for (var i = 0, s = t.valueNames.length; i < s; i++)
                            if (t.valueNames[i].data) {
                                for (var n = t.valueNames[i].data, o = 0, r = n.length; o < r; o++)
                                    if (n[o] === e)
                                        return {
                                            data: e
                                        }
                            } else {
                                if (t.valueNames[i].attr && t.valueNames[i].name && t.valueNames[i].name == e)
                                    return t.valueNames[i];
                                if (t.valueNames[i] === e)
                                    return e
                            }
                    }(i);
                    o && (o.data ? e.elm.setAttribute("data-" + o.data, s) : o.attr && o.name ? (n = t.utils.getByClass(e.elm, o.name, !0)) && n.setAttribute(o.attr, s) : (n = t.utils.getByClass(e.elm, o, !0)) && (n.innerHTML = s),
                    n = void 0)
                };
                if (!i.create(e))
                    for (var o in s)
                        s.hasOwnProperty(o) && n(o, s[o])
            }
            ,
            this.create = function(t) {
                if (void 0 !== t.elm)
                    return !1;
                if (void 0 === e)
                    throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
                var s = e.cloneNode(!0);
                return s.removeAttribute("id"),
                t.elm = s,
                i.set(t, t.values()),
                !0
            }
            ,
            this.remove = function(e) {
                e.elm.parentNode === t.list && t.list.removeChild(e.elm)
            }
            ,
            this.show = function(e) {
                i.create(e),
                t.list.appendChild(e.elm)
            }
            ,
            this.hide = function(e) {
                void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm)
            }
            ,
            this.clear = function() {
                if (t.list.hasChildNodes())
                    for (; t.list.childNodes.length >= 1; )
                        t.list.removeChild(t.list.firstChild)
            }
            ,
            (e = i.getItemSource(t.item)) && (e = i.clearSourceItem(e, t.valueNames))
        };
        e.exports = function(t) {
            return new s(t)
        }
    }
    , {}],
    9: [function(t, e, i) {
        function s(t) {
            if (!t || !t.nodeType)
                throw new Error("A DOM element reference is required");
            this.el = t,
            this.list = t.classList
        }
        var n = t("./index-of")
          , o = /\s+/
          , r = Object.prototype.toString;
        e.exports = function(t) {
            return new s(t)
        }
        ,
        s.prototype.add = function(t) {
            if (this.list)
                return this.list.add(t),
                this;
            var e = this.array();
            return ~n(e, t) || e.push(t),
            this.el.className = e.join(" "),
            this
        }
        ,
        s.prototype.remove = function(t) {
            if ("[object RegExp]" == r.call(t))
                return this.removeMatching(t);
            if (this.list)
                return this.list.remove(t),
                this;
            var e = this.array()
              , i = n(e, t);
            return ~i && e.splice(i, 1),
            this.el.className = e.join(" "),
            this
        }
        ,
        s.prototype.removeMatching = function(t) {
            for (var e = this.array(), i = 0; i < e.length; i++)
                t.test(e[i]) && this.remove(e[i]);
            return this
        }
        ,
        s.prototype.toggle = function(t, e) {
            return this.list ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t),
            this) : (void 0 !== e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t),
            this)
        }
        ,
        s.prototype.array = function() {
            var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(o);
            return "" === t[0] && t.shift(),
            t
        }
        ,
        s.prototype.has = s.prototype.contains = function(t) {
            return this.list ? this.list.contains(t) : !!~n(this.array(), t)
        }
    }
    , {
        "./index-of": 14
    }],
    10: [function(t, e, i) {
        var s = window.addEventListener ? "addEventListener" : "attachEvent"
          , n = window.removeEventListener ? "removeEventListener" : "detachEvent"
          , o = "addEventListener" !== s ? "on" : ""
          , r = t("./to-array");
        i.bind = function(t, e, i, n) {
            t = r(t);
            for (var a = 0; a < t.length; a++)
                t[a][s](o + e, i, n || !1)
        }
        ,
        i.unbind = function(t, e, i, s) {
            t = r(t);
            for (var a = 0; a < t.length; a++)
                t[a][n](o + e, i, s || !1)
        }
    }
    , {
        "./to-array": 16
    }],
    11: [function(t, e, i) {
        e.exports = function(t) {
            for (var e, i = Array.prototype.slice.call(arguments, 1), s = 0; e = i[s]; s++)
                if (e)
                    for (var n in e)
                        t[n] = e[n];
            return t
        }
    }
    , {}],
    12: [function(t, e, i) {
        e.exports = function(t, e) {
            var i = t.getAttribute && t.getAttribute(e) || null;
            if (!i)
                for (var s = t.attributes.length, n = 0; n < s; n++)
                    void 0 !== e[n] && e[n].nodeName === e && (i = e[n].nodeValue);
            return i
        }
    }
    , {}],
    13: [function(t, e, i) {
        e.exports = document.getElementsByClassName ? function(t, e, i) {
            return i ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e)
        }
        : document.querySelector ? function(t, e, i) {
            return e = "." + e,
            i ? t.querySelector(e) : t.querySelectorAll(e)
        }
        : function(t, e, i) {
            var s = [];
            null === t && (t = document);
            for (var n = t.getElementsByTagName("*"), o = n.length, r = new RegExp("(^|\\s)" + e + "(\\s|$)"), a = 0, l = 0; a < o; a++)
                if (r.test(n[a].className)) {
                    if (i)
                        return n[a];
                    s[l] = n[a],
                    l++
                }
            return s
        }
    }
    , {}],
    14: [function(t, e, i) {
        var s = [].indexOf;
        e.exports = function(t, e) {
            if (s)
                return t.indexOf(e);
            for (var i = 0; i < t.length; ++i)
                if (t[i] === e)
                    return i;
            return -1
        }
    }
    , {}],
    15: [function(t, e, i) {
        e.exports = function(t, e, i) {
            var s, n, o = /(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g, r = /^\s+|\s+$/g, a = /\s+/g, l = /^0x[0-9a-f]+$/i, c = /^0/, h = i || {}, d = function(t) {
                return (h.insensitive && ("" + t).toLowerCase() || "" + t).replace(r, "")
            }, u = d(t), f = d(e), p = u.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), m = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), g = parseInt(u.match(l), 16) || 1 !== p.length && Date.parse(u), _ = parseInt(f.match(l), 16) || g && f.match(/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/) && Date.parse(f) || null, v = function(t, e) {
                return (!t.match(c) || 1 == e) && parseFloat(t) || t.replace(a, " ").replace(r, "") || 0
            };
            if (_) {
                if (g < _)
                    return -1;
                if (g > _)
                    return 1
            }
            for (var y = 0, b = p.length, w = m.length, T = Math.max(b, w); y < T; y++) {
                if (s = v(p[y] || "", b),
                n = v(m[y] || "", w),
                isNaN(s) !== isNaN(n))
                    return isNaN(s) ? 1 : -1;
                if (/[^\x00-\x80]/.test(s + n) && s.localeCompare) {
                    var x = s.localeCompare(n);
                    return x / Math.abs(x)
                }
                if (s < n)
                    return -1;
                if (s > n)
                    return 1
            }
            return 0
        }
    }
    , {}],
    16: [function(t, e, i) {
        e.exports = function(t) {
            if (void 0 === t)
                return [];
            if (null === t)
                return [null];
            if (t === window)
                return [window];
            if ("string" == typeof t)
                return [t];
            if (function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }(t))
                return t;
            if ("number" != typeof t.length)
                return [t];
            if ("function" == typeof t && t instanceof Function)
                return [t];
            for (var e = [], i = 0; i < t.length; i++)
                (Object.prototype.hasOwnProperty.call(t, i) || i in t) && e.push(t[i]);
            return e.length ? e : []
        }
    }
    , {}],
    17: [function(t, e, i) {
        e.exports = function(t) {
            return (t = null === (t = void 0 === t ? "" : t) ? "" : t).toString()
        }
    }
    , {}]
}, {}, [1]),
function() {
    function t(e, i, s) {
        var n = t.resolve(e);
        if (null == n) {
            s = s || e,
            i = i || "root";
            var o = new Error('Failed to require "' + s + '" from "' + i + '"');
            throw o.path = s,
            o.parent = i,
            o.require = !0,
            o
        }
        var r = t.modules[n];
        if (!r._resolving && !r.exports) {
            var a = {
                exports: {}
            };
            a.client = a.component = !0,
            r._resolving = !0,
            r.call(this, a.exports, t.relative(n), a),
            delete r._resolving,
            r.exports = a.exports
        }
        return r.exports
    }
    t.modules = {},
    t.aliases = {},
    t.resolve = function(e) {
        "/" === e.charAt(0) && (e = e.slice(1));
        for (var i = [e, e + ".js", e + ".json", e + "/index.js", e + "/index.json"], s = 0; s < i.length; s++) {
            e = i[s];
            if (t.modules.hasOwnProperty(e))
                return e;
            if (t.aliases.hasOwnProperty(e))
                return t.aliases[e]
        }
    }
    ,
    t.normalize = function(t, e) {
        var i = [];
        if ("." != e.charAt(0))
            return e;
        t = t.split("/"),
        e = e.split("/");
        for (var s = 0; s < e.length; ++s)
            ".." == e[s] ? t.pop() : "." != e[s] && "" != e[s] && i.push(e[s]);
        return t.concat(i).join("/")
    }
    ,
    t.register = function(e, i) {
        t.modules[e] = i
    }
    ,
    t.alias = function(e, i) {
        if (!t.modules.hasOwnProperty(e))
            throw new Error('Failed to alias "' + e + '", it does not exist');
        t.aliases[i] = e
    }
    ,
    t.relative = function(e) {
        function i(s) {
            return t(i.resolve(s), e, s)
        }
        var s = t.normalize(e, "..");
        return i.resolve = function(i) {
            var n = i.charAt(0);
            if ("/" == n)
                return i.slice(1);
            if ("." == n)
                return t.normalize(s, i);
            var o = e.split("/")
              , r = function(t, e) {
                for (var i = t.length; i--; )
                    if (t[i] === e)
                        return i;
                return -1
            }(o, "deps") + 1;
            return r || (r = 0),
            o.slice(0, r + 1).join("/") + "/deps/" + i
        }
        ,
        i.exists = function(e) {
            return t.modules.hasOwnProperty(i.resolve(e))
        }
        ,
        i
    }
    ,
    t.register("component-classes/index.js", (function(t, e, i) {
        function s(t) {
            if (!t)
                throw new Error("A DOM element reference is required");
            this.el = t,
            this.list = t.classList
        }
        var n = e("indexof")
          , o = /\s+/
          , r = Object.prototype.toString;
        i.exports = function(t) {
            return new s(t)
        }
        ,
        s.prototype.add = function(t) {
            if (this.list)
                return this.list.add(t),
                this;
            var e = this.array();
            return ~n(e, t) || e.push(t),
            this.el.className = e.join(" "),
            this
        }
        ,
        s.prototype.remove = function(t) {
            if ("[object RegExp]" == r.call(t))
                return this.removeMatching(t);
            if (this.list)
                return this.list.remove(t),
                this;
            var e = this.array()
              , i = n(e, t);
            return ~i && e.splice(i, 1),
            this.el.className = e.join(" "),
            this
        }
        ,
        s.prototype.removeMatching = function(t) {
            for (var e = this.array(), i = 0; i < e.length; i++)
                t.test(e[i]) && this.remove(e[i]);
            return this
        }
        ,
        s.prototype.toggle = function(t, e) {
            return this.list ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t),
            this) : (void 0 !== e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t),
            this)
        }
        ,
        s.prototype.array = function() {
            var t = this.el.className.replace(/^\s+|\s+$/g, "").split(o);
            return "" === t[0] && t.shift(),
            t
        }
        ,
        s.prototype.has = s.prototype.contains = function(t) {
            return this.list ? this.list.contains(t) : !!~n(this.array(), t)
        }
    }
    )),
    t.register("component-event/index.js", (function(t) {
        var e = window.addEventListener ? "addEventListener" : "attachEvent"
          , i = window.removeEventListener ? "removeEventListener" : "detachEvent"
          , s = "addEventListener" !== e ? "on" : "";
        t.bind = function(t, i, n, o) {
            return t[e](s + i, n, o || !1),
            n
        }
        ,
        t.unbind = function(t, e, n, o) {
            return t[i](s + e, n, o || !1),
            n
        }
    }
    )),
    t.register("component-indexof/index.js", (function(t, e, i) {
        i.exports = function(t, e) {
            if (t.indexOf)
                return t.indexOf(e);
            for (var i = 0; i < t.length; ++i)
                if (t[i] === e)
                    return i;
            return -1
        }
    }
    )),
    t.register("list.pagination.js/index.js", (function(t, e, i) {
        var s = e("classes")
          , n = e("event");
        i.exports = function(t) {
            var e, i, o = function() {
                var n, o = i.matchingItems.length, l = i.i, c = i.page, h = Math.ceil(o / c), d = Math.ceil(l / c), u = t.innerWindow || 2, f = t.left || t.outerWindow || 0, p = t.right || t.outerWindow || 0;
                p = h - p,
                e.clear();
                for (var m = 1; h >= m; m++) {
                    var g = d === m ? "active" : "";
                    r.number(m, f, p, d, u) ? (n = e.add({
                        page: m,
                        dotted: !1
                    })[0],
                    g && s(n.elm).add(g),
                    a(n.elm, m, c)) : r.dotted(m, f, p, d, u, e.size()) && (n = e.add({
                        page: "...",
                        dotted: !0
                    })[0],
                    s(n.elm).add("disabled"))
                }
            }, r = {
                number: function(t, e, i, s, n) {
                    return this.left(t, e) || this.right(t, i) || this.innerWindow(t, s, n)
                },
                left: function(t, e) {
                    return e >= t
                },
                right: function(t, e) {
                    return t > e
                },
                innerWindow: function(t, e, i) {
                    return t >= e - i && e + i >= t
                },
                dotted: function(t, e, i, s, n, o) {
                    return this.dottedLeft(t, e, i, s, n) || this.dottedRight(t, e, i, s, n, o)
                },
                dottedLeft: function(t, e, i, s, n) {
                    return t == e + 1 && !this.innerWindow(t, s, n) && !this.right(t, i)
                },
                dottedRight: function(t, i, s, n, o, r) {
                    return !e.items[r - 1].values().dotted && (t == s && !this.innerWindow(t, n, o) && !this.right(t, s))
                }
            }, a = function(t, e, s) {
                n.bind(t, "click", (function() {
                    i.show((e - 1) * s + 1, s)
                }
                ))
            };
            return {
                init: function(s) {
                    i = s,
                    e = new List(i.listContainer.id,{
                        listClass: t.paginationClass || "pagination",
                        item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                        valueNames: ["page", "dotted"],
                        searchClass: "pagination-search-that-is-not-supposed-to-exist",
                        sortClass: "pagination-sort-that-is-not-supposed-to-exist"
                    }),
                    i.on("updated", o),
                    o()
                },
                name: (t = t || {}).name || "pagination"
            }
        }
    }
    )),
    t.alias("component-classes/index.js", "list.pagination.js/deps/classes/index.js"),
    t.alias("component-classes/index.js", "classes/index.js"),
    t.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js"),
    t.alias("component-event/index.js", "list.pagination.js/deps/event/index.js"),
    t.alias("component-event/index.js", "event/index.js"),
    t.alias("component-indexof/index.js", "list.pagination.js/deps/indexof/index.js"),
    t.alias("component-indexof/index.js", "indexof/index.js"),
    t.alias("list.pagination.js/index.js", "list.pagination.js/index.js"),
    "object" == typeof exports ? module.exports = t("list.pagination.js") : "function" == typeof define && define.amd ? define((function() {
        return t("list.pagination.js")
    }
    )) : this.ListPagination = t("list.pagination.js")
}(),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
}(this, (function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s)
        }
    }
    function i(t, i, s) {
        return i && e(t.prototype, i),
        s && e(t, s),
        t
    }
    function s(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
    function n(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            i.push.apply(i, s)
        }
        return i
    }
    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(i), !0).forEach((function(e) {
                s(t, e, i[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && l(t, e)
    }
    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function c(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c(t) : e
    }
    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, s = a(t);
            if (e) {
                var n = a(this).constructor;
                i = Reflect.construct(s, arguments, n)
            } else
                i = s.apply(this, arguments);
            return h(this, i)
        }
    }
    function u(t, e, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var s = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)); )
                    ;
                return t
            }(t, e);
            if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function f(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var i = []
                  , s = !0
                  , n = !1
                  , o = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value),
                    !e || i.length !== e); s = !0)
                        ;
                } catch (t) {
                    n = !0,
                    o = t
                } finally {
                    try {
                        s || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw o
                    }
                }
                return i
            }
        }(t, e) || m(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(t) {
        return function(t) {
            if (Array.isArray(t))
                return g(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || m(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function m(t, e) {
        if (t) {
            if ("string" == typeof t)
                return g(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(t, e) : void 0
        }
    }
    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++)
            s[i] = t[i];
        return s
    }
    var _ = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        initPosition: {
            x: 0,
            y: 0
        },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: .1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
        },
        smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    }
      , v = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
            Object.assign(this, _, i),
            this.smartphone = _.smartphone,
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            this.tablet = _.tablet,
            i.tablet && Object.assign(this.tablet, i.tablet),
            this.namespace = "locomotive",
            this.html = document.documentElement,
            this.windowHeight = window.innerHeight,
            this.windowWidth = window.innerWidth,
            this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            },
            this.els = {},
            this.currentElements = {},
            this.listeners = {},
            this.hasScrollTicking = !1,
            this.hasCallEventSet = !1,
            this.checkScroll = this.checkScroll.bind(this),
            this.checkResize = this.checkResize.bind(this),
            this.checkEvent = this.checkEvent.bind(this),
            this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            },
            this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
            this.isMobile && (this.direction = this[this.context].direction),
            "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1)
        }
        return i(e, [{
            key: "init",
            value: function() {
                this.initEvents()
            }
        }, {
            key: "checkScroll",
            value: function() {
                this.dispatchScroll()
            }
        }, {
            key: "checkResize",
            value: function() {
                var t = this;
                this.resizeTick || (this.resizeTick = !0,
                requestAnimationFrame((function() {
                    t.resize(),
                    t.resizeTick = !1
                }
                )))
            }
        }, {
            key: "resize",
            value: function() {}
        }, {
            key: "checkContext",
            value: function() {
                if (this.reloadOnContextChange) {
                    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                    this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                    var t = this.context;
                    this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                    t != this.context && ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                }
            }
        }, {
            key: "initEvents",
            value: function() {
                var t = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                this.setScrollTo = this.setScrollTo.bind(this),
                this.scrollToEls.forEach((function(e) {
                    e.addEventListener("click", t.setScrollTo, !1)
                }
                ))
            }
        }, {
            key: "setScrollTo",
            value: function(t) {
                t.preventDefault(),
                this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                    offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                })
            }
        }, {
            key: "addElements",
            value: function() {}
        }, {
            key: "detectElements",
            value: function(t) {
                var e = this
                  , i = this.instance.scroll.y
                  , s = i + this.windowHeight
                  , n = this.instance.scroll.x
                  , o = n + this.windowWidth;
                Object.entries(this.els).forEach((function(r) {
                    var a = f(r, 2)
                      , l = a[0]
                      , c = a[1];
                    if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, l) : s >= c.top && i < c.bottom && e.setInView(c, l)),
                    c && c.inView)
                        if ("horizontal" === e.direction) {
                            var h = c.right - c.left;
                            c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth),
                            (o < c.left || n > c.right) && e.setOutOfView(c, l)
                        } else {
                            var d = c.bottom - c.top;
                            c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight),
                            (s < c.top || i > c.bottom) && e.setOutOfView(c, l)
                        }
                }
                )),
                this.hasScrollTicking = !1
            }
        }, {
            key: "setInView",
            value: function(t, e) {
                this.els[e].inView = !0,
                t.el.classList.add(t.class),
                this.currentElements[e] = t,
                t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                t.repeat || (this.els[e].call = !1))
            }
        }, {
            key: "setOutOfView",
            value: function(t, e) {
                var i = this;
                this.els[e].inView = !1,
                Object.keys(this.currentElements).forEach((function(t) {
                    t === e && delete i.currentElements[t]
                }
                )),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class)
            }
        }, {
            key: "dispatchCall",
            value: function(t, e) {
                this.callWay = e,
                this.callValue = t.call.split(",").map((function(t) {
                    return t.trim()
                }
                )),
                this.callObj = t,
                1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i)
            }
        }, {
            key: "dispatchScroll",
            value: function() {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t)
            }
        }, {
            key: "setEvents",
            value: function(t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e),
                1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                "call" === t && (this.hasCallEventSet = !0,
                this.detectElements(!0))
            }
        }, {
            key: "unsetEvents",
            value: function(t, e) {
                if (this.listeners[t]) {
                    var i = this.listeners[t]
                      , s = i.indexOf(e);
                    s < 0 || (i.splice(s, 1),
                    0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
            }
        }, {
            key: "checkEvent",
            value: function(t) {
                var e = this
                  , i = t.type.replace(this.namespace, "")
                  , s = this.listeners[i];
                s && 0 !== s.length && s.forEach((function(t) {
                    switch (i) {
                    case "scroll":
                        return t(e.instance);
                    case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                    default:
                        return t()
                    }
                }
                ))
            }
        }, {
            key: "startScroll",
            value: function() {}
        }, {
            key: "stopScroll",
            value: function() {}
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach((function(e) {
                    t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                }
                )),
                this.listeners = {},
                this.scrollToEls.forEach((function(e) {
                    e.removeEventListener("click", t.setScrollTo, !1)
                }
                )),
                this.html.classList.remove(this.initClass)
            }
        }]),
        e
    }()
      , y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function b(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var w = b((function(t, e) {
        t.exports = {
            polyfill: function() {
                var t = window
                  , e = document;
                if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                    var i, s = t.HTMLElement || t.Element, n = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy,
                        elementScroll: s.prototype.scroll || a,
                        scrollIntoView: s.prototype.scrollIntoView
                    }, o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, r = (i = t.navigator.userAgent,
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                    t.scroll = t.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }
                    ,
                    t.scrollBy = function() {
                        void 0 !== arguments[0] && (l(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }
                    ,
                    s.prototype.scroll = s.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== l(arguments[0])) {
                                var t = arguments[0].left
                                  , e = arguments[0].top;
                                p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                    throw new SyntaxError("Value could not be converted");
                                n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }
                    ,
                    s.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }
                    ,
                    s.prototype.scrollIntoView = function() {
                        if (!0 !== l(arguments[0])) {
                            var i = u(this)
                              , s = i.getBoundingClientRect()
                              , o = this.getBoundingClientRect();
                            i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top),
                            "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })) : t.scrollBy({
                                left: o.left,
                                top: o.top,
                                behavior: "smooth"
                            })
                        } else
                            n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }
                function a(t, e) {
                    this.scrollLeft = t,
                    this.scrollTop = e
                }
                function l(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                        return !0;
                    if ("object" == typeof t && "smooth" === t.behavior)
                        return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function c(t, e) {
                    return "Y" === e ? t.clientHeight + r < t.scrollHeight : "X" === e ? t.clientWidth + r < t.scrollWidth : void 0
                }
                function h(e, i) {
                    var s = t.getComputedStyle(e, null)["overflow" + i];
                    return "auto" === s || "scroll" === s
                }
                function d(t) {
                    var e = c(t, "Y") && h(t, "Y")
                      , i = c(t, "X") && h(t, "X");
                    return e || i
                }
                function u(t) {
                    for (; t !== e.body && !1 === d(t); )
                        t = t.parentNode || t.host;
                    return t
                }
                function f(e) {
                    var i, s, n, r, a = (o() - e.startTime) / 468;
                    r = a = a > 1 ? 1 : a,
                    i = .5 * (1 - Math.cos(Math.PI * r)),
                    s = e.startX + (e.x - e.startX) * i,
                    n = e.startY + (e.y - e.startY) * i,
                    e.method.call(e.scrollable, s, n),
                    s === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                }
                function p(i, s, r) {
                    var l, c, h, d, u = o();
                    i === e.body ? (l = t,
                    c = t.scrollX || t.pageXOffset,
                    h = t.scrollY || t.pageYOffset,
                    d = n.scroll) : (l = i,
                    c = i.scrollLeft,
                    h = i.scrollTop,
                    d = a),
                    f({
                        scrollable: l,
                        method: d,
                        startTime: u,
                        startX: c,
                        startY: h,
                        x: s,
                        y: r
                    })
                }
            }
        }
    }
    ))
      , T = (w.polyfill,
    function(e) {
        r(n, e);
        var s = d(n);
        function n() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t(this, n),
            (e = s.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0)),
            window.addEventListener("scroll", e.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = w,
            window.smoothscrollPolyfill.polyfill()),
            e
        }
        return i(n, [{
            key: "init",
            value: function() {
                this.instance.scroll.y = window.pageYOffset,
                this.addElements(),
                this.detectElements(),
                u(a(n.prototype), "init", this).call(this)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this;
                u(a(n.prototype), "checkScroll", this).call(this),
                this.getDirection && this.addDirection(),
                this.getSpeed && (this.addSpeed(),
                this.speedTs = Date.now()),
                this.instance.scroll.y = window.pageYOffset,
                Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                    t.detectElements()
                }
                )),
                this.hasScrollTicking = !0))
            }
        }, {
            key: "addDirection",
            value: function() {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function() {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "resize",
            value: function() {
                Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                this.updateElements())
            }
        }, {
            key: "addElements",
            value: function() {
                var t = this;
                this.els = {},
                this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                    e.getBoundingClientRect();
                    var s, n, o, r = e.dataset[t.name + "Class"] || t.class, a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i, l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, c = e.dataset[t.name + "Repeat"], h = e.dataset[t.name + "Call"], d = e.dataset[t.name + "Target"], u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                    s = u.top + t.instance.scroll.y,
                    n = u.left + t.instance.scroll.x;
                    var f = s + o.offsetHeight
                      , p = n + o.offsetWidth;
                    c = "false" != c && (null != c || t.repeat);
                    var m = t.getRelativeOffset(l)
                      , g = {
                        el: e,
                        targetEl: o,
                        id: a,
                        class: r,
                        top: s += m[0],
                        bottom: f -= m[1],
                        left: n,
                        right: p,
                        offset: l,
                        progress: 0,
                        repeat: c,
                        inView: !1,
                        call: h
                    };
                    t.els[a] = g,
                    e.classList.contains(r) && t.setInView(t.els[a], a)
                }
                ))
            }
        }, {
            key: "updateElements",
            value: function() {
                var t = this;
                Object.entries(this.els).forEach((function(e) {
                    var i = f(e, 2)
                      , s = i[0]
                      , n = i[1]
                      , o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                      , r = o + n.targetEl.offsetHeight
                      , a = t.getRelativeOffset(n.offset);
                    t.els[s].top = o + a[0],
                    t.els[s].bottom = r - a[1]
                }
                )),
                this.hasScrollTicking = !1
            }
        }, {
            key: "getRelativeOffset",
            value: function(t) {
                var e = [0, 0];
                if (t)
                    for (var i = 0; i < t.length; i++)
                        "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                return e
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = parseInt(e.offset) || 0
                  , s = !!e.callback && e.callback;
                if ("string" == typeof t) {
                    if ("top" === t)
                        t = this.html;
                    else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                var n = function() {
                    return parseInt(window.pageYOffset) === parseInt(i)
                };
                if (s) {
                    if (n())
                        return void s();
                    var o = function t() {
                        n() && (window.removeEventListener("scroll", t),
                        s())
                    };
                    window.addEventListener("scroll", o)
                }
                window.scrollTo({
                    top: i,
                    behavior: 0 === e.duration ? "auto" : "smooth"
                })
            }
        }, {
            key: "update",
            value: function() {
                this.addElements(),
                this.detectElements()
            }
        }, {
            key: "destroy",
            value: function() {
                u(a(n.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1)
            }
        }]),
        n
    }(v))
      , x = Object.getOwnPropertySymbols
      , k = Object.prototype.hasOwnProperty
      , S = Object.prototype.propertyIsEnumerable;
    function C(t) {
        if (null == t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var A = function() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, i = 0; i < 10; i++)
                e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                return e[t]
            }
            )).join(""))
                return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                s[t] = t
            }
            )),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, s, n = C(t), o = 1; o < arguments.length; o++) {
            for (var r in i = Object(arguments[o]))
                k.call(i, r) && (n[r] = i[r]);
            if (x) {
                s = x(i);
                for (var a = 0; a < s.length; a++)
                    S.call(i, s[a]) && (n[s[a]] = i[s[a]])
            }
        }
        return n
    }
    ;
    function O() {}
    O.prototype = {
        on: function(t, e, i) {
            var s = this.e || (this.e = {});
            return (s[t] || (s[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var s = this;
            function n() {
                s.off(t, n),
                e.apply(i, arguments)
            }
            return n._ = e,
            this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++)
                i[s].fn.apply(i[s].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , s = i[t]
              , n = [];
            if (s && e)
                for (var o = 0, r = s.length; o < r; o++)
                    s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
            return n.length ? i[t] = n : delete i[t],
            this
        }
    };
    var P = O
      , E = b((function(t, e) {
        (function() {
            (null !== e ? e : this).Lethargy = function() {
                function t(t, e, i, s) {
                    this.stability = null != t ? Math.abs(t) : 8,
                    this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                    this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
                    this.delay = null != s ? s : 150,
                    this.lastUpDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.lastDownDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.deltasTimestamp = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this)
                }
                return t.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    e > 0 ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1)) : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
                }
                ,
                t.prototype.isInertia = function(t) {
                    var e, i, s, n, o, r, a;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability),
                    i = e.slice(this.stability, 2 * this.stability),
                    a = s.reduce((function(t, e) {
                        return t + e
                    }
                    )),
                    o = i.reduce((function(t, e) {
                        return t + e
                    }
                    )),
                    r = a / s.length,
                    n = o / i.length,
                    Math.abs(r) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                }
                ,
                t.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }
                ,
                t.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }
                ,
                t
            }()
        }
        ).call(y)
    }
    ))
      , M = "onwheel"in document
      , D = "onmousewheel"in document
      , L = "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch
      , j = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1
      , I = !!window.navigator.msPointerEnabled
      , $ = "onkeydown"in document
      , R = navigator.userAgent.indexOf("Firefox") > -1
      , z = Object.prototype.toString
      , N = Object.prototype.hasOwnProperty;
    function F(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var H = E.Lethargy
      , B = "virtualscroll"
      , W = X;
    function X(t) {
        !function(t) {
            if (!t)
                return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var i in t)
                    N.call(t, i) && "function" == typeof t[i] && "[object Function]" == z.call(t[i]) && e.push(i);
            for (var s = 0; s < e.length; s++) {
                var n = e[s];
                t[n] = F(t[n], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
        this.el = window,
        t && t.el && (this.el = t.el,
        delete t.el),
        this.options = A({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t),
        this.options.limitInertia && (this._lethargy = new H),
        this._emitter = new P,
        this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        },
        this.touchStartX = null,
        this.touchStartY = null,
        this.bodyTouchAction = null,
        void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    function q(t, e, i) {
        return (1 - i) * t + i * e
    }
    function Y(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t)
              , s = i.transform || i.webkitTransform || i.mozTransform
              , n = s.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/),
            e.x = n ? parseFloat(n[1].split(", ")[4]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
            e
        }
    }
    function U(t) {
        for (var e = []; t && t !== document; t = t.parentNode)
            e.push(t);
        return e
    }
    X.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX,
        e.y += e.deltaY,
        this._emitter.emit(B, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }
    ,
    X.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
            i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
            R && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier,
            i.deltaY *= e.firefoxMultiplier),
            i.deltaX *= e.mouseMultiplier,
            i.deltaY *= e.mouseMultiplier,
            this._notify(t)
        }
    }
    ,
    X.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
            e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
            this._notify(t)
        }
    }
    ,
    X.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX,
        this.touchStartY = e.pageY
    }
    ,
    X.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event
          , s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier,
        i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier,
        this.touchStartX = s.pageX,
        this.touchStartY = s.pageY,
        this._notify(t)
    }
    ,
    X.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
        case 37:
        case 38:
            e.deltaY = this.options.keyStep;
            break;
        case 39:
        case 40:
            e.deltaY = -this.options.keyStep;
            break;
        case t.shiftKey:
            e.deltaY = i;
            break;
        case 32:
            e.deltaY = -i;
            break;
        default:
            return
        }
        this._notify(t)
    }
    ,
    X.prototype._bind = function() {
        M && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        D && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
        L && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
        this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
        I && j && (this.bodyTouchAction = document.body.style.msTouchAction,
        document.body.style.msTouchAction = "none",
        this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        $ && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }
    ,
    X.prototype._unbind = function() {
        M && this.el.removeEventListener("wheel", this._onWheel),
        D && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        L && (this.el.removeEventListener("touchstart", this._onTouchStart),
        this.el.removeEventListener("touchmove", this._onTouchMove)),
        I && j && (document.body.style.msTouchAction = this.bodyTouchAction,
        this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        $ && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }
    ,
    X.prototype.on = function(t, e) {
        this._emitter.on(B, t, e);
        var i = this._emitter.e;
        i && i[B] && 1 === i[B].length && this._bind()
    }
    ,
    X.prototype.off = function(t, e) {
        this._emitter.off(B, t, e);
        var i = this._emitter.e;
        (!i[B] || i[B].length <= 0) && this._unbind()
    }
    ,
    X.prototype.reset = function() {
        var t = this._event;
        t.x = 0,
        t.y = 0
    }
    ,
    X.prototype.destroy = function() {
        this._emitter.off(),
        this._unbind()
    }
    ;
    var V = "function" == typeof Float32Array;
    function Q(t, e) {
        return 1 - 3 * e + 3 * t
    }
    function K(t, e) {
        return 3 * e - 6 * t
    }
    function G(t) {
        return 3 * t
    }
    function Z(t, e, i) {
        return ((Q(e, i) * t + K(e, i)) * t + G(e)) * t
    }
    function J(t, e, i) {
        return 3 * Q(e, i) * t * t + 2 * K(e, i) * t + G(e)
    }
    function tt(t) {
        return t
    }
    var et = function(t, e, i, s) {
        if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && i === s)
            return tt;
        for (var n = V ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
            n[o] = Z(.1 * o, t, i);
        function r(e) {
            for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o)
                s += .1;
            --o;
            var r = s + (e - n[o]) / (n[o + 1] - n[o]) * .1
              , a = J(r, t, i);
            return a >= .001 ? function(t, e, i, s) {
                for (var n = 0; n < 4; ++n) {
                    var o = J(e, i, s);
                    if (0 === o)
                        return e;
                    e -= (Z(e, i, s) - t) / o
                }
                return e
            }(e, r, t, i) : 0 === a ? r : function(t, e, i, s, n) {
                var o, r, a = 0;
                do {
                    (o = Z(r = e + (i - e) / 2, s, n) - t) > 0 ? i = r : e = r
                } while (Math.abs(o) > 1e-7 && ++a < 10);
                return r
            }(e, s, s + .1, t, i)
        }
        return function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : Z(r(t), e, s)
        }
    }
      , it = function(e) {
        r(n, e);
        var s = d(n);
        function n() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t(this, n),
            history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0),
            (e = s.call(this, i)).inertia && (e.lerp = .1 * e.inertia),
            e.isScrolling = !1,
            e.isDraggingScrollbar = !1,
            e.isTicking = !1,
            e.hasScrollTicking = !1,
            e.parallaxElements = {},
            e.stop = !1,
            e.scrollbarContainer = i.scrollbarContainer,
            e.checkKey = e.checkKey.bind(c(e)),
            window.addEventListener("keydown", e.checkKey, !1),
            e
        }
        return i(n, [{
            key: "init",
            value: function() {
                var t = this;
                this.html.classList.add(this.smoothClass),
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                this.instance = o({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance),
                this.vs = new W({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0
                }),
                this.vs.on((function(e) {
                    t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                        t.updateDelta(e),
                        t.isScrolling || t.startScrolling()
                    }
                    ))
                }
                )),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                u(a(n.prototype), "init", this).call(this)
            }
        }, {
            key: "setScrollLimit",
            value: function() {
                if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                "horizontal" === this.direction) {
                    for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                        t += e[i].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth
                }
            }
        }, {
            key: "startScrolling",
            value: function() {
                this.startScrollTs = Date.now(),
                this.isScrolling = !0,
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            }
        }, {
            key: "stopScrolling",
            value: function() {
                cancelAnimationFrame(this.checkScrollRaf),
                this.startScrollTs = void 0,
                this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                this.scrollToRaf = null),
                this.isScrolling = !1,
                this.instance.scroll.y = Math.round(this.instance.scroll.y),
                this.html.classList.remove(this.scrollingClass)
            }
        }, {
            key: "checkKey",
            value: function(t) {
                var e = this;
                if (this.stop)
                    9 == t.keyCode && requestAnimationFrame((function() {
                        e.html.scrollTop = 0,
                        document.body.scrollTop = 0,
                        e.html.scrollLeft = 0,
                        document.body.scrollLeft = 0
                    }
                    ));
                else {
                    switch (t.keyCode) {
                    case 9:
                        requestAnimationFrame((function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            e.html.scrollLeft = 0,
                            document.body.scrollLeft = 0,
                            e.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            })
                        }
                        ));
                        break;
                    case 38:
                        this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                        break;
                    case 40:
                        this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                        break;
                    case 33:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case 34:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case 36:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case 35:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case 32:
                        this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                        break;
                    default:
                        return
                    }
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }
        }, {
            key: "isActiveElementScrollSensitive",
            value: function() {
                return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                        return t.checkScroll()
                    }
                    )),
                    this.hasScrollTicking = !0),
                    this.updateScroll();
                    var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                      , s = Date.now() - this.startScrollTs;
                    if (!this.animatingScroll && s > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                    Object.entries(this.sections).forEach((function(i) {
                        var s = f(i, 2)
                          , n = (s[0],
                        s[1]);
                        n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]),
                        n.inView || (n.inView = !0,
                        n.el.style.opacity = 1,
                        n.el.style.pointerEvents = "all",
                        n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1,
                        n.el.style.opacity = 0,
                        n.el.style.pointerEvents = "none",
                        n.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                        t.transform(n.el, 0, 0))
                    }
                    )),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.speedTs = Date.now()),
                    this.detectElements(),
                    this.transformElements(),
                    this.hasScrollbar) {
                        var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                    }
                    u(a(n.prototype), "checkScroll", this).call(this),
                    this.hasScrollTicking = !1
                }
            }
        }, {
            key: "resize",
            value: function() {
                this.windowHeight = window.innerHeight,
                this.windowWidth = window.innerWidth,
                this.checkContext(),
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                },
                this.update()
            }
        }, {
            key: "updateDelta",
            value: function(t) {
                var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY,
                this.instance.delta[this.directionAxis] -= e * this.multiplier,
                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
        }, {
            key: "updateScroll",
            value: function(t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
        }, {
            key: "addDirection",
            value: function() {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
        }, {
            key: "addSpeed",
            value: function() {
                this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "initScrollBar",
            value: function() {
                if (this.scrollbar = document.createElement("span"),
                this.scrollbarThumb = document.createElement("span"),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                this.getScrollBar = this.getScrollBar.bind(this),
                this.releaseScrollBar = this.releaseScrollBar.bind(this),
                this.moveScrollBar = this.moveScrollBar.bind(this),
                this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "reinitScrollBar",
            value: function() {
                if (this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "destroyScrollBar",
            value: function() {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove()
            }
        }, {
            key: "getScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !0,
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass)
            }
        }, {
            key: "releaseScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !1,
                this.isScrolling && this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass)
            }
        }, {
            key: "moveScrollBar",
            value: function(t) {
                var e = this;
                this.isDraggingScrollbar && requestAnimationFrame((function() {
                    var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100
                      , s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                    s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                }
                ))
            }
        }, {
            key: "addElements",
            value: function() {
                var t = this;
                this.els = {},
                this.parallaxElements = {},
                this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                    var s, n, o, r = U(e), a = Object.entries(t.sections).map((function(t) {
                        var e = f(t, 2);
                        return e[0],
                        e[1]
                    }
                    )).find((function(t) {
                        return r.includes(t.el)
                    }
                    )), l = e.dataset[t.name + "Class"] || t.class, c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i, h = e.dataset[t.name + "Repeat"], d = e.dataset[t.name + "Call"], u = e.dataset[t.name + "Position"], p = e.dataset[t.name + "Delay"], m = e.dataset[t.name + "Direction"], g = "string" == typeof e.dataset[t.name + "Sticky"], _ = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, v = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, y = e.dataset[t.name + "Target"], b = (o = void 0 !== y ? document.querySelector("".concat(y)) : e).getBoundingClientRect();
                    null === a || a.inView ? (s = b.top + t.instance.scroll.y - Y(o).y,
                    n = b.left + t.instance.scroll.x - Y(o).x) : (s = b.top - Y(a.el).y - Y(o).y,
                    n = b.left - Y(a.el).x - Y(o).x);
                    var w = s + o.offsetHeight
                      , T = n + o.offsetWidth
                      , x = {
                        x: (T - n) / 2 + n,
                        y: (w - s) / 2 + s
                    };
                    if (g) {
                        var k = e.getBoundingClientRect()
                          , S = k.top
                          , C = k.left
                          , A = {
                            x: C - n,
                            y: S - s
                        };
                        s += window.innerHeight,
                        n += window.innerWidth,
                        w = S + o.offsetHeight - e.offsetHeight - A[t.directionAxis],
                        x = {
                            x: ((T = C + o.offsetWidth - e.offsetWidth - A[t.directionAxis]) - n) / 2 + n,
                            y: (w - s) / 2 + s
                        }
                    }
                    h = "false" != h && (null != h || t.repeat);
                    var O = [0, 0];
                    if (v)
                        if ("horizontal" === t.direction) {
                            for (var P = 0; P < v.length; P++)
                                "string" == typeof v[P] ? v[P].includes("%") ? O[P] = parseInt(v[P].replace("%", "") * t.windowWidth / 100) : O[P] = parseInt(v[P]) : O[P] = v[P];
                            n += O[0],
                            T -= O[1]
                        } else {
                            for (P = 0; P < v.length; P++)
                                "string" == typeof v[P] ? v[P].includes("%") ? O[P] = parseInt(v[P].replace("%", "") * t.windowHeight / 100) : O[P] = parseInt(v[P]) : O[P] = v[P];
                            s += O[0],
                            w -= O[1]
                        }
                    var E = {
                        el: e,
                        id: c,
                        class: l,
                        section: a,
                        top: s,
                        middle: x,
                        bottom: w,
                        left: n,
                        right: T,
                        offset: v,
                        progress: 0,
                        repeat: h,
                        inView: !1,
                        call: d,
                        speed: _,
                        delay: p,
                        position: u,
                        target: o,
                        direction: m,
                        sticky: g
                    };
                    t.els[c] = E,
                    e.classList.contains(l) && t.setInView(t.els[c], c),
                    (!1 !== _ || g) && (t.parallaxElements[c] = E)
                }
                ))
            }
        }, {
            key: "addSections",
            value: function() {
                var t = this;
                this.sections = {};
                var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                0 === e.length && (e = [this.el]),
                e.forEach((function(e, i) {
                    var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i
                      , n = e.getBoundingClientRect()
                      , o = {
                        x: n.left - 1.5 * window.innerWidth - Y(e).x,
                        y: n.top - 1.5 * window.innerHeight - Y(e).y
                    }
                      , r = {
                        x: o.x + n.width + 2 * window.innerWidth,
                        y: o.y + n.height + 2 * window.innerHeight
                    }
                      , a = "string" == typeof e.dataset[t.name + "Persistent"];
                    e.setAttribute("data-scroll-section-id", s);
                    var l = {
                        el: e,
                        offset: o,
                        limit: r,
                        inView: !1,
                        persistent: a,
                        id: s
                    };
                    t.sections[s] = l
                }
                ))
            }
        }, {
            key: "transform",
            value: function(t, e, i, s) {
                var n;
                if (s) {
                    var o = Y(t)
                      , r = q(o.x, e, s)
                      , a = q(o.y, i, s);
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r, ",").concat(a, ",0,1)")
                } else
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                t.style.webkitTransform = n,
                t.style.msTransform = n,
                t.style.transform = n
            }
        }, {
            key: "transformElements",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , s = this.instance.scroll.x + this.windowWidth
                  , n = this.instance.scroll.y + this.windowHeight
                  , o = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach((function(r) {
                    var a = f(r, 2)
                      , l = (a[0],
                    a[1])
                      , c = !1;
                    if (t && (c = 0),
                    l.inView || i)
                        switch (l.position) {
                        case "top":
                        case "left":
                            c = e.instance.scroll[e.directionAxis] * -l.speed;
                            break;
                        case "elementTop":
                            c = (n - l.top) * -l.speed;
                            break;
                        case "bottom":
                            c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                            break;
                        case "elementLeft":
                            c = (s - l.left) * -l.speed;
                            break;
                        case "right":
                            c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * l.speed;
                            break;
                        default:
                            c = (o[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                        }
                    l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
                    !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
                }
                ))
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = parseInt(i.offset) || 0
                  , n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration)
                  , o = i.easing || [.25, 0, .35, 1]
                  , r = !!i.disableLerp
                  , a = !!i.callback && i.callback;
                if (o = et.apply(void 0, p(o)),
                "string" == typeof t) {
                    if ("top" === t)
                        t = 0;
                    else if ("bottom" === t)
                        t = this.instance.limit.y;
                    else if ("left" === t)
                        t = 0;
                    else if ("right" === t)
                        t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                    var l = U(t).includes(this.el);
                    if (!l)
                        return;
                    var c = t.getBoundingClientRect()
                      , h = c.top
                      , d = c.left
                      , u = U(t)
                      , m = u.find((function(t) {
                        return Object.entries(e.sections).map((function(t) {
                            var e = f(t, 2);
                            return e[0],
                            e[1]
                        }
                        )).find((function(e) {
                            return e.el == t
                        }
                        ))
                    }
                    ))
                      , g = 0;
                    g = m ? Y(m)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                    s = "horizontal" === this.direction ? d + s - g : h + s - g
                } else
                    s = t + s;
                var _ = parseFloat(this.instance.delta[this.directionAxis])
                  , v = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis]))
                  , y = v - _
                  , b = function(t) {
                    r ? "horizontal" === e.direction ? e.setScroll(_ + y * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, _ + y * t) : e.instance.delta[e.directionAxis] = _ + y * t
                };
                this.animatingScroll = !0,
                this.stopScrolling(),
                this.startScrolling();
                var w = Date.now()
                  , T = function t() {
                    var i = (Date.now() - w) / n;
                    i > 1 ? (b(1),
                    e.animatingScroll = !1,
                    0 == n && e.update(),
                    a && a()) : (e.scrollToRaf = requestAnimationFrame(t),
                    b(o(i)))
                };
                T()
            }
        }, {
            key: "update",
            value: function() {
                this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0)
            }
        }, {
            key: "startScroll",
            value: function() {
                this.stop = !1
            }
        }, {
            key: "stopScroll",
            value: function() {
                this.stop = !0
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance = o(o({}, this.instance), {}, {
                    scroll: {
                        x: t,
                        y: e
                    },
                    delta: {
                        x: t,
                        y: e
                    },
                    speed: 0
                })
            }
        }, {
            key: "destroy",
            value: function() {
                u(a(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1)
            }
        }]),
        n
    }(v);
    return function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
            this.options = i,
            Object.assign(this, _, i),
            this.smartphone = _.smartphone,
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            this.tablet = _.tablet,
            i.tablet && Object.assign(this.tablet, i.tablet),
            this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
            this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
            this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
            this.init()
        }
        return i(e, [{
            key: "init",
            value: function() {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new it(this.options) : this.scroll = new T(this.options),
                this.scroll.init(),
                window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length)
                      , e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]),
        e
    }()
}
)),
/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).enquire = t()
    }
}((function() {
    return function t(e, i, s) {
        function n(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(r, !0);
                    if (o)
                        return o(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var h = i[r] = {
                    exports: {}
                };
                e[r][0].call(h.exports, (function(t) {
                    var i = e[r][1][t];
                    return n(i || t)
                }
                ), h, h.exports, t, e, i, s)
            }
            return i[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < s.length; r++)
            n(s[r]);
        return n
    }({
        1: [function(t, e, i) {
            var s = t(3)
              , n = t(4).each;
            function o(t, e) {
                this.query = t,
                this.isUnconditional = e,
                this.handlers = [],
                this.mql = window.matchMedia(t);
                var i = this;
                this.listener = function(t) {
                    i.mql = t.currentTarget || t,
                    i.assess()
                }
                ,
                this.mql.addListener(this.listener)
            }
            o.prototype = {
                constuctor: o,
                addHandler: function(t) {
                    var e = new s(t);
                    this.handlers.push(e),
                    this.matches() && e.on()
                },
                removeHandler: function(t) {
                    var e = this.handlers;
                    n(e, (function(i, s) {
                        if (i.equals(t))
                            return i.destroy(),
                            !e.splice(s, 1)
                    }
                    ))
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    n(this.handlers, (function(t) {
                        t.destroy()
                    }
                    )),
                    this.mql.removeListener(this.listener),
                    this.handlers.length = 0
                },
                assess: function() {
                    var t = this.matches() ? "on" : "off";
                    n(this.handlers, (function(e) {
                        e[t]()
                    }
                    ))
                }
            },
            e.exports = o
        }
        , {
            3: 3,
            4: 4
        }],
        2: [function(t, e, i) {
            var s = t(1)
              , n = t(4)
              , o = n.each
              , r = n.isFunction
              , a = n.isArray;
            function l() {
                if (!window.matchMedia)
                    throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {},
                this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            l.prototype = {
                constructor: l,
                register: function(t, e, i) {
                    var n = this.queries
                      , l = i && this.browserIsIncapable;
                    return n[t] || (n[t] = new s(t,l)),
                    r(e) && (e = {
                        match: e
                    }),
                    a(e) || (e = [e]),
                    o(e, (function(e) {
                        r(e) && (e = {
                            match: e
                        }),
                        n[t].addHandler(e)
                    }
                    )),
                    this
                },
                unregister: function(t, e) {
                    var i = this.queries[t];
                    return i && (e ? i.removeHandler(e) : (i.clear(),
                    delete this.queries[t])),
                    this
                }
            },
            e.exports = l
        }
        , {
            1: 1,
            4: 4
        }],
        3: [function(t, e, i) {
            function s(t) {
                this.options = t,
                !t.deferSetup && this.setup()
            }
            s.prototype = {
                constructor: s,
                setup: function() {
                    this.options.setup && this.options.setup(),
                    this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(),
                    this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(t) {
                    return this.options === t || this.options.match === t
                }
            },
            e.exports = s
        }
        , {}],
        4: [function(t, e, i) {
            e.exports = {
                isFunction: function(t) {
                    return "function" == typeof t
                },
                isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.apply(t)
                },
                each: function(t, e) {
                    for (var i = 0, s = t.length; i < s && !1 !== e(t[i], i); i++)
                        ;
                }
            }
        }
        , {}],
        5: [function(t, e, i) {
            var s = t(2);
            e.exports = new s
        }
        , {
            2: 2
        }]
    }, {}, [5])(5)
}
)),
function(t, e) {
    var i, s;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self,
    i = t.Cookies,
    (s = t.Cookies = e()).noConflict = function() {
        return t.Cookies = i,
        s
    }
    )
}(this, (function() {
    "use strict";
    function t(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i)
                t[s] = i[s]
        }
        return t
    }
    var e = function e(i, s) {
        function n(e, n, o) {
            if ("undefined" != typeof document) {
                "number" == typeof (o = t({}, s, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                o.expires && (o.expires = o.expires.toUTCString()),
                e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var r = "";
                for (var a in o)
                    o[a] && (r += "; " + a,
                    !0 !== o[a] && (r += "=" + o[a].split(";")[0]));
                return document.cookie = e + "=" + i.write(n, e) + r
            }
        }
        return Object.create({
            set: n,
            get: function(t) {
                if ("undefined" != typeof document && (!arguments.length || t)) {
                    for (var e = document.cookie ? document.cookie.split("; ") : [], s = {}, n = 0; n < e.length; n++) {
                        var o = e[n].split("=")
                          , r = o.slice(1).join("=");
                        try {
                            var a = decodeURIComponent(o[0]);
                            if (s[a] = i.read(r, a),
                            t === a)
                                break
                        } catch (t) {}
                    }
                    return t ? s[t] : s
                }
            },
            remove: function(e, i) {
                n(e, "", t({}, i, {
                    expires: -1
                }))
            },
            withAttributes: function(i) {
                return e(this.converter, t({}, this.attributes, i))
            },
            withConverter: function(i) {
                return e(t({}, this.converter, i), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(s)
            },
            converter: {
                value: Object.freeze(i)
            }
        })
    }({
        read: function(t) {
            return '"' === t[0] && (t = t.slice(1, -1)),
            t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(t) {
            return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });
    return e
}
)),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && t(jQuery)
}((function(t) {
    "use strict";
    function e(t) {
        i = t.pageX,
        s = t.pageY
    }
    var i, s, n = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    }, o = 0, r = function(t, n, o, a) {
        if (Math.sqrt((o.pX - i) * (o.pX - i) + (o.pY - s) * (o.pY - s)) < a.sensitivity)
            return n.off(o.event, e),
            delete o.timeoutId,
            o.isActive = !0,
            t.pageX = i,
            t.pageY = s,
            delete o.pX,
            delete o.pY,
            a.over.apply(n[0], [t]);
        o.pX = i,
        o.pY = s,
        o.timeoutId = setTimeout((function() {
            r(t, n, o, a)
        }
        ), a.interval)
    };
    t.fn.hoverIntent = function(i, s, a) {
        var l = o++
          , c = t.extend({}, n);
        function h(i) {
            var s = t.extend({}, i)
              , n = t(this)
              , o = n.data("hoverIntent");
            o || n.data("hoverIntent", o = {});
            var a = o[l];
            a || (o[l] = a = {
                id: l
            }),
            a.timeoutId && (a.timeoutId = clearTimeout(a.timeoutId));
            var h = a.event = "mousemove.hoverIntent.hoverIntent" + l;
            if ("mouseenter" === i.type) {
                if (a.isActive)
                    return;
                a.pX = s.pageX,
                a.pY = s.pageY,
                n.off(h, e).on(h, e),
                a.timeoutId = setTimeout((function() {
                    r(s, n, a, c)
                }
                ), c.interval)
            } else {
                if (!a.isActive)
                    return;
                n.off(h, e),
                a.timeoutId = setTimeout((function() {
                    !function(t, e, i, s) {
                        var n = e.data("hoverIntent");
                        n && delete n[i.id],
                        s.apply(e[0], [t])
                    }(s, n, a, c.out)
                }
                ), c.timeout)
            }
        }
        return t.isPlainObject(i) ? (c = t.extend(c, i),
        t.isFunction(c.out) || (c.out = c.over)) : c = t.isFunction(s) ? t.extend(c, {
            over: i,
            out: s,
            selector: a
        }) : t.extend(c, {
            over: i,
            out: i,
            selector: s
        }),
        this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        }, c.selector)
    }
}
));
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var loco_scroll, _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
function isIE(t) {
    return (t = t || navigator.userAgent).indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1 || t.indexOf("Edge/") > -1
}
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
    "use strict";
    var t, e, i, s, n, o, r, a, l, c, h, d, u, f;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var s = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }
          , n = function(t, e, i) {
            var s, n, o = t.cycle;
            for (s in o)
                n = o[s],
                t[s] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
            delete t.cycle
        }
          , o = function(t) {
            if ("function" == typeof t)
                return t;
            var e = "object" == typeof t ? t : {
                each: t
            }
              , i = e.ease
              , s = e.from || 0
              , n = e.base || 0
              , o = {}
              , r = isNaN(s)
              , a = e.axis
              , l = {
                center: .5,
                end: 1
            }[s] || 0;
            return function(t, c, h) {
                var d, u, f, p, m, g, _, v, y, b = (h || e).length, w = o[b];
                if (!w) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                        for (_ = -1 / 0; _ < (_ = h[y++].getBoundingClientRect().left) && y < b; )
                            ;
                        y--
                    }
                    for (w = o[b] = [],
                    d = r ? Math.min(y, b) * l - .5 : s % y,
                    u = r ? b * l / y - .5 : s / y | 0,
                    _ = 0,
                    v = 1 / 0,
                    g = 0; g < b; g++)
                        f = g % y - d,
                        p = u - (g / y | 0),
                        w[g] = m = a ? Math.abs("y" === a ? p : f) : Math.sqrt(f * f + p * p),
                        m > _ && (_ = m),
                        m < v && (v = m);
                    w.max = _ - v,
                    w.min = v,
                    w.v = b = e.amount || e.each * (y > b ? b - 1 : a ? "y" === a ? b / y : y : Math.max(y, b / y)) || 0,
                    w.b = b < 0 ? n - b : n
                }
                return b = (w[t] - w.min) / w.max,
                w.b + (i ? i.getRatio(b) : b) * w.v
            }
        }
          , r = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._repeat && this._uncache(!0),
            this.render = r.prototype.render
        }
          , a = 1e-8
          , l = i._internals
          , c = l.isSelector
          , h = l.isArray
          , d = r.prototype = i.to({}, .1, {})
          , u = [];
        r.version = "2.1.3",
        d.constructor = r,
        d.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        r.distribute = o,
        d.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        d.updateTo = function(t, e) {
            var s, n = this, o = n.ratio, r = n.vars.immediateRender || t.immediateRender;
            for (s in e && n._startTime < n._timeline._time && (n._startTime = n._timeline._time,
            n._uncache(!1),
            n._gc ? n._enabled(!0, !1) : n._timeline.insert(n, n._startTime - n._delay)),
            t)
                n.vars[s] = t[s];
            if (n._initted || r)
                if (e)
                    n._initted = !1,
                    r && n.render(0, !0, !0);
                else if (n._gc && n._enabled(!0, !1),
                n._notifyPluginsOfEnabled && n._firstPT && i._onPluginEvent("_onDisable", n),
                n._time / n._duration > .998) {
                    var a = n._totalTime;
                    n.render(0, !0, !1),
                    n._initted = !1,
                    n.render(a, !0, !1)
                } else if (n._initted = !1,
                n._init(),
                n._time > 0 || r)
                    for (var l, c = 1 / (1 - o), h = n._firstPT; h; )
                        l = h.s + h.c,
                        h.c *= c,
                        h.s = l - h.c,
                        h = h._next;
            return n
        }
        ,
        d.render = function(t, e, s) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, o, r, c, h, d, u, f, p, m = this, g = m._dirty ? m.totalDuration() : m._totalDuration, _ = m._time, v = m._totalTime, y = m._cycle, b = m._duration, w = m._rawPrevTime;
            if (t >= g - a && t >= 0 ? (m._totalTime = g,
            m._cycle = m._repeat,
            m._yoyo && 0 != (1 & m._cycle) ? (m._time = 0,
            m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0) : (m._time = b,
            m.ratio = m._ease._calcEnd ? m._ease.getRatio(1) : 1),
            m._reversed || (n = !0,
            o = "onComplete",
            s = s || m._timeline.autoRemoveChildren),
            0 === b && (m._initted || !m.vars.lazy || s) && (m._startTime === m._timeline._duration && (t = 0),
            (w < 0 || t <= 0 && t >= -1e-8 || w === a && "isPause" !== m.data) && w !== t && (s = !0,
            w > a && (o = "onReverseComplete")),
            m._rawPrevTime = f = !e || t || w === t ? t : a)) : t < a ? (m._totalTime = m._time = m._cycle = 0,
            m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0,
            (0 !== v || 0 === b && w > 0) && (o = "onReverseComplete",
            n = m._reversed),
            t > -1e-8 ? t = 0 : t < 0 && (m._active = !1,
            0 === b && (m._initted || !m.vars.lazy || s) && (w >= 0 && (s = !0),
            m._rawPrevTime = f = !e || t || w === t ? t : a)),
            m._initted || (s = !0)) : (m._totalTime = m._time = t,
            0 !== m._repeat && (c = b + m._repeatDelay,
            m._cycle = m._totalTime / c >> 0,
            0 !== m._cycle && m._cycle === m._totalTime / c && v <= t && m._cycle--,
            m._time = m._totalTime - m._cycle * c,
            m._yoyo && 0 != (1 & m._cycle) && (m._time = b - m._time,
            (p = m._yoyoEase || m.vars.yoyoEase) && (m._yoyoEase || (!0 !== p || m._initted ? m._yoyoEase = p = !0 === p ? m._ease : p instanceof Ease ? p : Ease.map[p] : (p = m.vars.ease,
            m._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p,m.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)),
            m.ratio = p ? 1 - p.getRatio((b - m._time) / b) : 0)),
            m._time > b ? m._time = b : m._time < 0 && (m._time = 0)),
            m._easeType && !p ? (h = m._time / b,
            (1 === (d = m._easeType) || 3 === d && h >= .5) && (h = 1 - h),
            3 === d && (h *= 2),
            1 === (u = m._easePower) ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h),
            m.ratio = 1 === d ? 1 - h : 2 === d ? h : m._time / b < .5 ? h / 2 : 1 - h / 2) : p || (m.ratio = m._ease.getRatio(m._time / b))),
            _ !== m._time || s || y !== m._cycle) {
                if (!m._initted) {
                    if (m._init(),
                    !m._initted || m._gc)
                        return;
                    if (!s && m._firstPT && (!1 !== m.vars.lazy && m._duration || m.vars.lazy && !m._duration))
                        return m._time = _,
                        m._totalTime = v,
                        m._rawPrevTime = w,
                        m._cycle = y,
                        l.lazyTweens.push(m),
                        void (m._lazy = [t, e]);
                    !m._time || n || p ? n && this._ease._calcEnd && !p && (m.ratio = m._ease.getRatio(0 === m._time ? 0 : 1)) : m.ratio = m._ease.getRatio(m._time / b)
                }
                for (!1 !== m._lazy && (m._lazy = !1),
                m._active || !m._paused && m._time !== _ && t >= 0 && (m._active = !0),
                0 === v && (2 === m._initted && t > 0 && m._init(),
                m._startAt && (t >= 0 ? m._startAt.render(t, !0, s) : o || (o = "_dummyGS")),
                m.vars.onStart && (0 === m._totalTime && 0 !== b || e || m._callback("onStart"))),
                r = m._firstPT; r; )
                    r.f ? r.t[r.p](r.c * m.ratio + r.s) : r.t[r.p] = r.c * m.ratio + r.s,
                    r = r._next;
                m._onUpdate && (t < 0 && m._startAt && m._startTime && m._startAt.render(t, !0, s),
                e || (m._totalTime !== v || o) && m._callback("onUpdate")),
                m._cycle !== y && (e || m._gc || m.vars.onRepeat && m._callback("onRepeat")),
                o && (m._gc && !s || (t < 0 && m._startAt && !m._onUpdate && m._startTime && m._startAt.render(t, !0, s),
                n && (m._timeline.autoRemoveChildren && m._enabled(!1, !1),
                m._active = !1),
                !e && m.vars[o] && m._callback(o),
                0 === b && m._rawPrevTime === a && f !== a && (m._rawPrevTime = 0)))
            } else
                v !== m._totalTime && m._onUpdate && (e || m._callback("onUpdate"))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t,e,s)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, a, l, d, f, p) {
            var m, g, _, v, y = [], b = o(a.stagger || l), w = a.cycle, T = (a.startAt || u).cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t),
            c(t) && (t = s(t))),
            m = (t = t || []).length - 1,
            _ = 0; _ <= m; _++) {
                for (v in g = {},
                a)
                    g[v] = a[v];
                if (w && (n(g, t, _),
                null != g.duration && (e = g.duration,
                delete g.duration)),
                T) {
                    for (v in T = g.startAt = {},
                    a.startAt)
                        T[v] = a.startAt[v];
                    n(g.startAt, t, _)
                }
                g.delay = b(_, t[_], t) + (g.delay || 0),
                _ === m && d && (g.onComplete = function() {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                    d.apply(p || a.callbackScope || this, f || u)
                }
                ),
                y[_] = new r(t[_],e,g)
            }
            return y
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, s, n, o, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, o, a)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, o, a, l) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, o, a, l)
        }
        ,
        r.delayedCall = function(t, e, i, s, n) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var f = function(t, e) {
            for (var s = [], n = 0, o = t._first; o; )
                o instanceof i ? s[n++] = o : (e && (s[n++] = o),
                n = (s = s.concat(f(o, e))).length),
                o = o._next;
            return s
        }
          , p = r.getAllTweens = function(e) {
            return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, s, n) {
            null == i && (i = !0),
            null == s && (s = !0);
            var o, r, a, l = p(0 != n), c = l.length, h = i && s && n;
            for (a = 0; a < c; a++)
                r = l[a],
                (h || r instanceof e || (o = r.target === r.vars.onComplete) && s || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var n, o, a, d, u, f = l.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                c(t) && (t = s(t)),
                h(t))
                    for (d = t.length; --d > -1; )
                        r.killChildTweensOf(t[d], e);
                else {
                    for (a in n = [],
                    f)
                        for (o = f[a].target.parentNode; o; )
                            o === t && (n = n.concat(f[a].tweens)),
                            o = o.parentNode;
                    for (u = n.length,
                    d = 0; d < u; d++)
                        e && n[d].totalTime(n[d].totalDuration()),
                        n[d]._enabled(!1, !1)
                }
            }
        }
        ;
        var m = function(t, i, s, n) {
            i = !1 !== i,
            s = !1 !== s;
            for (var o, r, a = p(n = !1 !== n), l = i && s && n, c = a.length; --c > -1; )
                r = a[c],
                (l || r instanceof e || (o = r.target === r.vars.onComplete) && s || i && !o) && r.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            m(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            m(!1, t, e, i)
        }
        ,
        r.globalTimeScale = function(e) {
            var s = t._rootTimeline
              , n = i.ticker.time;
            return arguments.length ? (e = e || a,
            s._startTime = n - (n - s._startTime) * s._timeScale / e,
            s = t._rootFramesTimeline,
            n = i.ticker.frame,
            s._startTime = n - (n - s._startTime) * s._timeScale / e,
            s._timeScale = t._rootTimeline._timeScale = e,
            e) : s._timeScale
        }
        ,
        d.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
        }
        ,
        d.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        d.time = function(t, e) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , s = this._cycle
              , n = s * (i + this._repeatDelay);
            return t > i && (t = i),
            this.totalTime(this._yoyo && 1 & s ? i - t + n : this._repeat ? t + n : t, e)
        }
        ,
        d.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        d.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        d.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        d.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        d.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }
    ), !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var s = function(t) {
            e.call(this, t);
            var i, s, n = this, o = n.vars;
            for (s in n._labels = {},
            n.autoRemoveChildren = !!o.autoRemoveChildren,
            n.smoothChildTiming = !!o.smoothChildTiming,
            n._sortChildren = !0,
            n._onUpdate = o.onUpdate,
            o)
                i = o[s],
                l(i) && -1 !== i.join("").indexOf("{self}") && (o[s] = n._swapSelfInParams(i));
            l(o.tweens) && n.add(o.tweens, 0, o.align, o.stagger)
        }
          , n = 1e-8
          , o = i._internals
          , r = s._internals = {}
          , a = o.isSelector
          , l = o.isArray
          , c = o.lazyTweens
          , h = o.lazyRender
          , d = _gsScope._gsDefine.globals
          , u = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , f = function(t, e, i) {
            var s, n, o = t.cycle;
            for (s in o)
                n = o[s],
                t[s] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
            delete t.cycle
        }
          , p = r.pauseCallback = function() {}
          , m = function(t, e, i, s) {
            var n = "immediateRender";
            return n in e || (e[n] = !(i && !1 === i[n] || s)),
            e
        }
          , g = function(t) {
            if ("function" == typeof t)
                return t;
            var e = "object" == typeof t ? t : {
                each: t
            }
              , i = e.ease
              , s = e.from || 0
              , n = e.base || 0
              , o = {}
              , r = isNaN(s)
              , a = e.axis
              , l = {
                center: .5,
                end: 1
            }[s] || 0;
            return function(t, c, h) {
                var d, u, f, p, m, g, _, v, y, b = (h || e).length, w = o[b];
                if (!w) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                        for (_ = -1 / 0; _ < (_ = h[y++].getBoundingClientRect().left) && y < b; )
                            ;
                        y--
                    }
                    for (w = o[b] = [],
                    d = r ? Math.min(y, b) * l - .5 : s % y,
                    u = r ? b * l / y - .5 : s / y | 0,
                    _ = 0,
                    v = 1 / 0,
                    g = 0; g < b; g++)
                        f = g % y - d,
                        p = u - (g / y | 0),
                        w[g] = m = a ? Math.abs("y" === a ? p : f) : Math.sqrt(f * f + p * p),
                        m > _ && (_ = m),
                        m < v && (v = m);
                    w.max = _ - v,
                    w.min = v,
                    w.v = b = e.amount || e.each * (y > b ? b - 1 : a ? "y" === a ? b / y : y : Math.max(y, b / y)) || 0,
                    w.b = b < 0 ? n - b : n
                }
                return b = (w[t] - w.min) / w.max,
                w.b + (i ? i.getRatio(b) : b) * w.v
            }
        }
          , _ = s.prototype = new e;
        return s.version = "2.1.3",
        s.distribute = g,
        _.constructor = s,
        _.kill()._gc = _._forcingPlayhead = _._hasPause = !1,
        _.to = function(t, e, s, n) {
            var o = s.repeat && d.TweenMax || i;
            return e ? this.add(new o(t,e,s), n) : this.set(t, s, n)
        }
        ,
        _.from = function(t, e, s, n) {
            return this.add((s.repeat && d.TweenMax || i).from(t, e, m(0, s)), n)
        }
        ,
        _.fromTo = function(t, e, s, n, o) {
            var r = n.repeat && d.TweenMax || i;
            return n = m(0, n, s),
            e ? this.add(r.fromTo(t, e, s, n), o) : this.set(t, n, o)
        }
        ,
        _.staggerTo = function(t, e, n, o, r, l, c, h) {
            var d, p, m = new s({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
            }), _ = g(n.stagger || o), v = n.startAt, y = n.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            a(t = t || []) && (t = function(t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++]))
                    ;
                return i
            }(t)),
            p = 0; p < t.length; p++)
                d = u(n),
                v && (d.startAt = u(v),
                v.cycle && f(d.startAt, t, p)),
                y && (f(d, t, p),
                null != d.duration && (e = d.duration,
                delete d.duration)),
                m.to(t[p], e, d, _(p, t[p], t));
            return this.add(m, r)
        }
        ,
        _.staggerFrom = function(t, e, i, s, n, o, r, a) {
            return i.runBackwards = !0,
            this.staggerTo(t, e, m(0, i), s, n, o, r, a)
        }
        ,
        _.staggerFromTo = function(t, e, i, s, n, o, r, a, l) {
            return s.startAt = i,
            this.staggerTo(t, e, m(0, s, i), n, o, r, a, l)
        }
        ,
        _.call = function(t, e, s, n) {
            return this.add(i.delayedCall(0, t, e, s), n)
        }
        ,
        _.set = function(t, e, s) {
            return this.add(new i(t,0,m(0, e, null, !0)), s)
        }
        ,
        s.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var n, o, r, a, l = new s(t), c = l._timeline;
            for (null == e && (e = !0),
            c._remove(l, !0),
            l._startTime = 0,
            l._rawPrevTime = l._time = l._totalTime = c._time,
            r = c._first; r; )
                a = r._next,
                e && r instanceof i && r.target === r.vars.onComplete || ((o = r._startTime - r._delay) < 0 && (n = 1),
                l.add(r, o)),
                r = a;
            return c.add(l, 0),
            n && l.totalDuration(),
            l
        }
        ,
        _.add = function(n, o, r, a) {
            var c, h, d, u, f, p, m = this;
            if ("number" != typeof o && (o = m._parseTimeOrLabel(o, 0, !0, n)),
            !(n instanceof t)) {
                if (n instanceof Array || n && n.push && l(n)) {
                    for (r = r || "normal",
                    a = a || 0,
                    c = o,
                    h = n.length,
                    d = 0; d < h; d++)
                        l(u = n[d]) && (u = new s({
                            tweens: u
                        })),
                        m.add(u, c),
                        "string" != typeof u && "function" != typeof u && ("sequence" === r ? c = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())),
                        c += a;
                    return m._uncache(!0)
                }
                if ("string" == typeof n)
                    return m.addLabel(n, o);
                if ("function" != typeof n)
                    throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                n = i.delayedCall(0, n)
            }
            if (e.prototype.add.call(m, n, o),
            (n._time || !n._duration && n._initted) && (c = (m.rawTime() - n._startTime) * n._timeScale,
            (!n._duration || Math.abs(Math.max(0, Math.min(n.totalDuration(), c))) - n._totalTime > 1e-5) && n.render(c, !1, !1)),
            (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
                for (p = (f = m).rawTime() > n._startTime; f._timeline; )
                    p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                    f = f._timeline;
            return m
        }
        ,
        _.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var s = e.length; --s > -1; )
                    this.remove(e[s]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        _._remove = function(t, i) {
            return e.prototype._remove.call(this, t, i),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        _.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        _.insert = _.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }
        ,
        _.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }
        ,
        _.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        _.addPause = function(t, e, s, n) {
            var o = i.delayedCall(0, p, s, n || this);
            return o.vars.onComplete = o.vars.onReverseComplete = e,
            o.data = "isPause",
            this._hasPause = !0,
            this.add(o, t)
        }
        ,
        _.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        _.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        _._parseTimeOrLabel = function(e, i, s, n) {
            var o, r;
            if (n instanceof t && n.timeline === this)
                this.remove(n);
            else if (n && (n instanceof Array || n.push && l(n)))
                for (r = n.length; --r > -1; )
                    n[r]instanceof t && n[r].timeline === this && this.remove(n[r]);
            if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - o : 0, s);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = o);
            else {
                if (-1 === (r = e.indexOf("=")))
                    return null == this._labels[e] ? s ? this._labels[e] = o + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)),
                e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : o
            }
            return Number(e) + i
        }
        ,
        _.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        _.stop = function() {
            return this.paused(!0)
        }
        ,
        _.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        _.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        _.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, o, r, a, l, d, u, f, p = this, m = p._time, g = p._dirty ? p.totalDuration() : p._totalDuration, _ = p._startTime, v = p._timeScale, y = p._paused;
            if (m !== p._time && (t += p._time - m),
            p._hasPause && !p._forcingPlayhead && !e) {
                if (t > m)
                    for (s = p._first; s && s._startTime <= t && !d; )
                        s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === p._rawPrevTime || (d = s),
                        s = s._next;
                else
                    for (s = p._last; s && s._startTime >= t && !d; )
                        s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (d = s),
                        s = s._prev;
                d && (p._time = p._totalTime = t = d._startTime,
                f = p._startTime + (p._reversed ? p._duration - t : t) / p._timeScale)
            }
            if (t >= g - n && t >= 0)
                p._totalTime = p._time = g,
                p._reversed || p._hasPausedChild() || (o = !0,
                a = "onComplete",
                l = !!p._timeline.autoRemoveChildren,
                0 === p._duration && (t <= 0 && t >= -1e-8 || p._rawPrevTime < 0 || p._rawPrevTime === n) && p._rawPrevTime !== t && p._first && (l = !0,
                p._rawPrevTime > n && (a = "onReverseComplete"))),
                p._rawPrevTime = p._duration || !e || t || p._rawPrevTime === t ? t : n,
                t = g + 1e-4;
            else if (t < n)
                if (p._totalTime = p._time = 0,
                t > -1e-8 && (t = 0),
                (0 !== m || 0 === p._duration && p._rawPrevTime !== n && (p._rawPrevTime > 0 || t < 0 && p._rawPrevTime >= 0)) && (a = "onReverseComplete",
                o = p._reversed),
                t < 0)
                    p._active = !1,
                    p._timeline.autoRemoveChildren && p._reversed ? (l = o = !0,
                    a = "onReverseComplete") : p._rawPrevTime >= 0 && p._first && (l = !0),
                    p._rawPrevTime = t;
                else {
                    if (p._rawPrevTime = p._duration || !e || t || p._rawPrevTime === t ? t : n,
                    0 === t && o)
                        for (s = p._first; s && 0 === s._startTime; )
                            s._duration || (o = !1),
                            s = s._next;
                    t = 0,
                    p._initted || (l = !0)
                }
            else
                p._totalTime = p._time = p._rawPrevTime = t;
            if (p._time !== m && p._first || i || l || d) {
                if (p._initted || (p._initted = !0),
                p._active || !p._paused && p._time !== m && t > 0 && (p._active = !0),
                0 === m && p.vars.onStart && (0 === p._time && p._duration || e || p._callback("onStart")),
                (u = p._time) >= m)
                    for (s = p._first; s && (r = s._next,
                    u === p._time && (!p._paused || y)); )
                        (s._active || s._startTime <= u && !s._paused && !s._gc) && (d === s && (p.pause(),
                        p._pauseTime = f),
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = r;
                else
                    for (s = p._last; s && (r = s._prev,
                    u === p._time && (!p._paused || y)); ) {
                        if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                            if (d === s) {
                                for (d = s._prev; d && d.endTime() > p._time; )
                                    d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i),
                                    d = d._prev;
                                d = null,
                                p.pause(),
                                p._pauseTime = f
                            }
                            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                        }
                        s = r
                    }
                p._onUpdate && (e || (c.length && h(),
                p._callback("onUpdate"))),
                a && (p._gc || _ !== p._startTime && v === p._timeScale || (0 === p._time || g >= p.totalDuration()) && (o && (c.length && h(),
                p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                p._active = !1),
                !e && p.vars[a] && p._callback(a)))
            }
        }
        ,
        _._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        _.getChildren = function(t, e, s, n) {
            n = n || -9999999999;
            for (var o = [], r = this._first, a = 0; r; )
                r._startTime < n || (r instanceof i ? !1 !== e && (o[a++] = r) : (!1 !== s && (o[a++] = r),
                !1 !== t && (a = (o = o.concat(r.getChildren(!0, e, s))).length))),
                r = r._next;
            return o
        }
        ,
        _.getTweensOf = function(t, e) {
            var s, n, o = this._gc, r = [], a = 0;
            for (o && this._enabled(!0, !0),
            n = (s = i.getTweensOf(t)).length; --n > -1; )
                (s[n].timeline === this || e && this._contains(s[n])) && (r[a++] = s[n]);
            return o && this._enabled(!1, !0),
            r
        }
        ,
        _.recent = function() {
            return this._recent
        }
        ,
        _._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        _.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, n = this._first, o = this._labels; n; )
                n._startTime >= i && (n._startTime += t),
                n = n._next;
            if (e)
                for (s in o)
                    o[s] >= i && (o[s] += t);
            return this._uncache(!0)
        }
        ,
        _._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1; )
                i[s]._kill(t, e) && (n = !0);
            return n
        }
        ,
        _.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        _.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        _._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0),
                    s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        _.totalTime = function(e, i, s) {
            this._forcingPlayhead = !0;
            var n = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            n
        }
        ,
        _.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        _.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, n = this, o = n._last, r = 999999999999; o; )
                        e = o._prev,
                        o._dirty && o.totalDuration(),
                        o._startTime > r && n._sortChildren && !o._paused && !n._calculatingDuration ? (n._calculatingDuration = 1,
                        n.add(o, o._startTime - o._delay),
                        n._calculatingDuration = 0) : r = o._startTime,
                        o._startTime < 0 && !o._paused && (s -= o._startTime,
                        n._timeline.smoothChildTiming && (n._startTime += o._startTime / n._timeScale,
                        n._time -= o._startTime,
                        n._totalTime -= o._startTime,
                        n._rawPrevTime -= o._startTime),
                        n.shiftChildren(-o._startTime, !1, -9999999999),
                        r = 0),
                        (i = o._startTime + o._totalDuration / o._timeScale) > s && (s = i),
                        o = e;
                    n._duration = n._totalDuration = s,
                    n._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }
        ,
        _.paused = function(e) {
            if (!1 === e && this._paused)
                for (var i = this._first; i; )
                    i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        _.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        _.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }
        ,
        s
    }
    ), !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !!this.vars.yoyo,
            this._dirty = !0
        }
          , n = 1e-8
          , o = e._internals
          , r = o.lazyTweens
          , a = o.lazyRender
          , l = _gsScope._gsDefine.globals
          , c = new i(null,null,1,0)
          , h = s.prototype = new t;
        return h.constructor = s,
        h.kill()._gc = !1,
        s.version = "2.1.3",
        h.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        h.addCallback = function(t, i, s, n) {
            return this.add(e.delayedCall(0, t, s, n), i)
        }
        ,
        h.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1; )
                        i[s]._startTime === n && i[s]._enabled(!1, !1);
            return this
        }
        ,
        h.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        h.tweenTo = function(t, i) {
            i = i || {};
            var s, n, o, r = {
                ease: c,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, a = i.repeat && l.TweenMax || e;
            for (n in i)
                r[n] = i[n];
            return r.time = this._parseTimeOrLabel(t),
            s = Math.abs(Number(r.time) - this._time) / this._timeScale || .001,
            o = new a(this,s,r),
            r.onStart = function() {
                o.target.paused(!0),
                o.vars.time === o.target.time() || s !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0),
                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
            }
            ,
            o
        }
        ,
        h.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var s = this.tweenTo(e, i);
            return s.isFromTo = 1,
            s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }
        ,
        h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, o, l, c, h, d, u, f, p, m = this, g = m._time, _ = m._dirty ? m.totalDuration() : m._totalDuration, v = m._duration, y = m._totalTime, b = m._startTime, w = m._timeScale, T = m._rawPrevTime, x = m._paused, k = m._cycle;
            if (g !== m._time && (t += m._time - g),
            t >= _ - n && t >= 0)
                m._locked || (m._totalTime = _,
                m._cycle = m._repeat),
                m._reversed || m._hasPausedChild() || (o = !0,
                c = "onComplete",
                h = !!m._timeline.autoRemoveChildren,
                0 === m._duration && (t <= 0 && t >= -1e-8 || T < 0 || T === n) && T !== t && m._first && (h = !0,
                T > n && (c = "onReverseComplete"))),
                m._rawPrevTime = m._duration || !e || t || m._rawPrevTime === t ? t : n,
                m._yoyo && 1 & m._cycle ? m._time = t = 0 : (m._time = v,
                t = v + 1e-4);
            else if (t < n)
                if (m._locked || (m._totalTime = m._cycle = 0),
                m._time = 0,
                t > -1e-8 && (t = 0),
                (0 !== g || 0 === v && T !== n && (T > 0 || t < 0 && T >= 0) && !m._locked) && (c = "onReverseComplete",
                o = m._reversed),
                t < 0)
                    m._active = !1,
                    m._timeline.autoRemoveChildren && m._reversed ? (h = o = !0,
                    c = "onReverseComplete") : T >= 0 && m._first && (h = !0),
                    m._rawPrevTime = t;
                else {
                    if (m._rawPrevTime = v || !e || t || m._rawPrevTime === t ? t : n,
                    0 === t && o)
                        for (s = m._first; s && 0 === s._startTime; )
                            s._duration || (o = !1),
                            s = s._next;
                    t = 0,
                    m._initted || (h = !0)
                }
            else
                0 === v && T < 0 && (h = !0),
                m._time = m._rawPrevTime = t,
                m._locked || (m._totalTime = t,
                0 !== m._repeat && (d = v + m._repeatDelay,
                m._cycle = m._totalTime / d >> 0,
                m._cycle && m._cycle === m._totalTime / d && y <= t && m._cycle--,
                m._time = m._totalTime - m._cycle * d,
                m._yoyo && 1 & m._cycle && (m._time = v - m._time),
                m._time > v ? (m._time = v,
                t = v + 1e-4) : m._time < 0 ? m._time = t = 0 : t = m._time));
            if (m._hasPause && !m._forcingPlayhead && !e) {
                if ((t = m._time) > g || m._repeat && k !== m._cycle)
                    for (s = m._first; s && s._startTime <= t && !u; )
                        s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === m._rawPrevTime || (u = s),
                        s = s._next;
                else
                    for (s = m._last; s && s._startTime >= t && !u; )
                        s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                        s = s._prev;
                u && (p = m._startTime + (m._reversed ? m._duration - u._startTime : u._startTime) / m._timeScale,
                u._startTime < v && (m._time = m._rawPrevTime = t = u._startTime,
                m._totalTime = t + m._cycle * (m._totalDuration + m._repeatDelay)))
            }
            if (m._cycle !== k && !m._locked) {
                var S = m._yoyo && 0 != (1 & k)
                  , C = S === (m._yoyo && 0 != (1 & m._cycle))
                  , A = m._totalTime
                  , O = m._cycle
                  , P = m._rawPrevTime
                  , E = m._time;
                if (m._totalTime = k * v,
                m._cycle < k ? S = !S : m._totalTime += v,
                m._time = g,
                m._rawPrevTime = 0 === v ? T - 1e-4 : T,
                m._cycle = k,
                m._locked = !0,
                g = S ? 0 : v,
                m.render(g, e, 0 === v),
                e || m._gc || m.vars.onRepeat && (m._cycle = O,
                m._locked = !1,
                m._callback("onRepeat")),
                g !== m._time)
                    return;
                if (C && (m._cycle = k,
                m._locked = !0,
                g = S ? v + 1e-4 : -1e-4,
                m.render(g, !0, !1)),
                m._locked = !1,
                m._paused && !x)
                    return;
                m._time = E,
                m._totalTime = A,
                m._cycle = O,
                m._rawPrevTime = P
            }
            if (m._time !== g && m._first || i || h || u) {
                if (m._initted || (m._initted = !0),
                m._active || !m._paused && m._totalTime !== y && t > 0 && (m._active = !0),
                0 === y && m.vars.onStart && (0 === m._totalTime && m._totalDuration || e || m._callback("onStart")),
                (f = m._time) >= g)
                    for (s = m._first; s && (l = s._next,
                    f === m._time && (!m._paused || x)); )
                        (s._active || s._startTime <= m._time && !s._paused && !s._gc) && (u === s && (m.pause(),
                        m._pauseTime = p),
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = l;
                else
                    for (s = m._last; s && (l = s._prev,
                    f === m._time && (!m._paused || x)); ) {
                        if (s._active || s._startTime <= g && !s._paused && !s._gc) {
                            if (u === s) {
                                for (u = s._prev; u && u.endTime() > m._time; )
                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                    u = u._prev;
                                u = null,
                                m.pause(),
                                m._pauseTime = p
                            }
                            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                        }
                        s = l
                    }
                m._onUpdate && (e || (r.length && a(),
                m._callback("onUpdate"))),
                c && (m._locked || m._gc || b !== m._startTime && w === m._timeScale || (0 === m._time || _ >= m.totalDuration()) && (o && (r.length && a(),
                m._timeline.autoRemoveChildren && m._enabled(!1, !1),
                m._active = !1),
                !e && m.vars[c] && m._callback(c)))
            } else
                y !== m._totalTime && m._onUpdate && (e || m._callback("onUpdate"))
        }
        ,
        h.getActive = function(t, e, i) {
            var s, n, o = [], r = this.getChildren(t || null == t, e || null == t, !!i), a = 0, l = r.length;
            for (s = 0; s < l; s++)
                (n = r[s]).isActive() && (o[a++] = n);
            return o
        }
        ,
        h.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; e < s; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        h.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort((function(t, e) {
                return t.time - e.time
            }
            )),
            e
        }
        ,
        h.invalidate = function() {
            return this._locked = !1,
            t.prototype.invalidate.call(this)
        }
        ,
        h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }
        ,
        h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }
        ,
        h.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        h.time = function(t, e) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , s = this._cycle
              , n = s * (i + this._repeatDelay);
            return t > i && (t = i),
            this.totalTime(this._yoyo && 1 & s ? i - t + n : this._repeat ? t + n : t, e)
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        h.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + n)
        }
        ,
        s
    }
    ), !0),
    t = 180 / Math.PI,
    e = [],
    i = [],
    s = [],
    n = {},
    o = _gsScope._gsDefine.globals,
    r = function(t, e, i, s) {
        i === s && (i = s - (s - e) / 1e6),
        t === e && (e = t + (i - t) / 1e6),
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = s,
        this.da = s - t,
        this.ca = i - t,
        this.ba = e - t
    }
    ,
    a = function(t, e, i, s) {
        var n = {
            a: t
        }
          , o = {}
          , r = {}
          , a = {
            c: s
        }
          , l = (t + e) / 2
          , c = (e + i) / 2
          , h = (i + s) / 2
          , d = (l + c) / 2
          , u = (c + h) / 2
          , f = (u - d) / 8;
        return n.b = l + (t - l) / 4,
        o.b = d + f,
        n.c = o.a = (n.b + o.b) / 2,
        o.c = r.a = (d + u) / 2,
        r.b = u - f,
        a.b = h + (s - h) / 4,
        r.c = a.a = (r.b + a.b) / 2,
        [n, o, r, a]
    }
    ,
    l = function(t, n, o, r, l) {
        var c, h, d, u, f, p, m, g, _, v, y, b, w, T = t.length - 1, x = 0, k = t[0].a;
        for (c = 0; c < T; c++)
            h = (f = t[x]).a,
            d = f.d,
            u = t[x + 1].d,
            l ? (y = e[c],
            w = ((b = i[c]) + y) * n * .25 / (r ? .5 : s[c] || .5),
            g = d - ((p = d - (d - h) * (r ? .5 * n : 0 !== y ? w / y : 0)) + (((m = d + (u - d) * (r ? .5 * n : 0 !== b ? w / b : 0)) - p) * (3 * y / (y + b) + .5) / 4 || 0))) : g = d - ((p = d - (d - h) * n * .5) + (m = d + (u - d) * n * .5)) / 2,
            p += g,
            m += g,
            f.c = _ = p,
            f.b = 0 !== c ? k : k = f.a + .6 * (f.c - f.a),
            f.da = d - h,
            f.ca = _ - h,
            f.ba = k - h,
            o ? (v = a(h, k, _, d),
            t.splice(x, 1, v[0], v[1], v[2], v[3]),
            x += 4) : x++,
            k = m;
        (f = t[x]).b = k,
        f.c = k + .4 * (f.d - k),
        f.da = f.d - f.a,
        f.ca = f.c - f.a,
        f.ba = k - f.a,
        o && (v = a(f.a, k, f.c, f.d),
        t.splice(x, 1, v[0], v[1], v[2], v[3]))
    }
    ,
    c = function(t, s, n, o) {
        var a, l, c, h, d, u, f = [];
        if (o)
            for (l = (t = [o].concat(t)).length; --l > -1; )
                "string" == typeof (u = t[l][s]) && "=" === u.charAt(1) && (t[l][s] = o[s] + Number(u.charAt(0) + u.substr(2)));
        if ((a = t.length - 2) < 0)
            return f[0] = new r(t[0][s],0,0,t[0][s]),
            f;
        for (l = 0; l < a; l++)
            c = t[l][s],
            h = t[l + 1][s],
            f[l] = new r(c,0,0,h),
            n && (d = t[l + 2][s],
            e[l] = (e[l] || 0) + (h - c) * (h - c),
            i[l] = (i[l] || 0) + (d - h) * (d - h));
        return f[l] = new r(t[l][s],0,0,t[l + 1][s]),
        f
    }
    ,
    h = function(t, o, r, a, h, d) {
        var u, f, p, m, g, _, v, y, b = {}, w = [], T = d || t[0];
        for (f in h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == o && (o = 1),
        t[0])
            w.push(f);
        if (t.length > 1) {
            for (y = t[t.length - 1],
            v = !0,
            u = w.length; --u > -1; )
                if (f = w[u],
                Math.abs(T[f] - y[f]) > .05) {
                    v = !1;
                    break
                }
            v && (t = t.concat(),
            d && t.unshift(d),
            t.push(t[1]),
            d = t[t.length - 3])
        }
        for (e.length = i.length = s.length = 0,
        u = w.length; --u > -1; )
            f = w[u],
            n[f] = -1 !== h.indexOf("," + f + ","),
            b[f] = c(t, f, n[f], d);
        for (u = e.length; --u > -1; )
            e[u] = Math.sqrt(e[u]),
            i[u] = Math.sqrt(i[u]);
        if (!a) {
            for (u = w.length; --u > -1; )
                if (n[f])
                    for (_ = (p = b[w[u]]).length - 1,
                    m = 0; m < _; m++)
                        g = p[m + 1].da / i[m] + p[m].da / e[m] || 0,
                        s[m] = (s[m] || 0) + g * g;
            for (u = s.length; --u > -1; )
                s[u] = Math.sqrt(s[u])
        }
        for (u = w.length,
        m = r ? 4 : 1; --u > -1; )
            p = b[f = w[u]],
            l(p, o, r, a, n[f]),
            v && (p.splice(0, m),
            p.splice(p.length - m, m));
        return b
    }
    ,
    d = function(t, e, i) {
        for (var s, n, o, r, a, l, c, h, d, u, f, p = 1 / i, m = t.length; --m > -1; )
            for (o = (u = t[m]).a,
            r = u.d - o,
            a = u.c - o,
            l = u.b - o,
            s = n = 0,
            h = 1; h <= i; h++)
                s = n - (n = ((c = p * h) * c * r + 3 * (d = 1 - c) * (c * a + d * l)) * c),
                e[f = m * i + h - 1] = (e[f] || 0) + s * s
    }
    ,
    u = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.9",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._mod = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var s, n, o, a, l, c = e.values || [], u = {}, f = c[0], p = e.autoRotate || i.vars.orientToBezier;
            for (s in this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null,
            f)
                this._props.push(s);
            for (o = this._props.length; --o > -1; )
                s = this._props[o],
                this._overwriteProps.push(s),
                n = this._func[s] = "function" == typeof t[s],
                u[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                l || u[s] !== c[0][s] && (l = u);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(c, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                var s, n, o, a, l, c, h, d, u, f, p, m = {}, g = "cubic" === (e = e || "soft") ? 3 : 2, _ = "soft" === e, v = [];
                if (_ && i && (t = [i].concat(t)),
                null == t || t.length < g + 1)
                    throw "invalid Bezier data";
                for (u in t[0])
                    v.push(u);
                for (c = v.length; --c > -1; ) {
                    for (m[u = v[c]] = l = [],
                    f = 0,
                    d = t.length,
                    h = 0; h < d; h++)
                        s = null == i ? t[h][u] : "string" == typeof (p = t[h][u]) && "=" === p.charAt(1) ? i[u] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                        _ && h > 1 && h < d - 1 && (l[f++] = (s + l[f - 2]) / 2),
                        l[f++] = s;
                    for (d = f - g + 1,
                    f = 0,
                    h = 0; h < d; h += g)
                        s = l[h],
                        n = l[h + 1],
                        o = l[h + 2],
                        a = 2 === g ? 0 : l[h + 3],
                        l[f++] = p = 3 === g ? new r(s,n,o,a) : new r(s,(2 * n + s) / 3,(2 * n + o) / 3,o);
                    l.length = f
                }
                return m
            }(c, e.type, u),
            this._segCount = this._beziers[s].length,
            this._timeRes) {
                var m = function(t, e) {
                    var i, s, n, o, r = [], a = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, u = [], f = [];
                    for (i in t)
                        d(t[i], r, e);
                    for (n = r.length,
                    s = 0; s < n; s++)
                        l += Math.sqrt(r[s]),
                        f[o = s % e] = l,
                        o === h && (c += l,
                        u[o = s / e >> 0] = f,
                        a[o] = c,
                        l = 0,
                        f = []);
                    return {
                        length: c,
                        lengths: a,
                        segments: u
                    }
                }(this._beziers, this._timeRes);
                this._length = m.length,
                this._lengths = m.lengths,
                this._segments = m.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (p = this._autoRotate)
                for (this._initialRotations = [],
                p[0]instanceof Array || (this._autoRotate = p = [p]),
                o = p.length; --o > -1; ) {
                    for (a = 0; a < 3; a++)
                        s = p[o][a],
                        this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                    s = p[o][2],
                    this._initialRotations[o] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0,
                    this._overwriteProps.push(s)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(e) {
            var i, s, n, o, r, a, l, c, h, d, u, f = this._segCount, p = this._func, m = this._target, g = e !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths,
                d = this._curSeg,
                u = e * this._length,
                n = this._li,
                u > this._l2 && n < f - 1) {
                    for (c = f - 1; n < c && (this._l2 = h[++n]) <= u; )
                        ;
                    this._l1 = h[n - 1],
                    this._li = n,
                    this._curSeg = d = this._segments[n],
                    this._s2 = d[this._s1 = this._si = 0]
                } else if (u < this._l1 && n > 0) {
                    for (; n > 0 && (this._l1 = h[--n]) >= u; )
                        ;
                    0 === n && u < this._l1 ? this._l1 = 0 : n++,
                    this._l2 = h[n],
                    this._li = n,
                    this._curSeg = d = this._segments[n],
                    this._s1 = d[(this._si = d.length - 1) - 1] || 0,
                    this._s2 = d[this._si]
                }
                if (i = n,
                u -= this._l1,
                n = this._si,
                u > this._s2 && n < d.length - 1) {
                    for (c = d.length - 1; n < c && (this._s2 = d[++n]) <= u; )
                        ;
                    this._s1 = d[n - 1],
                    this._si = n
                } else if (u < this._s1 && n > 0) {
                    for (; n > 0 && (this._s1 = d[--n]) >= u; )
                        ;
                    0 === n && u < this._s1 ? this._s1 = 0 : n++,
                    this._s2 = d[n],
                    this._si = n
                }
                a = 1 === e ? 1 : (n + (u - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else
                a = (e - (i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
            for (s = 1 - a,
            n = this._props.length; --n > -1; )
                o = this._props[n],
                l = (a * a * (r = this._beziers[o][i]).da + 3 * s * (a * r.ca + s * r.ba)) * a + r.a,
                this._mod[o] && (l = this._mod[o](l, m)),
                p[o] ? m[o](l) : m[o] = l;
            if (this._autoRotate) {
                var _, v, y, b, w, T, x, k = this._autoRotate;
                for (n = k.length; --n > -1; )
                    o = k[n][2],
                    T = k[n][3] || 0,
                    x = !0 === k[n][4] ? 1 : t,
                    r = this._beziers[k[n][0]],
                    _ = this._beziers[k[n][1]],
                    r && _ && (r = r[i],
                    _ = _[i],
                    v = r.a + (r.b - r.a) * a,
                    v += ((b = r.b + (r.c - r.b) * a) - v) * a,
                    b += (r.c + (r.d - r.c) * a - b) * a,
                    y = _.a + (_.b - _.a) * a,
                    y += ((w = _.b + (_.c - _.b) * a) - y) * a,
                    w += (_.c + (_.d - _.c) * a - w) * a,
                    l = g ? Math.atan2(w - y, b - v) * x + T : this._initialRotations[n],
                    this._mod[o] && (l = this._mod[o](l, m)),
                    p[o] ? m[o](l) : m[o] = l)
            }
        }
    }),
    f = u.prototype,
    u.bezierThrough = h,
    u.cubicToQuadratic = a,
    u._autoCSS = !0,
    u.quadraticToCubic = function(t, e, i) {
        return new r(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
    }
    ,
    u._cssRegister = function() {
        var t = o.CSSPlugin;
        if (t) {
            var e = t._internals
              , i = e._parseToProxy
              , s = e._setPluginRatio
              , n = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, o, r, a, l) {
                    e instanceof Array && (e = {
                        values: e
                    }),
                    l = new u;
                    var c, h, d, f = e.values, p = f.length - 1, m = [], g = {};
                    if (p < 0)
                        return a;
                    for (c = 0; c <= p; c++)
                        d = i(t, f[c], r, a, l, p !== c),
                        m[c] = d.end;
                    for (h in e)
                        g[h] = e[h];
                    return g.values = m,
                    (a = new n(t,"bezier",0,0,d.pt,2)).data = d,
                    a.plugin = l,
                    a.setRatio = s,
                    0 === g.autoRotate && (g.autoRotate = !0),
                    !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate),
                    g.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x && [["x", "y", "rotation", c, !1]]),
                    g.autoRotate && (r._transform || r._enableTransforms(!1),
                    d.autoRotate = r._target._gsTransform,
                    d.proxy.rotation = d.autoRotate.rotation || 0,
                    r._overwriteProps.push("rotation")),
                    l._onInitTween(d.proxy, g, r._tween),
                    a
                }
            })
        }
    }
    ,
    f._mod = function(t) {
        for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
            (e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
    }
    ,
    f._kill = function(t) {
        var e, i, s = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                i = s.length; --i > -1; )
                    s[i] === e && s.splice(i, 1);
        if (s = this._autoRotate)
            for (i = s.length; --i > -1; )
                t[s[i][2]] && s.splice(i, 1);
        return this._super._kill.call(this, t)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function(t, e) {
        var i, s, n, o, r = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = r.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, c = r.prototype = new t("css");
        c.constructor = r,
        r.version = "2.1.3",
        r.API = 2,
        r.defaultTransformPerspective = 0,
        r.defaultSkewType = "compensated",
        r.defaultSmoothOrigin = !0,
        c = "px",
        r.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var h, d, u, f, p, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, k = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, C = /alpha\(opacity *=.+?\)/i, A = /^(rgb|hsl)/, O = /([A-Z])/g, P = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, M = function(t, e) {
            return e.toUpperCase()
        }, D = /(?:Left|Right|Width)/i, L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, $ = /[\s,\(]/i, R = Math.PI / 180, z = 180 / Math.PI, N = {}, F = {
            style: {}
        }, H = _gsScope.document || {
            createElement: function() {
                return F
            }
        }, B = function(t, e) {
            var i = H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t);
            return i.style ? i : H.createElement(t)
        }, W = B("div"), X = B("img"), q = r._internals = {
            _specialProps: l
        }, Y = (_gsScope.navigator || {}).userAgent || "", U = function() {
            var t = Y.indexOf("Android")
              , e = B("a");
            return u = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || parseFloat(Y.substr(t + 8, 2)) > 3),
            p = u && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6,
            f = -1 !== Y.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), V = function(t) {
            return k.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Q = function(t) {
            _gsScope.console && console.log(t)
        }, K = "", G = "", Z = function(t, e) {
            var i, s, n = (e = e || W).style;
            if (void 0 !== n[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            s = 5; --s > -1 && void 0 === n[i[s] + t]; )
                ;
            return s >= 0 ? (K = "-" + (G = 3 === s ? "ms" : i[s]).toLowerCase() + "-",
            G + t) : null
        }, J = "undefined" != typeof window ? window : H.defaultView || {
            getComputedStyle: function() {}
        }, tt = function(t) {
            return J.getComputedStyle(t)
        }, et = r.getStyle = function(t, e, i, s, n) {
            var o;
            return U || "opacity" !== e ? (!s && t.style[e] ? o = t.style[e] : (i = i || tt(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(O, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]),
            null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : V(t)
        }
        , it = q.convertToPixels = function(t, i, s, n, o) {
            if ("px" === n || !n && "lineHeight" !== i)
                return s;
            if ("auto" === n || !s)
                return 0;
            var a, l, c, h = D.test(i), d = t, u = W.style, f = s < 0, p = 1 === s;
            if (f && (s = -s),
            p && (s *= 100),
            "lineHeight" !== i || n)
                if ("%" === n && -1 !== i.indexOf("border"))
                    a = s / 100 * (h ? t.clientWidth : t.clientHeight);
                else {
                    if (u.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;",
                    "%" !== n && d.appendChild && "v" !== n.charAt(0) && "rem" !== n)
                        u[h ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                    else {
                        if (d = t.parentNode || H.body,
                        -1 !== et(d, "display").indexOf("flex") && (u.position = "absolute"),
                        l = d._gsCache,
                        c = e.ticker.frame,
                        l && h && l.time === c)
                            return l.width * s / 100;
                        u[h ? "width" : "height"] = s + n
                    }
                    d.appendChild(W),
                    a = parseFloat(W[h ? "offsetWidth" : "offsetHeight"]),
                    d.removeChild(W),
                    h && "%" === n && !1 !== r.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = c,
                    l.width = a / s * 100),
                    0 !== a || o || (a = it(t, i, s, n, !0))
                }
            else
                l = tt(t).lineHeight,
                t.style.lineHeight = s,
                a = parseFloat(tt(t).lineHeight),
                t.style.lineHeight = l;
            return p && (a /= 100),
            f ? -a : a
        }
        , st = q.calculateOffset = function(t, e, i) {
            if ("absolute" !== et(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top"
              , n = et(t, "margin" + s, i);
            return t["offset" + s] - (it(t, e, parseFloat(n), n.replace(x, "")) || 0)
        }
        , nt = function(t, e) {
            var i, s, n, o = {};
            if (e = e || tt(t))
                if (i = e.length)
                    for (; --i > -1; )
                        -1 !== (n = e[i]).indexOf("-transform") && It !== n || (o[n.replace(P, M)] = e.getPropertyValue(n));
                else
                    for (i in e)
                        -1 !== i.indexOf("Transform") && jt !== i || (o[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === o[i] && (o[i.replace(P, M)] = e[i]);
            return U || (o.opacity = V(t)),
            s = Vt(t, e, !1),
            o.rotation = s.rotation,
            o.skewX = s.skewX,
            o.scaleX = s.scaleX,
            o.scaleY = s.scaleY,
            o.x = s.x,
            o.y = s.y,
            Rt && (o.z = s.z,
            o.rotationX = s.rotationX,
            o.rotationY = s.rotationY,
            o.scaleZ = s.scaleZ),
            o.filters && delete o.filters,
            o
        }, ot = function(t, e, i, s, n) {
            var o, r, a, l = {}, c = t.style;
            for (r in i)
                "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || n && n[r]) && -1 === r.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(T, "") ? o : 0 : st(t, r),
                void 0 !== c[r] && (a = new bt(c,r,c[r],a))));
            if (s)
                for (r in s)
                    "className" !== r && (l[r] = s[r]);
            return {
                difs: l,
                firstMPT: a
            }
        }, rt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, at = ["marginLeft", "marginRight", "marginTop", "marginBottom"], lt = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || tt(t))[e] || 0;
            if (t.getCTM && qt(t))
                return t.getBBox()[e] || 0;
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , n = rt[e]
              , o = n.length;
            for (i = i || tt(t); --o > -1; )
                s -= parseFloat(et(t, "padding" + n[o], i, !0)) || 0,
                s -= parseFloat(et(t, "border" + n[o] + "Width", i, !0)) || 0;
            return s
        }, ct = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            null != t && "" !== t || (t = "0 0");
            var i, s = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0], o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
            if (s.length > 3 && !e) {
                for (s = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < s.length; i++)
                    t.push(ct(s[i]));
                return t.join(",")
            }
            return null == o ? o = "center" === n ? "50%" : "0" : "center" === o && (o = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            t = n + " " + o + (s.length > 2 ? " " + s[2] : ""),
            e && (e.oxp = -1 !== n.indexOf("%"),
            e.oyp = -1 !== o.indexOf("%"),
            e.oxr = "=" === n.charAt(1),
            e.oyr = "=" === o.charAt(1),
            e.ox = parseFloat(n.replace(T, "")),
            e.oy = parseFloat(o.replace(T, "")),
            e.v = t),
            e || t
        }, ht = function(t, e) {
            return "function" == typeof t && (t = t(_, g)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, dt = function(t, e) {
            "function" == typeof t && (t = t(_, g));
            var i = "string" == typeof t && "=" === t.charAt(1);
            return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)),
            null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ut = function(t, e, i, s) {
            var n, o, r, a, l, c = 1e-6;
            return "function" == typeof t && (t = t(_, g)),
            null == t ? a = e : "number" == typeof t ? a = t : (n = 360,
            o = t.split("_"),
            r = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e),
            o.length && (s && (s[i] = e + r),
            -1 !== t.indexOf("short") && (r %= n) !== r % 180 && (r = r < 0 ? r + n : r - n),
            -1 !== t.indexOf("_cw") && r < 0 ? r = (r + 3599999999640) % n - (r / n | 0) * n : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 3599999999640) % n - (r / n | 0) * n)),
            a = e + r),
            a < c && a > -c && (a = 0),
            a
        }, ft = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, pt = function(t, e, i) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, mt = r.parseColor = function(t, e) {
            var i, s, n, o, r, a, l, c, h, d, u;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    ft[t])
                        i = ft[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (s = t.charAt(1),
                        n = t.charAt(2),
                        o = t.charAt(3),
                        t = "#" + s + s + n + n + o + o),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = u = t.match(v),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(y)
                        } else
                            r = Number(i[0]) % 360 / 360,
                            a = Number(i[1]) / 100,
                            s = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (a + 1) : l + a - l * a),
                            i.length > 3 && (i[3] = Number(i[3])),
                            i[0] = pt(r + 1 / 3, s, n),
                            i[1] = pt(r, s, n),
                            i[2] = pt(r - 1 / 3, s, n);
                    else
                        i = t.match(v) || ft.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = ft.black;
            return e && !u && (s = i[0] / 255,
            n = i[1] / 255,
            o = i[2] / 255,
            l = ((c = Math.max(s, n, o)) + (h = Math.min(s, n, o))) / 2,
            c === h ? r = a = 0 : (d = c - h,
            a = l > .5 ? d / (2 - c - h) : d / (c + h),
            r = c === s ? (n - o) / d + (n < o ? 6 : 0) : c === n ? (o - s) / d + 2 : (s - n) / d + 4,
            r *= 60),
            i[0] = r + .5 | 0,
            i[1] = 100 * a + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , gt = function(t, e) {
            var i, s, n, o = t.match(_t) || [], r = 0, a = "";
            if (!o.length)
                return t;
            for (i = 0; i < o.length; i++)
                s = o[i],
                r += (n = t.substr(r, t.indexOf(s, r) - r)).length + s.length,
                3 === (s = mt(s, e)).length && s.push(1),
                a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
            return a + t.substr(r)
        }, _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in ft)
            _t += "|" + c + "\\b";
        _t = new RegExp(_t + ")","gi"),
        r.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = gt(t[0], e),
            t[1] = gt(t[1], e)),
            _t.lastIndex = 0
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);
        var vt = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var n, o = e ? (t.match(_t) || [""])[0] : "", r = t.split(o).join("").match(b) || [], a = t.substr(0, t.indexOf(r[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", c = -1 !== t.indexOf(" ") ? " " : ",", h = r.length, d = h > 0 ? r[0].replace(v, "") : "";
            return h ? e ? (n = function(t) {
                var e, u, f, p;
                if ("number" == typeof t)
                    t += d;
                else if (s && I.test(t)) {
                    for (p = t.replace(I, "|").split("|"),
                    f = 0; f < p.length; f++)
                        p[f] = n(p[f]);
                    return p.join(",")
                }
                if (e = (t.match(_t) || [o])[0],
                f = (u = t.split(e).join("").match(b) || []).length,
                h > f--)
                    for (; ++f < h; )
                        u[f] = i ? u[(f - 1) / 2 | 0] : r[f];
                return a + u.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            ,
            n) : (n = function(t) {
                var e, o, u;
                if ("number" == typeof t)
                    t += d;
                else if (s && I.test(t)) {
                    for (o = t.replace(I, "|").split("|"),
                    u = 0; u < o.length; u++)
                        o[u] = n(o[u]);
                    return o.join(",")
                }
                if (u = (e = t.match("," === c ? b : w) || []).length,
                h > u--)
                    for (; ++u < h; )
                        e[u] = i ? e[(u - 1) / 2 | 0] : r[u];
                return (a && "none" !== t && t.substr(0, t.indexOf(e[0])) || a) + e.join(c) + l
            }
            ,
            n) : function(t) {
                return t
            }
        }
          , yt = function(t) {
            return t = t.split(","),
            function(e, i, s, n, o, r, a) {
                var l, c = (i + "").split(" ");
                for (a = {},
                l = 0; l < 4; l++)
                    a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return n.parse(e, a, o, r)
            }
        }
          , bt = (q._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, n, o, r = this.data, a = r.proxy, l = r.firstMPT, c = 1e-6; l; )
                e = a[l.v],
                l.r ? e = l.r(e) : e < c && e > -c && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation),
            1 === t || 0 === t)
                for (l = r.firstMPT,
                o = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (n = i.xs0 + i.s + i.xs1,
                            s = 1; s < i.l; s++)
                                n += i["xn" + s] + i["xs" + (s + 1)];
                            i[o] = n
                        }
                    } else
                        i[o] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, s, n) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = n,
            s && (s._prev = this,
            this._next = s)
        }
        )
          , wt = (q._parseToProxy = function(t, e, i, s, n, o) {
            var r, a, l, c, h, d = s, u = {}, f = {}, p = i._transform, m = N;
            for (i._transform = null,
            N = e,
            s = h = i.parse(t, e, s, n),
            N = m,
            o && (i._transform = p,
            d && (d._prev = null,
            d._prev && (d._prev._next = null))); s && s !== d; ) {
                if (s.type <= 1 && (f[a = s.p] = s.s + s.c,
                u[a] = s.s,
                o || (c = new bt(s,"s",a,c,s.r),
                s.c = 0),
                1 === s.type))
                    for (r = s.l; --r > 0; )
                        l = "xn" + r,
                        f[a = s.p + "_" + l] = s.data[l],
                        u[a] = s[l],
                        o || (c = new bt(s,l,a,c,s.rxp[l]));
                s = s._next
            }
            return {
                proxy: u,
                end: f,
                firstMPT: c,
                pt: h
            }
        }
        ,
        q.CSSPropTween = function(t, e, s, n, r, a, l, c, h, d, u) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = n,
            this.n = l || e,
            t instanceof wt || o.push(this.n),
            this.r = c ? "function" == typeof c ? c : Math.round : c,
            this.type = a || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === d ? s : d,
            this.e = void 0 === u ? s + n : u,
            r && (this._next = r,
            r._prev = this)
        }
        )
          , Tt = function(t, e, i, s, n, o) {
            var r = new wt(t,e,i,s - i,n,-1,o);
            return r.b = i,
            r.e = r.xs0 = s,
            r
        }
          , xt = r.parseComplex = function(t, e, i, s, n, o, a, l, c, d) {
            i = i || o || "",
            "function" == typeof s && (s = s(_, g)),
            a = new wt(t,e,0,0,a,d ? 2 : 1,null,!1,l,i,s),
            s += "",
            n && _t.test(s + i) && (s = [i, s],
            r.colorStringFilter(s),
            i = s[0],
            s = s[1]);
            var u, f, p, m, b, w, T, x, k, S, C, A, O, P = i.split(", ").join(",").split(" "), E = s.split(", ").join(",").split(" "), M = P.length, D = !1 !== h;
            for (-1 === s.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (P = P.join(" ").replace(I, ", ").split(" "),
            E = E.join(" ").replace(I, ", ").split(" ")) : (P = P.join(" ").split(",").join(", ").split(" "),
            E = E.join(" ").split(",").join(", ").split(" ")),
            M = P.length),
            M !== E.length && (M = (P = (o || "").split(" ")).length),
            a.plugin = c,
            a.setRatio = d,
            _t.lastIndex = 0,
            u = 0; u < M; u++)
                if (m = P[u],
                b = E[u] + "",
                (x = parseFloat(m)) || 0 === x)
                    a.appendXtra("", x, ht(b, x), b.replace(y, ""), !(!D || -1 === b.indexOf("px")) && Math.round, !0);
                else if (n && _t.test(m))
                    A = ")" + ((A = b.indexOf(")") + 1) ? b.substr(A) : ""),
                    O = -1 !== b.indexOf("hsl") && U,
                    S = b,
                    m = mt(m, O),
                    b = mt(b, O),
                    (k = m.length + b.length > 6) && !U && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(E[u]).join("transparent")) : (U || (k = !1),
                    O ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), m[0], ht(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(b[1], m[1]), "%,", !1).appendXtra("", m[2], ht(b[2], m[2]), k ? "%," : "%" + A, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), m[0], b[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], b[1] - m[1], ",", Math.round).appendXtra("", m[2], b[2] - m[2], k ? "," : A, Math.round),
                    k && (m = m.length < 4 ? 1 : m[3],
                    a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, A, !1))),
                    _t.lastIndex = 0;
                else if (w = m.match(v)) {
                    if (!(T = b.match(y)) || T.length !== w.length)
                        return a;
                    for (p = 0,
                    f = 0; f < w.length; f++)
                        C = w[f],
                        S = m.indexOf(C, p),
                        a.appendXtra(m.substr(p, S - p), Number(C), ht(T[f], C), "", !(!D || "px" !== m.substr(S + C.length, 2)) && Math.round, 0 === f),
                        p = S + C.length;
                    a["xs" + a.l] += m.substr(p)
                } else
                    a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
            if (-1 !== s.indexOf("=") && a.data) {
                for (A = a.xs0 + a.data.s,
                u = 1; u < a.l; u++)
                    A += a["xs" + u] + a.data["xn" + u];
                a.e = A + a["xs" + u]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , kt = 9;
        for ((c = wt.prototype).l = c.pr = 0; --kt > 0; )
            c["xn" + kt] = 0,
            c["xs" + kt] = "";
        c.xs0 = "",
        c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
        c.appendXtra = function(t, e, i, s, n, o) {
            var r = this
              , a = r.l;
            return r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || "",
            i || 0 === a || r.plugin ? (r.l++,
            r.type = r.setRatio ? 2 : 1,
            r["xs" + r.l] = s || "",
            a > 0 ? (r.data["xn" + a] = e + i,
            r.rxp["xn" + a] = n,
            r["xn" + a] = e,
            r.plugin || (r.xfirst = new wt(r,"xn" + a,e,i,r.xfirst || r,0,r.n,n,r.pr),
            r.xfirst.xs0 = 0),
            r) : (r.data = {
                s: e + i
            },
            r.rxp = {},
            r.s = e,
            r.c = i,
            r.r = n,
            r)) : (r["xs" + a] += e + (s || ""),
            r)
        }
        ;
        var St = function(t, e) {
            e = e || {},
            this.p = e.prefix && Z(t) || t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.allowFunc = e.allowFunc,
            this.pr = e.priority || 0
        }
          , Ct = q._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, n = t.split(","), o = e.defaultValue;
            for (i = i || [o],
            s = 0; s < n.length; s++)
                e.prefix = 0 === s && e.prefix,
                e.defaultValue = i[s] || o,
                new St(n[s],e)
        }
          , At = q._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Ct(t, {
                    parser: function(t, i, s, n, o, r, c) {
                        var h = a.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[s].parse(t, i, s, n, o, r, c)) : (Q("Error: " + e + " js file not loaded."),
                        o)
                    }
                })
            }
        }
        ;
        (c = St.prototype).parseComplex = function(t, e, i, s, n, o) {
            var r, a, l, c, h, d, u = this.keyword;
            if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"),
            l = i.replace(I, "|").split("|")) : u && (a = [e],
            l = [i])),
            l) {
                for (c = l.length > a.length ? l.length : a.length,
                r = 0; r < c; r++)
                    e = a[r] = a[r] || this.dflt,
                    i = l[r] = l[r] || this.dflt,
                    u && (h = e.indexOf(u)) !== (d = i.indexOf(u)) && (-1 === d ? a[r] = a[r].split(u).join("") : -1 === h && (a[r] += " " + u));
                e = a.join(", "),
                i = l.join(", ")
            }
            return xt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, o)
        }
        ,
        c.parse = function(t, e, i, s, o, r, a) {
            return this.parseComplex(t.style, this.format(et(t, this.p, n, !1, this.dflt)), this.format(e), o, r)
        }
        ,
        r.registerSpecialProp = function(t, e, i) {
            Ct(t, {
                parser: function(t, s, n, o, r, a, l) {
                    var c = new wt(t,n,0,0,r,2,n,!1,i);
                    return c.plugin = a,
                    c.setRatio = e(t, s, o._tween, n),
                    c
                },
                priority: i
            })
        }
        ,
        r.useSVGTransformAttr = !0;
        var Ot, Pt, Et, Mt, Dt, Lt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), jt = Z("transform"), It = K + "transform", $t = Z("transformOrigin"), Rt = null !== Z("perspective"), zt = q.Transform = function() {
            this.perspective = parseFloat(r.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === r.defaultForce3D || !Rt) && (r.defaultForce3D || "auto")
        }
        , Nt = _gsScope.SVGElement, Ft = function(t, e, i) {
            var s, n = H.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
            for (s in i)
                n.setAttributeNS(null, s.replace(o, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(n),
            n
        }, Ht = H.documentElement || {}, Bt = (Dt = m || /Android/i.test(Y) && !_gsScope.chrome,
        H.createElementNS && Ht.appendChild && !Dt && (Pt = Ft("svg", Ht),
        Mt = (Et = Ft("rect", Pt, {
            width: 100,
            height: 50,
            x: 100
        })).getBoundingClientRect().width,
        Et.style[$t] = "50% 50%",
        Et.style[jt] = "scaleX(0.5)",
        Dt = Mt === Et.getBoundingClientRect().width && !(f && Rt),
        Ht.removeChild(Pt)),
        Dt), Wt = function(t, e, i, s, n, o) {
            var a, l, c, h, d, u, f, p, m, g, _, v, y, b, w = t._gsTransform, T = Ut(t, !0);
            w && (y = w.xOrigin,
            b = w.yOrigin),
            (!s || (a = s.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            a = [(-1 !== (e = ct(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
            i.xOrigin = h = parseFloat(a[0]),
            i.yOrigin = d = parseFloat(a[1]),
            s && T !== Yt && (u = T[0],
            f = T[1],
            p = T[2],
            m = T[3],
            g = T[4],
            _ = T[5],
            (v = u * m - f * p) && (l = h * (m / v) + d * (-p / v) + (p * _ - m * g) / v,
            c = h * (-f / v) + d * (u / v) - (u * _ - f * g) / v,
            h = i.xOrigin = a[0] = l,
            d = i.yOrigin = a[1] = c)),
            w && (o && (i.xOffset = w.xOffset,
            i.yOffset = w.yOffset,
            w = i),
            n || !1 !== n && !1 !== r.defaultSmoothOrigin ? (l = h - y,
            c = d - b,
            w.xOffset += l * T[0] + c * T[2] - l,
            w.yOffset += l * T[1] + c * T[3] - c) : w.xOffset = w.yOffset = 0),
            o || t.setAttribute("data-svg-origin", a.join(" "))
        }, Xt = function(t) {
            var e, i = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = this.parentNode, n = this.nextSibling, o = this.style.cssText;
            if (Ht.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    e = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = Xt
                } catch (t) {}
            else
                this._originalGetBBox && (e = this._originalGetBBox());
            return n ? s.insertBefore(this, n) : s.appendChild(this),
            Ht.removeChild(i),
            this.style.cssText = o,
            e
        }, qt = function(t) {
            return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return Xt.call(t, !0)
                }
            }(t))
        }, Yt = [1, 0, 0, 1, 0, 0], Ut = function(t, e) {
            var i, s, n, o, r, a, l, c = t._gsTransform || new zt, h = 1e5, d = t.style;
            if (jt ? s = et(t, It, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(L)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), c.x || 0, c.y || 0].join(",") : ""),
            i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s,
            jt && i && !t.offsetParent && t !== Ht && (o = d.display,
            d.display = "block",
            (l = t.parentNode) && t.offsetParent || (r = 1,
            a = t.nextSibling,
            Ht.appendChild(t)),
            i = !(s = et(t, It, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s,
            o ? d.display = o : Zt(d, "display"),
            r && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : Ht.removeChild(t))),
            (c.svg || t.getCTM && qt(t)) && (i && -1 !== (d[jt] + "").indexOf("matrix") && (s = d[jt],
            i = 0),
            n = t.getAttribute("transform"),
            i && n && (s = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")",
            i = 0)),
            i)
                return Yt;
            for (n = (s || "").match(v) || [],
            kt = n.length; --kt > -1; )
                o = Number(n[kt]),
                n[kt] = (r = o - (o |= 0)) ? (r * h + (r < 0 ? -.5 : .5) | 0) / h + o : o;
            return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
        }, Vt = q.getTransform = function(t, i, s, n) {
            if (t._gsTransform && s && !n)
                return t._gsTransform;
            var o, a, l, c, h, d, u = s && t._gsTransform || new zt, f = u.scaleX < 0, p = 2e-5, m = 1e5, g = Rt && (parseFloat(et(t, $t, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0, _ = parseFloat(r.defaultTransformPerspective) || 0;
            if (u.svg = !(!t.getCTM || !qt(t)),
            u.svg && (Wt(t, et(t, $t, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")),
            Ot = r.useSVGTransformAttr || Bt),
            (o = Ut(t)) !== Yt) {
                if (16 === o.length) {
                    var v, y, b, w, T, x = o[0], k = o[1], S = o[2], C = o[3], A = o[4], O = o[5], P = o[6], E = o[7], M = o[8], D = o[9], L = o[10], j = o[12], I = o[13], $ = o[14], R = o[11], N = Math.atan2(P, L);
                    u.zOrigin && (j = M * ($ = -u.zOrigin) - o[12],
                    I = D * $ - o[13],
                    $ = L * $ + u.zOrigin - o[14]),
                    u.rotationX = N * z,
                    N && (v = A * (w = Math.cos(-N)) + M * (T = Math.sin(-N)),
                    y = O * w + D * T,
                    b = P * w + L * T,
                    M = A * -T + M * w,
                    D = O * -T + D * w,
                    L = P * -T + L * w,
                    R = E * -T + R * w,
                    A = v,
                    O = y,
                    P = b),
                    N = Math.atan2(-S, L),
                    u.rotationY = N * z,
                    N && (y = k * (w = Math.cos(-N)) - D * (T = Math.sin(-N)),
                    b = S * w - L * T,
                    D = k * T + D * w,
                    L = S * T + L * w,
                    R = C * T + R * w,
                    x = v = x * w - M * T,
                    k = y,
                    S = b),
                    N = Math.atan2(k, x),
                    u.rotation = N * z,
                    N && (v = x * (w = Math.cos(N)) + k * (T = Math.sin(N)),
                    y = A * w + O * T,
                    b = M * w + D * T,
                    k = k * w - x * T,
                    O = O * w - A * T,
                    D = D * w - M * T,
                    x = v,
                    A = y,
                    M = b),
                    u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0,
                    u.rotationY = 180 - u.rotationY),
                    N = Math.atan2(A, O),
                    u.scaleX = (Math.sqrt(x * x + k * k + S * S) * m + .5 | 0) / m,
                    u.scaleY = (Math.sqrt(O * O + P * P) * m + .5 | 0) / m,
                    u.scaleZ = (Math.sqrt(M * M + D * D + L * L) * m + .5 | 0) / m,
                    x /= u.scaleX,
                    A /= u.scaleY,
                    k /= u.scaleX,
                    O /= u.scaleY,
                    Math.abs(N) > p ? (u.skewX = N * z,
                    A = 0,
                    "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(N))) : u.skewX = 0,
                    u.perspective = R ? 1 / (R < 0 ? -R : R) : 0,
                    u.x = j,
                    u.y = I,
                    u.z = $,
                    u.svg && (u.x -= u.xOrigin - (u.xOrigin * x - u.yOrigin * A),
                    u.y -= u.yOrigin - (u.yOrigin * k - u.xOrigin * O))
                } else if (!Rt || n || !o.length || u.x !== o[4] || u.y !== o[5] || !u.rotationX && !u.rotationY) {
                    var F = o.length >= 6
                      , H = F ? o[0] : 1
                      , B = o[1] || 0
                      , W = o[2] || 0
                      , X = F ? o[3] : 1;
                    u.x = o[4] || 0,
                    u.y = o[5] || 0,
                    l = Math.sqrt(H * H + B * B),
                    c = Math.sqrt(X * X + W * W),
                    h = H || B ? Math.atan2(B, H) * z : u.rotation || 0,
                    d = W || X ? Math.atan2(W, X) * z + h : u.skewX || 0,
                    u.scaleX = l,
                    u.scaleY = c,
                    u.rotation = h,
                    u.skewX = d,
                    Rt && (u.rotationX = u.rotationY = u.z = 0,
                    u.perspective = _,
                    u.scaleZ = 1),
                    u.svg && (u.x -= u.xOrigin - (u.xOrigin * H + u.yOrigin * W),
                    u.y -= u.yOrigin - (u.xOrigin * B + u.yOrigin * X))
                }
                for (a in Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (f ? (u.scaleX *= -1,
                u.skewX += u.rotation <= 0 ? 180 : -180,
                u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1,
                u.skewX += u.skewX <= 0 ? 180 : -180)),
                u.zOrigin = g,
                u)
                    u[a] < p && u[a] > -p && (u[a] = 0)
            }
            return s && (t._gsTransform = u,
            u.svg && (Ot && t.style[jt] ? e.delayedCall(.001, (function() {
                Zt(t.style, jt)
            }
            )) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, (function() {
                t.removeAttribute("transform")
            }
            )))),
            u
        }
        , Qt = function(t) {
            var e, i, s = this.data, n = -s.rotation * R, o = n + s.skewX * R, r = 1e5, a = (Math.cos(n) * s.scaleX * r | 0) / r, l = (Math.sin(n) * s.scaleX * r | 0) / r, c = (Math.sin(o) * -s.scaleY * r | 0) / r, h = (Math.cos(o) * s.scaleY * r | 0) / r, d = this.t.style, u = this.t.currentStyle;
            if (u) {
                i = l,
                l = -c,
                c = -i,
                e = u.filter,
                d.filter = "";
                var f, p, g = this.t.offsetWidth, _ = this.t.offsetHeight, v = "absolute" !== u.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h, b = s.x + g * s.xPercent / 100, w = s.y + _ * s.yPercent / 100;
                if (null != s.ox && (b += (f = (s.oxp ? g * s.ox * .01 : s.ox) - g / 2) - (f * a + (p = (s.oyp ? _ * s.oy * .01 : s.oy) - _ / 2) * l),
                w += p - (f * c + p * h)),
                y += v ? ", Dx=" + ((f = g / 2) - (f * a + (p = _ / 2) * l) + b) + ", Dy=" + (p - (f * c + p * h) + w) + ")" : ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = e.replace(j, y) : d.filter = y + " " + e,
                0 !== t && 1 !== t || 1 === a && 0 === l && 0 === c && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || k.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")),
                !v) {
                    var T, S, C, A = m < 8 ? 1 : -1;
                    for (f = s.ieOffsetX || 0,
                    p = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round((g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * _)) / 2 + b),
                    s.ieOffsetY = Math.round((_ - ((h < 0 ? -h : h) * _ + (c < 0 ? -c : c) * g)) / 2 + w),
                    kt = 0; kt < 4; kt++)
                        C = (i = -1 !== (T = u[S = at[kt]]).indexOf("px") ? parseFloat(T) : it(this.t, S, parseFloat(T), T.replace(x, "")) || 0) !== s[S] ? kt < 2 ? -s.ieOffsetX : -s.ieOffsetY : kt < 2 ? f - s.ieOffsetX : p - s.ieOffsetY,
                        d[S] = (s[S] = Math.round(i - C * (0 === kt || 2 === kt ? 1 : A))) + "px"
                }
            }
        }, Kt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
            var e, i, s, n, o, r, a, l, c, h, d, u, p, m, g, _, v, y, b, w, T, x, k, S = this.data, C = this.t.style, A = S.rotation, O = S.rotationX, P = S.rotationY, E = S.scaleX, M = S.scaleY, D = S.scaleZ, L = S.x, j = S.y, I = S.z, $ = S.svg, z = S.perspective, N = S.force3D, F = S.skewY, H = S.skewX;
            if (F && (H += F,
            A += F),
            !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || I || z || P || O || 1 !== D) || Ot && $ || !Rt)
                A || H || $ ? (A *= R,
                x = H * R,
                k = 1e5,
                i = Math.cos(A) * E,
                o = Math.sin(A) * E,
                s = Math.sin(A - x) * -M,
                r = Math.cos(A - x) * M,
                x && "simple" === S.skewType && (e = Math.tan(x - F * R),
                s *= e = Math.sqrt(1 + e * e),
                r *= e,
                F && (e = Math.tan(F * R),
                i *= e = Math.sqrt(1 + e * e),
                o *= e)),
                $ && (L += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset,
                j += S.yOrigin - (S.xOrigin * o + S.yOrigin * r) + S.yOffset,
                Ot && (S.xPercent || S.yPercent) && (g = this.t.getBBox(),
                L += .01 * S.xPercent * g.width,
                j += .01 * S.yPercent * g.height),
                L < (g = 1e-6) && L > -g && (L = 0),
                j < g && j > -g && (j = 0)),
                b = (i * k | 0) / k + "," + (o * k | 0) / k + "," + (s * k | 0) / k + "," + (r * k | 0) / k + "," + L + "," + j + ")",
                $ && Ot ? this.t.setAttribute("transform", "matrix(" + b) : C[jt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[jt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + M + "," + L + "," + j + ")";
            else {
                if (f && (E < (g = 1e-4) && E > -g && (E = D = 2e-5),
                M < g && M > -g && (M = D = 2e-5),
                !z || S.z || S.rotationX || S.rotationY || (z = 0)),
                A || H)
                    A *= R,
                    _ = i = Math.cos(A),
                    v = o = Math.sin(A),
                    H && (A -= H * R,
                    _ = Math.cos(A),
                    v = Math.sin(A),
                    "simple" === S.skewType && (e = Math.tan((H - F) * R),
                    _ *= e = Math.sqrt(1 + e * e),
                    v *= e,
                    S.skewY && (e = Math.tan(F * R),
                    i *= e = Math.sqrt(1 + e * e),
                    o *= e))),
                    s = -v,
                    r = _;
                else {
                    if (!(P || O || 1 !== D || z || $))
                        return void (C[jt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + j + "px," + I + "px)" + (1 !== E || 1 !== M ? " scale(" + E + "," + M + ")" : ""));
                    i = r = 1,
                    s = o = 0
                }
                h = 1,
                n = a = l = c = d = u = 0,
                p = z ? -1 / z : 0,
                m = S.zOrigin,
                g = 1e-6,
                w = ",",
                T = "0",
                (A = P * R) && (_ = Math.cos(A),
                l = -(v = Math.sin(A)),
                d = p * -v,
                n = i * v,
                a = o * v,
                h = _,
                p *= _,
                i *= _,
                o *= _),
                (A = O * R) && (e = s * (_ = Math.cos(A)) + n * (v = Math.sin(A)),
                y = r * _ + a * v,
                c = h * v,
                u = p * v,
                n = s * -v + n * _,
                a = r * -v + a * _,
                h *= _,
                p *= _,
                s = e,
                r = y),
                1 !== D && (n *= D,
                a *= D,
                h *= D,
                p *= D),
                1 !== M && (s *= M,
                r *= M,
                c *= M,
                u *= M),
                1 !== E && (i *= E,
                o *= E,
                l *= E,
                d *= E),
                (m || $) && (m && (L += n * -m,
                j += a * -m,
                I += h * -m + m),
                $ && (L += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset,
                j += S.yOrigin - (S.xOrigin * o + S.yOrigin * r) + S.yOffset),
                L < g && L > -g && (L = T),
                j < g && j > -g && (j = T),
                I < g && I > -g && (I = 0)),
                b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
                b += (i < g && i > -g ? T : i) + w + (o < g && o > -g ? T : o) + w + (l < g && l > -g ? T : l),
                b += w + (d < g && d > -g ? T : d) + w + (s < g && s > -g ? T : s) + w + (r < g && r > -g ? T : r),
                O || P || 1 !== D ? (b += w + (c < g && c > -g ? T : c) + w + (u < g && u > -g ? T : u) + w + (n < g && n > -g ? T : n),
                b += w + (a < g && a > -g ? T : a) + w + (h < g && h > -g ? T : h) + w + (p < g && p > -g ? T : p) + w) : b += ",0,0,0,0,1,0,",
                b += L + w + j + w + I + w + (z ? 1 + -I / z : 1) + ")",
                C[jt] = b
            }
        }
        ;
        (c = zt.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
        c.scaleX = c.scaleY = c.scaleZ = 1,
        Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, s, o, a, l) {
                if (s._lastParsedTransform === l)
                    return o;
                s._lastParsedTransform = l;
                var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                c && (l.scale = c(_, t));
                var h, d, u, f, p, m, v, y, b, w = t._gsTransform, T = t.style, x = 1e-6, k = Lt.length, S = l, C = {}, A = "transformOrigin", O = Vt(t, n, !0, S.parseTransform), P = S.transform && ("function" == typeof S.transform ? S.transform(_, g) : S.transform);
                if (O.skewType = S.skewType || O.skewType || r.defaultSkewType,
                s._transform = O,
                "rotationZ"in S && (S.rotation = S.rotationZ),
                P && "string" == typeof P && jt)
                    (d = W.style)[jt] = P,
                    d.display = "block",
                    d.position = "absolute",
                    -1 !== P.indexOf("%") && (d.width = et(t, "width"),
                    d.height = et(t, "height")),
                    H.body.appendChild(W),
                    h = Vt(W, null, !1),
                    "simple" === O.skewType && (h.scaleY *= Math.cos(h.skewX * R)),
                    O.svg && (m = O.xOrigin,
                    v = O.yOrigin,
                    h.x -= O.xOffset,
                    h.y -= O.yOffset,
                    (S.transformOrigin || S.svgOrigin) && (P = {},
                    Wt(t, ct(S.transformOrigin), P, S.svgOrigin, S.smoothOrigin, !0),
                    m = P.xOrigin,
                    v = P.yOrigin,
                    h.x -= P.xOffset - O.xOffset,
                    h.y -= P.yOffset - O.yOffset),
                    (m || v) && (y = Ut(W, !0),
                    h.x -= m - (m * y[0] + v * y[2]),
                    h.y -= v - (m * y[1] + v * y[3]))),
                    H.body.removeChild(W),
                    h.perspective || (h.perspective = O.perspective),
                    null != S.xPercent && (h.xPercent = dt(S.xPercent, O.xPercent)),
                    null != S.yPercent && (h.yPercent = dt(S.yPercent, O.yPercent));
                else if ("object" == typeof S) {
                    if (h = {
                        scaleX: dt(null != S.scaleX ? S.scaleX : S.scale, O.scaleX),
                        scaleY: dt(null != S.scaleY ? S.scaleY : S.scale, O.scaleY),
                        scaleZ: dt(S.scaleZ, O.scaleZ),
                        x: dt(S.x, O.x),
                        y: dt(S.y, O.y),
                        z: dt(S.z, O.z),
                        xPercent: dt(S.xPercent, O.xPercent),
                        yPercent: dt(S.yPercent, O.yPercent),
                        perspective: dt(S.transformPerspective, O.perspective)
                    },
                    null != (p = S.directionalRotation))
                        if ("object" == typeof p)
                            for (d in p)
                                S[d] = p[d];
                        else
                            S.rotation = p;
                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (h.x = 0,
                    h.xPercent = dt(S.x, O.xPercent)),
                    "string" == typeof S.y && -1 !== S.y.indexOf("%") && (h.y = 0,
                    h.yPercent = dt(S.y, O.yPercent)),
                    h.rotation = ut("rotation"in S ? S.rotation : "shortRotation"in S ? S.shortRotation + "_short" : O.rotation, O.rotation, "rotation", C),
                    Rt && (h.rotationX = ut("rotationX"in S ? S.rotationX : "shortRotationX"in S ? S.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", C),
                    h.rotationY = ut("rotationY"in S ? S.rotationY : "shortRotationY"in S ? S.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", C)),
                    h.skewX = ut(S.skewX, O.skewX),
                    h.skewY = ut(S.skewY, O.skewY)
                }
                for (Rt && null != S.force3D && (O.force3D = S.force3D,
                f = !0),
                (u = O.force3D || O.z || O.rotationX || O.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == S.scale || (h.scaleZ = 1); --k > -1; )
                    ((P = h[b = Lt[k]] - O[b]) > x || P < -x || null != S[b] || null != N[b]) && (f = !0,
                    o = new wt(O,b,O[b],P,o),
                    b in C && (o.e = C[b]),
                    o.xs0 = 0,
                    o.plugin = a,
                    s._overwriteProps.push(o.n));
                return P = "function" == typeof S.transformOrigin ? S.transformOrigin(_, g) : S.transformOrigin,
                O.svg && (P || S.svgOrigin) && (m = O.xOffset,
                v = O.yOffset,
                Wt(t, ct(P), h, S.svgOrigin, S.smoothOrigin),
                o = Tt(O, "xOrigin", (w ? O : h).xOrigin, h.xOrigin, o, A),
                o = Tt(O, "yOrigin", (w ? O : h).yOrigin, h.yOrigin, o, A),
                m === O.xOffset && v === O.yOffset || (o = Tt(O, "xOffset", w ? m : O.xOffset, O.xOffset, o, A),
                o = Tt(O, "yOffset", w ? v : O.yOffset, O.yOffset, o, A)),
                P = "0px 0px"),
                (P || Rt && u && O.zOrigin) && (jt ? (f = !0,
                b = $t,
                P || (P = (P = (et(t, b, n, !1, "50% 50%") + "").split(" "))[0] + " " + P[1] + " " + O.zOrigin + "px"),
                P += "",
                (o = new wt(T,b,0,0,o,-1,A)).b = T[b],
                o.plugin = a,
                Rt ? (d = O.zOrigin,
                P = P.split(" "),
                O.zOrigin = (P.length > 2 ? parseFloat(P[2]) : d) || 0,
                o.xs0 = o.e = P[0] + " " + (P[1] || "50%") + " 0px",
                (o = new wt(O,"zOrigin",0,0,o,-1,o.n)).b = d,
                o.xs0 = o.e = O.zOrigin) : o.xs0 = o.e = P) : ct(P + "", O)),
                f && (s._transformType = O.svg && Ot || !u && 3 !== this._transformType ? 2 : 3),
                c && (l.scale = c),
                o
            },
            allowFunc: !0,
            prefix: !0
        }),
        Ct("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Ct("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: vt("inset(0% 0% 0% 0%)", !1, !0)
        }),
        Ct("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, o, r, a) {
                e = this.format(e);
                var l, c, h, d, u, f, p, m, g, _, v, y, b, w, T, x, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                for (g = parseFloat(t.offsetWidth),
                _ = parseFloat(t.offsetHeight),
                l = e.split(" "),
                c = 0; c < k.length; c++)
                    this.p.indexOf("border") && (k[c] = Z(k[c])),
                    -1 !== (u = d = et(t, k[c], n, !1, "0px")).indexOf(" ") && (d = u.split(" "),
                    u = d[0],
                    d = d[1]),
                    f = h = l[c],
                    p = parseFloat(u),
                    y = u.substr((p + "").length),
                    (b = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10),
                    f = f.substr(2),
                    m *= parseFloat(f),
                    v = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f),
                    v = f.substr((m + "").length)),
                    "" === v && (v = s[i] || y),
                    v !== y && (w = it(t, "borderLeft", p, y),
                    T = it(t, "borderTop", p, y),
                    "%" === v ? (u = w / g * 100 + "%",
                    d = T / _ * 100 + "%") : "em" === v ? (u = w / (x = it(t, "borderLeft", 1, "em")) + "em",
                    d = T / x + "em") : (u = w + "px",
                    d = T + "px"),
                    b && (f = parseFloat(u) + m + v,
                    h = parseFloat(d) + m + v)),
                    r = xt(S, k[c], u + " " + d, f + " " + h, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: vt("0px 0px 0px 0px", !1, !0)
        }),
        Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, o, r) {
                return xt(t.style, i, this.format(et(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", o)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }),
        Ct("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, o, r) {
                var a, l, c, h, d, u, f = "background-position", p = n || tt(t), g = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), _ = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (u = et(t, "backgroundImage").replace(E, "")) && "none" !== u) {
                    for (a = g.split(" "),
                    l = _.split(" "),
                    X.setAttribute("src", u),
                    c = 2; --c > -1; )
                        (h = -1 !== (g = a[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? t.offsetWidth - X.width : t.offsetHeight - X.height,
                        a[c] = h ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, _, o, r)
            },
            formatter: ct
        }),
        Ct("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return "co" === (t += "").substr(0, 2) ? t : ct(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }),
        Ct("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Ct("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Ct("transformStyle", {
            prefix: !0
        }),
        Ct("backfaceVisibility", {
            prefix: !0
        }),
        Ct("userSelect", {
            prefix: !0
        }),
        Ct("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Ct("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Ct("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, o, r) {
                var a, l, c;
                return m < 9 ? (l = t.currentStyle,
                c = m < 8 ? " " : ",",
                a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
                e = this.format(e).split(",").join(c)) : (a = this.format(et(t, this.p, n, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, a, e, o, r)
            }
        }),
        Ct("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Ct("autoRound,strictUnits", {
            parser: function(t, e, i, s, n) {
                return n
            }
        }),
        Ct("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, o, r) {
                var a = et(t, "borderTopWidth", n, !1, "0px")
                  , l = this.format(e).split(" ")
                  , c = l[0].replace(x, "");
                return "px" !== c && (a = parseFloat(a) / it(t, "borderTopWidth", 1, c) + c),
                this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", n, !1, "solid") + " " + et(t, "borderTopColor", n, !1, "#000")), l.join(" "), o, r)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
            }
        }),
        Ct("borderWidth", {
            parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Ct("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, n, o) {
                var r = t.style
                  , a = "cssFloat"in r ? "cssFloat" : "styleFloat";
                return new wt(r,a,0,0,n,-1,i,!1,0,r[a],e)
            }
        });
        var Gt = function(t) {
            var e, i = this.t, s = i.filter || et(this.data, "filter") || "", n = this.s + this.c * t | 0;
            100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !et(this.data, "filter")) : (i.filter = s.replace(C, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"),
            -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(k, "opacity=" + n))
        };
        Ct("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, o, r) {
                var a = parseFloat(et(t, "opacity", n, !1, "1"))
                  , l = t.style
                  , c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                c && 1 === a && "hidden" === et(t, "visibility", n) && 0 !== e && (a = 0),
                U ? o = new wt(l,"opacity",a,e - a,o) : ((o = new wt(l,"opacity",100 * a,100 * (e - a),o)).xn1 = c ? 1 : 0,
                l.zoom = 1,
                o.type = 2,
                o.b = "alpha(opacity=" + o.s + ")",
                o.e = "alpha(opacity=" + (o.s + o.c) + ")",
                o.data = t,
                o.plugin = r,
                o.setRatio = Gt),
                c && ((o = new wt(l,"visibility",0,0,o,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                s._overwriteProps.push(o.n),
                s._overwriteProps.push(i)),
                o
            }
        });
        var Zt = function(t, e) {
            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            t.removeProperty(e.replace(O, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Jt = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Zt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Ct("className", {
            parser: function(t, e, s, o, r, a, l) {
                var c, h, d, u, f, p = t.getAttribute("class") || "", m = t.style.cssText;
                if ((r = o._classNamePT = new wt(t,s,0,0,r,2)).setRatio = Jt,
                r.pr = -11,
                i = !0,
                r.b = p,
                h = nt(t, n),
                d = t._gsClassPT) {
                    for (u = {},
                    f = d.data; f; )
                        u[f.p] = 1,
                        f = f._next;
                    d.setRatio(1)
                }
                return t._gsClassPT = r,
                r.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", r.e),
                c = ot(t, h, nt(t), l, u),
                t.setAttribute("class", p),
                r.data = c.firstMPT,
                t.style.cssText !== m && (t.style.cssText = m),
                r = r.xfirst = o.parse(t, c.difs, r, a)
            }
        });
        var te = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, n, o, r = this.t.style, a = l.transform.parse;
                if ("all" === this.e)
                    r.cssText = "",
                    n = !0;
                else
                    for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1; )
                        i = e[s],
                        l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? $t : l[i].p),
                        Zt(r, i);
                n && (Zt(r, jt),
                (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (Ct("clearProps", {
            parser: function(t, e, s, n, o) {
                return (o = new wt(t,s,0,0,o,2)).setRatio = te,
                o.e = e,
                o.pr = -10,
                o.data = n._tween,
                i = !0,
                o
            }
        }),
        c = "bezier,throwProps,physicsProps,physics2D".split(","),
        kt = c.length; kt--; )
            At(c[kt]);
        (c = r.prototype)._firstPT = c._lastParsedTransform = c._transform = null,
        c._onInitTween = function(t, e, a, c) {
            if (!t.nodeType)
                return !1;
            this._target = g = t,
            this._tween = a,
            this._vars = e,
            _ = c,
            h = e.autoRound,
            i = !1,
            s = e.suffixMap || r.suffixMap,
            n = tt(t),
            o = this._overwriteProps;
            var f, m, v, y, b, w, T, x, k, C = t.style;
            if (d && "" === C.zIndex && ("auto" !== (f = et(t, "zIndex", n)) && "" !== f || this._addLazySet(C, "zIndex", 0)),
            "string" == typeof e && (y = C.cssText,
            f = nt(t, n),
            C.cssText = y + ";" + e,
            f = ot(t, f, nt(t)).difs,
            !U && S.test(e) && (f.opacity = parseFloat(RegExp.$1)),
            e = f,
            C.cssText = y),
            e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null),
            this._transformType) {
                for (k = 3 === this._transformType,
                jt ? u && (d = !0,
                "" === C.zIndex && ("auto" !== (T = et(t, "zIndex", n)) && "" !== T || this._addLazySet(C, "zIndex", 0)),
                p && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1,
                v = m; v && v._next; )
                    v = v._next;
                x = new wt(t,"transform",0,0,null,2),
                this._linkCSSP(x, null, v),
                x.setRatio = jt ? Kt : Qt,
                x.data = this._transform || Vt(t, n, !0),
                x.tween = a,
                x.pr = -1,
                o.pop()
            }
            if (i) {
                for (; m; ) {
                    for (w = m._next,
                    v = y; v && v.pr > m.pr; )
                        v = v._next;
                    (m._prev = v ? v._prev : b) ? m._prev._next = m : y = m,
                    (m._next = v) ? v._prev = m : b = m,
                    m = w
                }
                this._firstPT = y
            }
            return !0
        }
        ,
        c.parse = function(t, e, i, o) {
            var r, a, c, d, u, f, p, m, v, y, b = t.style;
            for (r in e) {
                if (f = e[r],
                a = l[r],
                "function" != typeof f || a && a.allowFunc || (f = f(_, g)),
                a)
                    i = a.parse(t, f, r, this, i, o, e);
                else {
                    if ("--" === r.substr(0, 2)) {
                        this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(r) + "", f + "", r, !1, r);
                        continue
                    }
                    u = et(t, r, n) + "",
                    v = "string" == typeof f,
                    "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || v && A.test(f) ? (v || (f = ((f = mt(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                    i = xt(b, r, u, f, !0, "transparent", i, 0, o)) : v && $.test(f) ? i = xt(b, r, u, f, !0, null, i, 0, o) : (p = (c = parseFloat(u)) || 0 === c ? u.substr((c + "").length) : "",
                    "" !== u && "auto" !== u || ("width" === r || "height" === r ? (c = lt(t, r, n),
                    p = "px") : "left" === r || "top" === r ? (c = st(t, r, n),
                    p = "px") : (c = "opacity" !== r ? 0 : 1,
                    p = "")),
                    (y = v && "=" === f.charAt(1)) ? (d = parseInt(f.charAt(0) + "1", 10),
                    f = f.substr(2),
                    d *= parseFloat(f),
                    m = f.replace(x, "")) : (d = parseFloat(f),
                    m = v ? f.replace(x, "") : ""),
                    "" === m && (m = r in s ? s[r] : p),
                    f = d || 0 === d ? (y ? d + c : d) + m : e[r],
                    p !== m && ("" === m && "lineHeight" !== r || (d || 0 === d) && c && (c = it(t, r, c, p),
                    "%" === m ? (c /= it(t, r, 100, "%") / 100,
                    !0 !== e.strictUnits && (u = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= it(t, r, 1, m) : "px" !== m && (d = it(t, r, d, m),
                    m = "px"),
                    y && (d || 0 === d) && (f = d + c + m))),
                    y && (d += c),
                    !c && 0 !== c || !d && 0 !== d ? void 0 !== b[r] && (f || f + "" != "NaN" && null != f) ? (i = new wt(b,r,d || c || 0,0,i,-1,r,!1,0,u,f)).xs0 = "none" !== f || "display" !== r && -1 === r.indexOf("Style") ? f : u : Q("invalid " + r + " tween value: " + e[r]) : (i = new wt(b,r,c,d - c,i,0,r,!1 !== h && ("px" === m || "zIndex" === r),0,u,f)).xs0 = m)
                }
                o && i && !i.plugin && (i.plugin = o)
            }
            return i
        }
        ,
        c.setRatio = function(t) {
            var e, i, s, n = this._firstPT, o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; n; ) {
                        if (e = n.c * t + n.s,
                        n.r ? e = n.r(e) : e < o && e > -o && (e = 0),
                        n.type)
                            if (1 === n.type)
                                if (2 === (s = n.l))
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === s)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === s)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === s)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1,
                                    s = 1; s < n.l; s++)
                                        i += n["xn" + s] + n["xs" + (s + 1)];
                                    n.t[n.p] = i
                                }
                            else
                                -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                        else
                            n.t[n.p] = e + n.xs0;
                        n = n._next
                    }
                else
                    for (; n; )
                        2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t),
                        n = n._next;
            else
                for (; n; ) {
                    if (2 !== n.type)
                        if (n.r && -1 !== n.type)
                            if (e = n.r(n.s + n.c),
                            n.type) {
                                if (1 === n.type) {
                                    for (s = n.l,
                                    i = n.xs0 + e + n.xs1,
                                    s = 1; s < n.l; s++)
                                        i += n["xn" + s] + n["xs" + (s + 1)];
                                    n.t[n.p] = i
                                }
                            } else
                                n.t[n.p] = e + n.xs0;
                        else
                            n.t[n.p] = n.e;
                    else
                        n.setRatio(t);
                    n = n._next
                }
        }
        ,
        c._enableTransforms = function(t) {
            this._transform = this._transform || Vt(this._target, n, !0),
            this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var ee = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(t, e, i) {
            var s = this._firstPT = new wt(t,e,0,0,this._firstPT,2);
            s.e = i,
            s.setRatio = ee,
            s.data = this
        }
        ,
        c._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            s = !0),
            i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        c._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && (e.r = t[e.p]),
                e = e._next
        }
        ,
        c._kill = function(e) {
            var i, s, n, o = e;
            if (e.autoAlpha || e.alpha) {
                for (s in o = {},
                e)
                    o[s] = e[s];
                o.opacity = 1,
                o.autoAlpha && (o.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, n._prev),
            this._classNamePT = null),
            i = this._firstPT; i; )
                i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e),
                s = i.plugin),
                i = i._next;
            return t.prototype._kill.call(this, o)
        }
        ;
        var ie = function(t, e, i) {
            var s, n, o, r;
            if (t.slice)
                for (n = t.length; --n > -1; )
                    ie(t[n], e, i);
            else
                for (n = (s = t.childNodes).length; --n > -1; )
                    r = (o = s[n]).type,
                    o.style && (e.push(nt(o)),
                    i && i.push(o)),
                    1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || ie(o, e, i)
        };
        return r.cascadeTo = function(t, i, s) {
            var n, o, r, a, l = e.to(t, i, s), c = [l], h = [], d = [], u = [], f = e._internals.reservedProps;
            for (t = l._targets || l.target,
            ie(t, h, u),
            l.render(i, !0, !0),
            ie(t, d),
            l.render(0, !0, !0),
            l._enabled(!0),
            n = u.length; --n > -1; )
                if ((o = ot(u[n], h[n], d[n])).firstMPT) {
                    for (r in o = o.difs,
                    s)
                        f[r] && (o[r] = s[r]);
                    for (r in a = {},
                    o)
                        a[r] = h[n][r];
                    c.push(e.fromTo(u[n], i, a, o))
                }
            return c
        }
        ,
        t.activate([r]),
        r
    }
    ), !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        })
          , e = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(i) {
                return (Math.round(i / t) * t * e | 0) / e
            }
        }
          , i = function(t, e) {
            for (; t; )
                t.f || t.blob || (t.m = e || Math.round),
                t = t._next
        }
          , s = t.prototype;
        s._onInitAllProps = function() {
            var t, s, n, o, r = this._tween, a = r.vars.roundProps, l = {}, c = r._propLookup.roundProps;
            if ("object" != typeof a || a.push)
                for ("string" == typeof a && (a = a.split(",")),
                n = a.length; --n > -1; )
                    l[a[n]] = Math.round;
            else
                for (o in a)
                    l[o] = e(a[o]);
            for (o in l)
                for (t = r._firstPT; t; )
                    s = t._next,
                    t.pg ? t.t._mod(l) : t.n === o && (2 === t.f && t.t ? i(t.t._firstPT, l[o]) : (this._add(t.t, o, t.s, t.c, l[o]),
                    s && (s._prev = t._prev),
                    t._prev ? t._prev._next = s : r._firstPT === t && (r._firstPT = s),
                    t._next = t._prev = null,
                    r._propLookup[o] = c)),
                    t = s;
            return !1
        }
        ,
        s._add = function(t, e, i, s, n) {
            this._addTween(t, e, i, i + s, e, n || Math.round),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, i, s) {
            var n, o;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (n in e)
                "function" == typeof (o = e[n]) && (o = o(s, t)),
                this._addTween(t, "setAttribute", t.getAttribute(n) + "", o + "", n, !1, n),
                this._overwriteProps.push(n);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, s) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var n, o, r, a, l, c, h = !0 === e.useRadians ? 2 * Math.PI : 360, d = 1e-6;
            for (n in e)
                "useRadians" !== n && ("function" == typeof (a = e[n]) && (a = a(s, t)),
                o = (c = (a + "").split("_"))[0],
                r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()),
                l = (a = this.finals[n] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - r,
                c.length && (-1 !== (o = c.join("_")).indexOf("short") && (l %= h) !== l % (h / 2) && (l = l < 0 ? l + h : l - h),
                -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)),
                (l > d || l < -d) && (this._addTween(t, n, r, r + l, n),
                this._overwriteProps.push(n)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], (function(t) {
        var e, i, s, n, o = _gsScope.GreenSockGlobals || _gsScope, r = o.com.greensock, a = 2 * Math.PI, l = Math.PI / 2, c = r._class, h = function(e, i) {
            var s = c("easing." + e, (function() {}
            ), !0)
              , n = s.prototype = new t;
            return n.constructor = s,
            n.getRatio = i,
            s
        }, d = t.register || function() {}
        , u = function(t, e, i, s, n) {
            var o = c("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return d(o, t),
            o
        }, f = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, p = function(e, i) {
            var s = c("easing." + e, (function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }
            ), !0)
              , n = s.prototype = new t;
            return n.constructor = s,
            n.getRatio = i,
            n.config = function(t) {
                return new s(t)
            }
            ,
            s
        }, m = u("Back", p("BackOut", (function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }
        )), p("BackIn", (function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }
        )), p("BackInOut", (function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        }
        ))), g = c("easing.SlowMo", (function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }
        ), !0), _ = g.prototype = new t;
        return _.constructor = g,
        _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        g.ease = new g(.7,.7),
        _.config = g.config = function(t, e, i) {
            return new g(t,e,i)
        }
        ,
        (_ = (e = c("easing.SteppedEase", (function(t, e) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + (e ? 0 : 1),
            this._p3 = e ? 1 : 0
        }
        ), !0)).prototype = new t).constructor = e,
        _.getRatio = function(t) {
            return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
            ((this._p2 * t | 0) + this._p3) * this._p1
        }
        ,
        _.config = e.config = function(t, i) {
            return new e(t,i)
        }
        ,
        (_ = (i = c("easing.ExpoScaleEase", (function(t, e, i) {
            this._p1 = Math.log(e / t),
            this._p2 = e - t,
            this._p3 = t,
            this._ease = i
        }
        ), !0)).prototype = new t).constructor = i,
        _.getRatio = function(t) {
            return this._ease && (t = this._ease.getRatio(t)),
            (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        }
        ,
        _.config = i.config = function(t, e, s) {
            return new i(t,e,s)
        }
        ,
        (_ = (s = c("easing.RoughEase", (function(e) {
            for (var i, s, n, o, r, a, l = (e = e || {}).taper || "none", c = [], h = 0, d = 0 | (e.points || 20), u = d, p = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --u > -1; )
                i = p ? Math.random() : 1 / d * u,
                s = g ? g.getRatio(i) : i,
                n = "none" === l ? _ : "out" === l ? (o = 1 - i) * o * _ : "in" === l ? i * i * _ : i < .5 ? (o = 2 * i) * o * .5 * _ : (o = 2 * (1 - i)) * o * .5 * _,
                p ? s += Math.random() * n - .5 * n : u % 2 ? s += .5 * n : s -= .5 * n,
                m && (s > 1 ? s = 1 : s < 0 && (s = 0)),
                c[h++] = {
                    x: i,
                    y: s
                };
            for (c.sort((function(t, e) {
                return t.x - e.x
            }
            )),
            a = new f(1,1,null),
            u = d; --u > -1; )
                r = c[u],
                a = new f(r.x,r.y,a);
            this._prev = new f(0,0,0 !== a.t ? a : a.next)
        }
        ), !0)).prototype = new t).constructor = s,
        _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        _.config = function(t) {
            return new s(t)
        }
        ,
        s.ease = new s,
        u("Bounce", h("BounceOut", (function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
        )), h("BounceIn", (function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }
        )), h("BounceInOut", (function(t) {
            var e = t < .5;
            return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        }
        ))),
        u("Circ", h("CircOut", (function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }
        )), h("CircIn", (function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }
        )), h("CircInOut", (function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
        ))),
        n = function(e, i, s) {
            var n = c("easing." + e, (function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || s) / (t < 1 ? t : 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            }
            ), !0)
              , o = n.prototype = new t;
            return o.constructor = n,
            o.getRatio = i,
            o.config = function(t, e) {
                return new n(t,e)
            }
            ,
            n
        }
        ,
        u("Elastic", n("ElasticOut", (function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }
        ), .3), n("ElasticIn", (function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }
        ), .3), n("ElasticInOut", (function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }
        ), .45)),
        u("Expo", h("ExpoOut", (function(t) {
            return 1 - Math.pow(2, -10 * t)
        }
        )), h("ExpoIn", (function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }
        )), h("ExpoInOut", (function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        ))),
        u("Sine", h("SineOut", (function(t) {
            return Math.sin(t * l)
        }
        )), h("SineIn", (function(t) {
            return 1 - Math.cos(t * l)
        }
        )), h("SineInOut", (function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }
        ))),
        c("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        d(o.SlowMo, "SlowMo", "ease,"),
        d(s, "RoughEase", "ease,"),
        d(e, "SteppedEase", "ease,"),
        m
    }
    ), !0)
}
)),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = {}
      , s = t.document
      , n = t.GreenSockGlobals = t.GreenSockGlobals || t
      , o = n.TweenMax;
    if (o)
        return "undefined" != typeof module && module.exports && (module.exports = o),
        o;
    var r, a, l, c, h, d, u, f = function(t) {
        var e, i = t.split("."), s = n;
        for (e = 0; e < i.length; e++)
            s[i[e]] = s = s[i[e]] || {};
        return s
    }, p = f("com.greensock"), m = 1e-8, g = function(t) {
        var e, i = [], s = t.length;
        for (e = 0; e !== s; i.push(t[e++]))
            ;
        return i
    }, _ = function() {}, v = (d = Object.prototype.toString,
    u = d.call([]),
    function(t) {
        return null != t && (t instanceof Array || "object" == typeof t && !!t.push && d.call(t) === u)
    }
    ), y = {}, b = function(s, o, r, a) {
        this.sc = y[s] ? y[s].sc : [],
        y[s] = this,
        this.gsClass = null,
        this.func = r;
        var l = [];
        this.check = function(c) {
            for (var h, d, u, p, m = o.length, g = m; --m > -1; )
                (h = y[o[m]] || new b(o[m],[])).gsClass ? (l[m] = h.gsClass,
                g--) : c && h.sc.push(this);
            if (0 === g && r) {
                if (u = (d = ("com.greensock." + s).split(".")).pop(),
                p = f(d.join("."))[u] = this.gsClass = r.apply(r, l),
                a)
                    if (n[u] = i[u] = p,
                    "undefined" != typeof module && module.exports)
                        if (s === e)
                            for (m in module.exports = i.TweenMax = p,
                            i)
                                p[m] = i[m];
                        else
                            i.TweenMax && (i.TweenMax[u] = p);
                    else
                        "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], (function() {
                            return p
                        }
                        ));
                for (m = 0; m < this.sc.length; m++)
                    this.sc[m].check()
            }
        }
        ,
        this.check(!0)
    }, w = t._gsDefine = function(t, e, i, s) {
        return new b(t,e,i,s)
    }
    , T = p._class = function(t, e, i) {
        return e = e || function() {}
        ,
        w(t, [], (function() {
            return e
        }
        ), i),
        e
    }
    ;
    w.globals = n;
    var x = [0, 0, 1, 1]
      , k = T("easing.Ease", (function(t, e, i, s) {
        this._func = t,
        this._type = i || 0,
        this._power = s || 0,
        this._params = e ? x.concat(e) : x
    }
    ), !0)
      , S = k.map = {}
      , C = k.register = function(t, e, i, s) {
        for (var n, o, r, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
            for (o = l[c],
            n = s ? T("easing." + o, null, !0) : p.easing[o] || {},
            r = h.length; --r > -1; )
                a = h[r],
                S[o + "." + a] = S[a + o] = n[a] = t.getRatio ? t : t[a] || new t
    }
    ;
    for ((l = k.prototype)._calcEnd = !1,
    l.getRatio = function(t) {
        if (this._func)
            return this._params[0] = t,
            this._func.apply(null, this._params);
        var e = this._type
          , i = this._power
          , s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
        1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
    }
    ,
    a = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1; )
        l = r[a] + ",Power" + a,
        C(new k(null,null,1,a), l, "easeOut", !0),
        C(new k(null,null,2,a), l, "easeIn" + (0 === a ? ",easeNone" : "")),
        C(new k(null,null,3,a), l, "easeInOut");
    S.linear = p.easing.Linear.easeIn,
    S.swing = p.easing.Quad.easeInOut;
    var A = T("events.EventDispatcher", (function(t) {
        this._listeners = {},
        this._eventTarget = t || this
    }
    ));
    (l = A.prototype).addEventListener = function(t, e, i, s, n) {
        n = n || 0;
        var o, r, a = this._listeners[t], l = 0;
        for (this !== c || h || c.wake(),
        null == a && (this._listeners[t] = a = []),
        r = a.length; --r > -1; )
            (o = a[r]).c === e && o.s === i ? a.splice(r, 1) : 0 === l && o.pr < n && (l = r + 1);
        a.splice(l, 0, {
            c: e,
            s: i,
            up: s,
            pr: n
        })
    }
    ,
    l.removeEventListener = function(t, e) {
        var i, s = this._listeners[t];
        if (s)
            for (i = s.length; --i > -1; )
                if (s[i].c === e)
                    return void s.splice(i, 1)
    }
    ,
    l.dispatchEvent = function(t) {
        var e, i, s, n = this._listeners[t];
        if (n)
            for ((e = n.length) > 1 && (n = n.slice(0)),
            i = this._eventTarget; --e > -1; )
                (s = n[e]) && (s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i))
    }
    ;
    var O = t.requestAnimationFrame
      , P = t.cancelAnimationFrame
      , E = Date.now || function() {
        return (new Date).getTime()
    }
      , M = E();
    for (a = (r = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !O; )
        O = t[r[a] + "RequestAnimationFrame"],
        P = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
    T("Ticker", (function(t, e) {
        var i, n, o, r, a, l = this, d = E(), u = !(!1 === e || !O) && "auto", f = 500, p = 33, m = function(t) {
            var e, s, c = E() - M;
            c > f && (d += c - p),
            M += c,
            l.time = (M - d) / 1e3,
            e = l.time - a,
            (!i || e > 0 || !0 === t) && (l.frame++,
            a += e + (e >= r ? .004 : r - e),
            s = !0),
            !0 !== t && (o = n(m)),
            s && l.dispatchEvent("tick")
        };
        A.call(l),
        l.time = l.frame = 0,
        l.tick = function() {
            m(!0)
        }
        ,
        l.lagSmoothing = function(t, e) {
            if (!arguments.length)
                return f < 1e8;
            f = t || 1e8,
            p = Math.min(e, f, 0)
        }
        ,
        l.sleep = function() {
            null != o && (u && P ? P(o) : clearTimeout(o),
            n = _,
            o = null,
            l === c && (h = !1))
        }
        ,
        l.wake = function(t) {
            null !== o ? l.sleep() : t ? d += -M + (M = E()) : l.frame > 10 && (M = E() - f + 5),
            n = 0 === i ? _ : u && O ? O : function(t) {
                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
            }
            ,
            l === c && (h = !0),
            m(2)
        }
        ,
        l.fps = function(t) {
            if (!arguments.length)
                return i;
            r = 1 / ((i = t) || 60),
            a = this.time + r,
            l.wake()
        }
        ,
        l.useRAF = function(t) {
            if (!arguments.length)
                return u;
            l.sleep(),
            u = t,
            l.fps(i)
        }
        ,
        l.fps(t),
        setTimeout((function() {
            "auto" === u && l.frame < 5 && "hidden" !== (s || {}).visibilityState && l.useRAF(!1)
        }
        ), 1500)
    }
    )),
    (l = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
    var D = T("core.Animation", (function(t, e) {
        if (this.vars = e = e || {},
        this._duration = this._totalDuration = t || 0,
        this._delay = Number(e.delay) || 0,
        this._timeScale = 1,
        this._active = !!e.immediateRender,
        this.data = e.data,
        this._reversed = !!e.reversed,
        Z) {
            h || c.wake();
            var i = this.vars.useFrames ? G : Z;
            i.add(this, i._time),
            this.vars.paused && this.paused(!0)
        }
    }
    ));
    c = D.ticker = new p.Ticker,
    (l = D.prototype)._dirty = l._gc = l._initted = l._paused = !1,
    l._totalTime = l._time = 0,
    l._rawPrevTime = -1,
    l._next = l._last = l._onUpdate = l._timeline = l.timeline = null,
    l._paused = !1;
    var L = function() {
        h && E() - M > 2e3 && ("hidden" !== (s || {}).visibilityState || !c.lagSmoothing()) && c.wake();
        var t = setTimeout(L, 2e3);
        t.unref && t.unref()
    };
    L(),
    l.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    l.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    l.resume = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!1)
    }
    ,
    l.seek = function(t, e) {
        return this.totalTime(Number(t), !1 !== e)
    }
    ,
    l.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
    }
    ,
    l.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    l.render = function(t, e, i) {}
    ,
    l.invalidate = function() {
        return this._time = this._totalTime = 0,
        this._initted = this._gc = !1,
        this._rawPrevTime = -1,
        !this._gc && this.timeline || this._enabled(!0),
        this
    }
    ,
    l.isActive = function() {
        var t, e = this._timeline, i = this._startTime;
        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - m
    }
    ,
    l._enabled = function(t, e) {
        return h || c.wake(),
        this._gc = !t,
        this._active = this.isActive(),
        !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
        !1
    }
    ,
    l._kill = function(t, e) {
        return this._enabled(!1, !1)
    }
    ,
    l.kill = function(t, e) {
        return this._kill(t, e),
        this
    }
    ,
    l._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
            e._dirty = !0,
            e = e.timeline;
        return this
    }
    ,
    l._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
        return i
    }
    ,
    l._callback = function(t) {
        var e = this.vars
          , i = e[t]
          , s = e[t + "Params"]
          , n = e[t + "Scope"] || e.callbackScope || this;
        switch (s ? s.length : 0) {
        case 0:
            i.call(n);
            break;
        case 1:
            i.call(n, s[0]);
            break;
        case 2:
            i.call(n, s[0], s[1]);
            break;
        default:
            i.apply(n, s)
        }
    }
    ,
    l.eventCallback = function(t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
            var n = this.vars;
            if (1 === arguments.length)
                return n[t];
            null == e ? delete n[t] : (n[t] = e,
            n[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
            n[t + "Scope"] = s),
            "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }
    ,
    l.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    l.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t,
        this._uncache(!0),
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
        this) : (this._dirty = !1,
        this._duration)
    }
    ,
    l.totalDuration = function(t) {
        return this._dirty = !1,
        arguments.length ? this.duration(t) : this._totalDuration
    }
    ,
    l.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(),
        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }
    ,
    l.totalTime = function(t, e, i) {
        if (h || c.wake(),
        !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (t < 0 && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var s = this._totalDuration
                  , n = this._timeline;
                if (t > s && !i && (t = s),
                this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale,
                n._dirty || this._uncache(!1),
                n._timeline)
                    for (; n._timeline; )
                        n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0),
                        n = n._timeline
            }
            this._gc && this._enabled(!0, !1),
            this._totalTime === t && 0 !== this._duration || (R.length && tt(),
            this.render(t, e, !1),
            R.length && tt())
        }
        return this
    }
    ,
    l.progress = l.totalProgress = function(t, e) {
        var i = this.duration();
        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
    }
    ,
    l.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t,
        this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
        this) : this._startTime
    }
    ,
    l.endTime = function(t) {
        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
    }
    ,
    l.timeScale = function(t) {
        if (!arguments.length)
            return this._timeScale;
        var e, i;
        for (t = t || m,
        this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
        this._startTime = i - (i - this._startTime) * this._timeScale / t),
        this._timeScale = t,
        i = this.timeline; i && i.timeline; )
            i._dirty = !0,
            i.totalDuration(),
            i = i.timeline;
        return this
    }
    ,
    l.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t,
        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
        this) : this._reversed
    }
    ,
    l.paused = function(t) {
        if (!arguments.length)
            return this._paused;
        var e, i, s = this._timeline;
        return t != this._paused && s && (h || t || c.wake(),
        i = (e = s.rawTime()) - this._pauseTime,
        !t && s.smoothChildTiming && (this._startTime += i,
        this._uncache(!1)),
        this._pauseTime = t ? e : null,
        this._paused = t,
        this._active = this.isActive(),
        !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
        this.render(e, e === this._totalTime, !0))),
        this._gc && !t && this._enabled(!0, !1),
        this
    }
    ;
    var j = T("core.SimpleTimeline", (function(t) {
        D.call(this, 0, t),
        this.autoRemoveChildren = this.smoothChildTiming = !0
    }
    ));
    (l = j.prototype = new D).constructor = j,
    l.kill()._gc = !1,
    l._first = l._last = l._recent = null,
    l._sortChildren = !1,
    l.add = l.insert = function(t, e, i, s) {
        var n, o;
        if (t._startTime = Number(e || 0) + t._delay,
        t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
        t.timeline && t.timeline._remove(t, !0),
        t.timeline = t._timeline = this,
        t._gc && t._enabled(!0, !0),
        n = this._last,
        this._sortChildren)
            for (o = t._startTime; n && n._startTime > o; )
                n = n._prev;
        return n ? (t._next = n._next,
        n._next = t) : (t._next = this._first,
        this._first = t),
        t._next ? t._next._prev = t : this._last = t,
        t._prev = n,
        this._recent = t,
        this._timeline && this._uncache(!0),
        this
    }
    ,
    l._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0),
        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
        t._next = t._prev = t.timeline = null,
        t === this._recent && (this._recent = this._last),
        this._timeline && this._uncache(!0)),
        this
    }
    ,
    l.render = function(t, e, i) {
        var s, n = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; n; )
            s = n._next,
            (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
            n = s
    }
    ,
    l.rawTime = function() {
        return h || c.wake(),
        this._totalTime
    }
    ;
    var I = T("TweenLite", (function(e, i, s) {
        if (D.call(this, i, s),
        this.render = I.prototype.render,
        null == e)
            throw "Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : I.selector(e) || e;
        var n, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
        if (this._overwrite = l = null == l ? K[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l],
        (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
            for (this._targets = r = g(e),
            this._propLookup = [],
            this._siblings = [],
            n = 0; n < r.length; n++)
                (o = r[n]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(n--, 1),
                this._targets = r = r.concat(g(o))) : (this._siblings[n] = et(o, this, !1),
                1 === l && this._siblings[n].length > 1 && st(o, this, null, 1, this._siblings[n])) : "string" == typeof (o = r[n--] = I.selector(o)) && r.splice(n + 1, 1) : r.splice(n--, 1);
        else
            this._propLookup = {},
            this._siblings = et(e, this, !1),
            1 === l && this._siblings.length > 1 && st(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8,
        this.render(Math.min(0, -this._delay)))
    }
    ), !0)
      , $ = function(e) {
        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
    };
    (l = I.prototype = new D).constructor = I,
    l.kill()._gc = !1,
    l.ratio = 0,
    l._firstPT = l._targets = l._overwrittenProps = l._startAt = null,
    l._notifyPluginsOfEnabled = l._lazy = !1,
    I.version = "2.1.3",
    I.defaultEase = l._ease = new k(null,null,1,1),
    I.defaultOverwrite = "auto",
    I.ticker = c,
    I.autoSleep = 120,
    I.lagSmoothing = function(t, e) {
        c.lagSmoothing(t, e)
    }
    ,
    I.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (I.selector = i,
        i(e)) : (s || (s = t.document),
        s ? s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
    }
    ;
    var R = []
      , z = {}
      , N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , F = /[\+-]=-?[\.\d]/
      , H = function(t) {
        for (var e, i = this._firstPT, s = 1e-6; i; )
            e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
            i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < s && e > -s && !i.blob && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
    }
      , B = function(t) {
        return (1e3 * t | 0) / 1e3 + ""
    }
      , W = function(t, e, i, s) {
        var n, o, r, a, l, c, h, d = [], u = 0, f = "", p = 0;
        for (d.start = t,
        d.end = e,
        t = d[0] = t + "",
        e = d[1] = e + "",
        i && (i(d),
        t = d[0],
        e = d[1]),
        d.length = 0,
        n = t.match(N) || [],
        o = e.match(N) || [],
        s && (s._next = null,
        s.blob = 1,
        d._firstPT = d._applyPT = s),
        l = o.length,
        a = 0; a < l; a++)
            h = o[a],
            f += (c = e.substr(u, e.indexOf(h, u) - u)) || !a ? c : ",",
            u += c.length,
            p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1),
            h === n[a] || n.length <= a ? f += h : (f && (d.push(f),
            f = ""),
            r = parseFloat(n[a]),
            d.push(r),
            d._firstPT = {
                _next: d._firstPT,
                t: d,
                p: d.length - 1,
                s: r,
                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - r) || 0,
                f: 0,
                m: p && p < 4 ? Math.round : B
            }),
            u += h.length;
        return (f += e.substr(u)) && d.push(f),
        d.setRatio = H,
        F.test(e) && (d.end = null),
        d
    }
      , X = function(t, e, i, s, n, o, r, a, l) {
        "function" == typeof s && (s = s(l || 0, t));
        var c = typeof t[e]
          , h = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
          , d = "get" !== i ? i : h ? r ? t[h](r) : t[h]() : t[e]
          , u = "string" == typeof s && "=" === s.charAt(1)
          , f = {
            t: t,
            p: e,
            s: d,
            f: "function" === c,
            pg: 0,
            n: n || e,
            m: o ? "function" == typeof o ? o : Math.round : 0,
            pr: 0,
            c: u ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - d || 0
        };
        if (("number" != typeof d || "number" != typeof s && !u) && (r || isNaN(d) || !u && isNaN(s) || "boolean" == typeof d || "boolean" == typeof s ? (f.fp = r,
        f = {
            t: W(d, u ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : s, a || I.defaultStringFilter, f),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: n || e,
            pr: 0,
            m: 0
        }) : (f.s = parseFloat(d),
        u || (f.c = parseFloat(s) - f.s || 0))),
        f.c)
            return (f._next = this._firstPT) && (f._next._prev = f),
            this._firstPT = f,
            f
    }
      , q = I._internals = {
        isArray: v,
        isSelector: $,
        lazyTweens: R,
        blobDif: W
    }
      , Y = I._plugins = {}
      , U = q.tweenLookup = {}
      , V = 0
      , Q = q.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }
      , K = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
    }
      , G = D._rootFramesTimeline = new j
      , Z = D._rootTimeline = new j
      , J = 30
      , tt = q.lazyRender = function() {
        var t, e, i = R.length;
        for (z = {},
        t = 0; t < i; t++)
            (e = R[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
            e._lazy = !1);
        R.length = 0
    }
    ;
    Z._startTime = c.time,
    G._startTime = c.frame,
    Z._active = G._active = !0,
    setTimeout(tt, 1),
    D._updateRoot = I.render = function() {
        var t, e, i;
        if (R.length && tt(),
        Z.render((c.time - Z._startTime) * Z._timeScale, !1, !1),
        G.render((c.frame - G._startTime) * G._timeScale, !1, !1),
        R.length && tt(),
        c.frame >= J) {
            for (i in J = c.frame + (parseInt(I.autoSleep, 10) || 120),
            U) {
                for (t = (e = U[i].tweens).length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                0 === e.length && delete U[i]
            }
            if ((!(i = Z._first) || i._paused) && I.autoSleep && !G._first && 1 === c._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || c.sleep()
            }
        }
    }
    ,
    c.addEventListener("tick", D._updateRoot);
    var et = function(t, e, i) {
        var s, n, o = t._gsTweenID;
        if (U[o || (t._gsTweenID = o = "t" + V++)] || (U[o] = {
            target: t,
            tweens: []
        }),
        e && ((s = U[o].tweens)[n = s.length] = e,
        i))
            for (; --n > -1; )
                s[n] === e && s.splice(n, 1);
        return U[o].tweens
    }
      , it = function(t, e, i, s) {
        var n, o, r = t.vars.onOverwrite;
        return r && (n = r(t, e, i, s)),
        (r = I.onOverwrite) && (o = r(t, e, i, s)),
        !1 !== n && !1 !== o
    }
      , st = function(t, e, i, s, n) {
        var o, r, a, l;
        if (1 === s || s >= 4) {
            for (l = n.length,
            o = 0; o < l; o++)
                if ((a = n[o]) !== e)
                    a._gc || a._kill(null, t, e) && (r = !0);
                else if (5 === s)
                    break;
            return r
        }
        var c, h = e._startTime + m, d = [], u = 0, f = 0 === e._duration;
        for (o = n.length; --o > -1; )
            (a = n[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || nt(e, 0, f),
            0 === nt(a, c, f) && (d[u++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-8 || (d[u++] = a)));
        for (o = u; --o > -1; )
            if (l = (a = d[o])._firstPT,
            2 === s && a._kill(i, t, e) && (r = !0),
            2 !== s || !a._firstPT && a._initted && l) {
                if (2 !== s && !it(a, e))
                    continue;
                a._enabled(!1, !1) && (r = !0)
            }
        return r
    }
      , nt = function(t, e, i) {
        for (var s = t._timeline, n = s._timeScale, o = t._startTime; s._timeline; ) {
            if (o += s._startTime,
            n *= s._timeScale,
            s._paused)
                return -100;
            s = s._timeline
        }
        return (o /= n) > e ? o - e : i && o === e || !t._initted && o - e < 2e-8 ? m : (o += t.totalDuration() / t._timeScale / n) > e + m ? 0 : o - e - m
    };
    l._init = function() {
        var t, e, i, s, n, o, r = this.vars, a = this._overwrittenProps, l = this._duration, c = !!r.immediateRender, h = r.ease, d = this._startAt;
        if (r.startAt) {
            for (s in d && (d.render(-1, !0),
            d.kill()),
            n = {},
            r.startAt)
                n[s] = r.startAt[s];
            if (n.data = "isStart",
            n.overwrite = !1,
            n.immediateRender = !0,
            n.lazy = c && !1 !== r.lazy,
            n.startAt = n.delay = null,
            n.onUpdate = r.onUpdate,
            n.onUpdateParams = r.onUpdateParams,
            n.onUpdateScope = r.onUpdateScope || r.callbackScope || this,
            this._startAt = I.to(this.target || {}, 0, n),
            c)
                if (this._time > 0)
                    this._startAt = null;
                else if (0 !== l)
                    return
        } else if (r.runBackwards && 0 !== l)
            if (d)
                d.render(-1, !0),
                d.kill(),
                this._startAt = null;
            else {
                for (s in 0 !== this._time && (c = !1),
                i = {},
                r)
                    Q[s] && "autoCSS" !== s || (i[s] = r[s]);
                if (i.overwrite = 0,
                i.data = "isFromStart",
                i.lazy = c && !1 !== r.lazy,
                i.immediateRender = c,
                this._startAt = I.to(this.target, 0, i),
                c) {
                    if (0 === this._time)
                        return
                } else
                    this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null)
            }
        if (this._ease = h = h ? h instanceof k ? h : "function" == typeof h ? new k(h,r.easeParams) : S[h] || I.defaultEase : I.defaultEase,
        r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)),
        this._easeType = this._ease._type,
        this._easePower = this._ease._power,
        this._firstPT = null,
        this._targets)
            for (o = this._targets.length,
            t = 0; t < o; t++)
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
        else
            e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
        if (e && I._onPluginEvent("_onInitAllProps", this),
        a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
        r.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c,
                i.c = -i.c,
                i = i._next;
        this._onUpdate = r.onUpdate,
        this._initted = !0
    }
    ,
    l._initProps = function(e, i, s, n, o) {
        var r, a, l, c, h, d;
        if (null == e)
            return !1;
        for (r in z[e._gsTweenID] && tt(),
        this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function(t, e) {
            var i, s = {};
            for (i in t)
                Q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (s[i] = t[i],
                delete t[i]);
            t.css = s
        }(this.vars, e),
        this.vars)
            if (d = this.vars[r],
            Q[r])
                d && (d instanceof Array || d.push && v(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[r] = d = this._swapSelfInParams(d, this));
            else if (Y[r] && (c = new Y[r])._onInitTween(e, this.vars[r], this, o)) {
                for (this._firstPT = h = {
                    _next: this._firstPT,
                    t: c,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: r,
                    pg: 1,
                    pr: c._priority,
                    m: 0
                },
                a = c._overwriteProps.length; --a > -1; )
                    i[c._overwriteProps[a]] = this._firstPT;
                (c._priority || c._onInitAllProps) && (l = !0),
                (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0),
                h._next && (h._next._prev = h)
            } else
                i[r] = X.call(this, e, r, "get", d, r, 0, null, this.vars.stringFilter, o);
        return n && this._kill(n, e) ? this._initProps(e, i, s, n, o) : this._overwrite > 1 && this._firstPT && s.length > 1 && st(e, this, i, this._overwrite, s) ? (this._kill(i, e),
        this._initProps(e, i, s, n, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0),
        l)
    }
    ,
    l.render = function(t, e, i) {
        var s, n, o, r, a = this, l = a._time, c = a._duration, h = a._rawPrevTime;
        if (t >= c - m && t >= 0)
            a._totalTime = a._time = c,
            a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1,
            a._reversed || (s = !0,
            n = "onComplete",
            i = i || a._timeline.autoRemoveChildren),
            0 === c && (a._initted || !a.vars.lazy || i) && (a._startTime === a._timeline._duration && (t = 0),
            (h < 0 || t <= 0 && t >= -1e-8 || h === m && "isPause" !== a.data) && h !== t && (i = !0,
            h > m && (n = "onReverseComplete")),
            a._rawPrevTime = r = !e || t || h === t ? t : m);
        else if (t < m)
            a._totalTime = a._time = 0,
            a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0,
            (0 !== l || 0 === c && h > 0) && (n = "onReverseComplete",
            s = a._reversed),
            t > -1e-8 ? t = 0 : t < 0 && (a._active = !1,
            0 === c && (a._initted || !a.vars.lazy || i) && (h >= 0 && (h !== m || "isPause" !== a.data) && (i = !0),
            a._rawPrevTime = r = !e || t || h === t ? t : m)),
            (!a._initted || a._startAt && a._startAt.progress()) && (i = !0);
        else if (a._totalTime = a._time = t,
        a._easeType) {
            var d = t / c
              , u = a._easeType
              , f = a._easePower;
            (1 === u || 3 === u && d >= .5) && (d = 1 - d),
            3 === u && (d *= 2),
            1 === f ? d *= d : 2 === f ? d *= d * d : 3 === f ? d *= d * d * d : 4 === f && (d *= d * d * d * d),
            a.ratio = 1 === u ? 1 - d : 2 === u ? d : t / c < .5 ? d / 2 : 1 - d / 2
        } else
            a.ratio = a._ease.getRatio(t / c);
        if (a._time !== l || i) {
            if (!a._initted) {
                if (a._init(),
                !a._initted || a._gc)
                    return;
                if (!i && a._firstPT && (!1 !== a.vars.lazy && a._duration || a.vars.lazy && !a._duration))
                    return a._time = a._totalTime = l,
                    a._rawPrevTime = h,
                    R.push(a),
                    void (a._lazy = [t, e]);
                a._time && !s ? a.ratio = a._ease.getRatio(a._time / c) : s && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1))
            }
            for (!1 !== a._lazy && (a._lazy = !1),
            a._active || !a._paused && a._time !== l && t >= 0 && (a._active = !0),
            0 === l && (a._startAt && (t >= 0 ? a._startAt.render(t, !0, i) : n || (n = "_dummyGS")),
            a.vars.onStart && (0 === a._time && 0 !== c || e || a._callback("onStart"))),
            o = a._firstPT; o; )
                o.f ? o.t[o.p](o.c * a.ratio + o.s) : o.t[o.p] = o.c * a.ratio + o.s,
                o = o._next;
            a._onUpdate && (t < 0 && a._startAt && -1e-4 !== t && a._startAt.render(t, !0, i),
            e || (a._time !== l || s || i) && a._callback("onUpdate")),
            n && (a._gc && !i || (t < 0 && a._startAt && !a._onUpdate && -1e-4 !== t && a._startAt.render(t, !0, i),
            s && (a._timeline.autoRemoveChildren && a._enabled(!1, !1),
            a._active = !1),
            !e && a.vars[n] && a._callback(n),
            0 === c && a._rawPrevTime === m && r !== m && (a._rawPrevTime = 0)))
        }
    }
    ,
    l._kill = function(t, e, i) {
        if ("all" === t && (t = null),
        null == t && (null == e || e === this.target))
            return this._lazy = !1,
            this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
        var s, n, o, r, a, l, c, h, d, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT;
        if ((v(e) || $(e)) && "number" != typeof e[0])
            for (s = e.length; --s > -1; )
                this._kill(t, e[s], i) && (l = !0);
        else {
            if (this._targets) {
                for (s = this._targets.length; --s > -1; )
                    if (e === this._targets[s]) {
                        a = this._propLookup[s] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target)
                    return !1;
                a = this._propLookup,
                n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (a) {
                if (c = t || a,
                h = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill),
                i && (I.onOverwrite || this.vars.onOverwrite)) {
                    for (o in c)
                        a[o] && (d || (d = []),
                        d.push(o));
                    if ((d || !t) && !it(this, i, e, d))
                        return !1
                }
                for (o in c)
                    (r = a[o]) && (u && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s,
                    l = !0),
                    r.pg && r.t._kill(c) && (l = !0),
                    r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next),
                    r._next && (r._next._prev = r._prev),
                    r._next = r._prev = null),
                    delete a[o]),
                    h && (n[o] = 1);
                !this._firstPT && this._initted && f && this._enabled(!1, !1)
            }
        }
        return l
    }
    ,
    l.invalidate = function() {
        this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this);
        var t = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
        this._propLookup = this._targets ? {} : [],
        D.prototype.invalidate.call(this),
        this.vars.immediateRender && (this._time = -1e-8,
        this.render(t, !1, !1 !== this.vars.lazy)),
        this
    }
    ,
    l._enabled = function(t, e) {
        if (h || c.wake(),
        t && this._gc) {
            var i, s = this._targets;
            if (s)
                for (i = s.length; --i > -1; )
                    this._siblings[i] = et(s[i], this, !0);
            else
                this._siblings = et(this.target, this, !0)
        }
        return D.prototype._enabled.call(this, t, e),
        !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
    }
    ,
    I.to = function(t, e, i) {
        return new I(t,e,i)
    }
    ,
    I.from = function(t, e, i) {
        return i.runBackwards = !0,
        i.immediateRender = 0 != i.immediateRender,
        new I(t,e,i)
    }
    ,
    I.fromTo = function(t, e, i, s) {
        return s.startAt = i,
        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
        new I(t,e,s)
    }
    ,
    I.delayedCall = function(t, e, i, s, n) {
        return new I(e,0,{
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: n,
            overwrite: 0
        })
    }
    ,
    I.set = function(t, e) {
        return new I(t,0,e)
    }
    ,
    I.getTweensOf = function(t, e) {
        if (null == t)
            return [];
        var i, s, n, o;
        if (t = "string" != typeof t ? t : I.selector(t) || t,
        (v(t) || $(t)) && "number" != typeof t[0]) {
            for (i = t.length,
            s = []; --i > -1; )
                s = s.concat(I.getTweensOf(t[i], e));
            for (i = s.length; --i > -1; )
                for (o = s[i],
                n = i; --n > -1; )
                    o === s[n] && s.splice(i, 1)
        } else if (t._gsTweenID)
            for (i = (s = et(t).concat()).length; --i > -1; )
                (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
        return s || []
    }
    ,
    I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
        "object" == typeof e && (i = e,
        e = !1);
        for (var s = I.getTweensOf(t, e), n = s.length; --n > -1; )
            s[n]._kill(i, t)
    }
    ;
    var ot = T("plugins.TweenPlugin", (function(t, e) {
        this._overwriteProps = (t || "").split(","),
        this._propName = this._overwriteProps[0],
        this._priority = e || 0,
        this._super = ot.prototype
    }
    ), !0);
    if (l = ot.prototype,
    ot.version = "1.19.0",
    ot.API = 2,
    l._firstPT = null,
    l._addTween = X,
    l.setRatio = H,
    l._kill = function(t) {
        var e, i = this._overwriteProps, s = this._firstPT;
        if (null != t[this._propName])
            this._overwriteProps = [];
        else
            for (e = i.length; --e > -1; )
                null != t[i[e]] && i.splice(e, 1);
        for (; s; )
            null != t[s.n] && (s._next && (s._next._prev = s._prev),
            s._prev ? (s._prev._next = s._next,
            s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
        return !1
    }
    ,
    l._mod = l._roundProps = function(t) {
        for (var e, i = this._firstPT; i; )
            (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
            i = i._next
    }
    ,
    I._onPluginEvent = function(t, e) {
        var i, s, n, o, r, a = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; a; ) {
                for (r = a._next,
                s = n; s && s.pr > a.pr; )
                    s = s._next;
                (a._prev = s ? s._prev : o) ? a._prev._next = a : n = a,
                (a._next = s) ? s._prev = a : o = a,
                a = r
            }
            a = e._firstPT = n
        }
        for (; a; )
            a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            a = a._next;
        return i
    }
    ,
    ot.activate = function(t) {
        for (var e = t.length; --e > -1; )
            t[e].API === ot.API && (Y[(new t[e])._propName] = t[e]);
        return !0
    }
    ,
    w.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
        var e, i = t.propName, s = t.priority || 0, n = t.overwriteProps, o = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, r = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
            ot.call(this, i, s),
            this._overwriteProps = n || []
        }
        ), !0 === t.global), a = r.prototype = new ot(i);
        for (e in a.constructor = r,
        r.API = t.API,
        o)
            "function" == typeof t[e] && (a[o[e]] = t[e]);
        return r.version = t.version,
        ot.activate([r]),
        r
    }
    ,
    r = t._gsQueue) {
        for (a = 0; a < r.length; a++)
            r[a]();
        for (l in y)
            y[l].func || t.console.log("GSAP encountered missing dependency: " + l)
    }
    h = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
function(t) {
    t(document).ready((function() {
        t(".anchor-nav").hoverIntent((function() {
            t(".anchor-overlay").addClass("active")
        }
        ), (function() {
            t(".anchor-overlay").removeClass("active")
        }
        )),
        t(document).on("click", ".anchor-nav li", (function(e) {
            e.preventDefault();
            var i = t("#" + t(this).data("target"));
            i.length && t("html,body").animate({
                scrollTop: i.offset().top - 200
            }, 500)
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).on("click", "#back-to-top", (function(e) {
            e.preventDefault(),
            (t(".icg-animated_hero_module").length || t(".icg-hero_post_module:not(.full-bleed)").length) && t("[data-scroll-container]").length && !isIE() && t(window).width() >= 992 ? loco_scroll.scrollTo("top") : t("html,body").animate({
                scrollTop: 0
            }, 1e3)
        }
        ))
    }
    )),
    t(window).on("scroll", (function() {
        var e = t("#back-to-top");
        e.length && t(window).scrollTop() >= 200 && !e.hasClass("show-it") && e.addClass("show-it"),
        e.length && t(window).scrollTop() < 200 && e.removeClass("show-it")
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t('a[href*="#"]:not([href="#"])').click((function(e) {
            if ("#subscribeModal" != this.hash && (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname)) {
                var i = t("[name=" + this.hash.slice(1) + "]")
                  , s = "[name=" + this.hash.slice(1) + "]";
                i.length && ((t(".icg-animated_hero_module").length || t(".icg-hero_post_module:not(.full-bleed)").length) && t("[data-scroll-container]").length && !isIE() && t(window).width() >= 992 ? loco_scroll.scrollTo(s, {
                    offset: -130
                }) : t("html,body").stop().animate({
                    scrollTop: i.offset().top - 130
                }, "linear"))
            }
        }
        ))
    }
    )),
    t(window).on("load", (function() {
        setTimeout((function() {
            var e = window.location.hash;
            if ("" == e || "#" == e || null == e || "#subscribeModal" == e)
                return !1;
            var i = t("[name=" + e.slice(1) + "]")
              , s = "[name=" + e.slice(1) + "]";
            i.length && ((t(".icg-animated_hero_module").length || t(".icg-hero_post_module:not(.full-bleed)").length) && t("[data-scroll-container]").length && !isIE() && t(window).width() >= 992 ? loco_scroll.scrollTo(s, {
                offset: -130
            }) : t("html,body").stop().animate({
                scrollTop: i.offset().top - 130
            }, "ease-in"))
        }
        ), 250)
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        null !== document.getElementById("icg-contact-form") && document.getElementById("icg-contact-form").addEventListener("wpcf7mailsent", (function(e) {
            t("#thanksModal").modal("show")
        }
        ), !1)
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        if (t("body").attr("id")) {
            var e = t("body").attr("id")
              , i = !0;
            if (t("#disclaimerModal").hasClass("with-default-ctas") && (i = "static"),
            !sessionStorage.getItem(e))
                if (t("#disclaimerModal").length)
                    new bootstrap.Modal("#disclaimerModal",{
                        backdrop: i
                    }).show()
        }
        t("#disclaimerModal").on("hidden.bs.modal", (function(t) {
            sessionStorage.setItem(e, "1")
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {}
    )),
    t(window).on("load resize", (function() {
        var e = t("#footer-stock-module");
        if (e.length && t(window).width() >= 768) {
            var i = t(".footer-column:nth-child(1)").width()
              , s = 2 * i
              , n = t(".footer-columns").outerWidth(!0) - 4 * i;
            e.css("width", "calc(100% - " + (s + 2 * n / 3) + "px)")
        } else
            e.css("width", "100%")
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        function e(e) {
            if (t(".header-menu li a").removeClass("active"),
            e.hasClass("dropdown")) {
                var i = e.data("dropdown");
                e.addClass("active"),
                t("#body-overlay").addClass("active"),
                t("body").addClass("blur"),
                t(i).hasClass("active") || (t(".icg-dropdown-menu").removeClass("active"),
                t(i).addClass("active"))
            } else
                t(".icg-dropdown-menu").removeClass("active")
        }
        "ontouchstart"in window || "ontouch"in window ? t(document).on("click", ".header-menu li a", (function(i) {
            t(this).hasClass("open") && "#" != t(this).attr("href") || (i.preventDefault(),
            t(".header-menu li a").removeClass("open"),
            t(this).addClass("open"),
            e(t(this)))
        }
        )) : t(".header-menu li a").hoverIntent((function() {
            e(t(this))
        }
        )),
        t(document).on("mouseenter", ".icg-dropdown-menu.active", (function(e) {
            t(this).addClass("active")
        }
        )),
        t(document).on("mouseleave", "#site-header", (function(e) {
            t(".icg-dropdown-menu").removeClass("active"),
            t(".header-menu li a").removeClass("active open"),
            t("#body-overlay").removeClass("active"),
            t("body").removeClass("blur")
        }
        )),
        t(document).on("mouseenter", ".icg-dropdown-menu ul li.menu-item-has-children", (function(e) {
            t(this).parents(".links").siblings(".featured").find("article").fadeOut()
        }
        )),
        t(document).on("mouseenter", ".icg-dropdown-menu ul.sub-menu li", (function(e) {
            t(this).parents(".links").siblings(".featured").find("article").fadeOut()
        }
        )),
        t(document).on("mouseenter", ".icg-dropdown-menu ul:not(.sub-menu) > li:not(.menu-item-has-children)", (function(e) {
            t(this).parents(".links").siblings(".featured").find("article").fadeIn()
        }
        )),
        t(".icg-dropdown-menu__wrapper .links").on("mouseleave", (function(e) {
            t(this).siblings(".featured").find("article").fadeIn()
        }
        )),
        t(".icg-dropdown-menu").each((function() {
            var e = -1;
            t(this).find(".links ul").each((function() {
                e = e > jQuery(this).height() ? e : jQuery(this).height()
            }
            )),
            t(this).find(".links ul").each((function() {
                t(this).height(e)
            }
            ))
        }
        ))
    }
    ));
    var e = 0;
    t(window).on("scroll", (function() {
        var i = t("#site-header");
        if (i.length && t(window).scrollTop() >= 50 && !i.hasClass("scroll") && i.addClass("scroll"),
        i.length && t(window).scrollTop() < 50 && i.removeClass("scroll"),
        t(window).width() >= 992) {
            var s = t(this).scrollTop();
            s > 20 && (s > e ? t("#site-header").addClass("go-away") : t("#site-header").removeClass("go-away"),
            e = s)
        }
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        function e(e, i, s, n, o, r, a) {
            "menu" == r ? (e.addClass("active").siblings().removeClass("active"),
            (a = e.parents(".horizontal-accordion-menu")).removeClass("active-1 active-2 active-3 active-4"),
            a.addClass("active-" + n),
            i.find(".accordion-group:nth-child(" + n + ")").addClass("active").siblings().removeClass("active")) : e.parent().addClass("active").siblings().removeClass("active");
            s.find(".accordion-content__wrapper").removeClass("active"),
            i.removeClass("active-1 active-2 active-3 active-4"),
            i.addClass("active-" + n),
            $delay_wrapper = 200,
            $delay_content = 500,
            t(window).width() < 992 && ($delay_wrapper = 0,
            $delay_content = 0),
            setTimeout((function() {
                o.addClass("active").removeClass("moveaway")
            }
            ), $delay_content),
            setTimeout((function() {
                s.find(".accordion-content__wrapper").addClass("moveaway")
            }
            ), $delay_wrapper)
        }
        t(document).on("click", ".horizontal-accordion .accordion-group .accordion-trigger", (function(i) {
            if (i.preventDefault(),
            !t(this).parent().hasClass("active")) {
                var s = t(this).parents(".horizontal-accordion")
                  , n = t(this).parent().siblings(".active")
                  , o = t(this).parent().index() + 1
                  , r = t(this).parent().find(".accordion-content__wrapper");
                e(t(this), s, n, o, r)
            }
        }
        )),
        t(document).on("click", ".horizontal-accordion-menu li", (function(i) {
            if (i.preventDefault(),
            !t(this).hasClass("active")) {
                var s = t(this)
                  , n = t(this).parents(".horizontal-accordion-menu")
                  , o = n.siblings(".horizontal-accordion")
                  , r = o.find(".accordion-group.active")
                  , a = t(this).index() + 1
                  , l = o.find(".accordion-group:nth-child(" + a + ")").find(".accordion-content__wrapper");
                e(s, o, r, a, l, "menu", n)
            }
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    var e, i;
    ("ontouchstart"in window || "ontouch"in window) && "onorientationchange"in window && Cookies.set("hideIntro", "1", {
        expires: 30
    }),
    t("body").hasClass("home") && (e = window.location.hash,
    i = "" != e && "#" != e && null != e && "#subscribeModal" != e,
    (Cookies.get("hideIntro") || i) && (t("#icg-intro").remove(),
    t("body").removeClass("with-intro-module"))),
    t(document).ready((function() {
        t(document).on("click", "#icg-intro, .intro-scroll__trigger", (function(e) {
            e.preventDefault();
            var i = t(this).data("target");
            t(i).length && (t(i).css({
                transitionDuration: "1s",
                transitionDelay: "0s",
                transform: "translate3d(0px, -100%, 0px)"
            }),
            setTimeout((function() {
                t("body").removeClass("with-intro-module"),
                Cookies.set("hideIntro", "1", {
                    expires: 30
                }),
                t("#icg-intro").remove()
            }
            ), 1e3))
        }
        ));
        var e = !1;
        t("#icg-intro").on("mousewheel DOMMouseScroll", (function(i) {
            if (i.preventDefault(),
            !t(this).hasClass("scrollready"))
                return !1;
            e || (e = !0,
            i.originalEvent.wheelDelta > 0 || i.originalEvent.detail < 0 || t(".intro-scroll__trigger").trigger("click"))
        }
        ))
    }
    )),
    t(window).on("load", (function() {
        t("#icg-intro").length && (setTimeout((function() {
            t(".intro-logo, .first-line-content, .second-line-content, #intro-images__slider-container, .intro-scroll__trigger").addClass("active")
        }
        ), 300),
        t(".intro-scroll__trigger").on("transitionend", (function(e) {
            t("#icg-intro").addClass("scrollready")
        }
        )),
        setTimeout((function() {
            !function() {
                var e = t("#intro-images__slider-container")
                  , i = e.find(".scroll")
                  , s = i.clone()
                  , n = 10;
                i.find(".intro-img").each((function(t) {
                    n += jQuery(this, t).outerWidth(!0)
                }
                ));
                e.width();
                i.add(s).css({
                    width: n + "px"
                }),
                s.addClass("cloned").appendTo(e);
                var o = new TimelineMax({
                    repeat: -1,
                    paused: !0
                })
                  , r = e.data("speed");
                o.fromTo(i, r, {
                    rotation: .01,
                    x: 0
                }, {
                    force3D: !0,
                    x: -n,
                    ease: Linear.easeNone
                }, 0).fromTo(s, r, {
                    rotation: .01,
                    x: n
                }, {
                    force3D: !0,
                    x: 0,
                    ease: Linear.easeNone
                }, 0).set(i, {
                    force3D: !0,
                    rotation: .01,
                    x: n
                }).to(s, r, {
                    force3D: !0,
                    rotation: .01,
                    x: -n,
                    ease: Linear.easeNone
                }, r).to(i, r, {
                    force3D: !0,
                    rotation: .01,
                    x: 0,
                    ease: Linear.easeNone
                }, r).progress(1).progress(0),
                o.play()
            }()
        }
        ), 1750))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).on("click", ".listjs-navigation .listjs-arrow", (function(e) {
            e.preventDefault();
            var i = t(this).siblings(".pagination").find("li.active");
            t(this).hasClass("prev-page") ? i.prev().trigger("click") : i.next().trigger("click")
        }
        ))
    }
    )),
    t(window).on("load", (function() {
        t(".listjs-grid").length && t(".listjs-grid").each((function(e, i) {
            var s = t(this).attr("id");
            if (!(t(this).find(".list article").length <= 12)) {
                var n = {
                    valueNames: ["post-title"],
                    page: 12,
                    plugins: [ListPagination({
                        paginationClass: "pagination",
                        left: 5,
                        right: 1
                    })]
                };
                new List(s,n).on("updated", (function(e) {
                    t("html,body").animate({
                        scrollTop: t(e.listContainer).offset().top - 200
                    }, 300)
                }
                ))
            }
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).on("click", ".table-filter__trigger", (function(e) {
            e.preventDefault(),
            t(this).toggleClass("active"),
            t(this).siblings(".events-table__filter").slideToggle("fast")
        }
        )),
        t(document).on("click", ".events-table__filter li", (function(e) {
            t(this).addClass("active").siblings().removeClass("active");
            var i = t(this).data("year")
              , s = t(this).parent().siblings(".events-table").attr("id").replace(/-/g, "_");
            window[s].filter((function(t) {
                return $yearFilter = "all" == i || t.values().year == i,
                $yearFilter
            }
            )),
            window[s].update(),
            t(window).width() < 992 && (t(this).parent().siblings(".table-filter__trigger").find(".current-filter-items").text(i),
            t(this).parent().siblings(".table-filter__trigger").removeClass("active"),
            t(this).parent().slideUp("fast"))
        }
        ))
    }
    )),
    t(window).on("load", (function() {
        t(".listjs-table").length && t(".listjs-table").each((function(e, i) {
            var s = t(this).attr("id")
              , n = s.replace(/-/g, "_");
            if (!(t(this).find(".list .events-table__row").length <= 5)) {
                var o = {
                    valueNames: ["year"],
                    page: 5,
                    plugins: [ListPagination({
                        paginationClass: "pagination",
                        left: 5,
                        right: 1
                    })]
                };
                window[n] = new List(s,o).on("updated", (function(e) {
                    t("html,body").animate({
                        scrollTop: t(e.listContainer).offset().top - 200
                    }, 300)
                }
                ))
            }
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    var e = t("#back-to-top");
    (t(".icg-animated_hero_module").length || t(".icg-hero_post_module:not(.full-bleed)").length) && t("[data-scroll-container]").length && !isIE() && t(window).width() >= 992 && ((loco_scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: !0,
        getDirection: !0,
        lerp: .1,
        multiplier: .7,
        repeat: !0
    })).on("scroll", (function(i) {
        "down" == i.direction ? i.scroll.y >= 50 && t("#site-header").addClass("scroll go-away") : t("#site-header").removeClass("go-away"),
        i.scroll.y < 50 && t("#site-header").removeClass("scroll"),
        e.length && i.scroll.y >= 200 && !e.hasClass("show-it") && e.addClass("show-it"),
        e.length && i.scroll.y < 200 && e.removeClass("show-it")
    }
    )),
    setTimeout((function() {
        loco_scroll.update()
    }
    ), 500)),
    t(document).ready((function() {}
    )),
    t(window).on("load", (function() {
        void 0 !== loco_scroll && setTimeout((function() {
            loco_scroll.update()
        }
        ), 2e3)
    }
    )),
    t(window).on("resize", (function() {
        t(window).width() < 992 && void 0 !== loco_scroll && loco_scroll.destroy()
    }
    ))
}(jQuery),
function(t) {
    function e() {
        t(".map-container").length && t.each(t(".map-container .map-point"), (function(e, i) {
            $top_position = t(this).data("positionTop"),
            $left_position = t(this).data("positionLeft"),
            t(window).width() < 1200 && ($top_position = t(this).data("positionTabletTop"),
            $left_position = t(this).data("positionTabletLeft")),
            t(this).css("top", $top_position + "%"),
            t(this).css("left", $left_position + "%"),
            t(this).css("opacity", 1)
        }
        ))
    }
    t(document).ready((function() {
        e()
    }
    )),
    t(window).on("resize", (function() {
        e()
    }
    )),
    t(window).on("load resize orientationChange", (function(e) {
        t(".map-points__slider").each((function(e) {
            !t(this).hasClass("slick-initialized") && t(window).width() < 768 && ($prevArrow = t(this).siblings(".map-points__slider-navigation").find(".slick-prev"),
            $nextArrow = t(this).siblings(".map-points__slider-navigation").find(".slick-next"),
            t(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                infinite: !0,
                autoplay: !1,
                swipe: !0,
                mobileFirst: !0,
                prevArrow: $prevArrow,
                nextArrow: $nextArrow,
                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"
                }]
            }))
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t("#mobilemenuModal").on("shown.bs.modal", (function(e) {
            t(".mobile-dropdown-menu").each((function(e, i) {
                var s = -1;
                t(this).find("ul").each((function() {
                    s = s > t(this).height() ? s : t(this).height()
                }
                )),
                t(this).attr("data-height", s)
            }
            ))
        }
        )),
        t("#mobilemenuModal").on("hidden.bs.modal", (function(e) {
            t("#mobile-menu__wrapper").fadeIn(),
            t(".mobile-dropdown-menu, .mobile-dropdown-menu ul.menu, .mobile-dropdown-menu, .mobile-dropdown-menu ul.sub-menu").removeClass("inactive active"),
            t("#mobilemenuModal .modal-header .back-link").removeClass("active back-to-main back-to-first-level")
        }
        )),
        t(".mobile-dropdown-menu .sub-menu").each((function(e, i) {
            $anchor = t(this).prev("a").prop("outerHTML"),
            $li = '<li class="menu-item parent-link">' + $anchor + "</li>",
            t(this).prepend($li)
        }
        )),
        t(".mobile-dropdown-menu ul li a").each((function(e, i) {
            t(this).wrapInner("<span></span>")
        }
        )),
        t(document).on("click", "#mobile-menu .mobile-dropdown__trigger", (function(e) {
            e.preventDefault(),
            t("#mobile-menu__wrapper").fadeOut(),
            t("#mobilemenuModal").find(".modal-header .back-link").addClass("back-to-main active"),
            t(".mobile-dropdown-menu").removeClass("active").removeAttr("style");
            var i = t("#" + t(this).data("dropdown"));
            i.height(i.data("height")),
            i.addClass("active"),
            i.find("ul.menu").addClass("active")
        }
        )),
        t(document).on("click", ".mobile-dropdown-menu ul li.menu-item-has-children > a", (function(e) {
            e.preventDefault(),
            t(this).parent().addClass("active"),
            t(this).parents("ul.menu").addClass("inactive"),
            t(this).siblings(".sub-menu").addClass("active"),
            t("#mobilemenuModal").find(".modal-header .back-link").removeClass("back-to-main").addClass("back-to-first-level")
        }
        )),
        t(document).on("click", "#mobilemenuModal .modal-header .back-link", (function(e) {
            e.preventDefault(),
            t(this).hasClass("back-to-main") && (t(this).removeClass("active"),
            t(".mobile-dropdown-menu").find("ul.menu").removeClass("active"),
            t(".mobile-dropdown-menu").removeClass("active").removeAttr("style"),
            t("#mobile-menu__wrapper").fadeIn()),
            t(this).hasClass("back-to-first-level") && (t(".mobile-dropdown-menu").find("ul.sub-menu").removeClass("active"),
            t(".mobile-dropdown-menu").find("ul.menu").removeClass("inactive"),
            t(this).removeClass("back-to-first-level").addClass("back-to-main"))
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).click((function(e) {
            var i = t(".office-filter");
            i.is(event.target) || i.has(event.target).length || (t(".office-filter .filter-trigger").removeClass("active"),
            t(".office-filter .filter-options").slideUp("fast"))
        }
        )),
        t(document).on("click", ".continent-grid--trigger", (function(e) {
            e.preventDefault(),
            t(window).width() < 768 && (t(this).toggleClass("open"),
            t(this).siblings(".archive-grid").slideToggle())
        }
        )),
        t(document).on("click", ".office-filter .filter-trigger", (function(e) {
            e.preventDefault(),
            t(this).toggleClass("active"),
            t(this).siblings(".filter-options").slideToggle("fast")
        }
        )),
        t(document).on("click", ".office-filter ul li", (function(e) {
            if (e.preventDefault(),
            !t(this).hasClass("placeholder")) {
                t(this).toggleClass("active");
                t(this).data("term");
                var i = t(this).find("span").text()
                  , s = t(this).parents(".filter-options").siblings(".filter-trigger").find(".current-filter-items")
                  , n = t(this).parents(".filter-options").siblings(".filter-trigger").find(".current-filter-items").text()
                  , o = new Array;
                if ("(City)" != n && "(Geographies)" != n && (o = n.split(",")),
                t(this).hasClass("active"))
                    o.push(i);
                else
                    for (var r = 0; r < o.length; r++)
                        o[r] === i && o.splice(r, 1);
                var a = o.join(", ");
                "" == a && (s.hasClass("city") ? a = "(City)" : s.hasClass("geographies") && (a = "(Geographies)")),
                s.text(a)
            }
        }
        )),
        t(document).on("click", '.office-filter .filter-actions input[type="submit"]', (function(e) {
            if (e.preventDefault(),
            t(".filter-options").slideUp("fast"),
            t(this).hasClass("clear")) {
                var i = t(this).data("target")
                  , s = t(this).data("label");
                t(".filter-options." + i + " ul li").removeClass("active"),
                t(".current-filter-items." + i).text(s),
                t("article.type-office").show(),
                "city" == i || (t(".icg-offices_module, .continent-info").show(),
                t(".filter-options.city").find("li:not(.placeholder)").hide(),
                t(".filter-options.city").find("li.placeholder").show(),
                t(".current-filter-items.city").text("(City)"))
            } else
                $geography_filter_active = 0,
                $city_filter_active = 0,
                t(".icg-offices_module, .continent-info").hide(),
                t("article.type-office").hide(),
                t(".filter-options.geographies ul li.active").each((function(e, i) {
                    t(".icg-offices_module." + t(this).data("term")).show(),
                    t(".continent-info." + t(this).data("term")).show(),
                    t(".filter-options.city").find('li[data-geography="' + t(this).data("term") + '"]').show(),
                    t(".filter-options.city").find("li.placeholder").hide(),
                    $geography_filter_active = 1
                }
                )),
                0 == $geography_filter_active && (t(".icg-offices_module, .continent-info").show(),
                t(".filter-options.city").find("li:not(.placeholder)").hide(),
                t(".filter-options.city").find("li.placeholder").show()),
                t(".filter-options.city ul li.active").each((function(e, i) {
                    t("article.type-office." + t(this).data("term")).show(),
                    $city_filter_active = 1
                }
                )),
                0 == $city_filter_active && t("article.type-office").show();
            t("html, body").animate({
                scrollTop: t("#icg-offices").offset().top - 125
            }, 500)
        }
        ))
    }
    )),
    t(window).on("load", (function() {
        if (t("body").hasClass("page-template-page-offices") && -1 != location.href.indexOf("#")) {
            var e = window.location.hash.replace(/^#/, "");
            "" != e && (t('.office-filter ul li[data-term="' + e + '"]').trigger("click"),
            setTimeout((function() {
                t('.office-filter .filter-actions input[type="submit"]').trigger("click")
            }
            ), 500))
        }
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(".related-content__grid-slider").each((function(e) {
            var i = t(this).parent().find(".slick-prev")
              , s = t(this).parent().find(".slick-next");
            t(this).hasClass("slick-initialized") || t(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                infinite: !1,
                autoplay: !1,
                swipe: !0,
                prevArrow: i,
                nextArrow: s,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(".posts--grid").length && t(".posts--grid").jscroll({
            loadingHtml: "",
            loadingFunction: function() {
                t(".btn-loading-container").show()
            },
            nextSelector: "#posts--grid--next-page:last a.posts-next-link",
            contentSelector: ".posts--grid-content",
            autoTrigger: !1,
            callback: function() {
                t("html,body").animate({
                    scrollTop: t(this).offset().top - 300
                }, 500),
                t(".btn-loading-container").hide()
            }
        }),
        t('iframe[src*="vimeo"]').each((function() {
            var e = t(this).attr("src");
            t(this).attr("src", e.replace("dnt=1&", ""))
        }
        )),
        t('iframe[src*="vimeo"]').wrap("<div class='iframe-wrapper inline-vimeo'></div>"),
        t('iframe[src*="youtube"]').wrap("<div class='iframe-wrapper inline-youtube'></div>"),
        t("a").each((function() {
            (!new RegExp("/" + window.location.host + "/").test(this.href) && 0 != this.href.indexOf("mailto") || this.href.indexOf(".pdf") >= 0) && (t(this).prop("target", "_blank"),
            t(this).addClass("external-link"))
        }
        )),
        t(document).on("click", ".search-trigger", (function(e) {
            e.preventDefault(),
            t(this).toggleClass("active"),
            t(this).siblings(".search-form").toggleClass("active"),
            t(this).siblings(".search-form").find(".search-field").focus(),
            t(this).siblings(".back-to-menu").addClass("active")
        }
        )),
        t(document).on("click", ".back-to-menu", (function(e) {
            e.preventDefault(),
            t(this).removeClass("active"),
            t(this).siblings(".search-form").removeClass("active")
        }
        )),
        t(document).click((function(e) {
            $is_search = e.target.classList.contains("search-form") || e.target.classList.contains("search-field") || e.target.classList.contains("search-trigger"),
            !$is_search && t(window).width() > 991 && t(".search-form, .search-trigger").removeClass("active")
        }
        )),
        t("body").on("click", "#mobile-menu ul li.menu-item-has-children", (function(e) {
            t(this).hasClass("active") ? (t(this).removeClass("active"),
            t(this).find(".sub-menu").slideUp()) : (e.preventDefault(),
            t(this).addClass("active"),
            t(this).find(".sub-menu").slideDown())
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).on("click", ".scroll-container .btn-scroll", (function(e) {
            e.preventDefault(),
            $scrollto_location = t(this).parents(".scroll-container").outerHeight(!0),
            (t(".icg-animated_hero_module").length || t(".icg-hero_post_module:not(.full-bleed)").length) && t("[data-scroll-container]").length && !isIE() && t(window).width() >= 992 ? loco_scroll.scrollTo($scrollto_location) : t("html,body").animate({
                scrollTop: $scrollto_location
            }, 1e3)
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        var e = "modal-open search-active";
        t(document).on("click", ".search-trigger", (function(i) {
            i.preventDefault();
            t(this).addClass("search-active"),
            t("body").hasClass("is-sub-page") || (e += " is-sub-page"),
            t("body").addClass(e),
            t("#icg-search").fadeIn("fast"),
            t("#icg-search").find(".search-field").focus()
        }
        )),
        t(document).on("click", ".close-search", (function(i) {
            i.preventDefault(),
            t("#icg-search").fadeOut("fast"),
            t("body").removeClass(e),
            t(".search-trigger").removeClass("search-active")
        }
        )),
        t(document).on("click", "#clear-search", (function(e) {
            e.preventDefault(),
            t(this).siblings("form").find(".search-field").val(""),
            t(this).siblings("form").submit()
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(".slider-custom-team").each((function(e) {
            var i = t(this).siblings(".slider-custom-team-controls").find(".slick-prev")
              , s = t(this).siblings(".slider-custom-team-controls").find(".slick-next");
            t(this).hasClass("slick-initialized") || t(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                infinite: !0,
                autoplay: !1,
                swipe: !0,
                prevArrow: i,
                nextArrow: s,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        dots: !0
                    }
                }]
            })
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(".copy-link").click((function(t) {
            t.preventDefault(),
            function(t) {
                if (window.clipboardData && window.clipboardData.setData)
                    return alert("Url Copied!"),
                    clipboardData.setData("Text", t);
                if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var e = document.createElement("textarea");
                    e.textContent = t,
                    e.style.position = "fixed",
                    document.body.appendChild(e),
                    e.select();
                    try {
                        alert("Url Copied!"),
                        document.execCommand("copy")
                    } catch (t) {
                        return alert("Sorry, Copy to clipboard failed!"),
                        console.warn("Copy to clipboard failed.", t),
                        !1
                    } finally {
                        document.body.removeChild(e)
                    }
                }
            }(jQuery(this).attr("href"))
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        function e(t, e) {
            "email" == e ? (t.find(".email-error").show(),
            t.find(".newsletter-form__email").focus()) : "list" == e && t.find(".list-error").show()
        }
        function i(t) {
            t.find(".form-error").hide()
        }
        function s(t) {
            t.find(".form-spinner").hide()
        }
        t(document).on("click", '.icg-newsletter-form input[type="submit"]', (function(i) {
            i.preventDefault();
            var n = t(this).closest("form")
              , o = n.find(".newsletter-form__email").val()
              , r = (n.attr("id"),
            !1)
              , a = n.serialize();
            return /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(o) ? (n.find(".newsletter-form__checkbox").each((function(e, i) {
                t(this).is(":checked") && (r = !0)
            }
            )),
            0 == r ? (e(n, "list"),
            !1) : (function(t) {
                t.find(".form-spinner").show(),
                t.find(".newsletter-form__submit").attr("disabled", "disabled")
            }(n),
            void t.ajax({
                url: "/wp-admin/admin-ajax.php",
                type: "post",
                data: a,
                success: function(t) {
                    t.is_error ? (s(n),
                    n.find(".ajax-error").text(t.message).show()) : (s(n),
                    n.css("opacity", 0).siblings().css("opacity", 0),
                    n.siblings(".mailchimp-success").html(t.message).css("opacity", 1))
                },
                error: function(t) {}
            }))) : (e(n, "email"),
            !1)
        }
        )),
        t("#subscribeModal").on("hidden.bs.modal", (function(e) {
            t(this).find(".icg-newsletter-form").trigger("reset").css("opacity", 1).siblings().css("opacity", 1),
            t(this).find(".form-spinner").hide(),
            t(this).find(".newsletter-form__submit").removeAttr("disabled"),
            t(this).find(".mailchimp-success").css("opacity", 0)
        }
        )),
        t(document).on("keypress", "input.newsletter-form__email", (function(e) {
            var s = t(this).closest("form");
            s.find(".form-error").is(":visible") && i(s)
        }
        )),
        t("input.newsletter-form__checkbox").on("click", (function() {
            i(t(this).closest("form"))
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        enquire.register("screen and (min-width: 1024px)", {
            match: function() {
                t(".switch-image").each((function(e, i) {
                    t(this).attr("src", t(this).data("desktopSrc")),
                    t(this).attr("width", t(this).data("desktopWidth")),
                    t(this).attr("height", t(this).data("desktopHeight")),
                    t(this).css("opacity", 1)
                }
                ))
            }
        }),
        enquire.register("screen and (min-width: 768px) and (max-width: 1024px)", {
            match: function() {
                t(".switch-image").each((function(e, i) {
                    t(this).attr("src", t(this).data("tabletSrc")),
                    t(this).attr("width", t(this).data("tabletWidth")),
                    t(this).attr("height", t(this).data("tabletHeight")),
                    t(this).css("opacity", 1)
                }
                ))
            }
        }),
        enquire.register("screen and (max-width: 767px)", {
            match: function() {
                t(".switch-image").each((function(e, i) {
                    t(this).attr("src", t(this).data("mobileSrc")),
                    t(this).attr("width", t(this).data("mobileWidth")),
                    t(this).attr("height", t(this).data("mobileHeight")),
                    t(this).css("opacity", 1)
                }
                ))
            }
        })
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(document).click((function(e) {
            var i = t(".tax-filter");
            i.is(event.target) || i.has(event.target).length || (t(".tax-filter .filter-trigger").removeClass("active"),
            t(".tax-filter .filter-options").slideUp("fast"))
        }
        )),
        t(document).on("click", ".tax-filter .filter-trigger", (function(e) {
            e.preventDefault(),
            t(this).toggleClass("active"),
            t(this).siblings(".filter-options").slideToggle("fast")
        }
        )),
        t(document).on("click", ".tax-filter .clear", (function(e) {
            e.preventDefault();
            var i = t(this).data("taxonomy");
            t('input[name="' + i + '"]').val(""),
            t(this).closest("form").submit()
        }
        )),
        t(document).on("click", ".tax-filter ul li", (function(e) {
            e.preventDefault(),
            t(this).toggleClass("active");
            var i = t(this).data("term")
              , s = t(this).data("taxonomy")
              , n = t('input[name="' + s + '"]')
              , o = n.val()
              , r = new Array;
            if ("" != o && (r = o.split(",")),
            t(this).hasClass("active"))
                r.push(i);
            else
                for (var a = 0; a < r.length; a++)
                    r[a] === i && r.splice(a, 1);
            var l = r.toString();
            n.val(l)
        }
        ))
    }
    ))
}(jQuery),
function(t) {
    function e() {
        ("ontouchstart"in window || "ontouch"in window) && (t(".icg-hero_post_module.full-bleed-on-mobile").length && t(".icg-hero_post_module.full-bleed-on-mobile article").css("height", window.innerHeight),
        t(".icg-animated_hero_module").length && t(".icg-animated_hero_module").css("height", window.innerHeight))
    }
    t(document).ready((function() {
        ("ontouchstart"in window || "ontouch"in window) && (t("body").addClass("touch"),
        e())
    }
    )),
    t(window).on("resize", (function() {
        e()
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        t(".menu-item.subscribe-trigger").length && (t(".menu-item.subscribe-trigger").each((function(e, i) {
            t(this).find("a").attr("data-bs-toggle", "modal"),
            t(this).find("a").attr("data-bs-target", "#subscribeModal")
        }
        )),
        t(".menu-item.search-trigger__wrapper").each((function(e, i) {
            t(this).find("a").addClass("search-trigger")
        }
        ))),
        t(document).on("click", ".menu-item.subscribe-trigger a, .menu-item.search-trigger__wrapper a", (function(e) {
            setTimeout((function() {
                t("#mobilemenuModal").modal("hide")
            }
            ), 100)
        }
        ))
    }
    ))
}(jQuery);
//# sourceMappingURL=scripts.js.map
