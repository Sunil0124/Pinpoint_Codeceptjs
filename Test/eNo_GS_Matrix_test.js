let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewclosed = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\eNo_GS_Matrix.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
});

Scenario('ProcessView No GS mtrx', ({ I }) => {
    Processviewclosed.OpenTrans('No G&S Matrix')
    Processviewclosed.ReprocessButton()
    Processviewclosed.UpdateButton()
    Processviewclosed.EditButton()
    Processviewclosed.ViewButton()
    //Processviewclosed.SuspendButton()
    //Processviewclosed.CommentsButton()
    Processviewclosed.SaveasButton()
    Processviewclosed.AdvancedSort()
    Processviewclosed.HistorySort()
});
    