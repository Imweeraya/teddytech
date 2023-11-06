import { Component } from '@angular/core';
import { CouponDataService } from 'src/app/services/coupon-data.service';

@Component({
  selector: 'couponDetail',
  templateUrl: './couponDetail.component.html',
  styleUrls: ['./couponDetail.component.css']
})
export class CouponDetail {

    constructor(
        private couponData : CouponDataService
        ){

    }

    get coupon(){
        return this.couponData.getcouponsByIndex(this.couponData.getCouponSelect());
    }

    

// ------------------------------------ Show tutorial-----------------------------------------------
  close(){
    this.couponData.setShowDetail(false);
  }



}
