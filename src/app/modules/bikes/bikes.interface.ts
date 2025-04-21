
export enum Brand {
    KTM = "KTM",
    HONDA = "HONDA",
    SUZUKI = "SUZUKI",
    YAMAHA = "YAMAHA",
    TVS = "TVS",
    KAWASAKI = "KAWASAKI",
    DUCATI = "DUCATI",
    ROYAL_ENFIELD = "ROYAL_ENFIELD",
    BAJAJ = "BAJAJ",
  }


export  interface IBike{
brand: Brand
model: string;
year: number;
customerId: string;
}
