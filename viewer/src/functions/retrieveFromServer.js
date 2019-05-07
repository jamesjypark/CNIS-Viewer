export default () => {
  fetch("http://192.168.0.13:3000/server.js/PatientInfo", {
    method: "GET"
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    });
};
