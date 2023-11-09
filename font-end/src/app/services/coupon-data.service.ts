import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouponDataService {
  constructor() {
    this.coupons = [
      {
        shop: "Kiddo Toys",
        product: "Action Figure",
        discount: "20%",
        details: "Get a 20% discount on action figures at Kiddo Toys.",
        code: "KIDDO20ACTION",
        img: "../../../assets/img/coupons/coupon1.png"
      },
      {
        shop: "Super Playland",
        product: "Playhouse",
        discount: "15%",
        details: "Enjoy 15% off on playhouses at Super Playland.",
        code: "PLAY15HOUSE",
        img: "../../../assets/img/coupons/coupon2.png"
      },
      {
        shop: "Sweet Treats for Kids",
        product: "Candy Bag",
        discount: "10%",
        details: "10% discount on candy bags at Sweet Treats for Kids.",
        code: "KIDSSCANDY10",
        img: "../../../assets/img/coupons/coupon3.png"
      },
      {
        shop: "Kids' Fashion World",
        product: "Children's Clothes",
        discount: "25%",
        details: "25% off on children's clothes at Kids' Fashion World.",
        code: "kIDS25FASHION",
        img: "../../../assets/img/coupons/coupon4.png"
      }
    ]
  }

  coupons: any[];

  getcoupons(){
    return this.coupons;
  }

  getcouponsByIndex(index:number){
    return this.coupons[index];
  }

  indexCoupon = 0;
  showdetail = false;

  setCouponSelect(index:number){
    this.indexCoupon = index; 
  } 
  
  getCouponSelect(){
    return this.indexCoupon;
  }

  setShowDetail(show:boolean){
    this.showdetail = show;
  }

  getShowDetail(){
    return this.showdetail;
  }
  
}