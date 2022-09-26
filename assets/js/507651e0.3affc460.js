"use strict";(self.webpackChunkotstudios_github_io=self.webpackChunkotstudios_github_io||[]).push([[164],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=i,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2360:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Config",l={unversionedId:"OT_skills/config",id:"OT_skills/config",title:"Config",description:"",source:"@site/docs/OT_skills/config.md",sourceDirName:"OT_skills",slug:"/OT_skills/config",permalink:"/docs/OT_skills/config",draft:!1,editUrl:"https://github.com/OTSTUDIOS/otstudios.github.io/tree/main/docs/OT_skills/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/docs/OT_recycler/config"},next:{title:"getMaxOxygen",permalink:"/docs/OT_skills/Exports/Client/getMaxOxygen"}},s={},c=[],p={toc:c};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config = {}\n\nConfig.Framework = 'ESX' -- ESX | QBCORE \nConfig.saveInterval = 5 -- minutes between saves\nConfig.useStrengthSkill = true\nConfig.useDivingSkill = true\nConfig.shootingpracModels = {\n    [`prop_range_target_01`] = true,\n    [`prop_range_target_02`] = true,\n    [`prop_range_target_03`] = true,\n    [`gr_prop_gr_target_02b`] = true,\n    [`gr_prop_gr_target_04a`] = true,\n    [`gr_prop_gr_target_04b`] = true,\n    [`gr_prop_gr_target_04c`] = true,\n    [`gr_prop_gr_target_04d`] = true,\n    [`gr_prop_gr_target_05a`] = true,\n    [`gr_prop_gr_target_05b`] = true,\n    [`gr_prop_gr_target_05c`] = true,\n    [`gr_prop_gr_target_05d`] = true,\n    [`gr_prop_gr_target_w_02a`] = true,\n    [`gr_prop_gr_target_w_02b`] = true\n}\n\nConfig.skills = {\n    ['drugs'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Plant, tend, harvest, cut, refine and package quality illegal substances.'\n    },\n    ['crafting'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Highly skilled craftsmen are able to make fully functional and/or decorative items.'\n    },\n    ['chemistry'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Experienced chemists can concoct the finest ingredients for high quality chemical reactions.'\n    },\n    ['stamina'] = {\n        multiplier = 2.0,\n        maxlevel = 30,\n        maxReward = 20,\n        gtaSkill = true,\n        cooldown = 10000,\n        description = 'Raise your endurance to overcome any obstacle.'\n    },\n    ['strength'] = {\n        multiplier = 2.0,\n        maxlevel = 30,\n        maxReward = 20,\n        gtaSkill = true,\n        cooldown = 5000,\n        description = 'Ensure you are in the best possible shape to overcome any opponent.'\n    },\n    ['driving'] = {\n        multiplier = 1.5,\n        maxlevel = 30,\n        maxReward = 20,\n        gtaSkill = true,\n        cooldown = 15000,\n        description = 'Take full control of every vehicle on any terrain ahead.'\n    },\n    ['diving'] = {\n        multiplier = 1.5,\n        maxlevel = 30,\n        maxReward = 50,\n        cooldown = 10000,\n        description = 'Plunge head-first into the seas, explore the depths and expand your lung capacity.'\n    },\n    ['shooting'] = {\n        multiplier = 1.5,\n        maxlevel = 30,\n        maxReward = 20,\n        gtaSkill = true,\n        cooldown = 5000,\n        description = 'Showcase your marksmanship by discharging your firearm at various targets.'\n    },\n    ['gunsmithing'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'A master gunsmith can assemble and modify even the rarest of firearms.'\n    },\n    ['woodcutting'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Lumberjacks can produce the highest quality timber.'\n    },\n    ['mixology'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Mixologists have the ability to make and serve superior beverages.'\n    },\n    ['cooking'] = {\n        multiplier = 2.5,\n        maxlevel = 30,\n        maxReward = 20,\n        description = 'Express your culinary expertise in the kitchen; bake, grill, roast, steam or boil your ingredients to create the perfect dish.'\n    }\n}\n")))}u.isMDXComponent=!0}}]);