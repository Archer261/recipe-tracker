import { useState } from 'react';
import FileUpload from './FileUpload';
import SampleCard from './SampleCard';
import { Outlet, Link, useNavigate } from 'react-router-dom'

function NewRecipeForm() {
    const [formFields, setFormFields] = useState([
        { step: '', value: '' },
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {
            step: '',
            value: ''
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    const navigate = useNavigate();

    let recObj = {}

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    return (

        <div className="NewRecipeForm">


            <div class="form-control shadow-2xl p-10  bg-gradient-to-l from-indigo-500 rounded-md">
                <div className='flex flex-col justify-between mx-10 items-center lg:flex-row'>
                    <div className='flex flex-col shadow-2x p-10 w-full'>
                        <label className="input-group input-group-sm my-2 text-white">
                            <span>Recipe Name</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs my-2 bg-white" />
                        </label>

                        <label className="input-group input-group-sm my-2 text-white">
                            <span>Description</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs my-2 bg-white" />
                        </label>

                        <FileUpload />
                    </div>
                    <SampleCard />
                </div>

            </div>



            <div className="divider"></div>




            <div class="container">
                <h2 className='justify-self-start px-6 text-xl'>Steps</h2>
            </div>
            <form onSubmit={submit}>
                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input className='input input-bordered input-sm w-full max-w-xs m-5 bg-white'
                                name='step'
                                placeholder='Enter instructions'
                                onChange={event => handleFormChange(event, index)}
                                value={form.step}
                            />
                            <button className='btn btn-error' onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <div className='flex-col lg:flex-row'>
                <button className='btn btn-success text-white m-5' onClick={addFields}>Add Step</button>

                <button className='btn btn-primary text-white m-5' onClick={submit}>Submit</button>
            </div>
            <div class="flex justify-between hidden lg:flex ...">
                <button class="btn btn-lg bg-primary-focus m-10" onClick={() => navigate(-1)}>Cancel</button>
                <button class="btn btn-lg bg-primary-focus m-10">Save</button>
            </div>

        </div>
    );
}

export default NewRecipeForm;