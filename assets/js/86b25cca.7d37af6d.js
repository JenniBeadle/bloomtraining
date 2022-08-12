"use strict";(self.webpackChunkbloomtraining=self.webpackChunkbloomtraining||[]).push([[294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=o,c=g["".concat(d,".").concat(m)]||g[m]||A[m]||n;return r?a.createElement(c,l(l({ref:t},p),{},{components:r})):a.createElement(c,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>A,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={title:"8 Decodable book"},l=void 0,i={unversionedId:"Bloom/Livre-decodable",id:"Bloom/Livre-decodable",title:"8 Decodable book",description:"Introduction",source:"@site/docs/Bloom/08-Livre-decodable.md",sourceDirName:"Bloom",slug:"/Bloom/Livre-decodable",permalink:"/bloomtraining/next/Bloom/Livre-decodable",draft:!1,editUrl:"https://github.com/JenniBeadle/bloomtraining/docs/Bloom/08-Livre-decodable.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"8 Decodable book"},sidebar:"tutorialSidebar",previous:{title:"7 Levelled reader (graded)",permalink:"/bloomtraining/next/Bloom/Levelled-reader"},next:{title:"9 Create an e-book (for Android)",permalink:"/bloomtraining/next/Bloom/Create-an-ebook-for-Android"}},d={},s=[{value:"8.1 Choose the collection",id:"81-choose-the-collection",level:2},{value:"8.2 Creating a decodable reader",id:"82-creating-a-decodable-reader",level:2},{value:"8.3 Configure Stages",id:"83-configure-stages",level:2},{value:"8.4 Adding graphemes",id:"84-adding-graphemes",level:2},{value:"8.5 Adding a word list (suggested words)",id:"85-adding-a-word-list-suggested-words",level:2}],p={toc:s};function A(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Introduction"),(0,o.kt)("br",{parentName:"p"}),"\n","In this module we will learn how to create a decodable book in Bloom (i.e. a book that contains only the learned letters (or sight words))."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why is this important?"),(0,o.kt)("br",{parentName:"p"}),"\n","When people start learning to read, they need a lot of practice with reading material that contains only the letters (or sight words) they have learned so far. Without a program like Bloom, it is very difficult to ensure that your book is limited to known letters or sight words. Bloom's Decodable reader book allows us to introduce letters and sight words at different stages. When you make decodable books, Bloom will warn you whenever you use a word with letters that have not yet been learned (or that is not a sight word)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What will you do?"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a book based on the decodable reader template."),(0,o.kt)("li",{parentName:"ul"},"Set the stages by adding the graphemes, word list and letter and sight word definitions for each stage."),(0,o.kt)("li",{parentName:"ul"},"Create a level 1 decodable reader book.")),(0,o.kt)("h2",{id:"81-choose-the-collection"},"8.1 Choose the collection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If necessary, start Bloom"),(0,o.kt)("li",{parentName:"ul"},"Check that the correct collection is open.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If necessary, click ",(0,o.kt)("strong",{parentName:"li"},"Other collections"),".",(0,o.kt)("br",{parentName:"li"}),"*The Open / Create Collection dialog box is displayed.  "),(0,o.kt)("li",{parentName:"ul"},"Select the desired collection.",(0,o.kt)("br",{parentName:"li"}),"*The main window is displayed.")))),(0,o.kt)("h2",{id:"82-creating-a-decodable-reader"},"8.2 Creating a decodable reader"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Sources for New Books")," pane, select the ",(0,o.kt)("strong",{parentName:"li"},"Decodable Reader")," template."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create a book from this source"),".")),(0,o.kt)("h2",{id:"83-configure-stages"},"8.3 Configure Stages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If necessary, click ",(0,o.kt)("img",{src:r(5600).Z,width:"29",height:"24"})," (on the right) to see the tools pane.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Decodable Reader Tool")," pane, click ",(0,o.kt)("strong",{parentName:"p"},"Set Up Stages"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{src:r(4998).Z,width:"201",height:"67"}),(0,o.kt)("br",{parentName:"p"}),"\n","",(0,o.kt)("em",{parentName:"p"},"The dialogue box appears"),". See below."))),(0,o.kt)("h2",{id:"84-adding-graphemes"},"8.4 Adding graphemes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Letters")," tab.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type or paste the desired letters into the ",(0,o.kt)("strong",{parentName:"p"},"Letters and Letter Combinations")," text box."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{src:r(1381).Z,width:"333",height:"84"})))),(0,o.kt)("h2",{id:"85-adding-a-word-list-suggested-words"},"8.5 Adding a word list (suggested words)"),(0,o.kt)("p",null,"You can either type in words and/or import words from a file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Suggested Words")," tab.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To type or paste the suggested words"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"click in the text box ",(0,o.kt)("strong",{parentName:"li"},"1) Type the words here"),"."),(0,o.kt)("li",{parentName:"ul"},"type or paste words",(0,o.kt)("br",{parentName:"li"}),"OR"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To add words from a file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In 2) Place text files... click the link "Sample Text folders"',(0,o.kt)("br",{parentName:"p"}),"\n","",(0,o.kt)("em",{parentName:"p"},"An Explorer window opens in the folder Bloom uses to get suggested words"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy and paste your text file into this folder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Close the Explorer window.",(0,o.kt)("br",{parentName:"p"}),"\n","",(0,o.kt)("em",{parentName:"p"},"The full path name of the file is displayed in the text box")," ",(0,o.kt)("strong",{parentName:"p"},"2) Place the text files*"),"."))))}A.isMDXComponent=!0},5600:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAYCAIAAACJPGHrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAH3SURBVEhL1ZRPi0FRGIdnazU1NaNEyZ97mcvlcglllIWFD2DFYrCzGazsRpSyGckn8QWGZOUjjIUh32DUUDK/zj05qONSM4t5Erec8/Se33nfe7P7G5g3GAwGAvgE8HAVKv0NUhGBeVVV9fkUSZLxAPvl+BUF31yv9p8GWX8RKNbj8aEgVENFhJMcrga7dHKgCw9QFMXpdNrtdocefr//TL1Up4Gl4XC41Wp1u903Pp1Op9frpdNpWZapiMDNwev1xmKx+Xy+2Wy++KxWq+12WygUXC4XFRGYVxSlQzNCwNFyuRz2PPPJ5/PFYjGRSOB8VERg3rs7syC4VZW5oUZ2tgtAQ3DzHQ7HgiiL4uNhIPF4/EkPFIubwGIqIjDv5+ei3e7e3hq1knEP0Wh0MpnMZrMPPtPpdLFYZLNZt9tNRQTmNRqtDw9Wi8WuzRuOFolE+v3+aDR65zMYDMbjcSaTkSSJigjMizTJXR11BarWBZ2Dldy5IFN+xP7eMBo89O/NZLJRHwF9EwqFarVao9F45VOv15vNZiqVQuFURGBeg+Eeun0vaHOxXC7R9t981us19qKFRVHUPADnYF6z2UGVBISAekulUqVSeeFTLper1WoymUQUVEQ4yvdklKEWBAGvnvPovneOpFeBvYCKCH/v/V3+l3e3+wFn9I8/U/DmpQAAAABJRU5ErkJggg=="},4998:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/4675b10b278e3bb5e75d0f6f56a59764-fe1d2462c44dd5dd683e1d4f7602b71d.jpeg"},1381:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);