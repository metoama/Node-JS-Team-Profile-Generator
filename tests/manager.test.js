const Manager = require('../lib/manager');
const manager = new Manager('Arinze', '1234567', 'metoama@gmail.com', '713');

test('test contrsuctor values for manager', () => {
    expect(manager.name).toBe('Arinze');
    expect(manager.id).toBe('1234567');
    expect(manager.email).toBe("metoama@gmail.com");
    expect(manager.officeNumber).toBe("713");
});

test('should return name from getName() method', () => {
    expect(manager.getName()).toBe('Arinze');
});

test('should return id from getId() method',  () => {
    expect(manager.getId()).toBe('1234567');
});

test('should return email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('metoama@gmail.com');
});

test('should return office number from getofficeNumber()', () => {
    expect(manager.getofficeNumber()).toBe("713")
})
  
test('test if getRole method will return role', () => {
    expect(manager.getRole()).toBe('Manager');
});