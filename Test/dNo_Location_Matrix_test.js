let data = require("C:\\Users\\LADM09373\\Pinpoint\\Data\\testdata.js")
let login = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\Login_Objects.js")
let Processviewlocmtrx = require("C:\\Users\\LADM09373\\Pinpoint\\Page_Objects\\dNo_Location_Matrix.js")

 Feature('Pinpoint Application');
 Before(async ({ I }) => {
     I.amOnPage("/");
    login.Login(data.credential.Username, data.credential.Password);   
 });

 Scenario('ProcessView No Location mtrx', ({ I }) => {
    Processviewlocmtrx.OpenTrans('No Location Matrix')
    //Processviewlocmtrx.SplitButton()
    //Processviewlocmtrx.ProcessButton()
    Processviewlocmtrx.ReprocessButton()
    Processviewlocmtrx.ApplyButton()
    //Processviewlocmtrx.UpdateButton()
    Processviewlocmtrx.EditButton()
    Processviewlocmtrx.ViewButton()
     //Processviewlocmtrx.CommentsButton()
     Processviewlocmtrx.SaveasButton()
     Processviewlocmtrx.AdvancedSort()
     Processviewlocmtrx.HistorySort()
     Processviewlocmtrx.MatrixAnalysis()
 });
    