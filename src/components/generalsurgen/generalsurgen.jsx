import banner from '../../../public/generalsurgenbanner.png';
import Form from '../form';
import img from '../../../public/generalsuregery1.png';
import piles from '../../../public/piles.png';
import piles2 from '../../../public/genralsurgery3.png';
import piles3 from '../../../public/genralsurgeon3.png';
import piles4 from '../../../public/genralsurgeon4.png';
import piles5 from '../../../public/generalsurgeon5.png';

export default function GeneralSurgeon() {
    return (
        <>
            <div className="relative w-screen ">
                <img src={banner} alt="banner" className="w-full h-auto" />
                <div className="absolute lg:top-10 xxl:top-5 right-40 p-0 w-1/4">
                    <Form />
                </div>
            </div>
            <div className='w-screen flex justify-center items-center'>
                <div className='max-w-6xl py-8'>
                    <h1 className='text-[#3e3e3e] font-[700] text-4xl text-center pb-3'>General Surgeon</h1>
                    <p className='text-[#3e3e3e] font-[500] text-md text-center'>Dr. Shambhav Chandra specializes in general surgery with an emphasis on proctology, offering expert treatment for problems related to the
                        colon, rectum, and anus. Dr. Chandra ensures the best results and a restored normal life by effectively and gently providing a comprehensive
                        prognosis, treatment, and surgical treatments that are specific to the needs of each affected person. Have faith in Dr. Chandra’s expertise to
                        achieve long-term health and well-being through his compassionate and effective treatment of proctological concerns. A surgeon of the
                        greatest quality, Dr. Shambhav Chandra is known as the best general surgeon in Gurgaon. Dr. Chandra is a surgical expert who has a strong
                        commitment to patient care. Patients at Healing Gloves Hospital trust Dr. Chandra’s experience with their health because they know they are in
                        the hands of a professional surgeon who is dedicated to improving their quality of life and health.</p>

                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center pb-5'>
                <img src={img} alt="" className='w-full h-auto' />
                <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 '>
                    <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                </div>

            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-5'>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Comprehensive <br />
                            Evaluation</h1>
                        <p className='text-sm font-medium text-center pt-1'>Comprehensive Evaluation
                            Dr. Shambhav Chandra employs
                            advanced diagnostic technology and
                            strategies to carry out exhaustive
                            checks that nicely discover proctological
                            conditions and provide personalized
                            treatments ideal to every patient’s need.</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Advanced Surgical
                            Interventions</h1>
                        <p className='text-sm font-medium text-center pt-1'>Using a number of the maximum
                            advanced surgical techniques and
                            technological advancements, Dr.
                            Chandra provides a range of treatments,
                            which includes hemorrhoidectomy,
                            fistulotomy, and anal fissure repair,
                            with the aim of minimizing soreness
                            and facilitating a brief recuperation.</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Compassionate <br />Care</h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Shambhav Chandra places an
                            excessive cost on imparting his sufferers
                            with being concerned with attention
                            that places them at ease and helps
                            them as they go through their
                            recuperation duration. In addition to
                            actively tending to his sufferers’ wishes,
                            he additionally provides regular
                            clarification and steering.</p>


                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center bg-[#E3E8FF] mb-8 pb-8'>
                <h1 className='text-4xl font-bold text-opacity-90 text-[#1B1B1B] text-center pt-8'>Painless Relief: Say Goodbye to Piles Pain
                    <br />and Discomfort</h1>
                <div className='max-w-6xl flex  gap-8 pt-8 justify-center items-center '>
                    <div>
                        <p className='text-sm font-medium text-[#3e3e3e]'>Dr. Shambhav Chandra piles specialist in Gurgaon who is specializes in
                            providing effective treatment and compassionate care for patients
                            with blood vessels, or piles. Dr. Chandra, who has expertise in both
                            non-surgical and surgical treatments, personalized treatment
                            programs according to the particular demands of each patient and
                            makes sure symptoms such as pain, bleeding, and discomfort are
                            cured. In order to improve his patients’ quality of life and reduce their
                            suffering due to piles, Dr. Chandra combines medication, minimally
                            invasive surgery, changes in lifestyle, and, where necessary, surgical
                            treatments. Have your trust in Dr. Shambhav Chandra is a best doctor
                            for piles for personalized therapy and permanent piling relief. Swollen
                            blood vessels in the rectum or anus can cause piles, also known as
                            hemorrhoids, to hurt and throb. Dr. Shambhav Chandra provides
                            efficient treatment options specific to each affected person. Healing
                            glove is a best hospital for piles treatment in Gurgaon.</p>
                        <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 lg:w-[300px] xxl:w-[300px]  md:w-[300px]'>
                            <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                        </div>
                    </div>


                    <img src={piles} alt="piles" className='max-w-full h-auto' />
                </div>

            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-8'>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Personalized <br />
                            Diagnosis</h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Shambhav Chandra carefully analyzes
                            patients with the aim to provide an exact
                            diagnosis of piles, taking consideration of
                            multiple factors like severity, symptoms,
                            and underlying medical issues.</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Comprehensive
                            <br />  Treatment Plans
                        </h1>
                        <p className='text-sm font-medium text-center pt-1'>Comprehensive Treatment Plans:
                            Dr. Shambhav Chandra offers
                            individualized treatment plans that
                            contain changes to lifestyles, nutritional
                            advice, and medical treatments with a
                            priority on his patients’ overall health.
                            He provides the best possible results
                            and future comfort.</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Advanced <br /> Interventions</h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Shambhav Chandra prioritizes patient
                            comfort and speedy recovery during
                            advanced treatments like rubber band
                            ligation, sclerotherapy, or surgeries. He
                            does this by using advanced techniques
                            and minimally invasive treatments.</p>


                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center bg-[#E3E8FF] mb-8 pb-8'>
                <h1 className='text-4xl font-bold text-opacity-90 text-[#1B1B1B] text-center pt-8'>Our Effective Solutions to Help You  <br /> Say
                    Goodbye to Fissure Problems !
                </h1>
                <div className='max-w-6xl flex  gap-8 pt-8 justify-center items-center '>
                    <img src={piles2} alt="piles" className='max-w-full h-auto' />
                    <div>
                        <p className='text-sm font-medium text-[#3e3e3e]'>Dr. Shambhav Chandra piles specialist in Gurgaon who is specializes in
                            providing effective treatment and compassionate care for patients
                            with blood vessels, or piles. Dr. Chandra, who has expertise in both
                            non-surgical and surgical treatments, personalized treatment
                            programs according to the particular demands of each patient and
                            makes sure symptoms such as pain, bleeding, and discomfort are
                            cured. In order to improve his patients’ quality of life and reduce their
                            suffering due to piles, Dr. Chandra combines medication, minimally
                            invasive surgery, changes in lifestyle, and, where necessary, surgical
                            treatments. Have your trust in Dr. Shambhav Chandra is a best doctor
                            for piles for personalized therapy and permanent piling relief. Swollen
                            blood vessels in the rectum or anus can cause piles, also known as
                            hemorrhoids, to hurt and throb. Dr. Shambhav Chandra provides
                            efficient treatment options specific to each affected person. Healing
                            glove is a best hospital for piles treatment in Gurgaon.</p>
                        <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 lg:w-[300px] xxl:w-[300px]  md:w-[300px]'>
                            <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-8'>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Precise <br />
                            Diagnosis</h1>
                        <p className='text-sm font-medium text-center pt-1'>With the goal to accurately detect
                            fissures and evaluate their severity,
                            Dr. Chandra takes extensive techniques
                            for diagnosis. He guarantees a
                            comprehension of the basic causes and
                            adjusts treatment accordingly by doing
                            extensive tests and possibly diagnostic
                            tests.</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Treatment <br /> Approach
                        </h1>
                        <p className='text-sm font-medium text-center pt-1'>Holistic: In order to effectively tackle
                            the root cause of fissures and reduce
                            symptoms, Dr. Chandra suggests
                            dealing with them with a treatment
                            strategy that integrates medicinal,
                            dietary, and lifestyle therapies. His
                            objective is to offer complete care that
                            promotes recovery and avoids
                            recurrence, whether it be by medication,
                            dietary changes, or minimally invasive
                            methods.</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Patient Support and
                            Education</h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Chandra places a high priority on
                            education for patients, and making sure
                            people are aware of their disease and
                            treatment options. By giving patients
                            the resources and assistance they need
                            to take an active role in their care, he
                            improves quality of life and maximizes
                            results.</p>


                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center bg-[#E3E8FF] mb-8 pb-8'>
                <h1 className='text-4xl font-bold text-opacity-90 text-[#1B1B1B] text-center pt-8'>Easy Solutions: The Fistula Treatment <br />
                    Expertise of Dr. Shambhav Chandra</h1>
                <div className='max-w-6xl flex  gap-8 pt-8 justify-center items-center '>
                    <div>
                        <p className='text-sm font-medium text-[#3e3e3e]'>Dr. Shambhav Chandra piles specialist in Gurgaon who is specializes in
                            providing effective treatment and compassionate care for patients
                            with blood vessels, or piles. Dr. Chandra, who has expertise in both
                            non-surgical and surgical treatments, personalized treatment
                            programs according to the particular demands of each patient and
                            makes sure symptoms such as pain, bleeding, and discomfort are
                            cured. In order to improve his patients’ quality of life and reduce their
                            suffering due to piles, Dr. Chandra combines medication, minimally
                            invasive surgery, changes in lifestyle, and, where necessary, surgical
                            treatments. Have your trust in Dr. Shambhav Chandra is a best doctor
                            for piles for personalized therapy and permanent piling relief. Swollen
                            blood vessels in the rectum or anus can cause piles, also known as
                            hemorrhoids, to hurt and throb. Dr. Shambhav Chandra provides
                            efficient treatment options specific to each affected person. Healing
                            glove is a best hospital for piles treatment in Gurgaon.</p>
                        <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 lg:w-[300px] xxl:w-[300px]  md:w-[300px]'>
                            <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                        </div>
                    </div>


                    <img src={piles3} alt="piles" className='max-w-full h-auto' />
                </div>

            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-8'>

                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Complete <br />Inspection</h1>
                        <p className='text-sm font-medium text-center pt-1'>Comprehensive Evaluation
                            For the purpose to properly identify
                            fistulas, Dr. Chandra conducts detailed
                            tests. He uses ultrasounds and clinical
                            tests to figure out the scope and severity
                            of the problem.</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Multimodal Treatment <br />
                            Methods</h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Chandra personalized treatment
                            plans to each patient’s specific needs,
                            using his expertise in minimally invasive
                            procedures and surgical treatments to
                            reduce symptoms, avoid problems, and
                            support rapid recovery.</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Ongoing Monitoring <br /> and
                            Support</h1>
                        <p className='text-sm font-medium text-center pt-1'>During the course of treatment, Dr.
                            Chandra gives gentle care, supporting
                            patients and their families with advice
                            and counseling. He makes sure that
                            there is continuity of care and works
                            toward positive long-term outcomes in
                            the treatment of fistulas by careful
                            monitoring and examination.</p>


                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center bg-[#E3E8FF] mb-8 pb-8'>
                <h1 className='text-4xl font-bold text-opacity-90 text-[#1B1B1B] text-center pt-8'>Say No More to Pilonidal Pain: <br />Outstanding
                    Cure Offered!
                </h1>
                <div className='max-w-6xl flex  gap-8 pt-8 justify-center items-center '>
                    <img src={piles4} alt="piles" className='max-w-full h-auto' />
                    <div>
                        <p className='text-sm font-medium text-[#3e3e3e]'>Dr. Shambhav Chandra piles specialist in Gurgaon who is specializes in
                            providing effective treatment and compassionate care for patients
                            with blood vessels, or piles. Dr. Chandra, who has expertise in both
                            non-surgical and surgical treatments, personalized treatment
                            programs according to the particular demands of each patient and
                            makes sure symptoms such as pain, bleeding, and discomfort are
                            cured. In order to improve his patients’ quality of life and reduce their
                            suffering due to piles, Dr. Chandra combines medication, minimally
                            invasive surgery, changes in lifestyle, and, where necessary, surgical
                            treatments. Have your trust in Dr. Shambhav Chandra is a best doctor
                            for piles for personalized therapy and permanent piling relief. Swollen
                            blood vessels in the rectum or anus can cause piles, also known as
                            hemorrhoids, to hurt and throb. Dr. Shambhav Chandra provides
                            efficient treatment options specific to each affected person. Healing
                            glove is a best hospital for piles treatment in Gurgaon.</p>
                        <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 lg:w-[300px] xxl:w-[300px]  md:w-[300px]'>
                            <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-8'>

                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Minimally Invasive  <br />
                            Techniques</h1>
                        <p className='text-sm font-medium text-center pt-1'>With the goal to effectively treat the
                            sinus tract while minimizing discomfort
                            and reducing recovery times for
                            patients, Dr. Chandra uses advanced
                            minimally invasive treatments like pit
                            picking or laser therapy.</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Comprehensive  <br /> Care
                        </h1>
                        <p className='text-sm font-medium text-center pt-1'>To help to prevent recurrence and
                            encourage recovery, Dr. Chandra offers
                            personalized treatment strategies that
                            are customized for the particular
                            requirements of each patient. These
                            services include issues like hygiene,
                            wound care, and lifestyle adjustments.</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Patient Support <br/> and Education
                        </h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Chandra sets a high priority on
                            information for patients, and making
                            sure people are aware of their disease,
                            available treatments, and the needs for
                            post-procedural care. He provides
                            patients with constant assistance and
                            direction so they may effectively
                            manage their health.</p>


                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center bg-[#E3E8FF] mb-8 pb-8'>
                <h1 className='text-4xl font-bold text-opacity-90 text-[#1B1B1B] text-center pt-8'>Fast Relief: With Our Abscess <br/>Treatment, 
                Say Bye to Pain!
                </h1>
                <div className='max-w-6xl flex  gap-8 pt-8 justify-center items-center '>
                    <img src={piles5} alt="piles" className='max-w-full h-auto' />
                    <div>
                        <p className='text-sm font-medium text-[#3e3e3e]'>Dr. Shambhav Chandra piles specialist in Gurgaon who is specializes in
                            providing effective treatment and compassionate care for patients
                            with blood vessels, or piles. Dr. Chandra, who has expertise in both
                            non-surgical and surgical treatments, personalized treatment
                            programs according to the particular demands of each patient and
                            makes sure symptoms such as pain, bleeding, and discomfort are
                            cured. In order to improve his patients’ quality of life and reduce their
                            suffering due to piles, Dr. Chandra combines medication, minimally
                            invasive surgery, changes in lifestyle, and, where necessary, surgical
                            treatments. Have your trust in Dr. Shambhav Chandra is a best doctor
                            for piles for personalized therapy and permanent piling relief. Swollen
                            blood vessels in the rectum or anus can cause piles, also known as
                            hemorrhoids, to hurt and throb. Dr. Shambhav Chandra provides
                            efficient treatment options specific to each affected person. Healing
                            glove is a best hospital for piles treatment in Gurgaon.</p>
                        <div className='bg-[#FB3D9D] py-2 rounded-md px-8 mt-4 lg:w-[300px] xxl:w-[300px]  md:w-[300px]'>
                            <button className='text-[#fff] text-[20px] font-semibold'>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <div className='max-w-6xl flex gap-8 pb-8'>

                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Minimally Invasive  <br/>
                        Techniques</h1>
                        <p className='text-sm font-medium text-center pt-1'>With the goal to effectively treat the 
sinus tract while minimizing discomfort 
and reducing recovery times for 
patients, Dr. Chandra uses advanced 
minimally invasive treatments like pit 
picking or laser therapy</p>

                    </div>
                    <div className='bg-[#2490EB] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Comprehensive<br /> Care 
                            Methods</h1>
                        <p className='text-sm font-medium text-center pt-1'>To help to prevent recurrence and 
encourage recovery, Dr. Chandra offers 
personalized treatment strategies that 
are customized for the particular 
requirements of each patient. These 
services include issues like hygiene, 
wound care, and lifestyle adjustments</p>

                    </div>
                    <div className='bg-[#2A3986] shadow rounded-md text-white px-3 py-8 w-1/3'>
                        <h1 className='text-2xl text-center font-semibold'>Patient Support
                  <br />  and        Education
                           </h1>
                        <p className='text-sm font-medium text-center pt-1'>Dr. Chandra sets a high priority on 
information for patients, and making 
sure people are aware of their disease, 
available treatments, and the needs for 
post-procedural care. He provides 
patients with constant assistance and 
direction so they may effectively manage 
their health</p>


                    </div>
                </div>
            </div>

        </>
    )
}