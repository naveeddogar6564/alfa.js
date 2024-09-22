import React from 'react'

const page = () => {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-30 h-30 nonrounded-full mx-auto" src="/Flag.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium ">
      Welcome to our page dedicated to the rich tapestry of Pakistan's culture, politics, and food. Explore the vibrant traditions, arts, and music that define Pakistani culture, from its diverse ethnic groups to its colorful festivals. Stay informed about the dynamic political landscape, with insights into the major parties, key issues, and historical influences shaping governance. Discover the flavors of Pakistan’s culinary heritage, from aromatic biryani to mouthwatering kebabs, and the cultural significance of food in everyday life. This page offers a comprehensive guide to understanding the heart and soul of Pakistan.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      Naveed Sarwar Dogar
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Student Generative Ai course
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page
