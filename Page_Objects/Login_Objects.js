const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: {
    username: "//input[@id='LoginForm:userControl']",
    password: "//input[@id='LoginForm:pwdControl']",
    login: "//a[@id='LoginForm:btnLogin']",

  },

  Login(user_name, Pass) {
    I.fillField(this.locators.username, user_name);
    I.fillField(this.locators.password, Pass);
    I.click(this.locators.login);

  },


}