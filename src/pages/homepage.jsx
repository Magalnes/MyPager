import imagem1 from "/src/assets/compsci.jpg";

function Homepage() {
  return (
    <>
      <div className='w-full h-full'>

        <div className='h-40 w-full/12 bg-sky-200 inner-shadow-2xl overflow-hidden'>
            <img src={imagem1} className='object-fit' />

        </div>

        <div className='p-10'>
          <h1 className='font-bold'>About Me</h1>
          <p className='text-justify pt-5'>Hi, my name is Gustavo Magalhães. I'm graduating with a bachelor's degree in Computer Science from the Federal University of Mato Grosso.
            I live in Cuiabá, and I'm seeking opportunities to change that :p. Like many others, I enjoy playing video games, and my favorite titles are:
            Dark Souls (2011), Fallout: New Vegas (2010), and Metal Gear Solid 3: Snake Eater (2004). I've always dreamed of being part of a big title like one of these,
            and I'm currently studying to achieve that... Meanwhile, I need to establish a foundation for my career, and I'm using C++ to make some small projects to learn the basics.
            Some of you can see bellow. Farewell, I hope you have fun with some of these, and if you're interested in contacting me for some work... please leave a message. <br /> 
            oh and i make some website too (just like this)
          </p>


          <div className='pt-5 flex'>
            <div className='bg-sky-200 h-96 w-6/12'>

            </div>

            <div className='pl-5 w-6/12 flex flex-col items-center justify-start'>

              <p className='pt-10 text-justify self-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quasi, amet facilis
                eligendi aspernatur quas cum dicta dignissimos possimus blanditiis delectus commodi
                animi maiores, itaque aut corrupti laboriosam. Magnam, ab.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quasi, amet facilis
                eligendi aspernatur quas cum dicta dignissimos possimus blanditiis delectus commodi
                animi maiores, itaque aut corrupti laboriosam. Magnam, ab.
              </p>

              <button className='bg-white h-14 w-60 mt-10 rounded'>Contact me</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Homepage