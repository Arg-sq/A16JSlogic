// // const response = {
// //   meta: {
// //     reponseStatus: 200,
// //     message: "auth verfied",
// //   },
// //   data: {
// //     data: {
// //       isAdmin: true,
// //       id: 1,
// //       education: [
// //         { name: "+2", year: 2012, status: "pass" },
// //         { name: "Bsc", year: 2015, status: "pass" },
// //         { name: "Msc", year: 2018, status: "fail" },
// //       ],
// //     },
// //   },
// // };
// // const {
// //   meta: { reponseStatus, message },
// //   data,
// // } = response;
// // const {
// //   meta: { reponseStatus },
// //   data,
// // } = response;

// // const adminValue = data.data.isAdmin;
// // const responseStatus = reponseStatus;

// // const myPassedEduDetail = (admin, responseCode) => {
// //   let myEducArr = [];
// //   if (admin && responseCode === 200) {
// //     response.data.data.education
// //       .filter((edu) => edu.status === "pass")
// //       .map((edu) => myEducArr.push(edu.name));
// //     return myEducArr;
// //   } else {
// //     return myEducArr;
// //   }
// // };
// // console.log(myPassedEduDetail(adminValue, responseStatus));

// // const checkAPIValidation = () => {
// //   console.log(response);
// // };
// // responseCode === 200 ? console.log("success") : console.log("failed");

// // checkAPIValidation();
// // const isAdmin = reponse?.data?.data?.isAdmin || false;

// // const showEducToAdmin = (response) => {
// //   const calculateArr = [];
// //   if (isAdmin && response) {
// //     response.data?.data?.education.map((item) => {
// //       calculateArr.push(item.name);
// //     });
// //     return calculateArr;
// //   } else {
// //     return calculateArr;
// //   }
// // };
// // console.log(showEducToAdmin(reponse));

// // console.log([] == []);
// // console.log(5 + -"3");

// const APIResponse = {
//   meta: {
//     paginationData: {
//       totalData: 120,
//       curentPage: 3,
//       pageCount: 12,
//       perPageDataLimit: 10,
//     },
//     responseCode: 200,
//     message: "Table data fetched successfully",
//   },
//   data: {
//     data: {
//       id: "!xoU875",
//       category: "valentine",
//       days: [
//         { day: 1, name: "rose day", gift: null },
//         { day: 2, name: "gift day", gift: "abc" },
//         { day: 3, name: "hug day", gift: null },
//         { day: 4, name: "chocolate day", gift: null },
//         { day: 5, name: "kiss day", gift: null },
//         { day: 6, name: "Propose day", gift: "teddy" },
//         { day: 7, name: "Valentine day", gift: null },
//       ],
//     },
//   },
// };

// const {
//   meta,
//   data: { data },
// } = APIResponse;

// const dayCategory = data.category;
// const valentinesDays = data.days;

// const filterFalsyValue = () => {
//   const response = valentinesDays.filter((day) => day.gift);
//   console.log(response);
// };
// filterFalsyValue();
// // const ValentinesResponse = () => {
// //   if (dayCategory === "valentine") {
// //     let giftCount = 0;
// //     valentinesDays.forEach((day) => {
// //       day.gift && giftCount++;
// //     });
// //     if (giftCount >= 1) {
// //       console.log("propsoal accepted");
// //     } else {
// //       console.log("rejected");
// //     }
// //   }
// // };

// // ValentinesResponse();

const arr = [1, 2, 3, 2, 4, 2, 6];

const arrMethods = () => {
  // arr.push(7) last ma element add garxa
  // arr.unshift(0); 1st element ma add garxa
  // arr.pop(); last ko element hataedinxa
  // arr.shift(); 1st element hataedeo
  // const slicedArr = arr.slice(1, 3);
  // arr.splice(1, 3);
  // const result = arr.find((num) => num === 2);
  const result = arr.slice(-3);
  return result;
};
console.log(arrMethods());

const crush = "techspire";
const rawData = [
  { day: 1, name: "rose day", gift: null, auraPoint: 10, approacher: "yubina" },
  {
    day: 2,
    name: "gift day",
    gift: "abc",
    auraPoint: 0,
    approacher: "aakriti",
  },
  { day: 3, name: "hug day", gift: null, auraPoint: 20, approacher: "sital" },
  {
    day: 4,
    name: "chocolate day",
    gift: null,
    auraPoint: 100,
    approacher: "lakhe",
  },
  {
    day: 5,
    name: "kiss day",
    gift: null,
    auraPoint: 50,
    approacher: "teschspire",
  },
  {
    day: 6,
    name: "Propose day",
    gift: "teddy",
    auraPoint: 1,
    approacher: "dikshen",
  },
  {
    day: 7,
    name: "Valentine day",
    gift: null,
    auraPoint: 70,
    approacher: "techspire",
  },
];
const proposalReusult = () => {
  const resultData = rawData.slice(-3);
  let giftCount = 0;
  resultData.forEach((day) => day.gift && giftCount++);
  if (giftCount >= 1) {
    console.log("accepted");
  } else {
    console.log("rejected");
  }
};
