// Getter: Accesses a property value.

// Setter: Updates or validates a property value.

// Typically, an underscore _ is prefixed to the property name for the private variable backing the getter and setter.


//advantages
// 1).Encapsulation of logic (e.g., validation, preprocessing).
// 2).Improved readability and maintainability.
// 3).Seamless interaction with object properties while hiding implementation details.



class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

}

const omVersions=['TOW_4sem','SPOW_3sem','SROW_5-6sem','DMOW_5sem']




const soham=new user("janu@gmail.com","12345")
console.log(soham.email);

 