export const fakeAPI = (response, time) =>
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve(response);
    }, time);
  }).then(function (result) {
    return result;
  });
