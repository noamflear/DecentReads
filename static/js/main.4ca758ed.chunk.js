(this["webpackJsonpbook-review"]=this["webpackJsonpbook-review"]||[]).push([[0],[,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/freeWill.8249c324.jpg"},function(e,a,t){e.exports=t.p+"static/media/range.25c1093d.jpg"},function(e,a,t){e.exports=t.p+"static/media/oneWorld.51dd05f8.jpg"},function(e,a,t){e.exports=t.p+"static/media/normPeople.9123ecd6.jpg"},function(e,a,t){e.exports=t.p+"static/media/flow.88516888.jpg"},function(e,a,t){e.exports=t.p+"static/media/header.c1334cf0.jpg"},function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),l=t.n(s),o=(t(20),t(7),t(21),t(1)),c=t(2),i=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top navbar-expand-lg"},r.a.createElement("a",{className:"navbar-brand",href:"www.decentreads.com"},"DecentReads"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item navigationItem"},r.a.createElement("a",{className:"nav-link",href:"www.decentreads.com"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item navigationItem"},r.a.createElement("a",{className:"nav-link",href:"#Contact"},"Contact")),r.a.createElement("li",{className:"nav-item navigationItem"},r.a.createElement("a",{className:"nav-link",href:"#about"},"About")))))}}]),a}(n.Component),d=t(9),b=t.n(d),p=t(10),v=t.n(p),E=t(11),f=t.n(E),y=t(12),g=t.n(y),k=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:this.getId(),className:"book"},r.a.createElement("img",{className:"bookCover img-responsive",src:this.getImg()}),r.a.createElement("div",{className:"bookInfo"},r.a.createElement("h1",{className:"title"},this.props.book.name),r.a.createElement("h2",{className:"center"},"By ",this.props.book.author),r.a.createElement("h2",{className:"center"},"Rating: ",this.getRating())),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{id:this.getSummaryId(),className:"summary"}," ",this.props.book.summary)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"getImg",value:function(){switch(this.props.book.id){case 1:return b.a;case 2:return v.a;case 3:return f.a;case 4:return g.a;default:return null}}},{key:"getId",value:function(){switch(this.props.book.id){case 1:return"Book1";case 2:return"Book2";case 3:return"Book3";case 4:return"Book4";default:return null}}},{key:"getSummaryId",value:function(){switch(this.props.book.id){case 1:return"Summary1";case 2:return"Summary2";case 3:return"Summary3";case 4:return"Summary4";default:return null}}},{key:"getRating",value:function(){switch(this.props.book.id){case 1:return"3.86";case 2:return"4.18";case 3:return"4.32";case 4:return"3.90";default:return null}}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={books:[{id:1,name:"Free Will",author:"Sam Harris",summary:"Belief in free will touches nearly everything that human beings value. It is difficult to think about law, politics, religion, public policy, intimate relationships, morality\u2014as well as feelings of remorse or personal achievement... "},{id:2,name:"Range",author:"David Epstein",summary:"Plenty of experts argue that anyone who wants to develop a skill, play an instrument, or lead their field should start early, focus intensely, and rack up as many hours of deliberate practice as possible. If you dabble or delay... "},{id:3,name:"The One World Schoolhouse",author:"Salman Khan",summary:"A free, world-class education for anyone, anywhere: this is the goal of the Khan Academy, a passion project that grew from an ex-engineer and hedge funder's online tutoring sessions with his niece, who was struggling with algebra... "},{id:4,name:"Normal People",author:"Sally Rooney",summary:"At school Connell and Marianne pretend not to know each other. He\u2019s popular and well-adjusted, star of the school soccer team while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her housekeeping job at Marianne\u2019s house, a strange and indelible connection grows between the two teenagers... "}]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"reviews",className:"Reviews"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(k,{key:this.state.books[0].id,book:this.state.books[0]})),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(k,{key:this.state.books[1].id,book:this.state.books[1]}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(k,{key:this.state.books[2].id,book:this.state.books[2]})),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(k,{key:this.state.books[3].id,book:this.state.books[3]})))),r.a.createElement("a",{href:"https://m-vpham.github.io/decentReadFrontEnd/?fbclid=IwAR2z4WUDZQNS_l_kIGXi6FTjHpezvm8VLs-IBAEm3HznGCIth9uFNlDGhRQ",className:"noUnderline"},r.a.createElement("div",{className:"reviewPageButton"},r.a.createElement("h1",{className:"responsiveFont3"},"Click here to start reviewing!"))))}}]),a}(n.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"Contact"},r.a.createElement("h1",{id:"contactHeader"},"Contact Us!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"person"},r.a.createElement("p",{className:"contactName"},"Noam Flear: "),r.a.createElement("p",{className:"contactEmail"},"Email: nflear@ryerson.ca")),r.a.createElement("div",{className:"person"},r.a.createElement("p",{className:"contactName"},"Anthony Trinh: "),r.a.createElement("p",{className:"contactEmail"},"Email: anthony.trinh@ryerson.ca")),r.a.createElement("div",{className:"person"},r.a.createElement("p",{className:"contactName"},"Michelle Pham: "),r.a.createElement("p",{className:"contactEmail"},"Email: thuyvan.pham@ryerson.ca"))))}}]),a}(n.Component),j=t(13),O=t.n(j),C=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"bestBookBox"},r.a.createElement("div",{id:"bestBook"},r.a.createElement("img",{className:"bestCover img-responsive",src:O.a}),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Featured Book:"),r.a.createElement("h1",{className:"center"},"Flow"),r.a.createElement("h1",{className:"center"},"By Mihaly Csikszentmihalyi"),r.a.createElement("h1",{className:"center"},"Rating: 4.11"),r.a.createElement("p",null,'You have heard about how a musician loses herself in her music, how a painter becomes one with the process of painting. In work, sport, conversation or hobby, you have experienced, yourself, the suspension of time, the freedom of complete absorption in activity. This is "flow," an experience that is at once demanding and rewarding--an experience that Mihaly Csikszentmihalyi demonstrates is one of the most enjoyable and valuable experiences a person can have. The exhaustive case studies, controlled experiments and innumerable references to historical figures, philosophers and scientists through the ages prove Csikszentmihalyi\'s point that flow is a singularly productive and desirable state. But the implications for its application to society are what make the book revolutionary.'),r.a.createElement("br",null),r.a.createElement("p",null,"Csikszentmihalyi has done more than anyone else to study this state of effortless attending - Daniel Khaneman"))))}}]),a}(n.Component),I=t(14),x=t.n(I),B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row containerTest"},r.a.createElement("img",{id:"headerImg",className:"img-fluid",src:x.a}),r.a.createElement("div",{className:"centered"},r.a.createElement("h1",{className:"responsiveFont"},"DecentReads")),r.a.createElement("div",{className:"centered2"},r.a.createElement("h2",{className:"responsiveFont2"},"The home of all your book review needs")),r.a.createElement("a",{href:"#reviews",className:"noUnderline centered3"},r.a.createElement("div",{className:"mainButton"},r.a.createElement("p",{className:"centerReviewButton"},"Start Reviewing!"))))}}]),a}(n.Component),R=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"about",className:"about"},r.a.createElement("h1",{className:"title"},"About us"),r.a.createElement("p",{className:"title"},"We started this book review website in 2019 with the goal of helping people to find ",r.a.createElement("br",null),"good books easily. This is a goodreads knock off. Our features include: The ability to read others reviews, ",r.a.createElement("br",null),"the ability to write a review yourself, and see book covers, book summaries and more! ",r.a.createElement("br",null),"This page is made using react. Once you click on a book you will be taken to a page that is ",r.a.createElement("br",null),"made from react and flask. It uses flask to access the database where the reviews are stored.",r.a.createElement("br",null),"Click on a book to view our user's reviews and to write a review yourself!")))}}]),a}(n.Component);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(B,null),r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(22);l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.4ca758ed.chunk.js.map