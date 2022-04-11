let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewopen = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\aTransactions_Open.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
});

Scenario('ProcessView Open', ({ I }) => {
    Processviewopen.OpenTrans()
    Processviewopen.ReprocessButton()
    //Processviewopen.UpdateButton()
    Processviewopen.EditButton()
    Processviewopen.ViewButton()
    //Processviewopen.SuspendButton()
    //Processviewopen.HoldButton()
    //Processviewopen.CommentsButton()
    Processviewopen.SaveasButton()
    //Processviewopen.CopyAdd()
    Processviewopen.AdvancedSort()
    Processviewopen.HistorySort()
    //Processviewopen.MatrixAnalysis()
});
    