webpackJsonp([1],{"+aM5":function(t,e){t.exports={seattlevr:{name:"Seattle VR",icon:"seattlevr",styles:{"background-image":"url('/static/project-icons/seattlevr.png')","background-color":"#298dcf",color:"#FCFFF6"},description:"Organizing regular meetups for VR/AR developers and enthusiasts in the Seattle area",location:"https://www.meetup.com/Seattle-VR-Demos-Experiences"},lowco:{name:"Lowco.tv",icon:"lowco",styles:{"background-image":"url('/static/project-icons/lowco.png')","background-color":"#f9b700",color:"#2f3243"},description:"A Vue.js website for the twitch streamer lowco",location:"http://lowco.tv/"},twitchMap:{name:"Follower Mapper",styles:{"background-image":"url('/static/project-icons/followers.png')","background-color":"#6441A4",color:"#FCFFF6"},description:"A tool that shows who your latest twitch followers follow",location:"http://streamersquare.com/follower-mapper/"},catalyst:{name:"Team Catalyst",styles:{"background-image":"url('/static/project-icons/catalyst.png')","background-color":"#333439",color:"#FCFFF6"},description:"A Vue.js website for the twitch stream team Catalyst",location:"http://teamcatalyst.tv/"},"twitch-bot":{name:"Twitch Bot",styles:{"background-image":"url('/static/project-icons/twitchbot2.png')","background-color":"#3d2577",color:"#FCFFF6"},description:"A twitch chat bot with features to encourage chat participation",location:"https://github.com/gregle/TwitchBot"},"twitch-embed":{name:"Twitch Embed",styles:{"background-image":"url('/static/project-icons/twitch.png')","background-color":"#6441A4",color:"#FCFFF6"},description:"A small stylesheet for embedding a reactive 16:9 twitch stream/chat",location:"https://github.com/gregle/embedTwitchCSS"},"washington-map":{name:"Pixel Washington",styles:{"background-image":"url('/static/project-icons/washington.png')","background-color":"#44881a",color:"#FCFFF6"},description:"Practicing tile sets with an old school pixel map of Washington",location:"http://imgur.com/cHNydgs"},elevatorjs:{name:"Elevator.js Extension",styles:{"background-image":"url('/static/project-icons/elevatorjs.png')","background-color":"#ffffff",color:"#2f3243"},description:"An elevator.js inspired chrome extension to get to the top of any page in style",location:"https://chrome.google.com/webstore/detail/elevatorjs/acmjcgicemggkmhnebogjnncjdbnkbno"},shrimpfest:{name:"Shrimpfest Countdown",styles:{"background-image":"url('/static/project-icons/shrimpfest.png')","background-color":"#00bfe9",color:"#FCFFF6"},description:"A countdown to Shrimpfest, the biggest event of the year",location:"/projects/shrimpfest/"},"music-fall":{name:"Music Fall (Android)",styles:{"background-image":"url('/static/project-icons/music-fall.png')","background-color":"#aea8a8",color:"#2f3243"},description:"Dodge walls and fall through a music-thumping & color-changing world",location:"https://play.google.com/store/apps/details?id=com.gregles.musicfall"},"typing-game":{name:"The Typing Dead",description:"Type words. Kill zombies. What more could you want?",styles:{"background-image":"url('/static/project-icons/typing-dead.png')","background-color":"#998343",color:"#FCFFF6"},location:"/projects/typing-dead/"},"color-game":{name:"Color Game",description:"Try spelling the color of the words you're reading",styles:{"background-image":"url('/static/project-icons/color-game.png')","background-color":"#2c2c2c",color:"#FCFFF6"},location:"/projects/typing/"},Wikilocation:{name:"Wikilocation",description:"A tool which maps wikipedia articles by their location",styles:{"background-image":"url('/static/project-icons/wikilocation.png')","background-color":"#abcbd8",color:"#2f3243"},location:"/projects/wikilocation/"}}},0:function(t,e){},"9aML":function(t,e){},A1Lk:function(t,e){},BIZm:function(t,e){},D4uH:function(t,e,a){"use strict";var i=a("bOdI"),s=a.n(i),n={},r={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return s()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,a,i){var s="fa-"+(o++).toString(16);return e[i]=s,' id="'+s+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,a,i,s){var n=a||s;return n&&e[n]?"#"+e[n]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,a=0;this.$children.forEach(function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),a=Math.max(a,i.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),n[e]=a}},icons:n},o=870711;var c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return a("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return a("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var l=a("VU/8")(r,c,!1,function(t){a("DP+K")},null,null);e.a=l.exports},"DP+K":function(t,e){},ENL8:function(t,e){},Gea4:function(t,e,a){t.exports=a.p+"static/img/logo.f80ef7c.png"},KA7a:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},s,!1,function(t){a("U1uK")},null,null).exports,r=a("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://twitter.com/Gregle_",title:"twitter","aria-label":"twitter @gregle_"}},[e("icon",{staticClass:"icon",attrs:{name:"twitter",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://github.com/gregle",title:"github","aria-label":"github gregle"}},[e("icon",{staticClass:"icon",attrs:{name:"github",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://www.instagram.com/gregle90/",title:"instagram","aria-label":"instagram gregle90"}},[e("icon",{staticClass:"icon",attrs:{name:"instagram",scale:this.iconSize}})],1),this._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/pub/justin-rastelli/68/aa7/b06/",title:"linkedin","aria-label":"linkedin profile"}},[e("icon",{staticClass:"icon",attrs:{name:"linkedin",scale:this.iconSize}})],1)])},staticRenderFns:[]};var c={name:"header-bar",components:{SocialMediaIcons:a("VU/8")({name:"social-media-icons",data:function(){return{iconSize:2}}},o,!1,function(t){a("z6Eg")},"data-v-42744d74",null).exports},data:function(){return{videoPaused:!1}},methods:{playPause:function(){var t=this.$refs.video;t.paused?(t.play(),this.videoPaused=!1):(t.pause(),this.videoPaused=!0)},skipToMain:function(){var t=document.getElementById("main");t.scrollIntoView(),t.focus()}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav"},[i("div",{staticClass:"nav-top"},[i("router-link",{attrs:{to:"/",title:"jcrastelli.com"}},[i("img",{staticClass:"logo",attrs:{src:a("Gea4"),alt:"jcrastelli-logo"}})]),t._v(" "),i("button",{staticClass:"skipToMain",on:{click:t.skipToMain}},[t._v("Skip to Main Content")]),t._v(" "),i("social-media-icons",{staticClass:"social",attrs:{iconSize:1.5}})],1),t._v(" "),i("div",{staticClass:"nav-mid"},[i("video",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:.3,expression:"0.3",modifiers:{absY:!0}}],ref:"video",attrs:{src:a("XcPX"),id:"video-container",poster:a("hE1Z"),width:"100%",autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"bottom"},[i("p",[t._v("Thanks for coming around to see what I've been up to")]),t._v(" "),i("div",{staticClass:"play-btn-container"},[i("button",{staticClass:"btn down",attrs:{"aria-label":"jump to project section"},on:{click:t.skipToMain}},[i("icon",{staticClass:"icon",attrs:{name:"chevron-down",scale:1.25}})],1),t._v(" "),i("button",{staticClass:"btn",class:{pause:!t.videoPaused,play:t.videoPaused},attrs:{"aria-label":t.videoPaused?"Play header video":"Pause header video",title:t.videoPaused?"Play header video":"Pause header video"},on:{click:t.playPause}},[i("span",{staticClass:"bar bar-1"}),t._v(" "),i("span",{staticClass:"bar bar-2"})])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("h1",[this._v("Welcome, I'm Justin")]),this._v(" "),e("p",[this._v("I'm a developer, photographer,"),e("br"),this._v("video editor, and all around tinkerer.")])])}]};var d=a("VU/8")(c,l,!1,function(t){a("UEp9")},"data-v-46cbed36",null).exports,p=a("+aM5"),u=a.n(p),h={name:"projects",data:function(){return{projectData:u.a}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"projects",attrs:{"aria-labelledby":"projectsHeading"}},[a("h2",{staticClass:"section-header",attrs:{id:"projectsHeading"}},[t._v("Projects")]),t._v(" "),a("div",[a("div",{staticClass:"grid"},[t._l(t.projectData,function(e,i){return a("div",{key:i,staticClass:"hex-wrap"},[a("a",{staticClass:"hexagon",style:e.styles,attrs:{href:e.location,"aria-label":e.name+": "+e.description}},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),a("div",{staticClass:"inner"},[a("div",[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.description))])])])])])}),t._v(" "),a("div",{staticClass:"placeholder"}),t._v(" "),a("div",{staticClass:"placeholder2"}),t._v(" "),a("div",{staticClass:"placeholder3"}),t._v(" "),a("div",{staticClass:"placeholder4"}),t._v(" "),a("div",{staticClass:"placeholder5"}),t._v(" "),a("div",{staticClass:"placeholder6"})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hexagon-in1"},[e("div",[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hexagon-in2"},[e("div",[this._v(" ")])])}]};var v=a("VU/8")(h,m,!1,function(t){a("tdlQ")},"data-v-ddc6e57a",null).exports,f=a("lmzB"),g=a.n(f),_={name:"drawer",props:["post"],computed:{date:function(){var t=new Date(1e3*parseInt(this.post.created_time)),e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getYear()+1900;return e+" "+t.getDate()+", "+a}},watch:{post:{handler:function(t,e){void 0===t&&this.pauseVideo(),void 0!==e&&void 0!==t&&(this.pauseVideo(),this.loadVideo())},deep:!0}},methods:{close:function(){this.$emit("collapse",-1)},pauseVideo:function(){this.$refs.video.pause(),this.videoPaused=!0},loadVideo:function(){this.$refs.video.load()},playPause:function(){var t=this.$refs.video;t.paused?(t.play(),this.videoPaused=!1):(t.pause(),this.videoPaused=!0),t.focus()}},data:function(){return{videoPaused:!0}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"drawer"}},[void 0!==t.post?a("section",{staticClass:"drawer",attrs:{"aria-label":"instagram video panel",tabindex:"0"}},[a("a",{staticClass:"instagram-info",attrs:{href:t.post.link,title:"gregle90 on instagram","aria-label":"gregle90 on instagram"}},[a("img",{staticClass:"instagram-profile",attrs:{src:t.post.user.profile_picture}}),t._v(" "),a("p",[a("b",[t._v(t._s(t.post.user.username))]),t._v(" "),a("icon",{staticClass:"icon",attrs:{name:"instagram",scale:1}}),a("br"),t._v("\n        "+t._s(t.post.location.name)+"\n      ")],1)]),t._v(" "),a("button",{staticClass:"btn-close",attrs:{title:"close panel"},on:{click:t.close}},[a("icon",{staticClass:"icon",attrs:{name:"close",scale:1}})],1),t._v(" "),a("div",{staticClass:"video-embed"},[a("video",{ref:"video",attrs:{loop:"",poster:t.post.images.standard_resolution.url,"aria-label":t.post.location.name+" timelapse"}},[a("source",{attrs:{src:t.post.videos.standard_resolution.url,type:"video/mp4"}}),t._v(" "),a("p",[t._v("Your browser doesn't support this kind of video. Here is a "),a("a",{attrs:{href:t.post.link}},[t._v("link to the video")]),t._v(" instead.")])]),t._v(" "),a("button",{staticClass:"btn",class:{pause:!t.videoPaused,play:t.videoPaused},attrs:{"aria-label":t.videoPaused?"Play video":"Pause video",title:t.videoPaused?"Play video":"Pause video"},on:{click:t.playPause}},[a("span",{staticClass:"bar bar-1"}),t._v(" "),a("span",{staticClass:"bar bar-2"})])]),t._v(" "),a("span",{staticClass:"info-span"},[t._v(t._s(t.date)),a("span",[a("b",[t._v(t._s(t.post.likes.count))]),t._v("  "),a("icon",{staticClass:"insta icon",attrs:{name:"heart",scale:1}})],1)]),t._v(" "),a("p",{staticClass:"caption"},[t._v(t._s(t.post.caption.text))])]):t._e()])},staticRenderFns:[]};var w=a("VU/8")(_,b,!1,function(t){a("KA7a")},"data-v-bbcad044",null).exports,y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"marker mapboxgl-marker mapboxgl-marker-anchor-center ",class:{expanded:t.expanded,small:t.small},on:{click:function(e){t.expand(e)}}},[a("img",{attrs:{src:t.marker.images.low_resolution.url}})])},staticRenderFns:[]};var k=a("VU/8")({name:"MapMarker",props:["marker","expanded","small"],methods:{expand:function(t){var e={index:this.marker.index,cords:[this.marker.location.longitude,this.marker.location.latitude]};this.$emit("expand",{target:e,event:t})}},data:function(){return{}}},y,!1,function(t){a("R3tw")},"data-v-2b3da52a",null).exports,C={name:"list",props:["posts","showList"],components:{MapMarker:k},methods:{flyTo:function(t,e){var a={index:t,cords:[this.posts[t].location.longitude,this.posts[t].location.latitude]};this.$emit("flyTo",{target:a,event:e})}},data:function(){return{}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"list"}},[!0===t.showList?a("div",{staticClass:"list"},t._l(t.posts,function(e,i){return a("div",{key:i,staticClass:"post",attrs:{id:e.id}},[a("button",{attrs:{"aria-labelledby":e.id+"_lbl","aria-expanded":e.expanded},on:{click:function(e){t.flyTo(i,e)}}},[a("map-marker",{attrs:{marker:e,expanded:e.expanded,small:!0}})],1),t._v(" "),a("label",{staticClass:"label",attrs:{id:e.id+"_lbl","aria-label":e.location.name+" timelapse"}},[t._v(t._s(e.location.name))])])})):t._e()])},staticRenderFns:[]};var j=a("VU/8")(C,x,!1,function(t){a("9aML")},"data-v-2e142b17",null).exports,M={name:"timelapseMap",props:["posts"],components:{MglMap:f.MglMap,MglMarker:f.MglMarker,MglPopup:f.MglPopup,MapMarker:k,MglNavigationControl:f.MglNavigationControl,MglGeolocateControl:f.MglGeolocateControl,Drawer:w,PostList:j},methods:{flyTo:function(t,e){this.$refs.map.flyTo({center:t,zoom:e,around:t})},collapseMarkers:function(t){for(var e=0;e<this.markers.length;e++)e!==t&&(this.markers[e].expanded=!1);-1===t&&(this.selectedMarker=void 0),this.$forceUpdate()},toggleMarker:function(t){t.event.stopPropagation(),this.collapseMarkers(t.target.index),this.markers[t.target.index].expanded=!0,this.selectedMarker=this.markers[t.target.index],t.target.cords&&this.$refs.map.center[0]!==t.target.cords[0]&&this.$refs.map.center[1]!==t.target.cords[1]&&this.flyTo(t.target.cords,12)},loadData:function(t){for(var e=t.slice(0),a=0;a<e.length;a++)e[a].expanded=!1,e[a].index=a;this.markers=e.slice(0)}},watch:{posts:function(t){this.loadData(t)}},data:function(){return{accessToken:"pk.eyJ1IjoiamNyYXN0ZWxsaSIsImEiOiJjajhvOGd6cmgwMGt2MnhvM2JjcXZmaXNyIn0.dz4w2BTJ6f_sRDfVpd7yqw",mapStyle:"mapbox://styles/jcrastelli/cjiqxmek61oht2rnnqlp3akaw",container:"map",scrollZoom:!1,zoom:6,center:[-122,47.5],markers:void 0,selectedMarker:void 0}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mgl-map",{ref:"map",staticClass:"map",attrs:{accessToken:t.accessToken,mapStyle:t.mapStyle,center:t.center,zoom:t.zoom,scrollZoom:t.scrollZoom},on:{"update:mapStyle":function(e){t.mapStyle=e},"update:center":function(e){t.center=e},"update:zoom":function(e){t.zoom=e},click:function(e){t.collapseMarkers(-1)}}},[a("mgl-navigation-control",{attrs:{position:"bottom-right"}}),t._v(" "),a("post-list",{attrs:{posts:t.markers,showList:void 0===t.selectedMarker},on:{flyTo:t.toggleMarker}}),t._v(" "),a("drawer",{ref:"drawer",attrs:{post:t.selectedMarker,tabindex:"0"},on:{collapse:t.collapseMarkers}}),t._v(" "),t._l(t.markers,function(e,i){return null!==e.location?a("mgl-marker",{key:i,staticClass:"marker",attrs:{coordinates:[e.location.longitude,e.location.latitude],anchor:"center"}},[a("map-marker",{attrs:{slot:"marker",marker:e,expanded:e.expanded},on:{expand:t.toggleMarker},slot:"marker"})],1):t._e()})],2)},staticRenderFns:[]};var E=a("VU/8")(M,F,!1,function(t){a("OrfX")},"data-v-1f63fa5a",null).exports,T=a("//Fk"),S=a.n(T),$=function(){return new S.a(function(t,e){i.a.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=2912883595.e534eb5.a692091c362641a4962628a5f3c1e0b8").then(function(e){t(e)},function(t){e(t)})})},P={name:"timelapses",components:{TimelapseMap:E},created:function(){$().then(function(t){this.posts=t.body.data}.bind(this))},data:function(){return{posts:[]}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timelapses"},[e("section",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.25,expression:"-0.25",modifiers:{absY:!0}}],attrs:{"aria-label":"timelapse map"}},[e("h2",{staticClass:"section-header"},[this._v("Timelapses")]),this._v(" "),e("TimelapseMap",{attrs:{posts:this.posts}})],1)])},staticRenderFns:[]};var R=a("VU/8")(P,z,!1,function(t){a("b/Gy")},"data-v-6500a1f9",null).exports,V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"twitter"},[e("div",{staticClass:"header"},[e("h3",[this._v("Tweets")]),this._v(" by "),e("a",{attrs:{href:"https://twitter.com/Gregle_",title:"@Gregle_ on twitter"}},[this._v("@Gregle_")])]),this._v(" "),e("div",{staticClass:"twitter-feed"},[e("a",{staticClass:"twitter-timeline",attrs:{"data-dnt":"true","data-theme":"dark","data-link-color":"#91aa9d",href:"https://twitter.com/Gregle_?ref_src=twsrc%5Etfw","data-chrome":"transparent nofooter noheader","data-tweet-limit":"5"}})])])}]};var I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-list"},[a("div",{staticClass:"header"},[a("h3",[t._v("Write Ups")]),t._v(" by "),a("a",{attrs:{href:"https://medium.com/@Gregles",title:"@Gregles on medium"}},[t._v("@Gregles")])]),t._v(" "),a("a",{attrs:{href:"https://github.com/seattle-imtech/seattle-vr/tree/master/community-survey/2018/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Seattle VR 2018 Community Survey Results/Review")]),t._v(" "),a("p",[t._v("A review and analysis of the Seattle VR 2018 Community Survey we conducted to better understand and serve the local VR community.")])])]),t._v(" "),a("a",{attrs:{href:"https://medium.com/cinematicvr/lessons-learned-in-360-degrees-98b12d4cb134"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Lessons Learned in 360 Degrees")]),t._v(" "),a("p",[t._v("During a trip to Japan, I was able to experiment with 360Rize’s Pro6 360 degree camera rig. Though I didn’t quite get the quality of captures I was hoping for, I still ended up learning a lot about the process of capturing and creating 360 degree video. This is in no way a complete list of tips for shooting in 360 degrees. There are already many blogs, from far more qualified writers about that. This should be considered more an addendum specific to my goals and my experiences.")])])]),t._v(" "),a("a",{attrs:{href:"http://streamersquare.com/stylesheet-embedding-twitch-streams/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Streamer Square: Embedding Responsive Twitch Streams")]),t._v(" "),a("p",[t._v("A guide to embedding a twitch stream/chat in a responsive 16:9 container I wrote up for the streaming news site StreamerSquare.com.")])])]),t._v(" "),a("a",{attrs:{href:"https://jcrastelli.wordpress.com/2013/07/25/tic-tac-toe-devlopment-walkthrough/"}},[a("div",{staticClass:"blog-post"},[a("h4",[t._v("Android: Building Tic-Tac-Toe")]),t._v(" "),a("p",[t._v("An old guide for building Tic-Tac-Toe I wrote up several years back. The over-all project is outdated at this point, but the AI and game logic is still worthwhile. The Tic-Tac-Toe ruleset isn't exactly evolving anytime soon.")])])])])}]};var A={name:"blogs",components:{Timeline:a("VU/8")({name:"twitter",data:function(){return{}}},V,!1,function(t){a("qsH3")},"data-v-6ba10bb6",null).exports,BlogList:a("VU/8")({name:"bloglist",data:function(){return{}}},I,!1,function(t){a("zPYz")},"data-v-5ae30f60",null).exports}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blogs"},[e("section",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.3,expression:"-0.3",modifiers:{absY:!0}}],attrs:{"aria-labelledby":"blogsHeading",role:"section"}},[e("h2",{staticClass:"section-header",attrs:{id:"blogsHeading"}},[this._v("README.md")]),this._v(" "),e("div",{staticClass:"blog-flex"},[e("Timeline"),this._v(" "),e("BlogList")],1)])])},staticRenderFns:[]};var D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"connect"},[a("section",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.2,expression:"-0.2",modifiers:{absY:!0}}],attrs:{"aria-labelledby":"connectHeading"}},[a("h2",{staticClass:"section-header",attrs:{id:"connectHeading"}},[t._v("Connect")]),t._v(" "),a("div",{staticClass:"social"},[a("a",{staticClass:"link-wrap twitter",attrs:{href:"https://twitter.com/Gregle_",title:"Gregle_ on Twitter"}},[a("icon",{staticClass:"icon",attrs:{name:"twitter",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Twitter")])],1),t._v(" "),a("a",{staticClass:"link-wrap github",attrs:{href:"https://github.com/gregle",title:"Gregle on Github"}},[a("icon",{staticClass:"icon",attrs:{name:"github",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Github")])],1),t._v(" "),a("a",{staticClass:"link-wrap instagram",attrs:{href:"https://www.instagram.com/gregle90/",title:"Gregle90 on Instagram"}},[a("icon",{staticClass:"icon",attrs:{name:"instagram",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Instagram")])],1)]),t._v(" "),a("div",{staticClass:"email"},[a("a",{staticClass:"link-wrap",attrs:{href:"mailto:justin@jcrastelli.com",title:"email: justin@jcrastelli.com"}},[a("icon",{staticClass:"icon",attrs:{name:"envelope",scale:t.iconSize}}),t._v(" "),a("label",[t._v("Justin@jcrastelli.com")])],1),t._v(" "),a("button",{staticClass:"link-wrap heart",attrs:{"aria-label":"relase the moleys"},on:{click:function(e){t.$emit("fishmoley")}}},[a("icon",{staticClass:"icon",attrs:{name:"heart",scale:t.iconSize}})],1)])])])},staticRenderFns:[]};var H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"moleys"}},[i("audio",{ref:"music",attrs:{autoplay:""},on:{ended:function(e){t.$emit("thatPartIsOverNow")}}},[i("source",{attrs:{type:"audio/mpeg",src:a("j97D")}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i")])}]};var N={name:"Home",components:{Header:d,Projects:v,Timelapses:R,Blogs:a("VU/8")(A,G,!1,function(t){a("A1Lk")},"data-v-08aad8d0",null).exports,Connect:a("VU/8")({name:"connect",data:function(){return{iconSize:5}}},D,!1,function(t){a("cdBY")},"data-v-d40e632a",null).exports,Moley:a("VU/8")({name:"moley"},H,!1,function(t){a("ENL8")},"data-v-30c71b6b",null).exports},data:function(){return{moleys:!1}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-view"},[t.moleys?a("Moley",{on:{thatPartIsOverNow:function(e){t.moleys=!1}}}):t._e(),t._v(" "),a("Header"),t._v(" "),a("main",{attrs:{id:"main",tabindex:"0","aria-label":"Justin Rastelli's portfolio"}},[a("Projects",{directives:[{name:"parallax",rawName:"v-parallax.absY",value:-.2,expression:"-0.2",modifiers:{absY:!0}}]}),t._v(" "),a("Timelapses"),t._v(" "),a("Blogs"),t._v(" "),a("Connect",{on:{fishmoley:function(e){t.moleys=!0}}})],1)],1)},staticRenderFns:[]};var B=a("VU/8")(N,U,!1,function(t){a("BIZm")},null,null).exports;i.a.use(r.a);var L=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:B},{path:"/projects/:project",redirect:function(t){var e=t.params;window.location.replace("/static/projects/"+e.project+"/")}}]}),Y=a("1e2d"),q=a.n(Y),W=(a("D/PP"),a("D4uH")),J=a("8+8L"),O=a("zart");i.a.use(J.a),i.a.use(O.a,{minWidth:600}),i.a.use(g.a,{mapboxgl:q.a}),i.a.config.productionTip=!1,i.a.component("icon",W.a),new i.a({el:"#app",router:L,template:"<App/>",components:{App:n}})},OrfX:function(t,e){},R3tw:function(t,e){},U1uK:function(t,e){},UEp9:function(t,e){},XcPX:function(t,e,a){t.exports=a.p+"static/media/video-header.08cfe6f.mp4"},"b/Gy":function(t,e){},cdBY:function(t,e){},hE1Z:function(t,e,a){t.exports=a.p+"static/img/poster.5b118c7.jpg"},j97D:function(t,e,a){t.exports=a.p+"static/media/fishmoley.4574064.mp3"},qsH3:function(t,e){},tdlQ:function(t,e){},z6Eg:function(t,e){},zPYz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.852423e1a6945f4f5765.js.map