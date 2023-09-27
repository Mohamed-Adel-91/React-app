import { FieldValues, useForm } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FieldValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* div.mb-3>label.form-label+input.form-control */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name", { required: true, minLength: 3 })}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name?.type === "required" && (
                    <p className="text-danger">The Name Field is required.</p>
                )}
                {errors.name?.type === "minLength" && (
                    <p className="text-danger">
                        The Name Must be at least 3 Characters.
                    </p>
                )}
            </div>
            {/* div.mb-3>label.form-label+input[type=number].form-control */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age")}
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

export default ReactHookForm;
