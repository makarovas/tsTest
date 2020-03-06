// // interface Rect {
// //   readonly id: string;
// //   color?: string;
// //   size: {
// //     width: number;
// //     height: number;
// //   };
// // }

// // const react1: Rect = {
// //   id: "1234",
// //   size: {
// //     width: 29,
// //     height: 30
// //   },
// //   color: "#ccc"
// // };

// // const rect3 = {} as Rect;
// // const rect4 = <Rect>{};

// // interface RectWithArea extends Rect {
// //   getArea: () => number;
// // }

// // const rect5: RectWithArea = {
// //   id: "1234",
// //   size: {
// //     width: 29,
// //     height: 30
// //   },
// //   getArea(): number {
// //     return this.size.width * this.size.height;
// //   }
// // };

// interface IClock {
//   time: Date;
//   setTime(date: Date): void;
// }

// interface Styles {
//   [key: string]: string;
//   border: string;
// }

// const css: Styles = {
//   border: "1px solid black",
//   marginTop: "2px"
// };

// enum Membership {
//   Simple,
//   Standard
// }

// const membmership = Membership.Standard;
// console.log(membmership);

// enum SocialMedia {
//   vk = "vk.com",
//   facebook = "facebook.com"
// }

// const social = SocialMedia.vk;
// console.log(social);
