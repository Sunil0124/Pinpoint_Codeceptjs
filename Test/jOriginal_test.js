let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewclosed = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\jOriginal.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
});

Scenario('ProcessView Original', ({ I }) => {
    Processviewclosed.OpenTrans('Original')
//View split
    Processviewclosed.ViewButton()
    //Processviewclosed.CommentsButton()
    Processviewclosed.SaveasButton()
    Processviewclosed.AdvancedSort()
    Processviewclosed.HistorySort()
    //Processviewclosed.MatrixAnalysis()
});
    