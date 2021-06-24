'use strict';

function leftJoin(table1, table2) {
  let newArr = [];
  for (let i = 0; i < table1.table.length; i++) {
    if(table1.table[i]){
    //   console.log(Object.keys(table1.table[i].root.value)[0],'..............');
      let table1Key = Object.keys(table1.table[i].root.value)[0];
      let table1Value = table1.get(table1Key);
      // console.log(table1Key,'..............table1Key')
      // console.log(table1Value,';;;;;;table1Value')
      if(table2.contains(table1Key)){
        let table2Key=   table2.get(table1Key);
        newArr.push([table1Key, table1Value, table2Key]);
        // console.log(newArr,'from if')
      }else{
        newArr.push([table1Key, table1Value, null]);
      }
    }
  }
  return newArr;
}

module.exports = leftJoin;
