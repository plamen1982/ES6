function filterByAge(minAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge ) {
    
    let firstPerson = {
        name: firstPersonName,
        age: firstPersonAge
    }

    let secondPerson = {
        name: secondPersonName,        
        age: secondPersonAge
    }

    if( firstPerson.age >= minAge && secondPerson.age >= minAge ) {
        
            console.log(firstPerson)
            console.log(secondPerson)
            return 
    }  if( firstPerson.age >= minAge ) {
        return firstPerson
    }  if( secondPerson.age >= minAge ) {
        return secondPerson
    } 
}

console.log(filterByAge(12, 'Ivan', 12, 'Asen', 90))