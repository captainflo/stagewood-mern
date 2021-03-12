// prod.js - production keys here!!!
module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  secret: process.env.SECRET,
  cloudinaryClientName: process.env.CLOUDINARY_NAME,
  cloudinaryClientID: process.env.CLOUDINARY_CLIENT_ID,
  cloudinaryClientSecret: process.env.CLOUDINARY_CLIENT_SECRET,
};
