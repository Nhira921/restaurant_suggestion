'use strict';
{
  const testStart = document.getElementById('start-test')

  //alone
  const alone = document.getElementById('alone');
  const aloneYes = document.getElementById('aloneYes');
  const aloneNo = document.getElementById('aloneNo');

  //diet
  const diet =document.getElementById('diet');
  const dietYes =document.getElementById('dietYes');
  const dietNo =document.getElementById('dietNo');
  
  //notAlone-diet
  const notAloneDiet = document.getElementById('notAlone-diet');
  const notAloneDietYes = document.getElementById('notAlone-dietYes');
  const notAloneDietNo = document.getElementById('notAlone-dietNo');

  //oily
  const oily =document.getElementById('oily');
  const oilyYes =document.getElementById('oilyYes');
  const oilyNo =document.getElementById('oilyNo');

  //notAloneoily
  const notAloneoily =document.getElementById('notAloneoily');
  const notAloneoilyYes =document.getElementById('notAloneoilyYes');
  const notAloneoilyNo =document.getElementById('notAloneoilyNo');

  //spicy
  const spicy =document.getElementById('spicy');
  const spicyYes =document.getElementById('spicyYes');
  const spicyNo =document.getElementById('spicyNo');

  //sour
  const sour =document.getElementById('sour');
  const sourYes =document.getElementById('sourYes');
  const sourNo =document.getElementById('sourNo');

  //rice
  const rice =document.getElementById('rice');
  const riceYes =document.getElementById('riceYes');
  const riceNo =document.getElementById('riceNo');

  //noodle
  const noodle =document.getElementById('noodle');
  const noodleYes =document.getElementById('noodleYes');
  const noodleNo =document.getElementById('noodleNo');

  //overseas
  const overseas =document.getElementById('overseas');
  const overseasYes =document.getElementById('overseasYes');
  const overseasNo =document.getElementById('overseasNo');

  //article
  const home = document.getElementById('home');
  const famires = document.getElementById('famires');
  const ramen = document.getElementById('ramen');
  const sushi = document.getElementById('sushi');
  const udon = document.getElementById('udon');
  const chinese = document.getElementById('chinese');
  const curry = document.getElementById('curry');
  const pasta = document.getElementById('pasta');
  const don = document.getElementById('don');


  /*お家に帰ろうルート*/
  testStart.addEventListener('click',()=>{
    testStart.classList.add('invisible');
    alone.classList.add('visible');
  });

  aloneYes.addEventListener('click',()=>{
    alone.classList.remove('visible');
    alone.classList.add('invisible');
    diet.classList.add('visible');
  });

  dietYes.addEventListener('click',()=>{
    diet.classList.remove('visible');
    diet.classList.add('invisible');
    home.classList.add('visible');
  });

  /*ファミレスルート*/
  aloneNo.addEventListener('click',()=>{
    alone.classList.remove('visible');
    alone.classList.add('invisible');
    notAloneDiet.classList.add('visible');
  });

  notAloneDietYes.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    famires.classList.add('visible');
  });

  /*notお一人様うどんルート*/

  notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
  });

  notAloneoilyNo.addEventListener('click',()=>{
    notAloneoily.classList.remove('visible');
    notAloneoily.classList.add('invisible');
    rice.classList.add('visible');
  });
  
    riceNo.addEventListener('click',()=>{
    rice.classList.remove('visible');
    rice.classList.add('invisible');
    udon.classList.add('visible');
  });

  
    /*notお一人様すしルート*/

    notAloneDietNo.addEventListener('click',()=>{
      notAloneDiet.classList.remove('visible');
      notAloneDiet.classList.add('invisible');
      notAloneoily.classList.add('visible');
    });
  
    notAloneoilyNo.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      rice.classList.add('visible');
    });

    riceYes.addEventListener('click',()=>{
      rice.classList.remove('visible');
      rice.classList.add('invisible');
      sushi.classList.add('visible');
    });
  

    /*お一人様うどんルート*/

    dietNo.addEventListener('click',()=>{
    diet.classList.remove('visible');
    diet.classList.add('invisible');
    oily.classList.add('visible');
    });

    oilyNo.addEventListener('click',()=>{
    oily.classList.remove('visible');
    oily.classList.add('invisible');
    rice.classList.add('visible');
    });
  
    riceNo.addEventListener('click',()=>{
    rice.classList.remove('visible');
    rice.classList.add('invisible');
    udon.classList.add('visible');
    });

  
    /*一人様すしルート*/

    dietNo.addEventListener('click',()=>{
    diet.classList.remove('visible');
    diet.classList.add('invisible');
    oily.classList.add('visible');
    });
  
    oilyNo.addEventListener('click',()=>{
      oily.classList.remove('visible');
      oily.classList.add('invisible');
      rice.classList.add('visible');
    });

    riceYes.addEventListener('click',()=>{
      rice.classList.remove('visible');
      rice.classList.add('invisible');
      sushi.classList.add('visible');
    });
  
    /*一人様ラーメンルート*/

    dietNo.addEventListener('click',()=>{
    diet.classList.remove('visible');
    diet.classList.add('invisible');
    oily.classList.add('visible');
    });
  
    oilyYes.addEventListener('click',()=>{
      oily.classList.remove('visible');
      oily.classList.add('invisible');
      noodle.classList.add('visible');
    });

    noodleYes.addEventListener('click',()=>{
      noodle.classList.remove('visible');
      noodle.classList.add('invisible');
      ramen.classList.add('visible');
    });


    /*一人様丼ぶりルート*/

    dietNo.addEventListener('click',()=>{
    diet.classList.remove('visible');
    diet.classList.add('invisible');
    oily.classList.add('visible');
    });
  
    oilyYes.addEventListener('click',()=>{
      oily.classList.remove('visible');
      oily.classList.add('invisible');
      noodle.classList.add('visible');
    });

    noodleNo.addEventListener('click',()=>{
      noodle.classList.remove('visible');
      noodle.classList.add('invisible');
      don.classList.add('visible');
    });
  

    /*丼ぶりルート*/

    notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
    });
  
    notAloneoilyYes.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      spicy.classList.add('visible');
    });

    spicyNo.addEventListener('click',()=>{
      spicy.classList.remove('visible');
      spicy.classList.add('invisible');
      overseas.classList.add('visible');
    });

    overseasNo.addEventListener('click',()=>{
      overseas.classList.remove('visible');
      overseas.classList.add('invisible');
      noodle.classList.add('visible');
    });

    noodleNo.addEventListener('click',()=>{
      noodle.classList.remove('visible');
      noodle.classList.add('invisible');
      don.classList.add('visible');
    });

    /*ラーメンルート*/

    notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
    });
  
    notAloneoilyYes.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      spicy.classList.add('visible');
    });

    spicyNo.addEventListener('click',()=>{
      spicy.classList.remove('visible');
      spicy.classList.add('invisible');
      overseas.classList.add('visible');
    });

    overseasNo.addEventListener('click',()=>{
      overseas.classList.remove('visible');
      overseas.classList.add('invisible');
      noodle.classList.add('visible');
    });

    noodleYes.addEventListener('click',()=>{
      noodle.classList.remove('visible');
      noodle.classList.add('invisible');
      ramen.classList.add('visible');
    });


    /*パスタルート*/

    notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
    });
  
    notAloneoilyYes.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      spicy.classList.add('visible');
    });

    spicyNo.addEventListener('click',()=>{
      spicy.classList.remove('visible');
      spicy.classList.add('invisible');
      overseas.classList.add('visible');
    });

    overseasYes.addEventListener('click',()=>{
      overseas.classList.remove('visible');
      overseas.classList.add('invisible');
      pasta.classList.add('visible');
    });

    /*カレールート*/

    notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
    });
  
    notAloneoilyYes.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      spicy.classList.add('visible');
    });

    spicyYes.addEventListener('click',()=>{
      spicy.classList.remove('visible');
      spicy.classList.add('invisible');
      sour.classList.add('visible');
    });

    sourNo.addEventListener('click',()=>{
      sour.classList.remove('visible');
      sour.classList.add('invisible');
      curry.classList.add('visible');
    });


    /*街中華*/

    notAloneDietNo.addEventListener('click',()=>{
    notAloneDiet.classList.remove('visible');
    notAloneDiet.classList.add('invisible');
    notAloneoily.classList.add('visible');
    });
  
    notAloneoilyYes.addEventListener('click',()=>{
      notAloneoily.classList.remove('visible');
      notAloneoily.classList.add('invisible');
      spicy.classList.add('visible');
    });

    spicyYes.addEventListener('click',()=>{
      spicy.classList.remove('visible');
      spicy.classList.add('invisible');
      sour.classList.add('visible');
    });

    sourYes.addEventListener('click',()=>{
      sour.classList.remove('visible');
      sour.classList.add('invisible');
      chinese.classList.add('visible');
    });


  }
 
    
    
