export class Coupon {
   
    public constructor(
        public id?:number,
        public companyId?:number,
        public categeory?:string,
        public title?:string,
        public descrription?:string,
        public startDate?:Date,
        public endDate?:Date,
        public amount?:number,
        public price?:number,
        public image?:string


    ) {}

  }