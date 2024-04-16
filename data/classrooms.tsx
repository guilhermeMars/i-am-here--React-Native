import { faker } from '@faker-js/faker';

export const students = Array.from({ length: 20 }).map(() => {
    return{
        id: faker.number.int({ min: 1000, max: 9000 }),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email().toLocaleLowerCase()
    }
});

// Linkar students com classrooms

export const classrooms = Array.from({ length: 10 }).map(() =>{
    const id = faker.number.int({ min: 1000, max: 9000 })
    return{
        id: id,
        name: "Sala " + id,
        studentsId: {
            id: faker.number.int({ min: 10000, max: 20000 }),
            id2: faker.number.int({ min: 10000, max: 20000 }),
            id3: faker.number.int({ min: 10000, max: 20000 }),
            id4: faker.number.int({ min: 10000, max: 20000 }),
            id5: faker.number.int({ min: 10000, max: 20000 }),
            id6: faker.number.int({ min: 10000, max: 20000 })
        }
    } 
});
