(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    "033e": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "edit-profile-form"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._v("\n\t\tAccount security\n\t")]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [s("su-form", {
                ref: "passwordForm",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.submitPasswordForm.apply(null, arguments)
                    }
                }
            }, [s("div", {
                staticClass: "form-header"
            }, [s("h2", [t._v("Change password")])]), t._v(" "), s("su-input", {
                attrs: {
                    autofocus: !0,
                    type: "password",
                    autocomplete: "off",
                    minlength: 6,
                    maxlength: 100,
                    placeholder: "Current password",
                    label: "Current password",
                    rules: t.rules.currentPassword,
                    "password-reveal": ""
                },
                model: {
                    value: t.form.currentPassword,
                    callback: function(e) {
                        t.$set(t.form, "currentPassword", e)
                    },
                    expression: "form.currentPassword"
                }
            }), t._v(" "), s("su-input", {
                key: "password",
                attrs: {
                    type: "password",
                    autocomplete: "off",
                    minlength: 8,
                    maxlength: 100,
                    placeholder: "New password",
                    rules: t.rules.password,
                    "password-reveal": ""
                },
                model: {
                    value: t.form.password,
                    callback: function(e) {
                        t.$set(t.form, "password", e)
                    },
                    expression: "form.password"
                }
            }), t._v(" "), s("su-input", {
                key: "password2",
                attrs: {
                    type: "password",
                    autocomplete: "off",
                    minlength: 8,
                    maxlength: 100,
                    placeholder: "Confirm new password",
                    rules: t.rules.password,
                    "password-reveal": ""
                },
                model: {
                    value: t.form.password2,
                    callback: function(e) {
                        t.$set(t.form, "password2", e)
                    },
                    expression: "form.password2"
                }
            }), t._v(" "), s("p", {
                staticClass: "actions"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    type: "submit",
                    processing: t.isPasswordChangeInProgress
                }
            }, [s("span", [t._v("Submit")])]), t._v(" "), s("su-button", {
                staticClass: "button button-outline cancel",
                nativeOn: {
                    click: function(e) {
                        return t.gotoProfile.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Cancel")])])], 1)], 1)], 1), t._v(" "), s("div", {
                staticClass: "one columns"
            }, [t._v(" ")]), t._v(" "), s("div", {
                staticClass: "five columns"
            }, [s("h3", [t._v("Password tips")]), t._v(" "), s("ul", [s("li", [t._v("Choose long passwords.")]), t._v(" "), s("li", [t._v("Meaningless phrases made up of multiple words make for secure passwords.\n\t\t\t\tThese are memorable and cannot be guessed easily.\n\t\t\t\tFor example: "), s("span", {
                staticClass: "text-light"
            }, [t._v(t._s(t.examplePassword))]), t._v(".\n\t\t\t\t")])])])]), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "totp-section"
            }, [s("h2", [t._v("External 2FA TOTP\n\t\t\t"), "totp" === t.twoFAType ? s("span", {
                staticClass: "text-green"
            }, [t._v("("), s("span", {
                staticClass: "icon icon-check"
            }), t._v("enabled )")]) : t._e()]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "three columns"
            }, [t.totp.showForm ? t._e() : s("div", {
                staticClass: "text-center"
            }, [s("img", {
                staticClass: "splash",
                attrs: {
                    src: t.getStatic(t.appendThemeName("images/illustrations/totp.svg"))
                }
            })]), t._v(" "), t.totp.showForm ? s("div", {
                staticClass: "totp-generated text-center"
            }, [s("img", {
                staticClass: "qr",
                attrs: {
                    src: t.totp.image
                }
            }), t._v(" "), t.totp.key ? s("div", {
                staticClass: "totp-key-section"
            }, [s("div", [s("a", {
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.copyTOTPKey.apply(null, arguments)
                    }
                }
            }, [t._v("Can't scan? Copy the key.")])]), t._v(" "), s("div", [s("input", {
                staticClass: "totp-key",
                attrs: {
                    id: "totp-key-input",
                    type: "hidden"
                },
                domProps: {
                    value: t.totp.key
                }
            })])]) : t._e()]) : t._e()]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [t.totp.showForm || "totp" == t.twoFAType ? t._e() : s("div", {
                staticClass: "intro"
            }, [t._m(0), t._v(" "), s("p", {
                staticClass: "enable-totp-action"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.isTOTPinProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.toggleTOTPForm.apply(null, arguments)
                    }
                }
            }, [t._v("Enable external TOTP")])], 1), t._v(" "), s("p", {
                staticClass: "text-light"
            }, [t._v("An OTP will be sent to your email for verification first.")])]), t._v(" "), t.totp.showForm ? s("su-form", {
                ref: "totpForm",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.submitTOTPForm.apply(null, arguments)
                    }
                }
            }, [s("h3", [t._v("Scan the QR code on your authenticator app")]), t._v(" "), s("p", [t._v("Once scanned, the app should give you a 6 digit TOTP. Enter it here.\n\t\t\t\t\t\t"), s("a", {
                attrs: {
                    href: "https://support.zerodha.com/category/your-zerodha-account/login-credentials/login-credentials-of-trading-platforms/articles/time-based-otp-setup",
                    target: "_blank"
                }
            }, [t._v("Need help?")])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("p", {
                staticClass: "six columns"
            }, [s("su-input", {
                key: "totp",
                staticClass: "totp-value",
                attrs: {
                    autofocus: !0,
                    type: "text",
                    autocomplete: "off",
                    static: "",
                    minlength: 6,
                    maxlength: 6,
                    placeholder: "6 digit TOTP",
                    rules: t.rules.totp
                },
                model: {
                    value: t.totpForm.totp,
                    callback: function(e) {
                        t.$set(t.totpForm, "totp", e)
                    },
                    expression: "totpForm.totp"
                }
            })], 1), t._v(" "), s("p", {
                staticClass: "six columns"
            }, [s("su-input", {
                attrs: {
                    type: "password",
                    autocomplete: "off",
                    minlength: 6,
                    maxlength: 100,
                    placeholder: "Current password",
                    label: "Enter your password to confirm",
                    rules: t.rules.currentPassword,
                    "password-reveal": ""
                },
                model: {
                    value: t.totpForm.currentPassword,
                    callback: function(e) {
                        t.$set(t.totpForm, "currentPassword", e)
                    },
                    expression: "totpForm.currentPassword"
                }
            })], 1)]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("p", {
                staticClass: "text-xsmall text-light"
            }, [t._v("IMPORTANT: Once external TOTP is setup, you have to use the same mobile authenticator app to generate\n\t\t\t\t\t\t\ta new 6-digit TOTP every time you login.\n\t\t\t\t\t\t")]), t._v(" "), s("p", {
                staticClass: "actions"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    type: "submit",
                    processing: t.isTOTPinProgress
                }
            }, [t._v("Enable")]), t._v(" "), s("su-button", {
                staticClass: "button button-outline cancel",
                nativeOn: {
                    click: function(e) {
                        return t.toggleTOTPForm.apply(null, arguments)
                    }
                }
            }, [t._v("Cancel")])], 1)])]) : t._e(), t._v(" "), "totp" == t.twoFAType ? s("div", [s("h3", [t._v("External TOTP is enabled on your account")]), t._v(" "), s("p", [t._v("Every time you login, you will be prompted to enter a 6 digit TOTP that your\n\t\t\t\t\t\texternal mobile authenticator app generates.\n\t\t\t\t\t")]), t._v(" "), s("p", [t._v("\n\t\t\t\t\t\tEven if external TOTP is disabled, you can login to Kite web with Kite mobile App Code.\n\t\t\t\t\t")]), t._v(" "), s("p", [s("a", {
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleTOTPDisableForm.apply(null, arguments)
                    }
                }
            }, [t._v("Disable external TOTP")])]), t._v(" "), t.totp.showDisableForm ? s("su-form", {
                ref: "totpForm",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.submitDisableTOTPForm.apply(null, arguments)
                    }
                }
            }, [s("div", {
                staticClass: "row"
            }, [s("p", {
                staticClass: "eight columns"
            }, [s("su-input", {
                ref: "disableTOTPPassword",
                attrs: {
                    type: "password",
                    autocomplete: "off",
                    minlength: 6,
                    maxlength: 100,
                    placeholder: "Current password",
                    label: "Enter your password to confirm",
                    rules: t.rules.currentPassword,
                    "password-reveal": ""
                },
                model: {
                    value: t.totpForm.currentPassword,
                    callback: function(e) {
                        t.$set(t.totpForm, "currentPassword", e)
                    },
                    expression: "totpForm.currentPassword"
                }
            })], 1), t._v(" "), s("p", {
                staticClass: "four columns"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    type: "submit",
                    processing: t.isTOTPinProgress
                }
            }, [t._v("Disable")])], 1)])]) : t._e()], 1) : t._e()], 1)])]), t._v(" "), t.showSuccessPopup ? s("modal", {
                staticClass: "change-password-success-modal"
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Done")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t._v("\n\t\t\t" + t._s(t.successPopupMessage) + " You will need to re-login to all your Kite sessions across all devices.\n\t\t")]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.gotoLogout()
                    }
                }
            }, [s("span", [t._v("Ok")])])], 1)]) : t._e()], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("p", [t._v("\n\t\t\t\t\t\tUse external TOTP apps like Google® Authenticator, Microsoft® Authenticator, or Authy on your phone or desktop to\n\t\t\t\t\t\tgenerate random 6 digit TOTPs for every login. "), s("a", {
                attrs: {
                    href: "https://support.zerodha.com/category/your-zerodha-account/login-credentials/login-credentials-of-trading-platforms/articles/time-based-otp-setup",
                    target: "_blank"
                }
            }, [t._v("Learn more")]), t._v(".\n\t\t\t\t\t\tEven if external TOTP is enabled, login with Kite mobile App Code will still be available.\n\t\t\t\t\t")])
        }
        ]
          , n = s("2f62")
          , r = s("598f")
          , o = s("d1de")
          , l = s("9c9e")
          , c = s("025e");
        const u = o["b"];
        var d = {
            mixins: [l["a"]],
            data: function() {
                let t = (t,e)=>"password" !== this.form.type || (this.form.password !== this.form.password2 ? new Error("Passwords do not match.") : e === this.examplePassword ? new Error("Please don't use the example! Come up with your own passphrase.") : void 0)
                  , e = (t,e)=>{
                    if (!e.match(/[0-9]{6}/))
                        return new Error("TOTP must be a 6 digit number.")
                }
                ;
                return {
                    form: {
                        type: "password",
                        currentPassword: "",
                        password: "",
                        password2: ""
                    },
                    totpForm: {
                        currentPassword: "",
                        totp: ""
                    },
                    totp: {
                        showForm: !1,
                        showDisableForm: !1,
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
                        key: ""
                    },
                    examplePassword: "icy mangoes fly kites high",
                    isPasswordChangeInProgress: !1,
                    isTOTPinProgress: !1,
                    isCopyTOTPKey: !1,
                    rules: {
                        currentPassword: [{
                            required: !0,
                            label: "Existing password"
                        }],
                        password: [{
                            validator: t,
                            required: !0,
                            label: "Password"
                        }],
                        totp: [{
                            validator: e,
                            required: !0,
                            label: "TOTP"
                        }]
                    },
                    showSuccessPopup: !1,
                    successPopupMessage: ""
                }
            },
            mounted() {
                this.$nextTick(()=>{
                    this.focusFirstField()
                }
                );
                let t = document.createElement("script");
                t.setAttribute("id", "otpgateway-script"),
                t.setAttribute("src", "https://otp.zerodha.com/static/otp.js"),
                document.head.appendChild(t)
            },
            beforeDestroy() {
                let t = document.querySelector("#otpgateway-script");
                t && t.remove()
            },
            computed: {
                ...Object(n["d"])(u, ["twoFAType"])
            },
            methods: {
                ...Object(n["e"])(u, ["setTwoFAType"]),
                focusFirstField() {
                    this.$el.getElementsByTagName("input")[0].focus()
                },
                resetForm() {
                    this.form.currentPassword = "",
                    this.form.password = "",
                    this.form.password2 = "",
                    this.totpForm.currentPassword = "",
                    this.totpForm.totp = ""
                },
                submitPasswordForm() {
                    if (!this.$refs["passwordForm"].validate())
                        return;
                    this.isPasswordChangeInProgress = !0;
                    const t = {
                        current_password: this.form.currentPassword,
                        new_password: this.form.password
                    };
                    r["a"].changePassword(t).then(t=>{
                        this.resetForm(),
                        this.isPasswordChangeInProgress = !1;
                        let e = "Password changed successfully.";
                        this.$toast.success({
                            title: "Done",
                            message: e,
                            orientation: this.$toast.TOP_RIGHT
                        }),
                        this.successPopupMessage = e,
                        this.showSuccessPopup = !0
                    }
                    ).catch(t=>{
                        t && t.response && 428 === t.response.status ? this.doOTP(()=>{
                            this.submitPasswordForm()
                        }
                        , t=>{
                            let e = "Error authorising OTP. Please try again.";
                            t && (e = Object(c["j"])(t).message),
                            this.resetForm(),
                            this.focusFirstField(),
                            this.isPasswordChangeInProgress = !1,
                            this.$toast.error({
                                title: "Error",
                                message: e,
                                orientation: this.$toast.TOP_RIGHT
                            })
                        }
                        ) : (this.resetForm(),
                        this.focusFirstField(),
                        this.isPasswordChangeInProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }))
                    }
                    )
                },
                submitTOTPForm() {
                    if (!this.$refs["totpForm"].validate())
                        return;
                    this.isTOTPinProgress = !0;
                    let t = {
                        current_password: this.totpForm.currentPassword,
                        twofa_type: "totp",
                        twofa_value: this.totpForm.totp
                    };
                    r["a"].changeTwoFA(t).then(t=>{
                        this.setTwoFAType("totp"),
                        this.toggleTOTPForm(),
                        this.resetForm(),
                        this.isTOTPinProgress = !1,
                        this.$toast.success({
                            title: "TOTP enabled",
                            message: "External TOTP is now enabled on your account",
                            orientation: this.$toast.BOTTOM_RIGHT
                        }),
                        this.successPopupMessage = "External TOTP is now enabled on your account",
                        this.showSuccessPopup = !0
                    }
                    ).catch(t=>{
                        this.resetForm(),
                        this.$refs["totpForm"].$el.getElementsByTagName("input")[0].focus(),
                        this.isTOTPinProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message + ' <a target="_blank" href=" https://support.zerodha.com/category/your-zerodha-account/login-credentials/login-credentials-of-trading-platforms/articles/getting-an-invalid-totp-error">Learn more</a>.',
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                },
                gotoProfile() {
                    this.$router.push({
                        name: "profile"
                    })
                },
                toggleTOTPForm() {
                    this.totp.showForm ? this.totp.showForm = !1 : this.getTOTP()
                },
                toggleTOTPDisableForm() {
                    this.totp.showDisableForm = !this.totp.showDisableForm,
                    this.totp.showDisableForm && this.$nextTick(()=>{
                        this.$refs.disableTOTPPassword.focus()
                    }
                    )
                },
                getTOTP() {
                    this.isTOTPinProgress = !0,
                    r["a"].getTOTP({}).then(t=>{
                        this.totp.image = t.data.data.image,
                        this.totp.key = t.data.data.key,
                        this.isTOTPinProgress = !1,
                        this.totp.showForm = !0
                    }
                    ).catch(t=>{
                        t && t.response && 428 === t.response.status ? this.doOTP(()=>{
                            this.getTOTP()
                        }
                        , t=>{
                            this.isTOTPinProgress = !1;
                            let e = "Error authorising OTP. Please try again.";
                            t && (e = Object(c["j"])(t).message),
                            this.$toast.error({
                                title: "Error",
                                message: e,
                                orientation: this.$toast.TOP_RIGHT
                            })
                        }
                        ) : (this.isTOTPinProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }))
                    }
                    )
                },
                submitDisableTOTPForm() {
                    let t = {
                        current_password: this.totpForm.currentPassword,
                        twofa_type: "sms",
                        twofa_value: "000000"
                    };
                    this.isTOTPinProgress = !0,
                    r["a"].changeTwoFA(t).then(()=>{
                        this.totp.showForm = !1,
                        this.totp.showDisableForm = !1,
                        this.totpForm.totp = "",
                        this.totpForm.currentPassword = "",
                        this.successPopupMessage = "External TOTP is disabled.",
                        this.showSuccessPopup = !0
                    }
                    ).catch(t=>{
                        t && t.response && 428 === t.response.status ? this.doOTP(()=>{
                            this.submitDisableTOTPForm()
                        }
                        , t=>{
                            this.isTOTPinProgress = !1;
                            let e = "Error authorising OTP. Please try again.";
                            t && (e = Object(c["j"])(t).message),
                            this.$toast.error({
                                title: "Error",
                                message: e,
                                orientation: this.$toast.TOP_RIGHT
                            })
                        }
                        ) : (this.isTOTPinProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }))
                    }
                    )
                },
                gotoLogout() {
                    window.location = "/logout"
                },
                doOTP(t, e) {
                    r["a"].initiateOTP().then(s=>{
                        window.OTPGateway("Kite", s.data.data.request_id, (s,i)=>{
                            this.validateOTP(i, t, e)
                        }
                        , ()=>{
                            e()
                        }
                        )
                    }
                    ).catch(t=>{
                        e(t)
                    }
                    )
                },
                validateOTP(t, e, s) {
                    r["a"].validateOTP(t).then(s=>{
                        e(t)
                    }
                    ).catch(t=>{
                        s(t)
                    }
                    )
                },
                copyTOTPKey() {
                    this.isCopyTOTPKey = !0,
                    this.$nextTick(()=>{
                        var t = document.getElementById("totp-key-input");
                        t.setAttribute("type", "text"),
                        t.select(),
                        t.setSelectionRange(0, 99999);
                        let e = !1;
                        try {
                            e = document.execCommand("copy")
                        } catch (s) {
                            console.log("error copying to clipboard")
                        }
                        e ? this.$toast.success({
                            title: "Copied",
                            message: "Copied TOTP key to clipboard",
                            orientation: this.$toast.TOP_RIGHT
                        }) : this.$toast.error({
                            title: "Couldn't copy",
                            message: "Couldn't copy TOTP key to clipboard. Try copying manually.",
                            orientation: this.$toast.TOP_RIGHT
                        })
                    }
                    )
                }
            }
        }
          , h = d
          , p = s("0c7c")
          , m = Object(p["a"])(h, i, a, !1, null, null, null);
        e["default"] = m.exports
    },
    "04d3": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "sip"
            }, [t.constraints.hasErrorState ? s("error-state", {
                attrs: {
                    title: "SIPs couldn't be loaded.",
                    error: t.fetchError
                }
            }) : t._e(), t._v(" "), t.constraints.isEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/sip.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You haven't created any SIPs.")]), t._v(" "), s("button", {
                staticClass: "button button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onNewForm.apply(null, arguments)
                    }
                }
            }, [t._v("Create new SIP")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.constraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.constraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.fetchError && t.fetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.constraints.isEmpty || t.constraints.hasErrorState ? t._e() : s("section", {
                staticClass: "table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(0), t._v(" "), t.constraints.hasData ? s("span", [t._v("(" + t._s(t.sip.length) + ")")]) : t._e(), t._v(" "), t.constraints.hasErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.fetchError && t.fetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.constraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.sip ? s("su-table", {
                staticClass: "sip-table fold-header",
                attrs: {
                    data: t.sip,
                    headers: t.tableHeaders,
                    uid: "id",
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return !t.isMobile && t.onShowContextMenu(e.row, "id")
                    },
                    rowLeave: function(e) {
                        return !t.isMobile && t.onHideContextMenu(e.row)
                    },
                    rowClick: function(e) {
                        return t.onShowContextMenu(e.row, "id")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-name"
                        }, [s("a", {
                            staticClass: "name",
                            attrs: {
                                href: ""
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [t._v(t._s(e.row.name))]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.isMobile || t.contextMenu !== e.row.id ? t._e() : s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", ["active" === e.row.status ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateSIPStatus(e.row.id, "paused"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-pause"
                        }), t._v(" Pause")]) : s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateSIPStatus(e.row.id, "active"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-play"
                        }), t._v(" Resume")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onDelete(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2)], 1), t._v(" "), t.isMobile && t.contextMenu === e.row.id ? s("mobile-context-menu", {
                            on: {
                                close: function(s) {
                                    return t.onHideContextMenu(e.row)
                                }
                            }
                        }, [s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", ["active" === e.row.status ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateSIPStatus(e.row.id, "paused"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-pause"
                        }), t._v(" Pause")]) : s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateSIPStatus(e.row.id, "active"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-play"
                        }), t._v(" Resume")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onDelete(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2) : t._e()], 1), t._v(" "), s("td", {
                            staticClass: "col-status"
                        }, [s("span", {
                            staticClass: "text-label",
                            class: {
                                green: "active" === e.row.status,
                                orange: "active" !== e.row.status
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.status) + "\n\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "col-schedule"
                        }, t._l(e.row.schedules, (function(e) {
                            return s("div", {
                                key: e.id,
                                staticClass: "shed"
                            }, [s("span", {
                                staticClass: "text-label blue"
                            }, [s("span", {
                                staticClass: "day"
                            }, [t._v(t._s(t.prefixDay(e.day)))]), t._v(" "), s("span", {
                                staticClass: "time"
                            }, [t._v(t._s(t.timeLabel(e.time)))])]), t._v(" "), s("span", {
                                staticClass: "text-xxsmall text-light"
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.remainingDays ? "in " + e.remainingDays + " " + t.datePlural(e.remainingDays, "day") : "today") + "\n\t\t\t\t\t\t")])])
                        }
                        )), 0), t._v(" "), s("td", {
                            staticClass: "col-items"
                        }, [s("ul", t._l(e.row.items, (function(e, i) {
                            return s("li", {
                                key: i,
                                staticClass: "text-xxsmall text-light"
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.name) + "\n\t\t\t\t\t\t")])
                        }
                        )), 0), t._v(" "), 0 === e.row.items.length ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "text-small error-fetch",
                            attrs: {
                                title: "There are no baskets linked"
                            }
                        }, [s("span", {
                            staticClass: "icon icon-alert-triangle"
                        })]) : t._e()]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t" + t._s(e.row.created_at.slice(0, 10)) + "\n\t\t\t\t\t"), t.elapsedMonths(e.row.created_at) ? s("div", {
                            staticClass: "elapsed text-xxsmall",
                            attrs: {
                                set: t.m = t.elapsedMonths(e.row.created_at)
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(t.m) + " " + t._s(t.datePlural(t.m, "month")) + "\n\t\t\t\t\t")]) : t._e()])]
                    }
                }], null, !1, 1463257388)
            }, [s("span", {
                attrs: {
                    slot: "toolbar-before-search"
                },
                slot: "toolbar-before-search"
            }, [s("button", {
                staticClass: "create-new button button-small button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onNewForm.apply(null, arguments)
                    }
                }
            }, [t._v("New SIP")])])]) : t._e()], 1), t._v(" "), t.isFormOpen ? s("su-modal", {
                staticClass: "sip-create-modal",
                attrs: {
                    open: t.isFormOpen,
                    buttons: !0,
                    "ok-label": t.baskets.length > 0 ? t.constraints.isEdit ? "Save" : "Create" : null,
                    "click-out": !1
                },
                on: {
                    "update:open": function(e) {
                        t.isFormOpen = e
                    },
                    ok: t.onSubmitForm
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "float-right text-xsmall",
                attrs: {
                    href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/kite-sip-order",
                    target: "_blank",
                    title: "Help"
                }
            }, [s("span", {
                staticClass: "icon icon-info"
            }), t._v(" Help\n\t\t\t")]), t._v(" "), s("h2", [t._v(t._s(t.constraints.isEdit ? "Edit SIP" : "New SIP"))])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("su-form", {
                ref: "form",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.onSubmitForm.apply(null, arguments)
                    }
                }
            }, [s("p", [s("su-input", {
                attrs: {
                    autofocus: "",
                    label: "Name",
                    placeholder: "SIP name",
                    maxlength: 100,
                    required: !0,
                    autocomplete: "off"
                },
                model: {
                    value: t.form.name,
                    callback: function(e) {
                        t.$set(t.form, "name", e)
                    },
                    expression: "form.name"
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "baskets"
            }, [s("h3", [t._v("Baskets\n\t\t\t\t\t\t"), t.isBasketsLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), !t.isBasketsLoading && t.baskets.length > 0 ? s("span", [t._v("\n\t\t\t\t\t\t\t(" + t._s(Math.min(t.form.items.length, t.maxSIPItems)) + " / " + t._s(t.maxSIPItems) + ")\n\t\t\t\t\t\t")]) : t._e(), t._v(" "), s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "float-right text-small",
                attrs: {
                    href: "#",
                    title: "New basket"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.openCreateBasket.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-plus"
            }), t._v(" New basket\n\t\t\t\t\t\t")])], 1), t._v(" "), t.baskets.length > 0 ? [s("div", {
                staticClass: "items"
            }, t._l(t.baskets, (function(e) {
                return s("su-checkbox", {
                    key: e.id,
                    attrs: {
                        checked: t.form.items.indexOf(e.id) > -1,
                        label: e.name
                    },
                    on: {
                        input: function(s) {
                            t.onSelectItem(e.id, s)
                        }
                    }
                })
            }
            )), 1), t._v(" "), s("p", {
                staticClass: "text-xsmall text-light"
            }, [t._v("\n\t\t\t\t\t\t\tOnly equity MARKET and LIMIT orders in the selected baskets will be placed.\n\t\t\t\t\t\t\tLIMIT orders are not guaranteed to be executed and AMO, BO, CO varities are not allowed.\n\t\t\t\t\t\t\t"), s("a", {
                attrs: {
                    href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/kite-sip-order",
                    target: "_blank",
                    title: "Learn more"
                }
            }, [t._v("Learn more.")])])] : t.isBasketsLoading ? t._e() : s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/basket.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("h2", [t._v("No baskets")]), s("br"), t._v(" "), s("p", [t._v("\n\t\t\t\t\t\t\t\tCreate one or more baskets with the stocks you wish to schedule SIP transactions\n\t\t\t\t\t\t\t\tfor before creating a SIP.\n\t\t\t\t\t\t\t")]), t._v(" "), s("p", [s("a", {
                staticClass: "button button-blue",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.openCreateBasket.apply(null, arguments)
                    }
                }
            }, [t._v("Create basket")])])])])], 2), t._v(" "), t.baskets.length > 0 ? s("div", {
                staticClass: "schedules"
            }, [t.form.schedules.length < t.maxSchedules ? s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "float-right",
                attrs: {
                    href: "",
                    title: "Add schedule"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onAddSchedule.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-plus"
            }), t._v(" Add\n\t\t\t\t\t")]) : t._e(), t._v(" "), s("h3", [t._v("Monthly schedule (" + t._s(t.form.schedules.length) + " / " + t._s(t.maxSchedules) + ")")]), t._v(" "), t._l(t.form.schedules, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "five columns"
                }, [s("label", {
                    staticClass: "text-light"
                }, [t._v("Date")]), t._v(" "), s("su-select", {
                    attrs: {
                        value: e.day,
                        name: "day"
                    },
                    model: {
                        value: t.form.schedules[i].day,
                        callback: function(e) {
                            t.$set(t.form.schedules[i], "day", e)
                        },
                        expression: "form.schedules[n].day"
                    }
                }, t._l(31, (function(e) {
                    return s("option", {
                        key: e,
                        attrs: {
                            disabled: t.isDateAvailable(e)
                        },
                        domProps: {
                            value: e
                        }
                    }, [t._v(t._s(t.prefixDay(e)))])
                }
                )), 0)], 1), t._v(" "), s("div", {
                    staticClass: "six columns"
                }, [s("label", {
                    staticClass: "text-light"
                }, [t._v("Time")]), t._v(" "), s("su-select", {
                    attrs: {
                        value: e.time,
                        name: "time"
                    },
                    model: {
                        value: t.form.schedules[i].time,
                        callback: function(e) {
                            t.$set(t.form.schedules[i], "time", e)
                        },
                        expression: "form.schedules[n].time"
                    }
                }, t._l(t.timeLabels, (function(e, i) {
                    return s("option", {
                        key: i,
                        domProps: {
                            value: i
                        }
                    }, [t._v(t._s(e))])
                }
                )), 0)], 1), t._v(" "), s("div", {
                    staticClass: "one columns text-right"
                }, [s("label", [t._v(" ")]), t._v(" "), t.form.schedules.length > 1 ? s("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "btn-delete",
                    attrs: {
                        href: "",
                        title: "Remove schedule"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(),
                            t.onRemoveSchedule(i)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trash"
                })]) : t._e()])])
            }
            )), t._v(" "), s("p", {
                staticClass: "text-xsmall text-light"
            }, [t._v("\n\t\t\t\t\t\tSIPs on weekends and holidays will be placed on the next trading day."), s("br"), t._v("\n\t\t\t\t\t\tSetup a "), s("a", {
                attrs: {
                    href: "https://console.zerodha.com/funds/mandates",
                    target: "_blank"
                }
            }, [t._v("bank mandate")]), t._v("\n\t\t\t\t\t\tto automatically add necessary funds.\n\t\t\t\t\t")])], 2) : t._e(), t._v(" "), t.formError ? s("p", {
                staticClass: "error text-red"
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            }), t._v(" " + t._s(t.formError) + "\n\t\t\t\t")]) : t._e()])], 1)]) : t._e()], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("SIP")])])
        }
        ]
          , n = s("2f62")
          , r = s("5fb0")
          , o = s("5a9e")
          , l = s("9c9e")
          , c = s("025e")
          , u = s("ba6a")
          , d = s("5665");
        function h(t) {
            return t ? u["a"].get(Object(d["a"])("sip.one", {
                sipID: t
            })) : u["a"].get(Object(d["a"])("sip.all"))
        }
        function p(t) {
            return u["a"].post(Object(d["a"])("sip.create", {}), t)
        }
        function m(t, e) {
            return u["a"].put(Object(d["a"])("sip.update", {
                sipID: t
            }), e)
        }
        function v(t, e) {
            return u["a"].put(Object(d["a"])("sip.update_status", {
                sipID: t
            }), {
                status: e
            })
        }
        function _(t) {
            return u["a"].delete(Object(d["a"])("sip.delete", {
                sipID: t
            }))
        }
        var g = {
            getSIPs: h,
            createSIP: p,
            updateSIP: m,
            updateSIPStatus: v,
            deleteSIP: _
        }
          , f = s("53a8")
          , b = s("9946");
        const C = Object.freeze([{
            label: "Name",
            field: "name",
            sort: !0,
            search: !0
        }, {
            label: "Status",
            field: "status",
            sort: !0,
            search: !0
        }, {
            label: "Monthly schedule",
            field: "name",
            sort: !1,
            search: !1
        }, {
            label: "Baskets",
            field: "name",
            sort: !1,
            search: !1
        }, {
            label: "Created on",
            field: "created_at",
            sort: !0,
            search: !0
        }])
          , y = Object.freeze(["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"]);
        var w = {
            mixins: [l["a"]],
            components: {
                "custom-router-link": b["a"]
            },
            data() {
                return {
                    sip: null,
                    baskets: [],
                    form: {
                        id: null,
                        name: "",
                        items: [],
                        schedules: []
                    },
                    fetchStatus: r["d"].API_STATUSES.initial,
                    actionStatus: r["d"].API_STATUSES.initial,
                    fetchError: null,
                    isModalOpen: !0,
                    isFormOpen: !1,
                    isBasketsLoading: !1,
                    formError: null,
                    contextMenu: null,
                    maxSchedules: 5,
                    maxSIPItems: 3,
                    timeLabels: y
                }
            },
            methods: {
                onShowContextMenu(t, e) {
                    e = e || "uid",
                    this.contextMenu = t[e]
                },
                onHideContextMenu() {
                    this.contextMenu = null
                },
                onNewForm() {
                    this.getBaskets(!1),
                    this.resetForm(),
                    this.form.schedules = [{
                        day: 1,
                        time: 0
                    }],
                    this.toggleForm()
                },
                onEditForm(t) {
                    this.getBaskets(!1),
                    this.resetForm(),
                    this.form.id = t.id,
                    this.form.name = t.name,
                    this.form.items = t.items.reduce((t,e)=>[...t, e.id], []);
                    const e = [];
                    for (let s = 0; s < t.schedules.length; s++)
                        e.push({
                            day: t.schedules[s].day,
                            time: t.schedules[s].time
                        });
                    this.form.schedules = e,
                    this.toggleForm()
                },
                onDelete(t) {
                    this.$confirm({
                        description: `Delete '${t.name}'?`,
                        onOk: (e,s)=>{
                            this.deleteSIP(t.id, e)
                        }
                    })
                },
                onAddSchedule() {
                    const t = this.form.schedules.slice(-1);
                    let e = 1;
                    t.length > 0 && (e = t[0].day);
                    for (let s = e; s <= 31; s++)
                        if (!(this.form.schedules.filter(t=>t.day === s).length > 0)) {
                            e = s;
                            break
                        }
                    this.form.schedules.push({
                        day: e,
                        time: 0
                    })
                },
                onRemoveSchedule(t) {
                    this.form.schedules.splice(t, 1)
                },
                onSelectItem(t, e) {
                    e ? this.form.items.push(t) : this.form.items = this.form.items.filter(e=>e !== t)
                },
                onSubmitForm(t, e) {
                    this.constraints.isEdit ? this.updateSIP(t, e) : this.createSIP(t, e)
                },
                toggleForm() {
                    this.isFormOpen = !this.isFormOpen
                },
                resetForm() {
                    this.form.id = null,
                    this.form.name = "",
                    this.form.items = [],
                    this.form.schedules = [],
                    this.formError = ""
                },
                prefixDay(t) {
                    return t + (31 === t || 21 === t || 1 === t ? "st" : 22 === t || 2 === t ? "nd" : 23 === t || 3 === t ? "rd" : "th")
                },
                timeLabel(t) {
                    return y.hasOwnProperty(t) ? y[t] : "00:00"
                },
                prepareSchedules(t) {
                    const e = t.slice();
                    let s = [];
                    for (let i = 0; i < e.length; i++) {
                        const t = e[i].split(":")
                          , a = parseInt(t[0]);
                        s.push({
                            day: a,
                            time: parseInt(t[1]),
                            remainingDays: this.remainingDays(a)
                        })
                    }
                    return s = s.sort((t,e)=>t.remainingDays > e.remainingDays ? 1 : t.remainingDays < e.remainingDays ? -1 : 0),
                    s
                },
                datePlural(t, e) {
                    return 1 === t ? e : e + "s"
                },
                isDateAvailable(t) {
                    return this.form.schedules.filter(e=>e.day === t).length > 0
                },
                elapsedMonths(t) {
                    const e = new Date
                      , s = new Date(t);
                    let i = 12 * (e.getFullYear() - s.getFullYear());
                    return i = i - s.getMonth() + e.getMonth(),
                    i <= 0 ? 0 : i
                },
                remainingDays(t) {
                    const e = new Date;
                    e.setDate(t);
                    const s = new Date;
                    return e - s < 0 && e.setMonth(e.getMonth() + 1),
                    Math.round((e - s) / 864e5)
                },
                getSIPs() {
                    this.fetchStatus = r["d"].API_STATUSES.fetching,
                    g.getSIPs().then(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.success;
                        let e = t.data.data;
                        for (let s = 0; s < e.length; s++)
                            e[s].schedules = this.prepareSchedules(e[s].schedules);
                        this.sip = e
                    }
                    ).catch(t=>{
                        this.fetchError = Object(c["j"])(t),
                        this.fetchStatus = r["d"].API_STATUSES.error
                    }
                    )
                },
                createSIP(t, e) {
                    const s = {
                        name: this.form.name,
                        schedules: this.form.schedules.reduce((t,e)=>[...t, `${e.day}:${e.time}`], []),
                        item_id: this.form.items
                    };
                    g.createSIP(s).then(e=>{
                        t(),
                        this.getSIPs()
                    }
                    ).catch(t=>{
                        e(),
                        this.formError = Object(c["j"])(t).message
                    }
                    )
                },
                updateSIP(t, e) {
                    const s = {
                        name: this.form.name,
                        schedules: this.form.schedules.reduce((t,e)=>[...t, `${e.day}:${e.time}`], []),
                        item_id: this.form.items
                    };
                    g.updateSIP(this.form.id, s).then(e=>{
                        t(),
                        this.getSIPs()
                    }
                    ).catch(t=>{
                        e(),
                        this.formError = Object(c["j"])(t).message
                    }
                    )
                },
                updateSIPStatus(t, e) {
                    this.fetchStatus = r["d"].API_STATUSES.fetching,
                    g.updateSIPStatus(t, e).then(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.success,
                        this.getSIPs()
                    }
                    ).catch(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.error,
                        this.formError = Object(c["j"])(t).message
                    }
                    )
                },
                deleteSIP(t, e) {
                    g.deleteSIP(t).then(t=>{
                        e(),
                        this.getSIPs()
                    }
                    ).catch(t=>{
                        e(),
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                },
                getBaskets(t) {
                    t && this.baskets || (this.isBasketsLoading = !0,
                    f["a"].getBaskets().then(t=>{
                        this.baskets = t.data.data,
                        this.isBasketsLoading = !1
                    }
                    ).catch(t=>{
                        this.isBasketsLoading = !1,
                        this.formError = Object(c["j"])(t).message
                    }
                    ))
                },
                openCreateBasket() {
                    this.$events.emit(o["b"].EVENTS.ORDERS_BASKET_CREATE, {
                        navSource: "sip"
                    })
                }
            },
            computed: {
                ...Object(n["d"])(["isMobile"]),
                constraints() {
                    const t = this.fetchStatus === r["d"].API_STATUSES.fetching
                      , e = this.fetchStatus === r["d"].API_STATUSES.error;
                    return {
                        isLoading: t,
                        isError: e,
                        isEdit: null !== this.form.id,
                        hasData: this.sip && this.sip.length > 0,
                        isEmpty: this.sip && 0 === this.sip.length,
                        hasErrorState: e && !this.sip,
                        hasErrorIcon: e && this.sip
                    }
                }
            },
            created() {
                this.tableHeaders = C,
                this.getSIPs()
            },
            activated() {
                this.$events.on(r["d"].EVENTS.refetch + "sip", this.getSIPs),
                this.$events.on(o["b"].EVENTS.ORDERS_BASKET_ON_CLOSE, ()=>{
                    this.getBaskets()
                }
                )
            },
            deactivated() {
                this.$events.off(r["d"].EVENTS.refetch + "sip", this.getSIPs),
                this.$events.off(o["b"].EVENTS.ORDERS_BASKET_ON_CLOSE, ()=>{
                    this.getBaskets()
                }
                ),
                this.isFormOpen = !1
            }
        }
          , T = w
          , k = s("0c7c")
          , x = Object(k["a"])(T, i, a, !1, null, null, null);
        e["default"] = x.exports
    },
    "0721": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                directives: [{
                    name: "tour",
                    rawName: "v-tour",
                    value: "default",
                    expression: "'default'"
                }],
                staticClass: "marketwatch-sidebar"
            }, [s("omnisearch", {
                attrs: {
                    insManager: t.instrumentManager,
                    "show-actions": !0,
                    "show-groups": !0,
                    "added-instruments": t.omnisearchInstruments,
                    counts: {
                        current: t.currentWatch && t.currentWatch.items && t.currentWatch.items.length,
                        max: 50
                    }
                },
                on: {
                    add: t.addItem,
                    place: t.onOmneSearchPlace
                }
            }), t._v(" "), t.currentWatch ? s("div", {
                staticClass: "instruments"
            }, [t.isMarketWatchFetching || t.isTickerConnecting ? s("loading-bar") : t._e(), t._v(" "), t.isMarketWatchFetchFailed ? s("error-state", {
                attrs: {
                    title: "Marketwatch couldn't be loaded.",
                    error: t.marketwatchesError
                }
            }) : t._e(), t._v(" "), s("transition", {
                attrs: {
                    name: "list",
                    tag: "div"
                }
            }, [t.currentWatch && t.currentWatch.items && 0 === t.currentWatch.items.length ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/marketwatch.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("h2", [t._v("Nothing here")]), t._v(" "), s("p", [t._v("Use the search bar to add instruments.")])]), t._v(" "), s("div", {
                attrs: {
                    slot: "action"
                },
                slot: "action"
            }, [s("button", {
                staticClass: "button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.triggerSearch()
                    }
                }
            }, [t._v("Add instrument")])])]) : t._e()], 1), t._v(" "), s("vddl-list", {
                staticClass: "list-flat",
                attrs: {
                    list: t.currentWatch.items,
                    drop: t.handleDragDrop,
                    horizontal: !1
                }
            }, t._l(t.currentWatch.items, (function(e, i) {
                return s("vddl-draggable", {
                    key: e.instrument_token,
                    staticClass: "instrument",
                    class: t.marketwatchItemStyleObject(i, e),
                    attrs: {
                        index: i,
                        draggable: e,
                        wrapper: t.currentWatch.items,
                        "effect-allowed": "move",
                        moved: t.handleDragMoved
                    },
                    on: {
                        click: function(e) {
                            return t.rowClicked(i)
                        }
                    }
                }, [s("div", {
                    on: {
                        mouseenter: function(e) {
                            return t.onItemHover(i)
                        },
                        mouseleave: function(e) {
                            return t.onItemLeave(i)
                        },
                        click: function(e) {
                            return t.onItemClick(i)
                        }
                    }
                }, [s("div", {
                    class: ["info", "price-change-type-" + t.priceChangeType]
                }, [s("div", {
                    staticClass: "symbol-wrapper"
                }, [s("div", {
                    staticClass: "symbol"
                }, [s("span", {
                    staticClass: "nice-name",
                    domProps: {
                        innerHTML: t._s(t.dateSuperScript(e.instrument.niceName))
                    }
                }), t._v(" "), s("span", {
                    staticClass: "tags"
                }, [t.showExchange(e.instrument.exchange) ? s("span", {
                    staticClass: "tag dim"
                }, [t._v(t._s(e.instrument.exchange))]) : t._e(), t._v(" "), e.instrument.tradable ? t._e() : s("span", {
                    staticClass: "tag dim"
                }, [t._v("INDEX")]), t._v(" "), e.instrument.isEvent ? s("span", {
                    staticClass: "tag text-blue text-bold"
                }, [t._v("EVENT")]) : t._e()])]), t._v(" "), t.showHoldings && e.holdingQuantities ? s("div", {
                    staticClass: "holding-quantities"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.holdingQuantities)), s("span", {
                    staticClass: "icon icon-briefcase"
                })]) : t._e()]), t._v(" "), t.ticks[e.instrument_token] ? s("div", {
                    staticClass: "price-wrapper"
                }, [t.showPriceChange ? s("div", {
                    staticClass: "price-change"
                }, [t.priceChangeType === t.constants.PRICE_CHANGE_TYPES.OPEN_ABSOLUTE ? s("div", {
                    staticClass: "dim"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].openChange, e.instrument.precision)) + "\n\t\t\t\t\t\t\t\t")]) : t.priceChangeType === t.constants.PRICE_CHANGE_TYPES.OPEN_PERCENTAGE ? s("div", {
                    staticClass: "dim"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].openChangePercent, 2))), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v("%")])]) : t.priceChangeType === t.constants.PRICE_CHANGE_TYPES.OPEN_ABSOLUTE_PERCENTAGE ? s("div", {
                    staticClass: "dim"
                }, [s("span", {
                    staticClass: "price-absolute"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].openChange, e.instrument.precision)) + "\n\t\t\t\t\t\t\t\t\t")]), t._v(" "), s("span", {
                    staticClass: "price-percentage"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].openChangePercent, 2))), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v("%")])])]) : t.priceChangeType === t.constants.PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE ? s("div", {
                    staticClass: "dim"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].absoluteChange, e.instrument.precision)) + "\n\t\t\t\t\t\t\t\t")]) : t.priceChangeType === t.constants.PRICE_CHANGE_TYPES.CLOSE_PERCENTAGE ? s("div", {
                    staticClass: "dim"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].change, 2))), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v("%")])]) : s("div", {
                    staticClass: "dim"
                }, [s("span", {
                    staticClass: "price-absolute"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].absoluteChange, e.instrument.precision)) + "\n\t\t\t\t\t\t\t\t\t")]), t._v(" "), s("span", {
                    staticClass: "price-percentage"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].change, 2))), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v("%")])])])]) : t._e(), t._v(" "), s("div", {
                    staticClass: "price"
                }, [t.showDirection ? [1 === t.tickChange(t.ticks[e.instrument_token]) ? s("span", {
                    staticClass: "change-indicator icon icon-chevron-up"
                }) : t._e(), t._v(" "), -1 === t.tickChange(t.ticks[e.instrument_token]) ? s("span", {
                    staticClass: "change-indicator icon icon-chevron-down"
                }) : t._e(), t._v(" "), 0 === t.tickChange(t.ticks[e.instrument_token]) ? s("span", {
                    staticClass: "change-indicator icon icon-circle"
                }) : t._e()] : t._e(), t._v(" "), s("span", {
                    staticClass: "last-price"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[e.instrument_token].lastPrice, e.instrument.precision)) + "\n\t\t\t\t\t\t\t\t")])], 2)]) : t._e()]), t._v(" "), t.isMobile ? t._e() : s("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.currentItemHoverIndex === i ? s("span", {
                    staticClass: "actions"
                }, [s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: "Buy (B)"
                    }
                }, [e.instrument.tradable ? s("su-button", {
                    staticClass: "button-blue buy",
                    attrs: {
                        type: "button"
                    },
                    nativeOn: {
                        click: function(s) {
                            return t.placeOrder(e, "BUY")
                        }
                    }
                }, [t._v("B")]) : t._e()], 1), t._v(" "), s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: "Sell (S)"
                    }
                }, [e.instrument.tradable ? s("su-button", {
                    staticClass: "button-orange sell",
                    attrs: {
                        type: "button"
                    },
                    nativeOn: {
                        click: function(s) {
                            return t.placeOrder(e, "SELL")
                        }
                    }
                }, [t._v("S")]) : t._e()], 1), t._v(" "), s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: "Market Depth (D)"
                    }
                }, [s("su-button", {
                    staticClass: "button-outline",
                    attrs: {
                        type: "button"
                    },
                    nativeOn: {
                        click: function(s) {
                            return t.toggleMarketDepth(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-align-center"
                })])], 1), t._v(" "), s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: "Chart (C)"
                    }
                }, [s("su-button", {
                    staticClass: "button-outline",
                    attrs: {
                        type: "button"
                    },
                    nativeOn: {
                        click: function(s) {
                            return t.openChart(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trending-up"
                })])], 1), t._v(" "), s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: "Delete (del)"
                    }
                }, [s("su-button", {
                    staticClass: "button-outline",
                    attrs: {
                        type: "button"
                    },
                    nativeOn: {
                        click: function(s) {
                            return t.deleteItem(e.id, i)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trash"
                })])], 1), t._v(" "), s("context-menu", {
                    attrs: {
                        "margin-top": 8,
                        "parent-selector": ".marketwatch-sidebar"
                    }
                }, [s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "context-menu-button button-outline",
                    attrs: {
                        slot: "button",
                        type: "button",
                        title: "More"
                    },
                    slot: "button"
                }, [s("span", {
                    staticClass: "icon icon-ellipsis"
                })]), t._v(" "), s("template", {
                    slot: "menu"
                }, [s("li", {
                    staticClass: "multiple-1 pin"
                }, [s("span", {
                    staticClass: "icon icon-paperclip"
                }), t._v("\n\t\t\t\t\t\t\t\t\t\tPin\n\t\t\t\t\t\t\t\t\t\t"), s("span", {
                    staticClass: "options"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.setPinInstrument(e, 0)
                        }
                    }
                }, [t._v("1")]), t._v(" "), s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.setPinInstrument(e, 1)
                        }
                    }
                }, [t._v("2")])])]), t._v(" "), s("common-context-menu", {
                    attrs: {
                        instrument: e.instrument,
                        include: ["popoutChart", "createGTT", "createAlert"]
                    }
                }), t._v(" "), s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: e.instrument
                    }
                })], 1)], 2)], 1) : t._e()]), t._v(" "), t.currentClickedRow == i && t.isMobile ? s("mobile-context-menu", {
                    on: {
                        close: function(s) {
                            return t.hideContextMenu(e)
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [s("li", [e.instrument.tradable ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.placeOrder(e, "BUY")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                }), t._v(" Buy")]) : t._e()]), t._v(" "), s("li", [e.instrument.tradable ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.placeOrder(e, "SELL")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-minus"
                }), t._v(" Sell")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.deleteItem(e.id, i)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trash"
                }), t._v(" Delete")])]), t._v(" "), s("common-context-menu", {
                    attrs: {
                        instrument: e.instrument,
                        exclude: ["addMarketwatch"]
                    }
                }), t._v(" "), s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: e.instrument
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("transition", {
                    attrs: {
                        name: "market-depth-fade"
                    }
                }, [t.marketDepthMap[e.id] ? s("market-depth", {
                    attrs: {
                        data: t.marketDepthData(e)
                    }
                }) : t._e()], 1)], 1)])
            }
            )), 1)], 1) : t._e(), t._v(" "), s("ul", {
                staticClass: "marketwatch-selector list-flat"
            }, [t._l(t.marketwatches, (function(e, i) {
                return s("li", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    key: i,
                    staticClass: "item",
                    class: {
                        selected: i == t.currentWatchId
                    },
                    attrs: {
                        title: e.name
                    },
                    on: {
                        click: function(e) {
                            return t.switchCurrentWatch(i)
                        }
                    }
                }, [t._v("\n\t\t\t" + t._s(i + 1) + "\n\t\t")])
            }
            )), t._v(" "), s("li", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.hideSettings,
                    expression: "hideSettings"
                }, {
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideSettings,
                    expression: "hideSettings"
                }],
                staticClass: "settings"
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: "Marketwatch settings",
                    "tooltip-pos": "left"
                }
            }, [s("span", {
                staticClass: "settings-button icon icon-settings",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleShowSettings.apply(null, arguments)
                    }
                }
            })]), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.showSettings ? s("div", {
                staticClass: "dropdown-nav layer-2"
            }, [s("ul", {
                staticClass: "list-flat dropdown-nav-list"
            }, [s("li", {
                staticClass: "block"
            }, [s("div", {
                staticClass: "head"
            }, [s("span", {
                staticClass: "dim"
            }, [t._v("Sort by")]), t._v(" "), s("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "save",
                attrs: {
                    title: "Save sorted marketwatch"
                }
            }, [s("span", {
                staticClass: "icon icon-save",
                class: {
                    dirty: t.isSortDirty
                },
                on: {
                    click: t.saveSorted
                }
            })])]), t._v(" "), s("div", {
                staticClass: "actions"
            }, [s("su-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "button-small button-outline",
                attrs: {
                    title: "Sort alphabetically"
                },
                nativeOn: {
                    click: function(e) {
                        return t.sortCurrentWatch("tradingsymbol")
                    }
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\tA-Z\n\t\t\t\t\t\t\t\t")]), t._v(" "), s("su-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "button-small button-outline",
                attrs: {
                    title: "Sort by change"
                },
                nativeOn: {
                    click: function(e) {
                        return t.sortCurrentWatch("change")
                    }
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\t%\n\t\t\t\t\t\t\t\t")]), t._v(" "), s("su-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "button-small button-outline",
                attrs: {
                    title: "Sort by LTP"
                },
                nativeOn: {
                    click: function(e) {
                        return t.sortCurrentWatch("lastPrice")
                    }
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\tLTP\n\t\t\t\t\t\t\t\t")]), t._v(" "), s("su-button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "button-small button-outline",
                attrs: {
                    title: "Sort by exchange"
                },
                nativeOn: {
                    click: function(e) {
                        return t.sortCurrentWatch("segment")
                    }
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\tEXH\n\t\t\t\t\t\t\t\t")])], 1)]), t._v(" "), s("li", {
                staticClass: "change block"
            }, [s("div", {
                staticClass: "head"
            }, [s("span", {
                staticClass: "dim"
            }, [t._v("Change")]), t._v(" "), s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "large",
                    expression: "'large'"
                }],
                staticClass: "help",
                attrs: {
                    title: "Price change can be either calculated based on previous close price or day open price."
                }
            }, [s("span", {
                staticClass: "icon icon-info"
            })])]), t._v(" "), s("su-radio-group", {
                staticClass: "change-type",
                on: {
                    change: t.onChangeTypeUpdate
                },
                model: {
                    value: t.changeType,
                    callback: function(e) {
                        t.changeType = e
                    },
                    expression: "changeType"
                }
            }, [s("su-radio", {
                attrs: {
                    label: "Close price",
                    value: "close"
                }
            }), t._v(" "), s("su-radio", {
                attrs: {
                    label: "Open price",
                    value: "open"
                }
            })], 1)], 1), t._v(" "), s("li", {
                staticClass: "change block"
            }, [s("div", {
                staticClass: "head"
            }, [s("span", {
                staticClass: "dim"
            }, [t._v("Change Format")])]), t._v(" "), s("su-radio-group", {
                staticClass: "change-type-format",
                on: {
                    change: t.onChangeTypeUpdate
                },
                model: {
                    value: t.changeTypeFormat,
                    callback: function(e) {
                        t.changeTypeFormat = e
                    },
                    expression: "changeTypeFormat"
                }
            }, [s("su-radio", {
                attrs: {
                    label: "Percentage",
                    value: "percentage"
                }
            }), t._v(" "), s("su-radio", {
                attrs: {
                    label: "Absolute",
                    value: "absolute"
                }
            }), t._v(" "), s("su-radio", {
                attrs: {
                    label: "Absolute & percentage",
                    value: "absolute-percentage"
                }
            })], 1)], 1), t._v(" "), s("li", {
                staticClass: "option"
            }, [s("su-checkbox", {
                attrs: {
                    label: "Show direction"
                },
                model: {
                    value: t.currentShowDirection,
                    callback: function(e) {
                        t.currentShowDirection = e
                    },
                    expression: "currentShowDirection"
                }
            })], 1), t._v(" "), s("li", {
                staticClass: "option"
            }, [s("su-checkbox", {
                attrs: {
                    label: "Show change"
                },
                model: {
                    value: t.currentShowPriceChange,
                    callback: function(e) {
                        t.currentShowPriceChange = e
                    },
                    expression: "currentShowPriceChange"
                }
            })], 1), t._v(" "), s("li", {
                staticClass: "option"
            }, [s("su-checkbox", {
                attrs: {
                    label: "Show holdings"
                },
                model: {
                    value: t.currentShowHoldings,
                    callback: function(e) {
                        t.currentShowHoldings = e
                    },
                    expression: "currentShowHoldings"
                }
            })], 1)])]) : t._e()])], 1)], 2)], 1)
        }
          , a = []
          , n = s("2f62")
          , r = s("f586")
          , o = s("9c9e")
          , l = s("25b5")
          , c = s("025e")
          , u = s("0a3b")
          , d = s("5fb0")
          , h = s("d9d2")
          , p = s("9f74")
          , m = s("39e3")
          , v = s("d4ff")
          , _ = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "loading-bar"
            })
        }
          , g = []
          , f = {
            name: "loading-bar",
            data() {
                return {}
            }
        }
          , b = f
          , C = (s("28d3"),
        s("0c7c"))
          , y = Object(C["a"])(b, _, g, !1, null, null, null)
          , w = y.exports
          , T = s("c184")
          , k = s("58b4")
          , x = {
            inject: ["ticker", "instrumentManager"],
            mixins: [o["a"]],
            components: {
                omnisearch: T["a"],
                "market-depth": k["a"],
                "loading-bar": w
            },
            data() {
                return {
                    keyToSort: null,
                    showSettings: !1,
                    currentItemHoverIndex: null,
                    currentWatch: [],
                    currentIndex: null,
                    highlightedIndex: null,
                    currentDragOverItem: null,
                    currentDraggedItem: null,
                    currentClickedRow: null,
                    tickerConnecting: !0,
                    tickerShutdown: !1,
                    holdingsQuantities: {},
                    currentWatchTokens: [],
                    marketDepthMap: {},
                    changeType: "close",
                    changeTypeFormat: "percentage",
                    isSortDirty: !1,
                    keyboardShortcutEvents: [{
                        keys: ["40"],
                        cb: this.moveDown,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["38"],
                        cb: this.moveUp,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["46"],
                        cb: this.deleteCurrentItem,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["8"],
                        cb: this.deleteCurrentItem,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["66"],
                        cb: ()=>this.placeCurrentItemOrder("BUY"),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["83"],
                        cb: ()=>this.placeCurrentItemOrder("SELL"),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["68"],
                        cb: this.openMarketDepth,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["67"],
                        cb: ()=>this.openChart(this.currentWatch.items[this.currentIndex]),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "49"],
                        cb: ()=>this.switchCurrentWatch(0),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "97"],
                        cb: ()=>this.switchCurrentWatch(0),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "50"],
                        cb: ()=>this.switchCurrentWatch(1),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "98"],
                        cb: ()=>this.switchCurrentWatch(1),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "51"],
                        cb: ()=>this.switchCurrentWatch(2),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "99"],
                        cb: ()=>this.switchCurrentWatch(2),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "52"],
                        cb: ()=>this.switchCurrentWatch(3),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "100"],
                        cb: ()=>this.switchCurrentWatch(3),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "53"],
                        cb: ()=>this.switchCurrentWatch(4),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "101"],
                        cb: ()=>this.switchCurrentWatch(4),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "54"],
                        cb: ()=>this.switchCurrentWatch(5),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "102"],
                        cb: ()=>this.switchCurrentWatch(5),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "55"],
                        cb: ()=>this.switchCurrentWatch(6),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "17", "103"],
                        cb: ()=>this.switchCurrentWatch(6),
                        stop: !0,
                        prevent: !0
                    }],
                    chartSrc: "chart"
                }
            },
            beforeCreate() {
                this.constants = l["c"]
            },
            created() {
                this.fetchMarketwatches(),
                this.preProcess()
            },
            mounted() {
                this.$keyEvents.register(this.keyboardShortcutEvents),
                this.$events.on(l["c"].EVENTS.SEARCH, this.triggerSearch),
                this.setChangeTypeAndFormat()
            },
            beforeDestroy() {
                this.unsubscribeCurrentWatch(),
                this.$events.off(l["c"].EVENTS.SEARCH, this.triggerSearch),
                this.postProcess()
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                ...Object(n["d"])(["isMobile", "theme"]),
                ...Object(n["d"])(v["b"], ["holdings"]),
                ...Object(n["d"])(m["b"], ["ticks", "tickerConnectionStatus"]),
                ...Object(n["d"])(p["b"], ["currentWatchId", "marketwatches", "marketwatchFetchStatus", "priceChangeType", "marketwatchesError", "showPriceChange", "showHoldings", "showDirection"]),
                isFetched() {
                    return !(this.marketwatchFetchStatus !== d["d"].API_STATUSES.success || !this.marketwatches)
                },
                isMarketWatchFetching() {
                    return this.marketwatchFetchStatus === d["d"].API_STATUSES.fetching
                },
                isMarketWatchFetchFailed() {
                    return this.marketwatchFetchStatus === d["d"].API_STATUSES.error
                },
                isTickerConnecting() {
                    return this.tickerConnectionStatus === d["d"].API_STATUSES.fetching
                },
                isTickerError() {
                    return this.tickerConnectionStatus === d["d"].API_STATUSES.error
                },
                currentShowPriceChange: {
                    get() {
                        return this.showPriceChange
                    },
                    set(t) {
                        this.setShowPriceChange(t)
                    }
                },
                currentShowHoldings: {
                    get() {
                        return this.showHoldings
                    },
                    set(t) {
                        this.setShowHoldings(t)
                    }
                },
                currentShowDirection: {
                    get() {
                        return this.showDirection
                    },
                    set(t) {
                        this.setShowDirection(t)
                    }
                },
                omnisearchInstruments() {
                    let t = [];
                    if (this.currentWatch && this.currentWatch.items)
                        for (let e of this.currentWatch.items)
                            e && e.instrument && t.push(e.instrument);
                    return t
                }
            },
            watch: {
                isMobile() {
                    for (let t in this.marketDepthMap)
                        this.marketDepthMap[t] && this.toggleMarketDepth({
                            id: t
                        });
                    this.marketDepthMap = {}
                },
                marketwatches() {
                    this.setCurrentWatch()
                },
                currentWatchId() {
                    this.setCurrentWatch()
                },
                holdings(t) {
                    let e = {};
                    if (this.holdings && this.holdings.length > 0)
                        for (let s of this.holdings)
                            if (s.tradingsymbol && s.exchange) {
                                e[s.exchange + ":" + s.tradingsymbol] = s.quantity + (s.t1_quantity || 0);
                                let t = this.instrumentManager.get(s.tradingsymbol, null, s.exchange);
                                if (t && t.related)
                                    for (let i of t.related)
                                        e[i.exchange + ":" + i.tradingsymbol] = s.quantity + (s.t1_quantity || 0)
                            }
                    this.holdingsQuantities = e,
                    this.setCurrentWatch()
                },
                currentWatch(t, e) {
                    let s = []
                      , i = [];
                    t && t.items && (s = t.items.map(t=>t.instrument_token).filter(t=>{
                        if (t)
                            return t
                    }
                    ),
                    this.currentWatchTokens = s),
                    e && e.items && (i = e.items.map(t=>t.instrument_token).filter(t=>{
                        if (-1 === s.indexOf(t))
                            return t
                    }
                    )),
                    this.ticker.subscribe(s, p["b"]),
                    "open" === this.changeType ? this.ticker.setMode(this.ticker.modeQuote, s, p["b"]) : this.ticker.setMode(this.ticker.modeLTPC, s, p["b"]),
                    this.ticker.unsubscribe(i, p["b"])
                }
            },
            methods: {
                ...Object(n["c"])(p["b"], ["fetchMarketwatches"]),
                ...Object(n["e"])(p["b"], ["setCurrentWatchId", "setMarketwatchFetchStatus", "updatedMarketwatch", "setPriceChangeType", "setShowPriceChange", "setShowHoldings", "setShowDirection", "pinInstrument"]),
                preProcess() {
                    this.$events.on(l["c"].EVENTS.ADD, this.addItem)
                },
                postProcess() {
                    this.$events.off(l["c"].EVENTS.ADD, this.addItem)
                },
                sortCurrentWatch(t) {
                    let e, s = this.$clone(this.currentWatch), i = !0;
                    if (this.keyToSort === t ? (i = !i,
                    this.keyToSort = null) : this.keyToSort = t,
                    "change" === t)
                        for (let a of s.items)
                            this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE ? a[t] = this.ticks[a.instrument_token].absoluteChange : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE ? a[t] = this.ticks[a.instrument_token].openChange : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_PERCENTAGE ? a[t] = this.ticks[a.instrument_token].openChangePercent : a[t] = this.ticks[a.instrument_token].change;
                    if ("lastPrice" === t)
                        for (let a of s.items)
                            a[t] = this.ticks[a.instrument_token].lastPrice;
                    e = s.items.sort((function(e, s) {
                        let a = e[t]
                          , n = s[t];
                        return i ? a < n ? -1 : a > n ? 1 : 0 : a > n ? -1 : a < n ? 1 : 0
                    }
                    )),
                    s.items = e,
                    this.currentWatch = s,
                    this.isSortDirty = !0
                },
                unsubscribeCurrentWatch(t) {
                    if (!t || !t.items)
                        return;
                    let e = t.items.map(t=>t.instrument_token);
                    this.ticker.unsubscribe(e, p["b"])
                },
                switchCurrentWatch(t) {
                    this.marketwatches && this.marketwatches.length > 0 && this.marketwatches.length > this.currentWatchId && this.setCurrentWatchId(t)
                },
                setCurrentWatch() {
                    if (void 0 === this.marketwatches[this.currentWatchId])
                        return;
                    let t = []
                      , e = this.$clone(this.marketwatches[this.currentWatchId]);
                    for (let s of e.items) {
                        let e = this.instrumentManager.get(s.tradingsymbol, s.segment);
                        e && (s.instrument = e,
                        s.holdingQuantities = this.holdingsQuantities[s.instrument.exchange + ":" + s.instrument.tradingsymbol],
                        t.push(s))
                    }
                    e.items = t,
                    this.currentWatch = e
                },
                showExchange(t) {
                    return t !== h["b"].EXCHANGES.NSE && t !== h["b"].EXCHANGES.NFO && t !== h["b"].EXCHANGES.CDS && t !== h["b"].EXCHANGES.INDICES
                },
                moveUp() {
                    null !== this.currentIndex ? this.currentWatch.items.length > 0 && (this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.currentWatch.items.length - 1,
                    this.scrollToElement(".instrument.index" + this.currentIndex)) : this.currentIndex = 0
                },
                moveDown() {
                    null !== this.currentIndex ? this.currentWatch.items.length > 0 && (this.currentIndex < this.currentWatch.items.length - 1 ? this.currentIndex++ : this.currentIndex = 0,
                    this.scrollToElement(".instrument.index" + this.currentIndex)) : this.currentIndex = 0
                },
                marketwatchItemStyleObject(t, e) {
                    let s = "index" + [t];
                    return {
                        index: !e.instrument.tradable,
                        up: this.ticks[e.instrument_token] && 1 === this.tickChange(this.ticks[e.instrument_token]),
                        down: this.ticks[e.instrument_token] && -1 === this.tickChange(this.ticks[e.instrument_token]),
                        selected: t === this.currentIndex,
                        "shake-scale": t === this.highlightedIndex,
                        [s]: !0,
                        draggedover: t === this.currentDragOverItem,
                        "active-marketdepth": !0 === this.marketDepthMap[e.id],
                        last: t === this.currentWatch.items.length - 1
                    }
                },
                indexOfInstrument(t, e) {
                    for (let s = 0; s < t.items.length; s++) {
                        let i = t.items[s];
                        if (i.tradingsymbol === e.tradingsymbol && i.segment === e.segment)
                            return s
                    }
                    return null
                },
                highlightItem(t) {
                    this.highlightedIndex = t,
                    setTimeout(()=>{
                        this.highlightedIndex = null
                    }
                    , 400)
                },
                addItem({instrument: t, isMultiAdd: e, isAdded: s}) {
                    let i = this.indexOfInstrument(this.currentWatch, t);
                    if (null !== i)
                        return this.scrollToElement(".instrument.index" + i),
                        void setTimeout(()=>{
                            this.currentIndex = i,
                            this.highlightItem(i)
                        }
                        , 50);
                    let a = this.$clone(this.currentWatch)
                      , n = a.items[a.items.length - 1] || {
                        id: 0,
                        weight: 0
                    };
                    a.items.push({
                        tradingsymbol: t.tradingsymbol,
                        weight: n.weight + 1,
                        lot_size: t.lotSize,
                        segment: t.segment,
                        id: n.id + 1,
                        strike_price: 0,
                        last_price: 0,
                        token: null,
                        expiry: ""
                    }),
                    this.updatedMarketwatch(a);
                    let o = a.items.length - 1;
                    r["a"].add(this.currentWatch.id, {
                        segment: t.segment,
                        tradingsymbol: t.tradingsymbol,
                        watch_id: this.currentWatch.id,
                        weight: this.currentWatch.items[this.currentWatch.items.length - 1] ? this.currentWatch.items[this.currentWatch.items.length - 1].weight + 1 : 0
                    }).then(t=>{
                        let s = this.$clone(this.currentWatch);
                        o >= 0 && (s.items[o] = t.data.data,
                        this.updatedMarketwatch(s)),
                        this.$nextTick(()=>{
                            e || this.scrollToBottom(),
                            setTimeout(()=>{
                                this.currentIndex = o
                            }
                            , 50)
                        }
                        )
                    }
                    ).catch(t=>{
                        let e = this.$clone(this.currentWatch);
                        o && (e.items.splice(o, 1),
                        this.updatedMarketwatch(e)),
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.TOP_LEFT
                        })
                    }
                    )
                },
                deleteItem(t, e) {
                    let s = this.$clone(this.currentWatch);
                    s.items.splice(e, 1),
                    this.updatedMarketwatch(s),
                    r["a"].deleteItem(this.currentWatch.id, t).then(()=>{}
                    )
                },
                deleteCurrentItem() {
                    this.currentWatch && null !== this.currentIndex && this.deleteItem(this.currentWatch.items[this.currentIndex].id, this.currentIndex)
                },
                updateWeights(t, e, s, i) {
                    r["a"].update(t, e).then(t=>{
                        this.fetchMarketwatches(),
                        s && this.$toast.success({
                            title: "Done",
                            message: s,
                            orientation: this.$toast.TOP_LEFT
                        })
                    }
                    ).catch(()=>{
                        i && this.$toast.error({
                            title: "Error",
                            message: i,
                            orientation: this.$toast.TOP_LEFT
                        })
                    }
                    )
                },
                toggleMarketDepth(t) {
                    let e = this.marketDepthMap[t.id];
                    this.$set(this.marketDepthMap, t.id, !e)
                },
                scrollToBottom() {
                    this.scrollToElement(".instrument.last")
                },
                scrollToElement(t) {
                    let e = this.$el.querySelector(t);
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        inline: "nearest"
                    })
                },
                handleDragDrop(t) {
                    let e = this.$clone(this.currentWatch);
                    e.items.splice(t.index, 0, t.item),
                    this.updatedMarketwatch(e)
                },
                handleDragMoved(t) {
                    let e = this.$clone(this.currentWatch);
                    e.items.splice(t, 1),
                    this.updatedMarketwatch(e);
                    let s = {};
                    for (let i = 0; i < e.items.length; i++) {
                        let t = e.items[i].id;
                        s[t] = i + 1
                    }
                    this.updateWeights(e.id, s)
                },
                onOmneSearchPlace(t, e) {
                    this.placeOrder({
                        instrument_token: null,
                        instrument: t
                    }, e)
                },
                placeOrder(t, e) {
                    this.$events.emit(h["b"].EVENTS.ORDER_PLACE, {
                        instrument: t.instrument,
                        instrumentToken: t.instrument_token,
                        transactionType: e,
                        quantity: t.instrument.lotSize || 1
                    })
                },
                placeCurrentItemOrder(t) {
                    this.currentWatch && null !== this.currentIndex && this.currentWatch.items[this.currentIndex].instrument.tradable && this.placeOrder(this.currentWatch.items[this.currentIndex], t)
                },
                openMarketDepth() {
                    this.currentWatch && null !== this.currentIndex && this.toggleMarketDepth(this.currentWatch.items[this.currentIndex])
                },
                openChart(t, e) {
                    if (e) {
                        let e = this.openPopoutChart(t.instrument_token, t.instrument.segment, t.instrument.tradingsymbol)
                          , s = this.$router.resolve({
                            path: e
                        })
                          , i = s.href;
                        "dark" === this.theme && (i += "?theme=dark"),
                        window.open(i, "_blank")
                    } else
                        this.openInAppChart(t.instrument_token, t.instrument.segment, t.instrument.tradingsymbol)
                },
                onItemHover(t) {
                    this.isMobile || (this.currentItemHoverIndex = t)
                },
                onItemClick(t) {
                    this.isMobile && (this.currentItemHoverIndex = t,
                    this.currentClickedRow = t)
                },
                onItemLeave(t) {
                    this.currentItemHoverIndex = null
                },
                hideSettings() {
                    this.showSettings = !1
                },
                toggleShowSettings() {
                    this.showSettings = !this.showSettings
                },
                hideContextMenu(t) {
                    this.currentClickedRow = null
                },
                saveSorted() {
                    let t = {};
                    for (let e = 0; e < this.currentWatch.items.length; e++) {
                        let s = this.currentWatch.items[e].id;
                        t[s] = e + 1
                    }
                    this.isSortDirty = !1,
                    this.updateWeights(this.currentWatch.id, t, "Saved marketwatch order", "Error while saving marketwatch order")
                },
                setPinInstrument(t, e) {
                    this.pinInstrument({
                        index: e,
                        instrument: {
                            segment: t.segment,
                            tradingsymbol: t.tradingsymbol,
                            instrumentToken: t.instrument_token,
                            expiry: t.expiry
                        }
                    }),
                    Object(c["c"])(document.querySelectorAll(".pinned-instruments .instrument-widget")[e], "shake")
                },
                marketDepthData(t) {
                    return {
                        instrument: t.instrument,
                        instrumentToken: t.instrument_token,
                        expiry: t.expiry,
                        tag: "marketdepth-" + t.id
                    }
                },
                dateSuperScript(t) {
                    return Object(u["a"])(t)
                },
                triggerSearch(t) {
                    this.$nextTick(()=>{
                        setTimeout(()=>{
                            let e = document.querySelector(".marketwatch-sidebar .omnisearch input")
                              , s = new window.Event("input",{
                                bubbles: !1,
                                cancelable: !0
                            });
                            e.value = t || "NIFTY 50",
                            e.focus(),
                            e.dispatchEvent(s)
                        }
                        )
                    }
                    )
                },
                onChangeTypeUpdate() {
                    "open" === this.changeType ? this.ticker.setMode(this.ticker.modeQuote, this.currentWatchTokens, p["b"]) : this.ticker.setMode(this.ticker.modeLTPC, this.currentWatchTokens, p["b"]),
                    "open" === this.changeType ? "absolute" === this.changeTypeFormat ? this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE) : "percentage" === this.changeTypeFormat ? this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.OPEN_PERCENTAGE) : this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE_PERCENTAGE) : "absolute" === this.changeTypeFormat ? this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE) : "percentage" === this.changeTypeFormat ? this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.CLOSE_PERCENTAGE) : this.setPriceChangeType(l["c"].PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE_PERCENTAGE)
                },
                setChangeTypeAndFormat() {
                    this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE ? (this.changeType = "open",
                    this.changeTypeFormat = "absolute") : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_PERCENTAGE ? (this.changeType = "open",
                    this.changeTypeFormat = "percentage") : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE_PERCENTAGE ? (this.changeType = "open",
                    this.changeTypeFormat = "absolute-percentage") : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE ? (this.changeType = "close",
                    this.changeTypeFormat = "absolute") : this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.CLOSE_PERCENTAGE ? (this.changeType = "close",
                    this.changeTypeFormat = "percentage") : (this.changeType = "close",
                    this.changeTypeFormat = "absolute-percentage")
                },
                tickChange(t) {
                    let e = 0;
                    e = this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE || this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_PERCENTAGE || this.priceChangeType === l["c"].PRICE_CHANGE_TYPES.OPEN_ABSOLUTE_PERCENTAGE ? t.openChange : t.absoluteChange;
                    let s = 0;
                    return e > 0 ? s = 1 : e < 0 && (s = -1),
                    s
                }
            }
        }
          , E = x
          , S = Object(C["a"])(E, i, a, !1, null, null, null);
        e["default"] = S.exports
    },
    "0a04": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = this
              , s = e.$createElement
              , i = e._self._c || s;
            return i("div", {
                staticClass: "bids"
            }, [i("section", {
                staticClass: "table-wrapper"
            }, [i("page-header", {
                attrs: {
                    title: "Govt. securities",
                    emptyImage: "images/illustrations/orderbook.svg",
                    state: e.store
                },
                scopedSlots: e._u([{
                    key: "empty-message",
                    fn: function() {
                        return [i("p", [e._v("No securities available for bidding currently. "), i("a", {
                            attrs: {
                                target: "_blank",
                                href: "https://support.zerodha.com/category/mutual-funds/government-securities/articles/gsecs-cutoff-time"
                            }
                        }, [e._v("Learn more.")])])]
                    },
                    proxy: !0
                }])
            }), e._v(" "), e.store.ui_status.hasData ? i("su-table", {
                staticClass: "fold-header",
                attrs: {
                    data: e.store.data,
                    headers: e.tableHeaders,
                    uid: "id",
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return t.contextMenuID = e.row.id
                    },
                    rowLeave: function(e) {
                        return t.contextMenuID = null
                    },
                    rowClick: function(e) {
                        return t.contextMenuID = e.row.id
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        var s;
                        return [i("td", {
                            attrs: {
                                width: "5%"
                            }
                        }, [i("span", {
                            class: ["text-label", "text-uppercase", t.row.color]
                        }, [e._v(e._s(t.row.type))])]), e._v(" "), i("td", {
                            staticClass: "instrument name",
                            attrs: {
                                width: "35%"
                            }
                        }, [i("div", {
                            staticClass: "wrap"
                        }, [t.order ? i("span", [e._v(e._s(t.row.name))]) : i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    e.onBidWindow(t.row)
                                }
                            }
                        }, [e._v(e._s(t.row.name))]), e._v(" "), t.row.order && t.row.order.remark ? i("p", {
                            staticClass: "text-xsmall error"
                        }, [e._v(e._s(t.row.order.remark))]) : e._e(), e._v(" "), i("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.row.actionable && e.contextMenuID === t.row.id ? i("context-menu", {
                            staticClass: "table"
                        }, [i("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [i("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), e._v(" "), i("template", {
                            slot: "menu"
                        }, [i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    e.onBidWindow(t.row)
                                }
                            }
                        }, [i("span", {
                            staticClass: "icon icon-edit"
                        }), e._v(" Modify\n\t\t\t\t\t\t\t\t\t\t")])]), e._v(" "), i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    e.onCancelBid(t.row)
                                }
                            }
                        }, [i("span", {
                            staticClass: "icon icon-times"
                        }), e._v(" Cancel\n\t\t\t\t\t\t\t\t\t\t")])])])], 2) : e._e()], 1)], 1)]), e._v(" "), i("td", {
                            staticClass: "right",
                            attrs: {
                                width: "10%"
                            }
                        }, [e._v("\n\t\t\t\t\t" + e._s(e._f("decimalPad")(t.row.indicative_yield, 2)) + "%\n\t\t\t\t")]), e._v(" "), i("td", {
                            staticClass: "right right-border",
                            attrs: {
                                width: "20%"
                            }
                        }, [e._v("\n\t\t\t\t\t" + e._s(e.niceDate(t.row.end_at)) + "\n\t\t\t\t")]), e._v(" "), i("td", {
                            staticClass: "right",
                            attrs: {
                                width: "20%"
                            }
                        }, [t.row.order ? i("span", [e._v("\n\t\t\t\t\t\t₹" + e._s(e._f("inrFormat")(t.row.order.price * t.row.order.quantity, 2)) + "\n\t\t\t\t\t\t"), i("span", {
                            staticClass: "text-light"
                        }, [e._v("(" + e._s(t.row.order.quantity) + ")")])]) : i("span", {
                            staticClass: "text-lightest"
                        }, [e._v("—")])]), e._v(" "), i("td", {
                            staticClass: "status",
                            attrs: {
                                width: "10%"
                            }
                        }, [t.row.order ? i(t.row.actionable ? "a" : "span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            tag: "component",
                            class: (s = {
                                "text-label": !0,
                                "text-uppercase": !0
                            },
                            s[e.statusColor(t.row.order.status)] = !0,
                            s),
                            attrs: {
                                title: t.row.order ? t.row.order.remark : "",
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    s.preventDefault(),
                                    t.row.actionable && e.onBidWindow(t.row)
                                }
                            }
                        }, [e._v("\n\t\t\t\t\t\t" + e._s(t.row.order.status) + "\n\t\t\t\t\t")]) : i("su-button", {
                            staticClass: "button-blue button-xsmall buy",
                            attrs: {
                                type: "button"
                            },
                            nativeOn: {
                                click: function(s) {
                                    return e.onBidWindow(t.row)
                                }
                            }
                        }, [e._v("Place bid")])], 1)]
                    }
                }], null, !1, 2497956e3)
            }) : e._e()], 1), e._v(" "), e.store.ui_status.hasData ? i("p", {
                staticClass: "text-light text-xxsmall",
                staticStyle: {
                    "max-width": "75%"
                }
            }, [e._v("\n\t\t* Indicative yields are annualized and based on the last traded price of G-Secs and SDLs on NDS-OM\n\t\tand are only for comparison purposes. The actual yield of the security depends on the weighted\n\t\taverage price discovered in the auction. "), i("a", {
                attrs: {
                    href: "https://zerodha.com/varsity/chapter/government-securities/",
                    target: "_blank"
                }
            }, [e._v("Learn more")]), e._v('.\n\n\t\t"New GS" refers to a G-Sec that is being issued for the first time. When a new G-Sec is issued,\n\t\tthe yield is discovered through a yield-based auction. Indicative yields shown are for comparison purposes only.\n\t\t'), i("a", {
                attrs: {
                    href: "https://www.rbi.org.in/CommonPerson/english/Scripts/FAQs.aspx?Id=711#4",
                    target: "_blank"
                }
            }, [e._v("Learn more")]), e._v(".\n\t")]) : e._e(), e._v(" "), e.selInst ? i("gsec-window", {
                attrs: {
                    instrument: e.selInst
                },
                on: {
                    ok: e.onWindowOk,
                    cancel: e.onWindowCancel
                }
            }) : e._e()], 1)
        }
          , a = []
          , n = s("9c9e")
          , r = s("5fb0")
          , o = s("365c")
          , l = s("b7d9");
        const c = {
            gsec: {
                name: "GOI dated bond",
                color: "green"
            },
            tbill: {
                name: "Treasury bill",
                color: "orange"
            },
            sdl: {
                name: "State Development Loan",
                color: "aqua"
            },
            sgb: {
                name: "Soverign Gold Bond",
                color: "blue"
            }
        }
          , u = Object(l["b"])()
          , d = Object(o["a"])(()=>o["b"].get("/oms/bids/instruments", {
            params: {
                type: Object.keys(c)
            }
        }), {
            commit: !0,
            toast: !1,
            hook: t=>{
                let e = t.reduce((t,e)=>{
                    const s = e.items.map(t=>({
                        ...t,
                        actionable: t && t.order && "PLACED" === t.order.status,
                        type: e.type,
                        type_name: c[e.type].name,
                        color: c[e.type].color
                    }));
                    return [...t, ...s]
                }
                , []);
                return e.sort((t,e)=>null !== t.order ? -1 : null !== e.order ? 1 : 0),
                e
            }
        }, u)
          , h = (Object(o["a"])(()=>o["b"].get("/oms/bids/orders"), null, u),
        Object(o["a"])((t,e)=>o["b"].post("/oms/bids/orders/" + t, e)))
          , p = Object(o["a"])((t,e,s)=>o["b"].put(`/oms/bids/orders/${t}/${e}`, s))
          , m = Object(o["a"])((t,e)=>o["b"].delete(`/oms/bids/orders/${t}/${e}`));
        var v = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("su-modal", {
                staticClass: "alerts-create-modal",
                class: {
                    "gsec-window": !0,
                    shake: t.store.status.error
                },
                attrs: {
                    open: !0,
                    buttons: !0,
                    "is-form": !0,
                    "ok-label": t.okButton,
                    "cancel-label": "Close",
                    "click-out": !1
                },
                on: {
                    ok: t.onSubmit,
                    cancel: t.onCancel
                }
            }, [s("div", {
                staticClass: "row gtt-info-header",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "eight columns tradingsymbol-wrapper header-left"
            }, [s("h3", {
                staticClass: "tradingsymbol"
            }, [s("span", {
                class: ["text-label", "text-uppercase", t.instrument.color]
            }, [t._v(t._s(t.instrument.type))]), t._v("\n\t\t\t\t" + t._s(t.instrument.name) + "\n\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "status four columns text-right header-right dim"
            }, [t._v("\n\t\t\t" + t._s(t.instrument.type_name) + "\n\t\t")])]), t._v(" "), s("div", {
                staticClass: "gtt-info-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "four columns"
            }, [s("p", [s("label", {
                staticClass: "label"
            }, [t._v("Indicative yield")]), t._v("\n\t\t\t\t\t" + t._s(t.instrument.indicative_yield) + "%\n\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "four columns"
            }, [s("p", [s("label", {
                staticClass: "label"
            }, [t._v("Price")]), t._v("\n\t\t\t\t\t" + t._s(t.instrument.max_price) + "\n\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "four columns"
            }, [s("p", [s("label", {
                staticClass: "label"
            }, [t._v("Maturity")]), t._v("\n\t\t\t\t\t" + t._s(t.niceDate(t.instrument.maturity_date)) + "\n\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "three columns"
            })]), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "four columns"
            }, [s("p", [s("label", {
                staticClass: "label"
            }, [t._v("Last bid")]), t._v("\n\t\t\t\t\t" + t._s(t.niceDate(t.instrument.end_at, !0)) + "\n\t\t\t\t")]), t._v(" "), s("p", [s("label", {
                staticClass: "label"
            }, [t._v("Settlement")]), t._v("\n\t\t\t\t\t" + t._s(t.niceDate(t.instrument.settlement_date)) + "\n\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "three columns"
            }, [t._v(" ")]), t._v(" "), s("div", {
                staticClass: "four columns amount"
            }, [s("label", {
                staticClass: "label"
            }, [t._v("Amount (₹)")]), t._v(" "), s("su-input", {
                ref: "amount",
                staticClass: "no",
                attrs: {
                    type: "number",
                    disabled: !t.isPlace && !t.isModify,
                    autofocus: "",
                    "native-error": "",
                    min: t.instrument.max_price * t.instrument.lot_size,
                    max: t.instrument.max_price * t.instrument.max_quantity,
                    step: t.instrument.max_price * t.instrument.lot_size
                },
                on: {
                    change: t.onAmountChange,
                    blur: t.onInputBlur
                },
                model: {
                    value: t.form.amount,
                    callback: function(e) {
                        t.$set(t.form, "amount", e)
                    },
                    expression: "form.amount"
                }
            }), t._v(" "), s("span", {
                staticClass: "text-xxsmall text-light"
            }, [t._v("Min. amount " + t._s(t.instrument.max_price * t.instrument.lot_size))])], 1)])]), t._v(" "), s("div", {
                attrs: {
                    slot: "footer_summary"
                },
                slot: "footer_summary"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "text-right"
            }, [s("span", {
                staticClass: "text-light"
            }, [t._v("Total qty.")]), s("br"), s("span", [t._v(t._s(t.finalQty))])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "text-right"
            }, [s("span", {
                staticClass: "text-light"
            }, [t._v("Total amount")]), s("br"), s("span", [t._v("₹" + t._s(t.finalAmount))])])])])])])
        }
          , _ = []
          , g = s("025e")
          , f = {
            mixins: [n["a"]],
            props: {
                instrument: {
                    type: Object
                }
            },
            data() {
                return {
                    store: Object(l["b"])(),
                    inst: {},
                    form: {
                        quantity: 1,
                        amount: 1
                    },
                    okButton: null,
                    finalQty: 0,
                    finalAmount: 0
                }
            },
            created() {
                this.tableHeaders = {
                    viewTrades: [{
                        label: "Trade ID",
                        field: "trade_id",
                        sort: !1
                    }, {
                        label: "Time",
                        field: "order_timestamp",
                        sort: !1
                    }, {
                        label: "Exch. time",
                        field: "exchange_timestamp",
                        sort: !1
                    }, {
                        label: "Exch. id",
                        field: "exchange_order_id",
                        sort: !1
                    }, {
                        label: "Product",
                        field: "product",
                        sort: !1
                    }, {
                        label: "Qty.",
                        field: "quantity",
                        sort: !1
                    }, {
                        label: "Avg. price",
                        field: "average_price",
                        sort: !1
                    }]
                },
                this.isPlace ? (this.form.quantity = this.instrument.min_quantity,
                this.form.amount = this.instrument.min_quantity * this.instrument.max_price,
                this.okButton = "Place bid") : (this.isModify && (this.okButton = "Modify bid"),
                this.form.quantity = this.instrument.order.quantity,
                this.form.amount = this.instrument.order.quantity * this.instrument.order.price),
                this.adjustFinal()
            },
            computed: {
                isPlace() {
                    return null === this.instrument.order
                },
                isModify() {
                    return null !== this.instrument.order && "PLACED" === this.instrument.order.status
                }
            },
            methods: {
                onQtyChange() {
                    this.form.amount = Math.round(this.form.quantity * this.instrument.max_price),
                    this.adjustFinal()
                },
                onAmountChange() {
                    this.form.quantity = Math.round(this.form.amount / this.instrument.max_price),
                    this.adjustFinal()
                },
                onInputBlur() {
                    const {quantity: t, amount: e} = this.computeValues();
                    this.form.quantity = t,
                    this.form.amount = e
                },
                onSubmit(t, e) {
                    const {api: s, store: i} = this.isPlace ? h(this.instrument.type, {
                        instrument_id: this.instrument.id,
                        quantity: this.form.quantity,
                        use_available_fund: !0
                    }) : p(this.instrument.type, this.instrument.order.id, {
                        instrument_id: this.instrument.id,
                        quantity: this.form.quantity,
                        use_available_fund: !0
                    });
                    this.store = i,
                    s.then(()=>{
                        this.$emit("ok", this.isPlace)
                    }
                    ).catch(()=>{
                        e()
                    }
                    )
                },
                onCancel() {
                    this.$emit("cancel")
                },
                adjustFinal() {
                    const {quantity: t, amount: e} = this.computeValues();
                    this.finalQty = t,
                    this.finalAmount = e
                },
                computeValues() {
                    const t = Math.min(Object(g["r"])(Math.round(this.form.quantity), this.instrument.lot_size, !0), this.instrument.max_quantity);
                    return {
                        quantity: t,
                        amount: Math.round(t * this.instrument.max_price)
                    }
                }
            }
        }
          , b = f
          , C = s("0c7c")
          , y = Object(C["a"])(b, v, _, !1, null, null, null)
          , w = y.exports;
        const T = {
            PLACED: "green",
            CANCELLED: "red",
            FAILED: "red",
            PROCESSED: "aqua",
            ALLOTTED: "green"
        };
        var k = {
            mixins: [n["a"]],
            components: {
                "gsec-window": w
            },
            data() {
                return {
                    selInst: null,
                    contextMenuID: null
                }
            },
            created() {
                this.store = u,
                this.tableHeaders = [{
                    label: "Type",
                    field: "type",
                    sort: !0,
                    search: !0
                }, {
                    label: "Instrument",
                    field: "name",
                    sort: !0,
                    search: !0
                }, {
                    label: "Yield*",
                    field: "indicative_yield",
                    sort: !0,
                    class: "right"
                }, {
                    label: "Ends on",
                    field: "end_at",
                    sort: !0,
                    class: "right"
                }, {
                    label: "Order value",
                    class: "right"
                }, {
                    label: ""
                }]
            },
            mounted() {
                const {api: t} = d();
                t.then(()=>{
                    this.$route.query.id && this.openWindowbyISIN(this.$route.query.id)
                }
                )
            },
            activated() {
                this.$events.on(r["c"].refetch + "gsecs", d)
            },
            deactivated() {
                this.$events.off(r["c"].refetch + "gsecs", d)
            },
            methods: {
                onBidWindow(t) {
                    this.selInst = t
                },
                onCancelBid(t) {
                    this.$confirm({
                        description: "Cancel the current bid?",
                        onOk: (e,s)=>{
                            const {api: i} = m(t.type, t.order.id);
                            i.then(()=>{
                                e(),
                                d(),
                                this.$toast.success({
                                    title: "Cancelled",
                                    message: t.type.toUpperCase() + " bid cancelled"
                                })
                            }
                            ).catch(()=>s())
                        }
                    })
                },
                onWindowOk(t) {
                    const e = this.selInst.type.toUpperCase();
                    this.selInst = null,
                    d(),
                    this.$toast.success({
                        title: t ? "Placed" : "Modified",
                        message: t ? e + " bid placed." : e + " bid modified."
                    })
                },
                onWindowCancel() {
                    this.selInst = null,
                    this.$router.replace({
                        query: {}
                    })
                },
                openWindowbyISIN(t) {
                    this.selInst = this.store.data.find(t=>t.isin === this.$route.query.id)
                },
                statusColor(t) {
                    return T[t] || ""
                }
            },
            watch: {
                $route(t, e) {
                    "gsecs" === t.name && t.query.id && this.openWindowbyISIN(this.$route.query.id)
                }
            }
        }
          , x = k
          , E = Object(C["a"])(x, i, a, !1, null, null, null);
        e["default"] = E.exports
    },
    1304: function(t, e, s) {
        var i = s("cd9d");
        function a(t) {
            return "function" == typeof t ? t : i
        }
        t.exports = a
    },
    "165b": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return p
        }
        ));
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "enterfade"
                }
            }, [t.stickyNotices.length > 0 ? s("div", {
                staticClass: "notice layer-2"
            }, [s("div", {
                staticClass: "notice-wrap",
                class: {
                    layered: t.stickyNotices.length > 1 && !t.showAll
                }
            }, [s("ul", {
                staticClass: "content"
            }, [t.showAll ? t._l(t.stickyNotices, (function(e, i) {
                return s("li", {
                    key: i
                }, [s("span", {
                    domProps: {
                        innerHTML: t._s(t.markdownToHTML(e.content))
                    }
                })])
            }
            )) : [s("li", [s("span", {
                domProps: {
                    innerHTML: t._s(t.markdownToHTML(t.stickyNotices[0].content))
                }
            })])]], 2), t._v(" "), t.stickyNotices.length > 1 ? s("a", {
                staticClass: "expand icon",
                class: {
                    "icon-chevron-down": !t.showAll,
                    "icon-chevron-up": t.showAll
                },
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleShowAll.apply(null, arguments)
                    }
                }
            }) : t._e(), t._v(" "), s("a", {
                staticClass: "notice-stack-1",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleShowAll.apply(null, arguments)
                    }
                }
            }), t._v(" "), s("a", {
                staticClass: "notice-stack-2",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleShowAll.apply(null, arguments)
                    }
                }
            })])]) : t._e()])
        }
          , a = []
          , n = s("2f62")
          , r = s("5105")
          , o = s("025e")
          , l = {
            props: {
                page: {
                    required: !0
                },
                showAll: Boolean
            },
            computed: {
                ...Object(n["d"])(r["b"], ["bulletin"]),
                stickyNotices() {
                    return 0 === this.bulletin.length ? [] : this.bulletin.filter(t=>!!t.is_sticky && (t.scopes.length > 0 && (-1 !== t.scopes.indexOf("kite." + this.$props.page) || -1 !== t.scopes.indexOf("kite.*"))))
                }
            },
            methods: {
                markdownToHTML(t) {
                    return Object(o["k"])(t)
                },
                toggleShowAll() {
                    this.showAll = !this.showAll
                }
            }
        }
          , c = l
          , u = s("0c7c")
          , d = Object(u["a"])(c, i, a, !1, null, null, null)
          , h = d.exports;
        class p {
        }
        p.install = function(t, e) {
            t.component("notice", h)
        }
    },
    "19e9": function(t, e, s) {},
    "1b06": function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return u
        }
        ));
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return i["a"].get(Object(a["a"])("market.pinnedChart"))
        }
        var r = {
            getPinnedChartData: n
        }
          , o = s("025e")
          , l = s("5fb0");
        let c = !0;
        const u = "dashboard"
          , d = {
            pinnedChartData: null,
            pinnedChartDataError: null,
            pinnedChartDataFetchStatus: l["b"].initial
        }
          , h = {
            pinnedChartData: t=>t.pinnedChartData,
            pinnedChartDataError: t=>t.pinnedChartDataError,
            pinnedChartDataFetchStatus: t=>t.pinnedChartDataFetchStatus
        }
          , p = {
            setPinnedChartData(t, e) {
                t.pinnedChartData = e
            },
            setPinnedChartDataError(t, e) {
                t.pinnedChartDataError = e
            },
            setPinnedChartDataFetchStatus(t, e) {
                t.pinnedChartDataFetchStatus = e
            }
        }
          , m = {
            fetchPinnedChartData({commit: t, state: e}, s) {
                t("setPinnedChartDataFetchStatus", l["b"].fetching);
                let i = r.getPinnedChartData(s);
                Object(o["i"])({
                    commit: t,
                    apiPromise: i,
                    data: "setPinnedChartData",
                    status: "setPinnedChartDataFetchStatus",
                    error: "setPinnedChartDataError"
                })
            }
        };
        e["a"] = {
            state: d,
            getters: h,
            mutations: p,
            actions: m,
            namespaced: c
        }
    },
    2133: function(t, e, s) {
        "use strict";
        s("19e9")
    },
    "242e": function(t, e, s) {
        var i = s("72af")
          , a = s("ec69");
        function n(t, e) {
            return t && i(t, e, a)
        }
        t.exports = n
    },
    2799: function(t, e, s) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "holdings-treemap"
            }, [t.hideStats ? t._e() : s("div", {
                staticClass: "row stats"
            }, [s("div", {
                staticClass: "five columns values"
            }, [s("div", {
                staticClass: "row"
            }, [s("h2", {
                staticClass: "value"
            }, [t._v(t._s(t._f("inrFormat")(t.formattedData.totalInvestment, 2)))]), t._v(" "), s("div", {
                staticClass: "label"
            }, [t._v("Investment")])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("h2", {
                staticClass: "value"
            }, [t._v(t._s(t._f("inrFormat")(t.formattedData.totalValue, 2)))]), t._v(" "), s("div", {
                staticClass: "label"
            }, [t._v("Current")])])]), t._v(" "), s("div", {
                staticClass: "seven columns pnl text-right"
            }, [s("h1", {
                staticClass: "value",
                class: {
                    "text-green": t.formattedData.totalPnl > 0,
                    "text-red": t.formattedData.totalPnl < 0
                }
            }, [t.formattedData.totalPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v(t._s(t._f("inrFormat")(t.formattedData.totalPnl, 2)) + "\n\t\t\t")]), t._v(" "), 0 != t.formattedData.totalInvestment ? s("span", {
                class: {
                    "text-green": t.formattedData.totalPnl > 0,
                    "text-red": t.formattedData.totalPnl < 0
                }
            }, [t.formattedData.totalPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")((t.formattedData.totalValue - t.formattedData.totalInvestment) / t.formattedData.totalInvestment * 100, 2)) + "%\n\t\t\t")]) : t._e(), t._v(" "), s("div", {
                staticClass: "label"
            }, [t._v("P&L")])])]), t._v(" "), s("div", {
                staticClass: "chart"
            }, [s("div", {
                staticClass: "canvas"
            }), t._v(" "), s("form", [s("su-radio-group", {
                model: {
                    value: t.treeType,
                    callback: function(e) {
                        t.treeType = e
                    },
                    expression: "treeType"
                }
            }, t._l(t.treeTypes, (function(e, i) {
                return s("su-radio", {
                    key: i,
                    attrs: {
                        label: e.label,
                        value: e.val
                    }
                }, [t._v(t._s(e.label))])
            }
            )), 1)], 1)]), t._v(" "), t.data && t.data.length > t.maxItems || t.rawData && t.rawData.length > t.maxItems ? s("div", {
                staticClass: "disclaimer text-right"
            }, [t._v("\n\t\t* Top " + t._s(t.maxItems) + " holdings by investment value are shown.\n\t")]) : t._e()])
        }
          , a = []
          , n = s("e48b")
          , r = {
            value: function() {}
        };
        function o() {
            for (var t, e = 0, s = arguments.length, i = {}; e < s; ++e) {
                if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t))
                    throw new Error("illegal type: " + t);
                i[t] = []
            }
            return new l(i)
        }
        function l(t) {
            this._ = t
        }
        function c(t, e) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var s = ""
                  , i = t.indexOf(".");
                if (i >= 0 && (s = t.slice(i + 1),
                t = t.slice(0, i)),
                t && !e.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: s
                }
            }
            ))
        }
        function u(t, e) {
            for (var s, i = 0, a = t.length; i < a; ++i)
                if ((s = t[i]).name === e)
                    return s.value
        }
        function d(t, e, s) {
            for (var i = 0, a = t.length; i < a; ++i)
                if (t[i].name === e) {
                    t[i] = r,
                    t = t.slice(0, i).concat(t.slice(i + 1));
                    break
                }
            return null != s && t.push({
                name: e,
                value: s
            }),
            t
        }
        l.prototype = o.prototype = {
            constructor: l,
            on: function(t, e) {
                var s, i = this._, a = c(t + "", i), n = -1, r = a.length;
                if (!(arguments.length < 2)) {
                    if (null != e && "function" !== typeof e)
                        throw new Error("invalid callback: " + e);
                    while (++n < r)
                        if (s = (t = a[n]).type)
                            i[s] = d(i[s], t.name, e);
                        else if (null == e)
                            for (s in i)
                                i[s] = d(i[s], t.name, null);
                    return this
                }
                while (++n < r)
                    if ((s = (t = a[n]).type) && (s = u(i[s], t.name)))
                        return s
            },
            copy: function() {
                var t = {}
                  , e = this._;
                for (var s in e)
                    t[s] = e[s].slice();
                return new l(t)
            },
            call: function(t, e) {
                if ((s = arguments.length - 2) > 0)
                    for (var s, i, a = new Array(s), n = 0; n < s; ++n)
                        a[n] = arguments[n + 2];
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (i = this._[t],
                n = 0,
                s = i.length; n < s; ++n)
                    i[n].value.apply(e, a)
            },
            apply: function(t, e, s) {
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (var i = this._[t], a = 0, n = i.length; a < n; ++a)
                    i[a].value.apply(e, s)
            }
        };
        var h, p, m = o, v = 0, _ = 0, g = 0, f = 1e3, b = 0, C = 0, y = 0, w = "object" === typeof performance && performance.now ? performance : Date, T = "object" === typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        }
        ;
        function k() {
            return C || (T(x),
            C = w.now() + y)
        }
        function x() {
            C = 0
        }
        function E() {
            this._call = this._time = this._next = null
        }
        function S(t, e, s) {
            var i = new E;
            return i.restart(t, e, s),
            i
        }
        function P() {
            k(),
            ++v;
            var t, e = h;
            while (e)
                (t = C - e._time) >= 0 && e._call.call(null, t),
                e = e._next;
            --v
        }
        function A() {
            C = (b = w.now()) + y,
            v = _ = 0;
            try {
                P()
            } finally {
                v = 0,
                O(),
                C = 0
            }
        }
        function I() {
            var t = w.now()
              , e = t - b;
            e > f && (y -= e,
            b = t)
        }
        function O() {
            var t, e, s = h, i = 1 / 0;
            while (s)
                s._call ? (i > s._time && (i = s._time),
                t = s,
                s = s._next) : (e = s._next,
                s._next = null,
                s = t ? t._next = e : h = e);
            p = t,
            D(i)
        }
        function D(t) {
            if (!v) {
                _ && (_ = clearTimeout(_));
                var e = t - C;
                e > 24 ? (t < 1 / 0 && (_ = setTimeout(A, t - w.now() - y)),
                g && (g = clearInterval(g))) : (g || (b = w.now(),
                g = setInterval(I, f)),
                v = 1,
                T(A))
            }
        }
        E.prototype = S.prototype = {
            constructor: E,
            restart: function(t, e, s) {
                if ("function" !== typeof t)
                    throw new TypeError("callback is not a function");
                s = (null == s ? k() : +s) + (null == e ? 0 : +e),
                this._next || p === this || (p ? p._next = this : h = this,
                p = this),
                this._call = t,
                this._time = s,
                D()
            },
            stop: function() {
                this._call && (this._call = null,
                this._time = 1 / 0,
                D())
            }
        };
        var M = function(t, e, s) {
            var i = new E;
            return e = null == e ? 0 : +e,
            i.restart((function(s) {
                i.stop(),
                t(s + e)
            }
            ), e, s),
            i
        }
          , N = m("start", "end", "cancel", "interrupt")
          , R = []
          , L = 0
          , $ = 1
          , U = 2
          , F = 3
          , j = 4
          , H = 5
          , B = 6
          , z = function(t, e, s, i, a, n) {
            var r = t.__transition;
            if (r) {
                if (s in r)
                    return
            } else
                t.__transition = {};
            G(t, s, {
                name: e,
                index: i,
                group: a,
                on: N,
                tween: R,
                time: n.time,
                delay: n.delay,
                duration: n.duration,
                ease: n.ease,
                timer: null,
                state: L
            })
        };
        function V(t, e) {
            var s = W(t, e);
            if (s.state > L)
                throw new Error("too late; already scheduled");
            return s
        }
        function q(t, e) {
            var s = W(t, e);
            if (s.state > F)
                throw new Error("too late; already running");
            return s
        }
        function W(t, e) {
            var s = t.__transition;
            if (!s || !(s = s[e]))
                throw new Error("transition not found");
            return s
        }
        function G(t, e, s) {
            var i, a = t.__transition;
            function n(t) {
                s.state = $,
                s.timer.restart(r, s.delay, s.time),
                s.delay <= t && r(t - s.delay)
            }
            function r(n) {
                var c, u, d, h;
                if (s.state !== $)
                    return l();
                for (c in a)
                    if (h = a[c],
                    h.name === s.name) {
                        if (h.state === F)
                            return M(r);
                        h.state === j ? (h.state = B,
                        h.timer.stop(),
                        h.on.call("interrupt", t, t.__data__, h.index, h.group),
                        delete a[c]) : +c < e && (h.state = B,
                        h.timer.stop(),
                        h.on.call("cancel", t, t.__data__, h.index, h.group),
                        delete a[c])
                    }
                if (M((function() {
                    s.state === F && (s.state = j,
                    s.timer.restart(o, s.delay, s.time),
                    o(n))
                }
                )),
                s.state = U,
                s.on.call("start", t, t.__data__, s.index, s.group),
                s.state === U) {
                    for (s.state = F,
                    i = new Array(d = s.tween.length),
                    c = 0,
                    u = -1; c < d; ++c)
                        (h = s.tween[c].value.call(t, t.__data__, s.index, s.group)) && (i[++u] = h);
                    i.length = u + 1
                }
            }
            function o(e) {
                var a = e < s.duration ? s.ease.call(null, e / s.duration) : (s.timer.restart(l),
                s.state = H,
                1)
                  , n = -1
                  , r = i.length;
                while (++n < r)
                    i[n].call(t, a);
                s.state === H && (s.on.call("end", t, t.__data__, s.index, s.group),
                l())
            }
            function l() {
                for (var i in s.state = B,
                s.timer.stop(),
                delete a[e],
                a)
                    return;
                delete t.__transition
            }
            a[e] = s,
            s.timer = S(n, 0, s.time)
        }
        var Y, Q, K, X, Z = function(t, e) {
            var s, i, a, n = t.__transition, r = !0;
            if (n) {
                for (a in e = null == e ? null : e + "",
                n)
                    (s = n[a]).name === e ? (i = s.state > U && s.state < H,
                    s.state = B,
                    s.timer.stop(),
                    s.on.call(i ? "interrupt" : "cancel", t, t.__data__, s.index, s.group),
                    delete n[a]) : r = !1;
                r && delete t.__transition
            }
        }, J = function(t) {
            return this.each((function() {
                Z(this, t)
            }
            ))
        }, tt = s("e317"), et = 180 / Math.PI, st = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        }, it = function(t, e, s, i, a, n) {
            var r, o, l;
            return (r = Math.sqrt(t * t + e * e)) && (t /= r,
            e /= r),
            (l = t * s + e * i) && (s -= t * l,
            i -= e * l),
            (o = Math.sqrt(s * s + i * i)) && (s /= o,
            i /= o,
            l /= o),
            t * i < e * s && (t = -t,
            e = -e,
            l = -l,
            r = -r),
            {
                translateX: a,
                translateY: n,
                rotate: Math.atan2(e, t) * et,
                skewX: Math.atan(l) * et,
                scaleX: r,
                scaleY: o
            }
        };
        function at(t) {
            return "none" === t ? st : (Y || (Y = document.createElement("DIV"),
            Q = document.documentElement,
            K = document.defaultView),
            Y.style.transform = t,
            t = K.getComputedStyle(Q.appendChild(Y), null).getPropertyValue("transform"),
            Q.removeChild(Y),
            t = t.slice(7, -1).split(","),
            it(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }
        function nt(t) {
            return null == t ? st : (X || (X = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            X.setAttribute("transform", t),
            (t = X.transform.baseVal.consolidate()) ? (t = t.matrix,
            it(t.a, t.b, t.c, t.d, t.e, t.f)) : st)
        }
        function rt(t, e, s, i) {
            function a(t) {
                return t.length ? t.pop() + " " : ""
            }
            function n(t, i, a, n, r, o) {
                if (t !== a || i !== n) {
                    var l = r.push("translate(", null, e, null, s);
                    o.push({
                        i: l - 4,
                        x: Object(tt["a"])(t, a)
                    }, {
                        i: l - 2,
                        x: Object(tt["a"])(i, n)
                    })
                } else
                    (a || n) && r.push("translate(" + a + e + n + s)
            }
            function r(t, e, s, n) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                n.push({
                    i: s.push(a(s) + "rotate(", null, i) - 2,
                    x: Object(tt["a"])(t, e)
                })) : e && s.push(a(s) + "rotate(" + e + i)
            }
            function o(t, e, s, n) {
                t !== e ? n.push({
                    i: s.push(a(s) + "skewX(", null, i) - 2,
                    x: Object(tt["a"])(t, e)
                }) : e && s.push(a(s) + "skewX(" + e + i)
            }
            function l(t, e, s, i, n, r) {
                if (t !== s || e !== i) {
                    var o = n.push(a(n) + "scale(", null, ",", null, ")");
                    r.push({
                        i: o - 4,
                        x: Object(tt["a"])(t, s)
                    }, {
                        i: o - 2,
                        x: Object(tt["a"])(e, i)
                    })
                } else
                    1 === s && 1 === i || n.push(a(n) + "scale(" + s + "," + i + ")")
            }
            return function(e, s) {
                var i = []
                  , a = [];
                return e = t(e),
                s = t(s),
                n(e.translateX, e.translateY, s.translateX, s.translateY, i, a),
                r(e.rotate, s.rotate, i, a),
                o(e.skewX, s.skewX, i, a),
                l(e.scaleX, e.scaleY, s.scaleX, s.scaleY, i, a),
                e = s = null,
                function(t) {
                    var e, s = -1, n = a.length;
                    while (++s < n)
                        i[(e = a[s]).i] = e.x(t);
                    return i.join("")
                }
            }
        }
        var ot = rt(at, "px, ", "px)", "deg)")
          , lt = rt(nt, ", ", ")", ")")
          , ct = s("6cd4");
        function ut(t, e) {
            var s, i;
            return function() {
                var a = q(this, t)
                  , n = a.tween;
                if (n !== s) {
                    i = s = n;
                    for (var r = 0, o = i.length; r < o; ++r)
                        if (i[r].name === e) {
                            i = i.slice(),
                            i.splice(r, 1);
                            break
                        }
                }
                a.tween = i
            }
        }
        function dt(t, e, s) {
            var i, a;
            if ("function" !== typeof s)
                throw new Error;
            return function() {
                var n = q(this, t)
                  , r = n.tween;
                if (r !== i) {
                    a = (i = r).slice();
                    for (var o = {
                        name: e,
                        value: s
                    }, l = 0, c = a.length; l < c; ++l)
                        if (a[l].name === e) {
                            a[l] = o;
                            break
                        }
                    l === c && a.push(o)
                }
                n.tween = a
            }
        }
        var ht = function(t, e) {
            var s = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var i, a = W(this.node(), s).tween, n = 0, r = a.length; n < r; ++n)
                    if ((i = a[n]).name === t)
                        return i.value;
                return null
            }
            return this.each((null == e ? ut : dt)(s, t, e))
        };
        function pt(t, e, s) {
            var i = t._id;
            return t.each((function() {
                var t = q(this, i);
                (t.value || (t.value = {}))[e] = s.apply(this, arguments)
            }
            )),
            function(t) {
                return W(t, i).value[e]
            }
        }
        var mt = s("166a")
          , vt = s("e360")
          , _t = s("90ef")
          , gt = function(t, e) {
            var s;
            return ("number" === typeof e ? tt["a"] : e instanceof mt["e"] ? vt["a"] : (s = Object(mt["e"])(e)) ? (e = s,
            vt["a"]) : _t["a"])(t, e)
        };
        function ft(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function bt(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function Ct(t, e, s) {
            var i, a, n = s + "";
            return function() {
                var r = this.getAttribute(t);
                return r === n ? null : r === i ? a : a = e(i = r, s)
            }
        }
        function yt(t, e, s) {
            var i, a, n = s + "";
            return function() {
                var r = this.getAttributeNS(t.space, t.local);
                return r === n ? null : r === i ? a : a = e(i = r, s)
            }
        }
        function wt(t, e, s) {
            var i, a, n;
            return function() {
                var r, o, l = s(this);
                if (null != l)
                    return r = this.getAttribute(t),
                    o = l + "",
                    r === o ? null : r === i && o === a ? n : (a = o,
                    n = e(i = r, l));
                this.removeAttribute(t)
            }
        }
        function Tt(t, e, s) {
            var i, a, n;
            return function() {
                var r, o, l = s(this);
                if (null != l)
                    return r = this.getAttributeNS(t.space, t.local),
                    o = l + "",
                    r === o ? null : r === i && o === a ? n : (a = o,
                    n = e(i = r, l));
                this.removeAttributeNS(t.space, t.local)
            }
        }
        var kt = function(t, e) {
            var s = Object(ct["a"])(t)
              , i = "transform" === s ? lt : gt;
            return this.attrTween(t, "function" === typeof e ? (s.local ? Tt : wt)(s, i, pt(this, "attr." + t, e)) : null == e ? (s.local ? bt : ft)(s) : (s.local ? yt : Ct)(s, i, e))
        };
        function xt(t, e) {
            return function(s) {
                this.setAttribute(t, e.call(this, s))
            }
        }
        function Et(t, e) {
            return function(s) {
                this.setAttributeNS(t.space, t.local, e.call(this, s))
            }
        }
        function St(t, e) {
            var s, i;
            function a() {
                var a = e.apply(this, arguments);
                return a !== i && (s = (i = a) && Et(t, a)),
                s
            }
            return a._value = e,
            a
        }
        function Pt(t, e) {
            var s, i;
            function a() {
                var a = e.apply(this, arguments);
                return a !== i && (s = (i = a) && xt(t, a)),
                s
            }
            return a._value = e,
            a
        }
        var At = function(t, e) {
            var s = "attr." + t;
            if (arguments.length < 2)
                return (s = this.tween(s)) && s._value;
            if (null == e)
                return this.tween(s, null);
            if ("function" !== typeof e)
                throw new Error;
            var i = Object(ct["a"])(t);
            return this.tween(s, (i.local ? St : Pt)(i, e))
        };
        function It(t, e) {
            return function() {
                V(this, t).delay = +e.apply(this, arguments)
            }
        }
        function Ot(t, e) {
            return e = +e,
            function() {
                V(this, t).delay = e
            }
        }
        var Dt = function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" === typeof t ? It : Ot)(e, t)) : W(this.node(), e).delay
        };
        function Mt(t, e) {
            return function() {
                q(this, t).duration = +e.apply(this, arguments)
            }
        }
        function Nt(t, e) {
            return e = +e,
            function() {
                q(this, t).duration = e
            }
        }
        var Rt = function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" === typeof t ? Mt : Nt)(e, t)) : W(this.node(), e).duration
        };
        function Lt(t, e) {
            if ("function" !== typeof e)
                throw new Error;
            return function() {
                q(this, t).ease = e
            }
        }
        var $t = function(t) {
            var e = this._id;
            return arguments.length ? this.each(Lt(e, t)) : W(this.node(), e).ease
        }
          , Ut = s("0a78")
          , Ft = function(t) {
            "function" !== typeof t && (t = Object(Ut["a"])(t));
            for (var e = this._groups, s = e.length, i = new Array(s), a = 0; a < s; ++a)
                for (var n, r = e[a], o = r.length, l = i[a] = [], c = 0; c < o; ++c)
                    (n = r[c]) && t.call(n, n.__data__, c, r) && l.push(n);
            return new ge(i,this._parents,this._name,this._id)
        }
          , jt = function(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var e = this._groups, s = t._groups, i = e.length, a = s.length, n = Math.min(i, a), r = new Array(i), o = 0; o < n; ++o)
                for (var l, c = e[o], u = s[o], d = c.length, h = r[o] = new Array(d), p = 0; p < d; ++p)
                    (l = c[p] || u[p]) && (h[p] = l);
            for (; o < i; ++o)
                r[o] = e[o];
            return new ge(r,this._parents,this._name,this._id)
        };
        function Ht(t) {
            return (t + "").trim().split(/^|\s+/).every((function(t) {
                var e = t.indexOf(".");
                return e >= 0 && (t = t.slice(0, e)),
                !t || "start" === t
            }
            ))
        }
        function Bt(t, e, s) {
            var i, a, n = Ht(e) ? V : q;
            return function() {
                var r = n(this, t)
                  , o = r.on;
                o !== i && (a = (i = o).copy()).on(e, s),
                r.on = a
            }
        }
        var zt = function(t, e) {
            var s = this._id;
            return arguments.length < 2 ? W(this.node(), s).on.on(t) : this.each(Bt(s, t, e))
        };
        function Vt(t) {
            return function() {
                var e = this.parentNode;
                for (var s in this.__transition)
                    if (+s !== t)
                        return;
                e && e.removeChild(this)
            }
        }
        var qt = function() {
            return this.on("end.remove", Vt(this._id))
        }
          , Wt = s("6fd3")
          , Gt = function(t) {
            var e = this._name
              , s = this._id;
            "function" !== typeof t && (t = Object(Wt["a"])(t));
            for (var i = this._groups, a = i.length, n = new Array(a), r = 0; r < a; ++r)
                for (var o, l, c = i[r], u = c.length, d = n[r] = new Array(u), h = 0; h < u; ++h)
                    (o = c[h]) && (l = t.call(o, o.__data__, h, c)) && ("__data__"in o && (l.__data__ = o.__data__),
                    d[h] = l,
                    z(d[h], e, s, h, d, W(o, s)));
            return new ge(n,this._parents,e,s)
        }
          , Yt = s("4230")
          , Qt = function(t) {
            var e = this._name
              , s = this._id;
            "function" !== typeof t && (t = Object(Yt["a"])(t));
            for (var i = this._groups, a = i.length, n = [], r = [], o = 0; o < a; ++o)
                for (var l, c = i[o], u = c.length, d = 0; d < u; ++d)
                    if (l = c[d]) {
                        for (var h, p = t.call(l, l.__data__, d, c), m = W(l, s), v = 0, _ = p.length; v < _; ++v)
                            (h = p[v]) && z(h, e, s, v, p, m);
                        n.push(p),
                        r.push(l)
                    }
            return new ge(n,r,e,s)
        }
          , Kt = n["b"].prototype.constructor
          , Xt = function() {
            return new Kt(this._groups,this._parents)
        }
          , Zt = s("364b");
        function Jt(t, e) {
            var s, i, a;
            return function() {
                var n = Object(Zt["b"])(this, t)
                  , r = (this.style.removeProperty(t),
                Object(Zt["b"])(this, t));
                return n === r ? null : n === s && r === i ? a : a = e(s = n, i = r)
            }
        }
        function te(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function ee(t, e, s) {
            var i, a, n = s + "";
            return function() {
                var r = Object(Zt["b"])(this, t);
                return r === n ? null : r === i ? a : a = e(i = r, s)
            }
        }
        function se(t, e, s) {
            var i, a, n;
            return function() {
                var r = Object(Zt["b"])(this, t)
                  , o = s(this)
                  , l = o + "";
                return null == o && (this.style.removeProperty(t),
                l = o = Object(Zt["b"])(this, t)),
                r === l ? null : r === i && l === a ? n : (a = l,
                n = e(i = r, o))
            }
        }
        function ie(t, e) {
            var s, i, a, n, r = "style." + e, o = "end." + r;
            return function() {
                var l = q(this, t)
                  , c = l.on
                  , u = null == l.value[r] ? n || (n = te(e)) : void 0;
                c === s && a === u || (i = (s = c).copy()).on(o, a = u),
                l.on = i
            }
        }
        var ae = function(t, e, s) {
            var i = "transform" === (t += "") ? ot : gt;
            return null == e ? this.styleTween(t, Jt(t, i)).on("end.style." + t, te(t)) : "function" === typeof e ? this.styleTween(t, se(t, i, pt(this, "style." + t, e))).each(ie(this._id, t)) : this.styleTween(t, ee(t, i, e), s).on("end.style." + t, null)
        };
        function ne(t, e, s) {
            return function(i) {
                this.style.setProperty(t, e.call(this, i), s)
            }
        }
        function re(t, e, s) {
            var i, a;
            function n() {
                var n = e.apply(this, arguments);
                return n !== a && (i = (a = n) && ne(t, n, s)),
                i
            }
            return n._value = e,
            n
        }
        var oe = function(t, e, s) {
            var i = "style." + (t += "");
            if (arguments.length < 2)
                return (i = this.tween(i)) && i._value;
            if (null == e)
                return this.tween(i, null);
            if ("function" !== typeof e)
                throw new Error;
            return this.tween(i, re(t, e, null == s ? "" : s))
        };
        function le(t) {
            return function() {
                this.textContent = t
            }
        }
        function ce(t) {
            return function() {
                var e = t(this);
                this.textContent = null == e ? "" : e
            }
        }
        var ue = function(t) {
            return this.tween("text", "function" === typeof t ? ce(pt(this, "text", t)) : le(null == t ? "" : t + ""))
        };
        function de(t) {
            return function(e) {
                this.textContent = t.call(this, e)
            }
        }
        function he(t) {
            var e, s;
            function i() {
                var i = t.apply(this, arguments);
                return i !== s && (e = (s = i) && de(i)),
                e
            }
            return i._value = t,
            i
        }
        var pe = function(t) {
            var e = "text";
            if (arguments.length < 1)
                return (e = this.tween(e)) && e._value;
            if (null == t)
                return this.tween(e, null);
            if ("function" !== typeof t)
                throw new Error;
            return this.tween(e, he(t))
        }
          , me = function() {
            for (var t = this._name, e = this._id, s = be(), i = this._groups, a = i.length, n = 0; n < a; ++n)
                for (var r, o = i[n], l = o.length, c = 0; c < l; ++c)
                    if (r = o[c]) {
                        var u = W(r, e);
                        z(r, t, s, c, o, {
                            time: u.time + u.delay + u.duration,
                            delay: 0,
                            duration: u.duration,
                            ease: u.ease
                        })
                    }
            return new ge(i,this._parents,t,s)
        }
          , ve = function() {
            var t, e, s = this, i = s._id, a = s.size();
            return new Promise((function(n, r) {
                var o = {
                    value: r
                }
                  , l = {
                    value: function() {
                        0 === --a && n()
                    }
                };
                s.each((function() {
                    var s = q(this, i)
                      , a = s.on;
                    a !== t && (e = (t = a).copy(),
                    e._.cancel.push(o),
                    e._.interrupt.push(o),
                    e._.end.push(l)),
                    s.on = e
                }
                ))
            }
            ))
        }
          , _e = 0;
        function ge(t, e, s, i) {
            this._groups = t,
            this._parents = e,
            this._name = s,
            this._id = i
        }
        function fe(t) {
            return Object(n["b"])().transition(t)
        }
        function be() {
            return ++_e
        }
        var Ce = n["b"].prototype;
        function ye(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        ge.prototype = fe.prototype = {
            constructor: ge,
            select: Gt,
            selectAll: Qt,
            filter: Ft,
            merge: jt,
            selection: Xt,
            transition: me,
            call: Ce.call,
            nodes: Ce.nodes,
            node: Ce.node,
            size: Ce.size,
            empty: Ce.empty,
            each: Ce.each,
            on: zt,
            attr: kt,
            attrTween: At,
            style: ae,
            styleTween: oe,
            text: ue,
            textTween: pe,
            remove: qt,
            tween: ht,
            delay: Dt,
            duration: Rt,
            ease: $t,
            end: ve
        };
        var we = {
            time: null,
            delay: 0,
            duration: 250,
            ease: ye
        };
        function Te(t, e) {
            var s;
            while (!(s = t.__transition) || !(s = s[e]))
                if (!(t = t.parentNode))
                    return we.time = k(),
                    we;
            return s
        }
        var ke = function(t) {
            var e, s;
            t instanceof ge ? (e = t._id,
            t = t._name) : (e = be(),
            (s = we).time = k(),
            t = null == t ? null : t + "");
            for (var i = this._groups, a = i.length, n = 0; n < a; ++n)
                for (var r, o = i[n], l = o.length, c = 0; c < l; ++c)
                    (r = o[c]) && z(r, t, e, c, o, s || Te(r, e));
            return new ge(i,this._parents,t,e)
        };
        n["b"].prototype.interrupt = J,
        n["b"].prototype.transition = ke;
        var xe = s("41cb")
          , Ee = s("00a5")
          , Se = s("e236");
        function Pe(t) {
            var e = 0
              , s = t.children
              , i = s && s.length;
            if (i)
                while (--i >= 0)
                    e += s[i].value;
            else
                e = 1;
            t.value = e
        }
        var Ae = function() {
            return this.eachAfter(Pe)
        }
          , Ie = function(t) {
            var e, s, i, a, n = this, r = [n];
            do {
                e = r.reverse(),
                r = [];
                while (n = e.pop())
                    if (t(n),
                    s = n.children,
                    s)
                        for (i = 0,
                        a = s.length; i < a; ++i)
                            r.push(s[i])
            } while (r.length);
            return this
        }
          , Oe = function(t) {
            var e, s, i = this, a = [i];
            while (i = a.pop())
                if (t(i),
                e = i.children,
                e)
                    for (s = e.length - 1; s >= 0; --s)
                        a.push(e[s]);
            return this
        }
          , De = function(t) {
            var e, s, i, a = this, n = [a], r = [];
            while (a = n.pop())
                if (r.push(a),
                e = a.children,
                e)
                    for (s = 0,
                    i = e.length; s < i; ++s)
                        n.push(e[s]);
            while (a = r.pop())
                t(a);
            return this
        }
          , Me = function(t) {
            return this.eachAfter((function(e) {
                var s = +t(e.data) || 0
                  , i = e.children
                  , a = i && i.length;
                while (--a >= 0)
                    s += i[a].value;
                e.value = s
            }
            ))
        }
          , Ne = function(t) {
            return this.eachBefore((function(e) {
                e.children && e.children.sort(t)
            }
            ))
        }
          , Re = function(t) {
            var e = this
              , s = Le(e, t)
              , i = [e];
            while (e !== s)
                e = e.parent,
                i.push(e);
            var a = i.length;
            while (t !== s)
                i.splice(a, 0, t),
                t = t.parent;
            return i
        };
        function Le(t, e) {
            if (t === e)
                return t;
            var s = t.ancestors()
              , i = e.ancestors()
              , a = null;
            t = s.pop(),
            e = i.pop();
            while (t === e)
                a = t,
                t = s.pop(),
                e = i.pop();
            return a
        }
        var $e = function() {
            var t = this
              , e = [t];
            while (t = t.parent)
                e.push(t);
            return e
        }
          , Ue = function() {
            var t = [];
            return this.each((function(e) {
                t.push(e)
            }
            )),
            t
        }
          , Fe = function() {
            var t = [];
            return this.eachBefore((function(e) {
                e.children || t.push(e)
            }
            )),
            t
        }
          , je = function() {
            var t = this
              , e = [];
            return t.each((function(s) {
                s !== t && e.push({
                    source: s.parent,
                    target: s
                })
            }
            )),
            e
        };
        function He(t, e) {
            var s, i, a, n, r, o = new We(t), l = +t.value && (o.value = t.value), c = [o];
            null == e && (e = ze);
            while (s = c.pop())
                if (l && (s.value = +s.data.value),
                (a = e(s.data)) && (r = a.length))
                    for (s.children = new Array(r),
                    n = r - 1; n >= 0; --n)
                        c.push(i = s.children[n] = new We(a[n])),
                        i.parent = s,
                        i.depth = s.depth + 1;
            return o.eachBefore(qe)
        }
        function Be() {
            return He(this).eachBefore(Ve)
        }
        function ze(t) {
            return t.children
        }
        function Ve(t) {
            t.data = t.data.data
        }
        function qe(t) {
            var e = 0;
            do {
                t.height = e
            } while ((t = t.parent) && t.height < ++e)
        }
        function We(t) {
            this.data = t,
            this.depth = this.height = 0,
            this.parent = null
        }
        We.prototype = He.prototype = {
            constructor: We,
            count: Ae,
            each: Ie,
            eachAfter: De,
            eachBefore: Oe,
            sum: Me,
            sort: Ne,
            path: Re,
            ancestors: $e,
            descendants: Ue,
            leaves: Fe,
            links: je,
            copy: Be
        };
        Array.prototype.slice;
        function Ge(t) {
            if ("function" !== typeof t)
                throw new Error;
            return t
        }
        function Ye() {
            return 0
        }
        var Qe = function(t) {
            return function() {
                return t
            }
        };
        var Ke = function(t) {
            t.x0 = Math.round(t.x0),
            t.y0 = Math.round(t.y0),
            t.x1 = Math.round(t.x1),
            t.y1 = Math.round(t.y1)
        }
          , Xe = function(t, e, s, i, a) {
            var n, r = t.children, o = -1, l = r.length, c = t.value && (i - e) / t.value;
            while (++o < l)
                n = r[o],
                n.y0 = s,
                n.y1 = a,
                n.x0 = e,
                n.x1 = e += n.value * c
        };
        function Ze(t, e) {
            this._ = t,
            this.parent = null,
            this.children = null,
            this.A = null,
            this.a = this,
            this.z = 0,
            this.m = 0,
            this.c = 0,
            this.s = 0,
            this.t = null,
            this.i = e
        }
        Ze.prototype = Object.create(We.prototype);
        var Je = function(t, e, s, i, a) {
            var n, r = t.children, o = -1, l = r.length, c = t.value && (a - s) / t.value;
            while (++o < l)
                n = r[o],
                n.x0 = e,
                n.x1 = i,
                n.y0 = s,
                n.y1 = s += n.value * c
        }
          , ts = (1 + Math.sqrt(5)) / 2;
        function es(t, e, s, i, a, n) {
            var r, o, l, c, u, d, h, p, m, v, _, g = [], f = e.children, b = 0, C = 0, y = f.length, w = e.value;
            while (b < y) {
                l = a - s,
                c = n - i;
                do {
                    u = f[C++].value
                } while (!u && C < y);
                for (d = h = u,
                v = Math.max(c / l, l / c) / (w * t),
                _ = u * u * v,
                m = Math.max(h / _, _ / d); C < y; ++C) {
                    if (u += o = f[C].value,
                    o < d && (d = o),
                    o > h && (h = o),
                    _ = u * u * v,
                    p = Math.max(h / _, _ / d),
                    p > m) {
                        u -= o;
                        break
                    }
                    m = p
                }
                g.push(r = {
                    value: u,
                    dice: l < c,
                    children: f.slice(b, C)
                }),
                r.dice ? Xe(r, s, i, a, w ? i += c * u / w : n) : Je(r, s, i, w ? s += l * u / w : a, n),
                w -= u,
                b = C
            }
            return g
        }
        var ss, is = function t(e) {
            function s(t, s, i, a, n) {
                es(e, t, s, i, a, n)
            }
            return s.ratio = function(e) {
                return t((e = +e) > 1 ? e : 1)
            }
            ,
            s
        }(ts), as = function() {
            var t = is
              , e = !1
              , s = 1
              , i = 1
              , a = [0]
              , n = Ye
              , r = Ye
              , o = Ye
              , l = Ye
              , c = Ye;
            function u(t) {
                return t.x0 = t.y0 = 0,
                t.x1 = s,
                t.y1 = i,
                t.eachBefore(d),
                a = [0],
                e && t.eachBefore(Ke),
                t
            }
            function d(e) {
                var s = a[e.depth]
                  , i = e.x0 + s
                  , u = e.y0 + s
                  , d = e.x1 - s
                  , h = e.y1 - s;
                d < i && (i = d = (i + d) / 2),
                h < u && (u = h = (u + h) / 2),
                e.x0 = i,
                e.y0 = u,
                e.x1 = d,
                e.y1 = h,
                e.children && (s = a[e.depth + 1] = n(e) / 2,
                i += c(e) - s,
                u += r(e) - s,
                d -= o(e) - s,
                h -= l(e) - s,
                d < i && (i = d = (i + d) / 2),
                h < u && (u = h = (u + h) / 2),
                t(e, i, u, d, h))
            }
            return u.round = function(t) {
                return arguments.length ? (e = !!t,
                u) : e
            }
            ,
            u.size = function(t) {
                return arguments.length ? (s = +t[0],
                i = +t[1],
                u) : [s, i]
            }
            ,
            u.tile = function(e) {
                return arguments.length ? (t = Ge(e),
                u) : t
            }
            ,
            u.padding = function(t) {
                return arguments.length ? u.paddingInner(t).paddingOuter(t) : u.paddingInner()
            }
            ,
            u.paddingInner = function(t) {
                return arguments.length ? (n = "function" === typeof t ? t : Qe(+t),
                u) : n
            }
            ,
            u.paddingOuter = function(t) {
                return arguments.length ? u.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : u.paddingTop()
            }
            ,
            u.paddingTop = function(t) {
                return arguments.length ? (r = "function" === typeof t ? t : Qe(+t),
                u) : r
            }
            ,
            u.paddingRight = function(t) {
                return arguments.length ? (o = "function" === typeof t ? t : Qe(+t),
                u) : o
            }
            ,
            u.paddingBottom = function(t) {
                return arguments.length ? (l = "function" === typeof t ? t : Qe(+t),
                u) : l
            }
            ,
            u.paddingLeft = function(t) {
                return arguments.length ? (c = "function" === typeof t ? t : Qe(+t),
                u) : c
            }
            ,
            u
        }, ns = (function t(e) {
            function s(t, s, i, a, n) {
                if ((r = t._squarify) && r.ratio === e) {
                    var r, o, l, c, u, d = -1, h = r.length, p = t.value;
                    while (++d < h) {
                        for (o = r[d],
                        l = o.children,
                        c = o.value = 0,
                        u = l.length; c < u; ++c)
                            o.value += l[c].value;
                        o.dice ? Xe(o, s, i, a, i += (n - i) * o.value / p) : Je(o, s, i, s += (a - s) * o.value / p, n),
                        p -= o.value
                    }
                } else
                    t._squarify = r = es(e, t, s, i, a, n),
                    r.ratio = e
            }
            return s.ratio = function(e) {
                return t((e = +e) > 1 ? e : 1)
            }
            ,
            s
        }(ts),
        function(t, e) {
            if ((s = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var s, i = t.slice(0, s);
            return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(s + 1)]
        }
        ), rs = function(t) {
            return t = ns(Math.abs(t)),
            t ? t[1] : NaN
        }, os = function(t, e) {
            return function(s, i) {
                var a = s.length
                  , n = []
                  , r = 0
                  , o = t[0]
                  , l = 0;
                while (a > 0 && o > 0) {
                    if (l + o + 1 > i && (o = Math.max(1, i - l)),
                    n.push(s.substring(a -= o, a + o)),
                    (l += o + 1) > i)
                        break;
                    o = t[r = (r + 1) % t.length]
                }
                return n.reverse().join(e)
            }
        }, ls = function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, (function(e) {
                    return t[+e]
                }
                ))
            }
        }, cs = function(t, e) {
            t = t.toPrecision(e);
            t: for (var s, i = t.length, a = 1, n = -1; a < i; ++a)
                switch (t[a]) {
                case ".":
                    n = s = a;
                    break;
                case "0":
                    0 === n && (n = a),
                    s = a;
                    break;
                case "e":
                    break t;
                default:
                    n > 0 && (n = 0);
                    break
                }
            return n > 0 ? t.slice(0, n) + t.slice(s + 1) : t
        }, us = function(t, e) {
            var s = ns(t, e);
            if (!s)
                return t + "";
            var i = s[0]
              , a = s[1]
              , n = a - (ss = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1
              , r = i.length;
            return n === r ? i : n > r ? i + new Array(n - r + 1).join("0") : n > 0 ? i.slice(0, n) + "." + i.slice(n) : "0." + new Array(1 - n).join("0") + ns(t, Math.max(0, e + n - 1))[0]
        }, ds = function(t, e) {
            var s = ns(t, e);
            if (!s)
                return t + "";
            var i = s[0]
              , a = s[1];
            return a < 0 ? "0." + new Array(-a).join("0") + i : i.length > a + 1 ? i.slice(0, a + 1) + "." + i.slice(a + 1) : i + new Array(a - i.length + 2).join("0")
        }, hs = {
            "": cs,
            "%": function(t, e) {
                return (100 * t).toFixed(e)
            },
            b: function(t) {
                return Math.round(t).toString(2)
            },
            c: function(t) {
                return t + ""
            },
            d: function(t) {
                return Math.round(t).toString(10)
            },
            e: function(t, e) {
                return t.toExponential(e)
            },
            f: function(t, e) {
                return t.toFixed(e)
            },
            g: function(t, e) {
                return t.toPrecision(e)
            },
            o: function(t) {
                return Math.round(t).toString(8)
            },
            p: function(t, e) {
                return ds(100 * t, e)
            },
            r: ds,
            s: us,
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        }, ps = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        function ms(t) {
            return new vs(t)
        }
        function vs(t) {
            if (!(e = ps.exec(t)))
                throw new Error("invalid format: " + t);
            var e, s = e[1] || " ", i = e[2] || ">", a = e[3] || "-", n = e[4] || "", r = !!e[5], o = e[6] && +e[6], l = !!e[7], c = e[8] && +e[8].slice(1), u = e[9] || "";
            "n" === u ? (l = !0,
            u = "g") : hs[u] || (u = ""),
            (r || "0" === s && "=" === i) && (r = !0,
            s = "0",
            i = "="),
            this.fill = s,
            this.align = i,
            this.sign = a,
            this.symbol = n,
            this.zero = r,
            this.width = o,
            this.comma = l,
            this.precision = c,
            this.type = u
        }
        ms.prototype = vs.prototype,
        vs.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        }
        ;
        var _s, gs, fs = function(t) {
            return t
        }, bs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Cs = function(t) {
            var e = t.grouping && t.thousands ? os(t.grouping, t.thousands) : fs
              , s = t.currency
              , i = t.decimal
              , a = t.numerals ? ls(t.numerals) : fs
              , n = t.percent || "%";
            function r(t) {
                t = ms(t);
                var r = t.fill
                  , o = t.align
                  , l = t.sign
                  , c = t.symbol
                  , u = t.zero
                  , d = t.width
                  , h = t.comma
                  , p = t.precision
                  , m = t.type
                  , v = "$" === c ? s[0] : "#" === c && /[boxX]/.test(m) ? "0" + m.toLowerCase() : ""
                  , _ = "$" === c ? s[1] : /[%p]/.test(m) ? n : ""
                  , g = hs[m]
                  , f = !m || /[defgprs%]/.test(m);
                function b(t) {
                    var s, n, c, b = v, C = _;
                    if ("c" === m)
                        C = g(t) + C,
                        t = "";
                    else {
                        t = +t;
                        var y = t < 0;
                        if (t = g(Math.abs(t), p),
                        y && 0 === +t && (y = !1),
                        b = (y ? "(" === l ? l : "-" : "-" === l || "(" === l ? "" : l) + b,
                        C = ("s" === m ? bs[8 + ss / 3] : "") + C + (y && "(" === l ? ")" : ""),
                        f) {
                            s = -1,
                            n = t.length;
                            while (++s < n)
                                if (c = t.charCodeAt(s),
                                48 > c || c > 57) {
                                    C = (46 === c ? i + t.slice(s + 1) : t.slice(s)) + C,
                                    t = t.slice(0, s);
                                    break
                                }
                        }
                    }
                    h && !u && (t = e(t, 1 / 0));
                    var w = b.length + t.length + C.length
                      , T = w < d ? new Array(d - w + 1).join(r) : "";
                    switch (h && u && (t = e(T + t, T.length ? d - C.length : 1 / 0),
                    T = ""),
                    o) {
                    case "<":
                        t = b + t + C + T;
                        break;
                    case "=":
                        t = b + T + t + C;
                        break;
                    case "^":
                        t = T.slice(0, w = T.length >> 1) + b + t + C + T.slice(w);
                        break;
                    default:
                        t = T + b + t + C;
                        break
                    }
                    return a(t)
                }
                return p = null == p ? m ? 6 : 12 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)),
                b.toString = function() {
                    return t + ""
                }
                ,
                b
            }
            function o(t, e) {
                var s = r((t = ms(t),
                t.type = "f",
                t))
                  , i = 3 * Math.max(-8, Math.min(8, Math.floor(rs(e) / 3)))
                  , a = Math.pow(10, -i)
                  , n = bs[8 + i / 3];
                return function(t) {
                    return s(a * t) + n
                }
            }
            return {
                format: r,
                formatPrefix: o
            }
        };
        function ys(t) {
            return _s = Cs(t),
            gs = _s.format,
            _s.formatPrefix,
            _s
        }
        ys({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        var ws = s("025e")
          , Ts = {
            props: {
                data: Array,
                rawData: Array,
                hideStats: Boolean,
                maxItems: {
                    type: Number,
                    default: 100
                }
            },
            data() {
                return {
                    element: null,
                    node: null,
                    isActive: !1,
                    treeType: "investmentValue",
                    treeTypes: [{
                        val: "currentValue",
                        label: "Current value"
                    }, {
                        val: "investmentValue",
                        label: "Investment value"
                    }, {
                        val: "pnl",
                        label: "P&L"
                    }]
                }
            },
            created() {
                this.maxItems = this.maxItems || 100
            },
            mounted() {
                this.element = Object(Ee["a"])(this.$el.querySelector("div.chart .canvas")),
                this.draw(this.element, this.formattedData, this.hideStats, this.treeType),
                Object(ws["t"])("resize", "optimizedResize"),
                this.preProcess(),
                this.$nextTick(()=>{
                    this.treeType = "currentValue"
                }
                )
            },
            beforeDestroy() {
                this.postProcess()
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                formattedData() {
                    return this.data || this.formatRawData(this.rawData)
                }
            },
            watch: {
                treeType(t) {
                    this.redraw()
                },
                rawData(t) {
                    this.draw(this.element, this.formattedData, this.hideStats, this.treeType, !1, !0)
                }
            },
            methods: {
                preProcess() {
                    window.removeEventListener("optimizedResize", this.handleResize),
                    window.addEventListener("optimizedResize", this.handleResize),
                    this.isActive = !0
                },
                postProcess() {
                    window.removeEventListener("optimizedResize", this.handleResize),
                    this.isActive = !1
                },
                isElementInView(t) {
                    return document.querySelector("#" + t + "-treemap div.chart .canvas")
                },
                handleResize() {
                    this.isActive && this.redraw()
                },
                redraw() {
                    this.draw(this.element, this.formattedData, this.hideStats, this.treeType, !0)
                },
                formatRawData(t) {
                    let e = t;
                    if (e) {
                        let t = []
                          , s = 0
                          , i = 0
                          , a = 0;
                        for (let o = 0; o < e.length; o++) {
                            let n = e[o].quantity + (e[o].t1_quantity || 0);
                            if (e[o].average_price > 0 && e[o].last_price > 0) {
                                let r = (e[o].last_price - e[o].average_price) * n;
                                t.push({
                                    name: e[o].tradingsymbol,
                                    quantity: n,
                                    investmentValue: n * e[o].average_price,
                                    currentValue: n * (0 === e[o].last_price ? e[o].close_price : e[o].last_price),
                                    pnl: r
                                }),
                                s += r,
                                a += n * e[o].average_price,
                                i += n * e[o].last_price
                            }
                        }
                        let n = "desc"
                          , r = "investmentValue";
                        return t.sort((t,e)=>{
                            let s = t[r]
                              , i = e[r];
                            if ("asc" === n) {
                                if (s < i)
                                    return -1;
                                if (s > i)
                                    return 1
                            } else {
                                if (s > i)
                                    return -1;
                                if (s < i)
                                    return 1
                            }
                            return 0
                        }
                        ),
                        t = t.slice(0, this.maxItems),
                        {
                            name: "holdings",
                            totalPnl: s,
                            totalInvestment: a,
                            totalValue: i,
                            children: t
                        }
                    }
                },
                draw(t, e, s, i, a, n) {
                    if (!t || !t.node())
                        return;
                    n && (t.html(""),
                    this.node = null),
                    e.children = e.children.sort((t,e)=>Math.abs(t[i]) < Math.abs(e[i]));
                    let r = e
                      , o = {
                        top: 0,
                        right: 0,
                        bottom: 20,
                        left: 0
                    }
                      , l = 50
                      , c = t.node().getBoundingClientRect().width
                      , u = c - o.left - o.right
                      , d = gs(".2f")
                      , h = Object(mt["f"])(39, 174, 96)
                      , p = Object(mt["f"])(237, 42, 68)
                      , m = ["#4772F3", "#03a9f4", "#2196f3", "#9c27b0", "#673ab7", "#3f51b5", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#DCE9BE", "#E0E4CC", "#795548"]
                      , v = t=>p.brighter(Math.random(1))
                      , _ = t=>h.brighter(Math.random(1))
                      , g = Object(Se["c"])().range(m);
                    if (a && this.node) {
                        let t = as().size([u, l])
                          , e = He(r).sum(t=>Math.abs(Math.round(Math.round(100 * t[i])) / 100));
                        this.node.data(t(e).leaves()).attr("data-balloon-length", "small").attr("data-balloon-pos", (function(t) {
                            return t.x1 < 100 ? "right" : t.x1 > u - 100 ? "left" : "up"
                        }
                        )).attr("data-balloon", (function(t) {
                            return t.data.name + " (₹" + d(t.data[i], 2) + ")"
                        }
                        )).on("click", (function() {
                            xe["a"].push({
                                name: "holdings"
                            })
                        }
                        )).style("background", (function(t) {
                            return "pnl" === i ? t.data.pnl > 0 ? _(t.data.pnl) : v(t.data.pnl) : g(t.data.name)
                        }
                        )).transition().duration(500).style("left", t=>t.x0 + "px").style("top", t=>t.y0 + "px").style("width", t=>Math.max(0, t.x1 - t.x0) + "px").style("height", t=>Math.max(0, t.y1 - t.y0) + "px")
                    } else {
                        let e = t.append("div").attr("class", "treemap").style("position", "relative").style("width", u + "px").style("height", l + "px").style("left", o.left + "px").style("top", o.top + "px")
                          , s = as().size([u, l])
                          , a = He(r).sum(t=>Math.abs(Math.round(100 * Math.round(t[i]))) / 100);
                        this.node = e.datum(a).selectAll(".node").data(s(a).leaves()).enter().append("div").attr("class", "node").style("left", t=>t.x0 + "px").style("top", t=>t.y0 + "px").style("width", t=>Math.max(0, t.x1 - t.x0) + "px").style("height", t=>Math.max(0, t.y1 - t.y0) + "px").style("background", (function(t) {
                            return "pnl" === i ? t.data.pnl > 0 ? _(t.data.pnl) : v(t.data.pnl) : g(t.data.name)
                        }
                        )).text(t=>"").on("click", (function() {
                            xe["a"].push({
                                name: "holdings"
                            })
                        }
                        )).attr("data-balloon-length", "small").attr("data-balloon-pos", (function(t) {
                            return t.x1 < 100 ? "right" : t.x1 > u - 100 ? "left" : "up"
                        }
                        )).attr("data-balloon", (function(t) {
                            return t.data.name + " (₹" + d(t.data[i], 2) + ")"
                        }
                        ))
                    }
                }
            }
        }
          , ks = Ts
          , xs = s("0c7c")
          , Es = Object(xs["a"])(ks, i, a, !1, null, null, null);
        e["a"] = Es.exports
    },
    "28d3": function(t, e, s) {
        "use strict";
        s("6b3d")
    },
    "2a46": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "orderbook baskets-list"
            }, [t.constraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Baskets couldn't be loaded.",
                    error: t.basketsFetchError
                }
            }) : t._e(), t._v(" "), t.constraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/basket.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You haven't created any baskets.")]), t._v(" "), s("button", {
                staticClass: "button button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.createBasket.apply(null, arguments)
                    }
                }
            }, [t._v("New basket")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.constraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.constraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.basketsFetchError && t.basketsFetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.constraints.showEmptyState || t.constraints.showErrorState ? t._e() : s("section", {
                staticClass: "baskets-list-wrap table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(0), t._v(" "), t.constraints.isData ? s("span", [t._v("(" + t._s(t.baskets.length) + ")")]) : t._e(), t._v(" "), t.constraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.basketsFetchError && t.basketsFetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.constraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.baskets ? s("su-table", {
                staticClass: "baskets-table fold-header",
                attrs: {
                    data: t.formattedBaskets,
                    headers: t.BASKETS_TABLE_HEADERS,
                    uid: "id",
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return !t.isMobile && t.showContextMenu(e.row, "id")
                    },
                    rowLeave: function(e) {
                        return !t.isMobile && t.hideContextMenu(e.row)
                    },
                    rowClick: function(e) {
                        return t.showContextMenu(e.row, "id")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-basket-name"
                        }, [s("a", {
                            staticClass: "basket-name",
                            attrs: {
                                href: ""
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.modifyBasket(e.row)
                                }
                            }
                        }, [t._v(t._s(e.row.name))]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.isMobile || t.contextMenu !== e.row.id ? t._e() : s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.modifyBasket(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.deleteBasket(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2)], 1), t._v(" "), t.isMobile && t.contextMenu === e.row.id ? s("mobile-context-menu", {
                            on: {
                                close: function(s) {
                                    return t.hideContextMenu(e.row)
                                }
                            }
                        }, [s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.modifyBasket(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.deleteBasket(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2) : t._e()], 1), t._v(" "), s("td", [t._v("\n\t\t\t\t\t" + t._s(e.row.items.length) + "\n\t\t\t\t\t"), 0 === e.row.items.length ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "text-small error-fetch",
                            attrs: {
                                title: "This basket is empty"
                            }
                        }, [s("span", {
                            staticClass: "icon icon-alert-triangle"
                        })]) : t._e()]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t" + t._s(e.row.created_at.slice(0, 10)) + "\n\t\t\t\t")])]
                    }
                }], null, !1, 2176453216)
            }, [s("span", {
                attrs: {
                    slot: "toolbar-before-search"
                },
                slot: "toolbar-before-search"
            }, [s("button", {
                staticClass: "create-new button button-small button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.createBasket.apply(null, arguments)
                    }
                }
            }, [t._v("New basket")])])]) : t._e()], 1)], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("Baskets")])])
        }
        ]
          , n = s("2f62")
          , r = s("5fb0")
          , o = s("e90e")
          , l = s("9c9e")
          , c = s("5a9e");
        const u = Object.freeze([{
            label: "Name",
            field: "name",
            sort: !0,
            search: !0
        }, {
            label: "Items",
            field: "count",
            sort: !0,
            search: !1
        }, {
            label: "Created on",
            field: "created_at",
            sort: !0,
            search: !0
        }]);
        var d = {
            mixins: [l["a"]],
            data() {
                return {
                    contextMenu: null
                }
            },
            created() {
                this.BASKETS_TABLE_HEADERS = u,
                this.fetchBaskets(),
                this.preProcess()
            },
            beforeDestroy() {
                this.postProcess()
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                ...Object(n["d"])(["isMobile"]),
                ...Object(n["d"])(o["b"], ["baskets", "basketsFetchError", "basketsFetchStatus"]),
                formattedBaskets() {
                    let t = [];
                    for (let e of this.baskets)
                        t.push({
                            ...e,
                            count: e.items.length
                        });
                    return t
                },
                constraints() {
                    let t = this.basketsFetchStatus === r["d"].API_STATUSES.fetching
                      , e = this.basketsFetchStatus === r["d"].API_STATUSES.error
                      , s = this.baskets && this.baskets.length > 0
                      , i = this.baskets && 0 === this.baskets.length
                      , a = e && !this.baskets
                      , n = e && this.baskets;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showErrorIcon: n,
                        showEmptyState: i,
                        showErrorState: a
                    }
                }
            },
            methods: {
                ...Object(n["c"])(o["b"], ["fetchBaskets"]),
                preProcess() {
                    this.$events.on(r["d"].EVENTS.refetch + "baskets", this.fetchBaskets),
                    this.$events.on(c["b"].EVENTS.ORDERS_BASKET_ON_CREATE, this.fetchBaskets),
                    this.$events.on(c["b"].EVENTS.ORDERS_BASKET_ON_DELETE, this.fetchBaskets),
                    this.$events.on(c["b"].EVENTS.ORDERS_BASKET_ON_CLOSE, this.fetchBaskets)
                },
                postProcess() {
                    this.$events.off(r["d"].EVENTS.refetch + "baskets", this.fetchBaskets),
                    this.$events.off(c["b"].EVENTS.ORDERS_BASKET_ON_CREATE, this.fetchBaskets),
                    this.$events.off(c["b"].EVENTS.ORDERS_BASKET_ON_DELETE, this.fetchBaskets),
                    this.$events.off(c["b"].EVENTS.ORDERS_BASKET_ON_CLOSE, this.fetchBaskets)
                },
                showContextMenu(t, e) {
                    e = e || "uid",
                    this.contextMenu = t[e]
                },
                hideContextMenu(t) {
                    this.contextMenu = null
                },
                createBasket() {
                    this.$events.emit(c["b"].EVENTS.ORDERS_BASKET_CREATE, {
                        navSource: this.$route.query.source
                    })
                },
                modifyBasket(t) {
                    this.$events.emit(c["b"].EVENTS.ORDERS_BASKET_MODIFY, t)
                },
                deleteBasket(t) {
                    this.$events.emit(c["b"].EVENTS.ORDERS_BASKET_DELETE, t)
                }
            }
        }
          , h = d
          , p = s("0c7c")
          , m = Object(p["a"])(h, i, a, !1, null, null, null);
        e["default"] = m.exports
    },
    "2b19": function(t, e, s) {},
    "2da9": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "connected-apps"
            }, [t.constraints.showHeader ? s("h3", {
                staticClass: "page-title small"
            }, [s("span", [t._v("Apps")]), t._v(" "), t.connectedApps && t.connectedApps.length > 0 ? s("span", [t._v("(" + t._s(t.connectedApps.length) + ")")]) : t._e(), t._v(" "), t.constraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.connectedAppsError && t.connectedAppsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.isConnectedAppsFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.constraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Connected apps couldn't be loaded.",
                    error: t.connectedAppsError
                }
            }) : t._e(), t._v(" "), t.constraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/positions.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [t._v("\n\t\t\tYou don't have any apps linked.\n\t\t")])]) : t._e(), t._v(" "), t._l(t.connectedApps, (function(e, i) {
                return t.constraints.isData ? s("div", {
                    key: i,
                    staticClass: "app row"
                }, [s("div", {
                    staticClass: "app-icon"
                }, [s("img", {
                    attrs: {
                        src: t.appIconURL(e.api_key)
                    }
                })]), t._v(" "), s("div", {
                    staticClass: "app-details"
                }, [s("div", {
                    staticClass: "app-name"
                }, [t._v(t._s(e.app_name))]), t._v(" "), s("div", {
                    staticClass: "app-meta-details"
                }, [t._v("by\n\t\t\t\t"), s("a", {
                    staticClass: "app-developer",
                    attrs: {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: e.developer_website
                    }
                }, [t._v("\n\t\t\t\t\t" + t._s(e.developer_name) + "\n\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "app-description"
                }, [t._v(t._s(e.description))]), t._v(" "), t.currentItemIndex === i ? s("div", {
                    staticClass: "more-details row"
                }, [s("div", {
                    staticClass: "six columns last-login-details"
                }, [s("p", {
                    staticClass: "block-title"
                }, [t._v("Last login")]), t._v(" "), s("div", {
                    staticClass: "user-agent"
                }, [s("label", [t._v("User-agent")]), t._v(" "), e.last_login_agent ? s("span", [t._v(t._s(e.last_login_agent))]) : s("span", {
                    staticClass: "dim"
                }, [t._v("N/A")])]), t._v(" "), s("div", {
                    staticClass: "last-login-time"
                }, [s("label", [t._v("Time")]), t._v(" "), e.last_login_time ? s("span", [t._v(t._s(e.last_login_time))]) : s("span", {
                    staticClass: "dim"
                }, [t._v("N/A")])]), t._v(" "), s("div", {
                    staticClass: "login-ip"
                }, [s("label", [t._v("IP address")]), t._v(" "), e.last_login_ip ? s("span", [t._v(t._s(e.last_login_ip))]) : s("span", {
                    staticClass: "dim"
                }, [t._v("N/A")])])]), t._v(" "), s("div", {
                    staticClass: "six columns permissions"
                }, [s("p", {
                    staticClass: "block-title"
                }, [t._v("Permissions")]), t._v(" "), s("ul", t._l(e.permissions, (function(e, i) {
                    return s("li", {
                        key: i
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t\t")])
                }
                )), 0)])]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "actions"
                }, [s("div", {
                    staticClass: "app-status"
                }, [s("su-button", {
                    staticClass: "button-blue",
                    nativeOn: {
                        click: function(s) {
                            return t.confirmRevokeAccess(e)
                        }
                    }
                }, [t._v("\n\t\t\t\t\tRevoke\n\t\t\t\t")])], 1), t._v(" "), s("div", {
                    staticClass: "details",
                    on: {
                        click: function(e) {
                            return t.toggleCurrentItemIndex(i)
                        }
                    }
                }, [t._v("\n\t\t\t\tDetails\n\t\t\t\t"), t.currentItemIndex !== i ? s("span", {
                    staticClass: "icon icon-chevron-down"
                }) : t._e(), t._v(" "), t.currentItemIndex === i ? s("span", {
                    staticClass: "icon icon-chevron-up"
                }) : t._e()])])]) : t._e()
            }
            )), t._v(" "), t.showRevokeConfirm && t.currentApp ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideRevokeConfirm,
                    expression: "hideRevokeConfirm"
                }],
                staticClass: "revoke-access-confirm",
                on: {
                    close: function(e) {
                        return t.hideRevokeConfirm()
                    }
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Remove access")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("span", [t._v("Are you sure you want to remove access?")]), s("br"), s("br"), t._v(" "), s("span", [s("span", {
                staticClass: "app-name"
            }, [t._v(t._s(t.currentApp.app_name))]), t._v(" will no longer have access to your Kite Account. You'll need to grant access if you want to use the app or site again.")])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.revokeAppAccessInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.revokeAppAccess(t.currentApp.api_key)
                    }
                }
            }, [s("span", [t._v("Revoke")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hideRevokeConfirm.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Cancel")])])], 1)]) : t._e()], 2)
        }
          , a = []
          , n = s("2f62")
          , r = s("a029a")
          , o = s("f9a4")
          , l = s("5fb0")
          , c = s("9c9e");
        const u = "apps"
          , d = o["b"];
        var h = {
            mixins: [c["a"]],
            data() {
                return {
                    currentApp: null,
                    showRevokeConfirm: !1,
                    currentItemIndex: !1,
                    revokeAppAccessInProgress: !1
                }
            },
            created() {
                this.fetchConnectedApps(),
                this.preProcess(),
                this.$events.on("refetchData:" + u, this.fetchConnectedApps)
            },
            beforeDestroy() {
                this.postProcess(),
                this.$events.off("refetchData:" + u, this.fetchConnectedApps)
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                ...Object(n["d"])(d, ["connectedApps", "connectedAppsFetchStatus", "connectedAppsError"]),
                isConnectedAppsFetching() {
                    return this.connectedAppsFetchStatus === l["d"].API_STATUSES.fetching
                },
                isConnectedAppsFetchError() {
                    return this.connectedAppsFetchStatus === l["d"].API_STATUSES.error
                },
                constraints() {
                    let t = this.connectedAppsFetchStatus === l["d"].API_STATUSES.fetching
                      , e = this.connectedAppsFetchStatus === l["d"].API_STATUSES.error
                      , s = this.connectedApps && this.connectedApps.length > 0
                      , i = this.connectedApps && 0 === this.connectedApps.length
                      , a = e && !this.connectedApps
                      , n = e && this.connectedApps
                      , r = !i && !a;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showHeader: r,
                        showErrorIcon: n,
                        showEmptyState: i,
                        showErrorState: a
                    }
                }
            },
            methods: {
                ...Object(n["c"])(d, ["fetchConnectedApps"]),
                preProcess() {},
                postProcess() {},
                appIconURL(t) {
                    return "https://developers.kite.trade/static/images/app-icons/" + t + ".png"
                },
                toggleCurrentItemIndex(t) {
                    this.currentItemIndex === t ? this.currentItemIndex = null : this.currentItemIndex = t
                },
                confirmRevokeAccess(t) {
                    this.showRevokeConfirm = !0,
                    this.currentApp = t
                },
                revokeAppAccess(t) {
                    this.revokeAppAccessInProgress = !0,
                    r["a"].revokeAppAccess(t).then(t=>{
                        this.revokeAppAccessInProgress = !1,
                        this.showRevokeConfirm = !1,
                        this.fetchConnectedApps(),
                        this.$toast.success({
                            title: "App removed",
                            message: "The app's has been removed from your account.",
                            orientation: this.$toast.TOP_RIGHT
                        })
                    }
                    ).catch(()=>{
                        this.revokeAppAccessInProgress = !1,
                        this.showRevokeConfirm = !1
                    }
                    )
                },
                hideRevokeConfirm() {
                    this.currentApp = null,
                    this.showRevokeConfirm = !1,
                    this.revokeAppAccessInProgress = !1
                }
            }
        }
          , p = h
          , m = s("0c7c")
          , v = Object(m["a"])(p, i, a, !1, null, null, null);
        e["default"] = v.exports
    },
    3318: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return n
        }
        ));
        var i = s("25b5")
          , a = s("9f74");
        class n {
        }
        n.constants = i["c"],
        n.events = i["c"].EVENTS,
        n.namespace = i["c"].NAMESPACE,
        n.install = function(t, e) {
            e.store && e.store.registerModule(this.namespace, a["a"])
        }
    },
    "365c": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return d
        }
        ));
        var i = s("bc3a")
          , a = s.n(i)
          , n = s("a026")
          , r = s("5fb0")
          , o = s("b7d9")
          , l = s("ba6a");
        s.d(e, "b", (function() {
            return l["a"]
        }
        ));
        const c = {
            commit: !1,
            hook: null,
            toast: n["a"].prototype.$toast.TOP_CENTER
        }
          , u = (t,e,s)=>{
            Object.entries(r["a"]).forEach(([s,i])=>Object(o["c"])(t[o["a"].status], s, i === e));
            let i = !1
              , a = !1;
            s && "object" === typeof s && (i = s.constructor === Object && 0 === Object.keys(s) || 0 === s.length,
            a = !i),
            Object(o["c"])(t, o["a"].ui_status, {
                hasData: a,
                showEmpty: i && e !== r["a"].error,
                showFirstError: e === r["a"].error && !a,
                showRecurringError: e === r["a"].error && a
            })
        }
        ;
        function d(t, e, s) {
            return (...i)=>{
                const l = {
                    ...c,
                    ...e || {}
                };
                return s || (s = Object(o["b"])()),
                Object(o["c"])(s, o["a"].error, null),
                u(s, r["a"].loading, s[o["a"].data]),
                {
                    store: s,
                    api: t(...i).then(t=>{
                        if (!t.data)
                            throw new Error("Empty response.");
                        let e = t.data.data;
                        return l.hook && (e = l.hook(t.data.data)),
                        Object(o["c"])(s, o["a"].data, e),
                        u(s, r["a"].success, e),
                        e
                    }
                    ).catch(t=>{
                        if (a.a.isCancel(t) && "cancel-duplicate-requests" === t.message)
                            return;
                        const e = t.response && t.response.data && t.response.data.message ? t.response.data.message : t.toString();
                        throw Object(o["c"])(s, o["a"].error, {
                            message: e,
                            error_type: t.response && t.response.error_type && t.response.error_type || "UnknownException",
                            data: t.response && t.response.data && t.response.data.data || null
                        }),
                        u(s, r["a"].error, s[o["a"].data]),
                        l.toast && n["a"].prototype.$toast.error({
                            title: "Error",
                            message: e,
                            orientation: l.toast
                        }),
                        t
                    }
                    )
                }
            }
        }
    },
    "3db7": function(t, e, s) {
        "use strict";
        const i = "alerts"
          , a = {
            ADD: i + ".add",
            ADD_SUCCESS: i + ".add.success",
            UPDATE: i + ".update",
            UPDATE_SUCCESS: i + ".update.success",
            CLOSE: i + ".close"
        };
        e["a"] = {
            NAMESPACE: i,
            EVENTS: a
        }
    },
    "3dfd": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isBaseLoaded ? s("div", {
                staticClass: "app",
                class: t.appClasses,
                attrs: {
                    id: "app"
                }
            }, [s("div", {
                staticClass: "header",
                class: {
                    "with-user-menu": t.isUserMenu
                }
            }, [s("div", {
                staticClass: "wrapper"
            }, [t.isMobile ? t._e() : s("div", {
                staticClass: "header-left"
            }, [s("div", {
                staticClass: "pinned-instruments"
            }, t._l(t.pinnedInstruments, (function(e, i) {
                return s("instrument-widget", {
                    key: i,
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        segment: e.segment,
                        "instrument-token": e.instrumentToken,
                        "price-change-type": t.priceChangeType
                    }
                })
            }
            )), 1)]), t._v(" "), s("div", {
                staticClass: "header-right"
            }, [s("a", {
                staticClass: "logo",
                attrs: {
                    href: "/"
                }
            }, [s("img", {
                attrs: {
                    src: t.dashboardLogo,
                    alt: "Kite logo"
                }
            }), t._v(" "), t.cobrandedLogo ? s("img", {
                staticClass: "cobranded",
                attrs: {
                    src: t.cobrandedLogo,
                    alt: "Kite cobranded logo"
                }
            }) : t._e()]), t._v(" "), t.isMobile ? s("div", {
                staticClass: "current-nav"
            }, [t._v("\n\t\t\t\t\t" + t._s(t.currentRouteName) + "\n\t\t\t\t")]) : s("div", {
                staticClass: "app-nav"
            }, [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "dashboard"
                    }
                }
            }, [s("span", [t._v("Dashboard")])]), t._v(" "), s("custom-router-link", {
                staticClass: "orders-nav-item",
                attrs: {
                    to: {
                        name: "orders"
                    }
                },
                on: {
                    click: t.onOrdersRouteClick
                }
            }, [s("span", [t._v("Orders")]), t._v(" "), t.ordersNotificationCount > 0 ? s("span", {
                staticClass: "orders-notifications-count"
            }, [s("span", {
                staticClass: "dot"
            }), t._v(" "), s("span", {
                staticClass: "count"
            }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.ordersNotificationCount) + "\n\t\t\t\t\t\t\t")])]) : t._e()]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "holdings"
                    }
                }
            }, [s("span", [t._v("Holdings")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "positions"
                    }
                }
            }, [s("span", [t._v("Positions")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "bids"
                    }
                }
            }, [s("span", [t._v("Bids")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "margins"
                    }
                }
            }, [s("span", [t._v("Funds")])])], 1), t._v(" "), s("div", {
                staticClass: "right-nav"
            }, [s("bulletin-menu", {
                class: {
                    open: t.isBulletinWidget
                },
                on: {
                    change: t.toggleBulletin
                },
                model: {
                    value: t.isBulletinWidget,
                    callback: function(e) {
                        t.isBulletinWidget = e
                    },
                    expression: "isBulletinWidget"
                }
            }), t._v(" "), s("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.hideUserMenu,
                    expression: "hideUserMenu"
                }, {
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideUserMenu,
                    expression: "hideUserMenu"
                }],
                staticClass: "user-nav perspective"
            }, [s("a", {
                staticClass: "dropdown-label",
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleUserMenu.apply(null, arguments)
                    }
                }
            }, [t.getUserName ? s("su-avatar", {
                attrs: {
                    username: t.getUserName,
                    src: t.getUserAvatar,
                    size: 25
                }
            }) : t._e(), t._v(" "), s("span", {
                staticClass: "user-id"
            }, [t._v(t._s(t.userId))])], 1), t._v(" "), s("transition", {
                attrs: {
                    name: "dropdown"
                }
            }, [t.isUserMenu && !t.isMobile ? s("div", {
                staticClass: "dropdown-nav layer-2",
                on: {
                    click: t.hideUserMenu
                }
            }, [t.getUserName ? s("div", {
                staticClass: "dropdown-nav-header"
            }, [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "profile"
                    }
                }
            }, [s("h4", {
                staticClass: "username"
            }, [t._v(t._s(t.getUserName))]), t._v(" "), t.userEmail ? s("div", {
                staticClass: "email"
            }, [t._v(t._s(t.userEmail))]) : t._e()])], 1) : t._e(), t._v(" "), s("hr"), t._v(" "), s("ul", {
                staticClass: "list-flat dropdown-nav-list"
            }, [s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "profile"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-user"
            }), t._v(" My profile "), s("span", {
                staticClass: "text-lightest"
            }, [t._v("/ Settings")])])], 1), t._v(" "), t.isMobile ? s("li", {
                staticClass: "margins"
            }, [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "margins"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-user"
            }), t._v(" Funds\n\t\t\t\t\t\t\t\t\t\t")])], 1) : t._e(), t._v(" "), s("hr"), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://console.zerodha.com/dashboard/"
                }
            }, [s("span", {
                staticClass: "icon icon-console"
            }), t._v(" Console")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://coin.zerodha.com/login"
                }
            }, [s("span", {
                staticClass: "icon icon-coin"
            }), t._v(" Coin")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://support.zerodha.com/login"
                }
            }, [s("span", {
                staticClass: "icon icon-life-buoy"
            }), t._v(" Support")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://console.zerodha.com/refer"
                }
            }, [s("span", {
                staticClass: "icon icon-user-plus"
            }), t._v(" Invite friends")])]), t._v(" "), s("hr"), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.startTour(null, !0)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-compass"
            }), t._v(" Tour Kite")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showKeyboardShortcutModal.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-command"
            }), t._v(" Keyboard shortcuts")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "http://kite.trade/docs/kite"
                }
            }, [s("span", {
                staticClass: "icon icon-help-circle"
            }), t._v(" User manual")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_self",
                    href: "/logout"
                }
            }, [s("span", {
                staticClass: "icon icon-exit"
            }), t._v(" Logout")])])])]) : t._e()]), t._v(" "), s("transition", {
                attrs: {
                    name: "dropdown"
                }
            }, [t.isUserMenu && t.isMobile ? s("div", {
                staticClass: "dropdown-nav layer-2",
                on: {
                    click: t.hideUserMenu
                }
            }, [s("ul", {
                staticClass: "list-flat dropdown-nav-list"
            }, [s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "marketwatch"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-bookmark"
            }), t._v(" Marketwatch\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "dashboard"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-compass"
            }), t._v(" Dashboard\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "orders"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-book"
            }), t._v(" Orders\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "holdings"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-briefcase"
            }), t._v(" Holdings\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "positions"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-file-text"
            }), t._v(" Positions\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "bids"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-clock"
            }), t._v(" Bids\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "margins"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-file-text"
            }), t._v(" Funds\n\t\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), s("li", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "profile"
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-user"
            }), t._v(" My profile "), s("span", {
                staticClass: "text-lightest"
            }, [t._v("/ Settings")])])], 1), t._v(" "), s("hr"), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://support.zerodha.com/login"
                }
            }, [s("span", {
                staticClass: "icon icon-life-buoy"
            }), t._v(" Support")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    target: "_self",
                    href: "/logout"
                }
            }, [s("span", {
                staticClass: "icon icon-exit"
            }), t._v(" Logout")])])])]) : t._e()])], 1)], 1), t._v(" "), s("div", {
                staticClass: "perspective"
            }, [s("transition", {
                attrs: {
                    name: "dropdown"
                }
            }, [t.isBulletinWidget ? s("bulletin-widget", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.hideBulletinWindow,
                    expression: "hideBulletinWindow"
                }, {
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideBulletinWindow,
                    expression: "hideBulletinWindow"
                }]
            }) : t._e()], 1)], 1)])])]), t._v(" "), s("div", {
                staticClass: "container wrapper"
            }, [t.isMobile ? t._e() : s("div", {
                staticClass: "container-left"
            }, [s("marketwatch", {
                staticClass: "marketwatch-wrap"
            })], 1), t._v(" "), s("div", {
                staticClass: "container-right"
            }, [t.$route.path.startsWith("/orders") ? s("div", {
                staticClass: "page-nav"
            }, [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "orders"
                    }
                }
            }, [s("span", [t._v("Orders")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "gtt"
                    }
                }
            }, [s("span", [t._v("GTT")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "baskets"
                    }
                }
            }, [s("span", [t._v("Baskets")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "sip"
                    }
                }
            }, [s("span", [t._v("SIP")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "alerts"
                    }
                }
            }, [s("span", [t._v("Alerts")])])], 1) : t._e(), t._v(" "), t.$route.path.startsWith("/bids") ? s("div", {
                staticClass: "page-nav"
            }, [s("custom-router-link", {
                attrs: {
                    to: {
                        name: "auctions"
                    }
                }
            }, [s("span", [t._v("Auctions")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "ipo"
                    }
                }
            }, [s("span", [t._v("IPO")])]), t._v(" "), s("custom-router-link", {
                attrs: {
                    to: {
                        name: "gsecs"
                    }
                }
            }, [s("span", [t._v("Govt. securities")])])], 1) : t._e(), t._v(" "), s("notifications-bar"), t._v(" "), s("div", {
                staticClass: "page-content",
                class: t.$route.name
            }, [s("keep-alive", [t.isNoticeWidget ? s("notice", {
                attrs: {
                    page: t.$route.name
                }
            }) : t._e()], 1), t._v(" "), s("keep-alive", {
                attrs: {
                    exclude: t.keepAliveRouterExclude
                }
            }, [s("router-view")], 1)], 1)], 1)]), t._v(" "), s("order-window"), t._v(" "), s("order-cancel-window"), t._v(" "), s("basket"), t._v(" "), s("alert-window"), t._v(" "), s("gtt-window"), t._v(" "), s("stock-widget"), t._v(" "), s("technical-widget"), t._v(" "), s("option-chain-widget"), t._v(" "), s("market-depth-widget"), t._v(" "), s("orders-basket"), t._v(" "), s("keyboard-shortcuts", {
                attrs: {
                    show: t.showKeyModal
                },
                on: {
                    close: t.hideKeyboardShortcutsModal
                }
            }), t._v(" "), s("stocks-analyze-widget"), t._v(" "), t.isDisclosureModalEnabled && !t.isKiteMobile ? s("risk-disclosure-modal") : t._e()], 1) : s("div", {
                attrs: {
                    id: "splash-screen"
                }
            }, [s("div", {
                staticClass: "content-wrap"
            }, [s("img", {
                attrs: {
                    src: t.dashboardLogo,
                    alt: "Kite logo"
                }
            }), t._v(" "), s("su-loader")], 1)])
        }
          , a = []
          , n = s("a026")
          , r = s("e7ec")
          , o = s.n(r)
          , l = s("b23e")
          , c = s.n(l)
          , u = s("2f62")
          , d = s("b202")
          , h = s("b047c")
          , p = s.n(h)
          , m = s("c0d6")
          , v = s("e165")
          , _ = s.n(v)
          , g = s("5665")
          , f = s("5fb0")
          , b = s("025e")
          , C = s("d9d2")
          , y = s("25b5");
        const w = "order.place"
          , T = "marketwatch.add"
          , k = "marketwatch.depth";
        class x {
            constructor(t, e, s) {
                if (this.eventBus = t,
                this.instrumentManager = e,
                    window.JSKite = this,
                this.origins = [window.location.protocol + "//" + window.location.host],
                s)
                    for (let i of s)
                        this.origins.push(i);
                window.addEventListener("message", t=>{
                    this.receiveMessage(t)
                }
                , !1)
            }
            receiveMessage(t) {
                let e = !1;
                for (let s of this.origins)
                    if (t.origin === s) {
                        e = !0;
                        break
                    }
                e && t.data && t.data.type && (t.data.type === w ? this.placeOrder(t.data.data) : t.data.type === T ? this.addToMarketWatch(t.data.data) : t.data.type === k && this.showMarketDepthWidget(t.data.data))
            }
            sanitize(t) {
                return "string" === typeof t ? Object(b["s"])(t) : t
            }
            placeOrder(t) {
                let e = this.instrumentManager.get(this.sanitizeTradinsymbol(t.tradingsymbol), null, this.sanitize(t.exchange))
                  , s = {
                    instrument: e,
                    tradingsymbol: this.sanitizeTradinsymbol(t.tradingsymbol),
                    transactionType: this.sanitize(t.transaction_type),
                    exchange: this.sanitize(t.exchange),
                    quantity: this.sanitize(t.quantity),
                    disclosedQuantity: this.sanitize(t.disclosed_quantity),
                    price: this.sanitize(t.price),
                    triggerPrice: this.sanitize(t.trigger_price),
                    stoploss: this.sanitize(t.stoploss),
                    squareoff: this.sanitize(t.squareoff),
                    trailingStoploss: this.sanitize(t.trailing_stoploss),
                    product: this.sanitize(t.product) || C["b"].PRODUCT.CNC,
                    validity: this.sanitize(t.validity) || C["b"].VALIDITY.DAY,
                    variety: this.sanitize(t.variety) || C["b"].VARIETY.REGULAR,
                    orderType: this.sanitize(t.order_type) || C["b"].ORDER_TYPE.MARKET,
                    tag: this.sanitize(t.tag)
                };
                this.eventBus.emit(C["b"].EVENTS.ORDER_PLACE, s)
            }
            addToMarketWatch(t) {
                let e = this.instrumentManager.get(this.sanitizeTradinsymbol(t.tradingsymbol), null, this.sanitize(t.exchange));
                this.eventBus.emit(y["c"].EVENTS.ADD, {
                    instrument: e
                })
            }
            showMarketDepthWidget(t) {
                let e = this.instrumentManager.get(this.sanitizeTradinsymbol(t.tradingsymbol), null, this.sanitize(t.exchange));
                this.eventBus.emit(f["d"].EVENTS.showMarketDepthWidget, {
                    instrument: e
                })
            }
            sanitizeTradinsymbol(t) {
                return t.replace(/[^a-zA-Z0-9&\-_. ]/gi, (function(t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }
                ))
            }
        }
        var E = s("db49");
        function S(t, e, s) {
            return e in t ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = s,
            t
        }
        class P {
            constructor(t) {
                S(this, "tMessage", "Message"),
                this.ticker = t,
                this.isGranted = !1,
                this.initEvents()
            }
            grantPermission() {
                "Notification"in window && ("granted" === window.Notification.permission ? this.isGranted = !0 : "denied" !== window.Notification.permission && window.Notification.requestPermission(t=>{
                    "granted" === t && (this.isGranted = !0)
                }
                ))
            }
            initEvents() {
                this.ticker.eventMessage.on(t=>{
                    let e = this.parseMessage(t);
                    this.createNotification(this.tMessage, {
                        tag: "ticker-message",
                        icon: E["b"].desktopNotificationIcon,
                        message: e.message,
                        link: e.link
                    })
                }
                )
            }
            createNotification(t, e) {
                if (!this.isGranted)
                    return;
                let s = new window.Notification("Message",{
                    tag: e.tag,
                    icon: e.icon,
                    body: e.message
                });
                e.link && (s.onclick = t=>{
                    t.preventDefault(),
                    window.open(e.link, "_blank")
                }
                )
            }
            parseMessage(t) {
                let e = /\[(.+?)\]\((https?:\/\/.+?)\)/gi
                  , s = e.exec(t);
                return {
                    message: t.replace(e, "$1"),
                    link: s && s[2]
                }
            }
        }
        var A = P
          , I = s("ad1c");
        class O {
        }
        O.install = function(t, e) {}
        ;
        var D = s("0a56")
          , M = s("da42")
          , N = s("165b")
          , R = s("1aa1")
          , L = s("f9a4");
        class $ {
        }
        $.namespace = L["b"],
        $.install = function(t, e) {
            e.store && e.store.registerModule(L["b"], L["a"])
        }
        ;
        var U = s("5052");
        class F {
        }
        F.namespace = U["b"],
        F.install = function(t, e) {
            e.store && e.store.registerModule(U["b"], U["a"])
        }
        ;
        var j = s("d4ff");
        class H {
        }
        H.namespace = j["b"],
        H.install = function(t, e) {
            e.store && e.store.registerModule(j["b"], j["a"])
        }
        ;
        var B = s("c2fb")
          , z = s("1b06");
        class V {
        }
        V.namespace = z["b"],
        V.install = function(t, e) {
            e.store && e.store.registerModule(z["b"], z["a"])
        }
        ;
        var q = s("3318")
          , W = s("808c")
          , G = s("58c0")
          , Y = s("c7ed")
          , Q = s("f4a7");
        class K {
        }
        K.api = G["a"],
        K.constants = Q["a"],
        K.events = Q["a"].EVENTS,
        K.namespace = Q["a"].NAMESPACE,
        K.install = function(t, e) {
            e.store && e.store.registerModule(Q["a"].NAMESPACE, Y["a"])
        }
        ;
        var X = s("e90e")
          , Z = s("5a9e");
        class J {
        }
        J.constants = Z["b"],
        J.events = Z["b"].EVENTS,
        J.namespace = Z["b"].NAMESPACE,
        J.install = function(t, e) {
            e.store && e.store.registerModule(Z["b"].NAMESPACE, X["a"])
        }
        ;
        var tt = s("5105");
        class et {
        }
        et.namespace = tt["b"],
        et.install = function(t, e) {
            e.store && e.store.registerModule(tt["b"], tt["a"])
        }
        ;
        var st = s("72e2")
          , it = s("f1f7");
        class at {
            constructor(t, e, s) {
                if (s) {
                    var i = this;
                    this.promise = new Promise((function(t, e) {
                        i.resolve = t,
                        i.reject = e
                    }
                    ))
                } else
                    this.promise = null;
                this.id = s,
                this.type = t,
                this.data = e
            }
        }
        class nt {
            constructor() {
                this.sharedWorker = new SharedWorker("/worker.js"),
                this.sharedWorker.port.start(),
                this.messages = {},
                this.receiveCb = null,
                this.handlers = {},
                this._receive()
            }
            _uuid() {
                let t = ()=>Math.random().toString(16).slice(-4);
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
            send(t, e, s) {
                this.sharedWorker.port.postMessage({
                    type: t,
                    data: e,
                    id: s
                })
            }
            receive(t) {
                this.receiveCb = t
            }
            _receive() {
                var t = this;
                this.sharedWorker.port.addEventListener("message", (function(e) {
                    if (e.data && e.data.type) {
                        t.receiveCb && t.receiveCb(new at(e.data.type,e.data.data));
                        let s = e.data.id;
                        s && t.messages[s] && t.messages[s].resolve({
                            id: s,
                            type: e.data.type,
                            data: e.data.data
                        }),
                        t._trigger(e.data)
                    }
                }
                ))
            }
            do(t, e, s) {
                let i = new at(t,e,this._uuid());
                return this.messages[i.id] = i,
                this.send(i.type, i.data, i.id),
                s ? Object(b["p"])(s, i.promise, "Request timed out") : i.promise
            }
            addListener(t, e) {
                this.handlers[t] || (this.handlers[t] = []),
                this.handlers[t].push(e)
            }
            removeListener(t, e) {
                this.handlers[t] && (this.handlers[t] = this.handlers[t].filter(t=>t !== e))
            }
            _trigger(t) {
                this.handlers[t.type] && this.handlers[t.type].slice(0).forEach(e=>e(t.data))
            }
        }
        class rt {
            constructor(t, e) {
                this.sw = t,
                this.type = e
            }
            on(t) {
                this.sw.addListener(this.type, t)
            }
            off(t) {
                this.sw.removeListener(this.type, t)
            }
        }
        class ot {
            constructor(t) {
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
                this.sw = new nt,
                this.connectParams = t,
                this.eventConnect = new rt(this.sw,"ticker.connect"),
                this.eventTick = new rt(this.sw,"ticker.tick"),
                this.eventData = new rt(this.sw,"ticker.data"),
                this.eventDisconnect = new rt(this.sw,"ticker.disconnect"),
                this.eventReconnect = new rt(this.sw,"ticker.reconnect"),
                this.eventNoReconnect = new rt(this.sw,"ticker.noreconnect"),
                this.eventAlert = new rt(this.sw,"ticker.alert"),
                this.eventMessage = new rt(this.sw,"ticker.message"),
                this.eventReload = new rt(this.sw,"ticker.reload"),
                this.eventClearCache = new rt(this.sw,"ticker.clearcache"),
                this.eventLogout = new rt(this.sw,"ticker.logout"),
                this.tagPrefix = Math.random().toString(16).slice(-4) + "-"
            }
            connect() {
                this.sw.send("ticker.connect", this.connectParams)
            }
            lazyConnect() {
                this.sw.send("ticker.lazy_connect", this.connectParams)
            }
            registerCb(t) {
                for (let e in t)
                    this.sw.addListener(e, t[e])
            }
            subscribe(t, e) {
                this.sw.send("ticker.subscribe", {
                    tokens: t,
                    tag: this.tagPrefix + e
                })
            }
            unsubscribe(t, e) {
                this.sw.send("ticker.unsubscribe", {
                    tokens: t,
                    tag: this.tagPrefix + e
                })
            }
            setMode(t, e, s) {
                this.sw.send("ticker.setMode", {
                    mode: t,
                    tokens: e,
                    tag: this.tagPrefix + s
                })
            }
            getQuote(t, e, s, i) {
                return this.sw.do("ticker.getQuote", {
                    id: t,
                    tokens: e,
                    fields: s
                }, i)
            }
            sendHeartbeat() {
                this.sw.send("ticker.heartbeat", {})
            }
        }
        var lt = s("714b")
          , ct = s("aada")
          , ut = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "page-header"
            }, [t.state.ui_status.showFirstError ? s("error-state", {
                attrs: {
                    title: t.errorTitle || "Could not load data.",
                    error: t.state.error
                }
            }) : t.state.ui_status.showEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName(t.emptyImage))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [t._t("empty-message"), t._v(" "), t.state.status.loading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 2)]) : s("header", {
                staticClass: "data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("span", {
                staticClass: "title"
            }, [t._v("\n                " + t._s(t.title) + " "), t.state.ui_status.hasData ? [t._v("(" + t._s(t.state.data.length) + ")")] : t._e()], 2), t._v(" "), t.state.ui_status.showRecurringError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.state.error.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.state.status.loading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)])], 1)
        }
          , dt = []
          , ht = s("9c9e")
          , pt = {
            mixins: [ht["a"]],
            name: "page-header",
            props: {
                title: String,
                emptyImage: String,
                emptyMessage: String,
                errorTitle: String,
                state: Object
            }
        }
          , mt = pt
          , vt = s("0c7c")
          , _t = Object(vt["a"])(mt, ut, dt, !1, null, null, null)
          , gt = _t.exports
          , ft = s("f8fb")
          , bt = s("6825")
          , Ct = s("e2ac")
          , yt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("li", {
                staticClass: "addon-menu separator"
            }, [s("ul", {
                staticClass: "list-flat"
            }, t._l(t.enabledBrands, (function(e, i) {
                return s("li", {
                    key: i
                }, [s("a", {
                    staticClass: "branded svg",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            t.stopPropagation(),
                            e.action.apply(null, arguments)
                        }
                    }
                }, [e.isDarkThemeAssets ? s("img", {
                    staticClass: "logo",
                    attrs: {
                        src: t.getStatic(t.appendThemeName(e.logo))
                    }
                }) : s("img", {
                    staticClass: "logo",
                    attrs: {
                        src: t.getStatic(e.logo)
                    }
                }), t._v(" "), s("span", [t._v(t._s(e.label))]), t._v(" "), e.isExternal ? s("span", {
                    staticClass: "icon icon-external-link text-light",
                    style: t.externalLinkStyle
                }) : t._e(), t._v(" "), "smallcase" === e.name && t.instrument && t.instrument.isEvent ? s("sup", {
                    staticClass: "events-label text-blue"
                }, [t._v("EVENT")]) : t._e()])])
            }
            )), 0)])
        }
          , wt = [];
        const Tt = {
            INSTRUMENT: "instrument",
            ORDER: "order",
            HOLDING: "holding"
        };
        var kt = {
            props: ["dataType", "data"],
            inject: ["instrumentManager"],
            mixins: [ht["a"]],
            created() {
                this.sentinelURL = "https://sentinel.zerodha.com/dashboard?utm_source=context-menu&utm_medium=kite&stock=",
                this.streakURL = "https://streak.zerodha.com/strategy/?utm_source=context-menu&utm_medium=kite&stock=",
                this.stockReportsURL = "https://stockreports.zerodha.com/viewer?utm_source=context-menu&utm_medium=kite#",
                this.brands = [{
                    name: "smallcase",
                    label: "Fundamentals",
                    isEnabled: this.isStockWidgetEnabled,
                    logo: "images/addons/tickertape.svg",
                    action: this.showStockWidget,
                    isDarkThemeAssets: !0,
                    isExternal: !1
                }, {
                    name: "Streak",
                    label: "Technicals",
                    isEnabled: this.isInstrument,
                    logo: "images/addons/streak.svg",
                    action: this.showTechnicalWidget,
                    isExternal: !1
                }, {
                    name: "sensibull",
                    label: "Option Chain",
                    isEnabled: this.isOptionChainEnabled,
                    logo: "images/addons/sensibull.svg",
                    action: this.showOptionChain,
                    isExternal: !1
                }],
                this.isInstrument() && (this.instrument = this.instrumentManager.get(this.data.tradingsymbol, null, this.data.exchange))
            },
            computed: {
                externalLinkStyle() {
                    return {
                        marginLeft: "85%",
                        position: "absolute"
                    }
                },
                enabledBrands() {
                    return this.brands.filter(t=>t.isEnabled())
                }
            },
            methods: {
                isInstrument() {
                    return this.dataType === Tt.INSTRUMENT
                },
                isStockWidgetEnabled() {
                    return this.isInstrument() && this.instrumentManager.IsEquity(this.data.exchange)
                },
                isTradable() {
                    return this.instrument && this.instrument.tradable || !1
                },
                isStockReportsEnabled() {
                    return this.isStockWidgetEnabled() && this.isTradable()
                },
                isOptionChainEnabled() {
                    return !!this.instrument && ("NFO" === this.instrument.exchange || "BFO" === this.instrument.exchange || "NSE" === this.instrument.exchange && -1 === this.instrument.tradingsymbol.indexOf("-") || -1 !== ["NIFTY 50", "NIFTY BANK", "NIFTY MID SELECT", "NIFTY FIN SERVICE", "SENSEX"].indexOf(this.instrument.tradingsymbol) || "CDS" === this.instrument.exchange && -1 !== this.instrument.tradingsymbol.indexOf("USDINR") || "BCD" === this.instrument.exchange && -1 !== this.instrument.tradingsymbol.indexOf("USDINR"))
                },
                showStockWidget() {
                    this.$events.emit(f["d"].EVENTS.showStockWidget, {
                        tradingsymbol: this.data.tradingsymbol,
                        exchange: this.data.exchange,
                        tab: this.instrument && this.instrument.isEvent ? "events" : ""
                    })
                },
                showTechnicalWidget() {
                    this.$events.emit(f["d"].EVENTS.showTechnicalWidget, this.data)
                },
                showOptionChain() {
                    this.$events.emit(f["d"].EVENTS.showOptionChain, this.data)
                },
                gotoSentinel() {
                    let t = this.data.exchange + ":" + this.data.tradingsymbol;
                    window.open(this.sentinelURL + encodeURIComponent(t))
                },
                gotoStockReports() {
                    let t = this.data.exchange + ":" + this.data.tradingsymbol;
                    window.open(this.stockReportsURL + encodeURIComponent(t))
                }
            }
        }
          , xt = kt
          , Et = Object(vt["a"])(xt, yt, wt, !1, null, null, null)
          , St = Et.exports
          , Pt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("li", {
                staticClass: "addon-menu separator"
            }, [s("ul", {
                staticClass: "list-flat"
            }, [t.availableItems.createGTT && t.currentIns && t.isCreateGTT ? s("li", [s("a", {
                staticClass: "svg",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.createGTT.apply(null, arguments)
                    }
                }
            }, [s("img", {
                attrs: {
                    src: "/static/images/gtt-icon.svg"
                }
            }), t._m(0)])]) : t._e(), t._v(" "), t.availableItems.createAlert && t.currentIns ? s("li", [s("a", {
                staticClass: "svg",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.createAlert.apply(null, arguments)
                    }
                }
            }, [s("img", {
                attrs: {
                    src: "/static/images/addons/alert.svg"
                }
            }), s("span", [t._v("Create alert")])])]) : t._e(), t._v(" "), t.availableItems.sendGift && t.currentIns ? s("li", [s("a", {
                staticClass: "svg",
                attrs: {
                    target: "_blank",
                    href: t.sendGiftURL
                }
            }, [s("span", {
                staticClass: "icon icon-gift"
            }), t._v("Send as a gift\n\t\t\t")])]) : t._e(), t._v(" "), t.availableItems.marketDepth && t.currentIns ? s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.showMarketDepthWidget.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-align-center"
            }), t._v("Market depth\n\t\t\t")])]) : t._e(), t._v(" "), s("li", {
                staticClass: "multiple-2"
            }, [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.openInAppChart.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-trending-up"
            }), t._v(" Chart\n\t\t\t")]), t._v(" "), s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "options",
                attrs: {
                    title: "Popout"
                }
            }, [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.openPopoutChart.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-external-link"
            })])])]), t._v(" "), t.availableItems.addMarketwatch && t.currentIns ? s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.addToMarketWatch()
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-market-watch"
            }), t._v(" Add to marketwatch\n\t\t\t")])]) : t._e()])])
        }
          , At = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", [t._v("Create GTT "), s("span", {
                staticClass: "text-lightest"
            }, [t._v(" / GTC")])])
        }
        ]
          , It = s("3db7")
          , Ot = s("9f74")
          , Dt = s("d1de")
          , Mt = s("9285");
        const Nt = {
            marketDepth: "marketDepth",
            addMarketwatch: "addMarketwatch",
            createGTT: "createGTT",
            inappChart: "inappChart",
            popoutChart: "popoutChart",
            createAlert: "createAlert"
        }
          , Rt = {
            sendGift: "sendGift"
        }
          , Lt = "allDefaults";
        var $t = {
            props: ["instrument", "tradingsymbol", "exchange", "include", "exclude", "data"],
            inject: ["instrumentManager"],
            data() {
                return {}
            },
            created() {},
            computed: {
                ...Object(u["d"])(["theme"]),
                ...Object(u["d"])(Dt["b"], ["preferences"]),
                ...Object(u["d"])(Ot["b"], ["currentWatchId", "marketwatches"]),
                currentIns() {
                    return this.instrument ? this.instrument : this.instrumentManager.get(this.tradingsymbol, null, this.exchange)
                },
                isCurrentIns() {
                    return this.currentIns && this.currentIns.isFound
                },
                availableItems() {
                    if (!this.include && !this.exclude)
                        return Nt;
                    if (this.include) {
                        let t = {};
                        for (let e of this.include)
                            e !== Lt ? (Nt[e] && (t[e] = Nt[e]),
                            Rt[e] && (t[e] = Rt[e])) : t = {
                                ...t,
                                ...Nt
                            };
                        return t
                    }
                    if (this.exclude) {
                        let t = {
                            ...Nt
                        };
                        for (let e of this.exclude)
                            Nt[e] && delete t[e];
                        return t
                    }
                },
                isCreateGTT() {
                    return !(!this.currentIns || !this.currentIns.tradable) && ("NSE" === this.currentIns.exchange || "BSE" === this.currentIns.exchange || "NFO" === this.currentIns.exchange || void 0)
                },
                sendGiftURL() {
                    return "https://console.zerodha.com/gift?src=kiteweb"
                }
            },
            methods: {
                itemData(t) {
                    return this.data && this.data[t]
                },
                createGTT() {
                    let t = this.itemData(Nt.createGTT)
                      , e = {
                        tradingsymbol: this.currentIns.tradingsymbol,
                        exchange: this.currentIns.exchange
                    };
                    this.$events.emit(C["b"].EVENTS.GTT_PLACE, {
                        transactionType: t && t.transactionType,
                        condition: t && t.condition || e,
                        lastPrice: t && t.lastPrice,
                        type: t && t.type,
                        orders: t && t.orders
                    })
                },
                createAlert() {
                    this.$events.emit(It["a"].EVENTS.ADD, {
                        lhsInstrument: this.currentIns
                    })
                },
                openInAppChart() {
                    let t = this.preferences.chart_type
                      , e = {
                        name: Mt["b"][t] || Mt["b"][Mt["a"]],
                        params: {
                            token: this.currentIns.instrumentToken,
                            segment: this.currentIns.segment,
                            tradingsymbol: this.currentIns.tradingsymbol
                        }
                    };
                    "dark" === this.theme && (e["query"] = {
                        theme: "dark"
                    }),
                    this.$router.push(e)
                },
                openPopoutChart() {
                    window.open(Object(b["h"])(this.currentIns, this.$router, this.preferences.chart_type, this.theme), "_blank")
                },
                addToMarketWatch() {
                    this.$events.emit(y["c"].EVENTS.ADD, {
                        instrument: this.currentIns
                    })
                },
                showMarketDepthWidget() {
                    this.$events.emit(f["d"].EVENTS.showMarketDepthWidget, {
                        instrument: this.currentIns
                    })
                }
            }
        }
          , Ut = $t
          , Ft = Object(vt["a"])(Ut, Pt, At, !1, null, null, null)
          , jt = Ft.exports
          , Ht = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.showStockWidget && t.widgetUrl ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "stock-widget-modal",
                attrs: {
                    "z-index": 13
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "stock-widget-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("iframe", {
                attrs: {
                    src: t.widgetUrl
                }
            })]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.instrument && t.instrument.tradable ? [s("su-button", {
                staticClass: "button-outline button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.placeOrder("BUY")
                    }
                }
            }, [t._v("Buy")]), t._v(" "), s("su-button", {
                staticClass: "button-outline button-orange",
                nativeOn: {
                    click: function(e) {
                        return t.placeOrder("SELL")
                    }
                }
            }, [t._v("Sell")])] : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hide.apply(null, arguments)
                    }
                }
            }, [t._v("Close")])], 2)]) : t._e()
        }
          , Bt = []
          , zt = {
            name: "stock-widget",
            inject: ["instrumentManager"],
            data() {
                return {
                    instrument: null,
                    widgetUrl: "",
                    showStockWidget: !1
                }
            },
            created() {
                this.$events.on("showStockWidget", this.showWidget)
            },
            beforeDestroy() {
                window.removeEventListener("click", this.hide)
            },
            computed: {
                ...Object(u["d"])(["theme"])
            },
            methods: {
                show() {
                    this.showStockWidget = !0,
                    window.addEventListener("click", this.hide)
                },
                hide() {
                    window.removeEventListener("click", this.hide),
                    this.showStockWidget = !1
                },
                showWidget(t) {
                    this.instrument = this.instrumentManager.get(t.tradingsymbol, null, t.exchange),
                    this.instrument && (this.widgetUrl = `https://stocks.tickertape.in/tickers/${this.instrument.symbol}?exchange=${this.instrument.exchange}&broker=kite&agent=web&theme=${this.theme}`,
                    t.tab && (this.widgetUrl += "&tab=" + t.tab),
                    this.show())
                },
                placeOrder(t) {
                    this.$events.emit(C["b"].EVENTS.ORDER_PLACE, {
                        instrument: this.instrument,
                        transactionType: t,
                        quantity: 1,
                        lastPrice: 0
                    })
                }
            }
        }
          , Vt = zt
          , qt = Object(vt["a"])(Vt, Ht, Bt, !1, null, null, null)
          , Wt = qt.exports
          , Gt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isWidget && t.widgetUrl ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "technical-widget-modal",
                attrs: {
                    "z-index": 13
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "technical-widget-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("iframe", {
                attrs: {
                    src: t.widgetUrl
                }
            })]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.instrument && t.instrument.tradable ? [s("su-button", {
                staticClass: "button-outline button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.placeOrder("BUY")
                    }
                }
            }, [t._v("Buy")]), t._v(" "), s("su-button", {
                staticClass: "button-outline button-orange",
                nativeOn: {
                    click: function(e) {
                        return t.placeOrder("SELL")
                    }
                }
            }, [t._v("Sell")])] : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hide.apply(null, arguments)
                    }
                }
            }, [t._v("Close")])], 2)]) : t._e()
        }
          , Yt = []
          , Qt = {
            name: "technical-widget",
            inject: ["instrumentManager"],
            data() {
                return {
                    instrument: null,
                    widgetUrl: "",
                    isWidget: !1
                }
            },
            created() {
                this.$events.on(f["c"].showTechnicalWidget, this.showWidget)
            },
            beforeDestroy() {
                window.removeEventListener("click", this.hide)
            },
            computed: {
                ...Object(u["d"])(["theme"])
            },
            methods: {
                show() {
                    this.isWidget = !0,
                    window.addEventListener("click", this.hide)
                },
                hide() {
                    window.removeEventListener("click", this.hide),
                    this.isWidget = !1
                },
                showWidget(t) {
                    if (this.instrument = this.instrumentManager.get(t.tradingsymbol, null, t.exchange),
                    this.instrument) {
                        let t = this.instrument.exchange + ":" + encodeURIComponent(this.instrument.tradingsymbol)
                          , e = "https://mo.streak.tech/";
                        this.widgetUrl = `${e}?utm_source=context-menu&utm_medium=kite&stock=${t}&theme=${this.theme}`,
                        this.show()
                    }
                },
                placeOrder(t) {
                    this.$events.emit(C["b"].EVENTS.ORDER_PLACE, {
                        instrument: this.instrument,
                        transactionType: t,
                        quantity: this.instrument.lotSize || 1,
                        lastPrice: 0
                    })
                }
            }
        }
          , Kt = Qt
          , Xt = Object(vt["a"])(Kt, Gt, Yt, !1, null, null, null)
          , Zt = Xt.exports
          , Jt = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isWidget && t.widgetUrl ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "option-chain-modal",
                attrs: {
                    "z-index": 13
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "option-chain-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("iframe", {
                attrs: {
                    src: t.widgetUrl
                }
            })])]) : t._e()
        }
          , te = []
          , ee = {
            name: "option-chain-widget",
            inject: ["instrumentManager", "userId"],
            data() {
                return {
                    instrument: null,
                    widgetUrl: "",
                    isWidget: !1
                }
            },
            created() {
                this.$events.on(f["c"].showOptionChain, this.showWidget)
            },
            beforeDestroy() {
                window.removeEventListener("click", this.hide)
            },
            computed: {
                ...Object(u["d"])(["theme"])
            },
            methods: {
                show() {
                    this.isWidget = !0
                },
                hide() {
                    window.removeEventListener("click", this.hide),
                    this.isWidget = !1
                },
                showWidget(t) {
                    if (this.instrument = this.instrumentManager.get(t.tradingsymbol, null, t.exchange),
                    this.instrument) {
                        let t = encodeURIComponent(this.instrument.tradingsymbol)
                          , e = "https://insights.sensibull.com/widget/option-chain";
                        this.widgetUrl = `${e}?instrument=${t}&theme=${this.theme}&broker=1`,
                        this.show()
                    }
                },
                placeOrder(t) {
                    this.$events.emit(C["b"].EVENTS.ORDER_PLACE, {
                        instrument: this.instrument,
                        transactionType: t,
                        quantity: 1,
                        lastPrice: 0
                    })
                }
            }
        }
          , se = ee
          , ie = Object(vt["a"])(se, Jt, te, !1, null, null, null)
          , ae = ie.exports
          , ne = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.show ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "keyboard-shortcuts-modal",
                on: {
                    close: t.close
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Keyboard Shortcuts")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "blocks-wrap"
            }, t._l(t.shortcutsCategory, (function(e, i) {
                return s("div", {
                    key: e,
                    staticClass: "block",
                    class: (i + 1) % 2 === 0 ? "even" : "odd"
                }, [s("h3", {
                    staticClass: "category"
                }, [t._v(t._s(e))]), t._v(" "), t._l(t.shortcuts[e], (function(e, i) {
                    return [s("div", {
                        key: i + 1,
                        staticClass: "row shortcuts"
                    }, [s("div", {
                        staticClass: "six columns"
                    }, [s("span", {
                        staticClass: "desc"
                    }, [t._v(t._s(e.desc))])]), t._v(" "), s("div", {
                        staticClass: "six columns keys"
                    }, [s("span", {
                        staticClass: "key text-label blue"
                    }, t._l(e.keys, (function(i, a) {
                        return s("span", {
                            key: a + 1
                        }, [a > 0 && !1 !== e.combine ? s("span", {
                            staticClass: "dim joiner"
                        }, [t._v("+")]) : t._e(), t._v(" "), s("span", {
                            domProps: {
                                innerHTML: t._s(i)
                            }
                        })])
                    }
                    )), 0)])])]
                }
                ))], 2)
            }
            )), 0)])]) : t._e()
        }
          , re = []
          , oe = {
            name: "keyboard-shortcuts",
            props: {
                show: {
                    required: !0
                }
            },
            methods: {
                close: function() {
                    this.$emit("close")
                }
            },
            created() {
                this.shortcutsCategory = ["navigation", "marketwatch", "Popout chart"],
                this.shortcuts = {
                    navigation: [{
                        keys: ["Ctrl", "K"],
                        desc: "Open universal search"
                    }, {
                        keys: ["A"],
                        desc: "Dashboard"
                    }, {
                        keys: ["O"],
                        desc: "Orders"
                    }, {
                        keys: ["H"],
                        desc: "Holdings"
                    }, {
                        keys: ["P"],
                        desc: "Positions"
                    }, {
                        keys: ["F"],
                        desc: "Funds"
                    }, {
                        keys: ["I"],
                        desc: "Profile"
                    }, {
                        keys: ["J"],
                        desc: "Edit Profile"
                    }, {
                        keys: ["/ or ?"],
                        desc: "Keyboard Shortcuts"
                    }],
                    marketwatch: [{
                        keys: ["~ or `"],
                        desc: "Focus on marketwatch search or universal search"
                    }, {
                        keys: ["&#8593;", "&#8595;"],
                        desc: "Cycle through instruments",
                        combine: !1
                    }, {
                        keys: ["B"],
                        desc: "Buy instrument"
                    }, {
                        keys: ["S"],
                        desc: "Sell instrument"
                    }, {
                        keys: ["D"],
                        desc: "Open market depth"
                    }, {
                        keys: ["C"],
                        desc: "Open chart"
                    }, {
                        keys: ["Del"],
                        desc: "Delete instrument"
                    }, {
                        keys: ["Ctrl", "Shift", "1 to 7"],
                        desc: "Switch marketwatch"
                    }],
                    "Popout chart": [{
                        keys: ["B"],
                        desc: "Buy opened chart instrument"
                    }, {
                        keys: ["S"],
                        desc: "Sell opened chart instrument"
                    }, {
                        keys: ["Ctrl", "Shift", "Z"],
                        desc: "Toggle quick trade drawer"
                    }]
                }
            },
            data: function() {
                return {
                    showModal: !1
                }
            }
        }
          , le = oe
          , ce = Object(vt["a"])(le, ne, re, !1, null, null, null)
          , ue = ce.exports
          , de = s("9946")
          , he = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isOnline ? t._e() : s("div", {
                staticClass: "offline-indicator"
            }, [t._t("message")], 2)
        }
          , pe = []
          , me = {
            name: "offline-indicator",
            props: {},
            data() {
                return {
                    isOnline: !0
                }
            },
            created() {
                window.addEventListener("online", this.onOnline),
                window.addEventListener("offline", this.onOffline)
            },
            mounted() {
                void 0 === window.navigator.onLine ? this.setOnline(!0) : this.setOnline(window.navigator.onLine)
            },
            beforeDestroy() {
                window.removeEventListener("online", this.onOnline),
                window.removeEventListener("offline", this.onOffline)
            },
            methods: {
                onOffline() {
                    this.setOnline(!1),
                    this.$nextTick(()=>{
                        document.body.scrollTop = 0,
                        document.documentElement.scrollTop = 0
                    }
                    )
                },
                onOnline() {
                    this.setOnline(!0)
                },
                setOnline(t) {
                    this.isOnline = t,
                    this.$emit("online", t)
                }
            }
        }
          , ve = me
          , _e = Object(vt["a"])(ve, he, pe, !1, null, null, null)
          , ge = _e.exports
          , fe = s("4cc0")
          , be = s("e452")
          , Ce = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "baskets"
            }, [s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [!t.enabled && t.id ? s("div", {
                staticClass: "baskets-tray",
                on: {
                    click: t.show
                }
            }, [s("span", {
                staticClass: "icon icon-shopping-bag"
            }), t._v(" "), s("span", {
                staticClass: "count"
            }, [t._v(t._s(t.items.length))])]) : t._e()]), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.enabled ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "baskets-modal",
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "header-left eight columns"
            }, [t.isEditName ? t._e() : s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "edit-name",
                attrs: {
                    title: "Edit name",
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.enableNameEdit.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-edit"
            })]), t._v(" "), s("su-input", {
                ref: "name",
                staticClass: "name",
                attrs: {
                    "dynamic-width": "",
                    "dynamic-width-size": t.nameFieldWidth,
                    disabled: !t.isEditName
                },
                on: {
                    blur: t.saveName,
                    enter: t.saveName
                },
                model: {
                    value: t.name,
                    callback: function(e) {
                        t.name = e
                    },
                    expression: "name"
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "header-right four columns text-right text-xsmall"
            }, [t.isAnalyzeWidget ? s("a", {
                staticClass: "basket-analyze-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.showAnalyzeWidget.apply(null, arguments)
                    }
                }
            }, [s("img", {
                staticStyle: {
                    height: "12px"
                },
                attrs: {
                    src: t.getStatic("images/addons/sensibull.svg")
                }
            }), t._v(" "), s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: "Analyze basket on Sensibull"
                }
            }, [t._v("Analyze")])]) : t.isBasketPerfWidget ? s("a", {
                staticClass: "basket-analyze-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.showBasketPerfWidget.apply(null, arguments)
                    }
                }
            }, [s("img", {
                staticStyle: {
                    height: "16px"
                },
                attrs: {
                    src: t.getStatic("images/addons/smallcase.svg")
                }
            }), t._v(" "), s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: "Analyze basket on smallcase"
                }
            }, [t._v("Analyze")])]) : t._e(), t._v(" "), s("span", {
                staticClass: "exporter"
            }, [t.items && t.items.length > 0 ? s("span", {
                staticClass: "download"
            }, [s("span", {
                staticClass: "download-csv",
                on: {
                    click: t.exportBasketItems
                }
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: "Export basket"
                }
            }, [s("span", {
                staticClass: "icon icon-download"
            })]), t._v(" "), s("a", {
                ref: "jsonDownloadLink",
                staticClass: "hide download-link",
                attrs: {
                    href: "#"
                }
            })])]) : t._e(), t._v(" "), s("span", {
                staticClass: "upload"
            }, [s("span", {
                staticClass: "upload-csv",
                on: {
                    click: t.triggerImportBasketItems
                }
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: "Import basket"
                }
            }, [s("span", {
                staticClass: "icon icon-upload"
            })]), t._v(" "), s("input", {
                ref: "jsonImport",
                staticClass: "hide",
                attrs: {
                    type: "file"
                },
                on: {
                    change: t.importBasketItems
                }
            })])])]), t._v(" "), s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "minimize",
                attrs: {
                    href: "",
                    title: "Minimize"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.hide.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-chevron-down"
            })])])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "instrument-search"
            }, [s("omnisearch", {
                attrs: {
                    "ins-manager": t.instrumentManager,
                    marketwatchInstruments: t.existingInstruments,
                    "max-results": 10,
                    placeholder: "Search and add instruments"
                },
                on: {
                    add: t.addItem
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "basket-table"
            }, [0 === t.items.length ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/marketwatch.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("h2", [t._v("Nothing here")]), t._v(" "), s("p", [t._v("Use the search bar to add instruments.")])])]) : s("su-table", {
                class: {
                    executed: t.execState,
                    pristine: !t.execState
                },
                attrs: {
                    data: t.items,
                    headers: t.tblHeaders,
                    drag: !t.execState,
                    "row-events": ""
                },
                on: {
                    rowOrderChange: t.onTableOrderChange,
                    rowEnter: t.onRowEnter,
                    rowLeave: t.onRowLeave
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            class: t.commonRowClasses(e.row),
                            attrs: {
                                width: "5%"
                            }
                        }, [s("span", {
                            staticClass: "text-label text-label-outline small transaction-type",
                            class: "BUY" === e.row.params.transactionType ? "blue" : "red"
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.params.transactionType) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "col-instrument",
                            class: t.commonRowClasses(e.row)
                        }, [s("div", [s("span", {
                            staticClass: "instrument",
                            domProps: {
                                innerHTML: t._s(t.dateSuperScript(e.row.instrument.niceName))
                            }
                        }), t._v(" "), s("span", {
                            staticClass: "exchange dim text-xxsmall"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.row.instrument.exchange) + "\n\t\t\t\t\t\t\t\t")]), t._v(" "), s("su-tags", {
                            key: t.guid(),
                            attrs: {
                                tags: t.getUITags(e.row.params.tags),
                                tagsMap: t.allTagsMap
                            }
                        })], 1), t._v(" "), s("div", {
                            staticClass: "last-price text-xxsmall",
                            class: t.commonRowClasses(e.row)
                        }, [t.ticks[e.row.instrument.instrumentToken] ? [t._v("\n\t\t\t\t\t\t\t\t\tLTP: " + t._s(t._f("inrFormat")(t.ticks[e.row.instrument.instrumentToken].lastPrice, e.row.instrument.precision, null, !0)) + "\n\t\t\t\t\t\t\t\t")] : [t._v("\n\t\t\t\t\t\t\t\t\t—\n\t\t\t\t\t\t\t\t")]], 2), t._v(" "), t.hoveredItemID === e.row.id ? s("div", {
                            staticClass: "row-actions"
                        }, [s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "button button-outline button-small button-clone",
                            attrs: {
                                title: "Clone order"
                            },
                            on: {
                                click: function(s) {
                                    return t.cloneItem(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-copy"
                        })]), t._v(" "), s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "button button-outline button-small button-edit",
                            attrs: {
                                title: "Edit"
                            },
                            on: {
                                click: function(s) {
                                    return t.modifyItem(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        })]), t._v(" "), s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "button button-outline button-small button-delete",
                            attrs: {
                                title: "Delete"
                            },
                            on: {
                                click: function(s) {
                                    return t.debouncedRemoveItem(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-trash"
                        })])]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "col-order-type",
                            class: t.commonRowClasses(e.row)
                        }, [s("span", {
                            staticClass: "order-type text-label text-label-outline small rose"
                        }, [t._v(t._s(e.row.params.orderType))])]), t._v(" "), s("td", {
                            class: t.commonRowClasses(e.row)
                        }, [s("span", {
                            staticClass: "product text-label text-label-outline small blue"
                        }, [t._v(t._s(e.row.params.product))]), t._v(" "), e.row.params.variety !== t.ORDER_VARIETY.REGULAR ? s("span", {
                            staticClass: "variety text-label text-label-outline small teal"
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.params.variety.toUpperCase()) + "\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), e.row.params.validity !== t.ORDER_VALIDITY.DAY ? s("span", {
                            staticClass: "validity text-label text-label-outline small indigo"
                        }, [t._v(t._s(e.row.params.validity))]) : t._e(), t._v(" "), e.row.params.gtt && (e.row.params.gtt.target || e.row.params.gtt.stoploss) ? s("img", {
                            staticClass: "gtt",
                            attrs: {
                                src: "/static/images/gtt-icon.svg"
                            }
                        }) : t._e()]), t._v(" "), s("td", {
                            class: t.commonRowClasses(e.row)
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.params.quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: t.commonRowClasses(e.row)
                        }, [e.row.params.orderType === t.ORDER_TYPE.LIMIT || e.row.params.orderType === t.ORDER_TYPE.SL ? s("div", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.params.price) + "\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), e.row.params.orderType === t.ORDER_TYPE.SL || e.row.params.orderType === t.ORDER_TYPE.SLM ? s("div", {
                            staticClass: "text-xxsmall dim"
                        }, [t._v("\n\t\t\t\t\t\t\t\tTrig. " + t._s(e.row.params.triggerPrice) + "\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), e.row.params.orderType === t.ORDER_TYPE.MARKET ? s("div", {
                            staticClass: "text-lightest"
                        }, [t._v("–")]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "col-req-margin",
                            class: t.commonRowClasses(e.row)
                        }, [t.margins && t.margins.orders && t.margins.orders[e.row.id] ? s("span", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins.orders[e.row.id].total, 2, null, !1)) + "\n\t\t\t\t\t\t\t")]) : s("span", [t._v("—")])]), t._v(" "), s("td", {
                            staticClass: "col-status"
                        }, [t.execState && t.execState[e.row.id] ? s("span", [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            staticClass: "text-label small grey status-label",
                            class: t.statusTagStyle(t.execState[e.row.id].status),
                            attrs: {
                                "tooltip-pos": "left",
                                title: t.execState[e.row.id].statusMessage
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.execState[e.row.id].status) + "\n\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), t.isBasketExecuteInProgress || !t.execState || t.execState[e.row.id] ? t._e() : s("button", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "button button-blue button-small button-edit text-xxsmall",
                            attrs: {
                                title: "Place order"
                            },
                            on: {
                                click: function(s) {
                                    return t.placeOrder(e.row)
                                }
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\tExecute\n\t\t\t\t\t\t\t")])])]
                    }
                }], null, !1, 999269161)
            })], 1), t._v(" "), t.isAddingItem ? s("div", {
                staticClass: "loader text-center"
            }, [s("su-loader")], 1) : t._e(), t._v(" "), t.execState ? s("div", {
                staticClass: "below-table"
            }, [s("a", {
                staticClass: "reconcile-statuses",
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.fetchOrders.apply(null, arguments)
                    }
                }
            }, [t.isOrdersFetchInProgress ? s("su-loader") : s("span", {
                staticClass: "icon icon-reload"
            }, [t._v("Refresh")])], 1)]) : t._e()]), t._v(" "), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "eight columns margins-summary"
            }, [t.items && t.items.length > 0 ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [t.margins ? s("div", {
                staticClass: "value dim"
            }, [t.margins.initial.total > 0 ? s("span", [t._v(t._s(t._f("inrFormat")(t.margins.initial.total, 2, null, !1)))]) : s("span", [t._v("0")])]) : s("div", {
                staticClass: "value"
            }, [t._v("N/A")]), t._v(" "), s("label", [t._v("Required margin")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "value final-margins-value"
            }, [t.margins ? s("span", [t.margins.final.total > 0 ? s("span", [t._v(t._s(t._f("inrFormat")(t.margins.final.total, 2, null, !1)))]) : s("span", [t._v("0")])]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")]), t._v(" "), t.execState ? t._e() : s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "fetch-margins",
                attrs: {
                    href: "",
                    title: "Refresh margins"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.fetchMargins.apply(null, arguments)
                    }
                }
            }, [t.isMarginFetchInProgress ? s("su-loader") : s("span", {
                staticClass: "icon icon-reload"
            })], 1)]), t._v(" "), s("label", [t._v("\n\t\t\t\t\t\t\t\tFinal margin\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t"), s("a", {
                staticClass: "text-xxsmall",
                attrs: {
                    href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/holdings/articles/kite-basket-orders",
                    target: "_blank"
                }
            }, [t._v("Learn more")]), t._v(" "), s("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "large",
                    expression: "'large'"
                }],
                attrs: {
                    title: "Include existing positions while computing margins"
                }
            }, [s("su-checkbox", {
                staticClass: "consider-positions",
                attrs: {
                    label: "Include existing positions"
                },
                model: {
                    value: t.considerPositions,
                    callback: function(e) {
                        t.considerPositions = e
                    },
                    expression: "considerPositions"
                }
            })], 1)])])]) : s("div", [t._v("\n\t\t\t\t\t\t \n\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "four columns actions"
            }, [t.isShowExecute && t.items.length > 0 ? s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    disabled: t.isBasketExecuteInProgress,
                    processing: t.isBasketExecuteInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.showExecuteConfirm.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tExecute\n\t\t\t\t\t")]) : t._e(), t._v(" "), t.execState ? s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.resetExecState.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hide.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tClose\n\t\t\t\t\t")]), t._v(" "), "sip" === t.navSource ? s("p", [s("custom-router-link", {
                attrs: {
                    to: {
                        name: t.navSource
                    }
                },
                nativeOn: {
                    click: function(e) {
                        return function() {
                            t.id = "",
                            t.hide()
                        }
                        .apply(null, arguments)
                    }
                }
            }, [t._v("← Back to SIP")])], 1) : t._e()], 1)])])]) : t._e()], 1), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isCreateBasket ? s("create-basket", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideCreateBasket,
                    expression: "hideCreateBasket"
                }],
                on: {
                    success: t.onBasketCreate,
                    close: t.hideCreateBasket
                }
            }) : t._e()], 1), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isDeleteBasket ? s("delete-basket", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideDeleteBasket,
                    expression: "hideDeleteBasket"
                }],
                attrs: {
                    basket: t.basketToDelete
                },
                on: {
                    success: t.onBasketDelete,
                    close: t.hideDeleteBasket
                }
            }) : t._e()], 1), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isExecuteConfirm ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideExecuteConfirm,
                    expression: "hideExecuteConfirm"
                }],
                staticClass: "execute-confirm-modal",
                on: {
                    close: t.hideExecuteConfirm
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Are you sure?")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t._v("\n\t\t\tPlace all " + t._s(t.items.length) + " order(s) in the basket?"), s("br"), s("br")]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.debouncedExecute.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\tYes\n\t\t\t")]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hideExecuteConfirm.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\tNo\n\t\t\t")])], 1)]) : t._e()], 1), t._v(" "), s("basket-perf-widget")], 1)
        }
          , ye = []
          , we = s("53a8")
          , Te = s("3da7")
          , ke = s("c184")
          , xe = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "baskets-create-modal",
                on: {
                    close: t.close
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("h2", [t._v("Create basket")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            })]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("su-form", {
                ref: "createBasketForm",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.create.apply(null, arguments)
                    }
                }
            }, [s("su-input", {
                attrs: {
                    autofocus: "",
                    label: "Name",
                    placeholder: "Basket name",
                    maxlength: 100,
                    autocomplete: "off"
                },
                model: {
                    value: t.name,
                    callback: function(e) {
                        t.name = e
                    },
                    expression: "name"
                }
            }), t._v(" "), s("div", {
                staticClass: "actions"
            }, [s("su-button", {
                staticClass: "button button-blue wide",
                attrs: {
                    type: "submit",
                    processing: t.isCreateInProgess,
                    disabled: t.isCreateInProgess
                }
            }, [t._v("Create")])], 1), t._v(" "), t.apiError ? s("p", {
                staticClass: "error text-center text-red"
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            }), t._v(" " + t._s(t.apiError) + "\n\t\t\t")]) : t._e()], 1)], 1)])
        }
          , Ee = []
          , Se = {
            data() {
                return {
                    name: "",
                    apiError: "",
                    isCreateInProgess: !1
                }
            },
            methods: {
                close() {
                    this.$emit("close")
                },
                create() {
                    we["a"].createBasket({
                        name: this.name
                    }).then(t=>{
                        let e = {
                            id: t.data.data,
                            name: this.name
                        };
                        this.$emit("success", e)
                    }
                    ).catch(t=>{
                        let e = Object(b["j"])(t);
                        this.$emit("error", e),
                        this.apiError = e.message
                    }
                    )
                }
            }
        }
          , Pe = Se
          , Ae = Object(vt["a"])(Pe, xe, Ee, !1, null, null, null)
          , Ie = Ae.exports
          , Oe = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "baskets-delete-modal",
                on: {
                    close: t.close
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("h2", [t._v("Delete basket?")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            })]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t._v("\n\t\tAre you sure you want to delete basket - " + t._s(t.basket.name) + "?\n\t")]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.isDeleteInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.deleteBasket(t.basket)
                    }
                }
            }, [s("span", [t._v("Delete")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Close")])])], 1)])
        }
          , De = []
          , Me = {
            props: {
                basket: Object
            },
            data() {
                return {
                    isDeleteInProgress: !1
                }
            },
            methods: {
                close() {
                    this.$emit("close")
                },
                deleteBasket() {
                    we["a"].deleteBasket(this.basket.id).then(t=>{
                        this.$emit("success", this.basket),
                        this.$emit("close")
                    }
                    ).catch(t=>{
                        let e = Object(b["j"])(t);
                        this.$emit("error", e),
                        this.$toast.error({
                            title: "Error deleting basket",
                            message: e.message,
                            orientation: this.$toast.TOP_RIGHT
                        })
                    }
                    )
                }
            }
        }
          , Ne = Me
          , Re = Object(vt["a"])(Ne, Oe, De, !1, null, null, null)
          , Le = Re.exports
          , $e = s("0e50")
          , Ue = s("39e3")
          , Fe = s("0a3b")
          , je = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isWidget ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "basket-perf-widget-modal",
                attrs: {
                    "z-index": t.zIndex
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "basket-perf-widget-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("iframe", {
                ref: "iframe",
                attrs: {
                    src: t.widgetUrl
                }
            })]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hide.apply(null, arguments)
                    }
                }
            }, [t._v("Close")])], 1)]) : t._e()
        }
          , He = []
          , Be = s("b383")
          , ze = s.n(Be)
          , Ve = {
            name: "basket-perf-widget",
            data() {
                return {
                    isWidget: !1,
                    zIndex: 13
                }
            },
            created() {
                this.$events.on(f["c"].showBasketPerfWidget, this.showWidget)
            },
            beforeDestroy() {
                window.removeEventListener("click", this.hide)
            },
            computed: {
                ...Object(u["d"])(["theme"])
            },
            methods: {
                show() {
                    this.isWidget = !0
                },
                hide() {
                    this.isWidget = !1
                },
                showWidget(t) {
                    t && t.zIndex && (this.zIndex = t.zIndex),
                    this.show();
                    let e = ze.a.stringify({
                        tradingsymbol: t.instruments.map(t=>t.tradingsymbol),
                        exchange: t.instruments.map(t=>t.exchange),
                        quantity: t.instruments.map(t=>t.quantity),
                        transaction_type: t.instruments.map(t=>t.transactionType)
                    });
                    this.widgetUrl = `https://basket.smallcase.com/?theme=${this.theme}&${e}`
                }
            }
        }
          , qe = Ve
          , We = Object(vt["a"])(qe, je, He, !1, null, null, null)
          , Ge = We.exports;
        const Ye = "ordersbasket.add"
          , Qe = "ordersbasket.modify"
          , Ke = "PLACED"
          , Xe = "FAILED"
          , Ze = "bsk"
          , Je = "baskets"
          , ts = Object.freeze([{
            label: " ",
            field: "transactionType",
            sort: !1
        }, {
            label: "Instrument",
            field: "instrument.tradingsymbol",
            sort: !1
        }, {
            label: "Order type",
            field: "orderType",
            sort: !1
        }, {
            label: "",
            field: "",
            sort: !1
        }, {
            label: "Qty.",
            field: "quantity",
            sort: !1
        }, {
            label: "Price",
            field: "price",
            sort: !1
        }, {
            label: "Req. margin",
            field: "",
            sort: !1,
            class: ["col-req-margin"]
        }, {
            label: "",
            field: "",
            sort: !1,
            class: ["status"]
        }])
          , es = {
            cleared: !1,
            enabled: !1,
            items: [],
            name: "Untitled basket",
            id: 0,
            tags: [],
            isCreateBasket: !1,
            isDeleteBasket: !1,
            basketToDelete: null,
            isAddingItem: !1,
            margins: null,
            marginFetchStatus: f["d"].API_STATUSES.initial,
            execStatus: f["d"].API_STATUSES.initial,
            isEditName: !1,
            hoveredItemID: null,
            isExecuteConfirm: !1,
            considerPositions: !1
        };
        var ss = {
            mixins: [ht["a"]],
            inject: ["ticker", "instrumentManager"],
            components: {
                omnisearch: ke["a"],
                "create-basket": Ie,
                "delete-basket": Le,
                "custom-router-link": de["a"],
                "basket-perf-widget": Ge
            },
            data() {
                return {
                    ...es,
                    navSource: null,
                    tblHeaders: [{
                        label: " ",
                        field: "transactionType",
                        sort: !1
                    }, {
                        label: "Instrument",
                        field: "instrument.tradingsymbol",
                        sort: !1
                    }, {
                        label: "Order type",
                        field: "orderType",
                        sort: !1
                    }, {
                        label: "",
                        field: "",
                        sort: !1
                    }, {
                        label: "Qty.",
                        field: "quantity",
                        sort: !1
                    }, {
                        label: "Price",
                        field: "price",
                        sort: !1
                    }, {
                        label: "Margin req.",
                        field: "",
                        sort: !1,
                        class: ["col-req-margin"]
                    }, {
                        label: "",
                        field: "",
                        sort: !1,
                        class: ["status"]
                    }]
                }
            },
            methods: {
                ...Object(u["e"])(X["b"], ["setBasketState", "resetBasketState", "setBasketItemState", "resetBasketItemState"]),
                ...Object(u["c"])($e["b"], ["fetchOrders", "fetchAllTags"]),
                resetState() {
                    for (let t in es)
                        this.$set(this, t, es[t])
                },
                defaultItem(t) {
                    return {
                        instrument: t,
                        weight: 0,
                        params: {
                            transactionType: C["b"].TRANSACTION_TYPE.BUY,
                            quantity: t.lotSize || 1
                        }
                    }
                },
                show() {
                    this.enabled = !0,
                    this.fetchMargins(),
                    this.subscribeTicksAllItems()
                },
                hide() {
                    this.$events.emit(Z["b"].EVENTS.ORDERS_BASKET_ON_CLOSE, {
                        id: this.id
                    }),
                    this.enabled = !1,
                    this.unsubscribeTicksAllItems()
                },
                create(t) {
                    this.resetState(),
                    this.showCreateBasket(),
                    this.navSource = t.navSource
                },
                modify(t) {
                    this.resetState(),
                    this.setBasketFromAPIResponse(t),
                    this.show()
                },
                delete(t) {
                    this.showDeleteBasket(t)
                },
                showCreateBasket() {
                    this.isCreateBasket = !0
                },
                hideCreateBasket() {
                    this.isCreateBasket = !1
                },
                onBasketCreate(t) {
                    this.$events.emit(Z["b"].EVENTS.ORDERS_BASKET_ON_CREATE, t),
                    this.hideCreateBasket(),
                    this.id = t.id,
                    this.name = t.name,
                    this.items = [],
                    this.show()
                },
                showDeleteBasket(t) {
                    this.basketToDelete = t,
                    this.isDeleteBasket = !0
                },
                hideDeleteBasket() {
                    this.basketToDelete = null,
                    this.isDeleteBasket = !1
                },
                onBasketDelete(t) {
                    this.$events.emit(Z["b"].EVENTS.ORDERS_BASKET_ON_DELETE, t),
                    t.id === this.id && (this.id = null,
                    this.enabled = !1)
                },
                sortItemsByWeight() {
                    this.items.sort((t,e)=>{
                        var s = t.weight
                          , i = e.weight;
                        return s < i ? -1 : s > i ? 1 : 0
                    }
                    )
                },
                addItem({instrument: t}) {
                    let e = this.defaultItem(t);
                    e.weight = this.nextWeight();
                    let s = {
                        type: Ye
                    }
                      , i = this.convertItemToOrderWindowParams({
                        item: e,
                        label: "Add",
                        additionalData: s
                    });
                    this.$events.emit(C["b"].EVENTS.ORDER_PLACE, i)
                },
                modifyItem(t) {
                    let e = {
                        type: Qe
                    }
                      , s = this.convertItemToOrderWindowParams({
                        item: t,
                        label: "Modify",
                        additionalData: e
                    });
                    this.$events.emit(C["b"].EVENTS.ORDER_PLACE, s)
                },
                removeItem(t) {
                    this.apiRemoveItem(t)
                },
                cloneItem(t) {
                    this.apiAddItem(t)
                },
                replaceItemByID(t, e) {
                    for (let s = 0; s < this.items.length; s++)
                        if (this.items[s].id === t)
                            return void this.$set(this.items, s, e)
                },
                removeItemByID(t) {
                    for (let e = 0; e < this.items.length; e++)
                        if (this.items[e].id === t)
                            return void this.items.splice(e, 1)
                },
                nextWeight() {
                    let t = -1;
                    for (let e of this.items)
                        e.weight > t && (t = e.weight);
                    return -1 === t ? 0 : t + 1
                },
                setBasketFromAPIResponse(t) {
                    this.id = t.id,
                    this.name = t.name,
                    this.tags = t.tags;
                    let e = [];
                    for (let s of t.items) {
                        let t = this.instrumentManager.get(s.tradingsymbol, null, s.exchange);
                        e.push({
                            id: s.id,
                            instrument: t,
                            weight: s.weight,
                            params: {
                                transactionType: s.params.transaction_type,
                                product: s.params.product,
                                orderType: s.params.order_type,
                                validity: s.params.validity,
                                validityTTL: s.params.validity_ttl,
                                quantity: s.params.quantity,
                                price: s.params.price,
                                triggerPrice: s.params.trigger_price,
                                disclosedQuantity: s.params.disclosed_quantity,
                                variety: s.params.variety,
                                gtt: s.params.gtt,
                                tags: s.params.tags || []
                            }
                        }),
                        s.params.tags && s.params.tags.length > 0 && this.fetchTags()
                    }
                    this.items = e
                },
                onOrderWindowPlace(t) {
                    if (!t || !t.data || t.data.type !== Ye && t.data.type !== Qe)
                        return;
                    if (t.variety === C["b"].VARIETY.BO)
                        return void this.$toast.error({
                            title: "Can't add BO",
                            message: "BO orders are not supported.",
                            orientation: this.$toast.TOP_RIGHT
                        });
                    let e = this.convertOrderWindowParamsToItem(t);
                    t.data.type === Ye ? this.apiAddItem(e) : t.data.type === Qe && this.apiModifyItem(e)
                },
                apiAddItem(t) {
                    this.isAddingItem = !0;
                    let e = this.convertItemToApiParams(t);
                    we["a"].addBasketItem(this.id, e).then(e=>{
                        t.id = e.data.data,
                        this.items.push(t),
                        this.subscribeTicks([t.instrument.instrumentToken]),
                        this.fetchMargins(),
                        this.isAddingItem = !1,
                        this.sortItemsByWeight()
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error adding item",
                            message: Object(b["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }),
                        this.isAddingItem = !1
                    }
                    )
                },
                apiModifyItem(t) {
                    let e = this.convertItemToApiParams(t);
                    we["a"].modifyBasketItem(this.id, t.id, e).then(e=>{
                        t.id = e.data.data,
                        this.replaceItemByID(t.id, t),
                        this.$events.emit(Z["b"].EVENTS.ORDERS_BASKET_ON_MODIFY, {
                            id: this.id
                        }),
                        this.fetchMargins(),
                        this.execState && this.execState[t.id] && this.resetBasketItemState({
                            basketID: this.id,
                            itemID: t.id
                        })
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error modifying item",
                            message: Object(b["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }),
                        this.isAddingItem = !1
                    }
                    )
                },
                apiRemoveItem(t) {
                    this.isAddingItem = !0,
                    we["a"].removeBasketItem(this.id, t.id).then(e=>{
                        this.removeItemByID(t.id),
                        this.isAddingItem = !1,
                        this.unsubscribeTicks([t.instrument.instrumentToken]),
                        this.$events.emit(Z["b"].EVENTS.ORDERS_BASKET_ON_MODIFY, {
                            id: this.id
                        }),
                        this.fetchMargins(),
                        0 === this.items.length && this.resetExecState()
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error removing item",
                            message: Object(b["j"])(t).message,
                            orientation: this.$toast.TOP_RIGHT
                        }),
                        this.isAddingItem = !1
                    }
                    )
                },
                convertItemToOrderWindowParams({item: t, label: e, additionalData: s}) {
                    s.weight = t.weight;
                    let i = t.params.tags && t.params.tags.filter(t=>t.startsWith("t:")).map(t=>{
                        let e = t.split(":");
                        return {
                            tag: e[1],
                            id: e[2]
                        }
                    }
                    );
                    return {
                        ...t.params,
                        instrument: t.instrument,
                        tradingsymbol: t.instrument.tradingsymbol,
                        exchange: t.instrument.exchange,
                        uid: t.id,
                        isCallback: !0,
                        label: e,
                        data: s,
                        context: "basket",
                        tags: i
                    }
                },
                convertOrderWindowParamsToItem(t) {
                    return {
                        id: t.uid,
                        instrument: t.instrument,
                        weight: t.data.weight,
                        params: {
                            transactionType: t.transactionType,
                            product: t.product,
                            orderType: t.orderType,
                            validity: t.validity,
                            validityTTL: t.validityTTL,
                            quantity: parseInt(t.quantity || 0),
                            price: parseFloat(t.price || 0),
                            triggerPrice: parseFloat(t.triggerPrice || 0),
                            disclosedQuantity: parseInt(t.disclosedQuantity || 0),
                            lastPrice: parseFloat(t.lastPrice || 0),
                            variety: t.variety,
                            gtt: t.gtt,
                            tags: t.tags && t.tags.map(t=>`t:${t.tag}:${t.id}`) || []
                        }
                    }
                },
                convertItemToApiParams(t) {
                    let e = {
                        tradingsymbol: t.instrument.tradingsymbol,
                        exchange: t.instrument.exchange,
                        weight: t.weight,
                        params: JSON.stringify({
                            transaction_type: t.params.transactionType,
                            product: t.params.product,
                            order_type: t.params.orderType,
                            validity: t.params.validity,
                            validity_ttl: t.params.validityTTL,
                            variety: t.params.variety,
                            quantity: t.params.quantity,
                            price: t.params.price,
                            trigger_price: t.params.triggerPrice,
                            disclosed_quantity: t.params.disclosedQuantity,
                            gtt: t.params.gtt,
                            tags: t.params.tags
                        })
                    };
                    return t.id && (e.id = t.id),
                    e
                },
                convertItemtoOrderApiParams(t, e) {
                    let s;
                    if (e.params.gtt && (e.params.gtt.stoploss || e.params.gtt.target)) {
                        let t = []
                          , i = e.params.transactionType.toUpperCase() === C["b"].TRANSACTION_TYPE.BUY ? 1 : 0;
                        e.params.gtt.stoploss && t.push([i, parseFloat(e.params.gtt.stoploss)]),
                        e.params.gtt.target && t.push([i, parseFloat(e.params.gtt.target)]),
                        e.params.transactionType.toUpperCase() === C["b"].TRANSACTION_TYPE.SELL && t.reverse(),
                        s = JSON.stringify(t)
                    }
                    return {
                        exchange: e.instrument.exchange.toUpperCase(),
                        tradingsymbol: e.instrument.tradingsymbol.toUpperCase(),
                        transaction_type: e.params.transactionType.toUpperCase(),
                        order_type: e.params.orderType.toUpperCase(),
                        quantity: parseInt(e.params.quantity).toString(),
                        price: parseFloat(e.params.price || 0).toString(),
                        product: e.params.product.toUpperCase(),
                        validity: e.params.validity.toUpperCase(),
                        validity_ttl: parseInt(e.params.validityTTL || 0).toString(),
                        disclosed_quantity: parseInt(e.params.disclosedQuantity || 0).toString(),
                        trigger_price: parseFloat(e.params.triggerPrice || 0).toString(),
                        variety: e.params.variety || C["b"].VARIETY.REGULAR,
                        tag: [Ze, Ze + ":" + t, ...e.params.tags],
                        gtt_params: s,
                        user_id: this.userId
                    }
                },
                fetchMargins() {
                    if (this.execState)
                        return;
                    if (!this.items || 0 === this.items.length)
                        return;
                    let t = [];
                    for (let e of this.items)
                        t.push({
                            exchange: e.instrument.exchange,
                            tradingsymbol: e.instrument.tradingsymbol,
                            transaction_type: e.params.transactionType,
                            variety: e.params.variety,
                            product: e.params.product,
                            order_type: e.params.orderType,
                            quantity: e.params.quantity,
                            price: e.params.price,
                            trigger_price: e.params.triggerPrice,
                            squareoff: 0,
                            stoploss: 0
                        });
                    this.apiFetchMargins(t)
                },
                apiFetchMargins(t) {
                    this.marginFetchStatus = f["d"].API_STATUSES.fetching;
                    let e = {
                        consider_positions: this.considerPositions || null,
                        mode: "compact"
                    };
                    we["a"].getBasketMargins(t, e).then(t=>{
                        this.setMargins(t.data.data),
                        this.marginFetchStatus = f["d"].API_STATUSES.success
                    }
                    ).catch(t=>{
                        this.marginFetchStatus = f["d"].API_STATUSES.error
                    }
                    )
                },
                setMargins(t) {
                    let e = {};
                    for (let s = 0; s < this.items.length; s++)
                        e[this.items[s].id] = {
                            total: t.orders[s].total
                        };
                    this.margins = {
                        initial: t.initial,
                        final: t.final,
                        orders: e
                    }
                },
                onTableOrderChange(t) {
                    let e = this.items[t.oldIndex];
                    this.items.splice(t.oldIndex, 1),
                    this.items.splice(t.newIndex, 0, e),
                    this.apiUpdateItemsWeight(),
                    this.fetchMargins()
                },
                apiUpdateItemsWeight() {
                    let t = {};
                    for (let e = 0; e < this.items.length; e++)
                        this.items[e].weight = e,
                        t[this.items[e].id] = e;
                    we["a"].modifyBasketItemsWeight(this.id, t).then(t=>{
                        console.log("update weights")
                    }
                    ).catch(t=>{
                        console.log("err updating weights", t)
                    }
                    )
                },
                async execute() {
                    this.hideExecuteConfirm(),
                    this.execStatus = f["d"].API_STATUSES.fetching;
                    for (let e of this.items) {
                        let s = this.convertItemtoOrderApiParams(this.id, e);
                        try {
                            let t = await Te["a"].placeOrder(s);
                            this.setBasketItemState({
                                id: this.id,
                                item: {
                                    id: e.id,
                                    tag: e.tag,
                                    orderID: t.data.data.order_id,
                                    status: Ke,
                                    statusMessage: null
                                }
                            })
                        } catch (t) {
                            let s = Object(b["j"])(t);
                            this.setBasketItemState({
                                id: this.id,
                                item: {
                                    id: e.id,
                                    tag: e.tag,
                                    orderID: null,
                                    status: Xe,
                                    statusMessage: this.stripMarkdownLink(s.message)
                                }
                            })
                        }
                    }
                    this.execStatus = f["d"].API_STATUSES.success,
                    this.fetchOrders()
                },
                async placeOrder(t) {
                    let e = this.convertItemtoOrderApiParams(this.id, t);
                    try {
                        let s = await Te["a"].placeOrder(e);
                        this.setBasketItemState({
                            id: this.id,
                            item: {
                                id: t.id,
                                tag: t.tag,
                                orderID: s.data.data.order_id,
                                status: Ke,
                                statusMessage: null
                            }
                        })
                    } catch (s) {
                        let e = Object(b["j"])(s);
                        this.setBasketItemState({
                            id: this.id,
                            item: {
                                id: t.id,
                                tag: t.tag,
                                orderID: null,
                                status: Xe,
                                statusMessage: this.stripMarkdownLink(e.message)
                            }
                        })
                    }
                    this.fetchOrders()
                },
                resetExecState() {
                    this.execState = null,
                    this.execStatus = f["d"].API_STATUSES.initial,
                    this.fetchMargins()
                },
                reconcileExecState(t) {
                    let e = {};
                    for (let i of t) {
                        let t = {
                            orderID: i.order_id,
                            status: i.status,
                            statusMessage: this.stripMarkdownLink(i.status_message),
                            filledQuantity: i.filled_quantity
                        };
                        e[i.order_id] = t
                    }
                    let s = this.$clone(this.execState);
                    for (let i in s) {
                        let t = s[i];
                        t.orderID && e[t.orderID] && this.setBasketItemState({
                            id: this.id,
                            item: {
                                id: t.id,
                                tag: t.tag,
                                orderID: e[t.orderID].orderID,
                                status: e[t.orderID].status,
                                statusMessage: this.stripMarkdownLink(e[t.orderID].statusMessage),
                                filledQuantity: e[t.orderID].filledQuantity
                            }
                        })
                    }
                },
                subscribeTicksAllItems() {
                    this.subscribeTicks(this.items.map(t=>t.instrument.instrumentToken))
                },
                unsubscribeTicksAllItems() {
                    this.unsubscribeTicks(this.items.map(t=>t.instrument.instrumentToken))
                },
                subscribeTicks(t) {
                    this.ticker.subscribe(t, Je),
                    this.ticker.setMode(this.ticker.modeLTP, t, Je)
                },
                unsubscribeTicks(t) {
                    this.ticker.unsubscribe(t, Je)
                },
                enableNameEdit() {
                    this.isEditName = !0,
                    this.$nextTick(()=>{
                        this.$refs.name.focus()
                    }
                    )
                },
                saveName() {
                    this.apiModifyBasket()
                },
                apiModifyBasket() {
                    let t = {
                        name: this.name,
                        tags: this.tags
                    };
                    we["a"].modifyBasket(this.id, t).then(t=>{
                        this.$nextTick(()=>{
                            this.$refs.name.blur(),
                            this.isEditName = !1
                        }
                        )
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error updating name",
                            message: Object(b["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT,
                            duration: 6e3
                        })
                    }
                    )
                },
                exportBasketItems() {
                    var t = JSON.stringify(this.items);
                    let e = "data:application/json;charset=utf-8,"
                      , s = encodeURI(e + t)
                      , i = this.name + ".json";
                    this.$refs.jsonDownloadLink.setAttribute("href", s),
                    this.$refs.jsonDownloadLink.setAttribute("download", i),
                    document.body.appendChild(this.$refs.jsonDownloadLink),
                    this.$refs.jsonDownloadLink.click()
                },
                triggerImportBasketItems() {
                    this.$refs.jsonImport.click()
                },
                importBasketItems() {
                    let t = this.$refs.jsonImport.files[0];
                    if (!t || "application/json" !== t.type)
                        return;
                    const e = new FileReader;
                    e.readAsText(t, "UTF-8"),
                    e.onload = t=>{
                        var e = JSON.parse(t.target.result);
                        for (let s of e)
                            s.instrument.tradingsymbol && s.instrument.exchange && (s.instrument = this.instrumentManager.get(s.instrument.tradingsymbol, null, s.instrument.exchange),
                            this.apiAddItem(s))
                    }
                    ,
                    e.onerror = t=>{
                        alert(t)
                    }
                },
                commonRowClasses(t) {
                    return {
                        greyed: this.execState && this.execState[t.id]
                    }
                },
                onRowEnter({row: t, event: e}) {
                    this.hoveredItemID = t.id
                },
                onRowLeave({row: t, event: e}) {
                    this.hoveredItemID = null
                },
                statusTagStyle(t) {
                    return {
                        red: t === Xe || "REJECTED" === t,
                        green: "COMPLETE" === t
                    }
                },
                showExecuteConfirm() {
                    this.isExecuteConfirm = !0
                },
                hideExecuteConfirm() {
                    this.isExecuteConfirm = !1
                },
                dateSuperScript(t) {
                    return Object(Fe["a"])(t)
                },
                stripMarkdownLink(t) {
                    return t ? t.replace(/\[(.+?)\]\((https?:\/\/.+?)\)/gi, "$1") : t
                },
                showAnalyzeWidget() {
                    this.$events.emit(f["d"].EVENTS.showStocksAnalyzeWidget, {
                        zIndex: 50,
                        basketID: this.id,
                        source: "basket_page"
                    })
                },
                showBasketPerfWidget() {
                    this.$events.emit(f["d"].EVENTS.showBasketPerfWidget, {
                        zIndex: 99,
                        instruments: this.items.map(t=>({
                            tradingsymbol: t.instrument.tradingsymbol,
                            exchange: t.instrument.exchange,
                            quantity: t.params.quantity,
                            transactionType: t.params.transactionType
                        }))
                    })
                },
                guid() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t=>(t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16))
                },
                fetchTags() {
                    this.allTags || this.allTagsFetchStatus === f["d"].API_STATUSES.fetching || this.fetchAllTags()
                },
                getUITags(t) {
                    return t ? t.filter(t=>t.startsWith("t:")).map(t=>t.split(":")[1]) : []
                }
            },
            created() {
                this.ORDER_TYPE = C["b"].ORDER_TYPE,
                this.ORDER_VARIETY = C["b"].VARIETY,
                this.ORDER_VALIDITY = C["b"].VALIDITY,
                this.ORDER_TABLE_HEADERS = ts,
                this.$events.on(Z["b"].EVENTS.ORDERS_BASKET_CREATE, this.create),
                this.$events.on(Z["b"].EVENTS.ORDERS_BASKET_MODIFY, this.modify),
                this.$events.on(Z["b"].EVENTS.ORDERS_BASKET_DELETE, this.delete),
                this.$events.on(C["b"].EVENTS.ORDER_PLACE_SUCCESS, this.onOrderWindowPlace),
                this.debouncedExecute = p()(this.execute, 500, {
                    leading: !0,
                    trailing: !1
                }),
                this.debouncedRemoveItem = p()(this.removeItem, 200, {
                    leading: !0,
                    trailing: !1
                })
            },
            computed: {
                ...Object(u["d"])(Dt["b"], ["userId"]),
                ...Object(u["d"])(Ue["b"], ["ticks"]),
                ...Object(u["d"])(X["b"], ["basketState"]),
                ...Object(u["d"])($e["b"], ["orders", "orderFetchStatus", "allTags", "allTagsFetchStatus"]),
                existingInstruments() {
                    let t = [];
                    for (let e of this.items)
                        t.push(e.instrument);
                    return t
                },
                isMarginFetchInProgress() {
                    return this.marginFetchStatus === f["d"].API_STATUSES.fetching
                },
                isOrdersFetchInProgress() {
                    return this.orderFetchStatus === f["d"].API_STATUSES.fetching
                },
                isBasketExecuteInProgress() {
                    return this.execStatus === f["d"].API_STATUSES.fetching
                },
                isBasketExecuted() {
                    return this.execStatus === f["d"].API_STATUSES.success
                },
                isShowExecute() {
                    return !this.execState || this.isBasketExecuteInProgress
                },
                execState: {
                    get() {
                        return this.basketState(this.id) || null
                    },
                    set(t) {
                        this.resetBasketState(this.id)
                    }
                },
                nameFieldWidth() {
                    return 9.75 - .5 * Math.floor(this.name.length / 25)
                },
                isAnalyzeWidget() {
                    if (this.items && this.items.length > 0)
                        for (let t of this.items)
                            if (t.instrument && ("NFO" === t.instrument.exchange || "BFO" === t.instrument.exchange || "CDS" === t.instrument.exchange))
                                return !0;
                    return !1
                },
                isBasketPerfWidget() {
                    if (this.items && this.items.length > 0)
                        for (let t of this.items)
                            if (t.instrument && this.instrumentManager.IsEquity(t.instrument.exchange))
                                return !0;
                    return !1
                },
                allTagsMap() {
                    let t = {};
                    return this.allTags && this.allTags.forEach(e=>{
                        t[e.tag] = e
                    }
                    ),
                    t
                }
            },
            watch: {
                orders(t) {
                    this.reconcileExecState(t)
                },
                items(t) {
                    const e = this.tblHeaders[1];
                    e.label = t ? `Instrument (${t.length} / 20)` : "Instrument",
                    this.tblHeaders.splice(1, 1, e)
                },
                considerPositions(t, e) {
                    t !== e && this.fetchMargins()
                }
            }
        }
          , is = ss
          , as = Object(vt["a"])(is, Ce, ye, !1, null, null, null)
          , ns = as.exports
          , rs = s("4e10")
          , os = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", [t.isShown ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                class: ["gtt-window", "transaction-type-" + t.trigger.transactionType.toLowerCase()],
                on: {
                    close: t.close
                }
            }, [s("div", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "row header-row"
            }, [s("div", {
                staticClass: "instrument-info eight columns header-left"
            }, [s("span", {
                staticClass: "tradingsymbol",
                domProps: {
                    innerHTML: t._s(t.dateSuperScript(t.trigger.condition.instrument.niceName))
                }
            }), t._v(" "), s("span", {
                staticClass: "text-label text-label-outline blue exchange"
            }, [t._v("\n\t\t\t\t\t\t" + t._s(t.trigger.condition.instrument.exchange) + "\n\t\t\t\t\t")]), t._v(" "), s("span", {
                staticClass: "text-xsmall dim last-price"
            }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.lastPrice, t.trigger.condition.instrument.precision)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "four columns text-right header-right"
            }, [s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/z-connect/tradezerodha/kite/introducing-gtt-good-till-triggered-orders",
                    title: "Help"
                }
            }, [s("span", {
                staticClass: "icon icon-info"
            })]), t._v(" "), s("a", {
                staticClass: "branding",
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/z-connect/tradezerodha/kite/introducing-gtt-good-till-triggered-orders"
                }
            }, [s("img", {
                attrs: {
                    alt: "GTT logo",
                    src: "/static/images/gtt-logo.svg"
                }
            })])])])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "select-row row"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "select-transaction-type four columns"
            }, [s("div", {
                staticClass: "section-title"
            }, [t._v("Transaction type")]), t._v(" "), s("div", {
                staticClass: "section-content"
            }, [s("su-radio-group", {
                staticClass: "products",
                on: {
                    change: t.onTransactionTypeChange
                },
                model: {
                    value: t.trigger.transactionType,
                    callback: function(e) {
                        t.$set(t.trigger, "transactionType", e)
                    },
                    expression: "trigger.transactionType"
                }
            }, [s("su-radio", {
                staticClass: "transaction-type",
                attrs: {
                    label: "Buy",
                    value: "BUY",
                    disabled: !t.triggerConstraints.transactionType.BUY
                }
            }, [t._v("Buy")]), t._v(" "), s("su-radio", {
                staticClass: "transaction-type",
                attrs: {
                    label: "Sell",
                    value: "SELL",
                    disabled: !t.triggerConstraints.transactionType.SELL
                }
            }, [t._v("Sell")])], 1)], 1)]), t._v(" "), s("div", {
                staticClass: "select-trigger-type eight columns"
            }, [s("div", {
                staticClass: "section-title"
            }, [t._v("Trigger type")]), t._v(" "), s("div", {
                staticClass: "section-content"
            }, [s("su-radio-group", {
                staticClass: "trigger-types",
                on: {
                    change: t.onTriggerTypeChange
                },
                model: {
                    value: t.trigger.type,
                    callback: function(e) {
                        t.$set(t.trigger, "type", e)
                    },
                    expression: "trigger.type"
                }
            }, [s("su-radio", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "trigger-type",
                attrs: {
                    label: "Single",
                    value: "single",
                    disabled: t.trigger.modify || !t.triggerConstraints.type["single"],
                    title: "Single"
                }
            }, [t._v("Single")]), t._v(" "), s("su-radio", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "trigger-type",
                attrs: {
                    label: "OCO",
                    value: "two-leg",
                    disabled: t.trigger.modify || !t.triggerConstraints.type["two-leg"],
                    title: "One Cancels Other"
                }
            }, [t._v("OCO")])], 1), t._v(" "), s("div", {
                staticClass: "row"
            }, [t.isTriggerTypeSingle ? s("p", {
                staticClass: "text-xxsmall dim"
            }, [t._v("\n\t\t\t\t\t\t\t\t\tThe order is placed when the Last Traded Price (LTP) crosses the trigger price. Can be used to enter or exit a position.\n\t\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), t.isTriggerTypeTwoLeg ? s("p", {
                staticClass: "text-xxsmall dim"
            }, [t._v("\n\t\t\t\t\t\t\t\t\tOne Cancels Other: Either the stoploss or the target order is placed when the Last Traded Price (LTP) crosses the respective trigger. Can be used to set target and stoploss for a position/holding.\n\t\t\t\t\t\t\t\t")]) : t._e()])], 1)])])]), t._v(" "), s("div", {
                staticClass: "triggers"
            }, [s("su-form", {
                ref: "gtt-form",
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.execute.apply(null, arguments)
                    }
                }
            }, t._l(t.trigger.condition.triggerValues, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "trigger row",
                    class: "trigger-" + i
                }, [s("div", {
                    staticClass: "trigger-price three columns"
                }, [s("div", {
                    staticClass: "trigger-label"
                }, [t.isTriggerTypeTwoLeg && 0 === i ? s("span", {
                    staticClass: "text-label text-label-outline indigo"
                }, [t._v("Stoploss")]) : t.isTriggerTypeTwoLeg && 1 === i ? s("span", {
                    staticClass: "text-label text-label-outline indigo"
                }, [t._v("Target")]) : s("span", {
                    staticClass: "filler"
                }, [t._v(" ")])]), t._v(" "), s("div", {
                    staticClass: "input-field",
                    attrs: {
                        prop: "trigger-price"
                    }
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        rules: t.rules.triggerPrice,
                        min: t.trigger.condition.instrument.tickSize,
                        step: t.trigger.condition.instrument.tickSize,
                        label: "Trigger price",
                        "static-label": "",
                        "validate-on-change": ""
                    },
                    on: {
                        input: t.calculateTriggerPercent
                    },
                    model: {
                        value: t.trigger.condition.triggerValues[i],
                        callback: function(e) {
                            t.$set(t.trigger.condition.triggerValues, i, e)
                        },
                        expression: "trigger.condition.triggerValues[index]"
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "trigger-picker",
                    on: {
                        click: function(e) {
                            return t.focusTriggerPercentField(i)
                        }
                    }
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        step: t.minTriggerPercent,
                        "dynamic-width": "",
                        "dynamic-width-size": 9
                    },
                    on: {
                        input: t.calculateTriggerValues
                    },
                    model: {
                        value: t.trigger.condition.triggerPercent[i],
                        callback: function(e) {
                            t.$set(t.trigger.condition.triggerPercent, i, e)
                        },
                        expression: "trigger.condition.triggerPercent[index]"
                    }
                }), t._v(" "), s("span", [t._v("% ")]), s("span", [t._v("of LTP")])], 1)]), t._v(" "), s("div", {
                    staticClass: "three columns filler"
                }, [s("div", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("Places order "), s("span", {
                    staticClass: "icon icon-arrow-right"
                })])]), t._v(" "), t.trigger.orders ? s("div", {
                    staticClass: "order six columns"
                }, [s("div", {
                    staticClass: "row row-1"
                }, [s("su-radio-group", {
                    staticClass: "products four columns",
                    model: {
                        value: t.trigger.orders[i].product,
                        callback: function(e) {
                            t.$set(t.trigger.orders[i], "product", e)
                        },
                        expression: "trigger.orders[index].product"
                    }
                }, ["CNC" === t.trigger.orders[i].product ? s("su-radio", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "gtt-type",
                    attrs: {
                        label: "CNC",
                        value: "CNC",
                        selected: "",
                        disabled: "",
                        title: t.productLabels.CNC
                    }
                }, [t._v("CNC")]) : t._e(), t._v(" "), "NRML" === t.trigger.orders[i].product ? s("su-radio", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "gtt-type",
                    attrs: {
                        label: "NRML",
                        value: "NRML",
                        selected: "",
                        disabled: "",
                        title: t.productLabels.NRML
                    }
                }, [t._v("NRML")]) : t._e()], 1), t._v(" "), s("su-radio-group", {
                    staticClass: "order-types eight columns",
                    on: {
                        change: function(e) {
                            return t.onOrderTypeChange(t.trigger.orders[i])
                        }
                    },
                    model: {
                        value: t.trigger.orders[i].orderType,
                        callback: function(e) {
                            t.$set(t.trigger.orders[i], "orderType", e)
                        },
                        expression: "trigger.orders[index].orderType"
                    }
                }, [s("su-radio", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "gtt-type",
                    attrs: {
                        label: "LIMIT",
                        value: "LIMIT",
                        title: t.orderTypeLabels["LIMIT"],
                        selected: "",
                        disabled: ""
                    }
                }, [t._v("Limit")])], 1)], 1), t._v(" "), s("div", {
                    staticClass: "row row-2"
                }, [s("div", {
                    staticClass: "quantity input-field six columns",
                    attrs: {
                        prop: "quantity"
                    }
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        min: t.trigger.condition.instrument.lotSize,
                        step: t.trigger.condition.instrument.lotSize,
                        "static-label": "",
                        label: "Qty.",
                        rules: t.rules.quantity,
                        "validate-on-change": ""
                    },
                    model: {
                        value: t.trigger.orders[i].quantity,
                        callback: function(e) {
                            t.$set(t.trigger.orders[i], "quantity", e)
                        },
                        expression: "trigger.orders[index].quantity"
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "price input-field six columns",
                    attrs: {
                        prop: "price"
                    }
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        min: t.trigger.condition.instrument.tickSize,
                        step: t.trigger.condition.instrument.tickSize,
                        disabled: t.isPriceDisabled(t.trigger.orders[i]),
                        "static-label": "",
                        label: "Price",
                        rules: t.rules.price,
                        "validate-on-change": ""
                    },
                    model: {
                        value: t.trigger.orders[i].price,
                        callback: function(e) {
                            t.$set(t.trigger.orders[i], "price", e)
                        },
                        expression: "trigger.orders[index].price"
                    }
                })], 1)])]) : t._e()])
            }
            )), 0)], 1)]), t._v(" "), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "seven columns tnc-agreement"
            }, [s("p", {
                staticClass: "text-xxsmall text-light"
            }, [t._v("\n\t\t\t\t\t\tBy "), t.trigger.modify ? s("span", [t._v("modifying")]) : s("span", [t._v("placing")]), t._v(",\n\t\t\t\t\t\tI agree to the "), s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/tos/gtt"
                }
            }, [t._v("terms")]), t._v(" and accept that\n\t\t\t\t\t\ttrigger executions are not guaranteed.\n\t\t\t\t\t\t"), t.showPOARequiredNote ? s("span", [t._v("Sell orders will not go through without "), s("a", {
                attrs: {
                    href: "https://support.zerodha.com/category/trading-and-markets/nudge/gtt/articles/why-was-my-sell-gtt-order-rejected"
                }
            }, [t._v("CDSL authorization")]), t._v(".")]) : t._e(), t._v("\n\t\t\t\t\t\tThis trigger expires on " + t._s(t.expiryStr(t.trigger.expiry).slice(0, 10)) + ".\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "five columns actions text-right"
            }, [t.trigger.modify ? t._e() : s("su-button", {
                class: ["place", t.buttonColor],
                attrs: {
                    type: "submit",
                    processing: t.trigger.loading
                },
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.execute.apply(null, arguments)
                    }
                }
            }, [s("div", [t._v(t._s(t.trigger.actionText))])]), t._v(" "), t.trigger.modify ? s("su-button", {
                class: ["place", t.buttonColor],
                attrs: {
                    type: "submit",
                    processing: t.trigger.loading
                },
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.execute.apply(null, arguments)
                    }
                }
            }, [s("div", [t._v(t._s(t.trigger.actionText))])]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline cancel",
                attrs: {
                    type: "submit"
                },
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.close.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tCancel\n\t\t\t\t\t")])], 1)])])]) : t._e(), t._v(" "), t.isPOAConfirmRequired && t.showPOAConfirm ? s("twofa-confirm", {
                attrs: {
                    title: "Confirm SELL order",
                    message: t.twofaConfirmMessage()
                },
                on: {
                    confirm: t.poaProceed,
                    close: t.poaClose
                }
            }) : t._e()], 1)
        }
          , ls = []
          , cs = s("9dcd")
          , us = s.n(cs)
          , ds = s("825c");
        const hs = C["b"].GTT.typeSingle
          , ps = C["b"].TRANSACTION_TYPE.BUY
          , ms = "gtt-window"
          , vs = 5;
        var _s = {
            name: "gtt-window",
            components: {
                "twofa-confirm": ds["a"]
            },
            inject: ["ticker", "instrumentManager"],
            data() {
                return {
                    minTriggerPercent: .01,
                    showPOAConfirm: !1,
                    isShown: !1,
                    trigger: {
                        lastPrice: 0,
                        loading: !1,
                        modify: !1,
                        id: null,
                        transactionType: null,
                        type: null,
                        condition: null,
                        orders: [],
                        expiry: null
                    },
                    rules: {
                        quantity: [{
                            type: "number",
                            required: !0,
                            message: "Quantity is required"
                        }, {
                            validator: this.isIntegerValidator,
                            label: "Quantity"
                        }, {
                            validator: this.quantityValidator,
                            label: "Quantity"
                        }, {
                            validator: this.multipleOfLotSizeValidator,
                            label: "Quantity"
                        }],
                        triggerPrice: [{
                            type: "number",
                            required: !0,
                            message: "Trigger price is required"
                        }, {
                            validator: this.isPositiveNumber,
                            label: "Trigger price"
                        }, {
                            validator: this.multipleOfTickSizeValidator,
                            label: "Trigger price"
                        }],
                        price: [{
                            validator: this.isPositiveNumber,
                            label: "Price"
                        }, {
                            validator: this.multipleOfTickSizeValidator,
                            label: "Price"
                        }]
                    }
                }
            },
            created() {
                this.products = C["b"].PRODUCTS,
                this.$events.on(C["b"].EVENTS.GTT_PLACE, this.initPlace),
                this.$events.on(C["b"].EVENTS.GTT_MODIFY, this.initModify),
                this.productLabels = {
                    [C["b"].PRODUCT.MIS]: "Intraday squareoff with extra leverage",
                    [C["b"].PRODUCT.CNC]: "Cash and carry. Delivery based trades",
                    [C["b"].PRODUCT.NRML]: "Overnight positions without additional leverage"
                },
                this.orderTypeLabels = {
                    [C["b"].ORDER_TYPE.MARKET]: "Market",
                    [C["b"].ORDER_TYPE.LIMIT]: "Limit",
                    [C["b"].ORDER_TYPE.SL]: "Stoploss",
                    [C["b"].ORDER_TYPE.SLM]: "Stoploss market"
                }
            },
            beforeDestroy() {
                this.unsubscribeTicks()
            },
            computed: {
                ...Object(u["d"])(Ue["b"], ["ticks"]),
                ...Object(u["d"])(Dt["b"], ["profile"]),
                buttonColor() {
                    return {
                        "button-blue": "buy" === this.trigger.transactionType.toLowerCase(),
                        "button-orange": "sell" === this.trigger.transactionType.toLowerCase()
                    }
                },
                lastPrice() {
                    return this.trigger.condition.instrument && this.ticks && this.ticks[this.trigger.condition.instrument.instrumentToken] ? this.ticks[this.trigger.condition.instrument.instrumentToken].lastPrice : this.trigger.lastPrice ? this.trigger.lastPrice : 0
                },
                isTriggerTypeSingle() {
                    return this.trigger.type === C["b"].GTT.typeSingle
                },
                isTriggerTypeTwoLeg() {
                    return this.trigger.type === C["b"].GTT.typeTwoLeg
                },
                isTransactionTypeBuy() {
                    return this.trigger.transactionType === C["b"].TRANSACTION_TYPE.BUY
                },
                triggerConstraints() {
                    let t = !1
                      , e = !0
                      , s = !0;
                    return this.trigger && this.trigger.condition && this.trigger.condition.instrument && (this.instrumentManager.IsEquity(this.trigger.condition.instrument.exchange) ? (t = this.trigger.transactionType === C["b"].TRANSACTION_TYPE.SELL,
                    e = !(this.trigger.type === C["b"].GTT.typeTwoLeg)) : t = !0),
                    {
                        type: {
                            single: !0,
                            "two-leg": t
                        },
                        transactionType: {
                            BUY: e,
                            SELL: s
                        }
                    }
                },
                isPOAConfirmRequired() {
                    return !1
                },
                showPOARequiredNote() {
                    let t = this.profile && this.profile.meta && "consent" === this.profile.meta.poa;
                    return t && this.trigger.transactionType === C["b"].TRANSACTION_TYPE.SELL && this.instrumentManager.IsEquity(this.trigger.condition.instrument.exchange)
                }
            },
            methods: {
                show(t) {
                    this.isShown = !0
                },
                close(t) {
                    this.isShown = !1
                },
                initPlace(t) {
                    if (t = this.$clone(t),
                    this.trigger.actionText = t.actionText || "Place",
                    this.trigger.expiry = this.defaultExpiry(),
                    this.showPOAConfirm = !1,
                    this.trigger.modify = !1,
                    this.trigger.type = t.type || hs,
                    this.trigger.transactionType = t.transactionType || ps,
                    t.lastPrice && (this.trigger.lastPrice = t.lastPrice),
                    this.trigger.condition = {
                        tradingsymbol: t.condition.tradingsymbol,
                        exchange: t.condition.exchange
                    },
                    this.trigger.condition.instrument = this.instrumentManager.get(t.condition.tradingsymbol, null, t.condition.exchange),
                    this.trigger.type === C["b"].GTT.typeTwoLeg && this.instrumentManager.IsEquity(t.condition.exchange) && (this.trigger.transactionType = C["b"].TRANSACTION_TYPE.SELL),
                    this.subscribeTicks(),
                    t.condition.triggerValues ? (t.type === C["b"].GTT.typeTwoLeg && t.transactionType === C["b"].TRANSACTION_TYPE.BUY && (t.orders.reverse(),
                    t.condition.triggerValues.reverse()),
                    this.trigger.condition.triggerValues = t.condition.triggerValues,
                    this.calculateTriggerPercent()) : this.setDefaultTriggerValues(this.trigger),
                    t.orders) {
                        this.trigger.orders = [];
                        for (let e of t.orders) {
                            let s = this.getDefaultOrder(t, e);
                            this.onOrderTypeChange(s),
                            this.trigger.orders.push(s)
                        }
                    } else
                        this.setDefaultOrders(this.trigger);
                    t.condition && t.condition.triggerPercent && t.condition.triggerPercent.length > 0 && (this.trigger.condition.triggerPercent = t.condition.triggerPercent,
                    this.calculateTriggerValues()),
                    this.show()
                },
                initModify(t) {
                    t = this.$clone(t),
                    t && t.type === C["b"].GTT.typeTwoLeg && t.transactionType === C["b"].TRANSACTION_TYPE.BUY && (t.orders.reverse(),
                    t.condition.trigger_values.reverse()),
                    this.trigger.actionText = t.actionText || "Modify",
                    t.expires_at && (this.trigger.expiry = new Date(t.expires_at.slice(0, 10))),
                    this.showPOAConfirm = !1,
                    this.trigger.modify = !0,
                    this.trigger.id = t.id,
                    this.trigger.type = t.type,
                    t.lastPrice && (this.trigger.lastPrice = t.lastPrice),
                    this.trigger.condition = {
                        tradingsymbol: t.condition.tradingsymbol,
                        exchange: t.condition.exchange
                    },
                    this.trigger.condition.instrument = this.instrumentManager.get(t.condition.tradingsymbol, null, t.condition.exchange),
                    this.subscribeTicks(),
                    this.trigger.condition.triggerValues = t.condition.trigger_values,
                    this.calculateTriggerPercent(),
                    this.trigger.orders = [];
                    for (let e of t.orders) {
                        this.trigger.transactionType = e.transaction_type;
                        let t = {
                            product: e.product,
                            orderType: e.order_type,
                            price: e.price,
                            quantity: e.quantity
                        };
                        this.onOrderTypeChange(t),
                        this.trigger.orders.push(t)
                    }
                    this.show()
                },
                subscribeTicks() {
                    this.trigger.condition.instrument && this.trigger.condition.instrument.instrumentToken && (this.ticker.subscribe([this.trigger.condition.instrument.instrumentToken], ms),
                    this.ticker.setMode(this.ticker.modeLTP, [this.trigger.condition.instrument.instrumentToken], ms))
                },
                unsubscribeTicks() {
                    this.trigger.condition.instrument && this.trigger.condition.instrument.instrumentToken && this.ticker.unsubscribe([this.trigger.condition.instrument.instrumentToken], ms)
                },
                isPriceDisabled(t) {
                    return t.orderType === C["b"].ORDER_TYPE.MARKET
                },
                setDefaultTriggerValues(t) {
                    let e = vs;
                    if (t && t.condition && t.condition.instrument && (t.condition.instrument.segment.endsWith("-FUT") ? e = 2 : t.condition.instrument.segment.endsWith("-OPT") && (e = 10)),
                    t.type === C["b"].GTT.typeSingle)
                        this.trigger.condition.triggerPercent = [e];
                    else if (t.type === C["b"].GTT.typeTwoLeg) {
                        let t = e;
                        this.trigger.transactionType === C["b"].TRANSACTION_TYPE.BUY && (t = -e),
                        this.trigger.condition.triggerPercent = [-t, t]
                    }
                    this.calculateTriggerValues()
                },
                getDefaultOrder(t, e, s) {
                    e || (e = {});
                    let i = e.product;
                    i = this.instrumentManager.IsEquity(t.condition.exchange) ? C["b"].PRODUCT.CNC : C["b"].PRODUCT.NRML;
                    let a = e.price || "";
                    return void 0 !== s && s >= 0 && (a = e.price || t.condition.triggerValues[s] || ""),
                    {
                        product: i,
                        price: a,
                        orderType: C["b"].ORDER_TYPE.LIMIT,
                        quantity: e.quantity || this.trigger.condition.instrument.lotSize
                    }
                },
                setDefaultOrders(t, e) {
                    t.type === C["b"].GTT.typeSingle ? this.trigger.orders = [this.getDefaultOrder(t, e, 0)] : t.type === C["b"].GTT.typeTwoLeg && (this.trigger.orders = [this.getDefaultOrder(t, e, 0), this.getDefaultOrder(t, e, 1)])
                },
                onOrderTypeChange(t) {
                    t.orderType === C["b"].ORDER_TYPE.MARKET ? t.price = 0 : t.orderType !== C["b"].ORDER_TYPE.LIMIT || t.price || (t.price = "")
                },
                onTriggerTypeChange() {
                    this.instrumentManager.IsEquity(this.trigger.condition.instrument.exchange) && this.trigger.type === C["b"].GTT.typeTwoLeg && (this.trigger.transactionType = C["b"].TRANSACTION_TYPE.SELL),
                    this.setDefaultTriggerValues(this.trigger),
                    this.setDefaultOrders(this.trigger)
                },
                onTransactionTypeChange() {
                    this.setDefaultTriggerValues(this.trigger),
                    this.setDefaultOrders(this.trigger)
                },
                multipleOfTickSizeValidator(t, e) {
                    if (e = parseFloat(e),
                    isNaN(e))
                        return new Error(t.label + " is invalid.");
                    try {
                        if (!us()(e).mod(us()(this.trigger.condition.instrument.tickSize)).eq(us()(0)))
                            return new Error(t.label + " should be a multiple of " + this.trigger.condition.instrument.tickSize)
                    } catch (s) {
                        return new Error(t.label + " is invalid.")
                    }
                },
                multipleOfLotSizeValidator(t, e) {
                    e = parseInt(e);
                    try {
                        if (e % this.trigger.condition.instrument.lotSize !== 0)
                            return new Error(t.label + " should be a multiple of " + this.trigger.condition.instrument.lotSize)
                    } catch (s) {
                        return new Error(t.label + " is invalid.")
                    }
                },
                isIntegerValidator(t, e) {
                    let s = /^\d+$/;
                    if (!s.exec(e))
                        return new Error(t.label + " is invalid.")
                },
                quantityValidator(t, e) {
                    if (parseFloat(e) <= 0)
                        return new Error(t.label + " is invalid.")
                },
                isPositiveNumber(t, e) {
                    if (parseFloat(e) < 0)
                        return new Error(t.label + " is invalid.")
                },
                execute(t) {
                    this.$refs["gtt-form"] && !this.$refs["gtt-form"].validate() || (!this.isPOAConfirmRequired || t && t.skipPOAConfirm ? this.trigger.modify ? this.modifyTrigger() : this.createTrigger() : this.showPOAConfirm = !0)
                },
                createTrigger() {
                    this.apiPlace(this.getOrderPrams())
                },
                modifyTrigger() {
                    this.apiModify(this.trigger.id, this.getOrderPrams())
                },
                expiryStr(t) {
                    let e = t.getDate().toString()
                      , s = (t.getMonth() + 1).toString()
                      , i = t.getFullYear().toString();
                    return 1 === e.length && (e = "0" + e),
                    1 === s.length && (s = "0" + s),
                    `${i}-${s}-${e} 00:00:00`
                },
                getOrderPrams() {
                    let t = {
                        exchange: this.trigger.condition.instrument.exchange,
                        tradingsymbol: this.trigger.condition.instrument.tradingsymbol,
                        trigger_values: [],
                        last_price: this.lastPrice
                    };
                    for (let s of this.trigger.condition.triggerValues)
                        t.trigger_values.push(parseFloat(s));
                    let e = [];
                    for (let s of this.trigger.orders)
                        e.push({
                            exchange: this.trigger.condition.instrument.exchange,
                            tradingsymbol: this.trigger.condition.instrument.tradingsymbol,
                            transaction_type: this.trigger.transactionType,
                            quantity: parseInt(s.quantity),
                            price: parseFloat(s.price),
                            order_type: s.orderType,
                            product: s.product
                        });
                    return this.trigger.type === C["b"].GTT.typeTwoLeg && this.trigger.transactionType === C["b"].TRANSACTION_TYPE.BUY && (t.trigger_values.reverse(),
                    e.reverse()),
                    {
                        condition: JSON.stringify(t),
                        orders: JSON.stringify(e),
                        type: this.trigger.type,
                        expires_at: this.expiryStr(this.trigger.expiry)
                    }
                },
                gotoGTTPage() {
                    this.$router.push({
                        name: "gtt"
                    })
                },
                apiPlace(t) {
                    this.trigger.loading = !0,
                    Te["a"].placeGTT(t).then(t=>{
                        this.trigger.loading = !1,
                        this.$toast.info({
                            title: "Created",
                            message: "GTT created",
                            orientation: this.$toast.BOTTOM_RIGHT,
                            onClick: this.gotoGTTPage
                        }),
                        this.$events.emit(C["b"].EVENTS.GTT_PLACE_SUCCESS, t),
                        this.close()
                    }
                    ).catch(t=>{
                        this.trigger.loading = !1;
                        let e = Object(b["j"])(t);
                        this.$toast.error({
                            title: "Error creating GTT",
                            message: e.message,
                            orientation: this.$toast.BOTTOM_RIGHT,
                            onClick: this.gotoGTTPage
                        }),
                        this.$events.emit(C["b"].EVENTS.GTT_PLACE_ERROR, e)
                    }
                    )
                },
                apiModify(t, e) {
                    this.trigger.loading = !0,
                    Te["a"].modifyGTT(t, e).then(t=>{
                        this.trigger.loading = !1,
                        this.$toast.info({
                            title: "Modified",
                            message: "GTT modified",
                            orientation: this.$toast.BOTTOM_RIGHT,
                            onClick: this.gotoGTTPage
                        }),
                        this.$events.emit(C["b"].EVENTS.GTT_MODIFY_SUCCESS, t),
                        this.close()
                    }
                    ).catch(t=>{
                        this.trigger.loading = !1;
                        let e = Object(b["j"])(t);
                        this.$toast.error({
                            title: "Error modifying GTT",
                            message: e.message,
                            orientation: this.$toast.BOTTOM_RIGHT,
                            onClick: this.gotoGTTPage
                        }),
                        this.$events.emit(C["b"].EVENTS.GTT_PLACE_ERROR, e)
                    }
                    )
                },
                defaultExpiry() {
                    let t = new Date;
                    return t.setFullYear(t.getFullYear() + 1),
                    t
                },
                calculateTriggerValues() {
                    let t = []
                      , e = [];
                    for (let n = 0; n < this.trigger.condition.triggerPercent.length; n++) {
                        e[n] = this.trigger.condition.triggerPercent[n];
                        let i = 0;
                        try {
                            i = parseFloat(this.trigger.condition.triggerPercent[n])
                        } catch (a) {
                            i = 0
                        }
                        if (isNaN(i) || !i) {
                            t[n] = 0,
                            e[n] = "";
                            continue
                        }
                        let r = us()(i).div(us()(100)).times(us()(this.lastPrice)).plus(us()(this.lastPrice));
                        var s = r.minus(r.mod(us()(this.trigger.condition.instrument.tickSize)));
                        t[n] = parseFloat(s.valueOf()),
                        0 === t[n] && (e[n] = "")
                    }
                    let i = this.$clone(this.trigger.condition);
                    i.triggerValues = t,
                    i.triggerPercent = e,
                    this.trigger.condition = i
                },
                calculateTriggerPercent() {
                    let t = [];
                    for (let i = 0; i < this.trigger.condition.triggerValues.length; i++) {
                        let e = 0;
                        try {
                            e = parseFloat(this.trigger.condition.triggerValues[i])
                        } catch (s) {
                            return
                        }
                        if (isNaN(e) || !this.lastPrice) {
                            t[i] = "";
                            continue
                        }
                        let a = us()(e).minus(us()(this.lastPrice)).div(us()(this.lastPrice)).times(us()(100));
                        t[i] = parseFloat(a.minus(a.mod(us()(this.minTriggerPercent))).valueOf())
                    }
                    let e = this.$clone(this.trigger.condition);
                    e.triggerPercent = t,
                    this.trigger.condition = e
                },
                focusTriggerPercentField(t) {
                    document.querySelector(".trigger-" + t + " .trigger-picker input").focus()
                },
                twofaConfirmMessage() {
                    let t = this.trigger.condition.instrument.tradingsymbol
                      , e = 1;
                    for (let s of this.trigger.orders)
                        s.quantity > e && (e = s.quantity);
                    return `Enter your Kite PIN to agree to the debit of ${t} upto ${e} share(s) from your DEMAT.\n\t\t\t\t<a target="_blank" href="https://support.zerodha.com/category/trading-and-markets/trading-faqs/articles/pin-for-selling-holdings">Learn more.</a>`
                },
                poaProceed() {
                    this.showPOAConfirm = !1,
                    this.execute({
                        skipPOAConfirm: !0
                    })
                },
                poaClose() {
                    this.showPOAConfirm = !1
                },
                dateSuperScript(t) {
                    return Object(Fe["a"])(t)
                }
            }
        }
          , gs = _s
          , fs = Object(vt["a"])(gs, os, ls, !1, null, null, null)
          , bs = fs.exports
          , Cs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "orders-basket"
            }, [t.show ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideBasket,
                    expression: "hideBasket"
                }],
                staticClass: "orders-basket-list",
                on: {
                    close: t.hideBasket
                }
            }, [s("div", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t.title ? s("h2", [t._v(t._s(t.title))]) : t._e()]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("su-table", {
                attrs: {
                    data: t.basketData,
                    headers: t.tableHeaders
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", [s("span", {
                            staticClass: "text-label text-label-outline small type",
                            class: e.row.styles.label
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.label) + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", {
                            staticClass: "tradingsymbol"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.data.instrument.tradingsymbol) + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", {
                            staticClass: "exchange dim text-xxsmall"
                        }, [t._v("\n\t\t\t\t\t\t\t(" + t._s(e.row.data.instrument.exchange) + ")\n\t\t\t\t\t\t")]), t._v(" "), "regular" !== e.row.formatted.variety ? s("span", {
                            staticClass: "variety dim text-xxsmall"
                        }, [t._v("\n\t\t\t\t\t\t\t(" + t._s(e.row.formatted.variety) + ")\n\t\t\t\t\t\t")]) : t._e()]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", [e.row.formatted.price ? s("span", [t._v(t._s(e.row.formatted.price))]) : s("span", [t._v("—")])]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.orderType) + "\n\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.product) + "\n\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.validity) + "\n\t\t\t\t\t")])]
                    }
                }], null, !1, 996635701)
            })], 1), t._v(" "), s("div", {
                staticClass: "actions row",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "action-buttons tweleve columns"
            }, [t.orderInProgress ? s("span", {}, [t._v("\n\t\t\t\t\t" + t._s(t.orderStatuses.length) + " of " + t._s(t.basketData.length) + " executed "), t.failedOrdersCount > 0 ? s("span", [t._v("(" + t._s(t.failedOrdersCount) + " failed)")]) : t._e()]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.orderInProgress,
                    disabled: t.orderInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.executeAll.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v(t._s(t.actionTitle))])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                attrs: {
                    disabled: t.orderInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.hideBasket.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Close")])])], 1)])]) : t._e()], 1)
        }
          , ys = [];
        const ws = Z["b"].NAMESPACE;
        var Ts = {
            data() {
                return {
                    show: !1,
                    orderInProgress: !1,
                    orderStatuses: [],
                    title: "",
                    actionTitle: "Execute",
                    defaultActionTitle: "Execute",
                    basketData: [],
                    keyboardShortcutEvents: [{
                        keys: [27],
                        cb: this.hideBasket,
                        stop: !0,
                        prevent: !0
                    }]
                }
            },
            created() {
                this.tableHeaders = [{
                    label: "",
                    sort: !1
                }, {
                    label: "Qty.",
                    field: "quantity",
                    sort: !1
                }, {
                    label: "Price",
                    field: "price",
                    sort: !1
                }, {
                    label: "Type",
                    field: "order_type",
                    sort: !1
                }, {
                    label: "Product",
                    field: "product",
                    sort: !1
                }, {
                    label: "Validity",
                    field: "validity",
                    sort: !1
                }],
                this.$events.on(Z["b"].EVENTS.ADD, this.add),
                this.$events.on(Z["b"].EVENTS.CLEAR, this.clear),
                this.$events.on(Z["b"].EVENTS.REMOVE, this.remove),
                this.$events.on(Z["b"].EVENTS.SHOW, this.showBasket)
            },
            computed: {
                ...Object(u["d"])(ws, ["queue"]),
                ...Object(u["d"])(I["a"].namespace, ["profile"]),
                showOrderBasket() {
                    return !0
                },
                failedOrdersCount() {
                    return this.orderStatuses.filter(t=>"error" === t.status).length
                }
            },
            watch: {
                orderStatuses(t) {
                    this.orderInProgress && this.orderStatuses.length === this.basketData.length && (this.$toast.success({
                        message: "All orders in the basket have been sent. Check orderbook once to verify.",
                        orientation: this.$toast.TOP_RIGHT
                    }),
                    this.reset(),
                    this.hideBasket(),
                    this.$events.emit(Z["b"].EVENTS.COMPLETE, this.basketData))
                },
                show(t, e) {
                    t ? (this.$keyEvents.deregister(this.keyboardShortcutEvents),
                    this.$keyEvents.register(this.keyboardShortcutEvents)) : this.$keyEvents.deregister(this.keyboardShortcutEvents)
                }
            },
            methods: {
                ...Object(u["e"])(ws, {
                    addToQueue: "add",
                    removeFromQueue: "remove",
                    clearQueue: "clear"
                }),
                add(t) {
                    this.addToQueue(t)
                },
                remove(t, e) {
                    this.removeFromQueue({
                        id: t,
                        basket: e
                    })
                },
                clear(t) {
                    this.clearQueue(t)
                },
                hideBasket() {
                    this.show = !1,
                    this.clear(),
                    this.reset()
                },
                showBasket({basket: t, title: e, actionTitle: s}) {
                    this.setBasket(t),
                    this.title = e,
                    this.show = !0,
                    this.actionTitle = s || this.defaultActionTitle
                },
                reset() {
                    this.orderInProgress = !1,
                    this.orderStatuses = [],
                    this.basketData = []
                },
                setBasket(t) {
                    let e = [];
                    if (e = this.queue,
                    t) {
                        e = [];
                        for (let s of this.queue)
                            s.basket === t && e.push(s)
                    }
                    for (let s of e)
                        s.formatted = {},
                        s.formatted.label = s.data.label || s.type,
                        s.formatted.price = s.data.price,
                        s.formatted.product = s.data.product,
                        s.formatted.quantity = s.data.quantity,
                        s.formatted.orderType = s.data.order_type || s.data.orderType,
                        s.formatted.validity = s.data.validity || C["b"].VALIDITY.DAY,
                        s.formatted.variety = s.data.variety || C["b"].VARIETY.REGULAR,
                        s.formatted.triggerPrice = s.data.trigger_price || s.data.triggerPrice,
                        s.styles = s.data.styles || {};
                    this.basketData = e
                },
                executeAll() {
                    if (!this.orderInProgress) {
                        this.orderInProgress = !0;
                        for (let t of this.basketData)
                            if (t.type === Z["b"].TYPES.CANCEL) {
                                let e = this.getApiCancelOrdeParams(t.data);
                                this.apiOrderCancel(t.basket, t.id, e)
                            } else if (t.type === Z["b"].TYPES.PLACE) {
                                let e = this.getApiPlaceOrderParams(t.data);
                                this.apiOrderPlace(t.basket, t.id, e)
                            }
                    }
                },
                getApiPlaceOrderParams(t) {
                    return {
                        exchange: t.instrument.exchange.toUpperCase(),
                        tradingsymbol: t.instrument.tradingsymbol.toUpperCase(),
                        transaction_type: t.transactionType.toUpperCase(),
                        order_type: t.orderType.toUpperCase(),
                        quantity: parseInt(t.quantity).toString(),
                        price: parseFloat(t.price || 0).toString(),
                        product: t.product.toUpperCase(),
                        validity: t.validity || C["b"].VALIDITY.DAY,
                        disclosed_quantity: parseInt(t.disclosedQuantity || 0).toString(),
                        trigger_price: parseFloat(t.triggerPrice || 0).toString(),
                        squareoff: parseFloat(t.squareoff || 0).toString(),
                        stoploss: parseFloat(t.stoploss || 0).toString(),
                        trailing_stoploss: parseFloat(t.trailingStoploss || 0).toString(),
                        variety: t.variety || C["b"].VARIETY.REGULAR
                    }
                },
                getApiCancelOrdeParams(t) {
                    let e = t.variety;
                    return e === C["b"].VARIETY.AMO && -1 === t.status.toUpperCase().indexOf(C["b"].VARIETY.AMO.toUpperCase()) && (e = C["b"].VARIETY.REGULAR),
                    {
                        order_id: t.order_id,
                        parent_order_id: t.parent_order_id,
                        variety: e
                    }
                },
                apiOrderPlace(t, e, s) {
                    Te["a"].placeOrder(s).then(s=>{
                        this.orderStatuses.push({
                            id: e,
                            basket: t,
                            status: "success"
                        })
                    }
                    ).catch(s=>{
                        this.orderStatuses.push({
                            id: e,
                            basket: t,
                            status: "error"
                        });
                        let i = Object(b["j"])(s);
                        if (502 === i.status_code || 503 === i.status_code || 504 === i.status_code) {
                            let t = i.message + "<br />Please check the orderbook before placing the order again.";
                            this.$toast.warning({
                                title: "Error",
                                message: t,
                                orientation: this.$toast.BOTTOM_RIGHT,
                                duration: 6e3
                            })
                        } else
                            this.$toast.error({
                                title: "Error",
                                message: i.message,
                                orientation: this.$toast.BOTTOM_RIGHT,
                                duration: 6e3
                            })
                    }
                    )
                },
                apiOrderCancel(t, e, s) {
                    Te["a"].cancelOrder(s.order_id, s).then(s=>{
                        this.orderStatuses.push({
                            id: e,
                            basket: t,
                            status: "success"
                        })
                    }
                    ).catch(s=>{
                        this.orderStatuses.push({
                            id: e,
                            basket: t,
                            status: "error"
                        });
                        let i = Object(b["j"])(s);
                        if (502 === i.status_code || 503 === i.status_code || 504 === i.status_code) {
                            let t = i.message + "<br />Please check the orderbook to see if order is cancelled.";
                            this.$toast.warning({
                                title: "Error",
                                message: t,
                                orientation: this.$toast.BOTTOM_RIGHT,
                                duration: 6e3
                            })
                        } else
                            this.$toast.error({
                                title: "Error",
                                message: i.message,
                                orientation: this.$toast.BOTTOM_RIGHT,
                                duration: 6e3
                            })
                    }
                    )
                }
            }
        }
          , ks = Ts
          , xs = Object(vt["a"])(ks, Cs, ys, !1, null, null, null)
          , Es = xs.exports
          , Ss = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isOpen ? s("su-modal", {
                staticClass: "alerts-create-modal",
                attrs: {
                    open: !0,
                    buttons: !0,
                    "ok-label": t.constraints.isEdit ? "Save" : "Create",
                    "click-out": !1
                },
                on: {
                    ok: t.onSubmit,
                    cancel: t.onCancel
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "float-right text-xsmall",
                attrs: {
                    href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/kite-mw/articles/what-are-kite-alerts-and-how-do-i-use-them",
                    target: "_blank",
                    title: "Help"
                }
            }, [s("span", {
                staticClass: "icon icon-info"
            }), t._v(" Help\n                ")]), t._v(" "), s("h2", [t._v(t._s(t.constraints.isEdit ? "Edit alert" : "New alert"))])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("su-form", {
                ref: "form",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.onSubmit.apply(null, arguments)
                    }
                }
            }, [s("p", [s("su-input", {
                attrs: {
                    rules: t.rules.name,
                    autofocus: "",
                    label: "Name",
                    placeholder: "Alert name",
                    "min-length": 1,
                    maxlength: 50,
                    required: "",
                    autocomplete: "off"
                },
                model: {
                    value: t.form.name,
                    callback: function(e) {
                        t.$set(t.form, "name", e)
                    },
                    expression: "form.name"
                }
            })], 1), t._v(" "), s("br"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Property")]), t._v(" "), s("su-select", {
                attrs: {
                    value: t.form.lhsAttribute,
                    name: "lhsAttribute"
                },
                model: {
                    value: t.form.lhsAttribute,
                    callback: function(e) {
                        t.$set(t.form, "lhsAttribute", e)
                    },
                    expression: "form.lhsAttribute"
                }
            }, [s("option", {
                attrs: {
                    value: "LastTradedPrice"
                }
            }, [t._v("Last Traded Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "HighPrice"
                }
            }, [t._v("High Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "LowPrice"
                }
            }, [t._v("Low Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenPrice"
                }
            }, [t._v("Open Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "ClosePrice"
                }
            }, [t._v("Close Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "DayChange"
                }
            }, [t._v("Day Change")]), t._v(" "), s("option", {
                attrs: {
                    value: "DayChangePercent"
                }
            }, [t._v("Day Change Percent")]), t._v(" "), s("option", {
                attrs: {
                    value: "IntraDayChange"
                }
            }, [t._v("Intra Day Change")]), t._v(" "), s("option", {
                attrs: {
                    value: "IntraDayChangePercent"
                }
            }, [t._v("Intra Day Change Percent")]), t._v(" "), s("option", {
                attrs: {
                    value: "LastTradedQuantity"
                }
            }, [t._v("Last Traded Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "AverageTradePrice"
                }
            }, [t._v("Average Trade Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "VolumeTraded"
                }
            }, [t._v("Volume Traded")]), t._v(" "), s("option", {
                attrs: {
                    value: "TotalBuyQuantity"
                }
            }, [t._v("Total Buy Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "TotalSellQuantity"
                }
            }, [t._v("Total Sell Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterest"
                }
            }, [t._v("Open Interest")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterestDayHigh"
                }
            }, [t._v("Open Interest Day High")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterestDayLow"
                }
            }, [t._v("Open Interest Day Low")])])], 1), t._v(" "), s("div", {
                staticClass: "seven columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Of")]), t._v(" "), s("omnisearch", {
                attrs: {
                    "ins-manager": t.instrumentManager,
                    "max-results": 15,
                    "retain-value": !0,
                    instrument: this.form.lhsInstrument
                },
                on: {
                    add: t.addLHSInstrument
                }
            })], 1)]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Is")]), t._v(" "), s("su-select", {
                attrs: {
                    value: t.form.operator,
                    name: "operator"
                },
                model: {
                    value: t.form.operator,
                    callback: function(e) {
                        t.$set(t.form, "operator", e)
                    },
                    expression: "form.operator"
                }
            }, [s("option", {
                attrs: {
                    value: ">"
                }
            }, [t._v("Greater than (>)")]), t._v(" "), s("option", {
                attrs: {
                    value: ">="
                }
            }, [t._v("Greater than or equal to (>=)")]), t._v(" "), s("option", {
                attrs: {
                    value: "<"
                }
            }, [t._v("Less than (<)")]), t._v(" "), s("option", {
                attrs: {
                    value: "<="
                }
            }, [t._v("Less than or equal to (<=)")]), t._v(" "), s("option", {
                attrs: {
                    value: "=="
                }
            }, [t._v("Equal to (==)")])])], 1), t._v(" "), s("div", {
                staticClass: "seven columns"
            }, [s("label", [t._v(" ")]), t._v(" "), s("su-radio-group", {
                staticClass: "rhsType",
                model: {
                    value: t.form.rhsType,
                    callback: function(e) {
                        t.$set(t.form, "rhsType", e)
                    },
                    expression: "form.rhsType"
                }
            }, [s("su-radio", {
                attrs: {
                    label: "Value",
                    value: "constant"
                }
            }, [t._v("Value")]), t._v(" "), s("su-radio", {
                attrs: {
                    label: "Instrument",
                    value: "instrument"
                }
            }, [t._v("Instrument")])], 1)], 1)]), t._v(" "), s("br"), t._v(" "), s("div", {
                staticClass: "row"
            }, ["constant" === t.form.rhsType ? s("div", {
                staticClass: "five columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Value")]), t._v(" "), s("su-input", {
                class: {
                    "show-percentage": t.showPercentage(t.form.lhsAttribute)
                },
                attrs: {
                    autocomplete: "off",
                    type: "number",
                    label: "",
                    placeholder: "",
                    rules: t.rules.rhsConstant,
                    maxlength: 15,
                    required: !0,
                    step: t.rhsInputStep
                },
                model: {
                    value: t.form.rhsConstant,
                    callback: function(e) {
                        t.$set(t.form, "rhsConstant", e)
                    },
                    expression: "form.rhsConstant"
                }
            }), t._v(" "), t.showPercentage(t.form.lhsAttribute) ? s("div", {
                staticClass: "percentage-picker"
            }, [s("su-input", {
                attrs: {
                    type: "number",
                    step: t.minPercent,
                    "dynamic-width": "",
                    "dynamic-width-size": 9
                },
                on: {
                    input: function(e) {
                        return t.onPercentageChange()
                    }
                },
                model: {
                    value: t.form.rhsConstantPercentage,
                    callback: function(e) {
                        t.$set(t.form, "rhsConstantPercentage", e)
                    },
                    expression: "form.rhsConstantPercentage"
                }
            }), t._v(" "), s("span", [t._v("% ")]), s("span", [t._v("of " + t._s(t.form.lhsAttribute))])], 1) : t._e()], 1) : t._e(), t._v(" "), "instrument" === t.form.rhsType ? s("div", {
                staticClass: "five columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Property")]), t._v(" "), s("su-select", {
                attrs: {
                    value: t.form.rhsAttribute,
                    name: "rhsAttribute",
                    placeholer: "Property"
                },
                model: {
                    value: t.form.rhsAttribute,
                    callback: function(e) {
                        t.$set(t.form, "rhsAttribute", e)
                    },
                    expression: "form.rhsAttribute"
                }
            }, [s("option", {
                attrs: {
                    value: "LastTradedPrice"
                }
            }, [t._v("Last Traded Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "HighPrice"
                }
            }, [t._v("High Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "LowPrice"
                }
            }, [t._v("Low Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenPrice"
                }
            }, [t._v("Open Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "ClosePrice"
                }
            }, [t._v("Close Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "DayChange"
                }
            }, [t._v("Day Change")]), t._v(" "), s("option", {
                attrs: {
                    value: "DayChangePercent"
                }
            }, [t._v("Day Change Percent")]), t._v(" "), s("option", {
                attrs: {
                    value: "IntraDayChange"
                }
            }, [t._v("Intra Day Change")]), t._v(" "), s("option", {
                attrs: {
                    value: "IntraDayChangePercent"
                }
            }, [t._v("Intra Day Change Percent")]), t._v(" "), s("option", {
                attrs: {
                    value: "LastTradedQuantity"
                }
            }, [t._v("Last Traded Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "AverageTradePrice"
                }
            }, [t._v("Average Trade Price")]), t._v(" "), s("option", {
                attrs: {
                    value: "VolumeTraded"
                }
            }, [t._v("Volume Traded")]), t._v(" "), s("option", {
                attrs: {
                    value: "TotalBuyQuantity"
                }
            }, [t._v("Total Buy Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "TotalSellQuantity"
                }
            }, [t._v("Total Sell Quantity")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterest"
                }
            }, [t._v("Open Interest")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterestDayHigh"
                }
            }, [t._v("Open Interest Day High")]), t._v(" "), s("option", {
                attrs: {
                    value: "OpenInterestDayLow"
                }
            }, [t._v("Open Interest Day Low")])])], 1) : t._e(), t._v(" "), "instrument" === t.form.rhsType ? s("div", {
                staticClass: "seven columns"
            }, [s("label", {
                staticClass: "text-light"
            }, [t._v("Of")]), t._v(" "), s("omnisearch", {
                attrs: {
                    "ins-manager": t.instrumentManager,
                    "max-results": 15,
                    "retain-value": !0,
                    instrument: this.form.rhsInstrument
                },
                on: {
                    add: t.addRHSInstrument
                }
            })], 1) : t._e()]), t._v(" "), t.formError ? s("p", {
                staticClass: "error text-red"
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            }), t._v(" " + t._s(t.formError) + "\n                    ")]) : t._e()])], 1)]) : t._e()], 1)
        }
          , Ps = []
          , As = s("c1f6");
        const Is = "place"
          , Os = "modify"
          , Ds = {
            type: null,
            uuid: null,
            name: "",
            lhsAttribute: "LastTradedPrice",
            lhsInstrument: null,
            operator: ">=",
            rhsType: "constant",
            rhsConstant: 1,
            rhsConstantPercentage: "0.00",
            rhsAttribute: "LastTradedPrice",
            rhsInstrument: null,
            previousData: null
        }
          , Ms = {
            VolumeTraded: "volume",
            LastTradedQuantity: "lastQuantity",
            TotalBuyQuantity: "totalBuyQuantity",
            TotalSellQuantity: "totalSellQuantity",
            LastTradedPrice: "lastPrice",
            AverageTradePrice: "averagePrice",
            OpenPrice: "openPrice",
            HighPrice: "highPrice",
            LowPrice: "lowPrice",
            ClosePrice: "closePrice",
            OpenInterest: "oi",
            OpenInterestDayHigh: "oiDayHigh",
            OpenInterestDayLow: "oiDayLow"
        }
          , Ns = "alerts-window"
          , Rs = ["LastTradedPrice", "HighPrice", "LowPrice", "OpenPrice", "ClosePrice", "AverageTradePrice"];
        var Ls = {
            mixins: [ht["a"]],
            inject: ["ticker", "instrumentManager"],
            components: {
                omnisearch: ke["a"]
            },
            data() {
                return {
                    form: {
                        ...Ds
                    },
                    fetchStatus: f["d"].API_STATUSES.initial,
                    isOpen: !1,
                    formError: null,
                    minPercent: .01,
                    rules: {
                        name: [{
                            type: "text",
                            required: !0,
                            message: "Name is required"
                        }],
                        rhsConstant: [{
                            validator: (t,e)=>!isNaN(e) && !isNaN(parseFloat(e)) || new Error("Value is invalid")
                        }]
                    }
                }
            },
            methods: {
                getTickProp(t, e) {
                    if (this.ticks && this.ticks[t]) {
                        const s = Ms[e];
                        if (this.ticks[t].hasOwnProperty(s))
                            return this.ticks[t][s]
                    }
                    return 1
                },
                applyTickProp() {
                    this.form.lhsInstrument && (this.form.type === Os && this.form.previousData && "constant" === this.form.rhsType && this.form.lhsAttribute === this.form.previousData.lhsAttribute && this.form.rhsConstantPercentage === this.form.previousData.rhsConstantPercentage ? this.form.rhsConstant = this.form.previousData.rhsConstant : setTimeout(()=>{
                        var t = this.getTickProp(this.form.lhsInstrument.instrumentToken, this.form.lhsAttribute);
                        let e = 0;
                        try {
                            e = parseFloat(this.form.rhsConstantPercentage)
                        } catch (i) {
                            e = 0
                        }
                        !isNaN(e) && e || (e = 0);
                        let s = t * (1 + .01 * e);
                        this.form.rhsConstant = s.toFixed(this.form.lhsInstrument.precision)
                    }
                    , 500))
                },
                openWindow(t, e) {
                    this.isOpen = !0,
                    this.formError = null,
                    this.form = {
                        ...Ds,
                        ...e,
                        type: t
                    },
                    t === Os && (this.form.previousData = {
                        ...this.form
                    }),
                    this.subscribeTicks(),
                    this.$nextTick(()=>{
                        this.applyTickProp()
                    }
                    )
                },
                closeWindow() {
                    this.unsubscribeTicks(),
                    this.isOpen = !1
                },
                onCancel() {
                    this.unsubscribeTicks(),
                    this.isOpen = !1
                },
                addLHSInstrument(t) {
                    this.form.lhsInstrument = {
                        ...t.instrument
                    },
                    this.subscribeTicks()
                },
                addRHSInstrument(t) {
                    this.form.rhsInstrument = {
                        ...t.instrument
                    }
                },
                onPercentageChange() {
                    this.applyTickProp()
                },
                showPercentage(t) {
                    return t in Ms
                },
                onSubmit(t, e) {
                    if (!this.$refs["form"].validate())
                        return void e();
                    if (!this.form.lhsInstrument)
                        return this.formError = "Select an instrument",
                        void e();
                    if ("instrument" === this.form.rhsType && !this.form.rhsInstrument)
                        return this.formError = "Select an instrument",
                        void e();
                    let s = {
                        name: this.form.name,
                        lhs_exchange: this.form.lhsInstrument.exchange,
                        lhs_tradingsymbol: this.form.lhsInstrument.tradingsymbol,
                        lhs_attribute: this.form.lhsAttribute,
                        operator: this.form.operator,
                        rhs_type: this.form.rhsType
                    };
                    "instrument" === this.form.rhsType ? (s.rhs_exchange = this.form.rhsInstrument.exchange,
                    s.rhs_tradingsymbol = this.form.rhsInstrument.tradingsymbol,
                    s.rhs_attribute = this.form.rhsAttribute) : s.rhs_constant = parseFloat(this.form.rhsConstant),
                    this.constraints.isEdit ? As["a"].updateAlert(this.form.uuid, s).then(t=>{
                        this.closeWindow(),
                        this.$events.emit(It["a"].EVENTS.CLOSE, {}),
                        this.$toast.info({
                            title: "Updated",
                            message: "Alert updated",
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).catch(t=>{
                        e(),
                        this.formError = Object(b["j"])(t).message
                    }
                    ) : As["a"].createAlert(s).then(()=>{
                        this.closeWindow(),
                        this.$events.emit(It["a"].EVENTS.CLOSE, {}),
                        this.$toast.info({
                            title: "Created",
                            message: "Alert created",
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).catch(t=>{
                        e(),
                        this.formError = Object(b["j"])(t).message
                    }
                    )
                },
                subscribeTicks() {
                    this.form.lhsInstrument && (this.ticker.subscribe([this.form.lhsInstrument.instrumentToken], Ns),
                    this.ticker.setMode(this.ticker.modeFull, [this.form.lhsInstrument.instrumentToken], Ns))
                },
                unsubscribeTicks() {
                    this.form.lhsInstrument && this.ticker.unsubscribe([this.form.lhsInstrument.instrumentToken], Ns)
                }
            },
            computed: {
                ...Object(u["d"])(Ue["b"], ["ticks"]),
                constraints() {
                    const t = this.fetchStatus === f["d"].API_STATUSES.fetching
                      , e = this.fetchStatus === f["d"].API_STATUSES.error;
                    return {
                        isLoading: t,
                        isError: e,
                        isEdit: null != this.form.uuid,
                        hasData: this.alerts && this.alerts.length > 0,
                        isEmpty: !t && this.alerts && 0 === this.alerts.length,
                        hasErrorState: e && !this.alerts,
                        hasErrorIcon: e && this.alerts
                    }
                },
                rhsInputStep() {
                    return this.form.lhsInstrument && -1 !== Rs.indexOf(this.form.lhsAttribute) ? this.form.lhsInstrument.tickSize : null
                }
            },
            created() {
                this.$events.on(It["a"].EVENTS.ADD, t=>{
                    this.openWindow(Is, t)
                }
                ),
                this.$events.on(It["a"].EVENTS.UPDATE, t=>{
                    this.openWindow(Os, t)
                }
                )
            },
            watch: {
                "form.lhsAttribute": function() {
                    this.applyTickProp()
                },
                "form.lhsInstrument": function() {
                    this.applyTickProp()
                }
            }
        }
          , $s = Ls
          , Us = Object(vt["a"])($s, Ss, Ps, !1, null, null, null)
          , Fs = Us.exports
          , js = s("0721")
          , Hs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.instrument ? s("div", {
                staticClass: "instrument-widget"
            }, [t.linkChart ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "tradingsymbol link-chart",
                attrs: {
                    "tooltip-pos": "down",
                    title: "Open chart"
                },
                on: {
                    click: function(e) {
                        return t.openChart()
                    }
                }
            }, [s("span", {
                domProps: {
                    innerHTML: t._s(t.dateSuperScript(t.instrument.niceName))
                }
            })]) : s("span", {
                staticClass: "tradingsymbol"
            }, [t._v(t._s(t.tradingsymbol))]), t._v(" "), s("span", {
                staticClass: "wrap"
            }, [t.ticks[t.instrumentToken] ? s("span", {
                staticClass: "last-price",
                class: t.tickClass
            }, [t._v("\n\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].lastPrice, 2)) + "\n\t\t")]) : t._e(), t._v(" "), t.ticks[t.instrumentToken] ? s("span", {
                staticClass: "price-change dim"
            }, [t.changeType === t.PRICE_CHANGE_TYPES.CLOSE_ABSOLUTE ? s("span", {
                staticClass: "dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].absoluteChange, t.instrument.precision)) + "\n\t\t\t")]) : t.changeType === t.PRICE_CHANGE_TYPES.CLOSE_PERCENTAGE ? s("span", {
                staticClass: "dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].change, 2)) + " "), s("span", {
                staticClass: "text-xxsmall"
            }, [t._v("%")])]) : t.changeType === t.PRICE_CHANGE_TYPES.OPEN_ABSOLUTE ? s("span", {
                staticClass: "dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].openChange, t.instrument.precision)) + "\n\t\t\t")]) : t.changeType === t.PRICE_CHANGE_TYPES.OPEN_PERCENTAGE ? s("span", {
                staticClass: "dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].openChangePercent, 2)) + " "), s("span", {
                staticClass: "text-xxsmall"
            }, [t._v("%")])]) : t.priceChangeType === t.PRICE_CHANGE_TYPES.OPEN_ABSOLUTE_PERCENTAGE ? s("span", {
                staticClass: "all dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].openChange, t.instrument.precision)) + "\n\t\t\t\t(" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].openChangePercent, 2))), s("span", {
                staticClass: "text-xxsmall"
            }, [t._v("%")]), t._v(")\n\t\t\t")]) : s("span", {
                staticClass: "all dim"
            }, [t._v("\n\t\t\t\t" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].absoluteChange, t.instrument.precision)) + "\n\t\t\t\t(" + t._s(t._f("decimalPad")(t.ticks[t.instrumentToken].change, 2))), s("span", {
                staticClass: "text-xxsmall"
            }, [t._v("%")]), t._v(")\n\t\t\t")])]) : t._e()])]) : t._e()
        }
          , Bs = [];
        const zs = "instrument-widget";
        var Vs = {
            name: "instrument-widget",
            inject: ["instrumentManager", "ticker"],
            mixins: [ht["a"]],
            props: {
                tradingsymbol: {
                    type: String,
                    required: !0
                },
                segment: {
                    type: String,
                    required: !0
                },
                instrumentToken: {
                    type: Number,
                    required: !0
                },
                priceChangeType: {
                    type: String,
                    default: "percent"
                },
                linkChart: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    lastPrice: 0,
                    priceChange: 0,
                    changeType: this.priceChangeType
                }
            },
            beforeCreate() {
                this.PRICE_CHANGE_TYPES = y["b"]
            },
            created() {
                this.subscribe([this.instrumentToken])
            },
            beforeDestroy() {
                this.unsubscribe([this.instrumentToken])
            },
            watch: {
                priceChangeType(t) {
                    this.changeType = t,
                    this.subscribe([this.instrumentToken])
                },
                instrumentToken(t, e) {
                    t && this.subscribe([t]),
                    e && this.unsubscribe([e])
                }
            },
            computed: {
                ...Object(u["d"])(Ue["b"], ["ticks"]),
                instrument() {
                    return this.instrumentManager.get(this.tradingsymbol, this.segment)
                },
                tickClass() {
                    let t = this.ticks[this.instrumentToken];
                    if (!t)
                        return {};
                    let e = 0;
                    e = this.priceChangeType === y["b"].OPEN_ABSOLUTE || this.priceChangeType === y["b"].OPEN_PERCENTAGE ? t.openChange : t.absoluteChange;
                    let s = 0;
                    return e > 0 ? s = 1 : e < 0 && (s = -1),
                    {
                        up: 1 === s,
                        down: -1 === s
                    }
                }
            },
            methods: {
                openChart() {
                    this.instrument && this.instrumentToken && this.openInAppChart(this.instrumentToken, this.instrument.segment, this.instrument.tradingsymbol)
                },
                subscribe(t) {
                    this.ticker.subscribe(t, zs),
                    this.priceChangeType === y["b"].OPEN_ABSOLUTE || this.priceChangeType === y["b"].OPEN_PERCENTAGE || this.priceChangeType === y["b"].OPEN_ABSOLUTE_PERCENTAGE ? this.ticker.setMode(this.ticker.modeQuote, t, zs) : this.ticker.setMode(this.ticker.modeLTPC, t, zs)
                },
                unsubscribe(t) {
                    this.ticker.unsubscribe(t, zs)
                },
                dateSuperScript(t) {
                    return Object(Fe["a"])(t)
                }
            }
        }
          , qs = Vs
          , Ws = Object(vt["a"])(qs, Hs, Bs, !1, null, null, null)
          , Gs = Ws.exports
          , Ys = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "enterfade"
                }
            }, [t.message && t.message.show && t.message.data ? s("div", {
                staticClass: "notifications-bar layer-2"
            }, [s("span", {
                staticClass: "icon icon-times close-button",
                on: {
                    click: function(e) {
                        return t.hideMessage()
                    }
                }
            }), t._v(" "), t._l(t.message.data, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "item"
                }, [s("span", {
                    staticClass: "message-content"
                }, [s("span", {
                    staticClass: "icon icon-message-square"
                }), t._v(" "), s("span", {
                    domProps: {
                        innerHTML: t._s(e)
                    }
                })])])
            }
            ))], 2) : t._e()])
        }
          , Qs = []
          , Ks = s("ccd4");
        const Xs = Ks["b"].NAMESPACE;
        var Zs = {
            inject: ["ticker"],
            data() {
                return {
                    message: null
                }
            },
            created() {
                this.$events.on(Ks["b"].EVENTS.NOTIFICATIONS_BAR, this.showMessage)
            },
            beforeDestroy() {
                this.$events.off(Ks["b"].EVENTS.NOTIFICATIONS_BAR)
            },
            mounted() {
                this.ticker.eventMessage.on(t=>{
                    this.showMessage([t])
                }
                )
            },
            computed: {
                ...Object(u["d"])(Xs, ["notifications"])
            },
            methods: {
                hideMessage() {
                    this.message.show = !1
                },
                showMessage(t) {
                    let e = [];
                    for (let s of t)
                        e.push(Object(b["k"])(s));
                    this.message = {
                        show: !0,
                        data: e
                    }
                }
            }
        }
          , Js = Zs
          , ti = Object(vt["a"])(Js, Ys, Qs, !1, null, null, null)
          , ei = ti.exports
          , si = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "bulletin-menu",
                class: {
                    unread: t.unreadCount > 0
                }
            }, [s("a", {
                staticClass: "bulletin-widget",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.toggleWindow()
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-bell"
            }), t._v(" "), t.unreadCount > 0 ? s("span", {
                staticClass: "bulletin-count"
            }) : t._e()])])
        }
          , ii = []
          , ai = {
            inject: ["ticker"],
            props: {
                value: Boolean
            },
            data() {
                return {
                    isBulletinWindow: this.value || !1
                }
            },
            created() {
                this.sound = new b["a"](E["b"].alertSound,2e3)
            },
            mounted() {
                this.fetchBulletins()
            },
            computed: {
                ...Object(u["d"])(tt["b"], ["unreadCount"])
            },
            watch: {
                unreadCount(t) {
                    t > 0 && this.sound.beep()
                },
                value(t) {
                    this.isBulletinWindow = t
                }
            },
            methods: {
                ...Object(u["c"])(tt["b"], ["fetchBulletins"]),
                toggleWindow() {
                    this.isBulletinWindow = !this.isBulletinWindow,
                    this.$emit("change", this.isBulletinWindow)
                },
                hideBulletinWindow() {
                    this.isBulletinWindow = !1,
                    this.$emit("change", this.isBulletinWindow)
                }
            }
        }
          , ni = ai
          , ri = Object(vt["a"])(ni, si, ii, !1, null, null, null)
          , oi = ri.exports
          , li = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "bulletin-window"
            }, [t.isFetching ? s("div", {
                staticClass: "loader"
            }, [s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            })], 1) : t._e(), t._v(" "), t.isFetchFailed ? s("error-state", {
                attrs: {
                    title: "Bulletin couldn't be loaded.",
                    error: t.bulletinError
                }
            }) : t._e(), t._v(" "), t.isEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/notifications.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any notifications")])])]) : t._e(), t._v(" "), s("div", {
                staticClass: "bulletin-wrap bulletin-text"
            }, t._l(t.bulletin, (function(e, i) {
                var a;
                return s("div", {
                    key: i,
                    staticClass: "bulletin-item",
                    class: (a = {
                        dim: "read" == e.status
                    },
                    a["priority-" + e.priority] = !0,
                    a)
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.markdownToHTML(e.content))
                    }
                }), t._v(" "), s("p", {
                    staticClass: "date text-right text-xxsmall dim",
                    attrs: {
                        title: t.niceDate(e.created_at, !0)
                    }
                }, [t._v(t._s(t.relativeTime(e.created_at)))])])
            }
            )), 0)], 1)
        }
          , ci = []
          , ui = s("ed56")
          , di = {
            mixins: [ht["a"]],
            computed: {
                ...Object(u["d"])(tt["b"], ["bulletin", "bulletinError", "bulletinFetchStatus"]),
                isFetching() {
                    return this.bulletinFetchStatus === f["b"].fetching
                },
                isFetchFailed() {
                    return this.bulletinFetchStatus === f["b"].error
                },
                isEmpty() {
                    return !this.isFetchFailed && 0 === this.bulletin.length
                }
            },
            mounted() {
                this.bulletin && this.bulletin.length > 0 && this.markAllAsRead()
            },
            methods: {
                ...Object(u["e"])(tt["b"], ["markAllAsRead", "resetUnreadCount"]),
                markdownToHTML(t) {
                    return Object(b["k"])(t)
                },
                markAllAsRead() {
                    this.resetUnreadCount(),
                    ui["a"].markAllAsRead()
                },
                relativeTime(t) {
                    return Object(b["q"])(t)
                },
                niceDate(t, e) {
                    return Object(b["m"])(t, e)
                }
            }
        }
          , hi = di
          , pi = Object(vt["a"])(hi, li, ci, !1, null, null, null)
          , mi = pi.exports
          , vi = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isWidget ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "stocks-analyze-widget-modal",
                attrs: {
                    "z-index": t.zIndex
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "stocks-analyze-widget-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("iframe", {
                ref: "iframe",
                attrs: {
                    src: t.widgetUrl
                }
            })])]) : t._e()
        }
          , _i = []
          , gi = {
            name: "stock-analyze-widget",
            inject: ["userId"],
            data() {
                return {
                    isWidget: !1,
                    zIndex: 13
                }
            },
            created() {
                this.$events.on(f["c"].showStocksAnalyzeWidget, this.showWidget)
            },
            beforeDestroy() {
                window.removeEventListener("click", this.hide)
            },
            computed: {
                ...Object(u["d"])(["theme"])
            },
            methods: {
                show() {
                    this.isWidget = !0
                },
                hide() {
                    this.isWidget = !1
                },
                showWidget(t) {
                    t && t.zIndex && (this.zIndex = t.zIndex);
                    let e = t && t.source || "";
                    this.widgetUrl = `https://api.sensibull.com/v1/kite/widget_login?theme=${this.theme}&source=${e}&user_id=${this.userId}`;
                    let s = t && t.basketID || 0;
                    this.widgetUrl += s ? `&basket_id=${s}&redirect_to=/widget/builder/basket_page` : "&redirect_to=/widget/builder/positions_page",
                    this.show()
                }
            }
        }
          , fi = gi
          , bi = Object(vt["a"])(fi, vi, _i, !1, null, null, null)
          , Ci = bi.exports
          , yi = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.showModal ? s("modal", {
                staticClass: "risk-disclosure-modal-modal",
                attrs: {
                    "z-index": 99
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("span", {
                staticClass: "icon icon-file-text"
            }), t._v(" Risk disclosures on derivatives")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("ul", {
                staticClass: "text-initial"
            }, [s("li", [t._v("9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.")]), t._v(" "), s("li", [t._v("On an average, loss makers registered net trading loss close to ₹50,000.")]), t._v(" "), s("li", [t._v("Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.")]), t._v(" "), s("li", [t._v("Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.")])]), t._v(" "), s("p", {
                staticClass: "text-xsmall dim content"
            }, [t._v("\n\t\t\tSource: "), s("a", {
                attrs: {
                    href: "https://www.sebi.gov.in/reports-and-statistics/research/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [t._v("SEBI study")]), t._v(" dated January 25, 2023 on “Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment”, wherein Aggregate Level findings are based on annual Profit/Loss incurred by individual traders in equity F&O during FY 2021-22.\n\t\t")])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "tweleve columns text-right"
            }, [s("su-button", {
                staticClass: "button button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [t._v("I understand")])], 1)])])]) : t._e()
        }
          , wi = []
          , Ti = {
            name: "risk-disclosure-modal",
            data() {
                return {
                    showModal: !1
                }
            },
            created() {
                this.$events.on(f["c"].showRiskDisclosureModal, this.show),
                this.isRiskDisclosureAgreed || this.show()
            },
            computed: {
                ...Object(u["d"])(["isRiskDisclosureAgreed"])
            },
            methods: {
                ...Object(u["e"])(["setRiskDisclosureAgreed"]),
                show() {
                    this.showModal = !0,
                    this.setRiskDisclosureAgreed(!1)
                },
                close() {
                    this.showModal = !1,
                    this.setRiskDisclosureAgreed(!0)
                }
            }
        }
          , ki = Ti
          , xi = (s("a88c"),
        Object(vt["a"])(ki, yi, wi, !1, null, null, null))
          , Ei = xi.exports;
        n["a"].component("modal", lt["a"]),
        n["a"].component("empty-state", ct["a"]),
        n["a"].component("page-header", gt),
        n["a"].component("error-state", ft["a"]),
        n["a"].component("context-menu", bt["a"]),
        n["a"].component("stock-widget", Wt),
        n["a"].component("technical-widget", Zt),
        n["a"].component("option-chain-widget", ae),
        n["a"].component("addon-context-menu", St),
        n["a"].component("common-context-menu", jt),
        n["a"].component("mobile-context-menu", Ct["a"]),
        n["a"].use(o.a),
        n["a"].use(W["a"]),
        n["a"].use(O),
        n["a"].use(R["a"], {
            store: m["a"]
        }),
        n["a"].use(N["a"], {
            store: m["a"]
        }),
        n["a"].use(D["a"], {
            store: m["a"]
        }),
        n["a"].use(I["a"], {
            store: m["a"]
        }),
        n["a"].use(M["a"], {
            store: m["a"]
        }),
        n["a"].use(F, {
            store: m["a"]
        }),
        n["a"].use($, {
            store: m["a"]
        }),
        n["a"].use(H, {
            store: m["a"]
        }),
        n["a"].use(B["a"], {
            store: m["a"]
        }),
        n["a"].use(V, {
            store: m["a"]
        }),
        n["a"].use(q["a"], {
            store: m["a"]
        }),
        n["a"].use(J, {
            store: m["a"]
        }),
        n["a"].use(et, {
            store: m["a"]
        }),
        n["a"].use(K, {
            store: m["a"]
        });
        const Si = ["marketwatch", "chart", "tvchart", "tvchartBeta"];
        var Pi = {
            name: "app",
            components: {
                "offline-indicator": ge,
                "custom-router-link": de["a"],
                "keyboard-shortcuts": ue,
                "order-window": rs["a"],
                "orders-basket": Es,
                "alert-window": Fs,
                marketwatch: js["default"],
                "instrument-widget": Gs,
                "notifications-bar": ei,
                "bulletin-menu": oi,
                "bulletin-widget": mi,
                "market-depth-widget": fe["a"],
                "gtt-window": bs,
                "order-cancel-window": be["a"],
                basket: ns,
                "stocks-analyze-widget": Ci,
                "risk-disclosure-modal": Ei
            },
            data: function() {
                return {
                    extendedTicker: null,
                    isUserMenu: !1,
                    isDOMRendered: !1,
                    isInstrumentsLoaded: !1,
                    isBulletinWidget: !1,
                    showKeyModal: !1,
                    dashboardLogo: E["b"].logo,
                    keyboardShortcutEvents: [{
                        keys: ["65"],
                        cb: ()=>this.$router.push(g["b"].dashboard),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["70"],
                        cb: ()=>this.$router.push(g["b"].margins),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["72"],
                        cb: ()=>this.$router.push(g["b"].holdings),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["73"],
                        cb: ()=>this.$router.push(g["b"].profile),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["74"],
                        cb: ()=>this.$router.push(g["b"].editProfile),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "83"],
                        cb: this.showKeyboardShortcutModal,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["16", "191"],
                        cb: this.showKeyboardShortcutModal,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["191"],
                        cb: this.showKeyboardShortcutModal,
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["79"],
                        cb: ()=>this.$router.push(g["b"].orders),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["80"],
                        cb: ()=>this.$router.push(g["b"].positions),
                        stop: !0,
                        prevent: !0
                    }, {
                        keys: ["17", "75"],
                        cb: this.showMarketDepthWidget,
                        stop: !0,
                        prevent: !0
                    }],
                    keepAliveRouterExclude: ["chart-page", "chart-wrapper"]
                }
            },
            provide() {
                let t = {};
                return Object.defineProperty(t, "extendedTicker", {
                    enumerable: !0,
                    get: ()=>this.extendedTicker
                }),
                {
                    userId: this.userId,
                    publicToken: this.publicToken,
                    encToken: this.encToken,
                    ticker: this.ticker,
                    instrumentManager: this.instrumentManager,
                    crosstabClient: this.crosstabClient,
                    reactive: t
                }
            },
            beforeCreate() {
                this.isDisclosureModalEnabled = "true" !== Object({
                    NODE_ENV: "production",
                    VUE_APP_VERSION: "3.0.0",
                    VUE_APP_CHART_VERSION: "3.3.1",
                    VUE_APP_API_KEY: "kitefront",
                    VUE_APP_ROOT_URI: "https://kite.zerodha.com",
                    VUE_APP_TICKER_URI: "wss://ws.zerodha.com/",
                    VUE_APP_EXT_TICKER_URI: "wss://ws20.zerodha.com",
                    VUE_APP_STATIC_URI: "/",
                    VUE_APP_CAPTCHA_KEY: "6LeZZzYUAAAAAK6I4Ea_Pan3Q_wx_7fheD_CsP5H",
                    VUE_APP_INSTRUMENTS_URL: "static/json/instruments.json",
                    VUE_APP_SPARK_LINES_URI: "https://kitestatic.zerodha.com/static/sparklines",
                    VUE_APP_CHART_API_URI: "/oms/instruments/historical",
                    VUE_APP_CHART_TEMPLATE_URI: "/static/build/chart.html?v=3.3.1",
                    VUE_APP_CHART_LEGACY_TEMPLATE_URI: "/static/build/chart-legacy.html?v=3.3.1",
                    VUE_APP_MULTIPLE_CHART_TEMPLATE_URI: "/static/build/multiple-chart.html?v=3.3.1",
                    VUE_APP_CHART_MODE: "production",
                    VUE_APP_CHART_BETA_TEMPLATE_URI: "/static/build/chart-beta.html?v=3.3.1",
                    VUE_APP_BETA_MULTIPLE_CHART_TEMPLATE_URI: "/static/build/multiple-chart-beta.html?v=3.3.1",
                    VUE_APP_CONSOLE_URL: "https://console.zerodha.com",
                    VUE_APP_CASHIER_URL: "https://cashier.zerodha.com/login",
                    VUE_APP_STOCK_WIDGET_URL: "https://stocks.tickertape.in/tickers/",
                    VUE_APP_TECHNICAL_WIDGET_URL: "https://mo.streak.tech/",
                    VUE_APP_APP_ICONS_URL: "https://developers.kite.trade/static/images/app-icons/",
                    VUE_APP_PARTNER_ID: "RAINMT",
                    VUE_APP_ACCOUNT_OPEN_URL: "https://zerodha.com/open-account?c={partnerID}&utm_source=kite&utm_medium=web&utm_campaign=account",
                    VUE_APP_OPTION_CHAIN_WIDGET_URL: "https://insights.sensibull.com/widget/option-chain",
                    VUE_APP_BASKET_PERF_WIDGET_URL: "https://basket.smallcase.com/",
                    VUE_APP_STOCKS_ANALYZE_WIDGET_URL: "https://api.sensibull.com/v1/kite/widget_login",
                    VUE_APP_POST_MESSAGE_ORIGINS: "https://insights.sensibull.com",
                    VUE_APP_TAGMANAGER_URL: "https://console.zerodha.com/portfolio/tags/manage",
                    VUE_APP_SUPPORTED_UPI_VPA_URL: "static/json/supported-upi-vpa.json",
                    VUE_APP_OMNISEARCH_MF_IMG_URL: "https://coin.zerodha.com/static/img",
                    VUE_APP_OMNISEARCH_MF_URL: "https://coin.zerodha.com/mf/fund",
                    BASE_URL: "/"
                }).VUE_APP_DISABLE_DISCLOSURE_MODAL,
                this.sound = new b["a"](E["b"].alertSound,2e3);
                let t = "kitefront"
                  , e = "wss://ws.zerodha.com/";
                this.crossTabSubscriptions = new Set;
                let i = Object(d["b"])("", "crossTabSubscriptions", d["e"]);
                if (i && i.length > 0)
                    for (let s of i)
                        this.crossTabSubscriptions.add(parseInt(s));
                this.crosstabClient = c.a.client(),
                this.crosstabClient.on(f["d"].CROSSTAB_CHANNELS.refetch, t=>{
                    this.onCrosstabRefetch(t)
                }
                ),
                this.userId = Object(d["b"])(null, "user_id", d["a"]),
                this.publicToken = Object(d["b"])(null, "public_token", d["a"]),
                this.encToken = Object(d["b"])(null, "enctoken", d["a"]),
                this.userId && this.publicToken && this.encToken || (window.location = g["b"].logout),
                Object(d["d"])("", "user_id", this.userId, d["c"]),
                Object(d["d"])("", "public_token", this.publicToken, d["c"]),
                Object(d["d"])("", "enctoken", this.encToken, d["c"]),
                this.instrumentManager = new W["a"].InstrumentManager,
                s.e("chunk-2d22c101").then(s.t.bind(null, "f243", 3)).then(t=>{
                    this.instrumentManager.init(t),
                    this.isInstrumentsLoaded = !0
                }
                );
                let a = {
                    address: e,
                    apiKey: t,
                    userId: this.userId,
                    encToken: this.encToken,
                    version: "3.0.0"
                };
                this.ticker = new D["a"].Provider(a),
                this.ticker.connect(),
                this.ticker.eventTick.on(t=>{
                    this.setTicks(t)
                }
                ),
                this.ticker.eventData.on(()=>{
                    this.tickerConnectionStatus !== f["d"].API_STATUSES.success && this.setTickerConnectionStatus(f["d"].API_STATUSES.success)
                }
                ),
                this.ticker.eventReconnect.on(()=>{
                    this.setTickerConnectionStatus(f["d"].API_STATUSES.fetching)
                }
                ),
                this.ticker.eventNoReconnect.on(()=>{
                    this.setTickerConnectionStatus(f["d"].API_STATUSES.error)
                }
                ),
                this.ticker.eventConnect.on(()=>{
                    this.setTickerConnectionStatus(f["d"].API_STATUSES.success),
                    this.crosstabClient.on(f["d"].CROSSTAB_CHANNELS.ticker, this.onCrosstabMessages);
                    let t = [];
                    this.crossTabSubscriptions.forEach(e=>t.push(parseInt(e))),
                    t && t.length > 0 && (this.ticker.subscribe(t, "crosstabsubs"),
                    this.ticker.setMode(this.ticker.modeFull, t, "crosstabsubs"))
                }
                ),
                this.ticker.eventAlert.on(t=>{
                    if (this.debouncedRefetchCurrentRouteData(),
                    this.crosstabClient.emit(f["d"].CROSSTAB_CHANNELS.refetch, {
                        client: "kite"
                    }),
                    this.crosstabClient.emit(f["d"].CROSSTAB_CHANNELS.orderEvent),
                    t && t.order_id && (this.incOrderNotificationsCount(1),
                    "COMPLETE" !== t.status && "REJECTED" !== t.status && "CANCELLED" !== t.status || this.sound.beep()),
                    (!this.preferences || !this.preferences || "off" !== this.preferences.order_update_web) && t && t.order_id) {
                        let e = t.tradingsymbol
                          , s = null;
                        this.instrumentManager && (s = this.instrumentManager.get(t.tradingsymbol, null, t.exchange),
                        s && (e = s.niceName));
                        let i = "orders";
                        t && t.order_id && "gtt" === t.order_id.toLowerCase() && (i = "gtt");
                        let a = {
                            orientation: this.$toast.BOTTOM_RIGHT,
                            update: !0,
                            id: t.order_id,
                            duration: 5e3,
                            class: "order-toast",
                            onClick: ()=>{
                                this.$router.push({
                                    name: i
                                })
                            }
                        };
                        if ("COMPLETE" === t.status) {
                            let i = Object(it["c"])(t.average_price, s && s.precision || 2)
                              , n = t.transaction_type + " " + e + " is complete.<br />" + t.quantity + " qty @ " + i + "<br /><span class='order-id'>#" + t.order_id + "</span>";
                            this.$toast.success({
                                ...a,
                                title: "Complete",
                                message: n
                            })
                        } else if ("REJECTED" === t.status) {
                            t.status_message && -1 !== t.status_message.toLowerCase().indexOf("insufficient funds") && (t.status_message = t.status_message + "<br /> <a style='margin-top: 5px' class='button button-outline button-small' target='_blank' href=https://cashier.zerodha.com/login>Add funds</a>");
                            let s = t.transaction_type + " " + t.quantity + " x " + e + " is rejected.<br />" + t.status_message + "<br /><span class='order-id'>#" + t.order_id + "</span>";
                            this.$toast.error({
                                ...a,
                                title: "Rejected",
                                message: s,
                                duration: 7e3
                            })
                        } else if ("CANCELLED" === t.status) {
                            let s = t.transaction_type + " " + e + " is cancelled.<br /><span class='order-id'>#" + t.order_id + "</span>";
                            this.$toast.info({
                                ...a,
                                title: "Cancelled",
                                message: s
                            })
                        }
                    }
                }
                ),
                this.ticker.eventReload.on(()=>{
                    window.location.reload()
                }
                ),
                this.ticker.eventClearCache.on(()=>{
                    d["c"].clearAll()
                }
                ),
                this.ticker.eventLogout.on(()=>{
                    window.location.replace(g["b"].logout)
                }
                )
            },
            created() {
                this.applyTheme(this.theme),
                this.setUserId(this.userId),
                Object(b["t"])("resize", "optimizedResize"),
                window.addEventListener("optimizedResize", this.handleResize),
                this.$keyEvents.register(this.keyboardShortcutEvents),
                this.debouncedRefetchCurrentRouteData = p()(this.refetchCurrentRouteData, 300, {
                    maxWait: 300
                }),
                this.$events.on(M["a"].constants.EVENTS.ORDER_PLACE_SUCCESS, this.debouncedRefetchCurrentRouteData),
                this.$events.on(M["a"].constants.EVENTS.ORDER_MODIFY_SUCCESS, this.debouncedRefetchCurrentRouteData),
                this.$events.on(M["a"].constants.EVENTS.ORDER_CANCEL_SUCCESS, this.debouncedRefetchCurrentRouteData),
                this.$events.on(J.constants.EVENTS.COMPLETE, this.debouncedRefetchCurrentRouteData);
                let t = [];
                "https://insights.sensibull.com".split("|").forEach(e=>{
                    t.push(e.trim())
                }
                ),
                new x(this.$events,this.instrumentManager,t)
            },
            beforeDestroy() {
                this.$keyEvents.deregister(this.keyboardShortcutEvents),
                this.$keyEvents.destroy(),
                window.removeEventListener("optimizedResize", this.handleResize)
            },
            mounted() {
                document.body.classList.add("app-wrapper");
                let t = new A(this.ticker);
                t.grantPermission(),
                this.fetchProfile(),
                this.fetchPreferences(),
                this.$nextTick(()=>{
                    this.isDOMRendered = !0,
                    this.handleResize()
                }
                ),
                this.crosstabClient.on(f["d"].CROSSTAB_CHANNELS.getTicks, t=>{
                    this.sendCrossTabTicks(this.ticks)
                }
                ),
                this.crosstabClient.on(f["d"].CROSSTAB_CHANNELS.reload, t=>{
                    window.location.reload()
                }
                ),
                window.onbeforeunload = ()=>{
                    this.crosstabClient.emit(f["d"].CROSSTAB_CHANNELS.masterDisconnect, !0, !0)
                }
                ,
                this.startExtendedTicker()
            },
            computed: {
                ...Object(u["d"])(["isMobile", "isOnline", "theme", "isRiskDisclosureAgreed"]),
                ...Object(u["d"])(I["a"].namespace, ["profile", "userName", "userAvatar", "userEmail", "preferences", "preferencesFetchStatus"]),
                ...Object(u["d"])(D["a"].namespace, ["ticks", "tickerConnectionStatus"]),
                ...Object(u["d"])(q["a"].namespace, ["priceChangeType", "pinnedInstruments"]),
                ...Object(u["d"])(M["a"].namespace, ["ordersNotificationCount"]),
                appClasses() {
                    return {
                        mobile: this.isMobile,
                        ["page-" + this.$route.name]: this.$route.name,
                        "header-menu-active": this.isUserMenu,
                        "hide-header": this.isMobile && this.$route.query.hidenav && "true" === this.$route.query.hidenav
                    }
                },
                isBaseLoaded() {
                    return this.isInstrumentsLoaded && this.isDOMRendered
                },
                getUserName() {
                    return this.userName && this.userName.userName
                },
                getUserAvatar() {
                    return this.userAvatar || ""
                },
                cobrandedLogo() {
                    if (this.profile && this.profile.meta && this.profile.meta.cobrands)
                        for (let t of this.profile.meta.cobrands)
                            return _()(E["b"].cobrandLogo, {
                                name: t.toLowerCase()
                            })
                },
                isKiteMobile() {
                    return this.$route.query.source && ("kiteios" === this.$route.query.source || "kiteandroid" === this.$route.query.source)
                },
                isNoticeWidget() {
                    return this.$route.name && -1 === Si.indexOf(this.$route.name)
                },
                currentRouteName() {
                    return this.$route && this.$route.meta && this.$route.meta.title
                }
            },
            watch: {
                ticks(t) {
                    this.sendCrossTabTicks(t)
                },
                preferencesFetchStatus(t) {
                    t === f["d"].API_STATUSES.success && ("true" !== Object({
                        NODE_ENV: "production",
                        VUE_APP_VERSION: "3.0.0",
                        VUE_APP_CHART_VERSION: "3.3.1",
                        VUE_APP_API_KEY: "kitefront",
                        VUE_APP_ROOT_URI: "https://kite.zerodha.com",
                        VUE_APP_TICKER_URI: "wss://ws.zerodha.com/",
                        VUE_APP_EXT_TICKER_URI: "wss://ws20.zerodha.com",
                        VUE_APP_STATIC_URI: "/",
                        VUE_APP_CAPTCHA_KEY: "6LeZZzYUAAAAAK6I4Ea_Pan3Q_wx_7fheD_CsP5H",
                        VUE_APP_INSTRUMENTS_URL: "static/json/instruments.json",
                        VUE_APP_SPARK_LINES_URI: "https://kitestatic.zerodha.com/static/sparklines",
                        VUE_APP_CHART_API_URI: "/oms/instruments/historical",
                        VUE_APP_CHART_TEMPLATE_URI: "/static/build/chart.html?v=3.3.1",
                        VUE_APP_CHART_LEGACY_TEMPLATE_URI: "/static/build/chart-legacy.html?v=3.3.1",
                        VUE_APP_MULTIPLE_CHART_TEMPLATE_URI: "/static/build/multiple-chart.html?v=3.3.1",
                        VUE_APP_CHART_MODE: "production",
                        VUE_APP_CHART_BETA_TEMPLATE_URI: "/static/build/chart-beta.html?v=3.3.1",
                        VUE_APP_BETA_MULTIPLE_CHART_TEMPLATE_URI: "/static/build/multiple-chart-beta.html?v=3.3.1",
                        VUE_APP_CONSOLE_URL: "https://console.zerodha.com",
                        VUE_APP_CASHIER_URL: "https://cashier.zerodha.com/login",
                        VUE_APP_STOCK_WIDGET_URL: "https://stocks.tickertape.in/tickers/",
                        VUE_APP_TECHNICAL_WIDGET_URL: "https://mo.streak.tech/",
                        VUE_APP_APP_ICONS_URL: "https://developers.kite.trade/static/images/app-icons/",
                        VUE_APP_PARTNER_ID: "RAINMT",
                        VUE_APP_ACCOUNT_OPEN_URL: "https://zerodha.com/open-account?c={partnerID}&utm_source=kite&utm_medium=web&utm_campaign=account",
                        VUE_APP_OPTION_CHAIN_WIDGET_URL: "https://insights.sensibull.com/widget/option-chain",
                        VUE_APP_BASKET_PERF_WIDGET_URL: "https://basket.smallcase.com/",
                        VUE_APP_STOCKS_ANALYZE_WIDGET_URL: "https://api.sensibull.com/v1/kite/widget_login",
                        VUE_APP_POST_MESSAGE_ORIGINS: "https://insights.sensibull.com",
                        VUE_APP_TAGMANAGER_URL: "https://console.zerodha.com/portfolio/tags/manage",
                        VUE_APP_SUPPORTED_UPI_VPA_URL: "static/json/supported-upi-vpa.json",
                        VUE_APP_OMNISEARCH_MF_IMG_URL: "https://coin.zerodha.com/static/img",
                        VUE_APP_OMNISEARCH_MF_URL: "https://coin.zerodha.com/mf/fund",
                        BASE_URL: "/"
                    }).VUE_APP_DISABLE_TOUR && (this.preferences && !this.preferences.tours ? (this.setDefaultTours(),
                    this.updateTours(),
                    this.startTour()) : this.preferences && this.preferences.tours && this.startTour()),
                    this.preferences && this.preferences.theme_web && this.setTheme(this.preferences.theme_web))
                },
                theme(t) {
                    this.applyTheme(t)
                }
            },
            methods: {
                ...Object(u["e"])(["setMobile", "setOnline", "setTheme"]),
                ...Object(u["e"])(R["a"].namespace, ["setDefaultTours"]),
                ...Object(u["e"])(I["a"].namespace, ["setUserId", "setChartType"]),
                ...Object(u["e"])(D["a"].namespace, ["setTick", "setTicks", "setExtendedTicks", "setTickerConnectionStatus"]),
                ...Object(u["e"])(M["a"].namespace, ["incOrderNotificationsCount", "setOrderNotificationsCount"]),
                ...Object(u["c"])(I["a"].namespace, ["fetchProfile", "fetchPreferences"]),
                ...Object(u["c"])(R["a"].namespace, ["updateTours"]),
                toggleBulletin(t) {
                    this.isBulletinWidget = t
                },
                hideBulletinWindow() {
                    this.isBulletinWidget = !1
                },
                handleResize(t) {
                    let e = Object(b["u"])();
                    e.width < 1024 ? this.setMobile(!0) : (this.setMobile(!1),
                    "marketwatch" === this.$route.name && this.$router.push(g["b"].dashboard))
                },
                onCrosstabRefetch(t) {
                    t && "kite" !== t.client && this.debouncedRefetchCurrentRouteData()
                },
                refetchCurrentRouteData() {
                    this.$events.emit(f["d"].EVENTS.refetch + this.$route.name),
                    this.crosstabClient.emit(f["d"].CROSSTAB_CHANNELS.refetch, {
                        client: "kite"
                    })
                },
                toggleUserMenu() {
                    this.isUserMenu = !this.isUserMenu
                },
                hideUserMenu() {
                    this.isUserMenu = !1
                },
                showKeyboardShortcutModal() {
                    this.showKeyModal = !0
                },
                hideKeyboardShortcutsModal() {
                    this.showKeyModal = !1
                },
                saveCrossTabSubscriptions() {
                    let t = [];
                    this.crossTabSubscriptions.forEach(e=>t.push(e)),
                    Object(d["d"])("", "crossTabSubscriptions", t, d["e"])
                },
                onCrosstabMessages(t) {
                    if ("object" === typeof t && t)
                        if ("subscribe" === t.type) {
                            let e = [];
                            for (let s of t.tokens)
                                this.crossTabSubscriptions.add(parseInt(s)),
                                e.push(parseInt(s));
                            this.saveCrossTabSubscriptions(),
                            t.extended ? this.extendedTicker.subscribe(e, t.tag) : this.ticker.subscribe(e, t.tag)
                        } else if ("unsubscribe" === t.type) {
                            let e = [];
                            for (let i of t.tokens)
                                e.push(parseInt(i));
                            t.extended ? this.extendedTicker.unsubscribe(e, t.tag) : this.ticker.unsubscribe(e, t.tag);
                            let s = this.ticker.getsubscribedTokens();
                            for (let i of t.tokens)
                                -1 === s.indexOf(i) && this.crossTabSubscriptions.delete(parseInt(i));
                            this.saveCrossTabSubscriptions()
                        } else if ("setMode" === t.type) {
                            let e = [];
                            for (let s of t.tokens)
                                this.crossTabSubscriptions.add(parseInt(s)),
                                e.push(parseInt(s));
                            this.saveCrossTabSubscriptions(),
                            t.extended ? this.extendedTicker.setMode(t.mode, e, t.tag) : this.ticker.setMode(t.mode, e, t.tag)
                        }
                },
                sendCrossTabTicks(t) {
                    let e = {};
                    this.crossTabSubscriptions.forEach(s=>{
                        t[s] && (e[s] = t[s])
                    }
                    ),
                    Object.keys(e).length > 0 && this.crosstabClient.emit(f["d"].CROSSTAB_CHANNELS.ticks, e, !0)
                },
                startTour(t, e) {
                    Object(st["b"])(t, e)
                },
                startExtendedTicker() {
                    let t = {
                        address: "wss://ws20.zerodha.com",
                        apiKey: "kitefront",
                        userId: this.userId,
                        encToken: this.encToken,
                        version: "3.0.0"
                    };
                    window.SharedWorker && !this.isKiteMobile ? this.extendedTicker = new ot(t) : (console.log("client: shared worker not available, fallback to normal ticker."),
                    this.extendedTicker = new D["a"].Provider(t)),
                    this.extendedTicker.lazyConnect(),
                    this.extendedTicker.eventTick.on(t=>{
                        this.setExtendedTicks(t)
                    }
                    )
                },
                onOrdersRouteClick() {
                    this.setOrderNotificationsCount(0)
                },
                applyTheme(t) {
                    this.$route.query.theme && (t = this.$route.query.theme),
                    document.documentElement.setAttribute("data-theme", t)
                },
                showMarketDepthWidget() {
                    this.$events.emit(f["d"].EVENTS.showMarketDepthWidget, {})
                }
            }
        }
          , Ai = Pi
          , Ii = (s("4960"),
        Object(vt["a"])(Ai, i, a, !1, null, null, null));
        e["default"] = Ii.exports
    },
    "48a0": function(t, e, s) {
        var i = s("242e")
          , a = s("950a")
          , n = a(i);
        t.exports = n
    },
    4960: function(t, e, s) {
        "use strict";
        s("691b")
    },
    "4c8a": function(t, e, s) {},
    5052: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return u
        }
        ));
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return t ? i["a"].get(Object(a["a"])("user.margins.info")) : i["a"].get(Object(a["a"])("user.margins.all"))
        }
        var r = {
            getMargins: n
        }
          , o = s("5fb0")
          , l = s("025e");
        let c = !0;
        const u = "margins"
          , d = {
            margins: null,
            marginsError: null,
            marginsFetchStatus: o["b"].initial
        }
          , h = {
            margins: t=>t.margins,
            marginsError: t=>t.marginsError,
            marginsFetchStatus: t=>t.marginsFetchStatus
        }
          , p = {
            setMargins(t, e) {
                t.margins = e
            },
            setMarginsError(t, e) {
                t.marginsError = e
            },
            setMarginsFetchStatus(t, e) {
                t.marginsFetchStatus = e
            }
        }
          , m = {
            fetchMargins({commit: t, state: e}) {
                t("setMarginsFetchStatus", o["b"].fetching);
                let s = r.getMargins();
                Object(l["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setMargins",
                    error: "setMarginsError",
                    status: "setMarginsFetchStatus"
                })
            }
        };
        e["a"] = {
            state: d,
            getters: h,
            mutations: p,
            actions: m,
            namespaced: c
        }
    },
    5105: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return l
        }
        ));
        var i = s("ed56")
          , a = s("ccd4")
          , n = s("025e")
          , r = s("5fb0");
        let o = !0;
        const l = a["a"]
          , c = {
            bulletin: [],
            bulletinError: {},
            unreadCount: 0,
            bulletinFetchStatus: r["b"].initial
        }
          , u = {
            bulletin: t=>t.bulletin,
            bulletinError: t=>t.bulletinError,
            unreadCount: t=>t.unreadCount,
            bulletinFetchStatus: t=>t.bulletinFetchStatus
        }
          , d = {
            setBulletin(t, e) {
                let s = e.filter(t=>-1 !== t.channels.indexOf("kite") || -1 !== t.channels.indexOf("*"));
                t.bulletin = [...s.slice(0).reverse()]
            },
            setBulletinError(t, e) {
                t.bulletinError = e
            },
            setBulletinFetchStatus(t, e) {
                t.bulletinFetchStatus = e
            },
            deleteAllbulletin(t) {
                t.bulletin = Object.assign([], t.bulletin, [])
            },
            markAllAsRead(t) {
                if (t.bulletin && t.bulletin.length > 0) {
                    let e = [...t.bulletin];
                    for (let t of e)
                        t.status = "read";
                    t.bulletin = Object.assign({}, t.bulletin, e)
                }
            },
            setunreadCount(t) {
                0 !== t.bulletin.length && (t.unreadCount = t.bulletin.map(t=>"unread" === t.status ? 1 : 0).reduce((t,e)=>t + e))
            },
            resetUnreadCount(t) {
                t.unreadCount = 0
            }
        }
          , h = {
            fetchBulletins({commit: t, state: e}) {
                t("setBulletinFetchStatus", r["b"].fetching),
                i["a"].get().then(e=>{
                    t("setBulletin", e.data.data),
                    t("setunreadCount"),
                    t("setBulletinFetchStatus", r["b"].success)
                }
                ).catch(e=>{
                    t("setBulletinFetchStatus", r["b"].error),
                    t("setBulletinError", Object(n["j"])(e))
                }
                )
            }
        };
        e["a"] = {
            state: c,
            getters: u,
            mutations: d,
            actions: h,
            namespaced: o
        }
    },
    "53a8": function(t, e, s) {
        "use strict";
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return t ? i["a"].get(Object(a["a"])("baskets.one", {
                basketID: t
            })) : i["a"].get(Object(a["a"])("baskets.all"))
        }
        function r(t) {
            return i["a"].post(Object(a["a"])("baskets.create"), t)
        }
        function o(t, e) {
            return i["a"].put(Object(a["a"])("baskets.modify", {
                basketID: t
            }), e)
        }
        function l(t) {
            return i["a"].delete(Object(a["a"])("baskets.delete", {
                basketID: t
            }))
        }
        function c(t, e) {
            return i["a"].post(Object(a["a"])("baskets.items.add", {
                basketID: t
            }), e)
        }
        function u(t, e, s) {
            return i["a"].put(Object(a["a"])("baskets.items.modify", {
                basketID: t,
                itemID: e
            }), s)
        }
        function d(t, e) {
            return i["a"].delete(Object(a["a"])("baskets.items.delete", {
                basketID: t,
                itemID: e
            }))
        }
        function h(t, e) {
            return i["a"].put(Object(a["a"])("baskets.items.modifyWeights", {
                basketID: t
            }), e)
        }
        function p(t, e) {
            return i["a"].post(Object(a["a"])("margins.basket"), t, {
                headers: {
                    "Content-Type": "application/json"
                },
                params: e
            })
        }
        e["a"] = {
            getBaskets: n,
            createBasket: r,
            modifyBasket: o,
            deleteBasket: l,
            addBasketItem: c,
            modifyBasketItem: u,
            removeBasketItem: d,
            modifyBasketItemsWeight: h,
            getBasketMargins: p
        }
    },
    "58c0": function(t, e, s) {
        "use strict";
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return t ? i["a"].get(Object(a["a"])("ipo.instruments.info", {
                id: t
            })) : i["a"].get(Object(a["a"])("ipo.instruments"))
        }
        function r(t) {
            return t ? i["a"].get(Object(a["a"])("ipo.applications.info", {
                id: t
            })) : i["a"].get(Object(a["a"])("ipo.applications"))
        }
        function o(t) {
            return i["a"].post(Object(a["a"])("ipo.applications.create"), t, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        function l(t, e) {
            return i["a"].put(Object(a["a"])("ipo.applications.modify", {
                id: t
            }), e, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        function c(t) {
            return i["a"].delete(Object(a["a"])("ipo.applications.cancel", {
                id: t
            }))
        }
        e["a"] = {
            getInstruments: n,
            getApplications: r,
            createApplication: o,
            modifyApplication: l,
            cancelApplication: c
        }
    },
    "691b": function(t, e, s) {},
    "6b3d": function(t, e, s) {},
    "6cd42": function(t, e, s) {
        var i = s("8057")
          , a = s("48a0")
          , n = s("1304")
          , r = s("6747");
        function o(t, e) {
            var s = r(t) ? i : a;
            return s(t, n(e))
        }
        t.exports = o
    },
    "6f52": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "dashboard"
            }, [s("h1", {
                staticClass: "page-title big"
            }, [t._v("Hi, "), s("span", {
                staticClass: "nickname"
            }, [t._v(t._s(t.shortName))])]), t._v(" "), s("div", {
                staticClass: "margins-stats stats-block"
            }, [t.marginsConstraints.showHeader ? s("div", {
                staticClass: "secondary-title"
            }, [s("span", {
                staticClass: "icon icon-briefcase"
            }), t._v(" "), s("span", [t._v("Funds")]), t._v(" "), t.marginsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.marginsConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Margins couldn't be loaded.",
                    error: t.marginsError
                }
            }) : t._e(), t._v(" "), t.marginsConstraints.isData ? s("div", {
                staticClass: "row"
            }, t._l(["equity", "commodity"], (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "six columns margin-block",
                    class: {
                        first: 0 === i
                    }
                }, [s("div", {
                    staticClass: "secondary-title"
                }, ["equity" == e ? s("span", {
                    staticClass: "icon icon-pie-chart"
                }) : t._e(), t._v(" "), "commodity" == e ? s("span", {
                    staticClass: "icon icon-droplet"
                }) : t._e(), t._v(" "), s("span", [t._v(t._s(e))]), t._v(" "), t.marginsConstraints.showErrorIcon ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "text-small error-fetch",
                    attrs: {
                        title: "Margins couldn't be fetched."
                    }
                }, [s("span", {
                    staticClass: "icon icon-alert-triangle"
                })]) : t._e(), t._v(" "), t.marginsConstraints.isFetching ? s("su-loader", {
                    staticClass: "dim",
                    attrs: {
                        size: 8
                    }
                }) : t._e()], 1), t._v(" "), t.marginsConstraints.isData ? [s("div", {
                    staticClass: "row"
                }, [t.margins[e] ? s("div", {
                    staticClass: "primary-stats five columns m5"
                }, [s("div", {
                    staticClass: "value"
                }, [s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: t._f("inrFormat")(t.margins[e].net, null, null, !0)
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("kformat")(t.margins[e].net, 2)) + "\n\t\t\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "label"
                }, [t._v("Margin available")])]) : t._e(), t._v(" "), t.margins[e] ? s("div", {
                    staticClass: "secondary-stats seven columns m7"
                }, [s("div", {
                    staticClass: "block"
                }, [s("span", {
                    staticClass: "label"
                }, [t._v("Margins used")]), t._v(" "), s("span", {
                    staticClass: "value"
                }, [s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: t._f("inrFormat")(t.margins[e].utilised.debits, null, null, !0)
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("kformat")(t.margins[e].utilised.debits, 2)) + "\n\t\t\t\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                    staticClass: "block"
                }, [s("span", {
                    staticClass: "label"
                }, [t._v("Opening balance")]), t._v(" "), s("span", {
                    staticClass: "value"
                }, [s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: t._f("inrFormat")(t.margins[e].available.cash, null, null, !0)
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("kformat")(t.margins[e].available.opening_balance, 2)) + "\n\t\t\t\t\t\t\t\t\t\t")])])]), t._v(" "), s("a", {
                    staticClass: "view-statement-link block",
                    attrs: {
                        target: "_blank",
                        href: t.consoleURL + "/funds/statement?segment=" + e + "&src=kiteweb"
                    }
                }, [s("span", {
                    staticClass: "icon"
                }, [s("img", {
                    staticStyle: {
                        height: "9px"
                    },
                    attrs: {
                        src: t.getStatic("/images/console.svg")
                    }
                })]), t._v(" "), s("span", [t._v("View statement")])])]) : t._e()])] : t._e()], 2)
            }
            )), 0) : t._e()], 1), t._v(" "), s("div", {
                staticClass: "stats-block holdings"
            }, [s("div", {
                staticClass: "holdings-block portfolio-block"
            }, [t.holdingsConstraints.showHeader ? s("div", {
                staticClass: "secondary-title"
            }, [s("span", {
                staticClass: "icon icon-briefcase"
            }), t._v("\n\t\t\t\t\tHoldings "), t.holdingsConstraints.isData ? s("span", [t._v("(" + t._s(t.holdings.length) + ")")]) : t._e(), t._v(" "), t.holdingsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Holdings couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.holdingsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.holdingsConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Holdings couldn't be loaded.",
                    error: t.holdingsError
                }
            }) : t._e(), t._v(" "), t.holdingsConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.emptyStateImage.holdings,
                    showOmnisearch: "",
                    omnisearchActionTitle: "Start investing"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any stocks in your DEMAT yet. Get started with absolutely free equity investments.")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.holdingsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]) : t._e(), t._v(" "), t.holdingsConstraints.isData ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "primary-stats six columns m5"
            }, [s("div", {
                staticClass: "value",
                class: {
                    "text-green": t.netHoldings.pnl > 0,
                    "text-red": t.netHoldings.pnl < 0
                }
            }, [s("span", [t._v(t._s(t._f("kformat")(t.netHoldings.pnl, 2)))]), t._v(" "), 0 != t.netHoldings.total ? s("span", {
                staticClass: "text-xsmall"
            }, [t.netHoldings.pnl > 0 ? [t._v("+")] : t._e(), t._v(t._s(t._f("decimalPad")((t.netHoldings.current - t.netHoldings.total) / t.netHoldings.total * 100, 2)) + "%\n\t\t\t\t\t\t\t")], 2) : t._e()]), t._v(" "), t._m(0)]), t._v(" "), s("div", {
                staticClass: "secondary-stats six columns m7"
            }, [s("div", {
                staticClass: "block"
            }, [s("span", {
                staticClass: "label"
            }, [t._v("Current value")]), t._v(" "), s("span", {
                staticClass: "value"
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: t._f("inrFormat")(t.netHoldings.current, null, null, !0)
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("kformat")(t.netHoldings.current, 2)) + "\n\t\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "block"
            }, [s("span", {
                staticClass: "label"
            }, [t._v("Investment")]), t._v(" "), s("span", {
                staticClass: "value"
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                attrs: {
                    title: t._f("inrFormat")(t.netHoldings.total, null, null, !0)
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("kformat")(t.netHoldings.total, 2)) + "\n\t\t\t\t\t\t\t\t")])])])])]) : t._e(), t._v(" "), t.holdingsConstraints.isData ? s("div", [s("holdings-treemap", {
                attrs: {
                    "raw-data": t.holdings,
                    "hide-stats": !0
                }
            })], 1) : t._e()], 1), t._v(" "), s("div", {
                staticClass: "interactive-banner"
            }, [s("banner")], 1)]), t._v(" "), s("div", {
                staticClass: "stats-block row"
            }, [s("div", {
                staticClass: "six columns market-overview-block"
            }, [t.pinnedChartConstraints.isError ? t._e() : s("h2", {
                staticClass: "secondary-title"
            }, [s("span", {
                staticClass: "icon icon-trending-up"
            }), t._v("\n\t\t\t\t\tMarket overview\n\t\t\t\t\t"), t._v(" "), t.pinnedChartConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1), t._v(" "), t.pinnedChartConstraints.isError ? s("error-state", {
                attrs: {
                    title: "Market overview chart couldn't be loaded.",
                    error: t.pinnedChartDataError
                }
            }) : t._e(), t._v(" "), t.pinnedChartConstraints.isData ? s("div", [s("market-overview-chart", {
                attrs: {
                    "raw-data": t.getPinnedChartData,
                    height: 180
                }
            })], 1) : t._e()], 1), t._v(" "), s("div", {
                staticClass: "six columns positions-block"
            }, [t.positionsConstraints.showHeader ? s("h2", {
                staticClass: "secondary-title"
            }, [s("span", {
                staticClass: "icon icon-file-text"
            }), t._v("\n\t\t\t\t\tPositions "), t.positionsConstraints.isData ? s("span", [t._v("(" + t._s(t.positions.net.length) + ")")]) : t._e(), t._v(" "), t.holdingsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Holdings couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1) : t._e(), t._v(" "), t.positionsConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Positions couldn't be loaded.",
                    error: t.positionsError
                }
            }) : t._e(), t._v(" "), t.positionsConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.emptyStateImage.positions,
                    showOmnisearch: "",
                    omnisearchActionTitle: "Get started"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any positions yet")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.holdingsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.holdingsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Holdings couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.positionsConstraints.isData ? s("div", [s("positions-barchart", {
                attrs: {
                    "raw-data": t.positions.net
                }
            })], 1) : t._e()], 1)])])
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "label"
            }, [s("span", [t._v("P&L")])])
        }
        ]
          , n = s("2f62")
          , r = s("e165")
          , o = s.n(r)
          , l = s("9c9e")
          , c = s("5fb0")
          , u = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "chart"
            })
        }
          , d = []
          , h = s("00a5")
          , p = s("0165")
          , m = function() {
            var t, e = p["b"];
            while (t = e.sourceEvent)
                e = t;
            return e
        }
          , v = function(t, e) {
            var s = t.ownerSVGElement || t;
            if (s.createSVGPoint) {
                var i = s.createSVGPoint();
                return i.x = e.clientX,
                i.y = e.clientY,
                i = i.matrixTransform(t.getScreenCTM().inverse()),
                [i.x, i.y]
            }
            var a = t.getBoundingClientRect();
            return [e.clientX - a.left - t.clientLeft, e.clientY - a.top - t.clientTop]
        }
          , _ = function(t) {
            var e = m();
            return e.changedTouches && (e = e.changedTouches[0]),
            v(t, e)
        }
          , g = s("2739")
          , f = s("6eb2")
          , b = s("b14c")
          , C = s("742c")
          , y = s("a15a")
          , w = s("77ae");
        function T(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
                return e.setFullYear(t.y),
                e
            }
            return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
        }
        function k(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y),
                e
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }
        function x(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        function E(t) {
            var e = t.dateTime
              , s = t.date
              , i = t.time
              , a = t.periods
              , n = t.days
              , r = t.shortDays
              , o = t.months
              , l = t.shortMonths
              , c = U(a)
              , u = F(a)
              , d = U(n)
              , h = F(n)
              , p = U(r)
              , m = F(r)
              , v = U(o)
              , _ = F(o)
              , y = U(l)
              , w = F(l)
              , E = {
                a: qt,
                A: Wt,
                b: Gt,
                B: Yt,
                c: null,
                d: nt,
                e: nt,
                f: ut,
                H: rt,
                I: ot,
                j: lt,
                L: ct,
                m: dt,
                M: ht,
                p: Qt,
                Q: jt,
                s: Ht,
                S: pt,
                u: mt,
                U: vt,
                V: _t,
                w: gt,
                W: ft,
                x: null,
                X: null,
                y: bt,
                Y: Ct,
                Z: yt,
                "%": Ft
            }
              , S = {
                a: Kt,
                A: Xt,
                b: Zt,
                B: Jt,
                c: null,
                d: wt,
                e: wt,
                f: St,
                H: Tt,
                I: kt,
                j: xt,
                L: Et,
                m: Pt,
                M: At,
                p: te,
                Q: jt,
                s: Ht,
                S: It,
                u: Ot,
                U: Dt,
                V: Mt,
                w: Nt,
                W: Rt,
                x: null,
                X: null,
                y: Lt,
                Y: $t,
                Z: Ut,
                "%": Ft
            }
              , P = {
                a: N,
                A: R,
                b: L,
                B: $,
                c: Bt,
                d: Q,
                e: Q,
                f: et,
                H: X,
                I: X,
                j: K,
                L: tt,
                m: Y,
                M: Z,
                p: M,
                Q: it,
                s: at,
                S: J,
                u: H,
                U: B,
                V: z,
                w: j,
                W: V,
                x: zt,
                X: Vt,
                y: W,
                Y: q,
                Z: G,
                "%": st
            };
            function A(t, e) {
                return function(s) {
                    var i, a, n, r = [], o = -1, l = 0, c = t.length;
                    s instanceof Date || (s = new Date(+s));
                    while (++o < c)
                        37 === t.charCodeAt(o) && (r.push(t.slice(l, o)),
                        null != (a = D[i = t.charAt(++o)]) ? i = t.charAt(++o) : a = "e" === i ? " " : "0",
                        (n = e[i]) && (i = n(s, a)),
                        r.push(i),
                        l = o + 1);
                    return r.push(t.slice(l, o)),
                    r.join("")
                }
            }
            function I(t, e) {
                return function(s) {
                    var i, a, n = x(1900), r = O(n, t, s += "", 0);
                    if (r != s.length)
                        return null;
                    if ("Q"in n)
                        return new Date(n.Q);
                    if ("p"in n && (n.H = n.H % 12 + 12 * n.p),
                    "V"in n) {
                        if (n.V < 1 || n.V > 53)
                            return null;
                        "w"in n || (n.w = 1),
                        "Z"in n ? (i = k(x(n.y)),
                        a = i.getUTCDay(),
                        i = a > 4 || 0 === a ? g["a"].ceil(i) : Object(g["a"])(i),
                        i = f["a"].offset(i, 7 * (n.V - 1)),
                        n.y = i.getUTCFullYear(),
                        n.m = i.getUTCMonth(),
                        n.d = i.getUTCDate() + (n.w + 6) % 7) : (i = e(x(n.y)),
                        a = i.getDay(),
                        i = a > 4 || 0 === a ? b["a"].ceil(i) : Object(b["a"])(i),
                        i = C["a"].offset(i, 7 * (n.V - 1)),
                        n.y = i.getFullYear(),
                        n.m = i.getMonth(),
                        n.d = i.getDate() + (n.w + 6) % 7)
                    } else
                        ("W"in n || "U"in n) && ("w"in n || (n.w = "u"in n ? n.u % 7 : "W"in n ? 1 : 0),
                        a = "Z"in n ? k(x(n.y)).getUTCDay() : e(x(n.y)).getDay(),
                        n.m = 0,
                        n.d = "W"in n ? (n.w + 6) % 7 + 7 * n.W - (a + 5) % 7 : n.w + 7 * n.U - (a + 6) % 7);
                    return "Z"in n ? (n.H += n.Z / 100 | 0,
                    n.M += n.Z % 100,
                    k(n)) : e(n)
                }
            }
            function O(t, e, s, i) {
                var a, n, r = 0, o = e.length, l = s.length;
                while (r < o) {
                    if (i >= l)
                        return -1;
                    if (a = e.charCodeAt(r++),
                    37 === a) {
                        if (a = e.charAt(r++),
                        n = P[a in D ? e.charAt(r++) : a],
                        !n || (i = n(t, s, i)) < 0)
                            return -1
                    } else if (a != s.charCodeAt(i++))
                        return -1
                }
                return i
            }
            function M(t, e, s) {
                var i = c.exec(e.slice(s));
                return i ? (t.p = u[i[0].toLowerCase()],
                s + i[0].length) : -1
            }
            function N(t, e, s) {
                var i = p.exec(e.slice(s));
                return i ? (t.w = m[i[0].toLowerCase()],
                s + i[0].length) : -1
            }
            function R(t, e, s) {
                var i = d.exec(e.slice(s));
                return i ? (t.w = h[i[0].toLowerCase()],
                s + i[0].length) : -1
            }
            function L(t, e, s) {
                var i = y.exec(e.slice(s));
                return i ? (t.m = w[i[0].toLowerCase()],
                s + i[0].length) : -1
            }
            function $(t, e, s) {
                var i = v.exec(e.slice(s));
                return i ? (t.m = _[i[0].toLowerCase()],
                s + i[0].length) : -1
            }
            function Bt(t, s, i) {
                return O(t, e, s, i)
            }
            function zt(t, e, i) {
                return O(t, s, e, i)
            }
            function Vt(t, e, s) {
                return O(t, i, e, s)
            }
            function qt(t) {
                return r[t.getDay()]
            }
            function Wt(t) {
                return n[t.getDay()]
            }
            function Gt(t) {
                return l[t.getMonth()]
            }
            function Yt(t) {
                return o[t.getMonth()]
            }
            function Qt(t) {
                return a[+(t.getHours() >= 12)]
            }
            function Kt(t) {
                return r[t.getUTCDay()]
            }
            function Xt(t) {
                return n[t.getUTCDay()]
            }
            function Zt(t) {
                return l[t.getUTCMonth()]
            }
            function Jt(t) {
                return o[t.getUTCMonth()]
            }
            function te(t) {
                return a[+(t.getUTCHours() >= 12)]
            }
            return E.x = A(s, E),
            E.X = A(i, E),
            E.c = A(e, E),
            S.x = A(s, S),
            S.X = A(i, S),
            S.c = A(e, S),
            {
                format: function(t) {
                    var e = A(t += "", E);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                parse: function(t) {
                    var e = I(t += "", T);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcFormat: function(t) {
                    var e = A(t += "", S);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcParse: function(t) {
                    var e = I(t, k);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                }
            }
        }
        var S, P, A, I, O, D = {
            "-": "",
            _: " ",
            0: "0"
        }, M = /^\s*\d+/, N = /^%/, R = /[\\^$*+?|[\]().{}]/g;
        function L(t, e, s) {
            var i = t < 0 ? "-" : ""
              , a = (i ? -t : t) + ""
              , n = a.length;
            return i + (n < s ? new Array(s - n + 1).join(e) + a : a)
        }
        function $(t) {
            return t.replace(R, "\\$&")
        }
        function U(t) {
            return new RegExp("^(?:" + t.map($).join("|") + ")","i")
        }
        function F(t) {
            var e = {}
              , s = -1
              , i = t.length;
            while (++s < i)
                e[t[s].toLowerCase()] = s;
            return e
        }
        function j(t, e, s) {
            var i = M.exec(e.slice(s, s + 1));
            return i ? (t.w = +i[0],
            s + i[0].length) : -1
        }
        function H(t, e, s) {
            var i = M.exec(e.slice(s, s + 1));
            return i ? (t.u = +i[0],
            s + i[0].length) : -1
        }
        function B(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.U = +i[0],
            s + i[0].length) : -1
        }
        function z(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.V = +i[0],
            s + i[0].length) : -1
        }
        function V(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.W = +i[0],
            s + i[0].length) : -1
        }
        function q(t, e, s) {
            var i = M.exec(e.slice(s, s + 4));
            return i ? (t.y = +i[0],
            s + i[0].length) : -1
        }
        function W(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3),
            s + i[0].length) : -1
        }
        function G(t, e, s) {
            var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(s, s + 6));
            return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")),
            s + i[0].length) : -1
        }
        function Y(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.m = i[0] - 1,
            s + i[0].length) : -1
        }
        function Q(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.d = +i[0],
            s + i[0].length) : -1
        }
        function K(t, e, s) {
            var i = M.exec(e.slice(s, s + 3));
            return i ? (t.m = 0,
            t.d = +i[0],
            s + i[0].length) : -1
        }
        function X(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.H = +i[0],
            s + i[0].length) : -1
        }
        function Z(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.M = +i[0],
            s + i[0].length) : -1
        }
        function J(t, e, s) {
            var i = M.exec(e.slice(s, s + 2));
            return i ? (t.S = +i[0],
            s + i[0].length) : -1
        }
        function tt(t, e, s) {
            var i = M.exec(e.slice(s, s + 3));
            return i ? (t.L = +i[0],
            s + i[0].length) : -1
        }
        function et(t, e, s) {
            var i = M.exec(e.slice(s, s + 6));
            return i ? (t.L = Math.floor(i[0] / 1e3),
            s + i[0].length) : -1
        }
        function st(t, e, s) {
            var i = N.exec(e.slice(s, s + 1));
            return i ? s + i[0].length : -1
        }
        function it(t, e, s) {
            var i = M.exec(e.slice(s));
            return i ? (t.Q = +i[0],
            s + i[0].length) : -1
        }
        function at(t, e, s) {
            var i = M.exec(e.slice(s));
            return i ? (t.Q = 1e3 * +i[0],
            s + i[0].length) : -1
        }
        function nt(t, e) {
            return L(t.getDate(), e, 2)
        }
        function rt(t, e) {
            return L(t.getHours(), e, 2)
        }
        function ot(t, e) {
            return L(t.getHours() % 12 || 12, e, 2)
        }
        function lt(t, e) {
            return L(1 + C["a"].count(Object(y["a"])(t), t), e, 3)
        }
        function ct(t, e) {
            return L(t.getMilliseconds(), e, 3)
        }
        function ut(t, e) {
            return ct(t, e) + "000"
        }
        function dt(t, e) {
            return L(t.getMonth() + 1, e, 2)
        }
        function ht(t, e) {
            return L(t.getMinutes(), e, 2)
        }
        function pt(t, e) {
            return L(t.getSeconds(), e, 2)
        }
        function mt(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        }
        function vt(t, e) {
            return L(b["b"].count(Object(y["a"])(t), t), e, 2)
        }
        function _t(t, e) {
            var s = t.getDay();
            return t = s >= 4 || 0 === s ? Object(b["c"])(t) : b["c"].ceil(t),
            L(b["c"].count(Object(y["a"])(t), t) + (4 === Object(y["a"])(t).getDay()), e, 2)
        }
        function gt(t) {
            return t.getDay()
        }
        function ft(t, e) {
            return L(b["a"].count(Object(y["a"])(t), t), e, 2)
        }
        function bt(t, e) {
            return L(t.getFullYear() % 100, e, 2)
        }
        function Ct(t, e) {
            return L(t.getFullYear() % 1e4, e, 4)
        }
        function yt(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1,
            "+")) + L(e / 60 | 0, "0", 2) + L(e % 60, "0", 2)
        }
        function wt(t, e) {
            return L(t.getUTCDate(), e, 2)
        }
        function Tt(t, e) {
            return L(t.getUTCHours(), e, 2)
        }
        function kt(t, e) {
            return L(t.getUTCHours() % 12 || 12, e, 2)
        }
        function xt(t, e) {
            return L(1 + f["a"].count(Object(w["a"])(t), t), e, 3)
        }
        function Et(t, e) {
            return L(t.getUTCMilliseconds(), e, 3)
        }
        function St(t, e) {
            return Et(t, e) + "000"
        }
        function Pt(t, e) {
            return L(t.getUTCMonth() + 1, e, 2)
        }
        function At(t, e) {
            return L(t.getUTCMinutes(), e, 2)
        }
        function It(t, e) {
            return L(t.getUTCSeconds(), e, 2)
        }
        function Ot(t) {
            var e = t.getUTCDay();
            return 0 === e ? 7 : e
        }
        function Dt(t, e) {
            return L(g["b"].count(Object(w["a"])(t), t), e, 2)
        }
        function Mt(t, e) {
            var s = t.getUTCDay();
            return t = s >= 4 || 0 === s ? Object(g["c"])(t) : g["c"].ceil(t),
            L(g["c"].count(Object(w["a"])(t), t) + (4 === Object(w["a"])(t).getUTCDay()), e, 2)
        }
        function Nt(t) {
            return t.getUTCDay()
        }
        function Rt(t, e) {
            return L(g["a"].count(Object(w["a"])(t), t), e, 2)
        }
        function Lt(t, e) {
            return L(t.getUTCFullYear() % 100, e, 2)
        }
        function $t(t, e) {
            return L(t.getUTCFullYear() % 1e4, e, 4)
        }
        function Ut() {
            return "+0000"
        }
        function Ft() {
            return "%"
        }
        function jt(t) {
            return +t
        }
        function Ht(t) {
            return Math.floor(+t / 1e3)
        }
        function Bt(t) {
            return S = E(t),
            P = S.format,
            A = S.parse,
            I = S.utcFormat,
            O = S.utcParse,
            S
        }
        Bt({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        var zt = "%Y-%m-%dT%H:%M:%S.%LZ";
        function Vt(t) {
            return t.toISOString()
        }
        Date.prototype.toISOString || I(zt);
        function qt(t) {
            var e = new Date(t);
            return isNaN(e) ? null : e
        }
        +new Date("2000-01-01T00:00:00.000Z") || O(zt);
        var Wt = Math.PI
          , Gt = 2 * Wt
          , Yt = 1e-6
          , Qt = Gt - Yt;
        function Kt() {
            this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = ""
        }
        function Xt() {
            return new Kt
        }
        Kt.prototype = Xt.prototype = {
            constructor: Kt,
            moveTo: function(t, e) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0,
                this._y1 = this._y0,
                this._ += "Z")
            },
            lineTo: function(t, e) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
            },
            quadraticCurveTo: function(t, e, s, i) {
                this._ += "Q" + +t + "," + +e + "," + (this._x1 = +s) + "," + (this._y1 = +i)
            },
            bezierCurveTo: function(t, e, s, i, a, n) {
                this._ += "C" + +t + "," + +e + "," + +s + "," + +i + "," + (this._x1 = +a) + "," + (this._y1 = +n)
            },
            arcTo: function(t, e, s, i, a) {
                t = +t,
                e = +e,
                s = +s,
                i = +i,
                a = +a;
                var n = this._x1
                  , r = this._y1
                  , o = s - t
                  , l = i - e
                  , c = n - t
                  , u = r - e
                  , d = c * c + u * u;
                if (a < 0)
                    throw new Error("negative radius: " + a);
                if (null === this._x1)
                    this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
                else if (d > Yt)
                    if (Math.abs(u * o - l * c) > Yt && a) {
                        var h = s - n
                          , p = i - r
                          , m = o * o + l * l
                          , v = h * h + p * p
                          , _ = Math.sqrt(m)
                          , g = Math.sqrt(d)
                          , f = a * Math.tan((Wt - Math.acos((m + d - v) / (2 * _ * g))) / 2)
                          , b = f / g
                          , C = f / _;
                        Math.abs(b - 1) > Yt && (this._ += "L" + (t + b * c) + "," + (e + b * u)),
                        this._ += "A" + a + "," + a + ",0,0," + +(u * h > c * p) + "," + (this._x1 = t + C * o) + "," + (this._y1 = e + C * l)
                    } else
                        this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
                else
                    ;
            },
            arc: function(t, e, s, i, a, n) {
                t = +t,
                e = +e,
                s = +s,
                n = !!n;
                var r = s * Math.cos(i)
                  , o = s * Math.sin(i)
                  , l = t + r
                  , c = e + o
                  , u = 1 ^ n
                  , d = n ? i - a : a - i;
                if (s < 0)
                    throw new Error("negative radius: " + s);
                null === this._x1 ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > Yt || Math.abs(this._y1 - c) > Yt) && (this._ += "L" + l + "," + c),
                s && (d < 0 && (d = d % Gt + Gt),
                d > Qt ? this._ += "A" + s + "," + s + ",0,1," + u + "," + (t - r) + "," + (e - o) + "A" + s + "," + s + ",0,1," + u + "," + (this._x1 = l) + "," + (this._y1 = c) : d > Yt && (this._ += "A" + s + "," + s + ",0," + +(d >= Wt) + "," + u + "," + (this._x1 = t + s * Math.cos(a)) + "," + (this._y1 = e + s * Math.sin(a))))
            },
            rect: function(t, e, s, i) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +s + "v" + +i + "h" + -s + "Z"
            },
            toString: function() {
                return this._
            }
        };
        var Zt = Xt
          , Jt = function(t) {
            return function() {
                return t
            }
        }
          , te = (Math.abs,
        Math.atan2,
        Math.cos,
        Math.max,
        Math.min,
        Math.sin,
        Math.sqrt,
        1e-12)
          , ee = Math.PI
          , se = 2 * ee;
        function ie(t) {
            this._context = t
        }
        ie.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e);
                    break
                }
            }
        };
        var ae = function(t) {
            return new ie(t)
        };
        function ne(t) {
            return t[0]
        }
        function re(t) {
            return t[1]
        }
        var oe = function() {
            var t = ne
              , e = re
              , s = Jt(!0)
              , i = null
              , a = ae
              , n = null;
            function r(r) {
                var o, l, c, u = r.length, d = !1;
                for (null == i && (n = a(c = Zt())),
                o = 0; o <= u; ++o)
                    !(o < u && s(l = r[o], o, r)) === d && ((d = !d) ? n.lineStart() : n.lineEnd()),
                    d && n.point(+t(l, o, r), +e(l, o, r));
                if (c)
                    return n = null,
                    c + "" || null
            }
            return r.x = function(e) {
                return arguments.length ? (t = "function" === typeof e ? e : Jt(+e),
                r) : t
            }
            ,
            r.y = function(t) {
                return arguments.length ? (e = "function" === typeof t ? t : Jt(+t),
                r) : e
            }
            ,
            r.defined = function(t) {
                return arguments.length ? (s = "function" === typeof t ? t : Jt(!!t),
                r) : s
            }
            ,
            r.curve = function(t) {
                return arguments.length ? (a = t,
                null != i && (n = a(i)),
                r) : a
            }
            ,
            r.context = function(t) {
                return arguments.length ? (null == t ? i = n = null : n = a(i = t),
                r) : i
            }
            ,
            r
        };
        ce(ae);
        function le(t) {
            this._curve = t
        }
        function ce(t) {
            function e(e) {
                return new le(t(e))
            }
            return e._curve = t,
            e
        }
        le.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(t, e) {
                this._curve.point(e * Math.sin(t), e * -Math.cos(t))
            }
        };
        Array.prototype.slice;
        Math.sqrt(1 / 3);
        var ue = Math.sin(ee / 10) / Math.sin(7 * ee / 10)
          , de = (Math.sin(se / 10),
        Math.cos(se / 10),
        Math.sqrt(3),
        Math.sqrt(3),
        Math.sqrt(12),
        function() {}
        );
        function he(t, e, s) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + s) / 6)
        }
        function pe(t) {
            this._context = t
        }
        pe.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 3:
                    he(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    he(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
        function me(t) {
            this._context = t
        }
        me.prototype = {
            areaStart: de,
            areaEnd: de,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                    this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
                    break
                }
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._x2 = t,
                    this._y2 = e;
                    break;
                case 1:
                    this._point = 2,
                    this._x3 = t,
                    this._y3 = e;
                    break;
                case 2:
                    this._point = 3,
                    this._x4 = t,
                    this._y4 = e,
                    this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                    break;
                default:
                    he(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
        function ve(t) {
            this._context = t
        }
        ve.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var s = (this._x0 + 4 * this._x1 + t) / 6
                      , i = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(s, i) : this._context.moveTo(s, i);
                    break;
                case 3:
                    this._point = 4;
                default:
                    he(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = e
            }
        };
        function _e(t, e) {
            this._basis = new pe(t),
            this._beta = e
        }
        _e.prototype = {
            lineStart: function() {
                this._x = [],
                this._y = [],
                this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x
                  , e = this._y
                  , s = t.length - 1;
                if (s > 0) {
                    var i, a = t[0], n = e[0], r = t[s] - a, o = e[s] - n, l = -1;
                    while (++l <= s)
                        i = l / s,
                        this._basis.point(this._beta * t[l] + (1 - this._beta) * (a + i * r), this._beta * e[l] + (1 - this._beta) * (n + i * o))
                }
                this._x = this._y = null,
                this._basis.lineEnd()
            },
            point: function(t, e) {
                this._x.push(+t),
                this._y.push(+e)
            }
        };
        (function t(e) {
            function s(t) {
                return 1 === e ? new pe(t) : new _e(t,e)
            }
            return s.beta = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(.85);
        function ge(t, e, s) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - s), t._x2, t._y2)
        }
        function fe(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        fe.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    ge(this, this._x1, this._y1);
                    break
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2,
                    this._x1 = t,
                    this._y1 = e;
                    break;
                case 2:
                    this._point = 3;
                default:
                    ge(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return new fe(t,e)
            }
            return s.tension = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(0);
        function be(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        be.prototype = {
            areaStart: de,
            areaEnd: de,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
                    break
                }
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._x3 = t,
                    this._y3 = e;
                    break;
                case 1:
                    this._point = 2,
                    this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3,
                    this._x5 = t,
                    this._y5 = e;
                    break;
                default:
                    ge(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return new be(t,e)
            }
            return s.tension = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(0);
        function Ce(t, e) {
            this._context = t,
            this._k = (1 - e) / 6
        }
        Ce.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    ge(this, t, e);
                    break
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return new Ce(t,e)
            }
            return s.tension = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(0);
        function ye(t, e, s) {
            var i = t._x1
              , a = t._y1
              , n = t._x2
              , r = t._y2;
            if (t._l01_a > te) {
                var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
                  , l = 3 * t._l01_a * (t._l01_a + t._l12_a);
                i = (i * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l,
                a = (a * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l
            }
            if (t._l23_a > te) {
                var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
                  , u = 3 * t._l23_a * (t._l23_a + t._l12_a);
                n = (n * c + t._x1 * t._l23_2a - e * t._l12_2a) / u,
                r = (r * c + t._y1 * t._l23_2a - s * t._l12_2a) / u
            }
            t._context.bezierCurveTo(i, a, n, r, t._x2, t._y2)
        }
        function we(t, e) {
            this._context = t,
            this._alpha = e
        }
        we.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2);
                    break
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                if (t = +t,
                e = +e,
                this._point) {
                    var s = this._x2 - t
                      , i = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + i * i, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    ye(this, t, e);
                    break
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return e ? new we(t,e) : new fe(t,0)
            }
            return s.alpha = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(.5);
        function Te(t, e) {
            this._context = t,
            this._alpha = e
        }
        Te.prototype = {
            areaStart: de,
            areaEnd: de,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5);
                    break
                }
            },
            point: function(t, e) {
                if (t = +t,
                e = +e,
                this._point) {
                    var s = this._x2 - t
                      , i = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + i * i, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._x3 = t,
                    this._y3 = e;
                    break;
                case 1:
                    this._point = 2,
                    this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3,
                    this._x5 = t,
                    this._y5 = e;
                    break;
                default:
                    ye(this, t, e);
                    break
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return e ? new Te(t,e) : new be(t,0)
            }
            return s.alpha = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(.5);
        function ke(t, e) {
            this._context = t,
            this._alpha = e
        }
        ke.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                if (t = +t,
                e = +e,
                this._point) {
                    var s = this._x2 - t
                      , i = this._y2 - e;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + i * i, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    ye(this, t, e);
                    break
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = e
            }
        };
        (function t(e) {
            function s(t) {
                return e ? new ke(t,e) : new Ce(t,0)
            }
            return s.alpha = function(e) {
                return t(+e)
            }
            ,
            s
        }
        )(.5);
        function xe(t) {
            this._context = t
        }
        xe.prototype = {
            areaStart: de,
            areaEnd: de,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, e) {
                t = +t,
                e = +e,
                this._point ? this._context.lineTo(t, e) : (this._point = 1,
                this._context.moveTo(t, e))
            }
        };
        function Ee(t) {
            return t < 0 ? -1 : 1
        }
        function Se(t, e, s) {
            var i = t._x1 - t._x0
              , a = e - t._x1
              , n = (t._y1 - t._y0) / (i || a < 0 && -0)
              , r = (s - t._y1) / (a || i < 0 && -0)
              , o = (n * a + r * i) / (i + a);
            return (Ee(n) + Ee(r)) * Math.min(Math.abs(n), Math.abs(r), .5 * Math.abs(o)) || 0
        }
        function Pe(t, e) {
            var s = t._x1 - t._x0;
            return s ? (3 * (t._y1 - t._y0) / s - e) / 2 : e
        }
        function Ae(t, e, s) {
            var i = t._x0
              , a = t._y0
              , n = t._x1
              , r = t._y1
              , o = (n - i) / 3;
            t._context.bezierCurveTo(i + o, a + o * e, n - o, r - o * s, n, r)
        }
        function Ie(t) {
            this._context = t
        }
        function Oe(t) {
            this._context = new De(t)
        }
        function De(t) {
            this._context = t
        }
        function Me(t) {
            this._context = t
        }
        function Ne(t) {
            var e, s, i = t.length - 1, a = new Array(i), n = new Array(i), r = new Array(i);
            for (a[0] = 0,
            n[0] = 2,
            r[0] = t[0] + 2 * t[1],
            e = 1; e < i - 1; ++e)
                a[e] = 1,
                n[e] = 4,
                r[e] = 4 * t[e] + 2 * t[e + 1];
            for (a[i - 1] = 2,
            n[i - 1] = 7,
            r[i - 1] = 8 * t[i - 1] + t[i],
            e = 1; e < i; ++e)
                s = a[e] / n[e - 1],
                n[e] -= s,
                r[e] -= s * r[e - 1];
            for (a[i - 1] = r[i - 1] / n[i - 1],
            e = i - 2; e >= 0; --e)
                a[e] = (r[e] - a[e + 1]) / n[e];
            for (n[i - 1] = (t[i] + a[i - 1]) / 2,
            e = 0; e < i - 1; ++e)
                n[e] = 2 * t[e + 1] - a[e + 1];
            return [a, n]
        }
        Ie.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    Ae(this, this._t0, Pe(this, this._t0));
                    break
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, e) {
                var s = NaN;
                if (t = +t,
                e = +e,
                t !== this._x1 || e !== this._y1) {
                    switch (this._point) {
                    case 0:
                        this._point = 1,
                        this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3,
                        Ae(this, Pe(this, s = Se(this, t, e)), s);
                        break;
                    default:
                        Ae(this, this._t0, s = Se(this, t, e));
                        break
                    }
                    this._x0 = this._x1,
                    this._x1 = t,
                    this._y0 = this._y1,
                    this._y1 = e,
                    this._t0 = s
                }
            }
        },
        (Oe.prototype = Object.create(Ie.prototype)).point = function(t, e) {
            Ie.prototype.point.call(this, e, t)
        }
        ,
        De.prototype = {
            moveTo: function(t, e) {
                this._context.moveTo(e, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, e) {
                this._context.lineTo(e, t)
            },
            bezierCurveTo: function(t, e, s, i, a, n) {
                this._context.bezierCurveTo(e, t, i, s, n, a)
            }
        },
        Me.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [],
                this._y = []
            },
            lineEnd: function() {
                var t = this._x
                  , e = this._y
                  , s = t.length;
                if (s)
                    if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]),
                    2 === s)
                        this._context.lineTo(t[1], e[1]);
                    else
                        for (var i = Ne(t), a = Ne(e), n = 0, r = 1; r < s; ++n,
                        ++r)
                            this._context.bezierCurveTo(i[0][n], a[0][n], i[1][n], a[1][n], t[r], e[r]);
                (this._line || 0 !== this._line && 1 === s) && this._context.closePath(),
                this._line = 1 - this._line,
                this._x = this._y = null
            },
            point: function(t, e) {
                this._x.push(+t),
                this._y.push(+e)
            }
        };
        var Re = function(t) {
            return new Me(t)
        };
        function Le(t, e) {
            this._context = t,
            this._t = e
        }
        Le.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN,
                this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line >= 0 && (this._t = 1 - this._t,
                this._line = 1 - this._line)
            },
            point: function(t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0)
                        this._context.lineTo(this._x, e),
                        this._context.lineTo(t, e);
                    else {
                        var s = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(s, this._y),
                        this._context.lineTo(s, e)
                    }
                    break
                }
                this._x = t,
                this._y = e
            }
        };
        var $e = s("bc17")
          , Ue = Array.prototype.slice
          , Fe = function(t) {
            return t
        }
          , je = 1
          , He = 2
          , Be = 3
          , ze = 4
          , Ve = 1e-6;
        function qe(t) {
            return "translate(" + (t + .5) + ",0)"
        }
        function We(t) {
            return "translate(0," + (t + .5) + ")"
        }
        function Ge(t) {
            return function(e) {
                return +t(e)
            }
        }
        function Ye(t) {
            var e = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (e = Math.round(e)),
            function(s) {
                return +t(s) + e
            }
        }
        function Qe() {
            return !this.__axis
        }
        function Ke(t, e) {
            var s = []
              , i = null
              , a = null
              , n = 6
              , r = 6
              , o = 3
              , l = t === je || t === ze ? -1 : 1
              , c = t === ze || t === He ? "x" : "y"
              , u = t === je || t === Be ? qe : We;
            function d(d) {
                var h = null == i ? e.ticks ? e.ticks.apply(e, s) : e.domain() : i
                  , p = null == a ? e.tickFormat ? e.tickFormat.apply(e, s) : Fe : a
                  , m = Math.max(n, 0) + o
                  , v = e.range()
                  , _ = +v[0] + .5
                  , g = +v[v.length - 1] + .5
                  , f = (e.bandwidth ? Ye : Ge)(e.copy())
                  , b = d.selection ? d.selection() : d
                  , C = b.selectAll(".domain").data([null])
                  , y = b.selectAll(".tick").data(h, e).order()
                  , w = y.exit()
                  , T = y.enter().append("g").attr("class", "tick")
                  , k = y.select("line")
                  , x = y.select("text");
                C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")),
                y = y.merge(T),
                k = k.merge(T.append("line").attr("stroke", "#000").attr(c + "2", l * n)),
                x = x.merge(T.append("text").attr("fill", "#000").attr(c, l * m).attr("dy", t === je ? "0em" : t === Be ? "0.71em" : "0.32em")),
                d !== b && (C = C.transition(d),
                y = y.transition(d),
                k = k.transition(d),
                x = x.transition(d),
                w = w.transition(d).attr("opacity", Ve).attr("transform", (function(t) {
                    return isFinite(t = f(t)) ? u(t) : this.getAttribute("transform")
                }
                )),
                T.attr("opacity", Ve).attr("transform", (function(t) {
                    var e = this.parentNode.__axis;
                    return u(e && isFinite(e = e(t)) ? e : f(t))
                }
                ))),
                w.remove(),
                C.attr("d", t === ze || t == He ? "M" + l * r + "," + _ + "H0.5V" + g + "H" + l * r : "M" + _ + "," + l * r + "V0.5H" + g + "V" + l * r),
                y.attr("opacity", 1).attr("transform", (function(t) {
                    return u(f(t))
                }
                )),
                k.attr(c + "2", l * n),
                x.attr(c, l * m).text(p),
                b.filter(Qe).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === He ? "start" : t === ze ? "end" : "middle"),
                b.each((function() {
                    this.__axis = f
                }
                ))
            }
            return d.scale = function(t) {
                return arguments.length ? (e = t,
                d) : e
            }
            ,
            d.ticks = function() {
                return s = Ue.call(arguments),
                d
            }
            ,
            d.tickArguments = function(t) {
                return arguments.length ? (s = null == t ? [] : Ue.call(t),
                d) : s.slice()
            }
            ,
            d.tickValues = function(t) {
                return arguments.length ? (i = null == t ? null : Ue.call(t),
                d) : i && i.slice()
            }
            ,
            d.tickFormat = function(t) {
                return arguments.length ? (a = t,
                d) : a
            }
            ,
            d.tickSize = function(t) {
                return arguments.length ? (n = r = +t,
                d) : n
            }
            ,
            d.tickSizeInner = function(t) {
                return arguments.length ? (n = +t,
                d) : n
            }
            ,
            d.tickSizeOuter = function(t) {
                return arguments.length ? (r = +t,
                d) : r
            }
            ,
            d.tickPadding = function(t) {
                return arguments.length ? (o = +t,
                d) : o
            }
            ,
            d
        }
        function Xe(t) {
            return Ke(He, t)
        }
        function Ze(t) {
            return Ke(Be, t)
        }
        function Je(t) {
            return Ke(ze, t)
        }
        var ts = s("e236")
          , es = s("025e");
        const ss = P("%d %b %Y")
          , is = A("%Y-%m-%dT%H:%M:%S");
        var as = {
            props: ["data", "rawData", "height"],
            data() {
                return {}
            },
            mounted() {
                this.element = Object(h["a"])(this.$el),
                this.draw(this.element, this.formattedData, !1, this.height),
                Object(es["t"])("resize", "optimizedResize"),
                this.preProcess()
            },
            beforeDestroy() {
                this.postProcess()
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                formattedData() {
                    return this.data || this.formatRawData(this.rawData)
                }
            },
            methods: {
                preProcess() {
                    window.removeEventListener("optimizedResize", this.handleResize),
                    window.addEventListener("optimizedResize", this.handleResize)
                },
                postProcess() {
                    window.removeEventListener("optimizedResize", this.handleResize)
                },
                redraw() {
                    this.draw(this.element, this.formattedData, !0, this.height)
                },
                handleResize() {
                    this.redraw()
                },
                formatRawData(t) {
                    let e = [];
                    for (let s = 0; s < t.length; s++)
                        s % 7 !== 0 && s !== t.length - 1 || e.push({
                            date: is(t[s].timestamp.split("+")[0]),
                            line0: t[s].close_price
                        });
                    return e
                },
                draw(t, e, s, i) {
                    s && t.html("");
                    let a = {
                        top: 20,
                        right: 5,
                        bottom: 50,
                        left: 5
                    };
                    i || (i = 150),
                    i -= a.top + a.bottom;
                    let n = t.node().getBoundingClientRect().width - a.left - a.right
                      , r = 5
                      , o = 5
                      , l = !0
                      , c = !1
                      , u = !0
                      , d = Object($e["c"])((function(t) {
                        return t.date
                    }
                    )).left;
                    var h = Object(ts["e"])().range([0, n])
                      , p = Object(ts["b"])().range([i, 0])
                      , m = Object(ts["b"])().range([i, 0])
                      , v = oe().x((function(t) {
                        return h(t.date)
                    }
                    )).y((function(t) {
                        return p(t.line0)
                    }
                    )).curve(Re)
                      , g = oe().x((function(t) {
                        return h(t.date)
                    }
                    )).y((function(t) {
                        return m(t.line1)
                    }
                    )).curve(Re)
                      , f = t.append("svg").attr("width", n + a.left + a.right).attr("height", i + a.top + a.bottom)
                      , b = f.append("g").attr("transform", "translate(" + a.left + "," + a.top + ")");
                    h.domain(Object($e["d"])(e, (function(t) {
                        return t.date
                    }
                    ))),
                    p.domain([Object($e["f"])(e, (function(t) {
                        return Math.max(t.line0)
                    }
                    )), Object($e["e"])(e, (function(t) {
                        return Math.max(t.line0)
                    }
                    ))]),
                    m.domain([Object($e["f"])(e, (function(t) {
                        return Math.max(t.line1)
                    }
                    )), Object($e["e"])(e, (function(t) {
                        return Math.max(t.line1)
                    }
                    ))]),
                    b.append("path").data([e]).attr("class", "line line1").attr("d", v),
                    c && b.append("path").data([e]).attr("class", "line line2").attr("d", g),
                    b.append("g").attr("class", "axis-bottom").attr("transform", "translate(0," + (i + 10) + ")").call(Ze(h).ticks(o).tickSize(0).tickSizeOuter(0).tickPadding(5).tickFormat(P("%b %y"))),
                    l && (b.append("g").attr("class", "axis-left").call(Je(p).tickSize(-n).ticks(r).tickFormat("")),
                    c && b.append("g").attr("class", "axis-right").attr("transform", "translate( " + n + ", 0 )").call(Xe(m).ticks(r)));
                    var C = b.append("g").attr("class", "focus");
                    if (C.append("line").attr("class", "x-hover-line hover-line").attr("y1", 0).attr("y2", i),
                    C.append("circle").attr("r", 1),
                    C.append("text").attr("class", "nifty tooltip").attr("x", 0).attr("dy", "0.3em"),
                    C.append("text").attr("class", "sensex tooltip").attr("x", 0).attr("dy", "1.5em"),
                    f.append("rect").attr("transform", "translate(" + a.left + "," + a.top + ")").attr("class", "overlay").attr("width", n).attr("height", i).on("mouseover", (function() {
                        C.style("opacity", 1)
                    }
                    )).on("mouseout", (function() {
                        C.style("opacity", 0)
                    }
                    )).on("mousemove", w),
                    u) {
                        var y = b.append("g").attr("class", "legends");
                        y.append("rect").attr("class", "legend-bar legend-1-bar").attr("width", 9).attr("height", 9).attr("x", 10).attr("y", 5),
                        y.append("text").attr("class", "legend-label legend-1-label").attr("x", 22).attr("y", 12).html("NIFTY 50"),
                        c && (y.append("rect").attr("class", "legend-bar legend-2-bar").attr("width", 9).attr("height", 9).attr("x", 10).attr("y", 20),
                        y.append("text").attr("class", "legend-label legend-2-label").attr("x", 22).attr("y", 28).html("S&P 500"))
                    }
                    function w() {
                        let t = h.invert(_(this)[0])
                          , s = d(e, t, 1)
                          , a = e[s - 1]
                          , r = e[s]
                          , o = t - a.date > r.date - t ? r : a
                          , l = h(o.date) < n - 110 ? -2 : -(h(o.date) - (n - 110)) - 2;
                        C.attr("transform", "translate(" + h(o.date) + ",0)"),
                        C.select("circle").attr("transform", "translate(0," + p(o.line0) + ")"),
                        C.select("text.nifty").html((function() {
                            return o.line0 + " &nbsp;&nbsp; " + ss(o.date)
                        }
                        )).attr("transform", "translate(" + l + " -10)"),
                        C.select(".x-hover-line").attr("y2", i)
                    }
                }
            }
        }
          , ns = as
          , rs = (s("d7b6"),
        s("0c7c"))
          , os = Object(rs["a"])(ns, u, d, !1, null, null, null)
          , ls = os.exports
          , cs = s("1b06")
          , us = s("2799")
          , ds = s("850b")
          , hs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.show ? s("div", {
                class: t.bannerClass,
                style: t.bannerStyle,
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.goToLink.apply(null, arguments)
                    }
                }
            }, [s("div", {
                staticClass: "banner-actions",
                style: t.actionPositionStyle
            }, [t.actionLabel && t.actionUrl ? s("a", {
                staticClass: "button button-blue button-small",
                style: t.actionButtonStyle,
                attrs: {
                    target: "_blank",
                    href: t.actionUrl
                }
            }, [t._v(t._s(this.actionLabel))]) : t._e()])]) : t._e()
        }
          , ps = []
          , ms = s("bc3a")
          , vs = s.n(ms)
          , _s = s("5665")
          , gs = {
            data() {
                return {
                    show: !1,
                    actionPosition: {
                        bottom: 15,
                        top: 0,
                        left: 18,
                        right: 0
                    },
                    actionButtonBgColor: "",
                    actionButtonTextColor: "",
                    actionButtonAlignment: "",
                    actionUrl: "",
                    actionLabel: "",
                    backgroundImage: "",
                    showButton: !1,
                    imageClick: !1,
                    borderColor: "",
                    borderWidth: "",
                    borderStyle: ""
                }
            },
            created() {
                vs.a.get(Object(_s["a"])("banner")).then(t=>{
                    let e = t.data && t.data.data;
                    e && (e.image && (this.show = !0),
                    this.theme && "default" !== this.theme && e[this.theme] && e[this.theme].image ? this.backgroundImage = e[this.theme].image : this.backgroundImage = e.image,
                    this.theme && "default" !== this.theme && e[this.theme] && e[this.theme].action_button_background_color ? this.actionButtonBgColor = e[this.theme].action_button_background_color : this.actionButtonBgColor = e.action_button_background_color,
                    this.theme && "default" !== this.theme && e[this.theme] && e[this.theme].action_button_text_color ? this.actionButtonTextColor = e[this.theme].action_button_text_color : this.actionButtonTextColor = e.action_button_text_color,
                    this.theme && "default" !== this.theme && e[this.theme] && e[this.theme].border_color ? this.borderColor = e[this.theme].border_color : this.borderColor = e.border_color,
                    this.actionUrl = e.action_url,
                    this.actionLabel = e.action_label,
                    this.imageClick = e.image_click,
                    this.actionButtonBgColor = e.action_button_background_color,
                    this.actionButtonTextColor = e.action_button_text_color,
                    this.actionButtonAlignment = e.action_button_alignment || "left",
                    this.borderWidth = e.border_width || 1,
                    this.borderColor = e.border_color || "#f4f4f4",
                    this.borderStyle = e.border_style || "solid",
                    void 0 !== e.action_position_bottom && (this.actionPosition.bottom = e.action_position_bottom),
                    void 0 !== e.action_position_bottom && (this.actionPosition.top = e.action_position_top),
                    void 0 !== e.action_position_left && (this.actionPosition.left = e.action_position_left),
                    void 0 !== e.action_position_right && (this.actionPosition.right = e.action_position_right))
                }
                )
            },
            methods: {
                goToLink() {
                    this.isImageClickable && window.open(this.actionUrl, "_blank")
                }
            },
            computed: {
                ...Object(n["d"])(["theme"]),
                bannerClass() {
                    return {
                        "promo-banner": !0,
                        click: this.isImageClickable
                    }
                },
                bannerStyle() {
                    return {
                        "background-image": `url('${this.backgroundImage}')`,
                        "border-color": this.borderColor,
                        "border-style": this.borderStyle,
                        "border-width": this.borderWidth + "px"
                    }
                },
                isImageClickable() {
                    return this.imageClick && this.actionUrl
                },
                actionPositionStyle() {
                    return {
                        bottom: 0 === this.actionPosition.bottom ? "auto" : this.actionPosition.bottom + "px",
                        top: 0 === this.actionPosition.top || void 0 !== this.actionButtonAlignment || "" !== this.actionButtonAlignment ? "auto" : this.actionPosition.top + "px",
                        left: this.actionPosition.left + "px",
                        right: this.actionPosition.right + "px",
                        position: "absolute",
                        "text-align": this.actionButtonAlignment
                    }
                },
                actionButtonStyle() {
                    return {
                        "background-color": this.actionButtonBgColor,
                        "border-color": this.actionButtonBgColor,
                        color: this.actionButtonTextColor
                    }
                }
            }
        }
          , fs = gs
          , bs = (s("f4e2"),
        Object(rs["a"])(fs, hs, ps, !1, null, null, null))
          , Cs = bs.exports
          , ys = s("c184")
          , ws = s("d1de")
          , Ts = s("5052")
          , ks = s("d4ff")
          , xs = s("7bdc")
          , Es = {
            inject: ["instrumentManager"],
            mixins: [l["a"]],
            components: {
                "holdings-treemap": us["a"],
                "positions-barchart": ds["a"],
                "market-overview-chart": ls,
                banner: Cs,
                omnisearch: ys["a"]
            },
            beforeCreate() {
                this.consoleURL = "https://console.zerodha.com"
            },
            created() {
                this.fetchAll(),
                this.fetchPinnedChartData(),
                this.$events.on(c["d"].EVENTS.refetch + cs["b"], this.fetchAll)
            },
            beforeDestroy() {
                this.$events.off(c["d"].EVENTS.refetch + cs["b"], this.fetchAll)
            },
            computed: {
                ...Object(n["d"])(ws["b"], ["userName", "profileFetchStatus"]),
                ...Object(n["d"])(Ts["b"], ["margins", "marginsFetchStatus", "marginsError"]),
                ...Object(n["d"])(ks["b"], ["holdings", "holdingsFetchStatus", "holdingsError"]),
                ...Object(n["d"])(xs["b"], ["positions", "positionsFetchStatus", "positionsError"]),
                ...Object(n["d"])(cs["b"], ["pinnedChartData", "pinnedChartDataFetchStatus", "pinnedChartDataError"]),
                holdingsConstraints() {
                    let t = this.holdingsFetchStatus === c["d"].API_STATUSES.fetching
                      , e = this.holdingsFetchStatus === c["d"].API_STATUSES.error
                      , s = this.holdings && this.holdings.length > 0
                      , i = this.holdings && 0 === this.holdings.length
                      , a = e && !this.holdings
                      , n = e && this.holdings
                      , r = !i && !a;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showHeader: r,
                        showErrorIcon: n,
                        showEmptyState: i,
                        showErrorState: a
                    }
                },
                positionsConstraints() {
                    let t = this.positionsFetchStatus === c["d"].API_STATUSES.fetching
                      , e = this.positionsFetchStatus === c["d"].API_STATUSES.error
                      , s = this.positions && this.positions.net && this.positions.net.length > 0
                      , i = this.positions && this.positions.net && 0 === this.positions.net.length
                      , a = e && (!this.positions || !this.positions.net)
                      , n = e && this.positions && this.positions.net
                      , r = !i && !a;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showHeader: r,
                        showErrorIcon: n,
                        showEmptyState: i,
                        showErrorState: a
                    }
                },
                marginsConstraints() {
                    let t = this.marginsFetchStatus === c["d"].API_STATUSES.fetching
                      , e = this.marginsFetchStatus === c["d"].API_STATUSES.error
                      , s = this.margins && 0 !== Object.keys(this.margins).length
                      , i = e && !s
                      , a = e && s
                      , n = t && !s;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showHeader: n,
                        showErrorIcon: a,
                        showErrorState: i
                    }
                },
                pinnedChartConstraints() {
                    let t = this.pinnedChartData && this.pinnedChartData.length > 0
                      , e = this.pinnedChartDataFetchStatus === c["d"].API_STATUSES.error
                      , s = this.pinnedChartDataFetchStatus === c["d"].API_STATUSES.fetching;
                    return {
                        isData: t,
                        isError: e,
                        isFetching: s
                    }
                },
                getPinnedChartData() {
                    if (this.pinnedChartConstraints.isData)
                        return this.pinnedChartData
                },
                emptyStateImage() {
                    return {
                        holdings: this.getStatic(this.appendThemeName("images/illustrations/holdings.svg")),
                        positions: this.getStatic(this.appendThemeName("images/illustrations/positions.svg")),
                        margins: this.getStatic(this.appendThemeName("images/illustrations/positions.svg"))
                    }
                },
                accountOpeningLink() {
                    return o()("https://zerodha.com/open-account?c={partnerID}&utm_source=kite&utm_medium=web&utm_campaign=account", {
                        partnerID: "RAINMT"
                    })
                },
                shortName() {
                    return this.userName ? this.userName.userShortName : ""
                },
                netHoldings() {
                    if (!this.holdings)
                        return;
                    let t = {
                        total: 0,
                        current: 0,
                        pnl: 0
                    };
                    for (let e of this.holdings) {
                        let s = e.last_price || 0
                          , i = e.t1_quantity || 0
                          , a = e.quantity + i;
                        s > 0 && (e.average_price > 0 || !e.discrepancy) && (t.pnl += (s - e.average_price) * a,
                        t.total += a * e.average_price,
                        t.current += a * s)
                    }
                    return t
                }
            },
            watch: {
                profileFetchStatus(t) {
                    t === c["d"].API_STATUSES.error && this.clearProfile()
                }
            },
            methods: {
                ...Object(n["e"])(ws["b"], ["clearProfile"]),
                ...Object(n["c"])(Ts["b"], ["fetchMargins"]),
                ...Object(n["c"])(ws["b"], ["fetchProfile"]),
                ...Object(n["c"])(ks["b"], ["fetchHoldings"]),
                ...Object(n["c"])(xs["b"], ["fetchPositions"]),
                ...Object(n["c"])(cs["b"], ["fetchPinnedChartData"]),
                fetchAll() {
                    this.profileFetchStatus !== c["d"].API_STATUSES.success && this.profileFetchStatus !== c["d"].API_STATUSES.fetching && this.fetchProfile(),
                    this.fetchMargins(),
                    this.fetchHoldings(),
                    this.fetchPositions()
                }
            }
        }
          , Ss = Es
          , Ps = Object(rs["a"])(Ss, i, a, !1, null, null, null);
        e["default"] = Ps.exports
    },
    "825c": function(t, e, s) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "twofa-confirm-modal",
                on: {
                    close: t.close
                }
            }, [s("div", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t.title ? s("h2", [t._v(t._s(t.title))]) : s("h2", [t._v("Confirm")])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("su-form", {
                ref: "twoFAform",
                attrs: {
                    method: "post"
                },
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.confirm.apply(null, arguments)
                    }
                }
            }, [s("su-input", {
                staticClass: "twofa-value",
                attrs: {
                    type: "password",
                    autofocus: "",
                    minlength: 6,
                    maxlength: 6,
                    autocomplete: "off",
                    label: "PIN",
                    placeholder: "PIN",
                    rules: t.twoFArules,
                    icon: "lock"
                },
                model: {
                    value: t.twofaValue,
                    callback: function(e) {
                        t.twofaValue = e
                    },
                    expression: "twofaValue"
                }
            }), t._v(" "), t.apiError ? s("p", {
                staticClass: "text-xsmall text-red"
            }, [t._v("\n\t\t\t\t" + t._s(t.apiError) + "\n\t\t\t")]) : t._e()], 1), t._v(" "), s("p", {
                domProps: {
                    innerHTML: t._s(t.message)
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-orange",
                nativeOn: {
                    click: function(e) {
                        return t.confirm.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Confirm")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Cancel")])])], 1)])
        }
          , a = []
          , n = s("598f")
          , r = s("025e")
          , o = {
            name: "twofa-confirm",
            props: {
                message: null,
                title: null
            },
            data() {
                let t = (t,e)=>{
                    if (!e.match(/[0-9]{6}/))
                        return new Error("The value must be a 6 digit number.")
                }
                ;
                return {
                    twofaValue: null,
                    twoFArules: [{
                        validator: t,
                        required: !0,
                        message: "This field is required"
                    }],
                    apiError: null
                }
            },
            watch: {
                twofaValue() {
                    this.apiError = null
                }
            },
            methods: {
                confirm() {
                    this.$refs["twoFAform"].validate() && n["a"].twofaValidate({
                        twofa_value: this.twofaValue
                    }).then(t=>{
                        t.data && t.data.data ? this.$emit("confirm", !0) : this.apiError = "Something went wrong. Please try again."
                    }
                    ).catch(t=>{
                        let e = Object(r["j"])(t);
                        this.apiError = e.message
                    }
                    )
                },
                close() {
                    this.$emit("close", !0)
                }
            }
        }
          , l = o
          , c = s("0c7c")
          , u = Object(c["a"])(l, i, a, !1, null, null, null);
        e["a"] = u.exports
    },
    "8e6f": function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "holdings"
            }, [t.performanceMode ? s("div", {
                staticClass: "text-box yellow"
            }, [t._v("\n\t\tAs there is a large number of holdings, the P&L will not be updated live for performance reasons.\n\t")]) : t._e(), t._v(" "), s("section", {
                staticClass: "holdings-table table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("span", [t._v("Holdings")]), t._v(" "), t.currentHoldings && t.currentHoldings.length > 0 ? s("span", [t._v("(" + t._s(t.currentHoldings.length) + ")")]) : t._e()]), t._v(" "), s("span", {
                staticClass: "holdings-selector-wrap"
            }, [s("su-select", {
                staticClass: "holdings-selector",
                attrs: {
                    value: t.holdingsTypeModel,
                    name: "holdings-selector"
                },
                on: {
                    input: t.onHoldingsTypeUpdate
                },
                model: {
                    value: t.holdingsTypeModel,
                    callback: function(e) {
                        t.holdingsTypeModel = e
                    },
                    expression: "holdingsTypeModel"
                }
            }, t._l(t.holdingsTypes, (function(e, i) {
                return s("option", {
                    key: i,
                    attrs: {
                        label: e.label
                    },
                    domProps: {
                        value: e.value
                    }
                }, [t._v(t._s(e.label))])
            }
            )), 0)], 1), t._v(" "), t.isHoldingsFetchError && t.currentHoldings ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.currentHoldingsError && t.currentHoldingsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.isHoldingsFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1), t._v(" "), t.isMF ? s("div", {
                staticClass: "coin-banner"
            }, [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://coin.zerodha.com/login"
                }
            }, [s("img", {
                attrs: {
                    src: t.getStatic(t.appendThemeName("images/illustrations/coin-holdings.png"))
                }
            })]), t._v(" "), t._m(0)]) : [t.currentHoldings && 0 === t.currentHoldings.length && !t.isHoldingsFetchError ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/holdings.svg")),
                    "omnisearch-action-title": "Get started",
                    "show-omnisearch": "smallcase" !== t.holdingsType
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, ["all" === t.holdingsType || "kite" === t.holdingsType ? s("p", [t._v("\n\t\t\t\t\t\tYou don't have any stocks in your DEMAT yet. Get started with absolutely free equity investments.\n\t\t\t\t\t")]) : t._e(), t._v(" "), "smallcase" === t.holdingsType ? s("p", [t._v("\n\t\t\t\t\t\tYou don't have any smallcases.\n\t\t\t\t\t")]) : t._e()]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, ["smallcase" !== t.holdingsType ? [s("a", {
                staticClass: "inline-image-text",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/holdings?src=kiteweb"
                }
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v("Analytics\n\t\t\t\t\t\t")])] : [s("a", {
                staticClass: "button button-blue",
                attrs: {
                    target: "_blank",
                    href: "https://smallcase.zerodha.com/"
                }
            }, [t._v("Visit smallcase")])]], 2)]) : t._e(), t._v(" "), !t.isHoldingsFetchError || t.currentHoldings && t.currentHoldings.length > 0 ? t._e() : s("error-state", {
                attrs: {
                    title: t.currentHoldingsErrorTitle,
                    error: t.currentHoldingsError
                }
            }), t._v(" "), t.currentHoldings && t.currentHoldings.length > 0 && t.isMobile ? s("div", {
                staticClass: "cards"
            }, [s("div", {
                staticClass: "toolbar"
            }, [t.poaConsent ? s("a", {
                staticClass: "item",
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.showHoldingsAuth.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-lock"
            }), t._v("Authorisation")]) : t._e(), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/holdings/family?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon icon-users"
            }), t._v("Family\n\t\t\t\t\t")]), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/holdings?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "14px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("Analytics")])])]), t._v(" "), t._l(t.currentHoldings, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "card",
                    on: {
                        click: function(s) {
                            return t.showContextMenu(e)
                        }
                    }
                }, [e.showContextMenu && t.currentCtxMenuUID === e.uid ? s("mobile-context-menu", {
                    on: {
                        close: function(s) {
                            return t.hideContextMenu(e)
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.exitHolding(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-minus"
                }), t._v(" Exit")])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.addHolding(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                }), t._v(" Add")])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.gotoConsoleBreakdown(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-console"
                }), t._v("View breakdown")])]), t._v(" "), s("common-context-menu", {
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        exchange: e.exchange,
                        data: t.addonData(e)
                    }
                }), t._v(" "), s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.tradingsymbol,
                            exchange: e.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, [s("span", {
                    staticClass: "dim"
                }, [t._v("Qty.")]), t._v(" " + t._s(e.quantity) + "\n\t\t\t\t\t\t\t"), e.t1_quantity ? s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("T1: " + t._s(e.t1_quantity))]) : t._e(), t._v(" "), e.collateral_quantity ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "dim text-xxsmall",
                    attrs: {
                        title: "Pledged"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\tP: " + t._s(e.collateral_quantity) + "\n\t\t\t\t\t\t\t")]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "flex6 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("LTP")]), t._v(" "), s("span", [t._v(" " + t._s(e.formatted.lastPrice))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, [s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.exchange))])]), t._v(" "), s("div", {
                    staticClass: "flex3"
                }, [e.average_price ? s("span", [s("span", {
                    staticClass: "dim"
                }, [t._v("₹")]), t._v(t._s(e.formatted.averagePrice))]) : s("span", [t._v("–")])]), t._v(" "), s("div", {
                    staticClass: "flex4 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall",
                    class: e.style.netChangePercent
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(0 !== e.netChangePercent ? e.formatted.netChangePercent : "") + "\n\t\t\t\t\t\t\t")]), t._v(" "), s("span", [t._v(t._s(e.formatted.pnl))])])])], 1)
            }
            ))], 2) : t._e(), t._v(" "), t.currentHoldings && t.currentHoldings.length > 0 && !t.isMobile ? s("div", [s("su-table", {
                staticClass: "fold-header sticky",
                attrs: {
                    data: t.currentHoldings,
                    uid: "uid",
                    headers: t.tableHeaders,
                    "search-place-holder": "Filter eg: INFY",
                    limit: 300,
                    "show-all-label": "Show all holdings",
                    sort: "",
                    search: "",
                    "download-csv": "holdings.csv",
                    "row-events": ""
                },
                on: {
                    rowEnter: t.handleRowEnter,
                    rowLeave: t.handleRowLeave
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "instrument right-border"
                        }, [s("span", [t._v(t._s(e.row.tradingsymbol))]), t._v(" "), e.row.isEvent ? s("span", {
                            staticClass: "events-label text-blue"
                        }, [t._v("EVENT")]) : t._e(), t._v(" "), e.row.short_quantity > 0 ? s("a", {
                            staticClass: "events-label text-amber",
                            attrs: {
                                href: "https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/what-is-short-delivery-and-what-are-its-consequences",
                                target: "_blank"
                            }
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: e.row.short_quantity + " qty cannot be sold as they are short delivered"
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\tSHORT: " + t._s(e.row.short_quantity) + "\n\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [e.row.showContextMenu && e.row.uid === t.currentCtxMenuUID ? s("context-menu", {
                            staticClass: "table holdings-context-menu"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.exitHolding(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-minus"
                        }), t._v(" Exit")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.addHolding(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-plus"
                        }), t._v(" Add")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.gotoConsoleBreakdown(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-console"
                        }), t._v("View breakdown")])]), t._v(" "), s("common-context-menu", {
                            attrs: {
                                tradingsymbol: e.row.tradingsymbol,
                                exchange: e.row.exchange,
                                data: t.addonData(e.row),
                                include: ["allDefaults", "sendGift"]
                            }
                        }), t._v(" "), s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.tradingsymbol,
                                    exchange: e.row.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1)], 1), t._v(" "), s("td", {
                            staticClass: "right qty"
                        }, [e.row.t1_quantity ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "q",
                            attrs: {
                                title: "T1"
                            }
                        }, [t._v("T1: " + t._s(e.row.t1_quantity))]) : t._e(), t._v(" "), e.row.collateral_quantity ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "q",
                            attrs: {
                                title: "Pledged"
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\tP: " + t._s(e.row.collateral_quantity) + " \n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), s("span", [t._v(t._s(e.row.quantity))])]), t._v(" "), s("td", {
                            staticClass: "right"
                        }, [e.row.average_price ? s("span", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.formatted.averagePrice) + "\n\t\t\t\t\t\t\t")]) : s("span", [t._v("N/A")]), t._v(" "), e.row.discrepancy ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "There may be a discrepancy with this stock. Click here to fix it."
                            }
                        }, [s("a", {
                            staticClass: "icon icon-alert-triangle text-red",
                            attrs: {
                                href: t.consoleURL + "/portfolio/holdings/discrepancy?src=kiteweb&ISIN=" + e.row.isin,
                                target: "_blank"
                            }
                        })]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "right-border right"
                        }, [e.row.lastPrice ? s("div", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.formatted.lastPrice) + "\n\t\t\t\t\t\t\t")]) : s("div", [t._v("N/A")])]), t._v(" "), s("td", {
                            staticClass: "right"
                        }, [e.row.currentValue ? s("div", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.formatted.currentValue) + "\n\t\t\t\t\t\t\t")]) : s("div", [t._v("N/A")])]), t._v(" "), s("td", {
                            class: e.row.style.pnl
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.pnl) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: e.row.style.netChangePercent
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: e.row.formatted.netChange + " (" + e.row.formatted.netChangePercent + ")"
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.formatted.netChangePercent) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            class: e.row.style.dayChangePercent
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: e.row.formatted.dayPnl + " (" + e.row.formatted.dayChangePercent + ")"
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.formatted.dayChangePercent) + "\n\t\t\t\t\t\t\t")])])]
                    }
                }], null, !1, 3657606815)
            }, [s("span", {
                staticClass: "toolbar-before",
                attrs: {
                    slot: "toolbar-before"
                },
                slot: "toolbar-before"
            }, [t.poaConsent ? s("a", {
                staticClass: "item",
                attrs: {
                    href: ""
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.showHoldingsAuth.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-lock"
            }), t._v("Authorisation")]) : t._e(), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/holdings/family?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon icon-users"
            }), t._v("Family\n\t\t\t\t\t\t")]), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/holdings?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "9px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("Analytics")])])])])], 1) : t._e()]], 2), t._v(" "), t.isMF ? t._e() : s("div", [t.currentHoldings && t.currentHoldings.length > 0 ? s("div", {
                staticClass: "stats row"
            }, [s("div", {
                staticClass: "three columns"
            }, [s("div", {
                staticClass: "label"
            }, [t._v("Total investment")]), t._v(" "), s("h1", {
                staticClass: "value",
                domProps: {
                    innerHTML: t._s(t.total.formatted.investment)
                }
            })]), t._v(" "), s("div", {
                staticClass: "three columns"
            }, [s("div", {
                staticClass: "label"
            }, [t._v("Current value")]), t._v(" "), s("h1", {
                staticClass: "value",
                domProps: {
                    innerHTML: t._s(t.total.formatted.value)
                }
            }), t._v(" "), t.isAnyDiscrepant ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "large",
                    expression: "'large'"
                }],
                attrs: {
                    title: "You have stocks with price discrepancies that are not included in the P&L. You can fix them on Console."
                }
            }, [s("a", {
                staticClass: "icon icon-alert-triangle text-red tex-xxsmall",
                attrs: {
                    href: t.consoleURL + "/portfolio/holdings/discrepancy?src=kiteweb",
                    target: "_blank"
                }
            })]) : t._e()]), t._v(" "), s("div", {
                staticClass: "three columns"
            }, [s("div", {
                staticClass: "label"
            }, [t._v("Day's P&L")]), t._v(" "), s("h1", {
                staticClass: "value",
                class: {
                    "text-green": t.total.dayPnl > 0,
                    "text-red": t.total.dayPnl < 0
                }
            }, [s("span", {
                domProps: {
                    innerHTML: t._s(t.total.formatted.dayPnl)
                }
            }), s("br"), t._v(" "), s("span", {
                staticClass: "text-small"
            }, [t._v("("), t.total.dayPnlPercent > 0 ? [t._v("+")] : t._e(), t._v(t._s(t._f("decimalPad")(t.total.dayPnlPercent, 2)) + "%)")], 2)])]), t._v(" "), s("div", {
                staticClass: "three columns"
            }, [s("div", {
                staticClass: "label"
            }, [t._v("Total P&L")]), t._v(" "), s("h1", {
                staticClass: "value",
                class: {
                    "text-green": t.total.pnl > 0,
                    "text-red": t.total.pnl < 0
                }
            }, [s("span", {
                domProps: {
                    innerHTML: t._s(t.total.formatted.pnl)
                }
            }), s("br"), t._v(" "), 0 != t.total.investment ? s("span", {
                staticClass: "text-small"
            }, [t._v("("), t.total.pnlPercent > 0 ? [t._v("+")] : t._e(), t._v(t._s(t._f("decimalPad")(t.total.pnlPercent, 2)) + "%)")], 2) : t._e()])])]) : t._e(), t._v(" "), t.currentHoldings && t.currentHoldings.length > 0 ? s("div", {
                staticClass: "holdings-treemap"
            }, [s("holdings-treemap", {
                key: "holdings-page",
                attrs: {
                    "raw-data": t.currentHoldings,
                    "hide-stats": !0,
                    "max-items": 100,
                    name: "holdings"
                }
            })], 1) : t._e()]), t._v(" "), t.isHoldingsAuthShown ? s("holdings-auth-confirm", {
                attrs: {
                    overnight: ""
                },
                on: {
                    close: t.hideHoldingsAuth
                }
            }) : t._e()], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", [s("a", {
                staticClass: "button button-blue",
                attrs: {
                    target: "_blank",
                    href: "https://coin.zerodha.com/login"
                }
            }, [t._v("Open Coin")])])
        }
        ]
          , n = s("e165")
          , r = s.n(n)
          , o = s("2f62")
          , l = s("9c9e")
          , c = s("5fb0")
          , u = s("2799")
          , d = s("f1f7")
          , h = s("d9d2")
          , p = s("d4ff")
          , m = s("39e3")
          , v = s("d1de")
          , _ = s("40f2")
          , g = s("1737")
          , f = {
            inject: ["ticker", "instrumentManager"],
            mixins: [l["a"], _["a"]],
            components: {
                "holdings-treemap": u["a"],
                "holdings-auth-confirm": g["a"]
            },
            props: {},
            data() {
                return {
                    currentCtxMenuUID: null,
                    total: {
                        pnl: 0,
                        value: 0,
                        investment: 0
                    },
                    holdingsTreemapData: null,
                    holdingsTypeModel: "all",
                    currentHoldings: null,
                    isHoldingsAuthShown: !1,
                    performanceMode: !1
                }
            },
            created() {
                this.consoleURL = "https://console.zerodha.com",
                this.consoleBreakdownURL = this.consoleURL + "/portfolio/holdings?segment=EQ&isin={isin}&tradingsymbol={tradingsymbol}&src=kiteweb",
                this.isComponentActive = !0,
                this.holdingsTypes = [{
                    value: "all",
                    label: "All stocks"
                }, {
                    value: "kite",
                    label: "Kite only"
                }, {
                    value: "smallcase",
                    label: "Smallcase"
                }, {
                    value: "mutualfunds",
                    label: "Mutual funds"
                }],
                this.subscribedTokens = [],
                this.updateTimer = null,
                this.maxHoldingsCount = 500,
                this.tableColumnClass = {
                    tradingsymbol: ["instrument", "right-border"],
                    quantity: ["quantity", "right"],
                    averagePrice: ["average-price", "right"],
                    lastPrice: ["last-price", "right", "right-border"],
                    currentValue: ["current-value", "right"],
                    pnl: ["pnl", "right"],
                    netChangePercent: ["net-change-percent", "right"],
                    dayChangePercent: ["day-change-percent", "right"]
                },
                this.tableHeaders = [{
                    label: "Instrument",
                    field: "tradingsymbol",
                    sort: !0,
                    search: !0,
                    class: this.tableColumnClass.tradingsymbol
                }, {
                    label: "Qty.",
                    field: "totalQuantity",
                    sort: !0,
                    class: this.tableColumnClass.quantity
                }, {
                    label: "Avg. cost",
                    field: "averagePrice",
                    sort: !0,
                    class: this.tableColumnClass.averagePrice
                }, {
                    label: "LTP",
                    field: "lastPrice",
                    sort: !0,
                    class: this.tableColumnClass.lastPrice
                }, {
                    label: "Cur. val",
                    field: "currentValue",
                    sort: !0,
                    class: this.tableColumnClass.currentValue
                }, {
                    label: "P&L",
                    field: "pnl",
                    sort: !0,
                    class: this.tableColumnClass.pnl
                }, {
                    label: "Net chg.",
                    field: "netChangePercent",
                    sort: !0,
                    class: this.tableColumnClass.netChangePercent
                }, {
                    label: "Day chg.",
                    field: "dayChangePercent",
                    sort: !0,
                    class: this.tableColumnClass.dayChangePercent
                }],
                this.holdingsTypeModel = this.holdingsType,
                this.fetchCurrentHoldings(),
                this.$events.on("refetchData:" + p["b"], this.fetchCurrentHoldings)
            },
            beforeDestroy() {
                this.postProcess(),
                this.$events.off("refetchData:" + p["b"], this.fetchCurrentHoldings)
            },
            activated() {
                this.isComponentActive = !0
            },
            deactivated() {
                this.isComponentActive = !1,
                this.postProcess()
            },
            computed: {
                ...Object(o["d"])(["isMobile"]),
                ...Object(o["d"])(m["b"], ["ticks"]),
                ...Object(o["d"])(p["b"], ["presentHoldings", "holdingsType"]),
                ...Object(o["d"])(v["b"], ["profile"]),
                isHoldingsFetching() {
                    return this.presentHoldings.status === c["d"].API_STATUSES.fetching
                },
                isHoldingsFetchError() {
                    return this.presentHoldings.status === c["d"].API_STATUSES.error
                },
                currentHoldingsError() {
                    return this.presentHoldings.error
                },
                currentHoldingsErrorTitle() {
                    if ("all" === this.presentHoldings.type)
                        return "Holdings couldn't be loaded.";
                    for (let t of this.holdingsTypes)
                        if (this.presentHoldings.type === t.value)
                            return t.label + " holdings couldn't be loaded."
                },
                poaConsent() {
                    return this.profile && this.profile.meta && "consent" === this.profile.meta.poa
                },
                isMF() {
                    return "mutualfunds" === this.holdingsType
                },
                isAnyDiscrepant() {
                    if (this.currentHoldings)
                        for (let t of this.currentHoldings)
                            if (t.discrepancy)
                                return !0;
                    return !1
                }
            },
            watch: {
                presentHoldings(t) {
                    this.isComponentActive && t && t.status === c["d"].API_STATUSES.success && t.data && (this.updateHoldings(t.data, t.type),
                    this.doHoldingsTasks())
                }
            },
            methods: {
                ...Object(o["c"])(p["b"], ["fetchHoldings", "fetchAppHoldings"]),
                ...Object(o["e"])(p["b"], ["setHoldingsType"]),
                postProcess() {
                    this.clearUpdateTimer(),
                    this.unsubscribeCurrentTokens(),
                    this.currentCtxMenuUID = null
                },
                onHoldingsTypeUpdate(t) {
                    this.setHoldingsType(t),
                    this.fetchCurrentHoldings()
                },
                fetchCurrentHoldings() {
                    if (!this.isMF && !this.isHoldingsFetching)
                        return "all" === this.holdingsType ? this.fetchHoldings() : this.fetchAppHoldings(this.holdingsType)
                },
                updateHoldings(t, e) {
                    if (!t)
                        return [];
                    let s = []
                      , i = 0
                      , a = 0
                      , n = 0
                      , r = 0
                      , o = 0
                      , l = 0
                      , c = 0
                      , u = 0;
                    for (let h of t) {
                        let t = h.tradingsymbol + h.exchange + u;
                        u += 1;
                        let l = Object.assign({}, h)
                          , c = this.ticks[h.instrument_token]
                          , p = c && c.lastPrice || h.last_price || 0
                          , m = h.t1_quantity || 0
                          , v = h.quantity + m;
                        h.type = e,
                        l.lastPrice = p,
                        l.averagePrice = Object(d["c"])(h.average_price, 2),
                        l.totalQuantity = v;
                        let _ = 0
                          , g = 0
                          , f = 0
                          , b = 0
                          , C = 0
                          , y = 0
                          , w = 0
                          , T = !1
                          , k = 0;
                        C = p * v;
                        let x = !h.discrepancy && p > 0 && (h.average_price > 0 || !h.discrepancy);
                        x && (_ = (p - h.average_price) * v,
                        b = p - h.average_price,
                        0 !== h.average_price ? w = (p - h.average_price) / h.average_price * 100 : T = !0),
                        k = c && c.closePrice ? c.closePrice : h.close_price,
                        c && c.absoluteChange && c.change ? (f = c.absoluteChange,
                        g = f * v,
                        y = c.change) : 0 !== p && k && 0 !== k && (f = p - k,
                        g = f * v,
                        y = f / k * 100),
                        l.uid = t,
                        l.pnl = Object(d["c"])(_, 2),
                        l.dayChange = Object(d["c"])(f, 2),
                        l.dayPnl = Object(d["c"])(g, 2),
                        l.currentValue = Object(d["c"])(C, 2),
                        l.netChange = Object(d["c"])(b, 2),
                        l.dayChangePercent = Object(d["c"])(y, 2),
                        l.netChangePercent = Object(d["c"])(w, 2);
                        let E = this.instrumentManager.get(h.tradingsymbol, null, h.exchange);
                        E && (l.showContextMenu = !0,
                        l.stockWidget = E.stockWidget,
                        l.isEvent = E.isEvent),
                        l.formatted = {
                            averagePrice: Object(d["b"])(h.average_price, 2, !0),
                            lastPrice: Object(d["b"])(p, 2, !0),
                            currentValue: Object(d["b"])(C, 2, !0),
                            pnl: x ? Object(d["b"])(_, 2, !0) : "N/A",
                            dayChange: Object(d["b"])(f, 2, !0),
                            netChange: T || !x ? "N/A" : Object(d["b"])(b, 2, !0),
                            dayPnl: p ? Object(d["b"])(g, 2, !0) : "N/A",
                            dayChangePercent: p ? (y > 0 ? "+" : "") + Object(d["b"])(y, 2, !0) + "%" : "N/A",
                            netChangePercent: T || !x ? "N/A" : (w > 0 ? "+" : "") + Object(d["b"])(w, 2, !0) + "%"
                        },
                        l.style = {
                            pnl: this.getTextStyleObject(_),
                            dayChangePercent: {
                                ...this.getTextStyleObject(y),
                                "day-change": !0
                            },
                            netChangePercent: {
                                ...this.getTextStyleObject(w),
                                "net-change": !0
                            }
                        },
                        x && (i += _,
                        n += v * p,
                        o += v * h.average_price,
                        a += g,
                        r += v * k),
                        s.push(l)
                    }
                    n && o && (l = (n - o) / o * 100),
                    n && r && (c = (n - r) / r * 100),
                    this.total = {
                        investment: o,
                        value: n,
                        pnl: i,
                        dayPnl: a,
                        pnlPercent: l,
                        dayPnlPercent: c
                    },
                    this.total.formatted = {
                        investment: this.splitDecimal(Object(d["b"])(this.total.investment, 2)),
                        value: this.splitDecimal(Object(d["b"])(this.total.value, 2)),
                        pnl: this.splitDecimal(Object(d["b"])(this.total.pnl, 2)),
                        dayPnl: this.splitDecimal(Object(d["b"])(this.total.dayPnl, 2))
                    },
                    this.currentHoldings = s
                },
                doHoldingsTasks() {
                    this.currentHoldings.length > this.maxHoldingsCount && (this.performanceMode = !0),
                    this.performanceMode ? (this.clearUpdateTimer(),
                    this.unsubscribeCurrentTokens()) : (this.initUpdateTimer(),
                    this.updateCurrentSubscription())
                },
                unsubscribeCurrentTokens() {
                    this.subscribedTokens && this.subscribedTokens.length > 0 && (this.ticker.unsubscribe(this.subscribedTokens, p["b"]),
                    this.subscribedTokens = [])
                },
                updateCurrentSubscription() {
                    let t = []
                      , e = [];
                    this.currentHoldings.forEach(e=>{
                        t.push(e.instrument_token)
                    }
                    ),
                    e = this.subscribedTokens.filter(e=>{
                        if (-1 === t.indexOf(e))
                            return e
                    }
                    ),
                    this.ticker.subscribe(t, p["b"]),
                    this.ticker.setMode(this.ticker.modeLTPC, t, p["b"]),
                    this.ticker.unsubscribe(e, p["b"]),
                    this.subscribedTokens = t
                },
                getTextStyleObject(t) {
                    return {
                        "text-red": t < 0,
                        "text-green": t > 0
                    }
                },
                initUpdateTimer() {
                    this.clearUpdateTimer();
                    let t = 3e3;
                    this.currentHoldings && this.currentHoldings.length > 50 && (t = 1e4),
                    this.updateTimer = setInterval(()=>{
                        this.updateHoldings(this.presentHoldings.data, this.presentHoldings.type)
                    }
                    , t)
                },
                clearUpdateTimer() {
                    this.updateTimer && (clearInterval(this.updateTimer),
                    this.updateTimer = null)
                },
                addHolding(t) {
                    let e = this.instrumentManager.get(t.tradingsymbol, null, t.exchange)
                      , s = this.ticks[t.instrument_token] && this.ticks[t.instrument_token].lastPrice;
                    this.placeOrder({
                        instrument: e,
                        instrumentToken: t.instrument_token,
                        transactionType: h["b"].TRANSACTION_TYPE.BUY,
                        quantity: e.lotSize,
                        product: h["b"].PRODUCT.CNC,
                        orderType: h["b"].ORDER_TYPE.MARKET,
                        variety: h["b"].VARIETY.REGULAR,
                        instrument_token: t.instrument_token,
                        price: s,
                        lastPrice: s
                    })
                },
                exitHolding(t) {
                    let e = this.instrumentManager.get(t.tradingsymbol, null, t.exchange)
                      , s = t.quantity + (t.t1_quantity || 0)
                      , i = this.ticks[t.instrument_token] && this.ticks[t.instrument_token].lastPrice;
                    this.placeOrder({
                        instrument: e,
                        instrumentToken: t.instrument_token,
                        transactionType: h["b"].TRANSACTION_TYPE.SELL,
                        quantity: s,
                        product: h["b"].PRODUCT.CNC,
                        orderType: h["b"].ORDER_TYPE.MARKET,
                        variety: h["b"].VARIETY.REGULAR,
                        instrument_token: t.instrument_token,
                        price: i,
                        lastPrice: i,
                        triggerPrice: i
                    })
                },
                placeOrder(t) {
                    this.$events.emit(h["b"].EVENTS.ORDER_PLACE, t)
                },
                splitDecimal(t) {
                    let e = t.split(".");
                    return 2 === e.length ? e[0] + '<span class="text-decimal">.' + e[1] + "</span>" : e[0]
                },
                showContextMenu(t) {
                    this.currentCtxMenuUID = t.uid
                },
                hideContextMenu(t) {
                    this.currentCtxMenuUID = null
                },
                handleRowEnter(t) {
                    this.showContextMenu(t.row)
                },
                handleRowLeave(t) {
                    this.hideContextMenu()
                },
                gotoConsoleBreakdown(t) {
                    let e = r()(this.consoleBreakdownURL, t);
                    window.open(e)
                },
                addonData(t) {
                    return {
                        createGTT: {
                            lastPrice: t.lastPrice,
                            type: h["b"].GTT.typeTwoLeg,
                            transactionType: h["b"].TRANSACTION_TYPE.SELL,
                            condition: {
                                tradingsymbol: t.tradingsymbol,
                                exchange: t.exchange
                            },
                            orders: [{
                                quantity: t.quantity + t.t1_quantity
                            }, {
                                quantity: t.quantity + t.t1_quantity
                            }]
                        }
                    }
                },
                showHoldingsAuth() {
                    this.isHoldingsAuthShown = !0
                },
                hideHoldingsAuth() {
                    this.isHoldingsAuthShown = !1
                }
            }
        }
          , b = f
          , C = s("0c7c")
          , y = Object(C["a"])(b, i, a, !1, null, null, null);
        e["default"] = y.exports
    },
    "91e0": function(t, e, s) {},
    "950a": function(t, e, s) {
        var i = s("30c9");
        function a(t, e) {
            return function(s, a) {
                if (null == s)
                    return s;
                if (!i(s))
                    return t(s, a);
                var n = s.length
                  , r = e ? n : -1
                  , o = Object(s);
                while (e ? r-- : ++r < n)
                    if (!1 === a(o[r], r, o))
                        break;
                return s
            }
        }
        t.exports = a
    },
    9806: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "orderbook gtt-list"
            }, [t.gttConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "GTT couldn't be loaded.",
                    error: t.gttError
                }
            }) : t._e(), t._v(" "), t.gttConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/gtt.svg")),
                    showOmnisearch: "",
                    omnisearchActionTitle: "New GTT"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You have not created any triggers. "), s("a", {
                attrs: {
                    href: "https://zerodha.com/z-connect/tradezerodha/kite/introducing-gtt-good-till-triggered-orders",
                    target: "_blank"
                }
            }, [t._v("Learn more")]), t._v(" about setting automatic stoploss and target orders for your holdings.")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.gttConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.gttConstraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Orders couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.gttConstraints.showEmptyState || t.gttConstraints.showErrorState ? t._e() : s("section", {
                staticClass: "gtt-list-wrap table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(0), t._v(" "), t.gttConstraints.isData ? s("span", [t._v("(" + t._s(t.formattedGTT.length) + ")")]) : t._e(), t._v(" "), t.gttConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.gttError && t.gttError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.gttConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.gttConstraints.isData && !t.isMobile ? s("div", {
                staticClass: "gtt-list-section"
            }, [s("su-table", {
                staticClass: "fold-header",
                attrs: {
                    data: t.formattedGTT,
                    headers: t.gttTableHeaders,
                    uid: "id",
                    searchPlaceHolder: "eg: sell, nifty, nrml etc.",
                    "download-csv": "gtt-list.csv",
                    toolbar: t.formattedGTT && 0 !== t.formattedGTT.length,
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return t.showContextMenu(e.row, "gtt", "id")
                    },
                    rowLeave: function(e) {
                        return t.hideContextMenu(e.row, "gtt")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "fill-timestamp",
                            class: [e.row.style.common]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.created_at.slice(0, 10)) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "instrument",
                            class: [e.row.style.common]
                        }, [s("span", {
                            staticClass: "tradingsymbol"
                        }, [e.row.condition.instrument.niceName ? s("span", {
                            domProps: {
                                innerHTML: t._s(t.dateSuperScript(e.row.condition.instrument.niceName))
                            }
                        }) : s("span", [t._v(t._s(e.row.condition.instrument.tradingsymbol))])]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.condition.instrument.exchange) + "\n\t\t\t\t\t\t")]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.contextMenu.gtt && t.contextMenu.gtt === e.row.id ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [e.row.isDisabled ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.enableTrigger(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Enable")]) : t._e()]), t._v(" "), s("li", [e.row.isModify ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.showGTTModifyModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")]) : t._e()]), t._v(" "), s("li", [e.row.isDelete ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.showGTTDeleteModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")]) : t._e()]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.showGTTInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info"
                        }), t._v(" Info")])]), t._v(" "), s("li", [s("a", {
                            staticClass: "svg",
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.copyGTT(e.row)
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: "/static/images/gtt-icon.svg"
                            }
                        }), s("span", [t._v("Copy GTT "), s("span", {
                            staticClass: "text-lightest"
                        }, [t._v(" / GTC")])])])]), t._v(" "), s("common-context-menu", {
                            attrs: {
                                instrument: e.row.condition.instrument,
                                exclude: ["popoutChart", "createGTT"]
                            }
                        }), t._v(" "), s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.condition.tradingsymbol,
                                    exchange: e.row.condition.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1)], 1), t._v(" "), s("td", {
                            staticClass: "type",
                            class: [e.row.style.common]
                        }, [s("span", {
                            staticClass: "small fixed-width-label cursor",
                            on: {
                                click: function(s) {
                                    return t.showGTTInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "text-label type-label"
                        }, [e.row.isTypeOCO ? [t._v("OCO")] : [t._v(t._s(e.row.type.toUpperCase()))]], 2), t._v(" "), s("span", {
                            staticClass: "text-label transaction-type-label",
                            class: "SELL" === e.row.transactionType ? "red" : "blue"
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.transactionType))])])]), t._v(" "), s("td", {
                            staticClass: "trigger-values right",
                            class: [e.row.style.common]
                        }, t._l(e.row.condition.trigger_values, (function(i, a) {
                            return s("div", {
                                key: a
                            }, [s("span", [t._v(t._s(t._f("inrFormat")(i, e.row.condition.instrument.precision)))]), t._v(" "), t.ticks && t.ticks[e.row.condition.instrument.instrumentToken] ? s("span", {
                                staticClass: "distance-percent"
                            }, [e.row.isActive ? s("span", {
                                directives: [{
                                    name: "tooltip",
                                    rawName: "v-tooltip"
                                }],
                                attrs: {
                                    title: "Distance from LTP"
                                }
                            }, [t._v(t._s(t._f("round")(t.calculateAwayPercent(i, t.ticks[e.row.condition.instrument.instrumentToken].lastPrice), 2)) + "%")]) : s("span", [t._v("—")])]) : t._e()])
                        }
                        )), 0), t._v(" "), s("td", {
                            staticClass: "last-price",
                            class: [e.row.style.common]
                        }, [t.ticks && t.ticks[e.row.condition.instrument.instrumentToken] ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.ticks[e.row.condition.instrument.instrumentToken].lastPrice, e.row.condition.instrument.precision)) + "\n\t\t\t\t\t\t")]) : s("span", [t._v("\n\t\t\t\t\t\t\t—\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "quantity",
                            class: [e.row.style.common]
                        }, t._l(e.row.orders, (function(e, i) {
                            return s("span", {
                                key: i
                            }, [0 !== i ? s("span", [t._v("/")]) : t._e(), t._v(" " + t._s(e.quantity) + "\n\t\t\t\t\t\t")])
                        }
                        )), 0), t._v(" "), s("td", {
                            staticClass: "status"
                        }, [s("span", {
                            staticClass: "text-label small order-status-label",
                            class: t.gttStatusLabelClass(e.row.status),
                            on: {
                                click: function(s) {
                                    return t.showGTTInfoModal(e.row)
                                }
                            }
                        }, [s("span", [t._v(t._s(e.row.status))])]), t._v(" "), e.row.isDisabled ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            attrs: {
                                title: "Trigger is rejected due to: " + (e.row && e.row.meta.rejection_reason) + ". Modify and enable the trigger."
                            },
                            on: {
                                click: function(s) {
                                    return t.enableTrigger(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info text-red cursor"
                        })]) : t._e()])]
                    }
                }], null, !1, 1876690183)
            }, [s("span", {
                attrs: {
                    slot: "toolbar-before-search"
                },
                slot: "toolbar-before-search"
            }, [s("button", {
                staticClass: "create-new button button-small button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showMarketDepthWidget()
                    }
                }
            }, [t._v("New GTT")])])])], 1) : t._e(), t._v(" "), t.gttConstraints.isData && t.isMobile ? s("div", {
                staticClass: "gtt-list cards"
            }, t._l(t.formattedGTT, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "card",
                    on: {
                        click: function(s) {
                            return t.showContextMenu(e, "gtt", "id")
                        }
                    }
                }, [t.contextMenu.gtt && t.contextMenu.gtt === e.id ? s("mobile-context-menu", {
                    on: {
                        close: function(s) {
                            return t.hideContextMenu(e, "gtt")
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [s("li", [e.isModify ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.showGTTModifyModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-edit"
                }), t._v(" Modify")]) : t._e()]), t._v(" "), s("li", [e.isDelete ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.showGTTDeleteModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-times"
                }), t._v(" Delete")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.showGTTInfoModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                }), t._v(" Info")])]), t._v(" "), s("common-context-menu", {
                    attrs: {
                        instrument: e.condition.instrument,
                        exclude: ["popoutChart", "createGTT"]
                    }
                }), t._v(" "), s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.condition.tradingsymbol,
                            exchange: e.condition.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, [s("span", {
                    staticClass: "text-label small order-status-label",
                    class: t.gttStatusLabelClass(e.status)
                }, [s("span", [t._v(t._s(e.status))])])]), t._v(" "), s("div", {
                    staticClass: "flex4 text-right text-small"
                }, [s("span", {
                    staticClass: "dim"
                }, [t._v(t._s(e.created_at.slice(0, 10)))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, [e.condition.instrument.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(t.dateSuperScript(e.condition.instrument.niceName))
                    }
                }) : s("span", [t._v(t._s(e.condition.instrument.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.condition.instrument.exchange))])]), t._v(" "), s("div", {
                    staticClass: "flex6 text-right"
                }, [s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v("Trig")]), t._v(" "), t._l(e.condition.trigger_values, (function(i, a) {
                    return s("span", {
                        key: a
                    }, [0 !== a ? s("span", [t._v("/")]) : t._e(), t._v(" " + t._s(t._f("inrFormat")(i, e.condition.instrument.precision)) + "\n\t\t\t\t\t\t")])
                }
                ))], 2)]), t._v(" "), s("div", {
                    staticClass: "flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, [s("span", {
                    staticClass: "text-label type-label"
                }, [e.isTypeOCO ? [t._v("OCO")] : [t._v(t._s(e.type.toUpperCase()))]], 2), t._v(" "), s("span", {
                    staticClass: "text-label transaction-type-label",
                    class: "SELL" === e.transactionType ? "red" : "blue"
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.transactionType))])]), t._v(" "), s("div", {
                    staticClass: "flex6 text-right"
                }, [s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v("Qty")]), t._v(" "), t._l(e.orders, (function(e, i) {
                    return s("span", {
                        key: i
                    }, [0 !== i ? s("span", [t._v("/")]) : t._e(), t._v(" " + t._s(e.quantity) + "\n\t\t\t\t\t\t")])
                }
                ))], 2)])], 1)
            }
            )), 0) : t._e()]), t._v(" "), s("gtt-delete-window"), t._v(" "), s("gtt-info-window")], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("GTT")])])
        }
        ]
          , n = s("2f62")
          , r = s("9c9e")
          , o = s("d9d2")
          , l = s("5fb0")
          , c = s("0a3b")
          , u = s("0e50")
          , d = s("39e3")
          , h = s("40f2")
          , p = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isShown && t.trigger ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "gtt-delete-modal",
                on: {
                    close: t.close
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Delete GTT?")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("span", {
                staticClass: "instrument"
            }, [s("span", {
                staticClass: "tradingsymbol"
            }, [t._v(t._s(t.trigger.condition.tradingsymbol))]), t._v(" "), s("span", {
                staticClass: "text-label small trigger-type",
                class: t.gttTypeLabelClass(t.trigger.type)
            }, [t._v(t._s(t.trigger.type.toUpperCase()))]), t._v(" "), s("p", [t._v("Created on "), s("span", [t._v(t._s(t.trigger.created_at))])])])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.deleteInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.apiDeleteGTT(t.trigger)
                    }
                }
            }, [s("span", [t._v("Delete")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Close")])])], 1)]) : t._e()
        }
          , m = []
          , v = s("3da7")
          , _ = s("025e")
          , g = {
            name: "gtt-delete-window",
            data() {
                return {
                    isShown: !1,
                    trigger: null,
                    deleteInProgress: !1
                }
            },
            created() {
                this.$events.on(o["b"].EVENTS.GTT_DELETE, this.init)
            },
            methods: {
                show() {
                    this.isShown = !0
                },
                close() {
                    this.isShown = !1
                },
                gttTypeLabelClass(t) {
                    return {
                        indigo: t === o["b"].GTT.typeSingle,
                        amber: t === o["b"].GTT.typeTwoLeg
                    }
                },
                init(t) {
                    this.trigger = t,
                    this.show()
                },
                apiDeleteGTT(t) {
                    this.deleteInProgress = !0,
                    v["a"].deleteGTT(t.id).then(t=>{
                        this.deleteInProgress = !1,
                        this.$toast.info({
                            title: "Deleted",
                            message: "GTT deleted",
                            orientation: this.$toast.BOTTOM_RIGHT
                        }),
                        this.$events.emit(o["b"].EVENTS.GTT_DELETE_SUCCESS, t),
                        this.close()
                    }
                    ).catch(t=>{
                        this.deleteInProgress = !1;
                        let e = Object(_["j"])(t);
                        this.cancelInProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: e.message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        }),
                        this.$events.emit(o["b"].EVENTS.GTT_DELETE_ERROR, e),
                        this.close()
                    }
                    )
                }
            }
        }
          , f = g
          , b = s("0c7c")
          , C = Object(b["a"])(f, p, m, !1, null, null, null)
          , y = C.exports
          , w = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.isShown ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "gtt-info-modal",
                on: {
                    close: t.close
                }
            }, [[s("div", {
                staticClass: "row gtt-info-header",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "eight columns tradingsymbol-wrapper header-left"
            }, [s("span", {
                staticClass: "trigger-type text-label text-label-outline blue",
                class: t.gttTypeLabelClass(t.trigger.type)
            }, [t._v("\n\t\t\t\t\t" + t._s(t.trigger.type.toUpperCase()) + "\n\t\t\t\t")]), t._v(" "), s("h3", {
                staticClass: "tradingsymbol"
            }, [t._v("\n\t\t\t\t\t" + t._s(t.trigger.condition.tradingsymbol) + " "), s("span", {
                staticClass: "text-xsmall dim"
            }, [t._v(t._s(t.trigger.condition.exchange))])])]), t._v(" "), s("div", {
                staticClass: "status four columns text-right header-right"
            }, [s("span", {
                staticClass: "text-label text-label-outline small trigger-status-label",
                class: t.gttStatusLabelClass(t.trigger.status.toUpperCase())
            }, [t._v("\n\t\t\t\t\t" + t._s(t.trigger.status.toUpperCase()) + "\n\t\t\t\t")]), t._v(" "), s("a", {
                staticClass: "branding",
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/z-connect/tradezerodha/kite/introducing-gtt-good-till-triggered-orders"
                }
            }, [s("img", {
                attrs: {
                    alt: "GTT logo",
                    src: "/static/images/gtt-logo.svg"
                }
            })])])]), t._v(" "), s("div", {
                staticClass: "gtt-info-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Created at")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            }, [s("div", {
                staticClass: "created at"
            }, [t._v(t._s(t.trigger.created_at))])])]), t._v(" "), s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Updated at")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            }, [s("div", {
                staticClass: "updated-at"
            }, [t._v(t._s(t.trigger.updated_at))])])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Expires at")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            }, [s("div", {
                staticClass: "expires-at"
            }, [t._v(t._s(t.trigger.expires_at.slice(0, 10)))])])]), t._v(" "), s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("LTP created at")])]), t._v(" "), s("div", {
                staticClass: "six columns text-right"
            }, [s("div", {
                staticClass: "expires-at"
            }, [t._v(t._s(t.trigger.condition.last_price))])])]), t._v(" "), t.trigger.meta && t.trigger.meta.rejection_reason ? s("div", {
                staticClass: "row field"
            }, [s("label", [t._v("Rejection reason")]), t._v(" "), s("div", {
                staticClass: "expires-at"
            }, [t._v(t._s(t.trigger.meta.rejection_reason))])]) : t._e()])]), t._v(" "), t._l(t.trigger.condition.trigger_values, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "trigger-section"
                }, [s("div", {
                    staticClass: "trigger-section-header row field"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [t.isTriggerTypeTwoLeg && 0 === i ? s("span", [t._v("Stoploss trigger @ " + t._s(e))]) : t.isTriggerTypeTwoLeg && 1 === i ? s("span", [t._v("Target trigger @ " + t._s(e))]) : s("span", [t._v("Trigger @ " + t._s(e))])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.isStatusTriggered && t.trigger.orders[i].result ? s("span", {
                    staticClass: "text-label green"
                }, [t._v("PLACED")]) : t.isStatusTriggered && !t.trigger.orders[i].result ? s("span", {
                    staticClass: "text-label"
                }, [t._v("DORMANT")]) : t._e()])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Transaction type")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "transaction-type"
                }, [t._v(t._s(t.trigger.orders[i].transaction_type))])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Product")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "product"
                }, [t._v(t._s(t.trigger.orders[i].product))])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Order type")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "updated-at"
                }, [t._v(t._s(t.trigger.orders[i].order_type))])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Order ID")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.trigger.orders[i].result && t.trigger.orders[i].result.order_result && t.trigger.orders[i].result.order_result.order_id ? s("div", {
                    staticClass: "order-id"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.trigger.orders[i].result.order_result.order_id))]) : s("div", [t._v("—")])])]), t._v(" "), t.trigger.orders[i].result && t.trigger.orders[i].result.order_result && t.trigger.orders[i].result.order_result.rejection_reason ? s("div", {
                    staticClass: "row field"
                }, [s("label", [t._v("Rejection reason")]), t._v(" "), s("div", {
                    staticClass: "rejection-reason"
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.markdownToHTML(t.trigger.orders[i].result.order_result.rejection_reason))
                    }
                })])]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "six columns"
                }, [s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Quantity")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "quantity"
                }, [t._v(t._s(t.trigger.orders[i].quantity))])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Price")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "updated-at"
                }, [t._v(t._s(t.trigger.orders[i].price))])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Trigger at price")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.trigger.orders[i].result ? s("div", {
                    staticClass: "triggered-at"
                }, [t._v(t._s(t.trigger.orders[i].result.triggered_at))]) : s("div", [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row field"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Triggered at")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.trigger.orders[i].result ? s("div", {
                    staticClass: "triggered-price"
                }, [t._v(t._s(t.trigger.orders[i].result.timestamp))]) : s("div", [t._v("—")])])])])])])
            }
            ))], 2), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.isStatusActive ? s("su-button", {
                staticClass: "button button-blue",
                nativeOn: {
                    click: function(e) {
                        return t.showGTTModifyModal()
                    }
                }
            }, [t._v("Modify")]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [t._v("Close")])], 1)]], 2) : t._e()
        }
          , T = []
          , k = {
            data() {
                return {
                    isShown: !1,
                    rawTrigger: null
                }
            },
            created() {
                this.$events.on(o["b"].EVENTS.GTT_INFO, this.init),
                this.tableHeaders = {
                    viewTrades: [{
                        label: "Trade ID",
                        field: "trade_id",
                        sort: !1
                    }, {
                        label: "Time",
                        field: "order_timestamp",
                        sort: !1
                    }, {
                        label: "Exch. time",
                        field: "exchange_timestamp",
                        sort: !1
                    }, {
                        label: "Exch. id",
                        field: "exchange_order_id",
                        sort: !1
                    }, {
                        label: "Product",
                        field: "product",
                        sort: !1
                    }, {
                        label: "Qty.",
                        field: "quantity",
                        sort: !1
                    }, {
                        label: "Avg. price",
                        field: "average_price",
                        sort: !1
                    }]
                }
            },
            computed: {
                ...Object(n["d"])(["isMobile"]),
                isTriggerTypeSingle() {
                    return this.trigger.type === o["b"].GTT.typeSingle
                },
                isTriggerTypeTwoLeg() {
                    return this.trigger.type === o["b"].GTT.typeTwoLeg
                },
                isStatusTriggered() {
                    return this.trigger.status.toUpperCase() === o["b"].GTT.statusTriggered
                },
                isStatusActive() {
                    return this.trigger.status.toUpperCase() === o["b"].GTT.statusActive
                },
                trigger() {
                    if (this.rawTrigger && this.rawTrigger.type === o["b"].GTT.typeTwoLeg && this.rawTrigger.transactionType === o["b"].TRANSACTION_TYPE.BUY) {
                        const t = this.$clone(this.rawTrigger);
                        return t.orders.reverse(),
                        t.condition.trigger_values.reverse(),
                        t
                    }
                    return this.rawTrigger
                }
            },
            methods: {
                show() {
                    this.isShown = !0
                },
                close() {
                    this.isShown = !1
                },
                init(t) {
                    this.rawTrigger = this.$clone(t),
                    this.show()
                },
                gttTypeLabelClass(t) {
                    return {
                        indigo: t === o["b"].GTT.typeSingle,
                        amber: t === o["b"].GTT.typeTwoLeg
                    }
                },
                gttStatusLabelClass(t) {
                    return {
                        red: "EXPIRED" === t,
                        amber: "CANCELLED" === t,
                        green: "ACTIVE" === t,
                        blue: "TRIGGERED" === t
                    }
                },
                showGTTModifyModal() {
                    this.$events.emit(o["b"].EVENTS.GTT_MODIFY, this.rawTrigger),
                    this.close()
                },
                markdownToHTML(t) {
                    return Object(_["k"])(t)
                }
            }
        }
          , x = k
          , E = Object(b["a"])(x, w, T, !1, null, null, null)
          , S = E.exports;
        const P = "gtt";
        var A = {
            inject: ["ticker", "instrumentManager"],
            mixins: [r["a"], h["a"]],
            components: {
                "gtt-delete-window": y,
                "gtt-info-window": S
            },
            data() {
                return {
                    showGTT: !1,
                    contextMenu: {
                        gtt: null
                    },
                    subscribedTokens: []
                }
            },
            created() {
                this.consoleURL = "https://console.zerodha.com",
                this.isComponentActive = !0,
                this.gttTableHeaders = [{
                    label: "Created on",
                    field: "created_at",
                    sort: !0,
                    search: !0
                }, {
                    label: "Instrument",
                    field: "condition.tradingsymbol",
                    sort: !0,
                    search: !0,
                    class: "instrument",
                    downloadField: "downloadInsturment"
                }, {
                    label: "Type",
                    field: "type",
                    sort: !0,
                    search: !0,
                    sortMethod: this.sortType
                }, {
                    label: "Trigger",
                    field: "condition.trigger_values",
                    sort: !0,
                    search: !1,
                    class: "trigger-values right",
                    downloadField: "downloadTriggerValues",
                    sortMethod: this.sortTriggerValues
                }, {
                    label: "LTP",
                    field: "condition.trigger_values",
                    search: !1
                }, {
                    label: "Quantity",
                    field: "orderQuantities",
                    sort: !1,
                    search: !1,
                    downloadField: "orderQuantities"
                }, {
                    label: "Status",
                    field: "status",
                    sort: !0,
                    search: !0,
                    class: "order-status"
                }],
                this.fetchGTT(),
                this.preProcess()
            },
            beforeDestroy() {
                this.postProcess()
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            watch: {
                subscribedTokens(t, e) {
                    t && t.length > 0 && (this.ticker.subscribe(t, P),
                    this.ticker.setMode(this.ticker.modeLTP, t, P))
                }
            },
            computed: {
                ...Object(n["d"])(["isMobile"]),
                ...Object(n["d"])(d["b"], ["ticks"]),
                ...Object(n["d"])(u["b"], ["gtt", "gttError", "gttFetchStatus"]),
                gttConstraints() {
                    let t = this.gttFetchStatus === l["d"].API_STATUSES.fetching
                      , e = this.gttFetchStatus === l["d"].API_STATUSES.error
                      , s = this.gtt && this.gtt.length > 0
                      , i = this.gtt && 0 === this.gtt.length
                      , a = e && !this.gtt
                      , n = e && this.gtt;
                    return {
                        isData: s,
                        isError: e,
                        isFetching: t,
                        showErrorIcon: n,
                        showEmptyState: i,
                        showErrorState: a
                    }
                },
                formattedGTT() {
                    let t = []
                      , e = [];
                    for (let n of this.gtt) {
                        var s = this.$clone(n);
                        if (s.condition.instrument = this.instrumentManager.get(s.condition.tradingsymbol, null, s.condition.exchange),
                        s.condition.instrument) {
                            if (e.push(s.condition.instrument.instrumentToken),
                            s.status = s.status.toUpperCase(),
                            s.isDisabled = s.status === o["b"].GTT.statusDisabled,
                            s.isActive = s.status === o["b"].GTT.statusActive,
                            s.isModify = s.isActive && !s.isDisabled,
                            s.isDelete = s.isActive || s.isDisabled,
                            s.style = {},
                            s.style.common = {
                                greyed: s.status !== o["b"].GTT.statusActive && s.status !== o["b"].GTT.statusDisabled
                            },
                            s.downloadInsturment = s.condition.instrument.tradingsymbol + " (" + s.condition.instrument.exchange + ")",
                            s.type === o["b"].GTT.typeSingle ? s.downloadTriggerValues = s.condition.trigger_values[0] : s.type === o["b"].GTT.typeTwoLeg && (s.isTypeOCO = !0,
                            s.downloadTriggerValues = s.condition.trigger_values[0] + "/" + s.condition.trigger_values[1]),
                            s.orderQuantities = "",
                            s.orders && s.orders.length > 0) {
                                s.transactionType = s.orders[0].transaction_type;
                                for (let t = 0; t < s.orders.length; t++)
                                    s.orderQuantities += s.orders[t].quantity,
                                    t !== s.orders.length - 1 && (s.orderQuantities += "/")
                            }
                            t.push(s)
                        }
                    }
                    this.subscribedTokens = e;
                    let i = []
                      , a = [];
                    for (let n of t)
                        n.status === o["b"].GTT.statusActive ? i.push(n) : a.push(n);
                    return t = i.concat(a),
                    t
                }
            },
            methods: {
                ...Object(n["c"])(u["b"], ["fetchGTT"]),
                preProcess() {
                    this.$events.on(l["d"].EVENTS.refetch + "gtt", this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_DELETE_SUCCESS, this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_DELETE_ERROR, this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_PLACE_SUCCESS, this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_PLACE_ERROR, this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_MODIFY_SUCCESS, this.fetchGTT),
                    this.$events.on(o["b"].EVENTS.GTT_MODIFY_ERROR, this.fetchGTT),
                    this.isComponentActive = !0
                },
                postProcess() {
                    this.$events.off(l["d"].EVENTS.refetch + "gtt", this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_DELETE_SUCCESS, this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_DELETE_ERROR, this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_PLACE_SUCCESS, this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_PLACE_ERROR, this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_MODIFY_SUCCESS, this.fetchGTT),
                    this.$events.off(o["b"].EVENTS.GTT_MODIFY_ERROR, this.fetchGTT),
                    this.isComponentActive = !1,
                    this.subscribedTokens && this.subscribedTokens.length > 0 && this.ticker.unsubscribe(this.subscribedTokens, P)
                },
                openChart({tradingsymbol: t, exchange: e}) {
                    let s = this.instrumentManager.get(t, null, e);
                    s && this.openInAppChart(s.instrumentToken, s.segment, s.tradingsymbol)
                },
                showMarketDepthWidget(t) {
                    let e = null;
                    t && (e = this.instrumentManager.get(t.tradingsymbol, null, t.exchange)),
                    e ? this.$events.emit(l["d"].EVENTS.showMarketDepthWidget, {
                        instrument: e
                    }) : this.$events.emit(l["d"].EVENTS.showMarketDepthWidget)
                },
                showContextMenu(t, e, s) {
                    s = s || "uid",
                    this.$set(this.contextMenu, e, t[s])
                },
                hideContextMenu(t, e) {
                    this.$set(this.contextMenu, e, null)
                },
                gttTypeLabelClass(t) {
                    return {
                        indigo: t === o["b"].GTT.typeSingle,
                        amber: t === o["b"].GTT.typeTwoLeg
                    }
                },
                gttStatusLabelClass(t) {
                    return {
                        red: t === o["b"].GTT.statusExpired,
                        grey: t === o["b"].GTT.statusDisabled,
                        green: t === o["b"].GTT.statusActive,
                        blue: t === o["b"].GTT.statusTriggered
                    }
                },
                showGTTInfoModal(t) {
                    this.$events.emit(o["b"].EVENTS.GTT_INFO, t)
                },
                showGTTModifyModal(t) {
                    this.$events.emit(o["b"].EVENTS.GTT_MODIFY, t)
                },
                showGTTDeleteModal(t) {
                    this.$events.emit(o["b"].EVENTS.GTT_DELETE, t)
                },
                enableTrigger(t) {
                    let e = "Enable";
                    this.$events.emit(o["b"].EVENTS.GTT_MODIFY, {
                        ...t,
                        actionText: e
                    })
                },
                copyGTT(t) {
                    let e = [];
                    for (let s of t.orders)
                        e.push({
                            product: s.product,
                            orderType: s.order_type,
                            quantity: s.quantity,
                            price: s.price || ""
                        });
                    this.$events.emit(o["b"].EVENTS.GTT_PLACE, {
                        type: t.type,
                        transactionType: t.transactionType,
                        condition: {
                            tradingsymbol: t.condition.tradingsymbol,
                            exchange: t.condition.exchange,
                            triggerValues: t.condition.trigger_values
                        },
                        orders: e
                    })
                },
                calculateAwayPercent(t, e) {
                    return 100 * (t / e - 1)
                },
                dateSuperScript(t) {
                    return Object(c["a"])(t)
                },
                sortType(t) {
                    return t.type + "-" + t.transactionType
                },
                sortTriggerValues(t) {
                    let e = 1 / 0;
                    if (t.status !== o["b"].GTT.statusActive)
                        return e;
                    for (let s of t.condition.trigger_values) {
                        let i = this.ticks[t.condition.instrument.instrumentToken];
                        if (i) {
                            let t = Math.abs(this.calculateAwayPercent(s, i.lastPrice));
                            (!e || t < e) && (e = t)
                        }
                    }
                    return e
                }
            }
        }
          , I = A
          , O = Object(b["a"])(I, i, a, !1, null, null, null);
        e["default"] = O.exports
    },
    9946: function(t, e, s) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("router-link", {
                attrs: {
                    to: t.to,
                    event: ""
                },
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.handle.apply(null, arguments)
                    }
                }
            }, [t._t("default")], 2)
        }
          , a = []
          , n = s("5fb0")
          , r = {
            name: "custom-router-link",
            props: {
                to: {
                    type: [String, Object],
                    required: !0
                }
            },
            methods: {
                handle(t) {
                    this.$emit("click", t),
                    this.$router.push(this.to),
                    "object" === typeof this.to && this.to.name && this.to.name === this.$route.name && (this.$events.emit(n["c"].refetch + this.$route.name),
                    document.querySelector(".page-content").classList.add("bounce"),
                    setTimeout(()=>{
                        document.querySelector(".page-content").className = "page-content"
                    }
                    , 305))
                }
            }
        }
          , o = r
          , l = s("0c7c")
          , c = Object(l["a"])(o, i, a, !1, null, null, null);
        e["a"] = c.exports
    },
    a029a: function(t, e, s) {
        "use strict";
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return i["a"].get(Object(a["a"])("connect.connectedApps.all"))
        }
        function r(t) {
            return i["a"].delete(Object(a["a"])("connect.revokeAppAccess", {
                apiKey: t
            }))
        }
        function o(t) {
            return i["a"].get(Object(a["a"])("connect.app.session"), {
                params: t
            })
        }
        function l(t) {
            return i["a"].post(Object(a["a"])("connect.app.authorize"), t)
        }
        function c(t) {
            return i["a"].post(Object(a["a"])("connect.basket.orders.place", {
                variety: t.variety
            }), t)
        }
        e["a"] = {
            getConnectedApps: n,
            revokeAppAccess: r,
            getAppSession: o,
            authorizeApp: l,
            placeOrder: c
        }
    },
    a88c: function(t, e, s) {
        "use strict";
        s("2b19")
    },
    ad1c: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return a
        }
        ));
        var i = s("d1de");
        class a {
        }
        a.namespace = i["b"],
        a.install = function(t, e) {
            e.store && e.store.registerModule(i["b"], i["a"])
        }
    },
    b7d9: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return r
        }
        )),
        s.d(e, "b", (function() {
            return c
        }
        )),
        s.d(e, "c", (function() {
            return u
        }
        ));
        var i = s("a026")
          , a = s("2f62")
          , n = s("5fb0");
        i["a"].use(a["b"]);
        const r = Object.freeze({
            status: "status",
            ui_status: "ui_status",
            data: "data",
            error: "error"
        })
          , o = Object.freeze({
            ...Object.keys(n["a"]).reduce((t,e)=>({
                ...t,
                [e]: !1
            }), {}),
            [n["a"].initial]: !0
        })
          , l = Object.freeze({
            [r.status]: {},
            [r.ui_status]: {},
            [r.data]: null,
            [r.error]: null
        })
          , c = t=>i["a"].observable({
            ...l,
            [r.status]: {
                ...o
            },
            ...t || {}
        })
          , u = (t,e,s)=>{
            i["a"].set(t, e, s)
        }
    },
    c1f6: function(t, e, s) {
        "use strict";
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return t ? i["a"].get(Object(a["a"])("alerts.one", {
                uuid: t
            })) : i["a"].get(Object(a["a"])("alerts.all"))
        }
        function r(t) {
            return i["a"].get(Object(a["a"])("alerts.history", {
                uuid: t
            }))
        }
        function o(t) {
            return i["a"].post(Object(a["a"])("alerts.create"), t)
        }
        function l(t, e) {
            return i["a"].put(Object(a["a"])("alerts.update", {
                uuid: t
            }), e)
        }
        function c(t, e) {
            return i["a"].put(Object(a["a"])("alerts.update", {
                uuid: t
            }), {
                status: e
            })
        }
        function u(t) {
            return i["a"].delete(Object(a["a"])("alerts.deleteBulk"), {
                params: {
                    uuid: t
                }
            })
        }
        e["a"] = {
            getAlerts: n,
            getAlertHistory: r,
            createAlert: o,
            updateAlert: l,
            updateAlertStatus: c,
            deleteAlert: u
        }
    },
    c641: function(t, e, s) {
        t.exports = s("6cd42")
    },
    c6e1: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "margins"
            }, [s("div", {
                staticClass: "margin-actions text-right"
            }, [s("span", {
                staticClass: "upi-info"
            }, [t._v("Instant, zero-cost fund transfers with "), s("img", {
                attrs: {
                    src: t.getStatic("images/UPI.svg")
                }
            })]), t._v(" "), s("su-button", {
                staticClass: "button-green",
                nativeOn: {
                    click: function(e) {
                        return t.openPayin.apply(null, arguments)
                    }
                }
            }, [t._v("Add funds")]), t._v(" "), t.isSourceGPay ? s("a", {
                staticClass: "withdraw-link button button-blue",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/funds/overview/?src=kiteweb"
                }
            }, [t._v("Withdraw")]) : s("a", {
                staticClass: "button button-blue",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/funds/overview/?src=kiteweb"
                }
            }, [t._v("Withdraw")])], 1), t._v(" "), t.isMarginsFetchError && !t.margins ? s("error-state", {
                attrs: {
                    title: "Margins couldn't be loaded.",
                    error: t.marginsError
                }
            }) : s("div", {
                staticClass: "row"
            }, t._l(t.marginSegments, (function(e) {
                return t.margins && t.margins[e] ? s("div", {
                    key: e,
                    staticClass: "six columns"
                }, [s("h3", {
                    staticClass: "title"
                }, [s("span", {
                    staticClass: "icon",
                    class: {
                        "icon-pie-chart": e == t.SEGMENT_EQUITY,
                        "icon-droplet": e == t.SEGMENT_COMMODITY
                    }
                }), t._v(" "), s("span", {
                    staticClass: "name"
                }, [t._v(t._s(e))]), t._v(" "), t.isMarginsFetchError ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "text-small error-fetch",
                    attrs: {
                        title: t.marginsError && t.marginsError.message
                    }
                }, [s("span", {
                    staticClass: "icon icon-alert-triangle"
                })]) : t._e(), t._v(" "), t.isMarginsFetching ? s("su-loader", {
                    staticClass: "dim",
                    attrs: {
                        size: 8
                    }
                }) : t._e(), t._v(" "), s("span", {
                    staticClass: "right-toolbar"
                }, [s("a", {
                    staticClass: "item",
                    attrs: {
                        target: "_blank",
                        href: t.consoleURL + "/funds/statement?segment=" + e + "&src=kiteweb"
                    }
                }, [s("span", {
                    staticClass: "icon"
                }, [s("img", {
                    staticStyle: {
                        height: "9px"
                    },
                    attrs: {
                        src: t.getStatic("/images/console.svg")
                    }
                })]), t._v(" "), s("span", [t._v("View statement")])]), t._v(" "), s("a", {
                    staticClass: "item",
                    attrs: {
                        target: "_blank",
                        href: "https://support.zerodha.com/category/trading-and-markets/margin-leverage-and-product-and-order-types/articles/kite-dashboard-and-fund-values-calculation"
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                }), t._v("Help\n\t\t\t\t\t")])])], 1), t._v(" "), s("div", {
                    staticClass: "data-table"
                }, [s("table", {
                    staticClass: "table"
                }, [s("tbody", [s("tr", [s("td", [s("div", [t._v("Available margin")])]), t._v(" "), s("td", [s("h1", {
                    staticClass: "value",
                    class: {
                        "text-red": t.margins[e].net < 0,
                        "text-blue": t.margins[e].net > 0
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].net, 2) || 0))])])]), t._v(" "), s("tr", [s("td", [t._v("Used margin")]), t._v(" "), s("td", [s("h1", [t._v(t._s(t._f("inrFormat")(t.margins[e].utilised.debits, 2) || 0))])])]), t._v(" "), s("tr", {
                    staticClass: "seperator"
                }, [s("td", [t._v("Available cash")]), t._v(" "), s("td", [s("h1", [t._v(t._s(t._f("inrFormat")(t.margins[e].available.live_balance, 2) || 0))])])]), t._v(" "), s("tr", [s("td", [t._v("Opening balance")]), t._v(" "), s("td", [t._v(t._s(t._f("inrFormat")(t.margins[e].available.opening_balance, 2) || 0))])]), t._v(" "), s("tr", [s("td", [t._v("Payin")]), t._v(" "), s("td", [t._v(t._s(t._f("inrFormat")(t.margins[e].available.intraday_payin, 2) || 0))])]), t._v(" "), s("tr", [s("td", [t._v("Payout")]), t._v(" "), s("td", [t._v(t._s(t._f("inrFormat")(t.margins[e].utilised.payout, 2) || 0))])]), t._v(" "), s("tr", [s("td", [t._v("SPAN")]), t._v(" "), s("td", [t._v(t._s(t._f("inrFormat")(t.margins[e].utilised.span, 2) || 0))])]), t._v(" "), s("tr", [s("td", [t._v("Delivery margin")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].utilised.delivery, 2) || 0) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), s("tr", [s("td", [t._v("Exposure")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].utilised.exposure, 2) || 0) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), s("tr", {
                    class: {
                        seperator: e !== t.SEGMENT_COMMODITY
                    }
                }, [s("td", [t._v("Options premium")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].utilised.option_premium, 2) || 0) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), e !== t.SEGMENT_COMMODITY ? s("tr", [s("td", [t._v("Collateral (Liquid funds)")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].utilised.liquid_collateral, 2) || 0) + "\n\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), e !== t.SEGMENT_COMMODITY ? s("tr", [s("td", [t._v("Collateral (Equity)")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].utilised.stock_collateral, 2) || 0) + "\n\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), e !== t.SEGMENT_COMMODITY ? s("tr", [s("td", [t._v("Total collateral")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("inrFormat")(t.margins[e].available.collateral, 2) || 0) + "\n\t\t\t\t\t\t\t")])]) : t._e()])])])]) : t._e()
            }
            )), 0)], 1)
        }
          , a = []
          , n = s("e165")
          , r = s.n(n)
          , o = s("2f62")
          , l = s("5fb0")
          , c = s("9c9e")
          , u = s("5052")
          , d = s("025e");
        const h = u["b"];
        var p = {
            mixins: [c["a"]],
            props: {},
            data() {
                return {
                    consoleURL: "https://console.zerodha.com",
                    payinTimer: null
                }
            },
            created() {
                this.SEGMENT_EQUITY = "equity",
                this.SEGMENT_COMMODITY = "commodity",
                this.marginSegments = [this.SEGMENT_EQUITY, this.SEGMENT_COMMODITY],
                this.fetchMargins(),
                this.preProcess(),
                this.$events.on("refetchData:" + u["b"], this.fetchMargins)
            },
            beforeDestroy() {
                this.postProcess(),
                this.$events.off("refetchData:" + u["b"], this.fetchMargins)
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                ...Object(o["d"])(["source", "isSourceGPay"]),
                ...Object(o["d"])(h, ["margins", "marginsFetchStatus", "marginsError"]),
                isMarginsFetching() {
                    return this.marginsFetchStatus === l["b"].fetching
                },
                isMarginsFetchError() {
                    return this.marginsFetchStatus === l["b"].error
                }
            },
            methods: {
                ...Object(o["c"])(h, ["fetchMargins"]),
                preProcess() {
                    this.$route.query.open_payin && this.openPayin()
                },
                postProcess() {
                    this.payinTimer && window.clearInterval(this.payinTimer)
                },
                getOpenAccountLink() {
                    return r()("https://zerodha.com/open-account?c={partnerID}&utm_source=kite&utm_medium=web&utm_campaign=account", {
                        partnerID: "RAINMT"
                    })
                },
                openPayin() {
                    this.isSourceGPay ? window.location.replace("https://cashier.zerodha.com/login?src=" + this.source) : Object(d["n"])({
                        url: "https://cashier.zerodha.com/login",
                        cb: this.fetchMargins,
                        width: 900,
                        height: 900,
                        pollInterval: 500,
                        maxWait: 3e5,
                        maxWaitCb: this.fetchMargins
                    })
                }
            }
        }
          , m = p
          , v = s("0c7c")
          , _ = Object(v["a"])(m, i, a, !1, null, null, null);
        e["default"] = _.exports
    },
    c7ed: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return o
        }
        ));
        var i = s("58c0")
          , a = s("5fb0")
          , n = s("025e");
        let r = !0;
        const o = "ipo"
          , l = {
            instruments: null,
            instrumentsError: null,
            instrumentsFetchStatus: a["b"].initial,
            applications: null,
            applicationsError: null,
            applicationsFetchStatus: a["b"].initial
        }
          , c = {
            instruments: t=>t.instruments,
            instrumentsError: t=>t.instrumentsError,
            instrumentsFetchStatus: t=>t.instrumentsFetchStatus,
            applications: t=>t.applications,
            applicationsError: t=>t.applicationsError,
            applicationsFetchStatus: t=>t.applicationsFetchStatus
        }
          , u = {
            setInstruments(t, e) {
                let s = [];
                for (let i of e)
                    i.selectedCategory = i.investor_types[0],
                    s.push(i);
                t.instruments = s
            },
            setInstrumentsError(t, e) {
                t.instrumentsError = e
            },
            setInstrumentsFetchStatus(t, e) {
                t.instrumentsFetchStatus = e
            },
            setApplications(t, e) {
                t.applications = e
            },
            setApplicationsError(t, e) {
                t.applicationsError = e
            },
            setApplicationsFetchStatus(t, e) {
                t.applicationsFetchStatus = e
            }
        }
          , d = {
            fetchInstruments({commit: t, state: e}) {
                t("setInstrumentsFetchStatus", a["b"].fetching);
                let s = i["a"].getInstruments();
                Object(n["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setInstruments",
                    error: "setInstrumentsError",
                    status: "setInstrumentsFetchStatus"
                })
            },
            fetchApplications({commit: t, state: e}) {
                t("setApplicationsFetchStatus", a["b"].fetching);
                let s = i["a"].getApplications();
                Object(n["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setApplications",
                    error: "setApplicationsError",
                    status: "setApplicationsFetchStatus"
                })
            }
        };
        e["a"] = {
            state: l,
            getters: c,
            mutations: u,
            actions: d,
            namespaced: r
        }
    },
    cb66: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "alerts"
            }, [t.constraints.hasErrorState ? s("error-state", {
                attrs: {
                    title: "Alerts couldn't be loaded.",
                    error: t.fetchError
                }
            }) : t._e(), t._v(" "), t.constraints.isEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/alert.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You haven't created any alerts.")]), t._v(" "), s("button", {
                staticClass: "button button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onNewForm.apply(null, arguments)
                    }
                }
            }, [t._v("Create new alert")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.constraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.constraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.fetchError && t.fetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.constraints.isEmpty || t.constraints.hasErrorState ? t._e() : s("section", {
                staticClass: "table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(0), t._v(" "), t.constraints.hasData ? s("span", [t._v("(" + t._s(t.alerts.length) + ")")]) : t._e(), t._v(" "), t.constraints.hasErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.fetchError && t.fetchError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.constraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.alerts ? s("su-table", {
                staticClass: "alerts-table fold-header",
                attrs: {
                    data: t.alerts,
                    headers: t.tableHeaders,
                    uid: "uuid",
                    sort: "",
                    search: "",
                    select: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return !t.isMobile && t.onShowContextMenu(e.row, "uuid")
                    },
                    rowLeave: function(e) {
                        return !t.isMobile && t.onHideContextMenu(e.row)
                    },
                    rowClick: function(e) {
                        return t.onShowContextMenu(e.row, "uuid")
                    },
                    selected: t.onRowSelect
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-name",
                            attrs: {
                                width: "40%"
                            }
                        }, [s("a", {
                            staticClass: "name",
                            attrs: {
                                href: ""
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [t._v(t._s(e.row.name))]), s("br"), t._v(" "), s("span", {
                            staticClass: "text-xxsmall text-light"
                        }, [t._v(t._s(t.makeFormula(e.row)))]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.isMobile || t.contextMenu !== e.row.uuid ? t._e() : s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", ["enabled" === e.row.status ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateAlertStatus(e.row.uuid, "disabled"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-pause"
                        }), t._v(" Disable")]) : s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateAlertStatus(e.row.uuid, "enabled"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-play"
                        }), t._v(" Enable")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onDelete(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2)], 1), t._v(" "), t.isMobile && t.contextMenu === e.row.uuid ? s("mobile-context-menu", {
                            on: {
                                close: function(s) {
                                    return t.onHideContextMenu(e.row)
                                }
                            }
                        }, [s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onEditForm(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Edit")])]), t._v(" "), s("li", ["enabled" === e.row.status ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateAlertStatus(e.row.uuid, "disabled"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-pause"
                        }), t._v(" Pause")]) : s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        t.updateAlertStatus(e.row.uuid, "enabled"),
                                        t.onHideContextMenu()
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-play"
                        }), t._v(" Resume")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onDelete(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Delete")])])])], 2) : t._e()], 1), t._v(" "), s("td", {
                            staticClass: "col-status",
                            attrs: {
                                width: "20%"
                            }
                        }, [s("span", {
                            staticClass: "text-label",
                            class: {
                                green: "enabled" === e.row.status,
                                orange: "enabled" !== e.row.status
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.status) + "\n\t\t\t\t\t")]), t._v(" "), "disabled" === e.row.status && e.row.disabled_reason ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            attrs: {
                                title: "Trigger is disabled due to: '" + (e.row && e.row.disabled_reason) + "'. Modify and enable the alert."
                            },
                            on: {
                                click: function(s) {
                                    return t.onEditForm(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info text-red cursor"
                        })]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "col-triggered",
                            attrs: {
                                width: "20%"
                            }
                        }, [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    function() {
                                        return t.toggleHistory(e.row)
                                    }
                                    .apply(null, arguments)
                                }
                            }
                        }, [t._v(t._s(e.row.alert_count))])]), t._v(" "), s("td", {
                            attrs: {
                                width: "20%"
                            }
                        }, [t._v("\n\t\t\t\t\t" + t._s(e.row.created_at.slice(0, 10)) + "\n\t\t\t\t")])]
                    }
                }], null, !1, 1191699377)
            }, [s("span", {
                attrs: {
                    slot: "toolbar-before-search"
                },
                slot: "toolbar-before-search"
            }, [t.selectedAlerts && t.selectedAlerts.length > 0 ? s("button", {
                staticClass: "create-new button button-small button-orange",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onDeleteSelected.apply(null, arguments)
                    }
                }
            }, [t._v("Delete selected")]) : t._e(), t._v(" "), s("button", {
                staticClass: "create-new button button-small button-blue",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.onNewForm.apply(null, arguments)
                    }
                }
            }, [t._v("New alert")])])]) : t._e()], 1), t._v(" "), t.isHistoryOpen ? s("alert-history", {
                attrs: {
                    alert: this.histAlert
                },
                on: {
                    close: t.toggleHistory
                }
            }) : t._e()], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("Alerts")])])
        }
        ]
          , n = s("2f62")
          , r = s("5fb0")
          , o = s("3db7")
          , l = s("9c9e")
          , c = s("025e")
          , u = s("c1f6")
          , d = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("su-modal", {
                staticClass: "alerts-history-modal",
                attrs: {
                    buttons: !0,
                    open: !0,
                    "ok-label": null,
                    "cancel-label": "Close"
                },
                on: {
                    cancel: t.onClose
                }
            }, [s("div", {
                staticClass: "row",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "eight columns"
            }, [s("h2", [t._v("\n\t\t\t\t" + t._s(t.alert.name) + " (" + t._s(t.history.length) + ")\n\t\t\t\t"), s("span", {
                staticClass: "text text-xxsmall text-light"
            }, [t._v(t._s(t.alert.created_at))])])]), t._v(" "), s("div", {
                staticClass: "four columns text-right"
            }, [s("span", {
                staticClass: "text-label text-uppercase",
                class: {
                    green: "enabled" === t.alert.status,
                    orange: "enabled" !== t.alert.status
                }
            }, [t._v("\n\t\t\t\t" + t._s(t.alert.status) + "\n\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "alert-history",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t.history && 0 !== t.history.length ? s("su-table", {
                staticClass: "alert-history fold-header",
                attrs: {
                    data: t.history,
                    headers: t.tableHeaders,
                    uid: "id"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-date"
                        }, [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.toggleHistory(e.row)
                                }
                            }
                        }, [t._v(t._s(e.row.created_at.slice(0, 19).replace("T", " ")))])]), t._v(" "), s("td", {
                            staticClass: "col-symbols"
                        }, [s("span", {
                            staticClass: "symbols"
                        }, [t._v(t._s(e.row.meta.map((function(t) {
                            return t.tradingsymbol
                        }
                        )).join(", ")))]), t._v(" "), t.visibleItem === e.row.uuid ? s("div", {
                            staticClass: "alert-details text-xsmall"
                        }, t._l(e.row.meta, (function(e) {
                            return s("ul", {
                                key: e.tradingsymbol,
                                staticClass: "list-flat meta"
                            }, [s("li", [s("label", [t._v("Tradingsymbol")]), t._v(" "), s("span", [t._v(t._s(e.tradingsymbol) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Timestamp")]), t._v(" "), s("span", [t._v(t._s(e.timestamp) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Last price")]), t._v(" "), s("span", [t._v(t._s(e.last_price) + " ")])]), t._v(" "), s("li", {
                                staticClass: "ohlc"
                            }, [s("label", [t._v("OHLC")]), t._v(" "), s("span", [s("label", [t._v("O")]), t._v(" " + t._s(e.ohlc.open))]), t._v(" "), s("span", [s("label", [t._v("H")]), t._v(" " + t._s(e.ohlc.high))]), t._v(" "), s("span", [s("label", [t._v("L")]), t._v(" " + t._s(e.ohlc.low))]), t._v(" "), s("span", [s("label", [t._v("C")]), t._v(" " + t._s(e.ohlc.close))])]), t._v(" "), s("li", [s("label", [t._v("Avg. price")]), t._v(" "), s("span", [t._v(t._s(e.average_price) + " ")])]), t._v(" "), s("li", [s("label", [t._v("LTT")]), t._v(" "), s("span", [t._v(t._s(e.last_trade_time) + " ")])]), t._v(" "), s("li", [s("label", [t._v("LTQ")]), t._v(" "), s("span", [t._v(t._s(e.last_quantity) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Net change")]), t._v(" "), s("span", [t._v(t._s(e.net_change) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Volume")]), t._v(" "), s("span", [t._v(t._s(e.volume) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Buy qty.")]), t._v(" "), s("span", [t._v(t._s(e.buy_quantity) + " ")])]), t._v(" "), s("li", [s("label", [t._v("Sell qty.")]), t._v(" "), s("span", [t._v(t._s(e.sell_quantity) + " ")])]), t._v(" "), s("li", [s("label", [t._v("OI")]), t._v(" "), s("span", [t._v(t._s(e.oi) + " ")])]), t._v(" "), s("li", [s("label", [t._v("OI day low")]), t._v(" "), s("span", [t._v(t._s(e.oi_day_low) + " ")])]), t._v(" "), s("li", [s("label", [t._v("OI day high")]), t._v(" "), s("span", [t._v(t._s(e.oi_day_high) + " ")])])])
                        }
                        )), 0) : t._e()]), t._v(" "), s("td", {
                            staticClass: "col-condition",
                            attrs: {
                                width: "25%"
                            }
                        }, [e.row.condition ? s("span", {
                            staticClass: "text-xsmall"
                        }, [t._v(t._s(e.row.condition))]) : s("span", {
                            staticClass: "dim"
                        }, [t._v("N/A")])])]
                    }
                }])
            }) : s("div", [t._v("\n\t\t\tNo triggers yet.\n\t\t")])], 1)])
        }
          , h = []
          , p = {
            mixins: [l["a"]],
            props: {
                alert: Object
            },
            data() {
                return {
                    tableHeaders: [{
                        label: "Timestamp",
                        field: "timestamp"
                    }, {
                        label: "Instrument(s)",
                        field: "instruments"
                    }, {
                        label: "Condition",
                        field: "condition"
                    }],
                    visibleItem: null,
                    history: []
                }
            },
            methods: {
                toggleHistory(t) {
                    this.visibleItem !== t.uuid ? this.visibleItem = t.uuid : this.visibleItem = null
                },
                onClose() {
                    this.$emit("close")
                },
                getAlertHistory(t) {
                    this.history = [],
                    this.fetchStatus = r["d"].API_STATUSES.fetching,
                    u["a"].getAlertHistory(t).then(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.success,
                        this.history = t.data.data
                    }
                    ).catch(t=>{
                        this.fetchError = Object(c["j"])(t),
                        this.fetchStatus = r["d"].API_STATUSES.error
                    }
                    )
                }
            },
            created() {
                this.getAlertHistory(this.$props.alert.uuid)
            }
        }
          , m = p
          , v = s("0c7c")
          , _ = Object(v["a"])(m, d, h, !1, null, null, null)
          , g = _.exports;
        const f = Object.freeze([{
            label: "Name",
            field: "name",
            sort: !0,
            search: !0
        }, {
            label: "Status",
            field: "status",
            sort: !0,
            search: !0
        }, {
            label: "Triggered",
            field: "alert_count",
            sort: !0,
            search: !0
        }, {
            label: "Created on",
            field: "created_at",
            sort: !0,
            search: !0
        }]);
        var b = {
            mixins: [l["a"]],
            inject: ["instrumentManager"],
            components: {
                "alert-history": g
            },
            data() {
                return {
                    alerts: null,
                    selectedAlerts: null,
                    histAlert: null,
                    fetchStatus: r["d"].API_STATUSES.initial,
                    actionStatus: r["d"].API_STATUSES.initial,
                    fetchError: null,
                    isHistoryOpen: !1,
                    formError: null,
                    contextMenu: null
                }
            },
            methods: {
                onShowContextMenu(t, e) {
                    e = e || "uid",
                    this.contextMenu = t[e]
                },
                onHideContextMenu() {
                    this.contextMenu = null
                },
                onNewForm(t) {
                    this.$events.emit(o["a"].EVENTS.ADD, t)
                },
                onEditForm(t) {
                    const e = {
                        uuid: t.uuid,
                        name: t.name,
                        lhsAttribute: t.lhs_attribute,
                        lhsInstrument: this.instrumentManager.get(t.lhs_tradingsymbol, null, t.lhs_exchange),
                        operator: t.operator,
                        rhsType: t.rhs_type,
                        rhsConstant: t.rhs_constant,
                        rhsAttribute: t.rhs_attribute
                    };
                    "instrument" === t.rhs_type && (e.rhsInstrument = this.instrumentManager.get(t.rhs_tradingsymbol, null, t.rhs_exchange)),
                    this.$events.emit(o["a"].EVENTS.UPDATE, e)
                },
                onDelete(t) {
                    this.$confirm({
                        description: `Delete '${t.name}'?`,
                        onOk: (e,s)=>{
                            this.deleteAlerts([t.uuid], e)
                        }
                    })
                },
                toggleHistory(t) {
                    this.isHistoryOpen = !this.isHistoryOpen,
                    this.isHistoryOpen ? this.histAlert = t : this.histAlert = null
                },
                makeFormula(t) {
                    let e = `${t.lhs_attribute}(${t.lhs_exchange}:${t.lhs_tradingsymbol}) ${t.operator} `;
                    return "instrument" === t.rhs_type ? e += `${t.rhs_attribute}(${t.rhs_exchange}:${t.rhs_tradingsymbol})` : e += "" + t.rhs_constant,
                    e
                },
                getAlerts() {
                    this.fetchStatus = r["d"].API_STATUSES.fetching,
                    u["a"].getAlerts().then(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.success,
                        this.alerts = t.data.data
                    }
                    ).catch(t=>{
                        this.fetchError = Object(c["j"])(t),
                        this.fetchStatus = r["d"].API_STATUSES.error
                    }
                    )
                },
                getAlertHistory(t) {
                    this.alertHistory = [],
                    this.fetchStatus = r["d"].API_STATUSES.fetching,
                    u["a"].getAlertHistory(t).then(t=>{
                        this.fetchStatus = r["d"].API_STATUSES.success,
                        this.alertHistory = t.data.data
                    }
                    ).catch(t=>{
                        this.fetchError = Object(c["j"])(t),
                        this.fetchStatus = r["d"].API_STATUSES.error
                    }
                    )
                },
                updateAlertStatus(t, e) {
                    u["a"].updateAlertStatus(t, e).then(t=>{
                        this.getAlerts()
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                },
                deleteAlerts(t, e) {
                    u["a"].deleteAlert(t).then(t=>{
                        e(),
                        this.getAlerts()
                    }
                    ).catch(t=>{
                        e(),
                        this.$toast.error({
                            title: "Error",
                            message: Object(c["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                },
                onRowSelect(t) {
                    this.selectedAlerts = t
                },
                onDeleteSelected() {
                    this.$confirm({
                        description: `Delete ${this.selectedAlerts.length} selected alerts?`,
                        onOk: (t,e)=>{
                            this.deleteAlerts(this.selectedAlerts.map(t=>t.uuid), t)
                        }
                    })
                }
            },
            computed: {
                ...Object(n["d"])(["isMobile"]),
                constraints() {
                    const t = this.fetchStatus === r["d"].API_STATUSES.fetching
                      , e = this.fetchStatus === r["d"].API_STATUSES.error;
                    return {
                        isLoading: t,
                        isError: e,
                        hasData: this.alerts && this.alerts.length > 0,
                        isEmpty: this.alerts && 0 === this.alerts.length,
                        hasErrorState: e && !this.alerts,
                        hasErrorIcon: e && this.alerts
                    }
                }
            },
            mounted() {
                if ("new" === this.$route.query.action && this.$route.query.exchange && this.$route.query.tradingsymbol) {
                    const t = this.$route.query.exchange
                      , e = this.$route.query.tradingsymbol
                      , s = this.instrumentManager.get(e, null, t);
                    this.onNewForm({
                        name: 0 !== s.exchangeToken ? `Alert for ${s.exchangeToken} (${t})` : "",
                        lhsAttribute: "LastTradedPrice",
                        lhsInstrument: 0 === s.exchangeToken ? null : s
                    })
                }
            },
            created() {
                this.tableHeaders = f,
                this.getAlerts(),
                this.$events.on(o["a"].EVENTS.CLOSE, this.getAlerts),
                this.$events.on("refetchData:alerts", this.getAlerts)
            },
            beforeDestroy() {
                this.$events.off(o["a"].EVENTS.CLOSE, this.getAlerts),
                this.$events.off("refetchData:alerts", this.getAlerts)
            }
        }
          , C = b
          , y = Object(v["a"])(C, i, a, !1, null, null, null);
        e["default"] = y.exports
    },
    ccd4: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        ));
        const i = "bulletin"
          , a = {
            NOTIFICATIONS_BAR: i + ".notifications.bar.message"
        };
        e["b"] = {
            NAMESPACE: i,
            EVENTS: a
        }
    },
    d4ff: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return c
        }
        ));
        var i = s("a026")
          , a = s("0d07")
          , n = s("5fb0")
          , r = s("025e")
          , o = s("b202");
        let l = !0;
        const c = "holdings"
          , u = {
            holdings: null,
            holdingsError: null,
            appHoldings: {},
            appHoldingsError: {},
            holdingsType: Object(o["b"])(c, "holdingsType") || "all",
            holdingsFetchStatus: n["b"].initial,
            appHoldingsFetchStatus: {}
        }
          , d = {
            holdingsType: t=>t.holdingsType,
            holdings: t=>t.holdings,
            holdingsError: t=>t.holdingsError,
            appHoldings: t=>t.appHoldings,
            appHoldingsError: t=>t.appHoldingsError,
            holdingsFetchStatus: t=>t.holdingsFetchStatus,
            appHoldingsFetchStatus: t=>t.appHoldingsFetchStatus,
            presentHoldings: t=>"all" === t.holdingsType ? {
                type: t.holdingsType,
                data: t.holdings,
                status: t.holdingsFetchStatus,
                error: t.holdingsError
            } : {
                type: t.holdingsType,
                data: t.appHoldings[t.holdingsType],
                status: t.appHoldingsFetchStatus[t.holdingsType],
                error: t.appHoldingsError[t.holdingsType]
            }
        }
          , h = {
            setHoldings(t, e) {
                t.holdings = e
            },
            setHoldingsError(t, e) {
                t.holdingsError = e
            },
            setAppHoldings(t, {type: e, holdings: s}) {
                i["a"].set(t.appHoldings, e, s || [])
            },
            setAppHoldingsError(t, {type: e, data: s}) {
                i["a"].set(t.appHoldingsError, e, s)
            },
            setHoldingsType(t, e) {
                t.holdingsType = e,
                Object(o["d"])(c, "holdingsType", e)
            },
            setHoldingsFetchStatus(t, e) {
                t.holdingsFetchStatus = e
            },
            setAppHoldingsFetchStatus(t, {type: e, status: s}) {
                i["a"].set(t.appHoldingsFetchStatus, e, s)
            }
        }
          , p = {
            fetchHoldings({commit: t, state: e}) {
                t("setHoldingsFetchStatus", n["b"].fetching);
                let s = a["a"].getHoldings();
                Object(r["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setHoldings",
                    error: "setHoldingsError",
                    status: "setHoldingsFetchStatus"
                })
            },
            fetchAppHoldings({commit: t, state: e}, s) {
                t("setAppHoldingsFetchStatus", {
                    type: s,
                    status: n["b"].fetching
                }),
                a["a"].getAppHoldings(s).then(e=>{
                    e && e.data && t("setAppHoldings", {
                        type: s,
                        holdings: e.data.data
                    }),
                    t("setAppHoldingsFetchStatus", {
                        type: s,
                        status: n["b"].success
                    })
                }
                ).catch(e=>{
                    t("setAppHoldingsFetchStatus", {
                        type: s,
                        status: n["b"].error
                    }),
                    t("setAppHoldingsError", {
                        type: s,
                        data: Object(r["j"])(e)
                    })
                }
                )
            }
        };
        e["a"] = {
            state: u,
            getters: d,
            mutations: h,
            actions: p,
            namespaced: l
        }
    },
    d627: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "profile"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [!t.isProfileFetchFailed || t.profile ? s("h3", {
                staticClass: "page-title small section-header"
            }, [t._v("\n\t\t\t\tProfile\n\n\t\t\t\t"), t._v(" "), t.isProfileFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.isProfileFetchFailed ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.profileError && t.profileError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1) : t._e()]), t._v(" "), s("div", {
                staticClass: "six columns text-right text-spaced text-xsmall"
            }, [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.$router.push({
                            name: "apps"
                        })
                    }
                }
            }, [t._v("Apps")]), t._v(" "), s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.gotoToPasswordEdit.apply(null, arguments)
                    }
                }
            }, [t._v("Password & Security")])])]), t._v(" "), t.isProfileFetchFailed && !t.profile ? s("error-state", {
                attrs: {
                    title: "Profile couldn't be loaded.",
                    error: t.profileError
                }
            }) : t._e(), t._v(" "), t.profile ? s("div", {
                staticClass: "header-details row"
            }, [s("div", {
                staticClass: "two columns"
            }, [s("div", {
                staticClass: "avatar-wrap"
            }, [t.profile.user_name ? s("su-avatar", {
                attrs: {
                    username: t.profile.user_name,
                    src: t.avatar,
                    size: 100
                }
            }) : t._e(), t._v(" "), t.isMobile ? t._e() : s("context-menu", [s("div", {
                staticClass: "context-menu-button",
                attrs: {
                    slot: "button"
                },
                slot: "button"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Change photo")])]), t._v(" "), s("template", {
                slot: "menu"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.uploadAvatar.apply(null, arguments)
                    }
                }
            }, [t._v("Upload")])]), t._v(" "), t.avatar ? s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.removeAvatar.apply(null, arguments)
                    }
                }
            }, [t._v("Remove")])]) : t._e()])], 2), t._v(" "), t.isMobile ? s("div", {
                staticClass: "update-avatar"
            }, [s("a", {
                staticClass: "context-menu-button",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showContextMenu.apply(null, arguments)
                    }
                }
            }, [t._v("Change photo")]), t._v(" "), t.contextMenu ? s("mobile-context-menu", {
                on: {
                    close: t.hideContextMenu
                }
            }, [s("template", {
                slot: "menu"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return t.uploadAvatar()
                    }
                }
            }, [t._v("Upload")])]), t._v(" "), t.avatar ? s("li", [s("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return t.removeAvatar()
                    }
                }
            }, [t._v("Remove")])]) : t._e()])], 2) : t._e()], 1) : t._e()], 1), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.showAvatarUpload ? s("vue-image-crop-upload", {
                attrs: {
                    field: "files",
                    "lang-type": "en",
                    width: 120,
                    height: 120,
                    headers: t.avatarHeaders,
                    url: "/api/user/avatar",
                    "img-format": "jpg/png"
                },
                on: {
                    "crop-success": t.avatarCropSuccess,
                    "crop-upload-success": t.avatarUploadSuccess,
                    "crop-upload-fail": t.avatarUploadFail
                },
                model: {
                    value: t.showAvatarUpload,
                    callback: function(e) {
                        t.showAvatarUpload = e
                    },
                    expression: "showAvatarUpload"
                }
            }) : t._e()], 1)], 1), t._v(" "), s("div", {
                staticClass: "ten columns"
            }, [s("h2", {
                staticClass: "full-name"
            }, [t._v(t._s(t.profile.user_name))]), t._v(" "), t.profile.login_time ? s("div", {
                staticClass: "last-login dim"
            }, [s("label", {
                staticClass: "col-label"
            }, [t._v("Last login:")]), t._v(" " + t._s(t.lastLoginDate(t.profile.login_time)))]) : t._e()])]) : t._e(), t._v(" "), t.profile && t.profile.user_id ? s("section", [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "seven columns"
            }, [s("h3", {
                staticClass: "page-title small section-header"
            }, [t._v("\n\t\t\t\t\tAccount\n\t\t\t\t\t"), s("span", {
                staticClass: "section-header-right profile-link-with-img"
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v(" "), s("a", {
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/profile?src=kiteweb"
                }
            }, [t._v("\n\t\t\t\t\t\t\tManage\n\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Support code")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [s("span", {
                staticClass: "value profile-link-with-img"
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v(" "), s("a", {
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/profile?src=kiteweb"
                }
            }, [t._v("\n\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t")])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("E-mail")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v(t._s(t.profile.email))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("PAN")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v(t._s(t.profile.pan))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Phone")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v(t._s(t.profile.phone))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Demat (BO)")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.profile.dp_ids ? s("span", {
                staticClass: "value dp-ids-list"
            }, t._l(t.profile.dp_ids, (function(e, i) {
                return s("span", {
                    key: i,
                    staticClass: "value"
                }, [s("a", {
                    staticClass: "value",
                    attrs: {
                        target: "_blank",
                        href: t.consoleURL + "/account/demat?src=kiteweb"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t\t\t\t")])])
            }
            )), 0) : t._e()])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Segments")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.profile.exchanges ? s("a", {
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/account/segment-activation?src=kiteweb"
                }
            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.profile.exchanges.join(", ")) + "\n\t\t\t\t\t\t")]) : s("span", {
                staticClass: "dim"
            }, [t._v("N/A")])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Demat authorisation")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, ["consent" === t.profile.meta.poa ? s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://support.zerodha.com/category/trading-and-markets/corporate-actions/general/articles/generate-cdsl-tpin"
                }
            }, [t._v("\n\t\t\t\t\t\t\teDIS\n\t\t\t\t\t\t")]) : "physical" === t.profile.meta.poa ? s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://support.zerodha.com/category/account-opening/offline-account-opening/oq-offline-accounts/articles/what-is-power-of-attorney-and-why-is-it-needed"
                }
            }, [t._v("\n\t\t\t\t\t\t\tPOA\n\t\t\t\t\t\t")]) : "ddpi" === t.profile.meta.poa ? s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://support.zerodha.com/category/account-opening/offline-account-opening/oq-offline-accounts/articles/demat-debit-and-pledge-instruction"
                }
            }, [t._v("\n\t\t\t\t\t\t\tDDPI\n\t\t\t\t\t\t")]) : s("span", [t._v("Unavailable")])])])]), t._v(" "), s("div", {
                staticClass: "five columns"
            }, [s("h3", {
                staticClass: "page-title small section-header"
            }, [t._v("\n\t\t\t\t\tBank accounts\n\n\t\t\t\t\t"), s("span", {
                staticClass: "section-header-right profile-link-with-img"
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v(" "), s("a", {
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/account/bank?src=kiteweb"
                }
            }, [t._v("\n\t\t\t\t\t\t\tManage\n\t\t\t\t\t\t")])])]), t._v(" "), t._l(t.profile.bank_accounts, (function(e, i) {
                return s("p", {
                    key: i,
                    staticClass: "row"
                }, [s("span", {
                    staticClass: "value"
                }, [t._v(t._s(e.account) + " "), s("span", {
                    staticClass: "text-light text-xxsmall"
                }, [t._v(t._s(e.name) + " "), e.branch ? [t._v("(" + t._s(e.branch) + ")")] : t._e()], 2)])])
            }
            ))], 2)])]) : t._e(), t._v(" "), s("section", {
                staticClass: "preferences"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "seven columns"
            }, [s("h3", {
                staticClass: "page-title small section-header"
            }, [t._v("Settings")]), t._v(" "), s("div", {
                staticClass: "row chart-prefs"
            }, [s("div", {
                staticClass: "five columns"
            }, [t._v("\n\t\t\t\t\t\tChart\n\t\t\t\t\t")]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("su-radio-group", {
                model: {
                    value: t.chartPref,
                    callback: function(e) {
                        t.chartPref = e
                    },
                    expression: "chartPref"
                }
            }, [s("su-radio", {
                attrs: {
                    name: "type",
                    value: t.chartTypeChartiq,
                    label: "ChartIQ"
                }
            }), s("br"), t._v(" "), s("su-radio", {
                attrs: {
                    name: "type",
                    value: t.chartTypeTradingview,
                    label: "TradingView v1.0"
                }
            }), s("br"), t._v(" "), s("su-radio", {
                attrs: {
                    name: "type",
                    value: t.chartTypeTradingviewBeta,
                    label: "TradingView v2.0 <span class='beta-tag'>Beta</span>"
                }
            })], 1)], 1)]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [t._v("\n\t\t\t\t\t\tTheme\n\t\t\t\t\t")]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("su-radio-group", {
                staticClass: "change-type",
                model: {
                    value: t.themePref,
                    callback: function(e) {
                        t.themePref = e
                    },
                    expression: "themePref"
                }
            }, [s("su-radio", {
                attrs: {
                    label: "Default",
                    value: t.themeDefault
                }
            }), t._v(" "), s("su-radio", {
                attrs: {
                    label: "Dark",
                    value: t.themeDark
                }
            })], 1)], 1)]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "large",
                    expression: "'large'"
                }],
                attrs: {
                    title: "Instant order update toasts after order placements."
                }
            }, [t._v("Instant order updates")])]), t._v(" "), s("div", {
                staticClass: "six columns order-update-toasts"
            }, [s("su-switch", {
                attrs: {
                    "state-on": "on",
                    "state-off": "off"
                },
                model: {
                    value: t.orderNotificationsPref,
                    callback: function(e) {
                        t.orderNotificationsPref = e
                    },
                    expression: "orderNotificationsPref"
                }
            })], 1)]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "five columns"
            }, [s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: "large",
                    expression: "'large'"
                }],
                attrs: {
                    title: "Don't automatically hide the order window after order placements."
                }
            }, [t._v("Sticky order window")])]), t._v(" "), s("div", {
                staticClass: "six columns order-update-toasts"
            }, [s("su-switch", {
                attrs: {
                    "state-on": "true",
                    "state-off": "false"
                },
                model: {
                    value: t.stickyOrderWindowPref,
                    callback: function(e) {
                        t.stickyOrderWindowPref = e
                    },
                    expression: "stickyOrderWindowPref"
                }
            })], 1)])]), t._v(" "), s("div", {
                staticClass: "five columns"
            }, [s("h3", {
                staticClass: "page-title small section-header"
            }, [t._v("\n\t\t\t\t\tSessions\n\t\t\t\t\t"), t.isAppSessionsFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.appSessions && t.appSessions.length > 0 ? s("a", {
                staticClass: "profile-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.showClearSessionConfirm.apply(null, arguments)
                    }
                }
            }, [t._v("Clear all")]) : t._e()], 1), t._v(" "), t.appSessions && t.appSessions.length > 0 ? s("ul", t._l(t.appSessions, (function(e, i) {
                return s("li", {
                    key: i,
                    staticClass: "row"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(e.name) + "\n\t\t\t\t\t")])
            }
            )), 0) : t._e(), t._v(" "), t.appSessions && 0 == t.appSessions.length ? s("div", [t._v("\n\t\t\t\t\tNo active appp sessions\n\t\t\t\t")]) : t._e()])])]), t._v(" "), t.showRemoveAvatarConfirm ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideRemoveAvatarConfirm,
                    expression: "hideRemoveAvatarConfirm"
                }],
                staticClass: "remove-avatar-confirm",
                on: {
                    close: t.hideRemoveAvatarConfirm
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Remove avatar")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("span", [t._v("Are you sure you want to remove your avatar?")])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.removeAvatarInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.apiRemoveAvatar.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Remove")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hideRemoveAvatarConfirm.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Cancel")])])], 1)]) : t._e(), t._v(" "), t.clearSessionConfirm ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideClearSessionConfirm,
                    expression: "hideClearSessionConfirm"
                }],
                staticClass: "clear-session-confirm",
                on: {
                    close: t.hideClearSessionConfirm
                }
            }, [s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Clear all session?")]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("span", [t._v("Are you sure you want to clear all your sessions? This will logout from here and other active sessions across apps.")])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    processing: t.clearSessionInProgress
                },
                nativeOn: {
                    click: function(e) {
                        return t.apiClearAppSessions.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Ok")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.hideClearSessionConfirm.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Cancel")])])], 1)]) : t._e()], 1)
        }
          , a = []
          , n = s("2f62")
          , r = s("598f")
          , o = s("d1de")
          , l = s("025e")
          , c = s("5665")
          , u = s("5fb0")
          , d = s("9285")
          , h = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.value,
                    expression: "value"
                }],
                staticClass: "vue-image-crop-upload"
            }, [s("div", {
                staticClass: "vicp-wrap"
            }, [s("div", {
                staticClass: "vicp-close",
                on: {
                    click: t.off
                }
            }, [s("i", {
                staticClass: "vicp-icon4"
            })]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.step,
                    expression: "step == 1"
                }],
                staticClass: "vicp-step1"
            }, [s("div", {
                staticClass: "vicp-drop-area",
                on: {
                    dragleave: t.preventDefault,
                    dragover: t.preventDefault,
                    dragenter: t.preventDefault,
                    click: t.handleClick,
                    drop: t.handleChange
                }
            }, [s("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 != t.loading,
                    expression: "loading != 1"
                }],
                staticClass: "vicp-icon1"
            }, [s("i", {
                staticClass: "vicp-icon1-arrow"
            }), t._v(" "), s("i", {
                staticClass: "vicp-icon1-body"
            }), t._v(" "), s("i", {
                staticClass: "vicp-icon1-bottom"
            })]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 !== t.loading,
                    expression: "loading !== 1"
                }],
                staticClass: "vicp-hint"
            }, [t._v(t._s(t.lang.hint))]), t._v(" "), s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isSupported,
                    expression: "!isSupported"
                }],
                staticClass: "vicp-no-supported-hint"
            }, [t._v(t._s(t.lang.noSupported))]), t._v(" "), 1 == t.step ? s("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                ref: "fileinput",
                attrs: {
                    type: "file"
                },
                on: {
                    change: t.handleChange
                }
            }) : t._e()]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasError,
                    expression: "hasError"
                }],
                staticClass: "vicp-error"
            }, [s("i", {
                staticClass: "vicp-icon2"
            }), t._v(" " + t._s(t.errorMsg) + "\r\n\t\t\t")]), t._v(" "), s("div", {
                staticClass: "vicp-operate"
            }, [s("a", {
                on: {
                    click: t.off,
                    mousedown: t.ripple
                }
            }, [t._v(t._s(t.lang.btn.off))])])]), t._v(" "), 2 == t.step ? s("div", {
                staticClass: "vicp-step2"
            }, [s("div", {
                staticClass: "vicp-crop"
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !0,
                    expression: "true"
                }],
                staticClass: "vicp-crop-left"
            }, [s("div", {
                staticClass: "vicp-img-container"
            }, [s("img", {
                ref: "img",
                staticClass: "vicp-img",
                style: t.sourceImgStyle,
                attrs: {
                    src: t.sourceImgUrl,
                    draggable: "false"
                },
                on: {
                    drag: t.preventDefault,
                    dragstart: t.preventDefault,
                    dragend: t.preventDefault,
                    dragleave: t.preventDefault,
                    dragover: t.preventDefault,
                    dragenter: t.preventDefault,
                    drop: t.preventDefault,
                    touchstart: t.imgStartMove,
                    touchmove: t.imgMove,
                    touchend: t.createImg,
                    touchcancel: t.createImg,
                    mousedown: t.imgStartMove,
                    mousemove: t.imgMove,
                    mouseup: t.createImg,
                    mouseout: t.createImg
                }
            }), t._v(" "), s("div", {
                staticClass: "vicp-img-shade vicp-img-shade-1",
                style: t.sourceImgShadeStyle
            }), t._v(" "), s("div", {
                staticClass: "vicp-img-shade vicp-img-shade-2",
                style: t.sourceImgShadeStyle
            })]), t._v(" "), s("div", {
                staticClass: "vicp-range"
            }, [s("input", {
                attrs: {
                    type: "range",
                    step: "1",
                    min: "0",
                    max: "100"
                },
                domProps: {
                    value: t.scale.range
                },
                on: {
                    mousemove: t.zoomChange
                }
            }), t._v(" "), s("i", {
                staticClass: "vicp-icon5",
                on: {
                    mousedown: t.startZoomSub,
                    mouseout: t.endZoomSub,
                    mouseup: t.endZoomSub
                }
            }), t._v(" "), s("i", {
                staticClass: "vicp-icon6",
                on: {
                    mousedown: t.startZoomAdd,
                    mouseout: t.endZoomAdd,
                    mouseup: t.endZoomAdd
                }
            })]), t._v(" "), t.noRotate ? t._e() : s("div", {
                staticClass: "vicp-rotate"
            }, [s("i", {
                on: {
                    click: t.rotateImg
                }
            }, [t._v("↻")])])]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !0,
                    expression: "true"
                }],
                staticClass: "vicp-crop-right"
            }, [s("div", {
                staticClass: "vicp-preview"
            }, [t.noSquare ? t._e() : s("div", {
                staticClass: "vicp-preview-item"
            }, [s("img", {
                style: t.previewStyle,
                attrs: {
                    src: t.createImgUrl
                }
            }), t._v(" "), s("span", [t._v(t._s(t.lang.preview))])]), t._v(" "), t.noCircle ? t._e() : s("div", {
                staticClass: "vicp-preview-item vicp-preview-item-circle"
            }, [s("img", {
                style: t.previewStyle,
                attrs: {
                    src: t.createImgUrl
                }
            }), t._v(" "), s("span", [t._v(t._s(t.lang.preview))])])])])]), t._v(" "), s("div", {
                staticClass: "vicp-operate"
            }, [s("a", {
                on: {
                    click: function(e) {
                        return t.setStep(1)
                    },
                    mousedown: t.ripple
                }
            }, [t._v(t._s(t.lang.btn.back))]), t._v(" "), s("a", {
                staticClass: "vicp-operate-btn",
                on: {
                    click: t.prepareUpload,
                    mousedown: t.ripple
                }
            }, [t._v(t._s(t.lang.btn.save))])])]) : t._e(), t._v(" "), 3 == t.step ? s("div", {
                staticClass: "vicp-step3"
            }, [s("div", {
                staticClass: "vicp-upload"
            }, [s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.loading,
                    expression: "loading === 1"
                }],
                staticClass: "vicp-loading"
            }, [t._v(t._s(t.lang.loading))]), t._v(" "), s("div", {
                staticClass: "vicp-progress-wrap"
            }, [s("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.loading,
                    expression: "loading === 1"
                }],
                staticClass: "vicp-progress",
                style: t.progressStyle
            })]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasError,
                    expression: "hasError"
                }],
                staticClass: "vicp-error"
            }, [s("i", {
                staticClass: "vicp-icon2"
            }), t._v(" " + t._s(t.errorMsg) + "\r\n\t\t\t\t")]), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 === t.loading,
                    expression: "loading === 2"
                }],
                staticClass: "vicp-success"
            }, [s("i", {
                staticClass: "vicp-icon3"
            }), t._v(" " + t._s(t.lang.success) + "\r\n\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "vicp-operate"
            }, [s("a", {
                on: {
                    click: function(e) {
                        return t.setStep(2)
                    },
                    mousedown: t.ripple
                }
            }, [t._v(t._s(t.lang.btn.back))]), t._v(" "), s("a", {
                on: {
                    click: t.off,
                    mousedown: t.ripple
                }
            }, [t._v(t._s(t.lang.btn.close))])])]) : t._e(), t._v(" "), s("canvas", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                ref: "canvas",
                attrs: {
                    width: t.width,
                    height: t.height
                }
            })])])
        }
          , p = []
          , m = {
            zh: {
                hint: "点击，或拖动图片至此处",
                loading: "正在上传……",
                noSupported: "浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",
                success: "上传成功",
                fail: "图片上传失败",
                preview: "头像预览",
                btn: {
                    off: "取消",
                    close: "关闭",
                    back: "上一步",
                    save: "保存"
                },
                error: {
                    onlyImg: "仅限图片格式",
                    outOfSize: "单文件大小不能超过 ",
                    lowestPx: "图片最低像素为（宽*高）："
                }
            },
            "zh-tw": {
                hint: "點擊，或拖動圖片至此處",
                loading: "正在上傳……",
                noSupported: "瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",
                success: "上傳成功",
                fail: "圖片上傳失敗",
                preview: "頭像預覽",
                btn: {
                    off: "取消",
                    close: "關閉",
                    back: "上一步",
                    save: "保存"
                },
                error: {
                    onlyImg: "僅限圖片格式",
                    outOfSize: "單文件大小不能超過 ",
                    lowestPx: "圖片最低像素為（寬*高）："
                }
            },
            en: {
                hint: "Click or drag the file here to upload",
                loading: "Uploading…",
                noSupported: "Browser is not supported, please use IE10+ or other browsers",
                success: "Upload success",
                fail: "Upload failed",
                preview: "Preview",
                btn: {
                    off: "Cancel",
                    close: "Close",
                    back: "Back",
                    save: "Save"
                },
                error: {
                    onlyImg: "Image only",
                    outOfSize: "Image exceeds size limit: ",
                    lowestPx: "Image's size is too low. Expected at least: "
                }
            },
            ro: {
                hint: "Atinge sau trage fișierul aici",
                loading: "Se încarcă",
                noSupported: "Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",
                success: "S-a încărcat cu succes",
                fail: "A apărut o problemă la încărcare",
                preview: "Previzualizează",
                btn: {
                    off: "Anulează",
                    close: "Închide",
                    back: "Înapoi",
                    save: "Salvează"
                },
                error: {
                    onlyImg: "Doar imagini",
                    outOfSize: "Imaginea depășește limita de: ",
                    loewstPx: "Imaginea este prea mică; Minim: "
                }
            },
            ru: {
                hint: "Нажмите, или перетащите файл в это окно",
                loading: "Загружаю……",
                noSupported: "Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",
                success: "Загрузка выполнена успешно",
                fail: "Ошибка загрузки",
                preview: "Предпросмотр",
                btn: {
                    off: "Отменить",
                    close: "Закрыть",
                    back: "Назад",
                    save: "Сохранить"
                },
                error: {
                    onlyImg: "Только изображения",
                    outOfSize: "Изображение превышает предельный размер: ",
                    lowestPx: "Минимальный размер изображения: "
                }
            },
            "pt-br": {
                hint: "Clique ou arraste o arquivo aqui para carregar",
                loading: "Carregando…",
                noSupported: "Browser não suportado, use o IE10+ ou outro browser",
                success: "Sucesso ao carregar imagem",
                fail: "Falha ao carregar imagem",
                preview: "Pré-visualizar",
                btn: {
                    off: "Cancelar",
                    close: "Fechar",
                    back: "Voltar",
                    save: "Salvar"
                },
                error: {
                    onlyImg: "Apenas imagens",
                    outOfSize: "A imagem excede o limite de tamanho: ",
                    lowestPx: "O tamanho da imagem é muito pequeno. Tamanho mínimo: "
                }
            },
            fr: {
                hint: "Cliquez ou glissez le fichier ici.",
                loading: "Téléchargement…",
                noSupported: "Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",
                success: "Téléchargement réussit",
                fail: "Téléchargement echoué",
                preview: "Aperçu",
                btn: {
                    off: "Annuler",
                    close: "Fermer",
                    back: "Retour",
                    save: "Enregistrer"
                },
                error: {
                    onlyImg: "Image uniquement",
                    outOfSize: "L'image sélectionnée dépasse la taille maximum: ",
                    lowestPx: "L'image sélectionnée est trop petite. Dimensions attendues: "
                }
            },
            nl: {
                hint: "Klik hier of sleep een afbeelding in dit vlak",
                loading: "Uploaden…",
                noSupported: "Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",
                success: "Upload succesvol",
                fail: "Upload mislukt",
                preview: "Voorbeeld",
                btn: {
                    off: "Annuleren",
                    close: "Sluiten",
                    back: "Terug",
                    save: "Opslaan"
                },
                error: {
                    onlyImg: "Alleen afbeeldingen",
                    outOfSize: "De afbeelding is groter dan: ",
                    lowestPx: "De afbeelding is te klein! Minimale afmetingen: "
                }
            },
            tr: {
                hint: "Tıkla veya yüklemek istediğini buraya sürükle",
                loading: "Yükleniyor…",
                noSupported: "Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",
                success: "Yükleme başarılı",
                fail: "Yüklemede hata oluştu",
                preview: "Önizle",
                btn: {
                    off: "İptal",
                    close: "Kapat",
                    back: "Geri",
                    save: "Kaydet"
                },
                error: {
                    onlyImg: "Sadece resim",
                    outOfSize: "Resim yükleme limitini aşıyor: ",
                    lowestPx: "Resmin boyutu çok küçük. En az olması gereken: "
                }
            },
            "es-MX": {
                hint: "Selecciona o arrastra una imagen",
                loading: "Subiendo...",
                noSupported: "Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",
                success: "Subido exitosamente",
                fail: "Sucedió un error",
                preview: "Vista previa",
                btn: {
                    off: "Cancelar",
                    close: "Cerrar",
                    back: "Atrás",
                    save: "Guardar"
                },
                error: {
                    onlyImg: "Únicamente imágenes",
                    outOfSize: "La imagen excede el tamaño maximo:",
                    lowestPx: "La imagen es demasiado pequeña. Se espera por lo menos:"
                }
            },
            de: {
                hint: "Klick hier oder zieh eine Datei hier rein zum Hochladen",
                loading: "Hochladen…",
                noSupported: "Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",
                success: "Upload erfolgreich",
                fail: "Upload fehlgeschlagen",
                preview: "Vorschau",
                btn: {
                    off: "Abbrechen",
                    close: "Schließen",
                    back: "Zurück",
                    save: "Speichern"
                },
                error: {
                    onlyImg: "Nur Bilder",
                    outOfSize: "Das Bild ist zu groß: ",
                    lowestPx: "Das Bild ist zu klein. Mindestens: "
                }
            },
            ja: {
                hint: "クリック・ドラッグしてファイルをアップロード",
                loading: "アップロード中...",
                noSupported: "このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",
                success: "アップロード成功",
                fail: "アップロード失敗",
                preview: "プレビュー",
                btn: {
                    off: "キャンセル",
                    close: "閉じる",
                    back: "戻る",
                    save: "保存"
                },
                error: {
                    onlyImg: "画像のみ",
                    outOfSize: "画像サイズが上限を超えています。上限: ",
                    lowestPx: "画像が小さすぎます。最小サイズ: "
                }
            },
            ua: {
                hint: "Натисніть, або перетягніть файл в це вікно",
                loading: "Завантажую……",
                noSupported: "Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",
                success: "Завантаження виконано успішно",
                fail: "Помилка завантаження",
                preview: "Попередній перегляд",
                btn: {
                    off: "Відмінити",
                    close: "Закрити",
                    back: "Назад",
                    save: "Зберегти"
                },
                error: {
                    onlyImg: "Тільки зображення",
                    outOfSize: "Зображення перевищує граничний розмір: ",
                    lowestPx: "Мінімальний розмір зображення: "
                }
            },
            it: {
                hint: "Clicca o trascina qui il file per caricarlo",
                loading: "Caricamento del file…",
                noSupported: "Browser non supportato, per favore usa IE10+ o un altro browser",
                success: "Caricamento completato",
                fail: "Caricamento fallito",
                preview: "Anteprima",
                btn: {
                    off: "Annulla",
                    close: "Chiudi",
                    back: "Indietro",
                    save: "Salva"
                },
                error: {
                    onlyImg: "Sono accettate solo immagini",
                    outOfSize: "L'immagine eccede i limiti di dimensione: ",
                    lowestPx: "L'immagine è troppo piccola. Il requisito minimo è: "
                }
            },
            ar: {
                hint: "اضغط أو اسحب الملف هنا للتحميل",
                loading: "جاري التحميل...",
                noSupported: "المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",
                success: "تم التحميل بنجاح",
                fail: "فشل التحميل",
                preview: "معاينه",
                btn: {
                    off: "إلغاء",
                    close: "إغلاق",
                    back: "رجوع",
                    save: "حفظ"
                },
                error: {
                    onlyImg: "صور فقط",
                    outOfSize: "تتجاوز الصوره الحجم المحدد: ",
                    lowestPx: "حجم الصورة صغير جدا. من المتوقع على الأقل: "
                }
            },
            ug: {
                hint: "مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",
                loading: "يوللىنىۋاتىدۇ...",
                noSupported: "تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",
                success: "غەلبىلىك بولدى",
                fail: "مەغلۇب بولدى",
                preview: "ئۈنۈم رەسىم",
                btn: {
                    off: "بولدى قىلىش",
                    close: "تاقاش",
                    back: "ئالدىنقى قەدەم",
                    save: "ساقلاش"
                },
                error: {
                    onlyImg: "پەقەت رەسىم فورماتىنىلا قوللايدۇ",
                    outOfSize: "رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",
                    lowestPx: "رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"
                }
            },
            th: {
                hint: "คลิ๊กหรือลากรูปมาที่นี่",
                loading: "กำลังอัพโหลด…",
                noSupported: "เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",
                success: "อัพโหลดสำเร็จ",
                fail: "อัพโหลดล้มเหลว",
                preview: "ตัวอย่าง",
                btn: {
                    off: "ยกเลิก",
                    close: "ปิด",
                    back: "กลับ",
                    save: "บันทึก"
                },
                error: {
                    onlyImg: "ไฟล์ภาพเท่านั้น",
                    outOfSize: "ไฟล์ใหญ่เกินกำหนด: ",
                    lowestPx: "ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "
                }
            },
            mm: {
                hint: "ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",
                loading: "တင်နေသည်…",
                noSupported: "ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",
                success: "ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",
                fail: "ဖိုင်တင်နေမှု မအောင်မြင်ပါ",
                preview: "အစမ်းကြည့်",
                btn: {
                    off: "မလုပ်တော့ပါ",
                    close: "ပိတ်မည်",
                    back: "နောက်သို့",
                    save: "သိမ်းမည်"
                },
                error: {
                    onlyImg: "ဓာတ်ပုံ သီးသန့်သာ",
                    outOfSize: "ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",
                    lowestPx: "ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "
                }
            },
            se: {
                hint: "Klicka eller dra en fil hit för att ladda upp den",
                loading: "Laddar upp…",
                noSupported: "Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",
                success: "Uppladdning lyckades",
                fail: "Uppladdning misslyckades",
                preview: "Förhandsgranska",
                btn: {
                    off: "Avbryt",
                    close: "Stäng",
                    back: "Tillbaka",
                    save: "Spara"
                },
                error: {
                    onlyImg: "Endast bilder",
                    outOfSize: "Bilden är större än max-gränsen: ",
                    lowestPx: "Bilden är för liten. Minimum är: "
                }
            }
        }
          , v = {
            jpg: "image/jpeg",
            png: "image/png",
            gif: "image/gif",
            svg: "image/svg+xml",
            psd: "image/photoshop"
        }
          , _ = function(t, e) {
            t = t.split(",")[1],
            t = window.atob(t);
            for (var s = new Uint8Array(t.length), i = 0; i < t.length; i++)
                s[i] = t.charCodeAt(i);
            return new Blob([s],{
                type: e
            })
        }
          , g = function(t, e) {
            var s = Object.assign({
                ele: t.target,
                type: "hit",
                bgc: "rgba(0, 0, 0, 0.15)"
            }, e)
              , i = s.ele;
            if (i) {
                var a = i.getBoundingClientRect()
                  , n = i.querySelector(".e-ripple");
                switch (n ? n.className = "e-ripple" : (n = document.createElement("span"),
                n.className = "e-ripple",
                n.style.height = n.style.width = Math.max(a.width, a.height) + "px",
                i.appendChild(n)),
                s.type) {
                case "center":
                    n.style.top = a.height / 2 - n.offsetHeight / 2 + "px",
                    n.style.left = a.width / 2 - n.offsetWidth / 2 + "px";
                    break;
                default:
                    n.style.top = t.pageY - a.top - n.offsetHeight / 2 - document.body.scrollTop + "px",
                    n.style.left = t.pageX - a.left - n.offsetWidth / 2 - document.body.scrollLeft + "px"
                }
                return n.style.backgroundColor = s.bgc,
                n.className = "e-ripple z-active",
                !1
            }
        }
          , f = {
            props: {
                field: {
                    type: String,
                    default: "avatar"
                },
                ki: {
                    default: 0
                },
                value: {
                    default: !0
                },
                url: {
                    type: String,
                    default: ""
                },
                params: {
                    type: Object,
                    default: null
                },
                headers: {
                    type: Object,
                    default: null
                },
                width: {
                    type: Number,
                    default: 200
                },
                height: {
                    type: Number,
                    default: 200
                },
                noRotate: {
                    type: Boolean,
                    default: !0
                },
                noCircle: {
                    type: Boolean,
                    default: !1
                },
                noSquare: {
                    type: Boolean,
                    default: !1
                },
                maxSize: {
                    type: Number,
                    default: 10240
                },
                langType: {
                    type: String,
                    default: "zh"
                },
                langExt: {
                    type: Object,
                    default: null
                },
                imgFormat: {
                    type: String,
                    default: "png"
                },
                imgBgc: {
                    type: String,
                    default: "#fff"
                },
                withCredentials: {
                    type: Boolean,
                    default: !1
                },
                method: {
                    type: String,
                    default: "POST"
                }
            },
            data() {
                let t = this
                  , {imgFormat: e, langType: s, langExt: i, width: a, height: n} = t
                  , r = !0
                  , o = ["jpg", "png"]
                  , l = -1 === o.indexOf(e) ? "jpg" : e
                  , c = m[s] ? m[s] : m["en"]
                  , u = v[l];
                return t.imgFormat = l,
                i && Object.assign(c, i),
                "function" != typeof FormData && (r = !1),
                {
                    mime: u,
                    lang: c,
                    isSupported: r,
                    isSupportTouch: document.hasOwnProperty("ontouchstart"),
                    step: 1,
                    loading: 0,
                    progress: 0,
                    hasError: !1,
                    errorMsg: "",
                    ratio: a / n,
                    sourceImg: null,
                    sourceImgUrl: "",
                    createImgUrl: "",
                    sourceImgMouseDown: {
                        on: !1,
                        mX: 0,
                        mY: 0,
                        x: 0,
                        y: 0
                    },
                    previewContainer: {
                        width: 100,
                        height: 100
                    },
                    sourceImgContainer: {
                        width: 240,
                        height: 184
                    },
                    scale: {
                        zoomAddOn: !1,
                        zoomSubOn: !1,
                        range: 1,
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        maxWidth: 0,
                        maxHeight: 0,
                        minWidth: 0,
                        minHeight: 0,
                        naturalWidth: 0,
                        naturalHeight: 0
                    }
                }
            },
            computed: {
                progressStyle() {
                    let {progress: t} = this;
                    return {
                        width: t + "%"
                    }
                },
                sourceImgStyle() {
                    let {scale: t, sourceImgMasking: e} = this
                      , s = t.y + e.y + "px"
                      , i = t.x + e.x + "px";
                    return {
                        top: s,
                        left: i,
                        width: t.width + "px",
                        height: t.height + "px"
                    }
                },
                sourceImgMasking() {
                    let {width: t, height: e, ratio: s, sourceImgContainer: i} = this
                      , a = i
                      , n = a.width / a.height
                      , r = 0
                      , o = 0
                      , l = a.width
                      , c = a.height
                      , u = 1;
                    return s < n && (u = a.height / e,
                    l = a.height * s,
                    r = (a.width - l) / 2),
                    s > n && (u = a.width / t,
                    c = a.width / s,
                    o = (a.height - c) / 2),
                    {
                        scale: u,
                        x: r,
                        y: o,
                        width: l,
                        height: c
                    }
                },
                sourceImgShadeStyle() {
                    let {sourceImgMasking: t, sourceImgContainer: e} = this
                      , s = e
                      , i = t
                      , a = i.width == s.width ? i.width : (s.width - i.width) / 2
                      , n = i.height == s.height ? i.height : (s.height - i.height) / 2;
                    return {
                        width: a + "px",
                        height: n + "px"
                    }
                },
                previewStyle() {
                    let {width: t, height: e, ratio: s, previewContainer: i} = this
                      , a = i
                      , n = a.width
                      , r = a.height
                      , o = n / r;
                    return s < o && (n = a.height * s),
                    s > o && (r = a.width / s),
                    {
                        width: n + "px",
                        height: r + "px"
                    }
                }
            },
            watch: {
                value(t) {
                    t && 1 != this.loading && this.reset()
                }
            },
            methods: {
                ripple(t) {
                    g(t)
                },
                off() {
                    setTimeout(()=>{
                        this.$emit("input", !1),
                        3 == this.step && 2 == this.loading && this.setStep(1)
                    }
                    , 200)
                },
                setStep(t) {
                    setTimeout(()=>{
                        this.step = t
                    }
                    , 200)
                },
                preventDefault(t) {
                    return t.preventDefault(),
                    !1
                },
                handleClick(t) {
                    1 !== this.loading && t.target !== this.$refs.fileinput && (t.preventDefault(),
                    document.activeElement !== this.$refs && this.$refs.fileinput.click())
                },
                handleChange(t) {
                    if (t.preventDefault(),
                    1 !== this.loading) {
                        let e = t.target.files || t.dataTransfer.files;
                        this.reset(),
                        this.checkFile(e[0]) && this.setSourceImg(e[0])
                    }
                },
                checkFile(t) {
                    let e = this
                      , {lang: s, maxSize: i} = e;
                    return -1 === t.type.indexOf("image") ? (e.hasError = !0,
                    e.errorMsg = s.error.onlyImg,
                    !1) : !(t.size / 1024 > i) || (e.hasError = !0,
                    e.errorMsg = s.error.outOfSize + i + "kb",
                    !1)
                },
                reset() {
                    let t = this;
                    t.loading = 0,
                    t.hasError = !1,
                    t.errorMsg = "",
                    t.progress = 0
                },
                setSourceImg(t) {
                    this.$emit("src-file-set", t.name, t.type, t.size);
                    let e = this
                      , s = new FileReader;
                    s.onload = function(t) {
                        e.sourceImgUrl = s.result,
                        e.startCrop()
                    }
                    ,
                    s.readAsDataURL(t)
                },
                startCrop() {
                    let t = this
                      , {width: e, height: s, ratio: i, scale: a, sourceImgUrl: n, sourceImgMasking: r, lang: o} = t
                      , l = r
                      , c = new Image;
                    c.src = n,
                    c.onload = function() {
                        let n = c.naturalWidth
                          , r = c.naturalHeight
                          , u = n / r
                          , d = l.width
                          , h = l.height
                          , p = 0
                          , m = 0;
                        if (n < e || r < s)
                            return t.hasError = !0,
                            t.errorMsg = o.error.lowestPx + e + "*" + s,
                            !1;
                        i > u && (h = d / u,
                        m = (l.height - h) / 2),
                        i < u && (d = h * u,
                        p = (l.width - d) / 2),
                        a.range = 0,
                        a.x = p,
                        a.y = m,
                        a.width = d,
                        a.height = h,
                        a.minWidth = d,
                        a.minHeight = h,
                        a.maxWidth = n * l.scale,
                        a.maxHeight = r * l.scale,
                        a.naturalWidth = n,
                        a.naturalHeight = r,
                        t.sourceImg = c,
                        t.createImg(),
                        t.setStep(2)
                    }
                },
                imgStartMove(t) {
                    if (t.preventDefault(),
                    this.isSupportTouch && !t.targetTouches)
                        return !1;
                    let e = t.targetTouches ? t.targetTouches[0] : t
                      , {sourceImgMouseDown: s, scale: i} = this
                      , a = s;
                    a.mX = e.screenX,
                    a.mY = e.screenY,
                    a.x = i.x,
                    a.y = i.y,
                    a.on = !0
                },
                imgMove(t) {
                    if (t.preventDefault(),
                    this.isSupportTouch && !t.targetTouches)
                        return !1;
                    let e = t.targetTouches ? t.targetTouches[0] : t
                      , {sourceImgMouseDown: {on: s, mX: i, mY: a, x: n, y: r}, scale: o, sourceImgMasking: l} = this
                      , c = l
                      , u = e.screenX
                      , d = e.screenY
                      , h = u - i
                      , p = d - a
                      , m = n + h
                      , v = r + p;
                    s && (m > 0 && (m = 0),
                    v > 0 && (v = 0),
                    m < c.width - o.width && (m = c.width - o.width),
                    v < c.height - o.height && (v = c.height - o.height),
                    o.x = m,
                    o.y = v)
                },
                rotateImg(t) {
                    let {sourceImg: e, scale: {naturalWidth: s, naturalHeight: i}} = this
                      , a = i
                      , n = s
                      , r = this.$refs.canvas
                      , o = r.getContext("2d");
                    r.width = a,
                    r.height = n,
                    o.clearRect(0, 0, a, n),
                    o.fillStyle = "rgba(0,0,0,0)",
                    o.fillRect(0, 0, a, n),
                    o.translate(a, 0),
                    o.rotate(90 * Math.PI / 180),
                    o.drawImage(e, 0, 0, s, i);
                    let l = r.toDataURL(v["png"]);
                    this.sourceImgUrl = l,
                    this.startCrop()
                },
                startZoomAdd(t) {
                    let e = this
                      , {scale: s} = e;
                    function i() {
                        if (s.zoomAddOn) {
                            let t = s.range >= 100 ? 100 : ++s.range;
                            e.zoomImg(t),
                            setTimeout((function() {
                                i()
                            }
                            ), 60)
                        }
                    }
                    s.zoomAddOn = !0,
                    i()
                },
                endZoomAdd(t) {
                    this.scale.zoomAddOn = !1
                },
                startZoomSub(t) {
                    let e = this
                      , {scale: s} = e;
                    function i() {
                        if (s.zoomSubOn) {
                            let t = s.range <= 0 ? 0 : --s.range;
                            e.zoomImg(t),
                            setTimeout((function() {
                                i()
                            }
                            ), 60)
                        }
                    }
                    s.zoomSubOn = !0,
                    i()
                },
                endZoomSub(t) {
                    let {scale: e} = this;
                    e.zoomSubOn = !1
                },
                zoomChange(t) {
                    this.zoomImg(t.target.value)
                },
                zoomImg(t) {
                    let e = this
                      , {sourceImgMasking: s, sourceImgMouseDown: i, scale: a} = this
                      , {maxWidth: n, maxHeight: r, minWidth: o, minHeight: l, width: c, height: u, x: d, y: h, range: p} = a
                      , m = s
                      , v = m.width
                      , _ = m.height
                      , g = o + (n - o) * t / 100
                      , f = l + (r - l) * t / 100
                      , b = v / 2 - g / c * (v / 2 - d)
                      , C = _ / 2 - f / u * (_ / 2 - h);
                    b > 0 && (b = 0),
                    C > 0 && (C = 0),
                    b < v - g && (b = v - g),
                    C < _ - f && (C = _ - f),
                    a.x = b,
                    a.y = C,
                    a.width = g,
                    a.height = f,
                    a.range = t,
                    setTimeout((function() {
                        a.range == t && e.createImg()
                    }
                    ), 300)
                },
                createImg(t) {
                    let e = this
                      , {imgFormat: s, imgBgc: i, mime: a, sourceImg: n, scale: {x: r, y: o, width: l, height: c}, sourceImgMasking: {scale: u}} = e
                      , d = e.$refs.canvas
                      , h = d.getContext("2d");
                    t && (e.sourceImgMouseDown.on = !1),
                    d.width = e.width,
                    d.height = e.height,
                    h.clearRect(0, 0, e.width, e.height),
                    h.fillStyle = "png" == s ? "rgba(0,0,0,0)" : i,
                    h.fillRect(0, 0, e.width, e.height),
                    h.drawImage(n, r / u, o / u, l / u, c / u),
                    e.createImgUrl = d.toDataURL(a)
                },
                prepareUpload() {
                    let {url: t, createImgUrl: e, field: s, ki: i} = this;
                    this.$emit("crop-success", e, s, i),
                    "string" == typeof t && t ? this.upload() : this.off()
                },
                upload() {
                    let t = this
                      , {lang: e, imgFormat: s, mime: i, url: a, params: n, headers: r, field: o, ki: l, createImgUrl: c, withCredentials: u, method: d} = this
                      , h = new FormData;
                    h.append(o, _(c, i), o + "." + s),
                    "object" == typeof n && n && Object.keys(n).forEach(t=>{
                        h.append(t, n[t])
                    }
                    );
                    const p = function(e) {
                        e.lengthComputable && (t.progress = 100 * Math.round(e.loaded) / e.total)
                    };
                    t.reset(),
                    t.loading = 1,
                    t.setStep(3),
                    new Promise((function(t, e) {
                        let s = new XMLHttpRequest;
                        s.open(d, a, !0),
                        s.withCredentials = u,
                        s.onreadystatechange = function() {
                            4 === this.readyState && (200 === this.status || 201 === this.status ? t(JSON.parse(this.responseText)) : e(this.status))
                        }
                        ,
                        s.upload.addEventListener("progress", p, !1),
                        "object" == typeof r && r && Object.keys(r).forEach(t=>{
                            s.setRequestHeader(t, r[t])
                        }
                        ),
                        s.send(h)
                    }
                    )).then((function(e) {
                        t.value && (t.loading = 2,
                        t.$emit("crop-upload-success", e, o, l))
                    }
                    ), (function(s) {
                        t.value && (t.loading = 3,
                        t.hasError = !0,
                        t.errorMsg = e.fail,
                        t.$emit("crop-upload-fail", s, o, l))
                    }
                    ))
                }
            },
            created() {
                document.addEventListener("keyup", t=>{
                    !this.value || "Escape" != t.key && 27 != t.keyCode || this.off()
                }
                )
            }
        }
          , b = f
          , C = (s("2133"),
        s("0c7c"))
          , y = Object(C["a"])(b, h, p, !1, null, null, null)
          , w = y.exports
          , T = {
            mixins: [w],
            methods: {
                off() {
                    this.$emit("input", !1),
                    3 === this.step && 2 === this.loading && this.setStep(1)
                },
                setStep(t) {
                    this.step = t
                }
            }
        }
          , k = s("9946")
          , x = s("9c9e");
        const E = o["b"];
        var S = {
            mixins: [x["a"]],
            components: {
                "vue-image-crop-upload": T,
                "custom-router-link": k["a"]
            },
            inject: ["publicToken"],
            data() {
                return {
                    contextMenu: !1,
                    showAvatarUpload: !1,
                    removeAvatarInProgress: !1,
                    showRemoveAvatarConfirm: !1,
                    clearSessionConfirm: !1,
                    clearSessionInProgress: !1
                }
            },
            beforeCreate() {
                this.chartTypeChartiq = d["a"],
                this.chartTypeTradingview = d["c"],
                this.chartTypeTradingviewBeta = d["d"],
                this.themeDefault = "default",
                this.themeDark = "dark"
            },
            created() {
                this.consoleURL = "https://console.zerodha.com",
                this.fetchProfile(),
                this.fetchAppSessions(),
                this.preProcess(),
                this.$events.on("refetchData:profile", this.fetchAll)
            },
            beforeDestroy() {
                this.postProcess(),
                this.$events.off("refetchData:profile", this.fetchAll)
            },
            activated() {
                this.preProcess()
            },
            deactivated() {
                this.postProcess()
            },
            computed: {
                ...Object(n["d"])(["isMobile", "theme"]),
                ...Object(n["d"])(E, ["profile", "profileError", "profileFetchStatus", "userName", "userAvatar", "appSessions", "appSessionsError", "appSessionsFetchStatus", "preferences"]),
                isProfileFetching() {
                    return this.profileFetchStatus === u["b"].fetching
                },
                isProfileFetchFailed() {
                    return this.profileFetchStatus === u["b"].error
                },
                isAppSessionsFetching() {
                    return this.appSessionsFetchStatus === u["b"].fetching
                },
                isAppSessionsFailed() {
                    return this.appSessionsFetchStatus === u["b"].error
                },
                avatar() {
                    return this.newAvatarUrl ? this.newAvatarUrl : this.userAvatar ? this.userAvatar : ""
                },
                avatarHeaders() {
                    return {
                        "X-CSRFTOKEN": this.publicToken
                    }
                },
                orderNotificationsPref: {
                    get() {
                        return this.preferences && this.preferences.order_update_web ? this.preferences.order_update_web : "on"
                    },
                    set(t) {
                        this.updatePreference({
                            key: "order_update_web",
                            value: t
                        }),
                        this.updatePreferenceAPI("order_update_web", t)
                    }
                },
                chartPref: {
                    get() {
                        return this.preferences && this.preferences.chart_type ? this.preferences.chart_type : d["a"]
                    },
                    set(t) {
                        this.updatePreference({
                            key: "chart_type",
                            value: t
                        }),
                        this.updatePreferenceAPI("chart_type", t)
                    }
                },
                themePref: {
                    get() {
                        return this.theme
                    },
                    set(t) {
                        this.setTheme(t),
                        this.updatePreferenceAPI("theme_web", t, !0)
                    }
                },
                stickyOrderWindowPref: {
                    get() {
                        return this.preferences && this.preferences.sticky_orderwindow ? this.preferences.sticky_orderwindow : "false"
                    },
                    set(t) {
                        this.updatePreference({
                            key: "sticky_orderwindow",
                            value: t
                        }),
                        this.updatePreferenceAPI("sticky_orderwindow", t)
                    }
                }
            },
            methods: {
                ...Object(n["e"])(["setTheme"]),
                ...Object(n["c"])(E, ["fetchProfile", "fetchAppSessions"]),
                ...Object(n["e"])(E, ["setUserAvatar", "updatePreference"]),
                preProcess() {},
                postProcess() {},
                gotoToPasswordEdit() {
                    this.$router.push(c["b"].editProfile)
                },
                fetchAll() {
                    this.fetchProfile(),
                    this.fetchAppSessions()
                },
                lastLoginDate(t) {
                    let e = new Date(t)
                      , s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                      , i = e.getDate()
                      , a = e.getMonth()
                      , n = e.getFullYear();
                    return i + " " + s[a] + " " + n + t.slice(10)
                },
                apiRemoveAvatar() {
                    this.removeAvatarInProgress = !0,
                    r["a"].deleteAvatar().then(t=>{
                        this.removeAvatarInProgress = !1,
                        this.hideRemoveAvatarConfirm(),
                        this.setUserAvatar(""),
                        this.$toast.success({
                            title: "Deleted",
                            message: "Profile picture has been deleted",
                            orientation: this.$toast.TOP_RIGHT
                        })
                    }
                    ).catch(()=>{
                        this.removeAvatarInProgress = !1,
                        this.$toast.error({
                            title: "Error",
                            message: "Error deleting profile picture. Please try again",
                            orientation: this.$toast.TOP_RIGHT
                        })
                    }
                    )
                },
                showAvatarUploadPopup() {
                    this.showAvatarUpload = !0,
                    window.addEventListener("click", this.handleWindowClick)
                },
                hideAvatarUploadPopup() {
                    this.showAvatarUpload = !1,
                    window.removeEventListener("click", this.handleWindowClick)
                },
                uploadAvatar() {
                    this.showAvatarUploadPopup()
                },
                removeAvatar() {
                    this.showRemoveAvatarConfirm = !0
                },
                avatarCropSuccess(t, e) {},
                avatarUploadSuccess(t) {
                    t && t.data && this.setUserAvatar(t.data),
                    this.hideAvatarUploadPopup()
                },
                avatarUploadFail() {},
                hideRemoveAvatarConfirm() {
                    this.showRemoveAvatarConfirm = !1
                },
                handleWindowClick(t) {
                    t.target === this.$el.querySelector(".vue-image-crop-upload") && this.hideAvatarUploadPopup()
                },
                showContextMenu() {
                    this.contextMenu = !0
                },
                hideContextMenu() {
                    this.contextMenu = !1
                },
                showClearSessionConfirm() {
                    this.clearSessionConfirm = !0
                },
                hideClearSessionConfirm() {
                    this.clearSessionConfirm = !1
                },
                apiClearAppSessions() {
                    this.clearSessionInProgress = !0;
                    let t = {
                        all: !0
                    };
                    r["a"].clearAppSessions(t).then(t=>{
                        this.clearSessionInProgress = !1,
                        this.hideClearSessionConfirm(),
                        this.$toast.success({
                            title: "Done",
                            message: "Sessions has been cleared successfully",
                            orientation: this.$toast.BOTTOM_RIGHT
                        }),
                        window.location.href = "/logout"
                    }
                    ).catch(()=>{
                        this.clearSessionInProgress = !1,
                        this.hideClearSessionConfirm(),
                        this.$toast.error({
                            title: "Error",
                            message: "Error clearing session. Please try again",
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                },
                updatePreferenceAPI(t, e, s) {
                    let i = {
                        key: t,
                        value: e
                    };
                    r["a"].updatePreferences(i).then(()=>{
                        s && window.location.reload()
                    }
                    ).catch(t=>{
                        let e = Object(l["j"])(t);
                        this.$toast.error({
                            title: "Error",
                            message: "Error updating preference: " + e.message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    )
                }
            }
        }
          , P = S
          , A = Object(C["a"])(P, i, a, !1, null, null, null);
        e["default"] = A.exports
    },
    d7b6: function(t, e, s) {
        "use strict";
        s("4c8a")
    },
    e2ac: function(t, e, s) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "dropdown"
                }
            }, [s("div", {
                staticClass: "mobile-context-menu",
                attrs: {
                    id: "mobile-context-menu-" + t._uid
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.close.apply(null, arguments)
                    }
                }
            }, [s("ul", {
                staticClass: "mobile-context-menu-list list-flat"
            }, [t._t("menu")], 2)])])
        }
          , a = []
          , n = {
            name: "context-menu",
            props: {},
            data() {
                return {}
            },
            deactivated() {},
            methods: {
                close() {
                    this.$emit("close")
                }
            }
        }
          , r = n
          , o = s("0c7c")
          , l = Object(o["a"])(r, i, a, !1, null, null, null);
        e["a"] = l.exports
    },
    e71a: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "auctions"
            }, [s("section", {
                staticClass: "table-wrapper"
            }, [s("page-header", {
                attrs: {
                    title: "Auctions",
                    "empty-image": "images/illustrations/alert.svg",
                    state: t.store
                },
                scopedSlots: t._u([{
                    key: "empty-message",
                    fn: function() {
                        return [s("p", [t._v("There are no stocks for auctions yet."), s("br"), t._v("\n\t\t\t\tThe auction market opens at 2 PM. Stocks eligible to be sold in the auction will be listed here. "), s("a", {
                            attrs: {
                                target: "_blank",
                                href: "https://zrd.sh/auction-queries"
                            }
                        }, [t._v("Read more.")])])]
                    },
                    proxy: !0
                }])
            }), t._v(" "), t.store.data && t.store.data.length > 0 ? s("su-table", {
                staticClass: "auctions-table fold-header",
                attrs: {
                    data: t.store.data,
                    headers: t.tableHeaders,
                    uid: "tradingsymbol",
                    sort: "",
                    search: ""
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "instrument",
                            attrs: {
                                width: "20%"
                            }
                        }, [s("div", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.tradingsymbol) + "\n\n\t\t\t\t\t\t"), s("span", {
                            staticClass: "actions"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "Sell (S)"
                            }
                        }, [s("su-button", {
                            staticClass: "button-orange button-xsmall sell",
                            attrs: {
                                type: "button"
                            },
                            nativeOn: {
                                click: function(s) {
                                    return t.onSell(e.row)
                                }
                            }
                        }, [t._v("S")])], 1)])])]), t._v(" "), s("td", {
                            staticClass: "right",
                            attrs: {
                                width: "15%"
                            }
                        }, [t._v("\n\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "right",
                            attrs: {
                                width: "15%"
                            }
                        }, [t.getLastPrice(e.row) ? s("span", [t._v(t._s(t._f("inrFormat")(t.getLastPrice(e.row), 2, !0)))]) : s("span", [t._v("–")])]), t._v(" "), s("td", {
                            staticClass: "right",
                            attrs: {
                                width: "15%"
                            }
                        }, [e.row.average_price ? s("span", [t._v(t._s(t._f("inrFormat")(e.row.average_price, 2, !0)))]) : s("span", [t._v("–")])]), t._v(" "), s("td", {
                            staticClass: "right",
                            attrs: {
                                width: "15%"
                            }
                        }, [e.row.average_price ? s("span", {
                            staticClass: "value",
                            class: {
                                "text-green": e.row.pnl > 0,
                                "text-red": e.row.pnl < 0
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("inrFormat")(e.row.pnl, 2, !0)) + "\n\t\t\t\t\t")]) : s("span", [t._v("–")])]), t._v(" "), s("td", {
                            staticClass: "text-light right",
                            attrs: {
                                width: "15%"
                            }
                        }, [t._v("\n\t\t\t\t\t#" + t._s(e.row.auction_number) + "\n\t\t\t\t")])]
                    }
                }], null, !1, 2865507885)
            }) : t._e()], 1)])
        }
          , a = []
          , n = s("2f62")
          , r = s("5fb0");
        const o = {
            ADD: "auctions.add",
            REMOVE: "auctions.remove",
            CLEAR: "auctions.clear",
            SHOW: "auctions.show",
            COMPLETE: "auctions.complete",
            CREATE: "auctions.advanced.do.create",
            MODIFY: "auctions.advanced.do.modify",
            DELETE: "auctions.advanced.do.delete",
            DO_MINIMIZE: "auctions.advanced.do.minimize",
            REFETCH: "refetchData:auctions",
            ON_CLOSE: "auctions.advanced.on.close",
            ON_CREATE: "auctions.advanced.on.create",
            ON_DELETE: "auctions.advanced.on.delete",
            ON_MODIFY: "auctions.advanced.on.modify",
            ON_FINISH: "auctions.advanced.on.finish",
            ON_CLEAR: "auctions.advanced.on.clear"
        };
        var l = {
            EVENTS: o
        }
          , c = s("d9d2")
          , u = s("9c9e")
          , d = s("39e3")
          , h = s("365c")
          , p = s("b7d9")
          , m = s("5665");
        const v = "auctions"
          , _ = Object(p["b"])()
          , g = t=>Object(h["a"])(()=>h["b"].get(Object(m["a"])("auctions.all")), {
            commit: !0,
            toast: !1,
            hook: e=>{
                let s = [];
                for (let i of e)
                    s.push({
                        ...i,
                        instrument: t.get(i.tradingsymbol, null, i.exchange)
                    });
                return s
            }
        }, _)();
        var f = {
            mixins: [u["a"]],
            inject: ["ticker", "instrumentManager"],
            created() {
                this.store = _,
                this.tableHeaders = Object.freeze([{
                    label: "Instrument",
                    field: "tradingsymbol",
                    sort: !0,
                    search: !0
                }, {
                    label: "Eligible qty.",
                    field: "quantity",
                    sort: !0,
                    class: "right"
                }, {
                    label: "Last price",
                    field: "average_price",
                    sort: !0,
                    class: "right",
                    sortMethod: this.getLastPrice
                }, {
                    label: "Holding price",
                    field: "average_price",
                    sort: !0,
                    class: "right"
                }, {
                    label: "Holding P&L",
                    field: "pnl",
                    sort: !0,
                    class: "right"
                }, {
                    label: "Auction no.",
                    field: "auction_numer",
                    class: "right",
                    sort: !1
                }]),
                this.$events.on(l.EVENTS.CLOSE, this.getAuctions),
                this.$events.on(l.EVENTS.REFETCH, this.getAuctions)
            },
            mounted() {
                this.getAuctions()
            },
            beforeDestroy() {
                this.$events.off(l.EVENTS.CLOSE, this.getAuctions),
                this.$events.off(l.EVENTS.REFETCH, this.getAuctions),
                this.unsubscribeTicks()
            },
            deactivated() {
                this.unsubscribeTicks()
            },
            computed: {
                ...Object(n["d"])(d["b"], ["ticks"])
            },
            methods: {
                onSell(t) {
                    let e = {
                        ...this.instrumentManager.get(t.tradingsymbol, null, t.exchange)
                    };
                    e.instrumentToken = t.instrument_token,
                    e.auctionNumber = t.auction_number;
                    const s = {
                        instrument: e,
                        instrumentToken: e.instrument_token,
                        transactionType: c["b"].TRANSACTION_TYPE.SELL,
                        auctionNumber: t.auction_number,
                        variety: c["b"].VARIETY.AUCTION,
                        product: c["b"].PRODUCT.CNC,
                        orderType: c["b"].ORDER_TYPE.LIMIT,
                        quantity: t.quantity,
                        disablePrefs: !0
                    };
                    this.$events.emit(r["d"].EVENTS.showMarketDepthWidget, {
                        instrument: e,
                        order: s,
                        hideMeta: !0
                    })
                },
                getAuctions() {
                    const {api: t} = g(this.instrumentManager);
                    t.then(()=>{
                        this.subscribeTicks()
                    }
                    )
                },
                getLastPrice(t) {
                    return this.ticks && t.instrument && t.instrument.instrumentToken && this.ticks[t.instrument.instrumentToken] && this.ticks[t.instrument.instrumentToken].lastPrice
                },
                subscribeTicks() {
                    if (!this.store.data)
                        return;
                    let t = [];
                    for (let e of this.store.data)
                        e.instrument && e.instrument.instrumentToken && t.push(e.instrument.instrumentToken);
                    this.ticker.subscribe(t, v),
                    this.ticker.setMode(this.ticker.modeLTP, t, v)
                },
                unsubscribeTicks() {
                    if (!this.store.data)
                        return;
                    let t = [];
                    for (let e of this.store.data)
                        e.instrument && e.instrument.instrumentToken && t.push(e.instrument.instrumentToken);
                    this.ticker.unsubscribe(t, v)
                }
            }
        }
          , b = f
          , C = s("0c7c")
          , y = Object(C["a"])(b, i, a, !1, null, null, null);
        e["default"] = y.exports
    },
    e7ec: function(t, e, s) {
        /*!
 * Vddl.js v0.5.3
 * (c) 2017 Hejx
 * Released under the MIT License.
 * https://github.com/hejianxian/vddl#readme
 */
        (function(e, i) {
            t.exports = i(s("c641"))
        }
        )(0, (function(t) {
            t = "default"in t ? t["default"] : t;
            var e = {
                render: function() {
                    var t = this
                      , e = t.$createElement
                      , s = t._self._c || e;
                    return s("div", {
                        staticClass: "vddl-draggable"
                    }, [t._t("default")], 2)
                },
                staticRenderFns: [],
                name: "vddl-draggable",
                props: {
                    draggable: [Object, Array],
                    wrapper: Array,
                    index: Number,
                    effectAllowed: String,
                    type: String,
                    disableIf: Boolean,
                    dragstart: Function,
                    selected: Function,
                    dragend: Function,
                    moved: Function,
                    copied: Function,
                    canceled: Function
                },
                data: function() {
                    return {}
                },
                computed: {},
                methods: {
                    handleDragstart: function(t) {
                        var e = this
                          , s = JSON.stringify(this.draggable);
                        if ("false" == s || this.disableIf)
                            return !0;
                        t.dataTransfer.setData("Text", s),
                        t.dataTransfer.effectAllowed = this.effectAllowed || "move",
                        this.$el.className = this.$el.className.trim() + " vddl-dragging",
                        setTimeout((function() {
                            e.$el.className = e.$el.className.trim() + " vddl-dragging-source"
                        }
                        ), 0),
                        this.vddlDropEffectWorkaround.dropEffect = "none",
                        this.vddlDragTypeWorkaround.isDragging = !0,
                        this.vddlDragTypeWorkaround.dragType = this.type || void 0,
                        t._dndHandle && t.dataTransfer.setDragImage && t.dataTransfer.setDragImage(this.$el, t._dndHandleLeft, t._dndHandleTop),
                        "function" === typeof this.dragstart && this.dragstart.call(this, t.target),
                        t.stopPropagation()
                    },
                    handleDragend: function(t) {
                        var e = this
                          , s = this.vddlDropEffectWorkaround.dropEffect;
                        switch (s) {
                        case "move":
                            "function" === typeof this.moved ? this.moved(this.index, t.target) : this.wrapper.splice(this.index, 1);
                            break;
                        case "copy":
                            "function" === typeof this.copied && this.copied(this.draggable, t.target);
                            break;
                        case "none":
                            "function" === typeof this.canceled && this.canceled(t.target);
                            break
                        }
                        "function" === typeof this.dragend && this.dragend(s, t.target),
                        this.$el.className = this.$el.className.replace("vddl-dragging", "").trim(),
                        setTimeout((function() {
                            e.$el && (e.$el.className = e.$el.className.replace("vddl-dragging-source", "").trim())
                        }
                        ), 0),
                        this.vddlDragTypeWorkaround.isDragging = !1,
                        t.stopPropagation()
                    },
                    handleClick: function(t) {
                        this.selected && ("function" === typeof this.selected && this.selected(this.wrapper[this.index], t.target),
                        t.stopPropagation())
                    },
                    handleSelected: function() {
                        return this.dragDrop && this.dragDrop(),
                        !1
                    },
                    init: function() {
                        var t = !0;
                        this.disableIf && (t = !1),
                        this.$el.setAttribute("draggable", t),
                        this.$el.addEventListener("dragstart", this.handleDragstart, !1),
                        this.$el.addEventListener("dragend", this.handleDragend, !1),
                        this.$el.addEventListener("click", this.handleClick, !1),
                        this.$el.addEventListener("selectstart", this.handleSelected, !1)
                    }
                },
                watch: {
                    disableIf: function(t) {
                        this.$el.setAttribute("draggable", !t)
                    }
                },
                ready: function() {
                    this.init()
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.$el.removeEventListener("dragstart", this.handleDragstart, !1),
                    this.$el.removeEventListener("dragend", this.handleDragend, !1),
                    this.$el.removeEventListener("click", this.handleClick, !1),
                    this.$el.removeEventListener("selectstart", this.handleSelected, !1)
                }
            }
              , s = {
                render: function() {
                    var t = this
                      , e = t.$createElement
                      , s = t._self._c || e;
                    return s("div", {
                        staticClass: "vddl-list"
                    }, [t._t("default")], 2)
                },
                staticRenderFns: [],
                name: "vddl-list",
                props: {
                    list: Array,
                    allowedTypes: Array,
                    disableIf: Boolean,
                    horizontal: Boolean,
                    externalSources: Boolean,
                    dragover: Function,
                    inserted: Function,
                    drop: Function
                },
                data: function() {
                    return {}
                },
                computed: {},
                methods: {
                    handleDragenter: function(t) {
                        if (!this.isDropAllowed(t))
                            return !0;
                        t.preventDefault()
                    },
                    handleDragover: function(t) {
                        var e = this;
                        if (!this.isDropAllowed(t))
                            return !0;
                        if (this.placeholderNode.parentNode != this.listNode && this.listNode.appendChild(this.placeholderNode),
                        t.target !== this.listNode) {
                            var s = t.target;
                            while (s.parentNode !== this.listNode && s.parentNode)
                                s = s.parentNode;
                            s.parentNode === this.listNode && s !== this.placeholderNode && (this.isMouseInFirstHalf(t, s) ? this.listNode.insertBefore(this.placeholderNode, s) : this.listNode.insertBefore(this.placeholderNode, s.nextSibling))
                        } else if (this.isMouseInFirstHalf(t, this.placeholderNode, !0))
                            while (this.placeholderNode.previousElementSibling && (this.isMouseInFirstHalf(t, this.placeholderNode.previousElementSibling, !0) || 0 === this.placeholderNode.previousElementSibling.offsetHeight))
                                e.listNode.insertBefore(e.placeholderNode, e.placeholderNode.previousElementSibling);
                        else
                            while (this.placeholderNode.nextElementSibling && !this.isMouseInFirstHalf(t, this.placeholderNode.nextElementSibling, !0))
                                e.listNode.insertBefore(e.placeholderNode, e.placeholderNode.nextElementSibling.nextElementSibling);
                        return this.dragover && !this.invokeCallback("dragover", t, this.getPlaceholderIndex()) ? this.stopDragover(t) : (this.$el.className.indexOf("vddl-dragover") < 0 && (this.$el.className = this.$el.className.trim() + " vddl-dragover"),
                        t.preventDefault(),
                        t.stopPropagation(),
                        !1)
                    },
                    handleDrop: function(t) {
                        if (!this.isDropAllowed(t))
                            return !0;
                        t.preventDefault();
                        var e, s = t.dataTransfer.getData("Text") || t.dataTransfer.getData("text/plain");
                        try {
                            e = JSON.parse(s)
                        } catch (a) {
                            return this.stopDragover()
                        }
                        var i = this.getPlaceholderIndex();
                        return this.drop && (e = this.invokeCallback("drop", t, i, e),
                        !e) ? this.stopDragover() : (!0 !== e && this.list.splice(i, 0, e),
                        this.invokeCallback("inserted", t, i, e),
                        "none" === t.dataTransfer.dropEffect ? "copy" === t.dataTransfer.effectAllowed || "move" === t.dataTransfer.effectAllowed ? this.vddlDropEffectWorkaround.dropEffect = t.dataTransfer.effectAllowed : this.vddlDropEffectWorkaround.dropEffect = t.ctrlKey ? "copy" : "move" : this.vddlDropEffectWorkaround.dropEffect = t.dataTransfer.dropEffect,
                        this.stopDragover(),
                        t.stopPropagation(),
                        !1)
                    },
                    handleDragleave: function(t) {
                        var e = this;
                        this.$el.className = this.$el.className.replace("vddl-dragover", "").trim(),
                        setTimeout((function() {
                            e.$el.className.indexOf("vddl-dragover") < 0 && e.placeholderNode.parentNode && e.placeholderNode.parentNode.removeChild(e.placeholderNode)
                        }
                        ), 100)
                    },
                    isMouseInFirstHalf: function(t, e, s) {
                        var i = this.horizontal ? t.offsetX || t.layerX : t.offsetY || t.layerY
                          , a = this.horizontal ? e.offsetWidth : e.offsetHeight
                          , n = this.horizontal ? e.offsetLeft : e.offsetTop;
                        return n = s ? n : 0,
                        i < n + a / 2
                    },
                    getPlaceholderElement: function() {
                        var t, e = this.$el.parentNode.querySelectorAll(".vddl-placeholder");
                        if (e.length > 0)
                            return t = e[0],
                            t;
                        var s = document.createElement("div");
                        return s.setAttribute("class", "vddl-placeholder"),
                        s
                    },
                    getPlaceholderIndex: function() {
                        return Array.prototype.indexOf.call(this.listNode.children, this.placeholderNode)
                    },
                    isDropAllowed: function(t) {
                        if (!this.vddlDragTypeWorkaround.isDragging && !this.externalSources)
                            return !1;
                        if (!this.hasTextMimetype(t.dataTransfer.types))
                            return !1;
                        if (this.allowedTypes && this.vddlDragTypeWorkaround.isDragging) {
                            var e = this.allowedTypes;
                            if (Array.isArray(e) && -1 === e.indexOf(this.vddlDragTypeWorkaround.dragType))
                                return !1
                        }
                        return !this.disableIf
                    },
                    stopDragover: function() {
                        return this.placeholderNode.parentNode && this.placeholderNode.parentNode.removeChild(this.placeholderNode),
                        this.$el.className = this.$el.className.replace("vddl-dragover", "").trim(),
                        !0
                    },
                    invokeCallback: function(t, e, s, i) {
                        var a = this[t];
                        return a && a({
                            event: e,
                            index: s,
                            item: i || void 0,
                            external: !this.vddlDragTypeWorkaround.isDragging,
                            type: this.vddlDragTypeWorkaround.isDragging ? this.vddlDragTypeWorkaround.dragType : void 0
                        }),
                        !!a
                    },
                    hasTextMimetype: function(t) {
                        if (!t)
                            return !0;
                        for (var e = 0; e < t.length; e += 1)
                            if ("Text" === t[e] || "text/plain" === t[e])
                                return !0;
                        return !1
                    },
                    init: function() {
                        this.placeholderNode = this.getPlaceholderElement(),
                        this.listNode = this.$el,
                        this.placeholderNode.parentNode && this.placeholderNode.parentNode.removeChild(this.placeholderNode),
                        this.$el.addEventListener("dragenter", this.handleDragenter, !1),
                        this.$el.addEventListener("dragover", this.handleDragover, !1),
                        this.$el.addEventListener("drop", this.handleDrop, !1),
                        this.$el.addEventListener("dragleave", this.handleDragleave, !1)
                    }
                },
                ready: function() {
                    this.init()
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.$el.removeEventListener("dragenter", this.handleDragenter, !1),
                    this.$el.removeEventListener("dragover", this.handleDragover, !1),
                    this.$el.removeEventListener("drop", this.handleDrop, !1),
                    this.$el.removeEventListener("dragleave", this.handleDragleave, !1)
                }
            }
              , i = {
                render: function() {
                    var t = this
                      , e = t.$createElement
                      , s = t._self._c || e;
                    return s("div", {
                        staticClass: "vddl-handle"
                    }, [t._t("default")], 2)
                },
                staticRenderFns: [],
                name: "vddl-handle",
                props: {
                    handleLeft: Number,
                    handleTop: Number
                },
                data: function() {
                    return {}
                },
                computed: {},
                methods: {
                    handle: function(t) {
                        t._dndHandle = !0,
                        t._dndHandleLeft = this.handleLeft || 0,
                        t._dndHandleTop = this.handleTop || 0
                    },
                    init: function() {
                        this.$el.setAttribute("draggable", !0),
                        this.$el.addEventListener("dragstart", this.handle, !1),
                        this.$el.addEventListener("dragend", this.handle, !1)
                    }
                },
                ready: function() {
                    this.init()
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.$el.removeEventListener("dragstart", this.handle, !1),
                    this.$el.removeEventListener("dragend", this.handle, !1)
                }
            }
              , a = {
                render: function() {
                    var t = this
                      , e = t.$createElement
                      , s = t._self._c || e;
                    return s("div", {
                        staticClass: "vddl-nodrag"
                    }, [t._t("default")], 2)
                },
                staticRenderFns: [],
                name: "vddl-nodrag",
                props: {},
                data: function() {
                    return {}
                },
                computed: {},
                methods: {
                    handleDragstart: function(t) {
                        t._dndHandle || (t.dataTransfer.types && t.dataTransfer.types.length || t.preventDefault(),
                        t.stopPropagation())
                    },
                    handleDragend: function(t) {
                        t._dndHandle || t.stopPropagation()
                    },
                    init: function() {
                        this.$el.setAttribute("draggable", !0),
                        this.$el.addEventListener("dragstart", this.handleDragstart, !1),
                        this.$el.addEventListener("dragend", this.handleDragend, !1)
                    }
                },
                ready: function() {
                    this.init()
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.$el.removeEventListener("dragstart", this.handleDragstart, !1),
                    this.$el.removeEventListener("dragend", this.handleDragend, !1)
                }
            }
              , n = {
                render: function() {
                    var t = this
                      , e = t.$createElement
                      , s = t._self._c || e;
                    return s("div", {
                        staticClass: "vddl-placeholder"
                    }, [t._t("default")], 2)
                },
                staticRenderFns: [],
                name: "vddl-placeholder"
            }
              , r = {
                Draggable: e,
                List: s,
                Handle: i,
                Nodrag: a,
                Placeholder: n
            }
              , o = {
                install: function(e) {
                    e.prototype.vddlDropEffectWorkaround = {},
                    e.prototype.vddlDragTypeWorkaround = {},
                    t(r, (function(t) {
                        e.component(t.name, t)
                    }
                    ))
                }
            };
            return o
        }
        ))
    },
    e90e: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return u
        }
        ));
        var i = s("a026")
          , a = s("53a8")
          , n = s("5fb0")
          , r = s("5a9e")
          , o = s("025e")
          , l = s("b202");
        let c = !0;
        const u = r["a"]
          , d = {
            queue: [],
            baskets: null,
            basketsFetchError: null,
            basketsFetchStatus: n["b"].initial,
            basketsState: Object(l["b"])(u, "basketsState") || null
        }
          , h = {
            queue: t=>t.queue,
            baskets: t=>t.baskets,
            basketsFetchError: t=>t.basketsFetchError,
            basketsFetchStatus: t=>t.basketsFetchStatus,
            allBasketsState: t=>t.basketsState,
            basketState: t=>e=>t.basketsState && t.basketsState[e],
            basketItemState: t=>(e,s)=>t.basketsState && t.basketsState[e] && t.basketsState[e][s]
        };
        let p = (t,e,s)=>{
            let i = -1;
            for (let a = 0; a < d.queue.length; a++) {
                let t = d.queue[a];
                if ((!e || e === t.basket) && t.id === s)
                    return i
            }
            return i
        }
          , m = t=>{
            let e = {};
            for (let s of t)
                e[s.id] = s;
            return e
        }
        ;
        const v = {
            add(t, e) {
                for (let s of t.queue)
                    if (s.id === e.id && s.type === e.type)
                        return;
                t.queue.push(e)
            },
            clear(t, e) {
                if (!e)
                    return void (t.queue = []);
                let s = [];
                for (let i = 0; i < t.queue.length; i++) {
                    let a = t.queue[i];
                    a.basket === e && s.push(i)
                }
                for (let i = s.length - 1; i >= 0; i--)
                    t.queue.splice(i, 1)
            },
            remove(t, {basket: e, id: s}) {
                let i = p(t.queue, e, s);
                i > -1 && t.queue.splice(i, 1)
            },
            setBaskets(t, e) {
                t.baskets = e
            },
            setBasketsFetchError(t, e) {
                t.basketsFetchError = e
            },
            setBasketsFetchStatus(t, e) {
                t.basketsFetchStatus = e
            },
            setAllBasketsState(t, e) {
                let s = {};
                for (let i of e)
                    s[i.id] = m(i.items);
                t.basketsState = s,
                Object(l["d"])(u, "basketsState", s, null, Object(o["l"])())
            },
            setBasketState(t, {id: e, items: s}) {
                t.basketsState || (t.basketsState = {}),
                i["a"].set(t.basketsState, e, m(s)),
                Object(l["d"])(u, "basketsState", t.basketsState, null, Object(o["l"])())
            },
            resetBasketState(t, e) {
                t.basketsState && i["a"].set(t.basketsState, e, null),
                Object(l["d"])(u, "basketsState", t.basketsState)
            },
            setBasketItemState(t, {id: e, item: s}) {
                t.basketsState || (t.basketsState = {}),
                t.basketsState[e] ? i["a"].set(t.basketsState[e], s.id, s) : i["a"].set(t.basketsState, e, m([s])),
                Object(l["d"])(u, "basketsState", t.basketsState, null, Object(o["l"])())
            },
            resetBasketItemState(t, {basketID: e, itemID: s}) {
                t.basketsState && t.basketsState[e] && t.basketsState[e][s] && i["a"].delete(t.basketsState[e], s),
                Object(l["d"])(u, "basketsState", t.basketsState, null, Object(o["l"])())
            }
        }
          , _ = {
            fetchBaskets({commit: t, state: e}) {
                t("setBasketsFetchStatus", n["b"].fetching);
                let s = a["a"].getBaskets();
                Object(o["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setBaskets",
                    error: "setBasketsFetchError",
                    status: "setBasketsFetchStatus"
                })
            }
        };
        e["a"] = {
            state: d,
            getters: h,
            mutations: v,
            actions: _,
            namespaced: c
        }
    },
    eaf6: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "ipo-list"
            }, [s("div", {
                staticClass: "ipo-instruments"
            }, [t.instrumentsConstraints.hasErrorState ? s("error-state", {
                attrs: {
                    title: "Instruments couldn't be loaded.",
                    error: t.instrumentsError
                }
            }) : t._e(), t._v(" "), t.instrumentsConstraints.isEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/ipo-list.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("There are no active IPOs.")]), t._v(" "), s("a", {
                staticClass: "button button-blue",
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/ipo/#ipo"
                }
            }, [t._v("View upcoming IPOs")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.instrumentsConstraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.instrumentsConstraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.instrumentsError && t.instrumentsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.instrumentsConstraints.isEmpty || t.instrumentsConstraints.hasErrorState ? t._e() : s("section", {
                staticClass: "table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(0), t._v(" "), t.instrumentsConstraints.hasData ? s("span", [t._v("(" + t._s(t.activeInstrumentsCount) + ")")]) : t._e(), t._v(" "), t.instrumentsConstraints.hasErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.instrumentsError && t.instrumentsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.instrumentsConstraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.instrumentsFormatted && !t.isMobile ? s("su-table", {
                staticClass: "instruments-table fold-header",
                attrs: {
                    data: t.instrumentsFormatted,
                    headers: t.instrumentsTableHeaders,
                    uid: "uuid",
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowClick: t.toggleInstrumentsInfo
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-symbol"
                        }, [s("div", {
                            staticClass: "symbol-wrap"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.symbol) + "\n\t\t\t\t\t\t\t"), s("div", {
                            staticClass: "name text-xsmall text-light"
                        }, [t._v(t._s(e.row.name))])]), t._v(" "), s("div", {
                            class: {
                                drawer: !0,
                                open: t.instrumentsInfoID === e.row.id
                            }
                        }, [t.instrumentsInfoID === e.row.id ? s("span", {
                            staticClass: "icon icon-chevron-up text-xxsmall"
                        }) : s("span", {
                            staticClass: "icon icon-chevron-down text-xxsmall"
                        })])]), t._v(" "), s("td", [s("span", {
                            domProps: {
                                innerHTML: t._s(t.ipoDateRange(e.row.start_at, e.row.end_at))
                            }
                        })]), t._v(" "), s("td", {
                            staticClass: "right right-border"
                        }, [e.row.selectedCategory ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.selectedCategory.min_price) + " - " + t._s(e.row.selectedCategory.max_price) + "\n\t\t\t\t\t\t")]) : s("span", {
                            staticClass: "text-light"
                        }, [t._v("\n\t\t\t\t\t\t\tN/A\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "right"
                        }, [e.row.selectedCategory ? s("div", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.selectedCategory.min_price * e.row.min_qty) + "\n\t\t\t\t\t\t\t"), s("div", {
                            staticClass: "text-xxsmall text-light"
                        }, [t._v(t._s(e.row.min_qty) + " Qty.")])]) : s("div", {
                            staticClass: "text-light"
                        }, [t._v("\n\t\t\t\t\t\t\tN/A\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "col-status right"
                        }, [t.isInstrumentActive(e.row.status) || t.isInstrumentPreapplyActive(e.row.status) ? 1 === e.row.investor_types.length ? s("span", [-1 === e.row.appliedCategories.indexOf(e.row.investor_types[0].code) ? s("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "apply-button button button-small button-blue",
                            attrs: {
                                href: "#",
                                title: "Apply as " + e.row.investor_types[0].description
                            },
                            on: {
                                click: function(s) {
                                    s.stopPropagation(),
                                    s.preventDefault(),
                                    t.onHideContextMenu("instruments", e.row, "id"),
                                    t.createApplication(e.row, e.row.investor_types[0])
                                }
                            }
                        }, [t.isInstrumentActive(e.row.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\tApply\n\t\t\t\t\t\t\t\t")]) : t.isInstrumentPreapplyActive(e.row.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\tPre-apply\n\t\t\t\t\t\t\t\t")]) : t._e()]) : s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "text-label green applied-status",
                            attrs: {
                                title: "Applied as " + e.row.investor_types[0].description
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\tApplied\n\t\t\t\t\t\t\t")])]) : s("span", [s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [s("context-menu", {
                            staticClass: "category-selector",
                            attrs: {
                                "margin-top": 11
                            }
                        }, [s("span", {
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button"
                            },
                            slot: "button"
                        }, [s("a", {
                            staticClass: "apply-button button button-small button-blue",
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.onShowContextMenu("instruments", e.row, "id")
                                }
                            }
                        }, [t.isInstrumentActive(e.row.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tApply\n\t\t\t\t\t\t\t\t\t\t\t")]) : t.isInstrumentPreapplyActive(e.row.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPre-apply\n\t\t\t\t\t\t\t\t\t\t\t")]) : t._e()])]), t._v(" "), s("template", {
                            slot: "menu"
                        }, t._l(e.row.investor_types, (function(i, a) {
                            return s("li", {
                                key: a.code,
                                attrs: {
                                    label: i.description,
                                    value: i
                                }
                            }, [-1 !== e.row.appliedCategories.indexOf(i.code) ? s("a", {
                                staticClass: "applied text-light",
                                attrs: {
                                    href: "#"
                                },
                                on: {
                                    click: function(t) {
                                        t.stopPropagation(),
                                        t.preventDefault()
                                    }
                                }
                            }, [s("span", {
                                staticClass: "icon icon-user"
                            }), t._v(" "), s("span", {
                                staticClass: "description"
                            }, [t._v(t._s(i.description))]), t._v(" "), s("span", {
                                staticClass: "text-label green text-xsmall applied-tag"
                            }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tApplied\n\t\t\t\t\t\t\t\t\t\t\t\t")])]) : s("a", {
                                class: {
                                    applied: -1 !== e.row.appliedCategories.indexOf(i.code)
                                },
                                attrs: {
                                    href: "#"
                                },
                                on: {
                                    click: function(s) {
                                        s.stopPropagation(),
                                        s.preventDefault(),
                                        t.onHideContextMenu("instruments", e.row, "id"),
                                        t.createApplication(e.row, i)
                                    }
                                }
                            }, [s("span", {
                                staticClass: "icon icon-user"
                            }), t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + t._s(i.description) + "\n\t\t\t\t\t\t\t\t\t\t\t")])])
                        }
                        )), 0)], 2)], 1)], 1) : s("span", {
                            staticClass: "status-tag text-label caps"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.status) + "\n\t\t\t\t\t\t")])])]
                    }
                }, {
                    key: "after-row",
                    fn: function(e) {
                        return [s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.instrumentsInfoID === e.row.id ? s("tr", {
                            staticClass: "instrument-info-row"
                        }, [s("td", {
                            attrs: {
                                colspan: "5"
                            }
                        }, [s("su-stepper", {
                            attrs: {
                                steps: t.instrumentSteps(e.row)
                            },
                            scopedSlots: t._u([{
                                key: "name",
                                fn: function(e) {
                                    return s("div", {}, [s("div", {
                                        staticClass: "text-center text-xsmall"
                                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(e.step.name) + "\n\t\t\t\t\t\t\t\t\t\t"), e.step.infoLink ? s("a", {
                                        attrs: {
                                            href: e.step.infoLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        }
                                    }, [s("span", {
                                        staticClass: "icon icon-info"
                                    })]) : t._e()]), t._v(" "), s("div", {
                                        staticClass: "text-xsmall text-light text-center"
                                    }, [t._v(t._s(e.step.date))])])
                                }
                            }], null, !0)
                        })], 1)]) : t._e()])]
                    }
                }], null, !1, 2143343340)
            }, [t._v(" "), t._v(" "), s("tr", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("td", {
                staticClass: "text-center text-xsmall",
                attrs: {
                    colspan: "5"
                }
            }, [s("a", {
                ref: "viewupcoming",
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/ipo/#ipo"
                }
            }, [t._v("Don't see an IPO here? View upcoming →")])])])]) : t.isMobile ? s("div", {
                staticClass: "instruments-list-responsive"
            }, [t._l(t.instrumentsFormatted, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "item"
                }, [s("div", [s("div", {
                    staticClass: "item-row",
                    on: {
                        click: function(s) {
                            return t.toggleInstrumentsInfo({
                                row: e
                            })
                        }
                    }
                }, [s("div", {
                    staticClass: "col-left"
                }, [s("div", {
                    staticClass: "symbol"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.symbol) + " "), s("div", {
                    staticClass: "name text-xsmall text-light"
                }, [t._v(t._s(e.name))])]), t._v(" "), s("div", {
                    staticClass: "date",
                    domProps: {
                        innerHTML: t._s(t.ipoDateRange(e.start_at, e.end_at))
                    }
                })]), t._v(" "), s("div", {
                    staticClass: "col-right"
                }, [e.selectedCategory ? s("div", {
                    staticClass: "price"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t₹" + t._s(e.selectedCategory.min_price) + " - ₹" + t._s(e.selectedCategory.max_price) + "\n\t\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), e.selectedCategory ? s("div", {
                    staticClass: "min-qty"
                }, [s("div", {
                    staticClass: "text-xxsmall text-light"
                }, [t._v("Lot size: " + t._s(e.min_qty))])]) : t._e(), t._v(" "), s("div", {
                    staticClass: "action"
                }, [t.isInstrumentActive(e.status) || t.isInstrumentPreapplyActive(e.status) ? s("su-button", {
                    staticClass: "button-blue button-small",
                    nativeOn: {
                        click: function(s) {
                            return t.onShowContextMenu("instruments", e, "id")
                        }
                    }
                }, [t.isInstrumentActive(e.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t\t\tApply\n\t\t\t\t\t\t\t\t\t\t")]) : t.isInstrumentPreapplyActive(e.status) ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t\t\tPre-apply\n\t\t\t\t\t\t\t\t\t\t")]) : t._e()]) : s("span", {
                    staticClass: "status-tag text-label caps"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(e.status) + "\n\t\t\t\t\t\t\t\t\t")])], 1)])]), t._v(" "), t.instrumentsInfoID === e.id ? s("su-stepper", {
                    staticClass: "mobile-stepper",
                    attrs: {
                        steps: t.instrumentSteps(e),
                        vertical: ""
                    },
                    scopedSlots: t._u([{
                        key: "name",
                        fn: function(e) {
                            return s("div", {}, [s("div", {
                                staticClass: "text-xsmall"
                            }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.step.name) + "\n\t\t\t\t\t\t\t\t\t"), e.step.infoLink ? s("a", {
                                attrs: {
                                    href: e.step.infoLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }
                            }, [s("span", {
                                staticClass: "icon icon-info"
                            })]) : t._e()]), t._v(" "), s("div", {
                                staticClass: "text-xsmall text-light"
                            }, [t._v(t._s(e.step.date))])])
                        }
                    }], null, !0)
                }) : t._e()], 1), t._v(" "), t.contextMenu && t.contextMenu.instruments && t.contextMenu.instruments === e.id ? s("mobile-context-menu", {
                    on: {
                        close: function(s) {
                            return t.onHideContextMenu("instruments", e)
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, t._l(e.investor_types, (function(i, a) {
                    return s("li", {
                        key: a.code,
                        attrs: {
                            label: i.description,
                            value: i
                        }
                    }, [-1 !== e.appliedCategories.indexOf(i.code) ? s("a", {
                        staticClass: "applied text-light",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                t.stopPropagation(),
                                t.preventDefault()
                            }
                        }
                    }, [s("span", {
                        staticClass: "icon icon-user"
                    }), t._v(" "), s("span", {
                        staticClass: "description"
                    }, [t._v(t._s(i.description))]), t._v(" "), s("span", {
                        staticClass: "text-label green text-xsmall applied-tag"
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\tApplied\n\t\t\t\t\t\t\t\t\t")])]) : s("a", {
                        class: {
                            applied: -1 !== e.appliedCategories.indexOf(i.code)
                        },
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(s) {
                                s.stopPropagation(),
                                s.preventDefault(),
                                t.onHideContextMenu("instruments", e, "id"),
                                t.createApplication(e, i)
                            }
                        }
                    }, [s("span", {
                        staticClass: "icon icon-user"
                    }), t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(i.description) + "\n\t\t\t\t\t\t\t\t")])])
                }
                )), 0)], 2) : t._e()], 1)
            }
            )), t._v(" "), s("div", {
                staticClass: "footer text-center text-xsmall"
            }, [s("a", {
                attrs: {
                    target: "_blank",
                    href: "https://zerodha.com/ipo/#ipo"
                }
            }, [s("span", {
                staticClass: "icon icon-chevron-down"
            }), t._v(" View upcoming IPOs")])])], 2) : t._e()], 1)], 1), t._v(" "), s("div", {
                staticClass: "ipo-applications"
            }, [t.applicationsConstraints.hasErrorState ? s("error-state", {
                attrs: {
                    title: "Applications couldn't be loaded.",
                    error: t.applicationsError
                }
            }) : t._e(), t._v(" "), t.applicationsConstraints.isEmpty && !t.instrumentsConstraints.isEmpty ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/ipo-applications.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("There are no active IPO applications.")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.applicationsConstraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.applicationsConstraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.applicationsError && t.applicationsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)]) : t._e(), t._v(" "), t.applicationsConstraints.isEmpty || t.applicationsConstraints.hasErrorState ? t._e() : s("section", {
                staticClass: "table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._m(1), t._v(" "), t.applicationsConstraints.hasData ? s("span", [t._v("(" + t._s(t.applications.length) + ")")]) : t._e(), t._v(" "), t.applicationsConstraints.hasErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.instrumentsError && t.instrumentsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle text-red"
            })]) : t._e(), t._v(" "), t.applicationsConstraints.isLoading ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.applications && !t.isMobile ? s("su-table", {
                staticClass: "applications-table fold-header",
                attrs: {
                    data: t.applicationsFormatted,
                    headers: t.applicationsTableHeaders,
                    uid: "id",
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function(e) {
                        return !t.isMobile && t.onShowContextMenu("applications", e.row, "id")
                    },
                    rowLeave: function(e) {
                        return !t.isMobile && t.onHideContextMenu("applications", e.row)
                    },
                    rowClick: function(e) {
                        return t.onShowContextMenu("applications", e.row, "id")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", {
                            staticClass: "col-symbol"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.symbol) + "\n\t\t\t\t\t\t"), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [!t.isMobile && t.contextMenu && t.contextMenu["applications"] === e.row.id ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [t.isApplicationMutable(e.row) ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.modifyApplication(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Modify\n\t\t\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), t.isApplicationCancellable(e.row) ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.cancelApplication(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Cancel\n\t\t\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.showApplicationInfo(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Info\n\t\t\t\t\t\t\t\t\t\t")])])])], 2) : t._e()], 1)], 1), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(t.getCategoryDescription(e.row) || e.row.investor_type) + "\n\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t" + t._s(e.row.created_at.slice(0, 10)) + "\n\t\t\t\t\t")]), t._v(" "), s("td", [e.row.allotment_quantity ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.allotment_quantity) + " (" + t._s(e.row.allotment_rate) + ")\n\t\t\t\t\t\t")]) : s("span", {
                            staticClass: "text-light"
                        }, [t._v("\n\t\t\t\t\t\t\tN/A\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "col-status right"
                        }, [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(s) {
                                    return s.preventDefault(),
                                    t.showApplicationInfo(e.row)
                                }
                            }
                        }, [s("span", {
                            class: ["text-label", "caps"].concat(t.applicationStatusClasses(e.row.status))
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.status) + "\n\t\t\t\t\t\t\t")])])])]
                    }
                }], null, !1, 305805925)
            }) : t.isMobile ? s("div", {
                staticClass: "applications-list-responsive"
            }, t._l(t.applicationsFormatted, (function(e, i) {
                return s("div", {
                    key: i,
                    staticClass: "item"
                }, [s("div", {
                    class: [e._style, "item-row"],
                    on: {
                        click: function(s) {
                            return t.onShowContextMenu("applications", e, "id")
                        }
                    }
                }, [s("div", {
                    staticClass: "col-left"
                }, [s("div", {
                    staticClass: "symbol"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.symbol) + " "), s("span", {
                    staticClass: "name text-xsmall text-light"
                }, [t._v(t._s(e.exchange))])]), t._v(" "), s("div", {
                    staticClass: "created-on text-light text-xsmall"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.created_at.slice(0, 10)) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "col-right"
                }, [s("div", {
                    staticClass: "investor-type text-xsmall text-light"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.getCategoryDescription(e) || e.investor_type) + "\n\t\t\t\t\t\t\t")]), t._v(" "), s("div", {
                    staticClass: "status"
                }, [s("span", {
                    class: ["text-label", "text-xxsmall", "caps", "cursor-pointer"].concat(t.applicationStatusClasses(e.status))
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.status) + "\n\t\t\t\t\t\t\t\t")])])])]), t._v(" "), t.contextMenu && t.contextMenu.applications && t.contextMenu.applications === e.id ? s("mobile-context-menu", {
                    on: {
                        close: function(s) {
                            return t.onHideContextMenu("applications", e)
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [t.isApplicationMutable(e) ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.modifyApplication(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-edit"
                }), t._v(" Modify\n\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), t.isApplicationCancellable(e) ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.cancelApplication(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-times"
                }), t._v(" Cancel\n\t\t\t\t\t\t\t\t")])]) : t._e(), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.showApplicationInfo(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-edit"
                }), t._v(" Info\n\t\t\t\t\t\t\t\t")])])])], 2) : t._e()], 1)
            }
            )), 0) : t._e()], 1)], 1), t._v(" "), s("ipo-window", {
                on: {
                    update: t.fetchApplications,
                    close: t.onWindowClose
                }
            }), t._v(" "), s("ipo-application-info")], 1)
        }
          , a = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("IPOs")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("span", {
                staticClass: "title"
            }, [s("span", [t._v("Applications")])])
        }
        ]
          , n = s("58c0")
          , r = s("9c9e")
          , o = s("f4a7")
          , l = s("5fb0")
          , c = s("2f62")
          , u = s("c7ed")
          , d = s("025e")
          , h = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isOpen ? s("su-modal", {
                staticClass: "ipo-window-modal",
                attrs: {
                    open: !0,
                    "click-out": !1
                },
                on: {
                    ok: t.onSubmit,
                    cancel: t.closeWindow
                }
            }, [s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "instrument-info six columns"
            }, [s("div", {
                staticClass: "instrument-symbol"
            }, [s("div", {
                staticClass: "symbol"
            }, [s("h2", [t._v(t._s(t.application.instrument.symbol))])]), t._v(" "), s("div", {
                staticClass: "text-light text-xsmall name"
            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.application.instrument.name) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "instrument-details"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Investor type")]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [t._v(t._s(t.application.category.description))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Issue dates")]), t._v(" "), s("div", {
                staticClass: "six columns value",
                domProps: {
                    innerHTML: t._s(t.ipoDateRange(t.application.instrument.start_at, t.application.instrument.end_at))
                }
            })]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Issue size (no of shares)")]), t._v(" "), s("div", {
                staticClass: "six columns value"
            }, [t._v(t._s(t.application.instrument.issue_size))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Issue price range")]), t._v(" "), s("div", {
                staticClass: "six columns value"
            }, [t._v("₹" + t._s(t.application.category.min_price) + " – ₹" + t._s(t.application.category.max_price))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Lot size")]), t._v(" "), s("div", {
                staticClass: "six columns value"
            }, [t._v(t._s(t.application.instrument.min_qty))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label"
            }, [t._v("Discount")]), t._v(" "), s("div", {
                staticClass: "six columns value"
            }, [t.application.category.discount_amount ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t₹" + t._s(t.application.category.discount_amount) + "\n\t\t\t\t\t\t\t\t")]) : s("span", {
                staticClass: "text-light"
            }, [t._v("\n\t\t\t\t\t\t\t\t\tNA\n\t\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "row text-xsmall"
            }, [s("div", {
                staticClass: "six columns label"
            }, [s("a", {
                attrs: {
                    href: t.application.instrument.rhp_link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\tRed Herring Prospectus "), s("span", {
                staticClass: "icon icon-external-link"
            })])]), t._v(" "), s("div", {
                staticClass: "six columns value"
            }, [s("a", {
                attrs: {
                    href: "https://support.zerodha.com/category/console/ipo/articles/ipo-subscription-data ",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [t._v("\n\t\t\t\t\t\t\t\t\tSubscription data "), s("span", {
                staticClass: "icon icon-external-link"
            })])])]), t._v(" "), t.application.instrument.info ? s("div", {
                staticClass: "row info",
                domProps: {
                    innerHTML: t._s(t.markdownToHTML(t.application.instrument.info))
                }
            }) : t._e()])]), t._v(" "), s("div", {
                staticClass: "ipo-form six columns"
            }, [s("su-form", {
                ref: "ipo-form",
                on: {
                    submit: function(e) {
                        return e.preventDefault(),
                        t.onSubmit.apply(null, arguments)
                    }
                }
            }, [s("div", {
                staticClass: "vpa-details"
            }, [s("h3", {
                staticClass: "vpa-title"
            }, [t._v("\n\t\t\t\t\t\t\t\tUPI\n\t\t\t\t\t\t\t")]), t._v(" "), s("div", {
                staticClass: "vpa-fields"
            }, [s("su-input", {
                staticClass: "vpa-username",
                attrs: {
                    label: "UPI ID",
                    placeholder: "Your UPI ID",
                    rules: t.rules.vpaUsername,
                    maxlength: 40,
                    disabled: t.application.isModify,
                    required: "",
                    autofocus: ""
                },
                on: {
                    blur: t.onBlurVPA
                },
                model: {
                    value: t.application.form.vpaUsername,
                    callback: function(e) {
                        t.$set(t.application.form, "vpaUsername", e)
                    },
                    expression: "application.form.vpaUsername"
                }
            }), t._v(" "), s("su-select", {
                staticClass: "vpa-handle",
                attrs: {
                    name: "vpa-handle-selector",
                    placeholder: "Your UPI Provider",
                    rules: t.rules.vpaHandle,
                    disabled: t.application.isModify,
                    required: ""
                },
                on: {
                    input: t.onBlurVPA,
                    blur: t.onBlurVPA
                },
                model: {
                    value: t.application.form.vpaHandle,
                    callback: function(e) {
                        t.$set(t.application.form, "vpaHandle", e)
                    },
                    expression: "application.form.vpaHandle"
                }
            }, t._l(t.vpaHandleList, (function(e, i) {
                return s("option", {
                    key: i,
                    attrs: {
                        label: e
                    },
                    domProps: {
                        value: e
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t\t\t\t\t")])
            }
            )), 0)], 1), t._v(" "), s("div", {
                staticClass: "vpa-results text-light text-xsmall"
            }, [s("div", {
                staticClass: "dont-collapse"
            }, [t.application.form.vpaUsername && t.application.form.vpaHandle ? [s("span", {
                staticClass: "vpa-id"
            }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.application.form.vpaUsername) + t._s(t.application.form.vpaHandle) + "\n\t\t\t\t\t\t\t\t\t\t")]), t._v(" "), t.isVPAValidated(t.application.form.vpaUsername + t.application.form.vpaHandle) ? s("span", {
                staticClass: "text-label green text-upper"
            }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\tVerified\n\t\t\t\t\t\t\t\t\t\t")]) : t._e()] : t._e()], 2), t._v(" "), s("a", {
                staticClass: "text-xxsmall info",
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://support.zerodha.com/category/console/ipo/upi/articles/upi-app-not-supported-ipo"
                }
            }, [s("span", {
                staticClass: "icon icon-info"
            }), t._v("\n\t\t\t\t\t\t\t\t\tUPI provider not listed?\n\t\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "ipo-bids"
            }, [s("h3", [t._v("\n\t\t\t\t\t\t\t\tBids\n\t\t\t\t\t\t\t\t"), s("span", [t._v("\n\t\t\t\t\t\t\t\t\t(" + t._s(t.activeBids.length) + "/" + t._s(t.application.maxBids) + ")\n\t\t\t\t\t\t\t\t")]), t._v(" "), t.isProcessingBidDelete ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.activeBids.length < t.application.maxBids ? s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "float-right text-small",
                attrs: {
                    href: "#",
                    title: "Add bid"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.addBid.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-plus"
            }), t._v("Add\n\t\t\t\t\t\t\t\t")]) : t._e()], 1), t._v(" "), t._l(t.application.form.bids, (function(e, i) {
                return s("div", {
                    key: i
                }, [e.cancelled ? t._e() : s("div", {
                    staticClass: "row ipo-bid"
                }, [s("div", {
                    staticClass: "five columns"
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        min: t.application.instrument.min_qty,
                        step: t.application.instrument.lot_size,
                        rules: t.rules.bidQuantity,
                        label: "Qty.",
                        placeholder: "Qty.",
                        required: ""
                    },
                    model: {
                        value: e.quantity,
                        callback: function(s) {
                            t.$set(e, "quantity", s)
                        },
                        expression: "bid.quantity"
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "six columns"
                }, [s("su-input", {
                    attrs: {
                        type: "number",
                        disabled: e.autoCutoff,
                        min: t.application.category.min_price,
                        step: t.application.instrument.tick_size,
                        rules: t.rules.bidPrice,
                        label: "Price",
                        placeholder: "Price",
                        required: ""
                    },
                    model: {
                        value: e.price,
                        callback: function(s) {
                            t.$set(e, "price", s)
                        },
                        expression: "bid.price"
                    }
                }), t._v(" "), t.application.category.cutoff_disabled ? t._e() : s("div", {
                    staticClass: "cutoff-wrapper"
                }, [s("su-checkbox", {
                    staticClass: "text-light text-xsmall",
                    attrs: {
                        label: "Cutoff price"
                    },
                    on: {
                        change: function(e) {
                            return t.onChangeAutoCutoff(i)
                        }
                    },
                    model: {
                        value: e.autoCutoff,
                        callback: function(s) {
                            t.$set(e, "autoCutoff", s)
                        },
                        expression: "bid.autoCutoff"
                    }
                }), t._v(" "), s("a", {
                    staticClass: "text-xsmall info",
                    attrs: {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://support.zerodha.com/category/console/ipo/other-ipo-queries/articles/what-does-cut-off-price-mean"
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                })])], 1)], 1), t._v(" "), s("div", {
                    staticClass: "one column"
                }, [t.activeBids.length > 1 ? s("a", {
                    staticClass: "ipo-bid-delete text-light",
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(s) {
                            return s.preventDefault(),
                            t.deleteBid(e, i)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trash"
                })]) : t._e()])])])
            }
            ))], 2), t._v(" "), s("div", {
                staticClass: "amount-summary"
            }, [t.amountSummary.discount > 0 ? [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label text-light"
            }, [t._v("Total amount")]), t._v(" "), s("div", {
                staticClass: "six columns value text-green text-right"
            }, [t._v("₹" + t._s(t.inrFormat(t.amountSummary.amount, 2)))])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label text-light"
            }, [t._v("Discount")]), t._v(" "), s("div", {
                staticClass: "six columns value text-green text-right"
            }, [t._v("₹" + t._s(t.inrFormat(t.amountSummary.discount, 2)))])])] : t._e(), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns label text-light"
            }, [t._v("Amount payable")]), t._v(" "), s("div", {
                staticClass: "six columns value text-green text-right"
            }, [t._v("₹" + t._s(t.inrFormat(t.amountSummary.payable, 2)))])])], 2)])], 1)])]), t._v(" "), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "row ipo-footer"
            }, [s("div", {
                staticClass: "eight columns ipo-consent"
            }, [s("su-checkbox", {
                model: {
                    value: t.application.form.consent,
                    callback: function(e) {
                        t.$set(t.application.form, "consent", e)
                    },
                    expression: "application.form.consent"
                }
            }), t._v(" "), s("p", {
                staticClass: "ipo-consent-text text-xsmall text-light",
                on: {
                    click: function(e) {
                        t.application.form.consent = !t.application.form.consent
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tI hereby undertake that I have read the Red Herring Prospectus and I am an eligible UPI bidder as per the applicable provisions of the SEBI\n\t\t\t\t\t\t(Issue of Capital and Disclosure Requirement) Regulation, 2018.")])], 1), t._v(" "), s("div", {
                staticClass: "four columns actions text-right"
            }, [s("su-button", {
                staticClass: "button-blue",
                attrs: {
                    disabled: t.isProcessing || !t.application.form.consent,
                    processing: t.isProcessing
                },
                nativeOn: {
                    click: function(e) {
                        return t.onSubmit.apply(null, arguments)
                    }
                }
            }, [t.application.isModify ? s("span", [t._v("Modify")]) : s("span", [t._v("Submit")])]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                attrs: {
                    disabled: t.isProcessing
                },
                nativeOn: {
                    click: function(e) {
                        return t.closeWindow.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\t\tClose\n\t\t\t\t\t")])], 1)])])]) : t._e()], 1)
        }
          , p = []
          , m = s("598f")
          , v = s("d1de")
          , _ = s("f1f7");
        const g = "create"
          , f = "modify"
          , b = {
            id: "",
            status: "",
            quantity: 0,
            price: 0,
            autoCutoff: !1,
            cancelled: null
        }
          , C = {
            isModify: !1,
            application: null,
            instrument: null,
            category: null,
            maxBids: 3,
            form: {
                vpaUsername: "",
                vpaHandle: "",
                consent: !1,
                bids: [{
                    ...b
                }]
            }
        };
        var y = {
            mixins: [r["a"]],
            data() {
                return {
                    isOpen: !1,
                    isProcessing: !1,
                    isProcessingBidDelete: !1,
                    formError: null,
                    validatedVPAs: {},
                    application: this.$clone(C)
                }
            },
            beforeCreate() {
                function t(t, e, s) {
                    e = parseFloat(e);
                    try {
                        if (e * Math.pow(10, 10) % (s * Math.pow(10, 10)) !== 0)
                            return new Error(t.label + " should be a multiple of " + s)
                    } catch (i) {
                        return new Error(t.label + " is invalid.")
                    }
                }
                this.rules = {
                    vpaUsername: [{
                        type: "text",
                        required: !0,
                        message: "VPA username is required"
                    }],
                    vpaHandle: [{
                        type: "text",
                        required: !0,
                        message: "VPA handle is required"
                    }],
                    bidQuantity: [{
                        type: "number",
                        required: !0,
                        message: "Quantity is required"
                    }, {
                        validator: (e,s)=>t(e, s, this.application.instrument.lot_size),
                        label: "Qty"
                    }],
                    bidPrice: [{
                        type: "number",
                        required: !0,
                        message: "Price is required"
                    }, {
                        validator: (e,s)=>t(e, s, this.application.instrument.tick_size),
                        label: "Price"
                    }]
                },
                this.vpaHandleList = [],
                s.e("chunk-2d0a3154").then(s.t.bind(null, "0152", 3)).then(t=>{
                    this.vpaHandleList = t && t.supported_upi_handles
                }
                )
            },
            mounted() {
                this.$events.on(o["a"].EVENTS.CREATE, t=>{
                    this.openWindow(g, t)
                }
                ),
                this.$events.on(o["a"].EVENTS.MODIFY, t=>{
                    this.openWindow(f, t)
                }
                )
            },
            computed: {
                ...Object(c["d"])(v["b"], ["userUPI"]),
                amountSummary() {
                    let t = 0
                      , e = 0;
                    for (let i of this.application.form.bids) {
                        let s = 0;
                        i.quantity && (i.autoCutoff ? s = this.application.category.cutoff_price * i.quantity : i.price && (s = i.quantity * i.price)),
                        s > t && (t = s,
                        e = i.quantity)
                    }
                    let s = this.application.category.discount_amount * e;
                    return {
                        quantity: e,
                        amount: t,
                        discount: s,
                        payable: t - s
                    }
                },
                activeBids() {
                    return this.application && this.application.form && this.application.form.bids ? this.application.form.bids.filter(t=>!t.cancelled) : []
                }
            },
            methods: {
                ...Object(c["e"])(v["b"], ["setUserUPI"]),
                openWindow(t, e) {
                    if (this.application = this.$clone(C),
                    t === f) {
                        this.application.isModify = !0,
                        this.application.instrument = e.instrument,
                        this.application.category = e.category,
                        this.application.application = e.application,
                        this.application.form.vpaUsername = e.application.upi_id.split("@")[0],
                        this.application.form.vpaHandle = "@" + e.application.upi_id.split("@")[1],
                        this.application.form.consent = !0,
                        this.application.form.bids = [];
                        for (let t of e.application.bids)
                            this.application.form.bids.push({
                                id: t.id,
                                status: t.status,
                                quantity: t.quantity,
                                price: t.price,
                                autoCutoff: t.auto_cutoff
                            })
                    } else
                        this.application.instrument = e.instrument,
                        this.application.category = e.category,
                        this.userUPI && 2 === this.userUPI.split("@").length ? (this.application.form.vpaUsername = this.userUPI.split("@")[0],
                        this.application.form.vpaHandle = "@" + this.userUPI.split("@")[1],
                        this.application.form.vpaUsername && this.application.form.vpaHandle ? this.validateVPA(this.userUPI) : this.fetchVPA()) : this.fetchVPA(),
                        this.application.form.bids = [],
                        this.addBid();
                    this.formError = null,
                    this.isOpen = !0
                },
                closeWindow() {
                    this.isOpen = !1,
                    this.$emit("close")
                },
                onSubmit() {
                    this.$refs["ipo-form"].validate() && (this.application.isModify ? this.apiModifyApplication(this.application) : this.apiCreateApplication(this.application))
                },
                apiCreateApplication(t) {
                    let e = [];
                    for (let i of t.form.bids)
                        e.push({
                            quantity: parseInt(i.quantity),
                            price: parseFloat(i.price),
                            auto_cutoff: i.autoCutoff
                        });
                    let s = {
                        instrument_id: t.instrument.id,
                        investor_type: t.category.code,
                        upi_id: t.form.vpaUsername + t.form.vpaHandle,
                        bids: e
                    };
                    this.isProcessing = !0,
                    n["a"].createApplication(s).then(t=>{
                        this.closeWindow(),
                        this.$toast.success({
                            title: "Created",
                            message: t.data.data.message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error",
                            message: Object(d["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).finally(()=>{
                        this.isProcessing = !1,
                        this.$emit("update", {
                            type: "create"
                        })
                    }
                    )
                },
                apiModifyApplication(t) {
                    let e = [];
                    for (let i of t.form.bids) {
                        let t = {
                            quantity: parseInt(i.quantity),
                            price: parseFloat(i.price),
                            auto_cutoff: i.autoCutoff
                        };
                        i.id && (t.id = i.id),
                        i.cancelled && (t.cancelled = !0),
                        e.push(t)
                    }
                    let s = {
                        instrument_id: t.instrument.id,
                        investor_type: t.category.code,
                        upi_id: t.form.vpaUsername + t.form.vpaHandle,
                        bids: e
                    };
                    this.isProcessing = !0,
                    n["a"].modifyApplication(t.application.id, s).then(t=>{
                        this.closeWindow(),
                        this.$toast.success({
                            title: "Modified",
                            message: t.data.data.message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).catch(t=>{
                        this.$toast.error({
                            title: "Error",
                            message: Object(d["j"])(t).message,
                            orientation: this.$toast.BOTTOM_RIGHT
                        })
                    }
                    ).finally(()=>{
                        this.isProcessing = !1,
                        this.$emit("update", {
                            type: "create"
                        })
                    }
                    )
                },
                addBid() {
                    this.application.form.bids.push({
                        quantity: this.application.instrument.min_qty,
                        price: this.application.category.cutoff_price,
                        autoCutoff: !this.application.category.cutoff_disabled
                    })
                },
                deleteBid(t, e) {
                    t && t.id ? this.$set(t, "cancelled", !0) : this.application.form.bids.splice(e, 1)
                },
                onChangeAutoCutoff(t) {
                    this.application.form.bids[t].autoCutoff && (this.application.form.bids[t].price = this.application.category.cutoff_price)
                },
                onBlurVPA() {
                    let t = this.application.form.vpaUsername.split("@");
                    t.length > 1 && (this.application.form.vpaUsername = t[0],
                    -1 !== this.vpaHandleList.indexOf("@" + t[1]) && (this.application.form.vpaHandle = "@" + t[1])),
                    this.validateVPA(this.application.form.vpaUsername + this.application.form.vpaHandle)
                },
                isVPAValidated(t) {
                    return this.validatedVPAs[t]
                },
                validateVPA(t) {
                    this.application.isModify || this.validatedVPAs.hasOwnProperty(t) || m["a"].validateVPA(t).then(e=>{
                        this.$set(this.validatedVPAs, t, !0),
                        this.setUserUPI(this.application.form.vpaUsername + this.application.form.vpaHandle)
                    }
                    ).catch(e=>{
                        let s = Object(d["j"])(e);
                        s.status_code <= 500 && this.$set(this.validatedVPAs, t, !1)
                    }
                    )
                },
                fetchVPA() {
                    m["a"].getVPA().then(t=>{
                        t && t.data && t.data.data && t.data.data.vpa && (this.$set(this.validatedVPAs, t.data.data.vpa, !0),
                        this.application.form.vpaUsername = t.data.data.vpa.split("@")[0],
                        this.application.form.vpaHandle = "@" + t.data.data.vpa.split("@")[1],
                        this.setUserUPI(this.application.form.vpaUsername + this.application.form.vpaHandle))
                    }
                    )
                },
                ipoDateRange(t, e) {
                    let s = Object(d["d"])(t, e);
                    return s[0] + " &mdash; " + s[1]
                },
                inrFormat(t, e) {
                    return Object(_["b"])(t, e)
                },
                markdownToHTML(t) {
                    return Object(d["k"])(t)
                }
            }
        }
          , w = y
          , T = s("0c7c")
          , k = Object(T["a"])(w, h, p, !1, null, null, null)
          , x = k.exports
          , E = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isOpen ? s("su-modal", {
                staticClass: "ipo-application-info-modal",
                attrs: {
                    open: "",
                    closeOnEsc: "",
                    clickOut: ""
                },
                on: {
                    cancel: t.closeWindow
                }
            }, [s("div", {
                staticClass: "header-info",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "symbol-info"
            }, [s("div", {
                staticClass: "symbol"
            }, [s("h3", [t._v(t._s(t.applicationInfo.application.symbol))])]), t._v(" "), t.applicationInfo.instrument ? s("div", {
                staticClass: "name text-light text-xsmall"
            }, [t._v("\n\t\t\t\t\t" + t._s(t.applicationInfo.instrument.name) + "\n\t\t\t\t")]) : t._e()]), t._v(" "), s("div", {
                staticClass: "status"
            }, [s("span", {
                class: ["text-label", "big", "caps"].concat(t.statusClasses(t.applicationInfo.application.status))
            }, [t._v("\n\t\t\t\t\t" + t._s(t.applicationInfo.application.status) + "\n\t\t\t\t")])])]), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("div", {
                staticClass: "info"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Application ID")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.app_id) + "\n\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Investor type")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v(t._s(t.applicationInfo.application.investor_type))])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row upi-id-field field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("UPI ID")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v(t._s(t.applicationInfo.application.upi_id))])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Payment status")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.applicationInfo.application.payment_status ? s("span", {
                domProps: {
                    innerHTML: t._s(t.markdownToHTML(t.applicationInfo.application.payment_status))
                }
            }) : s("span", {
                staticClass: "text-light"
            }, [t._v("N/A")])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Remark")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.applicationInfo.application.remark ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.remark) + "\n\t\t\t\t\t\t\t\t")]) : s("span", {
                staticClass: "text-light"
            }, [t._v("N/A")])])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Payment remark")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.applicationInfo.application.payment_remark ? s("span", {
                domProps: {
                    innerHTML: t._s(t.markdownToHTML(t.applicationInfo.application.payment_remark))
                }
            }) : s("span", {
                staticClass: "text-light"
            }, [t._v("N/A")])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Allotment qty.")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.applicationInfo.application.allotment_quantity ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.allotment_quantity) + "\n\t\t\t\t\t\t\t\t")]) : s("span", {
                staticClass: "text-light"
            }, [t._v("N/A")])])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Allotment rate")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t.applicationInfo.application.allotment_rate ? s("span", [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.allotment_rate) + "\n\t\t\t\t\t\t\t\t")]) : s("span", {
                staticClass: "text-light"
            }, [t._v("N/A")])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Created on")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.created_at.slice(0, 10)) + "\n\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.created_at.slice(11, 19)) + "\n\t\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("div", {
                staticClass: "row field"
            }, [s("div", {
                staticClass: "five columns label"
            }, [t._v("Updated on")]), t._v(" "), s("div", {
                staticClass: "seven columns value"
            }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.updated_at.slice(0, 10)) + "\n\t\t\t\t\t\t\t\t" + t._s(t.applicationInfo.application.updated_at.slice(11, 19)) + "\n\t\t\t\t\t\t\t")])])])])]), t._v(" "), s("div", {
                staticClass: "bids"
            }, [s("h3", [t._v("Bids")]), t._v(" "), s("su-table", {
                staticClass: "bids-table fold-header",
                attrs: {
                    data: t.applicationInfo.application.bids,
                    headers: t.bidInfoTableHeaders,
                    uid: "id"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.price) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.amount) + "\n\t\t\t\t\t\t")])]
                    }
                }], null, !1, 2472805576)
            })], 1)]), t._v(" "), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [t.isMutable ? s("su-button", {
                staticClass: "button-blue button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.modifyApplication.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\tModify\n\t\t\t")]) : t._e(), t._v(" "), t.isCancellable ? s("su-button", {
                staticClass: "button-orange button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.cancelApplication.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\tCancel\n\t\t\t")]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function(e) {
                        return t.closeWindow.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\tClose\n\t\t\t")])], 1)]) : t._e()], 1)
        }
          , S = [];
        const P = Object.freeze([{
            label: "Quantity",
            field: "quantity"
        }, {
            label: "Price (₹)",
            field: "price"
        }, {
            label: "Amount (₹)",
            field: "amount"
        }]);
        var A = {
            data() {
                return {
                    isOpen: !1,
                    applicationInfo: null
                }
            },
            created() {
                this.bidInfoTableHeaders = P
            },
            mounted() {
                this.$events.on(o["a"].EVENTS.INFO, t=>{
                    this.openWindow(t)
                }
                )
            },
            computed: {
                isMutable() {
                    return -1 === o["a"].APPLICATION_IMMUTABLE_STATUSES.indexOf(this.applicationInfo.application.status)
                },
                isCancellable() {
                    return -1 === o["a"].APPLICATION_IMMUTABLE_STATUSES.indexOf(this.applicationInfo.application.status) || -1 !== o["a"].APPLICATION_CANCELLABLE_STATUSES.indexOf(this.applicationInfo.application.status)
                }
            },
            methods: {
                ...Object(c["c"])(u["b"], ["fetchApplications"]),
                openWindow(t) {
                    this.applicationInfo = t,
                    this.isOpen = !0
                },
                closeWindow() {
                    this.isOpen = !1
                },
                statusClasses(t) {
                    return o["a"].APPLICATION_STATUS_CLASSES[t] || []
                },
                modifyApplication() {
                    this.applicationInfo.instrument ? (this.closeWindow(),
                    this.$events.emit(o["a"].EVENTS.MODIFY, this.applicationInfo)) : this.$toast.error({
                        title: "Error",
                        message: "Couldn't find any active IPO for the symbol.",
                        orientation: this.$toast.BOTTOM_RIGHT
                    })
                },
                cancelApplication() {
                    this.closeWindow(),
                    this.$confirm({
                        description: `Cancel ${this.applicationInfo.application.symbol} ?`,
                        onOk: (t,e)=>{
                            n["a"].cancelApplication(this.applicationInfo.application.id).then(e=>{
                                t(),
                                this.fetchApplications(),
                                this.closeWindow()
                            }
                            ).catch(e=>{
                                t(),
                                this.$toast.error({
                                    title: "Error",
                                    message: Object(d["j"])(e).message,
                                    orientation: this.$toast.BOTTOM_RIGHT
                                })
                            }
                            )
                        }
                    })
                },
                markdownToHTML(t) {
                    return Object(d["k"])(t)
                }
            }
        }
          , I = A
          , O = Object(T["a"])(I, E, S, !1, null, null, null)
          , D = O.exports;
        const M = Object.freeze([{
            label: "Instrument",
            field: "symbol",
            sort: !0,
            search: !0
        }, {
            label: "Date",
            field: "start_at",
            sort: !0,
            search: !0
        }, {
            label: "Price range (₹)",
            field: "min_qty",
            sort: !0,
            search: !0,
            class: ["right", "right-border", "no-wrap"]
        }, {
            label: "Min. amount (₹)",
            field: "min_qty",
            sort: !0,
            search: !0,
            class: ["right", "no-wrap"]
        }, {
            label: "",
            field: "",
            class: ["right"]
        }])
          , N = Object.freeze([{
            label: "Instrument",
            field: "symbol",
            sort: !0,
            search: !0
        }, {
            label: "Investor type",
            field: "investor_type",
            sort: !0,
            search: !0
        }, {
            label: "Created on",
            field: "created_at",
            sort: !0,
            search: !0
        }, {
            label: "Allotment",
            field: "allotment_quantity",
            sort: !0,
            search: !0
        }, {
            label: "Status",
            field: "status",
            sort: !0,
            search: !0,
            class: ["right"]
        }]);
        var R = {
            mixins: [r["a"]],
            components: {
                "ipo-window": x,
                "ipo-application-info": D
            },
            data() {
                return {
                    formError: null,
                    contextMenu: null,
                    showSelectBox: !0,
                    instrumentsInfoID: null,
                    showWindowOnLoad: !1
                }
            },
            computed: {
                ...Object(c["d"])(["isMobile"]),
                ...Object(c["d"])(u["b"], ["instruments", "instrumentsError", "instrumentsFetchStatus", "applications", "applicationsError", "applicationsFetchStatus"]),
                instrumentsConstraints() {
                    const t = this.instrumentsFetchStatus === l["d"].API_STATUSES.fetching
                      , e = this.instrumentsFetchStatus === l["d"].API_STATUSES.error;
                    return {
                        isLoading: t,
                        isError: e,
                        hasData: this.instruments && this.instruments.length > 0,
                        isEmpty: this.instruments && 0 === this.instruments.length,
                        hasErrorState: e && !this.instruments,
                        hasErrorIcon: e && this.instruments
                    }
                },
                applicationsConstraints() {
                    const t = this.applicationsFetchStatus === l["d"].API_STATUSES.fetching
                      , e = this.applicationsFetchStatus === l["d"].API_STATUSES.error;
                    return {
                        isLoading: t,
                        isError: e,
                        hasData: this.applications && this.applications.length > 0,
                        isEmpty: this.applications && 0 === this.applications.length,
                        hasErrorState: e && !this.applications,
                        hasErrorIcon: e && this.applications
                    }
                },
                instrumentsFormatted() {
                    if (!this.instruments)
                        return null;
                    let t = this.$clone(this.instruments);
                    for (let e of t) {
                        let t = [];
                        if (this.applications)
                            for (let s of this.applications)
                                e.symbol === s.symbol && -1 === o["a"].APPLICATION_DEAD_STATUSES.indexOf(s.status) && t.push(s.investor_type);
                        e.appliedCategories = t
                    }
                    return t
                },
                applicationsFormatted() {
                    if (!this.applications)
                        return null;
                    let t = [];
                    for (let e of this.applications) {
                        let s = this.$clone(e)
                          , i = -1 !== o["a"].APPLICATION_FINAL_STATUSES.indexOf(s.status);
                        s._style = {
                            greyed: i
                        },
                        t.push(s)
                    }
                    return t
                },
                activeInstrumentsCount() {
                    return this.instruments && this.instruments.filter(t=>t.status === o["a"].INSTRUMENT_STATUS_ACTIVE).length || 0
                }
            },
            created() {
                this.instrumentsTableHeaders = M,
                this.applicationsTableHeaders = N,
                this.fetchAll(),
                this.$events.on(o["a"].EVENTS.CLOSE, this.fetchAll),
                this.$events.on("refetchData:ipo", this.fetchAll),
                this.$route.query.id && (this.showWindowOnLoad = this.$route.query.id)
            },
            beforeDestroy() {
                this.$events.off(o["a"].EVENTS.CLOSE, this.fetchAll),
                this.$events.off("refetchData:ipo", this.fetchAll)
            },
            methods: {
                ...Object(c["c"])(u["b"], ["fetchInstruments", "fetchApplications"]),
                onShowContextMenu(t, e, s) {
                    this.contextMenu || (this.contextMenu = {}),
                    s = s || "uid",
                    this.$set(this.contextMenu, t, e[s])
                },
                onWindowClose() {
                    this.$router.replace({
                        query: {}
                    })
                },
                onHideContextMenu(t) {
                    this.contextMenu && this.contextMenu[t] && (this.contextMenu = null)
                },
                createApplication(t, e) {
                    this.$events.emit(o["a"].EVENTS.CREATE, {
                        instrument: t,
                        category: e
                    })
                },
                modifyApplication(t) {
                    let e = this.getInstrument(t.instrument_id);
                    if (!e)
                        return void this.$toast.error({
                            title: "Error",
                            message: "Couldn't find any active IPO for the symbol.",
                            orientation: this.$toast.BOTTOM_RIGHT
                        });
                    let s = this.getCategory(e, t.investor_type);
                    s ? this.$events.emit(o["a"].EVENTS.MODIFY, {
                        application: t,
                        instrument: e,
                        category: s
                    }) : this.$toast.error({
                        title: "Error",
                        message: "Couldn't find corresponding category for the investor type.",
                        orientation: this.$toast.BOTTOM_RIGHT
                    })
                },
                cancelApplication(t) {
                    this.$confirm({
                        description: `Cancel ${t.symbol} ?`,
                        onOk: (e,s)=>{
                            n["a"].cancelApplication(t.id).then(t=>{
                                e(),
                                this.fetchApplications()
                            }
                            ).catch(t=>{
                                e(),
                                this.$toast.error({
                                    title: "Error",
                                    message: Object(d["j"])(t).message,
                                    orientation: this.$toast.BOTTOM_RIGHT
                                })
                            }
                            )
                        }
                    })
                },
                showApplicationInfo(t) {
                    let e, s = this.getInstrument(t.instrument_id);
                    s && (e = this.getCategory(s, t.investor_type)),
                    this.$events.emit(o["a"].EVENTS.INFO, {
                        application: t,
                        instrument: s,
                        category: e
                    })
                },
                getInstrument(t) {
                    for (let e of this.instruments)
                        if (e.id === t)
                            return e
                },
                getCategory(t, e) {
                    for (let s of t.investor_types)
                        if (s.code === e)
                            return s
                },
                getCategoryDescription(t) {
                    if (!this.instruments)
                        return null;
                    let e = this.getInstrument(t.instrument_id);
                    if (!e)
                        return null;
                    let s = this.getCategory(e, t.investor_type);
                    return s ? s.description : null
                },
                fetchAll() {
                    this.fetchInstruments(),
                    this.fetchApplications()
                },
                applicationStatusClasses(t) {
                    return o["a"].APPLICATION_STATUS_CLASSES[t] || []
                },
                ipoDateRange(t, e) {
                    let s = Object(d["d"])(t, e);
                    return s[0] + " &mdash; " + s[1]
                },
                isApplicationMutable(t) {
                    return -1 === o["a"].APPLICATION_IMMUTABLE_STATUSES.indexOf(t.status)
                },
                isApplicationCancellable(t) {
                    return -1 === o["a"].APPLICATION_IMMUTABLE_STATUSES.indexOf(t.status) || -1 !== o["a"].APPLICATION_CANCELLABLE_STATUSES.indexOf(t.status)
                },
                toggleInstrumentsInfo({row: t, event: e}) {
                    this.instrumentsInfoID === t.id ? this.instrumentsInfoID = null : this.instrumentsInfoID = t.id
                },
                instrumentSteps(t) {
                    let e = new Date
                      , s = new Date(t.start_at)
                      , i = new Date(t.end_at)
                      , a = t.allotment_finalisation_date && new Date(t.allotment_finalisation_date)
                      , n = t.refund_initiation_date && new Date(t.refund_initiation_date)
                      , r = t.demat_transfer_date && new Date(t.demat_transfer_date)
                      , o = t.listing_date && new Date(t.listing_date)
                      , l = t.mandate_end_date && new Date(t.mandate_end_date);
                    return [{
                        count: "",
                        name: "Offer start",
                        isCompleted: s && s < e,
                        date: t.start_at.slice(0, 10)
                    }, {
                        count: "",
                        name: "Offer end",
                        isCompleted: i && i < e,
                        date: t.end_at.slice(0, 10)
                    }, {
                        count: "",
                        name: "Allotment",
                        isCompleted: a && a < e,
                        date: t.allotment_finalisation_date && t.allotment_finalisation_date.slice(0, 10) || ""
                    }, {
                        count: "",
                        name: "Refund initiation",
                        isCompleted: n && n < e,
                        date: t.refund_initiation_date && t.refund_initiation_date.slice(0, 10) || "",
                        infoLink: "https://support.zerodha.com/category/console/ipo/articles/mandate-revocation-if-allotment-is-not-received"
                    }, {
                        count: "",
                        name: "Demat transfer",
                        isCompleted: r && r < e,
                        date: t.demat_transfer_date && t.demat_transfer_date.slice(0, 10) || ""
                    }, {
                        count: "",
                        name: "Listing",
                        isCompleted: o && o < e,
                        date: t.listing_date && t.listing_date.slice(0, 10) || ""
                    }, {
                        count: "",
                        name: "Mandate end",
                        isCompleted: l && l < e,
                        date: t.mandate_end_date && t.mandate_end_date.slice(0, 10) || "",
                        infoLink: "https://support.zerodha.com/category/console/ipo/articles/mandate-revocation-if-allotment-is-not-received"
                    }]
                },
                isInstrumentActive(t) {
                    return t === o["a"].INSTRUMENT_STATUS_ACTIVE
                },
                isInstrumentPreapplyActive(t) {
                    return t === o["a"].INSTRUMENT_STATUS_PREAPPLY_ACTIVE
                },
                openWindowbyTradingsymbol(t, e) {
                    const s = t.find(t=>t.symbol === e);
                    this.showWindowOnLoad = !1,
                    s && s.active && this.createApplication(s, s.investor_types[0])
                }
            },
            watch: {
                instruments(t) {
                    t && t.length > 0 && this.showWindowOnLoad && this.openWindowbyTradingsymbol(t, this.showWindowOnLoad)
                },
                $route(t, e) {
                    "ipo" === t.name && t.query.id && this.instruments && this.instruments.length > 0 && this.openWindowbyTradingsymbol(this.instruments, t.query.id)
                }
            }
        }
          , L = R
          , $ = Object(T["a"])(L, i, a, !1, null, null, null);
        e["default"] = $.exports
    },
    ed56: function(t, e, s) {
        "use strict";
        var i = s("ba6a")
          , a = s("5665");
        function n(t) {
            return i["a"].get(Object(a["a"])("bulletin.all"), {
                params: t
            })
        }
        function r() {
            return i["a"].put(Object(a["a"])("bulletin.all"))
        }
        e["a"] = {
            get: n,
            markAllAsRead: r
        }
    },
    f4a7: function(t, e, s) {
        "use strict";
        const i = "ipo"
          , a = {
            CREATE: "ipo.application.create",
            MODIFY: "ipo.application.modify",
            CANCEL: "ipo.application.cancel",
            INFO: "ipo.application.info"
        }
          , n = ["allotted", "not allotted", "failed", "cancelled"]
          , r = ["allotted", "not allotted", "failed", "cancelled", "pending"]
          , o = ["failed", "cancelled"]
          , l = ["pending"]
          , c = {
            allotted: ["green"],
            submitted: ["blue"],
            new: ["blue"],
            in_progress: ["blue"],
            failed: ["red"],
            "not allotted": ["red"]
        }
          , u = "ongoing"
          , d = "preapply";
        e["a"] = {
            NAMESPACE: i,
            EVENTS: a,
            APPLICATION_FINAL_STATUSES: n,
            APPLICATION_IMMUTABLE_STATUSES: r,
            APPLICATION_CANCELLABLE_STATUSES: l,
            APPLICATION_DEAD_STATUSES: o,
            APPLICATION_STATUS_CLASSES: c,
            INSTRUMENT_STATUS_ACTIVE: u,
            INSTRUMENT_STATUS_PREAPPLY_ACTIVE: d
        }
    },
    f4e2: function(t, e, s) {
        "use strict";
        s("91e0")
    },
    f9a4: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return o
        }
        ));
        var i = s("a029a")
          , a = s("5fb0")
          , n = s("025e");
        let r = !0;
        const o = "connect"
          , l = {
            connectedApps: null,
            connectedAppsError: null,
            connectedAppsFetchStatus: a["b"].initial
        }
          , c = {
            connectedApps: t=>t.connectedApps,
            connectedAppsError: t=>t.connectedAppsError,
            connectedAppsFetchStatus: t=>t.connectedAppsFetchStatus
        }
          , u = {
            setConnectedApps(t, e) {
                t.connectedApps = e
            },
            setConnectedAppsFetchStatus(t, e) {
                t.connectedAppsFetchStatus = e
            },
            setConnectedAppsError(t, e) {
                t.connectedAppsError = e
            }
        }
          , d = {
            fetchConnectedApps({commit: t, state: e}) {
                t("setConnectedAppsFetchStatus", a["b"].fetching);
                let s = i["a"].getConnectedApps();
                Object(n["i"])({
                    commit: t,
                    apiPromise: s,
                    data: "setConnectedApps",
                    status: "setConnectedAppsFetchStatus",
                    error: "setConnectedAppsError"
                })
            }
        };
        e["a"] = {
            state: l,
            getters: c,
            mutations: u,
            actions: d,
            namespaced: r
        }
    }
}]);
