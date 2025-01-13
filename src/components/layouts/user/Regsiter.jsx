import React, { useEffect, useState } from 'react'
import FormSidebar from './FormSidebar'
import { Avatar, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { enqueueSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, registerUser } from '../../../actions/UserAction';
import { useNavigate } from 'react-router-dom';
import BackdropLoader from '../BackdropLoader';

const Regsiter = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector((state) => state.user);

    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        cpassword: ""
    });

    const { name, email, gender, password, cpassword } = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("preview.png");


    const handleRegister = (e) => {
        e.preventDefault();
        if (password < 8) {
            enqueueSnackbar("password length should be less than 8 characters", { variant: "warning" });
            return;
        }
        if (password !== cpassword) {
            enqueueSnackbar("password doesn't Match", { variant: "error" });
            return;
        }
        if (!avatar) {
            enqueueSnackbar("please upload avatar", { variant: "warning" });
            return;
        }

        const formData = new FormData();

        formData.set("name", name);
        formData.set("email", email);
        formData.set("gender", gender);
        formData.set("password", password);
        formData.append("avatar", avatar);

        dispatch(registerUser(formData));
    }

    const handleDataChange = (e) => {
        if (e.target.name === 'avatar') {
           

            const file = e.target.files[0];
            setAvatarPreview(URL.createObjectURL(file));  //preview the image
            setAvatar(file); //keeps the actual file for upload

        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    }

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate('/');
        }
    }, [dispatch, isAuthenticated, navigate, error])

    return (
        <>

            {loading && <BackdropLoader />}
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-sm">
                    <FormSidebar title="Looks like you are new here" tag="Sign up with your mobile number and get started" />

                    <div className="flex-1 overflow-hidden">
                        <form onSubmit={handleRegister} className="p-5 sm:p-10" encType='multipart/form-data'>
                            <div className="flex flex-col w-full justify-between sm:flex-1 items-center gap-3">
                                <TextField fullWidth label="Full name" name="name" value={name} onChange={handleDataChange} required />
                                <TextField fullWidth label="Email" name="email" value={email} onChange={handleDataChange} required />

                                <div className="flex gap-4 items-center">
                                    <h2 className="text-md">Your Gender :</h2>
                                    <div className="flex items-center" id="radioInput">
                                        <RadioGroup row name="radio-buttons-group">
                                            <FormControlLabel value="male" onChange={handleDataChange} name="gender" control={<Radio required />} label="Male" />
                                            <FormControlLabel value="female" onChange={handleDataChange} name="gender" control={<Radio required />} label="Female" />
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full justify-between sm:flex-row gap-2 items-center">
                                    <TextField label="password" name="password" value={password} onChange={handleDataChange} id="password" type="password" required />
                                    <TextField label="Confirm password" name="cpassword" value={cpassword} onChange={handleDataChange} id="password" type="password" required />
                                </div>

                                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">
                                    <Avatar
                                        alt="Avatar Preview"
                                        src={avatarPreview}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white w-full py-2 px-2.5 shadow hover:shadow-lg">
                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={handleDataChange}
                                            className="hidden"
                                        />
                                        Choose File
                                    </label>
                                </div>
                                <button type="submit" className="text-white py-3 w-full bg-black rounded-md">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>


            </main>
        </>


    )
}

export default Regsiter