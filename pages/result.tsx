import NotificationComponent from "../components/Notification";
import SuccessComponent from "../components/Success";

const Results = (data: any) => {
  return (
    <>
      <pre>
        {data.props.data.trackingID ? (
          <>
            <SuccessComponent trackingId={data.props.data.trackingID} />
          </>
        ) : (
          <NotificationComponent content="No order available." color="red" />
        )}
      </pre>
    </>
  );
};

export default Results;

export async function getServerSideProps(context: any) {
  return {
    props: {
      props: { data: context.query },
    },
  };
}
