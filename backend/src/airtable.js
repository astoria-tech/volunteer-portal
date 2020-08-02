const Airtable = require("airtable");
const config = require("./config");

const base = new Airtable({ apiKey: config.AIRTABLE_API_KEY }).base(
  config.AIRTABLE_BASE_ID
);

const checkForUser = async (loginType, loginValue, callback) => {
  let airTableColumn;
  if (loginType == "phone") {
    airTableColumn = "Please provide your contact phone number:";
  } else {
    airTableColumn = "Email Address";
  }
  try {
    return base(config.AIRTABLE_VOLUNTEERS_TABLE_NAME)
      .select({
        view: config.AIRTABLE_VOLUNTEERS_VIEW_NAME,
        maxRecords: 1,
        filterByFormula: `{${airTableColumn}} = '${loginValue}'`,
      })
      .eachPage((records, nextPage) => {
        if (records[0]) {
          callback(records[0].id);
          return;
        }
        console.log("no record found");
      });
  } catch (e) {
    console.log(e);
  }
};

const getRecord = (recordID, res) => {
  base(config.AIRTABLE_VOLUNTEERS_TABLE_NAME).find(recordID, (err, record) => {
    //console.log(record);
    res.send({ ...record });
  });
};

const updateRecord = (recordID, updatedObject, res) => {
  base(config.AIRTABLE_VOLUNTEERS_TABLE_NAME).update(
    recordID,
    updatedObject,
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Updated record for: ${record.get("Full Name")}`);
      res.send({ updated: true });
    }
  );
};

module.exports = { checkForUser, getRecord, updateRecord };
