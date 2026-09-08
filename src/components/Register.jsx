

function Register(){
    return(
        <section className="register-container">
        <div className="form-section">
        <button>Participant Registration</button>
        <h1>Create your account</h1>
        <p>Register once, then use your participant dashboard for eligible university events.</p>

       {/*REGISTER AS */}

        <h2>Register As</h2>

        <div>
            <label className="register-option-active">
            <input type="radio"
            name="registerAs"
            defaultChecked
             />
             <span>Student</span>
        </label>

        <label className="register-option">
            <input type="radio"
            name="registerAs"
             />
             <span>Staff</span>
        </label>

        <label className="register-option">
            <input type="radio"
            name="registerAs"
             />
             <span>External Participant</span>
        </label>
        </div>






         {/*PERSONAL DETAILS */}

         <h2>Personal Details</h2>

         <div>

         <div>
        <label>First name <span>*</span>
         </label>
         <input type="text" />
         </div>


         <div>
            <label>
        Middle name 
         </label>
         <input type="text" />
         </div>

         <div>
            <label>
            Last name <span>*</span>
         </label>
         <input type="text" />
         </div>

         </div>



         <div>
            <div>
            <label>
            Email address <span>*</span>
         </label>
         <input type="email" />
         </div>

         <div>
            <label>
           Telephone
         </label>
         <input type="tel" />
         </div>
         </div>




         




      </div>
        </section>

    )
}
export default Register