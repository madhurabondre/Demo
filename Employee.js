"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    /*private age: number;
    private isMarried:boolean;
*/
    function Employee(empname, age, isMarried) {
        this.age = age;
        this.isMarried = isMarried;
        this.ename = empname;
        this.age = age;
        this.isMarried = isMarried;
    }
    Employee.prototype.getEmployeeDetails = function () {
        console.log("Employee Name is  ", this.ename);
        console.log("Employee Age is  ", this.age);
        console.log("Employee Married is  ", this.isMarried);
    };
    return Employee;
}());
exports.Employee = Employee;
