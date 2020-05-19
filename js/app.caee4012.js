(function (e) {
    function t(t) {
        for (var n, o, r = t[0], l = t[1], m = t[2], u = 0, p = []; u < r.length; u++)
            o = r[u], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0;
        for (n in l)
            Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        c && c(t);
        while (p.length)
            p.shift()();
        return i.push.apply(i, m || []),
        s()
    }
    function s() {
        for (var e, t = 0; t < i.length; t++) {
            for (var s = i[t], n = !0, r = 1; r < s.length; r++) {
                var l = s[r];
                0 !== a[l] && (n = !1)
            }
            n && (i.splice(t--, 1), e = o(o.s = s[0]))
        }
        return e
    }
    var n = {},
    a = {
        app: 0
    },
    i = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var s = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, o),
        s.l = !0,
        s.exports
    }
    o.m = e,
    o.c = n,
    o.d = function (e, t, s) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    },
    o.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (o.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e)
                o.d(s, n, function (t) {
                    return e[t]
                }
                    .bind(null, n));
        return s
    },
    o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        }
         : function () {
            return e
        };
        return o.d(t, "a", t),
        t
    },
    o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    o.p = "https://cdn.jsdelivr.net/gh/Tomotoes/about@e141b63824bd0/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var m = 0; m < r.length; m++)
        t(r[m]);
    var c = l;
    i.push([0, "chunk-vendors"]),
    s()
})({
    0: function (e, t, s) {
        e.exports = s("56d7")
    },
    3487: function (e, t, s) {},
    "56d7": function (e, t, s) {
        "use strict";
        s.r(t);
        s("ac6a"),
        s("cadf"),
        s("551c"),
        s("f751"),
        s("097d");
        var n = s("2b0e"),
        a = function () {
            var e = this,
            t = e.$createElement,
            s = e._self._c || t;
            return s("vue-terminal", {
                staticStyle: {
                    margin: "0 auto"
                },
                attrs: {
                    "task-list": e.taskList,
                    "command-list": e.commandList
                }
            })
        },
        i = [],
        o = function () {
            var e = this,
            t = e.$createElement,
            s = e._self._c || t;
            return s("div", {
                staticClass: "terminal fade"
            }, [s("div", {
                        staticStyle: {
                            position: "relative"
                        }
                    }, [s("div", {
                                staticClass: "header"
                            }, [s("h4", [e._v(e._s(e.title))]), e._m(0)]), s("div", {
                                ref: "terminalWindow",
                                staticStyle: {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    overflow: "auto",
                                    "z-index": "1",
                                    "margin-top": "30px",
                                    "max-height": "643px"
                                },
                                attrs: {
                                    id: "terminalWindow"
                                }
                            }, [s("div", {
                                        staticClass: "terminal-window",
                                        on: {
                                            click: e.handleFocus
                                        }
                                    }, [s("p", [e._v("Welcome to " + e._s(e.title) + ".")]), s("p", [s("span", {
                                                        staticClass: "prompt"
                                                    }), s("span", {
                                                        staticClass: "cmd"
                                                    }, [e._v("cd " + e._s(e.title))])]), s("transition-group", {
                                                attrs: {
                                                    name: "component-fade",
                                                    mode: "out-in"
                                                }
                                            }, e._l(e.messageList, (function (t, n) {
                                                        return s("p", {
                                                            key: n
                                                        }, [t.time ? s("span", {
                                                                    staticClass: "time"
                                                                }, [e._v(e._s(t.time))]) : e._e(), t.label ? s("span", {
                                                                    class: t.type
                                                                }, [e._v(e._s(t.label))]) : e._e(), t.message.list ? s("span", {
                                                                    staticClass: "cmd"
                                                                }, [s("span", [e._v(e._s(t.message.text))]), s("ul", e._l(t.message.list, (function (t, n) {
                                                                                    return s("li", {
                                                                                        key: n
                                                                                    }, [t.label ? s("span", {
                                                                                                class: t.type
                                                                                            }, [e._v(e._s(t.label) + ":")]) : e._e(), s("pre", [e._v(e._s(t.message))])])
                                                                                })), 0)]) : s("span", {
                                                                    staticClass: "cmd"
                                                                }, [e._v(e._s(t.message))])])
                                                    })), 0), e.actionResult ? s("p", [s("span", {
                                                        staticClass: "cmd"
                                                    }, [e._v(e._s(e.actionResult))])]) : e._e(), s("p", {
                                                ref: "terminalLastLine",
                                                staticClass: "terminal-last-line",
                                                on: {
                                                    click: e.handleFocus
                                                }
                                            }, ["&nbsp" === e.lastLineContent ? s("span", {
                                                        staticClass: "prompt"
                                                    }, [e._v(e._s(e.title) + "/")]) : e._e(), s("span", [e._v(e._s(e.inputCommand))]), s("span", {
                                                        class: e.lastLineClass,
                                                        domProps: {
                                                            innerHTML: e._s(e.lastLineContent)
                                                        }
                                                    }), s("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model.trim",
                                                                value: e.inputCommand,
                                                                expression: "inputCommand",
                                                                modifiers: {
                                                                    trim: !0
                                                                }
                                                            }
                                                        ],
                                                        ref: "inputBox",
                                                        staticClass: "input-box",
                                                        attrs: {
                                                            disabled: "." === e.lastLineContent,
                                                            autofocus: "true",
                                                            type: "text",
                                                            "aria-label": "command"
                                                        },
                                                        domProps: {
                                                            value: e.inputCommand
                                                        },
                                                        on: {
                                                            keyup: function (t) {
                                                                return e.handleCommand(t)
                                                            },
                                                            input: function (t) {
                                                                t.target.composing || (e.inputCommand = t.target.value.trim())
                                                            },
                                                            blur: function (t) {
                                                                return e.$forceUpdate()
                                                            }
                                                        }
                                                    })])], 1)])])])
        },
        r = [function () {
                var e = this,
                t = e.$createElement,
                s = e._self._c || t;
                return s("ul", {
                    staticClass: "shell-dots"
                }, [s("li", {
                            staticClass: "red"
                        }), s("li", {
                            staticClass: "yellow"
                        }), s("li", {
                            staticClass: "green"
                        })])
            }
        ],
        l = (s("28a5"), s("456d"), s("75fc")),
        m = {
            name: "VTerminal",
            data: function () {
                return {
                    title: "一个憨批阿毛",
                    messageList: [],
                    actionResult: "",
                    lastLineContent: ".",
                    inputCommand: "",
                    supportingCommandList: "",
                    historyIndex: 0,
                    commandHistory: []
                }
            },
            props: {
                restart: {
                    required: !1,
                default:
                    "restart"
                },
                commandList: {
                    required: !1,
                default:
                    function () {
                        return {}
                    }
                },
                taskList: {
                    required: !1,
                default:
                    function () {
                        return {}
                    }
                }
            },
            computed: {
                lastLineClass: function () {
                    return "&nbsp" === this.lastLineContent ? "cursor" : (this.lastLineContent, "loading")
                }
            },
            created: function () {
                var e = this;
                this.supportingCommandList = [].concat(Object(l["a"])(Object.keys(this.commandList)), Object(l["a"])(Object.keys(this.taskList))),
                this.handleRun(this.restart).then((function () {
                        e.pushToList({
                            type: "system",
                            label: "System",
                            message: 'Type "help" to get a supporting command list.'
                        }),
                        e.pushToList({
                            type: "system",
                            label: "System",
                            message: 'Type "back" to return to the previous page.'
                        }),
                        e.handleFocus()
                    }))
            },
            methods: {
                handleFocus: function () {
                    this.$refs.inputBox.focus()
                },
                handleCommand: function (e) {
                    var t = this;
                    if (13 === e.keyCode) {
                        if (this.commandHistory.push(this.inputCommand), this.historyIndex = this.commandHistory.length, this.pushToList({
                                message: "$ ".concat(this.inputCommand, " ")
                            }), this.inputCommand) {
                            this.inputCommand = this.inputCommand.toLowerCase();
                            var s = this.inputCommand.split(" ");
                            "back" === s[0] ? (this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: "Jumping page..."
                                }), window.history ? window.history.go(-1) : location.href = "https://humh.cn/") : "help" === s[0] ? this.printHelp(s[1]) : this.commandList[this.inputCommand] ? this.commandList[this.inputCommand].messages.forEach((function (e) {
                                    t.pushToList(e)
                                })) : this.taskList[this.inputCommand.split(" ")[0]] ? this.handleRun(this.inputCommand.split(" ")[0], this.inputCommand) : (this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: "Unknown Command."
                                }), this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: 'Type "help" to get a supporting command list.'
                                })),
                            this.inputCommand = "",
                            this.autoScroll(),
                            this.handleFocus()
                        }
                    } else
                        this.handlekeyEvent(e)
                },
                handlekeyEvent: function (e) {
                    switch (e.keyCode) {
                    case 38:
                        this.historyIndex = 0 === this.historyIndex ? 0 : this.historyIndex - 1,
                        this.inputCommand = this.commandHistory[this.historyIndex];
                        break;
                    case 40:
                        this.historyIndex = this.historyIndex === this.commandHistory.length ? this.commandHistory.length : this.historyIndex + 1,
                        this.inputCommand = this.commandHistory[this.historyIndex];
                        break;
                    default:
                        break
                    }
                },
                handleRun: function (e, t) {
                    var s = this;
                    return this.lastLineContent = ".",
                    this.taskList[e][e](this.pushToList, t).then((function (e) {
                            s.pushToList(e),
                            s.lastLineContent = "&nbsp"
                        })).catch((function (e) {
                            s.pushToList(e || {
                                type: "error",
                                label: "Error",
                                message: "Something went wrong!"
                            }),
                            s.lastLineContent = "&nbsp"
                        }))
                },
                pushToList: function (e) {
                    this.messageList.push(e),
                    this.autoScroll()
                },
                printHelp: function (e) {
                    var t = this;
                    if (e) {
                        var s = this.commandList[e] || this.taskList[e];
                        this.pushToList({
                            message: s.description
                        })
                    } else
                        this.pushToList({
                            message: "Here is a list of supporting command."
                        }), this.supportingCommandList.forEach((function (e) {
							// 优化为字典排序遍历
                                t.commandList[e] ? t.pushToList({
                                    type: "success",
                                    label: e,
                                    message: "// ".concat(t.commandList[e].description)
                                }) : t.pushToList({
                                    type: "success",
                                    label: e,
                                    message: "// ".concat(t.taskList[e].description)
                                })
                            })), this.pushToList({
                            message: 'Type "back" to return to the previous page.'
                        });
                    this.autoScroll(),
                    this.handleFocus()
                },
                time: function () {
                    return (new Date).toLocaleTimeString().split("").splice(2).join("")
                },
                autoScroll: function () {
                    var e = this;
                    this.$nextTick((function () {
                            e.$refs.terminalWindow.scrollTop = e.$refs.terminalLastLine.offsetTop
                        }))
                }
            }
        },
        c = m,
        u = (s("8ef2"), s("2877")),
        p = Object(u["a"])(c, o, r, !1, null, null, null),
        d = p.exports;
        s("f559");
        function g() {
            var e = new Date,
            t = e.getHours(),
            s = e.getMinutes(),
            n = e.getSeconds(),
            a = "".concat(t);
            return a += (s < 10 ? ":0" : ":") + s,
            a += (n < 10 ? ":0" : ":") + n,
            a
        }
        var h = [{
                type: "system",
                label: "System",
                message: "Thanks for your visit, let me introduce myself."
            }, {
                time: g(),
                type: "info",
                label: "Name:",
                message: "humh"
            }, {
                time: g(),
                type: "info",
                label: "Sex:",
                message: "Male"
            }, {
                time: g(),
                type: "info",
                label: "Age:",
                message: "23"
            }, {
                time: g(),
                type: "info",
                label: "Address:",
                message: "Xi'an, China"
            }, {
                time: g(),
                type: "info",
                label: "Degree:",
                message: "Bachelor's degree"
            }, {
                time: g(),
                type: "info",
                label: "Email:",
                message: "coder_humh@aliyun.com"
            }, {
                time: g(),
                type: "info",
                label: "Aim:",
                message: {
                    text: "Six goals as follows:",
                    list: [{
                            message: "Ardently love open source, Really get involved open source."
                        }, {
							message: "Do some own projects or with friends."
						}, {
                            message: "Become a full stack engineer."
                        }, {
                            message: "Work is booming."
                        }, {
                            message: "Enjoy life."
                        }, {
                            message: "They are healthy."
                        }
                    ]
                }
            }
        ],
        y = {
			restart: {
                description: "Introducting myself again.",
                restart: function (e) {
                    var t = 0;
                    return new Promise((function (s) {
                            var n = setInterval((function () {
                                        e(h[t]),
                                        t++,
                                        h[t] || (clearInterval(n), s({
                                                type: "success",
                                                label: "Done",
                                                message: "Myself introduction is over!"
                                            }))
                                    }), 1e3)
                        }))
                }
            },
            echo: {
                description: "Echoes input.",
                echo: function (e, t) {
                    return t = t.split(" "),
                    t.splice(0, 1),
                    new Promise((function (s) {
                            e({
                                time: g(),
                                label: "Echo",
                                type: "success",
                                message: t.join(" ")
                            }),
                            s({
                                type: "success",
                                label: "",
                                message: ""
                            })
                        }))
                }
            },
			home: {
                description: "Open my home page in a new tab.",
                home: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://humh.cn", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            },
            open: {
                description: "Open a specified url in a new tab.",
                open: function (e, t) {
                    return new Promise((function (s, n) {
                            var a = t.split(" ")[1];
                            a ? (e({
                                    type: "success",
                                    label: "Success",
                                    message: "Opening"
                                }), a.startsWith("http://") || (a = "http://".concat(a)), window.open(a, "_blank"), s({
                                    type: "success",
                                    label: "Done",
                                    message: "Page Opened!"
                                })) : n({
                                type: "error",
                                label: "Error",
                                message: "a url is required!"
                            })
                        }))
                }
            }, 
            blog: {
                description: "Open my blog in a new tab.",
                blog: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://blog.humh.cn", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            },
            bilibili: {
                description: "Open my bilibili in a new tab.",
                bilibili: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://space.bilibili.com/22808366", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            },
            guestbook: {
                description: "Open my guestbook in a new tab.",
                guestbook: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://blog.humh.cn/?p=471", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            },
            resume: {
                description: "Open my resume in a new tab.",
                resume: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://blog.humh.cn/?p=473", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            },
            // 2048: {
                // description: "Open a 2048 Game in a new tab.",
                // 2048: function (e, t) {
                    // return new Promise((function (t, s) {
                            // e({
                                // type: "success",
                                // label: "Success",
                                // message: "Opening"
                            // }),
                            // window.open("https://tomotoes.com/2048", "_blank"),
                            // t({
                                // type: "success",
                                // label: "Done",
                                // message: "Game Start!"
                            // })
                        // }))
                // }
            // },
            music: {
                description: "Open my favorite music list in a new tab.",
                music: function (e, t) {
                    return new Promise((function (t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }),
                            window.open("https://music.163.com/#/playlist?id=2084077857", "_blank"),
                            t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                }
            }
        },
        f = {
            contact: {
                description: "Return a list of my contact information.",
                messages: [{
                        type: "contact",
                        label: "Email:",
                        message: "`coder_humh@aliyun.com`"
                    }, {
                        type: "contact",
                        label: "Github:",
                        message: "`https://github.com/Jump-Boy`"
                    }, {
                        type: "contact",
                        label: "Gitee:",
                        message: "`https://gitee.com/Jump_Boy`"
                    }
                ]
            },
            // a_mao: {
                // description: "Return a piece of code about a_mao.",
                // messages: [{
                        // type: "success",
                        // label: "Compiled",
                        // message: "1   const"
                    // }, {
                        // type: "success",
                        // label: "Compiled",
                        // message: '2     tomatoes = "番茄",'
                    // }, {
                        // type: "success",
                        // label: "Compiled",
                        // message: '3     tomotoes = "坏掉的番茄";'
                    // }, {
                        // type: "success",
                        // label: "Compiled",
                        // message: "4   const myTomotoes = new Promise((resolve, reject) => {"
                    // }, {
                        // type: "warning",
                        // label: "Compiled",
                        // message: '5     tomatoes === "番茄"?resolve(tomotoes):reject(tomatoes)'
                    // }, {
                        // type: "success",
                        // label: "Compiled",
                        // message: '6   }).then(()=>"My tomatoes,I\'m coming!")'
                    // }, {
                        // type: "error",
                        // label: "SyntaxError",
                        // message: '7   .catch(()=>"What the f*ck!");'
                    // }
                // ]
            // },
            skill: {
                description: "Return a list of my skills and my rating of them.",
                messages: [{
                        type: "success",
                        label: "A",
                        message: "· Java 90/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· Spring 85/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· SpringBoot 85/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· MyBatis-Plus 85/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· MySQL 80/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Redis 80/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Tomcat 80/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Mybatis 75/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· kotlin 75/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Dubbo 75/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· FastDFS 75/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· GRPC 70/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Git 70/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· SpringCloud 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· SpringData 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· SpringSecurity 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Xxl-Job 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· ActiveMQ 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Nginx 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· Quartz 60/100"
                    }, {
                        type: "warning",
                        label: "B",
                        message: "· HTML 60/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· Linux 50/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· RabbitMQ 50/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· Kafka 50/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· Python 40/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· CSS 30/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· JavaScript 30/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· Shell 30/100"
                    }, {
                        type: "error",
                        label: "C",
                        message: "· MongoDB 30/100"
                    }
                ]
            },
            book: {
                description: "Return a list of books that I have read.",
                messages: [{
                        message: " 《 Java核心技术 卷I 》--- Cay S. Horstmann "
                    }, {
                        message: " 《 数据结构和Java集合框架 》--- William J. Collins "
                    }
                ]
            }
        },
        b = {
            name: "app",
            data: function () {
                return {
                    taskList: y,
                    commandList: f
                }
            },
            components: {
                VueTerminal: d
            }
        },
        C = b,
        v = (s("5c0b"), Object(u["a"])(C, a, i, !1, null, null, null)),
        w = v.exports;
        n["a"].config.productionTip = !1,
        new n["a"]({
            render: function (e) {
                return e(w)
            }
        }).$mount("#app");
        var L = document.querySelectorAll(".fade");
        window.addEventListener("load", (function () {
                L.forEach((function (e) {
                        return e.classList.add("in")
                    }))
            })),
        window.addEventListener("beforeunload", (function () {
                L.forEach((function (e) {
                        return e.classList.remove("in")
                    }))
            }))
    },
    "5c0b": function (e, t, s) {
        "use strict";
        var n = s("e332"),
        a = s.n(n);
        a.a
    },
    "8ef2": function (e, t, s) {
        "use strict";
        var n = s("3487"),
        a = s.n(n);
        a.a
    },
    e332: function (e, t, s) {}
});
//# sourceMappingURL=app.caee4012.js.map
