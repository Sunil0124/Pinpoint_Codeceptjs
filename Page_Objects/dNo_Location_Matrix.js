const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: { //page object     
      transactions: ".transactions",
      processview: "Process/View",
      clearbtn: "//a[@id='filterForm:btnClear']",
      transstatus: "//select[@id='filterForm:statusMenu']",
      searchbtn: "//a[@id='filterForm:searchBtn']",
      selopentrans1: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      splitbutton: "//a[@id='transForm:splitBtn']", //split button
      vieworiginal: "//a[@id='matrixDetailForm:viewOriginalBtn']",
      okbutton: "//a[@id='purchaseTransForm:btnOk']",
      globaljursplit: "//a[@id='matrixDetailForm:jurisSplitBtn']",
      jurstiction: "//input[@id='matrixDetailForm:fieldsearch_0']",
      seljurs:"//div[@id='table-four-content']//table//tbody//tr",
      jurisokbutton: "//a[@id='jurisdictionform:okBtn']",
      allocpercent: "//input[@id='matrixDetailForm:fieldvalueWhen_0']",
      okbtn: "//a[@id='matrixDetailForm:okBtn']",
      cnclbtn: "//a[@id='matrixDetailForm:cancelBtn']",
      selectloctrans: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      reprocessbtn: "//a[@id='transForm:reprocessBtn']", //reprocessbutton
      isee1: "Gl Company Nbr:",
      reprocessokbtn: "//a[@id='transModifyForm:btnOkreprocess']",
      selopentrans2: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      updatebtn: "//a[@id='transForm:updateBtn']", //update button
      isee2: "Gl Company Nbr:",
      seltaxcode: "//select[@id='transModifyForm:_taxcode_code']",
      searchjuris: "//input[@id='transModifyForm:jurisInput1_search']",
      seljuris: "United States (US)",
      jurisokbtn: "//a[@id='jurisdictionform:okBtn']",
      updateokbtn: "//a[@id='transModifyForm:btnOk']",
      selopentrans3: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      editbtn: "//a[@id='transForm:editBtn']", //Edit Button
      isee3: "Edit",
      editokbtn: "//a[@id='purchaseTransForm:btnOk']",
      selopentrans4: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      viewbtn: "//a[@id='transForm:viewBtn']", //View Button
      isee4: "View",
      viewokbtn: "//a[@id='purchaseTransForm:btnOk']",
      selopentrans5: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      commentsbtn: "//a[@id='transForm:commentsBtn']", //Comments Button
      isee7: "Comments",
      insertdatetime: "//input[@id='commentsForm:btnInsertDateTime']",
      commentsokbtn: "//input[@id='commentsForm:okBtn']", 
      selopentrans8: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      saveasbtn: "//a[@id='transForm:saveAS']", //SaveAs
      isee8: "Created File Name:",
      saveasokbtn: "//a[@id='transactionBlobAddForm:addBtn']",
      isee9: "Batch ID:",
      transactions1: ".transactions",
      processview1: "Process/View",
      selopentrans9: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      advsortbtn: "//a[@id='transForm:advSortBtn']", //Advance Sort
      //isee11: "//span[contains(text(),'Sort Columns')]",
      sorting: "//tbody[@id='advancedSortForm:columnItemListId:tb']//tr[1]",
      assign: "//input[@id='advancedSortForm:btnAssign']",
      sorting1: "//tbody[@id='advancedSortForm:columnItemListId:tb']//tr[1]",
      assign1: "//input[@id='advancedSortForm:btnAssign']",
      sortback: "//tbody[@id='advancedSortForm:sortItemListId:tb']//tr",
      remove: "//input[@id='advancedSortForm:btnRemove']",
      removeall: "//input[@id='advancedSortForm:btnRemoveAll']",
      advancesortokbtn: "//a[@id='advancedSortForm:okAction']",
      selopentrans11: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      historybtn: "//a[@id='transForm:historyBtn']", //History Sort
      isee12: "View Purchase Transaction History",
      seltrans: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]",
      viewbtn1: "//a[@id='transLogForm:viewBtn']",
      viewokbtn1: "//a[@id='purchaseTransLogForm:btnOk']",
      closebtn: "//a[@id='transLogForm:btnClose']",
      selopentrans12: "//div[@id='table-four-content']//table//tbody//tr[1]//td[1]//input",
      matrixanalysisBtn: "//a[@id='transForm:matrixanalysisBtn']", //Matrix Analysis
      //isee13: "//input[@id='transactionmatrixCompareForm:transactionid']",
      closebtn1: "//a[@id='transactionmatrixCompareForm:btnClose']",


  },

  OpenTrans(){
      I.waitForNavigation()
      I.moveCursorTo(this.locators.transactions)
      I.click(this.locators.processview)
      I.waitForNavigation()
      I.click(this.locators.clearbtn)
      I.selectOption(this.locators.transstatus, 'No Location Matrix')
      I.click(this.locators.searchbtn)
      I.waitForElement(this.locators.selopentrans1, 10)
      //I.wait(10)
      I.click(this.locators.selopentrans1)
  },

  SplitButton(){
    I.click(this.locators.splitbutton)
    I.waitForNavigation()
    I.click(this.locators.vieworiginal)
    I.waitForNavigation()
    I.click(this.locators.okbutton)
    I.waitForNavigation()
    I.click(this.locators.globaljursplit)
    I.waitForNavigation()
    I.click(this.locators.jurstiction)
    I.waitForNavigation()
    I.click(this.locators.seljurs)
    I.click(this.locators.jurisokbutton)
    I.waitForNavigation()
    I.clearField(this.locators.allocpercent)
    I.fillField(this.locators.allocpercent, 1)
    I.click(this.locators.okbtn)
    I.waitForNavigation()
    I.click(this.locators.cnclbtn)
    I.click(this.locators.selectloctrans)


  },
  //ProcessButton()
  ReprocessButton(){
    I.click(this.locators.reprocessbtn)
    I.waitForNavigation()
    I.see(this.locators.isee1)
    I.click(this.locators.reprocessokbtn)
    I.waitForNavigation()
    I.click(this.locators.selopentrans2)
  },
 //Apply
  UpdateButton(){
    I.click(this.locators.updatebtn)
    I.waitForNavigation()
    I.see(this.locators.isee2)
    I.wait(5)
    I.selectOption(this.locators.seltaxcode, '01000000.00000000 - CPN_seg')
    I.click(this.locators.searchjuris)
    I.waitForNavigation()
    I.click(this.locators.seljuris)
    I.wait(5)
    I.click(this.locators.jurisokbtn)
    I.waitForNavigation()
    I.click(this.locators.updateokbtn)
    I.waitForNavigation()
    I.click(this.locators.selopentrans3)
  },

  EditButton(){
    I.click(this.locators.editbtn)
    I.waitForNavigation()
    I.see(this.locators.isee3)
    I.click(this.locators.editokbtn)
    I.waitForNavigation()
    I.click(this.locators.selopentrans4)
  },

  ViewButton(){
    I.click(this.locators.viewbtn)
    I.waitForNavigation()
    I.see(this.locators.isee4)
    I.click(this.locators.viewokbtn)
    I.waitForNavigation()
    I.click(this.locators.selopentrans5)
  },


  HoldButton(){
    I.click(this.locators.holdbtn)
    I.waitForNavigation()
    I.see(this.locators.isee6);
    I.click(this.locators.holdokbtn)
    I.waitForNavigation();
    I.click(this.locators.selopentrans7)
  },

  CommentsButton(){
    I.click(this.locators.commentsbtn)
    I.waitForNavigation()
    I.see(this.locators.isee7)
    I.click(this.locators.insertdatetime)
    I.click(this.locators.commentsokbtn)
    I.waitForNavigation()
    I.click(this.locators.selopentrans8)
  },

  SaveasButton(){
    I.click(this.locators.saveasbtn)
    I.waitForNavigation()
    I.see(this.locators.isee8)
    I.click(this.locators.saveasokbtn)
    I.waitForNavigation()
    I.see(this.locators.isee9)
    I.moveCursorTo(this.locators.transactions1)
    I.click(this.locators.processview1)
    I.waitForNavigation()
    I.click(this.locators.selopentrans9)
  },

    AdvancedSort(){
      I.click(this.locators.advsortbtn)
      I.waitForNavigation()
      //I.see(this.locators.isee11)
      I.click(this.locators.sorting)
      I.click(this.locators.assign)
      I.wait(5)
      I.click(this.locators.sorting1)
      I.click(this.locators.assign1)
      I.wait(5)
      I.click(this.locators.sortback)
      I.click(this.locators.remove)
      I.wait(5)
      I.click(this.locators.removeall)
      I.amAcceptingPopups()
      I.wait(5)
      I.click(this.locators.advancesortokbtn)
      I.waitForNavigation()
      I.click(this.locators.selopentrans11)
    },

    HistorySort(){
      I.click(this.locators.historybtn)
      I.waitForNavigation() 
      I.see(this.locators.isee12)
      I.click(this.locators.seltrans)
      I.click(this.locators.viewbtn1)
      I.waitForNavigation()
      I.click(this.locators.viewokbtn1)
      I.waitForNavigation()
      I.click(this.locators.closebtn)
      I.waitForNavigation() 
      I.click(this.locators.selopentrans12)
    },

    MatrixAnalysis(){
      I.click(this.locators.matrixanalysisBtn)
      I.waitForNavigation()
      //I.see(this.locators.isee13)
      I.click(this.locators.closebtn1) 
    }

}