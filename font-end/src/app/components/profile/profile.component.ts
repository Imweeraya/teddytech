import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/auth-user.service';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  chart: Chart | undefined;
  showEditProfile: boolean = false;
  determinate1: number = 0;
  determinate2: number = 0;
  targetValue1: number = 60;
  targetValue2: number = 80;

  constructor(
    private userRepository: UserRepository,
    private profileStateService: ProfileService,
    private userDataService: UserDataService
  ) {}
  user: any = {};
  img: any = '';
  username: string = '';
  password: string = '';
  email: string = '';
  kid_name: string = '';
  activityPoint: any[] = [];

  kid_age: number = 0;
  activitiesCount = 0;
  stickersCount = 0;
  stickersPoint = 0;
  rewardCount = 0;

  ngOnInit(): void {
    // Fetch the user data when the component initializes
    this.userRepository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;
        this.username = this.user.username;
        this.password = this.user.password;
        this.img = this.user.imgProfile;
        this.email = this.user.email;
        this.kid_age = this.user.kid_age;
        this.kid_name = this.user.kid_name;
        this.activityPoint = this.user.activitySticked;
        this.stickersPoint = this.user.currentPoint;
        const totalStickers = [
          ...this.user.sunSticked,
          ...this.user.monSticked,
          ...this.user.tueSticked,
          ...this.user.wedSticked,
          ...this.user.thuSticked,
          ...this.user.friSticked,
          ...this.user.satSticked,
        ];

        this.activitiesCount = this.activityPoint.filter(
          (a: any) => a.imageUrl && a.imageUrl.trim() !== ''
        ).length;

        this.stickersCount = totalStickers.filter(
          (sticker) => sticker.icon && sticker.icon !== ''
        ).length;

        console.log(this.img);

        this.createChart();
      });

    this.profileStateService.showEditProfile$.subscribe((showEditProfile) => {
      this.showEditProfile = showEditProfile;
    });
    setInterval(() => {
      this.determinate1 = this.targetValue1;
    }, 500);
    setInterval(() => {
      this.determinate2 = this.targetValue2;
    }, 600);
  }

  editProfile(): void {
    this.profileStateService.updateShowEditProfile(true);
  }

  addNewBoard() {
    Swal.fire({
      title: 'Board Full',
      text: 'Your board is full. Please subscribe to add more boards.',
      icon: 'error',
    });
  }

  createChart() {
    const xValues = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

    const chartData = {
      labels: xValues,
      datasets: [
        {
          label: 'Task',
          data: [20, 15, 27, 19, 9],
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'Done',
          data: [3, 13, 23, 19, 6],
          borderColor: 'green',
          fill: false,
        },
        {
          label: 'Points',
          data: [9, 30, 55, 54, 18],
          borderColor: 'blue',
          fill: false,
        },
      ],
    };

    const canvasElement = document.getElementById(
      'myChart'
    ) as HTMLCanvasElement;

    if (canvasElement) {
      if (this.chart) {
        this.chart.data = chartData;
        this.chart.update();
      } else {
        this.chart = new Chart(canvasElement, {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }

  //------------------------------------------------------------

  slides = [
    { image: '../../../assets/img/ads/ADS1.png' },
    { image: '../../../assets/img/ads/ADS2.png' },
    { image: '../../../assets/img/ads/ADS3.png' },
    { image: '../../../assets/img/ads/ADS4.png' },
    { image: '../../../assets/img/ads/ADS5.png' },
    { image: '../../../assets/img/ads/ADS6.png' },
    { image: '../../../assets/img/ads/ADS7.png' },
    { image: '../../../assets/img/ads/ADS8.png' },
  ];

  coupons = [
    {
      shop: "Kiddo Toys",
      product: "Action Figure",
      discount: "20%",
      details: "Get a 20% discount on action figures at Kiddo Toys with code 'kiddo20action'.",
      code: "Teddytech512"
    },
    {
      shop: "Super Playland",
      product: "Playhouse",
      discount: "15%",
      details: "Enjoy 15% off on playhouses at Super Playland using code 'play15house'.",
      code: "Teddy_tech222"
    },
    {
      shop: "Sweet Treats for Kids",
      product: "Candy Bag",
      discount: "10%",
      details: "Treat your kids with a 10% discount on candy bags at Sweet Treats for Kids with code 'kidscandy10'.",
      code: "TeddytechSweet582"
    },
    {
      shop: "Kids' Fashion World",
      product: "Children's Clothes",
      discount: "25%",
      details: "Dress your little ones in style with 25% off on children's clothes at Kids' Fashion World using code 'kids25fashion'.",
      code: "Teddytechkidy555"
    }
  ]

    itemsPerPage: number = 1;
    currentPage: number = 1;

    getDataForPage(page: number): any[] {
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.coupons.slice(startIndex, endIndex);
      }
    
      changePage(offset: number): void {
        this.currentPage += offset;
      }
    
      get totalNumberOfPages(): number {
        return Math.ceil(this.coupons.length / this.itemsPerPage);
    }

    getPageNumbers(): number[] {
        return Array(this.totalNumberOfPages).fill(0).map((_, index) => index + 1);
      }


}
