(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(15),o=a.n(l);a(57),a(58),a(59),a(60),a(61),a(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(11),i=a(23),u={body:"body",apiKey:"54087469444eb8377d671f67b1b8595d",language:"en-US",url:"https://api.themoviedb.org/3/search/movie",fetchedData:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"container/Body/actionTypes":var a=n.payload;return console.log("payload:",a),Object(i.a)({},e,{fetchedData:a});default:return e}},m={header:"header",searchKeyword:""},s={footer:"footer"},p=Object(c.c)({BodyReducer:d,FooterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;switch((arguments.length>1?arguments[1]:void 0).type){case"test":e.setState({footer:"case operated"});break;default:return e}},HeaderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"test":return{header:"case operated"};case"SEARCH_INPUT_CHANGER":var a=n.value;return Object(i.a)({},e,{searchKeyword:a});default:return e}}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,g=Object(c.e)(p,E(Object(c.a)())),h=a(115),b=a(117),v=a(51),f=a(13),w=a(16),y=a(17),Q=a(24),R=a(18),k=a(25),A=a(10),G=a(6),I=a(7);a(67);function D(){var e=Object(G.a)(["\n    /* color: #ffa500; */\n    background: black no-repeat center fixed;\n    height: 120px;\n    width: 100%;\n    background-size: cover;\n    display: grid;\n\n    .title {\n        color: #00e7ff;\n        text-align: center;\n        margin: 0px;\n        padding: 5px;\n        font-size: 30px;\n        vertical-align: bottom;\n        text-shadow: 2px 2px red;\n        grid-column: 1;\n        grid-row: 1;\n        height: 100%;\n    }\n\n    .search {\n        grid-column: 1;\n        grid-row: 3;\n        input {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);return D=function(){return e},e}var N=I.a.div(D()),T=function(e){function n(e){var a;return Object(w.a)(this,n),(a=Object(Q.a)(this,Object(R.a)(n).call(this,e))).state={searchKeyword:""},a.SearchOnChangeHandler=a.SearchOnChangeHandler.bind(Object(A.a)(Object(A.a)(a))),a}return Object(k.a)(n,e),Object(y.a)(n,[{key:"SearchOnChangeHandler",value:function(e){var n=this;this.setState({searchKeyword:e.target.value},function(){return n.props.searchInputChanger(n.state.searchKeyword)})}},{key:"render",value:function(){var e=this;return console.log("\xa3\xa3\xa3 HEADER"),r.a.createElement(N,null,r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"React(Redux) Movie Crawler")),r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",placeholder:"Type Name of Moive ! :D",value:this.state.searchKeyword,onChange:function(n){return e.SearchOnChangeHandler(n)}})))}}]),n}(r.a.Component);T.defaultProps={searchKeyword:""};var j=Object(f.b)(function(e){return{url:e.HeaderReducer.searchKeyword}},function(e,n){return{searchInputChanger:function(n){return e(function(e){return{type:"SEARCH_INPUT_CHANGER",value:e}}(n))}}})(T),O=function(){return console.log("\xa3\xa3\xa3 Footer"),r.a.createElement("div",null,"i'm Footer")};O.defaultProps={};var P=O,K=a(28),M=a.n(K),x=(a(2),a(48)),L=a(49),B=a.n(L);a(112);function C(){var e=Object(G.a)(["\n    display: grid;\n    border: 2px #4e4b4b solid;\n    text-align: center;\n    background: url(",") no-repeat center fixed;\n    background-size: cover;\n\n    margin: 10px;\n    padding: 10px;\n\n    grid-template-columns: auto 1fl 1fr 1fr 1fr;\n    grid-template-rows: auto;\n\n    ::before {\n        filter: grayscale(50%);\n    }\n\n    .mg {\n        margin: 10px;\n        padding: 10px;\n    }\n\n    /* ===============  row 1 ===============  */\n\n    .poster {\n        /* poster_path */\n        grid-column: 1/2;\n        grid-row: 1/6;\n    }\n\n    /* =============== row 2  =============== */\n\n    .vote_average {\n        grid-column: 3;\n        grid-row: 2;\n        width: 20%;\n    }\n\n    .title {\n        /* title */\n        grid-column: 4;\n        grid-row: 2;\n    }\n\n    .popularity {\n        grid-column: 5;\n        grid-row: 2;\n    }\n    /* =============== row 3 ===============  */\n\n    .overview {\n        grid-column: 3/5;\n        grid-row: 3;\n        background-color: #4c4c4cde;\n    }\n    .original_language {\n        grid-column: 5;\n        grid-row: 3;\n    }\n    /* =============== row 4 ===============  */\n    .adult {\n        grid-column: 3;\n        grid-row: 4;\n    }\n\n    .video {\n        grid-column: 4;\n        grid-row: 4;\n    }\n\n    /* =============== row 5 ===============  */\n"]);return C=function(){return e},e}var S=I.a.div(C(),function(e){return e.backdrop}),q=a(32),J=a.n(q),H=function(e){return e.data.results.map(function(e){var n=e.vote_count,a=e.id,t=e.video,l=e.vote_average,o=e.title,c=e.popularity,i=e.poster_path,u=e.original_language,d=(e.original_title,e.genre_ids,e.backdrop_path),m=e.adult,s=e.overview,p=e.release_date;return r.a.createElement(S,{backdrop:null!==d?"https://image.tmdb.org/t/p/w1400_and_h450_face/"+d:J.a,key:a},r.a.createElement("div",{className:"video mg"},r.a.createElement("button",{type:"button",onClick:function(){return alert(t?"Check this Video":" No Video available")}},t?"Check this Video":"  No Video available")),r.a.createElement("div",{className:"adult mg"},"Age for ",m?"19+":"All"),r.a.createElement("div",{className:"poster mg"},null!==i?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+i,alt:"poster"}):r.a.createElement("img",{src:J.a,alt:"No img"})),r.a.createElement("div",{className:"title mg"},r.a.createElement("b",null,o),"(",p,")"),r.a.createElement("div",{className:"popularity mg"},"Popularity : ",c),r.a.createElement("div",{className:"vote_average mg"},"Score",r.a.createElement(B.a,{percentage:10*l,text:"".concat(10*l,"%"),styles:{root:{},path:{stroke:"rgba(75,243,33, ".concat(10*l/100,")"),strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d600"},text:{fill:"#4bf321e6",fontSize:"33px",fontweight:"bold"},background:{fill:"#3432e6"}}}),"attended ",r.a.createElement("b",null,n," for vote this moive!")),r.a.createElement("div",{className:"original_language mg"},"Language: ",r.a.createElement("b",null,u)),r.a.createElement("div",{className:"overview mg"},r.a.createElement("b",null,"OVERVIEW"),r.a.createElement("br",null),r.a.createElement("br",null),s))})};H.defaultProps={vote_count:"",id:"",video:"",vote_average:"",title:"",popularity:"",poster_path:"",original_language:"",original_title:"",genre_ids:"",backdrop_path:"",adult:"",overview:"",release_date:""};var z=H;function U(){var e=Object(G.a)(["\n    background-color: yellow;\n    color: black;\n"]);return U=function(){return e},e}var V=I.a.div(U()),Y=function(){return console.log(),r.a.createElement(V,null,"Please Re-Search You mofo.!")};function X(){var e=Object(G.a)(["\n    background-color: black;\n    padding: 15px;\n    color: #faffde;\n"]);return X=function(){return e},e}var W=I.a.div(X()),F=function(e){function n(e){var a;return Object(w.a)(this,n),(a=Object(Q.a)(this,Object(R.a)(n).call(this,e))).state={FetchedData:{},Fetched:!1,loading:!1,totalValue:{},Error:!1},a.fetchingMovieData=a.fetchingMovieData.bind(Object(A.a)(Object(A.a)(a))),a}return Object(k.a)(n,e),Object(y.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.searchKeyword.length>0&&this.fetchingMovieData()}},{key:"fetchingMovieData",value:function(){var e=this,n=this.props,a=n.url,t=n.apiKey,r=n.language,l=this.props.searchKeyword;this.setState({loading:!0}),M.a.get(l.length>1?"".concat(a,"?api_key=").concat(t,"&language=").concat(r,"&query=").concat(l):"".concat(a,"?api_key=").concat(t,"&language=").concat(r,"&query=''")).then(function(n){return console.log("res => ",n),e.setState(function(){return{totalValue:n}}),n.data}).then(function(n){return e.setState(function(){return{FetchedData:n,Fetched:!0,loading:!1,Error:!1}})}).catch(function(n){return e.setState(function(){return{Error:!0}}),n})}},{key:"render",value:function(){return r.a.createElement(W,null,r.a.createElement("div",null,this.state.Fetched&&r.a.createElement(z,{data:this.state.FetchedData})),r.a.createElement("div",null,this.state.loading&&r.a.createElement(x.ClipLoader,null)),r.a.createElement("div",null,this.state.Error&&r.a.createElement(Y,null)," "))}}]),n}(r.a.Component);F.defaultProps={searchKeyword:""};var Z=Object(f.b)(function(e){return{apiKey:e.BodyReducer.apiKey,language:e.BodyReducer.language,url:e.BodyReducer.url,searchKeyword:e.HeaderReducer.searchKeyword}},function(e,n){return{}})(F),_=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(Z,null),r.a.createElement(P,null))},$=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(Z,null),r.a.createElement(P,null))},ee=a(116);function ne(){var e=Object(G.a)(["\n    background-color: black;\n    color: white;\n    display: grid;\n\n    a {\n        text-decoration: none;\n    }\n    a > div {\n        color: red;\n    }\n\n    .item1 {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .item2 {\n        grid-column: 2;\n        grid-row: 1;\n    }\n    .item3 {\n        grid-column: 1;\n        grid-row: 2;\n    }\n"]);return ne=function(){return e},e}var ae=I.a.div(ne()),te=function(){return r.a.createElement(ae,null,r.a.createElement(ee.a,{className:"item1",to:"/moive"},r.a.createElement("div",null,"Movie")),r.a.createElement(ee.a,{to:"/shopping",className:"item2"},r.a.createElement("div",null,"Shopping")),r.a.createElement(ee.a,{className:"item3",to:"/graphql"},r.a.createElement("div",null,"GraphQL")))};function re(){var e=Object(G.a)(["\n    background-color: yellow;\n"]);return re=function(){return e},e}var le=I.a.div(re()),oe=function(){return r.a.createElement(le,null,r.a.createElement(ee.a,{to:"/graphql/tutorial-1"},r.a.createElement("div",null,"tutorial-1")),r.a.createElement(ee.a,{to:"/graphql/tutorial-2"},r.a.createElement("div",null,"tutorial-2")))};function ce(){var e=Object(G.a)(["\n    background-color: black;\n    color: white;\n\n    .head {\n    }\n\n    .option1 {\n        border: 1px white solid;\n        padding: 5px;\n        margin: 5px;\n    }\n"]);return ce=function(){return e},e}var ie=I.a.div(ce()),ue=function(){return r.a.createElement(ie,null,r.a.createElement("div",{className:"head"},"GraphQL + Node.js \ud29c\ud1a0\ub9ac\uc5bc 1",r.a.createElement("br",null),r.a.createElement("hr",null),"\ub4e4\uc5b4\uac00\uae30\uc5d0 \uc55e\uc11c...",r.a.createElement("br",null)," GraphQL\uc740 \ubc31\uc5d4\ub4dc \uae30\uc220 \uc911 \ud558\ub098\ub85c \uae09\uaca9\ud788 \ub5a0\uc624\ub974\uace0\uc788\ub294 \uae30\uc220 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4! \uae30\uc874\uc758 REST \ubc29\uc2dd\uc758 API \ub514\uc790\uc778 \ud328\ub7ec\ub2e4\uc784\uc744 \ub300\uccb4\ud558\uace0 \uc11c\ubc84\uc758 \uae30\ub2a5\uacfc \ub370\uc774\ud130 \ub178\ucd9c\uc5d0 \uc0c8\ub85c\uc6b4 \ud45c\uc900\uc774 \ub418\uc5b4\uac00\uace0\uc788\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"\ub3c5\uc790\ubd84\ub4e4\uc740 \uc5b4\ub5bb\uac8c \uc790\uc2e0\ub9cc\uc758 \ub3c5\ud2b9\ud55c GraphQL \uc11c\ubc84\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\ub294\uc9c0\uc5d0 \ub300\ud574 \uae30\ucd08\ubd80\ud130 \ubc30\uc6cc\ub098\uac00\uac8c\ub418\uba70 \uc544\ub798\uc758 \uae30\uc220\ub4e4\uc744 \uc0ac\uc6a9\ud558\uac8c\ub429\ub2c8\ub2e4.",r.a.createElement("br",null),"\u2b07\ufe0e\u2b07\ufe0e\u2b07\ufe0e",r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"graphql-yoga"),": Express.js\uc640 apollo-server, graphql-js etc...\ub97c \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc26c\uc6b4 \uad6c\ucd95\uacfc \uc131\ub2a5 & \uac1c\ubc1c\uc790\uc758 \uacbd\ud5d8\uc5d0 \ud3ec\ucee4\uc2a4\ub97c \ub9de\ucd98 Fully-Featured GraphQL\uc11c\ubc84 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"Prisma"),": \uc804\ud1b5\uc801\uc778 ORM(Object-Relational Mapping)\uc744 \ub300\uccb4\ud55c Prisma \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4.",r.a.createElement("br",null)," GraphQL Resolver\uc640 DB \uc811\uadfc\uc744 \uac04\ub2e8\ud788\ud558\uae30\uc704\ud574 Prisma \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ucd95\ud569\ub2c8\ub2e4.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("b",null,"GraphQL Playground"),": Mutation\uacfc Query\ub97c \ubcf4\ub0c4\uc73c\ub85c GraphQL API\uc758 \uae30\ub2a5 \uc0c1\ud638\uc801\uc774\uac8c \ud0d0\ud5d8\ud560 \uc218 \uc788\uac8c \ub3c4\uc640\uc8fc\ub294 GraphQL IDE \uc785\ub2c8\ub2e4. \ubb3c\ub860 \uc5b4\ub5bb\uac8c\ubcf4\uba74 \uc6b0\ub9ac\uac00 \uc775\ud788 \uc54c\uace0\uc788\ub294 Rest API \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 PostMan\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4\ub9cc,"),r.a.createElement("div",{className:"option1"},r.a.createElement("ul",null,r.a.createElement("ol",null,r.a.createElement("p",null,"-\uc0ac\uc6a9\uac00\ub2a5\ud55c API \uc791\ub3d9\uc5d0 \ub300\ud55c \ud3ec\uad04\uc801\uc778 \ubb38\uc11c\ub97c \uc790\ub3d9 \uc0dd\uc131\ud574\uc90d\ub2c8\ub2e4.")),r.a.createElement("ol",null,r.a.createElement("p",null,"-Query, Mutation, Subscription\uc744 \uc791\uc131\ud560 \uc218 \uc788\ub294 \uc5d0\ub514\ud130\ub97c ",r.a.createElement("b",null,"\uc790\ub3d9 \uc644\uc131")," \uae30\ub2a5\uacfc",r.a.createElement("b",null,"\ubb38\ubc95 \ud558\uc774\ub77c\uc774\ud2b8")," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4!!")),r.a.createElement("ol",null,r.a.createElement("p",null,"-API \uc791\ub3d9\uc744 \uc27d\uac8c \uacf5\uc720\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4!")))))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h4",null," What to expect"),r.a.createElement("p",null,"\uc790, \uc6b0\ub9ac\ub294 \uac04\ub2e8\ud55c \ub274\uc2a4 \uc571\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\ub824\uace0\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc77c\ub2e8, GraphQL Server\uac00 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \uac04\ub2e8\ud788 \uc11c\ubc84\ub97c \uc704\ud55c GraphQL Schema\ub97c \uc815\uc758\ud574\ubcf4\uace0 \ubd80\ud569\ud558\ub294 Resolver \uae30\ub2a5\uc744 \uc791\uc131\ud574\ubcf4\uc790\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\ucd08\uae30\uc5d0\ub294 In-Memory\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub85c\ub9cc Resolver\ub97c \uad6c\ud604\ud574\ubcf4\uace0 \ucd94\ud6c4\uc5d0 DB Layer\ub97c \ucd94\uac00\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),r.a.createElement("b",null,"DB Layer"),"\ub294 Prisma\uc5d0\uc11c \uc81c\uacf5\ud558\uba70 GraphQL \uc11c\ubc84\uc640 Prisma \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ud1b5\ud574 \uc5f0\uacb0\ub429\ub2c8\ub2e4.",r.a.createElement("br",null),"DB\uc5d0 \uc5f0\uacb0\ud55c \ud6c4 \ubd80\ud130\ub294 \uace0\uae09 API \ud2b9\uc9d5\uc744 \ub354\ud574\ubcf4\uace0\uc790\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc0ac\uc6a9\uc790\uac00 API\ub97c \ud1b5\ud574 \uc778\uc99d\ud560 \uc218 \uc788\ub294 \ub85c\uadf8\uc778 , \uac00\uc785 \uae30\ub2a5\uc744 \uad6c\ud604\ud574\ubcfc \uc608\uc815\uc785\ub2c8\ub2e4. ",r.a.createElement("br",null),"\ub354 \ub098\uc544\uac00, \ud2b9\uc815 API \ub3d9\uc791\uc5d0 \ub300\ud574 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uad8c\ud55c \uac80\uc0ac\ub3c4 \uad6c\ud604\ud558\uace0\uc790\ud569\ub2c8\ub2e4."))))};function de(){var e=Object(G.a)(["\n    background-color: black;\n    color: white;\n"]);return de=function(){return e},e}var me=I.a.div(de()),se=function(){return r.a.createElement(me,null,r.a.createElement("div",null,r.a.createElement("h3",null,"\uc2e4\uc2b5"),r.a.createElement("p",null,"\uc790, \uc774\uc81c \uc774\ub860\ubcf4\ub2e4\ub294 \ud0a4\ubcf4\ub4dc\uc5d0 \uc190\uac00\ub77d\uc744 \ud55c\ubc88 \uc62c\ub824\ubd05\uc2dc\ub2e4. ",r.a.createElement("br",null),"\uc6b0\uc120 \ub298 \uadf8\ub807\ub4ef\uc774 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud574\uc90d\ub2c8\ub2e4."),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript"},'\n                    mkdir nodeQL\n                    cd nodeQL\n                    yarn init -y\n\n                    $ nodeQL/package.json\n                    // 1\n                    "main": "src/index.js",\n                    // 2\n                    "scripts": {\n                        "start": "nodemon"\n                        }\n                ')),r.a.createElement("div",null,r.a.createElement("p",null,"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub85c\ub294 npm \ubcf4\ub2e4\ub294 yarn\uc744 \uc120\ud638\ud558\ub294 \ud3b8\uc774\ubbc0\ub85c yarn\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\ubb3c\ub860 \ud76c\ub9dd\ud55c\ub2e4\uba74 npm\uc744 \uc0ac\uc6a9\ud558\uc154\ub3c4 \uc804\ud600 \ubb38\uc81c\uac00 \ub418\uc9c0\uc54a\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc6b0\ub9ac\ub294 \ubc29\uae08 ",r.a.createElement("b",null,"nodeQL"),"\uc774\ub77c\ub294 \ud3f4\ub354\ub97c \ub9cc\ub4e4\uc5c8\uace0, yarn\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ucd08\uae30\ud654\ud588\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc774 nodeQL\uc774\ub780 \uc774\ub984\uc740 \uc0ac\uc6a9\uc790\uac00 \uc815\ud558\uae30 \ub098\ub984\uc774\ub2c8, \ubd80\ub2f4\uac16\uc9c0\ub9c8\uc2dc\uace0 \ud3b8\ud558\uc2e0\ub300\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.",r.a.createElement("br",null),"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0dd\uc131\ub41c package.json\uc744 \uc218\uc815\ud574\uc8fc\uc138\uc694!",r.a.createElement("br",null),"1. src/index.js\ub97c \uba54\uc778\uc73c\ub85c \uc124\uc815\ud558\uaca0\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4. ",r.a.createElement("br",null),"\uc790\ubc14\uc758 main()\uacfc \uc720\uc0ac\ud558\uac8c \uc0dd\uac01\ud558\uc2dc\uba74 \ud3b8\ud558\uc2e4\ub4ef\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"2. nodemon\uc744 \uc774\uc6a9\ud560\uac81\ub2c8\ub2e4. Spring\uc5d0 Devtools\uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. ",r.a.createElement("br",null))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h3",null,"\uc329(?) GraphQL Server\ub9cc\ub4e4\uc5b4\ubcf4\uae30."),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript"},"\n                        $ root location of project folder\n                            yarn add graphql-yoga\n                            mkdir src \n                            touch src/index.js\n\n                        ")),r.a.createElement("p",null,r.a.createElement("b",null,"graphql-yoga\ub97c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub2e4\uc6b4\ubc1b\uc544\uc90d\uc2dc\ub2e4."),r.a.createElement("br",null),"\uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ub300\ud574 \uc124\uba85\ub4dc\ub9ac\uc790\uba74, GraphQL \uc11c\ubc84\uc758 \uae30\ub2a5\uc744 \ubaa8\ub450 \uac16\ucd98 \uace0\ub9c8\uc6b4 \ub140\uc11d\uc785\ub2c8\ub2e4.",r.a.createElement("br",null)," Express.js\ub97c \ud3ec\ud568\ud55c \ub2e4\ub978 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc84c\uc73c\uba70 \uc544\ub798\uc640 \uac19\uc740 \ud2b9\uc9d5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.",r.a.createElement("ul",null,r.a.createElement("li",null,"GraphQL \uad6c\uaca9\uc744 \uc900\uc218\ud569\ub2c8\ub2e4."),r.a.createElement("li",null,"\ud30c\uc77c \uc5c5\ub85c\ub4dc \uc9c0\uc6d0"),r.a.createElement("li",null,"GraphQL Subscription\uc73c\ub85c \uc2e4\uc2dc\uac04 \uc791\ub3d9 \uc9c0\uc6d0"),r.a.createElement("li",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud0c0\uc774\ud551 \uc9c0\uc6d0"),r.a.createElement("li",null,"\ub0b4\uc7a5 GraphQL Playground \uc9c0\uc6d0 (\ubcc4\ub2e4\ub978 \uc124\uce58\uacfc\uc815 X)"),r.a.createElement("li",null,"Express.js\ub97c \ud1b5\ud574 \ud655\uc7a5\uac00\ub2a5"),r.a.createElement("li",null,"\uc0ac\uc6a9\uc790\uc758 GraphQL schema\uc5d0 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc9c0\uc2dc\ubb38 \ud574\uc11d\uac00\ub2a5"),r.a.createElement("li",null,"Query \uc2e4\ud589 \ucd94\uc801\uac00\ub2a5"),r.a.createElement("li",null,"application/json\uacfc application/graphql \uc9c0\uc6d0"),r.a.createElement("li",null,"now,up,AWS Lambda, Heroku \ub4f1\ub4f1\uc5d0 \ubcc4\ub2e4\ub978 \uc81c\uc57d\uc5c6\uc774 \uc791\ub3d9\uac00\ub2a5.")),"\uac04\ub7b5\ud558\uac8c\ub9cc \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc790, \uc774\uc81c \ubcf8\uaca9\uc801\uc73c\ub85c \ucf54\ub529\uc744 \ud574\ubd05\uc2dc\ub2e4!",r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript"},"\n                        $ src/index.js\n\n                        const { GraphQLServer } = require('graphql-yoga')\n\n                        // 1\n                        const typeDefs = `\n                        type Query {\n                            info: String!\n                        }\n                        `\n\n                        // 2\n                        const resolvers = {\n                        Query: {\n                            info: () => `This is the API of a Hackernews Clone`\n                        }\n                        }\n\n                        // 3\n                        const server = new GraphQLServer({\n                            typeDefs,\n                            resolvers,\n                        })\n                        server.start(() => console.log(`Server is running on http://localhost:4000`))\n                        ")),"\ucc98\uc74c\ubcf4\ub294 \uad6c\uc870\uc5d0 \ub2f9\ud669\ud558\uc2e4\uc218\ub3c4\uc788\uc2b5\ub2c8\ub2e4\ub9cc, \uac71\uc815\ub9c8\uc2dc\uace0 \ucc2c\ucc2c\ud788 \ud558\ub098\uc529 \ub72f\uc5b4\ubd05\uc2dc\ub2e4.",r.a.createElement("br",null),r.a.createElement("hr",null),"1. typeDefs\ub294 \ubcc0\uc218\uc758 \uc774\ub984 \uadf8\ub300\ub85c GraphQL Schema\uc5d0 \ub300\ud55c \ud0c0\uc785\uc744 \uc815\uc758\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"\uadf8\ub807\ub2e4\uba74 \uc704 \ucf54\ub4dc\uc758 \uc758\ubbf8\ub294 Query\ub77c\ub294 \ud0c0\uc785\uc744 \uc815\uc758\ud588\uace0, info\ub77c\ub294 field\ub97c \uac00\uc9c0\uace0\uc788\ub2e4! \ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"2. resolovers \uac1d\uccb4\ub294 GraphQL Schema\uc758 \uc2e4\uc81c \uad6c\ud604\uccb4\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\uad6c\uc870\ub294 typeDefs\uc640 \ub3d9\uc77c\ud558\uace0 \ub3d9\uc77c\ud574\uc57c\ud569\ub2c8\ub2e4.",r.a.createElement("br",null),"3. \ub9c8\uc9c0\ub9c9\uc73c\ub85c Schema\uc640 Resolver\ub97c GraphQLServer\uc5d0 \uc804\ub2ec\ud574\uc90d\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc774 \ubd80\ubd84\uc740 \uc11c\ubc84\uc5d0 \ubb34\uc2a8 API \ub3d9\uc791\uc744 \ubc1b\uc544\ub4e4\uc5b4\uc57c\ud558\uba70, \uc5b4\ub5bb\uac8c \ud480\uc5b4\uc57c\ud558\ub294\uc9c0\uc5d0 \ub300\ud574 \uc54c\ub824\uc90d\ub2c8\ub2e4.",r.a.createElement("br",null),r.a.createElement("hr",null),"\uc790 \uc774\uc81c \uc2e4\ud589\uc2dc\ucf1c\ubd05\uc2dc\ub2e4!",r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript"},"\n                                $ ../nodeQL/\n                                yarn start\n                            ")),"localhost:4000\uc73c\ub85c \uc811\uc18d\ud574\ubcf4\uc2e0\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc740 \ud654\uba74\uc744 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",r.a.createElement("br",null),"\uc55e\uc11c \uc124\uba85\ud588\ub358 GraphQL Playground(GraphQL IDE)\uc785\ub2c8\ub2e4."))))},pe=function(e){var n=e.store;return r.a.createElement(f.a,{store:n},r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{exact:!0,path:"/react-git-page/",component:te}),r.a.createElement(v.a,{exact:!0,path:"/",component:te}),r.a.createElement(v.a,{exact:!0,path:"/moive",component:_}),r.a.createElement(v.a,{exact:!0,path:"/shopping",component:$}),r.a.createElement(v.a,{exact:!0,path:"/graphql",component:oe}),r.a.createElement(v.a,{exact:!0,path:"/graphql/tutorial-1",component:ue}),r.a.createElement(v.a,{exact:!0,path:"/graphql/tutorial-2",component:se}))))};o.a.render(r.a.createElement(pe,{store:g}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,n){e.exports="data:image/png;base64,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"},52:function(e,n,a){e.exports=a(114)},58:function(e,n,a){},59:function(e,n,a){},67:function(e,n,a){e.exports=a.p+"static/media/avengers2.6b3ed490.png"}},[[52,1,2]]]);
//# sourceMappingURL=main.89bf8d19.chunk.js.map