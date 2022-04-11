let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewexempt = require("../Page_Objects/bTransactions_Exempt.js")
//let excel = require("../Page_Objects/Transactions_Exempt.js")

Feature('Pinpoint Application');
Before(async ({ I }) => {
    I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);
});



Scenario('ProcessView Exempt', ({ I }) => {
    // var td = excel.read_from_excel('C:\\Users\\LADM09373\\Pinpoint\\Data\\Pinpoint_Data.xlsx', 'comnts');
    //td.forEach(function (value) {
        Processviewexempt.OpenTrans()
        Processviewexempt.ReprocessButton()
        //Processviewexempt.UpdateButton //(value.comments)
        Processviewexempt.EditButton()
        Processviewexempt.ViewButton()
        //Processviewexempt.SuspendButton()
        //Processviewexempt.HoldButton()
        //Processviewexempt.CommentsButton()
        Processviewexempt.SaveasButton()
        //Processviewexempt.CopyAdd()
        Processviewexempt.AdvancedSort()
        Processviewexempt.HistorySort()
        Processviewexempt.MatrixAnalysis()
    
});
