import babel from 'babel-polyfill';
const data = {
    "Post-1": {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto"},
    "Post-2": {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    "Post-3": {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    "Post-4": {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsamiure\nquis sunt voluptatem rerum illo velit"
    }
   }
// using iterator
const iterator = {
    
    step: 0,
    next:function(data){
        this.step ++;
        if (this.step === 1)             
            return [data["Post-1"].id, data["Post-1"].title];
        if (this.step === 2)             
            return [data["Post-2"].id, data["Post-2"].title];
        if (this.step === 3)             
            return [data["Post-3"].id, data["Post-3"].title];
        if (this.step === 4)             
            return [data["Post-4"].id, data["Post-4"].title];
        
    }

}
console.log("-------------BY ITERATOR------------------------");
let [id1, title1] = iterator.next(data);
console.log(`Post Id: ${id1} Title: ${title1}`);
let [id2, title2] = iterator.next(data);
console.log(`Post Id: ${id2} Title: ${title2}`);
let [id3, title3] = iterator.next(data);
console.log(`Post Id: ${id3} Title: ${title3}`);
let [id4, title4] = iterator.next(data);
console.log(`Post Id: ${id4} Title: ${title4}`);


// Using generator
function* generator (data) {
    // console.log(data);
    const objKeys = Reflect.ownKeys(data);
    for (const objKey of objKeys){
        console.log(`Post Id: ${data[objKey].id} Title: ${data[objKey].title}`);
        yield objKey;
        
    }
}
const ops = generator(data);
console.log("------------- BY GENERATOR------------------------");
ops.next();
ops.next();
ops.next();
ops.next();


