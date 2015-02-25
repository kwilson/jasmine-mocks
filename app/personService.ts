/// <reference path="resources/idata-context.ts" />
/// <reference path="resources/iperson.ts" />
/// <reference path="resources/iperson-validator.ts" />
module JasmineMocks {
    export class PersonService {
        constructor(private _validator: IPersonValidator, private _dataContext: IDataContext) {
        }

        save(person: IPerson) {
            if (this._validator.isValid(person)) {
                this._dataContext.savePerson(person);
            } else {
                throw new Error("Person is not valid.");
            }
        }
    }
}