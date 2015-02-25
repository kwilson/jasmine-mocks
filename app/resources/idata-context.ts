/// <reference path="iperson.ts" />
module JasmineMocks {
    export interface IDataContext {
        savePerson(person: IPerson): void;
    }
}