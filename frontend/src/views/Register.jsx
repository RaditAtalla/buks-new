import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

const Register = () => {
  return (
    <>
    <Navbar />

    <main className='h-full flex justify-center items-center mx-[20em]'>
      <section className='rounded-lg shadow-lg flex flex-col gap-[2em] px-[3em] py-[2em]'>
        <h2 className='font-bold text-[2rem]'>Daftar</h2>
        <div>
          <div className='flex flex-col justify-center mb-[1em] gap-[10px]'>
            <div className='flex gap-[10px]'>
              <Input label={"username"} placeholder={"username"} />
              <Input label={"username"} placeholder={"username"} />
            </div>
            <div className='flex gap-[10px]'>
              <Input label={"username"} placeholder={"username"} />
              <Input label={"username"} placeholder={"username"} />
            </div>
            <div className='flex gap-[10px]'>
              <div className='flex-1'>
                <Input label={"username"} placeholder={"username"} />
              </div>
              <Button title={"Daftar"} className={"flex-1"} />
            </div>
          </div>
          <p>Sudah punya akun? Login</p>
        </div>
      </section>
    </main>
    </>
  )
}

export default Register