let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewclosed = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\hNormal_Held.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
});

Scenario('ProcessView Normal Held', ({ I }) => {
    Processviewclosed.OpenTrans('Normal Held')
//View split
//Split
//Process
    Processviewclosed.ReprocessButton()
    Processviewclosed.ViewButton()
    //Processviewclosed.CommentsButton()
    Processviewclosed.SaveasButton()
    //Processviewclosed.CopyAdd()
    Processviewclosed.AdvancedSort()
    Processviewclosed.HistorySort()
    //Processviewclosed.MatrixAnalysis()
});
    