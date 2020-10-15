import React, {useState} from "react";
import FileInput from "../UI/Form/FileInput";
import "./PostForm.css";

const PostForm = ({onSubmit}) => {
    const [state, setState] = useState({
        name: "",
        message: "",
        image: ""
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        })

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => ({...prevState, [name]:file}));
    };

    return (
        <>
                <h2 className='AddFormTitle'>Add new post</h2>
                <form onSubmit={submitFormHandler} className='AddForm'>
                    <h4 className='InputText'>Name:</h4>
                    <input
                        className="Input"
                        type="text"
                        id="name"
                        name="name"
                        value={state.name}
                        onChange={inputChangeHandler}
                    />
                    <h4 className='InputText'>Message:</h4>
                    <textarea
                        className="Input TextArea"
                        id="message"
                        name="message"
                        value={state.message}
                        onChange={inputChangeHandler}
                        required
                    />
                    <h4 className='InputText'>Image:</h4>
                    <FileInput
                        label="Image"
                        name="image"
                        onChange={fileChangeHandler}
                    />
                    <div className='buttonForm'>
                        <button className='button'><span>Add</span></button>
                    </div>
                </form>
            </>
    );
};

export default PostForm;