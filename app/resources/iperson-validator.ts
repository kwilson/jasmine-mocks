/// <reference path="iperson.ts" />
module JasmineMocks {
    export interface IPersonValidator {
        isValid(person: IPerson): boolean;
    }
}