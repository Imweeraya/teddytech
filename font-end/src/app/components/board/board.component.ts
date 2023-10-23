import {
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Sticker1 } from 'src/app/models/stickerModel/sticker.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board {
  selectedgenre: string;
  dataRows = new Array(5).fill({});

  constructor() {
    this.selectedgenre = 'Reward';
  }

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addBg = '';

  // ---------------------------- Activity Sticker -------------------------------------

  activityBg = '../../../assets/img/BgSticker/Diamon4.png';
  activity_fontColor = 'black';
  dataArray = ['ข้อความ1', 'ข้อความ2'];
  activity_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  activityData: any[] = [
    {
      text: 'Take a Shower',
      imageUrl: '../../../assets/img/ActivityIcon/shower.png',
    },
    {
      text: 'Help to water the plant',
      imageUrl: '../../../assets/img/ActivityIcon/watering-plants.png',
    },
    {
      text: 'Brush teeth',
      imageUrl: '../../../assets/img/ActivityIcon/tooth-brush.png',
    },
    {
      text: 'Make the bed',
      imageUrl: '../../../assets/img/ActivityIcon/make-the-bed.png',
    },
    {
      text: 'Drink milk',
      imageUrl: '../../../assets/img/ActivityIcon/milk-box.png',
    },
    {
      text: 'Wash your hands',
      imageUrl: '../../../assets/img/ActivityIcon/wash-your-hands.png',
    },
  ];

  stickertext = '';
  stickericon = '';

  // addActivity(){
  //   this.activity_sticked.unshift({
  //     text: this.stickertext,
  //     imageUrl: this.stickericon,
  //   },)
  //   this.activity_sticked.pop()
  // }

  addActivity() {
    for (let i = 0; i < this.activity_sticked.length; i++) {
      if (!this.activity_sticked[i].imageUrl) {
        this.activity_sticked[i] = {
          text: this.stickertext,
          imageUrl: this.stickericon,
        };
        break;
      }
    }
  }

  deleteActivity(index: number): void {
    if (index >= 0 && index < this.activity_sticked.length) {
      this.activity_sticked[index] = { text: '' };
    }
  }

  // deleteByIndex(indexToDelete: number ,array: any[]): void {
  //   if (indexToDelete >= 0 && indexToDelete < array.length) {
  //     array.splice(indexToDelete, 1);
  //   }
  // }

// --------------------------------Point Sticker---------------------------------------------
  pointData: any[] = [
    {
      icon: '../../../assets/img/PointSticker/Icon/heart.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
    },
    {
      icon: '../../../assets/img/PointSticker/Icon/star.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
    },
    {
      icon: '../../../assets/img/PointSticker/Icon/shooting-star.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
    },
  ];

  sun_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  mon_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  tue_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  wed_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  thu_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  fri_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  sat_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

  point_bg = '';
  point_icon = '';

  day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  currentday = 0;

  addPoint() {
    switch (this.currentday) {
      case 0:
        for (let i = 0; i < this.sun_sticked.length; i++) {
          if (!this.sun_sticked[i].icon) {
            this.sun_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 1:
        for (let i = 0; i < this.mon_sticked.length; i++) {
          if (!this.mon_sticked[i].icon) {
            this.mon_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 2:
        for (let i = 0; i < this.tue_sticked.length; i++) {
          if (!this.tue_sticked[i].icon) {
            this.tue_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 3:
        for (let i = 0; i < this.wed_sticked.length; i++) {
          if (!this.wed_sticked[i].icon) {
            this.wed_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 4:
        for (let i = 0; i < this.thu_sticked.length; i++) {
          if (!this.thu_sticked[i].icon) {
            this.thu_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 5:
        for (let i = 0; i < this.fri_sticked.length; i++) {
          if (!this.fri_sticked[i].icon) {
            this.fri_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
      case 6:
        for (let i = 0; i < this.sat_sticked.length; i++) {
          if (!this.sat_sticked[i].icon) {
            this.sat_sticked[i] = {
              icon: this.point_icon,
              bgImage: this.point_bg,
            };
            break;
          }
        }
        break;
    }
  }

  deletePoint(index: number): void {
    switch (this.currentday) {
      case 0:
    if (index >= 0 && index < this.sun_sticked.length) {
      this.sun_sticked[index] = { text: '' };
    }
    break;
    case 1:
    if (index >= 0 && index < this.mon_sticked.length) {
      this.mon_sticked[index] = { text: '' };
    }
    break;
    case 2:
    if (index >= 0 && index < this.tue_sticked.length) {
      this.tue_sticked[index] = { text: '' };
    }
    break;
    case 3:
    if (index >= 0 && index < this.wed_sticked.length) {
      this.wed_sticked[index] = { text: '' };
    }
    break;
    case 4:
    if (index >= 0 && index < this.thu_sticked.length) {
      this.thu_sticked[index] = { text: '' };
    }
    break;
    case 5:
    if (index >= 0 && index < this.fri_sticked.length) {
      this.fri_sticked[index] = { text: '' };
    }
    break;
    case 6:
    if (index >= 0 && index < this.sat_sticked.length) {
      this.sat_sticked[index] = { text: '' };
    }
    break;
  }
  }

  change_day_plus() {
    if (this.currentday < this.day.length - 1) {
      this.currentday++;
    } else {
      this.currentday = 0;
    }
  }

  change_day_minus() {
    if (this.currentday > 0) {
      this.currentday--;
    } else {
      this.currentday = this.day.length - 1;
    }
  }


// -------------------------------------Praise Sticker---------------------------------------------
praise_fontColor: string = '#dd689d';
praiseBg = '../../../assets/img/BgSticker/Heart8.png';

praise_data: any[] = [
  { text: 'I am so proud of you' },
  { text: 'You did a fantastic job!' },
  { text: 'Thank you for your help' },
  { text: 'I love you' },
  { text: 'Your help means a lot' },
  { text: 'You amaze me every day' },
]



praise_sticked: any[] = [
  { text: '' },
  { text: '' },
  { text: '' },
];

addPraise(index:number){
  for (let i = 0; i < this.praise_sticked.length; i++) {
    if (this.praise_sticked[i].text == '') {
      this.praise_sticked[i] = {
        text: this.praise_data[index].text,
      };
      break;
    }
  }
}

deletePraise(index: number): void {
  if (index >= 0 && index < this.praise_sticked.length) {
    this.praise_sticked[index] = { text: '' };
  }
}


// -------------------------------------Feeling Sticker---------------------------------------------
feeling_fontColor: string = '#947218';
feelingBg = '../../../assets/img/BgSticker/Star5.png';

feeling_data: any[] = [
  { text: 'Good !' },
  { text: 'Amazing !' },
  { text: 'Bored' },
  { text: 'Happy' },
  { text: 'Sleepy' },
  { text: 'Joyful' },
]



feeling_sticked: any[] = [
  { text: '' },
  { text: '' },
  { text: '' },
];

addFeeling(index:number){
  for (let i = 0; i < this.feeling_sticked.length; i++) {
    if (this.feeling_sticked[i].text == '') {
      this.feeling_sticked[i] = {
        text: this.feeling_data[index].text,
      };
      break;
    }
  }
}

deleteFeeling(index: number): void {
  if (index >= 0 && index < this.feeling_sticked.length) {
    this.feeling_sticked[index] = { text: '' };
  }
}

// -------------------------------------Reward Sticker---------------------------------------------

rewardBg = '../../../assets/img/BgSticker/wow2.png';
reward_fontColor = '#225E92';
reward_sticked: any[] = [
    { text: '' },
    { text: '' },
  ];
rewardData: any[] = [
    {
      text: 'Teddy doll',
      imageUrl: '../../../assets/img/RewardIcon/teddy-bear.png',
    },
    {
      text: 'New book',
      imageUrl: '../../../assets/img/RewardIcon/book.png',
    },
    {
      text: 'Cotton candy',
      imageUrl: '../../../assets/img/RewardIcon/cotton-candy.png',
    },
    {
      text: 'Ice cream',
      imageUrl: '../../../assets/img/RewardIcon/ice-cream1.png',
    },
    {
      text: 'New Pencil',
      imageUrl: '../../../assets/img/RewardIcon/pencil-case.png',
    },
    {
      text: 'New Toy',
      imageUrl: '../../../assets/img/RewardIcon/storage-box.png',
    },
  ];

  addReward(index:number){
    for (let i = 0; i < this.reward_sticked.length; i++) {
      if (this.reward_sticked[i].text == '') {
        this.reward_sticked[i] = {
          text: this.rewardData[index].text,
          imageUrl: this.rewardData[index].imageUrl
        };
        break;
      }
    }
  }
  
deleteReward(index: number): void {
    if (index >= 0 && index < this.reward_sticked.length) {
      this.reward_sticked[index] = { text: '' };
    }
  }
  
}