import { FormEvent, useRef } from "react";

const FormUseRef = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {
        name: "",
        age: 0,
    };
    const handleEvent = (event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null) person.name = nameRef.current.value;
        if (ageRef.current !== null)
            person.age = parseInt(ageRef.current.value);
        console.log(person);
    };
    return (
        <form onSubmit={handleEvent}>
            {/* div.mb-3>label.form-label+input.form-control */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    ref={nameRef}
                    id="name"
                    type="text"
                    className="form-control"
                />
            </div>
            {/* div.mb-3>label.form-label+input[type=number].form-control */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    ref={ageRef}
                    id="age"
                    type="number"
                    className="form-control"
                />
            </div>
            {/* button.btn.btn-primary */}
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormUseRef;
