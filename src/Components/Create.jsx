import { useState } from "react";

const Form = () => {

    const [data, setData] = useState({
        title: '',
        author: '',
        body: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prev) =>{
            return { ...prev, [name]: value};
        })
        
        //this is a shortcut to what we learnt earlier on handling update of objects in research folder
        //the code shortens the need of using multiple functions on the change of using multiple inputs
        //this happens because we added a name property on each input
    }


    return (
        <div className="form-parent">
            <form id="create-form" action="">
                <label htmlFor="Title">Title:</label>
                <input type="text" name="title" onChange={handleChange} placeholder="Enter the title" id="borders"/>
                
                <label htmlFor="Author">Author:</label>
                <input type="text" name="author" onChange={handleChange} placeholder="Enter author's name" id="borders"/>


                <label htmlFor="Body">Body</label>
                <textarea rows={'4'} name="body" onChange={handleChange} id="borders"></textarea>


                <button>save blog</button>

            </form>

            <p>the author is {data.author}</p>
            <p>the title is {data.title}</p>
            <p>the content is {data.body}</p>

        </div>
    );
}

export default Form