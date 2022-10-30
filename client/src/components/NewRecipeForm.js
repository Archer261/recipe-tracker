import { useState } from 'react';

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

    return (
        <div className="NewRecipeForm">
            <div class="grid justify-items-stretch ...">
                <h2 className='justify-self-start pl-6 text-xl'>Steps</h2>
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
            <button className='btn btn-success text-white m-5' onClick={addFields}>Add Step</button>
            <br />
            <button className='btn btn-primary text-white m-5' onClick={submit}>Submit</button>


            {/* <div className="divider lg:divider-horizontal"></div>



            <form onSubmit={submit}>
                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input className='input input-bordered input-xs w-full max-w-xs m-5 bg-white'
                                name='name'
                                placeholder='Enter instructions'
                                onChange={event => handleFormChange(event, index)}
                                value={form.name}
                            />
                            <button className='btn btn-error' onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <button className='btn btn-success text-white m-5' onClick={addFields}>Add Step</button>
            <br />
            <button className='btn btn-primary text-white m-5' onClick={submit}>Submit</button> */}
        </div>
    );
}

export default NewRecipeForm;