webpackJsonp([1],{"+PG5":function(t,e){},"+aM5":function(t,e){t.exports={lowco:{name:"Lowco.tv",icon:"lowco",styles:{"background-image":"url('/static/project-icons/lowco.png')","background-color":"#f9b700",color:"#2f3243"},description:"A Vue.js website for the twitch streamer lowco",location:"http://lowco.tv/"},twitchMap:{name:"Follower Mapper",styles:{"background-image":"url('/static/project-icons/twitch.png')","background-color":"#6441A4",color:"#FCFFF6"},description:"A tool that shows who your latest twitch followers follow",location:"http://streamersquare.com/follower-mapper/"},catalyst:{name:"Team Catalyst",styles:{"background-image":"url('/static/project-icons/catalyst.png')","background-color":"#333439",color:"#FCFFF6"},description:"A Vue.js website for the twitch stream team Catalyst",location:"http://teamcatalyst.tv/"},"twitch-bot":{name:"Twitch Bot",styles:{"background-image":"url('/static/project-icons/twitch.png')","background-color":"#6441A4",color:"#FCFFF6"},description:"A twitch chat bot with features to encourage chat participation",location:"https://github.com/gregle/TwitchBot"},"twitch-embed":{name:"Twitch Embed",styles:{"background-image":"url('/static/project-icons/twitch.png')","background-color":"#6441A4",color:"#FCFFF6"},description:"A small stylesheet for embedding a reactive 16:9 twitch stream/chat",location:"https://github.com/gregle/embedTwitchCSS"},"washington-map":{name:"Pixel Washington",styles:{"background-image":"url('/static/project-icons/washington.png')","background-color":"#44881a",color:"#FCFFF6"},description:"Practicing tile sets with an old school pixel map of Washington",location:"http://imgur.com/cHNydgs"},elevatorjs:{name:"Elevator.js Extension",styles:{"background-image":"url('/static/project-icons/elevatorjs.png')","background-color":"#ffffff",color:"#2f3243"},description:"An elevator.js inspired chrome extension to get to the top of any page in style",location:"https://chrome.google.com/webstore/detail/elevatorjs/acmjcgicemggkmhnebogjnncjdbnkbno"},shrimpfest:{name:"Shrimpfest Countdown",styles:{"background-image":"url('/static/project-icons/shrimpfest.png')","background-color":"#00bfe9",color:"#2f3243"},description:"A countdown to Shrimpfest, the biggest event of the year",location:"/shrimpfest"},"music-fall":{name:"Music Fall (Android)",styles:{"background-image":"url('/static/project-icons/music-fall.png')","background-color":"#aea8a8",color:"#2f3243"},description:"Dodge walls and fall through a music-thumping & color-changing world",location:"https://play.google.com/store/apps/details?id=com.gregles.musicfall"},"typing-game":{name:"The Typing Dead",description:"Type words. Kill zombies. What more could you want?",styles:{"background-image":"url('/static/project-icons/typing-dead.png')","background-color":"#998343",color:"#FCFFF6"},location:"/typing-dead"},"color-game":{name:"Color Game",description:"Try spelling the color of the words you're reading",styles:{"background-image":"url('/static/project-icons/color-game.png')","background-color":"#2c2c2c",color:"#FCFFF6"},location:"/color-game"},Wikilocation:{name:"Wikilocation",description:"A tool which maps wikipedia articles by their location",styles:{"background-image":"url('/static/project-icons/wikilocation.png')","background-color":"#abcbd8",color:"#2f3243"},location:"/wikilocation"}}},"+uZs":function(t,e){},0:function(t,e){},"8XJx":function(t,e){},"9TNQ":function(t,e){},D4uH:function(t,e,a){"use strict";var i=a("bOdI"),s=a.n(i),n={},o={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return s()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,a,i){var s="fa-"+(r++).toString(16);return e[i]=s,' id="'+s+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,a,i,s){var n=a||s;return n&&e[n]?"#"+e[n]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,a=0;this.$children.forEach(function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),a=Math.max(a,i.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),n[e]=a}},icons:n},r=870711;var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return a("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return a("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("DP+K")},null,null);e.a=c.exports},"DP+K":function(t,e){},EBKZ:function(t,e){},Gea4:function(t,e,a){t.exports=a.p+"static/img/logo.19f4fb5.png"},NC3n:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},s,!1,function(t){a("9TNQ")},null,null).exports,o=a("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://twitter.com/Gregle_",title:"twitter",target:"_blank","aria-label":"twitter @gregle_"}},[e("icon",{staticClass:"icon",attrs:{name:"twitter",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://github.com/gregle",title:"github",target:"_blank","aria-label":"github gregle"}},[e("icon",{staticClass:"icon",attrs:{name:"github",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://www.instagram.com/gregle90/",title:"instagram",target:"_blank","aria-label":"instagram gregle90"}},[e("icon",{staticClass:"icon",attrs:{name:"instagram",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/pub/justin-rastelli/68/aa7/b06/",title:"linkedin",target:"_blank","aria-label":"linkedin profile"}},[e("icon",{staticClass:"icon",attrs:{name:"linkedin",scale:this.iconSize}})],1)])},staticRenderFns:[]};var l={name:"header-bar",components:{SocialMediaIcons:a("VU/8")({name:"social-media-icons",data:function(){return{iconSize:2}}},r,!1,function(t){a("+PG5")},"data-v-03adc16e",null).exports},data:function(){return{videoPaused:!1}},methods:{playPause:function(){var t=this.$refs.video;t.paused?(t.play(),this.videoPaused=!1):(t.pause(),this.videoPaused=!0)},skipToMain:function(){var t=document.getElementById("main");console.log(t),t.focus()}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav"},[i("div",{staticClass:"nav-top"},[i("router-link",{attrs:{to:"/",title:"jcrastelli.com"}},[i("img",{staticClass:"logo",attrs:{src:a("Gea4"),alt:"jcrastelli-logo"}})]),t._v(" "),i("button",{staticClass:"skipToMain",on:{click:t.skipToMain}},[t._v("Skip to Main Content")]),t._v(" "),i("social-media-icons",{staticClass:"social",attrs:{iconSize:1.5}})],1),t._v(" "),i("div",{staticClass:"nav-mid"},[i("div",[i("video",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:.3,expression:"0.3",modifiers:{absY:!0}}],ref:"video",attrs:{src:a("j2Vl"),id:"video-container",width:"100%",autoplay:"",loop:"",muted:""},domProps:{muted:!0}})]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"play-btn-container"},[i("icon",{staticClass:"icon",attrs:{name:"chevron-down",scale:1.25}}),t._v(" "),i("button",{staticClass:"btn",class:{pause:!t.videoPaused,play:t.videoPaused},attrs:{"aria-label":t.videoPaused?"Play header video":"Pause header video",title:t.videoPaused?"Play header video":"Pause header video"},on:{click:t.playPause}},[i("span",{staticClass:"bar bar-1"}),t._v(" "),i("span",{staticClass:"bar bar-2"})])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("h1",[this._v("welcome, I'm justin")]),this._v(" "),e("p",[this._v("I'm a developer, photographer, video editor, and all around tinkerer.")]),this._v(" "),e("p",[this._v("Thanks for coming around to see what I've been up to.")])])}]};var d=a("VU/8")(l,c,!1,function(t){a("+uZs")},"data-v-0d9e75cc",null).exports,p=a("+aM5"),h=a.n(p),u={name:"projects",data:function(){return{projectData:h.a}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"projects",attrs:{"aria-labelledby":"projectsHeading",role:"section"}},[a("h2",{staticClass:"section-header",attrs:{id:"projectsHeading"}},[t._v("Projects")]),t._v(" "),a("div",[a("div",{staticClass:"grid"},[t._l(t.projectData,function(e,i){return a("div",{key:i,staticClass:"hex-wrap col"},[a("a",{staticClass:"hexagon",style:e.styles,attrs:{href:e.location,"aria-label":e.name+": "+e.description}},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),a("div",{staticClass:"inner"},[a("div",[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.description))])])])])])}),t._v(" "),a("div",{staticClass:"placeholder"}),t._v(" "),a("div",{staticClass:"placeholder2"}),t._v(" "),a("div",{staticClass:"placeholder3"}),t._v(" "),a("div",{staticClass:"placeholder4"})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hexagon-in1"},[e("div",[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hexagon-in2"},[e("div",[this._v(" ")])])}]};var v=a("VU/8")(u,m,!1,function(t){a("NC3n")},"data-v-7bbc0312",null).exports,g=a("lmzB"),f=a.n(g),_={name:"drawer",props:["post"],computed:{date:function(){var t=new Date(1e3*parseInt(this.post.created_time)),e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getYear()+1900;return e+" "+t.getDate()+", "+a}},watch:{post:{handler:function(t,e){void 0===t&&this.pauseVideo(),void 0!==e&&void 0!==t&&(this.pauseVideo(),this.loadVideo())},deep:!0}},methods:{close:function(){this.$emit("collapse",-1)},pauseVideo:function(){this.$refs.video.pause(),this.videoPaused=!0},loadVideo:function(){this.$refs.video.load()},playPause:function(){var t=this.$refs.video;t.paused?(t.play(),this.videoPaused=!1):(t.pause(),this.videoPaused=!0),t.focus()}},data:function(){return{videoPaused:!0}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"drawer"}},[void 0!==t.post?a("section",{staticClass:"drawer",attrs:{"aria-label":"instagram video panel",tabindex:"0"}},[a("a",{staticClass:"instagram-info",attrs:{href:t.post.link,title:"gregle90 on instagram","aria-label":"gregle90 on instagram"}},[a("img",{staticClass:"instagram-profile",attrs:{src:t.post.user.profile_picture}}),t._v(" "),a("p",[a("b",[t._v(t._s(t.post.user.username))]),t._v(" "),a("icon",{staticClass:"icon",attrs:{name:"instagram",scale:1}}),a("br"),t._v("\n        "+t._s(t.post.location.name)+"\n      ")],1)]),t._v(" "),a("button",{staticClass:"btn-close",attrs:{title:"close panel"},on:{click:t.close}},[a("icon",{staticClass:"icon",attrs:{name:"close",scale:1}})],1),t._v(" "),a("div",{staticClass:"video-embed"},[a("video",{ref:"video",attrs:{loop:"",poster:t.post.images.standard_resolution.url,"aria-label":t.post.location.name+" timelapse"}},[a("source",{attrs:{src:t.post.videos.standard_resolution.url,type:"video/mp4"}}),t._v(" "),a("p",[t._v("Your browser doesn't support this kind of video. Here is a "),a("a",{attrs:{href:t.post.link}},[t._v("link to the video")]),t._v(" instead.")])]),t._v(" "),a("button",{staticClass:"btn",class:{pause:!t.videoPaused,play:t.videoPaused},attrs:{"aria-label":t.videoPaused?"Play video":"Pause video",title:t.videoPaused?"Play video":"Pause video"},on:{click:t.playPause}},[a("span",{staticClass:"bar bar-1"}),t._v(" "),a("span",{staticClass:"bar bar-2"})])]),t._v(" "),a("span",{staticClass:"info-span"},[t._v(t._s(t.date)),a("span",[a("b",[t._v(t._s(t.post.likes.count))]),t._v("  "),a("icon",{staticClass:"insta icon",attrs:{name:"heart",scale:1}})],1)]),t._v(" "),a("p",{staticClass:"caption"},[t._v(t._s(t.post.caption.text))])]):t._e()])},staticRenderFns:[]};var w=a("VU/8")(_,b,!1,function(t){a("RYCb")},"data-v-443c2aa3",null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marker mapboxgl-marker mapboxgl-marker-anchor-center ",class:{expanded:this.expanded,small:this.small},on:{click:this.expand}},[e("img",{attrs:{src:this.marker.images.low_resolution.url}})])},staticRenderFns:[]};var y=a("VU/8")({name:"MapMarker",props:["marker","expanded","small"],methods:{expand:function(){this.$emit("expand",{index:this.marker.index})}},data:function(){return{}}},k,!1,function(t){a("qe1I")},"data-v-30a0bfae",null).exports,C={name:"list",props:["posts","showList"],components:{MapMarker:y},methods:{flyTo:function(t){var e={index:t,cords:[this.posts[t].location.longitude,this.posts[t].location.latitude]};this.$emit("flyTo",e)}},data:function(){return{}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"list"}},[!0===t.showList?a("div",{staticClass:"list"},t._l(t.posts,function(e,i){return a("div",{key:i,staticClass:"post",attrs:{id:e.id}},[a("button",{attrs:{"aria-labelledby":e.id+"_lbl","aria-expanded":e.expanded},on:{click:function(e){t.flyTo(i)}}},[a("map-marker",{attrs:{marker:e,expanded:e.expanded,small:!0}})],1),t._v(" "),a("label",{staticClass:"label",attrs:{id:e.id+"_lbl","aria-label":e.location.name+" timelapse"}},[t._v(t._s(e.location.name))])])})):t._e()])},staticRenderFns:[]};var M=a("VU/8")(C,x,!1,function(t){a("iqW2")},"data-v-2ab477d8",null).exports,T={name:"timelapseMap",props:["posts"],components:{MglMap:g.MglMap,MglMarker:g.MglMarker,MglPopup:g.MglPopup,MapMarker:y,MglNavigationControl:g.MglNavigationControl,MglGeolocateControl:g.MglGeolocateControl,Drawer:w,PostList:M},methods:{flyTo:function(t,e){this.$refs.map.flyTo({center:t,zoom:e,around:t})},collapseMarkers:function(t){for(var e=0;e<this.markers.length;e++)e!==t&&(this.markers[e].expanded=!1);-1===t&&(this.selectedMarker=void 0),this.$forceUpdate()},toggleMarker:function(t){event.stopPropagation(),this.collapseMarkers(t.index),this.markers[t.index].expanded=!0,this.selectedMarker=this.markers[t.index],t.cords&&this.$refs.map.center[0]!==t.cords[0]&&this.$refs.map.center[1]!==t.cords[1]&&this.flyTo(t.cords,12)},loadData:function(t){for(var e=t.slice(0),a=0;a<e.length;a++)e[a].expanded=!1,e[a].index=a;this.markers=e.slice(0)}},watch:{posts:function(t){this.loadData(t)}},data:function(){return{accessToken:"pk.eyJ1IjoiamNyYXN0ZWxsaSIsImEiOiJjajhvOGd6cmgwMGt2MnhvM2JjcXZmaXNyIn0.dz4w2BTJ6f_sRDfVpd7yqw",mapStyle:"mapbox://styles/jcrastelli/cjiqxmek61oht2rnnqlp3akaw",container:"map",scrollZoom:!1,zoom:6,center:[-122,47.5],markers:void 0,selectedMarker:void 0}}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mgl-map",{ref:"map",staticClass:"map",attrs:{accessToken:t.accessToken,mapStyle:t.mapStyle,center:t.center,zoom:t.zoom,scrollZoom:t.scrollZoom},on:{"update:mapStyle":function(e){t.mapStyle=e},"update:center":function(e){t.center=e},"update:zoom":function(e){t.zoom=e},click:function(e){t.collapseMarkers(-1)}}},[a("mgl-navigation-control",{attrs:{position:"bottom-right"}}),t._v(" "),a("post-list",{attrs:{posts:t.markers,showList:void 0===t.selectedMarker},on:{flyTo:t.toggleMarker}}),t._v(" "),a("drawer",{ref:"drawer",attrs:{post:t.selectedMarker,tabindex:"0"},on:{collapse:t.collapseMarkers}}),t._v(" "),t._l(t.markers,function(e,i){return null!==e.location?a("mgl-marker",{key:i,staticClass:"marker",attrs:{coordinates:[e.location.longitude,e.location.latitude],anchor:"center"}},[a("map-marker",{attrs:{slot:"marker",marker:e,expanded:e.expanded},on:{expand:t.toggleMarker},slot:"marker"})],1):t._e()})],2)},staticRenderFns:[]};var S=a("VU/8")(T,j,!1,function(t){a("EBKZ")},"data-v-3ded218c",null).exports,F=a("//Fk"),P=a.n(F),z=function(){return new P.a(function(t,e){i.a.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=2912883595.e534eb5.a692091c362641a4962628a5f3c1e0b8").then(function(e){t(e)},function(t){e(t)})})},E={name:"timelapses",components:{TimelapseMap:S},created:function(){z().then(function(t){this.posts=t.body.data}.bind(this))},data:function(){return{posts:[]}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timelapses"},[e("section",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.6,expression:"-0.6",modifiers:{absY:!0}}],attrs:{"aria-label":"timelapse map",role:"section"}},[e("h2",{staticClass:"section-header"},[this._v("Timelapses")]),this._v(" "),e("TimelapseMap",{attrs:{posts:this.posts}})],1)])},staticRenderFns:[]};var V=a("VU/8")(E,$,!1,function(t){a("kizy")},"data-v-507f6b32",null).exports,I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"twitter"},[e("div",{staticClass:"header"},[e("h3",[this._v("Tweets")]),this._v(" by "),e("a",{attrs:{href:"https://twitter.com/Gregle_",title:"@Gregle_ on twitter"}},[this._v("@Gregle_")])]),this._v(" "),e("div",{staticClass:"twitter-feed"},[e("a",{staticClass:"twitter-timeline",attrs:{"data-dnt":"true","data-theme":"dark","data-link-color":"#91aa9d",href:"https://twitter.com/Gregle_?ref_src=twsrc%5Etfw","data-chrome":"transparent nofooter noheader","data-tweet-limit":"10"}})])])}]};var R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-list"},[a("div",{staticClass:"header"},[a("h3",[t._v("Write Ups")]),t._v(" by "),a("a",{attrs:{href:"https://medium.com/@Gregles",title:"@Gregles on medium"}},[t._v("@Gregles")])]),t._v(" "),a("a",{attrs:{href:"http://streamersquare.com/stylesheet-embedding-twitch-streams/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("The Usefulness of Uselessness")]),t._v(" "),a("p",[t._v("An exploration of, and an argument for, website Easter Eggs. Largely based on insufficient data and illogical conclusions, I just really love hunting for and finding bursts of creativity hidden in websites. So I'm sharing some of my favorite ones, and a few that I've planted myself and the design behind them (correct or otherwise).")])])]),t._v(" "),a("a",{attrs:{href:"https://github.com/seattle-imtech/seattle-vr/blob/master/community-survey/community-survey-2018.md"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Seattle VR 2018 Community Survey Results/Review")]),t._v(" "),a("p",[t._v("A review and analysis of the Seattle VR 2018 Community Survey.")])])]),t._v(" "),a("a",{attrs:{href:"https://medium.com/cinematicvr/lessons-learned-in-360-degrees-98b12d4cb134"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Lessons Learned in 360 Degrees")]),t._v(" "),a("p",[t._v("During a trip to Japan, I was able to experiment with 360Rize’s Pro6 360 degree camera rig. Though I didn’t quite get the quality of captures I was hoping for, I still ended up learning a lot about the process of capturing and creating 360 degree video. This is in no way a complete list of tips for shooting in 360 degrees. There are already many blogs, from far more qualified writers about that. This should be considered more an addendum specific to my goals and my experiences.")])])]),t._v(" "),a("a",{attrs:{href:"http://streamersquare.com/stylesheet-embedding-twitch-streams/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Streamer Square: Embedding Responsive Twitch Streams")]),t._v(" "),a("p",[t._v("A guide to embedding a twitch stream/chat in a responsive 16:9 container")])])]),t._v(" "),a("a",{attrs:{href:"https://jcrastelli.wordpress.com/2013/07/25/tic-tac-toe-devlopment-walkthrough/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Android: Building Tic-Tac-Toe")]),t._v(" "),a("p",[t._v("An old guide for building Tic-Tac-Toe I wrote up several years back. The over-all project is outdated at this point, but the AI and game logic is still worthwhile. The Tic-Tac-Toe ruleset isn't exactly evolving anytime soon.")])])])])}]};var G={name:"blogs",components:{Timeline:a("VU/8")({name:"twitter",data:function(){return{}}},I,!1,function(t){a("8XJx")},"data-v-e3c7f0c2",null).exports,BlogList:a("VU/8")({name:"bloglist",data:function(){return{}}},R,!1,function(t){a("ark4")},"data-v-0f9265ac",null).exports},data:function(){return{}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"blogs",attrs:{"aria-labelledby":"blogsHeading",role:"section"}},[e("h2",{staticClass:"section-header",attrs:{id:"blogsHeading"}},[this._v("README.md")]),this._v(" "),e("div",{staticClass:"blog-flex"},[e("Timeline"),this._v(" "),e("BlogList")],1)])},staticRenderFns:[]};var N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"connect"},[a("section",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.2,expression:"-0.2",modifiers:{absY:!0}}],attrs:{"aria-labelledby":"connectHeading",role:"section"}},[a("h2",{staticClass:"section-header",attrs:{id:"connectHeading"}},[t._v("Connect")]),t._v(" "),a("div",{staticClass:"social"},[a("a",{staticClass:"link-wrap twitter",attrs:{href:"https://twitter.com/Gregle_",title:"Gregle_ on Twitter",target:"_blank",rel:"noopener"}},[a("icon",{staticClass:"icon",attrs:{name:"twitter",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Gregle_")])],1),t._v(" "),a("a",{staticClass:"link-wrap github",attrs:{href:"https://github.com/gregle",title:"Gregle on Github",target:"_blank",rel:"noopener"}},[a("icon",{staticClass:"icon",attrs:{name:"github",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Gregle")])],1),t._v(" "),a("a",{staticClass:"link-wrap instagram",attrs:{href:"https://www.instagram.com/gregle90/",title:"Gregle90 on Instagram",target:"_blank",rel:"noopener"}},[a("icon",{staticClass:"icon",attrs:{name:"instagram",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Gregle90")])],1)]),t._v(" "),a("div",{staticClass:"email"},[a("a",{staticClass:"link-wrap",attrs:{href:"mailto:justin@jcrastelli.com",title:"email: justin@jcrastelli.com",rel:"noopener"}},[a("icon",{staticClass:"icon",attrs:{name:"envelope",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Justin@jcrastelli.com")])],1),t._v(" "),a("span",{staticClass:"link-wrap heart"},[a("icon",{staticClass:"icon heart",attrs:{name:"heart",scale:t.iconSize}})],1)])])])},staticRenderFns:[]};var H={name:"Home",components:{Header:d,Projects:v,Timelapses:V,Blogs:a("VU/8")(G,A,!1,function(t){a("ikhp")},"data-v-65ffbea0",null).exports,Connect:a("VU/8")({name:"connect",data:function(){return{iconSize:5}}},N,!1,function(t){a("modX")},"data-v-7718a075",null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-view"},[e("Header"),this._v(" "),e("main",{attrs:{id:"main",tabindex:"0","aria-label":"Justin Rastelli's portfolio"}},[e("Projects",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.2,expression:"-0.2",modifiers:{absY:!0}}]}),this._v(" "),e("Timelapses"),this._v(" "),e("Blogs",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.2,expression:"-0.2",modifiers:{absY:!0}}]}),this._v(" "),e("Connect")],1)],1)},staticRenderFns:[]};var U=a("VU/8")(H,D,!1,function(t){a("od6B")},null,null).exports;i.a.use(o.a);var B=new o.a({routes:[{path:"/",name:"Home",component:U,mode:"history"}]}),q=a("1e2d"),Y=a.n(q),W=(a("D/PP"),a("D4uH")),J=a("8+8L"),L=a("zart");i.a.use(J.a),i.a.use(L.a,{minWidth:600}),i.a.use(f.a,{mapboxgl:Y.a}),i.a.config.productionTip=!1,i.a.component("icon",W.a),new i.a({el:"#app",router:B,template:"<App/>",components:{App:n}})},RYCb:function(t,e){},ark4:function(t,e){},ikhp:function(t,e){},iqW2:function(t,e){},j2Vl:function(t,e,a){t.exports=a.p+"static/media/videoheader3.08cfe6f.mp4"},kizy:function(t,e){},modX:function(t,e){},od6B:function(t,e){},qe1I:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.24090b80bb93d7fab15e.js.map