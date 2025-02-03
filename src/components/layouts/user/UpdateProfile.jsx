import {
  Avatar,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearErrors,
  loadUser,
  updateUserProfile,
} from "../../../actions/UserAction";
import BackdropLoader from "../BackdropLoader";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  
  const { error, loading, isUpdated } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: user.name || "",
    email: user.email || "",
    gender: user.gender || "",
  });

  const { name, email, gender } = profileData;

  const [avatar, setAvatar] = useState(user?.avatar?.url || "");
  const [avatarPreview, setAvatarPreview] = useState(
    user?.avatar?.url || "preview.png"
  );

  const handleOnChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      if (file) {
        setAvatarPreview(URL.createObjectURL(file));
        setAvatar(file);  
      }
    } else {
      setProfileData({ ...profileData, [e.target.name]: e.target.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !gender) {
      enqueueSnackbar("Fields cannot be empty", { variant: "warning" });
      return;
    }
  
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    
    if (avatar) {
      formData.append("avatar", avatar);
    }
  
    console.log([...formData]); // Debugging: Check if the image is being added
  
    dispatch(updateUserProfile(formData));
  };
  
  

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      enqueueSnackbar("Profile updated successfully", { variant: "success" });
      dispatch(loadUser());
      navigate("/account");
    }
  }, [dispatch, error, isUpdated, navigate, user]);
  

  return (
    <main className="w-full mt-12 sm:pt-20 sm:mt-0">
      {/* <!-- row --> */}
      {loading && <BackdropLoader />}
      <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
        {/* <!-- sidebar column  --> */}
        <div className="loginSidebar bg-purple-600 px-9 py-10 hidden sm:flex flex-col gap-4 w-2/5">
          <h1 className="font-medium text-white text-3xl">
            Looks like you're new here!
          </h1>
          <p className="text-gray-200 text-lg pr-2">
            Sign up with your mobile number to get started
          </p>
        </div>
        {/* <!-- sidebar column  --> */}

        {/* <!-- signup column --> */}
        <div className="flex-1 overflow-hidden">
          <h2 className="text-center text-2xl font-medium mt-6 text-gray-800">
            Update Profile
          </h2>
          {/* <!-- personal info procedure container --> */}
          <form
            onSubmit={handleOnSubmit}
            encType="multipart/form-data"
            className="p-5 sm:p-10"
          >
            <div className="flex flex-col gap-4 items-start">
              {/* <!-- input container column --> */}
              <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              {/* <!-- input container column --> */}

              {/* <!-- gender input --> */}
              <div className="flex gap-4 items-center">
                <h2 className="text-md">Your Gender :</h2>
                <div className="flex items-center gap-6" id="radioInput">
                  <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleOnChange}
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleOnChange}
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </div>
              </div>
              {/* <!-- gender input --> */}

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
                    onChange={handleOnChange}
                    className="hidden"
                  />
                  Choose File
                </label>
              </div>
              <button
                type="submit"
                className="text-white py-3 w-full bg-black shadow rounded-sm font-medium hover:shadow-lg"
              >
                Update
              </button>
              <Link
                className="hover:bg-gray-100 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium"
                to="/account"
              >
                Cancel
              </Link>
            </div>
          </form>
          {/* <!-- personal info procedure container --> */}
        </div>
        {/* <!-- signup column --> */}
      </div>
      {/* <!-- row --> */}
    </main>
  );
};

export default UpdateProfile;
