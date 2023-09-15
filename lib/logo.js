setLogoProperties = (logoText, textColor, shape, shapeColor, backgroundColor) => {
  const logo = {
    logoText: logoText,
    textColor: textColor, 
    shape: shape,
    shapeColor: shapeColor,
    backgroundColor: backgroundColor
    };

  return logo;
}

module.exports = setLogoProperties;