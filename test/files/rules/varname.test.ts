var validName1 = "hi";
var VALIDNAME2 = "there";
var InvalidName1 = ","; // failure
var invalid_name2 = " "; // failure

class Test {
    private Invalid_name3 = "how"; // failure
    private _optionallyValid = "are"; // sometimes a failure
}

function test() {
    () => {
        var InVaLiDnAmE4 = "you"; // failure
    };
}

declare var DeclaresAreValid: any;

export function functionWithInvalidParamNames (bad_name, AnotherOne) { // 2 failures
    //
}

let { foo, bar } = { foo: 1, bar: 2 };
let [ InvalidFoo, invalid_bar, ...invalid_baz ] =  [1, 2, 3, 4]; // 3 failures

export function anotherFunctionWithInvalidParamNames ([first_element, SecondElement]) { // 2 failures
    //
}

export function functionWithInvalidSpread(invalid_arg: ...number) { // 1 failure
  //
}

let optionallyValid_ = "bar";
let _$httpBackend_ = "leading and trailing";