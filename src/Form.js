import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Form() {
    return (
        <div className='App'>
            <form>
                <h2>Name for the Order</h2>
                <label htmlFor='name'></label>
                <input id='name' type='text'></input>
                <div>
                    <label htmlFor='size'>Choice of Size</label>
                    <select name='Size' id='size'>
                        <option value=''>--Please choose an option--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <label htmlFor='sauce'>Origanal Red</label>
                    <input id='sauce' type='radio'></input>
                    <label htmlFor='sauce'>Garlic Ranch</label>
                    <input id='sauce' type='radio'></input>
                    <label htmlFor='sauce'>BBQ Sauce</label>
                    <input id='sauce' type='radio'></input>
                    <label htmlFor='sauce'>Spinach Alfredo</label>
                    <input id='sauce' type='radio'></input>
                </div>
                <div>
                    <h2>Add Toppings</h2>
                    <p>Choose up to 10</p>
                    <label htmlFor='topping'>Pepperoni</label>
                    <input id='topping' type='checkbox'></input>
                    <label htmlFor='topping2'>Sausage</label>
                    <input id='topping2' type='checkbox'></input>
                    <label htmlFor='topping3'>Canadian Bacon</label>
                    <input id='topping3' type='checkbox'></input>
                    <label htmlFor='topping4'>Spicy Italian Sausage</label>
                    <input id='topping4' type='checkbox'></input>
                    <label htmlFor='topping5'>Grilled Chicken</label>
                    <input id='topping5' type='checkbox'></input>
                    <label htmlFor='topping6'>Onions</label>
                    <input id='topping6' type='checkbox'></input>
                    <label htmlFor='topping7'>Green Pepper</label>
                    <input id='topping7' type='checkbox'></input>
                    <label htmlFor='topping8'>Diced Tomatos</label>
                    <input id='topping8' type='checkbox'></input>
                    <label htmlFor='topping9'>Black Olives</label>
                    <input id='topping9' type='checkbox'></input>
                    <label htmlFor='topping10'>Roasted Garlic</label>
                    <input id='topping10' type='checkbox'></input>
                    <label htmlFor='topping11'>Three Cheese</label>
                    <input id='topping11' type='checkbox'></input>
                    <label htmlFor='topping12'>Pineapple</label>
                    <input id='topping12' type='checkbox'></input>
                </div>
                <div>
                    <h2>Special Instructions</h2>
                    <label htmlFor='instructions'></label>
                    <input
                        id='instructions'
                        type='text'
                        placeholder="Anything else you'd like to add?"
                    ></input>
                </div>

                <button type='submit'>Add to Order</button>
            </form>
        </div>
    );
}

export default Form;
