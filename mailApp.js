const appSidebarButtonTemplate = document.createElement('template');
appSidebarButtonTemplate.innerHTML = `
<style>
*{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
} 
body{
   padding: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   font-family: Georgia, 'Times New Roman', Times, serif;
   max-width: 600px;
}
h1{
   margin-left: 40px;
   margin-bottom: 2rem;
   margin-top: -2rem;
   display: flex;
   justify-content: left;
}
.button_menu{
   display: flex;
   justify-content: left; 
}
.hovertext {
   position: relative;
}
.hovertext:before {
   content: attr(data-hover);
   visibility: hidden;
   opacity: 0;
   width: 140px;
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 5px;
   padding: 5px 0;
   transition: opacity ease-in-out;
   position: absolute;
   z-index: 1;
   left: 0;
   top: 110%;
   font-weight: bold;
}
.hovertext:hover:before {
   opacity: 1;
   visibility: visible;
}
.button_compose{
   background-color: #C2E7FF;
   font-weight: bold;
   display: flex;
   justify-content: left;
   margin: 10px 0 50px;
   border: 1px white #c0c0c0;
   border-radius: 10px;
   padding: 15px;
}
.hovertext_compose {
   position: relative;
}
.hovertext_compose:before {
   content: attr(data-hover);
   visibility: hidden;
   opacity: 0;
   width: 140px;
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 5px;
   padding: 5px 0;
   transition: opacity ease-in-out;
   position: absolute;
   z-index: 1;
   left: 0;
   top: 110%;
}
.hovertext_compose:hover:before {
   opacity: 1;
   visibility: visible;
}
.button_inbox{
   background-color: #C6D8FF;
   font-weight: bold;
   display: flex;
   justify-content: flex-start;
   margin: 5px 0 5px;
   border-radius: 0 35px 30px 5px;
}
.button_starred, .button_snoozed, .button_sent{
   display: flex;
   justify-content: flex-start;
}
.button_drafts{
   font-weight: bold;
   display: flex;
   justify-content: flex-start; 
}
.hovertext_drafts {
   position: relative;
}
.hovertext_drafts:before {
   content: attr(data-hover);
   visibility: hidden;
   opacity: 0;
   width: 140px;
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 5px;
   padding: 5px 0;
   transition: opacity ease-in-out;
   position: absolute;
   z-index: 1;
   left: 0;
   top: 110%;
}
.hovertext_drafts:hover:before {
   opacity: 1;
   visibility: visible;
}
.sidebar__button:hover, .button_menu:hover{
   cursor: pointer;
   opacity: 0.8;
   color: #555555;
}
.sidebar__button {
   width: 150px;
}
</style>
</head>
<body>
<div class="button"
    ><app-sidebar-button class="button button_menu sidebar__button" text="Menu"
    ><span class="hovertext" data-hover="This is the hamburger sidebar menu" slot="icon"
    >☰</span></app-sidebar-button
    ><h1><slot slot="icon">📬</slot>Mail App</h1
        ><app-sidebar-button class="button button_compose sidebar__button"
        ><span class="hovertext_compose" data-hover="Compose the new message" 
        text="Compose" slot="icon">𓂃🖊 Compose</span></app-sidebar-button
        ><apsidebar-button class="button button_inbox sidebar__button" text="Inbox"
        ><slot slot="icon">📥</slot>Inbox</app-sidebar-button
        ><app-sidebar-button class="button button_starred sidebar__button" text="Starred"
        ><slot slot="icon">⭐️</slot>Starred</app-sidebar-button>
        <app-sidebar-button class="button button_snoozed sidebar__button" text="Snoozed"
        ><slot slot="icon">⏱</slot>Snoozed</app-sidebar-button>
        <app-sidebar-button class="button button_sent sidebar__button" text="Sent"
        ><slot slot="icon">➡️</slot>Sent</app-sidebar-button>
        <app-sidebar-button class="button button_drafts sidebar__button"
        text="Drafts"><span id="unreadId" unreadCount="1" class="hovertext_drafts" 
        data-hover="See the draft's" slot="icon"
        >📄Drafts</span></app-sidebar-button>
</div>
`
class AppSidebarButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
      };
      connectedCallback() {
          console.log(1);
          this.shadowRoot.append(appSidebarButtonTemplate.content.cloneNode(true));
      };
      disconnectedCallback(){
          console.log(2)
      };
};

window.customElements.define('app-sidebar-button', AppSidebarButton);
console.log(3);

