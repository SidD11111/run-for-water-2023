import './Registration.css'
import PayPal from "../components/paypal";

const Registration = () => {
    return(
        <div className = 'registrationSection'>
            <div className = 'formSection'>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">First Name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="First Name"/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="example@gmail.com"/>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputState">Gender</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Prefer Not to Say</option>
                                </select>
                        </div>


                        <div className="form-group col-md-2">
                            <label for="inputState">Age</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>8 and under</option>
                                    <option>9-13</option>
                                    <option>14-18</option>
                                    <option>19-29</option>
                                    <option>30-39</option>
                                    <option>40-49</option>
                                    <option>40-49</option>
                                    <option>50-59</option>
                                    <option>60+</option>
                                    <option></option>
                                </select>
                        </div>


                        <div className="form-group col-md-4">
                            <label for="inputState">Shirt Size (Adult Sizes)</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>

            <div className = 'paymentSection'>
                <PayPal/>
            </div>

        </div>
    );
}

export default Registration;