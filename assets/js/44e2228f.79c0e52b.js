"use strict";(self.webpackChunkotstudios_github_io=self.webpackChunkotstudios_github_io||[]).push([[170],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Config",l={unversionedId:"OT_lumberjack/config",id:"OT_lumberjack/config",title:"Config",description:"",source:"@site/docs/OT_lumberjack/config.md",sourceDirName:"OT_lumberjack",slug:"/OT_lumberjack/config",permalink:"/docs/OT_lumberjack/config",draft:!1,editUrl:"https://github.com/OTSTUDIOS/otstudios.github.io/tree/main/docs/OT_lumberjack/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/"},next:{title:"Config",permalink:"/docs/OT_recycler/config"}},c={},s=[],p={toc:s};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Config = {}\n\nConfig.Locale = 'en'\nConfig.Framework = 'ESX' -- ESX | QBCORE \nConfig.inventory = 'OX' -- ESX | QBCORE | OX\nConfig.target = true\nConfig.targetSystem = 'Qtarget' -- Qtarget | Qb-target\nConfig.UseAddMoney = false\nConfig.payType = 'cash' -- cash or bank\nConfig.BonusPerLog = true\nConfig.BonusPerLogAmount = 1\nConfig.cleanupTime = 5 -- cleanup timer in minutes\nConfig.BasePay = 200 -- base pay without skill level bonus\nConfig.RankPayMultiplier = 10 -- this number * skill level is added to the basepay.\nConfig.MaxSkillRank = 30 -- max skill level\nConfig.skillMultiplier = 2.5 -- multipluer of xp per level, higher number means it will take longer to level up\nConfig.hackEvent = '' -- Event to trigger when a player is suspected of abusing server event.\nConfig.CommandForXP = false\n\nConfig.Zones = {\n    ['cedar'] = {\n        coords = vector3(-514.27, 5464.43, 80.66), -- coordinates for middle of harvesting zone\n        propOffset = 2.1, -- prop Z offset\n        dropoff = vector3(-510.17, 5269.21, 80.0), -- drop off point to drop off full trailer of logs.\n        mechanicCoords = vector3(-567.63, 5254.76, 70.5), -- vehicle ped location\n        mechanicHeading = 67.0, -- vehicle ped heading\n        mechanicPed = `S_M_M_AutoShop_02`, -- vehicle ped model\n        mechanicSprite = 402,\n        mechanicColor = 25,\n        vehicle = 'bison', -- vehicle to spawn\n        vehicleCoords = vector3(-580.55, 5257.35, 69.5), -- vehicle spawn location\n        vehicleHeading = 330.0, -- vehicle spawn heading\n        trailerCoords = vector3(-583.389831, 5251.874023, 70.456832), -- trailer spawn location\n        trailerHeading = 334.0, -- trailer spawn heading\n        prop = 'test_tree_cedar_trunk_001', -- tree prop to be used\n        spawnAmount = 20, -- amount of trees to spawn\n        item = 'cedar_log', -- item to be given to player\n        itemAmount = 1, -- amount of logs to give to player\n        xpReward = 5, -- xp reward for harvesting a tree\n        cutTime = 15000, -- time in milliseconds to cut a tree\n        name = 'Cedar trees', -- blip name\n        color = 25, -- blip color\n        sprite = 311, -- blip sprite\n        radius = 0.0 -- radius of blip\n    }\n}\n\nConfig.trailerData = {\n    [`trailersmall`] = {\n        offset = vector3(1.0, -1.0, -0.2),\n        newrowoffset = vector3(1.5, -1.0, -0.2),\n        maxlogs = 5\n    },\n    [`trflat`] = {\n        offset = vector3(1.0, -1.0, 0.675),\n        newrowoffset = vector3(1.5, -1.0, 0.675),\n        maxlogs = 30\n    }\n}\n\nConfig.vehicles = {\n    {\n        type = 'truck',\n        label = 'Bison',\n        model = `bison`,\n        level = 1\n    },\n    {\n        type = 'truck',\n        label = 'Phantom',\n        model = `phantom`,\n        level = 3\n    },\n    {\n        type = 'truck',\n        label = 'Phantom2',\n        model = `phantom2`,\n        level = 5\n    },\n    {\n        type = 'truck',\n        label = 'Phantom3',\n        model = `phantom3`,\n        level = 10\n    },\n    {\n        type = 'trailer',\n        label = 'Small Trailer',\n        model = `trailersmall`,\n        level = 1\n    },\n    {\n        type = 'trailer',\n        label = 'Large Trailer',\n        model = `trflat`,\n        level = 3\n    }\n}\n")))}f.isMDXComponent=!0}}]);