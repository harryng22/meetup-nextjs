import MeetupDetail from "../../components/meetups/MeeupDetail"

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  )
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId

  console.log("meetupId", meetupId)

  return {
    props: {
      meetupData: {
        image:
          "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747",
        id: meetupId,
        title: "This is 1st meetup",
        address: "Some address",
        description: "First meetup"
      }
    },
    revalidate: 60 * 60 * 24 // 1 day in second
  }
}
export default MeetupDetailPage
