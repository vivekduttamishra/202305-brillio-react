var fs=require('fs').promises;

async function updateId(db, table,key){
    var data= await fs.readFile(db,{ encoding: 'utf8' });
    data=JSON.parse(data);
    var _table = data[table];
    //console.log('_table',_table);
    var count=0;
    for(var record of _table){
        var _key = record[key];
        var _id = _key.split(' ').join("-").toLowerCase();
       
        record.id=_id;   
        count++;     
    }

    await fs.writeFile(db, JSON.stringify(data))
    
    
    console.log(`done. ${count} records updated`);
    
}

updateId("./db.json","books","title");
