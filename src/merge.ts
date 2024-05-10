function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const mergeArray: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

  //reverse เฉพาะ collection_2 เมื่อค่าแรกมากกว่าค่าสุดท้าย (เป็นdescendingจริง)
    if (collection_2.length > 0 && collection_2[0] > collection_2[collection_2.length - 1]) {
      
        collection_2.reverse();
    }

    while (i < collection_1.length || j < collection_2.length || k < collection_3.length) {
        let min = Infinity;

        //หาค่าที่น้อยสุดแล้วไปอัพเดทค่า min
        if (i < collection_1.length && collection_1[i] < min) {
            min = collection_1[i];
        }

        if (j < collection_2.length && collection_2[j] < min) {
            min = collection_2[j];
        }

        if (k < collection_3.length && collection_3[k] < min) {
            min = collection_3[k];
        }



        //ไปpushในmergeArray
        if (i < collection_1.length && collection_1[i] === min) {
            mergeArray.push(collection_1[i]);
            i++;
        } else if (j < collection_2.length && collection_2[j] === min) {
            mergeArray.push(collection_2[j]);
            j++;
        } else if (k < collection_3.length && collection_3[k] === min) {
            mergeArray.push(collection_3[k]);
            k++;
        }
    }

    return mergeArray;
}

export {merge}

const collection_1 = [1, 3, 5];
const collection_2 = [-2, -1, 0];
const collection_3 = [2, 4];
const mergeArray = merge(collection_1, collection_2, collection_3);
console.log(mergeArray); 
//should be [-2, -1, 0, 1,2,  3, 4, 5]
