import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f8f8f8;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  a,
a:hover,
a:focus {
  text-decoration: none;
  transition: all 0.3s;
}
p {
    margin-top: 0;
    margin-bottom:0;
}
ul{margin: 0; padding: 0;}

.table td, .table th{position: relative; vertical-align: middle;}
.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
  background: #006e81;
}
.navbar-btn i{
    font-size: 34px;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}
.head_flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sidebar-icon{margin-right:50px;}

.main-menubar .navbar{
    padding: 0;
}
.bar-btn .navbar{
    padding: 0;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color:#414141;
}
.main-menubar .navbar-light .navbar-nav .nav-link{
    color: #414141;
    font-size: 18px;
    line-height: 30px;
    margin: 0 20px;
    font-family: 'Conv_Barlow-Regular';
    padding-right: 0;
    padding-left:25px;
    position: relative;
}
.main-menubar .navbar-light .navbar-nav .nav-link:before
{
    background-image: url(../image/cola.png);
    height: 22px;
    width: 25px;
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    left: 0px;
    top: 12px;
}
.dark_green{background-color: #006e81!important; color: #fff!important;}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(2) a:before{
    background-position:-43px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(3) a:before{
    background-position:-83px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(4) a:before{
    background-position:-126px 0px;
}


.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(5) a:before{
    background-position:-160px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(6) a:before{
    background-position:-198px 0px;
}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(7) a:before{
    background-position:-234px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(8) a:before{
    background-position:-269px 0px;
}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(9) a:before{
    content:none;
}
.main-menubar .navbar-light .navbar-nav .nav-link:hover{color: #006e81;}
.main-menubar .navbar-light .navbar-nav .nav-link:hover:before
{
    background-image: url(../image/cola_hover.png);
    height: 22px;
    width: 25px;
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    left: 0px;
    top: 12px;
}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(2) a:before{
    background-position:-43px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(3) a:before{
    background-position:-83px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(4) a:before{
    background-position:-126px 0px;
}


.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(5) a:before{
    background-position:-160px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(6) a:before{
    background-position:-198px 0px;
}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(7) a:before{
    background-position:-234px 0px;
}

.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(8) a:before{
    background-position:-269px 0px;
}
.main-menubar .navbar-light .navbar-nav .nav-item:nth-child(9) a:before{
    content:none;
}
.navbar-nav{flex-wrap: wrap;}

.test{
    padding:13px 24px!important;
    background: #006e81;
    border-radius: 6px;
    color: #fff!important;
}
.shdow_box{
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius:10px;
    box-shadow: 0px 0px 80px rgba(0,0,0,0.1);
}
.divided-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.divided-box .child_one{
    display: flex;
    flex-flow: column;
    padding:  15px;
    border-left: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    width: 11%;
    position: relative;
    
}
.left-radius{    border-bottom-left-radius: 10px;}
.divided-box .child_one:first-child{
    border-left: none;
}
.divided-box .child_one span{
    font-weight: 600;
    font-family: 'Conv_Barlow-Light';
    font-size: 13px;
    text-transform: uppercase;
}
.divided-box .child_one:nth-of-type(1) {flex-grow: 2;}
.divided-box .child_one:nth-of-type(2) {flex-grow: 2;}
.divided-box .child_one:nth-of-type(3) {flex-grow: 2;}
.divided-box .child_one:nth-of-type(4) {flex-grow: 2;}
.divided-box .child_one:nth-of-type(5) {flex-grow: 2;}
.divided-box .child_one:nth-of-type(6) {flex-grow: 30;}
.divided-box .child_one select{
    -webkit-appearance: none;
    margin-top:20px;
    border: 1px solid #b7b7b7!important;
    border-radius: 3px;
    text-transform: capitalize;
    color: #c7c7c7;
    font-family: 'Conv_Barlow-Light';
    padding: 10px 20px 10px 12px;
}
.selec:after {
    content: '\f107';
    font: normal normal normal 17px/1 FontAwesome;
    color: #787878;
    right: 12%;
    height: 34px;
    padding: 10px 1px 0px 8px;
    position: absolute;
    top:50%;
    pointer-events: none;
}
.acnt_arrow:after{
    right: 30px!important;
    position: relative;
}
.acnt_arrow select {
    padding-right: 35px!important;
}
.filter_box{
    display: flex;
    justify-content: space-between;
}
.filter_box div:first-child{
    display: flex;
    flex-flow: column;
}
.flter i{
    font-size: 38px;
    color: #006e81;
    background: #dde8ea;
    padding: 5px 8px;
    border-radius: 3px;
}
.last-selt{
    width: fit-content;
}
.bottom_none .child_one{ border-bottom: none!important;}
.save-row{
    display: flex;
}
.save-row ul{
    position: absolute;
    bottom: 0px;
    padding: 0;
    display: flex;
    align-items:center;
    flex-wrap: wrap; 
}
.save-row ul li{
    display: inline-block;
    margin: 0 8px;
}
.save-row ul li p{
    font-weight: 600;
    font-family: 'Conv_Barlow-Light';
    font-size: 13px;
    text-transform: uppercase;
}
.save-row ul li a{
    font-weight: 600;
    background: #dde8ea;
    border-radius: 4px;
    padding: 5px 8px;
    color: #006e81;
    font-family: 'Conv_Barlow-Light';
    font-size: 20px;
    text-transform: uppercase;
}
.save-row ul li a:hover{
    background: #006e81;
    color:#fff ;
}
.tbl_op{
    background: #f3f5f5;
    border-radius: 4px;
    box-shadow: 0px 0px 80px rgba(0,0,0,0.1);
    overflow-x: scroll;
}
.tbl_op thead th{
    font-weight: 600;
    font-family: 'Conv_Barlow-Light';
    font-size: 15px;
    text-transform: uppercase;
    color: #000;
    white-space: nowrap;
}
.tbl_op .table td, .table th{border-top: none; border-bottom: none!important; border-left: 1px solid #e9e9e9; text-align: center; position: relative;     white-space: nowrap;}
.tbl_op tbody tr{ font-weight: 600;
    font-family: 'Conv_Barlow-Light';
    font-size: 15px;
    text-transform: uppercase;
    color: #000;
}
.hide_panel {
   display: flex;
   justify-content: space-between;
   padding: 30px 20px;
   align-items: center;
}
.hide_panel p{
    font-family: 'Conv_Barlow-Light';
    font-weight:600;
    color: #2b2b2b;
}
.hide_panel a{
    font-family: 'Conv_Barlow-Regular';
    background: #006e81;
    color: #fff;
    padding: 15px 19px;
    border-radius: 6px;
}
.gevrate{
    font-size: 14px!important;
    padding:8px 8px!important;
}

/* table color pallete */
.grey{background: #dde8ea;}
.light_blue{background: #f3f5f5;}
.viloet_light{background: #e0e0eb;}
.light_pink{background: #f9f1f1;}
.yellow{background: #fdb72c;}
.green{background: #4cd964;}
.red{background:#ff2d55;}
.silver{background: #e8e8e8;}

.circle{
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    left: 15px;
    border-radius: 50%;
    top: 38%;
    margin-right: 5px;
}
.tbl_op tr .info-tag {
    position: absolute;
    right: 5%;
    content: "/64-f"

}
.margin_cap{
    margin: 0 -8px;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 334px;
  max-width: 334px;
  background: #132f51;
  color: #fff;
  transition: all 0.3s;
  position: relative;
}

#sidebar a,
#sidebar a:hover,
#sidebar a:focus {
  color: inherit;
}

#sidebar.active {
  margin-left: -334px;
}

#sidebar .sidebar-header {
  padding: 20px;
}

#sidebar ul.components {
  padding: 20px 0;
}
.components li{position: relative;}
.components li a:after {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #00b9bf;
    border-radius: 50%;
    display: block;
    top: 41%;
    content: "";
    left: 5%;
}
.components li ul li a:after {
    content: none;
}
#sidebar li ul li:hover {
    border-right: 7px solid #f4892e;
}
#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
    padding: 18px 40px;
  font-size: 20px;
  display: block;
  color: #00b9bf;
  font-family: 'Conv_Barlow-Regular';
  text-transform: uppercase;
}

#sidebar ul li a:hover {
  color: #fff;
  background: #006e81;
}

/* #sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
} */

a[data-toggle="collapse"] {
  position: relative;
}

#sidebar a[aria-expanded="false"]::before,
#sidebar a[aria-expanded="true"]::before {
  content: '\f078';
  display: block;
  position: absolute;
  right: 20px;
  font-family: fontAwesome;
  font-size: 0.6em;
}

#sidebar a[aria-expanded="true"]::before {
  content: '\f077';
}

ul ul a {
  font-size: 18px!important;
  padding-left: 55px !important;
  
}
.sub-inner li a {
    color: #fff!important;
    font-family: 'Conv_Barlow-Regular';
}
.sub-inner li a::before{
    background: url(../image/left-chevron.png) no-repeat;
    content: "";
    display: block;
    position: absolute;
    height: 15px;
    width: 10px;
    left: 10%;
    top: 25px;
}
ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386D5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}


/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  min-height: 100vh;
  width: 100%;
  transition: all 0.3s;
}

#content p a {
 
}
.right-header{
    padding:15px 20px;
    border-bottom: 1px solid #ebebeb;
}

.filter_box span{
    text-transform: uppercase; 
    white-space: nowrap; 
    font-family: 'Conv_Barlow-Light'; 
    font-weight: 600; 
    font-size: 13px;
}

.drop-caert img{
    margin-left: 17px;
    position: absolute;
    top: -2px;
}
.ifo-btn{
    position: absolute;
    right: 12px;
}
.round-2{border-top-right-radius: 9px;}
.round-1{border-top-left-radius: 9px;}
.tbl_op .table tr td:nth-of-type(1){ padding-left: 58px;padding-right: 40px;}
.close_btn{position: absolute; right:5%; font-size: 36px; display: none;}
.button_lt_rt{display: flex;align-items: center;justify-content: flex-end;}
.button_lt_rt ul{display: flex; padding: 0; margin: 0;}
.button_lt_rt ul li{list-style-type: none; margin-left:10px;  padding: 30px 0;}
.minmize li i{font-size: 24px;     border-radius: 6px; color: #006e81; background: #e5f0f2; padding: 13px 15px; }
.lt-rt li i{font-size: 24px;     border-radius: 6px; color: #006e81; background: #e5f0f2; padding: 13px 15px;}
.button_lt_rt ul li i:hover{color:#fff; background: #006e81;}
.conslated{margin: 0 0 30px 0;}
.table-box{box-shadow: 0px 0px 80px rgba(0,0,0,0.1); overflow-x: auto; border-radius: 15px; position: relative;    padding: 15px 10px 0px 10px;}
.table-box .table{min-width: 462px;}
.table-box thead tr th{font-family: 'Conv_Barlow-Light'; padding: 0px 6px 18px 6px; font-size: 15px; border-left: none; color:#fff;  border-left: 1px solid #e9e9e9;  text-transform: uppercase; }
.table-box thead tr th:first-child{border-left: none;}
.table-box thead tr th div{background:#006e81; padding:10px 0;}
.table-box tbody tr td{position: relative; color: #848484;    padding-right: 20px; border-top: none; border-left: 1px solid #e9e9e9;}
.table-box .table td, .table th{padding: 22px 18px 22px 10px;}
.table-box tbody tr td span:first-child{float: left;}
.table-box tbody tr td span:last-child{float: right;}
.table-box tbody tr{border-top: 1px solid #e9e9e9;}
.add_button_btn{position: absolute; right: 10px; bottom: 6px;}
.table-box tbody tr th{font-family: 'Conv_Barlow-Light'; font-size: 14px;  border-left: none; color: #000;}
.table-box .circle{left: initial; right: 0; top: 42%;}
.add_button_btn img{margin-left: 5px;}
.padding_0{padding-top: 0; padding-bottom: 0;}
.padding_4{padding: 0;}
.table_13 .divided-box .child_one:nth-of-type(1) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(2) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(3) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(4) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(5) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(6) {flex-grow: 0;}
.table_13 .divided-box .child_one:nth-of-type(7){border-left: none; flex-grow: 40;}
.deflter{display: flex;justify-content: space-between;}
.key-one{top:30%;     left: 0;}
.key-two{position: absolute; top: -28%; right: 0;}
.mar-30{margin: 30px 0;}
.busness_box{display: flex; justify-content: space-between; padding: 15px 18px;}
.details p{font-weight: 600;}
.details span{font-size: 15px; font-family: 'Conv_Barlow-Regular';}
.indico{margin-left: 10px;     background: rgba(0,0,0,0.1); border-radius: 5px; padding: 8px 9px; }
.last-table{overflow-x: auto;}
.last-table .table{margin-bottom: 0; min-width: 1539px; }
.last-table thead th{font-family: 'Conv_Barlow-Light'; font-size: 16px; text-transform: uppercase; vertical-align: middle;}
.last-table .table tbody td{padding-right: 18px; padding-left: 25px; border-left: 1px solid #e9e9e9;     text-align: center;}
.td_data{display: flex; justify-content: space-between;    align-items: center;}
.td_data .circle{left:initial; right: 28%; top: 42%;}
.zoom-btn img{background: #c5dbdf;padding: 9px; font-size: 20px;border-radius: 4px;margin-left: 15px;}
/* color pallte for fonts */
.white{color: #fff;}
.blue{color: #006e81;}
.black{color: #000;}
.yellow_tb{background:#f1c100;}
.last-table .table td, .table th{padding: 12px 18px 12px 10px;}
.mn_bt{display:flex; justify-content: center; align-items: center;}
.last-table .table tbody td,th{font-family: 'Conv_Barlow-Light'; color: #848484;}
.details_masg i{font-size: 22px; color: #006e81; background: #dde8ea; padding: 12px; border-radius: 6px;}
.last-table tbody th{    border-top: 1px solid #c6c6c6!important;}
.radius-22{border-radius: 22px;}
.n_one{display: flex;justify-content: space-between;}
.n_one .child-one ul li{list-style-type:none; display: inline-block; margin: 0 7px;  }
.n_one .child-one ul li:first-child{margin-left: 0;}
.n_one .child-one ul li a{color:#006e81; font-size: 13px; font-family: 'Conv_Barlow-Light'; background: #e4eff1; padding: 15px 17px; border-radius: 6px;}
.n_one  .child-two{display: flex; flex-flow: column;     align-items: flex-end;}
.n_one  .child-two span:first-child{line-height: 25px;  font-family: 'Conv_Barlow-Regular'; color:#000; font-weight: 600; font-size: 15px;}
.n_one  .child-two span a:last-child{font-family: 'Conv_Barlow-Regular'; color:#006e81; font-size: 15px; font-weight: 600;    text-decoration: underline;}
.accor_box{margin: 15px 0;}
.last-table {
    width: 100%;
    overflow-x: scroll;
}
/*******************************
* Does not work properly if "in" is added after "collapse".
* Get free snippets on bootpen.com
*******************************/
.panel-group .panel {
    border-radius: 0;
    box-shadow: none;
    border-color: #EEEEEE;
}

.panel-default > .panel-heading {
    padding: 0;
    border-radius: 0;
    color: #212121;
    background-color: #fff;
    box-shadow: 0px 0px 80px rgba(0,0,0,0.1);
    border-radius: 7px;
}

.panel-title {
    font-size: 14px;
}
.panel-title .circle{
    top:42%;
}

.panel-title > a {
    display: block;
    padding: 23px 30px;
    text-decoration: none;
    font-family: 'Conv_Barlow-Light';
    color: #000;
    font-size: 13px;
    font-weight: 600;

}

.more-less {
    float: right;
    color: #212121;
}

.panel-default > .panel-heading + .panel-collapse > .panel-body {
    background: #fff;
    margin: 20px 0;
    box-shadow: 0px 0px 80px rgba(0,0,0,0.1);
}

/** Generated by FG **/
@font-face {
  font-family: 'Conv_Barlow-Regular';
  src: url('../fonts/Barlow-Regular.eot');
  src: local('☺'), url('../fonts/Barlow-Regular.woff') format('woff'), url('../fonts/Barlow-Regular.ttf') format('truetype'), url('../fonts/Barlow-Regular.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Conv_Barlow-Light';
  src: url('../fonts/Barlow-Light.eot');
  src: local('☺'), url('../fonts/Barlow-Light.woff') format('woff'), url('../fonts/Barlow-Light.ttf') format('truetype'), url('../fonts/Barlow-Light.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Conv_barth';
  src: url('../fonts/barth.eot');
  src: local('☺'), url('../fonts/barth.woff') format('woff'), url('../fonts/barth.ttf') format('truetype'), url('../fonts/barth.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}






.accor_box a[aria-expanded="false"]::before,
.accor_box a[aria-expanded="true"]::before {
  content: url(../image/plus.png);
  display: block;
  position: absolute;
  right: 20px;
  font-family: fontAwesome;
  font-size: 14px;
  color:#006e81;
  background: #c5dbdf;
  padding: 11px 13px;
  border-radius: 6px;
  top: 20%;
}

.accor_box a[aria-expanded="true"]::before {
  content: url(../image/minus.png);
}

/* ----- v CAN BE DELETED v ----- */
/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media(min-width:1200px) and (max-width: 1500px) {
    #sidebar {    position: fixed;z-index: 9;margin-left:-335px;}
    #sidebar.active {    position: fixed;z-index: 9;margin-left:0px;}
    .close_btn{display: block;}
    nav#sidebar {height: 100vh;}
  }
  

  
  @media(min-width:992px) and (max-width: 1199px) {
  
      .divided-box .child_one{width:18%; border-left: none;}
      .save-row{margin-top: 35px;}
      #sidebar {    position: fixed;z-index: 9;margin-left:-335px;}
      #sidebar.active {    position: fixed;z-index: 9;margin-left:0px;}
      nav#sidebar {height: 100vh;}
  }


  @media(min-width:768px) and (max-width: 992px) {
    #sidebar ul li a {padding: 14px 40px;}
      .divided-box .child_one{width:22%; border-left: none;}
      .save-row{margin-top: 35px;}
      #sidebar {    position: fixed;z-index: 9;margin-left:-335px;}
      #sidebar.active {    position: fixed;z-index: 9;margin-left:0px;}
      .close_btn{display: block;}
      nav#sidebar {height: 100vh;}
      
  }


@media (max-width: 767px) {
    #sidebar ul li a {padding: 14px 40px;}
    #sidebar {position: fixed;z-index: 9;margin-left:-335px;}
    #sidebar.active {    position: fixed;z-index: 9;margin-left:0px;}
    nav#sidebar {height: 100vh;}
    .close_btn{display: block;}
    #sidebarCollapse span {display: block; }
    .divided-box .child_one{width:100%;}
    .save-row {margin-top: 30px;}
    .divided-box .child_one select{margin-top: 5px;}
    .selec:after {padding: 3px 0px 0px 8px;   right: 6%;}
    .divided-box .child_one{ border-left: none;}
    .bottom_none .child_one { border-bottom: 1px solid #e9e9e9!important;}
    .bottom_none .child_one:last-child {border-bottom: none!important;}
    .filter_box{flex-flow: column;}
    .acnt_arrow select {width: 100%;}
    .acnt_arrow:after {right: 6%!important; top: 34%; position: absolute;}
    .flter i{margin-top: 5px;}
    nav.navbar.navbar-expand-lg.navbar-light {position: static;}
    #navbarNavDropdown{position: absolute;left: 0px;right: 0px;width: 100%;top: 70px;z-index: 999;background: rgb(255, 255, 255); padding:0 0 20px 0; border-bottom: 1px solid #ebebeb; border-top: 1px solid #ebebeb;}
    .table-box .table {width: 100%;}
    .table-box{margin:5px 0;}
  }
  @media (max-width: 575px) {
    .n_one{flex-flow: column;justify-content: center; text-align: center; }
    .n_one .child-two{align-items: center; margin: 15px 0;}
  }
  @media (max-width: 479px) {
    #sidebar ul li a {padding: 14px 40px;}
    #sidebar {margin-left: -334px;}
    #sidebar.active {margin-left: 0;}
    #sidebarCollapse span {display: block; }
    .divided-box .child_one{width:100%;}
    .save-row {margin-top: 30px;}
    .divided-box .child_one select{margin-top: 5px;}
    .selec:after {padding: 3px 0px 0px 8px;   right: 10%;}
    .divided-box .child_one{ border-left: none;}
    .bottom_none .child_one { border-bottom: 1px solid #e9e9e9!important;}
    .bottom_none .child_one:last-child {border-bottom: none!important;}
    .shdow_box{padding: 0px;}
    .hide_panel{  padding: 30px 0px;  flex-flow: column;}
    .hide_panel a{width: 100%; text-align: center; padding: 8px 19px; margin-top: 8px;}
    .save-row ul li { margin: 8px 8px;}
    #sidebar.active{height: 100vh; overflow-y: scroll;}
    .minmize li i{font-size: 16px; }
    .lt-rt li i{font-size: 16px;}
    .table-box .table {width: 462px;}
    .panel-title > a{font-size: 9px;}
    .accor_box a[aria-expanded="false"]::before,
    .accor_box a[aria-expanded="true"]::before {
         right: 6px;}
  }
  @media (max-width: 375px) {
    .save-row {margin-top: 90px;}
    #sidebar ul li a {padding: 14px 40px;}
  }
`;

export default GlobalStyle;
