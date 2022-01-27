let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processview = require("./Page_Objects/Transactions_Open.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
});
Scenario('ProcessView Open', ({ I }) => {
    Processview.OpenTrans()
    Processview.ReprocessButton()
    Processview.UpdateButton()
    Processview.EditButton()
    Processview.ViewButton()
    //Processview.SuspendButton()
    //Processview.HoldButton()
    //Processview.CommentsButton()
    Processview.SaveasButton()
    Processview.CopyAdd()
    Processview.AdvancedSort()
    Processview.HistorySort()
    Processview.MatrixAnalysis()

});
    