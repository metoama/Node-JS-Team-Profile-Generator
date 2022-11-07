
const Employee = require('../lib/employee');
const employee = new Employee('Arinze', '1234567', 'metoama@gmail.com');

test('test contrsuctor values for employee', () => {
    expect(employee.name).toBe('Arinze');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('metoama@gmail.com');
});

test('test if we get the name from getName() method', () => {
    expect(employee.getName()).toBe('Arinze');
});

test('test if getId() method will return id',  () => {
    expect(employee.getId()).toBe('1234567');
});

test('test if getEmail() method will return email', () => {
    expect(employee.getEmail()).toBe('metoama@gmail.com');
});
  
test('test if getRole method will return role', () => {
    expect(employee.getRole()).toBe('Employee');
});