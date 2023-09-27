import { FormEvent, useState } from "react";

const FormUseState = () => {
    const [person, setPerson] = useState({
        name: "",
        age: 0,
    });
    const handleEvent = (event: FormEvent) => {
        event.preventDefault();
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
                    value={person.name}
                    onChange={(event) =>
                        setPerson({ ...person, name: event.target.value })
                    }
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
                    value={person.age}
                    onChange={(event) =>
                        setPerson({
                            ...person,
                            age: parseInt(event.target.value),
                        })
                    }
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

export default FormUseState;
