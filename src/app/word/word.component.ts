import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  // planetsJohn = [ 37, 30, 37, 55, 20, 72.5, 75, 42.5, 40, 55];
  planetsJohn = [ 37, 45, 37, 55, 30, 108.75, 75, 42.5, 60, 55];

  aspects = ["aspectsSun", "aspectsMoon", "aspectsMercury", "aspectsVenus", "aspectsMars", "aspectsJupiter", "aspectsSaturn", "aspectsUranus", "aspectsNeptune"];

  aspectsSun = [ "Marriage", "Clarity of Mind", "Compassion", "Ambitious Man", "Guru or Guide", "Authority Figure", "Freedom Lover", "Mystic", "Transformer" ];
  aspectsMoon = [ "Thoughtfulness", "Mother Love", "Strong Woman", "Success Woman", "Lonely Woman", "Indie Woman", "Kind Woman", "Powerful Woman" ];
  aspectsMercury = ["Words of Love", "Orator", "Way with Words", "Concentration", "Insight", "Idealism", "Deep Thoughts" ];
  aspectsVenus = [ "Desire", "Love of Career", "Appraisal", "Eccentric Taste", "Eternal Love", "Love of Power" ];
  aspectsMars = [ "Career Drive", "Endurance", "Sudden Action", "Drive for Unity", "Urge for Power" ];
  aspectsJupiter = [ "Overcome Obstacles", "Unusual Career", "Mystical Path", "Power Leader" ];
  aspectsSaturn = [ "Breakthrough", "Test Ideals", "Intense Man" ];
  aspectsUranus = [ "Vision Quest", "Transformation" ];
  aspectsNeptune = [ "Acceptance" ];

  // aspectsSunMercury = {
  //   "titles": [{
  //     "title1":"",
  //     "title2":"",
  //     "title3":"",
  //     "title4":"",
  //     "title5":"",
  //   }],
  //   "aspects": [{
  //     "conjuction":"When it comes to matters of the mind, ideas, thoughts, and the like, you have a natural sense of mental clarity, and enjoy planning and envisioning the future, always filling your inner mental skies with new ideas, something you may wish to share with the world. With you, there are always new ideas, new plans.",
  //     "semi-sextile-s":"You are always thinking and making plans for the future, things that have come to you and that you want to share with others or see happen. When it comes to study, and anything mental or communication oriented, you are very community oriented, happy to work for the benefit of all."
  //   }],

  //   "conjuction2":"Teaching Ideas",
  //   "conjuction3":"Teaching Ideas" 
  // };

  // aspects1 = { "aspectsSun": [
  //   {
  //     "name" : "Sol",
  //     "aspectsSun" : [{
  //       "Sol e Mercúrio":""
  //     }]
  //   }
  //  ]
  // };

  aspect = "";
  index = 0;
  tipo:any;
  sentido:any; 
  grau:any; 
  minuto:any; 
  planet1:any; 
  planet2: any;


  constructor() { }

  ngOnInit() {
  }

  valorAspect(tipo, sentido, grau, minuto, planet1, planet2){
    let valor = 0;

    if(tipo == "conjunction" || tipo == "opposition" || tipo == "square" || tipo == "trine"){
      valor = 100 - grau*10 - minuto/6;
    }else if(tipo == "semisquare" || tipo == "sesquisquare" || tipo == "quincunx" || tipo == "semisextile"){
      valor = 30 - grau*10 - minuto/6;
    }else if(tipo == "sextile"){
      valor = 60 - grau*10 - minuto/6;
    }else if(tipo == "quintile" || tipo == "biquintile"){
      valor = 20 - grau*10 - minuto/6;
    }else{
      valor = 0;
    }

    valor = this.planetsJohn[planet1] + valor +  this.planetsJohn[planet2]
    this.index = planet2 - planet1 - 1;
    this.aspect = this.aspects[planet1];

    // console.log(valor);
    // console.log(this.planetsJohn[planet1]);
    // console.log(this.planetsJohn[planet2]);
    // console.log(this.index);
    // console.log(this.aspect);

    if(tipo == "" || sentido == "" || grau == "" || minuto == "" || planet1 == "" || planet2 == "" ){
      return "";
    }else{
      return Math.round(valor*100)/100;
    }

    
    

  }

}
