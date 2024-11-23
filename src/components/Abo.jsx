import React from 'react';
const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-900 text-white">

      {/* Section 1: About the Platform */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-4 sm:px-6 lg:px-8 gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://img.freepik.com/free-photo/students-working-study-group_23-2149281144.jpg?t=st=1732377667~exp=1732381267~hmac=1186a66c22d53132fdd7bf23ae7645184eec73d30c39a83a649c4b0f21146343&w=740" 
            alt="About the Platform"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-100 leading-tight">
            About Our Platform
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Our platform offers a variety of online courses that cater to a wide range of learners. Whether you want to enhance your skills, explore new topics, or improve your career, our courses are designed to help you succeed.
          </p>
        </div>
      </div>

      {/* Section 2: Our Services (Dark Gray Background) */}
      <div className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Our Services</h3>
          <p className="mt-4 text-lg text-gray-300">
            We provide a variety of services to ensure that learning is an engaging and valuable experience for everyone.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800">Expert-Led Courses</h4>
            <p className="mt-4 text-gray-600">
              Learn from industry professionals who bring real-world experience and knowledge to each course.
            </p>
          </div>
          {/* Service 2 */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800">Interactive Learning</h4>
            <p className="mt-4 text-gray-600">
              Participate in quizzes, discussions, and projects to reinforce your knowledge and skills.
            </p>
          </div>
          {/* Service 3 */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800">Flexible Scheduling</h4>
            <p className="mt-4 text-gray-600">
              Study at your own pace with flexible courses that you can start at any time and finish whenever you're ready.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Contact Us */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-100">Contact Us</h3>
          <p className="mt-4 text-lg text-gray-300">We would love to hear from you! Reach out to us with any questions or feedback.</p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="mailto:contact@yourwebsite.com" className="text-indigo-600 hover:text-indigo-800">Email Us</a>
            <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-800">Call Us</a>
          </div>
        </div>
      </div>

      {/* Section 4: Our Founders */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-100">Meet Our Founders</h3>
          <p className="mt-4 text-lg text-gray-300">Our founders are passionate about bringing quality education to everyone. Here's a bit more about them.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Founder 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-48 object-cover rounded-lg" src="https://img.freepik.com/free-photo/adult-serious-businessman-looking-camera_23-2148113003.jpg?t=st=1732377898~exp=1732381498~hmac=332015bec72827b22faf05f823c6be620839b266336879a57649e9096ac50f91&w=740" alt="John Doe" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Lokesh Rahul</h4>
            <p className="text-gray-600">Co-Founder & CEO</p>
            <p className="mt-4 text-gray-600">
              L. Rahul has over 10 years of experience in the education and technology sectors and is committed to making learning more accessible.
            </p>
          </div>
          {/* Founder 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-48 object-cover rounded-lg" src="https://img.freepik.com/premium-photo/handsome-young-man-25-30-years-old-suit_131087-651.jpg?w=740" alt="Jane Smith" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Virat Dhoni</h4>
            <p className="text-gray-600">Co-Founder & CTO</p>
            <p className="mt-4 text-gray-600">
              VD brings a wealth of experience in technology and product development to ensure our platform remains innovative and user-friendly.
            </p>
          </div>
          {/* Founder 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-48 object-cover rounded-lg" src="https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg?t=st=1732377755~exp=1732381355~hmac=a10ea8e9c6f0c3d86ab814d19931e66900cd4b09d73512bbb42e2e4cde8b22ad&w=740" alt="Alex Brown" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Roman Sharma</h4>
            <p className="text-gray-600">Co-Founder & COO</p>
            <p className="mt-4 text-gray-600">
              Roman ensures the smooth operation of our platform, with a focus on user experience and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      
    
    </div>
  );
}

export default AboutUs;
