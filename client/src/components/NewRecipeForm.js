import { useState } from 'react';
import FileUpload from './FileUpload';
import SampleCard from './SampleCard';
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { ADD_RECIPE } from '../utils/mutations'
import { gql, useMutation } from '@apollo/client';

function NewRecipeForm() {
    // Navigation

    const navigate = useNavigate();

    let recObj = {}

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };



    // const [count, setCount] = useState(0)
    const [stepValues, setStepValues] = useState([{ stepNumber: 0, stepText: "" }])
    const [ingValues, setIngValues] = useState([{ ingredientName: "" }])
    const [formFields, setFormFields] = useState(
        {
            recipeName: '',
            description: '',
            ingredients: [],
            step: []
        }
    )

    const handleChange = (e) => {
        let updatedValue = {};
        updatedValue = {
            recipeName: e.target.value,
            description: e.target.value,
            image: e.target.value,
            ingredients: [...ingValues],
            step: [...stepValues],
        };
        setFormFields(formFields => ({
            ...setFormFields,
            ...updatedValue
        }));
    }


    // Steps array

    let handleStepChange = (i, e) => {
        let newStepValues = [...stepValues];
        newStepValues[i][e.target.name] = e.target.value;
        setStepValues(newStepValues);
    }

    let addStepFields = () => {
        // setCount(count++)
        setStepValues([...stepValues, { stepNumber: 2, stepText: "" }])
    }

    let removeStepFields = (i) => {
        // setCount(count--)
        let newStepValues = [...stepValues];
        newStepValues.splice(i, 1);
        setStepValues(newStepValues)
    }


    // Ingredients array

    let handleIngChange = (i, e) => {
        let newIngValues = [...ingValues];
        newIngValues[i][e.target.name] = e.target.value;
        setIngValues(newIngValues);
    }

    let addIngFields = () => {
        setIngValues([...ingValues, { ingredientName: "" }])
    }

    let removeIngFields = (i) => {
        let newIngValues = [...ingValues];
        newIngValues.splice(i, 1);
        setIngValues(newIngValues)
    }


    // Handle submission
    const [addRecipe, { data, isLoading, error }] = useMutation(ADD_RECIPE, {
        variables: {
            RecipeInput: formFields
        }
    });


    if (data === undefined) {
        console.log("test")
    }
    return (

        <div className="NewRecipeForm">

            <form className="formInput" onSubmit={(e) => {
                e.preventDefault();
                addRecipe({ variables: { ingredients: { ingValues } } });
            }}>
                <div class="form-control shadow-2xl p-10  bg-gradient-to-l from-indigo-500 rounded-md">
                    <div className='flex flex-col justify-between mx-10 items-center lg:flex-row'>
                        <div className='flex flex-col shadow-2x p-10 w-full'>
                            <label className="input-group input-group-sm my-2 text-white">
                                <span>Recipe Name</span>
                                <input type="text" name="recipeName" placeholder="Type here" onChange={(e) => handleChange(e)} className="input input-bordered input-sm w-full max-w-xs my-2 bg-white text-black" />
                            </label>

                            <label className="input-group input-group-sm my-2 text-white">
                                <span>Description</span>
                                <input type="text" name="description" placeholder="Type here" onChange={(e) => handleChange(e)} className="input input-bordered input-sm w-full max-w-xs my-2 bg-white text-black" />
                            </label>


                        </div>
                        <SampleCard rec={formFields} />
                    </div>

                </div>

                <button type="submit">Save</button>
            </form>
            <div className="divider"></div>



            <div className='container flex flex-row justify-between'>
                <div className='flex-1 flex-col'>
                    <div class="container">
                        <h2 className='justify-self-start px-6 text-xl'>Steps</h2>
                    </div>
                    <form>
                        {stepValues.map((element, index) => {
                            return (
                                <div className="form-inline" key={index}>
                                    <label className="input-group input-group-sm my-2 text-white">Step {index}</label>
                                    <input type="text" name="stepText" className="input input-bordered input-warning w-full max-w-xs bg-white" value={element.stepText || ""} onChange={e => handleStepChange(index, e)} />
                                    {/* <label className="input-group input-group-sm my-2 text-white">Email</label>
                            <input type="text" name="stepNumber" value={element.stepNumber || ""} onChange={e => handleStepChange(index, e)} /> */}
                                    {
                                        index ?
                                            <button type="button" className="btn btn-error text-white m-5" onClick={() => removeStepFields(index)}>Remove</button>
                                            : null
                                    }
                                </div>

                            )
                        })}
                    </form>
                    <div className='flex-col lg:flex-row'>
                        <button className='btn btn-success text-white m-5' onClick={() => addStepFields()} >Add Step</button>


                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>

                <div className='flex-1 flex-col '>
                    <div class="container">
                        <h2 className='justify-self-start px-6 text-xl'>Ingredients</h2>
                    </div>
                    <form>
                        {ingValues.map((element, index) => {
                            return (
                                <div className="form-inline" key={index}>
                                    <label className="input-group input-group-sm my-2 text-white">Name</label>
                                    <input type="text" name="ingredientName" className="input input-bordered input-warning w-full max-w-xs bg-white" value={element.ingredientName || ""} onChange={e => handleIngChange(index, e)} />
                                    {
                                        index ?
                                            <button type="button" className="btn btn-error text-white m-5" onClick={() => removeIngFields(index)}>Remove</button>
                                            : null
                                    }
                                </div>

                            )
                        })}
                    </form>
                    <div className='flex-col lg:flex-row'>
                        <button className='btn btn-success text-white m-5' onClick={() => addIngFields()} >Add Ingredient</button>


                    </div>
                </div>




            </div>

            <div class="flex justify-between hidden lg:flex ...">
                <button class="btn btn-lg bg-primary-focus m-10" onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" class="btn btn-lg bg-primary-focus m-10" onClick={e => {
                    e.preventDefault();
                    addRecipe({ variables: { recipeName: this.recipeName } });
                }}>Save</button>
            </div>

        </div>
    );
}

export default NewRecipeForm;