import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
    name: z.string().min(3, { message: "Name is at least 3 character" }),
    age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const FormZod = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* div.mb-3>label.form-label+input.form-control */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                )}
            </div>
            {/* div.mb-3>label.form-label+input[type=number].form-control */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age", { valueAsNumber: true })}
                    id="age"
                    type="number"
                    className="form-control"
                />
                {errors.age && (
                    <p className="text-danger">{errors.age.message}</p>
                )}
            </div>
            {/* button.btn.btn-primary */}
            <button
                disabled={!isValid}
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
};

export default FormZod;
