import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.eamil,
            message:data.message
        }
        try
        {
          await  axios.post("https://getform.io/f/aejjvxlb", userInfo);
          toast.success("Your message has been sent successfuly!");
        }
        catch (error)
        {
            toast.error("Something Went Wrong!");
        }
      }
  return (
    <>
        <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-2xl font-bold mb-4'>Contact me</h1>
            <span className="px-8">Please fill out the form below to Contact me!</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                // action="https://getform.io/f/aejjvxlb" 
                // method='POST' 
                className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4'>Send You Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Full Name</label>
                        <input 
                        {...register("name", { required: true })}
                        type="text" className='rounded-lg shadwo appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='name'
                         name='name'
                          placeholder='Enter Your Name'
                        />
                    </div>
                    {errors.name && <span>This field is required</span>}

                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input 
                        {...register("email", { required: true })}
                        type="email" className='rounded-lg shadwo appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='email'
                         name='email'
                          placeholder='Enter Your Email'
                        />
                    </div>
                    {errors.email && <span>This field is required</span>}

                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea 
                        {...register("message", { required: true })}
                        type="text" className='rounded-lg shadwo appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id='message'
                         name='message'
                          placeholder='Enter your message'></textarea>                        
                    </div>
                    {errors.message && <span>This field is required</span>}
                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                </form>
            </div>
            {/* 1:43 mints */}
        </div>
    </>
  )
}

export default Contact
