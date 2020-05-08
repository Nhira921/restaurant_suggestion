  {
    'use strict';

    
    function gnaviSearch() { 
      
      const shops = document.getElementById('shops');
      while (shops.firstChild) shops.removeChild(shops.firstChild);
    
       //geolocation APIで現在地を取得
      navigator.geolocation.getCurrentPosition(
        function(position){
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lon);//確認用
        console.log(lat);//確認用
        //位置情報の取得以上
        const range = 5;
        const keyid = 'your key_id'; // gitにapikeyを上げないよう要注意
        let freeWord = document.forms.mainform.elements['freeWord'].value;
        //診断結果を取得
        console.log(freeWord);//確認用
    
       
        let _url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${keyid}&latitude=${lat}&longitude=${lon}&freeword=${freeWord}&range=${range}`;
    
    
      // Ajax(XMLHttpRequest)処理
      // APIを実行して結果のJSONデータを加工している
      let xhttp = new XMLHttpRequest();
      
      // 通信が終わった時の処理
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
          let res = JSON.parse(xhttp.responseText);
          var hitcount = res.total_hit_count;
          for (let index = 0; index < res.rest.length; index++) {
            let element = res.rest[index];
            let node = document.createElement("div");
            node.innerHTML = element.name;
            let img = document.createElement("img");
            img.src = element.image_url.shop_image1;
            let anker = document.createElement("a");
            anker.href = element.url;
            anker.innerHTML = element.url;
            
            node.appendChild(img);
            node.appendChild(anker);
            shops.appendChild(node);
          }
        }
      };
      // データ取得開始
  
  
      xhttp.open('GET', _url, true);
      xhttp.send();
      });
      }
  }
  

