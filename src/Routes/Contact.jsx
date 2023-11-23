import { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es obligatorio')
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El nombre solo puede contener letras y espacios'),
    lastname: Yup.string()
        .required('El apellido es obligatorio')
        .min(5, 'El apellido debe tener al menos 5 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El apellido solo puede contener letras y espacios'),
    email: Yup.string()
        .required('El email es obligatorio')
        .email('Ingrese un email válido, por favor')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Ingrese un email válido, por favor'),
    consultation: Yup.string()
        .required('La consulta por la que nos contacta es obligatoria')
        .min(10, 'Su consulta debe tener al menos 10 caracteres')
})

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({ name: '', lastname: '', email: '', consultation: '' })

    return (
        <Formik
            initialValues={{ name: '', lastname: '', email: '', consultation: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                setFormData({ name: values.name, lastname: values.lastname, email: values.email, consultation: values.consultation })
                setSubmitted(true)
                resetForm()
                console.log(values)
            }}
        >
            {({ errors, touched, values }) => (
                
                <Form>
                    <main>
                    <section className='flex flex-col items-center justify-center lg:h-[80vh] p-4 gap-4 lg:w-[40%] m-auto'>

                        <h1 className="text-4xl font-bold mb-4 dark:text-white max-w-[90vw]">¿Querés saber más?</h1>
                        <p className="mb-8 dark:text-white text-lg max-w-[80vw] text-center mx-auto">Envianos tus preguntas y nos pondremos en contacto con vos</p>
                    
                    <Grid container alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ width: '90%' }} className='flex flex-col items-center justify-center w-full md:w-1/2 p-6 border border-green-300 bg-oyster-pink-50 rounded-lg shadow-md space-y-4 dark:bg-purple-100 '>    
                        <Grid item xs={12} md={7} >
                            <Field as={TextField} type='text' id='name' label='Ingrese su nombre' name='name' variant='outlined' value={values.name} fullWidth
                                error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} />
                        </Grid>

                        <Grid item xs={12} md={7} >
                            <Field as={TextField} type='text' id='lastname' label='Ingrese su apellido' name='lastname' variant='outlined' fullWidth
                                error={touched.lastname && Boolean(errors.lastname)} helperText={touched.lastname && errors.lastname}/>
                        </Grid>

                        <Grid item xs={12} md={7} >
                            <Field as={TextField} type='email' id='email' label='Ingrese su e-mail' name='email' variant='outlined' fullWidth
                                error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email}/>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Field as={TextField} type='text' id='consulta' label='Ingrese su consulta' name='consultation' variant='outlined' fullWidth multiline rows={4}
                                error={touched.consultation && Boolean(errors.consultation)} helperText={touched.consultation && errors.consultation}/>
                        </Grid>

                        <Grid item xs={12} md={7} container alignItems={'center'} justifyContent={'center'}>
                            <Button type='submit' variant='contained'>Enviar</Button>
                        </Grid>

                    </Grid>
                    

                    {submitted && (
                        <div className='max-w-[80vw]'>
                            <p className='dark:text-white'>Gracias por escribirnos, {formData.name}. Pronto te contactaremos a través de {formData.email} 🤝.</p>
                        </div>
                    )}
                    </section>
                    </main>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm