(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"query",function(){return f});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(141),c=a.n(o),l=a(142),m=a(145),u=a.n(m),p=a(154),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(p.a,this.props,s.a.createElement("section",{id:"main",className:"wrapper"},s.a.createElement("div",{className:"inner"},s.a.createElement("header",{className:"major"},s.a.createElement("h1",null,c.a.get(this.props,"data.page.frontmatter.title"))),c.a.get(this.props,"data.page.frontmatter.image")&&s.a.createElement("span",{className:"image main"},s.a.createElement("img",{src:Object(l.withPrefix)(c.a.get(this.props,"data.page.frontmatter.image")),alt:""})),u()(c.a.get(this.props,"data.page.html")))))},t}(s.a.Component),f="3030261039"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(143),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(148),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){"use strict";var n=a(162),r=a.n(n),i=a(145),s=a.n(i);t.a=function(e){return e?s()(r()(e)):null}},146:function(e,t,a){"use strict";var n=a(161),r=a.n(n);t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.a.call.apply(r.a,[this].concat(t))||null}},147:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(151),a(32);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(141),c=a.n(o),l=a(145),m=a.n(l),u=a(142),p=a(146),h=a(144),f=a(149),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("section",{id:c.a.get(this.props,"data.page.frontmatter.banner.section_id")},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",null,m()(c.a.get(this.props,"data.page.frontmatter.banner.title").replace(/\n/g,"<br />"))),Object(h.a)(c.a.get(this.props,"data.page.frontmatter.banner.subtitle")),c.a.get(this.props,"data.page.frontmatter.banner.actions")&&s.a.createElement("ul",{className:"actions special"},c.a.map(c.a.get(this.props,"data.page.frontmatter.banner.actions"),function(t,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{href:c.a.get(t,"url").startsWith("#")?c.a.get(t,"url"):Object(u.withPrefix)(Object(f.a)(e.props.data.pages_urls,c.a.get(t,"url"))),className:Object(p.a)("button","large","wide",{primary:c.a.get(t,"is_primary")},{"scrolly-middle":c.a.get(t,"is_scrolly")})},c.a.get(t,"label")))}))))},t}(s.a.Component)},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a(74),a(151);var n=a(141),r=a.n(n);t.a=function(e,t){if(r.a.startsWith(t,"#"))return t;var a=r.a.map(e.edges,function(e){return e.node.fields}),n=r.a.find(a,{relativePath:t});if(!n)throw new Error("could not find page with path: "+t);return n.url}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(51),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(160),c=a(141),l=a.n(c),m=a(146),u=a(142),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("header",{id:"header",className:Object(m.a)({alt:"home"===l.a.get(this.props,"data.page.frontmatter.template")})},s.a.createElement("a",{className:"logo",href:Object(u.withPrefix)(l.a.get(this.props,"data.site.pathPrefix"))},l.a.get(this.props,"data.site.siteMetadata.title")),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#menu"},"Menu")))))},t}(s.a.Component),h=a(149),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("nav",{id:"menu"},s.a.createElement("ul",{className:"links"},l.a.map(l.a.get(this.props,"data.menus.main"),function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(e,"url"))},l.a.get(e,"title")))}),l.a.map(l.a.get(this.props,"data.site.siteMetadata.menu.actions"),function(t,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{href:Object(u.withPrefix)(Object(h.a)(e.props.data.pages_urls,l.a.get(t,"url"))),className:Object(m.a)("button",{primary:l.a.get(t,"is_primary")})},l.a.get(t,"title")))})))},t}(s.a.Component),d=a(145),g=a.n(d),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("footer",{id:"footer"},s.a.createElement("ul",{className:"contact-icons"},l.a.get(this.props,"data.site.siteMetadata.footer.social_links")&&l.a.map(l.a.get(this.props,"data.site.siteMetadata.footer.social_links"),function(e,t){return s.a.createElement("li",{key:t,className:"icon "+l.a.get(e,"icon")},s.a.createElement("a",{href:l.a.get(e,"link_url")},l.a.get(e,"text")))})),s.a.createElement("div",{className:"copyright"},g()(l.a.get(this.props,"data.site.siteMetadata.footer.copyright"))))},t}(s.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.Helmet,null,s.a.createElement("title",null,l.a.get(this.props,"data.page.frontmatter.title")&&l.a.get(this.props,"data.page.frontmatter.title")+"-",l.a.get(this.props,"data.site.siteMetadata.title")),s.a.createElement("body",{className:"is-preload"})),s.a.createElement(p,this.props),s.a.createElement(f,this.props),this.props.children,s.a.createElement(E,this.props))},t}(s.a.Component),b=a(147),N=a(144),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("section",{id:l.a.get(this.props,"section.section_id"),className:"wrapper "+l.a.get(this.props,"section.background_color_style")},s.a.createElement("div",{className:"inner"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,l.a.get(this.props,"section.title"))),s.a.createElement("div",{className:"carousel"},l.a.map(l.a.orderBy(l.a.filter(l.a.get(this.props,"data.pages_carousel.edges",[]).map(function(e){return e.node}),["frontmatter.home_sections.carousel.enabled",!0]),"frontmatter.home_sections.carousel.weight"),function(e,t){return l.a.get(e,"frontmatter.home_sections.carousel")&&s.a.createElement("article",{key:t},s.a.createElement("div",{className:"image","data-position":l.a.get(e,"frontmatter.home_sections.carousel.data_position")},s.a.createElement("img",{src:Object(u.withPrefix)(l.a.get(e,"frontmatter.home_sections.carousel.image")),alt:""})),s.a.createElement("div",{className:"content"},s.a.createElement("h3",null,l.a.get(e,"frontmatter.home_sections.carousel.title")),Object(N.a)(l.a.get(e,"frontmatter.home_sections.carousel.text")),s.a.createElement("ul",{className:"actions special"},s.a.createElement("li",null,s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(e,"fields.url")),className:"button primary "+l.a.get(e,"frontmatter.home_sections.carousel.button_background_color")},"Learn more")))))}),s.a.createElement("nav",null,s.a.createElement("a",{href:"#",className:"previous"},s.a.createElement("span",{className:"label"},"Previous")),s.a.createElement("a",{href:"#",className:"next"},s.a.createElement("span",{className:"label"},"Next"))))))},t}(s.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("section",{id:l.a.get(this.props,"section.section_id"),className:"wrapper "+l.a.get(this.props,"section.style")},s.a.createElement("div",{className:"inner"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,l.a.get(this.props,"section.title")),Object(N.a)(l.a.get(this.props,"section.subtitle"))),s.a.createElement("form",{method:"post",action:"#",className:"combined"},s.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Your email address",className:"alt accent4"}),s.a.createElement("input",{type:"submit",className:"button primary accent4",value:"Subscribe"}))))},t}(s.a.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("section",{id:l.a.get(this.props,"section.section_id"),className:"wrapper"},s.a.createElement("div",{className:"inner"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,l.a.get(this.props,"section.title"))),s.a.createElement("div",{className:"posts"},l.a.map(l.a.orderBy(l.a.get(this.props,"data.pages_posts.edges",[]).map(function(e){return e.node}),"frontmatter.date","desc"),function(e,t){return s.a.createElement("article",{key:t},l.a.get(e,"frontmatter.home_image")&&s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(e,"fields.url")),className:"image"},s.a.createElement("img",{src:Object(u.withPrefix)(l.a.get(e,"frontmatter.home_image")),alt:""})),s.a.createElement("div",{className:"content"},s.a.createElement("h3",null,s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(e,"fields.url"))},l.a.get(e,"frontmatter.title"))),Object(N.a)(l.a.get(e,"frontmatter.excerpt")),s.a.createElement("ul",{className:"actions special"},s.a.createElement("li",null,s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(e,"fields.url")),className:"button primary "+l.a.get(e,"frontmatter.home_button_color")},"Learn more")))))}))))},t}(s.a.Component),j=(a(32),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=function(){var e=Array.prototype.slice.call(arguments),t=0;return{next:function(){return e[t++%e.length]}}}("odd","even");return l.a.map(l.a.orderBy(l.a.filter(l.a.get(this.props,"data.pages_spotlight.edges",[]).map(function(e){return e.node}),["frontmatter.home_sections.spotlight.enabled",!0]),"frontmatter.home_sections.spotlight.weight"),function(t,a){return l.a.get(t,"frontmatter.home_sections.spotlight")&&s.a.createElement("article",{key:a,id:l.a.get(t,"frontmatter.home_sections.spotlight.section_id"),className:"spotlight "+e.next()+" "+l.a.get(t,"frontmatter.home_sections.spotlight.background_accent")},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"image","data-position":l.a.get(t,"frontmatter.home_sections.spotlight.data_position")},s.a.createElement("img",{src:Object(u.withPrefix)(l.a.get(t,"frontmatter.home_sections.spotlight.image")),alt:""})),s.a.createElement("h2",null,g()(l.a.get(t,"frontmatter.home_sections.spotlight.title").replace(/\n/g,"<br />"))),s.a.createElement("div",{className:"content"},s.a.createElement("h3",null,g()(l.a.get(t,"frontmatter.home_sections.spotlight.subtitle").replace(/\n/g,"<br />"))),Object(N.a)(l.a.get(t,"frontmatter.home_sections.spotlight.text")),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:Object(u.withPrefix)(l.a.get(t,"fields.url")),className:"button primary "+l.a.get(t,"frontmatter.home_sections.spotlight.button_accent")},"Learn more"))))))})},t}(s.a.Component));a.d(t,"a",function(){return y});t.b={Layout:y,Banner:b.a,Carousel:v,Cta:_,Footer:E,Header:p,Menu:f,Posts:w,Spotlight:j}},159:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-page-js-b4298a0f62251375edbf.js.map