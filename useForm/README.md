# useForm
Ejemplo:
```
const initialForm = {
    name: 'Arthur'
    age: 21,
    email: ''
}
const [formValues,handleInputChange,reset] = useForm(initialForm);
```