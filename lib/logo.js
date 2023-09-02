let logo = {
  logoText: '',
  shape: ''
};

setLogoProperties = (logoText, shape) => {
  logo.logoText = logoText;
  logo.shape = shape;
  console.log('here is the logo object>>>>>>>>>>>>>>')
  console.log(JSON.stringify(logo));
}

module.exports = setLogoProperties;