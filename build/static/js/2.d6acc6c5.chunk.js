(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{56:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__c5AVt"}},58:function(e,t,n){e.exports={comments:"Comments_comments__2SNV6"}},60:function(e,t,n){e.exports={form:"NewCommentForm_form__3q5qx",loading:"NewCommentForm_loading__J4kv1",control:"NewCommentForm_control__3KU0_",actions:"NewCommentForm_actions__i5_7a"}},62:function(e,t,n){e.exports={item:"CommentItem_item__Nuxcr"}},64:function(e,t,n){e.exports={comments:"CommentsList_comments__315gD"}},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),m=n(1),o=n(6),r=n(56),l=n.n(r),s=function(e){return c.a.createElement("figure",{className:l.a.quote},c.a.createElement("p",null,e.text),c.a.createElement("figcaption",null,e.author))},u=n(19),i=n(58),d=n.n(i),f=n(17),E=n(18),p=n(12),_=n(60),b=n.n(_),N=function(e){var t=Object(a.useRef)(),n=Object(f.a)(E.a),m=n.sendRequest,o=n.status,r=n.error,l=e.onAddedComment;Object(a.useEffect)(function(){"completed"!==o||r||l()},[o,r,l]);var s=function(n){n.preventDefault();var a=t.current.value;m({commentData:{text:a},quoteId:e.quoteId})};return c.a.createElement("form",{className:b.a.form,onSubmit:s},"pending"===o&&c.a.createElement("div",{className:"centered"},c.a.createElement(p.a,null)),c.a.createElement("div",{className:b.a.control,onSubmit:s},c.a.createElement("label",{htmlFor:"comment"},"Your Comment"),c.a.createElement("textarea",{id:"comment",rows:"5",ref:t})),c.a.createElement("div",{className:b.a.actions},c.a.createElement("button",{className:"btn"},"Add Comment")))},x=n(62),v=n.n(x),C=function(e){return c.a.createElement("li",{className:v.a.item},c.a.createElement("p",null,e.text))},j=n(64),h=n.n(j),q=function(e){return c.a.createElement("ul",{className:h.a.comments},e.comments.map(function(e){return c.a.createElement(C,{key:e.id,text:e.text})}))},g=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(m.j)().quoteId,l=Object(f.a)(E.c),s=l.sendRequest,i=l.status,_=l.data;Object(a.useEffect)(function(){s(r)},[r,s]);var b,x=Object(a.useCallback)(function(){s(r)},[s,r]);return"pending"===i&&(b=c.a.createElement("div",{className:"centered"},c.a.createElement(p.a,null))),"completed"===i&&_&&_.length>0&&(b=c.a.createElement(q,{comments:_})),"completed"!==i||_&&0!==_.length||(b=c.a.createElement("p",{className:"centered"},"No comments were added yet!")),c.a.createElement("section",{className:d.a.comments},c.a.createElement("h2",null,"User Comments"),!n&&c.a.createElement("button",{className:"btn",onClick:function(){o(!0)}},"Add a Comment"),n&&c.a.createElement(N,{quoteId:r,onAddedComment:x}),b)};t.default=function(){var e=Object(m.k)(),t=Object(m.j)().quoteId,n=Object(f.a)(E.e,!0),r=n.sendRequest,l=n.status,u=n.data,i=n.error;return Object(a.useEffect)(function(){r(t)},[r,t]),"pending"===l?c.a.createElement("div",{className:"centered"},c.a.createElement(p.a,null)):i?c.a.createElement("p",{className:"centered"},i):u.text?c.a.createElement(a.Fragment,null,c.a.createElement(s,{text:u.text,author:u.author}),c.a.createElement(m.c,{path:e.path,exact:!0},c.a.createElement("div",{className:"centered"},c.a.createElement(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments")},"Load Comments"))),c.a.createElement(m.c,{path:"".concat(e.path,"/comments")},c.a.createElement(g,null))):c.a.createElement("p",null,"No quote found!")}}}]);
//# sourceMappingURL=2.d6acc6c5.chunk.js.map