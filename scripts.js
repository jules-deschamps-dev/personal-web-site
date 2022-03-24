		
      function randn_bm(min, max, skew, disp) {
          let u = 0, v = 0;
          while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
          while(v === 0) v = Math.random()
          let num = Math.sqrt( -disp * Math.log( u ) ) * Math.cos( disp * Math.PI * v )
          
          num = num / 10.0 + 0.5 // Translate to 0 -> 1
          if (num > 1 || num < 0) 
            num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
          
          else{
            num = Math.pow(num, skew) // Skew
            num *= max - min // Stretch to fill range
            num += min // offset to min
          }
          return num
        }
    function starCreation(){
      for (a=1 ; a<10 ; a++){
        for (z = 0 ; z < 700 ; z++){
          // CREATE SYSTEM
          var largeur = Math.ceil(Math.random()*2);
          var x_ax = randn_bm(0, 1, 1, 1)* 100;
          var y_ax = randn_bm(0, 1, 1, 1)* 100;
          var hauteur = largeur;
          var o = Math.random();
          console.log(o);
          if (o < 1) {
            var color = 'rgba( 255, 255, 255, .35)';
          }
        

          var layerId = 'layer--'+ a;
          var newStarId = "__star--" + z;
          var newStar = document.createElement('div');
          newStar.id = newStarId;

          console.log(layerId);
          
          document.getElementById(layerId).appendChild(newStar);
          document.getElementById(newStarId).style.position = 'absolute';
          document.getElementById(newStarId).style.width = largeur + 'px';
          document.getElementById(newStarId).style.height = hauteur + 'px';
          document.getElementById(newStarId).style.left = x_ax + '%';
          document.getElementById(newStarId).style.top = y_ax + '%';
          document.getElementById(newStarId).style.backgroundColor = color;
          document.getElementById(newStarId).style.borderRadius = largeur / 2 + 'px';  
        }
      }
    }    
function moovingLayer(layerId){
  console.log(layerId);
  for (z=0 ; z<1000 ; z++){
    console.log(layerId);
    console.log(document.getElementById(layerId).style.top);
    var layer_ay = document.getElementById(layerId).style.top.replace('px', '');
    layer_ay++;
    document.getElementById(layerId).style.top = layer_ay + 'px';
    sleep(100);
  }
}





// Creation du bloc contenant les vagues pour l'anim bvn



    function copy_to_clipboard(clicked_id) {
      var clicked_child_id = clicked_id + '_adress';
      console.log(clicked_child_id);
      var text = document.getElementById(clicked_child_id).innerHTML;
      document.getElementById('infoCaseTxt').textContent = 'Address copied on clipboard !';
       document.getElementById('infoCaseTxt').style.fontFamily = '_TINTIN';
      navigator.clipboard.writeText(text).then(function() {
      }, function() {});}
  
  function QRCode_echo(show, actif) {
    document.getElementById('QRcode_displayer').style.backgroundColor = "white";
    document.getElementById('QRcodeTxt').style.display = "none";
    if (show == 1) {
      document.getElementById('QRcode').style.display = "flex";
      document.getElementById('infoCaseTxt').textContent = 'Clic to copy ' +  actif + ' address..';}
    else {
      document.getElementById('QRcode').style.display = "none";
      document.getElementById('QRcode_displayer').style.backgroundColor = "transparent";
       document.getElementById('infoCaseTxt').style.fontFamily = 'tintin';
      document.getElementById('QRcodeTxt').style.display = "flex";
      document.getElementById('infoCaseTxt').textContent = "";
    }
    if (actif == 'BTC'){
      document.getElementById('QRcode').style.backgroundImage = "url('../img/crypto/BTC_QRCode.png')";
    }
    else if (actif == 'EGLD'){
      document.getElementById('QRcode').style.backgroundImage = "url('../img/crypto/EGLD_QRCode.png')";
    }
    else if (actif == 'CAPS'){
      document.getElementById('QRcode').style.backgroundImage = "url('../img/crypto/CAPS_QRCode.png')";
    }
    else if (actif == 'MEX'){
      document.getElementById('QRcode').style.backgroundImage = "url('../img/crypto/MEX_QRCode.png')";
    }
  } 

