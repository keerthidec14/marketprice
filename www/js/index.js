  document.addEventListener('deviceready', onDeviceReady, false);


  var item1="0";
var item2="0";
var item3="0";
var item4="0";
var item5="0";
var item6="0";
var item7="0";
var item8="0";
var item9="0";
var item10="0";
var item11="0";
var item12="0";
var item13="0";
var item14="0";
var item15="0";
var item16="0";
var item17="0";
var item18="0";
var item19="0";
var item20="0";
var item21="0";
var item22="0";
var item23="0";
var item24="0";
var item25="0";
var item26="0";
var item27="0";
var item28="0";
var item29="0";
var item30="0";
var item31="0";
var item32="0";
var item33="0";
var item34="0";
var item35="0";
var item36="0";
var item37="0";
var item38="0";
var item39="0";
var item40="0";
var item41="0";
var item42="0";
var item43="0";
var item44="0";
var item45="0";
var item46="0";
var item47="0";
var item48="0";
var item49="0";
var item50="0";
var item51="0";
var item52="0";
var item53="0";
var item54="0";
var item55="0";
var item56="0";
var item57="0";
var item58="0";
var item59="0";
var item60="0";
var item61="0";
var item62="0";
var item63="0";
var item64="0";
var item65="0";
var item66="0";
var item67="0";
var item68="0";
var item69="0";
var item70="0";
var item71="0";
var item72="0";
var item73="0";
var item74="0";
var item75="0";
var item76="0";
var item77="0";
var item78="0";
var item79="0";
var item80="0";
var item81="0";
var item82="0";
var item83="0";
var item84="0";
var item85="0";
var item86="0";
var item87="0";
var item88="0";
var item89="0";
var item90="0";
var item91="0";
var item92="0";
var item93="0";
var item94="0";
var item95="0";
var item96="0";
var item97="0";
var item98="0";
var item99="0";
var item100="0";
var item101="0";
var item102="0";
var item103="0";
var item104="0";
var item105="0";
var item106="0";
var item107="0";
var item108="0";
var item109="0";
var item110="0";
var item111="0";
var item112="0";
var item113="0";
var item114="0";
var item115="0";
var item116="0";
var item117="0";
var item118="0";
var item119="0";
var item120="0";
var item121="0";
var item122="0";
var item123="0";

var test="fail";



  function onDeviceReady() {
      console.log("Device Ready");

      $(document).ready(function() {

          ajaxCall();

          setTimeout(ajaxCall();, 5000);


          $("#refresh").click(function(){
              ajaxCall();
          });
      });

  }



  function ajaxCall()
  {
    $.ajax({
       url:"http://vvcecs.in/marketprice/index.php",
       dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
       success:function(json){
         // do stuff with json (in this case an array)
          test=json[0];
          if(test=="pass")
          {
          item1=json[1];
          item2=json[2];
          item3=json[3];
          item4=json[4];
          item5=json[5];
          item6=json[6];
          item7=json[7];
          item8=json[8];
          item9=json[9];
          item10=json[10];
          item11=json[11];
          item12=json[12];
          item13=json[13];
          item14=json[14];
          item15=json[15];
          item16=json[16];
          item17=json[17];
          item18=json[18];
          item19=json[19];
          item20=json[20];
          item21=json[21];
          item22=json[22];
          item23=json[23];
          item24=json[24];
          item25=json[25];
          item26=json[26];
          item27=json[27];
          item28=json[28];
          item29=json[29];
          item30=json[30];
          item31=json[31];
          item32=json[32];
          item33=json[33];
          item34=json[34];
          item35=json[35];
          item36=json[36];
          item37=json[37];
          item38=json[38];
          item39=json[39];
          item40=json[40];
          item41=json[41];
          item42=json[42];
          item43=json[43];
          item44=json[44];
          item45=json[45];
          item46=json[46];
          item47=json[47];
          item48=json[48];
          item49=json[49];
          item50=json[50];
          item51=json[51];
          item52=json[52];
          item53=json[53];
          item54=json[54];
          item55=json[55];
          item56=json[56];
          item57=json[57];
          item58=json[58];
          item59=json[59];
          item60=json[60];
          item61=json[61];
          item62=json[62];
          item63=json[63];
          item64=json[64];
          item65=json[65];
          item66=json[66];
          item67=json[67];
          item68=json[68];
          item69=json[69];
          item70=json[70];
          item71=json[71];
          item72=json[72];
          item73=json[73];
          item74=json[74];
          item75=json[75];
          item76=json[76];
          item77=json[77];
          item78=json[78];
          item79=json[79];
          item80=json[80];
          item81=json[81];
          item82=json[82];
          item83=json[83];
          item84=json[84];
          item85=json[85];
          item86=json[86];
          item87=json[87];
          item88=json[88];
          item89=json[89];
          item90=json[90];
          item91=json[91];
          item92=json[92];
          item93=json[93];
          item94=json[94];
          item95=json[95];
          item96=json[96];
          item97=json[97];
          item98=json[98];
          item99=json[99];
          item100=json[100];
          item101=json[101];
          item102=json[102];
          item103=json[103];
          item104=json[104];
          item105=json[105];
          item106=json[106];
          item107=json[107];
          item108=json[108];
          item109=json[109];
          item110=json[110];
          item111=json[111];
          item112=json[112];
          item113=json[113];
          item114=json[114];
          item115=json[115];
          item116=json[116];
          item117=json[117];
          item118=json[118];
          item119=json[119];
          item120=json[120];
          item121=json[121];
          item122=json[122];
          item123=json[123];

          saveData();
        }

       },
       error:function(){
            console.log("error");
            test="fail";

            getData();

       }
    });

    showData();
  }



  function saveData()
  {
    //alert("save data");
      localStorage.setItem('item1', item1);
      localStorage.setItem('item2', item2);
      localStorage.setItem('item3', item3);
      localStorage.setItem('item4', item4);
      localStorage.setItem('item5', item5);
      localStorage.setItem('item6', item6);
      localStorage.setItem('item7', item7);
      localStorage.setItem('item8', item8);
      localStorage.setItem('item9', item9);
      localStorage.setItem('item10', item10);
      localStorage.setItem('item11', item11);
      localStorage.setItem('item12', item12);
      localStorage.setItem('item13', item13);
      localStorage.setItem('item14', item14);
      localStorage.setItem('item15', item15);
      localStorage.setItem('item16', item16);
      localStorage.setItem('item17', item17);
      localStorage.setItem('item18', item18);
      localStorage.setItem('item19', item19);
      localStorage.setItem('item20', item20);
      localStorage.setItem('item21', item21);
      localStorage.setItem('item22', item22);
      localStorage.setItem('item23', item23);
      localStorage.setItem('item24', item24);
      localStorage.setItem('item25', item25);
      localStorage.setItem('item26', item26);
      localStorage.setItem('item27', item27);
      localStorage.setItem('item28', item28);
      localStorage.setItem('item29', item29);
      localStorage.setItem('item30', item30);
      localStorage.setItem('item31', item31);
      localStorage.setItem('item32', item32);
      localStorage.setItem('item33', item33);
      localStorage.setItem('item34', item34);
      localStorage.setItem('item35', item35);
      localStorage.setItem('item36', item36);
      localStorage.setItem('item37', item37);
      localStorage.setItem('item38', item38);
      localStorage.setItem('item39', item39);
      localStorage.setItem('item40', item40);
      localStorage.setItem('item41', item41);
      localStorage.setItem('item42', item42);
      localStorage.setItem('item43', item43);
      localStorage.setItem('item44', item44);
      localStorage.setItem('item45', item45);
      localStorage.setItem('item46', item46);
      localStorage.setItem('item47', item47);
      localStorage.setItem('item48', item48);
      localStorage.setItem('item49', item49);
      localStorage.setItem('item50', item50);
      localStorage.setItem('item51', item51);
      localStorage.setItem('item52', item52);
      localStorage.setItem('item53', item53);
      localStorage.setItem('item54', item54);
      localStorage.setItem('item55', item55);
      localStorage.setItem('item56', item56);
      localStorage.setItem('item57', item57);
      localStorage.setItem('item58', item58);
      localStorage.setItem('item59', item59);
      localStorage.setItem('item60', item60);
      localStorage.setItem('item61', item61);
      localStorage.setItem('item62', item62);
      localStorage.setItem('item63', item63);
      localStorage.setItem('item64', item64);
      localStorage.setItem('item65', item65);
      localStorage.setItem('item66', item66);
      localStorage.setItem('item67', item67);
      localStorage.setItem('item68', item68);
      localStorage.setItem('item69', item69);
      localStorage.setItem('item70', item70);
      localStorage.setItem('item71', item71);
      localStorage.setItem('item72', item72);
      localStorage.setItem('item73', item73);
      localStorage.setItem('item74', item74);
      localStorage.setItem('item75', item75);
      localStorage.setItem('item76', item76);
      localStorage.setItem('item77', item77);
      localStorage.setItem('item78', item78);
      localStorage.setItem('item79', item79);
      localStorage.setItem('item80', item80);
      localStorage.setItem('item81', item81);
      localStorage.setItem('item82', item82);
      localStorage.setItem('item83', item83);
      localStorage.setItem('item84', item84);
      localStorage.setItem('item85', item85);
      localStorage.setItem('item86', item86);
      localStorage.setItem('item87', item87);
      localStorage.setItem('item88', item88);
      localStorage.setItem('item89', item89);
      localStorage.setItem('item90', item90);
      localStorage.setItem('item91', item91);
      localStorage.setItem('item92', item92);
      localStorage.setItem('item93', item93);
      localStorage.setItem('item94', item94);
      localStorage.setItem('item95', item95);
      localStorage.setItem('item96', item96);
      localStorage.setItem('item97', item97);
      localStorage.setItem('item98', item98);
      localStorage.setItem('item99', item99);
      localStorage.setItem('item100', item100);
      localStorage.setItem('item101', item101);
      localStorage.setItem('item102', item102);
      localStorage.setItem('item103', item103);
      localStorage.setItem('item104', item104);
      localStorage.setItem('item105', item105);
      localStorage.setItem('item106', item106);
      localStorage.setItem('item107', item107);
      localStorage.setItem('item108', item108);
      localStorage.setItem('item109', item109);
      localStorage.setItem('item110', item110);
      localStorage.setItem('item111', item111);
      localStorage.setItem('item112', item112);
      localStorage.setItem('item113', item113);
      localStorage.setItem('item114', item114);
      localStorage.setItem('item115', item115);
      localStorage.setItem('item116', item116);
      localStorage.setItem('item117', item117);
      localStorage.setItem('item118', item118);
      localStorage.setItem('item119', item119);
      localStorage.setItem('item120', item120);
      localStorage.setItem('item121', item121);
      localStorage.setItem('item122', item122);
      localStorage.setItem('item123', item123);
  }
  function getData()
  {
    //alert("get data");
      item1 = localStorage.getItem("item1");
      item2 = localStorage.getItem("item2");
      item3 = localStorage.getItem("item3");
      item4 = localStorage.getItem("item4");
      item5 = localStorage.getItem("item5");
      item6 = localStorage.getItem("item6");
      item7 = localStorage.getItem("item7");
      item8 = localStorage.getItem("item8");
      item9 = localStorage.getItem("item9");
      item10 = localStorage.getItem("item10");
      item11 = localStorage.getItem("item11");
      item12 = localStorage.getItem("item12");
      item13 = localStorage.getItem("item13");
      item14 = localStorage.getItem("item14");
      item15 = localStorage.getItem("item15");
      item16 = localStorage.getItem("item16");
      item17 = localStorage.getItem("item17");
      item18 = localStorage.getItem("item18");
      item19 = localStorage.getItem("item19");
      item20 = localStorage.getItem("item20");
      item21 = localStorage.getItem("item21");
      item22 = localStorage.getItem("item22");
      item23 = localStorage.getItem("item23");
      item24 = localStorage.getItem("item24");
      item25 = localStorage.getItem("item25");
      item26 = localStorage.getItem("item26");
      item27 = localStorage.getItem("item27");
      item28 = localStorage.getItem("item28");
      item29 = localStorage.getItem("item29");
      item30 = localStorage.getItem("item30");
      item31 = localStorage.getItem("item31");
      item32 = localStorage.getItem("item32");
      item33 = localStorage.getItem("item33");
      item34 = localStorage.getItem("item34");
      item35 = localStorage.getItem("item35");
      item36 = localStorage.getItem("item36");
      item37 = localStorage.getItem("item37");
      item38 = localStorage.getItem("item38");
      item39 = localStorage.getItem("item39");
      item40 = localStorage.getItem("item40");
      item41 = localStorage.getItem("item41");
      item42 = localStorage.getItem("item42");
      item43 = localStorage.getItem("item43");
      item44 = localStorage.getItem("item44");
      item45 = localStorage.getItem("item45");
      item46 = localStorage.getItem("item46");
      item47 = localStorage.getItem("item47");
      item48 = localStorage.getItem("item48");
      item49 = localStorage.getItem("item49");
      item50 = localStorage.getItem("item50");
      item51 = localStorage.getItem("item51");
      item52 = localStorage.getItem("item52");
      item53 = localStorage.getItem("item53");
      item54 = localStorage.getItem("item54");
      item55 = localStorage.getItem("item55");
      item56 = localStorage.getItem("item56");
      item57 = localStorage.getItem("item57");
      item58 = localStorage.getItem("item58");
      item59 = localStorage.getItem("item59");
      item60 = localStorage.getItem("item60");
      item61 = localStorage.getItem("item61");
      item62 = localStorage.getItem("item62");
      item63 = localStorage.getItem("item63");
      item64 = localStorage.getItem("item64");
      item65 = localStorage.getItem("item65");
      item66 = localStorage.getItem("item66");
      item67 = localStorage.getItem("item67");
      item68 = localStorage.getItem("item68");
      item69 = localStorage.getItem("item69");
      item70 = localStorage.getItem("item70");
      item71 = localStorage.getItem("item71");
      item72 = localStorage.getItem("item72");
      item73 = localStorage.getItem("item73");
      item74 = localStorage.getItem("item74");
      item75 = localStorage.getItem("item75");
      item76 = localStorage.getItem("item76");
      item77 = localStorage.getItem("item77");
      item78 = localStorage.getItem("item78");
      item79 = localStorage.getItem("item79");
      item80 = localStorage.getItem("item80");
      item81 = localStorage.getItem("item81");
      item82 = localStorage.getItem("item82");
      item83 = localStorage.getItem("item83");
      item84 = localStorage.getItem("item84");
      item85 = localStorage.getItem("item85");
      item86 = localStorage.getItem("item86");
      item87 = localStorage.getItem("item87");
      item88 = localStorage.getItem("item88");
      item89 = localStorage.getItem("item89");
      item90 = localStorage.getItem("item90");
      item91 = localStorage.getItem("item91");
      item92 = localStorage.getItem("item92");
      item93 = localStorage.getItem("item93");
      item94 = localStorage.getItem("item94");
      item95 = localStorage.getItem("item95");
      item96 = localStorage.getItem("item96");
      item97 = localStorage.getItem("item97");
      item98 = localStorage.getItem("item98");
      item99 = localStorage.getItem("item99");
      item100 = localStorage.getItem("item100");
      item101 = localStorage.getItem("item101");
      item102 = localStorage.getItem("item102");
      item103 = localStorage.getItem("item103");
      item104 = localStorage.getItem("item104");
      item105 = localStorage.getItem("item105");
      item106 = localStorage.getItem("item106");
      item107 = localStorage.getItem("item107");
      item108 = localStorage.getItem("item108");
      item109 = localStorage.getItem("item109");
      item110 = localStorage.getItem("item110");
      item111 = localStorage.getItem("item111");
      item112 = localStorage.getItem("item112");
      item113 = localStorage.getItem("item113");
      item114 = localStorage.getItem("item114");
      item115 = localStorage.getItem("item115");
      item116 = localStorage.getItem("item116");
      item117 = localStorage.getItem("item117");
      item118 = localStorage.getItem("item118");
      item119 = localStorage.getItem("item119");
      item120 = localStorage.getItem("item120");
      item121 = localStorage.getItem("item121");
      item122 = localStorage.getItem("item122");
      item123 = localStorage.getItem("item123");
  }
  function showData()
  {
    //alert("show data");
    if(test=="fail")
    {
      console.log("test failed");
      getData();
    }
    else
    {
      test="fail";
    }


    document.getElementById("item1").innerHTML = item1;
    document.getElementById("item2").innerHTML = item2;
    document.getElementById("item3").innerHTML = item3;
    document.getElementById("item4").innerHTML = item4;
    document.getElementById("item5").innerHTML = item5;
    document.getElementById("item6").innerHTML = item6;
    document.getElementById("item7").innerHTML = item7;
    document.getElementById("item8").innerHTML = item8;
    document.getElementById("item9").innerHTML = item9;
    document.getElementById("item10").innerHTML = item10;
    document.getElementById("item11").innerHTML = item11;
    document.getElementById("item12").innerHTML = item12;
    document.getElementById("item13").innerHTML = item13;
    document.getElementById("item14").innerHTML = item14;
    document.getElementById("item15").innerHTML = item15;
    document.getElementById("item16").innerHTML = item16;
    document.getElementById("item17").innerHTML = item17;
    document.getElementById("item18").innerHTML = item18;
    document.getElementById("item19").innerHTML = item19;
    document.getElementById("item20").innerHTML = item20;
    document.getElementById("item21").innerHTML = item21;
    document.getElementById("item22").innerHTML = item22;
    document.getElementById("item23").innerHTML = item23;
    document.getElementById("item24").innerHTML = item24;
    document.getElementById("item25").innerHTML = item25;
    document.getElementById("item26").innerHTML = item26;
    document.getElementById("item27").innerHTML = item27;
    document.getElementById("item28").innerHTML = item28;
    document.getElementById("item29").innerHTML = item29;
    document.getElementById("item30").innerHTML = item30;
    document.getElementById("item31").innerHTML = item31;
    document.getElementById("item32").innerHTML = item32;
    document.getElementById("item33").innerHTML = item33;
    document.getElementById("item34").innerHTML = item34;
    document.getElementById("item35").innerHTML = item35;
    document.getElementById("item36").innerHTML = item36;
    document.getElementById("item37").innerHTML = item37;
    document.getElementById("item38").innerHTML = item38;
    document.getElementById("item39").innerHTML = item39;
    document.getElementById("item40").innerHTML = item40;
    document.getElementById("item41").innerHTML = item41;
    document.getElementById("item42").innerHTML = item42;
    document.getElementById("item43").innerHTML = item43;
    document.getElementById("item44").innerHTML = item44;
    document.getElementById("item45").innerHTML = item45;
    document.getElementById("item46").innerHTML = item46;
    document.getElementById("item47").innerHTML = item47;
    document.getElementById("item48").innerHTML = item48;
    document.getElementById("item49").innerHTML = item49;
    document.getElementById("item50").innerHTML = item50;
    document.getElementById("item51").innerHTML = item51;
    document.getElementById("item52").innerHTML = item52;
    document.getElementById("item53").innerHTML = item53;
    document.getElementById("item54").innerHTML = item54;
    document.getElementById("item55").innerHTML = item55;
    document.getElementById("item56").innerHTML = item56;
    document.getElementById("item57").innerHTML = item57;
    document.getElementById("item58").innerHTML = item58;
    document.getElementById("item59").innerHTML = item59;
    document.getElementById("item60").innerHTML = item60;
    document.getElementById("item61").innerHTML = item61;
    document.getElementById("item62").innerHTML = item62;
    document.getElementById("item63").innerHTML = item63;
    document.getElementById("item64").innerHTML = item64;
    document.getElementById("item65").innerHTML = item65;
    document.getElementById("item66").innerHTML = item66;
    document.getElementById("item67").innerHTML = item67;
    document.getElementById("item68").innerHTML = item68;
    document.getElementById("item69").innerHTML = item69;
    document.getElementById("item70").innerHTML = item70;
    document.getElementById("item71").innerHTML = item71;
    document.getElementById("item72").innerHTML = item72;
    document.getElementById("item73").innerHTML = item73;
    document.getElementById("item74").innerHTML = item74;
    document.getElementById("item75").innerHTML = item75;
    document.getElementById("item76").innerHTML = item76;
    document.getElementById("item77").innerHTML = item77;
    document.getElementById("item78").innerHTML = item78;
    document.getElementById("item79").innerHTML = item79;
    document.getElementById("item80").innerHTML = item80;
    document.getElementById("item81").innerHTML = item81;
    document.getElementById("item82").innerHTML = item82;
    document.getElementById("item83").innerHTML = item83;
    document.getElementById("item84").innerHTML = item84;
    document.getElementById("item85").innerHTML = item85;
    document.getElementById("item86").innerHTML = item86;
    document.getElementById("item87").innerHTML = item87;
    document.getElementById("item88").innerHTML = item88;
    document.getElementById("item89").innerHTML = item89;
    document.getElementById("item90").innerHTML = item90;
    document.getElementById("item91").innerHTML = item91;
    document.getElementById("item92").innerHTML = item92;
    document.getElementById("item93").innerHTML = item93;
    document.getElementById("item94").innerHTML = item94;
    document.getElementById("item95").innerHTML = item95;
    document.getElementById("item96").innerHTML = item96;
    document.getElementById("item97").innerHTML = item97;
    document.getElementById("item98").innerHTML = item98;
    document.getElementById("item99").innerHTML = item99;
    document.getElementById("item100").innerHTML = item100;
    document.getElementById("item101").innerHTML = item101;
    document.getElementById("item102").innerHTML = item102;
    document.getElementById("item103").innerHTML = item103;
    document.getElementById("item104").innerHTML = item104;
    document.getElementById("item105").innerHTML = item105;
    document.getElementById("item106").innerHTML = item106;
    document.getElementById("item107").innerHTML = item107;
    document.getElementById("item108").innerHTML = item108;
    document.getElementById("item109").innerHTML = item109;
    document.getElementById("item110").innerHTML = item110;
    document.getElementById("item111").innerHTML = item111;
    document.getElementById("item112").innerHTML = item112;
    document.getElementById("item113").innerHTML = item113;
    document.getElementById("item114").innerHTML = item114;
    document.getElementById("item115").innerHTML = item115;
    document.getElementById("item116").innerHTML = item116;
    document.getElementById("item117").innerHTML = item117;
    document.getElementById("item118").innerHTML = item118;
    document.getElementById("item119").innerHTML = item119;
    document.getElementById("item120").innerHTML = item120;
    document.getElementById("item121").innerHTML = item121;
    document.getElementById("item122").innerHTML = item122;
    document.getElementById("item123").innerHTML = item123;
  }
