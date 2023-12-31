import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StickerDataService {
  constructor() {
    //--------------------------- activity----------------------------
    this.activityTheme = [
      { bg: '../../../assets/img/BgSticker/Diamon1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Diamon2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Diamon3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Diamon4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Diamon5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Diamon6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Diamon7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Diamon8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Diamon9.png', font: '#645232' },
    ];
    this.activityIcon = [
      '../../../assets/img/ActivityIcon/shower.png',
    '../../../assets/img/ActivityIcon/face.png',
    '../../../assets/img/ActivityIcon/wash-face.png',
    '../../../assets/img/ActivityIcon/get-dressed.png',
    '../../../assets/img/ActivityIcon/wash-your-hands.png',
    '../../../assets/img/ActivityIcon/washing-hands1.png',
    '../../../assets/img/ActivityIcon/washing-hands2.png',
    '../../../assets/img/ActivityIcon/tooth-brush.png',
    '../../../assets/img/ActivityIcon/teeth-brushing.png',
    '../../../assets/img/ActivityIcon/toilet.png',
    '../../../assets/img/ActivityIcon/toilet2.png',

    '../../../assets/img/ActivityIcon/clock.png',
    '../../../assets/img/ActivityIcon/make-the-bed.png',
    '../../../assets/img/ActivityIcon/bed2.png',
    '../../../assets/img/ActivityIcon/bed-furniture.png',
    '../../../assets/img/ActivityIcon/bed.png',
    '../../../assets/img/ActivityIcon/bed-time.png',
    '../../../assets/img/ActivityIcon/sleeping.png',
    '../../../assets/img/ActivityIcon/day-and-night.png',


    '../../../assets/img/ActivityIcon/bus.png',
    '../../../assets/img/ActivityIcon/school.png',
    '../../../assets/img/ActivityIcon/school1.png',
    '../../../assets/img/ActivityIcon/clock2.png',
    '../../../assets/img/ActivityIcon/homework.png',
    '../../../assets/img/ActivityIcon/homework1.png',
    '../../../assets/img/ActivityIcon/read.png',
    '../../../assets/img/ActivityIcon/studying.png',
    '../../../assets/img/ActivityIcon/art.png',
    '../../../assets/img/ActivityIcon/palette.png',
    '../../../assets/img/ActivityIcon/guitar.png',
    '../../../assets/img/ActivityIcon/keyboard.png',

    '../../../assets/img/ActivityIcon/speaking.png',
    '../../../assets/img/ActivityIcon/talking.png',

    '../../../assets/img/ActivityIcon/milk-box.png',
    '../../../assets/img/ActivityIcon/fruits.png',
    '../../../assets/img/ActivityIcon/vegetables.png',
    '../../../assets/img/ActivityIcon/baby-carrot.png',
    '../../../assets/img/ActivityIcon/baby-food.png',
    '../../../assets/img/ActivityIcon/feeding.png',
    '../../../assets/img/ActivityIcon/food.png',
    '../../../assets/img/ActivityIcon/eating.png',
    '../../../assets/img/ActivityIcon/eat-rice.png',
    '../../../assets/img/ActivityIcon/break.png',
    '../../../assets/img/ActivityIcon/healthy.png',

    '../../../assets/img/ActivityIcon/triangle.png',
    '../../../assets/img/ActivityIcon/triangle2.png',
    '../../../assets/img/ActivityIcon/exercise.png',
    '../../../assets/img/ActivityIcon/bike.png',
    '../../../assets/img/ActivityIcon/bycicle.png',

    '../../../assets/img/ActivityIcon/clean-dishes.png',
    '../../../assets/img/ActivityIcon/drying.png',
    '../../../assets/img/ActivityIcon/flower.png',
    '../../../assets/img/ActivityIcon/garbage1.png',
    '../../../assets/img/ActivityIcon/garbage2.png',
    '../../../assets/img/ActivityIcon/trash.png',
    '../../../assets/img/ActivityIcon/grass-cutter.png',
    '../../../assets/img/ActivityIcon/clean-up.png',
    '../../../assets/img/ActivityIcon/housekeeping.png',
    '../../../assets/img/ActivityIcon/housekeeping2.png',
    '../../../assets/img/ActivityIcon/vacuum.png',
    '../../../assets/img/ActivityIcon/desk.png',
    '../../../assets/img/ActivityIcon/washing-clothes.png',
    '../../../assets/img/ActivityIcon/laundry-machine.png',
    '../../../assets/img/ActivityIcon/laundry1.png',
    '../../../assets/img/ActivityIcon/laundry2.png',
    '../../../assets/img/ActivityIcon/laundry.png',
    '../../../assets/img/ActivityIcon/massage.png',
    '../../../assets/img/ActivityIcon/watering-plants.png', 
    '../../../assets/img/ActivityIcon/watering-can.png',
    '../../../assets/img/ActivityIcon/saute.png',  
    '../../../assets/img/ActivityIcon/baking.png',
    '../../../assets/img/ActivityIcon/cooking.png',

    '../../../assets/img/ActivityIcon/shopping-cart.png',
    '../../../assets/img/ActivityIcon/groceries.png',
    '../../../assets/img/ActivityIcon/fruit-stand.png',
    '../../../assets/img/ActivityIcon/market.png',
    '../../../assets/img/ActivityIcon/market1.png',

    '../../../assets/img/ActivityIcon/dog.png',
    '../../../assets/img/ActivityIcon/pet-bowl.png',
    '../../../assets/img/ActivityIcon/pet-food.png',
    '../../../assets/img/ActivityIcon/animals.png',
    '../../../assets/img/ActivityIcon/walking-the-dog.png',
    '../../../assets/img/ActivityIcon/pet-care.png',
    '../../../assets/img/ActivityIcon/pet.png',

    ];
    //--------------------------- Praise----------------------------
    this.praiseTheme = [
      { bg: '../../../assets/img/BgSticker/Heart1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Heart2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Heart3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Heart4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Heart5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Heart6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Heart7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Heart8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Heart9.png', font: '#645232' },
    ];
    //--------------------------- feeling----------------------------
    this.feelingTheme = [
      { bg: '../../../assets/img/BgSticker/Star1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Star2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Star3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Star4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Star5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Star6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Star7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Star8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Star9.png', font: '#645232' },
    ];

    //--------------------------- Point----------------------------
    this.pointBg =  [
      '../../../assets/img/PointSticker/Bg/Bgpoint6.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint7.png',
  
      '../../../assets/img/PointSticker/Bg/Bgpoint8.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint10.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint11.png',
  
      '../../../assets/img/PointSticker/Bg/Bgpoint26.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgp24.png',
      '../../../assets/img/PointSticker/Bg/Bgp25.png',
  
      '../../../assets/img/PointSticker/Bg/Bgpoint12.png',
      '../../../assets/img/PointSticker/Bg/Bgp28.png',
      '../../../assets/img/PointSticker/Bg/Bgp29.png',
  
      '../../../assets/img/PointSticker/Bg/Bgp27.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint13.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint14.png',
      '../../../assets/img/PointSticker/Bg/Bgp2.png',
      '../../../assets/img/PointSticker/Bg/Bgp3.png',
      '../../../assets/img/PointSticker/Bg/Bgp4.png',
      '../../../assets/img/PointSticker/Bg/Bgp5.png',
  
      '../../../assets/img/PointSticker/Bg/Bgp12.png',
      '../../../assets/img/PointSticker/Bg/Bgp13.png',
      '../../../assets/img/PointSticker/Bg/Bgp14.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint15.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint16.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint17.png',
      '../../../assets/img/PointSticker/Bg/Bgp26.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint18.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint4.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint19.png',
      '../../../assets/img/PointSticker/Bg/Bgp9.png',
      '../../../assets/img/PointSticker/Bg/Bgp10.png',
      '../../../assets/img/PointSticker/Bg/Bgp11.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint20.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint21.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint22.png',
  
      '../../../assets/img/PointSticker/Bg/Bgpoint23.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint24.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint25.png',
      '../../../assets/img/PointSticker/Bg/Bgp6.png',
      '../../../assets/img/PointSticker/Bg/Bgp7.png',
      '../../../assets/img/PointSticker/Bg/Bgp8.png',
      
      '../../../assets/img/PointSticker/Bg/Bgp19.png',
      '../../../assets/img/PointSticker/Bg/Bgp16.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint27.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint30.png',
      '../../../assets/img/PointSticker/Bg/Bgp22.png',
      '../../../assets/img/PointSticker/Bg/Bgp15.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint31.png',
      '../../../assets/img/PointSticker/Bg/Bgp23.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint28.png',
      '../../../assets/img/PointSticker/Bg/Bgp20.png',
      '../../../assets/img/PointSticker/Bg/Bgp17.png',
      '../../../assets/img/PointSticker/Bg/Bgp1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint29.png',
      '../../../assets/img/PointSticker/Bg/Bgp21.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint5.png',
      '../../../assets/img/PointSticker/Bg/Bgp18.png',
    ];

    this.pointIcon = [
      '../../../assets/img/PointSticker/Icon/heart2.png',
    '../../../assets/img/PointSticker/Icon/hearts.png',
    '../../../assets/img/PointSticker/Icon/like.png',
    '../../../assets/img/PointSticker/Icon/heart.png',
    '../../../assets/img/PointSticker/Icon/heart3.png',
    '../../../assets/img/PointSticker/Icon/heart4.png',
    '../../../assets/img/PointSticker/Icon/heart1.png',

    '../../../assets/img/PointSticker/Icon/heart-balloon.png',
    '../../../assets/img/PointSticker/Icon/balloon.png',
    '../../../assets/img/PointSticker/Icon/air-balloons.png',
    '../../../assets/img/PointSticker/Icon/balloons.png',
    '../../../assets/img/PointSticker/Icon/cupcake.png',
    '../../../assets/img/PointSticker/Icon/donut.png',
    '../../../assets/img/PointSticker/Icon/lollipop.png',
    '../../../assets/img/PointSticker/Icon/lollipop1.png',
    '../../../assets/img/PointSticker/Icon/shooting-star.png',
    '../../../assets/img/PointSticker/Icon/star.png',
    '../../../assets/img/PointSticker/Icon/star1.png',
    '../../../assets/img/PointSticker/Icon/star2.png',
    '../../../assets/img/PointSticker/Icon/stars.png',
    '../../../assets/img/PointSticker/Icon/falling-star.png',
    '../../../assets/img/PointSticker/Icon/star3.png',
    '../../../assets/img/PointSticker/Icon/star4.png',
    '../../../assets/img/PointSticker/Icon/star5.png',
    '../../../assets/img/PointSticker/Icon/rainbow.png',
    '../../../assets/img/PointSticker/Icon/rainbow1.png',
    '../../../assets/img/PointSticker/Icon/rainbow2.png',
    '../../../assets/img/PointSticker/Icon/umbrella.png',


    '../../../assets/img/PointSticker/Icon/hand-print.png',
    '../../../assets/img/PointSticker/Icon/sun.png',
    '../../../assets/img/PointSticker/Icon/happy.png',
    '../../../assets/img/PointSticker/Icon/smile.png',
    '../../../assets/img/PointSticker/Icon/smile2.png',
    '../../../assets/img/PointSticker/Icon/happy2.png',
    '../../../assets/img/PointSticker/Icon/wink1.png',
    '../../../assets/img/PointSticker/Icon/tongue.png',
    '../../../assets/img/PointSticker/Icon/like2.png',
    '../../../assets/img/PointSticker/Icon/smile1.png',

    '../../../assets/img/PointSticker/Icon/fire.png',
    '../../../assets/img/PointSticker/Icon/fire1.png',
    '../../../assets/img/PointSticker/Icon/happy1.png',
    '../../../assets/img/PointSticker/Icon/dinosaur.png',
    '../../../assets/img/PointSticker/Icon/chick.png',
    '../../../assets/img/PointSticker/Icon/chick1.png',
    '../../../assets/img/PointSticker/Icon/ducky.png',

    '../../../assets/img/PointSticker/Icon/teddy-bear1.png',
    '../../../assets/img/PointSticker/Icon/teddy-bear2.png',
    '../../../assets/img/PointSticker/Icon/teddy-bear3.png',
    '../../../assets/img/PointSticker/Icon/teddy-bear.png',
    '../../../assets/img/PointSticker/Icon/bear.png',

    '../../../assets/img/PointSticker/Icon/reindeer.png',
    '../../../assets/img/PointSticker/Icon/polar-bear.png',
    '../../../assets/img/PointSticker/Icon/penguin.png',
    '../../../assets/img/PointSticker/Icon/husky.png',
    '../../../assets/img/PointSticker/Icon/dog.png',
    '../../../assets/img/PointSticker/Icon/pawprint.png',
    '../../../assets/img/PointSticker/Icon/paw.png',
    '../../../assets/img/PointSticker/Icon/paw1.png',
    '../../../assets/img/PointSticker/Icon/wink.png',
    '../../../assets/img/PointSticker/Icon/cat.png',
    '../../../assets/img/PointSticker/Icon/unicorn.png',
    '../../../assets/img/PointSticker/Icon/unicorn12.png',
    '../../../assets/img/PointSticker/Icon/unicorn4.png',
    '../../../assets/img/PointSticker/Icon/unicorn5.png',
    '../../../assets/img/PointSticker/Icon/unicorn1.png',
    '../../../assets/img/PointSticker/Icon/unicorn2.png',
    '../../../assets/img/PointSticker/Icon/unicorn7.png',
    '../../../assets/img/PointSticker/Icon/unicorn8.png',
    '../../../assets/img/PointSticker/Icon/unicorn9.png',
    '../../../assets/img/PointSticker/Icon/unicorn10.png',
    '../../../assets/img/PointSticker/Icon/unicorn11.png', 
    '../../../assets/img/PointSticker/Icon/unicorn6.png',
    '../../../assets/img/PointSticker/Icon/unicorn3.png',
    '../../../assets/img/PointSticker/Icon/toy.png',
    '../../../assets/img/PointSticker/Icon/rabbit.png',

    '../../../assets/img/PointSticker/Icon/butterfly.png',
    '../../../assets/img/PointSticker/Icon/butterflies.png',
    '../../../assets/img/PointSticker/Icon/daisy.png',
    '../../../assets/img/PointSticker/Icon/daisy1.png',
    '../../../assets/img/PointSticker/Icon/flower.png',
    '../../../assets/img/PointSticker/Icon/flower1.png',
    '../../../assets/img/PointSticker/Icon/flower2.png',
    '../../../assets/img/PointSticker/Icon/flower3.png',
    '../../../assets/img/PointSticker/Icon/flower4.png',
    '../../../assets/img/PointSticker/Icon/sunflower.png',
    
    '../../../assets/img/PointSticker/Icon/thumbs-up.png',
    '../../../assets/img/PointSticker/Icon/like1.png',
    '../../../assets/img/PointSticker/Icon/like3.png',

    '../../../assets/img/PointSticker/Icon/comic.png',
    '../../../assets/img/PointSticker/Icon/good-job.png',
    '../../../assets/img/PointSticker/Icon/wow.png',
    '../../../assets/img/PointSticker/Icon/yay2.png',
    ];
    //--------------------------- reward----------------------------

    this.rewardTheme = [
      { bg: '../../../assets/img/BgSticker/wow1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/wow2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/wow3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/wow4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/wow5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/wow6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/wow7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/wow8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/wow9.png', font: '#645232' },
    ];

    this.rewardIcon = [
      '../../../assets/img/RewardIcon/teddy-bear.png',
      '../../../assets/img/RewardIcon/art.png',
      '../../../assets/img/RewardIcon/polymer-clay.png',
      '../../../assets/img/RewardIcon/blocks.png',
      '../../../assets/img/RewardIcon/storage-box.png',
      '../../../assets/img/RewardIcon/donation.png',
      '../../../assets/img/RewardIcon/car.png',
      '../../../assets/img/RewardIcon/dino.png',
      '../../../assets/img/RewardIcon/duck.png',
      '../../../assets/img/RewardIcon/board-game.png',
      '../../../assets/img/RewardIcon/card-games.png',
      '../../../assets/img/RewardIcon/block.png',
      '../../../assets/img/RewardIcon/mystery.png',
      '../../../assets/img/RewardIcon/camping-tent.png',
      '../../../assets/img/RewardIcon/doll.png',
      '../../../assets/img/RewardIcon/dolls-house.png',
      '../../../assets/img/RewardIcon/doll-house.png',
      '../../../assets/img/RewardIcon/giftbox.png',
      '../../../assets/img/RewardIcon/gift.png',
      '../../../assets/img/RewardIcon/happy.png',
      '../../../assets/img/RewardIcon/stickers.png',
      '../../../assets/img/RewardIcon/rubik.png',
      '../../../assets/img/RewardIcon/toys1.png',
      '../../../assets/img/RewardIcon/toys.png',
      '../../../assets/img/RewardIcon/jigsaw.png',
      '../../../assets/img/RewardIcon/jigsaws.png',



      '../../../assets/img/RewardIcon/book.png',
      '../../../assets/img/RewardIcon/book-stack.png',
      '../../../assets/img/RewardIcon/books.png',
      '../../../assets/img/RewardIcon/pencil-case.png',
      '../../../assets/img/RewardIcon/colored-pencils.png',
      '../../../assets/img/RewardIcon/watercolor.png',
      '../../../assets/img/RewardIcon/pencils.png',
      '../../../assets/img/RewardIcon/pencil.png',
      '../../../assets/img/RewardIcon/school-bag.png',
      '../../../assets/img/RewardIcon/school-bag1.png',

      '../../../assets/img/RewardIcon/cotton-candy.png',
      '../../../assets/img/RewardIcon/ice-cream1.png', 
      '../../../assets/img/RewardIcon/ice-cream.png',
      '../../../assets/img/RewardIcon/cookies.png',
      '../../../assets/img/RewardIcon/cake.png',
      '../../../assets/img/RewardIcon/strawberry-cake.png',
      '../../../assets/img/RewardIcon/cupcake.png',
      '../../../assets/img/RewardIcon/cupcake2.png',
      '../../../assets/img/RewardIcon/donut.png',
      '../../../assets/img/RewardIcon/donut1.png',
      '../../../assets/img/RewardIcon/donut2.png',
      '../../../assets/img/RewardIcon/doughnut.png',
      '../../../assets/img/RewardIcon/gummy.png',
      '../../../assets/img/RewardIcon/chocolate.png',
      '../../../assets/img/RewardIcon/cocktail.png',
      '../../../assets/img/RewardIcon/bubble-tea.png',
      '../../../assets/img/RewardIcon/bubble-tea1.png',
      '../../../assets/img/RewardIcon/bubble-tea2.png',
      '../../../assets/img/RewardIcon/fruits.png',
      '../../../assets/img/RewardIcon/ikura.png',
      '../../../assets/img/RewardIcon/milk.png',
      '../../../assets/img/RewardIcon/sushi.png',
      '../../../assets/img/RewardIcon/sweets.png',
      '../../../assets/img/RewardIcon/chicken-leg.png',
      '../../../assets/img/RewardIcon/fried-chicken.png',
      '../../../assets/img/RewardIcon/fast-food.png',
      '../../../assets/img/RewardIcon/pizza.png',
      '../../../assets/img/RewardIcon/pizza1.png',

      '../../../assets/img/RewardIcon/pillow1.png',
      '../../../assets/img/RewardIcon/pillows.png',
      '../../../assets/img/RewardIcon/neck-pillow.png',
      '../../../assets/img/RewardIcon/pajamas.png',
      '../../../assets/img/RewardIcon/dress.png',
      '../../../assets/img/RewardIcon/dress1.png',
      '../../../assets/img/RewardIcon/t-shirt.png',
      '../../../assets/img/RewardIcon/tshirt.png',
      '../../../assets/img/RewardIcon/cap.png',
      '../../../assets/img/RewardIcon/party-hat1.png',
      '../../../assets/img/RewardIcon/santa-hat.png',
      '../../../assets/img/RewardIcon/winter-hat.png',
      '../../../assets/img/RewardIcon/witch-hat.png',

      '../../../assets/img/RewardIcon/dog.png',

      '../../../assets/img/RewardIcon/piggy-bank.png',
      '../../../assets/img/RewardIcon/coin.png',
    ];
  }

  activityIcon: any[];
  activityTheme: any[];

  selectedThemeActivity = -1;

  setActivitySticker(select: number) {
    this.selectedThemeActivity = select;
    console.log('set Theme complete!');
  }

  getActivityTheme() {
    const themeA = {
      activityTheme: this.activityTheme[this.selectedThemeActivity],
    };
    return themeA;
  }

  getAllActivityTheme() {
    return this.activityTheme;
  }

  getAllActivityIcon() {
    return this.activityIcon;
  }

  // ---------------------------------- Praise -----------------------------------------
  praiseTheme: any[];

  selectedThemepraise = -1;

  setpraiseSticker(select: number) {
    this.selectedThemepraise = select;
    console.log('set Theme complete!');
  }

  getpraiseTheme() {
    const themeA = { praiseTheme: this.praiseTheme[this.selectedThemepraise] };
    return themeA;
  }

  getAllpraiseTheme() {
    return this.praiseTheme;
  }

  // ---------------------------------- Feeling -----------------------------------------
  feelingTheme: any[];

  selectedThemefeeling = -1;

  setfeelingSticker(select: number) {
    this.selectedThemefeeling = select;
    console.log('set Theme complete!');
  }

  getfeelingTheme() {
    const themeA = {
      feelingTheme: this.feelingTheme[this.selectedThemefeeling],
    };
    return themeA;
  }

  getAllfeelingTheme() {
    return this.feelingTheme;
  }

  // --------------------------------- Point --------------------------------------------
  pointIcon: any[];
  pointBg: any[];

  getAllPointBg() {
    return this.pointBg;
  }

  getAllPointIcon() {
    return this.pointIcon;
  }
  // -------------------------------Reward---------------------------------------

  rewardIcon: any[];
  rewardTheme: any[];

  selectedThemereward = -1;

  setrewardSticker(select: number) {
    this.selectedThemereward = select;
    console.log('set Theme complete!');
  }

  getrewardTheme() {
    const themeA = { rewardTheme: this.rewardTheme[this.selectedThemereward] };
    return themeA;
  }

  getAllrewardTheme() {
    return this.rewardTheme;
  }

  getAllrewardIcon() {
    return this.rewardIcon;
  }

  // -------------------------- history ------------------------------
  historyIndex = 0;
  setHistoryIndex(index: number) {
    this.historyIndex = index;
  }

  getHistoryIndex() {
    return this.historyIndex;
  }

  // --------------------------- Tutorial -------------------------------------

  showTutorial = false;

  getshowtutorial() {
    return this.showTutorial;
  }

  setshowtutorial(show: boolean) {
    this.showTutorial = show;
  }
}
