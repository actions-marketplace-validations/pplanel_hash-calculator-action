let hasher = function (input_str) {
  return new Promise((resolve) => {
    if (typeof input_str !== 'string') {
      throw new Error('milliseconds not a number')
    }


    var hashed_string = CryptoJS.MD5(input_str)

    resolve(hashed_string)

  });
};

module.exports = hasher;
