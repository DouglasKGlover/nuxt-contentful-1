const contentful = require("contentful");
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  host: process.env.CTF_HOST
};

module.exports = {
  createClient() {
    return contentful.createClient(config);
  }
};
