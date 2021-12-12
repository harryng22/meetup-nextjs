import React, { useEffect, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747",
    address: "123 abc, some city",
    description: "This is the 1st meetup"
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif",
    address: "123 abc, some city",
    description: "This is the 2nd meetup"
  }
]

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_DATA
    },
    revalidate: 10
  }
}

export default HomePage
