const Intern = require('../lib/intern');
const intern = new Intern('Arinze', '1234567', 'metoama@gmail.com', 'IUPUI');

test('test contrsuctor values for intern', () => {
    expect(intern.name).toBe('Arinze');
    expect(intern.id).toBe('1234567');
    expect(intern.email).toBe("metoama@gmail.com");
    expect(intern.school).toBe("IUPUI");
});

test('should return name from getName() method', () => {
    expect(intern.getName()).toBe('Arinze');
});

test('should return id from getId() method',  () => {
    expect(intern.getId()).toBe('1234567');
});

test('should return email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('metoama@gmail.com');
});

test('should return school/university name from getSchool()', () => {
    expect(intern.getSchool()).toBe("IUPUI")
})
  
test('test if getRole method will return role', () => {
    expect(intern.getRole()).toBe('Intern');
});