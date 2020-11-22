axios.get('https://api.github.com/users/botomniac')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    })