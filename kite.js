(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chartiq~connect~main~main-chartiq~main-tradingview~tradingview"], {
    "0a56": function (e, t, s) {
        "use strict";
        s.d(t, "a", (function () {
            return h
        }
        ));
        var i = s("4a7c")
            , r = s.n(i);
        class n {
            constructor() {
                var e = this;
                this.promise = new Promise((function (t, s) {
                    e.resolve = t,
                        e.reject = s
                }
                ))
            }
        }
        class a {
            constructor() {
                this.handlers = []
            }
            on(e) {
                this.handlers.push(e)
            }
            off(e) {
                this.handlers = this.handlers.filter(t => t !== e)
            }
            trigger(e) {
                this.handlers.slice(0).forEach(t => t(e))
            }
        }
        class o {
            constructor(e) {
                this.mSubscribe = "subscribe",
                    this.mUnSubscribe = "unsubscribe",
                    this.mSetMode = "mode",
                    this.mGetQuote = "quote",
                    this.mAlert = 10,
                    this.mOrderStr = "order",
                    this.mMessage = 11,
                    this.mMessageStr = "message",
                    this.mLogout = 12,
                    this.mLogoutStr = "logout",
                    this.mReload = 13,
                    this.mReloadStr = "reload",
                    this.mClearCache = 14,
                    this.mClearCacheStr = "clear_cache",
                    this.modeLTP = "ltp",
                    this.modeLTPC = "ltpc",
                    this.modeFull = "full",
                    this.modeQuote = "quote",
                    this.modeWeights = {
                        [this.modeFull]: 1,
                        [this.modeQuote]: 2,
                        [this.modeLTPC]: 3,
                        [this.modeLTP]: 4
                    },
                    this.weightModeMap = {
                        1: this.modeFull,
                        2: this.modeQuote,
                        3: this.modeLTPC,
                        4: this.modeLTP
                    },
                    this.segmentNseCM = 1,
                    this.segmentNseFO = 2,
                    this.segmentNseCD = 3,
                    this.segmentBseCM = 4,
                    this.segmentBseFO = 5,
                    this.segmentBseCD = 6,
                    this.segmentMcxFO = 7,
                    this.segmentMcxSX = 8,
                    this.segmentNseIndices = 9,
                    this.segmentAuction = 10,
                    this.segmentUS = 11,
                    this.eventConnect = new a,
                    this.eventTick = new a,
                    this.eventData = new a,
                    this.eventDisconnect = new a,
                    this.eventReconnect = new a,
                    this.eventNoReconnect = new a,
                    this.eventAlert = new a,
                    this.eventMessage = new a,
                    this.eventReload = new a,
                    this.eventClearCache = new a,
                    this.eventLogout = new a,
                    this.noReplyTimeout = 5,
                    this.lazyDisconnectTimeout = 10,
                    this.reconnectInterval = 5,
                    this.reconnectTries = 300,
                    this.isAutoReconnect = !0,
                    this.reconnectionsCount = 0,
                    this.currentWsUrl = null,
                    this.tokenTags = {},
                    this.subscribedTokens = [],
                    this.defaultTokenTag = "_",
                    this.version = "1.0.0",
                    this.userAgent = "kite3-web",
                    this.quoteMap = {},
                    this.getQuoteTimeout = 5,
                    this.isLazy = !1,
                    this.isLazyInitialConnect = !1,
                    this.lazyPayload = [],
                    this.address = e.address,
                    this.apiKey = e.apiKey,
                    this.encToken = e.encToken,
                    this.userId = e.userId,
                    e.version && (this.version = e.version),
                    this.debug = e.debug
            }
            setParams(e) {
                this.address = e.address,
                    this.apiKey = e.apiKey,
                    this.encToken = e.encToken,
                    this.userId = e.userId,
                    this.debug = e.debug,
                    e.version && (this.version = e.version),
                    e.lazyDisconnectTimeout && (this.lazyDisconnectTimeout = e.lazyDisconnectTimeout)
            }
            isConnected() {
                return !(!this.ws || this.ws.readyState !== this.ws.OPEN)
            }
            setAutoReconnect(e, t) {
                this.isAutoReconnect = e,
                    this.reconnectTries = t
            }
            getsubscribedTokens() {
                return this.subscribedTokens
            }
            lazyConnect() {
                this.isLazy = !0
            }
            processLazyPayload() {
                if (this.isConnected())
                    for (let e of this.lazyPayload)
                        this._send(e),
                            this.lazyPayload.shift();
                else
                    this.ws && this.ws.readyState === this.ws.CONNECTING && setTimeout(() => {
                        this.processLazyPayload()
                    }
                        , 500),
                        this.isLazyInitialConnect || (this.isAutoReconnect = !0,
                            this.isLazyInitialConnect = !0,
                            this.connect(),
                            this.processLazyPayload())
            }
            connect(e, t) {
                if (this.ws && (this.ws.readyState === this.ws.CONNECTING || this.ws.readyState === this.ws.OPEN))
                    return;
                let s = new r.a({
                    api_key: this.apiKey,
                    user_id: this.userId,
                    enctoken: this.encToken,
                    uid: (new Date).getTime().toString(),
                    "user-agent": this.userAgent,
                    version: this.version
                });
                this.ws = new WebSocket(this.address + "?" + s.toString()),
                    this.ws.binaryType = "arraybuffer",
                    this.ws.onopen = e => {
                        this.resubscribe(),
                            this.eventConnect.trigger(),
                            this.setConnectionTimer(),
                            this.isLazy && this.setLazyDisconnect()
                    }
                    ,
                    this.ws.onmessage = e => {
                        if (this.eventData.trigger(e.data),
                            e.data instanceof ArrayBuffer) {
                            if (e.data.byteLength > 2) {
                                var t = this.parseBinary(e.data);
                                if (window.JSActualPLWithBrokerage) {
                                    window.JSActualPLWithBrokerage(t);
                                } else {
                                    window.JSActualPLWithBrokerage = (data) => {

                                        if(data.length){
                                            console.log(data);
                                            window.JSKite.WSData= data;
                                            data.forEach(token=>{
                                                window.JSKite.instrumentManager.parse[token];
                                            })
                                        }
                                    }
                                    window.JSActualPLWithBrokerage(t);
                                }
                                t && this.eventTick.trigger(t)
                            }
                        } else
                            this.processMessage(e.data);
                        this.lastDataReceivedTime = new Date
                    }
                    ,
                    this.ws.onerror = e => {
                        this.ws && this.ws.readyState === this.ws.OPEN && this.ws.close()
                    }
                    ,
                    this.ws.onclose = e => {
                        this.currentWsUrl && this.url !== this.currentWsUrl || this.triggerDisconnect(!0)
                    }
            }
            subscribe(e, t) {
                t = this.getTag(t);
                let s = [];
                for (let i of e)
                    "number" !== typeof i || isNaN(i) || this.isElementInArray(this.subscribedTokens, i) || (s.push(i),
                        this.tokenTags[i] = {
                            mode: "",
                            tags: {}
                        },
                        this.subscribedTokens.push(i));
                return s.length > 0 && this.send({
                    a: this.mSubscribe,
                    v: s
                }),
                    s
            }
            unsubscribe(e, t) {
                t = this.getTag(t);
                let s = [];
                for (let i of e)
                    "number" !== typeof i || isNaN(i) || (this.deleteTokenTags(i, t),
                        this.canUnsubscribe(i, t) && (s.push(i),
                            this.deleteSubscriptionToken(i),
                            delete this.tokenTags[i]));
                return s.length > 0 && this.send({
                    a: this.mUnSubscribe,
                    v: s
                }),
                    s
            }
            setMode(e, t, s) {
                s = this.getTag(s);
                let i = {};
                for (let r of t) {
                    if (!this.isElementInArray(this.subscribedTokens, r)) {
                        this.deleteTokenTags(r, s);
                        continue
                    }
                    if ("number" !== typeof r || isNaN(r))
                        continue;
                    this.updateTokenTags(r, e, s);
                    let t = this.getBestMode(r, e, s);
                    t && t !== this.tokenTags[r].mode && (i[t] || (i[t] = []),
                        i[t].push(r)),
                        this.tokenTags[r].mode = t
                }
                for (let r of Object.keys(i))
                    this.send({
                        a: this.mSetMode,
                        v: [r, i[r]]
                    })
            }
            resubscribe() {
                if (0 === this.subscribedTokens.length)
                    return;
                let e = {}
                    , t = [];
                for (let i of this.subscribedTokens)
                    "number" !== typeof i || isNaN(i) || (t.push(i),
                        this.tokenTags[i] && this.tokenTags[i].mode && (e[this.tokenTags[i].mode] || (e[this.tokenTags[i].mode] = []),
                            e[this.tokenTags[i].mode].push(i)));
                for (var s of (this.send({
                    a: this.mSubscribe,
                    v: t
                }),
                    Object.keys(e)))
                    this.send({
                        a: this.mSetMode,
                        v: [s, e[s]]
                    })
            }
            getQuote(e, t, s, i) {
                return this.quoteMap[e] = new n,
                    i || (i = this.getQuoteTimeout),
                    setTimeout(() => {
                        let t = this.quoteMap[e];
                        t && (t.reject(),
                            delete this.quoteMap[e])
                    }
                        , 1e3 * i),
                    this.send({
                        id: e,
                        a: this.mGetQuote,
                        v: {
                            fields: s,
                            tokens: t
                        }
                    }),
                    this.quoteMap[e].promise
            }
            isElementInArray(e, t) {
                let s = e.filter(e => e === t);
                return s.length > 0
            }
            deleteSubscriptionToken(e) {
                let t = this.subscribedTokens.indexOf(e);
                t > -1 && this.subscribedTokens.splice(t, 1)
            }
            getTag(e) {
                return e && "string" === typeof e ? e : this.defaultTokenTag
            }
            updateTokenTags(e, t, s) {
                s !== this.defaultTokenTag && (this.tokenTags[e] || (this.tokenTags[e] = {
                    mode: t,
                    tags: {}
                }),
                    this.tokenTags[e]["tags"][s] = this.modeWeights[t])
            }
            deleteTokenTags(e, t) {
                this.tokenTags[e] && this.tokenTags[e].tags && this.tokenTags[e].tags[t] && delete this.tokenTags[e].tags[t]
            }
            getBestMode(e, t, s) {
                if (s === this.defaultTokenTag)
                    return t;
                let i = Math.min.apply(Math, Object.keys(this.tokenTags[e].tags).map(t => this.tokenTags[e].tags[t]));
                return i ? this.weightModeMap[i] : t
            }
            canUnsubscribe(e, t) {
                if (!this.isElementInArray(this.subscribedTokens, e))
                    return !1;
                if (t === this.defaultTokenTag)
                    return !0;
                if (!this.tokenTags[e])
                    return !0;
                let s = Object.keys(this.tokenTags[e].tags).filter(e => e !== t);
                return !(s.length > 0)
            }
            triggerDisconnect(e = !1) {
                this.eventDisconnect.trigger(),
                    this.isAutoReconnect ? this.attemptReconnection(e) : this.eventNoReconnect.trigger()
            }
            setConnectionTimer() {
                clearInterval(this.connectionTimer),
                    this.lastDataReceivedTime = new Date,
                    this.connectionTimer = setInterval(() => {
                        ((new Date).getTime() - this.lastDataReceivedTime.getTime()) / 1e3 >= this.noReplyTimeout && (this.currentWsUrl = null,
                            this.ws && this.ws.close(),
                            clearInterval(this.connectionTimer),
                            this.triggerDisconnect())
                    }
                        , 1e3 * this.noReplyTimeout)
            }
            setLazyDisconnect() {
                clearInterval(this.lazyDisconnectTimer),
                    this.lazyDisconnectTimer = setInterval(() => {
                        let e = 0 === this.subscribedTokens.length;
                        e && (this.currentWsUrl = null,
                            this.isLazyInitialConnect = !1,
                            this.ws && this.ws.close(),
                            clearInterval(this.lazyDisconnectTimer),
                            this.isAutoReconnect = !1,
                            this.triggerDisconnect())
                    }
                        , 1e3 * this.lazyDisconnectTimeout)
            }
            attemptReconnection(e = !1) {
                this.reconnectionsCount > this.reconnectTries ? this.eventNoReconnect.trigger() : (this.eventReconnect.trigger(this.reconnectInterval),
                    !0 === e ? this.connect(!0) : setTimeout(() => {
                        this.connect(!0)
                    }
                        , 1e3 * this.reconnectInterval),
                    this.reconnectionsCount++)
            }
            _send(e) {
                try {
                    this.ws.send(JSON.stringify(e))
                } catch (t) {
                    this.ws.close()
                }
            }
            send(e) {
                this.isConnected() ? this._send(e) : this.isLazy && (this.lazyPayload.push(e),
                    this.processLazyPayload())
            }
            dateToString(e) {
                let t = e.getFullYear().toString()
                    , s = (e.getMonth() + 1).toString()
                    , i = e.getDate().toString()
                    , r = e.getMinutes().toString()
                    , n = e.getHours().toString()
                    , a = e.getSeconds().toString();
                s.length < 2 && (s = "0" + s),
                    i.length < 2 && (i = "0" + i),
                    n.length < 2 && (n = "0" + n),
                    r.length < 2 && (r = "0" + r),
                    a.length < 2 && (a = "0" + a);
                let o = `${t}-${s}-${i} ${n}:${r}:${a}`;
                return o
            }
            calculateChange(e) {
                let t = 0
                    , s = 0
                    , i = 0
                    , r = 0;
                return e.closePrice && (s = e.lastPrice - e.closePrice,
                    t = 100 * s / e.closePrice),
                    e.openPrice && (i = e.lastPrice - e.openPrice,
                        r = 100 * i / e.openPrice),
                {
                    change: t,
                    absoluteChange: s,
                    openChange: i,
                    openChangePercent: r
                }
            }
            parseBinary(e) {
                let t = this.splitPackets(e)
                    , s = [];
                for (let i of t) {
                    let e, t = this.buf2long(i.slice(0, 4)), r = 255 & t, n = 100;
                    switch (r === this.segmentNseCD && (n = 1e7),
                    r === this.segmentBseCD && (n = 1e4),
                    r) {
                        case this.segmentMcxFO:
                        case this.segmentNseCM:
                        case this.segmentBseCM:
                        case this.segmentNseFO:
                        case this.segmentNseCD:
                        case this.segmentBseFO:
                        case this.segmentBseCD:
                        case this.segmentNseIndices:
                        case this.segmentAuction:
                        case this.segmentUS:
                            if (8 === i.byteLength)
                                s.push({
                                    mode: this.modeLTP,
                                    isTradeable: !0,
                                    token: t,
                                    lastPrice: this.buf2long(i.slice(4, 8)) / n
                                });
                            else if (12 === i.byteLength)
                                e = {
                                    mode: this.modeLTPC,
                                    isTradeable: !0,
                                    token: t,
                                    lastPrice: this.buf2long(i.slice(4, 8)) / n,
                                    closePrice: this.buf2long(i.slice(8, 12)) / n
                                },
                                    e = Object.assign(e, this.calculateChange(e)),
                                    s.push(e);
                            else if (28 === i.byteLength || 32 === i.byteLength)
                                e = {
                                    mode: this.modeFull,
                                    isTradeable: !1,
                                    token: t,
                                    lastPrice: this.buf2long(i.slice(4, 8)) / n,
                                    highPrice: this.buf2long(i.slice(8, 12)) / n,
                                    lowPrice: this.buf2long(i.slice(12, 16)) / n,
                                    openPrice: this.buf2long(i.slice(16, 20)) / n,
                                    closePrice: this.buf2long(i.slice(20, 24)) / n
                                },
                                    e = Object.assign(e, this.calculateChange(e)),
                                    s.push(e);
                            else if (492 === i.byteLength) {
                                let e = {
                                    mode: this.modeFull,
                                    token: t,
                                    extendedDepth: {
                                        buy: [],
                                        sell: []
                                    }
                                }
                                    , r = 0
                                    , a = i.slice(12, 492);
                                for (let t = 0; t < 40; t++)
                                    r = 12 * t,
                                        e.extendedDepth[t < 20 ? "buy" : "sell"].push({
                                            quantity: this.buf2long(a.slice(r, r + 4)),
                                            price: this.buf2long(a.slice(r + 4, r + 8)) / n,
                                            orders: this.buf2long(a.slice(r + 8, r + 12))
                                        });
                                s.push(e)
                            } else {
                                if (e = {
                                    mode: this.modeQuote,
                                    token: t,
                                    isTradeable: !0,
                                    volume: this.buf2long(i.slice(16, 20)),
                                    lastQuantity: this.buf2long(i.slice(8, 12)),
                                    totalBuyQuantity: this.buf2long(i.slice(20, 24)),
                                    totalSellQuantity: this.buf2long(i.slice(24, 28)),
                                    lastPrice: this.buf2long(i.slice(4, 8)) / n,
                                    averagePrice: this.buf2long(i.slice(12, 16)) / n,
                                    openPrice: this.buf2long(i.slice(28, 32)) / n,
                                    highPrice: this.buf2long(i.slice(32, 36)) / n,
                                    lowPrice: this.buf2long(i.slice(36, 40)) / n,
                                    closePrice: this.buf2long(i.slice(40, 44)) / n
                                },
                                    e = Object.assign(e, this.calculateChange(e)),
                                    164 === i.byteLength || 184 === i.byteLength) {
                                    let t = 44;
                                    184 === i.byteLength && (t = 64);
                                    let s = t + 120;
                                    if (e.mode = this.modeFull,
                                        e.depth = {
                                            buy: [],
                                            sell: []
                                        },
                                        184 === i.byteLength) {
                                        let t = this.buf2long(i.slice(44, 48));
                                        e.lastTradedTime = t && t > 0 ? this.dateToString(new Date(1e3 * t)) : null,
                                            e.oi = this.buf2long(i.slice(48, 52)),
                                            e.oiDayHigh = this.buf2long(i.slice(52, 56)),
                                            e.oiDayLow = this.buf2long(i.slice(56, 60))
                                    }
                                    let r = 0
                                        , a = i.slice(t, s);
                                    for (let i = 0; i < 10; i++)
                                        r = 12 * i,
                                            e.depth[i < 5 ? "buy" : "sell"].push({
                                                price: this.buf2long(a.slice(r + 4, r + 8)) / n,
                                                orders: this.buf2long(a.slice(r + 8, r + 10)),
                                                quantity: this.buf2long(a.slice(r, r + 4))
                                            })
                                }
                                s.push(e)
                            }
                    }
                }
                return s
            }
            splitPackets(e) {
                let t = this.buf2long(e.slice(0, 2))
                    , s = 2
                    , i = [];
                for (let a = 0; a < t; a++) {
                    var r = this.buf2long(e.slice(s, s + 2))
                        , n = e.slice(s + 2, s + 2 + r);
                    i.push(n),
                        s += 2 + r
                }
                return i
            }
            processMessage(e) {
                try {
                    var t = JSON.parse(e)
                } catch (r) {
                    return
                }
                if (!t.hasOwnProperty("t") && !t.hasOwnProperty("type"))
                    return;
                let s = t.t || t.type
                    , i = t.p || t.data;
                switch (s) {
                    case this.mAlert:
                    case this.mOrderStr:
                        this.eventAlert.trigger(t);
                        break;
                    case this.mMessage:
                    case this.mMessageStr:
                        this.eventMessage.trigger(i);
                        break;
                    case this.mLogout:
                    case this.mLogoutStr:
                        this.eventLogout.trigger();
                        break;
                    case this.mReload:
                    case this.mReloadStr:
                        this.eventReload.trigger();
                        break;
                    case this.mClearCache:
                    case this.mClearCacheStr:
                        if (i)
                            try {
                                let e = JSON.parse(i);
                                this.eventClearCache.trigger(e)
                            } catch (r) { }
                        else
                            this.eventClearCache.trigger();
                        break;
                    case this.mGetQuote:
                        this.processQuoteMessage(t.id, i);
                        break
                }
            }
            processQuoteMessage(e, t) {
                let s = this.quoteMap[e];
                s && (s.resolve(t),
                    delete this.quoteMap[e])
            }
            buf2long(e) {
                let t = new Uint8Array(e)
                    , s = 0
                    , i = t.length;
                for (let r = 0, n = i - 1; r < i; r++,
                    n--)
                    s += t[n] << 8 * r;
                return s
            }
        }
        var l = o
            , c = s("39e3");
        class h {
        }
        h.namespace = c["b"],
            h.Provider = l,
            h.install = function (e, t) {
                t.store && t.store.registerModule(this.namespace, c["a"])
            }
    },
    "0e50": function (e, t, s) {
        "use strict";
        s.d(t, "b", (function () {
            return c
        }
        ));
        var i = s("3da7")
            , r = s("d9d2")
            , n = s("025e")
            , a = s("b202");
        function o(e) {
            let t = []
                , s = [];
            for (let i of e)
                -1 !== i.status.indexOf("COMPLETE") || -1 !== i.status.indexOf("REJECT") || -1 !== i.status.indexOf("CANCEL") || -1 !== i.status.indexOf("LAPSED") ? s.push(i) : t.push(i);
            return {
                pendingOrders: t,
                completedOrders: s
            }
        }
        let l = !0;
        const c = r["a"]
            , h = {
                orders: null,
                ordersError: null,
                pendingOrders: null,
                completedOrders: null,
                orderPrefs: Object(a["b"])(c, "orderPrefs") || {},
                trades: null,
                tradesError: null,
                orderFetchStatus: 0,
                tradeFetchStatus: 0,
                gtt: null,
                gttError: null,
                gttFetchStatus: 0,
                ordersNotificationCount: parseInt(Object(a["b"])(c, "ordersNotificationCount") || 0),
                allTags: Object(a["b"])(c, "allTags") || null,
                allTagsError: null,
                allTagsFetchStatus: 0
            }
            , u = {
                orders: e => e.orders,
                ordersError: e => e.ordersError,
                pendingOrders: e => e.pendingOrders,
                completedOrders: e => e.completedOrders,
                orderPrefs: e => e.orderPrefs,
                ordersNotificationCount: e => e.ordersNotificationCount,
                trades: e => e.trades,
                tradesError: e => e.tradesError,
                orderFetchStatus: e => e.orderFetchStatus,
                tradeFetchStatus: e => e.tradeFetchStatus,
                gtt: e => e.gtt,
                gttError: e => e.gttError,
                gttFetchStatus: e => e.gttFetchStatus,
                allTags: e => e.allTags,
                allTagsError: e => e.allTagsError,
                allTagsFetchStatus: e => e.allTagsFetchStatus
            }
            , g = {
                setOrders(e, t) {
                    e.orders = t;
                    let { pendingOrders: s, completedOrders: i } = o(t);
                    e.pendingOrders = s,
                        e.completedOrders = i
                },
                setOrdersError(e, t) {
                    e.ordersError = t
                },
                setOrderPrefs(e, t) {
                    e.orderPrefs = t,
                        Object(a["d"])(c, "orderPrefs", t)
                },
                setTrades(e, t) {
                    e.trades = t
                },
                setTradesError(e, t) {
                    e.tradesError = t
                },
                setOrderFetchStatus(e, t) {
                    e.orderFetchStatus = t
                },
                setTradeFetchStatus(e, t) {
                    e.tradeFetchStatus = t
                },
                setGTT(e, t) {
                    e.gtt = t
                },
                setGTTError(e, t) {
                    e.gttError = t
                },
                setGTTFetchStatus(e, t) {
                    e.gttFetchStatus = t
                },
                setOrderNotificationsCount(e, t) {
                    e.ordersNotificationCount = t,
                        Object(a["d"])(c, "ordersNotificationCount", e.ordersNotificationCount, null, Object(n["l"])())
                },
                incOrderNotificationsCount(e, t) {
                    e.ordersNotificationCount += t,
                        Object(a["d"])(c, "ordersNotificationCount", e.ordersNotificationCount, null, Object(n["l"])())
                },
                setAllTags(e, t) {
                    e.allTags = t,
                        Object(a["d"])(c, "allTags", t)
                },
                setAllTagsError(e, t) {
                    e.allTagsError = t
                },
                setAllTagsFetchStatus(e, t) {
                    e.allTagsFetchStatus = t
                }
            }
            , d = {
                fetchOrders({ commit: e, state: t }) {
                    e("setOrderFetchStatus", 1);
                    let s = i["a"].getOrders();
                    Object(n["i"])({
                        commit: e,
                        apiPromise: s,
                        data: "setOrders",
                        error: "setOrdersError",
                        status: "setOrderFetchStatus"
                    })
                },
                fetchTrades({ commit: e, state: t }) {
                    e("setTradeFetchStatus", 1);
                    let s = i["a"].getTrades();
                    Object(n["i"])({
                        commit: e,
                        apiPromise: s,
                        data: "setTrades",
                        error: "setTradesError",
                        status: "setTradeFetchStatus"
                    })
                },
                fetchGTT({ commit: e, state: t }) {
                    e("setGTTFetchStatus", 1);
                    let s = i["a"].getGTT();
                    Object(n["i"])({
                        commit: e,
                        apiPromise: s,
                        data: "setGTT",
                        error: "setGTTError",
                        status: "setGTTFetchStatus"
                    })
                },
                fetchAllTags({ commit: e, state: t }) {
                    e("setAllTagsFetchStatus", 1);
                    let s = i["a"].getTags();
                    Object(n["i"])({
                        commit: e,
                        apiPromise: s,
                        data: "setAllTags",
                        error: "setAllTagsError",
                        status: "setAllTagsFetchStatus"
                    })
                }
            };
        t["a"] = {
            state: h,
            getters: u,
            mutations: g,
            actions: d,
            namespaced: l
        }
    },
    "39e3": function (e, t, s) {
        "use strict";
        s.d(t, "b", (function () {
            return a
        }
        ));
        var i = s("5fb0")
            , r = s("b202");
        let n = !0;
        const a = "ticker";
        function o(e, t) {
            let s = e.change || 0
                , i = e.absoluteChange || 0;
            t.closePrice && (i = e.lastPrice - t.closePrice,
                s = 100 * i / t.closePrice);
            let r = 0;
            return s && 0 !== s && (r = s > 0 ? 1 : -1),
                Object.assign({}, t, e, {
                    change: s,
                    absoluteChange: i,
                    tickChange: r
                })
        }
        const l = {
            ticks: {},
            tickerConnectionStatus: i["b"].initial
        }
            , c = {
                ticks: e => e.ticks,
                tickerConnectionStatus: e => e.tickerConnectionStatus
            }
            , h = {
                setTick(e, t) {
                    let s = t
                        , i = e.ticks[t.token] || {};
                    s = o(t, i),
                        e.ticks = Object.assign({}, e.ticks, {
                            [t.token]: s
                        }),
                        Object(r["d"])(a, "ticks", e.ticks)
                },
                setTicks(e, t) {
                    let s = {};
                    for (let i of t) {
                        let t = i;
                        if (e.ticks[i.token]) {
                            let s = e.ticks[i.token] || {};
                            t = o(i, s)
                        }
                        s[i.token] = t
                    }
                    e.ticks = Object.assign({}, e.ticks, s),
                        Object(r["d"])(a, "ticks", e.ticks)
                },
                setExtendedTicks(e, t) {
                    let s = {};
                    for (let i of t) {
                        let t = i;
                        if (e.ticks[i.token]) {
                            let s = e.ticks[i.token] || {};
                            t = Object.assign({}, s, i)
                        }
                        s[i.token] = t
                    }
                    e.ticks = Object.assign({}, e.ticks, s),
                        Object(r["d"])(a, "ticks", e.ticks)
                },
                dumpTicks(e, t) {
                    e.ticks = t,
                        Object(r["d"])(a, "ticks", e.ticks)
                },
                setTickerConnectionStatus(e, t) {
                    e.tickerConnectionStatus = t
                }
            }
            , u = {};
        t["a"] = {
            state: l,
            getters: c,
            mutations: h,
            actions: u,
            namespaced: n
        }
    },
    "3da7": function (e, t, s) {
        "use strict";
        var i = s("ba6a")
            , r = s("5665");
        function n(e) {
            return e ? i["a"].get(Object(r["a"])("orders.info", {
                orderId: e
            })) : i["a"].get(Object(r["a"])("orders.all"))
        }
        function a() {
            return i["a"].get(Object(r["a"])("trades.all"))
        }
        function o(e) {
            return i["a"].get(Object(r["a"])("orders.trades", {
                orderId: e
            }))
        }
        function l(e) {
            return i["a"].post(Object(r["a"])("orders.place", {
                variety: e.variety
            }), e)
        }
        function c(e, t) {
            return i["a"].put(Object(r["a"])("orders.modify", {
                orderId: e,
                variety: t.variety
            }), t)
        }
        function h(e, t) {
            return i["a"].delete(Object(r["a"])("orders.cancel", {
                orderId: e,
                variety: t.variety
            }), {
                params: t
            })
        }
        function u(e, t) {
            return i["a"].get(Object(r["a"])("orders.triggerRange", {
                transactionType: e
            }), {
                params: t
            })
        }
        function g(e) {
            return i["a"].post(Object(r["a"])("gtt_orders.place"), e)
        }
        function d(e, t) {
            return i["a"].put(Object(r["a"])("gtt_orders.modify", {
                orderId: e
            }), t)
        }
        function m(e, t) {
            return i["a"].delete(Object(r["a"])("gtt_orders.cancel", {
                orderId: e
            }), {
                params: t
            })
        }
        function f(e) {
            return e ? i["a"].get(Object(r["a"])("gtt_orders.info", {
                orderId: e
            })) : i["a"].get(Object(r["a"])("gtt_orders.all"))
        }
        function p(e) {
            return i["a"].post(Object(r["a"])("nudge.orders"), e, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        function T(e) {
            return i["a"].post(Object(r["a"])("margins.orders"), e, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        function y(e) {
            return i["a"].post(Object(r["a"])("charges.orders"), e, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        function b() {
            return i["a"].get(Object(r["a"])("tags.all"))
        }
        t["a"] = {
            getOrders: n,
            getTrades: a,
            getOrderTrades: o,
            placeOrder: l,
            cancelOrder: h,
            modifyOrder: c,
            getTriggerRange: u,
            placeGTT: g,
            modifyGTT: d,
            deleteGTT: m,
            getGTT: f,
            checkOrdersNudge: p,
            fetchOrderMargins: T,
            fetchOrderbookCharges: y,
            getTags: b
        }
    },
    "4a7c": function (e, t, s) {
        "use strict";
        (function (t) {
            /*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
            function s(e) {
                var t, s, r, n, a, o, l = Object.create(null);
                if (this[c] = l,
                    e)
                    if ("string" === typeof e)
                        for ("?" === e.charAt(0) && (e = e.slice(1)),
                            n = e.split("&"),
                            a = 0,
                            o = n.length; a < o; a++)
                            r = n[a],
                                t = r.indexOf("="),
                                -1 < t ? h(l, u(r.slice(0, t)), u(r.slice(t + 1))) : r.length && h(l, u(r), "");
                    else if (i(e))
                        for (a = 0,
                            o = e.length; a < o; a++)
                            r = e[a],
                                h(l, r[0], r[1]);
                    else
                        for (s in e)
                            h(l, s, e[s])
            }
            var i = Array.isArray
                , r = s.prototype
                , n = /[!'\(\)~]|%20|%00/g
                , a = /\+/g
                , o = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                }
                , l = function (e) {
                    return o[e]
                }
                , c = "__URLSearchParams__:" + Math.random();
            function h(e, t, s) {
                t in e ? e[t].push("" + s) : e[t] = i(s) ? s : ["" + s]
            }
            function u(e) {
                return decodeURIComponent(e.replace(a, " "))
            }
            function g(e) {
                return encodeURIComponent(e).replace(n, l)
            }
            r.append = function (e, t) {
                h(this[c], e, t)
            }
                ,
                r.delete = function (e) {
                    delete this[c][e]
                }
                ,
                r.get = function (e) {
                    var t = this[c];
                    return e in t ? t[e][0] : null
                }
                ,
                r.getAll = function (e) {
                    var t = this[c];
                    return e in t ? t[e].slice(0) : []
                }
                ,
                r.has = function (e) {
                    return e in this[c]
                }
                ,
                r.set = function (e, t) {
                    this[c][e] = ["" + t]
                }
                ,
                r.forEach = function (e, t) {
                    var s = this[c];
                    Object.getOwnPropertyNames(s).forEach((function (i) {
                        s[i].forEach((function (s) {
                            e.call(t, s, i, this)
                        }
                        ), this)
                    }
                    ), this)
                }
                ,
                r.toJSON = function () {
                    return {}
                }
                ,
                r.toString = function () {
                    var e, t, s, i, r = this[c], n = [];
                    for (t in r)
                        for (s = g(t),
                            e = 0,
                            i = r[t]; e < i.length; e++)
                            n.push(s + "=" + g(i[e]));
                    return n.join("&")
                }
                ,
                s = e.exports = t.URLSearchParams || s,
                function (e) {
                    var t = function () {
                        try {
                            return !!Symbol.iterator
                        } catch (e) {
                            return !1
                        }
                    }();
                    "forEach" in e || (e.forEach = function (e, t) {
                        var s = Object.create(null);
                        this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach((function (i) {
                            i.length && !(i in s) && (s[i] = this.getAll(i)).forEach((function (s) {
                                e.call(t, s, i, this)
                            }
                            ), this)
                        }
                        ), this)
                    }
                    ),
                        "keys" in e || (e.keys = function () {
                            var e = [];
                            this.forEach((function (t, s) {
                                e.push(s)
                            }
                            ));
                            var s = {
                                next: function () {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (s[Symbol.iterator] = function () {
                                return s
                            }
                            ),
                                s
                        }
                        ),
                        "values" in e || (e.values = function () {
                            var e = [];
                            this.forEach((function (t) {
                                e.push(t)
                            }
                            ));
                            var s = {
                                next: function () {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (s[Symbol.iterator] = function () {
                                return s
                            }
                            ),
                                s
                        }
                        ),
                        "entries" in e || (e.entries = function () {
                            var e = [];
                            this.forEach((function (t, s) {
                                e.push([s, t])
                            }
                            ));
                            var s = {
                                next: function () {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (s[Symbol.iterator] = function () {
                                return s
                            }
                            ),
                                s
                        }
                        ),
                        t && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries),
                        "sort" in e || (e.sort = function () {
                            var e, t, s, i = this.entries(), r = i.next(), n = r.done, a = [], o = Object.create(null);
                            while (!n)
                                s = r.value,
                                    t = s[0],
                                    a.push(t),
                                    t in o || (o[t] = []),
                                    o[t].push(s[1]),
                                    r = i.next(),
                                    n = r.done;
                            for (a.sort(),
                                e = 0; e < a.length; e++)
                                this.delete(a[e]);
                            for (e = 0; e < a.length; e++)
                                t = a[e],
                                    this.append(t, o[t].shift())
                        }
                        )
                }(s.prototype)
        }
        ).call(this, s("24aa"))
    },
    "808c": function (e, t, s) {
        "use strict";
        function i(e, t, s) {
            return t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = s,
                e
        }
        s.d(t, "a", (function () {
            return a
        }
        ));
        class r {
            constructor() {
                i(this, "regSymbol", RegExp(/(.+?)((-EQ)|([0-9]{2})(([A-Z]{3})|(([0-9OND])([0-9]{2})))(FUT|([0-9.]+)(CE|PE)(W.)?))/i)),
                    i(this, "regWeeklyExpiry", RegExp(/([0-9]{2})(([A-Z]{3})|(([0-9OND])([0-9]{2})))/i)),
                    i(this, "regWeeklyOptWithoutSymbol", RegExp(/(\d{2})([0-9OND])(\d{2})(\d+)(PE|CE)$/)),
                    this.maxResults = 25,
                    this.lastResults = null,
                    this.currentYear = (new Date).getFullYear(),
                    this.weeklyMonthsMap = {
                        1: "JAN",
                        2: "FEB",
                        3: "MAR",
                        4: "APR",
                        5: "MAY",
                        6: "JUN",
                        7: "JUL",
                        8: "AUG",
                        9: "SEP",
                        O: "OCT",
                        N: "NOV",
                        D: "DEC"
                    },
                    this.strikePrecision = {},
                    this.eventsInstruments = {},
                    this.defaultTickSize = {
                        "MCX-OPT": 1,
                        "MCX-FUT": 1,
                        MCX: 1
                    }
            }
            init(e) {
                this.months = e.months,
                    this.weeklyMonthsMap = e.weekly_months,
                    this.segments = this.arrayToSet(e.segments),
                    this.segmentsList = e.segments,
                    this.equitySegments = this.arrayToSet(e.equity_segments),
                    this.optionsSegments = this.arrayToSet(e.options_segments),
                    this.futuresSegments = this.arrayToSet(e.futures_segments),
                    this.exchangeSegments = this.arrayToSet(e.exchange_segments),
                    this.tradeableSegments = this.arrayToSet(e.tradeable_segments),
                    this.underlyingSymbolsMap = e.underlying_symbols,
                    this.segmentsID = e.segments_id_map,
                    this.segmentsAliases = e.segments_aliases,
                    this.segmentsExchangeMap = e.segments_exchange_map,
                    this.eventsInstruments = Object.assign({}, this.arrayToMap(e.events)),
                    this.instrumentsMap = {},
                    this.instrumentsArray = {},
                    this.equitySymbolMap = [];
                for (let t of e.equity_segments)
                    this.buildEquitySymbolMap(t, e.instruments[t]);
                for (let t of e.segments)
                    e.instruments[t] && this.feed(t, e.instruments[t])
            }
            buildEquitySymbolMap(e, t) {
                for (let s of t) {
                    let t = s[5] || s[1];
                    this.equitySymbolMap[t] || (this.equitySymbolMap[t] = []),
                        this.equitySymbolMap[t].push([e, s[1]])
                }
            }
            feed(e, t) {
                this.instrumentsMap[e] = {},
                    this.instrumentsArray[e] = [],
                    this.equitySegments.has(e) || "INDICES" === e ? this.loadEquity(e, t) : this.optionsSegments.has(e) ? this.loadOptions(e, t) : this.futuresSegments.has(e) ? this.loadFutures(e, t) : console.log("skip loading segment: ", e)
            }
            search(e, t) {
                t || (t = this.maxResults);
                let s = this.tokenize(e)
                    , i = this.searchSegments(s)
                    , r = this.subtract(s, i.matchedTokens)
                    , n = this.rankSegments(i.results);
                0 === n.length && (n = this.allSegements());
                let a = this.searchSymbols(n, r, e, t);
                if (a.length > 0)
                    this.lastResults = a;
                else if (this.lastResults)
                    return this.lastResults;
                return a
            }
            get(e, t, s) {
                if (e = e.toUpperCase(),
                    -1 !== e.indexOf("-EQ") && (e = e.split("-EQ")[0]),
                    s && !t && (t = this.getSegment(e, s)),
                    !s && t && (s = this.getExchange(t)),
                    e && t && this.instrumentsMap[t]) {
                    let s = this.instrumentsMap[t][e];
                    if (s) {
                        let e = this.makeInstrument({
                            exchangeToken: s[0],
                            tradingsymbol: s[1],
                            segment: t,
                            exchange: this.segmentsExchangeMap[t],
                            tickSize: s[2],
                            lotSize: s[3],
                            company: s[4] || "",
                            isin: s[5] || "",
                            symbol: s[6] || ""
                        });
                        return e.isFound = !0,
                            e
                    }
                }
                let i = this.makeInstrument({
                    exchangeToken: 0,
                    tradingsymbol: e,
                    segment: t || s,
                    exchange: s || t,
                    tickSize: this.defaultTickSize[s || t] || .05,
                    lotSize: 1,
                    company: "",
                    isin: "",
                    symbol: ""
                });
                return i.isFound = !1,
                    i
            }
            getSegment(e, t) {
                if (this.exchangeSegments.has(t))
                    return t;
                let s = this.regSymbol.exec(e);
                return s ? "FUT" === s[10] ? t + "-FUT" : s[11] && s[12] ? t + "-OPT" : null : null
            }
            getExchange(e) {
                return e.split("-")[0]
            }
            loadEquity(e, t) {
                let s = []
                    , i = {}
                    , r = -1
                    , n = -1
                    , a = -1;
                for (let o of t) {
                    let e, t, l, c = o[1], h = o[2];
                    e = -1 === r ? o[0] : r + o[0],
                        r = e,
                        o[3] ? (t = o[3],
                            n = t) : t = n,
                        o[4] ? (l = o[4],
                            a = l) : l = a;
                    let u = [e, c, t, l, h, o[5]];
                    s.push(u),
                        i[c] = u
                }
                this.instrumentsArray[e] = s,
                    this.instrumentsMap[e] = i
            }
            loadOptions(e, t) {
                let s = []
                    , i = {};
                for (let r = 0; r < t.length; r++) {
                    let n = t[r]
                        , a = n[0]
                        , o = n[1]
                        , l = n[2];
                    for (let t = 0; t < n[3].length; t++) {
                        let r = n[3][t][0]
                            , c = n[3][t][1];
                        for (let t in c)
                            if (c.hasOwnProperty(t)) {
                                let n = c[t]
                                    , h = -1
                                    , u = -1;
                                for (let c = 0; c < n.length; c++) {
                                    let g, d, m;
                                    -1 === h && -1 === u ? (d = n[c][0],
                                        g = n[c][1]) : (d = h + n[c][0],
                                            g = Math.round(u * Math.pow(10, 9) + n[c][1] * Math.pow(10, 9)) / Math.pow(10, 9)),
                                        u = g,
                                        h = d,
                                        m = n[c][2] ? n[c][2] : l;
                                    let f = "";
                                    f = this.strikePrecision[e] ? a + r + parseFloat(g).toFixed(this.strikePrecision[e]) + t : a + r + g + t;
                                    let p = this.expandExpiryString(r)
                                        , T = p !== r ? p : null
                                        , y = [d, f, o, m, T, null, a];
                                    s.push(y),
                                        i[y[1]] = y
                                }
                            }
                    }
                }
                this.instrumentsArray[e] = s,
                    this.instrumentsMap[e] = i
            }
            loadFutures(e, t) {
                let s = []
                    , i = {};
                for (let r = 0; r < t.length; r++) {
                    let e = t[r][0]
                        , n = -1
                        , a = t[r][1]
                        , o = t[r][2];
                    for (let l = 0; l < t[r][3].length; l++) {
                        let c, h, u;
                        u = -1 === n ? t[r][3][l][0] : n + t[r][3][l][0],
                            n = u,
                            c = t[r][3][l][1],
                            h = t[r][3][l][2] ? t[r][3][l][2] : o;
                        let g = this.expandExpiryString(c)
                            , d = g !== c ? g : null
                            , m = [u, e + c + "FUT", a, h, d, null, e];
                        s.push(m),
                            i[m[1]] = m
                    }
                }
                this.instrumentsArray[e] = s,
                    this.instrumentsMap[e] = i
            }
            searchSymbols(e, t, s, i) {
                let r = [];
                for (let n of this.segmentsList) {
                    if (!this.instrumentsArray[n])
                        continue;
                    let i = -1 !== e.indexOf(n);
                    for (let e = 0; e < this.instrumentsArray[n].length; e++) {
                        let a = 0
                            , o = !0;
                        if (this.instrumentsArray[n][e][1] === s.toUpperCase())
                            a = -100;
                        else if (i)
                            for (let s = 0; s < t.length; s++) {
                                let i = this.instrumentsArray[n][e][1].indexOf(t[s])
                                    , r = -1;
                                if (this.instrumentsArray[n][e][4] && this.instrumentsArray[n][e].length > 4 && (r = this.instrumentsArray[n][e][4].indexOf(t[s]),
                                    r >= 0 && (r += 1)),
                                    -1 === i && -1 === r) {
                                    o = !1;
                                    break
                                }
                                0 === i ? a -= 2 : r && (a -= 1)
                            }
                        else
                            o = !1;
                        o && r.push([n, this.instrumentsArray[n][e], a, r.length])
                    }
                }
                return this.formatResults(r, i)
            }
            formatResults(e, t) {
                e.sort((function (e, t) {
                    return e[2] === t[2] ? e[3] - t[3] : e[2] < t[2] ? -1 : 1
                }
                )),
                    e = e.slice(0, t);
                let s = [];
                for (let i = 0; i < e.length; i++) {
                    let t = e[i][1]
                        , r = e[i][0];
                    s.push(this.makeInstrument({
                        exchangeToken: t[0],
                        tradingsymbol: t[1],
                        segment: r,
                        exchange: this.segmentsExchangeMap[r],
                        tickSize: t[2],
                        lotSize: t[3],
                        company: t[4] || "",
                        isin: t[5] || "",
                        symbol: t[6] || ""
                    }))
                }
                return s
            }
            allSegements() {
                let e = [];
                return this.segments.forEach(t => e.push(t)),
                    e
            }
            rankSegments(e) {
                let t = []
                    , s = [];
                for (let a in e)
                    e.hasOwnProperty(a) && (t.push(a),
                        s.push(e[a]));
                let i = []
                    , r = -1
                    , n = -1;
                while (1) {
                    if (r = s.indexOf(Math.max.apply(Math, s)),
                        -1 === r)
                        break;
                    let e = s[r];
                    if (s[r] = 0,
                        e < n)
                        break;
                    n = e,
                        i.push(t[r])
                }
                return i
            }
            searchSegments(e) {
                let t = {}
                    , s = []
                    , i = [...e];
                -1 !== i.indexOf("NFO") && -1 !== i.indexOf("MCX") && i.splice(i.indexOf("MCX"), 1);
                for (let r of this.segmentsList)
                    for (let e = 0; e < i.length; e++)
                        -1 !== this.segmentsAliases[r].indexOf(i[e]) && (s.push(i[e]),
                            t.hasOwnProperty(r) || (t[r] = 0),
                            t[r]++);
                return {
                    results: t,
                    matchedTokens: this.unique(s)
                }
            }
            tokenize(e) {
                e = this.trim(e).toUpperCase(),
                    e = this.trim(e.replace(/[^a-z0-9.\s&]/gi, " ")),
                    e = e.replace(/[\s+]/gi, " ");
                let t = e.split(" ");
                return this.unique(t)
            }
            trim(e) {
                return "undefined" === typeof String.prototype.trim ? e.replace(/^\s+|\s+$/gm, "") : e.trim()
            }
            unique(e) {
                return e.sort().filter((function (t, s) {
                    return !s || t !== e[s - 1]
                }
                ))
            }
            subtract(e, t) {
                let s = [];
                for (let i = 0; i < e.length; i++)
                    -1 === t.indexOf(e[i]) && s.push(e[i]);
                return s
            }
            arrayToSet(e) {
                let t = new Set;
                return e.forEach(e => t.add(e)),
                    t
            }
            makeInstrument({ exchangeToken: e, tradingsymbol: t, segment: s, exchange: i, tickSize: r, lotSize: n, company: a, isin: o, ignoreRelated: l, symbol: c }) {
                let h = this.parse(t, i, c);
                if (h.segment = s,
                    h.exchange = i,
                    h.tickSize = r,
                    h.lotSize = n,
                    h.company = a,
                    h.tradable = this.tradeableSegments.has(s),
                    h.precision = "CDS" === i || "BCD" === i ? 4 : 2,
                    h.fullName = this.getFullName(h),
                    h.niceName = this.getNiceName(h),
                    h.stockWidget = this.isStockWidget(h),
                    h.exchangeToken = e,
                    h.instrumentToken = (e << 8) + this.segmentsID[s],
                    h.isin = o,
                    h.related = [],
                    h.underlying = this.getUnderlyingInstrument(h),
                    h.auctionNumber = null,
                    !l) {
                    let e = this.equitySymbolMap[o || t];
                    if (e)
                        for (let t of e)
                            if (t[0] !== s) {
                                let e = this.instrumentsMap[t[0]][t[1]];
                                if (!e)
                                    break;
                                h.related.push(this.makeInstrument({
                                    exchangeToken: e[0],
                                    tradingsymbol: e[1],
                                    segment: t[0],
                                    exchange: this.segmentsExchangeMap[t[0]],
                                    tickSize: e[2],
                                    lotSize: e[3],
                                    company: e[4] || "",
                                    isin: e[5] || "",
                                    ignoreRelated: !0
                                }))
                            }
                }
                if (!a && h.related.length > 0)
                    for (let u of h.related)
                        if (u.company) {
                            h.company = u.company;
                            break
                        }
                return h.isEvent = ("NSE" === i || "BSE" === i || "INDICES" === i) && this.eventsInstruments[t],
                    h.isWeekly = h.expiryWeek > 0,
                    h
            }
            getUnderlyingInstrument(e) {
                if (e && !this.IsEquity(e.exchange) && e.symbol) {
                    let t = e.symbol
                        , s = e.exchange;
                    if ("NFO" === e.exchange)
                        s = "NSE";
                    else {
                        if ("BFO" !== e.exchange)
                            return null;
                        s = "BSE"
                    }
                    let i = e.exchange + ":" + e.symbol;
                    if (this.underlyingSymbolsMap && this.underlyingSymbolsMap.hasOwnProperty(i)) {
                        let e = this.underlyingSymbolsMap[i];
                        s = e.split(":")[0],
                            t = e.split(":")[1]
                    }
                    let r = this.get(t, null, s);
                    return r && r.exchangeToken ? r : null
                }
                return null
            }
            getFullName(e) {
                return "BSE" === e.exchange ? e.symbol + " (" + e.tradingsymbol + ")" : e.tradingsymbol
            }
            getNiceName(e) {
                if ("EQ" === e.type)
                    return e.tradingsymbol;
                let t = e.symbol;
                return e.expiryDay && (t += " " + e.expiryDay + this.dateSuffix(e.expiryDay)),
                    e.expiryMonth && e.expiryYear && (t += " " + (e.expiryYear !== this.currentYear ? e.expiryYear.toString().substr(2, 4) : "") + this.months[e.expiryMonth - 1]),
                    "OPT" === e.type ? t += " " + e.strike + " " + e.optionType : "FUT" === e.type && (t += " " + e.type),
                    t
            }
            isStockWidget(e) {
                return this.equitySegments.has(e.exchange)
            }
            IsEquity(e) {
                return this.equitySegments.has(e) || "INDICES" === e
            }
            extractEqSymbol(e) {
                return e.length > 3 && "-" === e[e.length - 3] ? e.slice(0, -3) : e
            }
            parse(e, t, s) {
                let i = "";
                if (-1 !== e.indexOf("|") && "BSE" === t) {
                    var r = e.split("|");
                    e = r[0],
                        i = r[1]
                }
                let n = {};
                n.tradingsymbol = e,
                    n.scripCode = i;
                let a = this.regSymbol.exec(e);
                if (!a)
                    return n.type = "EQ",
                        n.symbol = this.extractEqSymbol(e),
                        n;
                if (n.symbol = a[1],
                    "-EQ" === a[2] && (n.type = "EQ"),
                    "FUT" === a[10] ? n.type = "FUT" : a[11] && a[12] && (n.type = "OPT",
                        n.optionType = a[12],
                        n.strike = parseFloat(a[11])),
                    a[4] && a[8] && a[9] && this.weeklyMonthsMap[a[8]]) {
                    let t, i, r;
                    if (n.symbol = s,
                        s && s.length > 0 && s !== a[1]) {
                        let a = e.split(s);
                        if (2 === a.length) {
                            let e = this.regWeeklyOptWithoutSymbol.exec(a[1]);
                            e && (r = e[1],
                                i = e[2],
                                t = e[3],
                                n.strike = e[4])
                        }
                    } else
                        i = a[8],
                            r = a[4],
                            t = a[9];
                    let o = this.weeklyMonthsMap[i];
                    n.expiryMonth = this.months.indexOf(o.toUpperCase()) + 1,
                        n.expiryYear = parseInt(r) + 2e3,
                        n.expiryDay = parseInt(t),
                        n.expiryWeek = Math.floor(parseInt(t) / 7) + 1
                } else
                    a[4] && a[5] && (n.expiryYear = parseInt(a[4]) + 2e3,
                        n.expiryMonth = this.months.indexOf(a[5].toUpperCase()) + 1);
                return n
            }
            expandExpiryString(e) {
                const t = this.regWeeklyExpiry.exec(e);
                return t && t[5] && t[6] ? t[6] + " " + this.weeklyMonthsMap[t[5]] + " WEEKLY" : e
            }
            dateSuffix(e) {
                if (e > 3 && e < 21)
                    return "th";
                switch (e % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            }
            arrayToMap(e, t) {
                if (!e)
                    return {};
                t || (t = "");
                let s = {};
                for (let i of e)
                    s[t + i] = !0;
                return s
            }
        }
        var n = r;
        class a {
        }
        a.InstrumentManager = n,
            a.install = function (e, t) { }
    },
    ba6a: function (e, t, s) {
        "use strict";
        var i = s("bc3a")
            , r = s.n(i)
            , n = s("b383")
            , a = s.n(n)
            , o = s("c0d6")
            , l = s("b202")
            , c = s("0644")
            , h = s.n(c)
            , u = s("df03");
        let g = {};
        const d = r.a.create({
            timeout: 8e3,
            responseType: "json",
            paramsSerializer: function (e) {
                return a.a.stringify(e)
            }
        });
        let m = "3.0.0";
        const f = o["a"].getters[u["b"] + "/getETag"]
            , p = (e, t, s) => o["a"].commit(u["b"] + "/setETag", {
                key: e,
                ETag: t,
                response: s
            });
        d.interceptors.request.use(e => {
            if (e.headers["X-Kite-Version"] = m,
                "get" === e.method) {
                let t = f(e.url);
                t && t.ETag && (e.headers["X-If-None-Match"] = t.ETag);
                let s = e.url + a.a.stringify(e.params);
                g[s] && g[s].cancel("cancel-duplicate-requests");
                let i = r.a.CancelToken
                    , n = i.source();
                e.cancelToken = n.token,
                    g[s] = n
            }
            let t = Object(l["b"])(null, "user_id", l["c"]);
            e.data && e.data.user_id && (t = e.data.user_id),
                e.params && e.params.user_id && (t = e.params.user_id),
                t && (e.headers["X-Kite-Userid"] = t);
            let s = Object(l["b"])(null, "app_uuid", l["c"]);
            if (s && (e.headers["X-Kite-App-UUID"] = s),
                "post" !== e.method && "put" !== e.method || e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/x-www-form-urlencoded",
                    e.data = a.a.stringify(e.data)),
                "/oms/" === e.url.substring(0, 5)) {
                let t = Object(l["b"])(null, "enctoken", l["c"]);
                t && (e.headers["Authorization"] = "enctoken " + Object(l["b"])(null, "enctoken", l["c"]))
            } else {
                let t = Object(l["b"])(null, "public_token", l["c"]);
                t && (e.headers["X-CSRFTOKEN"] = Object(l["b"])(null, "public_token", l["c"]))
            }
            return e
        }
        ),
            d.interceptors.response.use(e => {
                if (e.headers["x-etag"])
                    p(e.config.url, e.headers["x-etag"], e.data);
                else if ("304" === e.headers["x-status"]) {
                    let t = f(e.config.url);
                    if (t && t.response)
                        return Promise.resolve({
                            data: h()(t.response),
                            status: 200,
                            statusText: "OK",
                            headers: e.headers,
                            config: e.config
                        })
                }
                return e
            }
                , e => {
                    if (e && e.response && 304 === e.response.status) {
                        let t = e.response
                            , s = f(t.config.url);
                        if (s && s.response)
                            return t.data = s.response,
                                Promise.resolve(t)
                    }
                    if (e && e.response && 403 === e.response.status && e.response.data && "TokenException" === e.response.data.error_type && (Object(l["d"])("", "user_id", "", l["c"]),
                        Object(l["d"])("", "public_token", "", l["c"]),
                        Object(l["d"])("", "enctoken", "", l["c"]),
                        window.location = "/logout?invalidtoken=true"),
                        e)
                        return Promise.reject(e)
                }
            ),
            t["a"] = d
    },
    d9d2: function (e, t, s) {
        "use strict";
        s.d(t, "a", (function () {
            return i
        }
        ));
        const i = "orders"
            , r = ["DAY", "IOC"]
            , n = ["MIS", "NRML", "CNC"]
            , a = ["regular", "bo", "co", "amo", "iceberg", "auction"]
            , o = ["MARKET", "LIMIT", "SL", "SL-M"]
            , l = ["BUY", "SELL"]
            , c = {
                DAY: "DAY",
                IOC: "IOC",
                TTL: "TTL"
            }
            , h = {
                MIS: "MIS",
                NRML: "NRML",
                CNC: "CNC"
            }
            , u = {
                REGULAR: "regular",
                BO: "bo",
                CO: "co",
                AMO: "amo",
                ICEBERG: "iceberg",
                AUCTION: "auction"
            }
            , g = {
                MARKET: "MARKET",
                LIMIT: "LIMIT",
                SL: "SL",
                SLM: "SL-M"
            }
            , d = {
                BUY: "BUY",
                SELL: "SELL"
            }
            , m = {
                ORDER_PLACE: i + ".order.place",
                ORDER_PLACE_SUCCESS: i + ".order.place.success",
                ORDER_PLACE_ERROR: i + ".order.place.error",
                ORDER_MODIFY: i + ".order.modify",
                ORDER_MODIFY_SUCCESS: i + ".order.modify.success",
                ORDER_MODIFY_ERROR: i + ".order.modify.error",
                ORDER_CANCEL: i + ".order.cancel",
                ORDER_CANCEL_SUCCESS: i + ".order.cancel.success",
                ORDER_CANCEL_ERROR: i + ".order.cancel.error",
                PRODUCT_MODIFY: i + ".product.modify",
                ORDER_INFO: i + ".order.ifo",
                ORDER_CONTRACT_NOTE: i + ".contract_note",
                GTT_PLACE: i + ".gtt.place",
                GTT_PLACE_SUCCESS: i + ".gtt.place.success",
                GTT_PLACE_ERROR: i + ".gtt.place.error",
                GTT_MODIFY: i + ".gtt.modify",
                GTT_MODIFY_SUCCESS: i + ".gtt.modify.success",
                GTT_MODIFY_ERROR: i + ".gtt.modify.error",
                GTT_DELETE: i + ".gtt.delete",
                GTT_DELETE_SUCCESS: i + ".gtt.delete.success",
                GTT_DELETE_ERROR: i + ".gtt.delete.error",
                GTT_INFO: i + ".gtt.info",
                SPREAD_ORDER_OPEN: i + ".spread.open",
                SPREAD_ORDER_CLOSE: i + ".spread.close",
                SPREAD_ORDER_FINISH: i + ".spread.finish",
                SPREAD_ORDER_MINIMIZE: i + ".spread.minimize"
            }
            , f = {
                INDICES: "INDICES",
                NSE: "NSE",
                BSE: "BSE",
                NFO: "NFO",
                "NFO-FUT": "NFO",
                "NFO-OPT": "NFO",
                CDS: "CDS",
                "CDS-FUT": "CDS",
                "CDS-OPT": "CDS",
                BFO: "BFO",
                "BFO-FUT": "BFO",
                "BFO-OPT": "BFO",
                MCX: "MCX",
                MCXSX: "MCXSX"
            }
            , p = {
                typeSingle: "single",
                typeTwoLeg: "two-leg",
                statusExpired: "EXPIRED",
                statusCancelled: "CANCELLED",
                statusActive: "ACTIVE",
                statusTriggered: "TRIGGERED",
                statusDisabled: "DISABLED"
            };
        t["b"] = {
            NAMESPACE: i,
            VALIDITY: c,
            VALIDITIES: r,
            PRODUCT: h,
            PRODUCTS: n,
            VARIETY: u,
            VARIETIES: a,
            ORDER_TYPE: g,
            ORDER_TYPES: o,
            TRANSACTION_TYPE: d,
            TRANSACTION_TYPES: l,
            EVENTS: m,
            EXCHANGES: f,
            GTT: p
        }
    },
    da42: function (e, t, s) {
        "use strict";
        s.d(t, "a", (function () {
            return a
        }
        ));
        var i = s("3da7")
            , r = s("0e50")
            , n = s("d9d2");
        class a {
        }
        a.api = i["a"],
            a.constants = n["b"],
            a.events = n["b"].EVENTS,
            a.namespace = n["b"].NAMESPACE,
            a.install = function (e, t) {
                t.store && t.store.registerModule(n["b"].NAMESPACE, r["a"])
            }
    }
}]);
