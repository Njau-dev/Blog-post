const Form = () => {
    return (
        <div className="form-parent">
            <form id="create-form" action="">
                <label htmlFor="Title">Title:</label>
                <input type="text" placeholder="Enter the title" id="borders"/>
                
                <label htmlFor="Author">Author:</label>
                <input type="text" placeholder="Enter author's name" id="borders"/>


                <label htmlFor="Body">Body</label>
                <textarea rows={'4'} name="" id="borders"></textarea>


                <button>save blog</button>

            </form>

        </div>
    );
}

export default Form