import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/auth-user.service';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Chart from 'chart.js/auto';
import { CouponDataService } from 'src/app/services/coupon-data.service';

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
  check: number = 0;

  constructor(
    private userRepository: UserRepository,
    private profileStateService: ProfileService,
    private userDataService: UserDataService,
    private couponData: CouponDataService
  ) {
    this.coupons = this.couponData.getcoupons();
  }
  user: any = {};
  img: any = '';
  username: string = '';
  password: string = '';
  email: string = '';
  kid_name: string = '';
  historyData: any[] = [];
  pointA: number = 0;
  pointB: number = 0;
  currentPoint: number = 0;
  xValues: any = [];
  allPoints: any = [];
  activityCounts: any = [];
  historyCounts: any = [];

  activityPoint: any[] = [];
  startDate: string = '';
  endDate: string = '';
  historyCountNum: number = 0;
  activityHistoryCountNum: number = 0;
  kid_age: number = 0;
  activitiesCount = 0;
  stickersCount = 0;
  stickersPoint = 0;
  rewardCount = 0;

  ngOnInit(): void {
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
        this.historyData = this.user.stickerHistory;
        this.pointA = this.user.pointA;
        this.pointB = this.user.pointB;
        this.currentPoint = this.user.currentPoint;

        const totalStickers = [
          ...this.user.sunSticked,
          ...this.user.monSticked,
          ...this.user.tueSticked,
          ...this.user.wedSticked,
          ...this.user.thuSticked,
          ...this.user.friSticked,
          ...this.user.satSticked,
        ];
        if (this.pointA <= this.stickersPoint) {
          this.rewardCount = this.rewardCount + 1;
        }
        if (this.pointB <= this.stickersPoint) {
          this.rewardCount = this.rewardCount + 1;
        }
        this.activitiesCount =
          this.activityPoint.filter(
            (a: any) => a.imageUrl && a.imageUrl.trim() !== ''
          ).length * 7;
        this.stickersCount = totalStickers.filter(
          (sticker) => sticker.icon && sticker.icon !== ''
        ).length;

        if (this.activitiesCount !== 0) {
          this.xValues.unshift('Now');
          this.activityCounts.unshift(this.activitiesCount);
          if (this.currentPoint !== 0) {
            this.allPoints.unshift(this.currentPoint);
          }
          if (this.stickersCount !== 0) {
            this.historyCounts.unshift(this.stickersCount);
          }
        }
       

        this.getHistoryValue();
        this.calcuTask();
      });

    this.profileStateService.showEditProfile$.subscribe((showEditProfile) => {
      this.showEditProfile = showEditProfile;
    });
  }

  editProfile(): void {
    this.profileStateService.updateShowEditProfile(true);
  }

  getHistoryValue() {
    for (
      let historyIndex = 0;
      historyIndex < this.historyData.length;
      historyIndex++
    ) {
      const startDate = this.user.stickerHistory[historyIndex].startDate;
      const allpoint = this.user.stickerHistory[historyIndex].allpoint;
      const rewardA = this.user.stickerHistory[historyIndex].rewardA.point;
      const rewardB = this.user.stickerHistory[historyIndex].rewardB.point;
      const activityHistory =
        this.user.stickerHistory[historyIndex].activitySticked;
      const totalHistory = [
        ...this.user.stickerHistory[historyIndex].sunSticked,
        ...this.user.stickerHistory[historyIndex].monSticked,
        ...this.user.stickerHistory[historyIndex].tueSticked,
        ...this.user.stickerHistory[historyIndex].wedSticked,
        ...this.user.stickerHistory[historyIndex].thuSticked,
        ...this.user.stickerHistory[historyIndex].friSticked,
        ...this.user.stickerHistory[historyIndex].satSticked,
      ];

      if (rewardA <= allpoint) {
        this.rewardCount = this.rewardCount + 1;
      }
      if (rewardB <= allpoint) {
        this.rewardCount = this.rewardCount + 1;
      }

      const historyCount = totalHistory.filter(
        (sticker) => sticker.icon && sticker.icon !== ''
      ).length;
      const activityHistoryCount =
        activityHistory.filter(
          (a: any) => a.imageUrl && a.imageUrl.trim() !== ''
        ).length * 7;
      this.historyCountNum = this.historyCountNum + historyCount;
      this.activityHistoryCountNum =
        this.activityHistoryCountNum + activityHistoryCount;

      if (this.check < 6) {
        const dateObj = new Date(startDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
        });
        this.xValues.unshift(formattedDate);
        this.allPoints.unshift(allpoint);
        this.activityCounts.unshift(activityHistoryCount);
        this.historyCounts.unshift(historyCount);
        this.check = this.check + 1;
      }
    }

    const chartData = {
      labels: this.xValues,
      datasets: [
        {
          label: 'Activity',
          data: this.activityCounts,
          borderColor: 'skyblue', // Change the color to sky blue
          fill: true,
        },
        {
          label: 'Done',
          data: this.historyCounts,
          borderColor: 'lightgreen', // Change the color to light green
          fill: false,
        },
        {
          label: 'Points',
          data: this.allPoints,
          borderColor: 'pink', // Change the color to pink
          fill: false,
        },
      ],
    };

    this.createChart(chartData);
  }

  createChart(chartData: any) {
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

  calcuTask() {
    setInterval(() => {
      this.determinate1 = Math.floor(
        (this.stickersCount / this.activitiesCount) * 100
      );
    }, 300);

    setInterval(() => {
      this.determinate2 = Math.floor(
        (this.historyCountNum / this.activityHistoryCountNum) * 100
      );
    }, 400);
  }

  getProgressBarColor(percentage: number) {
    if (percentage < 25) {
      return 'lightpink';
    } else if (percentage < 50) {
      return 'lightsalmon';
    } else if (percentage < 75) {
      return 'lightyellow';
    } else {
      return 'lightgreen';
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

  coupons: any[];
  selectIndexCoupon = this.couponData.getCouponSelect();

  get showDetail() {
    return this.couponData.getShowDetail();
  }
  detail(index: number) {
    const chooseIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    this.couponData.setCouponSelect(chooseIndex);
    this.couponData.setShowDetail(true);
  }

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
    return Array(this.totalNumberOfPages)
      .fill(0)
      .map((_, index) => index + 1);
  }
}
