function skillsMember() {
    let name = 'Ade';
    let age = 25;
    let skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
    let address = {
        city: 'Jakarta',
        country: 'Indonesia'
    };
    let dateOfBirth = new Date('1995-09-18');
    let getSkills = function() {
        return skills;
    };
    let getName = function() {
        return name;
    };
    let getAge = function() {
        return age;
    };
    let getAddress = function() {
        return address;
    };
    let getDateOfBirth = function() {
        return dateOfBirth;
    };
    return {
        getSkills,
        getName,
        getAge,
        getAddress,
        getDateOfBirth
    };
}