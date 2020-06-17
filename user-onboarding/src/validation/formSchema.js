import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    name: yup
        .string()
        .min(2, "Username must be at least 2 characters long.")
        .required("Name is Required"),
    password: yup
        .string()
        .min(8, "Username must be at least 8 characters long.")
        .required("Password is Required"),
    terms: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")   
});

export default formSchema