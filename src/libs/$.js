/*! @preserve https://github.com/wusfen/q.js */
/*

$('selector')
    .each()
    .closest()
    .find()
    .parent()
    .children()
    .append()
    .appendTo()
    .remove()
    .html()
    .text()
    .attr()
    .css()
    .addClass()
    .removeClass()
    .show(animateClass) // 可使用css3动画，比如使用 animate.css: .show('animated fadeIn')
    .hide(animateClass)
    .on() // 使用代理实现，新添加的元素也能处理事件

 */
!(function () {

    var $ = function (selector) {
        if (!(this instanceof $)) return new $(selector)
        if (selector instanceof $) return selector
        this.selector = selector

        if (typeof selector == 'string') {
            if (selector.match('<')) {
                var div = document.createElement('div')
                div.innerHTML = selector
                return $(div.children[0])
            } else {
                var nodeList = document.querySelectorAll(selector)
                nodeList = this.slice.call(nodeList)
                this.splice.apply(this, [0, 0].concat(nodeList))
            }
        }
        if (selector && typeof selector == 'object') {
            if (selector.length && !selector.nodeName) {
                [].push.apply(this, selector)
            } else {
                this.push(selector)
            }
        }

    }
    $.fn = $.prototype = []

    $.fn.delay = function (time) {
        if (String(time).match('s')) {
            time = parseFloat(time) * 1000
        }
        this.delayTime = time + (this.delayTime || 0)
        return this
    }
    $.fn.each = function (cb) {
        var _this = this
        var deal = function () {
            for (var i = 0; i < _this.length; i++) {
                cb.call(_this[i], i, _this[i])
            }
            delete _this.delayTime
        }

        var delayTime = this.delayTime
        delayTime ? setTimeout(deal, delayTime) : deal()

        return this
    }
    $.fn.closest = function (selector) {
        var _els = $(selector)
        var els = new $
        this.each(function () {
            (function loop(node) {
                if (!node) return
                if (_els.indexOf(node) != -1 && els.indexOf(node) == -1) {
                    els.push(node)
                } else {
                    loop(node.parentNode)
                }
            })(this)
        })
        return els
    }
    $.fn.find = function (selector) {
        var _els = $(selector)
        var els = new $
        this.each(function () {
            (function loop(node) {
                var children = node.children
                for (var i = 0; i < children.length; i++) {
                    var node = children[i]
                    if (_els.indexOf(node) != -1 && els.indexOf(node) == -1) {
                        els.push(node)
                    }
                    loop(node)
                }
            })(this)
        })
        return els
    }
    $.fn.parent = function () {
        var els = new $
        this.each(function () {
            var node = this.parentNode
            if (els.indexOf(node) == -1) {
                els.push(node)
            }
        })
        return els
    }
    $.fn.children = function () {
        var els = new $
        this.each(function () {
            var children = this.children
            for (var i = 0; i < children.length; i++) {
                var node = children[i]
                if (els.indexOf(node) == -1) {
                    els.push(node)
                }
            }
        })
        return els
    }
    $.fn.append = function (children) {
        var children = $(children)
        var node = this[0]
        if (node) {
            children.each(function () {
                node.appendChild(this)
            })
        }
        return this
    }
    $.fn.appendTo = function (parent) {
        var parent = $(parent)
        parent.append(this)
        return this
    }
    $.fn.remove = function () {
        return this.each(function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this)
            }
        })
    }
    $.fn.addClass = function (className) {
        var classNames = className.trim().split(/ +/)
        return this.each(function () {
            var classList = this.classList
            for (var i = 0; i < classNames.length; i++) {
                classList && classList.add(classNames[i])
            }
        })
    }
    $.fn.removeClass = function (className) {
        var classNames = className.trim().split(/ +/)
        return this.each(function () {
            var classList = this.classList
            for (var i = 0; i < classNames.length; i++) {
                classList && classList.remove(classNames[i])
            }
        })
    }
    $.fn.css = function (arg, val) {
        var item = this[0]
        if (!item) return

        if (val !== undefined) {
            var key = arg
            arg = {}, arg[key] = val
        }

        // set
        if (typeof arg == 'object') {
            return this.each(function () {
                var style = this.style
                for (var name in arg) {
                    var value = arg[name]
                    var cssNumber = /^(columnCount|fillOpacity|flexGrow|flexShrink|fontWeight|lineHeight|opacity|order|orphans|widows|zIndex|zoom)$/i
                    if (!isNaN(value) && !name.replace(/-/g, '').match(cssNumber)) {
                        value += 'px'
                    }
                    style['-webkit-' + name] = value
                    style['-moz-' + name] = value
                    style['-ms-' + name] = value
                    style['-o-' + name] = value
                    style[name] = value
                }
            })
        }
        // get
        else {
            var style = getComputedStyle(item, null)
            var value =
                style['-webkit-' + arg] ||
                style['-moz-' + arg] ||
                style['-ms-' + arg] ||
                style['-o-' + arg] ||
                style[arg]

            return arg ? value : style
        }

    }
    $.fn.show = function (className) {
        this.each(function () {
            $(this).css('display', '')
            if ($(this).css('display') == 'none') {
                $(this).css('display', 'block')
            }
        })
        if (className) {
            this.addClass(className)
                .delay(this.css('animation-duration'))
                .removeClass(className)
        }
        return this
    }
    $.fn.hide = function (className) {
        if (className) {
            this.addClass(className)
                .delay(this.css('animation-duration'))
                .removeClass(className)
        }
        return this.css('display', 'none')
    }
    $.fn.html = function (value) {
        if (arguments.length) {
            this.each(function () {
                this.innerHTML = value
            })
        } else {
            return this[0] ? this[0].innerHTML : ''
        }
        return this
    }
    $.fn.text = function (value) {
        if (arguments.length) {
            this.each(function () {
                this.innerText = value
            })
        } else {
            return this[0] ? this[0].innerText : ''
        }
        return this
    }
    $.fn.attr = function (name, value) {
        if (arguments.length > 1) {
            this.each(function () {
                this.setAttribute(name, value)
            })
        } else {
            return this[0] ? this[0].getAttribute(name) : null
        }
        return this
    }
    $.fn.on = function (eventType, cb) {
        var self = this
        eventType.replace(/\S+/, function (eventType) {
            document.addEventListener(eventType, function (e) {
                var el = $(e.target).closest(self.selector)[0]
                if (el) {
                    cb.call(el, e)
                }
            }, true)
        })
        return this
    }

    if (typeof module != 'undefined') {
        module.exports = $
    } else {
        window.$ = $
    }

})()