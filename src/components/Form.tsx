const Form = () => {
    return (
        <form>
            {/* div.mb-3>label.form-label+input.form-control */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input id="name" type="text" className="form-control" />
            </div>
            {/* div.mb-3>label.form-label+input[type=number].form-control */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input id="age" type="number" className="form-control" />
            </div>
            {/* button.btn.btn-primary */}
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
