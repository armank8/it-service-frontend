import * as yup from "yup";

export const authSchema = yup.object().shape({

    // id: yup.number().required("Id is required"),
    // name: yup.string().required("Name is required"),
    // price: yup.number().required("price is required"),
    // category: yup.string().required("category is required"),
    // image: yup.string().required("image is required"),
    // description: yup.string().required("description is required"),

    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(32).required(),

});

