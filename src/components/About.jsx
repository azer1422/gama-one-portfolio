import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b
        from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                   I've always been intersted in building things since I was young. I remember taking apart watches,
                   computers trying to figure out what made them work. Originally born overseas, I did not dream of a life in the United States.
                   In fact, I wasn't even aware of the country. When I moved to the US, I became more curious of the world around me.
                   Through this curiousness, I stumbled in the field
                   of technology. I decided to complete my undergrad in computer engineering where I learned about computer hardware
                   , completed grad school to learn more about the theory of computers. I think the world can be so much more if people output more good things.
                   My most important skillset, I feel, is pushing my self everyday to learn new skills. They may have nothing to do with each other and
                   my carrer I feel they are worth doing.
                </p>

                <br/>

     
            </div>
        </div>
    )
}
export default About;