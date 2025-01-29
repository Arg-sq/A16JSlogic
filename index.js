// const response = {
//   meta: {
//     reponseStatus: 200,
//     message: "auth verfied",
//   },
//   data: {
//     data: {
//       isAdmin: true,
//       id: 1,
//       education: [
//         { name: "+2", year: 2012, status: "pass" },
//         { name: "Bsc", year: 2015, status: "pass" },
//         { name: "Msc", year: 2018, status: "fail" },
//       ],
//     },
//   },
// };
// const {
//   meta: { reponseStatus },
//   data,
// } = response;

// const adminValue = data.data.isAdmin;
// const responseStatus = reponseStatus;

// const myPassedEduDetail = (admin, responseCode) => {
//   let myEducArr = [];
//   if (admin && responseCode === 200) {
//     response.data.data.education
//       .filter((edu) => edu.status === "pass")
//       .map((edu) => myEducArr.push(edu.name));
//     return myEducArr;
//   } else {
//     return myEducArr;
//   }
// };
// console.log(myPassedEduDetail(adminValue, responseStatus));

// const checkAPIValidation = () => {
//   console.log(response);
// };
// responseCode === 200 ? console.log("success") : console.log("failed");

// checkAPIValidation();
// const isAdmin = reponse?.data?.data?.isAdmin || false;

// const showEducToAdmin = (response) => {
//   const calculateArr = [];
//   if (isAdmin && response) {
//     response.data?.data?.education.map((item) => {
//       calculateArr.push(item.name);
//     });
//     return calculateArr;
//   } else {
//     return calculateArr;
//   }
// };
// console.log(showEducToAdmin(reponse));

// console.log([] == []);
console.log("5" + +3);
