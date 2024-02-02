describe("hasOddNumber", function(){
    it("Should return true if there is at least one odd number", function(){
        expect(hasOddNumber([1,2,3])).toEqual(true);
    });
    it("Should return false if all the values are even numbers!", function(){
        expect(hasOddNumber([2,4,6])).toEqual(false);
    });
});
describe("hasAZero", function(){
    it("Should return true if one value contains a zero!", function(){
        expect(hasAZero([0,1,2,3,4])).toEqual(true)
    });
    it("Should return false if there is no zero!", function(){
        expect(hasAZero([1,2,3,4])).toEqual(false)
    });
});
describe("hasOnlyOddNumbers", function(){
    it("Should return true if all the values are odd numbers!", function(){
        expect(hasOnlyOddNumbers([1,3,5,7])).toEqual(true)
    });
    it("Should return false if there is an even number!", function(){
        expect(hasOnlyOddNumbers([1,2,3,4])).toEqual(false)
    });
});
describe("hasNoDuplicates", function(){
    it("Should return true if there are no duplicate values!", function(){
        expect(hasNoDuplicates([1,2,3,4])).toEqual(true)
    });
    it("Should return false if there any duplicate values!", function(){
        expect(hasNoDuplicates([1,2,2,3,4,4])).toEqual(false)
    });
});
describe("hasCertainKey", function(){
    let arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    it("Should return true if every object contains the key!", function(){
        expect(hasCertainKey(arr, "first")).toEqual(true)
    });
    it("Should return false if any object does not contain the key!", function(){
        expect(hasCertainKey(arr, "isCatOwner")).toEqual(false)
    });
});
describe("hasCertainValue", function(){
    let arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    it("Should return true if every single object in the array contains the value for the specific key!", function(){
        expect(hasCertainValue(arr, "title", "Instructor")).toEqual(true)
    });
    it("Should return false if any object does not contain the value for the specific key!", function(){
        expect(hasCertainValue(arr, "first", "Ellie")).toEqual(false)
    });
});