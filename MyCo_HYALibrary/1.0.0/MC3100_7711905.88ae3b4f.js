"use strict";(self.webpackChunkmycustomcomponents=self.webpackChunkmycustomcomponents||[]).push([[7711905],{13:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(4125);const a=()=>{const{ModalContext:e}=(0,o.A)();return(0,r.useContext)(e)}},70:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="information",i=()=>(0,r.jsx)("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),s="0 0 25 25"},393:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(712);const a=function(e,t,{target:n=document,eventOptions:a,dependencies:i=[]}={}){(0,r.useEffect)(()=>{const[r]=(0,o.A)([n]);if(r)return r.addEventListener(e,t,a),()=>{r.removeEventListener(e,t,a)}},[e,n,t,a,...i])}},405:(e,t,n)=>{n.d(t,{D2:()=>d,QS:()=>p,pT:()=>m,r3:()=>b,wE:()=>h,z5:()=>f});var r=n(1357),o=n(8151),a=n(7321),i=n(9549),s=n(9187),c=n(285),l=n(7501);const d=(0,o.Ay)(c.A)(()=>o.AH`
    border-radius: inherit;
  `);d.defaultProps=i.qn;const u=o.Ay.div(({theme:e})=>o.AH`
    &:focus-visible {
      box-shadow: ${e.components.button["focus-shadow"]};
      outline: none;
      border-radius: calc(9999 * ${e.base["border-radius"]});
    }
  `);u.defaultProps=i.qn;const m=(0,o.Ay)(u)(({theme:e,placement:t,determinate:n})=>{const a="inline"===t?"1em":"2rem",i=(0,r.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    position: relative;

    svg {
      display: block;
      width: ${a};
      height: ${a};

      circle {
        fill: transparent;
        stroke: ${i};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${e.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${e.base.animation.speed})
            ${e.base.animation.timing.ease};

          ${!n&&o.AH`
            @keyframes LoadingRing {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }
            animation: LoadingRing calc(4 * ${e.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${"inline"===t&&o.AH`
      display: inline-flex;
      vertical-align: top;
    `}
  `});m.defaultProps=i.qn;const p=(0,o.Ay)(u)(({theme:e,placement:t,determinate:n})=>{const a=(0,r.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    background-color: ${a};
    border-radius: ${e.base["border-radius"]};
    ${"local"===t?o.AH`
          width: calc(100% - 4 * ${e.base.spacing});
        `:o.AH`
          width: 100%;
        `}
    height: 0.375rem;
    min-width: 2rem;
    max-width: min(calc(100vw - 4 * ${e.base.spacing}), ${e.base["content-width"].lg});
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: ${e.base["border-radius"]};
      background-color: ${e.components.progress["progress-color"]};
      ${n&&o.AH`
        transform: translateX(var(--progress, 0));
        transform-origin: 0 50%;
        transition: transform calc(0.5 * ${e.base.animation.speed})
          ${e.base.animation.timing.ease};
      `}

      ${!n&&o.AH`
        @keyframes LoadingBar {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
        animation: LoadingBar calc(8 * ${e.base.animation.speed}) linear infinite;
        width: 50%;
      `}
    }

    ${"inline"===t&&o.AH`
      width: 3rem;
      display: inline-block;
      position: relative;
    `}
  `});p.defaultProps=i.qn;const h=(0,o.Ay)(u)(({theme:e,placement:t})=>o.AH`
    line-height: 1;
    display: ${"inline"===t?"inline-flex":"block"};

    @keyframes LoadingEllipsis {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    > span {
      display: flex;
      justify-content: center;

      ${"inline"===t&&o.AH`
        display: inline-flex;
      `}
    }

    > span span {
      margin: 0 0.3125rem;
      background: ${e.components.progress["progress-color"]};
      border-radius: 50%;
      animation: LoadingEllipsis calc(4 * ${e.base.animation.speed}) infinite;

      ${"global"===t&&o.AH`
        width: 1.25rem;
        height: 1.25rem;
      `}

      ${("local"===t||"block"===t)&&o.AH`
        width: 0.625rem;
        height: 0.625rem;
      `}

      ${"inline"===t&&o.AH`
        width: 0.1875rem;
        height: 0.1875rem;
        margin: 0 0.1875rem;
        animation-duration: calc(4 * ${e.base.animation.speed});
      `}

      &:nth-child(2) {
        animation-delay: 0.1667s;
      }

      &:nth-child(3) {
        animation-delay: ${.3334}s;
      }
    }
  `);h.defaultProps=i.qn;const f=o.Ay.span(({theme:e})=>{const t=(0,s.A)(()=>(0,r.B3)((0,a.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),n=(0,a.Vr)(e.base["font-size"],e.base["font-scale"]);return o.AH`
    font-size: ${n[e.components.label["font-size"]]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    color: ${t};
  `});f.defaultProps=i.qn;const b=(0,o.Ay)(l.A)(({theme:e,placement:t})=>o.AH`
    ${"inline"!==t&&o.AH`
      width: 100%;
    `}

    ${"block"===t&&o.AH`
      margin-block: calc(2 * ${e.base.spacing});
    `}
  `);b.defaultProps=i.qn},427:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(9839);let a;const i=()=>a||(a=o.A?navigator.userAgent.match(/(Windows|Macintosh)/)?.[0]||"Other":"",a),s=()=>{const[e,t]=(0,r.useState)(i);return(0,r.useEffect)(()=>{e||t(i())},[]),{windows:"Windows"===e,macintosh:"Macintosh"===e,name:e}}},574:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(9749),a=n(7666),i=n(393);const s=(e,t=!0,n=[],s=!0)=>{const c=(0,r.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const n=(0,a.A)(e),{0:r,[n.length-1]:i}=n,c=(0,o.A)();if((c===e.current||!e.current.contains(c)||e.current.contains(c)&&!n.includes(c))&&s)if(t.preventDefault(),c){const n=(0,a.A)(e,{includeActiveEl:!0}),o=n.findIndex(e=>e===c);-1!==o?t.shiftKey?n[(o-1+n.length)%n.length].focus():n[(o+1)%n.length].focus():t.shiftKey?i?.focus():r?.focus()}else t.shiftKey?i?.focus():r?.focus();else t.shiftKey&&c===r?(t.preventDefault(),i?.focus()):t.shiftKey||c!==i||(t.preventDefault(),r?.focus())}},n);(0,i.A)("keydown",c,{target:t?void 0:e})}},2477:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(e=null)=>(0,r.useState)(e)},2558:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(e,t)=>{const n=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(n.current)return e();n.current=!0},t)}},2870:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="clipboard",i=()=>(0,r.jsx)("path",{d:"M20.195 2.922h-1.58c-.24-.623-.67-.958-1.39-.958h-.478v-.479c0-.431-.144-.766-.431-1.054A1.408 1.408 0 0 0 15.262 0H9.419a1.41 1.41 0 0 0-1.054.431 1.408 1.408 0 0 0-.431 1.054v.48h-.48c-.718 0-1.149.334-1.388.957h-1.58c-.432 0-.767.144-1.055.431A1.408 1.408 0 0 0 3 4.407v18.63c0 .432.144.767.431 1.054.288.288.623.432 1.054.432h15.709c.431 0 .766-.144 1.054-.432.287-.287.43-.622.43-1.053V4.407a1.41 1.41 0 0 0-.43-1.054 1.408 1.408 0 0 0-1.054-.431h.001ZM6.93 4.406v-.958c0-.335.191-.526.526-.526h1.437V1.485c0-.335.192-.526.527-.526h5.843c.335 0 .526.191.526.526v1.437h1.437c.335 0 .527.191.527.526v.958c0 .335-.192.48-.527.48h-9.77c-.335 0-.527-.145-.527-.48Zm13.745 0v18.63c0 .336-.144.48-.479.48H4.487c-.335 0-.48-.144-.48-.48V4.407c0-.335.145-.479.48-.479H5.97v.48c0 .43.144.766.431 1.053.288.288.623.431 1.054.431h9.77c.432 0 .767-.143 1.054-.43a1.41 1.41 0 0 0 .432-1.055v-.479h1.484c.335 0 .479.144.479.48Z"}),s="0 0 25 25"},2884:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=(n(8347),n(4680));const a=(0,r.createContext)({announce:()=>{},announcePolite:()=>{},announceAssertive:()=>{},initialized:!1}),i=()=>{const e=o.A?window.cosmos.liveLogContext??a:a;return(0,r.useContext)(e)}},2907:(e,t,n)=>{n.d(t,{Ay:()=>h});var r=n(4848),o=n(1594),a=n(8151),i=n(7521),s=n(7501),c=n(8579),l=n(4869);const d=(0,n(8044).A)("meta-list",[]),u=a.Ay.ul(({wrapItems:e})=>a.AH`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&a.AH`
      white-space: nowrap;
    `}
  `),m=a.Ay.li(({wrapItems:e})=>a.AH`
    min-width: 0;
    display: inline-block;

    ${e?a.AH`
          overflow-wrap: break-word;
        `:a.AH`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),p=(0,o.forwardRef)(function({testId:e,items:t,wrapItems:n=!0,...o},a){const l=(0,c.A)(e,d),p=t.length<=1?"none":void 0;return(0,r.jsx)(s.A,{"data-testid":l.root,...o,as:u,role:p,container:{colGap:.5,alignItems:"center",wrap:n?"wrap":"nowrap"},wrapItems:n,ref:a,children:t.flatMap((e,t,o)=>e?[(0,r.jsx)(i.A,{as:m,variant:"secondary",role:p,wrapItems:n,children:e},`${t+0}`)].concat(t!==o.length-1?[(0,r.jsx)(i.A,{as:m,"aria-hidden":!0,variant:"secondary",children:"•"},`${t+0}-sep`)]:[]):[])})}),h=(0,l.A)(p,d)},3085:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=n(6824),a=n(9463);const i=()=>{const{translations:e,locale:t}=(0,a.A)();return(0,r.useMemo)(()=>(0,o.A)(e,t),[e,t])}},3351:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(4685);const a=()=>(0,r.useRef)((0,o.A)()).current},3359:(e,t,n)=>{n.d(t,{A:()=>re});var r={};n.r(r),n.d(r,{Component:()=>E,name:()=>j,set:()=>k,viewBox:()=>H});var o={};n.r(o),n.d(o,{Component:()=>S,name:()=>C,set:()=>I,viewBox:()=>R});var a={};n.r(a),n.d(a,{Component:()=>D,name:()=>M,set:()=>L,viewBox:()=>z});var i={};n.r(i),n.d(i,{Component:()=>q,name:()=>T,set:()=>P,viewBox:()=>_});var s=n(4848),c=n(1594),l=n(9466),d=n(7666),u=n(285),m=n(7501),p=n(371),h=n(13),f=n(4853),b=n(3700),g=n(3351),A=n(3085),v=n(3456),y=n(574),$=n(393),x=n(7784),w=n(6765);const k="budicon",j="times",E=()=>(0,s.jsx)("path",{d:"m12.511 13.925-.18.18-6.987 6.96-.377.375-.198.197-.21.21-.045.045-.06.06L3 20.625l.026-.027 8.061-8.097-.619-.618L8.464 9.88l-.814-.81-.262-.263-.76-.758-.71-.71-.44-.44-.61-.608-.366-.366-.17-.17-.458-.458-.472-.472-.401-.4.054-.055 1.298-1.315L4.407 3l.006.007.227.226.175.175.345.345.136.136.822.82.19.191.62.618.922.922.755.754 1.353 1.352.567.566.288.288.878.876.296.296.512.511.013-.012.587-.59 7.138-7.171.15-.15.056-.056.096-.097.007-.007L22 4.473l-.06.06-.045.045-.129.127-.279.279-.377.375-7.18 7.153.443.443 1.46 1.46.568.566.279.279 1.074 1.073.257.257.498.497.24.24.683.682.214.214.405.404.71.71.438.437.125.126.395.394.174.173.06.06h-.001l-.052.057L20.595 22l-.16-.16-1.341-1.34-.562-.561-.203-.203-.652-.65-.71-.71-.759-.758-.263-.263-.813-.812-.844-.844-.867-.866-.293-.293-.617-.615Z"}),H="0 0 25 25",I="budicon",C="minus",S=()=>(0,s.jsx)("path",{d:"M3.5 11.58h18v1.84h-18v-1.84Z"}),R="0 0 25 25",L="budicon",M="dock",D=()=>(0,s.jsx)("path",{d:"M22.715 2.285c.38.38.38.996 0 1.376l-5.954 5.953h4.041a.973.973 0 1 1 0 1.946h-7.296V4.23a.973.973 0 0 1 1.945 0v3.942l5.888-5.887a.973.973 0 0 1 1.376 0ZM11.527 13.473v7.296a.973.973 0 1 1-1.946 0v-3.975l-5.92 5.921a.973.973 0 1 1-1.376-1.376l5.92-5.921H4.231a.973.973 0 1 1 0-1.945h7.296Z"}),z="0 0 25 25",P="budicon",T="undock",q=()=>(0,s.jsx)("path",{d:"M11.492 13.5a1 1 0 0 1 0 1.414L6.406 20H10.5a1 1 0 0 1 0 2H3v-7.5a1 1 0 0 1 2 0v4.078l5.078-5.078a1 1 0 0 1 1.414 0ZM22 3v7.5a1 1 0 0 1-2 0V6.32l-5.179 5.18a1 1 0 0 1-1.414-1.414L18.492 5H14.5a1 1 0 0 1 0-2H22Z"}),_="0 0 25 25";var F=n(7521),B=n(1564),O=n(8151);const Z=O.Ay.div(({stacked:e})=>O.AH`
    ${p.OV} + ${p.OV} {
      margin-inline-start: unset;
    }

    & > :not(button) {
      display: contents;
    }

    ${!e&&O.AH`
      & > button:first-child:not(:last-child),
      & > :first-child:not(:last-child) button:first-child {
        margin-inline-end: auto;
      }
    `}

    &[aria-hidden='true'] {
      position: fixed;
      visibility: hidden;
    }
  `),V=({actionsRef:e,actionsEl:t,as:n,...r})=>{const o=(0,c.useRef)(null),[a,i]=(0,c.useState)(!1);return(0,c.useLayoutEffect)(()=>{if(o.current&&e.current){const t=o.current.getBoundingClientRect().width,n=new ResizeObserver(e=>{setTimeout(()=>{a&&e[0].borderBoxSize[0].inlineSize>t?i(!1):!a&&e[0].borderBoxSize[0].inlineSize<=t&&i(!0)},0)});return n.observe(e.current),()=>{n.disconnect()}}}),(0,c.useLayoutEffect)(()=>{if(o.current){const e=o.current.getElementsByTagName("button");Array.from(e).forEach(e=>{e.hasAttribute("id")&&e.removeAttribute("id"),e.hasAttribute("data-testid")&&e.removeAttribute("data-testid"),e.setAttribute("role","none")})}}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.A,{...r,as:Z,forwardedAs:n,ref:e,stacked:a,container:{gap:1,...a?{direction:"column"}:{justify:"end"}},children:t}),(0,s.jsx)(m.A,{as:Z,ref:o,"aria-hidden":!0,inert:"",container:{gap:1,direction:"row",justify:"end"},children:t})]})};var N=n(7321),U=n(3091),W=n(9549);(0,w.pU)(r,o,i);const K=(0,O.Ay)(U.A)(({theme:{base:e}})=>O.AH`
    height: 3rem;
    width: 30ch;
    border-radius: calc(0.5 * ${e["border-radius"]}) calc(0.5 * ${e["border-radius"]}) 0 0;
    color: ${e.palette["foreground-color"]};
    background-color: ${e.palette["primary-background"]};
    box-shadow: ${e.shadow.low};
    cursor: pointer;
    user-select: none;
    pointer-events: auto;
    transition: box-shadow ${e.animation.speed} ${e.animation.timing.ease};

    &:hover {
      box-shadow: ${e.shadow.high};
    }

    &:focus {
      outline: none;
      box-shadow: ${e.shadow.focus};
    }

    > div:first-child {
      margin-inline-end: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `);K.defaultProps=W.qn;const J=({heading:e,onBeforeClose:t,onAfterClose:n,onRequestDismiss:r,onRequestActivate:o,onRequestMinimize:a,onRequestMaximize:i,onRequestDock:c,...l})=>{const{dismissible:d,dockable:u,maximizable:f,dock:b,maximize:g,activate:v,unmount:y}=(0,h.A)(),$=(0,A.A)();return(0,s.jsxs)(m.A,{...l,container:{alignItems:"center",justify:"between",pad:[0,2],gap:2},item:{shrink:0},as:K,"aria-label":`${$("activate")} ${e}`,onKeyDown:e=>{"Space"!==e.key&&"Enter"!==e.key||e.target!==e.currentTarget||e.preventDefault()},onClick:()=>{!1===o?.()||u||v(),!1!==c?.()&&u&&b()},"data-app-region":!0,children:[(0,s.jsx)("div",{children:e}),(f||u||d)&&(0,s.jsxs)(m.A,{container:!0,children:[f&&(0,s.jsx)(p.Ay,{label:$("maximize"),"aria-label":$("modal_maximize"),variant:"simple",onClick:()=>{!1!==i?.()&&g()},icon:!0,children:(0,s.jsx)(w.Ay,{name:"undock"})}),u&&(0,s.jsx)(p.Ay,{label:$("dock"),"aria-label":$("modal_dock"),variant:"simple",onClick:()=>{!1!==c?.()&&b()},icon:!0,children:(0,s.jsx)(w.Ay,{name:"dock"})}),d&&(0,s.jsx)(p.Ay,{label:$("close"),"aria-label":$("modal_close"),variant:"simple",onClick:()=>{!1!==r?.()&&(t?.(),y(),n?.())},icon:!0,children:(0,s.jsx)(w.Ay,{name:"times"})})]})]})};var X=n(4490),G=n(405);const Q=O.Ay.div``,Y=O.Ay.header(({theme:{base:e},hasAction:t})=>{const n=t?.75:0;return O.AH`
      padding: calc(${3-n} * ${e.spacing}) calc(${3-n} * ${e.spacing})
        calc(${2.5-n} * ${e.spacing}) calc(3 * ${e.spacing});

      h2 {
        margin-block-start: calc(0.5 * ${e.spacing});
      }

      h2 > ${w.vE} {
        margin-inline-end: ${e.spacing};
      }

      ${p.OV} {
        color: ${e.palette["foreground-color"]};
      }
    `});Y.defaultProps=W.qn;const ee=O.Ay.div(({theme:{base:e}})=>O.AH`
    position: relative;
    padding: calc(0.5 * ${e.spacing}) calc(3 * ${e.spacing});

    @media (height >= 31.25rem) {
      overflow-y: auto;
    }

    &:last-child {
      padding-bottom: calc(3 * ${e.spacing});
    }

    & > ${u.e} {
      top: var(--scroll-top, 0);
    }
  `);ee.defaultProps=W.qn;const te=(0,O.Ay)(X.e)(({theme:{base:e},alert:t,autoWidth:n,center:r,stretch:o,state:a})=>{let i="80ch",s="80ch";return t?(i="60ch",s="60ch"):n&&(s="100%"),O.AH`
    position: relative;
    box-shadow: ${e.shadow.high};

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    @media (forced-colors: active) {
      border: 0.0625rem solid transparent;
    }

    ${Z} {
      padding: calc(2.5 * ${e.spacing}) calc(3 * ${e.spacing}) calc(3 * ${e.spacing});
    }

    ${!t&&o?O.AH`
          height: calc(100% - 1rem);

          ${n?O.AH`
                max-width: min(calc(100% - 1rem), ${s});
              `:O.AH`
                width: calc(100% - 1rem);
              `}

          @media (min-width: ${e.breakpoints.sm}) {
            height: calc(100% - 2rem);

            ${n?O.AH`
                  max-width: min(calc(100% - 2rem), ${s});
                `:O.AH`
                  width: calc(100% - 2rem);
                `}
          }

          @media (min-width: ${e.breakpoints.md}) {
            height: calc(100% - 4rem);

            ${n?O.AH`
                  max-width: min(calc(100% - 4rem), ${s});
                `:O.AH`
                  width: calc(100% - 4rem);
                `}
          }
        `:O.AH`
          min-width: min(calc(100% - 1rem), ${i});
          max-width: min(calc(100% - 1rem), ${s});
          max-height: calc(100% - 1rem);

          &:not(:has(footer)) ${G.D2} {
            border-end-start-radius: ${e["border-radius"]};
            border-end-end-radius: ${e["border-radius"]};
          }

          ${!r&&O.AH`
            margin-block-start: 0.5rem;
          `}

          @media (min-width: ${e.breakpoints.sm}) {
            min-width: min(calc(100% - 2rem), ${i});
            max-width: min(calc(100% - 2rem), ${s});
            max-height: calc(100% - 2rem);
            ${!r&&O.AH`
              margin-block-start: 1rem;
            `}
          }

          @media (min-width: ${e.breakpoints.md}) {
            min-width: min(calc(100% - 4rem), ${i});
            max-width: min(calc(100% - 4rem), ${s});
            max-height: calc(100% - 4rem);
            ${!r&&O.AH`
              margin-block-start: 2rem;
            `}
          }
        `}

    ${"docked"===a&&O.AH`
      /*
       * This seems like the most optimal of the suboptimal solutions.
       * https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
       */
      &&& {
        /* Using non logical properties due to Safari 14.x support and since the inline bottom values are the same. */
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        pointer-events: auto;
      }
    `}

    &[aria-busy='true'] {
      ${ee} {
        /* TODO: Replace with useScrollToggle hook. */
        overflow: hidden;
        min-height: 8rem;
      }
    }
  `});te.defaultProps=W.qn,(0,w.pU)(r,o,a,i);const ne=(0,c.forwardRef)(function(e,t){const{as:n="div",progress:r=!1,heading:o,headingTag:a="h2",count:i,children:k,actions:j,stretch:E=!1,center:H=!1,defaultFocus:I,onBeforeOpen:C,onAfterOpen:S,onBeforeClose:R,onAfterClose:L,onRequestDismiss:M,onRequestMinimize:D,onRequestMaximize:z,onRequestDock:P,onRequestActivate:T,...q}=e,{alert:_,dismissible:O,minimizable:Z,maximizable:U,dockable:W,state:K,dismiss:X,minimize:G,maximize:ne,dock:re,unmount:oe,top:ae}=(0,h.A)(),ie=(0,f.A)(t),se=(0,c.useRef)(null),ce=(0,c.useRef)(null),le=(0,c.useRef)(null),de=(0,c.useRef)(null),ue=(0,b.A)(K),me=(0,g.A)(),pe=(0,A.A)(),[he,fe]=(0,c.useState)(void 0),[be,ge]=(0,c.useState)(!0),Ae=(0,v.A)(),ve=()=>{!1!==M?.()&&X()},ye=()=>{if(r)return;const e=(0,d.A)(ie);if(I?.current)I.current.focus();else{const t=e.find(e=>se.current?.contains(e))??de.current??e[0];t?.focus()}};(0,y.A)(ie,!1),(0,$.A)("shortcut",e=>e.stopPropagation(),{eventOptions:{capture:!0}}),(0,x.A)("mousedown",[ie],e=>{["minimized","docked","closed"].includes(K)||(O?e.target===le.current&&ve():ie.current?.focus())}),(0,c.useEffect)(()=>{"minimized"!==K&&("open"!==K&&"maximized"!==K&&"docked"!==K||ye(),"docked"===K&&ge(!1),"closed"===K&&"docked"===ue&&(R?.(),oe(),L?.()))},[K]),(0,c.useEffect)(()=>{"closed"===K&&(R?.(),oe(),L?.())},[]);const $e=(0,c.useCallback)(e=>{O&&("open"===K||"maximized"===K)&&"Escape"===e.key&&ae&&ve()},[O,K,ae,ve]),xe=(0,c.useCallback)(e=>{!e.repeat||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},[]);(0,c.useEffect)(()=>{r||ye(),"object"==typeof r&&r.message!==he?fe(r.message):!0===r&&fe(pe("loading"))},[r]),(0,c.useLayoutEffect)(()=>{if(!ie.current)return;const e=["0 -4rem","0 0"],t={duration:2*(0,N.wo)(Ae.base.animation.speed),easing:Ae.base.animation.timing.ease,fill:"forwards"};let n;"open"===K?n=ie.current.animate({translate:e},t):"closed"===K&&"open"===ue&&(n=ie.current.animate({translate:e.reverse()},t)),n?.addEventListener("finish",()=>{n.cancel()})},[K]);const we=E||"maximized"===K,ke=(0,s.jsxs)(m.A,{...q,container:{direction:"column"},ref:ie,as:te,forwardedAs:n,onClick:e=>e.stopPropagation(),onKeyDown:$e,alert:_,role:_?"alertdialog":"dialog",stretch:we,center:H,"aria-labelledby":`${me}-heading`,"aria-describedby":_?`${me}-content`:void 0,"aria-modal":"docked"!==K,state:K,"aria-busy":!!r,children:[(0,s.jsxs)(m.A,{container:{justify:"between",alignItems:"start",gap:1},item:{shrink:0},as:Y,role:"none",hasAction:Z||O,children:[(0,s.jsxs)(m.A,{container:{alignItems:"center",gap:1},as:F.A,variant:a,id:`${me}-heading`,children:[(0,s.jsx)("span",{children:o}),"number"==typeof i&&(0,s.jsx)(B.A,{children:i})]}),(0,s.jsxs)(m.A,{container:!0,children:[U&&!_&&"maximized"!==K&&(0,s.jsx)(p.Ay,{icon:!0,variant:"simple",label:pe("maximize"),"aria-label":pe("modal_maximize"),onKeyDown:xe,onClick:()=>{!1!==z?.()&&ne()},children:(0,s.jsx)(w.Ay,{name:"undock"})}),W&&!_&&"docked"!==K&&(0,s.jsx)(p.Ay,{icon:!0,variant:"simple",label:pe("dock"),"aria-label":pe("modal_dock"),onKeyDown:xe,onClick:()=>{!1!==P?.()&&re()},children:(0,s.jsx)(w.Ay,{name:"dock"})}),Z&&!_&&(0,s.jsx)(p.Ay,{icon:!0,variant:"simple",label:pe("minimize"),"aria-label":pe("modal_minimize"),onKeyDown:xe,onClick:()=>{!1!==D?.()&&G()},children:(0,s.jsx)(w.Ay,{name:"minus"})}),O&&!_&&(0,s.jsx)(p.Ay,{icon:!0,variant:"simple",label:pe("close"),"aria-label":pe("modal_close"),onKeyDown:xe,onClick:()=>{be||ve()},ref:de,children:(0,s.jsx)(w.Ay,{name:"times"})})]})]}),(0,s.jsxs)(m.A,{item:{grow:1},as:ee,ref:se,style:se.current?{"--scroll-top":`${se.current.scrollTop}px`}:void 0,children:[k&&(0,s.jsx)(Q,{id:`${me}-content`,inert:r?"":void 0,children:k}),(0,s.jsx)(l.A,{visible:!!r,focusOnVisible:!0,delay:!0,placement:"local",message:he,onTransitionEndOut:()=>fe(void 0)})]}),j&&(0,s.jsx)(V,{as:"footer",role:"none",actionsRef:ce,actionsEl:j})]}),je="docked"===K?ke:(0,s.jsx)(u.A,{ref:le,container:{alignItems:H||we?"center":"start"},transitionSpeed:"slow",open:"open"===K||"maximized"===K,onBeforeTransitionIn:C,onAfterTransitionIn:()=>{ge(!1),S?.()},onBeforeTransitionOut:R,onAfterTransitionOut:()=>{oe(),L?.()},children:ke});return"minimized"===K?(0,s.jsx)(J,{...e,...q}):je}),re=ne},3456:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(9463);const o=()=>(0,r.A)().themeMachine.theme},3700:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=e=>{const t=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{t.current=e},[e]),t.current}},3885:(e,t,n)=>{n.d(t,{A:()=>$});var r=n(4848),o=n(1594),a=n(8151),i=n(9549),s=n(5636),c=n(3351),l=n(4853),d=n(8579),u=n(3456),m=n(7321),p=n(2365),h=n(9511),f=n(9749),b=n(4869),g=n(7902);const A=(0,n(8044).A)("tooltip",[]),v=a.Ay.div(({theme:e})=>{const t=(0,m.Vr)(e.base["font-size"],e.base["font-scale"]);return a.AH`
    background-color: ${e.components.tooltip["background-color"]};
    color: ${e.components.tooltip["foreground-color"]};
    font-size: ${t.xxs};
    max-width: 40ch;
    padding: ${e.base.spacing};
    white-space: pre-line;
    word-break: break-word;
  `});v.defaultProps=i.qn;const y=(0,o.forwardRef)(function({testId:e,children:t,target:n,ignoredElements:a=[],showDelay:i="short",hideDelay:b="long",placement:y="top",describeTarget:$=!0,smart:x,groupId:w="tooltip",...k},j){const E=(0,c.A)(),[H,I]=(0,o.useState)(!1),[C,S]=(0,o.useState)(!1),R=(0,l.A)(j),L=(0,o.useRef)(null),M=(0,d.A)(e,A),D="string"==typeof t||Array.isArray(t)&&t.every(e=>"string"==typeof e),z=(0,o.useCallback)(({target:e})=>{L.current=e,e!==R.current&&e!==n&&I(!1)},[n]);(0,o.useEffect)(()=>{if(!n)return;const e=()=>{const e=t=>{if((0,p.A)(t).some(Boolean)&&!["absolute","fixed"].includes(window.getComputedStyle(t).position))return!0;for(const n of t.children)if(e(n))return!0;return!1};I(!x||e(n))},t=()=>{e()},r=()=>{L.current&&L.current===R.current||I(!1),L.current=null},o=()=>{a.some(e=>e?.matches(":hover"))||h.A.primary||e()},i=()=>{(0,f.A)()!==n&&I(!1)},s=({key:e})=>{"Escape"===e&&H&&(S(!0),I(!1))};return document.addEventListener("keydown",s),document.addEventListener("mousedown",z),n.addEventListener("focusin",t),n.addEventListener("focusout",r),n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",i),()=>{document.removeEventListener("keydown",s),document.removeEventListener("mousedown",z),n.removeEventListener("focusin",t),n.removeEventListener("focusout",r),n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",i)}},[n,z,x,H]),(0,o.useEffect)(()=>{if(n&&$&&H){const e=n.getAttribute("aria-describedby");n.setAttribute("aria-describedby",e?`${e} ${E}`:E)}else if(n){const e=n.getAttribute("aria-describedby");if(e)if(e===E)n.removeAttribute("aria-describedby");else{const t=e.replace(new RegExp(`(?:^|\\s+)${E}`),"");n.setAttribute("aria-describedby",t)}}},[$,n,H]),(0,o.useEffect)(()=>{!H&&C&&S(!1)},[H,C]);const P=(0,u.A)(),T={base:{palette:{"primary-background":P.components.tooltip["background-color"],"foreground-color":P.components.tooltip["foreground-color"],interactive:(0,m.ho)(P.base.palette.interactive,P.components.tooltip["background-color"])}}};return(0,r.jsx)(g.A,{theme:T,children:(0,r.jsx)(s.A,{"data-testid":M.root,id:E,groupId:w,...k,show:H,showDelay:C?"none":i,hideDelay:C?"none":b,onMouseOver:()=>{I(!0)},onMouseOut:()=>{I(!1)},strategy:"fixed",as:v,role:D?"tooltip":"dialog",target:n,arrow:!0,placement:y,onMouseDown:z,hideOnTargetHidden:!0,ref:R,children:t})})}),$=(0,b.A)(y,A)},4027:(e,t,n)=>{n.d(t,{Ay:()=>N});var r={};n.r(r),n.d(r,{Component:()=>D,name:()=>M,set:()=>L,viewBox:()=>z});var o=n(4848),a=n(1594),i=n(8151),s=n(371),c=n(5636),l=n(331),d=n(9549),u=n(13),m=n(3351),p=n(4853),h=n(4680),f=n(924),b=n(127),g=n(3418);const A=b.A?(0,g.A)():1;var v=n(3456);const y=h.A&&window.getComputedStyle(document.documentElement).fontSize||"16px";var $=n(3085),x=n(427),w=n(8579),k=n(9187),j=n(5253),E=n(4869),H=n(7321),I=n(1294),C=n(177),S=n(7501),R=n(6765);const L="budicon",M="open",D=()=>(0,o.jsx)("path",{d:"M21 12h-.959V5.676L11.116 14.6l-.718-.718 8.925-8.925H13V4h8v8Zm-2 2h-1v5.5c0 .335-.165.5-.5.5H5.485c-.335 0-.526-.165-.526-.5V7.484c0-.335.191-.526.526-.526H11V6H5.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 4 7.485V19.5c0 .431.144.712.431 1 .288.288.623.5 1.054.5H17.5c.431 0 .712-.212 1-.5.288-.288.5-.569.5-1V14Z"}),z="0 0 25 25";var P=n(7491),T=n(8249);const q=(0,n(8044).A)("link",["preview-popover","preview","new-tab"]),_=i.Ay.div(({theme:e,preview:t})=>i.AH`
    background-color: ${e.components.tooltip["background-color"]};
    z-index: ${e.base["z-index"].tooltip};

    ${t&&i.AH`
      padding: calc(${e.base.spacing} / 4);
    `}
  `);_.defaultProps=d.qn;const F=(0,i.Ay)(l.A)(({theme:e})=>{const t=(0,k.A)(()=>(0,H.W0)(e.components.tooltip["background-color"])),n=(0,H.Vr)(e.base["font-size"],e.base["font-scale"]);return i.AH`
    position: relative;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    padding: 0 ${e.base.spacing};
    min-height: 1.5rem;
    line-height: 1;
    color: ${t};
    font-size: ${n.xs};
    text-decoration: none;

    /* FIXME: Button selector specificity... */
    & + & {
      margin: 0;
    }

    & + &::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block: 0;
      width: 1px; /* stylelint-disable-line unit-allowed-list */
      background-color: ${t};
      opacity: ${e.base.transparency["transparent-3"]};
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:focus {
      box-shadow:
        inset 0 0 0 0.0625rem ${e.base.palette.light},
        0 0 0.125rem 0.0625rem ${e.base.palette.interactive};
    }
  `});F.defaultProps=d.qn;const B=i.Ay.div``,O=(0,i.Ay)(F)(({theme:e})=>i.AH`
    padding: calc(${e.base.spacing} / 2);

    & + & {
      padding-inline-start: calc(${e.base.spacing} - ${e.base.spacing} / 4);
      padding-inline-end: calc(${e.base.spacing} / 4);
    }

    &:hover,
    &:active {
      text-decoration: none;
      ${B} span {
        text-decoration: underline;
      }
      ${B} ${C.T} span {
        text-decoration: none;
      }
    }

    ${B} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${C.T} {
      color: ${e.base.palette.light};
      background-color: ${e.base.colors.gray.dark};
      border-color: ${e.base.colors.gray.medium};
      inset-block-start: unset;
      margin-inline: calc(${e.base.spacing} / 4);

      &:first-of-type {
        margin-inline-start: calc(${e.base.spacing} / 2);
      }

      &:last-of-type {
        margin-inline-end: calc(${e.base.spacing} / 2);
      }
    }
  `);O.defaultProps=d.qn;const Z=(0,i.Ay)(s.Ay)`
  &:has(> img) {
    display: inline-block;

    ${R.vE} {
      vertical-align: top;
    }
  }
`;Z.defaultProps=d.qn,(0,R.pU)(r);const V=(0,a.forwardRef)(function({testId:e,href:t,variant:n="link",icon:r=!1,previewable:i=!1,onPreview:s,target:l,children:d,...g},k){const E=j.A.test(t)?void 0:t,{initialized:H}=(0,u.A)(),L=(0,T.gP)(),M=!(!L||!L[0]),{previewTriggerRef:D}=(0,a.useContext)(I.A),z=(0,m.A)(),V=(0,p.A)(k),[N,U]=(0,a.useState)(!1),[W,K]=(0,a.useState)("short"),[J,X]=(0,a.useState)(!1),G=(0,a.useRef)(null),Q=((e,{breakpointRef:t,defaultValue:n=!1,themeProp:r="breakpoints"}={})=>{const{base:{breakpoints:o,"content-width":i}}=(0,v.A)(),s="content-width"===r?i[e]:o[e],[c,l]=(0,a.useState)(h.A?window.matchMedia(`(min-width: ${s})`).matches:!!n),d=A,u=(0,a.useCallback)(e=>{l(e.matches)},[]);return(0,a.useLayoutEffect)(()=>{if(t&&t.current){const e=(0,f.A)(e=>{if(!t.current?.checkVisibility())return;const n=e.some(({target:e,contentRect:n})=>{if(e!==t.current)return;const o="breakpoints"===r?parseFloat(y):d;return n.width>=parseFloat(s)*o});l(n)},100),n=new ResizeObserver(e);return n.observe(t.current),()=>{n.disconnect()}}if(h.A){const e=window.matchMedia(`(min-width: ${s})`),t="addEventListener"in e,n=(0,f.A)(()=>{l(window.innerWidth>=parseInt(s,10))},100);return t?(e.addEventListener("change",u),l(e.matches)):(window.addEventListener("resize",n),l(window.innerWidth>=parseInt(s,10))),()=>{t?e.removeEventListener("change",u):window.removeEventListener("resize",n)}}},[t?.current]),c})("sm"),Y=(0,$.A)(),{macintosh:ee}=(0,x.A)(),te=(0,a.useRef)(!1),ne=(0,w.A)(e,q),re=(0,a.useRef)({x:0,y:0}),oe=(0,a.useRef)({x:0,y:0}),ae=(0,a.useRef)({get contextElement(){return V.current??void 0},getBoundingClientRect:()=>({width:0,height:0,top:oe.current.y,bottom:oe.current.y,left:oe.current.x,right:oe.current.x,x:oe.current.x,y:oe.current.y,toJSON(){return JSON.stringify(this)}})}),ie=i&&!H&&!M;let se;try{if(E){const e=new URL(E,document.location.href);se=!!b.A&&/^https?:$/.test(e.protocol)&&document.location.origin!==e.origin}else se=!1}catch{se=!1}const ce=se?"_blank":l,le=()=>{Q&&!J&&U(!0)},de=()=>{U(!1)},ue=()=>{X(!1)},me=()=>{D.current=V.current,void 0!==E&&s?.({href:E})};return(0,a.useEffect)(()=>{"none"!==W||N||J||K("short")},[W,N,J]),(0,a.useEffect)(()=>{const e=({key:e})=>{"Escape"===e&&(N||J)&&(K("none"),U(!1),X(!1))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[N,J]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(Z,{"data-testid":ne.root,href:E,variant:n,ref:V,target:ce,...g,"aria-describedby":ie?`${z}-preview-instructions`:void 0,onMouseEnter:i?e=>{re.current={x:e.clientX,y:e.clientY},le()}:void 0,onMouseLeave:de,onMouseMove:e=>{re.current={x:e.clientX,y:e.clientY}},onFocus:i?()=>{!Q||N||te.current||X(!0)}:void 0,onBlur:()=>{te.current=!1,ue()},onKeyUp:e=>{e.getModifierState("Alt")&&"KeyP"===e.code&&me()},onContextMenu:()=>{te.current=!0,K("none"),ue(),de()},children:[d,"_blank"===ce&&(0,o.jsx)(P.A,{children:Y("opens_in_a_new_tab")}),!r&&"_blank"===ce&&(0,o.jsx)(R.Ay,{name:"open"})]}),ie&&(0,o.jsxs)(c.A,{"data-testid":ne.previewPopover,show:J,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:W,target:V.current,as:_,arrow:!0,preview:!0,portal:!0,onHide:ue,onClick:e=>{e.stopPropagation()},children:[(0,o.jsx)(O,{"data-testid":ne.preview,preview:!0,type:"button",ref:G,onClick:me,tabIndex:"-1",children:(0,o.jsxs)(B,{children:[(0,o.jsx)("span",{children:Y("preview")}),(0,o.jsxs)(S.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(C.A,{keyName:"Alt"}),(0,o.jsx)(C.A,{keyName:"P"})]})]})}),(0,o.jsx)(O,{"data-testid":ne.newTab,forwardedAs:"a",href:E,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:(0,o.jsxs)(B,{children:[(0,o.jsx)("span",{children:Y("link_open_in_tab_text")}),(0,o.jsxs)(S.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(C.A,{keyName:"CommandOrControl"}),(0,o.jsx)(C.A,{keyName:"Enter"})]})]})})]}),(0,o.jsxs)(c.A,{"data-testid":ne.previewPopover,show:N,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:W,target:ae.current,onMouseEnter:le,onMouseLeave:de,as:_,arrow:!0,portal:!0,onClick:e=>{e.stopPropagation()},onShow:()=>{const e=V.current?.getClientRects()??[],{x:t,y:n}=re.current,r=Array.from(e).find(e=>n<e.bottom&&t<e.right);r&&(oe.current={x:t,y:r.top})},children:[ie&&(0,o.jsx)(F,{"data-testid":ne.preview,preview:!0,type:"button",ref:G,onClick:me,tabIndex:"-1",children:Y("preview")}),(0,o.jsx)(F,{"data-testid":ne.newTab,forwardedAs:"a",href:E,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:Y("link_open_in_tab_text")})]}),ie&&(0,o.jsx)("span",{id:`${z}-preview-instructions`,hidden:!0,children:Y("preview_link_instruction",[ee?"option":"alt"])})]})}),N=(0,E.A)(V,q)},4125:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1594),o=(n(8347),n(4680));const a={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},i={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...a},s=(0,r.createContext)(i),c=(0,r.createContext)({create:()=>a,ModalContext:s,initialized:!1}),l=()=>{const e=o.A?window.cosmos.modalManagerContext??c:c;return(0,r.useContext)(e)}},4473:(e,t,n)=>{n.d(t,{Ay:()=>H});var r=n(4848),o=n(1594),a=n(8151),i=n(6453),s=n(7501),c=n(7521),l=n(1564),d=n(6765),u=n(4490),m=n(5870),p=n(928),h=n(7534),f=n(768),b=n(7321),g=n(3085),A=n(9549),v=n(9721),y=n(9466),$=n(371),x=n(6949);const w=(0,a.Ay)(h.A)(({theme:e})=>a.AH`
    &:not(${u.e} ${u.e} > &) {
      padding-block-end: calc(${e.base.spacing} / 2);
    }
  `);w.defaultProps=A.qn;const k=(0,a.Ay)(m.A).withConfig((0,b.ks)("loading"))(({theme:e,loading:t})=>a.AH`
    ${t&&a.AH`
      min-height: 4rem;
    `}

    &:not(:last-child) > ul > li:last-child {
      border-block-end: 0.0625rem solid ${e.base.palette["border-line"]};
    }

    &:not(${u.e} ${u.e} > &) {
      padding-block-end: calc(${e.base.spacing} / 2);

      & + ${p.F} {
        padding-block-start: ${e.base.spacing};
      }
    }
  `);k.defaultProps=A.qn;const j=(0,a.Ay)(v.Ay)(({theme:e})=>a.AH`
    padding-block: ${e.base.spacing};

    &:not(:last-child) {
      border-block-end: 0.0625rem solid ${e.base.palette["border-line"]};
    }
  `);j.defaultProps=A.qn;const E=({name:e,items:t})=>{const n=(0,g.A)();return(0,r.jsx)("ul",{children:t.map(({id:t,actions:o,contextualLabel:a,...s})=>(0,r.jsx)(j,{...s,forwardedAs:"li",actions:o&&(0,r.jsx)(i.A,{items:o,contextualLabel:e&&a?n("action_from_summarylist_heading",[a,e]):a})},t))})},H=(0,o.forwardRef)(function({icon:e,name:t,headingTag:n="h2",count:a,actions:m,items:h,onViewAll:b,loading:A,noItemsText:v,error:j,...H},I){const C=(0,g.A)(),S=(0,o.useMemo)(()=>A?(0,r.jsx)(y.A,{placement:"local",message:"string"==typeof A?A:void 0}):j?(0,r.jsx)(x.A,{...!0===j?{}:j}):h.length>0?(0,r.jsx)(E,{name:t,items:h}):(0,r.jsx)(f.A,{message:v}),[A,h,v,j]);return(0,r.jsxs)(u.A,{ref:I,...H,children:[(e||t||"number"==typeof a||m)&&(0,r.jsxs)(w,{children:[(0,r.jsxs)(s.A,{container:{alignItems:"center",gap:1},children:[e&&(0,r.jsx)(d.Ay,{name:e}),t&&(0,r.jsx)(c.A,{variant:n,children:t}),"number"==typeof a&&(0,r.jsx)(l.A,{children:a})]}),m&&(0,r.jsx)(i.A,{items:m,contextualLabel:t})]}),(0,r.jsx)(k,{loading:A,children:S}),!j&&"number"==typeof a&&a>h.length&&b&&(0,r.jsx)(p.A,{justify:"center",children:(0,r.jsx)($.Ay,{variant:"link","aria-label":t?C("view_all_noun",[t.toLowerCase()]):C("view_all"),onClick:b,children:C("view_all")})})]})})},4519:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="arrow-micro-up-down",i=()=>(0,r.jsx)("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),s="0 0 25 25"},4548:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="warn",i=()=>(0,r.jsx)("path",{d:"M12.5 4.468 3.085 21.561h18.83L12.5 4.468Zm11 18.032h-22l11-20 11 20ZM13.759 9.39v6.175a2.99 2.99 0 0 1-1.166.223c-.466 0-.886-.09-1.212-.223V9.39c.42-.313.792-.447 1.212-.447.42 0 .839.134 1.166.447Zm.466 9.396c0 .403-.14.76-.466 1.074a1.728 1.728 0 0 1-1.212.492c-.42 0-.792-.179-1.119-.492-.326-.313-.512-.671-.512-1.074 0-.447.186-.85.512-1.163a1.55 1.55 0 0 1 1.119-.447c.466 0 .886.134 1.212.447.326.313.466.716.466 1.163Z"}),s="0 0 25 25"},4853:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(...e)=>{const t=(0,r.useRef)(null),[n]=(0,r.useState)(()=>Object.defineProperty({current:null},"current",{configurable:!0,enumerable:!0,get:()=>t.current,set:n=>{t.current=n,e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})}}));return n}},4948:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(6629),a=n(2365),i=n(9463);const s=(e=":root")=>{const t=(0,r.useRef)(0),n=(0,r.useRef)(null),{styleSheetTarget:s}=(0,i.A)(),c=(0,r.useCallback)(()=>{n.current?.remove(),n.current=null},[]),l=(0,r.useCallback)(()=>{if(n.current)return;const r=document.querySelector(e);if(!r)return;const[o,i]=(0,a.A)(r);(o||i)&&(n.current=document.createElement("style"),n.current.nonce=window.__webpack_nonce__,n.current.textContent=`\n      ${e} {\n        ${i?`padding-inline-end: ${t.current}px !important`:""};\n        ${o?`padding-block-end: ${t.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(s??document.head).append(n.current))},[e]);return(0,r.useLayoutEffect)(()=>(t.current=(0,o.A)(),c),[c]),{enableScroll:c,disableScroll:l}}},5190:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(393);const a=(e,t=document,n=[])=>{const a=(0,r.useCallback)(t=>{"Escape"===t.key&&e(t)},[e,...n]);(0,o.A)("keydown",a,{target:t})}},5285:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="drag",i=()=>(0,r.jsx)("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),s="0 0 25 25"},5408:(e,t,n)=>{n.d(t,{A:()=>nt});var r={};n.r(r),n.d(r,{Component:()=>V,name:()=>Z,set:()=>O,viewBox:()=>N});var o={};n.r(o),n.d(o,{Component:()=>K,name:()=>W,set:()=>U,viewBox:()=>J});var a={};n.r(a),n.d(a,{Component:()=>Q,name:()=>G,set:()=>X,viewBox:()=>Y});var i={};n.r(i),n.d(i,{Component:()=>Je,name:()=>Ke,set:()=>We,viewBox:()=>Xe});var s=n(4848),c=n(1594),l=n(8151),d=n(9549),u=n(3351),m=n(8579),p=n(4853),h=n(712),f=n(5582),b=n(8268),g=n(9463);var A=n(5190),v=n(7940),y=n(371),$=n(8889),x=n(5636),w=n(3085),k=n(4685),j=n(7666),E=n(9749);const H=["button","a","input","li","legend"];var I=n(3700),C=n(3563),S=n(4869),R=n(7491),L=n(6765),M=n(2884);const D=(e,t,n,r,o)=>{(0,c.useEffect)(()=>{let a=null;if(t>0){const n=e?.current??o?.current?.getRootNode()??document;if(!(0,b.A)(n,HTMLElement,SVGElement,Document,ShadowRoot))return;const i=n.querySelectorAll(r);i.length>t&&(a=i[t])}if(a){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&n()},{root:e.current??null});return t.observe(a),()=>{t.disconnect()}}},[n,t])};var z=n(2558),P=n(9466),T=n(768);const q=(0,c.createContext)({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:(0,k.A)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null});var _=n(2907),F=n(9721),B=n(7501);const O="budicon",Z="caret-left",V=()=>(0,s.jsx)("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),N="0 0 25 25",U="budicon",W="caret-right",K=()=>(0,s.jsx)("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),J="0 0 25 25",X="budicon",G="check",Q=()=>(0,s.jsx)("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),Y="0 0 25 25";var ee=n(7521),te=n(1564),ne=n(331),re=n(4864),oe=n(2477),ae=n(3885);const ie=l.Ay.mark(({theme:e})=>l.AH`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);ie.defaultProps=d.qn;const se=e=>(0,s.jsx)(ie,{...e});var ce=n(3974);const le={isItem:e=>(0,ce.A)(e,"primary"),getItem(e,t){let n;return e.some(e=>this.isItem(e)&&e.id===t?(n=e,!0):!!e.items&&(n=this.getItem(e.items,t),!!n)),n},getPath(e,t){let n=[];return e.some(e=>{if(e.id===t)return n=[e],!0;if(e.items){const r=this.getPath(e.items,t);return r.length&&(n=r.concat(e)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(e=>e.id===t?{...n}:e.items?{...e,items:this.setItem(e.items,t,n)}:e)},mapItem(e,t,n){return e.map((e,r,o)=>{let a=e;return e.items&&(a={...a,items:this.mapItem(e.items,t,n)}),this.isItem(a)&&e.id===t&&(a=n(a,r,o)),a})},mapTree(e,t){return e.map((e,n,r)=>{let o=e;return e.items&&(o={...o,items:this.mapTree(e.items,t)}),this.isItem(o)?t(o,n,r):o})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(e=>{if(this.isItem(e)&&r.push(t.length>0?{...e,ancestors:t}:e),e.items){const a=this.flatten(e.items,[...t,e],n);n.parentFirst?o=[...o,...a]:r=[...r,...a]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,e=>{if(this.isItem(e)){if(e.id===t)return{...e,selected:void 0!==r?r:!e.selected};if("single-select"===n)return{...e,selected:!1}}return e})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((e,t)=>(this.isItem(t)&&t.selected&&(e=[...e,t]),t.items&&(e=[...e,...this.getSelected(t.items)]),e),[])},prependTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...t,...e.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...e.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t+1],e)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t-1],e)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}};var de=n(1357),ue=n(6883),me=n(9187),pe=n(7321),he=n(2952);(0,l.Ay)(y.Ay)`
  align-self: center;
`;const fe=(0,l.Ay)(L.Ay)``,be=l.Ay.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":a=!1,selectableParent:i=!1})=>{const s=(0,me.A)(()=>(0,de.jh)(.85,e.palette["primary-background"],e.palette.interactive)),c=(0,me.A)(()=>(0,de.jh)(.95,e.palette["primary-background"],e.palette.interactive)),d=(0,me.A)(()=>(0,de.B3)(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),u=t["radio-check"][":checked"]["background-color"],m=(0,me.A)(()=>(0,pe.W0)(u));return l.AH`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${"inline"===r&&l.AH`
        justify-content: flex-start;

        ${F.J0} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${F.Ik}):has(${F.oF}):has(${F.Af}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${F.Ik}):has(${F.oF}):not(:has(${F.Af})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${F.Ik}):not(:has(${F.oF})):has(${F.Af}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${F.Ik}):not(:has(${F.oF})):not(
              :has(${F.Af})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${F.Ik})):has(${F.oF}):has(${F.Af}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${F.Ik})):has(${F.oF}):not(
              :has(${F.Af})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${F.Ik})):not(:has(${F.oF})):has(
              ${F.Af}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${F.Ik})):not(:has(${F.oF})):not(
              :has(${F.Af})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${F.ox} {
            ${he.EN};
          }

          & > ${F.oF} {
            ${he.EN};

            ul {
              li {
                ${he.EN};
              }
              justify-content: end;
            }
          }

          & > ${F.Af} > ${B.D} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${s};
      }

      &:hover {
        ${fe} {
          visibility: visible;
          ${"single-select"===o&&l.AH`
            color: ${a?u:d};
          `}
          ${"multi-select"===o&&l.AH`
            ${!a&&l.AH`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${c};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!i&&("multi-select"===o||"single-select"===o)&&l.AH`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${ue.e} {
        flex-grow: 1;
      }

      ${fe} {
        margin-inline-start: 0;
        ${"single-select"===o&&l.AH`
          ${a?l.AH`
                color: ${u};
              `:l.AH`
                visibility: hidden;
              `}
        `}
        ${"multi-select"===o&&l.AH`
          ${a?l.AH`
                color: ${m};
                background-color: ${u};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:l.AH`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});be.defaultProps=d.qn;const ge=l.Ay.div`
  ${L.vE} {
    width: 1em;
    height: 1em;
  }

  & > ${ee.D} {
    ${he.EN};
  }
`,Ae=(l.Ay.p`
  ${de.Ic}
`,l.Ay.li(({theme:e})=>l.AH`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `));Ae.defaultProps=d.qn;const ve=l.Ay.div(({theme:e})=>l.AH`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);ve.defaultProps=d.qn;const ye=l.Ay.legend(({theme:{base:e}})=>{const t=(0,me.A)(()=>(0,de.jh)(.95,e.palette["primary-background"],e.palette.interactive)),n=(0,me.A)(()=>(0,de.jh)(.85,e.palette["primary-background"],e.palette.interactive));return l.AH`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${ue.e} {
      grid-column-gap: ${e.spacing};
    }

    ${L.vE} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});ye.defaultProps=d.qn;const $e=l.Ay.ul(({theme:e})=>l.AH`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${T.q} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${ve} {
      margin-block-start: ${e.base.spacing};
    }
  `);$e.defaultProps=d.qn;const xe=l.Ay.fieldset(({theme:e})=>l.AH`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);xe.defaultProps=d.qn;const we=(0,l.Ay)(xe)`
  min-width: 10rem;
`,ke=l.Ay.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,je=l.Ay.div(({theme:e})=>l.AH`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);je.defaultProps=d.qn;const Ee=l.Ay.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return l.AH`
    display: flex;
    flex-direction: column;

    &,
    ${je} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};
    }

    ${R.U}:first-child {
      + ${je}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});Ee.defaultProps=d.qn;var He=n(8044);const Ie=(0,He.A)("menu",["create-new"]),Ce=(0,He.A)("menu-item",[]);(0,L.pU)(r,o,a);const Se=({expandHandler:e})=>{const{end:t}=(0,v.A)(),n=(0,s.jsx)(L.Ay,{name:`caret-${t}`});return e?(0,s.jsx)(y.Ay,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},Re=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=(0,v.A)();return(0,s.jsx)(B.A,{container:{gap:.5,alignItems:"center"},as:ge,title:e.map(e=>le.isItem(e)?e.primary:e.label).join(" > "),children:n.map((e,n,o)=>{const a=le.isItem(e)?e.primary:e.label;return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(ee.A,{variant:"secondary",children:a}),n<o.length-1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ee.A,{variant:"secondary",children:(0,s.jsx)(L.Ay,{name:`caret-${r}`})}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ee.A,{variant:"secondary",children:"…"}),(0,s.jsx)(ee.A,{variant:"secondary",children:(0,s.jsx)(L.Ay,{name:`caret-${r}`})})]})]})]},e.id)})})},Le=(0,S.A)(({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:a,count:i,items:l,selected:d,partial:u,href:p,tooltip:h,onClick:f,onExpand:b,disabled:g,role:A="menuitem",...v})=>{const y=(0,w.A)(),{mode:$,onItemClick:x,itemLayout:k,accent:j,variant:E,setFocusDescendant:H,getScopedItemId:I,arrowNavigationUnsupported:C}=(0,c.useContext)(q),S=(0,m.A)(e,Ce),R="single-select"===$||"multi-select"===$,L=l&&"boolean"==typeof d,M=(0,c.useMemo)(()=>I(t),[t,I]),D=`${t}-count`,z=`${t}-secondary`,P=(0,c.useCallback)(e=>{if(e.detail>0){const t=e.target,n=t.getAttribute("role")===A?t:t.closest(`li[role="${A}"]`);n&&H(n)}f?.(t,e),x?.(t,e)},[f,x,t]),T=(0,c.useCallback)(e=>{b?.(t,e),e.stopPropagation()},[b,t]);let O;if(j&&!l){const e="function"==typeof j?j(n):j;O=(0,re.A)(n,e,e=>(0,s.jsx)(se,{children:e}))}const Z=o?(0,s.jsx)(Re,{ancestors:o}):r&&(0,s.jsx)(_.Ay,{items:r,id:z}),[V,N]=(0,oe.A)(),U=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(F.Ay,{ref:N,primary:O||(l?n:(0,s.jsx)(ee.A,{children:n})),secondary:Z,layout:k,visual:a,actions:l||i?(0,s.jsxs)(B.A,{container:{gap:1,alignItems:"center",justify:"center"},children:[void 0!==i&&(0,s.jsx)(te.A,{id:D,"aria-label":y("menu_item_count",[i]),children:i}),l&&(0,s.jsx)(Se,{expandHandler:L?T:void 0})]}):void 0,container:{colGap:1}}),h&&(0,s.jsx)(ae.A,{target:V,hideDelay:"none",showDelay:"short",children:h})]}),W=(0,c.useMemo)(()=>{const e=y("menu_collapsed",[n]);return l?y(C?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow",[e]):n},[d,n,l]),K=(0,c.useMemo)(()=>{let e;return r?(e=z,void 0!==i&&i>=0&&(e=`${e} ${D}`)):e=void 0!==i&&i>=0?D:"",e},[l,r,D,z]);return(0,s.jsxs)(B.A,{"data-testid":S.root,...v,container:{alignItems:"center",justify:"between",gap:1},id:M,as:be,"aria-label":W,"aria-describedby":K,role:A,"aria-disabled":g,"data-expand":!!l,itemLayout:k,tabIndex:-1,disabled:g,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(!g)return l&&"boolean"!=typeof d?T(e):P(e)},onMouseEnter:"flyout"===E?T:void 0,href:p,mode:$,isParentItem:!!l,"aria-selected":!!d,selectableParent:L,children:[R&&(!l||L)&&(0,s.jsx)(fe,{name:"check"}),p&&!R?(0,s.jsx)(ne.A,{href:p,tabIndex:"-1",children:U}):U]})},Ce),Me=(e,t,n,r)=>{const o=!!e.firstElementChild?.matches("legend"),a=e.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let i;if(a){const t=e.getBoundingClientRect().top,o=a.getBoundingClientRect(),s=e.querySelector(":scope > ul")?.scrollTop??0;let c=o.bottom;n>r&&(c=(o.top+o.bottom)/2),i=c-t+s}t.style.height=i?`${i}px`:""},De=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=(0,c.useContext)(q),a=`${o}-${e}`;return(0,s.jsxs)("li",{role:"presentation",children:[(0,s.jsx)(B.A,{container:{alignItems:"center",pad:[.5,1]},as:ve,id:a,children:t}),(0,s.jsx)("ul",{role:"group","aria-labelledby":a,children:n.length>0&&n.map(e=>(0,c.createElement)(Le,{...e,key:e.id,role:r??"menuitem"}))})]})},ze=e=>Array.isArray(e.items),Pe=(0,c.forwardRef)(function({items:e,parent:t,menuRole:n},r){const o=(0,w.A)(),a=(0,p.A)(r),i=(0,c.useRef)(null),l=(0,c.useRef)(null),d=(0,c.useRef)(null),[u,m]=(0,c.useState)(),{componentId:h,loadMore:f,loading:b,scrollAt:g,emptyText:A,onItemExpand:v,pushFlyoutId:y,flyOutActiveIdStack:$,updateActiveDescendants:k,updateParentDescendantStack:j}=(0,c.useContext)(q),{announcePolite:E}=(0,M.A)();D(i,e.length-1,()=>{f?.(t?.item?.id)},":scope > li"),(0,z.A)(()=>{if(u){const t=e.find(e=>e.id===u.id);t&&ze(t)?m(t):m(void 0)}},[u,e]),(0,c.useEffect)(()=>{e.some(e=>$.includes(e.id))||(d.current=null,m(void 0))},[$]),(0,c.useEffect)(()=>{0!==e.length||b||E({message:A??o("no_items")})},[e.length,b]);const H=(0,c.useMemo)(()=>e.length?e.map(e=>le.isItem(e)?(0,c.createElement)(Le,{...e,key:e.id,"aria-haspopup":!!e.items,"aria-expanded":e.items?e.id===u?.id:void 0,role:"listbox"===n?"option":"menuitem",onExpand:(t,n)=>{e.items?(d.current=n.currentTarget,m(ze(e)?e:void 0),e?.onExpand?.(t,n),v?.(t,n),y(e.id||h),k(),j&&j(d.current.closest("li"))):(d.current=null,m(void 0))}}):(0,c.createElement)(De,{...e,key:e.id,itemRole:"listbox"===n?"option":"menuitem"})):b?null:(0,s.jsx)(T.A,{message:A,forwardedAs:"li"}),[e,b,A,u,$]),I=(0,s.jsxs)($e,{ref:i,role:n,children:[H,b&&!u&&(0,s.jsx)(ke,{children:(0,s.jsx)(P.A,{placement:"local"})})]});(0,c.useLayoutEffect)(()=>{m(void 0),a.current&&(l.current=a.current.parentElement,Me(a.current,a.current,e.length,g))},[e]);const C=(0,c.useCallback)(()=>{u&&m(void 0)},[u]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(we,{ref:a,onScroll:C,"data-flyout-menu-parent-id":h,"data-flyout-menu-id":t?.item.id||h,children:I}),u&&a.current&&(0,s.jsx)(x.A,{target:d.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:(0,s.jsx)(Pe,{items:u.items,parent:{el:a.current,item:u,siblingItems:e,setExpandedItem:m,returnFocusRef:d},menuRole:n})})]})}),Te=Pe;var qe=n(5120);(0,L.pU)(r,o);const _e=({text:e,onClick:t})=>{const n=(0,w.A)(),{arrowNavigationUnsupported:r}=(0,c.useContext)(q),{start:o}=(0,v.A)(),a=(0,c.useCallback)(e=>{"Enter"!==e.key&&e.key!==`Arrow${(0,C.A)(o)}`||t()},[t,o]);return(0,s.jsx)(B.A,{container:{alignItems:"center"},as:ye,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:(0,s.jsx)(F.Ay,{visual:(0,s.jsx)(L.Ay,{name:`caret-${o}`}),primary:e})})},Fe=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},Be=(e,t)=>e.reduce((e,t)=>!le.isItem(t)&&t.items?e+t.items.length+1:e+1,t?1:0),Oe=e=>e.flatMap(e=>le.isItem(e)?e:[e,...e.items?e.items:[]]),Ze=(0,c.forwardRef)(function({items:e,parent:t,id:n,menuRole:r,...o},a){const i=(0,w.A)(),l=(0,c.useRef)(null),d=(0,p.A)(a),u=(0,c.useRef)(null),m=(0,c.useRef)(null),[h,f]=(0,c.useState)(!t),[b,g]=(0,c.useState)(),{scrollAt:A,"aria-label":y,loadMore:$,loading:x,emptyText:k,currentItemId:j,onItemExpand:E,focusControl:H,updateActiveDescendants:I,setFocusReturnEl:C,onItemCollapse:S,expandTo:R}=(0,c.useContext)(q),{end:L}=(0,v.A)(),{announcePolite:_}=(0,M.A)();D(u,e.length-1,()=>{x||$?.(t?.item?.id)},":scope > li"),(0,c.useLayoutEffect)(()=>{d.current&&!b&&(l.current=d.current.parentElement,Me(d.current,l.current,Be(e,x),A))}),(0,c.useEffect)(()=>{t&&f(!0)},[]),(0,z.A)(()=>{if(b){const t=Oe(e).find(e=>e.id===b.id);t&&ze(t)?g(t):g(void 0)}},[b,e]),(0,z.A)(()=>{if(j){const t=Oe(e).find(e=>e.items?.length&&void 0!==le.getItem(e.items,j));t&&(g(ze(t)?t:void 0),I({preventScroll:!0}))}},[j,e,t]),(0,c.useEffect)(()=>{if(R?.parentItemId){const t=Oe(e).find(e=>e.id===R.parentItemId);if(t)g(ze(t)?t:void 0),I({preventScroll:!0}),R.onComplete();else{const t=Oe(e).find(e=>e.items?.length&&void 0!==le.getItem(e.items,R.parentItemId));t?g(ze(t)?t:void 0):R.onComplete()}}},[R,e,t]);const F=(0,c.useCallback)((t,n)=>{const r=le.getItem(e,t);m.current=n.currentTarget,r&&ze(r)?g(r):g(void 0),r?.onExpand?.(t,n),E?.(t,n),I({preventScroll:!0})},[e]);(0,c.useEffect)(()=>{0!==e.length||x||_({message:k??i("no_items")})},[e.length,x]);const B=(0,c.useMemo)(()=>e.length?e.map((t,n)=>le.isItem(t)?(0,c.createElement)(Le,{...t,key:t.id,role:"listbox"===r?"option":"menuitem",onExpand:t.items?F:void 0}):(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(De,{...t,items:t.items.map(e=>e.items?{...e,onExpand:F}:e),itemRole:"listbox"===r?"option":"menuitem"}),e[n+1]&&le.isItem(e[n+1])&&(0,s.jsx)(Ae,{role:"separator"})]},t.id)):x?null:(0,s.jsx)(T.A,{message:k,forwardedAs:"li"}),[e,x,k]),O=(0,s.jsxs)($e,{id:b?void 0:n,ref:u,role:r,...o,children:[t&&(0,s.jsx)(_e,{text:t.item.primary,onClick:()=>{f(!1)}}),B,x&&!b&&(0,s.jsx)(ke,{children:(0,s.jsx)(P.A,{placement:"local",liveConfig:{contextualLabel:y??i("menu")}})})]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(qe.Ay,{"aria-hidden":!!b,as:xe,ref:d,open:h,style:{opacity:b?0:1},disabled:!!b,placement:L,onBeforeOpen:()=>{t&&(t.el.style.opacity="0"),d.current&&(d.current.style.opacity="1")},onAfterOpen:()=>{t&&Fe(t.el,!0)},onBeforeClose:()=>{t&&l.current&&(Fe(t.el,!1),t.el.style.opacity="1",Me(t.el,l.current,Be(t.siblingItems),A)),d.current&&(d.current.style.opacity="0")},onAfterClose:()=>{if(t){H?.focus();const e=t.returnFocusRef.current;t.setExpandedItem(void 0),e&&C(e?.closest("li")),S?.(t.item.id),I()}},children:O}),b&&d.current&&(0,s.jsx)(Ze,{id:n,items:b.items,parent:{el:d.current,item:b,siblingItems:e,setExpandedItem:g,returnFocusRef:m},menuRole:r})]})}),Ve=Ze,Ne=(0,c.forwardRef)(function(e,t){const n=(0,u.A)(),{testId:r,id:o=n,items:a=[],itemLayout:i="stacked",onCreateNew:l,mode:d="action",accent:h,scrollAt:f=7,emptyText:g,onItemClick:A,onItemActive:$,onItemExpand:x,loadMore:S,onItemCollapse:M,loading:D=!1,currentItemId:z,header:P,footer:T,variant:_="drill-down",focusControlEl:F,arrowNavigationUnsupported:B,"aria-describedby":O,"aria-label":Z,role:V="menu",listId:N,pauseDescendantEvaluation:U,menuList:W,handleRef:K,...J}=e,X=(0,m.A)(r,Ie),G=(0,w.A)(),{end:Q,start:Y}=(0,v.A)(),ee=(0,u.A)(),te=(0,p.A)(t),ne=(0,c.useRef)(0),[re,oe]=(0,c.useState)(0),[ae,ie]=(0,c.useState)(null),[se,ce]=(0,c.useState)([o]),[le,de]=(0,c.useState)(),[ue,me]=(0,c.useState)(!1),[pe,he]=(0,c.useState)([]),[fe,be]=(0,c.useState)(),ge=!F,Ae=(0,c.useMemo)(()=>`fieldset[data-flyout-menu-id="${se[se.length-1]}"]`,[se]),ve=(0,c.useMemo)(()=>F||te.current,[F,te.current]);(0,c.useImperativeHandle)(K,()=>({expandTo:e=>{be(e)}}),[]);const ye=(0,c.useCallback)(e=>{ce([...se,e])},[se]);(0,c.useEffect)(()=>{ce([...se,o])},[o]);const $e=(0,c.useCallback)(e=>{he([...pe,e])},[pe]),xe=(0,c.useCallback)(e=>btoa(encodeURIComponent(e)),[o]),we=(0,c.useCallback)(e=>decodeURIComponent(atob(e)),[o]),ke=(0,c.useCallback)(({preventScroll:e=!1}={})=>{me(e),oe(Math.random())},[]),He=(0,c.useMemo)(()=>({focusEl:ve,scope:te.current,scopeSelector:"drill-down"===_?'fieldset[aria-hidden="false"]':Ae,selector:`[role="${"menu"===V?"menuitem":"option"}"], legend`,focusDescendantEl:ae,clearFocusDescendant:()=>{ie(null)},focusReturnEl:le,clearFocusReturn:()=>{de(null)},currentDescendantId:z?xe(z):void 0,preventInitialScroll:ue,clearPreventScroll:()=>{me(!1)},pauseDescendantEvaluation:U}),[ve,te.current,Ae,le,ae,z,ue,U]),{activeDescendant:Ce,descendants:Se}=(({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:i,focusReturnEl:s,clearFocusReturn:l,currentDescendantId:d,onClick:u,preventInitialScroll:m,pauseDescendantEvaluation:p=!1,clearPreventScroll:h},f=[])=>{const[g,A]=(0,c.useState)(0),y=(0,c.useRef)(""),$=(0,c.useRef)(p),[x,w]=(0,c.useState)(null),[I,C]=(0,c.useState)(null),[S,R]=(0,c.useState)(),{rtl:L}=(0,v.A)(),M=(0,c.useCallback)(()=>{S?.forEach(e=>{e.setAttribute("data-current","false")})},[S]),D=(0,c.useCallback)(e=>{M(),R(e?Array.from(e).filter(e=>(0,b.A)(e,HTMLElement)):null)},[S]),z=(0,c.useCallback)(({clear:t}={clear:!1})=>{const n=[];if(S&&S.length&&S.forEach(e=>{e.id=e.id||(0,k.A)(),n.push(e.id)}),t){const t=e?.getAttribute("aria-owns")?.split(" "),r=t?.filter(e=>!n.includes(e));e?.setAttribute("aria-owns",r?.join(" ")||"")}else e?.setAttribute("aria-owns",n.join(" "))},[e,S]),P=(0,c.useCallback)(()=>{if(p)return;let e=t;if(e&&(0,b.A)(e,HTMLElement)){if(n&&(e=e.querySelector(n)),!e)return void D(null);if(r){const t=e.querySelectorAll(r);D(t)}else{const t=e.querySelectorAll(j.U);D(t)}}else D(null);null===I&&C(0)},[t,n,r,p,I]);return(0,c.useEffect)(()=>{$.current=p},[p]),(0,c.useEffect)(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",(0,E.A)()===e?"true":"false");const n=()=>{t.setAttribute("data-active-scope","true")},r=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",n),e.addEventListener("blur",r),()=>{e.removeEventListener("focus",n),e.removeEventListener("blur",r)}},[t,e]),(0,c.useEffect)(()=>{p||P()},[p]),(0,c.useEffect)(()=>{const e=setTimeout(()=>{P(),$.current||C(0)},0);return()=>clearTimeout(e)},[...f]),(0,c.useEffect)(()=>{p?(M(),z({clear:!0})):(z(),A(Math.random()))},[p,e,S]),(0,c.useEffect)(()=>{const t=()=>{l?.(),h?.(),null!==I&&I+1<S.length?C(I+1):C(0)},n=()=>{l?.(),h?.(),C(null!==I&&I-1>-1?I-1:S.length-1)},r=e=>{S?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===o&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===o&&e.preventDefault(),setTimeout(()=>{switch(e.key){case"ArrowDown":"vertical"===o&&t();break;case"ArrowUp":"vertical"===o&&n();break;case"ArrowRight":"horizontal"===o&&(L?n():t());break;case"ArrowLeft":"horizontal"===o&&(L?t():n());break;case"Enter":if(null!==I){if(u){u(S[I]);break}const e=S[I].nodeName.toLowerCase();H.includes(e)?S[I].click():S[I].querySelector(`${H.join(",")}`)?.click()}}},0))};return!p&&e&&S?.length&&!d&&e.addEventListener("keydown",r),()=>{e?.removeEventListener("keydown",r)}},[e,I,S,p]),(0,c.useEffect)(()=>{!p&&S&&d&&S.forEach((e,t)=>{e.id===d&&C(t)})},[d,S,p]),(0,c.useEffect)(()=>{if($.current)return;const t=x||I,n=s?.id;let r;const o=a?.id;let c,d=!1;if(S&&S.length){if(S.forEach((e,t)=>{null===x&&e.id===o&&(c=t,d=!0,w(t)),e.id===n&&(r=t),e.setAttribute("data-current","false")}),r&&r!==I)return C(r),void l?.();if(d&&void 0!==c)return A(Math.random()),void C(c);if(null!==t&&S[t]){const n=S[t];if(n.setAttribute("data-current","true"),e?.setAttribute("aria-activedescendant",n.id),n.id!==y.current&&!m){const e=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;e?.call(n,!1)}null!==x&&(w(null),i?.()),y.current=n.id}}return()=>{e?.removeAttribute("aria-activedescendant")}},[S,I,a,e,g]),{activeDescendant:null!==I&&S?S[I]:void 0,descendants:S||null}})(He,[re]),Re=(0,I.A)(Ce);(({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:a,scrollEl:i})=>{(0,c.useEffect)(()=>{if(e&&t&&t.length&&r){const e=[...t].pop();let n;return(e?.id||void 0)===r.id?(i&&(i.scrollTop=i.scrollHeight-i.offsetHeight),o?.id!==r.id&&(n=setTimeout(()=>{a(e)},0))):o?.id!==r.id&&(n=setTimeout(()=>{a(r)},0)),()=>clearTimeout(n)}},[e,t,n,r,i,o])})({loading:D,descendants:Se,previousActiveDescendant:Re,activeDescendant:Ce,focusReturnEl:le,setFocusReturnEl:de,scrollEl:He.scope?.querySelector(He.scopeSelector)?.querySelector("ul")}),(0,c.useEffect)(()=>{const e=(e=null)=>{if(Ce){if("true"===Ce.dataset.expand&&"collapse"!==e)return void(Ce.querySelector('span[aria-hidden="true"]')??Ce).click();if("expand"!==e)if("flyout"===_&&se.length>1&&pe.length>0){ce([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}else"true"===Ce.dataset.collapse&&Ce.click()}},t=t=>{switch(t.key){case`Arrow${(0,C.A)(Q)}`:if(B)break;e("expand");break;case`Arrow${(0,C.A)(Y)}`:if(B)break;e("collapse");break;case"Escape":if("flyout"===_&&se.length>1&&pe.length>0){t.preventDefault(),t.stopPropagation(),ce([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}}B&&(" "===t.key||"Spacebar"===t.key)&&t.shiftKey&&(t.preventDefault(),e())};return Ce&&$?.(we(Ce.id)),ve?.addEventListener("keydown",t),()=>ve?.removeEventListener("keydown",t)},[ve,Ce,se]),(0,c.useEffect)(()=>{const e=setTimeout(()=>{if(a.length===ne.current){const e=Se?.map(e=>e.id),t=He.scope?.querySelector(He.scopeSelector)?.querySelectorAll(He.selector);if(!t)return void ke();const n=Array.from(t);return n?.length!==e?.length?void ke():void(n.every((t,n)=>t.id===e[n])||ke())}ne.current=a.length,ke()},0);return()=>clearTimeout(e)},[a]);const Le=(0,c.useMemo)(()=>({componentId:o,"aria-label":Z,mode:d,arrowNavigationUnsupported:B,onItemClick:(e,t)=>{ge&&te.current?.focus(),A?.(e,t)},onItemActive:$,onItemExpand:x,onItemCollapse:M,itemLayout:i,accent:h,scrollAt:f,emptyText:g,radioName:ee,loadMore:S,loading:D,variant:_,focusControl:ve,updateActiveDescendants:ke,setFocusReturnEl:de,setFocusDescendant:ie,getScopedItemId:xe,pushFlyoutId:ye,flyOutActiveIdStack:se,updateParentDescendantStack:$e,expandTo:{parentItemId:fe,onComplete:()=>{be(void 0)}}}),[o,Z,d,B,A,$,x,M,i,h,f,g,ee,S,D,_,ve,ke,de,ie,xe,ye,se,$e,fe]),Me=W??("drill-down"===_?(0,s.jsx)(Ve,{items:a,id:N,menuRole:V,"aria-multiselectable":"multi-select"===d,"aria-labelledby":Z?`${o}-menuLabel`:void 0}):(0,s.jsx)(Te,{items:a,menuRole:V}));return(0,s.jsxs)(Ee,{"data-testid":X.root,id:o,"aria-describedby":ge?`${o}-menuDescription`:void 0,...J,ref:te,tabIndex:ge?0:void 0,children:[ge&&(0,s.jsx)("span",{id:`${o}-menuDescription`,hidden:!0,children:`${G("menu_selection_instructions")} `&&O||""}),Z&&(0,s.jsx)(R.A,{id:`${o}-menuLabel`,children:Z}),P&&(0,s.jsx)("header",{"data-popover-scroll-el":!0,children:P}),(0,s.jsx)(je,{"data-popover-scroll-el":!0,children:(0,s.jsx)(q.Provider,{value:Le,children:Me})}),(l||T)&&(0,s.jsx)("footer",{"data-popover-scroll-el":!0,children:l?(0,s.jsxs)(y.Ay,{"data-testid":X.createNew,variant:"link",onClick:l,children:[(0,s.jsx)(L.Ay,{name:"plus"})," ",G("create_new")]}):T})]})}),Ue=(0,S.A)(Ne,Ie),We="budicon",Ke="arrow-micro-down",Je=()=>(0,s.jsx)("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),Xe="0 0 25 25",Ge=(0,He.A)("menu-button",[]);(0,L.pU)(i);const Qe=l.Ay.button(({theme:{base:{spacing:e}}})=>l.AH`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${$.l} + ${y.OV} {
        margin-inline-start: ${e};
      }
    `);Qe.defaultProps=d.qn;const Ye=l.Ay.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return l.AH`
    max-width: 100%;

    ${t&&l.AH`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${ee.D} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${L.vE}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),et=(0,l.Ay)(x.A)`
  min-width: 20ch;
`,tt=(0,c.forwardRef)(function(e,t){const n=(0,u.A)(),{testId:r,id:o=n,text:a,menu:i,popover:l,onClick:d,icon:$,count:x,iconOnly:w=!1,showArrow:k=!1,...j}=e,E=(0,m.A)(r,Ge),[H,I]=(0,c.useState)(!1),C=(0,p.A)(t),S=(0,p.A)(l?.ref),R=(0,p.A)(i?.ref);((e,t)=>{const[n,r]=(0,c.useState)(!1),o=(0,c.useRef)(null),{portalTarget:a}=(0,g.A)(),i=a?.ownerDocument?.defaultView||window,s=(0,c.useRef)();(0,c.useEffect)(()=>()=>{s.current?.abort()},[]);const l=(0,c.useCallback)(a=>{if(!n)return;const c=(0,b.A)(a,FocusEvent)?a.relatedTarget:null,l=(0,h.A)(e).flatMap(e=>[e,...(0,f.A)(e)]);if((0,b.A)(c,Node)){const e=l.find(e=>e?.contains(c));if(e)return void(o.current=e)}const d=new AbortController,u=e=>{l.some(t=>e.composedPath().some(e=>(0,b.A)(e,Node)&&t.contains(e)))||(r(!1),t?.(!1,o.current),o.current=null),d.abort()};i?.document?.addEventListener("focusin",u,{once:!0,signal:d.signal}),i?.document?.addEventListener("mouseup",u,{once:!0,signal:d.signal});const m=()=>{r(!1),t?.(!1,o.current),o.current=null,d.abort()};try{window.parent?.document.addEventListener("focusin",m,{once:!0,signal:d.signal}),window.parent?.document.addEventListener("mouseup",m,{once:!0,signal:d.signal})}catch{}s.current=d},[n,t,e]),d=(0,c.useCallback)(e=>{if(!n){r(!0);const n=e.currentTarget;t?.(!0,n),o.current=n}},[n,t]);(0,c.useEffect)(()=>{const t=(e=>(0,h.A)(e).flatMap(e=>[e,...(0,f.A)(e)]).filter(e=>(0,b.A)(e,HTMLElement)))(e);t.forEach(e=>{e?.contains(document.activeElement)&&d(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),(0,c.useEffect)(()=>{const t=(0,h.A)(e);return t.forEach(e=>{e?.addEventListener("focusin",d),e?.addEventListener("popover:focusin",d),e?.addEventListener("focusout",l),e?.addEventListener("popover:focusout",l)}),()=>{t.forEach(e=>{e?.removeEventListener("focusin",d),e?.removeEventListener("popover:focusin",d),e?.removeEventListener("focusout",l),e?.removeEventListener("popover:focusout",l)})}},[e,d,l])})([S,C],(0,c.useCallback)(e=>{e||I(!1)},[])),(0,A.A)(e=>{H&&(I(!1),e.stopPropagation())},C),(0,A.A)(e=>{H&&(I(!1),e.stopPropagation(),C.current?.focus())},i?.focusControlEl);const{rtl:M}=(0,v.A)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.Ay,{"data-testid":E.root,as:Qe,"aria-label":a,...j,id:o,ref:C,"aria-expanded":H,"aria-haspopup":"menu","aria-controls":H?`${o}-popover`:void 0,label:w&&!H?a:void 0,onClick:e=>{const t=e.detail>0;H?t&&I(!1):I(!0),H&&!t||d?.(e)},icon:w,children:(0,s.jsxs)(B.A,{as:Ye,container:{alignItems:"center",gap:1},padIcon:w&&k,children:[$&&(0,s.jsx)(L.Ay,{name:$}),!w&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ee.A,{children:a}),"number"==typeof x&&(0,s.jsx)(te.A,{children:x})]}),(!w||k)&&(0,s.jsx)(L.Ay,{name:"arrow-micro-down"})]})}),(0,s.jsx)(et,{placement:M?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...l,id:`${o}-popover`,show:!!i&&H,target:C.current,ref:S,children:i&&(0,s.jsx)(Ue,{testId:E.root,...i,ref:R,items:i.items,onItemClick:(e,t)=>{"multi-select"!==i.mode&&I(!1),i.onItemClick?.(e,t)},focusControlEl:i.focusControlEl||C.current||void 0})})]})}),nt=(0,S.A)(tt,Ge)},5636:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(4848),o=n(1594),a=n(5206),i=n(626),s=n(9463),c=n(2477),l=n(4853),d=n(3351),u=n(2558),m=n(6416),p=n(393),h=n(680),f=n(4680);const b=(0,o.createContext)({checkActive:()=>!0,setActive:()=>{},popovers:{}});var g=n(8889),A=n(127),v=n(6629),y=n(2365);Object.freeze({name:"sameWidth",enabled:!0,phase:"beforeWrite",fn({state:e}){e.styles.popper.width=`${e.rects.reference.width}px`},requires:["computeStyles"]});const $=A.A?(0,v.A)():0,x=(Object.freeze({name:"fitToContent",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn({state:e}){e.styles.popper.width="fit-content",e.elements.popper.style.maxWidth="60ch",e.elements.popper.style.minWidth=`${e.rects.reference.width}px`}}),Object.freeze({name:"placeAndContain",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn:({state:e})=>{const[t,n]=e.placement.split("-"),r={top:0,bottom:0,right:0,left:0},o=e.orderedModifiers.find(({name:e})=>"preventOverflow"===e)?.options?.padding;"number"==typeof o?(r.top=o,r.bottom=o,r.right=o,r.left=o):o&&(r.top=o.top??r.top,r.bottom=o.bottom??r.bottom,r.right=o.right??r.right,r.left=o.left??r.left);const a=document.documentElement.clientWidth,i=document.documentElement.clientHeight,s=e.rects.reference,c=s.x,l=c+s.width,d=s.y,u=d+s.height,m=(c+l)/2<a/2,p=(d+u)/2<i/2,h=e.modifiersData.offset?.[e.placement]?.x??0,f=e.modifiersData.offset?.[e.placement]?.y??0;let b=null,g=null;const A=[...e.elements.popper.children].flatMap(e=>{const t=e.querySelectorAll("[data-popover-scroll-el]");return t.length>0?[...t]:e}).reduce((t,n)=>n===e.elements.arrow?t:(0,y.A)(n)[0]?t+n.scrollHeight+$:t+n.scrollHeight,0),v=Math.max(e.elements.popper.scrollHeight,A),x=Math.max(e.elements.popper.scrollWidth,...Array.from(e.elements.popper.children).map(t=>t===e.elements.arrow?-1/0:(0,y.A)(t)[1]?t.scrollWidth+$:t.scrollWidth));let w=t;"bottom"===t?(g=i-u-f-r.bottom,u+f+v+r.bottom>i&&(w=p?"bottom":"top")):"top"===t?(g=d+f-r.top,d+f-v+r.top<0&&(w=p?"bottom":"top")):"left"===t?(b=c+h-r.left,c+h-x+r.left<0&&(w=m?"right":"left")):"right"===t&&(b=a-l-h-r.right,l+h+x+r.right>a&&(w=m?"right":"left")),"left"!==w&&"right"!==w||(g=i-r.top-r.bottom),e.elements.popper.style.maxHeight=`${g}px`,e.elements.popper.style.maxWidth=null!==b?`${b}px`:"",w=`${w}${n?`-${n}`:""}`,e.placement!==w&&(e.placement=w,e.reset=!0)}})),w={none:0,short:500,long:1e3},k=(0,o.forwardRef)(function({show:e=!0,portal:t=!0,target:n,placement:A="bottom",strategy:v="fixed",style:y,modifiers:$=[],arrow:k=!1,groupId:j,showDelay:E="none",hideDelay:H="none",hideOnTargetHidden:I=!1,children:C,onHide:S,onShow:R,...L},M){const{portalTarget:D}=(0,s.A)(),{checkActive:z,setActive:P,popovers:T}=(0,o.useContext)(b),[q,_]=(0,c.A)(),F=(0,l.A)(M,_),B=(0,o.useRef)(null),O=(0,o.useRef)(),Z=(0,o.useRef)(null),[V,N]=(0,o.useState)(e),U=(0,o.useRef)(),W=(0,d.A)(),K=n instanceof Element?n:n?.contextElement,J="boolean"==typeof t?D:t,X=(0,o.useMemo)(()=>{const e=!!$.slice().reverse().find(e=>"flip"===e.name&&void 0!==e.enabled)?.enabled;return[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,k?5.5:2]}},{name:"hide",enabled:I},{name:"arrow",enabled:k,options:{element:B.current,padding:7}},{name:"preventOverflow",options:{tether:!$.find(e=>"sameWidth"===e.name||"fitToContent"),padding:16}},{...x,enabled:!e},...$]},[k,I,$]),G=(0,o.useMemo)(()=>{const e=[...X].reverse().find(e=>"offset"===e.name&&!1!==e.enabled);return Array.isArray(e?.options?.offset)?e?.options?.offset[1]??0:0},[X]),{styles:Q,attributes:Y,forceUpdate:ee}=(0,i.E)(n,q,{placement:A,strategy:v,modifiers:X});ee&&(O.current=ee);const[te]=(0,o.useState)(()=>new AbortController),[ne]=(0,o.useState)(()=>new WeakSet),[re]=(0,o.useState)(()=>new ResizeObserver(e=>{let t=!1;for(const{target:n}of e)ne.has(n)?t||(t=!0,te.signal.aborted||O.current?.()):ne.add(n)}));(0,o.useEffect)(()=>()=>{te.abort(),re.disconnect()},[]),(0,o.useEffect)(()=>{if(q)return re.observe(q),()=>{re.unobserve(q)}},[q]),(0,o.useEffect)(()=>{if(K)return re.observe(K),()=>{re.unobserve(K)}},[K]),(0,o.useLayoutEffect)(()=>{Z.current=K?(0,h.A)(K,document.documentElement):null},[K]),(0,o.useEffect)(()=>{if(!V||!K)return;let e;const t=()=>{if(K&&Z.current){const n=(0,h.A)(K,document.documentElement);Z.current.x!==n.x||Z.current.y!==n.y?(Z.current=n,O.current?.()):e=requestAnimationFrame(t)}};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}},[V,K]),(0,o.useEffect)(()=>{j&&e&&P(W,j),f.A?(U.current&&clearTimeout(U.current),U.current=window.setTimeout(()=>{N(e),e&&O.current?.()},w[e?E:H])):(N(e),e&&O.current?.())},[e]),(0,o.useEffect)(()=>()=>clearTimeout(U.current),[]),(0,u.A)(()=>{V?R?.():S?.()},[V]),(0,o.useEffect)(()=>{j&&T[j]&&T[j]!==W&&N(!1)},[j?T[j]:void 0]);const oe=(0,m.A)(K,!!t),ae=(0,o.useCallback)(e=>{if(K&&t){const t=new Event(e.type.startsWith("popover:")?e.type:`popover:${e.type}`,{bubbles:!0,cancelable:!0});K.dispatchEvent(t)}},[K,t]);(0,p.A)("focusout",ae,{target:F}),(0,p.A)("popover:focusout",ae,{target:F}),(0,p.A)("focusin",ae,{target:F}),(0,p.A)("popover:focusin",ae,{target:F});const ie=(0,r.jsxs)(g.l,{...L,"data-popover-id":oe,portal:!(!t||!J),offset:G,ref:F,style:{...y,...Q.popper},...Y.popper,children:[k&&(0,r.jsx)(g.s,{ref:B,style:{...Q.arrow}}),C]});return!n||!V||j&&!z(W,j)?null:t&&J?(0,a.createPortal)(ie,J):ie})},6416:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=n(5582),a=n(3351);const i=(e,t=!0)=>{const n=(0,a.A)();return(0,r.useEffect)(()=>{if(e&&t)return o.y.has(e)||o.y.set(e,new Set),e.toggleAttribute("data-popover-target",!0),o.y.get(e).add(n),()=>{o.y.has(e)&&(o.y.get(e).delete(n),0===o.y.get(e).size&&(o.y.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,n]),n}},6765:(e,t,n)=>{n.d(t,{Ay:()=>h,pU:()=>d,vE:()=>u});var r=n(4848),o=n(1594),a=n(8151),i=n(3456),s=n(9549),c=n(7321);const l=new Map([]),d=(...e)=>{e.forEach(({set:e,name:t,...n})=>{const r=e??"budicon";l.has(r)?l.get(r).has(t)||l.get(r).set(t,n):l.set(r,new Map([[t,n]]))})},u=a.Ay.svg(({theme:e,size:t="s"})=>{const{components:{icon:{size:{s:n,m:r,l:o}}}}=e;return a.AH`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0;
    /* stylelint-disable unit-allowed-list */
    min-width: 14px;
    min-height: 14px;
    /* stylelint-enable unit-allowed-list */

    @media (forced-colors: active) {
      fill: CanvasText;
    }

    ${"s"===t&&a.AH`
      width: ${n};
      height: ${n};
    `}

    ${"m"===t&&a.AH`
      width: ${r};
      height: ${r};
    `}

    ${"l"===t&&a.AH`
      width: ${o};
      height: ${o};
    `}

    ${"font-size"===t&&a.AH`
      width: 1em;
      height: 1em;
    `}
  `});u.defaultProps=s.qn;const m=a.Ay.div(({theme:e,background:t,foreground:n,size:r="m",shape:o="square"})=>{const i=(0,c.W0)(t),{base:{"border-radius":s},components:{icon:{size:{s:l,m:d,l:m},"border-radius-multiplier":p}}}=e;return a.AH`
    color: ${n??i};
    background-color: ${t};
    display: flex;
    justify-content: center;
    align-items: center;

    ${"s"===r&&a.AH`
      width: ${l};
      height: ${l};
    `}

    ${"m"===r&&a.AH`
      width: ${d};
      height: ${d};
    `}

    ${"l"===r&&a.AH`
      width: ${m};
      height: ${m};
    `}

    ${"font-size"===r&&a.AH`
      width: 1em;
      height: 1em;
    `}

    ${"square"===o&&a.AH`
      border-radius: calc(${p} * ${s});
    `}

    ${"circle"===o&&a.AH`
      border-radius: 50%;
    `}

    ${u} {
      width: 50%;
      height: 50%;
      /* stylelint-disable unit-allowed-list */
      min-width: min(14px, 90%);
      min-height: min(14px, 90%);
      /* stylelint-enable unit-allowed-list */
    }
  `});m.defaultProps=s.qn;const p=Object.freeze({Component:()=>null}),h=(0,o.forwardRef)(function({set:e,name:t,size:a,"aria-label":s,role:c,...h},f){const{base:{"icon-set":b}}=(0,i.A)(),g=e??b??"budicon",[A,v]=(0,o.useState)(l.get(g)?.get(t)??p);return(0,o.useEffect)(()=>{if(l.get(g)?.has(t))return void v(l.get(g).get(t));const e=new AbortController;return(async()=>{try{const e=encodeURIComponent(t);let r,o;switch(g){case"streamline":r="streamline-icons";break;case"budicon":r="icons";break;default:throw new Error("Unknown icon")}try{o=await n(2020)(`./${r}/${e}.icon`)}catch{o=await n(6935)(`./${r}/${e}.icon.tsx`)}if(o.name!==t||!o.Component)throw new Error("Malformed icon definition");d(o)}catch{d({set:g,name:t,...p})}e.signal.aborted||v(l.get(g).get(t)??p)})(),()=>e.abort()},[t,g]),"string"==typeof h.background?(0,r.jsx)(m,{...h,background:h.background,foreground:h.foreground,shape:h.shape,size:a,ref:f,children:(0,r.jsx)(u,{role:c??void 0!==s?"img":"presentation","aria-label":s,viewBox:A.viewBox,children:(0,r.jsx)(A.Component,{})})}):(0,r.jsx)(u,{...h,role:c??void 0!==s?"img":"presentation","aria-label":s,viewBox:A.viewBox,size:a,ref:f,children:(0,r.jsx)(A.Component,{})})})},6989:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="streamline",a="folder-empty",i=()=>(0,r.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),s="0 0 18 18"},7222:(e,t,n)=>{n.d(t,{Zi:()=>R,sg:()=>S});var r={};n.r(r),n.d(r,{Component:()=>h,name:()=>p,set:()=>m,viewBox:()=>f});var o=n(8151),a=n(6765),i=n(5408),s=n(9549),c=n(4848),l=n(1594),d=n(1357),u=n(7321);const m="budicon",p="warn-solid",h=()=>(0,c.jsx)("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),f="0 0 25 25";var b=n(3085),g=n(2477),A=n(4853),v=n(3351),y=n(3885),$=n(9187),x=n(1564),w=n(331),k=n(1269);const j=(0,l.createContext)({level:1});(0,a.pU)(r);const E=e=>o.AH`
  ::after {
    display: block;
    background-color: ${e};
  }
`,H=({detached:e,level:t,opacity:n,color:r})=>t&&t>1&&!e?o.AH`
        ::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: inherit;
          background-color: currentColor;
          opacity: ${n};
        }
      `:o.AH`
        background-color: ${r};
        border-start-start-radius: ${e?0:"calc(0.5rem * 0.5)"};
        border-start-end-radius: ${e?0:"calc(0.5rem * 0.5)"};
      `,I=(0,o.Ay)(w.A)(({theme:e,tabType:t,selected:n,level:r})=>o.AH`
    position: relative;
    background: none;
    cursor: pointer;
    white-space: nowrap;

    ${n&&o.AH`
      font-weight: bold;
    `}

    & + & {
      margin-inline-start: 0;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: ${e.base["disabled-opacity"]};
    }

    ${"horizontal"===t?(({selected:e,level:t,theme:n})=>{const r=n.components.button.color,a=n.base.palette["foreground-color"],{detached:i}=n.components.tabs,s=i?n.base.palette["primary-background"]:n.base.palette["secondary-background"],c=(0,$.A)(()=>(0,d.No)(.3,r))??"",l=(0,u.VR)(s)?s:(0,d.W0)(r),m=(0,$.A)(()=>(0,d.IM)(r,l).AA)?r:(0,u.ho)(r,l),p=i?(0,$.A)(()=>(0,d.No)(.95,a)):(0,$.A)(()=>(0,d.jh)(.9,l,m)),h=i?n.base.palette["secondary-background"]:(0,$.A)(()=>(0,d.jh)(.8,l,m)),{spacing:f}=n.base;let b=n.base.palette.interactive;return(0,d.IM)(b,l).AA||(b=(0,u.ho)(b,l)),o.AH`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: calc(4 * ${f});
    padding: 0 calc(1.5 * ${f});
    border: none;
    text-decoration: none;

    @media (pointer: coarse) {
      height: ${n.base["hit-area"]["finger-min"]};
    }

    span:first-of-type {
      color: ${e?r:a};
      display: inline-block;

      ::before {
        content: attr(data-content) / '';
        display: block;
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
    }

    &:first-child {
      margin-left: 0;
    }
    ::after {
      background: ${e?r:c};
      display: ${e?"block":"none"};
      content: '';
      position: absolute;
      height: 0.125rem;
      bottom: 0;
      left: calc(1.5 * ${f});
      right: calc(1.5 * ${f});
    }

    ${e?o.AH`
          ${t&&t>1&&o.AH`
            background-color: ${n.base.palette["primary-background"]};
          `}
        `:o.AH`
          @media (hover: hover) {
            &:not(:disabled):hover {
              text-decoration: none;
              ${H({detached:i,level:t,opacity:.1,color:p})}
            }

            &:not(:disabled):active {
              text-decoration: none;
              ${H({detached:i,level:t,opacity:.2,color:h})}
            }
          }
        `}

    &:focus,
    &:not([disabled]):focus {
      border-radius: calc(0.5rem * 0.5);
      box-shadow: ${n.base.shadow["focus-inset"]};
      text-decoration: none;
      ::after {
        display: none;
      }
    }

    @media (pointer: coarse) {
      min-block-size: ${n.base["hit-area"].finger};
    }

    ${x.B} {
      margin-inline-start: calc(0.5 * ${f});
    }

    ${i&&o.AH`
      &[aria-selected='true'],
      &:focus,
      &:not([disabled]):focus {
        color: ${b};
        span:first-of-type {
          color: ${b};
        }
        background: ${h};
      }
      &:hover:not(:disabled):not([aria-selected='true']) {
        background: ${p};
        border-radius: 0;
        color: ${a};
        span:first-of-type {
          color: ${a};
        }
      }
    `}
  `})({theme:e,selected:n,level:r}):(({selected:e,theme:t})=>{const{detached:n}=t.components.tabs,r=t.base.palette["border-line"],a=t.base.palette.interactive,i=t.base.palette["foreground-color"],s=t.base.palette["secondary-background"],c=(0,$.A)(()=>(0,d.No)(n?.95:.5,n?i:a))??"",{spacing:l}=t.base,m=n?s:(0,d.No)(.75,a),p=n?a:(0,u.ZS)(m,i);return o.AH`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    color: ${i};
    border-width: 0.0625rem 0;
    border-color: ${n?"transparent":r};
    height: calc(5.5 * ${l});
    margin-top: -0.0625rem;
    padding: 0 calc(2 * ${l});
    text-decoration: none;

    &:first-child {
      border-top: 0.0625rem solid ${n?"transparent":r};
    }
    ::after {
      content: '';
      position: absolute;
      display: ${e?"block":"none"};
      top: 0;
      bottom: 0;
      ${n?"left: 0;":"right: 0;"}
      width: 0.25rem;
      background: ${a};
    }
    &:hover&:not(:disabled) {
      ${E(c)}
      text-decoration: none;
    }

    &:focus,
    &:not([disabled]):focus {
      ${E(a)}
      box-shadow: inset 0 0 0 0.0625rem ${a};
      text-decoration: none;
    }

    ${n&&o.AH`
      border-radius: calc(0.5 * ${t.base["border-radius"]});
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin: calc(0.125 * ${l}) calc(2 * ${l});

      &:not([disabled]):focus,
      &[aria-selected='true'] {
        background: ${m};
        color: ${p};
      }
      &:hover&:not(:disabled):not([aria-selected='true']) {
        background: ${c};
      }
    `}
  `})({theme:e,selected:n})}

    ${R} {
      margin-inline-end: calc(0.5 * ${e.base.spacing});
    }
  `);I.defaultProps=s.qn,(0,l.forwardRef)(function({selected:e,content:t,count:n,type:r,disabled:o,errors:a,...i},s){const d=(0,b.A)(),[u,m]=(0,g.A)(),p=(0,A.A)(s,m),{level:h}=(0,l.useContext)(j),f=(0,v.A)(),$=(0,v.A)(),w=(0,v.A)(),E=[];return"number"==typeof n&&E.push(f),"number"==typeof n&&a&&E.push(w),a&&E.push($),(0,c.jsxs)(I,{ref:p,selected:e,tabType:r,disabled:o,level:h,"aria-describedby":E.length>0?E.join(" "):void 0,...i,children:[(0,c.jsxs)("span",{children:[!!a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(R,{name:"warn-solid"}),(0,c.jsx)(y.A,{target:u,hideDelay:"none",showDelay:"none",describeTarget:!1,children:d("tab_error_tooltip",[t])}),(0,c.jsx)(k.A,{id:$,children:d("tab_error_description")})]}),(0,c.jsx)("span",{"data-content":t,children:t})]}),"number"==typeof n&&(0,c.jsx)(x.A,{id:f,children:n}),"number"==typeof n&&a&&(0,c.jsx)(k.A,{id:w,children:","})]})});const C=o.Ay.div(({theme:e})=>o.AH`
    border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
    border-inline-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
    height: calc(${e.base["hit-area"]["mouse-min"]} + 0.0625rem);

    ${e.components.tabs.detached&&o.AH`
      padding: 0;
    `};

    @media (pointer: coarse) {
      height: calc(${e.base["hit-area"]["finger-min"]} + 0.0625rem);
    }
  `);C.defaultProps=s.qn;const S=o.Ay.div(({theme:e,hasScrollBar:t,level:n})=>o.AH`
    position: relative;

    ${e.components.tabs.detached&&o.AH`
      ${I} + ${I} {
        margin-inline-start: calc(2 * ${e.base.spacing});
      }
      &[aria-orientation='horizontal'] {
        background-color: ${e.base.palette["secondary-background"]};
        border-radius: var(--border-radius, ${e.base["border-radius"]});
        border-end-end-radius: 0;
        border-end-start-radius: 0;
        > ${I} {
          background-color: ${e.base.palette["secondary-background"]};
          &[aria-selected='true'] {
            background-color: ${e.base.palette["primary-background"]};
          }
          ${!t&&o.AH`
            :first-child {
              border-top-left-radius: var(--border-radius, ${e.base["border-radius"]});
            }
          `}
          ${t&&o.AH`
            :last-child {
              border-top-right-radius: var(--border-radius, ${e.base["border-radius"]});
            }
          `}
        }
      }
    `}

    &[aria-orientation='horizontal'] {
      height: max-content;
      overflow: auto;

      ${t?o.AH`
            max-width: calc(
              100% - ${e.base["hit-area"]["mouse-min"]} -
                ${n>1?"0px":`calc(0.5 * ${e.base.spacing}) - 0.0625rem `}
            );

            ${I} {
              border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
              height: calc(${e.base["hit-area"]["mouse-min"]} + 0.0625rem);

              @media (pointer: coarse) {
                height: calc(${e.base["hit-area"]["finger-min"]} + 0.0625rem);
              }

              &:disabled {
                opacity: 1;
                > * {
                  opacity: ${e.base["disabled-opacity"]};
                }
              }
            }
          `:o.AH`
            border-block-end: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
            ${n>1&&o.AH`
              background-color: ${e.base.palette["secondary-background"]};
              border: ${e.components.tabs.detached?"none":`0.0625rem solid ${e.base.palette["border-line"]}`};
              border-block-end: none;
              border-radius: 0;
              border-start-start-radius: ${e.components.tabs.detached?`var(--border-radius, ${e.base["border-radius"]})`:"calc(0.5rem * 0.5)"};
              border-start-end-radius: ${e.components.tabs.detached?`var(--border-radius, ${e.base["border-radius"]})`:"calc(0.5rem * 0.5)"};
            `}
          `}
      ${e.components.tabs.detached&&o.AH`
        padding-block: 0;
        border: 0.0625rem solid ${e.base.palette["border-line"]};
        border-block-end: none;

        ${C} + & {
          padding-inline-start: calc(0.25 * ${e.base.spacing});
        }
        ${I} + ${I} {
          margin-inline-start: 0;
        }
        ${t&&o.AH`
          border: none;
          border-inline-start: none;
          max-width: calc(100% - ${e.base["hit-area"]["mouse-min"]});

          @media (pointer: coarse) {
            max-width: calc(100% - ${e.base["hit-area"]["finger-min"]});
          }
        `}
      `}
    }

    &:has(:focus-visible) {
      &[aria-orientation='vertical'] {
        box-shadow: ${e.base.shadow["focus-group-inset"]};
      }

      &[aria-orientation='horizontal'] {
        box-shadow: ${e.base.shadow["focus-group"]};
      }
    }
  `);S.defaultProps=s.qn,(0,o.Ay)(i.A)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`.defaultProps=s.qn;const R=(0,o.Ay)(a.Ay)(({theme:e})=>o.AH`
    color: ${e.base.palette.urgent};
  `);R.defaultProps=s.qn;const L=o.Ay.div(({theme:e,level:t})=>o.AH`
    ${t>1&&o.AH`
      background-color: ${e.base.palette["secondary-background"]};
      ${!e.components.tabs.detached&&o.AH`
        border-inline: 0.0625rem solid ${e.base.palette["border-line"]};
        border-block-start: 0.0625rem solid ${e.base.palette["border-line"]};
        border-start-start-radius: calc(0.5rem * 0.5);
        border-start-end-radius: calc(0.5rem * 0.5);
      `}

      ${C}, ${I} {
        border-block-end: none;
        border-inline-end: none;
      }
    `}
    ${e.components.tabs.detached&&o.AH`
      background-color: ${e.base.palette["primary-background"]};
      border: 0.0625rem solid ${e.base.palette["border-line"]};
      border-block-end: none;
      ${C} {
        border-radius: 0;
      }
    `}
  `);L.defaultProps=s.qn;const M=o.Ay.span(({theme:e,transparent:t})=>o.AH`
    align-self: center;
    height: 1em;
    min-width: 0.0625rem;
    background-color: ${t?"transparent":e.base.palette["border-line"]};
  `);M.defaultProps=s.qn},7491:(e,t,n)=>{n.d(t,{A:()=>c,U:()=>s});var r=n(4848),o=n(1594),a=n(8151),i=n(1357);const s=a.Ay.span`
  ${i.Ic}
  -webkit-user-select: none;
  user-select: none;
`,c=(0,o.forwardRef)(function(e,t){return(0,r.jsx)(s,{...e,ref:t})})},7521:(e,t,n)=>{n.d(t,{A:()=>u,D:()=>d});var r=n(4848),o=n(1594),a=n(8151),i=n(1357),s=n(9549),c=n(9187),l=n(7321);const d=a.Ay.span(e=>{const{variant:t,status:n,theme:{base:{"font-size":r,"font-scale":o,"font-family":s,palette:{"foreground-color":d,urgent:u,warn:m,success:p},transparency:{"transparent-2":h}},components:{text:f}}}=e;let b;n&&(b={error:u,warning:m,success:p}[n]),"secondary"===t&&(b=(0,c.A)(()=>(0,i.B3)(b??d,h)));const g=(0,l.Vr)(r,o);return a.AH`
    font-size: ${g[f[t]["font-size"]]};
    font-weight: ${f[t]["font-weight"]};
    font-family: ${f[t]["font-family"]||s};
    color: ${b};
  `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({variant:e="primary",as:t,...n},o){return!t&&/h\d/i.test(e)&&(t=e),(0,r.jsx)(d,{ref:o,variant:e,as:t,...n})})},7784:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1594),o=n(5582),a=n(8268),i=n(712),s=n(9463);const c=(e,t,n)=>{const{portalTarget:c}=(0,s.A)(),l=c?.ownerDocument?.defaultView||window,d=(0,r.useCallback)(e=>{const r=e.composedPath(),s=r[0];if(!(0,a.A)(s,Node))return;let c=0,l=1;for(;!(0,a.A)(r[c],Document);){const e=r[c],t=r[l];if(!e||!t)return;if((0,a.A)(t,DocumentFragment)||(0,a.A)(t,Document)){if(!(0,a.A)(e,Node)||!t.contains(e))return;c=l}else if((0,a.A)(e,DocumentFragment)){if(!(0,a.A)(t,Element)||t.shadowRoot!==e)return;c=l}l+=1}(0,i.A)(t).flatMap(e=>(0,a.A)(e,Element)||(0,a.A)(e,Document)||(0,a.A)(e,DocumentFragment)?[e,...(0,o.A)(e)]:[e]).every(e=>e!==s&&!e.contains(s))&&n(e)},[...t,n]);(0,r.useEffect)(()=>{const t=Array.isArray(e)?e:[e];return t.forEach(e=>l?.document?.addEventListener(e,d)),()=>{t.forEach(e=>l?.document?.removeEventListener(e,d))}},[e,d])}},7940:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(9463);const a=()=>{const{direction:e}=(0,o.A)();return(0,r.useMemo)(()=>"ltr"===e?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])}},8579:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(9463);const a=(e,t)=>{const{testIds:n}=(0,o.A)();return(0,r.useMemo)(()=>n?"object"==typeof e&&e?e:t(e):{},[n,e,t])}},8696:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="galaxy",i=()=>(0,r.jsx)("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),s="0 0 25 25"},8889:(e,t,n)=>{n.d(t,{l:()=>s,s:()=>i});var r=n(8151),o=n(9549),a=n(7321);const i=r.Ay.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;i.defaultProps=o.qn;const s=r.Ay.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:n},shadow:{high:o},palette:s},components:{card:{background:c,"foreground-color":l},"form-control":{"border-radius":d}}},portal:u,offset:m})=>{const{backgroundColor:p}=(0,a.LP)(c,l);return r.AH`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${u?n-1:t};
      background: ${p};
      border-radius: calc(${d} * ${e});
      box-shadow: ${o};
      color: ${s["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${i} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${m}px;
          bottom: -${m}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${i} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${m}px;
          top: -${m}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${i} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${m}px;
          left: -${m}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${i} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${m}px;
          right: -${m}px;
          top: 0;
          bottom: 0;
        }
      }
    `});s.defaultProps=o.qn},9036:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="polaris",i=()=>(0,r.jsx)("path",{d:"M12.5.5c-.375 3.75-1.547 6.61-3.563 8.625C6.922 11.095 4.11 12.22.5 12.5c3.422.328 6.14 1.407 8.11 3.235 2.109 2.015 3.42 4.922 3.89 8.766.234-3.797 1.452-6.703 3.656-8.719 1.922-1.828 4.735-2.906 8.344-3.28-3.234-.235-5.86-1.126-7.875-2.72C14.14 7.766 12.78 4.672 12.5.501V.5Zm-.048 4.781c.75 2.11 1.97 3.89 3.61 5.25.983.797 2.25 1.5 3.75 2.016-1.735.61-3.141 1.453-4.313 2.531-1.407 1.266-2.438 2.859-3.094 4.828-.797-2.016-1.828-3.61-3.14-4.828-1.079-1.031-2.438-1.875-4.078-2.531 1.734-.61 3.234-1.5 4.405-2.72 1.22-1.171 2.157-2.718 2.86-4.546ZM20 2.001c-.094.937-.422 1.687-.937 2.202-.516.469-1.172.75-2.062.797.937.094 1.64.422 2.156.937.469.47.75 1.173.843 2.063.047-.891.328-1.594.844-2.11.562-.515 1.265-.797 2.156-.89-.89-.047-1.547-.329-2.062-.798-.563-.468-.891-1.218-.938-2.203V2ZM5 17c-.094 1.077-.469 1.828-1.078 2.296-.469.422-1.125.656-1.922.704.891.094 1.594.374 2.016.797.563.515.89 1.218.984 2.203.047-.938.328-1.641.844-2.11.515-.516 1.218-.797 2.156-.891-1.032-.094-1.781-.422-2.25-.937-.47-.563-.704-1.266-.75-2.063Z"}),s="0 0 25 25"},9061:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(4848),o=n(8151),a=n(3085),i=n(7491);const s=o.Ay.span`
  display: inline-block;
  position: relative;
`,c=()=>{const e=(0,a.A)();return(0,r.jsxs)(s,{children:[(0,r.jsx)("span",{"aria-hidden":!0,children:"––"}),(0,r.jsx)(i.A,{children:e("no_value")})]})}},9463:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=(n(8347),n(4680)),a=n(9115);const i=()=>{const e=o.A?window.cosmos.configurationContext??a.Q:a.Q;return(0,r.useContext)(e)}},9466:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(4848),o=n(1594),a=n(5206),i=n(1357),s=n(7521),c=n(3085),l=n(9463),d=n(2884),u=n(3456),m=n(4853),p=n(7501),h=n(405);const f=(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:n=100,message:o,placement:a,style:i,...s},c){let l=e;return"number"==typeof e&&(l=e>n||t>n?0:e<t?100:-100*(1-(e-t)/(n-t))),(0,r.jsx)(h.QS,{ref:c,role:"progressbar","aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":e,placement:a,determinate:"number"==typeof e,style:{...i,"--progress":l?`${l}%`:""},...s})}),b=(0,o.forwardRef)(function({message:e,placement:t,...n},o){return(0,r.jsx)(h.wE,{ref:o,role:"progressbar",placement:t,...n,children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})})}),g={ring:(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:n=100,placement:o,...a},i){let s;const c=18*Math.PI;return s="number"!=typeof e?(1-.33)*c:e>n||t>n?0:e<t?c:(1-(e-t)/(n-t))*c,(0,r.jsx)(h.pT,{ref:i,role:"progressbar","aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":e,placement:o,determinate:"number"==typeof e,...a,children:(0,r.jsxs)("svg",{viewBox:"0 0 20 20",children:[(0,r.jsx)("circle",{}),(0,r.jsx)("circle",{strokeDasharray:c,style:{strokeDashoffset:s}})]})})}),bar:f,ellipsis:b},A=(0,o.forwardRef)(function({variant:e="ring",placement:t="global",visible:n=!0,focusOnVisible:f=!1,delay:b=!1,onTransitionStartIn:A,onTransitionEndIn:v,onTransitionStartOut:y,onTransitionEndOut:$,value:x,message:w,liveConfig:k,...j},E){const H=(0,c.A)(),{portalTarget:I}=(0,l.A)(),{announcePolite:C}=(0,d.A)(),S=(0,u.A)(),R=(0,m.A)(E),[L,M]=(0,o.useState)(!b&&n),[D,z]=(0,o.useState)(!L),P=(0,o.useRef)(),T=(0,o.useRef)(),q=(0,o.useRef)(),_=(0,o.useRef)(),F="global"===t||"local"===t,B="number"==typeof x?`${x}%`:void 0,O=w&&B?`${w} - ${B}`:w||B,Z=()=>{M(!0),z(!1)},V=()=>{M(!1),F||z(!0)};if((0,o.useEffect)(()=>{if(n)P.current=Date.now(),b?q.current=window.setTimeout(Z,100):Z();else if(void 0!==q.current)if(clearTimeout(q.current),void 0!==T.current){const e=Date.now()-T.current;e>=1e3?V():_.current=window.setTimeout(V,1e3-e)}else V();else V()},[n]),(0,o.useEffect)(()=>{k?.contextualLabel&&L&&C({message:`${k.contextualLabel}, ${O??H("loading")}`,type:"status"})},[L]),(0,o.useEffect)(()=>{!D&&L&&(T.current=Date.now(),f&&R.current?.focus())},[D]),D)return null;const N=g[e];let U=(0,r.jsx)(N,{"aria-label":"number"!=typeof x&&O?O:H("loading"),as:"inline"===t?"span":void 0,...j,placement:t,value:x,"aria-valuetext":"number"==typeof x?O:void 0,ref:R,tabIndex:-1});"inline"!==t&&(U=(0,r.jsxs)(p.A,{container:{direction:"column",alignItems:"center",gap:.5},as:h.r3,placement:t,children:[U,w&&(0,r.jsx)(s.A,{as:h.z5,variant:"secondary","aria-hidden":!0,children:w})]}));const W=(0,i.J1)(S.base.palette["foreground-color"])>.5?"dark":"light",K=F?(0,r.jsx)(h.D2,{open:L,container:{direction:"column"},position:"global"===t?"fixed":"absolute",variant:W,alpha:.8,onBeforeTransitionIn:A,onAfterTransitionIn:v,onBeforeTransitionOut:y,onAfterTransitionOut:()=>{z(!0),$?.()},children:U}):U;return"global"===t&&I?(0,a.createPortal)(K,I):K})},9721:(e,t,n)=>{n.d(t,{ox:()=>p,oF:()=>h,J0:()=>b,Af:()=>f,Ik:()=>m,Ay:()=>y});var r=n(4848),o=n(1594),a=n(8151),i=n(6883),s=n(9549),c=n(405),l=n(8579),d=n(4869);const u=(0,n(8044).A)("summary-item",["primary","secondary","visual","actions"]),m=a.Ay.div`
  > ${c.pT}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;m.defaultProps=s.qn;const p=(0,a.Ay)(i.A)(({theme:e,isString:t,overflowStrategy:n})=>a.AH`
    ${"ellipsis"===n?a.AH`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}

    ${t&&a.AH`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);p.defaultProps=s.qn;const h=(0,a.Ay)(i.A)(({overflowStrategy:e})=>a.AH`
    ${"ellipsis"===e?a.AH`
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}
  `),f=a.Ay.div`
  white-space: nowrap;
`,b=a.Ay.div``,g=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,A=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&"inline"===t?" secondary":""}${r?" actions":""}"${e&&"stacked"===t?`\n"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,v=(0,o.forwardRef)(function({testId:e,visual:t,primary:n,secondary:o,layout:a="stacked",actions:s,container:c,overflowStrategy:d="wrap",as:v,...y},$){const x=(0,l.A)(e,u);return(0,r.jsxs)(i.A,{"data-testid":x.root,...y,ref:$,container:{cols:g({visual:t,actions:s}),colGap:2,areas:A({secondary:o,layout:a,visual:t,actions:s}),...c},as:b,forwardedAs:v,children:[t&&(0,r.jsx)(i.A,{"data-testid":x.visual,as:m,item:{area:"visual",alignSelf:"center"},children:t}),(0,r.jsx)(p,{"data-testid":x.primary,item:{area:"primary",alignSelf:o&&"stacked"===a?"end":"center"},isString:"string"==typeof n,overflowStrategy:d,children:n}),o&&(0,r.jsx)(h,{"data-testid":x.secondary,item:{area:"secondary",alignSelf:"stacked"===a?"start":"center"},overflowStrategy:d,children:o}),s&&(0,r.jsx)(i.A,{"data-testid":x.actions,as:f,item:{area:"actions",alignSelf:"center"},children:s})]})}),y=(0,d.A)(v,u)}}]);
//# sourceMappingURL=MC3100_7711905.88ae3b4f.js.map