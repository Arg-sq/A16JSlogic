const reponse = {
  meta: {
    reponseStatus: 200,
    message: "auth verfied",
  },
  data: {
    data: {
      isAdmin: true,
      id: 1,
      education: [
        { name: "+2", year: 2012 },
        { name: "Bsc", year: 2015 },
        { name: "Msc", year: 2018 },
      ],
    },
  },
};
const isAdmin = reponse?.data?.data?.isAdmin || false;

const showEducToAdmin = (response) => {
  const calculateArr = [];
  if (isAdmin && response) {
    response.data?.data?.education.map((item) => {
      calculateArr.push(item.name);
    });
    return calculateArr;
  } else {
    return calculateArr;
  }
};
console.log(showEducToAdmin(reponse));
