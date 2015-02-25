/// <reference path="resources/idata-context.ts" />
/// <reference path="resources/iperson.ts" />
/// <reference path="resources/iperson-validator.ts" />
/// <reference path="../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
module JasmineMocks.Tests {
    describe("personService tests", () => {

        var validator: any;
        var dataContext: any;

        beforeEach(() => {
            validator = jasmine.createSpyObj("validator", ["isValid"]);
            dataContext = jasmine.createSpyObj("dataContext", ["savePerson"]);
        });

        it("save is called if person is valid", () => {
            // Arrange
            validator.isValid.and.returnValue(true);
            var service = new JasmineMocks.PersonService(<IPersonValidator>validator, <IDataContext>dataContext);

            var validPerson = <IPerson>{};

            // Act
            service.save(validPerson);

            // Assert
            expect(validator.isValid).toHaveBeenCalledWith(validPerson);
            expect(dataContext.savePerson).toHaveBeenCalledWith(validPerson);
        });

        it("exception is thrown if person is not valid", () => {
            // Arrange
            validator.isValid.and.returnValue(false);
            var service = new JasmineMocks.PersonService(<IPersonValidator>validator, <IDataContext>dataContext);

            var invalidPerson = <IPerson>{};

            // Act & Assert
            expect(() => {
                service.save(invalidPerson);
            }).toThrow();

            expect(validator.isValid).toHaveBeenCalledWith(invalidPerson);
            expect(dataContext.savePerson).not.toHaveBeenCalled();
        });
    });
}